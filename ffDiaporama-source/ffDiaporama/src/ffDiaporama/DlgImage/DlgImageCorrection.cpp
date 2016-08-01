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

#include "DlgImageCorrection.h"
#include "ui_DlgImageCorrection.h"

#include <QMessageBox>
#include <QFileDialog>
#include <QSplashScreen>
#include <engine/cLocation.h>

int DefaultBackgroundForm=1;

DlgImageCorrection::DlgImageCorrection(cCompositionObject *TheCompoObject,int *TheBackgroundForm,cBrushDefinition *TheCurrentBrush,
                                       int TheVideoPosition,ffd_GEOMETRY TheffDPrjGeometry,int TheDefaultSpeedWave,
                                       cApplicationConfig *ApplicationConfig,QWidget *parent):
                                       QCustomDialog(ApplicationConfig,parent),ui(new Ui::DlgImageCorrection) {
    ImageWidget     =NULL;
    VideoWidget     =NULL;
    GMapsWidget     =NULL;

    ui->setupUi(this);
    OkBt            =ui->OKBT;
    CancelBt        =ui->CancelBt;
    HelpBt          =ui->HelpBt;
    HelpFile        ="0110";
    UndoBt          =ui->UndoBT;
    StopMaj         =false;
    IsFirstInitDone =false;

    ffDPrjGeometry  =TheffDPrjGeometry;
    CurrentBrush    =TheCurrentBrush;
    CompoObject     =TheCompoObject;
    BackgroundForm  =TheBackgroundForm;
    VideoPosition   =TheVideoPosition;
    DefaultSpeedWave=TheDefaultSpeedWave;

    if (!BackgroundForm) BackgroundForm=&DefaultBackgroundForm;
    SavedBackgroundForm=*BackgroundForm;
}

//====================================================================================================================

DlgImageCorrection::~DlgImageCorrection() {
    delete ui;  // Deleting this make deletion of scene and all included object
}

//====================================================================================================================
// Initialise dialog

void DlgImageCorrection::DoInitDialog() {
    // Set title of dialog
    switch (CurrentBrush->MediaObject->ObjectType) {
        case OBJECTTYPE_IMAGEFILE:
        case OBJECTTYPE_IMAGEVECTOR:
        case OBJECTTYPE_IMAGECLIPBOARD: setWindowTitle(QApplication::translate("DlgSlideProperties","Correct or reframe image",                  "Action title in slide edit dialog + dialog title of image edit dialog")); break;
        case OBJECTTYPE_VIDEOFILE:      setWindowTitle(QApplication::translate("DlgSlideProperties","Correct, reframe or cut video",             "Action title in slide edit dialog + dialog title of image edit dialog")); break;
        case OBJECTTYPE_GMAPSMAP:       setWindowTitle(QApplication::translate("DlgSlideProperties","Correct, reframe or cut a Google Maps map", "Action title in slide edit dialog + dialog title of image edit dialog")); break;
        default: break;
    }

    TabLayout=new QHBoxLayout(ui->TabWidget);
    TabLayout->setSpacing(0);
    TabLayout->setObjectName("TabLayout");
    TabLayout->setContentsMargins(0,0,0,0);

    bool AllowChangeFile=false;
    switch (CurrentBrush->MediaObject->ObjectType) {
        case OBJECTTYPE_IMAGEFILE:      AllowChangeFile=true;   CreateImageTag(AllowChangeFile);                        break;
        case OBJECTTYPE_IMAGEVECTOR:    AllowChangeFile=true;   CreateImageTag(AllowChangeFile);                        break;
        case OBJECTTYPE_IMAGECLIPBOARD: AllowChangeFile=false;  CreateImageTag(AllowChangeFile);                        break;
        case OBJECTTYPE_GMAPSMAP:       AllowChangeFile=false;  CreateImageTag(AllowChangeFile);   CreateGMapsTag();    break;
        case OBJECTTYPE_VIDEOFILE:      AllowChangeFile=true;   CreateImageTag(AllowChangeFile);   CreateVideoTag();    break;
        default: break; // To avoid warning
    }

    if (!GMapsWidget) ui->ExportMapBT->setVisible(false);

    // Define common handler
    connect(ui->TabWidget,SIGNAL(currentChanged(int)),this,SLOT(s_TabWidgetChanged(int)));
    s_TabWidgetChanged(ui->TabWidget->currentIndex());  // To force WinFocus/LostFocus to tab widgets
}

//====================================================================================================================

void DlgImageCorrection::AppendPartialUndo(int ActionType,QWidget *FocusWindow,bool ForceAdd) {
    QCustomDialog::AppendPartialUndo(ActionType,FocusWindow,ForceAdd,ui->TabWidget->currentWidget());
}

//====================================================================================================================

