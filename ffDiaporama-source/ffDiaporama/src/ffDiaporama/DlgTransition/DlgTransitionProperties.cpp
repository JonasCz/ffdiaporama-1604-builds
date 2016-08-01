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

#include "DlgTransitionProperties.h"
#include "ui_DlgTransitionProperties.h"

#include <QStyledItemDelegate>

//======================================
// Specific defines for this dialog box
//======================================
#define ROWHEIGHT   80
#define DECAL       10

int     CurrentSelectRow,CurrentSelectCol;

class BackgroundDelegate : public QStyledItemDelegate {
public:
    explicit BackgroundDelegate(QObject *parent = 0):QStyledItemDelegate(parent) {}

    void paint(QPainter *painter, const QStyleOptionViewItem &option,const QModelIndex &index) const {
        if ((index.row()==CurrentSelectRow)&&(index.column()==CurrentSelectCol)) painter->fillRect(option.rect,Qt::blue); else {
            QVariant background = index.data(Qt::BackgroundRole);
            if (background.canConvert<QBrush>()) painter->fillRect(option.rect, background.value<QBrush>());
            else painter->fillRect(option.rect,Qt::white);
        }
    }
};

//====================================================================================================================

DlgTransitionProperties::DlgTransitionProperties(bool IsMultiple,cDiaporamaObject *TheDiaporamaObject,cApplicationConfig *ApplicationConfig,QWidget *parent):
    QCustomDialog(ApplicationConfig,parent),ui(new Ui::DlgTransitionProperties) {
    ui->setupUi(this);
    OkBt            =ui->OKBT;
    CancelBt        =ui->CancelBt;
    HelpBt          =ui->HelpBt;
    HelpFile        ="0122";
    DiaporamaObject =TheDiaporamaObject;
    this->IsMultiple=IsMultiple;
    W=DiaporamaObject->Parent->GetWidthForHeight(ROWHEIGHT);
}

//====================================================================================================================

DlgTransitionProperties::~DlgTransitionProperties() {
    delete ui;
    if (PreviousFrame) {
        delete PreviousFrame;
        PreviousFrame=NULL;
    }
}

//====================================================================================================================

