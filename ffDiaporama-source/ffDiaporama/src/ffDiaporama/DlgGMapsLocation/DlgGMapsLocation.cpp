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

#include "DlgGMapsLocation.h"
#include "ui_DlgGMapsLocation.h"
#include "DlgFileExplorer/DlgFileExplorer.h"
#include "DlgImage/DlgImageCorrection.h"
#include "engine/cLocation.h"

#include <QUrl>

#define MAXRETRY    10
#define MAPSIZE     620

//====================================================================================================================

cCustomMapWidget::cCustomMapWidget(QWidget *Parent,Qt::WindowFlags f):QLabel(Parent,f) {
    setMinimumSize(200,200);
    setMaximumSize(MAPSIZE,MAPSIZE);
    Parent->setMaximumSize(MAPSIZE,MAPSIZE);
    setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Expanding);
}

void cCustomMapWidget::mouseReleaseEvent(QMouseEvent *ev) {
    QLabel::mouseReleaseEvent(ev);
    if (ev->button()==Qt::LeftButton) {
        X=ev->x();
        Y=ev->y();
        emit ClickOnMap();
    }
}

//********************************************************************************************************************

DlgGMapsLocation::DlgGMapsLocation(cLocation *Location,cApplicationConfig *ApplicationConfig,QWidget *parent):QCustomDialog(ApplicationConfig,parent),ui(new Ui::DlgGMapsLocation) {
    ui->setupUi(this);
    OkBt                =ui->OKBT;
    CancelBt            =ui->CancelBt;
    HelpBt              =ui->HelpBt;
    HelpFile            ="0123";
    this->Location      =Location;
    PrevRessourceKey    =Location->ThumbnailResKey;
    StopMaj             =false;
    NetworkAccessManager=ApplicationConfig->GetNetworkAccessManager(this);
}

//============================================================================================================================

DlgGMapsLocation::~DlgGMapsLocation() {
    delete ui;
    if (NetworkAccessManager) NetworkAccessManager->deleteLater();
}

//============================================================================================================================

void DlgGMapsLocation::DoInitDialog() {
    ui->actionSelectAnotherFile->setIconVisibleInMenu(true);
    ui->actionEditCurrentImage->setIconVisibleInMenu(true);

    if (!Location->Address.isEmpty()) {
        ui->AdresseCB->addItem(Location->Address,QVariant(QPointF(Location->GPS_cx,Location->GPS_cy)));
        ui->AdresseCB->setCurrentIndex(0);
        QTimer::singleShot(LATENCY,this,SLOT(RefreshMap()));
    }
    if (!Location->Name.isEmpty())              ui->NameED->setText(Location->Name);
    if (!Location->FriendlyAddress.isEmpty())   ui->AddressNameED->setText(Location->FriendlyAddress);
    GetLatLngAtWork=GetMapAtWork=GetAddressAtWork=NoMap=false;
    GetLatLngNetReply=GetMapNetReply=GetAddressNetReply=NULL;
    RetryCount=0;

    ui->IconBT->setIcon(QIcon(QPixmap().fromImage(Location->GetThumb(64))));
    ui->OKBT->setEnabled(!Location->Address.isEmpty() && !Location->Name.isEmpty() && (ui->AdresseCB->currentIndex()!=-1));

    // Add CustomMapWidget
    MapWidget=new cCustomMapWidget(ui->Map);
    QVBoxLayout *Layout=new QVBoxLayout(ui->Map);
    Layout->setSpacing(0);
    Layout->setContentsMargins(0, 0, 0, 0);
    Layout->addWidget(MapWidget);

    // Other
    ui->ZoomSlider->setValue(Location->ZoomLevel);
    ui->ZoomDown->setEnabled(false);
    ui->ZoomUp->setEnabled(false);
    ui->ZoomSlider->setEnabled(false);
    connect(ui->AdresseCB,SIGNAL(editTextChanged(QString)),this,SLOT(AddressChanged(QString)));
    connect(ui->AdresseCB,SIGNAL(currentIndexChanged(int)),this,SLOT(AddressChanged(int)));
    connect(ui->AddressNameED,SIGNAL(textChanged(QString)),this,SLOT(AddressNameChanged(QString)));
    connect(ui->NameED,SIGNAL(textChanged(QString)),this,SLOT(NameChanged(QString)));
    connect(MapWidget,SIGNAL(ClickOnMap()),this,SLOT(ClickOnMap()));
    connect(ui->ZoomSlider,SIGNAL(valueChanged(int)),this,SLOT(ZoomChanged(int)));
    connect(ui->ZoomDown,SIGNAL(pressed()),this,SLOT(ZoomDown()));
    connect(ui->ZoomUp,SIGNAL(pressed()),this,SLOT(ZoomUp()));
    connect(ui->ZoomUp,SIGNAL(pressed()),this,SLOT(ZoomUp()));
    connect(ui->IconBT,SIGNAL(pressed()),this,SLOT(SelectIcon()));
    connect(ui->EditIconBT,SIGNAL(pressed()),this,SLOT(SelectIcon()));
    connect(ui->ClearIconBT,SIGNAL(pressed()),this,SLOT(ClearIcon()));
    connect(ui->FavoriteBT,SIGNAL(pressed()),this,SLOT(Favorite()));
}

