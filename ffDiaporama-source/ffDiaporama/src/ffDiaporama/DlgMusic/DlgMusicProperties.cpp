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

#include "DlgMusicProperties.h"
#include "ui_DlgMusicProperties.h"

#include "DlgFileExplorer/DlgFileExplorer.h"
#include "DlgEditMusic.h"
#include <QMessageBox>

DlgMusicProperties::DlgMusicProperties(cDiaporamaObject *TheDiaporamaObject,cApplicationConfig *ApplicationConfig,QWidget *parent):
    QCustomDialog(ApplicationConfig,parent), ui(new Ui::DlgMusicProperties) {
    ui->setupUi(this);
    OkBt    =ui->OKBT;
    CancelBt=ui->CancelBt;
    HelpBt  =ui->HelpBt;
    HelpFile="0114";
    DiaporamaObject=TheDiaporamaObject;
    DlgWorkingTaskDialog=NULL;
}

//====================================================================================================================

DlgMusicProperties::~DlgMusicProperties() {
    if (DlgWorkingTaskDialog) {
        DlgWorkingTaskDialog->close();
        delete DlgWorkingTaskDialog;
        DlgWorkingTaskDialog=NULL;
    }
    delete ui;
}

//====================================================================================================================

void DlgMusicProperties::DoInitDialog() {
    // Init embeded widgets
    #if QT_VERSION >= 0x050000
        ui->PlayListTable->horizontalHeader()->setSectionResizeMode(0,QHeaderView::ResizeToContents);
        ui->PlayListTable->horizontalHeader()->setSectionResizeMode(1,QHeaderView::ResizeToContents);
        ui->PlayListTable->horizontalHeader()->setSectionResizeMode(2,QHeaderView::ResizeToContents);
        ui->PlayListTable->horizontalHeader()->setSectionResizeMode(3,QHeaderView::ResizeToContents);
    #else
        ui->PlayListTable->horizontalHeader()->setResizeMode(0,QHeaderView::ResizeToContents);
        ui->PlayListTable->horizontalHeader()->setResizeMode(1,QHeaderView::ResizeToContents);
        ui->PlayListTable->horizontalHeader()->setResizeMode(2,QHeaderView::ResizeToContents);
        ui->PlayListTable->horizontalHeader()->setResizeMode(3,QHeaderView::ResizeToContents);
    #endif
    RefreshControl(true);

    // Define handler
    connect(ui->SameMusicNormalRD,SIGNAL(clicked()),this,SLOT(s_SameMusicNormal()));
    connect(ui->SameMusicReduceVolumeRD,SIGNAL(clicked()),this,SLOT(s_SameMusicReduceVolume()));
    connect(ui->SameMusicPauseRD,SIGNAL(clicked()),this,SLOT(s_SameMusicPause()));
    connect(ui->UpMusicBt,SIGNAL(clicked()),this,SLOT(s_UpMusic()));
    connect(ui->DownMusicBt,SIGNAL(clicked()),this,SLOT(s_DownMusic()));
    connect(ui->EditMusicBt,SIGNAL(clicked()),this,SLOT(s_EditMusic()));
    connect(ui->NewMusicCB,SIGNAL(clicked()),this,SLOT(s_NewMusic()));
    connect(ui->AddMusicBt,SIGNAL(clicked()),this,SLOT(s_AddMusic()));
    connect(ui->RemoveMusicBt,SIGNAL(clicked()),this,SLOT(s_RemoveMusic()));
    connect(ui->PlayListTable,SIGNAL(itemDoubleClicked(QTableWidgetItem *)),this,SLOT(s_PlayListTable_DoubleClick(QTableWidgetItem *)));
    connect(ui->PlayListTable,SIGNAL(itemSelectionChanged()),this,SLOT(s_PlayListTable_SelectionChanged()));
}

//====================================================================================================================
// Initiale Undo

