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

#include "wgt_QEditVideo.h"
#include "ui_wgt_QEditVideo.h"
#include "DlgImage/DlgImageCorrection.h"

#define ICON_PLAYERPLAY                     ":/img/player_play.png"                 // FileName of play icon
#define ICON_PLAYERPAUSE                    ":/img/player_pause.png"                // FileName of pause icon

#define BUFFERING_NBR_FRAME                 10                                      // Number of frame wanted in the playing buffer
#define BUFFERING_NBR_FRAME_MIN             5
#define BUFFERING_NBR_AUDIO_FRAME           2
#define AUDIOBUFSIZE                        100000

//====================================================================================================================

wgt_QEditVideo::wgt_QEditVideo(QWidget *parent):QWidget(parent),ui(new Ui::wgt_QEditVideo) {
    ui->setupUi(this);
    StopMaj=false;
    InSliderMoveEvent=false;
}

//====================================================================================================================

wgt_QEditVideo::~wgt_QEditVideo() {
    SetPlayerToPause();         // Ensure player is correctly stoped
    if (audio_outputStream->state()==QAudio::SuspendedState) {
        audio_outputStream->reset();
        audio_outputStream->stop();
    }
    if (audio_outputStream->state()!=QAudio::StoppedState) audio_outputStream->stop();
    audio_outputDevice=NULL;
    AudioBufSize=0;
    delete audio_outputStream;
    audio_outputStream=NULL;
    delete ui;
    free(AudioBuf);
}

//====================================================================================================================

void wgt_QEditVideo::DoInitWidget(QCustomDialog *ParentDialog,cBrushDefinition *CurrentBrush) {
    this->ParentDialog=ParentDialog;
    this->CurrentBrush=CurrentBrush;
    ApplicationConfig =ParentDialog->ApplicationConfig;
    ui->CustomRuler->EditStartEnd=true;

    ui->SeekLeftBt->setIcon(QApplication::style()->standardIcon(QStyle::SP_MediaSkipBackward));
    ui->SeekRightBt->setIcon(QApplication::style()->standardIcon(QStyle::SP_MediaSkipForward));

    FileInfo                =(cVideoFile *)CurrentBrush->MediaObject;
    WantedFPS               =ParentDialog->ApplicationConfig->PreviewFPS;
    IsValide                =true;

    IsInit                  = false;
    DisplayMSec             = true;                                 // add msec to display
    IconPause               = QIcon(ICON_PLAYERPLAY);               // QApplication::style()->standardIcon(QStyle::SP_MediaPlay)
    IconPlay                = QIcon(ICON_PLAYERPAUSE);              // QApplication::style()->standardIcon(QStyle::SP_MediaPause)
    PlayerPlayMode          =false;
    PlayerPauseMode         =false;
    IsSliderProcess         = false;
    ActualPosition          = -1;
    tDuration               = QTime(0,0,0,0);
    ResetPositionWanted     = false;
    Deinterlace             = false;

    AudioBuf                = (u_int8_t *)malloc(AUDIOBUFSIZE);
    AudioBufSize            = 0;

    MixedMusic.SetFPS(double(1000)/ApplicationConfig->PreviewFPS,2,ApplicationConfig->PreviewSamplingRate,AV_SAMPLE_FMT_S16);
    Music.SetFPS(MixedMusic.WantedDuration,MixedMusic.Channels,MixedMusic.SamplingRate,MixedMusic.SampleFormat);

    // Set up the format
    QAudioFormat format;
    format.setCodec("audio/pcm");
    format.setSampleRate(MixedMusic.SamplingRate); // Usually this is specified through an UI option
    format.setChannelCount(MixedMusic.Channels);
    format.setSampleSize(16);
    format.setByteOrder(QAudioFormat::LittleEndian);
    format.setSampleType(QAudioFormat::SignedInt);

    // Create audio output stream, set up signals
    audio_outputStream = new QAudioOutput(format,this);

    ui->VideoPlayerPlayPauseBT->setIcon(IconPause);

    ui->MovieFrame->setText("");
    ui->MovieFrame->setAttribute(Qt::WA_OpaquePaintEvent);

    if (FileInfo->EndPos>=FileInfo->GetRealDuration()) FileInfo->EndPos=FileInfo->GetRealDuration().addMSecs(-1);

    // Init embeded widgets
    for (int Factor=150;Factor>=0;Factor-=10) ui->VolumeReductionFactorCB->addItem(QString("%1%").arg(Factor));
    ui->VolumeReductionFactorCB->addItem(QApplication::translate("wgt_QEditVideo","Auto"));

    ui->StartPosEd->setCurrentSection(QDateTimeEdit::MSecSection);  ui->StartPosEd->setCurrentSectionIndex(3);  ui->StartPosEd->MsecStep=FileInfo->GetFPSDuration();
    ui->EndPosEd->setCurrentSection(QDateTimeEdit::MSecSection);    ui->EndPosEd->setCurrentSectionIndex(3);    ui->EndPosEd->MsecStep  =FileInfo->GetFPSDuration();
    ui->EndPosEd->setMaximumTime(FileInfo->GetRealDuration().addMSecs(-1));
    ui->Duration->setText(FileInfo->GetRealDuration().toString("hh:mm:ss.zzz"));

    ui->CustomRuler->EditStartEnd =true;
    ui->CustomRuler->setSingleStep(25);
}

