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

#include "DlgImage/DlgImageCorrection.h"
#include "DlgBackgroundProperties.h"
#include "ui_DlgBackgroundProperties.h"
#include "DlgFileExplorer/DlgFileExplorer.h"

// Undo actions
#define UNDOACTION_BACKGROUNDTYPE       1
#define UNDOACTION_BRUSHTYPE            2
#define UNDOACTION_BRUSHFILE            3
#define UNDOACTION_INTERMPOS            4
#define UNDOACTION_PATTERN              5
#define UNDOACTION_ORIENTATION          6
#define UNDOACTION_FIRSTCOLOR           7
#define UNDOACTION_LASTCOLOR            8
#define UNDOACTION_INTERMCOLOR          9
#define UNDOACTION_LIBBRUSH             10
#define UNDOACTION_EDITIMG              11
#define UNDOACTION_FULLFILL             12
#define UNDOACTION_KEEPRATIO            13

//====================================================================================================================

DlgBackgroundProperties::DlgBackgroundProperties(cDiaporamaObject *TheDiaporamaObject,cApplicationConfig *ApplicationConfig,QWidget *parent):
    QCustomDialog(ApplicationConfig,parent),ui(new Ui::DlgBackgroundProperties) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::DlgBackgroundProperties");
    ui->setupUi(this);
    OkBt            =ui->OKBT;
    CancelBt        =ui->CancelBt;
    UndoBt          =ui->UndoBT;
    HelpBt          =ui->HelpBt;
    HelpFile        ="0104";
    DiaporamaObject =TheDiaporamaObject;
    StopMAJSpinbox  =false;
}

//====================================================================================================================

DlgBackgroundProperties::~DlgBackgroundProperties() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::~DlgBackgroundProperties");
    delete ui;
}

//====================================================================================================================
// Initialise dialog

void DlgBackgroundProperties::DoInitDialog() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::DoInitDialog");

    ui->BackgroundCombo->PrepareTable(DiaporamaObject->Parent->ImageGeometry,&BackgroundList);

    ui->SameBackgroundRD->setChecked(!DiaporamaObject->BackgroundType);
    ui->NewBackgroundRD->setChecked(DiaporamaObject->BackgroundType);

    // Init combo box Background  type
    ui->BrushTypeCombo->addItem(QApplication::translate("DlgBackgroundProperties","Solid brush"));
    ui->BrushTypeCombo->setItemData(ui->BrushTypeCombo->count()-1,QVariant(int(BRUSHTYPE_SOLID)));
    ui->BrushTypeCombo->addItem(QApplication::translate("DlgBackgroundProperties","Gradient 2 colors"));
    ui->BrushTypeCombo->setItemData(ui->BrushTypeCombo->count()-1,QVariant(int(BRUSHTYPE_GRADIENT2)));
    ui->BrushTypeCombo->addItem(QApplication::translate("DlgBackgroundProperties","Gradient 3 colors"));
    ui->BrushTypeCombo->setItemData(ui->BrushTypeCombo->count()-1,QVariant(int(BRUSHTYPE_GRADIENT3)));
    ui->BrushTypeCombo->addItem(QApplication::translate("DlgBackgroundProperties","Image from library"));
    ui->BrushTypeCombo->setItemData(ui->BrushTypeCombo->count()-1,QVariant(int(BRUSHTYPE_IMAGELIBRARY)));
    ui->BrushTypeCombo->addItem(QApplication::translate("DlgBackgroundProperties","Image from disk"));
    ui->BrushTypeCombo->setItemData(ui->BrushTypeCombo->count()-1,QVariant(int(BRUSHTYPE_IMAGEDISK)));

    RefreshControls();

    // Connect signals
    connect(ui->SameBackgroundRD,SIGNAL(clicked()),this,SLOT(s_SameBackground()));
    connect(ui->NewBackgroundRD,SIGNAL(clicked()),this,SLOT(s_NewBackground()));
    connect(ui->BrushTypeCombo,SIGNAL(currentIndexChanged(int)),this,SLOT(s_ChangeBrushTypeCombo(int)));

    // Handler for custom color/brush/pattern/gradient combo box index change
    connect(ui->OrientationCombo,SIGNAL(currentIndexChanged(int)),this,SLOT(s_ChIndexGradientOrientationCombo(int)));
    connect(ui->FirstColorCombo,SIGNAL(currentIndexChanged(int)),this,SLOT(s_ChIndexGradientFirstColorCombo(int)));
    connect(ui->FinalColorCombo,SIGNAL(currentIndexChanged(int)),this,SLOT(s_ChIndexGradientFinalColorCombo(int)));
    connect(ui->IntermColorCombo,SIGNAL(currentIndexChanged(int)),this,SLOT(s_ChIndexGradientIntermColorCombo(int)));
    connect(ui->BackgroundCombo,SIGNAL(itemSelectionHaveChanged()),this,SLOT(s_ChIndexBackgroundCombo()));

    // Intermediate position for gradient 3 colors
    connect(ui->IntermPosSlider,SIGNAL(valueChanged(int)),this,SLOT(s_IntermPosSliderMoved(int)));
    connect(ui->IntermPosED,SIGNAL(valueChanged(int)),this,SLOT(s_IntermPosED(int)));

    // Image file
    connect(ui->ImageFileBT,SIGNAL(pressed()),this,SLOT(s_SelectFile()));
    connect(ui->ImageEditCorrectBT,SIGNAL(pressed()),this,SLOT(s_ImageEditCorrect()));
    connect(ui->FullFillRB,SIGNAL(clicked()),this,SLOT(s_FullFill()));
    connect(ui->KeepRatioRB,SIGNAL(clicked()),this,SLOT(s_KeepRatio()));
}