//============================================================================================================================
// Save object before modification for cancel button

void DlgGMapsLocation::PrepareGlobalUndo() {
    Undo=new QDomDocument(APPLICATION_NAME);
    QDomElement root=Undo->createElement("UNDO-DLG");                       // Create xml document and root
    Location->SaveToXML(&root,"UNDO-DLG-OBJECT","",true,NULL,NULL,false);   // Save object
    Undo->appendChild(root);                                                // Add object to xml document
}

//============================================================================================================================
// Apply Undo : call when user click on Cancel button

void DlgGMapsLocation::DoGlobalUndo() {
    QDomElement root=Undo->documentElement();
    if (root.tagName()=="UNDO-DLG")
        Location->LoadFromXML(&root,"UNDO-DLG-OBJECT","",NULL,NULL,NULL,false);
}

//============================================================================================================================

void DlgGMapsLocation::resizeEvent(QResizeEvent *) {
    RefreshMap();
}

//====================================================================================================================

bool DlgGMapsLocation::DoAccept() {
    return true;
}

void DlgGMapsLocation::DoRejet() {
    QApplication::restoreOverrideCursor();
}

//============================================================================================================================

void DlgGMapsLocation::NameChanged(QString NewText) {
    if (StopMaj) return;
    Location->Name=NewText;
    ui->OKBT->setEnabled(!Location->Address.isEmpty() && !Location->Name.isEmpty() && (ui->AdresseCB->currentIndex()!=-1));
}

void DlgGMapsLocation::AddressNameChanged(QString NewText) {
    if (StopMaj) return;
    Location->FriendlyAddress=NewText;
    ui->OKBT->setEnabled(!Location->Address.isEmpty() && !Location->Name.isEmpty() && (ui->AdresseCB->currentIndex()!=-1));
}

void DlgGMapsLocation::AddressChanged(QString NewText) {
    if (StopMaj) return;
    Location->Address=NewText;
    Location->FriendlyAddress=NewText;
    StopMaj=true;
    ui->AddressNameED->setText(NewText);
    StopMaj=false;
    ui->OKBT->setEnabled(!Location->Address.isEmpty() && !Location->Name.isEmpty() && (ui->AdresseCB->currentIndex()!=-1));
}

//====================================================================================================================
// Utility function used to retrieve a value from a xml node
QString DlgGMapsLocation::GetNodeValue(QDomElement Node,QString NodeName) {
    QStringList NodeList=NodeName.split("##");
    while (NodeList.count()>1) {
        if ((Node.elementsByTagName(NodeList[0]).length()>0)&&(Node.elementsByTagName(NodeList[0]).item(0).isElement())) Node=Node.elementsByTagName(NodeList[0]).item(0).toElement();
            else return "";
        NodeList.removeFirst();
    }
    if ((Node.elementsByTagName(NodeList[0]).length()>0)&&(Node.elementsByTagName(NodeList[0]).item(0).isElement())&&(Node.elementsByTagName(NodeList[0]).item(0).toElement().hasChildNodes()))
        return Node.elementsByTagName(NodeList[0]).item(0).toElement().childNodes().at(0).nodeValue();
    else return "";
}

