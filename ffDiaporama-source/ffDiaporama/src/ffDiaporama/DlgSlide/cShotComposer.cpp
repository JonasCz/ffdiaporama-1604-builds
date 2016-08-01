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

#include "cShotComposer.h"
#include "cTexteFrameComboBox.h"
#include "CustomCtrl/cCShapeComboBox.h"
#include "cColorComboBox.h"

#include "DlgInfoFile/DlgInfoFile.h"
#include "DlgText/DlgTextEdit.h"

//====================================================================================================================

cShotComposer::cShotComposer(cDiaporamaObject *DiaporamaObject,cApplicationConfig *ApplicationConfig,QWidget *parent):QCustomDialog(ApplicationConfig,parent) {
    switch (DiaporamaObject->Parent->ImageGeometry) {
        case GEOMETRY_4_3:      DisplayW=1440;    DisplayH=1080;     break;
        case GEOMETRY_40_17:    DisplayW=1920;    DisplayH=816;      break;
        case GEOMETRY_16_9:
        default:                DisplayW=1920;    DisplayH=1080;     break;
    }
    CurrentSlide            =DiaporamaObject;
    ProjectGeometry         =DisplayH/DisplayW;
    ProjectGeometry         =GetDoubleValue(QString("%1").arg(ProjectGeometry,0,'e'));  // Rounded to same number as style managment
    TypeWindowState         =TypeWindowState_withsplitterpos;
    CurrentShotNbr          =0;
    CurrentCompoObject      =NULL;
    CurrentCompoObjectNbr   =-1;
    InRefreshControls       =false;
    InSelectionChange       =false;
    BlockSelectMode         =SELECTMODE_NONE;
    NoPrepUndo              =false;
    actionAddImageClipboard =NULL;
    actionPaste             =NULL;
}

//====================================================================================================================
// Initialise dialog
void cShotComposer::DoInitDialog() {
    Splitter->setCollapsible(0,false);
    Splitter->setCollapsible(1,false);
    InteractiveZone->DiaporamaObject            =CurrentSlide;
    InteractiveZone->BlockTable                 =BlockTable;
    BlockTable->ApplicationConfig               =ApplicationConfig;
    BlockTable->CurrentSlide                    =CurrentSlide;
    if (ShotTable) ShotTable->DiaporamaObject   =CurrentSlide;

    if (GETUI("InheritDownCB")) connect(GETCHECKBOX("InheritDownCB"),SIGNAL(clicked()),this,SLOT(s_BlockSettings_BlockInheritances()));

    // Block settings : Coordinates
    if (ApplicationConfig->DisplayUnit==DISPLAYUNIT_PERCENT) {
        GETDOUBLESPINBOX("PosXEd")->setDecimals(2);     GETDOUBLESPINBOX("PosXEd")->setSingleStep(1);       GETDOUBLESPINBOX("PosXEd")->setSuffix("%");
        GETDOUBLESPINBOX("PosYEd")->setDecimals(2);     GETDOUBLESPINBOX("PosYEd")->setSingleStep(1);       GETDOUBLESPINBOX("PosYEd")->setSuffix("%");
        GETDOUBLESPINBOX("WidthEd")->setDecimals(2);    GETDOUBLESPINBOX("WidthEd")->setSingleStep(1);      GETDOUBLESPINBOX("WidthEd")->setSuffix("%");
        GETDOUBLESPINBOX("HeightEd")->setDecimals(2);   GETDOUBLESPINBOX("HeightEd")->setSingleStep(1);     GETDOUBLESPINBOX("HeightEd")->setSuffix("%");
    } else { // DisplayUnit==DISPLAYUNIT_PIXELSTypeWindowState
        GETDOUBLESPINBOX("PosXEd")->setDecimals(0);     GETDOUBLESPINBOX("PosXEd")->setSingleStep(1);       GETDOUBLESPINBOX("PosXEd")->setSuffix("");
        GETDOUBLESPINBOX("PosYEd")->setDecimals(0);     GETDOUBLESPINBOX("PosYEd")->setSingleStep(1);       GETDOUBLESPINBOX("PosYEd")->setSuffix("");
        GETDOUBLESPINBOX("WidthEd")->setDecimals(0);    GETDOUBLESPINBOX("WidthEd")->setSingleStep(1);      GETDOUBLESPINBOX("WidthEd")->setSuffix("");
        GETDOUBLESPINBOX("HeightEd")->setDecimals(0);   GETDOUBLESPINBOX("HeightEd")->setSingleStep(1);     GETDOUBLESPINBOX("HeightEd")->setSuffix("");
    }
    connect(GETUI("PosXEd"),    SIGNAL(valueChanged(double)),this,SLOT(s_BlockSettings_PosXValue(double)));
    connect(GETUI("PosYEd"),    SIGNAL(valueChanged(double)),this,SLOT(s_BlockSettings_PosYValue(double)));
    connect(GETUI("WidthEd"),   SIGNAL(valueChanged(double)),this,SLOT(s_BlockSettings_PosWidthValue(double)));
    connect(GETUI("HeightEd"),  SIGNAL(valueChanged(double)),this,SLOT(s_BlockSettings_PosHeightValue(double)));

    // Block settings : Rotations
    GETSPINBOX("RotateXED")->setRange(-180,180);      GETSLIDER("RotateXSLD")->setRange(-180,180);
    GETSPINBOX("RotateYED")->setRange(-180,180);      GETSLIDER("RotateYSLD")->setRange(-180,180);
    GETSPINBOX("RotateZED")->setRange(-180,180);      GETSLIDER("RotateZSLD")->setRange(-180,180);
    connect(GETUI("RotateXED"),SIGNAL(valueChanged(int)),this,SLOT(s_BlockSettings_RotateXValue(int)));     connect(GETUI("RotateXSLD"),SIGNAL(valueChanged(int)),this,SLOT(s_BlockSettings_RotateXValue(int)));        connect(GETUI("ResetRotateXBT"),SIGNAL(released()),this,SLOT(s_BlockSettings_ResetRotateXValue()));
    connect(GETUI("RotateYED"),SIGNAL(valueChanged(int)),this,SLOT(s_BlockSettings_RotateYValue(int)));     connect(GETUI("RotateYSLD"),SIGNAL(valueChanged(int)),this,SLOT(s_BlockSettings_RotateYValue(int)));        connect(GETUI("ResetRotateYBT"),SIGNAL(released()),this,SLOT(s_BlockSettings_ResetRotateYValue()));
    connect(GETUI("RotateZED"),SIGNAL(valueChanged(int)),this,SLOT(s_BlockSettings_RotateZValue(int)));     connect(GETUI("RotateZSLD"),SIGNAL(valueChanged(int)),this,SLOT(s_BlockSettings_RotateZValue(int)));        connect(GETUI("ResetRotateZBT"),SIGNAL(released()),this,SLOT(s_BlockSettings_ResetRotateZValue()));


    // Init combo box Background form
    for (int i=0;i<ShapeFormDefinition.count();i++) if (ShapeFormDefinition.at(i).Enable) GETCOMBOBOX("BackgroundFormCB")->addItem(ShapeFormDefinition.at(i).Name,QVariant(i));
    MakeFormIcon(GETCOMBOBOX("BackgroundFormCB"));

    if (GETCOMBOBOX("ShadowEffectCB")->view()->width()<500)        GETCOMBOBOX("ShadowEffectCB")->view()->setFixedWidth(500);

    // Init combo box Background shadow form
    GETCOMBOBOX("ShadowEffectCB")->addItem(QApplication::translate("DlgSlideProperties","None"));
    GETCOMBOBOX("ShadowEffectCB")->addItem(QApplication::translate("DlgSlideProperties","Shadow upper left"));
    GETCOMBOBOX("ShadowEffectCB")->addItem(QApplication::translate("DlgSlideProperties","Shadow upper right"));
    GETCOMBOBOX("ShadowEffectCB")->addItem(QApplication::translate("DlgSlideProperties","Shadow bottom left"));
    GETCOMBOBOX("ShadowEffectCB")->addItem(QApplication::translate("DlgSlideProperties","Shadow bottom right"));
    GETSPINBOX("ShadowEffectED")->setRange(1,100);

    // Init combo box external border style
    GETCOMBOBOX("PenStyleCB")->addItem("");    GETCOMBOBOX("PenStyleCB")->setItemData(GETCOMBOBOX("PenStyleCB")->count()-1,(int)Qt::SolidLine);
    GETCOMBOBOX("PenStyleCB")->addItem("");    GETCOMBOBOX("PenStyleCB")->setItemData(GETCOMBOBOX("PenStyleCB")->count()-1,(int)Qt::DashLine);
    GETCOMBOBOX("PenStyleCB")->addItem("");    GETCOMBOBOX("PenStyleCB")->setItemData(GETCOMBOBOX("PenStyleCB")->count()-1,(int)Qt::DotLine);
    GETCOMBOBOX("PenStyleCB")->addItem("");    GETCOMBOBOX("PenStyleCB")->setItemData(GETCOMBOBOX("PenStyleCB")->count()-1,(int)Qt::DashDotLine);
    GETCOMBOBOX("PenStyleCB")->addItem("");    GETCOMBOBOX("PenStyleCB")->setItemData(GETCOMBOBOX("PenStyleCB")->count()-1,(int)Qt::DashDotDotLine);
    MakeBorderStyleIcon(GETCOMBOBOX("PenStyleCB"));

    // Init shape Borders
    GETSPINBOX("PenSizeEd")->setMinimum(0);    GETSPINBOX("PenSizeEd")->setMaximum(30);

    // Init combo box Background opacity
    GETCOMBOBOX("OpacityCB")->addItem("100%");
    GETCOMBOBOX("OpacityCB")->addItem(" 75%");
    GETCOMBOBOX("OpacityCB")->addItem(" 50%");
    GETCOMBOBOX("OpacityCB")->addItem(" 25%");
    connect(GETUI("ShapeSizePosCB"),    SIGNAL(currentIndexChanged(int)),   this,SLOT(s_BlockSettings_ShapeSizePos(int)));
    connect(GETUI("BackgroundFormCB"),  SIGNAL(itemSelectionHaveChanged()), this,SLOT(s_BlockSettings_ShapeBackgroundForm()));
    connect(GETUI("TextClipArtCB"),     SIGNAL(itemSelectionHaveChanged()), this,SLOT(s_BlockSettings_ShapeTextClipArtChIndex()));
    connect(GETUI("OpacityCB"),         SIGNAL(currentIndexChanged(int)),   this,SLOT(s_BlockSettings_ShapeOpacity(int)));
    connect(GETUI("PenStyleCB"),        SIGNAL(currentIndexChanged(int)),   this,SLOT(s_BlockSettings_ShapePenStyle(int)));
    connect(GETUI("ShadowEffectCB"),    SIGNAL(currentIndexChanged(int)),   this,SLOT(s_BlockSettings_ShapeShadowFormValue(int)));
    connect(GETUI("ShadowEffectED"),    SIGNAL(valueChanged(int)),          this,SLOT(s_BlockSettings_ShapeShadowDistanceValue(int)));
    connect(GETUI("PenColorCB"),        SIGNAL(currentIndexChanged(int)),   this,SLOT(s_BlockSettings_ShapePenColor(int)));
    connect(GETUI("PenSizeEd"),         SIGNAL(valueChanged(int)),          this,SLOT(s_BlockSettings_ShapePenSize(int)));
    connect(GETUI("ShadowColorCB"),     SIGNAL(currentIndexChanged(int)),   this,SLOT(s_BlockSettings_ShapeShadowColor(int)));
    connect(GETUI("BlockShapeStyleBT"), SIGNAL(pressed()),                  this,SLOT(s_BlockSettings_BlockShapeStyleBT()));

    s_Event_ClipboardChanged();           // Setup clipboard button state
    connect(QApplication::clipboard(),SIGNAL(dataChanged()),this,SLOT(s_Event_ClipboardChanged()));
}

