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

#ifndef CcCFramingComboBox_H
#define CcCFramingComboBox_H

// Basic inclusions (common to all files)
#include "_QCustomDialog.h"
#include "engine/cBrushDefinition.h"

//******************************************************************************************************************
// Custom QAbstractItemDelegate for AutoFraming ComboBox
//******************************************************************************************************************

class cCFramingComboBox;
class cCFramingComboBoxItem : public QStyledItemDelegate {
Q_OBJECT
public:
    cCFramingComboBox    *ComboBox;

    explicit cCFramingComboBoxItem(QObject *parent=0);

    virtual void    paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const;
    virtual QSize   sizeHint(const QStyleOptionViewItem &option,const QModelIndex &index) const;
};

//******************************************************************************************************************
// Custom AutoFraming ComboBox
//******************************************************************************************************************

#define FILTERFRAMING_CUSTOM    0x01
#define FILTERFRAMING_IMAGE     0x02
#define FILTERFRAMING_PROJECT   0x04
#define FILTERFRAMING_ALL       0x07
#define FILTERFRAMING_INTERNAL  0x08

class cFramingStyleTableItem {
public:
    QImage  Image;
    int     FrameStyle;
    cFramingStyleTableItem(QImage *Image,int FrameStyle);
};

class cCFramingComboBox : public QComboBox {
Q_OBJECT
public:
    QList<cFramingStyleTableItem>   FramingStyleTable;
    bool                            STOPMAJ;
    cCFramingComboBoxItem            ItemDelegate;
    qreal                           X,Y,ZoomFactor,AspectRatio;
    int                             CurrentFilter,CurrentFramingStyle,CurrentNbrITem;

    explicit            cCFramingComboBox(QWidget *parent = 0);
    void                PrepareFramingStyleTable(bool ResetContent,int Filter,cBrushDefinition *Brush,QImage *SourceImage,int BackgroundForm,qreal ProjectGeometry);
    void                MakeIcons();
    void                SetCurrentFraming(int AutoFraming);
    int                 GetCurrentFraming();

protected:
    virtual void        hidePopup();
    virtual void        keyReleaseEvent(QKeyEvent *event);

signals:
    void itemSelectionHaveChanged();

public slots:
    void s_ItemSelectionChanged();
};

#endif // CcCFramingComboBox_H