void DlgMusicProperties::PrepareGlobalUndo() {
    // Save object before modification for cancel button
    Undo=new QDomDocument(APPLICATION_NAME);
    QDomElement root=Undo->createElement("UNDO-DLG");       // Create xml document and root
    DiaporamaObject->SaveToXML(root,"UNDO-DLG-OBJECT",DiaporamaObject->Parent->ProjectFileName,true,NULL,NULL,false);  // Save object
    Undo->appendChild(root);                                // Add object to xml document
}

//====================================================================================================================
// Apply Undo : call when user click on Cancel button

void DlgMusicProperties::DoGlobalUndo() {
    QDomElement root=Undo->documentElement();
    if (root.tagName()=="UNDO-DLG") DiaporamaObject->LoadFromXML(root,"UNDO-DLG-OBJECT","",NULL,NULL,false);
}

//====================================================================================================================

bool DlgMusicProperties::GetCBChecked(int row) {
    QWidget *wdg  =(QWidget *)ui->PlayListTable->cellWidget(row,3);
    QCheckBox *CHB=wdg->findChild<QCheckBox *>();
    if (CHB) return CHB->isChecked(); else return false;
}

bool DlgMusicProperties::DoAccept() {
    DiaporamaObject->MusicReduceFactor=double(ui->VolumeReductionFactorCB->currentText().toInt())/100;
    // Get Music volume for each file of the playlist
    if (DiaporamaObject->MusicType) {
        for (int CurIndex=0;CurIndex<DiaporamaObject->MusicList.count();CurIndex++) {
            QString Volume =((QComboBox *)ui->PlayListTable->cellWidget(CurIndex,2))->currentText(); Volume=Volume.left(Volume.length()-1);
            QString FadeIN =((QComboBox *)ui->PlayListTable->cellWidget(CurIndex,4))->currentText();
            QString FadeOUT=((QComboBox *)ui->PlayListTable->cellWidget(CurIndex,5))->currentText();
            bool    ok     =true;
            double  qVolume=Volume.toInt(&ok);
            if (!ok) qVolume=-1; else qVolume=qreal(qVolume)/100;
            DiaporamaObject->MusicList[CurIndex]->AllowCredit=GetCBChecked(CurIndex);
            DiaporamaObject->MusicList[CurIndex]->Volume     =qVolume;
            DiaporamaObject->MusicList[CurIndex]->ForceFadIn =int64_t(FadeIN.toDouble()*1000);
            DiaporamaObject->MusicList[CurIndex]->ForceFadOut=int64_t(FadeOUT.toDouble()*1000);
        }
    } else DiaporamaObject->MusicList.clear();
    return true;
}

//====================================================================================================================

void DlgMusicProperties::s_SameMusicNormal() {
    if (DiaporamaObject==NULL) return;
    DiaporamaObject->MusicPause=false;
    DiaporamaObject->MusicReduceVolume=false;
    RefreshControl();
}

void DlgMusicProperties::s_SameMusicReduceVolume() {
    DiaporamaObject->MusicPause=false;
    DiaporamaObject->MusicReduceVolume=true;
    RefreshControl();
}

void DlgMusicProperties::s_SameMusicPause() {
    if (DiaporamaObject==NULL) return;
    DiaporamaObject->MusicPause=true;
    DiaporamaObject->MusicReduceVolume=false;
    RefreshControl();
}

//====================================================================================================================

void DlgMusicProperties::s_NewMusic() {
    if (DiaporamaObject==NULL) return;
    DiaporamaObject->MusicType=ui->NewMusicCB->isChecked();
    RefreshControl();
}

//====================================================================================================================