void DlgTransitionProperties::DoInitDialog() {
    if (IsMultiple) setWindowTitle(QApplication::translate("DlgTransitionProperties","Select a transition for a set of slides"));

    ui->SpeedWaveCB->AddProjectDefault(DiaporamaObject->Parent->TransitionSpeedWave);

    ui->TransitionTypeCB->addItem(QApplication::translate("DlgTransitionProperties","None and basic"),  QVariant(TRANSITIONFAMILLY_BASE));
    ui->TransitionTypeCB->addItem(QApplication::translate("DlgTransitionProperties","Zoom"),            QVariant(TRANSITIONFAMILLY_ZOOMINOUT));
    ui->TransitionTypeCB->addItem(QApplication::translate("DlgTransitionProperties","Slide"),           QVariant(TRANSITIONFAMILLY_SLIDE));
    ui->TransitionTypeCB->addItem(QApplication::translate("DlgTransitionProperties","Push"),            QVariant(TRANSITIONFAMILLY_PUSH));
    ui->TransitionTypeCB->addItem(QApplication::translate("DlgTransitionProperties","Deform"),          QVariant(TRANSITIONFAMILLY_DEFORM));
    ui->TransitionTypeCB->addItem(QApplication::translate("DlgTransitionProperties","Luma-Bar"),        QVariant(TRANSITIONFAMILLY_LUMA_BAR));
    ui->TransitionTypeCB->addItem(QApplication::translate("DlgTransitionProperties","Luma-Box"),        QVariant(TRANSITIONFAMILLY_LUMA_BOX));
    ui->TransitionTypeCB->addItem(QApplication::translate("DlgTransitionProperties","Luma-Center"),     QVariant(TRANSITIONFAMILLY_LUMA_CENTER));
    ui->TransitionTypeCB->addItem(QApplication::translate("DlgTransitionProperties","Luma-Checker"),    QVariant(TRANSITIONFAMILLY_LUMA_CHECKER));
    ui->TransitionTypeCB->addItem(QApplication::translate("DlgTransitionProperties","Luma-Clock"),      QVariant(TRANSITIONFAMILLY_LUMA_CLOCK));
    ui->TransitionTypeCB->addItem(QApplication::translate("DlgTransitionProperties","Luma-Snake"),      QVariant(TRANSITIONFAMILLY_LUMA_SNAKE));

    // Init internal values
    PreviousFrame=NULL;
    AnimationTime=0;
    ui->TransitionTable->setItemDelegate(new BackgroundDelegate(this));
    MaxItem=0;

    // Save Object settings before force a transition
    TransitionFamilly  =DiaporamaObject->TransitionFamilly;
    TransitionSubType  =DiaporamaObject->TransitionSubType;
    TransitionDuration =DiaporamaObject->TransitionDuration;

    //=================> Init PreviousFrame object

    // Change Object settings to force a transition
    DiaporamaObject->TransitionFamilly =TRANSITIONFAMILLY_ZOOMINOUT;
    DiaporamaObject->TransitionSubType =0;
    DiaporamaObject->TransitionDuration=TransitionDuration;

    // Retrieve time information
    TimePosition=DiaporamaObject->Parent->GetObjectStartPosition(DiaporamaObject->Parent->GetObjectIndex(DiaporamaObject));

    // Retrieve object information and create PreviousFrame
    PreviousFrame=new cDiaporamaObjectInfo(NULL,TimePosition,DiaporamaObject->Parent,double(1000)/DiaporamaObject->Parent->ApplicationConfig->PreviewFPS,false);
    QList<cCompositionObjectContext *> PreparedTransitBrushList;
    QList<cCompositionObjectContext *> PreparedBrushList;
    if ((PreviousFrame->IsTransition)&&(PreviousFrame->TransitObject)) DiaporamaObject->Parent->CreateObjectContextList(PreviousFrame,W,ROWHEIGHT,false,true,true,PreparedTransitBrushList,DiaporamaObject->Parent);
    DiaporamaObject->Parent->CreateObjectContextList(PreviousFrame,W,ROWHEIGHT,true,true,true,PreparedBrushList,DiaporamaObject->Parent);
    DiaporamaObject->Parent->LoadSources(PreviousFrame,W,ROWHEIGHT,true,true,PreparedTransitBrushList,PreparedBrushList);                       // Load background and image

    // Set old values
    DiaporamaObject->TransitionFamilly  =TransitionFamilly;
    DiaporamaObject->TransitionSubType  =TransitionSubType;
    DiaporamaObject->TransitionDuration =TransitionDuration;

    //=================> Init controls

    QString Duration=QString("%1").arg(double(TransitionDuration)/double(1000),0,'f');
    while (Duration.endsWith('0')) Duration=Duration.left(Duration.length()-1);
    while (Duration.endsWith('.')) Duration=Duration.left(Duration.length()-1);
    ui->TransitionDurationCB->setCurrentIndex(ui->TransitionDurationCB->findText(Duration));

    for (int i=0;(i<ui->TransitionTypeCB->count());i++) if (ui->TransitionTypeCB->itemData(i).toInt()==TransitionFamilly) {
        ui->TransitionTypeCB->setCurrentIndex(i);
        s_ChTransitionTypeCB(i);
    }

    ui->SpeedWaveCB->SetCurrentValue(DiaporamaObject->TransitionSpeedWave);

    //=================> Define handlers

    connect(ui->TransitionTypeCB,SIGNAL(currentIndexChanged(int)),this,SLOT(s_ChTransitionTypeCB(int)));
    connect(ui->TransitionTable,SIGNAL(currentCellChanged(int,int,int,int)),this,SLOT(s_TableCellChanged(int,int,int,int)));
    connect(ui->TransitionDurationCB,SIGNAL(currentIndexChanged(int)),this,SLOT(s_ChTransitionCB(int)));
    connect(ui->SpeedWaveCB,SIGNAL(currentIndexChanged(int)),this,SLOT(s_ChTransitionCB(int)));
    connect(&Timer,SIGNAL(timeout()),this,SLOT(s_TimerEvent()));
}

//====================================================================================================================
// Initiale Undo