//====================================================================================================================

void wgt_QEditVideo::DoInitDialog() {

    connect(&Timer,SIGNAL(timeout()),this,SLOT(s_TimerEvent()));

    connect(ui->CustomRuler,SIGNAL(sliderPressed()),this,SLOT(s_SliderPressed()));
    connect(ui->CustomRuler,SIGNAL(sliderReleased()),this,SLOT(s_SliderReleased()));
    connect(ui->CustomRuler,SIGNAL(valueChanged(int)),this,SLOT(s_SliderMoved(int)));
    connect(ui->CustomRuler,SIGNAL(PositionChangeByUser()),this,SLOT(s_PositionChangeByUser()));
    connect(ui->CustomRuler,SIGNAL(StartEndChangeByUser()),this,SLOT(s_StartEndChangeByUser()));

    connect(ui->VideoPlayerPlayPauseBT,SIGNAL(clicked()),this,SLOT(s_VideoPlayerPlayPauseBT()));
    connect(ui->VideoPlayerSaveImageBT,SIGNAL(clicked()),this,SLOT(s_Event_SaveImageEvent()));
    connect(ui->VolumeReductionFactorCB,SIGNAL(currentIndexChanged(int)),this,SLOT(s_MusicReduceFactorChange(int)));
    connect(ui->DefStartPosBT,SIGNAL(clicked()),this,SLOT(s_DefStartPos()));
    connect(ui->DefEndPosBT,SIGNAL(clicked()),this,SLOT(s_DefEndPos()));
    connect(ui->SeekLeftBt,SIGNAL(clicked()),this,SLOT(s_SeekLeft()));
    connect(ui->SeekRightBt,SIGNAL(clicked()),this,SLOT(s_SeekRight()));
    connect(ui->DeinterlaceBt,SIGNAL(stateChanged(int)),this,SLOT(s_Deinterlace(int)));
    connect(ui->StartPosEd,SIGNAL(timeChanged(QTime)),this,SLOT(s_EditStartPos(QTime)));
    connect(ui->EndPosEd,SIGNAL(timeChanged(QTime)),this,SLOT(s_EditEndPos(QTime)));

    // Disable all during sound analyse
    ui->CustomRuler->setEnabled(false);
    ui->DefStartPosBT->setEnabled(false);
    ui->DefEndPosBT->setEnabled(false);
    ui->SeekLeftBt->setEnabled(false);
    ui->SeekRightBt->setEnabled(false);
    ui->StartPosEd->setEnabled(false);
    ui->EndPosEd->setEnabled(false);
    ui->VideoPlayerPlayPauseBT->setEnabled(false);
    ui->DeinterlaceBt->setEnabled(false);
    ui->VolumeReductionFactorCB->setEnabled(false);
    ui->VideoPlayerSaveImageBT->setEnabled(false);

    SetCurrentPos(FileInfo->StartPos);
    RefreshControls();

    if (FileInfo->LibavStartTime>0) ui->VideoStartLabel->setText(QApplication::translate("wgt_QEditVideo","Video stream start position is %1").arg(QTime(0,0,0,0).addMSecs(FileInfo->LibavStartTime/1000).toString("hh:mm:ss.zzz")));
        else ui->VideoStartLabel->setText("");

    audio_outputStream->setBufferSize(MixedMusic.NbrPacketForFPS*MixedMusic.SoundPacketSize*BUFFERING_NBR_AUDIO_FRAME);
    audio_outputDevice=audio_outputStream->start();
    AudioPlayed=0;
    #if QT_VERSION >= 0x050000
    audio_outputStream->setVolume(ApplicationConfig->PreviewSoundVolume);
    #endif
    audio_outputStream->suspend();
}