//====================================================================================================================
// Function used when gmaps send data on a get geocode (coordinates for Address) request
void DlgGMapsLocation::NoMoreRetry() {
    CustomMessageBox(this,QMessageBox::Critical,APPLICATION_NAME,
                     QApplication::translate("DlgGMapsLocation","Google stop responding\nMay be you have reach the maximum number of request allowed.\nPlease retry in one hour."),
                     QMessageBox::Ok);
}

//====================================================================================================================
// Function used when gmaps send data on a get geocode (coordinates for Address) request
void DlgGMapsLocation::httpGetLatLngReadyRead() {
    if (GetLatLngNetReply) ReceiveLatLng=ReceiveLatLng+GetLatLngNetReply->readAll();
}

// Function used when get geocode (coordinates for Address) request end
void DlgGMapsLocation::httpGetLatLngFinished() {
    if (!GetLatLngNetReply) return;
    GetLatLngAtWork=false;
    QApplication::restoreOverrideCursor();
    QVariant redirectionTarget = GetLatLngNetReply->attribute(QNetworkRequest::RedirectionTargetAttribute);
    if (GetLatLngNetReply->error()) {
        // Address not found !
        ToLog(LOGMSG_WARNING,QApplication::translate("DlgGMapsLocation","Incorect addres ? (%1)").arg(GetLatLngNetReply->errorString()));
        CustomMessageBox(this,QMessageBox::Critical,APPLICATION_NAME,
                         QApplication::translate("DlgGMapsLocation","Google said: %1\nAre you sure to have written the address correctly?"),
                         QMessageBox::Ok);
    } else if (!redirectionTarget.isNull()) {
        //QUrl newUrl = url.resolved(redirectionTarget.toUrl());
        //url = newUrl;
        //GetLatLngNetReply->deleteLater();
        //startRequest(url);
    } else {
        QString         errorStr;
        int             errorLine,errorColumn;
        QDomDocument    domDocument;
        NoMap=true;
        StopMaj=true;
        ui->AdresseCB->clear();
        StopMaj=false;
        NoMap=false;
        if (!domDocument.setContent(ReceiveLatLng,true,&errorStr,&errorLine,&errorColumn)) {
            if (RetryCount<MAXRETRY) {
                ToLog(LOGMSG_WARNING,QApplication::translate("DlgGMapsLocation","Error parsing XML"));
                QTimer::singleShot(LATENCY,this,SLOT(UserEnterAddress()));     // Retry
                RetryCount++;
            } else NoMoreRetry();
        } else {
            domDocument.setContent(domDocument.toString(4),true,&errorStr,&errorLine,&errorColumn);
            QDomElement root=domDocument.documentElement();
            if (root.tagName()!="GeocodeResponse") {
                if (RetryCount<MAXRETRY) {
                    ToLog(LOGMSG_WARNING,QApplication::translate("DlgGMapsLocation","Error parsing XML / incorrect root"));
                    QTimer::singleShot(LATENCY,this,SLOT(UserEnterAddress()));     // Retry
                    RetryCount++;
                } else NoMoreRetry();
            } else {
                if (GetNodeValue(root,"status")!="OK") {
                    if (RetryCount<MAXRETRY) {
                        ToLog(LOGMSG_WARNING,QApplication::translate("DlgGMapsLocation","Erreur de parsing XML / status KO"));
                        QTimer::singleShot(LATENCY,this,SLOT(UserEnterAddress()));     // Retry
                        RetryCount++;
                    } else NoMoreRetry();
                } else {
                    StopMaj=true;
                    int Child=1;
                    NoMap=true;
                    while (root.childNodes().at(Child).toElement().nodeName()=="result") {
                        QDomElement Element=root.childNodes().at(Child).toElement();
                        ui->AdresseCB->addItem(GetNodeValue(Element,"formatted_address"),
                                               QVariant(QPointF(GetNodeValue(Element,"geometry##location##lng").toDouble(),
                                                                GetNodeValue(Element,"geometry##location##lat").toDouble()))
                                               );
                        Child++;
                    }
                    ui->AdresseCB->setCurrentIndex(0);
                    NoMap=false;
                    StopMaj=false;
                    Location->FriendlyAddress=ui->AdresseCB->currentText();
                    ui->AddressNameED->setText(Location->FriendlyAddress);
                    AddressChanged(0);
                    ui->AdresseCB->showPopup();
                    //RefreshMap();
                }
            }
        }
    }
    GetLatLngNetReply->deleteLater();
    GetLatLngNetReply = 0;
}