void DlgMusicProperties::SetItem(int row,int MusicIndex) {
    QImage Icon=DiaporamaObject->MusicList[MusicIndex]->GetIcon(cCustomIcon::ICON100,false);
    if (!Icon.isNull()) Icon=Icon.scaledToHeight(32);

    QString SN=DiaporamaObject->MusicList[MusicIndex]->ShortName();
    if (SN.length()>30) {
        int i=SN.length()/2;
        while ((i<SN.length())&&(SN[i]>='A')) i++;
        if (i<SN.length()) SN.insert(i,"\n");
    }
    QTableWidgetItem *Item=new QTableWidgetItem(QIcon(QPixmap().fromImage(Icon)),SN);
    Item->setTextAlignment(Qt::AlignLeft|Qt::AlignVCenter);
    ui->PlayListTable->setItem(row,0,Item);

    Item=new QTableWidgetItem(DiaporamaObject->MusicList[MusicIndex]->GetDuration().toString("hh:mm:ss.zzz")+"/"+DiaporamaObject->MusicList[MusicIndex]->GetRealDuration().toString("hh:mm:ss.zzz"));
    Item->setTextAlignment(Qt::AlignHCenter|Qt::AlignVCenter);
    if (!DiaporamaObject->MusicList[MusicIndex]->IsComputedAudioDuration) Item->setTextColor(Qt::red);
    ui->PlayListTable->setItem(row,1,Item);

    QComboBox *InternalCB=new QComboBox(ui->PlayListTable);
    for (int Factor=150;Factor>=10;Factor-=10) InternalCB->addItem(QString("%1%").arg(Factor));
    InternalCB->addItem(QApplication::translate("DlgMusicProperties","Auto"));
    if (DiaporamaObject->MusicList[MusicIndex]->Volume==-1) InternalCB->setCurrentIndex(InternalCB->count()-1);
        else InternalCB->setCurrentIndex(InternalCB->findText(QString("%1%").arg(int(DiaporamaObject->MusicList[MusicIndex]->Volume*100))));
    ui->PlayListTable->setCellWidget(row,2,InternalCB);

    // Generic column
    QWidget     *wdg        =new QWidget;
    QCheckBox   *InternalChB=new QCheckBox(wdg);
    QHBoxLayout *layout     =new QHBoxLayout(wdg);
    layout->setContentsMargins(0,0,0,0);
    layout->addWidget(InternalChB);
    layout->setAlignment(Qt::AlignCenter);
    wdg->setLayout(layout);
    InternalChB->setChecked(DiaporamaObject->MusicList[MusicIndex]->AllowCredit);
    ui->PlayListTable->setCellWidget(row,3,wdg);

    // Fade-In column
    QComboBox *FadeINCB=new QComboBox(ui->PlayListTable);
    for (double Factor=0;Factor<=10000;Factor+=500) FadeINCB->addItem(QString("%1").arg(Factor/1000,4,'f',1,'0'));
    FadeINCB->setCurrentIndex(FadeINCB->findText(QString("%1").arg(double(DiaporamaObject->MusicList[MusicIndex]->ForceFadIn)/1000,4,'f',1,'0')));
    ui->PlayListTable->setCellWidget(row,4,FadeINCB);

    // Fade-Out column
    QComboBox *FadeOUTCB=new QComboBox(ui->PlayListTable);
    for (double Factor=0;Factor<=10000;Factor+=500) FadeOUTCB->addItem(QString("%1").arg(Factor/1000,4,'f',1,'0'));
    FadeOUTCB->setCurrentIndex(FadeOUTCB->findText(QString("%1").arg(double(DiaporamaObject->MusicList[MusicIndex]->ForceFadOut)/1000,4,'f',1,'0')));
    ui->PlayListTable->setCellWidget(row,5,FadeOUTCB);
}

//====================================================================================================================

