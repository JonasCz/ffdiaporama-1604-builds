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

#include "DlgImageComposer.h"
#include "ui_DlgImageComposer.h"

#include "cTextFrame.h"
#include "cTexteFrameComboBox.h"

#include "DlgImage/DlgImageCorrection.h"
#include "DlgFileExplorer/DlgFileExplorer.h"
#include "DlgSlide/DlgRuler/DlgRulerDef.h"

#include <QClipboard>
#include <QMimeData>
#include <QMessageBox>
#include <QTextDocument>
#include <QTextCursor>
#include <QTextCharFormat>
#include <QTextBlockFormat>
#include <QMenu>

//====================================================================================================================

DlgImageComposer::DlgImageComposer(cDiaporama *ffdProject,cApplicationConfig *ApplicationConfig,QWidget *parent):cShotComposer(ffdProject->ProjectThumbnail,ApplicationConfig,parent),ui(new Ui::DlgImageComposer) {
    ui->setupUi(this);
    Splitter                        =ui->SplitterTop;
    CancelBt                        =ui->CancelBt;
    OkBt                            =ui->OkBt;
    HelpBt                          =ui->HelpBt;
    HelpFile                        ="0117";

    // manque l'UNDO !!!!!!!

    InteractiveZone                 =ui->InteractiveZone;
    BlockTable                      =ui->BlockTable;
    ShotTable                       =NULL;
    InteractiveZone->MagneticRuler  =ApplicationConfig->ThumbRuler;
    InteractiveZone->DisplayW       =THUMBWITH;
    InteractiveZone->DisplayH       =THUMBHEIGHT;

    this->ffdProject =ffdProject;

    InRefreshStyleControls          =false;
    StopMajFramingStyle             =false;
    FramingCB_CurrentBrush          =NULL;
    NbrSelected                     =0;
    CompositionList                 =&CurrentSlide->List[0]->ShotComposition;
    BlockTable->CompositionList     =&CurrentSlide->List[0]->ShotComposition;
}

//====================================================================================================================
// Initialise dialog

void DlgImageComposer::DoInitDialog() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::DoInitDialog");
    cShotComposer::DoInitDialog();

    // Thumbnail part
    ui->TextClipArtCB->PrepareTable();
    BlockTable->ProjectGeometry=ProjectGeometry;

    // Force icon in contextual menu
    ui->actionAddTextBlock->setIconVisibleInMenu(true);
    ui->actionAddFile->setIconVisibleInMenu(true);
    ui->actionEditText->setIconVisibleInMenu(true);
    ui->actionEditImage->setIconVisibleInMenu(true);
    ui->actionUpBlock->setIconVisibleInMenu(true);
    ui->actionDownBlock->setIconVisibleInMenu(true);
    ui->actionCopy->setIconVisibleInMenu(true);
    ui->actionCut->setIconVisibleInMenu(true);
    ui->actionPaste->setIconVisibleInMenu(true);
    ui->actionRemoveBlock->setIconVisibleInMenu(true);
    ui->actionInfo->setIconVisibleInMenu(true);
    ui->actionTop->setIconVisibleInMenu(true);
    ui->actionMiddle->setIconVisibleInMenu(true);
    ui->actionBottom->setIconVisibleInMenu(true);
    ui->actionLeft->setIconVisibleInMenu(true);
    ui->actionCenter->setIconVisibleInMenu(true);
    ui->actionRight->setIconVisibleInMenu(true);
    ui->actionDistributeHoriz->setIconVisibleInMenu(true);
    ui->actionDistributeVert->setIconVisibleInMenu(true);
    ui->actionAddSimpleTextBlock->setIconVisibleInMenu(true);
    ui->actionAddClipArtTextBlock->setIconVisibleInMenu(true);

    // Define handler
    connect(ui->RulersBT,SIGNAL(clicked()),this,SLOT(s_RulersBt()));

    connect(ui->actionCopy,SIGNAL(triggered()),this,SLOT(s_BlockTable_Copy()));
    connect(ui->actionCut,SIGNAL(triggered()),this,SLOT(s_BlockTable_Cut()));
    connect(ui->actionPaste,SIGNAL(triggered()),this,SLOT(s_BlockTable_Paste()));

    connect(ui->actionUpBlock,SIGNAL(triggered()),this,SLOT(s_BlockTable_MoveBlockUp()));
    connect(ui->actionDownBlock,SIGNAL(triggered()),this,SLOT(s_BlockTable_MoveBlockDown()));

    connect(ui->actionTop,SIGNAL(triggered()),this,SLOT(s_BlockTable_AlignTop()));
    connect(ui->actionMiddle,SIGNAL(triggered()),this,SLOT(s_BlockTable_AlignMiddle()));
    connect(ui->actionBottom,SIGNAL(triggered()),this,SLOT(s_BlockTable_AlignBottom()));
    connect(ui->actionLeft,SIGNAL(triggered()),this,SLOT(s_BlockTable_AlignLeft()));
    connect(ui->actionCenter,SIGNAL(triggered()),this,SLOT(s_BlockTable_AlignCenter()));
    connect(ui->actionRight,SIGNAL(triggered()),this,SLOT(s_BlockTable_AlignRight()));
    connect(ui->actionDistributeHoriz,SIGNAL(triggered()),this,SLOT(s_BlockTable_DistributeHoriz()));
    connect(ui->actionDistributeVert,SIGNAL(triggered()),this,SLOT(s_BlockTable_DistributeVert()));

    connect(ui->ArrangeBT,SIGNAL(pressed()),this,SLOT(s_BlockSettings_Arrange()));
    connect(ui->EditBT,SIGNAL(pressed()),this,SLOT(s_BlockSettings_Edit()));
    connect(ui->actionEditText,SIGNAL(triggered()),this,SLOT(s_BlockSettings_TextEditor()));
    connect(ui->actionEditImage,SIGNAL(triggered()),this,SLOT(s_BlockSettings_ImageEditCorrect()));
    connect(ui->InfoBlockBT,SIGNAL(clicked()),this,SLOT(s_BlockSettings_Information()));
    connect(ui->actionInfo,SIGNAL(triggered()),this,SLOT(s_BlockSettings_Information()));

    connect(ui->ZoomSlider,SIGNAL(valueChanged(int)),this,SLOT(s_BlockSettings_TextZoom(int)));
    connect(ui->ZoomED,SIGNAL(valueChanged(int)),this,SLOT(s_BlockSettings_TextZoom(int)));
    connect(ui->ZoomResetBT,SIGNAL(released()),this,SLOT(s_BlockSettings_TextZoomReset()));

    // Block table/scene part
    connect(BlockTable,SIGNAL(itemSelectionChanged()),this,SLOT(s_BlockTable_SelectionChanged()));
    connect(BlockTable,SIGNAL(DoubleClickEvent(QMouseEvent *)),this,SLOT(s_BlockTable_ItemDoubleClicked(QMouseEvent *)));
    connect(BlockTable,SIGNAL(RightClickEvent(QMouseEvent *)),this,SLOT(s_BlockTable_ItemRightClicked(QMouseEvent *)));
    connect(BlockTable,SIGNAL(DragMoveBlock(int,int)),this,SLOT(s_BlockTable_DragMoveBlock(int,int)));
    connect(BlockTable,SIGNAL(DragDropFiles(QList<QUrl>)),this,SLOT(s_BlockTable_DragDropFiles(QList<QUrl>)));
    connect(ui->AddTextBlock,SIGNAL(pressed()),this,SLOT(s_BlockTable_AddNewTextBlock()));
    connect(ui->actionAddTextBlock,SIGNAL(triggered()),this,SLOT(s_BlockTable_AddNewTextBlock()));
    connect(ui->actionAddSimpleTextBlock,SIGNAL(triggered()),this,SLOT(s_BlockTable_AddNewSimpleTextBlock()));
    connect(ui->actionAddClipArtTextBlock,SIGNAL(triggered()),this,SLOT(s_BlockTable_AddNewClipArtTextBlock()));
    connect(ui->AddFileBlock,SIGNAL(pressed()),this,SLOT(s_BlockTable_AddNewFileBlock()));
    connect(ui->actionAddFile,SIGNAL(triggered()),this,SLOT(s_BlockTable_AddNewFileBlock()));
    connect(ui->actionRemoveBlock,SIGNAL(triggered()),this,SLOT(s_BlockTable_RemoveBlock()));

    // Style buttons

    // Interactive zone
    connect(InteractiveZone,SIGNAL(StartSelectionChange()),this,SLOT(s_BlockTable_StartSelectionChange()));
    connect(InteractiveZone,SIGNAL(EndSelectionChange()),this,SLOT(s_BlockTable_EndSelectionChange()));
    connect(InteractiveZone,SIGNAL(RightClickEvent(QMouseEvent *)),this,SLOT(s_BlockTable_ItemRightClicked(QMouseEvent *)));
    connect(InteractiveZone,SIGNAL(DoubleClickEvent(QMouseEvent *)),this,SLOT(s_BlockTable_ItemDoubleClicked(QMouseEvent *)));
    connect(InteractiveZone,SIGNAL(TransformBlock(qreal,qreal,qreal,qreal,qreal,qreal,qreal,qreal)),this,SLOT(s_BlockSettings_IntZoneTransformBlocks(qreal,qreal,qreal,qreal,qreal,qreal,qreal,qreal)));
    connect(InteractiveZone,SIGNAL(DisplayTransformBlock(qreal,qreal,qreal,qreal,qreal,qreal,qreal,qreal)),this,SLOT(s_BlockSettings_IntZoneDisplayTransformBlocks(qreal,qreal,qreal,qreal,qreal,qreal,qreal,qreal)));

    RefreshBlockTable(0);
}

