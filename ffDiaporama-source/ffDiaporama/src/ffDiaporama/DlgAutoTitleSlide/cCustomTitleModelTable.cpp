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

#include "cCustomTitleModelTable.h"

QMutex  CustomTitleModelTableLockPaint;    // Mutex used to control multithreaded operations

class cCustomTitleModelItem : public QStyledItemDelegate {
//Q_OBJECT
public:
    cCustomTitleModelTable *Table;

    explicit cCustomTitleModelItem(QObject *parent=0);

    virtual void    paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const;
    virtual QSize   sizeHint(const QStyleOptionViewItem &option,const QModelIndex &index) const;
};

//========================================================================================================================

cCustomTitleModelItem::cCustomTitleModelItem(QObject *parent):QStyledItemDelegate(parent) {
    Table=(cCustomTitleModelTable *)parent;
}

//========================================================================================================================

void cCustomTitleModelItem::paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const {
    if (!CustomTitleModelTableLockPaint.tryLock()) return;
    if ((!Table->ApplicationConfig)||(Table->InModifTable)) return;

    int             CurIndex=index.row()*Table->columnCount()+index.column();
    QModelIndexList SelList =Table->selectionModel()->selectedIndexes();
    int             CurSelIndex=SelList.count()>0?SelList[0].row()*Table->columnCount()+SelList[0].column():-1;

    if ((CurIndex==CurSelIndex)&&(CurIndex<Table->ModelTable->List.count())) painter->fillRect(option.rect,Qt::blue); else painter->fillRect(option.rect,Qt::white);

    if ((CurIndex>=0)&&(CurIndex<Table->ModelTable->List.count())) {

        painter->drawImage(option.rect.left()+10,option.rect.top()+10,
                           Table->ModelTable->List[CurIndex]->PrepareImage((Table->TimerPosition % Table->ModelTable->List[CurIndex]->Duration),NULL,Table->CurrentSlide));

        QString ModelDuration=QTime(0,0,0,0).addMSecs(Table->ModelTable->List[CurIndex]->Duration).toString("mm:ss.zzz");
        int    FontFactor=((Table->ApplicationConfig->TimelineHeight-TIMELINEMINHEIGH)/20)*10;
        QFont  font= QApplication::font();
        QPen   Pen;

        painter->setFont(font);
        #ifdef Q_OS_WIN
        font.setPointSizeF(double(110+FontFactor)/double(painter->fontMetrics().boundingRect("0").height()));                  // Scale font
        #else
        font.setPointSizeF((double(140+FontFactor)/double(painter->fontMetrics().boundingRect("0").height()))*ScreenFontAdjust);// Scale font
        #endif
        painter->setFont(font);

        Pen.setWidth(1);
        Pen.setStyle(Qt::SolidLine);
        Pen.setColor(Qt::black);
        painter->setPen(Pen);
        painter->drawText(QRect(option.rect.left()+1,option.rect.top()+1,option.rect.width()-1,option.rect.height()-1),ModelDuration,Qt::AlignCenter|Qt::AlignBottom);
        Pen.setColor(Qt::white);
        painter->setPen(Pen);
        painter->drawText(QRect(option.rect.left(),option.rect.top(),option.rect.width()-1,option.rect.height()-1),ModelDuration,Qt::AlignCenter|Qt::AlignBottom);
    }
    CustomTitleModelTableLockPaint.unlock();
}

//========================================================================================================================

QSize cCustomTitleModelItem::sizeHint(const QStyleOptionViewItem &/*option*/,const QModelIndex &/*index*/) const {
    return QSize(Table->ModelTable->ThumbnailSize.width()+20,Table->ModelTable->ThumbnailSize.height()+20);
}

//====================================================================================================================

cCustomTitleModelTable::cCustomTitleModelTable(QWidget *parent):QTableWidget(parent) {
    ApplicationConfig=NULL;
    ModelTable       =NULL;
    TimerPosition    =0;
    CurrentSlide     =NULL;
    DefaultModel     =model();
    DefaultDelegate  =(QAbstractItemDelegate *)new cCustomTitleModelItem(this);
    InModifTable     =false;
    setItemDelegate(DefaultDelegate);
}

//====================================================================================================================

cCustomTitleModelTable::~cCustomTitleModelTable() {
    delete DefaultDelegate;
}