void DlgImageCorrection::DoPartialUndo() {
    if (UndoDataList.count()==0) {
        if (Undo!=NULL) DoGlobalUndo();
    } else {
        sUndoData Data=UndoDataList.last();
        UndoDataList.removeLast();
        QDomDocument DomDocument("UNDO");
        if (DomDocument.setContent(Data.Data,true)) {
            QDomElement root=DomDocument.documentElement();
            if (root.tagName()=="UNDO-DATA") {
                if (Data.FocusTab) ui->TabWidget->setCurrentIndex(ui->TabWidget->indexOf(Data.FocusTab));
                ApplyPartialUndo(Data.ActionType,root);
            }
        }
        if (Data.FocusWindow!=NULL) Data.FocusWindow->setFocus();
    }
    if (UndoBt) UndoBt->setEnabled(UndoDataList.count()>0);
}


//====================================================================================================================
// Initiale Undo

void DlgImageCorrection::PrepareGlobalUndo() {
    // Save objects before modification for cancel button
    UndoBrushFileName=CurrentBrush->MediaObject->FileName();

    // Create xml document and root
    Undo=new QDomDocument(APPLICATION_NAME);
    QDomElement root=Undo->createElement("UNDO-DLG");
    PreparePartialUndo(0,root,true);
    Undo->appendChild(root);                                    // Add object to xml document
}

//====================================================================================================================

void DlgImageCorrection::PreparePartialUndo(int /*ActionType*/,QDomElement root,bool /*DuplicateRessource*/) {
    QString BrushFileName=CurrentBrush->MediaObject->FileName();
    root.setAttribute("BrushFileName",BrushFileName);
    root.setAttribute("BackgroundForm",*BackgroundForm);
    // Save object
    CurrentBrush->SaveToXML(&root,"UNDO-DLG-OBJECT","",true,NULL,NULL,false);    // Save object
    // if object have embeded ressource, then load mediaobject
    if (CurrentBrush->MediaObject->RessourceKey!=-1) {
        if (CurrentBrush->MediaObject->ObjectType==OBJECTTYPE_GMAPSMAP) CurrentBrush->MediaObject->SaveToXML(&root,"UNDO-DLG-OBJECT","",true,NULL,NULL,false);
    }
    // special case for video object
    if (CurrentBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE) {
        root.setAttribute("StartPos",   ((cVideoFile *)CurrentBrush->MediaObject)->StartPos.toString("HH:mm:ss.zzz"));             // Start position (video only)
        root.setAttribute("EndPos",     ((cVideoFile *)CurrentBrush->MediaObject)->EndPos.toString("HH:mm:ss.zzz"));                   // End position (video only)
        root.setAttribute("SoundVolume",QString("%1").arg(CurrentBrush->SoundVolume,0,'f'));                                            // Volume of soundtrack (for video only)
        root.setAttribute("Deinterlace",CurrentBrush->Deinterlace?"1":"0");                                                             // Deinterlace YADIF filter
    }
}

//====================================================================================================================
// Apply Undo : call when user click on Cancel button

void DlgImageCorrection::DoGlobalUndo() {
    QDomElement root=Undo->documentElement();
    if (root.tagName()=="UNDO-DLG") CurrentBrush->LoadFromXML(&root,"UNDO-DLG-OBJECT","",NULL,NULL,NULL,false);
    ApplyPartialUndo(0,root);
}

//====================================================================================================================

void DlgImageCorrection::ApplyPartialUndo(int ActionType,QDomElement root) {
    QString BrushFileName=root.attribute("BrushFileName");
    *BackgroundForm=root.attribute("BackgroundForm").toInt();
    // load object
    CurrentBrush->LoadFromXML(&root,"UNDO-DLG-OBJECT","",NULL,NULL,NULL,false);
    // if object have embeded ressource, then load mediaobject
    if (CurrentBrush->MediaObject->RessourceKey!=-1) CurrentBrush->MediaObject->LoadFromXML(&root,"UNDO-DLG-OBJECT","",NULL,NULL,NULL,false);
    // special case for video object
    if (CurrentBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE) {
        ((cVideoFile *)CurrentBrush->MediaObject)->StartPos=QTime().fromString(root.attribute("StartPos"));
        ((cVideoFile *)CurrentBrush->MediaObject)->EndPos  =QTime().fromString(root.attribute("EndPos"));
        CurrentBrush->SoundVolume                          =GetDoubleValue(root,"SoundVolume");
        CurrentBrush->Deinterlace                          =root.attribute("Deinterlace")=="1";
    }

    if ((BrushFileName!=CurrentBrush->MediaObject->FileName())&&(ImageWidget)) ImageWidget->ReloadFile(BrushFileName);
    RefreshControls();
    if ((GMapsWidget)&&(ActionType==UNDOACTION_GMAPSMAPPART)) GMapsWidget->ResetDisplayMap();
}

//====================================================================================================================

void DlgImageCorrection::resizeEvent(QResizeEvent *ev) {
    QCustomDialog::resizeEvent(ev);
    RefreshControls();
}

//====================================================================================================================

void DlgImageCorrection::showEvent(QShowEvent *ev) {
    QCustomDialog::showEvent(ev);
    if (!IsFirstInitDone) {
        IsFirstInitDone =true;
        RefreshControls();
    }
 }

//====================================================================================================================

