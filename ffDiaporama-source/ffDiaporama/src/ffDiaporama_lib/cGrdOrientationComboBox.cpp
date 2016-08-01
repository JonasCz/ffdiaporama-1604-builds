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

#include "cGrdOrientationComboBox.h"
#include <QPainter>
#include <QTableWidget>
#include <QHeaderView>

#define MAXGRADIENTORIENTATION  9

//******************************************************************************************************************
// Custom Gradient Orientation ComboBox ITEM
//******************************************************************************************************************

cCGrdOrientationComboBoxItem::cCGrdOrientationComboBoxItem(QObject *parent):QStyledItemDelegate(parent) {
}

//========================================================================================================================
void cCGrdOrientationComboBoxItem::paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const {
    if ((!ComboBox)||(!ComboBox->Brush)) return;
    int ColorNum=index.row()*3+index.column();
    if ((ColorNum>=0)&&(ColorNum<MAXGRADIENTORIENTATION)) {

        QGradient Gradient;
        switch (ColorNum) {
            case GRADIENTORIENTATION_UPLEFT:        Gradient=QLinearGradient(QPointF(option.rect.x(),option.rect.y()),QPointF(option.rect.x()+option.rect.width(),option.rect.y()+option.rect.height()));                                                                                                                                       break;          // Up-Left
            case GRADIENTORIENTATION_UP:            Gradient=QLinearGradient(QPointF(option.rect.x()+option.rect.width()/2,option.rect.y()),QPointF(option.rect.x()+option.rect.width()/2,option.rect.y()+option.rect.height()));                                                                                                               break;          // Up
            case GRADIENTORIENTATION_UPRIGHT:       Gradient=QLinearGradient(QPointF(option.rect.x()+option.rect.width(),option.rect.y()),QPointF(option.rect.x(),option.rect.y()+option.rect.height()));                                                                                                                                       break;          // Up-right
            case GRADIENTORIENTATION_LEFT:          Gradient=QLinearGradient(QPointF(option.rect.x(),option.rect.y()+option.rect.height()/2),QPointF(option.rect.x()+option.rect.width(),option.rect.y()+option.rect.height()/2));                                                                                                              break;          // Left
            case GRADIENTORIENTATION_RADIAL:        Gradient=QRadialGradient(QPointF(option.rect.x()+option.rect.width()/2,option.rect.y()+option.rect.height()/2),option.rect.width()>option.rect.height()?option.rect.width():option.rect.height(),QPointF(option.rect.x()+option.rect.width()/2,option.rect.y()+option.rect.height()/2));    break;          // Radial
            case GRADIENTORIENTATION_RIGHT:         Gradient=QLinearGradient(QPointF(option.rect.x()+option.rect.width(),option.rect.y()+option.rect.height()/2),QPointF(option.rect.x(),option.rect.y()+option.rect.height()/2));                                                                                                              break;          // Right
            case GRADIENTORIENTATION_BOTTOMLEFT:    Gradient=QLinearGradient(QPointF(option.rect.x(),option.rect.y()+option.rect.height()),QPointF(option.rect.x()+option.rect.width(),option.rect.y()));                                                                                                                                       break;          // bt-Left
            case GRADIENTORIENTATION_BOTTOM:        Gradient=QLinearGradient(QPointF(option.rect.x()+option.rect.width()/2,option.rect.y()+option.rect.height()),QPointF(option.rect.x()+option.rect.width()/2,option.rect.y()));                                                                                                               break;          // bottom
            case GRADIENTORIENTATION_BOTTOMRIGHT:   Gradient=QLinearGradient(QPointF(option.rect.x()+option.rect.width(),option.rect.y()+option.rect.height()),QPointF(option.rect.x(),option.rect.y()));                                                                                                                                       break;          // bt-right
        }
        Gradient.setColorAt(0,QColor(ComboBox->Brush->ColorD));
        Gradient.setColorAt(1,QColor(ComboBox->Brush->ColorF));
        if (ComboBox->Brush->BrushType==BRUSHTYPE_GRADIENT3) Gradient.setColorAt(ComboBox->Brush->Intermediate,QColor(ComboBox->Brush->ColorIntermed));
        painter->setBrush(Gradient);
        painter->drawRect(option.rect);
    } else {
        painter->fillRect(option.rect,Qt::white);
    }
    if (option.state & QStyle::State_Selected) {
        painter->setPen(QPen(Qt::blue));
        painter->setBrush(QBrush(Qt::NoBrush));
        painter->drawRect(option.rect.x(),option.rect.y(),option.rect.width()-1,option.rect.height()-1);
        painter->drawRect(option.rect.x()+1,option.rect.y()+1,option.rect.width()-1-2,option.rect.height()-1-2);
        painter->setPen(QPen(Qt::black));
        painter->drawRect(option.rect.x()+2,option.rect.y()+2,option.rect.width()-1-4,option.rect.height()-1-4);
    }
}

