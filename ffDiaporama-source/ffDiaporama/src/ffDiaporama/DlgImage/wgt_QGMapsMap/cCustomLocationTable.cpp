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

#include "cCustomLocationTable.h"
#include "engine/cLocation.h"

//********************************************************************************************************
// QCustomFolderTable
//********************************************************************************************************

class QCustomLocationItemDelegate : public QStyledItemDelegate {
//Q_OBJECT
public:
    cCustomLocationTable  *ParentTable;

    explicit QCustomLocationItemDelegate(QObject *parent);

    virtual void    paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const;
};

//========================================================================================================================

QCustomLocationItemDelegate::QCustomLocationItemDelegate(QObject *parent):QStyledItemDelegate(parent) {
    ParentTable=(cCustomLocationTable *)parent;
}

//========================================================================================================================
#define ICON_SHOW                     ":/img/Visible_OK.png"
#define ICON_MASK                     ":/img/Visible_MASK.png"
#define ICON_HIDE                     ":/img/Visible_KO.png"

void QCustomLocationItemDelegate::paint(QPainter *Painter,const QStyleOptionViewItem &option,const QModelIndex &index) const {
    if (!ParentTable->CurrentMap) return;
    if ((index.row()>ParentTable->CurrentMap->List.count())||(index.row()>=ParentTable->CurrentBrush->Markers.count()))  return;

    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));

    Painter->fillRect(option.rect,QBrush(QColor(ParentTable->CurrentBrush->Markers[index.row()].MarkerColor),Qt::SolidPattern));
    ParentTable->CurrentBrush->DrawMarker(Painter,option.rect.topLeft(),index.row(),cBrushDefinition::sMarker::MARKERTABLE,option.rect.size(),cBrushDefinition::sMarker::MEDIUM,true);

    switch (ParentTable->CurrentBrush->Markers[index.row()].Visibility) {
        case cBrushDefinition::sMarker::MARKERHIDE:     Painter->drawImage(option.rect.left()+2,option.rect.top()+2,QImage(ICON_HIDE).scaledToHeight(16)); break;
        case cBrushDefinition::sMarker::MARKERSHADE:    Painter->drawImage(option.rect.left()+2,option.rect.top()+2,QImage(ICON_MASK).scaledToHeight(16)); break;
        default:
        case cBrushDefinition::sMarker::MARKERSHOW:     Painter->drawImage(option.rect.left()+2,option.rect.top()+2,QImage(ICON_SHOW).scaledToHeight(16)); break;
    }

    // Selection mode (Note: MouseOver is removed because it works correctly only on KDE !)
    if (option.state & QStyle::State_Selected) {
        Painter->setPen(QPen(Qt::NoPen));
        Painter->setBrush(QBrush(Qt::blue));
        Painter->setOpacity(0.25);
        Painter->drawRect(option.rect.x(),option.rect.y(),option.rect.width(),option.rect.height());
        Painter->setOpacity(1);
    }

    QApplication::restoreOverrideCursor();
}

//********************************************************************************************************
// cCustomLocationTable
//********************************************************************************************************

cCustomLocationTable::cCustomLocationTable(QWidget *parent):QTableWidget(parent) {
    CurrentMap=NULL;
    CurrentBrush=NULL;
    setShowGrid(true);
    setHorizontalScrollBarPolicy(Qt::ScrollBarAlwaysOff);
    setVerticalScrollBarPolicy(Qt::ScrollBarAsNeeded);
    setSelectionBehavior(QAbstractItemView::SelectRows);
    horizontalHeader()->setStretchLastSection(true);
    verticalHeader()->setStretchLastSection(false);
    setItemDelegate((QAbstractItemDelegate *)new QCustomLocationItemDelegate(this));
    verticalHeader()->setDefaultSectionSize(38);
}