//====================================================================================================================
// Function used when gmaps send data on a get staticmap request
void DlgGMapsLocation::httpGetMapReadyRead() {
    if (GetMapNetReply) ReceiveMap.append(GetMapNetReply->readAll());
}

// Function used when get staticmap request end
void DlgGMapsLocation::httpGetMapFinished() {
    if (!GetMapNetReply) return;
    GetMapAtWork=false;
    QApplication::restoreOverrideCursor();
    QVariant redirectionTarget = GetMapNetReply->attribute(QNetworkRequest::RedirectionTargetAttribute);
    if (GetMapNetReply->error()) {
        if (RetryCount<MAXRETRY) {
            ToLog(LOGMSG_WARNING,QApplication::translate("DlgGMapsLocation","Download failed: %1.").arg(GetMapNetReply->errorString()));
            QTimer::singleShot(LATENCY,this,SLOT(RefreshMap()));     // Retry
            RetryCount++;
        } else NoMoreRetry();
    } else if (!redirectionTarget.isNull()) {
        //QUrl newUrl = url.resolved(redirectionTarget.toUrl());
        //url = newUrl;
        //GetMapNetReply->deleteLater();
        //startRequest(url);
    } else {
        if (!CurrentMap.loadFromData(ReceiveMap,"PNG")) {
            if (RetryCount<MAXRETRY) {
                ToLog(LOGMSG_WARNING,QApplication::translate("DlgGMapsLocation","Error decoding image reveived from Google Maps"));
                QTimer::singleShot(LATENCY,this,SLOT(RefreshMap()));     // Retry
                RetryCount++;
            } else NoMoreRetry();
        } else {
            MapWidget->setPixmap(QPixmap().fromImage(CurrentMap.copy((640-MapWidget->width())/2,(640-MapWidget->height())/2,MapWidget->width(),MapWidget->height())));
            ui->ZoomSlider->setEnabled(true);
            ui->ZoomDown->setEnabled(Location->ZoomLevel>0);
            ui->ZoomUp->setEnabled(Location->ZoomLevel<21);
        }
    }
    GetMapNetReply->deleteLater();
    GetMapNetReply = 0;
}

//====================================================================================================================
// Function used when gmaps send data on a get geocode (coordinates for Address) request
void DlgGMapsLocation::httpGetAddressReadyRead() {
    if (GetAddressNetReply) ReceiveAddress=ReceiveAddress+GetAddressNetReply->readAll();
}

