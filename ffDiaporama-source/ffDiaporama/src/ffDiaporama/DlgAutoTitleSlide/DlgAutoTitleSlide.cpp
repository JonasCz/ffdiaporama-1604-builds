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

#include "DlgAutoTitleSlide.h"
#include "ui_DlgAutoTitleSlide.h"
#include "DlgffDPjrProperties/DlgffDPjrProperties.h"
#include "engine/cLocation.h"
#include "DlgGMapsLocation/DlgGMapsLocation.h"

#define TIMERFREQ   200

DlgAutoTitleSlide::DlgAutoTitleSlide(bool IsCreation,cDiaporamaObject *DiaporamaObject,cApplicationConfig *ApplicationConfig,QWidget *parent):
    QCustomDialog(ApplicationConfig,parent),ui(new Ui::DlgAutoTitleSlide) {

    ui->setupUi(this);
    OkBt        =ui->OKBT;
    CancelBt    =ui->CancelBt;
    HelpBt      =ui->HelpBt;
    HelpFile    ="0103";

    CurrentSlide                     =DiaporamaObject;
    ui->ModelTable->ApplicationConfig=ApplicationConfig;
    this->IsCreation                 =IsCreation;
    IsLocationChanged                =false;

    // Copy current slide for display
    QDomDocument DomDoc;
    QDomElement  DomElem=DomDoc.createElement("COPY");
    DiaporamaObject->SaveToXML(DomElem,"COPY","",true,NULL,NULL,false);
    ui->ModelTable->CurrentSlide=new cDiaporamaObject(DiaporamaObject->Parent);
    ui->ModelTable->CurrentSlide->LoadFromXML(DomElem,"COPY","",NULL,NULL,false);

    if (IsCreation) {
        CurrentSlide->StartNewChapter=false;
        CurrentSlide->SlideName      ="<%AUTOTS_100000%>";
        CurrentSlide->Parent->UpdateChapterInformation();
    }

    OldName=CurrentSlide->SlideName;
}

//====================================================================================================================

DlgAutoTitleSlide::~DlgAutoTitleSlide() {
    Timer.stop();
    delete ui->ModelTable->CurrentSlide;
    ui->ModelTable->CurrentSlide=NULL;
    delete ui;
}

//====================================================================================================================
// Initialise dialog