//====================================================================================================================
// Initiale Undo

void DlgBackgroundProperties::PrepareGlobalUndo() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::PrepareGlobalUndo");

    Undo=new QDomDocument(APPLICATION_NAME);
    QDomElement root=Undo->createElement("UNDO-DLG");
    DiaporamaObject->SaveToXML(root,"UNDO-DLG-OBJECT","",NULL,NULL,NULL,false);
    Undo->appendChild(root);
}

//====================================================================================================================
// Apply Undo : call when user click on Cancel button

void DlgBackgroundProperties::DoGlobalUndo() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::DoGlobalUndo");

    QDomElement root=Undo->documentElement();
    if (root.tagName()=="UNDO-DLG") DiaporamaObject->LoadFromXML(root,"UNDO-DLG-OBJECT","",NULL,NULL,false);
}

//====================================================================================================================

void DlgBackgroundProperties::PreparePartialUndo(int /*ActionType*/,QDomElement root,bool) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::PreparePartialUndo");
    DiaporamaObject->SaveToXML(root,"UNDO-DLG-OBJECT","",NULL,NULL,NULL,false);
}

//====================================================================================================================

void DlgBackgroundProperties::ApplyPartialUndo(int /*ActionType*/,QDomElement root) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::ApplyPartialUndo");
    DiaporamaObject->LoadFromXML(root,"UNDO-DLG-OBJECT","",NULL,NULL,false);
    RefreshControls();
}

//====================================================================================================================

void DlgBackgroundProperties::showEvent(QShowEvent *) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::showEvent");
    RefreshControls();
}

//====================================================================================================================

