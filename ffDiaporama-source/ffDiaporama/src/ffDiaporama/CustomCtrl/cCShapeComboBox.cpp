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

#include "cCShapeComboBox.h"
#include <QPainter>
#include <QKeyEvent>
#include "engine/_Diaporama.h"

//******************************************************************************************************************
// Custom QAbstractItemDelegate for AutoFraming ComboBox
//******************************************************************************************************************
#define AutoFrameShapeComboBoxIMAGEWIDTH   48
#define AutoFrameShapeComboBoxNBRCOLUMN    8

cCShapeComboBoxItem::cCShapeComboBoxItem(QObject *parent):QStyledItemDelegate(parent) {
}

//========================================================================================================================
void cCShapeComboBoxItem::paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const {
    int CurIndex=index.row()*AutoFrameShapeComboBoxNBRCOLUMN+index.column();
    int CurrentFramingStyle=0;
    while ((CurrentFramingStyle<ComboBox->FrameShapeTable.count())&&(ComboBox->CurrentFramingStyle!=ComboBox->FrameShapeTable.at(CurrentFramingStyle).FrameStyle)) CurrentFramingStyle++;

    if ((CurIndex>=0)&&(CurIndex<ComboBox->FrameShapeTable.count())) {
        painter->drawPixmap(option.rect.left(),option.rect.top(),QPixmap().fromImage(((cFrameShapeTableItem)ComboBox->FrameShapeTable.at(CurIndex)).Image));
    } else {
        painter->fillRect(option.rect,Qt::white);
    }
    if (index.row()*((QTableWidget *)ComboBox->view())->columnCount()+index.column()==CurrentFramingStyle) {
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

QSize cCShapeComboBoxItem::sizeHint(const QStyleOptionViewItem &/*option*/,const QModelIndex &/*index*/) const {
    return QSize(AutoFrameShapeComboBoxIMAGEWIDTH,AutoFrameShapeComboBoxIMAGEWIDTH);
}

//========================================================================================================================

cFrameShapeTableItem::cFrameShapeTableItem(QImage *Image,int FrameStyle) {
    this->Image     =*Image;
    this->FrameStyle=FrameStyle;
}

//******************************************************************************************************************
// Custom Brush ComboBox
//******************************************************************************************************************

cCShapeComboBox::cCShapeComboBox(QWidget *parent):QComboBox(parent) {
    CurrentFilter       =-1;
    CurrentFramingStyle =-1;
    CurrentNbrITem      =-1;
    STOPMAJ             =false;

    QTableWidget    *Table=new QTableWidget();
    Table->horizontalHeader()->hide();
    Table->verticalHeader()->hide();
    for (int i=0;i<AutoFrameShapeComboBoxNBRCOLUMN;i++) {
        Table->insertColumn(0);
        Table->setColumnWidth(0,AutoFrameShapeComboBoxIMAGEWIDTH);
    }
    setModel(Table->model());
    setView(Table);
    ItemDelegate.ComboBox=this;
    setItemDelegate(&ItemDelegate);
    this->view()->setVerticalScrollBarPolicy(Qt::ScrollBarAlwaysOn);
    this->view()->setFixedWidth(AutoFrameShapeComboBoxIMAGEWIDTH*AutoFrameShapeComboBoxNBRCOLUMN+18);
    connect(Table,SIGNAL(itemSelectionChanged()),this,SLOT(s_ItemSelectionChanged()));
}

//========================================================================================================================

void cCShapeComboBox::hidePopup() {
    QComboBox::hidePopup();
    emit itemSelectionHaveChanged();
    MakeIcons();
    CurrentFramingStyle=GetCurrentFrameShape();
}

//========================================================================================================================

void cCShapeComboBox::keyReleaseEvent(QKeyEvent *event) {
    int CurIndex=((QTableWidget *)view())->currentRow()*AutoFrameShapeComboBoxNBRCOLUMN+((QTableWidget *)view())->currentColumn();
    int aCurIndex=CurIndex;
    if ((event->key()==Qt::Key_Right)||(event->key()==Qt::Key_Down)) {
        if (CurIndex<FrameShapeTable.count()-1) CurIndex++;
    } else if ((event->key()==Qt::Key_Left)||(event->key()==Qt::Key_Up)) {
        if (CurIndex>0) CurIndex--;
    } else QComboBox::keyReleaseEvent(event);
    if (aCurIndex!=CurIndex) {
        STOPMAJ=true;
        ((QTableWidget *)view())->setCurrentCell(CurIndex/AutoFrameShapeComboBoxNBRCOLUMN,CurIndex-(CurIndex/AutoFrameShapeComboBoxNBRCOLUMN)*AutoFrameShapeComboBoxNBRCOLUMN);
        setCurrentIndex(CurIndex/AutoFrameShapeComboBoxNBRCOLUMN);
        MakeIcons();
        STOPMAJ=false;
        emit itemSelectionHaveChanged();
    }
}

//========================================================================================================================

void cCShapeComboBox::PrepareFrameShapeTable(bool ResetContent,int Filter,int CurrentBackgroundForm) {
    if ((CurrentBackgroundForm>=SHAPEFORM_TRIANGLEUP)&&(CurrentBackgroundForm<=SHAPEFORM_TRIANGLELEFT)) Filter=Filter|FILTERFRAMESHAPE_OLDTRIANGLE;
    FrameShapeTable.clear();
    for (int i=0;i<NBR_SHAPEFORM;i++) {
        bool ToAdd=ShapeFormDefinition.at(i).Enable;
        if ((i>=SHAPEFORM_TRIANGLEUP)&&(i<=SHAPEFORM_TRIANGLELEFT)) ToAdd=((Filter & FILTERFRAMESHAPE_OLDTRIANGLE)>0);
        if (ToAdd) {
            cCompositionObject Object(COMPOSITIONTYPE_BACKGROUND,0,/*ApplicationConfig*/NULL,this);
            Object.x                        =0.1;
            Object.y                        =0.1;
            Object.w                        =0.8;
            Object.h                        =0.8;
            Object.BackgroundForm           =i;
            Object.Opacity                  =4;
            Object.PenSize                  =1;
            Object.PenStyle                 =Qt::SolidLine;
            Object.PenColor                 ="#000000";
            Object.BackgroundBrush->ColorD  ="#FFFFFF";
            Object.BackgroundBrush->BrushType=BRUSHTYPE_SOLID;
            QImage   Image(QSize(AutoFrameShapeComboBoxIMAGEWIDTH,AutoFrameShapeComboBoxIMAGEWIDTH),QImage::Format_ARGB32);
            QPainter Painter;
            Painter.begin(&Image);
            Painter.fillRect(QRect(0,0,AutoFrameShapeComboBoxIMAGEWIDTH,AutoFrameShapeComboBoxIMAGEWIDTH),"#ffffff");
            Object.DrawCompositionObject(NULL,&Painter,1,AutoFrameShapeComboBoxIMAGEWIDTH,AutoFrameShapeComboBoxIMAGEWIDTH,true,0,NULL,1,1,NULL,false,0,false);
            Painter.end();
            FrameShapeTable.append(cFrameShapeTableItem(&Image,i));
        }
    }

    if (ResetContent || (CurrentFilter!=Filter) || (CurrentNbrITem!=FrameShapeTable.count())) {
        CurrentFilter =Filter;
        CurrentNbrITem=FrameShapeTable.count();
        int CurIndex  =((QTableWidget *)view())->currentRow()*AutoFrameShapeComboBoxNBRCOLUMN+((QTableWidget *)view())->currentColumn();
        while (count()>0) removeItem(count()-1);
        int NbrItem=FrameShapeTable.count();
        int NbrRow=NbrItem/AutoFrameShapeComboBoxNBRCOLUMN;
        if (NbrRow*AutoFrameShapeComboBoxNBRCOLUMN<NbrItem) NbrRow++;
        for (int i=0;i<NbrRow;i++) {
            addItem(QIcon(QPixmap().fromImage(FrameShapeTable.at(i).Image.scaled(this->iconSize().width(),this->iconSize().height()))),ShapeFormDefinition.at(FrameShapeTable.at(i).FrameStyle).Name);
            ((QTableWidget *)view())->setRowHeight(((QTableWidget *)view())->rowCount()-1,AutoFrameShapeComboBoxIMAGEWIDTH);
        }
        ((QTableWidget *)view())->setCurrentCell(CurIndex/AutoFrameShapeComboBoxNBRCOLUMN,CurIndex-(CurIndex/AutoFrameShapeComboBoxNBRCOLUMN)*AutoFrameShapeComboBoxNBRCOLUMN);
        setCurrentIndex(CurIndex/AutoFrameShapeComboBoxNBRCOLUMN);
    }
}

//========================================================================================================================

void cCShapeComboBox::SetCurrentFrameShape(int FrameShape) {
    if (STOPMAJ) return;
    CurrentFramingStyle=FrameShape;
    int Index=0;
    while ((Index<FrameShapeTable.count())&&(FrameShape!=FrameShapeTable.at(Index).FrameStyle)) Index++;
    if (Index<FrameShapeTable.count()) {
        STOPMAJ=true;
        ((QTableWidget *)view())->setCurrentCell(Index/AutoFrameShapeComboBoxNBRCOLUMN,Index-(Index/AutoFrameShapeComboBoxNBRCOLUMN)*AutoFrameShapeComboBoxNBRCOLUMN);
        setCurrentIndex(Index/AutoFrameShapeComboBoxNBRCOLUMN);
        MakeIcons();
        STOPMAJ=false;
    }
}

//========================================================================================================================

int cCShapeComboBox::GetCurrentFrameShape() {
    int CurIndex=((QTableWidget *)view())->currentRow()*AutoFrameShapeComboBoxNBRCOLUMN+((QTableWidget *)view())->currentColumn();
    if ((CurIndex>=0)&&(CurIndex<FrameShapeTable.count())) return FrameShapeTable.at(CurIndex).FrameStyle;
    return 0;
}

//========================================================================================================================

void cCShapeComboBox::MakeIcons() {
    int CurIndex=((QTableWidget *)view())->currentRow()*AutoFrameShapeComboBoxNBRCOLUMN+((QTableWidget *)view())->currentColumn();
    if ((CurIndex>=0)&&(CurIndex<FrameShapeTable.count())) {
        cCompositionObject Object(COMPOSITIONTYPE_BACKGROUND,0,/*ApplicationConfig*/NULL,this);
        Object.x                        =0.05;
        Object.y                        =0.05;
        Object.w                        =0.9;
        Object.h                        =0.9;
        Object.BackgroundForm           =FrameShapeTable.at(CurIndex).FrameStyle;
        Object.Opacity                  =4;
        Object.PenSize                  =1;
        Object.PenStyle                 =Qt::SolidLine;
        Object.PenColor                 ="#000000";
        Object.BackgroundBrush->ColorD  ="#FFFFFF";
        Object.BackgroundBrush->BrushType=BRUSHTYPE_SOLID;
        QPixmap  Image(this->iconSize());
        QPainter Painter;
        Painter.begin(&Image);
        Painter.fillRect(QRect(0,0,this->iconSize().width(),this->iconSize().height()),"#ffffff");
        Object.DrawCompositionObject(NULL,&Painter,1,this->iconSize().width(),this->iconSize().height(),true,0,NULL,1,1,NULL,false,0,false);
        Painter.end();
        setItemIcon(((QTableWidget *)view())->currentRow(),QIcon(Image));
        setItemText(((QTableWidget *)view())->currentRow(),ShapeFormDefinition.at(FrameShapeTable.at(CurIndex).FrameStyle).Name);
    }
}

//========================================================================================================================

void cCShapeComboBox::s_ItemSelectionChanged() {
    if (STOPMAJ) return;
    int CurIndex=((QTableWidget *)view())->currentRow()*AutoFrameShapeComboBoxNBRCOLUMN+((QTableWidget *)view())->currentColumn();
    if ((CurIndex>=0)&&(CurIndex<FrameShapeTable.count())) {
        STOPMAJ=true;
        setCurrentIndex(((QTableWidget *)view())->currentRow());
        emit currentIndexChanged(((QTableWidget *)view())->currentRow());
        ((QTableWidget *)view())->setToolTip(ShapeFormDefinition.at(FrameShapeTable.at(CurIndex).FrameStyle).Name);
        STOPMAJ=false;
    }
}