//====================================================================================================================
// Utility functions
//====================================================================================================================

// Fill background combobox
void cShotComposer::MakeFormIcon(QComboBox *UICB) {
    for (int i=0;i<UICB->count();i++) {
        cCompositionObject Object(COMPOSITIONTYPE_BACKGROUND,0,ApplicationConfig,this);
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

// Fill border combobox
void cShotComposer::MakeBorderStyleIcon(QComboBox *UICB) {
    for (int i=0;i<UICB->count();i++) {
        QPixmap  Image(32,32);
        QPainter Painter;
        Painter.begin(&Image);
        Painter.fillRect(QRect(0,0,32,32),"#ffffff");
        QPen Pen;
        Pen.setColor(Qt::black);
        Pen.setStyle((Qt::PenStyle)UICB->itemData(i).toInt());
        Pen.setWidth(2);
        Painter.setPen(Pen);
        Painter.setBrush(QBrush(QColor("#ffffff")));
        Painter.drawLine(0,16,32,16);
        Painter.end();
        UICB->setItemIcon(i,QIcon(Image));
    }
}

void cShotComposer::ComputeBlockRatio(cCompositionObject *Block,qreal &Ratio_X,qreal &Ratio_Y) {
    if (!Block) return;
    QRectF tmpRect=PolygonToRectF(ComputePolygon(Block->BackgroundForm,Block->x*InteractiveZone->DisplayW,Block->y*InteractiveZone->DisplayH,Block->w*InteractiveZone->DisplayW,Block->h*InteractiveZone->DisplayH));
    Ratio_X=(Block->w*InteractiveZone->DisplayW)/tmpRect.width();
    Ratio_Y=(Block->h*InteractiveZone->DisplayH)/tmpRect.height();
}

void cShotComposer::ResetThumbs(bool ResetAllThumbs) {
    if (ShotTable) for (int i=(ResetAllThumbs?0:CurrentShotNbr);i<CurrentSlide->List.count();i++) {
        if (i==0) ApplicationConfig->SlideThumbsTable->ClearThumbs(CurrentSlide->ThumbnailKey);
        ShotTable->RepaintCell(i);
    }
}

void cShotComposer::ApplyToContexte(bool ResetAllThumbs) {
    if (!CurrentCompoObject) return;

    // Apply to GlobalComposition objects
    for (int j=0;j<CurrentSlide->ObjectComposition.List.count();j++) if (CurrentCompoObject->IndexKey==CurrentSlide->ObjectComposition.List[j]->IndexKey)
        CurrentCompoObject->CopyBlockProperties(CurrentCompoObject,CurrentSlide->ObjectComposition.List[j]);

    // Apply to Shots Composition objects
    for (int i=0;i<CurrentSlide->List.count();i++) for (int j=0;j<CurrentSlide->List[i]->ShotComposition.List.count();j++) if (CurrentCompoObject->IndexKey==CurrentSlide->List[i]->ShotComposition.List[j]->IndexKey)
        CurrentCompoObject->CopyBlockProperties(CurrentCompoObject,CurrentSlide->List[i]->ShotComposition.List[j]);

    // Reset thumbs if needed
    ResetThumbs(ResetAllThumbs);

    // Reset blocks table
    RefreshBlockTable(CurrentCompoObjectNbr);

    // Reset controls
    RefreshControls(true);
}

cCompositionObject *cShotComposer::GetGlobalCompositionObject(int IndexKey) {
    int CurrentBlock=BlockTable->currentRow();
    if ((CurrentBlock<0)||(CurrentBlock>=CompositionList->List.count())) return NULL;
    int i=0;
    while ((i<CurrentSlide->ObjectComposition.List.count())&&(CurrentSlide->ObjectComposition.List[i]->IndexKey!=IndexKey)) i++;
    if (i<CurrentSlide->ObjectComposition.List.count()) return CurrentSlide->ObjectComposition.List[i]; else return NULL;
}

//====================================================================================================================

void cShotComposer::s_Event_ClipboardChanged() {
    bool    HasImage=(QApplication::clipboard())&&(QApplication::clipboard()->mimeData())&&(QApplication::clipboard()->mimeData()->hasImage());
    bool    CanPaste=(QApplication::clipboard())&&(QApplication::clipboard()->mimeData())&&(QApplication::clipboard()->mimeData()->hasFormat("ffDiaporama/block"));
    if (actionAddImageClipboard) actionAddImageClipboard->setEnabled(HasImage);
    if (actionPaste)             actionPaste->setEnabled(CanPaste);
}

//====================================================================================================================

void cShotComposer::RefreshControls(bool UpdateInteractiveZone) {
    InRefreshControls=true;
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));

    bool bEnable = CurrentCompoObject && CurrentCompoObject->IsVisible;
    if ((BlockSelectMode==SELECTMODE_ONE)&&(CurrentCompoObject)/*&&(CurrentCompoObject->IsVisible)*/) {

        qreal Ratio_X,Ratio_Y;
        ComputeBlockRatio(CurrentCompoObject,Ratio_X,Ratio_Y);

        if (GETUI("InheritDownCB")) {
            GETUI("InheritDownCB")->setEnabled(CurrentShotNbr!=0);
            if (GETCHECKBOX("InheritDownCB")->isChecked()!=!CurrentCompoObject->BlockInheritance)
                GETCHECKBOX("InheritDownCB")->setChecked(!CurrentCompoObject->BlockInheritance);
        }

        // Position, size and rotation
        GETUI("PosSize_X")->     setEnabled(bEnable);
        GETUI("PosSize_Y")->     setEnabled(bEnable);
        GETUI("PosSize_Width")-> setEnabled(bEnable);
        GETUI("PosSize_Height")->setEnabled(bEnable);
        GETDOUBLESPINBOX("PosXEd")->        setEnabled(bEnable);
        GETDOUBLESPINBOX("PosYEd")->        setEnabled(bEnable);
        GETDOUBLESPINBOX("WidthEd")->       setEnabled(bEnable);
        GETDOUBLESPINBOX("HeightEd")->      setEnabled(bEnable);

        if (ApplicationConfig->DisplayUnit==DISPLAYUNIT_PERCENT) {
            GETDOUBLESPINBOX("PosXEd")->  setRange(-200,200);                                                  GETDOUBLESPINBOX("PosXEd")->  setValue(CurrentCompoObject->x*100/Ratio_X);
            GETDOUBLESPINBOX("PosYEd")->  setRange(-200,200);                                                  GETDOUBLESPINBOX("PosYEd")->  setValue(CurrentCompoObject->y*100/Ratio_Y);
            GETDOUBLESPINBOX("WidthEd")-> setRange(1,200);                                                     GETDOUBLESPINBOX("WidthEd")-> setValue(CurrentCompoObject->w*100/Ratio_X);
            GETDOUBLESPINBOX("HeightEd")->setRange(1,200);                                                     GETDOUBLESPINBOX("HeightEd")->setValue(CurrentCompoObject->h*100/Ratio_Y);
        } else { // DisplayUnit==DISPLAYUNIT_PIXELS
            GETDOUBLESPINBOX("PosXEd")->  setRange(-2*InteractiveZone->DisplayW,2*InteractiveZone->DisplayW);  GETDOUBLESPINBOX("PosXEd")->  setValue(CurrentCompoObject->x*InteractiveZone->DisplayW/Ratio_X);
            GETDOUBLESPINBOX("PosYEd")->  setRange(-2*InteractiveZone->DisplayH,2*InteractiveZone->DisplayH);  GETDOUBLESPINBOX("PosYEd")->  setValue(CurrentCompoObject->y*InteractiveZone->DisplayH/Ratio_Y);
            GETDOUBLESPINBOX("WidthEd")-> setRange(3,2*InteractiveZone->DisplayW);                             GETDOUBLESPINBOX("WidthEd")-> setValue(CurrentCompoObject->w*InteractiveZone->DisplayW/Ratio_X);
            GETDOUBLESPINBOX("HeightEd")->setRange(3,2*InteractiveZone->DisplayH);                             GETDOUBLESPINBOX("HeightEd")->setValue(CurrentCompoObject->h*InteractiveZone->DisplayH/Ratio_Y);
        }

        // Rotation
        GETUI("Rotate_X")-> setEnabled(bEnable);
        GETSPINBOX("RotateXED")-> setEnabled(bEnable);
        GETUI("ResetRotateXBT")->setEnabled(bEnable);
        GETSLIDER("RotateXSLD")->setEnabled(bEnable);
        GETUI("Rotate_Y")-> setEnabled(bEnable);
        GETSPINBOX("RotateYED")-> setEnabled(bEnable);
        GETUI("ResetRotateYBT")->setEnabled(bEnable);
        GETSLIDER("RotateYSLD")->setEnabled(bEnable);
        GETUI("Rotate_Z")-> setEnabled(bEnable);
        GETSPINBOX("RotateZED")-> setEnabled(bEnable);
        GETUI("ResetRotateZBT")->setEnabled(bEnable);
        GETSLIDER("RotateZSLD")->setEnabled(bEnable);

        GETSPINBOX("RotateXED")->setValue(CurrentCompoObject->RotateXAxis);                       GETSLIDER("RotateXSLD")->setValue(CurrentCompoObject->RotateXAxis);
        GETSPINBOX("RotateYED")->setValue(CurrentCompoObject->RotateYAxis);                       GETSLIDER("RotateYSLD")->setValue(CurrentCompoObject->RotateYAxis);
        GETSPINBOX("RotateZED")->setValue(CurrentCompoObject->RotateZAxis);                       GETSLIDER("RotateZSLD")->setValue(CurrentCompoObject->RotateZAxis);

        // Shape part
        GETUI("BlockShapeStyleBT")->setEnabled(bEnable);
        GETUI("BlockShapeStyleED")->setEnabled(bEnable);
        GETUI("BackgroundFormCB")->setEnabled(bEnable);
        GETUI("PenSizeEd")->       setEnabled(bEnable);
        GETUI("PenColorCB")->      setEnabled(CurrentCompoObject->PenSize!=0 && bEnable);
        GETUI("PenStyleCB")->      setEnabled(CurrentCompoObject->PenSize!=0 && bEnable);
        GETUI("OpacityCB")->       setEnabled(bEnable);
        GETUI("ShadowEffectCB")->  setEnabled(bEnable);
        GETUI("ShadowEffectED")->  setEnabled(CurrentCompoObject->FormShadow!=0 && bEnable);
        GETUI("ShadowColorCB")->   setEnabled(CurrentCompoObject->FormShadow!=0 && bEnable);

        SetCBIndex(GETCOMBOBOX("BackgroundFormCB"),CurrentCompoObject->BackgroundForm);
        GETSPINBOX("PenSizeEd")->      setValue(int(CurrentCompoObject->PenSize));
        GETCOMBOBOX("OpacityCB")->     setCurrentIndex(CurrentCompoObject->Opacity);
        GETCOMBOBOX("ShadowEffectCB")->setCurrentIndex(CurrentCompoObject->FormShadow);
        GETSPINBOX("ShadowEffectED")-> setValue(int(CurrentCompoObject->FormShadowDistance));
        ((cCColorComboBox *)GETCOMBOBOX("PenColorCB"))->    SetCurrentColor(&CurrentCompoObject->PenColor);
        ((cCColorComboBox *)GETCOMBOBOX("ShadowColorCB"))-> SetCurrentColor(&CurrentCompoObject->FormShadowColor);

        for (int i=0;i<GETCOMBOBOX("PenStyleCB")->count();i++)
          if (GETCOMBOBOX("PenStyleCB")->itemData(i).toInt()==CurrentCompoObject->PenStyle) {
            if (i!=GETCOMBOBOX("PenStyleCB")->currentIndex()) GETCOMBOBOX("PenStyleCB")->setCurrentIndex(i);
            break;
        }

    } else {

        if (GETUI("InheritDownCB")) {
            GETUI("InheritDownCB")->setEnabled(false);
            GETCHECKBOX("InheritDownCB")->setChecked(false);
        }

        // Position, size and rotation
        GETUI("PosSize_X")->          setEnabled(false);
        GETUI("PosSize_Y")->          setEnabled(false);
        GETUI("PosSize_Width")->      setEnabled(false);
        GETUI("PosSize_Height")->     setEnabled(false);
        GETDOUBLESPINBOX("PosXEd")->  setEnabled(false);          GETDOUBLESPINBOX("PosXEd")->  setValue(0);
        GETDOUBLESPINBOX("PosYEd")->  setEnabled(false);          GETDOUBLESPINBOX("PosYEd")->  setValue(0);
        GETDOUBLESPINBOX("WidthEd")-> setEnabled(false);          GETDOUBLESPINBOX("WidthEd")-> setValue(0);      GETDOUBLESPINBOX("WidthEd")->setRange(0,2*InteractiveZone->DisplayW);
        GETDOUBLESPINBOX("HeightEd")->setEnabled(false);          GETDOUBLESPINBOX("HeightEd")->setValue(0);      GETDOUBLESPINBOX("HeightEd")->setRange(0,2*InteractiveZone->DisplayH);


        // Rotation
        GETUI("Rotate_X")-> setEnabled(false);                  GETSPINBOX("RotateXED")-> setEnabled(false);      GETUI("ResetRotateXBT")->setEnabled(false);       GETSLIDER("RotateXSLD")->setEnabled(false);
        GETUI("Rotate_Y")-> setEnabled(false);                  GETSPINBOX("RotateYED")-> setEnabled(false);      GETUI("ResetRotateYBT")->setEnabled(false);       GETSLIDER("RotateYSLD")->setEnabled(false);
        GETUI("Rotate_Z")-> setEnabled(false);                  GETSPINBOX("RotateZED")-> setEnabled(false);      GETUI("ResetRotateZBT")->setEnabled(false);       GETSLIDER("RotateZSLD")->setEnabled(false);

        GETSPINBOX("RotateXED")->setValue(0);                   GETSLIDER("RotateXSLD")->setValue(0);
        GETSPINBOX("RotateYED")->setValue(0);                   GETSLIDER("RotateYSLD")->setValue(0);
        GETSPINBOX("RotateZED")->setValue(0);                   GETSLIDER("RotateZSLD")->setValue(0);

        // Shape part
        GETUI("BlockShapeStyleBT")-> setEnabled(false);
        GETUI("BlockShapeStyleED")-> setEnabled(false);
        GETUI("BackgroundFormCB")->  setEnabled(false);         GETCOMBOBOX("BackgroundFormCB")->  setCurrentIndex(-1);
        GETUI("PenSizeEd")->         setEnabled(false);         GETSPINBOX("PenSizeEd")->setValue(0);
        GETUI("PenColorCB")->        setEnabled(false);         ((cCColorComboBox *)GETCOMBOBOX("PenColorCB"))->SetCurrentColor(NULL);
        GETUI("PenStyleCB")->        setEnabled(false);
        GETUI("OpacityCB")->         setEnabled(false);         GETCOMBOBOX("OpacityCB")->     setCurrentIndex(-1);
        GETUI("ShadowEffectCB")->    setEnabled(false);         GETCOMBOBOX("ShadowEffectCB")->setCurrentIndex(-1);
        GETUI("ShadowEffectED")->    setEnabled(false);         GETSPINBOX("ShadowEffectED")-> setValue(0);
        GETUI("ShadowColorCB")->     setEnabled(false);         ((cCColorComboBox *)GETCOMBOBOX("ShadowColorCB"))-> SetCurrentColor(NULL);
    }

    // Set control visible or hide depending on TextClipArt
    GETUI("BlockShapeStyleBT")->setVisible(((!CurrentCompoObject)||(CurrentCompoObject->TextClipArtName=="")));
    GETUI("BlockShapeStyleSpacer")->setVisible(((!CurrentCompoObject)||(CurrentCompoObject->TextClipArtName=="")));
    GETUI("BlockShapeStyleED")->setVisible(((!CurrentCompoObject)||(CurrentCompoObject->TextClipArtName=="")));
    GETUI("BackgroundFormCB")->setVisible(((!CurrentCompoObject)||(CurrentCompoObject->TextClipArtName=="")));
    GETUI("BackgroundFormLabel")->setVisible(((!CurrentCompoObject)||(CurrentCompoObject->TextClipArtName=="")));
    GETUI("PenSizeEd")->setVisible(((!CurrentCompoObject)||(CurrentCompoObject->TextClipArtName=="")));
    GETUI("PenColorCB")->setVisible(((!CurrentCompoObject)||(CurrentCompoObject->TextClipArtName=="")));
    GETUI("PenStyleCB")->setVisible(((!CurrentCompoObject)||(CurrentCompoObject->TextClipArtName=="")));
    GETUI("PenLabel")->setVisible(((!CurrentCompoObject)||(CurrentCompoObject->TextClipArtName=="")));
    GETUI("TextClipArtCB")->setVisible((CurrentCompoObject)&&(CurrentCompoObject->TextClipArtName!=""));
    GETUI("TextClipArtLabel")->setVisible((CurrentCompoObject)&&(CurrentCompoObject->TextClipArtName!=""));
    if ((CurrentCompoObject)&&(CurrentCompoObject->TextClipArtName!="")) ((cCTexteFrameComboBox *)GETCOMBOBOX("TextClipArtCB"))->SetCurrentTextFrame(CurrentCompoObject->TextClipArtName);

    InRefreshControls=false;
    QApplication::restoreOverrideCursor();

    // Refresh interactive zone display and shot thumbnail
    if (UpdateInteractiveZone)  InteractiveZone->RefreshDisplay();
        else                    InteractiveZone->repaint(); // else refresh selection only
}

