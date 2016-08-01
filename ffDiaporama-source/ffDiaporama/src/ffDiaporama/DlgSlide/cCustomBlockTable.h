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

#ifndef CCUSTOMBLOCKTABLE_H
#define CCUSTOMBLOCKTABLE_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"
#include "engine/_Diaporama.h"

class cCustomBlockTable : public QTableWidget {
Q_OBJECT
public:
    cApplicationConfig  *ApplicationConfig;
    cCompositionList        *CompositionList;           // Link to Composition List
    cDiaporamaObject        *CurrentSlide;
    qreal                   ProjectGeometry;
    QImage                  TextIcon;
    int                     CurrentShotNbr;
    int                     DragItemSource;
    int                     DragItemDest;
    int                     IsDragOn;

    explicit                cCustomBlockTable(QWidget *parent = 0);

protected:
    virtual void            resizeEvent(QResizeEvent *);
    virtual void            mouseDoubleClickEvent(QMouseEvent *);

    virtual void            mousePressEvent(QMouseEvent *);
    virtual void            mouseMoveEvent(QMouseEvent *);
    virtual void            mouseReleaseEvent(QMouseEvent *);

    virtual void            dragEnterEvent(QDragEnterEvent *event);
    virtual void            dragMoveEvent(QDragMoveEvent *event);
    virtual void            dropEvent(QDropEvent *event);

signals:
    void                    DoubleClickEvent(QMouseEvent *ev);
    void                    RightClickEvent(QMouseEvent *ev);
    void                    DragMoveBlock(int,int);
    void                    DragDropFiles(QList<QUrl>);

public slots:

};

#endif // CCUSTOMBLOCKTABLE_H
