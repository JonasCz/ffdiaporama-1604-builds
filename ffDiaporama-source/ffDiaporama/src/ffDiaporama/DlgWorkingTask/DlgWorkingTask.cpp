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

#include "DlgWorkingTask.h"
#include "ui_DlgWorkingTask.h"

DlgWorkingTask::DlgWorkingTask(QString Title,bool *CancelAction,cApplicationConfig *ApplicationConfig,QWidget *parent):
    QCustomDialog(ApplicationConfig,parent),ui(new Ui::DlgWorkingTask) {

    ui->setupUi(this);
    CancelBt        =ui->CancelBt;
    CancelActionFlag=CancelAction;
    AddValue        =0;
    setWindowTitle(Title);
}

DlgWorkingTask::~DlgWorkingTask() {
    delete ui;
}

//====================================================================================================================

void DlgWorkingTask::DoInitDialog() {
    (*CancelActionFlag)=false;
    connect(&Timer,SIGNAL(timeout()),this,SLOT(s_TimerEvent()));
}

//====================================================================================================================

void DlgWorkingTask::DoRejet() {
    (*CancelActionFlag)=true;
}

//====================================================================================================================

void DlgWorkingTask::DisplayText(QString Text) {
    ui->ActionLabel->setText(Text);
}

//====================================================================================================================

void DlgWorkingTask::DisplayText2(QString Text) {
    TimerText=Text;
    TimerProgress=0;
    Timer.start(250);
}

//====================================================================================================================

void DlgWorkingTask::StopText2() {
    Timer.stop();
}

//====================================================================================================================

void DlgWorkingTask::s_TimerEvent() {
    ui->ActionLabel2->setText(TimerText+QString(" (%1%)").arg(TimerProgress*100,0,'f',1));
}

//====================================================================================================================

void DlgWorkingTask::DisplayProgress(int Value) {
    ui->ProgressBar->setValue(Value);
}

//====================================================================================================================

void DlgWorkingTask::HideProgress() {
    ui->ProgressBar->setVisible(false);
    CancelBt->setVisible(false);
}

//====================================================================================================================

void DlgWorkingTask::SetMaxValue(int Value,int AddValue) {
    MaxValue=Value;
    this->AddValue=AddValue;
    ui->ProgressBar->setMaximum(MaxValue+AddValue);
}