//====================================================================================================================

void cShotComposer::s_BlockSettings_BlockInheritances() {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    if (CurrentShotNbr==0) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"InheritDownCB",true);
    CurrentCompoObject->BlockInheritance=!GETCHECKBOX("InheritDownCB")->isChecked();
    if (!CurrentCompoObject->BlockInheritance) {

        // Search this block in previous shot
        cCompositionObject *SourceCompo=NULL;
        for (int Block=0;Block<CurrentSlide->List[CurrentShotNbr-1]->ShotComposition.List.count();Block++)
          if (CurrentSlide->List[CurrentShotNbr-1]->ShotComposition.List[Block]->IndexKey==CurrentCompoObject->IndexKey)
              SourceCompo=CurrentSlide->List[CurrentShotNbr-1]->ShotComposition.List[Block];

        if ((SourceCompo)&&(CustomMessageBox(this,QMessageBox::Question,QApplication::translate("DlgSlideProperties","Reactivate the inheritance of changes"),
                                  QApplication::translate("DlgSlideProperties","Do you want to apply to this block the properties it has in the previous shot?"),
                                  QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)==QMessageBox::Yes)) {
            bool ContAPPLY=true;
            int  ShotNum=CurrentShotNbr;
            while ((ContAPPLY)&&(ShotNum<CurrentSlide->List.count())) {
                for (int Block=0;ContAPPLY && Block<CurrentSlide->List[CurrentShotNbr]->ShotComposition.List.count();Block++)
                 for (int ToSearch=0;ContAPPLY && ToSearch<CurrentSlide->List[ShotNum]->ShotComposition.List.count();ToSearch++)
                  if (CurrentSlide->List[ShotNum]->ShotComposition.List[ToSearch]->IndexKey==CurrentCompoObject->IndexKey) {
                    cCompositionObject *ShotObject=CurrentSlide->List[ShotNum]->ShotComposition.List[ToSearch];
                    if (!ShotObject->BlockInheritance) {
                        ShotObject->x               =SourceCompo->x;
                        ShotObject->y               =SourceCompo->y;
                        ShotObject->w               =SourceCompo->w;
                        ShotObject->h               =SourceCompo->h;
                        ShotObject->RotateZAxis     =SourceCompo->RotateZAxis;
                        ShotObject->RotateXAxis     =SourceCompo->RotateXAxis;
                        ShotObject->RotateYAxis     =SourceCompo->RotateYAxis;
                        ShotObject->BlockSpeedWave  =SourceCompo->BlockSpeedWave;
                        ShotObject->BlockAnimType   =SourceCompo->BlockAnimType;
                        ShotObject->TurnZAxis       =SourceCompo->TurnZAxis;
                        ShotObject->TurnXAxis       =SourceCompo->TurnXAxis;
                        ShotObject->TurnYAxis       =SourceCompo->TurnYAxis;
                        ShotObject->Dissolve        =SourceCompo->Dissolve;
                        ShotObject->BackgroundBrush->CopyFromBrushDefinition(SourceCompo->BackgroundBrush);
                    } else ContAPPLY=false;
                }
                ShotNum++;
            }
        }
    }
    ApplyToContexte(false);
}