void DlgMusicProperties::RefreshControl(bool RefreshList) {
    if (DiaporamaObject!=NULL) {
        if (RefreshList) {
            while (ui->PlayListTable->rowCount()>0) ui->PlayListTable->removeRow(0);
            // Add music to PlayListTable
            for (int CurIndex=0;CurIndex<DiaporamaObject->MusicList.count();CurIndex++) {
                int j=ui->PlayListTable->rowCount();     // Item will be add at end of the list
                ui->PlayListTable->insertRow(j);
                SetItem(j,CurIndex);
            }
        }

        ui->SameMusicNormalRD->setChecked((!DiaporamaObject->MusicPause)&&(!DiaporamaObject->MusicReduceVolume));
        ui->SameMusicReduceVolumeRD->setChecked((!DiaporamaObject->MusicPause)&&(DiaporamaObject->MusicReduceVolume));
        ui->VolumeReductionFactorCB->setEnabled((!DiaporamaObject->MusicPause)&&(DiaporamaObject->MusicReduceVolume));
        ui->VolumeReductionFactorCB->setCurrentIndex(ui->VolumeReductionFactorCB->findText(QString("%1").arg(int(DiaporamaObject->MusicReduceFactor*100))));
        ui->SameMusicPauseRD->setChecked((DiaporamaObject->MusicPause)&&(!DiaporamaObject->MusicReduceVolume));
    }

    if ((DiaporamaObject!=NULL)&&(DiaporamaObject->MusicType)) {
        ui->NewMusicCB->setChecked(true);
        ui->PlayListTable->setEnabled(true);
        ui->AddMusicBt->setEnabled(true);
        ui->RemoveMusicBt->setEnabled((DiaporamaObject->MusicList.count()>0)&&(ui->PlayListTable->currentRow()!=-1));
        ui->EditMusicBt->setEnabled((DiaporamaObject->MusicList.count()>0)&&(ui->PlayListTable->currentRow()!=-1));
        ui->UpMusicBt->setEnabled((DiaporamaObject->MusicList.count()>0)&&(ui->PlayListTable->currentRow()>0));
        ui->DownMusicBt->setEnabled((DiaporamaObject->MusicList.count()>0)&&(ui->PlayListTable->currentRow()!=-1)&&(ui->PlayListTable->currentRow()<ui->PlayListTable->rowCount()-1));
        int TotalDuration=0;
        for (int CurIndex=0;CurIndex<DiaporamaObject->MusicList.count();CurIndex++) TotalDuration+=QTime(0,0,0,0).msecsTo(DiaporamaObject->MusicList[CurIndex]->GetDuration());
        ui->LabelDuration->setText(QTime(0,0,0,0).addMSecs(TotalDuration).toString("hh:mm:ss"));
    } else {
        ui->PlayListTable->setEnabled(false);
        ui->AddMusicBt->setEnabled(false);
        ui->RemoveMusicBt->setEnabled(false);
        ui->EditMusicBt->setEnabled(false);
        ui->UpMusicBt->setEnabled(false);
        ui->DownMusicBt->setEnabled(false);
        ui->Label1->setText("");
        ui->LabelDuration->setText("");
    }
    int CurIndex=ui->PlayListTable->currentRow();
    if ((CurIndex<0)||(CurIndex>=DiaporamaObject->MusicList.count())) ui->FilePath->setText("");
        else ui->FilePath->setText(QFileInfo(DiaporamaObject->MusicList[CurIndex]->FileName()).absoluteFilePath());
}

//====================================================================================================================

void DlgMusicProperties::s_AddMusic() {
    CancelAction=false;
    FileList.clear();
    DlgFileExplorer Dlg(BROWSER_TYPE_SOUNDONLY,true,false,false,QApplication::translate("DlgMusicProperties","Add music files"),DiaporamaObject->Parent->ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) FileList=Dlg.GetCurrentSelectedFiles();

    // Add files
    if (FileList.count()>0) {
        if (DlgWorkingTaskDialog) {
            DlgWorkingTaskDialog->close();
            delete DlgWorkingTaskDialog;
            DlgWorkingTaskDialog=NULL;
        }
        DlgWorkingTaskDialog=new DlgWorkingTask(QApplication::translate("DlgMusicProperties","Add music files"),&CancelAction,ApplicationConfig,this);
        DlgWorkingTaskDialog->InitDialog();
        DlgWorkingTaskDialog->SetMaxValue(FileList.count(),0);
        QTimer::singleShot(LATENCY,this,SLOT(s_Action_AddMusic()));
        DlgWorkingTaskDialog->exec();
    }
}