//====================================================================================================================

DlgImageComposer::~DlgImageComposer() {
    ffdProject->CloseUnusedLibAv(ffdProject->CurrentCol);
    delete ui;
}

//====================================================================================================================
// Call when user click on Ok button

bool DlgImageComposer::DoAccept() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::DoAccept");

    return true;
}

//====================================================================================================================

void DlgImageComposer::resizeEvent(QResizeEvent *) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::resizeEvent");

    InteractiveZone->RefreshDisplay();
}

//====================================================================================================================

void DlgImageComposer::showEvent(QShowEvent *ev) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::showEvent");

    QCustomDialog::showEvent(ev);
    InteractiveZone->RefreshDisplay();
}

//====================================================================================================================

void DlgImageComposer::keyReleaseEvent(QKeyEvent *event) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::keyReleaseEvent");

    if ((focusWidget()==BlockTable)||(focusWidget()==InteractiveZone)) {
        if (event->modifiers()==Qt::ControlModifier) {
            switch (event->key()) {
                case Qt::Key_C      : s_BlockTable_Copy();                      break;
                case Qt::Key_X      : s_BlockTable_Cut();                       break;
                case Qt::Key_V      : s_BlockTable_Paste();                     break;
                default             : QCustomDialog::keyReleaseEvent(event);    break;
            }
        } if (event->modifiers()==Qt::NoModifier) {
            switch (event->key()) {
                case Qt::Key_Delete :
                    if (InteractiveZone->hasFocus()) s_BlockTable_RemoveBlock();
                    break;
                default :
                    QCustomDialog::keyReleaseEvent(event);
                    break;
            }
        } else QCustomDialog::keyReleaseEvent(event);
    } else QCustomDialog::keyReleaseEvent(event);
}

//====================================================================================================================
// Initiale Undo

void DlgImageComposer::PrepareGlobalUndo() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::PrepareGlobalUndo");

    // Save object before modification for cancel button
    Undo=new QDomDocument(APPLICATION_NAME);
    QDomElement root=Undo->createElement("UNDO-DLG"); // Create xml document and root
    CurrentSlide->SaveToXML(root,"UNDO-DLG-ProjectThumbnail",ffdProject->ProjectFileName,true,NULL,NULL,false);
    Undo->appendChild(root); // Add object to xml document
}

//====================================================================================================================
// Apply Undo : call when user click on Cancel button

void DlgImageComposer::DoGlobalUndo() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::DoGlobalUndo");

    QDomElement root=Undo->documentElement();
    if (root.tagName()=="UNDO-DLG") {
        CurrentSlide->LoadFromXML(root,"UNDO-DLG-ProjectThumbnail","",NULL,NULL,false);
    }
}

//====================================================================================================================
// Refresh background image of the scene

void DlgImageComposer::s_RefreshSceneImage() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::s_RefreshSceneImage");

    InteractiveZone->RefreshDisplay();
}

//====================================================================================================================
// BLOCK TABLE SETTINGS
//====================================================================================================================

void DlgImageComposer::s_BlockTable_StartSelectionChange() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::s_BlockTable_StartSelectionChange");
    InSelectionChange=true;
}

