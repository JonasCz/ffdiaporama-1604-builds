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

#include "wgt_QEditImage.h"
#include "ui_wgt_QEditImageimage.h"
#include "cImgInteractiveZone.h"
#include "DlgImage/DlgImageCorrection.h"
#include "DlgFileExplorer/DlgFileExplorer.h"

#define ICON_RULER_ON                       ":/img/ruler_ok.png"
#define ICON_RULER_OFF                      ":/img/ruler_ko.png"
#define ICON_GEOMETRY_LOCKED                ":/img/Geometry_Lock.png"
#define ICON_GEOMETRY_UNLOCKED              ":/img/Geometry_Unlock.png"
#define ICON_GEOMETRY_PROJECT               ":/img/Geometry_ProjectLock.png"
#define ICON_GEOMETRY_IMAGE                 ":/img/Geometry_ImageLock.png"
#define ICON_IMAGE_FILE                     ":/img/Image_File.png"
#define ICON_MOVIE_FILE                     ":/img/Video_File.png"

//====================================================================================================================

wgt_QEditImage::wgt_QEditImage(QWidget *parent):QWidget(parent),ui(new Ui::wgt_QEditImage) {
    ui->setupUi(this);
    StopMaj         =false;
    UndoReloadImage =false;
}

//====================================================================================================================

wgt_QEditImage::~wgt_QEditImage() {
    delete ui;
}

//====================================================================================================================

void wgt_QEditImage::DoInitWidget(QCustomDialog *ParentDialog,cBrushDefinition *CurrentBrush,QPushButton *RulersBT,cCompositionObject *CompoObject,int *BackgroundForm,int VideoPosition,ffd_GEOMETRY ffDPrjGeometry,int DefaultSpeedWave) {
    this->ParentDialog    =ParentDialog;
    this->CurrentBrush    =CurrentBrush;
    this->RulersBT        =RulersBT;
    this->CompoObject     =CompoObject;
    this->BackgroundForm  =BackgroundForm;
    this->VideoPosition   =VideoPosition;
    this->DefaultSpeedWave=DefaultSpeedWave;

    ui->InteractiveZone->MagneticRuler  =ParentDialog->ApplicationConfig->FramingRuler;
    ui->InteractiveZone->InitCachedImage(CompoObject,BackgroundForm,CurrentBrush,VideoPosition);

    // Get Project Geometry
    switch (ffDPrjGeometry) {
        case GEOMETRY_4_3:      ProjectGeometry=double(1440)/double(1920);  break;
        case GEOMETRY_40_17:    ProjectGeometry=double(816)/double(1920);   break;
        case GEOMETRY_SQUARE:   ProjectGeometry=1;                          break;
        case GEOMETRY_16_9:
        default:                ProjectGeometry=double(1080)/double(1920);  break;

    }
    ProjectGeometry=GetDoubleValue(QString("%1").arg(ProjectGeometry,0,'e'));  // Rounded to same number as style managment

    // Get Image Geometry
    ImageGeometry=qreal(CurrentBrush->MediaObject->ImageHeight)/qreal(CurrentBrush->MediaObject->ImageWidth);
    ImageGeometry=GetDoubleValue(QString("%1").arg(ImageGeometry,0,'e'));  // Rounded to same number as style managment
}

//====================================================================================================================