void DlgBackgroundProperties::RefreshControls() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::RefreshControls");

    ui->SameBackgroundRD->setChecked(!DiaporamaObject->BackgroundType);
    ui->NewBackgroundRD->setChecked(DiaporamaObject->BackgroundType);
    ui->KeepRatioRB->setChecked(!DiaporamaObject->BackgroundBrush->FullFilling);
    ui->FullFillRB->setChecked(DiaporamaObject->BackgroundBrush->FullFilling);

    if (ui->NewBackgroundRD->isChecked()) {
        ui->BrushTypeLabel->setVisible(true);
        ui->BrushTypeCombo->setEnabled(true);
        ui->BrushTypeCombo->setVisible(true);

        // Ensure BrushImage is valide
        if ((BackgroundList.SearchImage(DiaporamaObject->BackgroundBrush->BrushImage)==-1)&&(BackgroundList.List.count()>0)) DiaporamaObject->BackgroundBrush->BrushImage=BackgroundList.List[0].Name;

        StopMAJSpinbox=true;    // Disable reintrence in this RefreshControls function
        for (int i=0;i<ui->BrushTypeCombo->count();i++) if (ui->BrushTypeCombo->itemData(i).toInt()==DiaporamaObject->BackgroundBrush->BrushType) ui->BrushTypeCombo->setCurrentIndex(i);
        ui->FirstColorCombo->SetCurrentColor(&DiaporamaObject->BackgroundBrush->ColorD);
        ui->FinalColorCombo->SetCurrentColor(&DiaporamaObject->BackgroundBrush->ColorF);
        ui->IntermColorCombo->SetCurrentColor(&DiaporamaObject->BackgroundBrush->ColorIntermed);
        ui->OrientationCombo->SetCurrentBrush(DiaporamaObject->BackgroundBrush);
        ui->BackgroundCombo->SetCurrentBackground(DiaporamaObject->BackgroundBrush->BrushImage);
        ui->IntermPosSlider->setValue(DiaporamaObject->BackgroundBrush->Intermediate*100);
        ui->IntermPosED->setValue(DiaporamaObject->BackgroundBrush->Intermediate*100);
        StopMAJSpinbox=false;

        bool FirstColorAllowed=((DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_SOLID)||(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_PATTERN)||
                                           (DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT2)||(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT3));
        ui->FirstColorLabel->setVisible(FirstColorAllowed);
        ui->FirstColorSpacer->setVisible(FirstColorAllowed);
        ui->FirstColorCombo->setVisible(FirstColorAllowed);
        ui->FirstColorCombo->setEnabled(FirstColorAllowed);

        ui->FinalColorCombo->setVisible((DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT2)||(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT3));
        ui->FinalColorCombo->setEnabled((DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT2)||(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT3));

        ui->IntermColorCombo->setVisible(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT3);
        ui->IntermColorCombo->setEnabled(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT3);

        ui->IntermPosSlider->setVisible(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT3);
        ui->IntermPosSlider->setEnabled(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT3);
        ui->IntermPosED->setVisible(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT3);
        ui->IntermPosED->setEnabled(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT3);

        ui->OrientationSpacer->setVisible((DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT2)||(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT3));
        ui->OrientationLabel->setVisible((DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT2)||(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT3));
        ui->OrientationCombo->setVisible((DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT2)||(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT3));
        ui->OrientationCombo->setEnabled((DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT2)||(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_GRADIENT3));

        ui->ImageLibraryLabel->setVisible(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGELIBRARY);
        ui->ImageLibraryLabel2->setVisible(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGELIBRARY);
        ui->BackgroundCombo->setVisible(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGELIBRARY);
        ui->BackgroundComboSpacer->setVisible(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGELIBRARY);

        ui->ImageFileLabel->setVisible(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK);
        ui->ImageFileED->setVisible(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK);
        ui->ImageFileBT->setVisible(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK);
        ui->ImageEditCorrectBT->setVisible(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK);
        ui->KeepRatioRB->setVisible(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK);

        ui->ImageEditCorrectBT->setEnabled((DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK)&&(!DiaporamaObject->BackgroundBrush->FullFilling)&&(DiaporamaObject->BackgroundBrush->MediaObject)
                                           &&((DiaporamaObject->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_IMAGEFILE)||
                                              (DiaporamaObject->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_IMAGEVECTOR)||
                                              (DiaporamaObject->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_IMAGECLIPBOARD)||
                                              (DiaporamaObject->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_GMAPSMAP)||
                                              (DiaporamaObject->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)));

        ui->FullFillRB->setVisible(DiaporamaObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK);
        ui->ImageFileED->setText(DiaporamaObject->BackgroundBrush->MediaObject?DiaporamaObject->BackgroundBrush->MediaObject->FileName():"");

    } else {

        ui->BrushTypeLabel->setVisible(false);
        ui->BrushTypeCombo->setDisabled(true);      ui->BrushTypeCombo->setVisible(false);

        ui->FirstColorLabel->setVisible(false);     ui->FirstColorSpacer->setVisible(false);
        ui->FirstColorCombo->setEnabled(false);     ui->FirstColorCombo->setVisible(false);
        ui->FinalColorCombo->setVisible(false);     ui->FinalColorCombo->setEnabled(false);
        ui->IntermColorCombo->setVisible(false);    ui->IntermColorCombo->setEnabled(false);
        ui->IntermPosSlider->setVisible(false);     ui->IntermPosSlider->setEnabled(false);
        ui->IntermPosED->setVisible(false);         ui->IntermPosED->setEnabled(false);
        ui->OrientationLabel->setVisible(false);    ui->OrientationSpacer->setVisible(false);
        ui->OrientationCombo->setVisible(false);    ui->OrientationCombo->setEnabled(false);
        ui->ImageLibraryLabel->setVisible(false);   ui->ImageLibraryLabel2->setVisible(false);
        ui->BackgroundCombo->setVisible(false);     ui->BackgroundComboSpacer->setVisible(false);
        ui->ImageFileLabel->setVisible(false);      ui->ImageFileED->setVisible(false);         ui->ImageFileBT->setVisible(false);
        ui->ImageEditCorrectBT->setVisible(false);
        ui->KeepRatioRB->setVisible(false);
        ui->FullFillRB->setVisible(false);
    }

    QApplication::processEvents();

    int W=ui->Preview->width();
    int H=DiaporamaObject->Parent->GetHeightForWidth(W);
    if (H>ui->Preview->height()) {
        H=ui->Preview->height();
        W=DiaporamaObject->Parent->GetWidthForHeight(H);
    }
    QImage Background=QImage(ui->Preview->width(),ui->Preview->height(),QImage::Format_ARGB32_Premultiplied);
    QPainter Painter;
    Painter.begin(&Background);
    Painter.fillRect(0,0,Background.width(),Background.height(),Qt::black);
    DiaporamaObject->Parent->PrepareBackground(DiaporamaObject->Parent->GetObjectIndex(DiaporamaObject),W,H,&Painter,(Background.width()-W)/2,(Background.height()-H)/2);
    Painter.end();
    ui->Preview->setPixmap(QPixmap::fromImage(Background));

    emit RefreshDisplay();
}