void DlgImageComposer::s_BlockTable_EndSelectionChange() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::s_BlockTable_EndSelectionChange");
    InSelectionChange=false;
    s_BlockTable_SelectionChanged();
}

//====================================================================================================================

void DlgImageComposer::RefreshStyleControls() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::RefreshStyleControls");

    if (InRefreshStyleControls) return;
    InRefreshStyleControls=true;


    if (BlockSelectMode==SELECTMODE_ONE) {
        ui->BlockShapeStyleED->setText(ApplicationConfig->StyleBlockShapeCollection.GetStyleName(CurrentCompoObject->GetBlockShapeStyle()));

        StopMajFramingStyle=true;
        ui->BackgroundFormCB->PrepareFrameShapeTable(true,0,CurrentCompoObject->BackgroundForm);
        ui->BackgroundFormCB->SetCurrentFrameShape(CurrentCompoObject->BackgroundForm);
        StopMajFramingStyle=false;

        FramingCB_CurrentBrush=CurrentCompoObject->BackgroundBrush;

    } else {
        FramingCB_CurrentBrush=NULL;
        ui->BlockShapeStyleED->setText("");
        ui->BackgroundFormCB->clear();
    }

    InRefreshStyleControls=false;
}

//====================================================================================================================

void DlgImageComposer::RefreshControls(bool UpdateInteractiveZone) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::RefreshControls");

    if ((InRefreshControls)||(!CompositionList)) return;
    InRefreshControls=true;
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));

    //***********************
    // Tools button
    //***********************
    ui->EditBT->                setEnabled((BlockSelectMode==SELECTMODE_ONE));
    ui->ArrangeBT->             setEnabled((BlockSelectMode==SELECTMODE_ONE)||(BlockSelectMode==SELECTMODE_MULTIPLE));
    ui->InfoBlockBT->           setEnabled((BlockSelectMode==SELECTMODE_ONE)&&(CurrentCompoObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK));

    // actions
    ui->actionTop->             setEnabled(BlockSelectMode==SELECTMODE_MULTIPLE);
    ui->actionMiddle->          setEnabled(BlockSelectMode==SELECTMODE_MULTIPLE);
    ui->actionBottom->          setEnabled(BlockSelectMode==SELECTMODE_MULTIPLE);
    ui->actionLeft->            setEnabled(BlockSelectMode==SELECTMODE_MULTIPLE);
    ui->actionCenter->          setEnabled(BlockSelectMode==SELECTMODE_MULTIPLE);
    ui->actionRight->           setEnabled(BlockSelectMode==SELECTMODE_MULTIPLE);
    ui->actionDistributeHoriz-> setEnabled(NbrSelected>=3);
    ui->actionDistributeVert->  setEnabled(NbrSelected>=3);
    ui->actionEditImage->       setEnabled((BlockSelectMode==SELECTMODE_ONE)&&(CurrentCompoObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK));
    ui->actionEditText->        setEnabled(BlockSelectMode==SELECTMODE_ONE);
    ui->actionInfo->            setEnabled((BlockSelectMode==SELECTMODE_ONE)&&(CurrentCompoObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK));
    ui->actionRemoveBlock->     setEnabled((BlockSelectMode==SELECTMODE_ONE)||(BlockSelectMode==SELECTMODE_MULTIPLE));
    ui->actionUpBlock->         setEnabled((BlockSelectMode==SELECTMODE_ONE)&&(CurrentCompoObjectNbr>0));
    ui->actionDownBlock->       setEnabled((BlockSelectMode==SELECTMODE_ONE)&&(CurrentCompoObjectNbr<BlockTable->rowCount()-1));
    ui->actionCopy->            setEnabled((BlockSelectMode==SELECTMODE_ONE)||(BlockSelectMode==SELECTMODE_MULTIPLE));
    ui->actionCut->             setEnabled((BlockSelectMode==SELECTMODE_ONE)||(BlockSelectMode==SELECTMODE_MULTIPLE));

    if (ui->actionEditImage->isEnabled()) {
        ui->actionEditImage->setIcon(QIcon(CurrentCompoObject->BackgroundBrush->MediaObject->ObjectType!=OBJECTTYPE_VIDEOFILE?ICON_EDIT_IMAGE:ICON_EDIT_MOVIE));
        switch (CurrentCompoObject->BackgroundBrush->MediaObject->ObjectType) {
            case OBJECTTYPE_VIDEOFILE:
                ui->actionEditImage->setText(QApplication::translate("DlgSlideProperties","Correct, reframe or cut video","Action title in slide edit dialog + dialog title of image edit dialog"));
                ui->actionEditImage->setToolTip(QApplication::translate("DlgSlideProperties","Define framing and correction of image or cut video","Tooltip"));
                break;
            case OBJECTTYPE_IMAGEFILE:
            case OBJECTTYPE_IMAGECLIPBOARD:
                ui->actionEditImage->setText(QApplication::translate("DlgSlideProperties","Correct or reframe image","Action title in slide edit dialog + dialog title of image edit dialog"));
                ui->actionEditImage->setToolTip(QApplication::translate("DlgSlideProperties","Define framing and correction of image","Tooltip"));
                break;
            case OBJECTTYPE_IMAGEVECTOR:
                ui->actionEditImage->setText(QApplication::translate("DlgSlideProperties","Reframe image vector","Action title in slide edit dialog + dialog title of image edit dialog"));
                ui->actionEditImage->setToolTip(QApplication::translate("DlgSlideProperties","Define framing and correction of image vector","Tooltip"));
                break;
            case OBJECTTYPE_GMAPSMAP:
                ui->actionEditImage->setText(QApplication::translate("DlgSlideProperties","Modify Google Maps map","Action title in slide edit dialog + dialog title of image edit dialog"));
                ui->actionEditImage->setToolTip(QApplication::translate("DlgSlideProperties","Define Modify Google Maps map and framing and correction of map","Tooltip"));
                break;
            default:    break;  // avoid warning
        }
    }

    //*****************************
    // Position, size and rotation
    //*****************************
    if (BlockSelectMode==SELECTMODE_ONE) {

        ui->ZoomLabel->     setEnabled(true);               ui->ZoomSlider-> setEnabled(true);
        ui->ZoomED->        setEnabled(true);               ui->ZoomResetBT->setEnabled(true);

        qreal Ratio_X,Ratio_Y;
        ComputeBlockRatio(CurrentCompoObject,Ratio_X,Ratio_Y);

        ui->ZoomSlider->setValue(CurrentCompoObject->TxtZoomLevel);
        ui->ZoomED->setValue(CurrentCompoObject->TxtZoomLevel);

    } else {
        ui->ZoomLabel->     setEnabled(false);              ui->ZoomSlider-> setEnabled(false);
        ui->ZoomED->        setEnabled(false);              ui->ZoomResetBT->setEnabled(false);
    }

    RefreshStyleControls();

    QApplication::restoreOverrideCursor();
    InRefreshControls=false;

    cShotComposer::RefreshControls(UpdateInteractiveZone);
}