void DlgTransitionProperties::PrepareGlobalUndo() {
    // Save object before modification for cancel button
    Undo=new QDomDocument(APPLICATION_NAME);
    QDomElement root=Undo->createElement("UNDO-DLG");       // Create xml document and root
    DiaporamaObject->SaveToXML(root,"UNDO-DLG-OBJECT",DiaporamaObject->Parent->ProjectFileName,true,NULL,NULL,false);  // Save object
    Undo->appendChild(root);                                // Add object to xml document
}

//====================================================================================================================
// Apply Undo : call when user click on Cancel button

void DlgTransitionProperties::DoGlobalUndo() {
    QDomElement root=Undo->documentElement();
    if (root.tagName()=="UNDO-DLG") DiaporamaObject->LoadFromXML(root,"UNDO-DLG-OBJECT","",NULL,NULL,false);
}

//====================================================================================================================

bool DlgTransitionProperties::DoAccept() {
    DiaporamaObject->TransitionFamilly  =(TRFAMILLY)ui->TransitionTypeCB->itemData(ui->TransitionTypeCB->currentIndex()).toInt();
    DiaporamaObject->TransitionSubType  =ui->TransitionTable->currentRow()*ui->TransitionTable->columnCount()+ui->TransitionTable->currentColumn();
    DiaporamaObject->TransitionDuration =int64_t(GetDoubleValue(ui->TransitionDurationCB->currentText())*double(1000));
    DiaporamaObject->TransitionSpeedWave=ui->SpeedWaveCB->GetCurrentValue();
    return true;
}

//====================================================================================================================

void DlgTransitionProperties::resizeEvent(QResizeEvent *) {
    s_ChTransitionTypeCB(0);
}

//====================================================================================================================

