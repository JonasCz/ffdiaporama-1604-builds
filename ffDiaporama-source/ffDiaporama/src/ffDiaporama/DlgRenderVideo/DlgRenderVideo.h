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

#ifndef DLGRENDERVIDEO_H
#define DLGRENDERVIDEO_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"
#include "engine/_EncodeVideo.h"

namespace Ui {
    class DlgRenderVideo;
}

class DlgRenderVideo : public QCustomDialog {
Q_OBJECT
public:
    cEncodeVideo            Encoder;
    QTimer                  Timer;                          // Display progress information
    int                     Column,ColumnStart,Position;    // Display progress information

    cDiaporama              *Diaporama;
    int                     ExportMode;                     // Export mode (smartphone, advanced, etc...)
    bool                    StopSpinboxRecursion;
    int                     Extend;                         // amout of padding (top and bottom) for cinema mode with DVD
    int                     VideoCodecIndex;                // Index of video codec
    int                     AudioCodecIndex;                // Index of audio codec

    bool                    IsDestFileOpen;                 // true if encoding is started

    QString                 OutputFileName;                 // filename with path for the last rendering file
    int                     OutputFileFormat;               // Container format
    QString                 VideoCodec;                     // Last video codec used
    double                  VideoFrameRate;                 // Last video frame rate used
    int                     VideoBitRate;                   // Last video bit rate used
    QString                 AudioCodec;                     // Last audio codec used
    int                     AudioFrequency;                 // Last audio frequency used
    int                     AudioChannels;
    int                     AudioBitRate;                   // Last audio bit rate used
    int                     ImageSize;                      // Last image size use for rendering
    int                     Standard;                       // Last standard use for rendering

    QString                 Language;

    int                     W,H;
    bool                    VBR;

    QFutureWatcher<void>    ThreadEncode;
    bool                    Continue;
    QTimer                  DisplayTimer;
    int                     PrevAdjustedDuration;

    explicit DlgRenderVideo(cDiaporama &Diaporama,int ExportMode,cApplicationConfig *ApplicationConfig,QWidget *parent=0);
    ~DlgRenderVideo();

    // function to be overloaded
    virtual void    DoInitDialog();                             // Initialise dialog
    virtual bool    DoAccept()          {return true;}          // Call when user click on Ok button
    virtual void    DoRejet()           {/*Nothing to do*/}     // Call when user click on Cancel button
    virtual void    PrepareGlobalUndo() {/*Nothing to do*/}     // Initiale Undo
    virtual void    DoGlobalUndo()      {/*Nothing to do*/}     // Apply Undo : call when user click on Cancel button


protected:
    virtual void    reject();

private slots:
    void            StartEncode();                                 // Call when user click on Ok button
    void            DoThreadEncode();
    void            EndThreadEncode();
    void            InitDisplay();
    void            OnTimer();

    void            ProjectProperties();
    void            InitImageSizeCombo(int);
    void            SelectDestinationFile();
    void            AdjustDestinationFile();
    void            FileFormatCombo(int);
    void            VBRChanged();
    void            InitVideoBitRateCB(int);
    void            InitAudioBitRateCB(int);
    void            s_DeviceTypeCB(int);
    void            s_DeviceModelCB(int);
    void            SetZoneToAll();
    void            SetZoneToPartial();
    void            s_IncludeSound();

signals:
    void            SetModifyFlag();

private:
    Ui::DlgRenderVideo *ui;

    QStringList     StringToSortedStringList(QString String);
};

#endif // DLGRENDERVIDEO_H