//====================================================================================================================

void DlgImageComposer::s_BlockTable_Cut() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::s_BlockTable_Cut");

    if ((BlockSelectMode!=SELECTMODE_ONE)&&(BlockSelectMode!=SELECTMODE_MULTIPLE)) return;
    s_BlockTable_Copy();
    s_BlockTable_RemoveBlock();
}

//====================================================================================================================

void DlgImageComposer::s_BlockTable_Copy() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::s_BlockTable_Copy");

    if ((BlockSelectMode!=SELECTMODE_ONE)&&(BlockSelectMode!=SELECTMODE_MULTIPLE)) return;

    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));

    // Create xml document and root
    QDomDocument Object  =QDomDocument(APPLICATION_NAME);
    QDomElement  root    =Object.createElement("CLIPBOARD");
    int          BlockNum=0;
    for (int i=0;i<CompositionList->List.count();i++) if (IsSelected[i]) {
        QDomElement         Element=Object.createElement(QString("Block-%1").arg(BlockNum));
        cCompositionObject  *GlobalBlock=GetGlobalCompositionObject(CompositionList->List[i]->IndexKey);

        GlobalBlock->SaveToXML(Element,"CLIPBOARD-BLOCK-GLOBAL",ffdProject->ProjectFileName,true,true,NULL,NULL,true,false);                // Save global object
        CompositionList->List[i]->SaveToXML(Element,"CLIPBOARD-BLOCK-SHOT",ffdProject->ProjectFileName,true,true,NULL,NULL,true,false);     // Save shot object
        root.appendChild(Element);
        BlockNum++;
    }
    root.setAttribute("BlockNbr",BlockNum);
    Object.appendChild(root);

    // Transfert xml document to clipboard
    QMimeData *SlideData=new QMimeData();
    SlideData->setData("ffDiaporama/block",Object.toByteArray());
    QApplication::clipboard()->setMimeData(SlideData);

    RefreshControls();
    QApplication::restoreOverrideCursor();
}

//====================================================================================================================

void DlgImageComposer::s_BlockTable_Paste() {

    const QMimeData *SlideData=QApplication::clipboard()->mimeData();
    if (SlideData->hasFormat("ffDiaporama/block")) {
        QDomDocument Object=QDomDocument(APPLICATION_NAME);
        Object.setContent(SlideData->data("ffDiaporama/block"));
        if ((Object.elementsByTagName("CLIPBOARD").length()>0)&&(Object.elementsByTagName("CLIPBOARD").item(0).isElement()==true)) {

            QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
            AppendPartialUndo(UNDOACTION_FULL_SLIDE,BlockTable,true);

            QDomElement root=Object.elementsByTagName("CLIPBOARD").item(0).toElement();
            int BlockNbr=root.attribute("BlockNbr").toInt();

            for (int BlockNum=0;BlockNum<BlockNbr;BlockNum++) if ((root.elementsByTagName(QString("Block-%1").arg(BlockNum)).length()>0)&&(root.elementsByTagName(QString("Block-%1").arg(BlockNum)).item(0).isElement()==true)) {
                QDomElement Element=root.elementsByTagName(QString("Block-%1").arg(BlockNum)).item(0).toElement();
                // Create and append a composition block to the object list
                CurrentSlide->ObjectComposition.List.append(new cCompositionObject(COMPOSITIONTYPE_OBJECT,CurrentSlide->NextIndexKey,ApplicationConfig,&CurrentSlide->ObjectComposition));
                cCompositionObject *GlobalBlock=CurrentSlide->ObjectComposition.List[CurrentSlide->ObjectComposition.List.count()-1];
                GlobalBlock->LoadFromXML(Element,"CLIPBOARD-BLOCK-GLOBAL","",NULL,NULL,true,NULL,false,true);
                GlobalBlock->IndexKey=CurrentSlide->NextIndexKey;

                cCompositionObject ShotBlock(COMPOSITIONTYPE_SHOT,CurrentSlide->NextIndexKey,ApplicationConfig,this);
                ShotBlock.LoadFromXML(Element,"CLIPBOARD-BLOCK-SHOT","",NULL,NULL,true,NULL,false,true);
                ShotBlock.IndexKey=CurrentSlide->NextIndexKey;
                ShotBlock.BackgroundBrush->MediaObject=GlobalBlock->BackgroundBrush->MediaObject;
                ShotBlock.BackgroundBrush->DeleteMediaObject=false;
                ShotBlock.Text=GlobalBlock->Text;
                if (ShotBlock.Text!="") {
                    ShotBlock.FontName        =GlobalBlock->FontName;
                    ShotBlock.FontSize        =GlobalBlock->FontSize;
                    ShotBlock.FontColor       =GlobalBlock->FontColor;
                    ShotBlock.FontShadowColor =GlobalBlock->FontShadowColor;
                    ShotBlock.IsBold          =GlobalBlock->IsBold;
                    ShotBlock.IsItalic        =GlobalBlock->IsItalic;
                    ShotBlock.IsUnderline     =GlobalBlock->IsUnderline;
                    ShotBlock.HAlign          =GlobalBlock->HAlign;
                    ShotBlock.VAlign          =GlobalBlock->VAlign;
                    ShotBlock.StyleText       =GlobalBlock->StyleText;
                }
                // Now create and append a shot composition block to all shot
                for (int i=0;i<CurrentSlide->List.count();i++) {
                    CurrentSlide->List[i]->ShotComposition.List.append(new cCompositionObject(COMPOSITIONTYPE_SHOT,CurrentSlide->NextIndexKey,ApplicationConfig,&CurrentSlide->List[i]->ShotComposition));
                    CurrentSlide->List[i]->ShotComposition.List[CurrentSlide->List[i]->ShotComposition.List.count()-1]->CopyFromCompositionObject(&ShotBlock);
                }
                // Inc NextIndexKey
                CurrentSlide->NextIndexKey++;
            }

            // Reset thumbs if needed
            ResetThumbs(true);
            // Reset blocks table
            RefreshBlockTable(CompositionList->List.count()-1);

            // Select blocks we just added
            s_BlockTable_StartSelectionChange();
            BlockTable->clearSelection();
            for (int i=0;i<BlockNbr;i++) BlockTable->setCurrentCell(CompositionList->List.count()-1-i,0,i==0?QItemSelectionModel::Select|QItemSelectionModel::Current:QItemSelectionModel::Select);
            s_BlockTable_EndSelectionChange();

            QApplication::restoreOverrideCursor();
        }
    }
}