void DlgAutoTitleSlide::DoInitDialog() {
    if (IsCreation) {
        setWindowTitle(QApplication::translate("DlgAutoTitleSlide","Add a predefined title slide"));
        ui->EditModeSpacer->setVisible(false);
        ui->OKPreviousBT->setVisible(false);
        ui->OKNextBT->setVisible(false);
    } else {
        setWindowTitle(QApplication::translate("DlgAutoTitleSlide","Edit a predefined title slide")+" - "+QApplication::translate("DlgSlideProperties","Slide")+QString(" %1/%2").arg(CurrentSlide->Parent->CurrentCol+1).arg(CurrentSlide->Parent->List.count()));
        ui->OKPreviousBT->setEnabled(CurrentSlide->Parent->CurrentCol>0);
        ui->OKNextBT->setEnabled(CurrentSlide->Parent->CurrentCol<CurrentSlide->Parent->List.count()-1);
    }

    ui->LocationFrame->setAutoFillBackground(true);
    ui->OverrideProjectLocationCB->setChecked(CurrentSlide->ChapterLocation!=NULL);

    RefreshControl();

    ui->ChapterEventDateED->setDisplayFormat(ApplicationConfig->ShortDateFormat);
    ui->ChapterNameED->setText(CurrentSlide->ChapterName);
    ui->ChapterEventDateED->setDate(CurrentSlide->OverrideProjectEventDate?CurrentSlide->ChapterEventDate:CurrentSlide->Parent->ProjectInfo->EventDate);
    ui->ChapterDateED->setPlainText(CurrentSlide->OverrideProjectEventDate?CurrentSlide->OverrideChapterLongDate?CurrentSlide->ChapterLongDate:FormatLongDate(CurrentSlide->ChapterEventDate):CurrentSlide->Parent->ProjectInfo->LongDate);

    int CurrentType   =(CurrentSlide->GetAutoTSNumber()/100000)-1;
    int CurrentSubType=(CurrentSlide->GetAutoTSNumber()%100000)/10000;
    ui->SlideTypeCB->setCurrentIndex(CurrentType);
    s_ChSlideTypeCB(CurrentType);
    ui->SlideCatCB->setCurrentIndex(CurrentSubType);
    s_ChSlideCatCB(CurrentSubType);
    //ui->ModelTable->SetCurrentModel(OldName.mid(QString("<%AUTOTS_").length(),QString("000000").length()));

    connect(ui->OKPreviousBT,               SIGNAL(clicked()),this,SLOT(OKPrevious()));
    connect(ui->OKNextBT,                   SIGNAL(clicked()),this,SLOT(OKNext()));
    connect(ui->ConvertSlideBT,             SIGNAL(clicked()),this,SLOT(OKConvert()));
    connect(ui->OverrideProjectDateCB,      SIGNAL(stateChanged(int)),this,SLOT(OverrideProjectDateChanged(int)));
    connect(ui->OverrideDateCB,             SIGNAL(stateChanged(int)),this,SLOT(OverrideDateCBChanged(int)));
    connect(ui->ChapterEventDateED,         SIGNAL(dateChanged(const QDate &)),this,SLOT(ChapterEventDateChanged(const QDate &)));
    connect(ui->LocationBT,                 SIGNAL(pressed()),this,SLOT(SelectLocation()));
    connect(ui->ClearLocationBT,            SIGNAL(pressed()),this,SLOT(ClearLocation()));
    connect(ui->OverrideProjectLocationCB,  SIGNAL(stateChanged(int)),this,SLOT(OverrideLocationCBChanged(int)));
    connect(ui->SlideTypeCB,                SIGNAL(currentIndexChanged(int)),this,SLOT(s_ChSlideTypeCB(int)));
    connect(ui->SlideCatCB,                 SIGNAL(currentIndexChanged(int)),this,SLOT(s_ChSlideCatCB(int)));
    connect(ui->ChapterNameED,              SIGNAL(textChanged(QString)),this,SLOT(s_ChapterNameChanged(QString)));
    connect(ui->ChapterDateED,              SIGNAL(textChanged()),this,SLOT(s_ChapterDateChanged()));
    connect(ui->ProjectPropertiesBt,        SIGNAL(clicked()),this,SLOT(ProjectProperties()));
    connect(ui->ModelTable,                 SIGNAL(DoubleClickEvent(QMouseEvent *)),this,SLOT(accept()));
    connect(&Timer,                         SIGNAL(timeout()),this,SLOT(s_TimerEvent()));
}

//====================================================================================================================
// RefreshControl