//====================================================================================================================
// Handler for position, size & rotation controls
//====================================================================================================================

//========= X position
void cShotComposer::s_BlockSettings_PosXValue(double Value) {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"PosXEd",false);
    if (ApplicationConfig->DisplayUnit==DISPLAYUNIT_PERCENT)    CurrentCompoObject->x=Value/100;                            // DisplayUnit==DISPLAYUNIT_PERCENT
        else                                                    CurrentCompoObject->x=(Value/InteractiveZone->DisplayW);    // DisplayUnit==DISPLAYUNIT_PIXELS
    // Apply values of previous shot to all shot for this object
    APPLY1TONEXT(x);
    ApplyToContexte(false);
}

//========= Y position
void cShotComposer::s_BlockSettings_PosYValue(double Value) {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"PosYEd",false);
    if (ApplicationConfig->DisplayUnit==DISPLAYUNIT_PERCENT)    CurrentCompoObject->y=Value/100;           // DisplayUnit==DISPLAYUNIT_PERCENT
        else                                                    CurrentCompoObject->y=(Value/InteractiveZone->DisplayH);    // DisplayUnit==DISPLAYUNIT_PIXELS
    // Apply values of previous shot to all shot for this object
    APPLY1TONEXT(y);
    ApplyToContexte(false);
}

