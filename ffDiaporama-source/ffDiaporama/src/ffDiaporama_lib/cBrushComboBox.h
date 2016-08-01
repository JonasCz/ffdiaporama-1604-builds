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

#ifndef CCBRUSHCOMBOBOX_H
#define CCBRUSHCOMBOBOX_H

#include "cBaseBrushDefinition.h"
#include <QStyledItemDelegate>
#include <QComboBox>
#include <QPainter>

//******************************************************************************************************************
// Custom QAbstractItemDelegate for Brush ComboBox
//******************************************************************************************************************

class cCBrushComboBox;
class cCBrushComboBoxItem : public QStyledItemDelegate {
Q_OBJECT
public:
    cCBrushComboBox    *ComboBox;

    explicit cCBrushComboBoxItem(QObject *parent=0);

    virtual void    paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const;
    virtual QSize   sizeHint(const QStyleOptionViewItem &option,const QModelIndex &index) const;
};

//******************************************************************************************************************
// Custom Brush ComboBox
//******************************************************************************************************************

class cCBrushComboBox : public QComboBox {
Q_OBJECT
public:
    bool                   STOPMAJ;
    cBaseBrushDefinition   *Brush;
    cCBrushComboBoxItem    ItemDelegate;

    explicit                cCBrushComboBox(QWidget *parent = 0);
    void                    MakeIcons();
    void                    SetCurrentBrush(cBaseBrushDefinition *Brush);
    cBaseBrushDefinition    *GetCurrentBrush();

protected:

signals:

public slots:
    void s_ItemSelectionChanged();
};


#endif // CCBRUSHCOMBOBOX_H
