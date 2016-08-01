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

#ifndef CCUSTOMSHOTTABLE_H
#define CCUSTOMSHOTTABLE_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"
#include "engine/_Diaporama.h"

class cCustomShotTable : public QTableWidget {
Q_OBJECT
public:
    int                 DragItemSource;
    int                 DragItemDest;
    int                 IsDragOn;                       // DragOff=0, DragInternal=0 or DragExternal=0
    cDiaporamaObject    *DiaporamaObject;

    explicit    cCustomShotTable(QWidget *parent = 0);
    int         CurrentSelected();
    int         NbrItem();
    void        SetCurrentCell(int Index);
    void        RepaintCell(int Index);

protected:
    virtual void mousePressEvent(QMouseEvent *event);
    virtual void mouseReleaseEvent(QMouseEvent *event);
    virtual void mouseMoveEvent(QMouseEvent *event);

private slots:

signals:
    void    DragMoveItem();
    void    RightClickEvent(QMouseEvent *ev);
};

#endif // CCUSTOMSHOTTABLE_H
