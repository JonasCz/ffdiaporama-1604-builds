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

#ifndef CCSHAPECOMBOBOX_H
#define CCSHAPECOMBOBOX_H

// Basic inclusions (common to all files)
#include "_QCustomDialog.h"
#include "Shape.h"

//******************************************************************************************************************
// Custom Frame shape ComboBox
//******************************************************************************************************************

#define FILTERFRAMESHAPE_OLDTRIANGLE        0x01

class cCShapeComboBox;
class cCShapeComboBoxItem : public QStyledItemDelegate {
Q_OBJECT
public:
    cCShapeComboBox    *ComboBox;

    explicit cCShapeComboBoxItem(QObject *parent=0);

    virtual void    paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const;
    virtual QSize   sizeHint(const QStyleOptionViewItem &option,const QModelIndex &index) const;
};

class cFrameShapeTableItem {
public:
    QImage  Image;
    int     FrameStyle;
    cFrameShapeTableItem(QImage *Image,int FrameStyle);
};

class cCShapeComboBox : public QComboBox {
Q_OBJECT
public:
    QList<cFrameShapeTableItem>     FrameShapeTable;
    bool                            STOPMAJ;
    cCShapeComboBoxItem              ItemDelegate;
    int                             CurrentFilter,CurrentFramingStyle,CurrentNbrITem;

    explicit            cCShapeComboBox(QWidget *parent = 0);
    void                PrepareFrameShapeTable(bool ResetContent,int Filter,int CurrentBackgroundForm);
    void                MakeIcons();
    void                SetCurrentFrameShape(int FrameShape);
    int                 GetCurrentFrameShape();

protected:
    virtual void        hidePopup();
    virtual void        keyReleaseEvent(QKeyEvent *event);

signals:
    void itemSelectionHaveChanged();

public slots:
    void s_ItemSelectionChanged();
};

#endif // CCSHAPECOMBOBOX_H