//====================================================================================================================

void DlgBackgroundProperties::s_SameBackground() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::s_SameBackground");
    if (DiaporamaObject==NULL) return;
    AppendPartialUndo(UNDOACTION_BACKGROUNDTYPE,ui->NewBackgroundRD,true);
    DiaporamaObject->BackgroundType=false;
    RefreshControls();
}

//====================================================================================================================

void DlgBackgroundProperties::s_NewBackground() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::s_NewBackground");
    if (DiaporamaObject==NULL) return;
    AppendPartialUndo(UNDOACTION_BACKGROUNDTYPE,ui->NewBackgroundRD,true);
    DiaporamaObject->BackgroundType=true;
    RefreshControls();
}

//====================================================================================================================

void DlgBackgroundProperties::s_ChangeBrushTypeCombo(int Value) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::s_ChangeBrushTypeCombo");
    if (StopMAJSpinbox) return;
    AppendPartialUndo(UNDOACTION_BRUSHTYPE,ui->BrushTypeCombo,true);
    DiaporamaObject->BackgroundBrush->BrushType=ui->BrushTypeCombo->itemData(Value).toInt();
    RefreshControls();
}

//====================================================================================================================

void DlgBackgroundProperties::s_SelectFile() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::s_SelectFile");
    QStringList FileList;
    QString     NewFile="";
    DlgFileExplorer Dlg(BROWSER_TYPE_IMAGEONLY,false,false,false,QApplication::translate("DlgBackgroundProperties","Select a file"),DiaporamaObject->Parent->ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) {
        FileList=Dlg.GetCurrentSelectedFiles();
        if (FileList.count()==1) NewFile=FileList.at(0);
    }
    if (NewFile=="") return;
    AppendPartialUndo(UNDOACTION_BRUSHFILE,ui->ImageFileBT,true);
    QString BrushFileName=QFileInfo(NewFile).absoluteFilePath();
    delete DiaporamaObject->BackgroundBrush->MediaObject;
    DiaporamaObject->BackgroundBrush->MediaObject=NULL;
    DiaporamaObject->BackgroundBrush->MediaObject=new cImageFile(ApplicationConfig);
    bool IsValide=DiaporamaObject->BackgroundBrush->MediaObject->GetInformationFromFile(BrushFileName,NULL,NULL,-1);
    if (!IsValide) {
        delete DiaporamaObject->BackgroundBrush->MediaObject;
        DiaporamaObject->BackgroundBrush->MediaObject=NULL;
    } else {
        QImage *Image=DiaporamaObject->BackgroundBrush->MediaObject->ImageAt(true);
        if (Image) {
            DiaporamaObject->BackgroundBrush->ApplyAutoFraming(AUTOFRAMING_FULLMAX,1);
            delete Image;
        } else {
            delete DiaporamaObject->BackgroundBrush->MediaObject;
            DiaporamaObject->BackgroundBrush->MediaObject=NULL;
        }
    }
    RefreshControls();
}

//====================================================================================================================