//====================================================================================================================

bool wgt_QEditVideo::DoAccept() {
    if (ThreadAnalyseMusic.isRunning()) {
        ui->CustomRuler->IsAnalysed=true;
        ThreadAnalyseMusic.waitForFinished();
    }
    SetPlayerToPause();
    return true;
}

void wgt_QEditVideo::DoRejet() {
    if (ThreadAnalyseMusic.isRunning()) {
        ui->CustomRuler->IsAnalysed=true;
        ThreadAnalyseMusic.waitForFinished();
    }
    SetPlayerToPause();
}

//============================================================================================

void wgt_QEditVideo::closeEvent(QCloseEvent *) {
    if (ThreadAnalyseMusic.isRunning()) {
        ui->CustomRuler->IsAnalysed=true;
        ThreadAnalyseMusic.waitForFinished();
    }
    SetPlayerToPause();
}

void wgt_QEditVideo::resizeEvent(QResizeEvent *ev) {
    QWidget::resizeEvent(ev);
    if (IsInit && ui->CustomRuler->IsAnalysed) {
        ui->CustomRuler->PrepareSoundWave();
        ui->CustomRuler->repaint();
    }
}

void wgt_QEditVideo::showEvent(QShowEvent *) {
    if (!IsInit) {
        PlayerPlayMode =true;
        PlayerPauseMode=true;
        IsInit         =true;
        // Start sound analyse
        QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
        connect(&ThreadAnalyseMusic,SIGNAL(finished()),this,SLOT(s_EndSoundAnalyse()));
        ThreadAnalyseMusic.setFuture(QtConcurrent::run(this,&wgt_QEditVideo::s_AnalyseSound));
        Timer.start(500);   // to update display on windows
    }
}

// Do sound analyse
void wgt_QEditVideo::s_AnalyseSound() {
    ui->CustomRuler->AnalyseSound(FileInfo);
}

// End of sound analyse
void wgt_QEditVideo::s_EndSoundAnalyse() {
    ui->CustomRuler->setEnabled(true);
    ui->DefStartPosBT->setEnabled(true);
    ui->DefEndPosBT->setEnabled(true);
    ui->SeekLeftBt->setEnabled(true);
    ui->SeekRightBt->setEnabled(true);
    ui->StartPosEd->setEnabled(true);
    ui->EndPosEd->setEnabled(true);
    ui->VideoPlayerPlayPauseBT->setEnabled(true);
    ui->DeinterlaceBt->setEnabled(true);
    ui->VolumeReductionFactorCB->setEnabled(true);
    ui->VideoPlayerSaveImageBT->setEnabled(true);
    Timer.stop();
    RefreshControls();
    // Activate player
    SetPlayerToPlay(true);
    QApplication::restoreOverrideCursor();
}

//====================================================================================================================

void wgt_QEditVideo::WinFocus() {
    SetPlayerToPlay(false);
}

void wgt_QEditVideo::LostFocus() {
    SetPlayerToPause();
}

//====================================================================================================================