//====================================================================================================================

void DlgImageComposer::s_BlockTable_AddNewTextBlock() {
    QMenu *ContextMenu=new QMenu(this);
    ContextMenu->addAction(ui->actionAddSimpleTextBlock);
    ContextMenu->addAction(ui->actionAddClipArtTextBlock);
    ContextMenu->exec(QCursor::pos());
    delete ContextMenu;
    ui->AddTextBlock->setDown(false);
}

//====================================================================================================================

void DlgImageComposer::s_BlockTable_AddNewSimpleTextBlock() {
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,BlockTable,true);

    // Create and append a composition block to the object list
    CurrentSlide->ObjectComposition.List.append(new cCompositionObject(COMPOSITIONTYPE_OBJECT,CurrentSlide->NextIndexKey,ApplicationConfig,&CurrentSlide->ObjectComposition));
    cCompositionObject *CompositionObject=CurrentSlide->ObjectComposition.List[CurrentSlide->ObjectComposition.List.count()-1];

    // Apply Styles
    CompositionObject->ApplyTextStyle(ApplicationConfig->StyleTextCollection.GetStyleDef(ApplicationConfig->StyleTextCollection.DecodeString(ApplicationConfig->DefaultBlock_Text_TextST)));
    CompositionObject->ApplyBackgroundStyle(ApplicationConfig->StyleTextBackgroundCollection.GetStyleDef(ApplicationConfig->StyleTextBackgroundCollection.DecodeString(ApplicationConfig->DefaultBlock_Text_BackGST)));
    CompositionObject->ApplyBlockShapeStyle(ApplicationConfig->StyleBlockShapeCollection.GetStyleDef(ApplicationConfig->StyleBlockShapeCollection.DecodeString(ApplicationConfig->DefaultBlock_Text_ShapeST)));
    CompositionObject->BackgroundBrush->LockGeometry=false; // For ApplyAutoCompoSize don't use it
    CompositionObject->ApplyAutoCompoSize(ApplicationConfig->DefaultBlock_AutoSizePos,ffdProject->ImageGeometry);
    CompositionObject->BackgroundBrush->LockGeometry=(ApplicationConfig->DefaultBlock_AutoLocking==AUTOFRAMING_CUSTOMPRJLOCK);
    CompositionObject->BackgroundBrush->AspectRatio=(CompositionObject->h*(ffdProject->ImageGeometry==GEOMETRY_4_3?1440:ffdProject->ImageGeometry==GEOMETRY_16_9?1080:ffdProject->ImageGeometry==GEOMETRY_40_17?816:1920))/(CompositionObject->w*1920);

    // Create default text
    QTextDocument       TextDoc(QApplication::translate("DlgImageComposer","Text","Default text value"));
    QFont               Font=QFont(CompositionObject->FontName,CompositionObject->FontSize,CompositionObject->IsBold?QFont::Bold:QFont::Normal,CompositionObject->IsItalic?QFont::StyleItalic:QFont::StyleNormal);
    QTextOption         OptionText((CompositionObject->HAlign==0)?Qt::AlignLeft:(CompositionObject->HAlign==1)?Qt::AlignHCenter:(CompositionObject->HAlign==2)?Qt::AlignRight:Qt::AlignJustify);
    QTextCursor         Cursor(&TextDoc);
    QTextCharFormat     TCF;
    QTextBlockFormat    TBF;
    Cursor.select(QTextCursor::Document);
    OptionText.setWrapMode(QTextOption::WordWrap);
    Font.setUnderline(CompositionObject->IsUnderline);
    TextDoc.setDefaultFont(Font);
    TextDoc.setDefaultTextOption(OptionText);
    TCF.setFont(Font);
    TCF.setFontWeight(CompositionObject->IsBold?QFont::Bold:QFont::Normal);
    TCF.setFontItalic(CompositionObject->IsItalic);
    TCF.setFontUnderline(CompositionObject->IsUnderline);
    TCF.setForeground(QBrush(QColor(CompositionObject->FontColor)));
    TBF.setAlignment((CompositionObject->HAlign==0)?Qt::AlignLeft:(CompositionObject->HAlign==1)?Qt::AlignHCenter:(CompositionObject->HAlign==2)?Qt::AlignRight:Qt::AlignJustify);
    Cursor.setCharFormat(TCF);
    Cursor.setBlockFormat(TBF);
    CompositionObject->Text=TextDoc.toHtml();

    // Now create and append a shot composition block to all shot
    for (int i=0;i<CurrentSlide->List.count();i++) {
        CurrentSlide->List[i]->ShotComposition.List.append(new cCompositionObject(COMPOSITIONTYPE_SHOT,CompositionObject->IndexKey,ApplicationConfig,&CurrentSlide->List[i]->ShotComposition));
        CurrentSlide->List[i]->ShotComposition.List[CurrentSlide->List[i]->ShotComposition.List.count()-1]->CopyFromCompositionObject(CompositionObject);
    }

    // Inc NextIndexKey
    CurrentSlide->NextIndexKey++;

    // Reset thumbs if needed
    ResetThumbs(true);
    // Reset blocks table
    RefreshBlockTable(CompositionList->List.count()-1);
    NoPrepUndo=true;
    QTimer::singleShot(250,this,SLOT(s_BlockSettings_TextEditor()));    // Append "Open text editor" to the message queue
}

//====================================================================================================================

