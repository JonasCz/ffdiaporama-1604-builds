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

#ifndef DLGEDITMUSIC_H
#define DLGEDITMUSIC_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"
#include "engine/_Diaporama.h"
#include "CustomCtrl/QCustomRuler.h"

#if QT_VERSION >= 0x050000
#include <QtMultimedia/QAudioOutput>
#else
#include <QAudioOutput>
#endif

namespace Ui {
    class DlgEditMusic;
}

class DlgEditMusic : public QCustomDialog {
Q_OBJECT
public:
    cMusicObject            *MusicObject;
    cSoundBlockList         Music;                  // Sound to play (in direct player mode)
    int                     ActualPosition;         // Current position (in msec)

    QTime                   PreviousTimerEvent;
    int                     TimerDelta;
    bool                    StopMaj,InSliderMoveEvent;

    bool                    IsInit;                 // if true then player was first started
    bool                    ResetPositionWanted;
    bool                    PlayerPlayMode;        // Is MPlayer currently play mode
    bool                    PlayerPauseMode;       // Is MPlayer currently plause mode
    QTimer                  Timer;
    QDateTime               PreviousTimerTick;
    bool                    IsSliderProcess;        // true is slider is currently moving by user
    bool                    PreviousPause;          // Flag to keep pause state before slider process
    bool                    TimerTick;              // To use timer 1 time for 2 call

    // Thread controls
    QMutex                  PlayerMutex;
    cFrameList              FrameList;              // Collection of bufered frame
    QFutureWatcher<void>    ThreadPrepareMusic;
    QFutureWatcher<void>    ThreadAnalyseMusic;

    u_int8_t                *AudioBuf;
    int                     AudioBufSize;
    QAudioOutput            *audio_outputStream;
    QIODevice               *audio_outputDevice;
    cSoundBlockList         MixedMusic;             // Sound to play

    explicit                DlgEditMusic(cMusicObject *MusicObject,cApplicationConfig *ApplicationConfig,QWidget *parent=0);
                            ~DlgEditMusic();

    // function to be overloaded
    virtual void            DoInitDialog();                             // Initialise dialog
    virtual bool            DoAccept()      { return true; }            // Call when user click on Ok button
    virtual void            DoRejet()       {}                          // Call when user click on Cancel button
    virtual void            PrepareGlobalUndo();                        // Initiale Undo
    virtual void            DoGlobalUndo();                             // Apply Undo : call when user click on Cancel button

    void                    WinFocus();
    void                    LostFocus();
    void                    RefreshControls();

    void                    SetPlayerToPause();
    void                    SetPlayerToPlay();
    void                    SetEditStartEnd(bool State);
    void                    SetCurrentPos(QTime Pos);
    QTime                   GetCurrentPos();
    void                    SeekPlayer(int Value);

protected:
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
    void                    s_DefStartPos();
    void                    s_DefEndPos();
    void                    s_SeekLeft();
    void                    s_SeekRight();
    void                    s_EditStartPos(QTime NewValue);
    void                    s_EditEndPos(QTime NewValue);

private:
    void                    PrepareSoundFrame(cDiaporamaObjectInfo *NewFrame,int Position);

    Ui::DlgEditMusic        *ui;
};

#endif // DLGEDITMUSIC_H
