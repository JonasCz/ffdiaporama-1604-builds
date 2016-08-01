/* ======================================================================
    This file is part of ffDiaporama
    ffDiaporama is a tools to make diaporama as video
    Copyright (C) 2011-2014 Dominique Levray <domledom@laposte.net>

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
   ====================================================================== */

#include "DlgGMapsGeneration.h"
#include "ui_DlgGMapsGeneration.h"
#include "engine/cLocation.h"

#include <QUrl>

#define MAXRETRY    10

//====================================================================================================================

DlgGMapsGeneration::DlgGMapsGeneration(cBrushDefinition *CurrentBrush,cGMapsMap *MediaObject,bool DuplicateRessource,cApplicationConfig *ApplicationConfig,QWidget *parent):QCustomDialog(ApplicationConfig,parent),ui(new Ui::DlgGMapsGeneration) {
    this->CurrentBrush      =CurrentBrush;
    this->MediaObject       =MediaObject;
    this->DuplicateRessource=DuplicateRessource;
    RetryCount              =0;
    GetMapNetReply          =NULL;
    NetworkAccessManager    =ApplicationConfig->GetNetworkAccessManager(this);

    ui->setupUi(this);
    CancelBt=ui->CancelBt;
}

//====================================================================================================================

DlgGMapsGeneration::~DlgGMapsGeneration() {
    delete ui;
    if (NetworkAccessManager) NetworkAccessManager->deleteLater();
}

//====================================================================================================================

void DlgGMapsGeneration::DoRejet() {
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    RetryCount=MAXRETRY;
    if (DuplicateRessource)
        MediaObject->RessourceKey=-1;
    ApplicationConfig->SlideThumbsTable->SetThumbs(&MediaObject->RessourceKey,DestMap);
    QApplication::restoreOverrideCursor();
}

//====================================================================================================================
void DlgGMapsGeneration::DoInitDialog() {
    MediaObject->IsValide=true;
    MediaObject->IsMapValide=true;
    // resolve variables locations by transfering their GPS position to the locations of the List location
    for (int i=0;i<MediaObject->List.count();i++) if (((cLocation *)MediaObject->List[i])->LocationType!=cLocation::FREE) {
        cLocation *Location=((cLocation *)MediaObject->List[i]);
        cLocation *RealLoc=NULL;

        CurrentBrush->GetRealLocation((void **)&Location,(void **)&RealLoc);
        if (RealLoc) {
            Location->GPS_cx         =RealLoc->GPS_cx;
            Location->GPS_cy         =RealLoc->GPS_cy;
            Location->Name           =RealLoc->Name;
            Location->FriendlyAddress=RealLoc->FriendlyAddress;
        } else MediaObject->IsMapValide=false;
    }
    if (!MediaObject->IsMapValide) MediaObject->RequestList.clear();
    if (MediaObject->RequestList.isEmpty()) {
        // create new empty image
        DestMap=MediaObject->CreateDefaultImage((cDiaporama *)CurrentBrush->GetDiaporama());

        // Create sections to be computed
        if (MediaObject->IsMapValide) MediaObject->ComputeSectionList();

    } else ApplicationConfig->SlideThumbsTable->GetThumbs(&MediaObject->RessourceKey,&DestMap);
    QSize IMSize=MediaObject->GetCurrentImageSize();
    NbrSection  =MediaObject->ComputeNbrSection(IMSize.width(),cGMapsMap::SectionWith)*MediaObject->ComputeNbrSection(IMSize.height(),cGMapsMap::SectionHeight);
    ui->ProgressBar->setRange(0,NbrSection-1);
    ui->ProgressBar->setValue(NbrSection-MediaObject->RequestList.count());
    QTimer::singleShot(LATENCY,this,SLOT(RequestGoogle()));
}

//====================================================================================================================

void DlgGMapsGeneration::httpGetMapReadyRead() {
    if (GetMapNetReply) ReceiveMap.append(GetMapNetReply->readAll());
}

//====================================================================================================================