void DlgImageComposer::s_BlockTable_AddNewClipArtTextBlock() {
    cPopupTexteFrame* popup1 = new cPopupTexteFrame(this);
    QPoint Pos=mapToGlobal(ui->AddTextBlock->pos());
    popup1->DoInitPopup(QPoint(Pos.x()+ui->AddTextBlock->width(),Pos.y()+ui->AddTextBlock->height()));
    popup1->exec();
    QString RessourceName=popup1->GetCurrentTextFrame();
    if (RessourceName=="") return;

    AppendPartialUndo(UNDOACTION_FULL_SLIDE,BlockTable,true);

    // Create and append a composition block to the object list
    CurrentSlide->ObjectComposition.List.append(new cCompositionObject(COMPOSITIONTYPE_OBJECT,CurrentSlide->NextIndexKey,ApplicationConfig,&CurrentSlide->ObjectComposition));
    cCompositionObject *CompositionObject=CurrentSlide->ObjectComposition.List[CurrentSlide->ObjectComposition.List.count()-1];

    // Apply Styles
    CompositionObject->ApplyTextStyle(TextFrameList.List[TextFrameList.SearchImage(RessourceName)].TextStyle);
    CompositionObject->BackgroundBrush->LockGeometry=false; // For ApplyAutoCompoSize don't use it
    CompositionObject->ApplyAutoCompoSize(ApplicationConfig->DefaultBlock_AutoSizePos,ffdProject->ImageGeometry);
    CompositionObject->BackgroundBrush->LockGeometry=(ApplicationConfig->DefaultBlock_AutoLocking==AUTOFRAMING_CUSTOMPRJLOCK);
    CompositionObject->BackgroundBrush->AspectRatio =(CompositionObject->h*(ffdProject->ImageGeometry==GEOMETRY_4_3?1440:ffdProject->ImageGeometry==GEOMETRY_16_9?1080:ffdProject->ImageGeometry==GEOMETRY_40_17?816:1920))/(CompositionObject->w*1920);
    CompositionObject->TextClipArtName              =RessourceName;
    CompositionObject->TMx                          =TextFrameList.List[TextFrameList.SearchImage(RessourceName)].TMx;
    CompositionObject->TMy                          =TextFrameList.List[TextFrameList.SearchImage(RessourceName)].TMy;
    CompositionObject->TMw                          =TextFrameList.List[TextFrameList.SearchImage(RessourceName)].TMw;
    CompositionObject->TMh                          =TextFrameList.List[TextFrameList.SearchImage(RessourceName)].TMh;

    // Create default text
    QTextDocument       TextDoc(QApplication::translate("DlgImageComposer","Text","Default text value"));
    QFont               Font=QFont(CompositionObject->FontName,CompositionObject->FontSize,CompositionObject->IsBold?QFont::Bold:QFont::Normal,CompositionObject->IsItalic?QFont::StyleItalic:QFont::StyleNormal);
    QTextOption         OptionText((CompositionObject->HAlign==0)?Qt::AlignLeft:(CompositionObject->HAlign==1)?Qt::AlignHCenter:(CompositionObject->HAlign==2)?Qt::AlignRight:Qt::AlignJustify);
    QTextCursor         Cursor(&TextDoc);
    QTextCharFormat     TCF;
    QTextBlockFormat    TBF;
    Cursor.select(QTextCursor::Document);
    OptionText.setWrapMode(QTextOption::WordWrap);
    Font.setUnderline(CompositionObject->IsUnderline);
    TextDoc.setDefaultFont(Font);
    TextDoc.setDefaultTextOption(OptionText);
    TCF.setFont(Font);
    TCF.setFontWeight(CompositionObject->IsBold?QFont::Bold:QFont::Normal);
    TCF.setFontItalic(CompositionObject->IsItalic);
    TCF.setFontUnderline(CompositionObject->IsUnderline);
    TCF.setForeground(QBrush(QColor(CompositionObject->FontColor)));
    TBF.setAlignment((CompositionObject->HAlign==0)?Qt::AlignLeft:(CompositionObject->HAlign==1)?Qt::AlignHCenter:(CompositionObject->HAlign==2)?Qt::AlignRight:Qt::AlignJustify);
    Cursor.setCharFormat(TCF);
    Cursor.setBlockFormat(TBF);
    CompositionObject->Text=TextDoc.toHtml();

    // Now create and append a shot composition block to all shot
    for (int i=0;i<CurrentSlide->List.count();i++) {
        CurrentSlide->List[i]->ShotComposition.List.append(new cCompositionObject(COMPOSITIONTYPE_SHOT,CompositionObject->IndexKey,ApplicationConfig,&CurrentSlide->List[i]->ShotComposition));
        CurrentSlide->List[i]->ShotComposition.List[CurrentSlide->List[i]->ShotComposition.List.count()-1]->CopyFromCompositionObject(CompositionObject);
    }

    // Inc NextIndexKey
    CurrentSlide->NextIndexKey++;

    // Reset thumbs if needed
    ResetThumbs(true);
    // Reset blocks table
    RefreshBlockTable(CompositionList->List.count()-1);
    NoPrepUndo=true;
    QTimer::singleShot(250,this,SLOT(s_BlockSettings_TextEditor()));    // Append "Open text editor" to the message queue
}

//====================================================================================================================

void DlgImageComposer::s_BlockTable_AddNewFileBlock() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::s_BlockTable_AddNewFileBlock");

    ui->AddFileBlock->setDown(false);
    QStringList FileList;
    DlgFileExplorer Dlg(BROWSER_TYPE_MEDIAFILES,true,false,true,QApplication::translate("MainWindow","Add files"),ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) FileList=Dlg.GetCurrentSelectedFiles();
    if (FileList.count()==0) return;

    QApplication::processEvents();
    s_BlockTable_AddFilesBlock(FileList,BlockTable->rowCount());
}

//====================================================================================================================

