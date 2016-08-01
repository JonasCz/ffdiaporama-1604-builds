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

#include "cThumbnailComboBox.h"

#define NBRCOLUMN    4
#define DECAL       10

cThumbnailComboBoxItem::cThumbnailComboBoxItem(QObject *parent):QStyledItemDelegate(parent) {
}

//========================================================================================================================
void cThumbnailComboBoxItem::paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const {
    int CurIndex=index.row()*NBRCOLUMN+index.column();

    if ((CurIndex>=0)&&(CurIndex<ComboBox->ModelTable->List.count())) {

        if (option.state & QStyle::State_Selected)  painter->fillRect(option.rect,Qt::blue);
            else                                    painter->fillRect(option.rect,Qt::white);

        painter->drawImage(option.rect.left()+DECAL,option.rect.top()+DECAL,
                           ComboBox->ModelTable->List[CurIndex]->PrepareImage(0,ComboBox->Diaporama,ComboBox->ModelTable->List[CurIndex]->Name=="*"?ComboBox->ProjectThumbnail:NULL));

        if (CurIndex==ComboBox->CurrentSel) {
            painter->setPen(QPen(Qt::red));
            painter->setBrush(QBrush(Qt::NoBrush));
            painter->drawRect(option.rect.x()+3,option.rect.y()+3,option.rect.width()-6-1,option.rect.height()-6-1);
        }

    } else painter->fillRect(option.rect,Qt::white);
}

//========================================================================================================================

QSize cThumbnailComboBoxItem::sizeHint(const QStyleOptionViewItem &/*option*/,const QModelIndex &/*index*/) const {
    return QSize(THUMB_THUMBWITH+DECAL*2,THUMB_THUMBHEIGHT+DECAL*2);
}

//******************************************************************************************************************
// Custom Background ComboBox
//******************************************************************************************************************

cThumbnailComboBox::cThumbnailComboBox(QWidget *parent):QComboBox(parent) {
    ModelTable=NULL;
    Diaporama =NULL;
    CurrentSel=-1;
    STOPMAJ   =false;

    QTableWidget *Table=new QTableWidget();
    Table->horizontalHeader()->hide();
    Table->verticalHeader()->hide();
    for (int i=0;i<NBRCOLUMN;i++) Table->insertColumn(0);
    setModel(Table->model());
    setView(Table);
    ItemDelegate.ComboBox=this;
    setItemDelegate(&ItemDelegate);
    ((QTableWidget *)view())->setVerticalScrollBarPolicy(Qt::ScrollBarAlwaysOn);
    ((QTableWidget *)view())->verticalHeader()->setDefaultSectionSize(THUMB_THUMBHEIGHT+DECAL*2);
    ((QTableWidget *)view())->horizontalHeader()->setDefaultSectionSize(THUMB_THUMBWITH+DECAL*2);
    ((QTableWidget *)view())->setFixedWidth((THUMB_THUMBWITH+DECAL*2)*NBRCOLUMN+18);
    connect(Table,SIGNAL(itemSelectionChanged()),this,SLOT(s_ItemSelectionChanged()));
    setIconSize(QSize(THUMB_THUMBWITH,THUMB_THUMBHEIGHT));
}

//========================================================================================================================

void cThumbnailComboBox::PrepareTable(bool AllowCustomized,cModelList *Table) {
    ModelTable=Table;

    int CurIndex  =((QTableWidget *)view())->currentRow()*NBRCOLUMN+((QTableWidget *)view())->currentColumn();
    while (count()>0) removeItem(count()-1);
    int NbrItem=ModelTable->List.count();
    if ((!AllowCustomized)&&(ModelTable->List.count()>0)&&(ModelTable->List[ModelTable->List.count()-1]->Name=="*")) NbrItem--;
    int NbrRow=NbrItem/NBRCOLUMN;
    if (NbrRow*NBRCOLUMN<NbrItem) NbrRow++;

    for (int i=0;i<NbrRow;i++)
        addItem(QIcon(QPixmap().fromImage(ModelTable->List[i*NBRCOLUMN]->PrepareImage(0,Diaporama,ModelTable->List[i*NBRCOLUMN]->Name=="*"?ProjectThumbnail:NULL))),"");

    ((QTableWidget *)view())->setCurrentCell(CurIndex/NBRCOLUMN,CurIndex-(CurIndex/NBRCOLUMN)*NBRCOLUMN);
    setCurrentIndex(CurIndex/NBRCOLUMN);
}

//========================================================================================================================

void cThumbnailComboBox::hidePopup() {
    QComboBox::hidePopup();
    emit itemSelectionHaveChanged();
    MakeIcons();
    CurrentSel=((QTableWidget *)view())->currentRow()*NBRCOLUMN+((QTableWidget *)view())->currentColumn();
    if (CurrentSel>=ModelTable->List.count()) CurrentSel=ModelTable->List.count()-1;
}

//========================================================================================================================

void cThumbnailComboBox::keyReleaseEvent(QKeyEvent *event) {
    int CurIndex=((QTableWidget *)view())->currentRow()*NBRCOLUMN+((QTableWidget *)view())->currentColumn();
    int aCurIndex=CurIndex;
    if ((event->key()==Qt::Key_Right)||(event->key()==Qt::Key_Down)) {
        if (CurIndex<ModelTable->List.count()-1) CurIndex++;
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

void cThumbnailComboBox::MakeIcons() {
    if (!ModelTable) return;
    int CurrentRow=currentIndex();
    if (CurrentRow<0) return;
    int CurrentCol=((QTableWidget *)view())->currentColumn();
    if (CurrentCol<0) CurrentCol=0;
    int CurIndex=CurrentRow*NBRCOLUMN+CurrentCol;
    if (CurIndex<ModelTable->List.count()) setItemIcon(CurrentRow,QIcon(QPixmap().fromImage(ModelTable->List[CurIndex]->PrepareImage(0,Diaporama,ModelTable->List[CurIndex]->Name=="*"?ProjectThumbnail:NULL))));
}

//========================================================================================================================

void cThumbnailComboBox::s_ItemSelectionChanged() {
    STOPMAJ=true;
    setCurrentIndex(((QTableWidget *)view())->currentRow());
    MakeIcons();
    emit currentIndexChanged(((QTableWidget *)view())->currentRow()*NBRCOLUMN+((QTableWidget *)view())->currentColumn());
    STOPMAJ=false;
}

//========================================================================================================================

void cThumbnailComboBox::SetCurrentModel(QString ModelName) {
    if (STOPMAJ) return;
    CurrentSel=ModelTable->SearchModel(ModelName);
    ((QTableWidget *)view())->setCurrentCell(CurrentSel/NBRCOLUMN,CurrentSel-(CurrentSel/NBRCOLUMN)*NBRCOLUMN);
    setCurrentIndex(CurrentSel/NBRCOLUMN);
    MakeIcons();
}

//========================================================================================================================

QString cThumbnailComboBox::GetCurrentModel() {
    CurrentSel=((QTableWidget *)view())->currentRow()*NBRCOLUMN+((QTableWidget *)view())->currentColumn();
    if (CurrentSel>=ModelTable->List.count()) CurrentSel=ModelTable->List.count()-1;
    if ((CurrentSel>=0)&&(CurrentSel<ModelTable->List.count())) return ModelTable->List[CurrentSel]->Name;
    return "";
}