//====================================================================================================================

void cCustomTitleModelTable::resizeEvent(QResizeEvent *ev) {
    if (ModelTable) {

        QString Current=GetCurrentModel();
        // Update view
        int ColumnWidth   =ModelTable->ThumbnailSize.width()+20;
        int RowHeight     =ModelTable->ThumbnailSize.height()+20;
        int NewColumnCount=width()/ColumnWidth;                         if (NewColumnCount<=0) NewColumnCount=1;
        int NewRowCount   =ModelTable->List.count()/NewColumnCount;     if (NewRowCount*NewColumnCount<ModelTable->List.count()) NewRowCount++;

        if ((NewColumnCount!=columnCount())||(NewRowCount!=rowCount())) {
            setColumnCount(NewColumnCount);
            setRowCount(NewRowCount);
        }
        for (int i=0;i<columnCount();i++)  setColumnWidth(i,ColumnWidth);
        for (int i=0;i<rowCount();i++)     setRowHeight(i,RowHeight);

        SetCurrentModel(Current);
    }
    QTableWidget::resizeEvent(ev);
}

//====================================================================================================================

void cCustomTitleModelTable::mouseDoubleClickEvent(QMouseEvent *ev) {
    emit DoubleClickEvent(ev);
}

//====================================================================================================================

void cCustomTitleModelTable::showEvent(QShowEvent *ev) {
    if (ModelTable) {

        QString Current=GetCurrentModel();
        // Update view
        int ColumnWidth   =ModelTable->ThumbnailSize.width()+20;
        int RowHeight     =ModelTable->ThumbnailSize.height()+20;
        int NewColumnCount=width()/ColumnWidth;                         if (NewColumnCount<=0) NewColumnCount=1;
        int NewRowCount   =ModelTable->List.count()/NewColumnCount;     if (NewRowCount*NewColumnCount<ModelTable->List.count()) NewRowCount++;

        if ((NewColumnCount!=columnCount())||(NewRowCount!=rowCount())) {
            setColumnCount(NewColumnCount);
            setRowCount(NewRowCount);
        }
        for (int i=0;i<columnCount();i++)  setColumnWidth(i,ColumnWidth);
        for (int i=0;i<rowCount();i++)     setRowHeight(i,RowHeight);

        SetCurrentModel(Current);
    }

    QTableWidget::showEvent(ev);
}

//========================================================================================================================

void cCustomTitleModelTable::PrepareTable(cModelList *Table) {
    if (InModifTable) return;
    InModifTable=true;
    CustomTitleModelTableLockPaint.lock();
    this->setUpdatesEnabled(false);
    ModelTable=Table;
    int CurIndex=0;
    int NbrItem =ModelTable->List.count();
    int NbrCol  =this->viewport()->width()/ModelTable->ThumbnailSize.width();   if (NbrCol==0) NbrCol=1;
    int NbrRow  =NbrItem/NbrCol;
    if (NbrRow*NbrCol<NbrItem) NbrRow++;
    setColumnCount(NbrCol);
    setRowCount(NbrRow);
    setCurrentCell(CurIndex/NbrCol,CurIndex-(CurIndex/NbrCol)*NbrCol);
    for (int i=0;i<columnCount();i++)  setColumnWidth(i,ModelTable->ThumbnailSize.width()+20);
    for (int i=0;i<rowCount();i++)     setRowHeight(i,ModelTable->ThumbnailSize.height()+20);
    this->setUpdatesEnabled(true);
    InModifTable=false;
    CustomTitleModelTableLockPaint.unlock();
}

//========================================================================================================================

void cCustomTitleModelTable::SetCurrentModel(QString ModelName) {
    if (!ModelTable) return;
    CurrentSel=ModelTable->SearchModel(ModelName);
    setCurrentCell(CurrentSel/columnCount(),CurrentSel-(CurrentSel/columnCount())*columnCount());
}

//========================================================================================================================

QString cCustomTitleModelTable::GetCurrentModel() {
    if (!ModelTable) return "";
    CurrentSel=currentRow()*columnCount()+currentColumn();
    if (CurrentSel>=ModelTable->List.count()) CurrentSel=ModelTable->List.count()-1;
    if ((CurrentSel>=0)&&(CurrentSel<ModelTable->List.count())) return ModelTable->List[CurrentSel]->Name;
    return "";
}