void DlgImageComposer::s_BlockTable_AddFilesBlock(QStringList FileList,int PositionToInsert) {
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,BlockTable,true);

    // Add files
    for (int i=0;i<FileList.count();i++) {
        QString NewFile=FileList[i];
        QString ErrorMessage=QApplication::translate("MainWindow","Format not supported","Error message");

        // Create and append a composition block to the object list
        CurrentSlide->ObjectComposition.List.insert(PositionToInsert,new cCompositionObject(COMPOSITIONTYPE_OBJECT,CurrentSlide->NextIndexKey,ApplicationConfig,&CurrentSlide->ObjectComposition));
        cCompositionObject  *CompositionObject=CurrentSlide->ObjectComposition.List[PositionToInsert];
        cBrushDefinition    *CurrentBrush     =CompositionObject->BackgroundBrush;

        CompositionObject->Text     ="";
        CompositionObject->PenSize  =0;
        CurrentBrush->BrushType     =BRUSHTYPE_IMAGEDISK;

        QString BrushFileName =QFileInfo(NewFile).absoluteFilePath();

        bool    IsValide =false;
        QString Extension=QFileInfo(BrushFileName).suffix().toLower();

        if (ApplicationConfig->AllowImageExtension.contains(Extension))                 CurrentBrush->MediaObject=new cImageFile(ApplicationConfig);
            else if (ApplicationConfig->AllowImageVectorExtension.contains(Extension))  CurrentBrush->MediaObject=new cImageFile(ApplicationConfig);
            else if (ApplicationConfig->AllowVideoExtension.contains(Extension))        CurrentBrush->MediaObject=new cVideoFile(ApplicationConfig);

        IsValide=((CurrentBrush->MediaObject->GetInformationFromFile(BrushFileName,NULL,NULL,-1)&&(CurrentBrush->MediaObject->CheckFormatValide(this))));

        if (IsValide) {

            if (CurrentBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE) {
                cVideoFile *Video=(cVideoFile *)CurrentBrush->MediaObject;
                Video->EndPos=Video->GetRealDuration();
                if (Video->LibavStartTime>0) Video->StartPos=QTime(0,0,0,0).addMSecs(int64_t((double(Video->LibavStartTime)/AV_TIME_BASE)*1000));
            }

            // Apply Styles for texte
            CompositionObject->ApplyTextStyle(ApplicationConfig->StyleTextCollection.GetStyleDef(ApplicationConfig->StyleTextCollection.DecodeString(ApplicationConfig->DefaultBlockBA_IMG_TextST)));

            // Apply Styles for shape
            CompositionObject->ApplyBlockShapeStyle(ApplicationConfig->StyleBlockShapeCollection.GetStyleDef(ApplicationConfig->StyleBlockShapeCollection.DecodeString(ApplicationConfig->DefaultBlockBA_IMG_ShapeST)));

            // Apply styles for coordinates
            CurrentBrush->ApplyAutoFraming(ApplicationConfig->DefaultBlockBA[CurrentBrush->GetImageType()].AutoFraming,ProjectGeometry);
            if (CurrentBrush->MediaObject->ObjectType==OBJECTTYPE_IMAGEVECTOR) {
                CompositionObject->ApplyAutoCompoSize(AUTOCOMPOSIZE_REALSIZE,ffdProject->ImageGeometry);
                // adjust for image was not too small !
                if ((CompositionObject->w<0.2)&&(CompositionObject->h<0.2)) {
                    while ((CompositionObject->w<0.2)&&(CompositionObject->h<0.2)) {
                        CompositionObject->w=CompositionObject->w*2;
                        CompositionObject->h=CompositionObject->h*2;
                    }
                    CompositionObject->x=(1-CompositionObject->w)/2;
                    CompositionObject->y=(1-CompositionObject->h)/2;
                }
            } else CompositionObject->ApplyAutoCompoSize(ApplicationConfig->DefaultBlockBA[CurrentBrush->GetImageType()].AutoCompo,ffdProject->ImageGeometry);

            // Now create and append a shot composition block to all shot
            for (int i=0;i<CurrentSlide->List.count();i++) {
                CurrentSlide->List[i]->ShotComposition.List.insert(PositionToInsert,new cCompositionObject(COMPOSITIONTYPE_SHOT,CompositionObject->IndexKey,ApplicationConfig,&CurrentSlide->List[i]->ShotComposition));
                CurrentSlide->List[i]->ShotComposition.List[PositionToInsert]->CopyFromCompositionObject(CompositionObject);
            }
            // Inc NextIndexKey
            CurrentSlide->NextIndexKey++;
            PositionToInsert++;

        } else {
            delete CurrentSlide->ObjectComposition.List.takeAt(PositionToInsert);
            CustomMessageBox(this,QMessageBox::Critical,QApplication::translate("MainWindow","Error","Error message"),NewFile+"\n\n"+ErrorMessage,QMessageBox::Close);
        }
    }
    // Reset thumbs if needed
    ResetThumbs(true);
    // Reset blocks table
    RefreshBlockTable(PositionToInsert-1);
}

//====================================================================================================================
// User double click on a block in the BlockTable widget or in the scene

void DlgImageComposer::s_BlockTable_ItemDoubleClicked(QMouseEvent *) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::s_BlockTable_ItemDoubleClicked");

    if (BlockSelectMode!=SELECTMODE_ONE) return;
    if (CurrentCompoObject->BackgroundBrush->BrushType!=BRUSHTYPE_IMAGEDISK)    s_BlockSettings_TextEditor();
        else                                                                    s_BlockSettings_ImageEditCorrect();
}

//====================================================================================================================
// User right click on a block in the BlockTable widget or in the scene

void DlgImageComposer::s_BlockTable_ItemRightClicked(QMouseEvent *) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::s_BlockTable_ItemRightClicked");

    if (BlockSelectMode==SELECTMODE_NONE) {
        QMenu *ContextMenu=new QMenu(this);
        ContextMenu->addAction(ui->actionCut);
        ContextMenu->addAction(ui->actionCopy);
        ContextMenu->addAction(ui->actionPaste);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionAddTextBlock);
        ContextMenu->addAction(ui->actionAddFile);
        ContextMenu->exec(QCursor::pos());
        delete ContextMenu;
    } else if (BlockSelectMode==SELECTMODE_ONE) {
        QMenu *ContextMenu=new QMenu(this);
        ContextMenu->addAction(ui->actionCut);
        ContextMenu->addAction(ui->actionCopy);
        ContextMenu->addAction(ui->actionPaste);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionEditText);
        if (ui->actionEditImage->isEnabled()) ContextMenu->addAction(ui->actionEditImage);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionRemoveBlock);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionInfo);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionUpBlock);
        ContextMenu->addAction(ui->actionDownBlock);
        ContextMenu->exec(QCursor::pos());
        delete ContextMenu;
    } else if (BlockSelectMode==SELECTMODE_MULTIPLE) {
        QMenu *ContextMenu=new QMenu(this);
        ContextMenu->addAction(ui->actionTop);
        ContextMenu->addAction(ui->actionMiddle);
        ContextMenu->addAction(ui->actionBottom);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionLeft);
        ContextMenu->addAction(ui->actionCenter);
        ContextMenu->addAction(ui->actionRight);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionDistributeHoriz);
        ContextMenu->addAction(ui->actionDistributeVert);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionCut);
        ContextMenu->addAction(ui->actionCopy);
        ContextMenu->addAction(ui->actionPaste);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionRemoveBlock);
        ContextMenu->exec(QCursor::pos());
        delete ContextMenu;
    }
}

//====================================================================================================================

