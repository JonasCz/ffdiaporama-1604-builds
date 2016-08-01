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

#ifndef CCUSTOMTITLEMODELTABLE_H
#define CCUSTOMTITLEMODELTABLE_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"
#include "engine/_Diaporama.h"

class cCustomTitleModelTable : public QTableWidget {
Q_OBJECT
public:
    cApplicationConfig  *ApplicationConfig;
    QAbstractItemModel      *DefaultModel;
    QAbstractItemDelegate   *DefaultDelegate;
    cModelList              *ModelTable;
    cDiaporamaObject        *CurrentSlide;
    int                     CurrentSel;
    int                     NbrColumn;
    int64_t                 TimerPosition;
    bool                    InModifTable;

    explicit cCustomTitleModelTable(QWidget *parent = 0);
    ~cCustomTitleModelTable();

    virtual void            resizeEvent(QResizeEvent *);
    virtual void            mouseDoubleClickEvent(QMouseEvent *);

signals:
    void                    DoubleClickEvent(QMouseEvent *ev);

protected:
    virtual void            showEvent(QShowEvent *);

public slots:
    void                    PrepareTable(cModelList *Table);
    void                    SetCurrentModel(QString ModelName);
    QString                 GetCurrentModel();

};

extern QMutex  CustomTitleModelTableLockPaint;    // Mutex used to control multithreaded operations

#endif // CCUSTOMTITLEMODELTABLE_H