//========================================================================================================================

QSize cCGrdOrientationComboBoxItem::sizeHint(const QStyleOptionViewItem &/*option*/,const QModelIndex &/*index*/) const {
    return QSize(32,32);
}

//******************************************************************************************************************
// Custom Gradient Orientation ComboBox
//******************************************************************************************************************

cCGrdOrientationComboBox::cCGrdOrientationComboBox(QWidget *parent):QComboBox(parent) {
    STOPMAJ=false;
    Brush=NULL;
    QTableWidget    *Table=new QTableWidget();
    Table->horizontalHeader()->hide();
    Table->verticalHeader()->hide();
    Table->insertColumn(Table->columnCount());  Table->setColumnWidth(Table->columnCount()-1,32);
    Table->insertColumn(Table->columnCount());  Table->setColumnWidth(Table->columnCount()-1,32);
    Table->insertColumn(Table->columnCount());  Table->setColumnWidth(Table->columnCount()-1,32);
    setModel(Table->model());
    setView(Table);
    int i=0;
    while (i<MAXGRADIENTORIENTATION) {
        if ((i/3)>=Table->rowCount()) {
            addItem("");    //automaticaly do a Table->insertRow(Table->rowCount());
            Table->setRowHeight(Table->rowCount()-1,32);
        }
        i++;
    }
    ItemDelegate.ComboBox=this;
    setItemDelegate(&ItemDelegate);
    MakeIcons();
    this->view()->setVerticalScrollBarPolicy(Qt::ScrollBarAlwaysOff);
    this->view()->setFixedSize(3*32,3*32);
    connect(Table,SIGNAL(itemSelectionChanged()),this,SLOT(s_ItemSelectionChanged()));
}

//========================================================================================================================

void cCGrdOrientationComboBox::SetCurrentBrush(cBaseBrushDefinition *TheBrush) {
    if (STOPMAJ) return;
    Brush=TheBrush;
    setCurrentIndex(Brush->GradientOrientation/3);
    ((QTableWidget *)view())->setCurrentCell(Brush->GradientOrientation/3,Brush->GradientOrientation-(Brush->GradientOrientation/3)*3);
    MakeIcons();
}

//========================================================================================================================

cBaseBrushDefinition *cCGrdOrientationComboBox::GetCurrentBrush() {
    if (Brush) {
        Brush->GradientOrientation=currentIndex()*3+((QTableWidget *)view())->currentColumn();
        MakeIcons();
    }
    return Brush;
}

//========================================================================================================================

