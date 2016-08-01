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

#ifndef WGT_QVIDEOPLAYER_H
#define WGT_QVIDEOPLAYER_H

// Basic inclusions (common to all files)
#include "engine/_GlobalDefines.h"
#include "engine/_Diaporama.h"
#include "CustomCtrl/QCustomRuler.h"
#include "CustomCtrl/QMovieLabel.h"

#if QT_VERSION >= 0x050000
#include <QtMultimedia/QAudioOutput>
#else
#include <QAudioOutput>
#endif

namespace Ui {
    class wgt_QVideoPlayer;
}

class wgt_QVideoPlayer : public QWidget {
Q_OBJECT
public:
    QTime                   PreviousTimerEvent;
    int                     TimerDelta;
    bool                    *FLAGSTOPITEMSELECTION; // Flag to stop Item Selection process in the timeline
    bool                    InPlayerUpdate;

    bool                    Deinterlace;            // Add a YADIF filter to deinterlace video (on/off)
    cDiaporama              *Diaporama;             // Link to the Diaporama hierarchy when preview
    cApplicationConfig      *ApplicationConfig;

    int                     ActualPosition;         // Current position (in msec)
    QTime                   tDuration;              // Duration of the video

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
    bool                    PlayerPlayMode;         // Is MPlayer currently play mode
    bool                    PlayerPauseMode;        // Is MPlayer currently plause mode
    QTimer                  Timer;
    QDateTime               PreviousTimerTick;
    int                     TimerValue;
    bool                    IsSliderProcess;        // true is slider is currently moving by user
    bool                    PreviousPause;          // Flag to keep pause state before slider process
    QTime                   LastTimeCheck;          // time save for plaing diaporama
    bool                    TimerTick;              // To use timer 1 time for 2 call

    QMutex                  PlayerMutex;
    u_int8_t                *AudioBuf;
    int                     AudioBufSize;
    QAudioOutput            *audio_outputStream;
    QIODevice               *audio_outputDevice;
    int                     AudioPlayed;
    cSoundBlockList         MixedMusic;             // Prepared Sound

    QList<cCompositionObjectContext *> PreparedTransitBrushList;
    QList<cCompositionObjectContext *> PreparedBrushList;

    // Thread controls
    QFutureWatcher<void>    ThreadPrepareVideo;
    QFutureWatcher<void>    ThreadPrepareImage;
    QFutureWatcher<void>    ThreadAssembly;

    explicit wgt_QVideoPlayer(QWidget *parent = 0);
    ~wgt_QVideoPlayer();

    bool    InitDiaporamaPlay(cDiaporama *Diaporama);       // Start player in preview mode
    void    StartThreadAssembly(double PCT,cDiaporamaObjectInfo *Info,int W,int H,bool SoundWanted);

    void    SetStartEndPos(int StartPos,int Duration,int PreviousStartPos,int PrevisousEndPos,int NextStartPos,int NextEndPos);
    void    SeekPlayer(int Value);
    QTime   GetCurrentPos();
    void    SetCurrentPos(QTime Pos);
    QTime   GetActualDuration();
    void    SetActualDuration(int Duration);

    void    SetPlayerToPause();
    void    SetPlayerToPlay();
    void    SwitchPlayerPlayPause();

    void    SetBackgroundColor(QColor Background);
    int     GetButtonBarHeight();

    void    SetEditStartEnd(bool State);
    void    SetAudioFPS();

protected:
    virtual void closeEvent(QCloseEvent *);
    virtual void showEvent(QShowEvent *);

private slots:
    void    s_DoubleClick();
    void    s_RightClickEvent(QMouseEvent *);
    void    s_TimerEvent();
    void    s_VideoPlayerPlayPauseBT();
    void    s_SliderPressed();
    void    s_SliderReleased();
    void    s_SliderMoved(int Value);
    void    s_SaveImage();
    void    s_VideoPlayerVolume();
    void    s_VolumeChanged(int newValue);
    void    s_PositionChangeByUser();
    void    s_StartEndChangeByUser();

private:
    void    EnableWidget(bool State);
    void    PrepareImage(bool SoundWanted,bool AddStartPos,cDiaporamaObjectInfo *Frame,int W,int H);

    Ui::wgt_QVideoPlayer *ui;
    QSlider              *VolumeSlider;
    QLabel               *VolumeLabel;

signals:
    void    DoubleClick();
    void    RightClickEvent(QMouseEvent *);
    void    SaveImageEvent();
    void    StartEndChangeByUser();
    void    VolumeChanged();
};

#endif // WGT_QVIDEOPLAYER_H