//========= Width
void cShotComposer::s_BlockSettings_PosWidthValue(double Value) {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"WidthEd",false);

    qreal Ratio_X,Ratio_Y;
    ComputeBlockRatio(CurrentCompoObject,Ratio_X,Ratio_Y);

    if (ApplicationConfig->DisplayUnit==DISPLAYUNIT_PERCENT)    CurrentCompoObject->w=(Value/100)*Ratio_X;
        else                                                    CurrentCompoObject->w=(Value/InteractiveZone->DisplayW)*Ratio_X;
    if (CurrentCompoObject->BackgroundBrush->LockGeometry)      CurrentCompoObject->h=((CurrentCompoObject->w*InteractiveZone->DisplayW)*CurrentCompoObject->BackgroundBrush->AspectRatio)/InteractiveZone->DisplayH;
        else                                                    CurrentCompoObject->BackgroundBrush->AspectRatio=(CurrentCompoObject->h*InteractiveZone->DisplayH)/(CurrentCompoObject->w*InteractiveZone->DisplayW);
    // Apply values of previous shot to all shot for this object
    APPLY3TONEXT(w,h,BackgroundBrush->AspectRatio);
    ApplyToContexte(false);
}

//========= Height
void cShotComposer::s_BlockSettings_PosHeightValue(double Value) {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"HeightEd",false);

    qreal Ratio_X,Ratio_Y;
    ComputeBlockRatio(CurrentCompoObject,Ratio_X,Ratio_Y);

    if (ApplicationConfig->DisplayUnit==DISPLAYUNIT_PERCENT)    CurrentCompoObject->h=(Value/100)*Ratio_Y;
        else                                                    CurrentCompoObject->h=(Value/InteractiveZone->DisplayH)*Ratio_Y;
    if (CurrentCompoObject->BackgroundBrush->LockGeometry)      CurrentCompoObject->w=((CurrentCompoObject->h*InteractiveZone->DisplayH)/CurrentCompoObject->BackgroundBrush->AspectRatio)/InteractiveZone->DisplayW;
        else                                                    CurrentCompoObject->BackgroundBrush->AspectRatio=(CurrentCompoObject->h*InteractiveZone->DisplayH)/(CurrentCompoObject->w*InteractiveZone->DisplayW);
    // Apply values of previous shot to all shot for this object
    APPLY3TONEXT(w,h,BackgroundBrush->AspectRatio);
    ApplyToContexte(false);
}

//========= X Rotation value
void cShotComposer::s_BlockSettings_RotateXValue(int Value) {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"RotateXED",false);
    CurrentCompoObject->RotateXAxis=Value;
    // Apply values of previous shot to all shot for this object
    APPLY1TONEXT(RotateXAxis);
    ApplyToContexte(false);
}

//========= Y Rotation value
void cShotComposer::s_BlockSettings_RotateYValue(int Value) {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"RotateYED",false);
    CurrentCompoObject->RotateYAxis=Value;
    // Apply values of previous shot to all shot for this object
    APPLY1TONEXT(RotateYAxis);
    ApplyToContexte(false);
}

