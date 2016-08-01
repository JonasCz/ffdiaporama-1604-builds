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

#include "DlgChapter.h"
#include "ui_DlgChapter.h"
#include "engine/cLocation.h"
#include "DlgGMapsLocation/DlgGMapsLocation.h"

DlgChapter::DlgChapter(cDiaporamaObject *DiaporamaObject,cApplicationConfig *ApplicationConfig,QWidget *parent):
    QCustomDialog(ApplicationConfig,parent),ui(new Ui::DlgChapter) {

    ui->setupUi(this);
    OkBt        =ui->OKBT;
    CancelBt    =ui->CancelBt;
    HelpBt      =ui->HelpBt;
    HelpFile    ="0105";
    CurrentSlide=DiaporamaObject;
    IsLocationChanged=false;
}

//====================================================================================================================

DlgChapter::~DlgChapter() {
    delete ui;
}

//====================================================================================================================
// Initialise dialog

void DlgChapter::DoInitDialog() {
    ui->LocationFrame->setAutoFillBackground(true);
    ui->OverrideProjectLocationCB->setChecked(CurrentSlide->ChapterLocation!=NULL);

    ui->ChapterEventDateED->setDisplayFormat(ApplicationConfig->ShortDateFormat);
    ui->ChapterNameED->setText(CurrentSlide->ChapterName);
    ui->ChapterEventDateED->setDate(CurrentSlide->OverrideProjectEventDate?CurrentSlide->ChapterEventDate:CurrentSlide->Parent->ProjectInfo->EventDate);
    ui->ChapterDateED->setPlainText(CurrentSlide->OverrideProjectEventDate?CurrentSlide->OverrideChapterLongDate?CurrentSlide->ChapterLongDate:FormatLongDate(CurrentSlide->ChapterEventDate):CurrentSlide->Parent->ProjectInfo->LongDate);

    RefreshControl();

    connect(ui->StartNewChapterCB,        SIGNAL(stateChanged(int)),this,SLOT(StartNewChapterCBChanged(int)));
    connect(ui->OverrideProjectDateCB,    SIGNAL(stateChanged(int)),this,SLOT(OverrideProjectDateChanged(int)));
    connect(ui->OverrideDateCB,           SIGNAL(stateChanged(int)),this,SLOT(OverrideDateCBChanged(int)));
    connect(ui->ChapterEventDateED,       SIGNAL(dateChanged(const QDate &)),this,SLOT(ChapterEventDateChanged(const QDate &)));
    connect(ui->LocationBT,               SIGNAL(pressed()),this,SLOT(SelectLocation()));
    connect(ui->ClearLocationBT,          SIGNAL(pressed()),this,SLOT(ClearLocation()));
    connect(ui->OverrideProjectLocationCB,SIGNAL(stateChanged(int)),this,SLOT(OverrideLocationCBChanged(int)));
}

//====================================================================================================================
// RefreshControl

void DlgChapter::RefreshControl() {
    ui->StartNewChapterCB->setChecked(CurrentSlide->StartNewChapter);
    ui->OverrideProjectDateCB->setChecked(CurrentSlide->OverrideProjectEventDate);
    ui->OverrideDateCB->setChecked(CurrentSlide->OverrideChapterLongDate);

    ui->ChapterNameLabel->setEnabled(CurrentSlide->StartNewChapter);
    ui->ChapterNameED->setEnabled(CurrentSlide->StartNewChapter);

    ui->OverrideProjectDateCB->setEnabled(CurrentSlide->StartNewChapter);
    ui->ChapterEventDateLabel->setEnabled(CurrentSlide->StartNewChapter && CurrentSlide->OverrideProjectEventDate);
    ui->ChapterEventDateED->setEnabled(CurrentSlide->StartNewChapter && CurrentSlide->OverrideProjectEventDate);

    ui->OverrideDateCB->setEnabled(CurrentSlide->StartNewChapter && CurrentSlide->OverrideProjectEventDate);
    ui->OverrideDateLabel->setEnabled(CurrentSlide->StartNewChapter && CurrentSlide->OverrideProjectEventDate);
    ui->ChapterDateED->setEnabled(CurrentSlide->StartNewChapter && CurrentSlide->OverrideProjectEventDate && CurrentSlide->OverrideChapterLongDate);

    ui->OverrideProjectLocationCB->setEnabled(CurrentSlide->StartNewChapter);
    ui->LocationLabel->setEnabled(CurrentSlide->StartNewChapter && ui->OverrideProjectLocationCB->isChecked());
    ui->LocationFrame->setEnabled(CurrentSlide->StartNewChapter && ui->OverrideProjectLocationCB->isChecked());
    ui->LocationBT->setEnabled(CurrentSlide->StartNewChapter && ui->OverrideProjectLocationCB->isChecked());
    ui->ClearLocationBT->setEnabled(CurrentSlide->StartNewChapter && ui->OverrideProjectLocationCB->isChecked());

    if (CurrentSlide->ChapterLocation) {
        ui->Location->setText(QString("%1 (%2)").arg(((cLocation *)CurrentSlide->ChapterLocation)->Name).arg(((cLocation *)CurrentSlide->ChapterLocation)->FriendlyAddress));
        ui->LocationIcon->setPixmap(QPixmap().fromImage(((cLocation *)CurrentSlide->ChapterLocation)->GetThumb(16)));
    } else {
        ui->Location->setText("");
        ui->LocationIcon->setPixmap(QPixmap());
    }
    if (ui->LocationFrame->isEnabled()) ui->LocationFrame->setStyleSheet("QFrame {background-color: white;border: 1px solid darkgray;}");
        else ui->LocationFrame->setStyleSheet("QFrame {border: 1px solid darkgray;}");
}