// Function used when get geocode (coordinates for Address) request end
void DlgGMapsLocation::httpGetAddressFinished() {
    if (!GetAddressNetReply) return;
    GetAddressAtWork=false;
    QApplication::restoreOverrideCursor();
    QVariant redirectionTarget = GetAddressNetReply->attribute(QNetworkRequest::RedirectionTargetAttribute);
    if (GetAddressNetReply->error()) {
        if (RetryCount<MAXRETRY) {
            ToLog(LOGMSG_WARNING,QApplication::translate("DlgGMapsLocation","Download failed: %1.").arg(GetAddressNetReply->errorString()));
            QTimer::singleShot(LATENCY,this,SLOT(ClickOnMap()));     // Retry
            RetryCount++;
        } else NoMoreRetry();
    } else if (!redirectionTarget.isNull()) {
        //QUrl newUrl = url.resolved(redirectionTarget.toUrl());
        //url = newUrl;
        //GetAddressNetReply->deleteLater();
        //startRequest(url);
    } else {
        QString         errorStr;
        int             errorLine,errorColumn;
        QDomDocument    domDocument;
        NoMap=true;
        StopMaj=true;
        ui->AdresseCB->clear();
        StopMaj=false;
        NoMap=false;
        if (!domDocument.setContent(ReceiveAddress,true,&errorStr,&errorLine,&errorColumn)) {
            if (RetryCount<MAXRETRY) {
                ToLog(LOGMSG_WARNING,QApplication::translate("DlgGMapsLocation","XML parsing error"));
                QTimer::singleShot(LATENCY,this,SLOT(ClickOnMap()));     // Retry
                RetryCount++;
            } else NoMoreRetry();
        } else {
            domDocument.setContent(domDocument.toString(4),true,&errorStr,&errorLine,&errorColumn);
            QDomElement root=domDocument.documentElement();
            if (root.tagName()!="GeocodeResponse") {
                if (RetryCount<MAXRETRY) {
                    ToLog(LOGMSG_WARNING,QApplication::translate("DlgGMapsLocation","XML parsing error / incorrect root"));
                    QTimer::singleShot(LATENCY,this,SLOT(ClickOnMap()));     // Retry
                    RetryCount++;
                } else NoMoreRetry();
            } else {
                if (GetNodeValue(root,"status")=="ZERO_RESULTS") {
                    NoMap=true;
                    StopMaj=true;
                    ui->AdresseCB->addItem(QString("Unknown (%1/%2)").arg(Location->GPS_cx).arg(Location->GPS_cy),QVariant(QPointF(Location->GPS_cx,Location->GPS_cy)));
                    StopMaj=false;
                    NoMap=false;
                    RefreshMap();
                } else if (GetNodeValue(root,"status")!="OK") {
                    if (RetryCount<MAXRETRY) {
                        ToLog(LOGMSG_WARNING,QApplication::translate("DlgGMapsLocation","XML parsing error / status KO"));
                        QTimer::singleShot(LATENCY,this,SLOT(ClickOnMap()));     // Retry
                        RetryCount++;
                    } else NoMoreRetry();
                } else {
                    int Child=1;
                    while (root.childNodes().at(Child).toElement().nodeName()=="result") {
                        QDomElement Element=root.childNodes().at(Child).toElement();
                        NoMap=true;
                        StopMaj=true;
                        ui->AdresseCB->addItem(GetNodeValue(Element,"formatted_address"),
                                               QVariant(QPointF(GetNodeValue(Element,"geometry##location##lng").toDouble(),
                                                                GetNodeValue(Element,"geometry##location##lat").toDouble()))
                                               );
                        StopMaj=false;
                        NoMap=false;
                        Child++;
                    }
                    Location->FriendlyAddress=ui->AdresseCB->currentText();
                    ui->AddressNameED->setText(Location->FriendlyAddress);
                    RefreshMap();
                }
            }
        }
    }
    GetAddressNetReply->deleteLater();
    GetAddressNetReply=NULL;
}

//====================================================================================================================
// When a new selection is done on the combo
void DlgGMapsLocation::AddressChanged(int) {
    if ((GetMapAtWork)||(StopMaj)) return;   // Loose this event
    int CurrentIndex=ui->AdresseCB->currentIndex();
    if ((CurrentIndex>=0)&&(CurrentIndex<ui->AdresseCB->count())) {
        if (!ui->AdresseCB->itemData(CurrentIndex).isNull()) {
            Location->Address   =ui->AdresseCB->currentText();
            QPointF PointF      =ui->AdresseCB->itemData(CurrentIndex).toPointF();
            Location->GPS_cx    =PointF.x();
            Location->GPS_cy    =PointF.y();
            StopMaj=true;
            Location->FriendlyAddress=Location->Address;
            ui->AddressNameED->setText(Location->FriendlyAddress);
            StopMaj=false;
            RefreshMap();
        } else Location->Address.clear();
    }
    ui->OKBT->setEnabled(!Location->Address.isEmpty() && !Location->Name.isEmpty() && (ui->AdresseCB->currentIndex()!=-1));
}

//====================================================================================================================
// When press the enter key on the combo
void DlgGMapsLocation::keyPressEvent(QKeyEvent* e) {
    if (this->focusWidget()->objectName()!="AdresseCB") {
        QCustomDialog::keyPressEvent(e);
        return;
    }
    if ((e->key()==Qt::Key_Enter)||(e->key()==Qt::Key_Return)) UserEnterAddress();
        else QCustomDialog::keyPressEvent(e);
}