void wgt_QEditImage::DoInitDialog(bool AllowChangeFile) {
    //*******************************
    // Retire le filtre wave car trop de problème de transparence pour le moment !
    //*******************************

    ui->WaveAmpSlider->setVisible(false);
    ui->WaveAmpValue->setVisible(false);
    ui->WaveAmpResetBT->setVisible(false);
    ui->WaveFreqSlider->setVisible(false);
    ui->WaveFreqValue->setVisible(false);
    ui->WaveFreqResetBT->setVisible(false);
    ui->Wavelabel1->setVisible(false);
    ui->Wavelabel2->setVisible(false);
    ui->Wavelabel3->setVisible(false);

    ui->RotateED->setMinimum(-180);
    ui->RotateED->setMaximum(180);

    ui->XValue->setSingleStep(1);  ui->XValue->setRange(-200,200);
    ui->YValue->setSingleStep(1);  ui->YValue->setRange(-200,200);
    ui->WValue->setSingleStep(1);  ui->WValue->setRange(1,200);
    ui->HValue->setSingleStep(1);  ui->HValue->setRange(1,200);

    ui->VideoPositionLabel->setVisible(CurrentBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE);
    if (AllowChangeFile) {
        ui->FileLabel->setPixmap(CurrentBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE?QPixmap(ICON_MOVIE_FILE):QPixmap(ICON_IMAGE_FILE));
        connect(ui->FileNameBT,SIGNAL(clicked()),this,SLOT(s_ChangeFile()));    // Define specifique handler for changing file
    } else {
        ui->FileNameBT->setEnabled(false);
        ui->FileNameED->setEnabled(false);
    }

    if (BackgroundForm==NULL) {
        // Framing Style
        ui->FramingStyleCB->setVisible(false);
        ui->FramingStyleLabel->setVisible(false);
        // Background form
        ui->BackgroundFormCB->setVisible(false);
        ui->BackgroundFormLabel->setVisible(false);
        // Speed wave
        ui->SpeedWaveCB->setVisible(false);
        ui->SpeedWaveLabel->setVisible(false);
        ui->SpeedWaveSection->setVisible(false);
    } else {
        // Background form
        for (int i=0;i<ShapeFormDefinition.count();i++) if (ShapeFormDefinition.at(i).Enable) ui->BackgroundFormCB->addItem(ShapeFormDefinition.at(i).Name,QVariant(i));
        MakeFormIcon(ui->BackgroundFormCB);
        // Speed wave
        if (DefaultSpeedWave==SPEEDWAVE_DISABLE) ui->SpeedWaveCB->setEnabled(false); else ui->SpeedWaveCB->AddProjectDefault(DefaultSpeedWave);
        connect(ui->SpeedWaveCB,SIGNAL(currentIndexChanged(int)),this,SLOT(s_SpeedWaveChanged(int)));
    }

    RulersBT->setIcon(QIcon(ParentDialog->ApplicationConfig->FramingRuler?QString(ICON_RULER_ON):QString(ICON_RULER_OFF)));
    connect(RulersBT,SIGNAL(clicked()),this,SLOT(s_RulersBT()));

    connect(ui->BackgroundFormCB,SIGNAL(itemSelectionHaveChanged()),this,SLOT(s_ShapeBackgroundForm()));
    connect(ui->RotateED,SIGNAL(valueChanged(double)),this,SLOT(s_RotationEDChanged(double)));
    connect(ui->XValue,SIGNAL(valueChanged(double)),this,SLOT(s_XValueEDChanged(double)));
    connect(ui->YValue,SIGNAL(valueChanged(double)),this,SLOT(s_YValueEDChanged(double)));
    connect(ui->WValue,SIGNAL(valueChanged(double)),this,SLOT(s_WValueEDChanged(double)));
    connect(ui->HValue,SIGNAL(valueChanged(double)),this,SLOT(s_HValueEDChanged(double)));
    connect(ui->RotateLeftBT,SIGNAL(clicked()),this,SLOT(s_RotateLeft()));
    connect(ui->RotateRightBT,SIGNAL(clicked()),this,SLOT(s_RotateRight()));
    connect(ui->FramingStyleCB,SIGNAL(itemSelectionHaveChanged()),this,SLOT(s_FramingStyleChanged()));
    connect(ui->BrightnessSlider,SIGNAL(valueChanged(int)),this,SLOT(s_BrightnessSliderMoved(int)));
    connect(ui->BrightnessValue,SIGNAL(valueChanged(int)),this,SLOT(s_BrightnessSliderMoved(int)));
    connect(ui->BrightnessResetBT,SIGNAL(clicked()),this,SLOT(s_BrightnessReset()));
    connect(ui->ContrastSlider,SIGNAL(valueChanged(int)),this,SLOT(s_ContrastSliderMoved(int)));
    connect(ui->ContrastValue,SIGNAL(valueChanged(int)),this,SLOT(s_ContrastSliderMoved(int)));
    connect(ui->ContrastResetBT,SIGNAL(clicked()),this,SLOT(s_ContrastReset()));
    connect(ui->GammaSlider,SIGNAL(valueChanged(int)),this,SLOT(s_GammaSliderMoved(int)));
    connect(ui->GammaValue,SIGNAL(valueChanged(double)),this,SLOT(s_GammaValueED(double)));
    connect(ui->GammaResetBT,SIGNAL(clicked()),this,SLOT(s_GammaReset()));
    connect(ui->RedSlider,SIGNAL(valueChanged(int)),this,SLOT(s_RedSliderMoved(int)));
    connect(ui->RedValue,SIGNAL(valueChanged(int)),this,SLOT(s_RedSliderMoved(int)));
    connect(ui->RedResetBT,SIGNAL(clicked()),this,SLOT(s_RedReset()));
    connect(ui->GreenSlider,SIGNAL(valueChanged(int)),this,SLOT(s_GreenSliderMoved(int)));
    connect(ui->GreenValue,SIGNAL(valueChanged(int)),this,SLOT(s_GreenSliderMoved(int)));
    connect(ui->GreenResetBT,SIGNAL(clicked()),this,SLOT(s_GreenReset()));
    connect(ui->BlueSlider,SIGNAL(valueChanged(int)),this,SLOT(s_BlueSliderMoved(int)));
    connect(ui->BlueValue,SIGNAL(valueChanged(int)),this,SLOT(s_BlueSliderMoved(int)));
    connect(ui->BlueResetBT,SIGNAL(clicked()),this,SLOT(s_BlueReset()));
    connect(ui->DesatSlider,SIGNAL(valueChanged(int)),this,SLOT(s_DesatSliderMoved(int)));
    connect(ui->DesatValue,SIGNAL(valueChanged(int)),this,SLOT(s_DesatSliderMoved(int)));
    connect(ui->DesatResetBT,SIGNAL(clicked()),this,SLOT(s_DesatReset()));

    connect(ui->SwirlSlider,SIGNAL(valueChanged(int)),this,SLOT(s_SwirlSliderMoved(int)));
    connect(ui->SwirlValue,SIGNAL(valueChanged(int)),this,SLOT(s_SwirlSliderMoved(int)));
    connect(ui->SwirlResetBT,SIGNAL(clicked()),this,SLOT(s_SwirlReset()));
    connect(ui->ImplodeSlider,SIGNAL(valueChanged(int)),this,SLOT(s_ImplodeSliderMoved(int)));
    connect(ui->ImplodeValue,SIGNAL(valueChanged(int)),this,SLOT(s_ImplodeSliderMoved(int)));
    connect(ui->ImplodeResetBT,SIGNAL(clicked()),this,SLOT(s_ImplodeReset()));

    connect(ui->FilterOnOff_GrayCB,SIGNAL(stateChanged(int)),this,SLOT(s_OnOffFilter_Gray_Changed(int)));
    connect(ui->FilterOnOff_EqualizeCB,SIGNAL(stateChanged(int)),this,SLOT(s_OnOffFilter_Equalize_Changed(int)));
    connect(ui->FilterOnOff_DespeckleCB,SIGNAL(stateChanged(int)),this,SLOT(s_OnOffFilter_Despeckle_Changed(int)));
    connect(ui->FilterOnOff_NegativeCB,SIGNAL(stateChanged(int)),this,SLOT(s_OnOffFilter_Negative_Changed(int)));
    connect(ui->FilterOnOff_EmbossCB,SIGNAL(stateChanged(int)),this,SLOT(s_OnOffFilter_Emboss_Changed(int)));
    connect(ui->FilterOnOff_EdgeCB,SIGNAL(stateChanged(int)),this,SLOT(s_OnOffFilter_Edge_Changed(int)));
    connect(ui->FilterOnOff_AntialiasCB,SIGNAL(stateChanged(int)),this,SLOT(s_OnOffFilter_Antialias_Changed(int)));
    connect(ui->FilterOnOff_NormalizeCB,SIGNAL(stateChanged(int)),this,SLOT(s_OnOffFilter_Normalize_Changed(int)));
    connect(ui->FilterOnOff_CharcoalCB,SIGNAL(stateChanged(int)),this,SLOT(s_OnOffFilter_Charcoal_Changed(int)));
    connect(ui->FilterOnOff_OilCB,SIGNAL(stateChanged(int)),this,SLOT(s_OnOffFilter_Oil_Changed(int)));

    connect(ui->BlurSharpenTypeCB,SIGNAL(currentIndexChanged(int)),this,SLOT(s_BlurSharpenTypeChanged(int)));
    connect(ui->BlurSharpenRadiusSlider,SIGNAL(valueChanged(int)),this,SLOT(s_BlurSharpenRadiusSliderMoved(int)));
    connect(ui->BlurSharpenRadiusED,SIGNAL(valueChanged(int)),this,SLOT(s_BlurSharpenRadiusSliderMoved(int)));
    connect(ui->BlurSharpenSigmaSlider,SIGNAL(valueChanged(int)),this,SLOT(s_BlurSharpenSigmaSliderMoved(int)));
    connect(ui->BlurSharpenSigmaSB,SIGNAL(valueChanged(double)),this,SLOT(s_BlurSharpenSigmaValueED(double)));
    connect(ui->QuickBlurSharpenSigmaSlider,SIGNAL(valueChanged(int)),this,SLOT(s_QuickBlurSharpenSigmaSliderMoved(int)));
    connect(ui->QuickBlurSharpenSigmaSB,SIGNAL(valueChanged(int)),this,SLOT(s_QuickBlurSharpenSigmaSliderMoved(int)));
    connect(ui->QuickBlurSharpenSigmaResetBT,SIGNAL(clicked()),this,SLOT(s_QuickBlurSharpenSigmaReset()));
    connect(ui->BlurSharpenSigmaResetBT,SIGNAL(clicked()),this,SLOT(s_BlurSharpenSigmaReset()));
    connect(ui->BlurSharpenRadiusResetBT,SIGNAL(clicked()),this,SLOT(s_BlurSharpenRadiusReset()));

    connect(ui->InteractiveZone,SIGNAL(TransformBlock(qreal,qreal,qreal,qreal)),this,SLOT(s_IntZoneTransformBlocks(qreal,qreal,qreal,qreal)));
    connect(ui->InteractiveZone,SIGNAL(DisplayTransformBlock(qreal,qreal,qreal,qreal)),this,SLOT(s_DisplayIntZoneTransformBlocks(qreal,qreal,qreal,qreal)));

    CurrentFramingStyle=-100;

    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::WinFocus() {
    ui->InteractiveZone->setFocus();
    ui->InteractiveZone->RefreshDisplay();
    RulersBT->setVisible(true);
}

void wgt_QEditImage::LostFocus() {
    RulersBT->setVisible(false);
}

//====================================================================================================================

void wgt_QEditImage::RefreshControls() {
    if (StopMaj) return;
    StopMaj=true;

    // Framing and form
    ui->BackgroundFormCB->PrepareFrameShapeTable(true,0,*ui->InteractiveZone->BackgroundForm);
    ui->BackgroundFormCB->SetCurrentFrameShape(*ui->InteractiveZone->BackgroundForm);
    ui->XValue->setValue(CurrentBrush->X*100);
    ui->YValue->setValue(CurrentBrush->Y*100);
    ui->WValue->setValue(CurrentBrush->ZoomFactor*100);
    ui->HValue->setValue(CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio*100);

    // Image rotation
    ui->RotateED->setValue(CurrentBrush->ImageRotation);

    // Luminosity, contrast and gamma
    ui->BrightnessSlider->setValue(CurrentBrush->Brightness);     ui->BrightnessValue->setValue(CurrentBrush->Brightness);
    ui->GammaSlider->setValue(CurrentBrush->Gamma*100);           ui->GammaValue->setValue(CurrentBrush->Gamma);
    ui->FilterOnOff_NormalizeCB->setChecked((CurrentBrush->OnOffFilter & FilterNormalize)!=0);
    ui->ContrastSlider->setValue(CurrentBrush->Contrast);
    ui->ContrastValue->setValue(CurrentBrush->Contrast);
    ui->ContrastSlider->setVisible(!ui->FilterOnOff_NormalizeCB->isChecked());
    ui->ContrastValue->setVisible(!ui->FilterOnOff_NormalizeCB->isChecked());
    ui->ContrastResetBT->setVisible(!ui->FilterOnOff_NormalizeCB->isChecked());
    ui->ContrastLabel->setVisible(!ui->FilterOnOff_NormalizeCB->isChecked());

    // Image enhancement
    ui->BlurSharpenTypeCB->setCurrentIndex(CurrentBrush->TypeBlurSharpen);
    ui->BlurSharpenSigmaSlider->setValue(CurrentBrush->GaussBlurSharpenSigma*10);
    ui->BlurSharpenSigmaSB->setValue(CurrentBrush->GaussBlurSharpenSigma);
    ui->QuickBlurSharpenSigmaSlider->setValue(CurrentBrush->QuickBlurSharpenSigma); ui->BlurSharpenSigmaSlider->setVisible(ui->BlurSharpenTypeCB->currentIndex()==1);
    ui->QuickBlurSharpenSigmaSB->setValue(CurrentBrush->QuickBlurSharpenSigma);     ui->BlurSharpenSigmaSB->setVisible(ui->BlurSharpenTypeCB->currentIndex()==1);
    ui->QuickBlurSharpenSigmaSlider->setValue(CurrentBrush->QuickBlurSharpenSigma); ui->QuickBlurSharpenSigmaSlider->setVisible(ui->BlurSharpenTypeCB->currentIndex()==0);
    ui->QuickBlurSharpenSigmaSB->setValue(CurrentBrush->QuickBlurSharpenSigma);     ui->QuickBlurSharpenSigmaSB->setVisible(ui->BlurSharpenTypeCB->currentIndex()==0);
    ui->BlurSharpenSigmaResetBT->setVisible(ui->BlurSharpenTypeCB->currentIndex()==1);
    ui->QuickBlurSharpenSigmaResetBT->setVisible(ui->BlurSharpenTypeCB->currentIndex()==0);
    ui->BlurSharpenRadiusSlider->setValue(int(CurrentBrush->BlurSharpenRadius));
    ui->BlurSharpenRadiusED->setValue(int(CurrentBrush->BlurSharpenRadius));
    ui->FilterOnOff_DespeckleCB->setChecked((CurrentBrush->OnOffFilter & FilterDespeckle)!=0);
    ui->FilterOnOff_AntialiasCB->setChecked((CurrentBrush->OnOffFilter & FilterAntialias)!=0);

    // Color enhancement
    ui->FilterOnOff_GrayCB->setChecked(     (CurrentBrush->OnOffFilter & FilterGray)!=0);
    ui->FilterOnOff_EqualizeCB->setChecked( (CurrentBrush->OnOffFilter & FilterEqualize)!=0);
    ui->RedSlider->setValue(CurrentBrush->Red);                   ui->RedValue->setValue(CurrentBrush->Red);
    ui->GreenSlider->setValue(CurrentBrush->Green);               ui->GreenValue->setValue(CurrentBrush->Green);
    ui->BlueSlider->setValue(CurrentBrush->Blue);                 ui->BlueValue->setValue(CurrentBrush->Blue);
    ui->DesatSlider->setValue(int(CurrentBrush->Desat*100));      ui->DesatValue->setValue(int(CurrentBrush->Desat*100));

    // Artistic effects
    ui->FilterOnOff_NegativeCB->setChecked( (CurrentBrush->OnOffFilter & FilterNegative)!=0);
    ui->FilterOnOff_EmbossCB->setChecked(   (CurrentBrush->OnOffFilter & FilterEmboss)!=0);
    ui->FilterOnOff_EdgeCB->setChecked(     (CurrentBrush->OnOffFilter & FilterEdge)!=0);
    ui->FilterOnOff_CharcoalCB->setChecked( (CurrentBrush->OnOffFilter & FilterCharcoal)!=0);
    ui->FilterOnOff_OilCB->setChecked(      (CurrentBrush->OnOffFilter & FilterOil)!=0);

    // Image distorsion
    ui->SwirlSlider->setValue(int(CurrentBrush->Swirl));            ui->SwirlValue->setValue(int(CurrentBrush->Swirl));
    ui->ImplodeSlider->setValue(int(CurrentBrush->Implode*100));    ui->ImplodeValue->setValue(int(CurrentBrush->Implode*100));

    // Speed wave
    if (DefaultSpeedWave!=SPEEDWAVE_DISABLE) ui->SpeedWaveCB->SetCurrentValue(CurrentBrush->ImageSpeedWave);

    // File
    if (ui->FileNameED->isEnabled()) ui->FileNameED->setText(CurrentBrush->MediaObject->FileName());

    if (ui->VideoPositionLabel->isVisible()) {
        QString VideoPosition=QApplication::translate("wgt_QEditImage","Video position :")+((cVideoFile *)CurrentBrush->MediaObject)->StartPos.addMSecs(ui->InteractiveZone->VideoPosition).toString("hh:mm:ss.zzz");
        ui->VideoPositionLabel->setText(VideoPosition);
    }

    if (ui->InteractiveZone->CachedImage) {
        ui->FramingStyleCB->X=CurrentBrush->X;
        ui->FramingStyleCB->Y=CurrentBrush->Y;
        ui->FramingStyleCB->ZoomFactor=CurrentBrush->ZoomFactor;
        ui->FramingStyleCB->AspectRatio=CurrentBrush->AspectRatio;
        ui->FramingStyleCB->PrepareFramingStyleTable(true,FILTERFRAMING_ALL,CurrentBrush,ui->InteractiveZone->CachedImage,*ui->InteractiveZone->BackgroundForm,ProjectGeometry);
    }
    int NewFramingStyle=CurrentBrush->GetCurrentFramingStyle(ProjectGeometry);
    if (CurrentFramingStyle!=NewFramingStyle) ui->FramingStyleCB->SetCurrentFraming(/*CurrentFramingStyle*/NewFramingStyle);
    ui->FramingStyleCB->MakeIcons();
    ui->InteractiveZone->SendRefreshDisplay();
    StopMaj=false;
}

//====================================================================================================================

void wgt_QEditImage::s_RulersBT() {
    ParentDialog->ApplicationConfig->FramingRuler=!ParentDialog->ApplicationConfig->FramingRuler;
    ui->InteractiveZone->MagneticRuler=ParentDialog->ApplicationConfig->FramingRuler;
    RulersBT->setIcon(QIcon(ParentDialog->ApplicationConfig->FramingRuler?QString(ICON_RULER_ON):QString(ICON_RULER_OFF)));

    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::MakeFormIcon(QComboBox *UICB) {
    for (int i=0;i<UICB->count();i++) {
        cCompositionObject Object(COMPOSITIONTYPE_BACKGROUND,0,ParentDialog->ApplicationConfig,this);
        Object.x                        =0;
        Object.y                        =0;
        Object.w                        =1;
        Object.h                        =1;
        Object.BackgroundForm           =UICB->itemData(i).toInt();
        Object.Opacity                  =4;
        Object.PenSize                  =1;
        Object.PenStyle                 =Qt::SolidLine;
        Object.PenColor                 ="#000000";
        Object.BackgroundBrush->ColorD  ="#FFFFFF";
        Object.BackgroundBrush->BrushType=BRUSHTYPE_SOLID;
        QPixmap  Image(UICB->iconSize());
        QPainter Painter;
        Painter.begin(&Image);
        Painter.fillRect(QRect(0,0,UICB->iconSize().width(),UICB->iconSize().height()),"#ffffff");
        Object.DrawCompositionObject(NULL,&Painter,1,UICB->iconSize().width(),UICB->iconSize().height(),true,0,NULL,1,1,NULL,false,0,false);
        Painter.end();
        UICB->setItemIcon(i,QIcon(Image));
    }
}

//====================================================================================================================

void wgt_QEditImage::s_SpeedWaveChanged(int) {
    if (StopMaj) return;
    StopMaj=true;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->SpeedWaveCB,true);
    CurrentBrush->ImageSpeedWave=ui->SpeedWaveCB->GetCurrentValue();
    RefreshControls();
    StopMaj=false;
}
//====================================================================================================================

void wgt_QEditImage::s_XValueEDChanged(double Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->X=Value/100;
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_YValueEDChanged(double Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->Y=Value/100;
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_WValueEDChanged(double Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    if (CurrentBrush->LockGeometry) {
        CurrentBrush->ZoomFactor=Value/100;
    } else {
        qreal newH=CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio*ui->InteractiveZone->Hyp.Image;
        CurrentBrush->ZoomFactor=Value/100;
        qreal newW=CurrentBrush->ZoomFactor*ui->InteractiveZone->Hyp.Image;
        CurrentBrush->AspectRatio=newH/newW;
    }
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_HValueEDChanged(double Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    qreal newH=(Value/100)*ui->InteractiveZone->Hyp.Image;
    if (CurrentBrush->LockGeometry) {
        qreal newW=newH/CurrentBrush->AspectRatio;
        CurrentBrush->ZoomFactor=newW/ui->InteractiveZone->Hyp.Image;
    } else {
        qreal newW=CurrentBrush->ZoomFactor*ui->InteractiveZone->Hyp.Image;
        CurrentBrush->AspectRatio=newH/newW;
    }
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_RotationEDChanged(double Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    if (Value<-180) Value=360-Value;
    if (Value>180)  Value=-360-Value;
    CurrentBrush->ImageRotation=Value;
    CurrentFramingStyle=ui->FramingStyleCB->GetCurrentFraming();
    CurrentBrush->ApplyAutoFraming(CurrentFramingStyle,ProjectGeometry);
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_RotateLeft() {
    if (StopMaj) return;
    qreal Value=(int((CurrentBrush->ImageRotation-90)/90)*90);
    if (Value<=-180) Value=360-Value;
    ui->RotateED->setValue(Value);
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_RotateRight() {
    if (StopMaj) return;
    qreal Value=(int((CurrentBrush->ImageRotation+90)/90)*90);
    if (Value>180) Value=-360+Value;
    ui->RotateED->setValue(Value);
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_OnOffFilter_Gray_Changed(int) {
    if (StopMaj) return;
    if (((CurrentBrush->OnOffFilter & FilterGray)!=0)==ui->FilterOnOff_GrayCB->isChecked()) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,true);
    if (ui->FilterOnOff_GrayCB->isChecked())    CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter | FilterGray;
        else                                    CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter & ~FilterGray;
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_OnOffFilter_Equalize_Changed(int) {
    if (((CurrentBrush->OnOffFilter & FilterEqualize)!=0)==ui->FilterOnOff_EqualizeCB->isChecked()) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,true);
    if (ui->FilterOnOff_EqualizeCB->isChecked())    CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter | FilterEqualize;
        else                                        CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter & ~FilterEqualize;
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_OnOffFilter_Despeckle_Changed(int) {
    if (((CurrentBrush->OnOffFilter & FilterDespeckle)!=0)==ui->FilterOnOff_DespeckleCB->isChecked()) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,true);
    if (ui->FilterOnOff_DespeckleCB->isChecked())   CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter | FilterDespeckle;
        else                                        CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter & ~FilterDespeckle;
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_OnOffFilter_Negative_Changed(int) {
    if (((CurrentBrush->OnOffFilter & FilterNegative)!=0)==ui->FilterOnOff_NegativeCB->isChecked()) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,true);
    if (ui->FilterOnOff_NegativeCB->isChecked())    CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter | FilterNegative;
        else                                        CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter & ~FilterNegative;
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_OnOffFilter_Emboss_Changed(int) {
    if (((CurrentBrush->OnOffFilter & FilterEmboss)!=0)==ui->FilterOnOff_EmbossCB->isChecked()) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,true);
    if (ui->FilterOnOff_EmbossCB->isChecked())      CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter | FilterEmboss;
        else                                        CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter & ~FilterEmboss;
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_OnOffFilter_Edge_Changed(int) {
    if (((CurrentBrush->OnOffFilter & FilterEdge)!=0)==ui->FilterOnOff_EdgeCB->isChecked()) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,true);
    if (ui->FilterOnOff_EdgeCB->isChecked())        CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter | FilterEdge;
        else                                        CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter & ~FilterEdge;
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_OnOffFilter_Antialias_Changed(int) {
    if (((CurrentBrush->OnOffFilter & FilterAntialias)!=0)==ui->FilterOnOff_AntialiasCB->isChecked()) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,true);
    if (ui->FilterOnOff_AntialiasCB->isChecked())   CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter | FilterAntialias;
        else                                        CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter & ~FilterAntialias;
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_OnOffFilter_Normalize_Changed(int) {
    if (((CurrentBrush->OnOffFilter & FilterNormalize)!=0)==ui->FilterOnOff_NormalizeCB->isChecked()) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,true);
    if (ui->FilterOnOff_NormalizeCB->isChecked())   CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter | FilterNormalize;
        else                                        CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter & ~FilterNormalize;
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_OnOffFilter_Charcoal_Changed(int) {
    if (((CurrentBrush->OnOffFilter & FilterCharcoal)!=0)==ui->FilterOnOff_CharcoalCB->isChecked()) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,true);
    if (ui->FilterOnOff_CharcoalCB->isChecked())   CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter | FilterCharcoal;
        else                                        CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter & ~FilterCharcoal;
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_OnOffFilter_Oil_Changed(int) {
    if (((CurrentBrush->OnOffFilter & FilterOil)!=0)==ui->FilterOnOff_OilCB->isChecked()) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,true);
    if (ui->FilterOnOff_OilCB->isChecked())   CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter | FilterOil;
        else                                  CurrentBrush->OnOffFilter=CurrentBrush->OnOffFilter & ~FilterOil;
    RefreshControls();
}

//====================================================================================================================
// Blur/Sharpen
//====================================================================================================================

void wgt_QEditImage::s_BlurSharpenTypeChanged(int Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->TypeBlurSharpen=Value;
    RefreshControls();
}

void wgt_QEditImage::s_BlurSharpenSigmaSliderMoved(int Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->GaussBlurSharpenSigma=qreal(Value)/10;
    ui->BlurSharpenSigmaSlider->setValue(CurrentBrush->GaussBlurSharpenSigma*10);
    ui->BlurSharpenSigmaSB->setValue(CurrentBrush->GaussBlurSharpenSigma);
    RefreshControls();
}

void wgt_QEditImage::s_BlurSharpenSigmaValueED(double Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->GaussBlurSharpenSigma=Value;
    ui->BlurSharpenSigmaSlider->setValue(CurrentBrush->GaussBlurSharpenSigma*10);
    ui->BlurSharpenSigmaSB->setValue(CurrentBrush->GaussBlurSharpenSigma);
    RefreshControls();
}

void wgt_QEditImage::s_QuickBlurSharpenSigmaSliderMoved(int Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->QuickBlurSharpenSigma=qreal(Value);
    ui->QuickBlurSharpenSigmaSlider->setValue(int(CurrentBrush->QuickBlurSharpenSigma));
    ui->QuickBlurSharpenSigmaSB->setValue(int(CurrentBrush->QuickBlurSharpenSigma));
    RefreshControls();
}

void wgt_QEditImage::s_BlurSharpenRadiusSliderMoved(int Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->BlurSharpenRadius=qreal(Value);
    ui->BlurSharpenRadiusSlider->setValue(int(CurrentBrush->BlurSharpenRadius));
    ui->BlurSharpenRadiusED->setValue(int(CurrentBrush->BlurSharpenRadius));
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_BrightnessSliderMoved(int Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->Brightness=Value;
    ui->BrightnessSlider->setValue(CurrentBrush->Brightness);
    ui->BrightnessValue->setValue(CurrentBrush->Brightness);
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_ContrastSliderMoved(int Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->Contrast=Value;
    ui->ContrastSlider->setValue(CurrentBrush->Contrast);
    ui->ContrastValue->setValue(CurrentBrush->Contrast);
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_GammaSliderMoved(int Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->Gamma=qreal(Value)/100;
    ui->GammaSlider->setValue(CurrentBrush->Gamma*100);
    ui->GammaValue->setValue(CurrentBrush->Gamma);
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_GammaValueED(double Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->Gamma=Value;
    ui->GammaSlider->setValue(CurrentBrush->Gamma*100);
    ui->GammaValue->setValue(CurrentBrush->Gamma);
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_RedSliderMoved(int Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->Red=Value;
    ui->RedSlider->setValue(CurrentBrush->Red);
    ui->RedValue->setValue(CurrentBrush->Red);
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_GreenSliderMoved(int Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->Green=Value;
    ui->GreenSlider->setValue(CurrentBrush->Green);
    ui->GreenValue->setValue(CurrentBrush->Green);
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_BlueSliderMoved(int Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->Blue=Value;
    ui->BlueSlider->setValue(CurrentBrush->Blue);
    ui->BlueValue->setValue(CurrentBrush->Blue);
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_DesatSliderMoved(int Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->Desat=double(Value)/100;
    ui->DesatSlider->setValue(int(CurrentBrush->Desat*100));
    ui->DesatValue->setValue(int(CurrentBrush->Desat*100));
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_SwirlSliderMoved(int Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->Swirl=double(Value);
    ui->SwirlSlider->setValue(int(CurrentBrush->Swirl));
    ui->SwirlValue->setValue(int(CurrentBrush->Swirl));
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_ImplodeSliderMoved(int Value) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,false);
    CurrentBrush->Implode=double(Value)/100;
    ui->ImplodeSlider->setValue(int(CurrentBrush->Implode*100));
    ui->ImplodeValue->setValue(int(CurrentBrush->Implode*100));
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_ShapeBackgroundForm() {
    if ((StopMaj)||(!ui->BackgroundFormCB->isVisible())) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->BackgroundFormCB,false);
    *BackgroundForm=ui->BackgroundFormCB->GetCurrentFrameShape();
    ui->InteractiveZone->RefreshDisplay();
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::s_FramingStyleChanged() {
    if (StopMaj) return;
    if (CurrentFramingStyle==ui->FramingStyleCB->GetCurrentFraming()) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,true);
    CurrentFramingStyle=ui->FramingStyleCB->GetCurrentFraming();
    switch (ui->FramingStyleCB->GetCurrentFraming()) {
        case -1 :
            CurrentFramingStyle=CurrentBrush->GetCurrentFramingStyle(ProjectGeometry);
            ui->FramingStyleCB->SetCurrentFraming(CurrentFramingStyle);
            break;
        case AUTOFRAMING_CUSTOMUNLOCK   :
            CurrentBrush->LockGeometry=false;
            CurrentBrush->X           =ui->FramingStyleCB->X;
            CurrentBrush->Y           =ui->FramingStyleCB->Y;
            CurrentBrush->AspectRatio =ui->FramingStyleCB->AspectRatio;
            CurrentBrush->ZoomFactor  =ui->FramingStyleCB->ZoomFactor;
            break;
        case AUTOFRAMING_CUSTOMLOCK     :
            CurrentBrush->LockGeometry=true;
            CurrentBrush->X           =ui->FramingStyleCB->X;
            CurrentBrush->Y           =ui->FramingStyleCB->Y;
            CurrentBrush->AspectRatio =ui->FramingStyleCB->AspectRatio;
            CurrentBrush->ZoomFactor  =ui->FramingStyleCB->ZoomFactor;
            break;
        case AUTOFRAMING_CUSTOMIMGLOCK  :
            CurrentBrush->LockGeometry=true;
            CurrentBrush->X           =ui->FramingStyleCB->X;
            CurrentBrush->Y           =ui->FramingStyleCB->Y;
            CurrentBrush->AspectRatio =ImageGeometry;
            CurrentBrush->ZoomFactor  =ui->FramingStyleCB->ZoomFactor;
            break;
        case AUTOFRAMING_CUSTOMPRJLOCK  :
            CurrentBrush->LockGeometry=true;
            CurrentBrush->X           =ui->FramingStyleCB->X;
            CurrentBrush->Y           =ui->FramingStyleCB->Y;
            CurrentBrush->AspectRatio =ProjectGeometry;
            CurrentBrush->ZoomFactor  =ui->FramingStyleCB->ZoomFactor;
            break;

        default : CurrentBrush->ApplyAutoFraming(ui->FramingStyleCB->GetCurrentFraming(),ProjectGeometry); break;
    }
    CurrentFramingStyle=CurrentBrush->GetCurrentFramingStyle(ProjectGeometry);
    RefreshControls();
}

//====================================================================================================================
// Handler for interactive zone
//====================================================================================================================

void wgt_QEditImage::s_IntZoneTransformBlocks(qreal Move_X,qreal Move_Y,qreal Scale_X,qreal Scale_Y) {
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_INTERACTIVEMOVERESIZE,ui->InteractiveZone,true);

    CurrentBrush->X=CurrentBrush->X+Move_X;
    CurrentBrush->Y=CurrentBrush->Y+Move_Y;
    if (!CurrentBrush->LockGeometry) {
        qreal NewH=CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio+Scale_Y;
        CurrentBrush->AspectRatio=NewH/(CurrentBrush->ZoomFactor+Scale_X);
    }
    CurrentBrush->ZoomFactor=CurrentBrush->ZoomFactor+Scale_X;

    ui->InteractiveZone->Move_X =0;
    ui->InteractiveZone->Move_Y =0;
    ui->InteractiveZone->Scale_X=0;
    ui->InteractiveZone->Scale_Y=0;

    RefreshControls();
}

void wgt_QEditImage::s_DisplayIntZoneTransformBlocks(qreal Move_X,qreal Move_Y,qreal Scale_X,qreal Scale_Y) {
    qreal NewX=CurrentBrush->X+Move_X;
    qreal NewY=CurrentBrush->Y+Move_Y;
    qreal NewW=CurrentBrush->ZoomFactor+Scale_X;
    qreal NewH=(CurrentBrush->LockGeometry?(CurrentBrush->ZoomFactor+Scale_X)*CurrentBrush->AspectRatio:CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio+Scale_Y);

    StopMaj=true;
    ui->XValue->setValue(NewX*100);
    ui->YValue->setValue(NewY*100);
    ui->WValue->setValue(NewW*100);
    ui->HValue->setValue(NewH*100);
    StopMaj=false;
}

//====================================================================================================================

void wgt_QEditImage::s_ChangeFile() {
    bool        IsValide=true;
    QString     ActualFilePath=QFileInfo(CurrentBrush->MediaObject->FileName()).absolutePath();
    QStringList FileList;
    QString     NewFile="";

    BROWSER_TYPE_ID BrowserType=CurrentBrush->MediaObject->ObjectType==OBJECTTYPE_IMAGEFILE?BROWSER_TYPE_IMAGEONLY:
                                CurrentBrush->MediaObject->ObjectType==OBJECTTYPE_IMAGEVECTOR?BROWSER_TYPE_IMAGEVECTOR:
                                CurrentBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE?BROWSER_TYPE_VIDEOONLY:
                                BROWSER_TYPE_MEDIAFILES;
    if (ParentDialog->ApplicationConfig->RememberLastDirectories) ParentDialog->ApplicationConfig->SettingsTable->SetTextValue(QString("%1_path").arg(BrowserTypeDef[BrowserType].BROWSERString),QDir::toNativeSeparators(ActualFilePath));
    DlgFileExplorer Dlg(BrowserType,false,false,false,QApplication::translate("CommonInfoMsg","Select a file"),ParentDialog->ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) {
        FileList=Dlg.GetCurrentSelectedFiles();
        if (FileList.count()==1) NewFile=FileList.at(0);
    }

    if (NewFile=="") return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_IMAGEEDITZONE,ui->InteractiveZone,true);

    QString NewBrushFileName=QFileInfo(NewFile).absoluteFilePath();
    QString OldBrushFileName=CurrentBrush->MediaObject->FileName();

    ParentDialog->ApplicationConfig->ImagesCache.RemoveImageObject(CurrentBrush->MediaObject->RessourceKey,CurrentBrush->MediaObject->FileKey);
    if (CurrentBrush->MediaObject->ObjectType!=OBJECTTYPE_VIDEOFILE) CurrentBrush->MediaObject->Reset();
        else ((cVideoFile *)CurrentBrush->MediaObject)->Reset(OBJECTTYPE_VIDEOFILE);

    IsValide=(CurrentBrush->MediaObject->GetInformationFromFile(NewBrushFileName,NULL,NULL,-1)&&(CurrentBrush->MediaObject->CheckFormatValide(this)));

    // It error reload previous
    if (!IsValide) IsValide=(CurrentBrush->MediaObject->GetInformationFromFile(OldBrushFileName,NULL,NULL,-1)&&(CurrentBrush->MediaObject->CheckFormatValide(this)));

    if (IsValide) {
        ResetCachedImage();
        UndoReloadImage=true;
    }

    RefreshControls();
}

//====================================================================================================================

void wgt_QEditImage::ResetCachedImage() {
    // Redo initialisation of controls
    ImageGeometry=qreal(CurrentBrush->MediaObject->ImageHeight)/qreal(CurrentBrush->MediaObject->ImageWidth);
    ImageGeometry=GetDoubleValue(QString("%1").arg(ImageGeometry,0,'e'));  // Rounded to same number as style managment
    ui->InteractiveZone->InitCachedImage(ui->InteractiveZone->CompoObject,ui->InteractiveZone->BackgroundForm,ui->InteractiveZone->CurrentBrush,ui->InteractiveZone->VideoPosition);
    ui->InteractiveZone->RefreshDisplay();
    int OldFramingStyle=CurrentFramingStyle;
    CurrentFramingStyle=-100;
    CurrentBrush->ApplyAutoFraming(OldFramingStyle,ProjectGeometry);
    ui->FramingStyleCB->SetCurrentFraming(OldFramingStyle);
}

//====================================================================================================================

void wgt_QEditImage::ReloadFile(QString BrushFileName) {
    ParentDialog->ApplicationConfig->ImagesCache.RemoveImageObject(CurrentBrush->MediaObject->RessourceKey,CurrentBrush->MediaObject->FileKey);
    if (CurrentBrush->MediaObject->ObjectType!=OBJECTTYPE_VIDEOFILE) CurrentBrush->MediaObject->Reset();
        else ((cVideoFile *)CurrentBrush->MediaObject)->Reset(OBJECTTYPE_VIDEOFILE);
    CurrentBrush->MediaObject->GetInformationFromFile(BrushFileName,NULL,NULL,-1);
    ResetCachedImage();
}
