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

#ifndef QCustomRuler_H
#define QCustomRuler_H

// Basic inclusions (common to all files)
#include "engine/_GlobalDefines.h"
#include "engine/_Diaporama.h"

#include <QLabel>
#include <QSlider>
#include <QPaintEvent>
#include <QResizeEvent>
#include <QMouseEvent>

class cFrameList {
public:
    QList<void *>   List;                           // List of rendered frames

                    cFrameList();
                    ~cFrameList();

    void            ClearList();                    // Clear the list (make delete of each frame)
    void            *DetachFirstFrame();            // Detach the first image of the list (do not make delete)
    void            *GetFirstFrame();               // Retreve a link to the first frame in the list
    void            *GetLastFrame();                // Retreve a link to the last frame in the list
    void            AppendFrame(void *Frame);       // Append an image to the end of the list
};

class QCustomRuler : public QSlider {
Q_OBJECT
public:
    int             TotalDuration;      // Total duration in MSec of the movie
    int             StartPos;           // Start position of the marked zone
    int             EndPos;             // End position of the marked zone
    int             PreviousStartPos;   // Start position of the previous slide
    int             PrevisousEndPos;    // End position of the previous slide
    int             NextStartPos;       // Start position of the next slide
    int             NextEndPos;         // End position of the next slide
    bool            EditStartEnd;       // if true, the ruller display 2 buttons to edit start and end position

    // Sound wave display
    qreal           Analysed;           // % of analyse done
    QImage          *SoundWave;
    bool            IsAnalysed;
    QList<qreal>    Peak,Moyenne;
    qreal           SoundLevel;

    // current mouse tracking mode
    enum DefTrackingMode {
        TrackingMode_None,
        TrackingMode_Thumb,
        TrackingMode_Start,
        TrackingMode_End
    } TrackingMode;
    int TrackingOffset,TrackingValue;

    explicit        QCustomRuler(QWidget *parent = 0);
                    ~QCustomRuler();

    void            ActiveSlider(int TotalDuration);

    void            AnalyseSound(cVideoFile *MusicObject);
    void            PrepareSoundWave();

protected:
    virtual void    resizeEvent(QResizeEvent *);
    virtual void    paintEvent (QPaintEvent *);
    virtual void    mousePressEvent(QMouseEvent *);
    virtual void    mouseMoveEvent(QMouseEvent *);
    virtual void    mouseReleaseEvent(QMouseEvent *ev);

signals:
    void            PositionChangeByUser();
    void            StartEndChangeByUser();

public slots:

};

#endif // QCustomRuler_H