void wgt_QEditVideo::RefreshControls() {
    if (StopMaj) return;
    StopMaj=true;
    ui->CustomRuler->setMaximum(QTime(0,0,0,0).msecsTo(FileInfo->GetRealDuration())-1);
    ui->CustomRuler->StartPos     =QTime(0,0,0,0).msecsTo(FileInfo->StartPos);
    ui->CustomRuler->EndPos       =QTime(0,0,0,0).msecsTo(FileInfo->EndPos);
    ui->CustomRuler->TotalDuration=QTime(0,0,0,0).msecsTo(FileInfo->GetRealDuration());
    qint64 iDuration=QTime(0,0,0,0).msecsTo(FileInfo->GetRealDuration());
    int     TimeMSec    =(iDuration %1000);
    int     TimeSec     =int(iDuration/1000);
    int     TimeHour    =TimeSec/(60*60);
    int     TimeMinute  =(TimeSec%(60*60))/60;
    tDuration.setHMS(TimeHour,TimeMinute,TimeSec%60,TimeMSec);
    QTime Duration=QTime(0,0,0,0).addMSecs(FileInfo->StartPos.msecsTo(FileInfo->EndPos));
    ui->DeinterlaceBt->setChecked(CurrentBrush->Deinterlace);
    ui->ActualDuration->setText(Duration.toString("hh:mm:ss.zzz"));
    ui->StartPosEd->setMaximumTime(FileInfo->EndPos);    ui->StartPosEd->setTime(FileInfo->StartPos);
    ui->EndPosEd->setMinimumTime(FileInfo->StartPos);    ui->EndPosEd->setTime(FileInfo->EndPos);
    if (CurrentBrush->SoundVolume==-1) ui->VolumeReductionFactorCB->setCurrentIndex(ui->VolumeReductionFactorCB->count()-1);
        else ui->VolumeReductionFactorCB->setCurrentIndex(ui->VolumeReductionFactorCB->findText(QString("%1%").arg(int(CurrentBrush->SoundVolume*100))));
    SetStartEndPos(QTime(0,0,0,0).msecsTo(FileInfo->StartPos),
                                    QTime(0,0,0,0).msecsTo(FileInfo->EndPos)-QTime(0,0,0,0).msecsTo(FileInfo->StartPos),
                                    -1,0,-1,0);
    Deinterlace=CurrentBrush->Deinterlace;
    StopMaj=false;
}

//====================================================================================================================

void wgt_QEditVideo::s_Deinterlace(int) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_VIDEOPART,ui->VolumeReductionFactorCB,true);
    CurrentBrush->Deinterlace=ui->DeinterlaceBt->isChecked();
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditVideo::s_Event_SaveImageEvent() {
    SetPlayerToPause();
    QString OutputFileName=ParentDialog->ApplicationConfig->SettingsTable->GetTextValue(QString("%1_path").arg(BrowserTypeDef[BROWSER_TYPE_CAPTUREIMAGE].BROWSERString),DefaultCaptureImage);
    QString Filter="PNG (*.png)";
    if (!OutputFileName.endsWith(QDir::separator())) OutputFileName=OutputFileName+QDir::separator();
    OutputFileName=OutputFileName+QApplication::translate("MainWindow","Capture image");
    OutputFileName=QFileDialog::getSaveFileName(this,QApplication::translate("MainWindow","Select destination file"),OutputFileName,"PNG (*.png);;JPG (*.jpg)",&Filter);
    if (OutputFileName!="") {
        if (ParentDialog->ApplicationConfig->RememberLastDirectories) ParentDialog->ApplicationConfig->SettingsTable->SetTextValue(QString("%1_path").arg(BrowserTypeDef[BROWSER_TYPE_CAPTUREIMAGE].BROWSERString),QFileInfo(OutputFileName).absolutePath());     // Keep folder for next use
        if ((Filter.toLower().indexOf("png")!=-1)&&(!OutputFileName.endsWith(".png"))) OutputFileName=OutputFileName+".png";
        if ((Filter.toLower().indexOf("jpg")!=-1)&&(!OutputFileName.endsWith(".jpg"))) OutputFileName=OutputFileName+".jpg";
        QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
        QImage *Image=FileInfo->ImageAt(false,ActualPosition,NULL,CurrentBrush->Deinterlace,1,false,true);
        Image->save(OutputFileName,0,100);
        QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
        delete Image;
    }
}

//====================================================================================================================

void wgt_QEditVideo::s_MusicReduceFactorChange(int) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_VIDEOPART,ui->VolumeReductionFactorCB,true);
    QString Volume=ui->VolumeReductionFactorCB->currentText();
    if (Volume!="") Volume=Volume.left(Volume.length()-1);  // Remove %
    bool ok=true;
    double dVolume=Volume.toInt(&ok);
    if (!ok) dVolume=-1; else dVolume=double(Volume.toInt())/100;
    CurrentBrush->SoundVolume=dVolume;
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditVideo::s_StartEndChangeByUser() {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_VIDEOPART,ui->StartPosEd,false);
    StartPos=QTime(0,0,0,0).addMSecs(ui->CustomRuler->StartPos);
    EndPos=QTime(0,0,0,0).addMSecs(ui->CustomRuler->EndPos);
    FileInfo->StartPos=StartPos;
    FileInfo->EndPos  =EndPos;
    ui->StartPosEd->setTime(FileInfo->StartPos);
    ui->EndPosEd->setTime(FileInfo->EndPos);
}

