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

#ifndef CTHUMBNAILCOMBOBOX_H
#define CTHUMBNAILCOMBOBOX_H

// Basic inclusions (common to all files)
#include "_QCustomDialog.h"
#include "engine/_Model.h"

//******************************************************************************************************************
// Custom QAbstractItemDelegate for Brush ComboBox
//******************************************************************************************************************

class cThumbnailComboBox;
class cThumbnailComboBoxItem : public QStyledItemDelegate {
Q_OBJECT
public:
    cThumbnailComboBox    *ComboBox;

    explicit cThumbnailComboBoxItem(QObject *parent=0);

    virtual void    paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const;
    virtual QSize   sizeHint(const QStyleOptionViewItem &option,const QModelIndex &index) const;
};

class cThumbnailComboBox : public QComboBox {
Q_OBJECT
public:
    cModelList              *ModelTable;
    int                     CurrentSel;
    bool                    STOPMAJ;
    cThumbnailComboBoxItem  ItemDelegate;
    cDiaporamaObject        *ProjectThumbnail;
    cDiaporama              *Diaporama;         // Diaporama object to be use by prepare image (null for option dialog and fill for project dialog)

    explicit            cThumbnailComboBox(QWidget *parent = 0);
    void                PrepareTable(bool AllowCustomized,cModelList *Table);
    void                SetCurrentModel(QString ModelName);
    QString             GetCurrentModel();
    void                MakeIcons();

protected:
    virtual void        hidePopup();
    virtual void        keyReleaseEvent(QKeyEvent *event);

signals:
    void itemSelectionHaveChanged();

public slots:
    void s_ItemSelectionChanged();
};

#endif // CTHUMBNAILCOMBOBOX_H
