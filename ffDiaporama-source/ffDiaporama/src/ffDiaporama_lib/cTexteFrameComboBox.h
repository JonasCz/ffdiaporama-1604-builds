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

#ifndef CCTEXTEFRAMECOMBOBOX_H
#define CCTEXTEFRAMECOMBOBOX_H

#include <QWidget>
#include <QComboBox>
#include <QStyledItemDelegate>
#include <QTableWidget>
#include <QSize>
#include <QPainter>
#include <QDialog>

#include "cTextFrame.h"

//******************************************************************************************************************
// Custom QAbstractItemDelegate for Brush ComboBox
//******************************************************************************************************************

class cCTexteFrameComboBox;
class cCTexteFrameComboBoxItem : public QStyledItemDelegate {
Q_OBJECT
public:
    cCTexteFrameComboBox        *ComboBox;

    explicit                    cCTexteFrameComboBoxItem(QObject *parent=0);

    virtual void                paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const;
    virtual QSize               sizeHint(const QStyleOptionViewItem &option,const QModelIndex &index) const;
};

class cCTexteFrameComboBox : public QComboBox {
Q_OBJECT
public:
    int                         CurrentSel;
    bool                        STOPMAJ;
    cCTexteFrameComboBoxItem    ItemDelegate;


    explicit                    cCTexteFrameComboBox(QWidget *parent = 0);
    void                        PrepareTable();
    void                        SetCurrentTextFrame(QString TextFrameName);
    QString                     GetCurrentTextFrame();
    void                        MakeIcons();

protected:
    virtual void                hidePopup();
    virtual void                keyReleaseEvent(QKeyEvent *event);

signals:
    void                        itemSelectionHaveChanged();

public slots:
    void                        s_ItemSelectionChanged();
};

class cPopupTexteFrame : public QDialog {
Q_OBJECT
public:
    cCTexteFrameComboBoxItem    ItemDelegate;
    QTableWidget                *Table;
    int                         CurrentSel;

    explicit                    cPopupTexteFrame(QWidget *parent = 0);
    void                        DoInitPopup(QPoint Pos);
    QString                     GetCurrentTextFrame();

public slots:
    void s_ItemSelectionChanged();
};

#endif // CCTEXTEFRAMECOMBOBOX_H