void DlgMusicProperties::s_Action_AddMusic() {
    if ((FileList.count()==0)||(CancelAction)) {
        QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
        if (DlgWorkingTaskDialog) {
            DlgWorkingTaskDialog->close();
            delete DlgWorkingTaskDialog;
            DlgWorkingTaskDialog=NULL;
        }
        FileList.clear();
        RefreshControl(true);
        QApplication::restoreOverrideCursor();
        return;
    }
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    QString NewFile   =FileList.takeFirst();
    bool    ModifyFlag=false;
    int     CurIndex  =DiaporamaObject->MusicList.count();
    DlgWorkingTaskDialog->DisplayText(QApplication::translate("MainWindow","Add file to project :")+QFileInfo(NewFile).fileName());
    DlgWorkingTaskDialog->DisplayProgress(DlgWorkingTaskDialog->MaxValue+DlgWorkingTaskDialog->AddValue-FileList.count());
    DiaporamaObject->MusicList.insert(CurIndex,new cMusicObject(ApplicationConfig));
    if (DiaporamaObject->MusicList[CurIndex]->GetInformationFromFile(NewFile,NULL,&ModifyFlag)&&(DiaporamaObject->MusicList[CurIndex]->CheckFormatValide(this))) {
        if (!DiaporamaObject->MusicList[CurIndex]->IsComputedAudioDuration) {
            DlgWorkingTaskDialog->DisplayText2(QApplication::translate("MainWindow","Analyse file:"));
            QList<qreal> Peak,Moyenne;
            DlgWorkingTaskDialog->TimerProgress=0;
            if (!DiaporamaObject->MusicList[CurIndex]->IsComputedAudioDuration)
                DiaporamaObject->MusicList[CurIndex]->DoAnalyseSound(&Peak,&Moyenne,&CancelAction,&DlgWorkingTaskDialog->TimerProgress);
            DlgWorkingTaskDialog->StopText2();
            DiaporamaObject->MusicList[CurIndex]->EndPos=DiaporamaObject->MusicList[CurIndex]->GetRealDuration();
        }
        if (ModifyFlag) emit SetModifyFlag();
    } else {
        DiaporamaObject->MusicList.removeAt(CurIndex);
    }
    QApplication::restoreOverrideCursor();
    QTimer::singleShot(LATENCY,this,SLOT(s_Action_AddMusic()));
}

//====================================================================================================================

void DlgMusicProperties::s_RemoveMusic() {
    int CurIndex=ui->PlayListTable->currentRow();
    if (CurIndex==-1) return;
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    DiaporamaObject->MusicList.removeAt(CurIndex);
    ui->PlayListTable->removeRow(CurIndex);
    if (CurIndex<ui->PlayListTable->rowCount()) ui->PlayListTable->setCurrentCell(CurIndex,0); else ui->PlayListTable->setCurrentCell(0,0);
    QApplication::restoreOverrideCursor();
    RefreshControl();
}

//====================================================================================================================

void DlgMusicProperties::s_EditMusic() {
    int CurIndex=ui->PlayListTable->currentRow();
    if (CurIndex==-1) return;
    DlgEditMusic Dlg(DiaporamaObject->MusicList[CurIndex],ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) RefreshControl(true);
}

//====================================================================================================================

void DlgMusicProperties::s_PlayListTable_DoubleClick(QTableWidgetItem *) {
    s_EditMusic();
}

//====================================================================================================================

void DlgMusicProperties::s_PlayListTable_SelectionChanged() {
    RefreshControl();
}

//====================================================================================================================

void DlgMusicProperties::s_UpMusic() {
    int CurIndex=ui->PlayListTable->currentRow();
    if (CurIndex<1) return;
    DiaporamaObject->MusicList.swap(CurIndex,CurIndex-1);
    RefreshControl(true);
    ui->PlayListTable->setCurrentCell(CurIndex-1,0);
}

//====================================================================================================================

void DlgMusicProperties::s_DownMusic() {
    int CurIndex=ui->PlayListTable->currentRow();
    if ((CurIndex<0)||(CurIndex>ui->PlayListTable->rowCount()-1)) return;
    DiaporamaObject->MusicList.swap(CurIndex,CurIndex+1);
    RefreshControl(true);
    ui->PlayListTable->setCurrentCell(CurIndex+1,0);
}