//====================================================================================================================

void wgt_QEditVideo::s_DefStartPos() {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_VIDEOPART,ui->StartPosEd,true);
    FileInfo->StartPos=GetCurrentPos();
    ui->CustomRuler->StartPos=QTime(0,0,0,0).msecsTo(FileInfo->StartPos);
    RefreshControls();
    emit DoRefreshImageObject();
}

//====================================================================================================================

void wgt_QEditVideo::s_EditStartPos(QTime NewValue) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_VIDEOPART,ui->StartPosEd,false);
    FileInfo->StartPos=NewValue;
    SetCurrentPos(FileInfo->StartPos);
    RefreshControls();
    emit DoRefreshImageObject();
}

//====================================================================================================================

void wgt_QEditVideo::s_DefEndPos() {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_VIDEOPART,ui->EndPosEd,true);
    FileInfo->EndPos=GetCurrentPos();
    if (FileInfo->EndPos>=FileInfo->GetRealDuration()) FileInfo->EndPos=FileInfo->GetRealDuration().addMSecs(-1);
    ui->CustomRuler->EndPos=QTime(0,0,0,0).msecsTo(FileInfo->EndPos);
    RefreshControls();
    emit DoRefreshImageObject();
}

//====================================================================================================================

void wgt_QEditVideo::s_EditEndPos(QTime NewValue) {
    if (StopMaj) return;
    ((DlgImageCorrection *)ParentDialog)->AppendPartialUndo(DlgImageCorrection::UNDOACTION_VIDEOPART,ui->EndPosEd,false);
    FileInfo->EndPos=NewValue;
    ui->EndPosEd->setTime(FileInfo->EndPos);
    SetCurrentPos(FileInfo->EndPos);
    RefreshControls();
}

//====================================================================================================================

void wgt_QEditVideo::s_SeekLeft() {
    SeekPlayer(QTime(0,0,0,0).msecsTo(FileInfo->StartPos));
    SetPlayerToPause();
}

//====================================================================================================================

void wgt_QEditVideo::s_SeekRight() {
    SeekPlayer(QTime(0,0,0,0).msecsTo(FileInfo->EndPos));
    SetPlayerToPause();
}

//============================================================================================
// Pause -> play
//============================================================================================

void wgt_QEditVideo::SetPlayerToPlay(bool force) {
    if ((!force)&&(ThreadAnalyseMusic.isRunning())) return;
    if (!(PlayerPlayMode && PlayerPauseMode)) return;
    PlayerPlayMode  = true;
    PlayerPauseMode = false;
    ui->VideoPlayerPlayPauseBT->setIcon(IconPlay);

    // Start timer
    PlayerMutex.lock();
    TimerTick           =true;
    PreviousTimerEvent  =QTime();
    TimerDelta          =0;
    switch (audio_outputStream->state()) {
        case QAudio::SuspendedState: audio_outputStream->resume();
                                     break;
        case QAudio::StoppedState:   audio_outputDevice=audio_outputStream->start();
                                     AudioPlayed=0;
                                     #if QT_VERSION >= 0x050000
                                     audio_outputStream->setVolume(ApplicationConfig->PreviewSoundVolume);
                                     #endif
                                     break;
        case QAudio::ActiveState:    qDebug()<<"ActiveState";                           break;
        case QAudio::IdleState:      qDebug()<<"IdleState";                             break;
    }
    Timer.start(int(double(1000)/WantedFPS)/2);   // Start Timer
    PlayerMutex.unlock();
}

//============================================================================================
// Play -> pause
//============================================================================================

void wgt_QEditVideo::SetPlayerToPause() {
    if (!(PlayerPlayMode && !PlayerPauseMode)) return;
    PlayerMutex.lock();
    Timer.stop();                                   // Stop Timer
    if (ThreadPrepareVideo.isRunning()) ThreadPrepareVideo.waitForFinished();
    if (audio_outputStream->state()!=QAudio::StoppedState) {
        audio_outputStream->stop();
        audio_outputStream->reset();
        AudioBufSize=0;
    }
    MixedMusic.ClearList();                         // Free sound buffers
    Music.ClearList();                              // Free sound buffers
    FrameList.ClearList();                          // Free FrameList
    PlayerPlayMode  = true;
    PlayerPauseMode = true;
    ui->VideoPlayerPlayPauseBT->setIcon(IconPause);
    ui->BufferState->setValue(0);
    PlayerMutex.unlock();
}