//========= Z Rotation value
void cShotComposer::s_BlockSettings_RotateZValue(int Value) {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"RotateZED",false);
    CurrentCompoObject->RotateZAxis=Value;
    // Apply values of previous shot to all shot for this object
    APPLY1TONEXT(RotateZAxis);
    ApplyToContexte(false);
}

//====================================================================================================================
// Handler for shape
//====================================================================================================================

void cShotComposer::s_BlockSettings_BlockShapeStyleBT() {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,InteractiveZone,false);
    QString ActualStyle =CurrentCompoObject->GetBlockShapeStyle();
    QString Item        =ApplicationConfig->StyleBlockShapeCollection.PopupCollectionMenu(this,ApplicationConfig,ActualStyle);
    GETBUTTON("BlockShapeStyleBT")->setDown(false);
    if (Item!="") {
        CurrentCompoObject->ApplyBlockShapeStyle(ApplicationConfig->StyleBlockShapeCollection.GetStyleDef(Item));
        ApplyToContexte(true);
    }
}

//========= Text ClipArt
void cShotComposer::s_BlockSettings_ShapeTextClipArtChIndex() {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    if (CurrentCompoObject->TextClipArtName=="") return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"TextClipArtCB",false);
    CurrentCompoObject->TextClipArtName=((cCTexteFrameComboBox *)GETCOMBOBOX("TextClipArtCB"))->GetCurrentTextFrame();
    cTextFrameObject *TFO=&TextFrameList.List[TextFrameList.SearchImage(CurrentCompoObject->TextClipArtName)];
    CurrentCompoObject->TMx=TFO->TMx;
    CurrentCompoObject->TMy=TFO->TMy;
    CurrentCompoObject->TMw=TFO->TMw;
    CurrentCompoObject->TMh=TFO->TMh;
    CurrentCompoObject->ApplyTextStyle(TFO->TextStyle);
    ApplyToContexte(true);
}

//========= Background forme
void cShotComposer::s_BlockSettings_ShapeBackgroundForm() {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"BackgroundFormCB",false);
    CurrentCompoObject->BackgroundForm=((cCShapeComboBox *)GETCOMBOBOX("BackgroundFormCB"))->GetCurrentFrameShape();
    ApplyToContexte(true);
}

//========= Opacity
void cShotComposer::s_BlockSettings_ShapeOpacity(int Style) {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"OpacityCB",false);
    CurrentCompoObject->Opacity=Style;
    ApplyToContexte(true);
}

//========= Border pen size
void cShotComposer::s_BlockSettings_ShapePenSize(int) {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"PenSizeEd",false);
    CurrentCompoObject->PenSize=GETSPINBOX("PenSizeEd")->value();
    GETCOMBOBOX("PenColorCB")->setEnabled(CurrentCompoObject->PenSize!=0);
    GETCOMBOBOX("PenStyleCB")->setEnabled(CurrentCompoObject->PenSize!=0);
    ApplyToContexte(true);
}

//========= Border pen style
void cShotComposer::s_BlockSettings_ShapePenStyle(int index) {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"PenStyleCB",false);
    CurrentCompoObject->PenStyle=GETCOMBOBOX("PenStyleCB")->itemData(index).toInt();
    ApplyToContexte(true);
}

//========= Border pen color
void cShotComposer::s_BlockSettings_ShapePenColor(int) {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"PenColorCB",false);
    CurrentCompoObject->PenColor=((cCColorComboBox *)GETCOMBOBOX("PenColorCB"))->GetCurrentColor();
    ApplyToContexte(true);
}

//========= Shape shadow style
void cShotComposer::s_BlockSettings_ShapeShadowFormValue(int value) {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"ShadowEffectCB",false);
    CurrentCompoObject->FormShadow=value;
    GETSPINBOX("ShadowEffectED")->setEnabled(CurrentCompoObject->FormShadow!=0);
    GETCOMBOBOX("ShadowColorCB")->setEnabled(CurrentCompoObject->FormShadow!=0);
    ApplyToContexte(true);
}

//========= Shape shadow distance
void cShotComposer::s_BlockSettings_ShapeShadowDistanceValue(int value) {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"ShadowEffectED",false);
    CurrentCompoObject->FormShadowDistance =value;
    ApplyToContexte(true);
}

//========= shadow color
void cShotComposer::s_BlockSettings_ShapeShadowColor(int) {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,"ShadowColorCB",false);
    CurrentCompoObject->FormShadowColor=((cCColorComboBox *)GETCOMBOBOX("ShadowColorCB"))->GetCurrentColor();
    ApplyToContexte(true);
}

//====================================================================================================================
// BLOCK TABLE SETTINGS
//====================================================================================================================

//=========  Refresh the BlockTable
void cShotComposer::RefreshBlockTable(int SetCurrentIndex) {
    BlockTable->setUpdatesEnabled(false);
    BlockTable->setRowCount(CompositionList->List.count());
    for (int i=0;i<BlockTable->rowCount();i++) BlockTable->setRowHeight(i,48+2+((((cApplicationConfig *)ApplicationConfig)->TimelineHeight-TIMELINEMINHEIGH)/20+1)*3);
    BlockTable->setUpdatesEnabled(true);
    if (BlockTable->currentRow()!=SetCurrentIndex) {
        BlockTable->clearSelection();
        BlockTable->setCurrentCell(SetCurrentIndex,0,QItemSelectionModel::Select|QItemSelectionModel::Current);
    } else s_BlockTable_SelectionChanged();
    if (BlockTable->rowCount()==0) s_BlockTable_SelectionChanged();
    InteractiveZone->RefreshDisplay();
}

//========= block selection change
void cShotComposer::s_BlockTable_SelectionChanged() {
    if (InSelectionChange) return;

    QModelIndexList SelList=BlockTable->selectionModel()->selectedIndexes();

    IsSelected.clear();
    for (int i=0;i<BlockTable->rowCount();i++)  IsSelected.append(false);
    for (int i=0;i<SelList.count();i++)         IsSelected[SelList.at(i).row()]=true;

    NbrSelected             =0;
    CurrentCompoObjectNbr   =-1;
    CurrentCompoObject      =NULL;

    for (int i=0;i<IsSelected.count();i++) if (IsSelected[i]) {
        if (NbrSelected==0) {
            CurrentCompoObjectNbr=i;
            CurrentCompoObject   =CompositionList->List[CurrentCompoObjectNbr];
        }
        NbrSelected++;
    }
    if (NbrSelected==0)             BlockSelectMode=SELECTMODE_NONE;
        else if (NbrSelected==1)    BlockSelectMode=SELECTMODE_ONE;
        else                        BlockSelectMode=SELECTMODE_MULTIPLE;

    RefreshControls(false);
}

//====================================================================================================================

void cShotComposer::s_BlockTable_MoveBlockUp() {
    s_BlockTable_SelectionChanged(); // Refresh selection
    if (BlockSelectMode!=SELECTMODE_ONE) return;
    if (CurrentCompoObjectNbr<1) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,BlockTable,true);
    CompositionList->List.swap(CurrentCompoObjectNbr,CurrentCompoObjectNbr-1);
    // Reset thumbs if needed
    ResetThumbs(false);
    // Reset blocks table
    RefreshBlockTable(CurrentCompoObjectNbr-1);
}

//====================================================================================================================

