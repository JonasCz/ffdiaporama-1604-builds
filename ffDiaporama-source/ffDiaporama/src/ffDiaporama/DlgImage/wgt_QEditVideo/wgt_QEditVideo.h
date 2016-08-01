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

#ifndef WGT_QEDITVIDEO_H
#define WGT_QEDITVIDEO_H

// Basic inclusions (common to all files)
#include "engine/_GlobalDefines.h"
#include "CustomCtrl/_QCustomDialog.h"
#include "engine/_Diaporama.h"
#include "CustomCtrl/QCustomRuler.h"

#if QT_VERSION >= 0x050000
#include <QtMultimedia/QAudioOutput>
#else
#include <QAudioOutput>
#endif

namespace Ui {
    class wgt_QEditVideo;
}

class wgt_QEditVideo : public QWidget {
Q_OBJECT

public:
    cBrushDefinition        *CurrentBrush;
    QCustomDialog           *ParentDialog;
    bool                    StopMaj,InSliderMoveEvent;

    QTime                   PreviousTimerEvent;
    int                     TimerDelta;

    bool                    Deinterlace;            // Add a YADIF filter to deinterlace video (on/off)
    cVideoFile              *FileInfo;              // Link to the file wrapper object when DlgVideoDialogBox
    cApplicationConfig      *ApplicationConfig;

    int                     ActualPosition;         // Current position (in msec)
    QTime                   tDuration;              // Duration of the video
    double                  WantedFPS;

    cFrameList              FrameList;              // Collection of bufered image
    cSoundBlockList         Music;                  // Sound to play (in direct player mode)

    bool                    IsValide;               // if true then object if fuly initialise
    bool                    IsInit;                 // if true then player was first started
    bool                    ResetPositionWanted;
    QTime                   StartPos;               // Start position
    QTime                   EndPos;                 // End position
    QIcon                   IconPlay;               // Icon : "images/player_play.png"
    QIcon                   IconPause;              // Icon : "images/player_pause.png"
    bool                    DisplayMSec;            // if True, display millisecondes instead of secondes
    bool                    PlayerPlayMode;        // Is MPlayer currently play mode
    bool                    PlayerPauseMode;       // Is MPlayer currently plause mode
    QTimer                  Timer;
    QDateTime               PreviousTimerTick;
    int                     TimerValue;
    bool                    IsSliderProcess;        // true is slider is currently moving by user
    bool                    PreviousPause;          // Flag to keep pause state before slider process
    QTime                   LastTimeCheck;          // time save for plaing diaporama
    bool                    TimerTick;              // To use timer 1 time for 2 call

    // Thread controls
    QMutex                  PlayerMutex;
    QFutureWatcher<void>    ThreadPrepareVideo;
    QFutureWatcher<void>    ThreadAnalyseMusic;

    u_int8_t                *AudioBuf;
    int                     AudioBufSize;
    QAudioOutput            *audio_outputStream;
    QIODevice               *audio_outputDevice;
    int                     AudioPlayed;
    cSoundBlockList         MixedMusic;             // Sound to play

    explicit                wgt_QEditVideo(QWidget *parent = 0);
                            ~wgt_QEditVideo();

    void                    DoInitWidget(QCustomDialog *ParentDialog,cBrushDefinition *CurrentBrush);
    void                    DoInitDialog();
    void                    RefreshControls();
    void                    WinFocus();
    void                    LostFocus();
    bool                    DoAccept();
    void                    DoRejet();

    void                    SetStartEndPos(int StartPos,int Duration,int PreviousStartPos,int PrevisousEndPos,int NextStartPos,int NextEndPos);
    void                    SeekPlayer(int Value);
    QTime                   GetCurrentPos();
    void                    SetCurrentPos(QTime Pos);

    void                    SetPlayerToPause();
    void                    SetPlayerToPlay(bool force);

protected:
    virtual void            closeEvent(QCloseEvent *);
    virtual void            showEvent(QShowEvent *);
    virtual void            resizeEvent(QResizeEvent *);

private slots:
    void                    s_AnalyseSound();
    void                    s_EndSoundAnalyse();
    void                    s_TimerEvent();
    void                    s_VideoPlayerPlayPauseBT();
    void                    s_SliderPressed();
    void                    s_SliderReleased();
    void                    s_SliderMoved(int Value);
    void                    s_PositionChangeByUser();
    void                    s_StartEndChangeByUser();
    void                    s_Event_SaveImageEvent();
    void                    s_DefStartPos();
    void                    s_DefEndPos();
    void                    s_SeekLeft();
    void                    s_SeekRight();
    void                    s_EditStartPos(QTime NewValue);
    void                    s_EditEndPos(QTime NewValue);
    void                    s_MusicReduceFactorChange(int);
    void                    s_Deinterlace(int);

signals:
    void                    DoRefreshImageObject();

private:
    void                    PrepareVideoFrame(cDiaporamaObjectInfo *NewFrame,int Position);

    Ui::wgt_QEditVideo      *ui;
};

#endif // WGT_QEDITVIDEO_H
