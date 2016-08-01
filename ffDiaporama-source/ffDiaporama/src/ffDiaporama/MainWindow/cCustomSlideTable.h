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

#ifndef CCUSTOMSLIDETABLE_H
#define CCUSTOMSLIDETABLE_H

// Basic inclusions (common to all files)
#include "engine/_GlobalDefines.h"
#include "engine/_Diaporama.h"

#include <QTableWidget>
#include <QMouseEvent>

// Thumbnails definitions
#define ADJUSTXCOLUMN                       10      // width to add to object image for display transition
#define TIMELINESOUNDHEIGHT                 18      // Height of sound & music track

#define DRAGMODE_NOACTION                   0
#define DRAGMODE_INTERNALMOVE_SLIDE         1
#define DRAGMODE_INTERNALMOVE_MUSIC         2
#define DRAGMODE_INTERNALMOVE_BACKGROUND    3
#define DRAGMODE_EXTERNALADD_SLIDE          4
#define DRAGMODE_EXTERNALADD_MUSIC          5

//*****************************************************************************************************************************************

class cCustomSlideTable : public QTableWidget {
Q_OBJECT
public:
    bool                    PartitionMode;
    cDiaporama              *Diaporama;                 // Link to current diaporama
    cApplicationConfig  *ApplicationConfig;         // Link to current application config

    // Drag & drop operation
    int                     DragItemSource;
    int                     DragItemDest;
    int                     IsDragOn;                   // DragOff=0, DragInternal=1 or DragExternal=0
    int                     DragMoveItemCause;          // Wich action cause emit of DragMoveItem message
    bool                    CursorPosValide;

    // Contextual Menu
    int                     ClickedSlide;
    bool                    MusicPart;
    bool                    BackgroundPart;


    explicit    cCustomSlideTable(QWidget *parent = 0);

    void        AddObjectToTimeLine(int CurIndex);
    void        SetTimelineHeight(bool NewPartitionMode);
    int         CurrentSelected();
    void        CurrentSelectionList(QList<int> *List);
    bool        IsMultipleSelection();
    void        SetCurrentCell(int Index);
    void        CleanAll();
    void        ResetDisplay(int Selected);

    void        dokeyReleaseEvent(QKeyEvent *event);

protected:
    virtual void dragEnterEvent(QDragEnterEvent *event);
    virtual void dragLeaveEvent(QDragLeaveEvent *event);
    virtual void dragMoveEvent(QDragMoveEvent *event);
    virtual void dropEvent(QDropEvent *event);
    virtual void mousePressEvent(QMouseEvent *event);
    virtual void mouseReleaseEvent(QMouseEvent *event);
    virtual void mouseMoveEvent(QMouseEvent *event);
    virtual void mouseDoubleClickEvent(QMouseEvent *ev);
    virtual void wheelEvent(QWheelEvent *ev);

private slots:
    void    DoResetDisplay();

signals:
    void    DragMoveItem();
    void    DoAddDragAndDropFile();
    void    EditTransition();
    void    EditMediaObject();
    void    EditBackGTransition();
    void    EditBackground();
    void    EditMusicTrack();
    void    RightClickEvent(QMouseEvent *ev);
};

#endif // CCUSTOMSLIDETABLE_H