void DlgAutoTitleSlide::RefreshControl() {
    ui->OverrideProjectDateCB->setChecked(CurrentSlide->OverrideProjectEventDate);
    ui->OverrideDateCB->setChecked(CurrentSlide->OverrideChapterLongDate);
    ui->ChapterEventDateLabel->setEnabled(CurrentSlide->OverrideProjectEventDate);
    ui->ChapterEventDateED->setEnabled(CurrentSlide->OverrideProjectEventDate);
    ui->OverrideDateLabel->setEnabled(CurrentSlide->OverrideProjectEventDate);
    ui->ChapterDateED->setEnabled(CurrentSlide->OverrideProjectEventDate && CurrentSlide->OverrideChapterLongDate);

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

void DlgAutoTitleSlide::PrepareGlobalUndo() {
    // Save object before modification for cancel button
    Undo=new QDomDocument(APPLICATION_NAME);
    QDomElement root=Undo->createElement("UNDO-DLG");                                               // Create xml document and root
    CurrentSlide->SaveToXML(root,"UNDO-DLG-OBJECT",CurrentSlide->Parent->ProjectFileName,true,NULL,NULL,false);     // Save object
    Undo->appendChild(root);                                                                        // Add object to xml document
}

//====================================================================================================================
// Apply Undo : call when user click on Cancel button

void DlgAutoTitleSlide::DoGlobalUndo() {
    QDomElement root=Undo->documentElement();
    if (root.tagName()=="UNDO-DLG") CurrentSlide->LoadFromXML(root,"UNDO-DLG-OBJECT","",NULL,NULL,false);
}

//====================================================================================================================

bool DlgAutoTitleSlide::DoAccept() {
    QString CurrentModel=ui->ModelTable->GetCurrentModel();
    if (!CurrentModel.isEmpty()) {
        Timer.stop();
        CurrentSlide->SlideName=QString("<%AUTOTS_%1%>").arg(ui->ModelTable->GetCurrentModel());
        int ModelNum=ui->ModelTable->ModelTable->SearchModel(ui->ModelTable->GetCurrentModel());
        if (OldName!=CurrentSlide->SlideName)
            CurrentSlide->LoadModelFromXMLData(ui->ModelTable->ModelTable->ModelType,ui->ModelTable->ModelTable->List[ModelNum]->Model,&ui->ModelTable->ModelTable->List[ModelNum]->ResKeyList,true);   // Always duplicate ressource
        CurrentSlide->OverrideProjectEventDate=ui->OverrideProjectDateCB->isChecked();
        CurrentSlide->OverrideChapterLongDate =ui->OverrideDateCB->isChecked();
        CurrentSlide->ChapterName             =ui->ChapterNameED->text();
        if (CurrentSlide->OverrideProjectEventDate) CurrentSlide->ChapterEventDate=ui->ChapterEventDateED->date();
        if (CurrentSlide->OverrideChapterLongDate)  CurrentSlide->ChapterLongDate=ui->ChapterDateED->toPlainText();
        CurrentSlide->Parent->UpdateChapterInformation();
        CurrentSlide->Parent->UpdateGMapsObject();
        emit SetModifyFlag();
        return true;
    } else {
        CustomMessageBox(this,QMessageBox::Information,this->windowTitle(),
                         QApplication::translate("DlgAutoTitleSlide","Please select a model first"),QMessageBox::Close);
        return false;
    }
}

void DlgAutoTitleSlide::OKPrevious() {
    if (DoAccept()) {
        SaveWindowState();  // Save Window size and position
        done(2);            // Close the box
    }
}

void DlgAutoTitleSlide::OKNext() {
    if (DoAccept()) {
        SaveWindowState();  // Save Window size and position
        done(3);            // Close the box
    }
}

void DlgAutoTitleSlide::OKConvert() {
    if (DoAccept()) {
        CurrentSlide->SlideName=CurrentSlide->ChapterName;
        CurrentSlide->ChapterName="";
        SaveWindowState();  // Save Window size and position
        done(4);            // Close the box
    }
}

//====================================================================================================================

void DlgAutoTitleSlide::OverrideProjectDateChanged(int) {
    CurrentSlide->OverrideProjectEventDate=ui->OverrideProjectDateCB->isChecked();
    if (!CurrentSlide->OverrideProjectEventDate) {
        ui->ChapterEventDateED->setDate(CurrentSlide->Parent->ProjectInfo->EventDate);
        CurrentSlide->ChapterLongDate=FormatLongDate(CurrentSlide->Parent->ProjectInfo->EventDate);
        ui->ChapterDateED->setPlainText(CurrentSlide->ChapterLongDate);
    }
    CurrentSlide->Parent->UpdateChapterInformation();
    emit SetModifyFlag();
    RefreshControl();
}

//====================================================================================================================

void DlgAutoTitleSlide::OverrideDateCBChanged(int) {
    CurrentSlide->OverrideChapterLongDate=ui->OverrideDateCB->isChecked();
    if (!CurrentSlide->OverrideChapterLongDate) {
        CurrentSlide->ChapterLongDate=FormatLongDate(CurrentSlide->ChapterEventDate);
        ui->ChapterDateED->setPlainText(CurrentSlide->ChapterLongDate);
    }
    CurrentSlide->Parent->UpdateChapterInformation();
    emit SetModifyFlag();
    RefreshControl();
}

//====================================================================================================================

void DlgAutoTitleSlide::ChapterEventDateChanged(const QDate &NewDate) {
    CurrentSlide->ChapterEventDate=NewDate;
    if (!CurrentSlide->OverrideChapterLongDate) {
        CurrentSlide->ChapterLongDate=CurrentSlide->OverrideProjectEventDate?FormatLongDate(CurrentSlide->ChapterEventDate):CurrentSlide->Parent->ProjectInfo->LongDate;
        ui->ChapterDateED->setPlainText(CurrentSlide->ChapterLongDate);
    }
    CurrentSlide->Parent->UpdateChapterInformation();
    emit SetModifyFlag();
}

//====================================================================================================================

void DlgAutoTitleSlide::s_ChSlideTypeCB(int CurrentType) {
    Timer.stop();
    //int CurrentType=ui->SlideTypeCB->currentIndex();
    int SubType;
    ui->SlideCatCB->clear();
    switch (CurrentType) {
        case 0:
            for (SubType=0;SubType<MODELTYPE_PROJECTTITLE_CATNUMBER;SubType++) ui->SlideCatCB->addItem(ApplicationConfig->PrjTitleModels[CurrentSlide->Parent->ImageGeometry][SubType==9?MODELTYPE_PROJECTTITLE_CATNUMBER-1:SubType]->NameCategorie);
            CurrentSlide->StartNewChapter=false;
            break;
        case 1:
            for (SubType=0;SubType<MODELTYPE_CHAPTERTITLE_CATNUMBER;SubType++) ui->SlideCatCB->addItem(ApplicationConfig->CptTitleModels[CurrentSlide->Parent->ImageGeometry][SubType==9?MODELTYPE_CHAPTERTITLE_CATNUMBER-1:SubType]->NameCategorie);
            CurrentSlide->StartNewChapter=true;
            break;
        case 2:
            for (SubType=0;SubType<MODELTYPE_CREDITTITLE_CATNUMBER;SubType++) ui->SlideCatCB->addItem(ApplicationConfig->CreditTitleModels[CurrentSlide->Parent->ImageGeometry][SubType==9?MODELTYPE_CREDITTITLE_CATNUMBER-1:SubType]->NameCategorie);
            CurrentSlide->StartNewChapter=false;
            break;
    }
    CurrentSlide->Parent->UpdateInformation();

    ui->scrollArea->setVisible(CurrentSlide->StartNewChapter);
    ui->ChapterNameLabel->setVisible(CurrentSlide->StartNewChapter);
    ui->ChapterNameED->setVisible(CurrentSlide->StartNewChapter);
    ui->OverrideProjectDateCB->setVisible(CurrentSlide->StartNewChapter);
    ui->ChapterEventDateLabel->setVisible(CurrentSlide->StartNewChapter);
    ui->ChapterEventDateED->setVisible(CurrentSlide->StartNewChapter);
    ui->OverrideDateLabel->setVisible(CurrentSlide->StartNewChapter);
    ui->OverrideDateCB->setVisible(CurrentSlide->StartNewChapter);
    ui->ChapterDateED->setVisible(CurrentSlide->StartNewChapter);

    ui->OverrideProjectLocationCB->setVisible(CurrentSlide->StartNewChapter);
    ui->LocationLabel->setVisible(CurrentSlide->StartNewChapter);
    ui->LocationFrame->setVisible(CurrentSlide->StartNewChapter);
    ui->LocationBT->setVisible(CurrentSlide->StartNewChapter);
    ui->ClearLocationBT->setVisible(CurrentSlide->StartNewChapter);

    switch (CurrentType) {
        case 0 : ui->ModelTable->PrepareTable(ApplicationConfig->PrjTitleModels[CurrentSlide->Parent->ImageGeometry][0]);       break;
        case 1 : ui->ModelTable->PrepareTable(ApplicationConfig->CptTitleModels[CurrentSlide->Parent->ImageGeometry][0]);       break;
        case 2 : ui->ModelTable->PrepareTable(ApplicationConfig->CreditTitleModels[CurrentSlide->Parent->ImageGeometry][0]);    break;
    }
    ui->ModelTable->SetCurrentModel(OldName.mid(QString("<%AUTOTS_").length(),QString("000000").length()));
    ui->ModelTable->TimerPosition=0;

    RefreshControl();

    Timer.start(TIMERFREQ);
    emit SetModifyFlag();
}

//====================================================================================================================

void DlgAutoTitleSlide::s_ChSlideCatCB(int CurrentSubType) {
    int CurrentType     =ui->SlideTypeCB->currentIndex();
    //int CurrentSubType  =ui->SlideCatCB->currentIndex();
    Timer.stop();
    switch (CurrentType) {
        case 0 : ui->ModelTable->PrepareTable(ApplicationConfig->PrjTitleModels[CurrentSlide->Parent->ImageGeometry][CurrentSubType==9?MODELTYPE_PROJECTTITLE_CATNUMBER-1:CurrentSubType]);     break;
        case 1 : ui->ModelTable->PrepareTable(ApplicationConfig->CptTitleModels[CurrentSlide->Parent->ImageGeometry][CurrentSubType==9?MODELTYPE_CHAPTERTITLE_CATNUMBER-1:CurrentSubType]);     break;
        case 2 : ui->ModelTable->PrepareTable(ApplicationConfig->CreditTitleModels[CurrentSlide->Parent->ImageGeometry][CurrentSubType==9?MODELTYPE_CREDITTITLE_CATNUMBER-1:CurrentSubType]);   break;
    }
    ui->ModelTable->SetCurrentModel(OldName.mid(QString("<%AUTOTS_").length(),QString("000000").length()));
    ui->ModelTable->TimerPosition=0;
    Timer.start(TIMERFREQ);
    emit SetModifyFlag();
}

//====================================================================================================================

void DlgAutoTitleSlide::s_ChapterNameChanged(QString) {
    CurrentSlide->ChapterName=ui->ChapterNameED->text();
    CurrentSlide->Parent->UpdateChapterInformation();
    emit SetModifyFlag();
}

//====================================================================================================================

void DlgAutoTitleSlide::s_ChapterDateChanged() {
    CurrentSlide->ChapterLongDate=ui->ChapterDateED->toPlainText();
    CurrentSlide->Parent->UpdateChapterInformation();
    emit SetModifyFlag();
}

//====================================================================================================================

void DlgAutoTitleSlide::s_TimerEvent() {
    if (!CustomTitleModelTableLockPaint.tryLock(0)) return;
    ui->ModelTable->TimerPosition+=TIMERFREQ;
    ui->ModelTable->setUpdatesEnabled(false);
    ui->ModelTable->setUpdatesEnabled(true);
    CustomTitleModelTableLockPaint.unlock();
}

//====================================================================================================================

void DlgAutoTitleSlide::ProjectProperties() {
    Timer.stop();
    DlgffDPjrProperties Dlg(false,CurrentSlide->Parent,ApplicationConfig,this);
    Dlg.AllowGMapRefresh=false;
    Dlg.InitDialog();
    if (Dlg.exec()==0) emit SetModifyFlag();
    ui->ModelTable->TimerPosition=0;
    Timer.start(TIMERFREQ);
}

//====================================================================================================================
#define FAVACTIONTYPE_ACTIONTYPE    0xF000
#define FAVACTIONTYPE_EDIT          0x1000
#define FAVACTIONTYPE_SELECT        0x8000

void DlgAutoTitleSlide::SelectLocation() {
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

void DlgAutoTitleSlide::ClearLocation() {
    if (CurrentSlide->ChapterLocation) delete ((cLocation *)CurrentSlide->ChapterLocation);
    CurrentSlide->ChapterLocation=NULL;
    ui->Location->setText("");
    ui->LocationIcon->setPixmap(QPixmap());
    IsLocationChanged=true;
}

//====================================================================================================================

void DlgAutoTitleSlide::OverrideLocationCBChanged(int) {
    if ((!ui->OverrideProjectLocationCB->isChecked())&&(CurrentSlide->ChapterLocation)) {
        delete ((cLocation *)CurrentSlide->ChapterLocation);
        CurrentSlide->ChapterLocation=NULL;
        ui->Location->setText("");
        ui->LocationIcon->setPixmap(QPixmap());
    }
    RefreshControl();
    IsLocationChanged=true;
}