void cShotComposer::s_BlockTable_MoveBlockDown() {
    s_BlockTable_SelectionChanged(); // Refresh selection
    if (BlockSelectMode!=SELECTMODE_ONE) return;
    if (CurrentCompoObjectNbr>=CompositionList->List.count()-1) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,BlockTable,true);
    CompositionList->List.swap(CurrentCompoObjectNbr+1,CurrentCompoObjectNbr);
    // Reset thumbs if needed
    ResetThumbs(false);
    // Reset blocks table
    RefreshBlockTable(CurrentCompoObjectNbr+1);
}

//====================================================================================================================

void cShotComposer::s_BlockTable_DragMoveBlock(int Src,int Dst) {
    if (Src>=CompositionList->List.count()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,BlockTable,true);
    if (Src<Dst) Dst--;
    CompositionList->List.insert(Dst,CompositionList->List.takeAt(Src));
    // Reset thumbs if needed
    ResetThumbs(false);
    // Reset blocks table
    RefreshBlockTable(Dst);
}

//********************************************************************************************************************
//                                                  BLOCKS ALIGNMENT
//********************************************************************************************************************

void cShotComposer::s_BlockTable_AlignTop() {
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,InteractiveZone,true);
    for (int i=0;i<IsSelected.count();i++) if (IsSelected[i]) {
        CompositionList->List[i]->y=InteractiveZone->Sel_Y;
        CurrentCompoObject=CompositionList->List[i];
        APPLY1TONEXT(y);    // Apply values of previous shot to all shot for this object
    }
    ApplyToContexte(false);
}

void cShotComposer::s_BlockTable_AlignMiddle() {
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,InteractiveZone,true);
    for (int i=0;i<IsSelected.count();i++) if (IsSelected[i]) {
        CompositionList->List[i]->y=(InteractiveZone->Sel_Y+InteractiveZone->Sel_H/2)-CompositionList->List[i]->h/2;
        CurrentCompoObject=CompositionList->List[i];
        APPLY1TONEXT(y);    // Apply values of previous shot to all shot for this object
    }
    ApplyToContexte(false);
}

void cShotComposer::s_BlockTable_AlignBottom() {
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,InteractiveZone,true);
    for (int i=0;i<IsSelected.count();i++) if (IsSelected[i]) {
        CompositionList->List[i]->y=(InteractiveZone->Sel_Y+InteractiveZone->Sel_H)-CompositionList->List[i]->h;
        CurrentCompoObject=CompositionList->List[i];
        APPLY1TONEXT(y);    // Apply values of previous shot to all shot for this object
    }
    ApplyToContexte(false);
}

void cShotComposer::s_BlockTable_AlignLeft() {
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,InteractiveZone,true);
    for (int i=0;i<IsSelected.count();i++) {
        if (IsSelected[i]) CompositionList->List[i]->x=InteractiveZone->Sel_X;
        CurrentCompoObject=CompositionList->List[i];
        APPLY1TONEXT(x);    // Apply values of previous shot to all shot for this object
    }
    ApplyToContexte(false);
}

void cShotComposer::s_BlockTable_AlignCenter() {
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,InteractiveZone,true);
    for (int i=0;i<IsSelected.count();i++) if (IsSelected[i]) {
        CompositionList->List[i]->x=(InteractiveZone->Sel_X+InteractiveZone->Sel_W/2)-CompositionList->List[i]->w/2;
        CurrentCompoObject=CompositionList->List[i];
        APPLY1TONEXT(x);    // Apply values of previous shot to all shot for this object
    }
    ApplyToContexte(false);
}

void cShotComposer::s_BlockTable_AlignRight() {
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,InteractiveZone,true);
    for (int i=0;i<IsSelected.count();i++) if (IsSelected[i]) {
        CompositionList->List[i]->x=(InteractiveZone->Sel_X+InteractiveZone->Sel_W)-CompositionList->List[i]->w;
        CurrentCompoObject=CompositionList->List[i];
        APPLY1TONEXT(x);    // Apply values of previous shot to all shot for this object
    }
    ApplyToContexte(false);
}

void cShotComposer::s_BlockTable_DistributeHoriz() {
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,InteractiveZone,true);

    // 1st step : compute available space and create list
    QList<SortBlock> List;
    qreal           SpaceW   =InteractiveZone->Sel_W;
    qreal           CurrentX =InteractiveZone->Sel_X;
    for (int i=0;i<IsSelected.count();i++) if (IsSelected[i]) {
        SpaceW=SpaceW-CompositionList->List[i]->w;
        List.append(MakeSortBlock(i,CompositionList->List[i]->x));
    }
    SpaceW=SpaceW/qreal(List.count()-1);

    // 2nd step : sort blocks
    for (int i=0;i<List.count();i++)
        for (int j=0;j<List.count()-1;j++)
            if (List[j].Position>List[j+1].Position) List.swap(j,j+1);

    // Last step : move blocks
    for (int i=0;i<List.count();i++) {
        CompositionList->List[List[i].Index]->x=CurrentX;
        CurrentX=CurrentX+CompositionList->List[List[i].Index]->w+SpaceW;
        CurrentCompoObject=CompositionList->List[i];
        APPLY1TONEXT(x);    // Apply values of previous shot to all shot for this object
    }
    ApplyToContexte(false);
}

void cShotComposer::s_BlockTable_DistributeVert() {
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,InteractiveZone,true);

    // 1st step : compute available space and create list
    QList<SortBlock> List;
    qreal   SpaceH   =InteractiveZone->Sel_H;
    qreal   CurrentY =InteractiveZone->Sel_Y;
    for (int i=0;i<IsSelected.count();i++) if (IsSelected[i]) {
        SpaceH=SpaceH-CompositionList->List[i]->h;
        List.append(MakeSortBlock(i,CompositionList->List[i]->y));
    }
    SpaceH=SpaceH/qreal(List.count()-1);

    // 2nd step : sort blocks
    for (int i=0;i<List.count();i++)
        for (int j=0;j<List.count()-1;j++)
            if (List[j].Position>List[j+1].Position) List.swap(j,j+1);

    // Last step : move blocks
    for (int i=0;i<List.count();i++) {
        CompositionList->List[List[i].Index]->y=CurrentY;
        CurrentY=CurrentY+CompositionList->List[List[i].Index]->h+SpaceH;
        CurrentCompoObject=CompositionList->List[i];
        APPLY1TONEXT(x);    // Apply values of previous shot to all shot for this object
    }
    ApplyToContexte(false);
}

//====================================================================================================================

