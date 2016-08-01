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

#include "DlgAdjustToSound.h"
#include "ui_DlgAdjustToSound.h"

DlgAdjustToSound::DlgAdjustToSound(QList<int> *ObjectList,cDiaporama *Diaporama,cApplicationConfig *ApplicationConfig,QWidget *parent):QCustomDialog(ApplicationConfig,parent), ui(new Ui::DlgAdjustToSound) {
    ui->setupUi(this);
    CancelBt        =ui->CancelBt;
    //HelpBt          =ui->HelpBt;
    //HelpFile        ="0124";
    this->ObjectList=ObjectList;
    this->Diaporama =Diaporama;
}

//====================================================================================================================

DlgAdjustToSound::~DlgAdjustToSound() {
    delete ui;
}

//====================================================================================================================

void DlgAdjustToSound::DoInitDialog() {
    cDiaporamaObject *PrevObject      =NULL;
    cDiaporamaObject *CurObject       =NULL;
    cDiaporamaObject *NextObject      =NULL;
    int              Current          =ObjectList->first();
    int64_t          StartPosition    =0;
    cMusicObject     *CurMusic        =Diaporama->GetMusicObject(Current,StartPosition,NULL,NULL);              // compute StartPosition
    int64_t          PrevStartPosition=0;
    cMusicObject     *PrevMusic       =Current>0?Diaporama->GetMusicObject(Current-1,PrevStartPosition):NULL;   // compute PrevStartPosition

    SelectionDuration=0;
    for (int i=0;i<ObjectList->count();i++) {
        int Num=ObjectList->at(i);
        PrevObject=Num>0?Diaporama->List[Num-1]:NULL;
        CurObject =Diaporama->List[Num];
        if (!CurObject->MusicPause) SelectionDuration=SelectionDuration+CurObject->GetDuration()-(Num>0?CurObject->GetTransitDuration():0);
    }
    PrevObject=Current>0?Diaporama->List[Current-1]:NULL;
    CurObject =Diaporama->List[Current];
    NextObject=ObjectList->last()<Diaporama->List.count()-1?Diaporama->List[ObjectList->last()+1]:NULL;

    if ((CurMusic)&&(StartPosition>=(QTime(0,0,0,0).msecsTo(CurMusic->GetDuration())-CurObject->TransitionDuration)))                       CurMusic=NULL;
    if ((PrevMusic)&&(PrevObject)&&(PrevStartPosition>=(QTime(0,0,0,0).msecsTo(PrevMusic->GetDuration())-PrevObject->TransitionDuration)))  PrevMusic=NULL;

    QStringList TempExtProperties;
    ApplicationConfig->FilesTable->GetExtendedProperties(CurMusic->FileKey,&TempExtProperties);

    int64_t TrackDuration=QTime(0,0,0,0).msecsTo(CurMusic->GetDuration());
    int64_t DurationLeft =TrackDuration-StartPosition;
    int64_t Transition   =NextObject?NextObject->GetTransitDuration():0;

    Remaining  =DurationLeft-SelectionDuration;
    MissingWith=Remaining-Transition;

    ui->ICONLabel->setPixmap(QPixmap().fromImage(CurMusic->GetIcon(cCustomIcon::ICON100,false)));
    ui->MusicFile->setText(CurMusic->FileName());
    ui->Artist->setText(GetInformationValue("artist",&TempExtProperties));
    ui->Title->setText(GetInformationValue("title",&TempExtProperties));
    ui->Duration->setText(QTime(0,0,0,0).addMSecs(TrackDuration).toString("hh:mm:ss.zzz"));

    ui->SlidesInSelection->setText(QString("%1").arg(ObjectList->count()));
    ui->TimePlayed->setText(QTime(0,0,0,0).addMSecs(SelectionDuration).toString("hh:mm:ss.zzz"));

    ui->TimeBefore->setText(StartPosition>0?QTime(0,0,0,0).addMSecs(StartPosition).toString("hh:mm:ss.zzz"):"-");
    ui->TimeRemaining->setText(Remaining==0?"-":Remaining  >0?QTime(0,0,0,0).addMSecs(Remaining  ).toString("hh:mm:ss.zzz"):"-"+QTime(0,0,0,0).addMSecs(-Remaining  ).toString("hh:mm:ss.zzz"));
    ui->AdjustBefore->setText(Remaining==0?"-":Remaining  >0?QTime(0,0,0,0).addMSecs(Remaining  ).toString("hh:mm:ss.zzz"):"-"+QTime(0,0,0,0).addMSecs(-Remaining  ).toString("hh:mm:ss.zzz"));
    ui->AdjustWith->setText(MissingWith==0?"-":MissingWith>0?QTime(0,0,0,0).addMSecs(MissingWith).toString("hh:mm:ss.zzz"):"-"+QTime(0,0,0,0).addMSecs(-MissingWith).toString("hh:mm:ss.zzz"));

    if (Remaining==0)           ui->OKBefore->setEnabled(false);
    if (Remaining==Transition)  ui->OKWith->setEnabled(false);

    connect(ui->OKBefore,SIGNAL(clicked()),this,SLOT(DoAdjustBefore()));
    connect(ui->OKWith,SIGNAL(clicked()),this,SLOT(DoAdjustWith()));
}

//====================================================================================================================

void DlgAdjustToSound::DoAdjust(int64_t WantedDuration) {
    cDiaporamaShot *Latest=NULL;
    int64_t        NewSelectionDuration=0;
    int64_t        CumuledTransition=0;
    int            i;

    for (i=0;i<ObjectList->count();i++) CumuledTransition+=Diaporama->List[ObjectList->at(i)]->GetTransitDuration();

    for (i=0;i<ObjectList->count();i++) {
        int Num=ObjectList->at(i);
        cDiaporamaObject *CurObject=Diaporama->List[Num];

        if (!CurObject->MusicPause) {
            int64_t CurNewDuration    =0;
            int64_t Transition        =Num>0?Diaporama->List[Num]->GetTransitDuration():0;
            qreal   OldSlideDuration  =CurObject->GetDuration();
            qreal   OldSlideRatio     =qreal(OldSlideDuration)/qreal(SelectionDuration+CumuledTransition);
            qreal   NewSlideDuration  =qreal(SelectionDuration/*+CumuledTransition*/+WantedDuration)*OldSlideRatio;

            qreal   OldTransitionRatio=qreal(Transition)/OldSlideDuration;

            for (int ShotNum=0;ShotNum<CurObject->List.count();ShotNum++) {
                cDiaporamaShot *Shot=CurObject->List[ShotNum];
                int64_t OldShotDuration =Shot->StaticDuration;
                qreal   TransitionPart  =OldTransitionRatio*OldShotDuration;
                qreal   Ratio           =qreal(OldShotDuration-TransitionPart)/qreal(OldSlideDuration-Transition);
                qreal   NewShotDuration =Ratio*NewSlideDuration+TransitionPart;

                CurNewDuration      +=NewShotDuration;
                Shot->StaticDuration=NewShotDuration;
                Latest=Shot;
            }
            NewSelectionDuration+=(CurNewDuration-Transition);
        }
    }

    // Adjust last slide to ensure all wanted duration is used
    NewSelectionDuration-=(SelectionDuration+WantedDuration);
    if (NewSelectionDuration!=0) Latest->StaticDuration-=NewSelectionDuration;

    done(0);
}

//====================================================================================================================

void DlgAdjustToSound::DoAdjustBefore() {
    DoAdjust(Remaining);
    done(0);
}

void DlgAdjustToSound::DoAdjustWith() {
    DoAdjust(MissingWith);
    done(0);
}
