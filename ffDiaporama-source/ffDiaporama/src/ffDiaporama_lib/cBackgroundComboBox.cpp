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

#include "cBackgroundComboBox.h"
#include <QTableWidget>
#include <QHeaderView>
#include <QKeyEvent>

#define IMAGEHEIGHT  56
#define NBRCOLUMN    4

cCBackgroundComboBoxItem::cCBackgroundComboBoxItem(QObject *parent):QStyledItemDelegate(parent) {
}

//========================================================================================================================
void cCBackgroundComboBoxItem::paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const {
    int CurIndex=index.row()*NBRCOLUMN+index.column();

    if ((CurIndex>=0)&&(CurIndex<ComboBox->BackgroundTable->List.count())) {
        painter->drawImage(option.rect.left(),option.rect.top(),ComboBox->BackgroundTable->List[CurIndex].GetBackgroundThumb(ComboBox->Geometry));
    } else {
        painter->fillRect(option.rect,Qt::white);
    }
    if (ComboBox->CurrentSel==index.row()*((QTableWidget *)ComboBox->view())->columnCount()+index.column()) {
        painter->setPen(QPen(Qt::red));
        painter->setBrush(QBrush(Qt::NoBrush));
        painter->drawRect(option.rect.x()+3,option.rect.y()+3,option.rect.width()-6-1,option.rect.height()-6-1);
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

QSize cCBackgroundComboBoxItem::sizeHint(const QStyleOptionViewItem &/*option*/,const QModelIndex &/*index*/) const {
    return QSize(ComboBox->ImageWidth,IMAGEHEIGHT);
}

//******************************************************************************************************************
// Custom Background ComboBox
//******************************************************************************************************************

cBackgroundComboBox::cBackgroundComboBox(QWidget *parent):QComboBox(parent) {
    BackgroundTable     =NULL;
    CurrentSel          =-1;
    STOPMAJ             =false;
    ImageWidth          =100;
    Geometry            =GEOMETRY_16_9;

    QTableWidget    *Table=new QTableWidget();
    Table->horizontalHeader()->hide();
    Table->verticalHeader()->hide();
    for (int i=0;i<NBRCOLUMN;i++) {
        Table->insertColumn(0);
        Table->setColumnWidth(0,ImageWidth);
    }
    setModel(Table->model());
    setView(Table);
    ItemDelegate.ComboBox=this;
    setItemDelegate(&ItemDelegate);
    this->view()->setFixedWidth(ImageWidth*NBRCOLUMN+18);
    this->view()->setVerticalScrollBarPolicy(Qt::ScrollBarAlwaysOn);
    setIconSize(QSize(ImageWidth,IMAGEHEIGHT));
    setFixedSize(QSize(ImageWidth+18,IMAGEHEIGHT+4));
    connect(Table,SIGNAL(itemSelectionChanged()),this,SLOT(s_ItemSelectionChanged()));
}

//========================================================================================================================

void cBackgroundComboBox::PrepareTable(ffd_GEOMETRY ProjectGeometry,cBackgroundList *Table) {
    BackgroundTable=Table;
    Geometry       =ProjectGeometry;

    switch (Geometry) {
        case GEOMETRY_4_3   : ImageWidth=75;    break;
        case GEOMETRY_40_17 : ImageWidth=132;   break;
        default             : ImageWidth=100;   break;
    }
    this->view()->setFixedWidth(ImageWidth*NBRCOLUMN+18);
    setIconSize(QSize(ImageWidth,IMAGEHEIGHT));
    setFixedSize(QSize(ImageWidth+18,IMAGEHEIGHT+4));
    for (int i=0;i<NBRCOLUMN;i++) ((QTableWidget *)view())->setColumnWidth(i,ImageWidth);

    int CurIndex  =((QTableWidget *)view())->currentRow()*NBRCOLUMN+((QTableWidget *)view())->currentColumn();
    while (count()>0) removeItem(count()-1);
    int NbrItem=BackgroundTable->List.count();
    int NbrRow=NbrItem/NBRCOLUMN;
    if (NbrRow*NBRCOLUMN<NbrItem) NbrRow++;
    for (int i=0;i<NbrRow;i++) {
        addItem(QIcon(QPixmap().fromImage(BackgroundTable->List[i*NBRCOLUMN].GetBackgroundThumb(Geometry))),"");    //automaticaly do a Table->insertRow(Table->rowCount());
        ((QTableWidget *)view())->setRowHeight(((QTableWidget *)view())->rowCount()-1,IMAGEHEIGHT);
    }
    ((QTableWidget *)view())->setCurrentCell(CurIndex/NBRCOLUMN,CurIndex-(CurIndex/NBRCOLUMN)*NBRCOLUMN);
    setCurrentIndex(CurIndex/NBRCOLUMN);
}

//========================================================================================================================

void cBackgroundComboBox::hidePopup() {
    QComboBox::hidePopup();
    emit itemSelectionHaveChanged();
    MakeIcons();
    CurrentSel=((QTableWidget *)view())->currentRow()*NBRCOLUMN+((QTableWidget *)view())->currentColumn();
    if (CurrentSel>=BackgroundTable->List.count()) CurrentSel=BackgroundTable->List.count()-1;
}

//========================================================================================================================

void cBackgroundComboBox::keyReleaseEvent(QKeyEvent *event) {
    int CurIndex=((QTableWidget *)view())->currentRow()*NBRCOLUMN+((QTableWidget *)view())->currentColumn();
    int aCurIndex=CurIndex;
    if ((event->key()==Qt::Key_Right)||(event->key()==Qt::Key_Down)) {
        if (CurIndex<BackgroundTable->List.count()-1) CurIndex++;
    } else if ((event->key()==Qt::Key_Left)||(event->key()==Qt::Key_Up)) {
        if (CurIndex>0) CurIndex--;
    } else QComboBox::keyReleaseEvent(event);
    if (aCurIndex!=CurIndex) {
        STOPMAJ=true;
        ((QTableWidget *)view())->setCurrentCell(CurIndex/NBRCOLUMN,CurIndex-(CurIndex/NBRCOLUMN)*NBRCOLUMN);
        setCurrentIndex(CurIndex/NBRCOLUMN);
        MakeIcons();
        STOPMAJ=false;
        emit itemSelectionHaveChanged();
    }
}

//========================================================================================================================

void cBackgroundComboBox::MakeIcons() {
    if (!BackgroundTable) return;
    int CurrentRow=currentIndex();
    if (CurrentRow<0) return;
    int CurrentCol=((QTableWidget *)view())->currentColumn();
    if (CurrentCol<0) CurrentCol=0;
    int CurIndex=CurrentRow*NBRCOLUMN+CurrentCol;
    if (CurIndex<BackgroundTable->List.count()) setItemIcon(CurrentRow,QIcon(QPixmap().fromImage(BackgroundTable->List[CurIndex].GetBackgroundThumb(Geometry))));
}

//========================================================================================================================

void cBackgroundComboBox::s_ItemSelectionChanged() {
    STOPMAJ=true;
    setCurrentIndex(((QTableWidget *)view())->currentRow());
    MakeIcons();
    emit currentIndexChanged(((QTableWidget *)view())->currentRow()*NBRCOLUMN+((QTableWidget *)view())->currentColumn());
    STOPMAJ=false;
}

//========================================================================================================================

void cBackgroundComboBox::SetCurrentBackground(QString BackgroundName) {
    if (STOPMAJ) return;
    CurrentSel=BackgroundTable->SearchImage(BackgroundName);
    ((QTableWidget *)view())->setCurrentCell(CurrentSel/NBRCOLUMN,CurrentSel-(CurrentSel/NBRCOLUMN)*NBRCOLUMN);
    setCurrentIndex(CurrentSel/NBRCOLUMN);
    MakeIcons();
}

//========================================================================================================================

QString cBackgroundComboBox::GetCurrentBackground() {
    CurrentSel=((QTableWidget *)view())->currentRow()*NBRCOLUMN+((QTableWidget *)view())->currentColumn();
    if (CurrentSel>=BackgroundTable->List.count()) CurrentSel=BackgroundTable->List.count()-1;
    return BackgroundTable->List[CurrentSel].Name;
}