//====================================================================================================================
// Initiale Undo

void DlgChapter::PrepareGlobalUndo() {
    // Save object before modification for cancel button
    Undo=new QDomDocument(APPLICATION_NAME);
    QDomElement root=Undo->createElement("UNDO-DLG");                                               // Create xml document and root
    CurrentSlide->SaveToXML(root,"UNDO-DLG-OBJECT",CurrentSlide->Parent->ProjectFileName,true,NULL,NULL,false);     // Save object
    Undo->appendChild(root);                                                                        // Add object to xml document
}

//====================================================================================================================
// Apply Undo : call when user click on Cancel button

void DlgChapter::DoGlobalUndo() {
    QDomElement root=Undo->documentElement();
    if (root.tagName()=="UNDO-DLG") CurrentSlide->LoadFromXML(root,"UNDO-DLG-OBJECT","",NULL,NULL,false);
}

//====================================================================================================================

bool DlgChapter::DoAccept() {
    CurrentSlide->StartNewChapter           =ui->StartNewChapterCB->isChecked();

    CurrentSlide->OverrideProjectEventDate  =CurrentSlide->StartNewChapter?ui->OverrideProjectDateCB->isChecked():false;
    CurrentSlide->OverrideChapterLongDate   =CurrentSlide->StartNewChapter?ui->OverrideDateCB->isChecked():false;

    CurrentSlide->ChapterName               =ui->ChapterNameED->text();
    CurrentSlide->ChapterEventDate          =CurrentSlide->OverrideProjectEventDate?ui->ChapterEventDateED->date():CurrentSlide->Parent->ProjectInfo->EventDate;
    CurrentSlide->ChapterLongDate           =CurrentSlide->OverrideProjectEventDate?CurrentSlide->OverrideChapterLongDate?ui->ChapterDateED->toPlainText():FormatLongDate(CurrentSlide->ChapterEventDate):CurrentSlide->Parent->ProjectInfo->LongDate;

    if (IsLocationChanged) CurrentSlide->Parent->UpdateGMapsObject();

    return true;
}

//====================================================================================================================

void DlgChapter::StartNewChapterCBChanged(int) {
    CurrentSlide->StartNewChapter=ui->StartNewChapterCB->isChecked();
    RefreshControl();
}

//====================================================================================================================

void DlgChapter::OverrideProjectDateChanged(int) {
    CurrentSlide->OverrideProjectEventDate=ui->OverrideProjectDateCB->isChecked();
    if (!CurrentSlide->OverrideProjectEventDate) {
        ui->ChapterEventDateED->setDate(CurrentSlide->Parent->ProjectInfo->EventDate);
        CurrentSlide->ChapterLongDate=FormatLongDate(CurrentSlide->Parent->ProjectInfo->EventDate);
        ui->ChapterDateED->setPlainText(CurrentSlide->ChapterLongDate);
    }
    RefreshControl();
}

//====================================================================================================================

void DlgChapter::OverrideDateCBChanged(int) {
    CurrentSlide->OverrideChapterLongDate=ui->OverrideDateCB->isChecked();
    if (!CurrentSlide->OverrideChapterLongDate) {
        CurrentSlide->ChapterLongDate=FormatLongDate(CurrentSlide->ChapterEventDate);
        ui->ChapterDateED->setPlainText(CurrentSlide->ChapterLongDate);
    }
    RefreshControl();
}

//====================================================================================================================

void DlgChapter::ChapterEventDateChanged(const QDate &NewDate) {
    CurrentSlide->ChapterEventDate=NewDate;
    if (!CurrentSlide->OverrideChapterLongDate) {
        CurrentSlide->ChapterLongDate=CurrentSlide->OverrideProjectEventDate?FormatLongDate(CurrentSlide->ChapterEventDate):CurrentSlide->Parent->ProjectInfo->LongDate;
        ui->ChapterDateED->setPlainText(CurrentSlide->ChapterLongDate);
    }
}