void DlgTransitionProperties::s_ChTransitionTypeCB(int /*NewValue*/) {
    Timer.stop();
    if (PreviousFrame==NULL) return;    // Nothing to do if previsous frame is not initialize
    int NbrCol=ui->TransitionTable->viewport()->width()/(W+DECAL*2);
    if (NbrCol<=0) NbrCol=1;

    // Convert item number to transition familly
    int NewValue=ui->TransitionTypeCB->itemData(ui->TransitionTypeCB->currentIndex()).toInt();

    ui->TransitionTable->setUpdatesEnabled(false);

    // clear table
    while (ui->TransitionTable->rowCount()>0)    ui->TransitionTable->removeRow(0);
    while (ui->TransitionTable->columnCount()>0) ui->TransitionTable->removeColumn(0);

    for (int i=0;i<NbrCol;i++) {
        ui->TransitionTable->insertColumn(0);
        ui->TransitionTable->setColumnWidth(0,W+DECAL*2);
    }

    MaxItem=0;
    switch (NewValue) {
        case TRANSITIONFAMILLY_BASE        : MaxItem=TRANSITIONMAXSUBTYPE_BASE;         break;
        case TRANSITIONFAMILLY_ZOOMINOUT   : MaxItem=TRANSITIONMAXSUBTYPE_ZOOMINOUT;    break;
        case TRANSITIONFAMILLY_PUSH        : MaxItem=TRANSITIONMAXSUBTYPE_PUSH;         break;
        case TRANSITIONFAMILLY_SLIDE       : MaxItem=TRANSITIONMAXSUBTYPE_SLIDE;        break;
        case TRANSITIONFAMILLY_DEFORM      : MaxItem=TRANSITIONMAXSUBTYPE_DEFORM;       break;
        case TRANSITIONFAMILLY_LUMA_BAR    : MaxItem=LumaList_Bar.List.count();         break;
        case TRANSITIONFAMILLY_LUMA_BOX    : MaxItem=LumaList_Box.List.count();         break;
        case TRANSITIONFAMILLY_LUMA_CENTER : MaxItem=LumaList_Center.List.count();      break;
        case TRANSITIONFAMILLY_LUMA_CHECKER: MaxItem=LumaList_Checker.List.count();     break;
        case TRANSITIONFAMILLY_LUMA_CLOCK  : MaxItem=LumaList_Clock.List.count();       break;
        case TRANSITIONFAMILLY_LUMA_SNAKE  : MaxItem=LumaList_Snake.List.count();       break;
        default                            : MaxItem=0;                                 break;
    }

    AnimationTime=0;

    // Adjust TransitionFamilly
    PreviousFrame->TransitionFamilly=(TRFAMILLY)NewValue;
    // Create a frame object base on PreviousFrame
    cDiaporamaObjectInfo *Frame=new cDiaporamaObjectInfo();
    Frame->Copy(PreviousFrame);
    // Ajdust Transition PCT done
    Frame->TransitionPCTDone =double(AnimationTime)/double(Frame->TransitionDuration);

    // Now add items
    int CurCol=0;
    ui->TransitionTable->insertRow(ui->TransitionTable->rowCount());    // Create first row
    ui->TransitionTable->setRowHeight(ui->TransitionTable->rowCount()-1,ROWHEIGHT+DECAL*2);

    for (int i=0;i<MaxItem;i++) {
        // Adjust transition subtype
        Frame->TransitionSubType=i;
        // Render images
        DiaporamaObject->Parent->DoAssembly(ComputePCT(Frame->CurrentObject->GetSpeedWave(),Frame->TransitionPCTDone),Frame,W,ROWHEIGHT);

        // Create a label object to handle the bitmap
        QLabel *Widget=new QLabel();
        Widget->setAlignment(Qt::AlignCenter);
        Widget->setPixmap(QPixmap().fromImage(Frame->RenderedImage));
        if (CurCol>=ui->TransitionTable->columnCount()) {
            ui->TransitionTable->insertRow(ui->TransitionTable->rowCount());
            ui->TransitionTable->setRowHeight(ui->TransitionTable->rowCount()-1,ROWHEIGHT+DECAL*2);
            CurCol=0;
        }
        ui->TransitionTable->setCellWidget(ui->TransitionTable->rowCount()-1,CurCol,Widget);
        CurCol++;
    }
    // Free buffers
    delete Frame;

    ui->TransitionTable->setCurrentCell(0,0,QItemSelectionModel::ClearAndSelect);
    ui->TransitionTable->setUpdatesEnabled(true);

    // Select a cell
    if (NewValue==TransitionFamilly) {
        CurrentSelectRow=TransitionSubType/ui->TransitionTable->columnCount();
        CurrentSelectCol=TransitionSubType % ui->TransitionTable->columnCount();
        ui->TransitionTable->setCurrentCell(CurrentSelectRow,CurrentSelectCol,QItemSelectionModel::ClearAndSelect);
    }

    Timer.start(double(1000)/DiaporamaObject->Parent->ApplicationConfig->PreviewFPS);   // Start timer for animation
}

//====================================================================================================================
// Change of transition duration : Reload frame with new value
//====================================================================================================================

void DlgTransitionProperties::s_ChTransitionCB(int) {
    // Stop timer
    Timer.stop();

    // Clear PreviousFrame before create a new one
    if (PreviousFrame!=NULL) {
        delete PreviousFrame;
        PreviousFrame=NULL;
    }

    // Change Object settings to force a transition
    DiaporamaObject->TransitionFamilly  =TRANSITIONFAMILLY_ZOOMINOUT;
    DiaporamaObject->TransitionSubType  =0;
    DiaporamaObject->TransitionDuration =int(GetDoubleValue(ui->TransitionDurationCB->currentText())*double(1000));

    // Retrieve time information
    TimePosition=DiaporamaObject->Parent->GetObjectStartPosition(DiaporamaObject->Parent->GetObjectIndex(DiaporamaObject));

    // Retrieve object information and create PreviousFrame
    PreviousFrame=new cDiaporamaObjectInfo(NULL,TimePosition,DiaporamaObject->Parent,double(1000)/DiaporamaObject->Parent->ApplicationConfig->PreviewFPS,false);
    QList<cCompositionObjectContext *> PreparedTransitBrushList;
    QList<cCompositionObjectContext *> PreparedBrushList;
    if ((PreviousFrame->IsTransition)&&(PreviousFrame->TransitObject)) DiaporamaObject->Parent->CreateObjectContextList(PreviousFrame,W,ROWHEIGHT,false,true,true,PreparedTransitBrushList,DiaporamaObject->Parent);
    DiaporamaObject->Parent->CreateObjectContextList(PreviousFrame,W,ROWHEIGHT,true,true,true,PreparedBrushList,DiaporamaObject->Parent);
    DiaporamaObject->Parent->LoadSources(PreviousFrame,W,ROWHEIGHT,true,true,PreparedTransitBrushList,PreparedBrushList);                       // Load background and image

    // Set old values
    DiaporamaObject->TransitionFamilly  =TransitionFamilly;
    DiaporamaObject->TransitionSubType  =TransitionSubType;
    DiaporamaObject->TransitionDuration =TransitionDuration;

    // Reset AnimationTime
    AnimationTime=0;

    // Adjust Transition
    PreviousFrame->TransitionFamilly =(TRFAMILLY)ui->TransitionTypeCB->itemData(ui->TransitionTypeCB->currentIndex()).toInt();
    PreviousFrame->TransitionSubType =ui->TransitionTable->currentRow()*ui->TransitionTable->columnCount()+ui->TransitionTable->currentColumn();
    PreviousFrame->TransitionDuration=int(GetDoubleValue(ui->TransitionDurationCB->currentText())*double(1000));

    // Restart timer
    Timer.start(double(1000)/DiaporamaObject->Parent->ApplicationConfig->PreviewFPS);   // Re-start timer for animation
}