void DlgBackgroundProperties::s_IntermPosSliderMoved(int Value) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::s_IntermPosSliderMoved");
    if (StopMAJSpinbox) return;
    AppendPartialUndo(UNDOACTION_INTERMPOS,ui->IntermPosED,false);
    DiaporamaObject->BackgroundBrush->Intermediate=double(Value)/100;
    RefreshControls();
}

//====================================================================================================================

void DlgBackgroundProperties::s_IntermPosED(int Value) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::s_IntermPosED");
    if (StopMAJSpinbox) return;
    AppendPartialUndo(UNDOACTION_INTERMPOS,ui->IntermPosED,false);
    DiaporamaObject->BackgroundBrush->Intermediate=double(Value)/100;
    RefreshControls();
}

//====================================================================================================================
// Handler for custom color/brush/pattern/gradient combo box index change
//====================================================================================================================

//========= Gradient shape orientation
void DlgBackgroundProperties::s_ChIndexGradientOrientationCombo(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::s_ChIndexGradientOrientationCombo");
    if (StopMAJSpinbox) return;
    AppendPartialUndo(UNDOACTION_ORIENTATION,ui->OrientationCombo,false);
    DiaporamaObject->BackgroundBrush->GradientOrientation=ui->OrientationCombo->GetCurrentBrush()->GradientOrientation;
    RefreshControls();
}

//========= Shape/Gradient shape first color
void DlgBackgroundProperties::s_ChIndexGradientFirstColorCombo(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::s_ChIndexGradientFirstColorCombo");
    if (StopMAJSpinbox) return;
    AppendPartialUndo(UNDOACTION_FIRSTCOLOR,ui->FirstColorCombo,false);
    DiaporamaObject->BackgroundBrush->ColorD=ui->FirstColorCombo->GetCurrentColor();
    RefreshControls();
}

//========= Gradient shape last color
void DlgBackgroundProperties::s_ChIndexGradientFinalColorCombo(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::s_ChIndexGradientFinalColorCombo");
    if (StopMAJSpinbox) return;
    AppendPartialUndo(UNDOACTION_LASTCOLOR,ui->FinalColorCombo,false);
    DiaporamaObject->BackgroundBrush->ColorF=ui->FinalColorCombo->GetCurrentColor();
    RefreshControls();
}

//========= Gradient shape intermediate color
void DlgBackgroundProperties::s_ChIndexGradientIntermColorCombo(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::s_ChIndexGradientIntermColorCombo");
    if (StopMAJSpinbox) return;
    AppendPartialUndo(UNDOACTION_INTERMCOLOR,ui->IntermColorCombo,false);
    DiaporamaObject->BackgroundBrush->ColorIntermed=ui->IntermColorCombo->GetCurrentColor();
    RefreshControls();
}

//========= Background image
void DlgBackgroundProperties::s_ChIndexBackgroundCombo() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::s_ChIndexBackgroundCombo");
    if (StopMAJSpinbox) return;
    AppendPartialUndo(UNDOACTION_LIBBRUSH,ui->BackgroundCombo,false);
    DiaporamaObject->BackgroundBrush->BrushImage=ui->BackgroundCombo->GetCurrentBackground();
    RefreshControls();
}

//========= Image file correction
void DlgBackgroundProperties::s_ImageEditCorrect() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::s_ImageEditCorrect");
    AppendPartialUndo(UNDOACTION_EDITIMG,ui->ImageEditCorrectBT,false);

    DlgImageCorrection Dlg(NULL,NULL,DiaporamaObject->BackgroundBrush,0,DiaporamaObject->Parent->ImageGeometry,SPEEDWAVE_DISABLE,ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) {
        RefreshControls();
    } else {
        RemoveLastPartialUndo();
    }
}

//====================================================================================================================

void DlgBackgroundProperties::s_FullFill() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::s_FullFill");
    AppendPartialUndo(UNDOACTION_FULLFILL,ui->FullFillRB,true);
    DiaporamaObject->BackgroundBrush->FullFilling=true;
    RefreshControls();
}

//====================================================================================================================

void DlgBackgroundProperties::s_KeepRatio() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgBackgroundProperties::s_KeepRatio");
    AppendPartialUndo(UNDOACTION_KEEPRATIO,ui->KeepRatioRB,true);
    DiaporamaObject->BackgroundBrush->FullFilling=false;
    RefreshControls();
}