void cShotComposer::s_BlockTable_RemoveBlock() {
    if (BlockSelectMode==SELECTMODE_ONE) {
        if ((ApplicationConfig->AskUserToRemove)&&(CustomMessageBox(this,QMessageBox::Question,QApplication::translate("DlgSlideProperties","Remove block"),QApplication::translate("DlgSlideProperties","Are you sure you want to delete this block?"),
                                  QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)==QMessageBox::No)) return;
    } else if (BlockSelectMode==SELECTMODE_MULTIPLE) {
        if ((ApplicationConfig->AskUserToRemove)&&(CustomMessageBox(this,QMessageBox::Question,QApplication::translate("DlgSlideProperties","Remove blocks"),QApplication::translate("DlgSlideProperties","Are you sure you want to delete these blocks?"),
                                  QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)==QMessageBox::No)) return;
    }

    AppendPartialUndo(UNDOACTION_FULL_SLIDE,BlockTable,true);
    for (int i=CompositionList->List.count()-1;i>=0;i--) if (IsSelected[i]) {

        // Get indexkey of block
        int KeyToDelete=CompositionList->List[i]->IndexKey;

        // Delete block from all shots of the slide
        for (int j=0;j<CurrentSlide->List.count();j++) {
            int k=0;
            while (k<CurrentSlide->List[j]->ShotComposition.List.count()) {
                if (CurrentSlide->List[j]->ShotComposition.List[k]->IndexKey==KeyToDelete) delete CurrentSlide->List[j]->ShotComposition.List.takeAt(k);
                    else k++;
            }
        }

        // Delete block from global composition list of the slide
        int k=0;
        while (k<CurrentSlide->ObjectComposition.List.count()) {
            if (CurrentSlide->ObjectComposition.List[k]->IndexKey==KeyToDelete) delete CurrentSlide->ObjectComposition.List.takeAt(k);
                else k++;
        }
    }

    // Reset thumbs if needed
    ResetThumbs(true);
    // Reset blocks table
    RefreshBlockTable(CurrentCompoObjectNbr>=CompositionList->List.count()?CurrentCompoObjectNbr-1:CurrentCompoObjectNbr);

    // Ensure nothing is selected
    BlockTable->clearSelection();
}

//====================================================================================================================
//========= Open text editor
void cShotComposer::s_BlockSettings_TextEditor() {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    if (!NoPrepUndo) AppendPartialUndo(UNDOACTION_FULL_SLIDE,InteractiveZone,true);
    NoPrepUndo=false;

    InteractiveZone->DisplayMode=cInteractiveZone::DisplayMode_TextMargin;
    InteractiveZone->RefreshDisplay();
    DlgTextEdit Dlg(CurrentSlide->Parent,CurrentCompoObject,ApplicationConfig,&ApplicationConfig->StyleTextCollection,&ApplicationConfig->StyleTextBackgroundCollection,this);
    Dlg.InitDialog();
    connect(&Dlg,SIGNAL(RefreshDisplay()),this,SLOT(s_RefreshSceneImage()));
    if (Dlg.exec()==0) {
        InteractiveZone->DisplayMode=cInteractiveZone::DisplayMode_BlockShape;
        ApplyToContexte(true);
    } else {
        InteractiveZone->DisplayMode=cInteractiveZone::DisplayMode_BlockShape;
        RemoveLastPartialUndo();
        RefreshControls();
    }
}

//====================================================================================================================
//========= Open Information dialog

void cShotComposer::s_BlockSettings_Information() {
    if (!ISBLOCKVALIDEVISIBLE()) return;
    DlgInfoFile Dlg(CurrentCompoObject->BackgroundBrush->MediaObject,ApplicationConfig,this);
    Dlg.InitDialog();
    Dlg.exec();
}

//====================================================================================================================
// Handler for interactive zone
//====================================================================================================================

void cShotComposer::s_BlockSettings_IntZoneTransformBlocks(qreal Move_X,qreal Move_Y,qreal Scale_X,qreal Scale_Y,qreal RSel_X,qreal RSel_Y,qreal RSel_W,qreal RSel_H) {
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,InteractiveZone,true);

    for (int i=0;i<IsSelected.count();i++) if ((IsSelected[i])&&(CompositionList->List[i]->IsVisible)) {
        qreal   RatioScale_X=(RSel_W+Scale_X)/RSel_W;
        qreal   RatioScale_Y=(RSel_H+Scale_Y)/RSel_H;

        CompositionList->List[i]->x=RSel_X+Move_X+(CompositionList->List[i]->x-RSel_X)*RatioScale_X;
        CompositionList->List[i]->y=RSel_Y+Move_Y+(CompositionList->List[i]->y-RSel_Y)*RatioScale_Y;
        CompositionList->List[i]->w=CompositionList->List[i]->w*RatioScale_X;
        if (CompositionList->List[i]->w<0.002) CompositionList->List[i]->w=0.002;
        if (CompositionList->List[i]->BackgroundBrush->LockGeometry) CompositionList->List[i]->h=((CompositionList->List[i]->w*InteractiveZone->DisplayW)*CompositionList->List[i]->BackgroundBrush->AspectRatio)/InteractiveZone->DisplayH;
            else CompositionList->List[i]->h=CompositionList->List[i]->h*RatioScale_Y;
        if (CompositionList->List[i]->h<0.002) CompositionList->List[i]->h=0.002;
    }
    // Apply values of previous shot to all shot for this object
    APPLY4TONEXT(x,y,w,h);
    ApplyToContexte(false);
}

void cShotComposer::s_BlockSettings_IntZoneDisplayTransformBlocks(qreal Move_X,qreal Move_Y,qreal Scale_X,qreal Scale_Y,qreal RSel_X,qreal RSel_Y,qreal RSel_W,qreal RSel_H) {
    InRefreshControls=true;

    int     i           =CurrentCompoObjectNbr;
    qreal   RatioScale_X=(RSel_W+Scale_X)/RSel_W;
    qreal   RatioScale_Y=(RSel_H+Scale_Y)/RSel_H;
    QRectF  tmpRect     =PolygonToRectF(ComputePolygon(CompositionList->List[i]->BackgroundForm,
                                                       CompositionList->List[i]->x*InteractiveZone->DisplayW,CompositionList->List[i]->y*InteractiveZone->DisplayH,
                                                       CompositionList->List[i]->w*InteractiveZone->DisplayW,CompositionList->List[i]->h*InteractiveZone->DisplayH));
    qreal   Ratio_X     =(CompositionList->List[i]->x*InteractiveZone->DisplayW)/tmpRect.width();
    qreal   Ratio_Y     =(CompositionList->List[i]->h*InteractiveZone->DisplayH)/tmpRect.height();
    qreal   x           =RSel_X+Move_X+(CompositionList->List[i]->x-RSel_X)*RatioScale_X;
    qreal   y           =RSel_Y+Move_Y+(CompositionList->List[i]->y-RSel_Y)*RatioScale_Y;
    qreal   w           =CompositionList->List[i]->w*RatioScale_X; if (w<0.002) w=0.002;
    qreal   h           =(CompositionList->List[i]->BackgroundBrush->LockGeometry?((w*InteractiveZone->DisplayW)*CompositionList->List[i]->BackgroundBrush->AspectRatio)/InteractiveZone->DisplayH:CompositionList->List[i]->h*RatioScale_Y); if (h<0.002) h=0.002;

    if (ApplicationConfig->DisplayUnit==DISPLAYUNIT_PERCENT) {
        GETDOUBLESPINBOX("PosXEd")->  setValue(x*100/Ratio_X);
        GETDOUBLESPINBOX("PosYEd")->  setValue(y*100/Ratio_Y);
        GETDOUBLESPINBOX("WidthEd")-> setValue(w*100/Ratio_X);
        GETDOUBLESPINBOX("HeightEd")->setValue(h*100/Ratio_Y);
    } else { // DisplayUnit==DISPLAYUNIT_PIXELS
        GETDOUBLESPINBOX("PosXEd")->  setValue(x*InteractiveZone->DisplayW/Ratio_X);
        GETDOUBLESPINBOX("PosYEd")->  setValue(y*InteractiveZone->DisplayH/Ratio_Y);
        GETDOUBLESPINBOX("WidthEd")-> setValue(w*InteractiveZone->DisplayW/Ratio_X);
        GETDOUBLESPINBOX("HeightEd")->setValue(h*InteractiveZone->DisplayH/Ratio_Y);
    }
    InRefreshControls=false;
}