void DlgGMapsGeneration::httpGetMapFinished() {
    if (!GetMapNetReply) return;
    QVariant redirectionTarget = GetMapNetReply->attribute(QNetworkRequest::RedirectionTargetAttribute);
    if (GetMapNetReply->error()) {
        // Maybe it's because we have request too many time
        if (RetryCount<MAXRETRY) {
            if (GetMapNetReply->errorString().endsWith("Forbidden")) {
                RetryCount=MAXRETRY;
                NoMoreRetry();
            } else {
                ToLog(LOGMSG_WARNING,QApplication::translate("DlgGMapsGeneration","Download failed: %1. => wait 1sec and retry").arg(GetMapNetReply->errorString()));
                QTimer::singleShot(1000,this,SLOT(RequestGoogle()));     // Retry
                RetryCount++;
            }
        } else NoMoreRetry();
    } else if (!redirectionTarget.isNull()) {
        //QUrl newUrl = url.resolved(redirectionTarget.toUrl());
        //url = newUrl;
        //GetMapNetReply->deleteLater();
        //startRequest(url);
    } else {
        QImage RecImage;
        if (!RecImage.loadFromData(ReceiveMap,"PNG")) {
            if (RetryCount<MAXRETRY) {
                ToLog(LOGMSG_WARNING,QApplication::translate("DlgGMapsGeneration","Error decoding image received from Google Maps"));
                QTimer::singleShot(LATENCY,this,SLOT(RequestGoogle()));     // Retry
                RetryCount++;
            } else NoMoreRetry();
        } else {
            QRectF   RectF=MediaObject->RequestList[0].Rect;
            QPainter Painter;
            Painter.begin(&DestMap);
            Painter.drawImage(RectF,RecImage,QRectF((640-RectF.width())/2,(640-RectF.height())/2,RectF.width(),RectF.height()));
            Painter.end();
            MediaObject->RequestList.removeFirst();
            ui->ProgressBar->setValue(NbrSection-MediaObject->RequestList.count());
        }
        QTimer::singleShot(LATENCY,this,SLOT(RequestGoogle()));     // Next part
    }
    GetMapNetReply->deleteLater();
    GetMapNetReply = 0;
}

//====================================================================================================================
// Function used when gmaps don't want to reply us
void DlgGMapsGeneration::NoMoreRetry() {
    CustomMessageBox(this,QMessageBox::Critical,APPLICATION_NAME,
                     QApplication::translate("DlgGMapsGeneration","Google stop responding\nMay be you have reach the maximum number of request allowed.\nPlease retry in one hour."),
                     QMessageBox::Ok);
}

//====================================================================================================================

void DlgGMapsGeneration::RequestGoogle() {
    if ((RetryCount>=MAXRETRY)||(MediaObject->RequestList.isEmpty())) {
        QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
        if (MediaObject->RequestList.isEmpty()) ui->StatusBar->setText("");
            else                                ui->StatusBar->setText(QApplication::translate("DlgGMapsGeneration","%1 pending section(s) should be retrieve later").arg(MediaObject->RequestList.count()));
        // update ressource in database (keep actual map even if sections pending)
        if (DuplicateRessource)
            MediaObject->RessourceKey=-1;
        ApplicationConfig->SlideThumbsTable->SetThumbs(&MediaObject->RessourceKey,DestMap);
        QApplication::restoreOverrideCursor();
        accept();
        return;
    }
    if (!MediaObject->RequestList.isEmpty()) ui->StatusBar->setText(QApplication::translate("DlgGMapsGeneration","%1 pending section(s) to retrieve from Google Maps").arg(MediaObject->RequestList.count()));
    ReceiveMap.clear();
    GetMapNetReply=NetworkAccessManager->get(QNetworkRequest(QUrl(MediaObject->RequestList[0].GoogleRequest)));
    connect(GetMapNetReply,SIGNAL(finished()), this,SLOT(httpGetMapFinished()));
    connect(GetMapNetReply,SIGNAL(readyRead()),this,SLOT(httpGetMapReadyRead()));
}