// When user enter a new Address in the combo
void DlgGMapsLocation::UserEnterAddress() {
    QString Current=ui->AdresseCB->currentText();
    ReceiveLatLng.clear();
    QUrl url=QString("http://maps.googleapis.com/maps/api/geocode/xml?address=%1&sensor=false").arg(Current);
    GetLatLngAtWork=true;
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    GetLatLngNetReply = NetworkAccessManager->get(QNetworkRequest(url));
    connect(GetLatLngNetReply,SIGNAL(finished()), this,SLOT(httpGetLatLngFinished()));
    connect(GetLatLngNetReply,SIGNAL(readyRead()),this,SLOT(httpGetLatLngReadyRead()));
}

//====================================================================================================================
// When clicked on zoom down button
void DlgGMapsLocation::ZoomDown() {
    if (GetLatLngAtWork) return;    // loose this event
    ui->ZoomSlider->setValue(ui->ZoomSlider->value()-1);
}

//====================================================================================================================
// When clicked on zoom up button
void DlgGMapsLocation::ZoomUp() {
    if (GetLatLngAtWork) return;    // loose this event
    ui->ZoomSlider->setValue(ui->ZoomSlider->value()+1);
}

//====================================================================================================================
// When ZoomLevel has changed
void DlgGMapsLocation::ZoomChanged(int) {
    if (GetLatLngAtWork) return;    // loose this event
    Location->ZoomLevel=ui->ZoomSlider->value();
    RefreshMap();
}

//====================================================================================================================

void DlgGMapsLocation::RefreshMap() {
    if (GetMapAtWork || NoMap || Location->Address.isEmpty()) return;   // Loose this event
    ui->LngValue->setText(QString("%1").arg(Location->GPS_cx));
    ui->LatValue->setText(QString("%1").arg(Location->GPS_cy));
    QUrl url=QString("http://maps.googleapis.com/maps/api/staticmap?center=%1,%2&zoom=%3&size=640x640&maptype=roadmap&markers=color:red|%1,%2&sensor=false").arg(Location->GPS_cy).arg(Location->GPS_cx).arg(Location->ZoomLevel);
    ReceiveMap.clear();
    ui->ZoomSlider->setEnabled(false);
    ui->ZoomDown->setEnabled(false);
    ui->ZoomUp->setEnabled(false);
    GetMapAtWork=true;
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    GetMapNetReply = NetworkAccessManager->get(QNetworkRequest(url));
    connect(GetMapNetReply,SIGNAL(finished()), this,SLOT(httpGetMapFinished()));
    connect(GetMapNetReply,SIGNAL(readyRead()),this,SLOT(httpGetMapReadyRead()));
}

//====================================================================================================================
// When user click on the map
void DlgGMapsLocation::ClickOnMap() {
    if (GetAddressAtWork) return;    // loose this event
    Location->GPS_cx=PIXEL2GPS_X((GPS2PIXEL_X(Location->GPS_cx,Location->ZoomLevel,1)+(MapWidget->X-(MapWidget->width()/2))),Location->ZoomLevel,1);
    Location->GPS_cy=PIXEL2GPS_Y((GPS2PIXEL_Y(Location->GPS_cy,Location->ZoomLevel,1)+(MapWidget->Y-(MapWidget->height()/2))),Location->ZoomLevel,1);
    ReceiveAddress.clear();
    QUrl url=QString("http://maps.googleapis.com/maps/api/geocode/xml?latlng=%1,%2&sensor=false").arg(Location->GPS_cy).arg(Location->GPS_cx);
    GetAddressAtWork=true;
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    GetAddressNetReply = NetworkAccessManager->get(QNetworkRequest(url));
    connect(GetAddressNetReply,SIGNAL(finished()), this,SLOT(httpGetAddressFinished()));
    connect(GetAddressNetReply,SIGNAL(readyRead()),this,SLOT(httpGetAddressReadyRead()));
}

//============================================================================================================================