void DlgImageComposer::s_BlockTable_DragDropFiles(QList<QUrl> urlList) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::s_BlockTable_DragDropFiles");
    if (urlList.count()>0) {
        QString     fName;
        QFileInfo   info;
        QStringList FileList;
        for (int i=0;i<urlList.count();i++) {
            fName = urlList[i].toLocalFile();           // convert first QUrl to local path
            info.setFile(fName);                        // information about file
            if (info.isFile()) FileList.append(fName);  // append file
        }
        if (FileList.count()>0) {
            if (BlockTable->DragItemDest<0)                          BlockTable->DragItemDest=0;
            if (BlockTable->DragItemDest>BlockTable->rowCount()) BlockTable->DragItemDest=BlockTable->rowCount();
            s_BlockTable_AddFilesBlock(FileList,BlockTable->DragItemDest);
        }
    }
}

//====================================================================================================================

void DlgImageComposer::s_BlockSettings_Arrange() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::s_BlockSettings_Arrange");

    QMenu *ContextMenu=new QMenu(this);
    ContextMenu->addAction(ui->actionTop);
    ContextMenu->addAction(ui->actionMiddle);
    ContextMenu->addAction(ui->actionBottom);
    ContextMenu->addSeparator();
    ContextMenu->addAction(ui->actionLeft);
    ContextMenu->addAction(ui->actionCenter);
    ContextMenu->addAction(ui->actionRight);
    ContextMenu->addSeparator();
    ContextMenu->addAction(ui->actionDistributeHoriz);
    ContextMenu->addAction(ui->actionDistributeVert);
    ContextMenu->addSeparator();
    ContextMenu->addAction(ui->actionUpBlock);
    ContextMenu->addAction(ui->actionDownBlock);
    ContextMenu->exec(QCursor::pos());
    delete ContextMenu;
    ui->ArrangeBT->setDown(false);
}

//====================================================================================================================

void DlgImageComposer::s_BlockSettings_Edit() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::s_BlockSettings_Arrange");

    QMenu *ContextMenu=new QMenu(this);
    ContextMenu->addAction(ui->actionCut);
    ContextMenu->addAction(ui->actionCopy);
    ContextMenu->addAction(ui->actionPaste);
    ContextMenu->addSeparator();
    ContextMenu->addAction(ui->actionEditText);
    if (ui->actionEditImage->isEnabled()) ContextMenu->addAction(ui->actionEditImage);
    ContextMenu->addSeparator();
    ContextMenu->addAction(ui->actionRemoveBlock);
    ContextMenu->exec(QCursor::pos());
    delete ContextMenu;
    ui->EditBT->setDown(false);
}

//====================================================================================================================
//========= Open image/video correction editor

void DlgImageComposer::s_BlockSettings_ImageEditCorrect() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::s_BlockSettings_ImageEditCorrect");

    if ((InRefreshControls)||(BlockSelectMode!=SELECTMODE_ONE)||(!CurrentCompoObject)||(!ui->actionEditImage->isEnabled())) return;

    AppendPartialUndo(UNDOACTION_FULL_SLIDE,InteractiveZone,true);
    cBrushDefinition *CurrentBrush=CurrentCompoObject->BackgroundBrush;

    // Compute position of video
    int Position=(CurrentBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)?QTime(0,0,0,0).msecsTo(((cVideoFile*)&CurrentBrush->MediaObject)->StartPos):0;
    DlgImageCorrection Dlg(CurrentCompoObject,&CurrentCompoObject->BackgroundForm,CurrentCompoObject->BackgroundBrush,Position,ffdProject->ImageGeometry,ffdProject->ImageAnimSpeedWave,ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) {
        FramingCB_CurrentBrush   =NULL; // To force a refresh of ui->FramingCB !
        CurrentBrush->AspectRatio=CurrentBrush->AspectRatio;
        CurrentCompoObject->h    =(CurrentCompoObject->w*InteractiveZone->DisplayW*CurrentBrush->AspectRatio)/InteractiveZone->DisplayH;

        // Adjust height and width to image stay in screen
        if (((CurrentCompoObject->y+CurrentCompoObject->h)*InteractiveZone->DisplayH)>InteractiveZone->DisplayH) {
            CurrentCompoObject->h=1-CurrentCompoObject->y;
            CurrentCompoObject->w=((CurrentCompoObject->h*InteractiveZone->DisplayH)/CurrentBrush->AspectRatio)/InteractiveZone->DisplayW;
        }

        // Lulo object for image and video must be remove
        ApplicationConfig->ImagesCache.RemoveImageObject(CurrentCompoObject->BackgroundBrush->MediaObject->RessourceKey,CurrentCompoObject->BackgroundBrush->MediaObject->FileKey);

        // Reset thumbs if needed
        ResetThumbs(true);
        // Reset blocks table
        RefreshBlockTable(CurrentCompoObjectNbr);
    } else {
        RemoveLastPartialUndo();
    }
}

//====================================================================================================================
// Handler for Text
//====================================================================================================================

void DlgImageComposer::s_BlockSettings_TextZoom(int Value) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::s_BlockSettings_TextZoom");

    if (!ISBLOCKVALIDEVISIBLE()) return;
    AppendPartialUndo(UNDOACTION_FULL_SLIDE,ui->ZoomED,true);
    CurrentCompoObject->TxtZoomLevel=Value;
    ui->ZoomSlider->setValue(CurrentCompoObject->TxtZoomLevel);
    ui->ZoomED->setValue(CurrentCompoObject->TxtZoomLevel);
    // Apply values of previous shot to all shot for this object
    APPLY1TONEXT(TxtZoomLevel);
    ApplyToContexte(false);
}

void DlgImageComposer::s_BlockSettings_TextZoomReset() {
    s_BlockSettings_TextZoom(100);
}

//====================================================================================================================
// Display or hide rulers
//====================================================================================================================

void DlgImageComposer::s_RulersBt() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgImageComposer::s_RulersBt");

    DlgRulerDef Dlg(&InteractiveZone->MagneticRuler,false,ApplicationConfig,this);
    Dlg.InitDialog();
    connect(&Dlg,SIGNAL(RefreshDisplay()),this,SLOT(s_RefreshSceneImage()));
    if (Dlg.exec()==0) {
        ApplicationConfig->ThumbRuler=InteractiveZone->MagneticRuler;
        ui->RulersBT->setIcon(QIcon(QString(InteractiveZone->MagneticRuler!=0?ICON_RULER_ON:ICON_RULER_OFF)));
    }
    InteractiveZone->RefreshDisplay();
}