bool DlgImageCorrection::DoAccept() {
    if (ImageWidget) ImageWidget->DoAccept();
    if (VideoWidget) VideoWidget->DoAccept();
    if (GMapsWidget) GMapsWidget->DoAccept();
    return true;
}

void DlgImageCorrection::DoRejet() {
    if (ImageWidget) ImageWidget->DoRejet();
    if (VideoWidget) VideoWidget->DoRejet();
    if (GMapsWidget) GMapsWidget->DoRejet();
    if (BackgroundForm) *BackgroundForm=SavedBackgroundForm;
}

//====================================================================================================================

void DlgImageCorrection::RefreshControls() {
    if (!IsFirstInitDone) return;

    // Embeded widget
    if ((ImageWidget)&&(ui->TabWidget->currentWidget()==ImageWidget)) ImageWidget->RefreshControls();
    if ((VideoWidget)&&(ui->TabWidget->currentWidget()==VideoWidget)) VideoWidget->RefreshControls();
    if ((GMapsWidget)&&(ui->TabWidget->currentWidget()==GMapsWidget)) GMapsWidget->RefreshControls();
}

//====================================================================================================================

void DlgImageCorrection::s_TabWidgetChanged(int NewTab) {

    if ((ImageWidget)&&(NewTab==ui->TabWidget->indexOf(ImageWidget)))           ImageWidget->WinFocus();
        else if ((ImageWidget)&&(NewTab!=ui->TabWidget->indexOf(ImageWidget)))  ImageWidget->LostFocus();

    if ((VideoWidget)&&(NewTab==ui->TabWidget->indexOf(VideoWidget)))           VideoWidget->WinFocus();
        else if ((VideoWidget)&&(NewTab!=ui->TabWidget->indexOf(VideoWidget)))  VideoWidget->LostFocus();

    if ((GMapsWidget)&&(NewTab==ui->TabWidget->indexOf(GMapsWidget)))           GMapsWidget->WinFocus();
        else if ((GMapsWidget)&&(NewTab!=ui->TabWidget->indexOf(GMapsWidget)))  GMapsWidget->LostFocus();

    RefreshControls();
}

//====================================================================================================================

void DlgImageCorrection::CreateImageTag(bool AllowChangeFile) {
    ImageWidget=new wgt_QEditImage();
    ImageWidget->setObjectName("TabImage");
    ImageWidget->DoInitWidget(this,CurrentBrush,ui->RulersBT,CompoObject,BackgroundForm,VideoPosition,ffDPrjGeometry,DefaultSpeedWave);
    ImageWidget->DoInitDialog(AllowChangeFile);
    TabLayout->addWidget(ImageWidget);
    QIcon ImageIcon;
    ImageIcon.addFile(":/img/EditImage.png",QSize(),QIcon::Normal,QIcon::Off);
    ui->TabWidget->addTab(ImageWidget,ImageIcon,QString());
    ui->TabWidget->setTabText(ui->TabWidget->indexOf(ImageWidget),"");
    ui->TabWidget->setCurrentIndex(ui->TabWidget->indexOf(ImageWidget));
}

//====================================================================================================================

void DlgImageCorrection::CreateVideoTag() {
    VideoWidget=new wgt_QEditVideo();
    VideoWidget->setObjectName("TabVideo");
    VideoWidget->DoInitWidget(this,CurrentBrush);
    VideoWidget->DoInitDialog();
    TabLayout->addWidget(VideoWidget);
    QIcon VideoIcon;
    VideoIcon.addFile(":/img/EditMovie.png",QSize(),QIcon::Normal,QIcon::Off);
    ui->TabWidget->addTab(VideoWidget,VideoIcon,QString());
    ui->TabWidget->setTabText(ui->TabWidget->indexOf(VideoWidget),"");
    ui->TabWidget->setCurrentIndex(ui->TabWidget->indexOf(VideoWidget));
    connect(VideoWidget,SIGNAL(DoRefreshImageObject()),SLOT(RefreshImageObject()));
}

//====================================================================================================================

void DlgImageCorrection::CreateGMapsTag() {
    GMapsWidget=new wgt_QGMapsMap();
    GMapsWidget->setObjectName("TabGMaps");
    GMapsWidget->DoInitWidget(this,ui->ExportMapBT,CurrentBrush);
    GMapsWidget->DoInitDialog();
    TabLayout->addWidget(GMapsWidget);
    QIcon VideoIcon;
    VideoIcon.addFile(":/img/EditGMaps.png",QSize(),QIcon::Normal,QIcon::Off);
    ui->TabWidget->addTab(GMapsWidget,VideoIcon,QString());
    ui->TabWidget->setTabText(ui->TabWidget->indexOf(GMapsWidget),"");
    ui->TabWidget->setCurrentIndex(ui->TabWidget->indexOf(GMapsWidget));
    connect(GMapsWidget,SIGNAL(DoRefreshImageObject()),SLOT(RefreshImageObject()));
}

//====================================================================================================================

void DlgImageCorrection::RefreshImageObject() {
    ImageWidget->ResetCachedImage();
}