void DlgGMapsLocation::ClearIcon() {
    if (Location->Icon->MediaObject) {
        QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
        if (PrevRessourceKey==Location->ThumbnailResKey) Location->ThumbnailResKey=-1;  // To keep previous thumb
        ApplicationConfig->ImagesCache.RemoveImageObject(Location->ThumbnailResKey,-1);
        Location->Icon->ApplicationConfig->SlideThumbsTable->SetThumbs(&Location->ThumbnailResKey,QImage());
        delete Location->Icon->MediaObject;
        Location->Icon->MediaObject=NULL;
        Location->Icon->BrushType=BRUSHTYPE_SOLID;
        ui->IconBT->setIcon(QIcon(QPixmap().fromImage(QImage())));
        QApplication::restoreOverrideCursor();
    }
}

//============================================================================================================================

void DlgGMapsLocation::SelectIcon() {
    if (Location->Icon->MediaObject) {
        QMenu *ContextMenu=new QMenu(this);
        ContextMenu->addAction(ui->actionSelectAnotherFile);
        ContextMenu->addAction(ui->actionEditCurrentImage);
        QAction *Action=ContextMenu->exec(QCursor::pos());
        delete ContextMenu;
        if (!Action) return;
        if (Action==ui->actionSelectAnotherFile) {
            ApplicationConfig->SettingsTable->SetTextValue("GPSIcon_path",QFileInfo(Location->Icon->MediaObject->FileName()).absolutePath());
            ClearIcon();
            delete Location->Icon->MediaObject;
            Location->Icon->MediaObject=NULL;
            Location->Icon->BrushType=BRUSHTYPE_SOLID;
            ui->IconBT->setIcon(QIcon(QPixmap().fromImage(QImage())));
        }
    }
    if (!Location->Icon->MediaObject) {
        QStringList FileList;
        DlgFileExplorer Dlg(BROWSER_TYPE_ICONLOCATION,false,false,false,QApplication::translate("MainWindow","Select an image file"),ApplicationConfig,this);
        Dlg.InitDialog();
        if (Dlg.exec()==0) FileList=Dlg.GetCurrentSelectedFiles();
        if (FileList.count()==0) return;
        QApplication::processEvents();
        QString BrushFileName =QFileInfo(FileList[0]).absoluteFilePath();
        bool    IsValide =false,ModifyFlag;
        QString Extension=QFileInfo(BrushFileName).suffix().toLower();
        // Search if file is an image
        for (int i=0;i<ApplicationConfig->AllowImageExtension.count();i++) if (ApplicationConfig->AllowImageExtension[i]==Extension) {
            // Create an image wrapper
            Location->Icon->MediaObject=new cImageFile(ApplicationConfig);
            IsValide=Location->Icon->MediaObject->GetInformationFromFile(BrushFileName,NULL,&ModifyFlag,-1);
            if (!IsValide) {
                delete Location->Icon->MediaObject;
                Location->Icon->MediaObject=NULL;
            }
            break;
        }
        if (IsValide &&(Location->Icon->MediaObject)) {
            QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
            QImage *Image=Location->Icon->MediaObject->ImageAt(true);
            if (!Image) {
                IsValide=false;
                delete Location->Icon->MediaObject;
                Location->Icon->MediaObject=NULL;
            } else {
                Location->Icon->ApplyAutoFraming(AUTOFRAMING_HEIGHTMIDLEMIN,1); // square as max
                QImage Thumb=Location->Icon->GetImageDiskBrush(QRect(0,0,64,64),false,0,NULL,1,NULL);
                if (PrevRessourceKey==Location->ThumbnailResKey) Location->ThumbnailResKey=-1;  // To keep previous thumb
                ApplicationConfig->ImagesCache.RemoveImageObject(Location->ThumbnailResKey,-1);
                Location->Icon->ApplicationConfig->SlideThumbsTable->SetThumbs(&Location->ThumbnailResKey,Thumb);
                Location->Icon->BrushType=BRUSHTYPE_IMAGEDISK;
                ui->IconBT->setIcon(QIcon(QPixmap().fromImage(Thumb)));
            }
            delete Image;
            QApplication::restoreOverrideCursor();
        }
    }
    if (Location->Icon->MediaObject && Location->Icon->MediaObject->IsValide) {
        DlgImageCorrection Dlg(NULL,0,Location->Icon,0,GEOMETRY_SQUARE,SPEEDWAVE_LINEAR,ApplicationConfig,this);
        Dlg.InitDialog();
        if (Dlg.exec()==0) {
            QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
            QImage Thumb=Location->Icon->GetImageDiskBrush(QRect(0,0,64,64),false,0,NULL,1,NULL);
            if (PrevRessourceKey==Location->ThumbnailResKey) Location->ThumbnailResKey=-1;  // To keep previous thumb
            ApplicationConfig->ImagesCache.RemoveImageObject(Location->ThumbnailResKey,-1);
            ApplicationConfig->SlideThumbsTable->SetThumbs(&Location->ThumbnailResKey,Thumb);
            ui->IconBT->setIcon(QIcon(QPixmap().fromImage(Thumb)));
            QApplication::restoreOverrideCursor();
        }
    }
}