//====================================================================================================================
#define FAVACTIONTYPE_ACTIONTYPE    0xF000
#define FAVACTIONTYPE_EDIT          0x1000
#define FAVACTIONTYPE_SELECT        0x8000

void DlgChapter::SelectLocation() {
    QMenu       *ContextMenu=new QMenu(this);
    bool        AddSep=false;

    QAction     *Add=CreateMenuAction(QIcon(":/img/gmap_add.png"),
                                      CurrentSlide->ChapterLocation?QApplication::translate("MainWindow","Edit this location"):QApplication::translate("MainWindow","Define a location"),
                                      FAVACTIONTYPE_EDIT,false,false,this);
    ContextMenu->addAction(Add);

    QSqlQuery   Query(ApplicationConfig->Database->db);
    QString     QueryString("SELECT Key,Name,FAddress,Thumbnail FROM Location ORDER BY LOWER(Name)");
    Query.prepare(QueryString);
    if (!Query.exec()) DisplayLastSQLError(&Query); else while (Query.next()) {
        bool      Ret;
        qlonglong Key=Query.value(0).toLongLong(&Ret);
        if (Ret) {
            if (!AddSep) {
                ContextMenu->addSeparator();
                AddSep=true;
            }
            QString     Name   =Query.value(1).toString();
            QString     Address=Query.value(2).toString();
            QByteArray  Data   =Query.value(3).toByteArray();
            QImage      Thumb; Thumb.loadFromData(Data);
            bool        IsCurrent=(Key==(CurrentSlide->ChapterLocation?((cLocation *)CurrentSlide->ChapterLocation)->FavKey:-1));
            QAction *Act=CreateMenuAction(QIcon(QPixmap().fromImage(Thumb)),QString("%1 (%2)").arg(Name).arg(Address),FAVACTIONTYPE_SELECT+Key,true,IsCurrent,this);
            ContextMenu->addAction(Act);
        }
    }

    QAction *Action=ContextMenu->exec(QCursor::pos());
    if (Action) {
        int ActionType=Action->data().toInt() & FAVACTIONTYPE_ACTIONTYPE;
        if (ActionType==FAVACTIONTYPE_EDIT) {
            cLocation *PrevLocation=(cLocation *)CurrentSlide->ChapterLocation;
            if (!((cLocation *)CurrentSlide->ChapterLocation)) CurrentSlide->ChapterLocation=new cLocation(ApplicationConfig);
            DlgGMapsLocation Dlg((cLocation *)CurrentSlide->ChapterLocation,ApplicationConfig,this);
            Dlg.InitDialog();
            if ((Dlg.exec()!=0)&&(!PrevLocation)) {
                delete (cLocation *)CurrentSlide->ChapterLocation;
                CurrentSlide->ChapterLocation=NULL;
            }
        } else if (Action->text()!="") {
            qlonglong Key=Action->data().toInt() & ~FAVACTIONTYPE_ACTIONTYPE;
            if (!CurrentSlide->ChapterLocation) CurrentSlide->ChapterLocation=new cLocation(ApplicationConfig);
            ((cLocation *)CurrentSlide->ChapterLocation)->LoadFromFavorite(Key);
        }
    }
    ui->LocationBT->setDown(false);
    if (CurrentSlide->ChapterLocation) {
        ui->Location->setText(QString("%1 (%2)").arg(((cLocation *)CurrentSlide->ChapterLocation)->Name).arg(((cLocation *)CurrentSlide->ChapterLocation)->FriendlyAddress));
        ui->LocationIcon->setPixmap(QPixmap().fromImage(((cLocation *)CurrentSlide->ChapterLocation)->GetThumb(16)));
    } else {
        ui->Location->setText("");
        ui->LocationIcon->setPixmap(QPixmap());
    }
    IsLocationChanged=true;
}

//====================================================================================================================

void DlgChapter::ClearLocation() {
    if (CurrentSlide->ChapterLocation) delete ((cLocation *)CurrentSlide->ChapterLocation);
    CurrentSlide->ChapterLocation=NULL;
    ui->Location->setText("");
    ui->LocationIcon->setPixmap(QPixmap());
    IsLocationChanged=true;
}

//====================================================================================================================

void DlgChapter::OverrideLocationCBChanged(int) {
    if ((!ui->OverrideProjectLocationCB->isChecked())&&(CurrentSlide->ChapterLocation)) {
        delete ((cLocation *)CurrentSlide->ChapterLocation);
        CurrentSlide->ChapterLocation=NULL;
        ui->Location->setText("");
        ui->LocationIcon->setPixmap(QPixmap());
    }
    RefreshControl();
    IsLocationChanged=true;
}