void cCGrdOrientationComboBox::MakeIcons() {
    if (!Brush) return;
    int CurrentRow=currentIndex();
    if (CurrentRow<0) return;
    int CurrentCol=((QTableWidget *)view())->currentColumn();
    if (CurrentCol<0) CurrentCol=0;
    int ColorNum=CurrentRow*3+CurrentCol;
    //setIconSize(QSize(width()-16,16));
    setIconSize(QSize(24,12));
    QPixmap  Image(iconSize());
    QPainter Painter;
    Painter.begin(&Image);
    if ((ColorNum>=0)&&(ColorNum<MAXGRADIENTORIENTATION)) {
        QRectF      Rect=QRectF(0,0,iconSize().width(),iconSize().height());
        QGradient   Gradient;
        switch (ColorNum) {
            case GRADIENTORIENTATION_UPLEFT:        Gradient=QLinearGradient(QPointF(Rect.x(),Rect.y()),QPointF(Rect.x()+Rect.width(),Rect.y()+Rect.height()));                                                                                             break;          // Up-Left
            case GRADIENTORIENTATION_UP:            Gradient=QLinearGradient(QPointF(Rect.x()+Rect.width()/2,Rect.y()),QPointF(Rect.x()+Rect.width()/2,Rect.y()+Rect.height()));                                                                            break;          // Up
            case GRADIENTORIENTATION_UPRIGHT:       Gradient=QLinearGradient(QPointF(Rect.x()+Rect.width(),Rect.y()),QPointF(Rect.x(),Rect.y()+Rect.height()));                                                                                             break;          // Up-right
            case GRADIENTORIENTATION_LEFT:          Gradient=QLinearGradient(QPointF(Rect.x(),Rect.y()+Rect.height()/2),QPointF(Rect.x()+Rect.width(),Rect.y()+Rect.height()/2));                                                                           break;          // Left
            case GRADIENTORIENTATION_RADIAL:        Gradient=QRadialGradient(QPointF(Rect.x()+Rect.width()/2,Rect.y()+Rect.height()/2),Rect.width()>Rect.height()?Rect.width():Rect.height(),QPointF(Rect.x()+Rect.width()/2,Rect.y()+Rect.height()/2));    break;          // Radial
            case GRADIENTORIENTATION_RIGHT:         Gradient=QLinearGradient(QPointF(Rect.x()+Rect.width(),Rect.y()+Rect.height()/2),QPointF(Rect.x(),Rect.y()+Rect.height()/2));                                                                           break;          // Right
            case GRADIENTORIENTATION_BOTTOMLEFT:    Gradient=QLinearGradient(QPointF(Rect.x(),Rect.y()+Rect.height()),QPointF(Rect.x()+Rect.width(),Rect.y()));                                                                                             break;          // bt-Left
            case GRADIENTORIENTATION_BOTTOM:        Gradient=QLinearGradient(QPointF(Rect.x()+Rect.width()/2,Rect.y()+Rect.height()),QPointF(Rect.x()+Rect.width()/2,Rect.y()));                                                                            break;          // bottom
            case GRADIENTORIENTATION_BOTTOMRIGHT:   Gradient=QLinearGradient(QPointF(Rect.x()+Rect.width(),Rect.y()+Rect.height()),QPointF(Rect.x(),Rect.y()));                                                                                             break;          // bt-right
        }
        Gradient.setColorAt(0,QColor(Brush->ColorD));
        Gradient.setColorAt(1,QColor(Brush->ColorF));
        if (Brush->BrushType==BRUSHTYPE_GRADIENT3) Gradient.setColorAt(Brush->Intermediate,QColor(Brush->ColorIntermed));
        Painter.setBrush(Gradient);
        Painter.drawRect(Rect);
    } else {
        Painter.setBrush(QBrush(Qt::white));
        Painter.drawRect(QRectF(0,0,iconSize().width(),iconSize().height()));
    }
    Painter.end();
    setItemIcon(CurrentRow,QIcon(Image));
}

//========================================================================================================================

void cCGrdOrientationComboBox::s_ItemSelectionChanged() {
    STOPMAJ=true;
    setCurrentIndex(((QTableWidget *)view())->currentRow());
    MakeIcons();
    emit currentIndexChanged(((QTableWidget *)view())->currentRow()*3+((QTableWidget *)view())->currentColumn());
    STOPMAJ=false;
}