//============================================================================================================================
#define FAVACTIONTYPE_ACTIONTYPE    0xF000
#define FAVACTIONTYPE_ADD           0x1000
#define FAVACTIONTYPE_REMOVE        0x2000
#define FAVACTIONTYPE_UPD           0x4000
#define FAVACTIONTYPE_SELECT        0x8000

void DlgGMapsLocation::Favorite() {
    QMenu       *ContextMenu=new QMenu(this);
    bool        AddSep=false;

    QAction *Add=CreateMenuAction(QIcon(":/img/favorite_add.png"),   QApplication::translate("MainWindow","Add to favorite"),      FAVACTIONTYPE_ADD,false,false,this);     ContextMenu->addAction(Add);
    QAction *Upd=CreateMenuAction(QIcon(":/img/favorite_manage.png"),QApplication::translate("MainWindow","Update this favorite"), FAVACTIONTYPE_UPD,false,false,this);     ContextMenu->addAction(Upd);
    QAction *Rmv=CreateMenuAction(QIcon(":/img/trash.png"),          QApplication::translate("MainWindow","Remove this favorites"),FAVACTIONTYPE_REMOVE,false,false,this);  ContextMenu->addAction(Rmv);
    Upd->setEnabled(false);
    Rmv->setEnabled(false);
    Add->setEnabled(!Location->Name.isEmpty());

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
            bool IsCurrent=(Key==Location->FavKey)||((Name==ui->NameED->text())&&(Address==Location->Address));
            QAction *Act=CreateMenuAction(QIcon(QPixmap().fromImage(Thumb)),QString("%1 (%2)").arg(Name).arg(Address),FAVACTIONTYPE_SELECT+Key,true,IsCurrent,this);
            ContextMenu->addAction(Act);
            if (IsCurrent) {
                Add->setEnabled(false);
                Act->setEnabled(false);
                Upd->setEnabled(true);
                Rmv->setEnabled(true);
                if (Location->FavKey!=Key) Location->FavKey=Key;
            }
        }
    }

    QAction *Action=ContextMenu->exec(QCursor::pos());
    if (Action) {
        int ActionType=Action->data().toInt() & FAVACTIONTYPE_ACTIONTYPE;
        if (ActionType==FAVACTIONTYPE_ADD)          Location->AddToFavorite();
        else if (ActionType==FAVACTIONTYPE_UPD)     Location->UpdateFavorite();
        else if (ActionType==FAVACTIONTYPE_REMOVE)  Location->RemoveFavorite();
        else if (Action->text()!="") {
            StopMaj=true;
            qlonglong Key=Action->data().toInt() & ~FAVACTIONTYPE_ACTIONTYPE;
            Location->LoadFromFavorite(Key);
            ui->AdresseCB->clear();
            ui->AdresseCB->addItem(Location->Address,QVariant(QPointF(Location->GPS_cx,Location->GPS_cy)));
            ui->AdresseCB->setCurrentIndex(0);
            ui->NameED->setText(Location->Name);
            ui->AdresseCB->setEditText(Location->Address);
            ui->AddressNameED->setText(Location->FriendlyAddress);
            ui->IconBT->setIcon(QIcon(QPixmap().fromImage(Location->GetThumb(64))));
            ui->OKBT->setEnabled(!Location->Address.isEmpty() && !Location->Name.isEmpty() && (ui->AdresseCB->currentIndex()!=-1));
            StopMaj=false;
            QTimer::singleShot(LATENCY,this,SLOT(RefreshMap()));
        }
    }
    ui->FavoriteBT->setDown(false);
}
