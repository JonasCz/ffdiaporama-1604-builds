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

#ifndef CCGRDORIENTATIONCOMBOBOX_H
#define CCGRDORIENTATIONCOMBOBOX_H

#include "cBaseBrushDefinition.h"
#include <QStyledItemDelegate>
#include <QComboBox>

//******************************************************************************************************************
// Custom QAbstractItemDelegate for Brush ComboBox
//******************************************************************************************************************

class cCGrdOrientationComboBox;
class cCGrdOrientationComboBoxItem : public QStyledItemDelegate {
Q_OBJECT
public:
    cCGrdOrientationComboBox    *ComboBox;

    explicit cCGrdOrientationComboBoxItem(QObject *parent=0);

    virtual void    paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const;
    virtual QSize   sizeHint(const QStyleOptionViewItem &option,const QModelIndex &index) const;
};

//******************************************************************************************************************
// Custom Brush ComboBox
//******************************************************************************************************************

class cCGrdOrientationComboBox : public QComboBox {
Q_OBJECT
public:
    bool                            STOPMAJ;
    cBaseBrushDefinition            *Brush;
    cCGrdOrientationComboBoxItem    ItemDelegate;

    explicit                        cCGrdOrientationComboBox(QWidget *parent = 0);
    void                            MakeIcons();
    void                            SetCurrentBrush(cBaseBrushDefinition *Brush);
    cBaseBrushDefinition            *GetCurrentBrush();

protected:

signals:

public slots:
    void s_ItemSelectionChanged();
};

#endif // CCGRDORIENTATIONCOMBOBOX_H