//============================================================================================
// Click on the play/pause button
//============================================================================================

void wgt_QEditVideo::s_VideoPlayerPlayPauseBT() {
    if ((!PlayerPlayMode)||((PlayerPlayMode && PlayerPauseMode)))    SetPlayerToPlay(false); // Stop/Pause -> play
        else if (PlayerPlayMode && !PlayerPauseMode)                 SetPlayerToPause();     // Pause -> play
}

//============================================================================================
// Click on the handle of the slider
//============================================================================================

void wgt_QEditVideo::s_SliderPressed() {
    PreviousPause    = PlayerPauseMode;    // Save pause state
    IsSliderProcess  = true;
    SetPlayerToPause();
}

//============================================================================================
// En slider process
//============================================================================================

void wgt_QEditVideo::s_SliderReleased() {
    IsSliderProcess  = false;
    s_SliderMoved(ActualPosition);
    // Restore saved pause state
    if (!PreviousPause) SetPlayerToPlay(false);
}

//============================================================================================
// Slider is moving by user
// Slider is moving by timer
// Slider is moving by seek function
//============================================================================================

void wgt_QEditVideo::s_SliderMoved(int Value) {
    if (ResetPositionWanted) SetPlayerToPause();
    if (!ui->CustomRuler->IsAnalysed) return;

    if (InSliderMoveEvent) return;
    InSliderMoveEvent=true;

    // Update display in controls
    ui->CustomRuler->setValue(Value);
    ActualPosition=Value;
    ui->Position->setText(GetCurrentPos().toString(DisplayMSec?"hh:mm:ss.zzz":"hh:mm:ss"));
    ui->Duration->setText(tDuration.toString(DisplayMSec?"hh:mm:ss.zzz":"hh:mm:ss"));

    //***********************************************************************
    // If playing
    //***********************************************************************
    if (PlayerPlayMode && !PlayerPauseMode) {
        if (ActualPosition>=QTime(0,0,0,0).msecsTo(tDuration)) {
            SetPlayerToPause();    // Stop if it's the end
        } else if (FrameList.List.count()>1) {                        // Process
            // Retrieve frame information
            cDiaporamaObjectInfo *Frame=(cDiaporamaObjectInfo *)FrameList.DetachFirstFrame();

            // Display frame
            if (!Frame->RenderedImage.isNull()) ui->MovieFrame->SetImage(Frame->RenderedImage.scaledToHeight(ui->MovieFrame->height()));

            // Free frame
            delete Frame;
        }
    //***********************************************************************
    // If moving by user
    //***********************************************************************
    } else {
        QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
        QImage *VideoImage=FileInfo->ImageAt(true,ActualPosition,NULL,Deinterlace,1,false,false);
        if (VideoImage) {
            // Display frame
            ui->MovieFrame->SetImage(VideoImage->scaledToHeight(ui->MovieFrame->height()));
            delete VideoImage;
        }
        QApplication::restoreOverrideCursor();
    }
    InSliderMoveEvent=false;
}

//============================================================================================
// Timer event
//============================================================================================