//====================================================================================================================
// Timer event : update pixmap in the table
//====================================================================================================================
void DlgTransitionProperties::s_TimerEvent() {
    // Update all pixmap in the table
    int CurCol=0;
    int CurRow=0;
    AnimationTime+=double(1000)/DiaporamaObject->Parent->ApplicationConfig->PreviewFPS;
    if (AnimationTime>int(GetDoubleValue(ui->TransitionDurationCB->currentText())*double(1000))) AnimationTime=0;

    // Create a frame object base on PreviousFrame
    cDiaporamaObjectInfo *Frame=new cDiaporamaObjectInfo();
    Frame->Copy(PreviousFrame);

    // Ajdust Transition PCT done
    Frame->TransitionPCTDone=double(AnimationTime)/double(Frame->TransitionDuration);

    for (int i=0;i<MaxItem;i++) {
        // Adjust transition subtype
        Frame->TransitionSubType=i;
        Frame->RenderedImage=QImage();  // Clear image to ensure DoAssembly will compute it
        // Render images
        int SpeedWave=ui->SpeedWaveCB->GetCurrentValue();
        if (SpeedWave==SPEEDWAVE_PROJECTDEFAULT) SpeedWave=DiaporamaObject->Parent->TransitionSpeedWave;
        DiaporamaObject->Parent->DoAssembly(ComputePCT(SpeedWave,Frame->TransitionPCTDone),Frame,W,ROWHEIGHT);

        // Add icon in the bottom left corner
        QPainter P;
        QImage   *Img=IconList.GetIcon(Frame->TransitionFamilly,Frame->TransitionSubType);
        P.begin(&Frame->RenderedImage);
        P.drawImage(QRect(0,Frame->RenderedImage.height()-32,32,32),*Img);
        P.end();
        delete Img;

        // Create a label object to handle the bitmap
        QLabel *Widget=(QLabel *)ui->TransitionTable->cellWidget(CurRow,CurCol);
        if (Widget) Widget->setPixmap(QPixmap().fromImage(Frame->RenderedImage));

        // Go to next image
        CurCol++;
        if (CurCol>=ui->TransitionTable->columnCount()) {
            CurCol=0;
            CurRow++;
        }
    }
    // Free buffers
    delete Frame;
}

//====================================================================================================================
// Change of selected cell in the table
//====================================================================================================================
void DlgTransitionProperties::s_TableCellChanged(int currentRow,int currentColumn,int previousRow,int previousColumn) {
    int NewCell=currentRow*ui->TransitionTable->columnCount()+currentColumn;
    if (NewCell>=MaxItem) {
        CurrentSelectRow=previousRow;
        CurrentSelectCol=previousColumn;
        ui->TransitionTable->setCurrentCell(previousRow,previousColumn,QItemSelectionModel::ClearAndSelect);
    } else {
        CurrentSelectRow=currentRow;
        CurrentSelectCol=currentColumn;
    }
}