void wgt_QEditVideo::s_TimerEvent() {
    // on windows, repaint can't be send by thread, so use a timer for that
    if (!ui->CustomRuler->IsAnalysed) {
        ui->CustomRuler->repaint();
        return;
    }
    if (IsSliderProcess)                            return;     // No re-entrance
    if (!(PlayerPlayMode && !PlayerPauseMode))      return;     // Only if play mode

    TimerTick=!TimerTick;

    #ifdef Q_OS_WIN
    // Trylock is always true on Windows instead of unix/linux system
    if (TimerTick) {
    #else
    if (!PlayerMutex.tryLock()) { if (!TimerTick) return; else {
    #endif
        /*
        // specific case for windows because never a timer event can happens if a previous timer event was not ended
        // so next trylock is always true
        int Elapsed=0,Wanted=int(double(1000)/WantedFPS);
        if (!PreviousTimerEvent.isValid()) PreviousTimerEvent.start(); else Elapsed=PreviousTimerEvent.restart();
        if (Elapsed>Wanted) {
            TimerDelta+=Elapsed-Wanted;
            if (TimerDelta>=Wanted) {
                ToLog(LOGMSG_DEBUGTRACE,"FPS preview is too high: One image lost");
                if (FrameList.List.count()>0) {
                    delete (cDiaporamaObjectInfo *)FrameList.DetachFirstFrame(); // Remove first image if we loose one tick
                } else {
                    // Increase next position to one frame
                    ActualPosition+=Wanted;
                }
                TimerDelta-=Wanted;
            }
        }
        */
    }
    #ifdef Q_OS_WIN
    PlayerMutex.lock();
    #else
    return;}
    #endif
    if (ThreadPrepareVideo.isRunning()) ThreadPrepareVideo.waitForFinished();

    int64_t LastPosition=0,NextPosition=0;

    if (ResetPositionWanted) {
        Mutex.lock();
        MixedMusic.ClearList();                         // Free sound buffers
        Music.ClearList();                              // Free sound buffers
        FrameList.ClearList();                          // Free FrameList
        ResetPositionWanted=false;
        Mutex.unlock();
    }

    // If no image in the list then create the first
    if (FrameList.List.count()==0) {
        cDiaporamaObjectInfo *NewFrame=new cDiaporamaObjectInfo(NULL,ActualPosition,NULL,double(1000)/WantedFPS,true);
        NewFrame->CurrentObject_StartTime   =0;
        PrepareVideoFrame(NewFrame,NewFrame->CurrentObject_InObjectTime);

        if (audio_outputStream->state()==QAudio::IdleState) {
            int len=audio_outputStream->bytesFree();
            if (len==audio_outputStream->bufferSize()) {
                memset(AudioBuf,0,AUDIOBUFSIZE);
                AudioBufSize=len-MixedMusic.NbrPacketForFPS*MixedMusic.SoundPacketSize;
            }
        }
    }

    cDiaporamaObjectInfo *PreviousFrame=(cDiaporamaObjectInfo *)FrameList.GetLastFrame();
    LastPosition=PreviousFrame->CurrentObject_InObjectTime;
    NextPosition=LastPosition+int(double(1000)/WantedFPS);

    // Add image to the list if it's not full
    if ((FrameList.List.count()<BUFFERING_NBR_FRAME)&&(!ThreadPrepareVideo.isRunning())) {
        cDiaporamaObjectInfo *NewFrame=new cDiaporamaObjectInfo(PreviousFrame,NextPosition,NULL,int(double(1000)/WantedFPS),true);
        NewFrame->CurrentObject_StartTime   =0;
        ThreadPrepareVideo.setFuture(QtConcurrent::run(this,&wgt_QEditVideo::PrepareVideoFrame,NewFrame,NewFrame->CurrentObject_InObjectTime));
    }

    PlayerMutex.unlock();

    // Audio
    if ((audio_outputStream->state()==QAudio::ActiveState)||(audio_outputStream->state()==QAudio::IdleState)) {
        int len=audio_outputStream->bytesFree();
        if (len>0) {
            Mutex.lock();
            while ((AudioBufSize<len)&&(MixedMusic.ListCount()>0)) {
                int16_t *Packet=MixedMusic.DetachFirstPacket(true);
                if (Packet!=NULL) {
                    memcpy(AudioBuf+AudioBufSize,Packet,MixedMusic.SoundPacketSize);
                    AudioBufSize+=MixedMusic.SoundPacketSize;
                } else {
                    memset(AudioBuf+AudioBufSize,0,MixedMusic.SoundPacketSize);
                    AudioBufSize+=MixedMusic.SoundPacketSize;
                }
            }
            if ((len)&&(AudioBufSize==0)&&(AudioPlayed==0)) {
                // Remove 1 frame
                delete (cDiaporamaObjectInfo *)FrameList.DetachFirstFrame();
                Mutex.unlock();
            } else {
                if (len>AudioBufSize) len=AudioBufSize;
                if (len) {
                    int RealLen=audio_outputDevice->write((char *)AudioBuf,len);
                    if (RealLen<=AudioBufSize) {
                        memcpy(AudioBuf,AudioBuf+RealLen,AudioBufSize-RealLen);
                        AudioBufSize-=RealLen;
                    }
                    AudioPlayed+=RealLen;
                }
                Mutex.unlock();

                // Preview is updated is sound played correspond to 1 FPS
                if (AudioPlayed>=MixedMusic.NbrPacketForFPS*MixedMusic.SoundPacketSize) {
                    s_SliderMoved(((cDiaporamaObjectInfo *)FrameList.GetFirstFrame())->CurrentObject_StartTime+((cDiaporamaObjectInfo *)FrameList.GetFirstFrame())->CurrentObject_InObjectTime);
                    AudioPlayed-=MixedMusic.NbrPacketForFPS*MixedMusic.SoundPacketSize;
                }
            }
        }
    }

    ui->BufferState->setValue(FrameList.List.count());
    if (FrameList.List.count()<2)
        ui->BufferState->setStyleSheet("QProgressBar:horizontal {\nborder: 0px;\nborder-radius: 0px;\nbackground: black;\npadding-top: 0px;\npadding-bottom: 0px;\npadding-left: 0px;\npadding-right: 0px;\n}\nQProgressBar::chunk:horizontal {\nbackground: red;\n}");
    else if (FrameList.List.count()<4)
        ui->BufferState->setStyleSheet("QProgressBar:horizontal {\nborder: 0px;\nborder-radius: 0px;\nbackground: black;\npadding-top: 0px;\npadding-bottom: 0px;\npadding-left: 0px;\npadding-right: 0px;\n}\nQProgressBar::chunk:horizontal {\nbackground: yellow;\n}");
    else if (FrameList.List.count()<=BUFFERING_NBR_FRAME)
        ui->BufferState->setStyleSheet("QProgressBar:horizontal {\nborder: 0px;\nborder-radius: 0px;\nbackground: black;\npadding-top: 0px;\npadding-bottom: 0px;\npadding-left: 0px;\npadding-right: 0px;\n}\nQProgressBar::chunk:horizontal {\nbackground: green;\n}");
}

//============================================================================================
// Function use directly or with thread to prepare an image number Column at given position
//============================================================================================

void wgt_QEditVideo::PrepareVideoFrame(cDiaporamaObjectInfo *NewFrame,int Position) {
    QImage *Temp=FileInfo->ImageAt(true,Position,&Music,Deinterlace,1,false,true);
    if (Temp) {
        NewFrame->RenderedImage=QImage(Temp->scaledToHeight(ui->MovieFrame->height()));
        delete Temp;
    }
    for (int j=0;j<Music.NbrPacketForFPS;j++) MixedMusic.AppendPacket(Music.CurrentPosition,Music.DetachFirstPacket());
    if (!NewFrame->RenderedImage.isNull()) FrameList.AppendFrame(NewFrame);
        else delete NewFrame;
}
//============================================================================================
// Define zone selection on the ruller
//============================================================================================

void wgt_QEditVideo::SetStartEndPos(int StartPos,int Duration,int PreviousStartPos,int PrevisousDuration,int NextStartPos,int NextDuration) {
    ui->CustomRuler->StartPos          =StartPos;
    ui->CustomRuler->EndPos            =StartPos+Duration;
    ui->CustomRuler->PreviousStartPos  =PreviousStartPos;
    ui->CustomRuler->PrevisousEndPos   =PreviousStartPos+PrevisousDuration;
    ui->CustomRuler->NextStartPos      =NextStartPos;
    ui->CustomRuler->NextEndPos        =NextStartPos+NextDuration;
    ui->CustomRuler->repaint();
}

//============================================================================================
// Seek slider public function
//============================================================================================

void wgt_QEditVideo::SeekPlayer(int Value) {
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    ActualPosition=-1;
    s_SliderMoved(Value);
    QApplication::restoreOverrideCursor();
}

//============================================================================================
// return current position in QTime format
//============================================================================================

QTime wgt_QEditVideo::GetCurrentPos() {
    if (ActualPosition!=-1) {
        int     TimeMSec    =ActualPosition-(ActualPosition/1000)*1000;
        int     TimeSec     =int(ActualPosition/1000);
        int     TimeHour    =TimeSec/(60*60);
        int     TimeMinute  =(TimeSec%(60*60))/60;
        QTime   tPosition;
        tPosition.setHMS(TimeHour,TimeMinute,TimeSec%60,TimeMSec);
        return tPosition;
    } else return QTime(0,0,0,0);
}

//============================================================================================
// Set current position in QTime format
//============================================================================================

void wgt_QEditVideo::SetCurrentPos(QTime Pos) {
    SeekPlayer(QTime(0,0,0,0).msecsTo(Pos));
}


//============================================================================================

void wgt_QEditVideo::s_PositionChangeByUser() {
    ResetPositionWanted=true;
}
