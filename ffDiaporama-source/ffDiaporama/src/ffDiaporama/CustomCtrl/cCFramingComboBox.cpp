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

#include "cCFramingComboBox.h"

//******************************************************************************************************************
// Custom QAbstractItemDelegate for AutoFraming ComboBox
//******************************************************************************************************************
#define AutoFramingComboBoxIMAGEWIDTH   128
#define AutoFramingComboBoxNBRCOLUMN    3

cCFramingComboBoxItem::cCFramingComboBoxItem(QObject *parent):QStyledItemDelegate(parent) {
}

//========================================================================================================================
void cCFramingComboBoxItem::paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const {
    int CurIndex=index.row()*AutoFramingComboBoxNBRCOLUMN+index.column();
    int CurrentFramingStyle=0;
    while ((CurrentFramingStyle<ComboBox->FramingStyleTable.count())&&(ComboBox->CurrentFramingStyle!=ComboBox->FramingStyleTable.at(CurrentFramingStyle).FrameStyle)) CurrentFramingStyle++;

    if ((CurIndex>=0)&&(CurIndex<ComboBox->FramingStyleTable.count())) {
        painter->drawPixmap(option.rect.left(),option.rect.top(),QPixmap().fromImage(((cFramingStyleTableItem)ComboBox->FramingStyleTable.at(CurIndex)).Image));
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

QSize cCFramingComboBoxItem::sizeHint(const QStyleOptionViewItem &/*option*/,const QModelIndex &/*index*/) const {
    return QSize(AutoFramingComboBoxIMAGEWIDTH,AutoFramingComboBoxIMAGEWIDTH);
}

//========================================================================================================================

cFramingStyleTableItem::cFramingStyleTableItem(QImage *Image,int FrameStyle) {
    this->Image=*Image;
    this->FrameStyle=FrameStyle;
}

//******************************************************************************************************************
// Custom Brush ComboBox
//******************************************************************************************************************

cCFramingComboBox::cCFramingComboBox(QWidget *parent):QComboBox(parent) {
    CurrentFilter       =-1;
    CurrentFramingStyle =-1;
    CurrentNbrITem      =-1;
    STOPMAJ             =false;

    QTableWidget    *Table=new QTableWidget();
    Table->horizontalHeader()->hide();
    Table->verticalHeader()->hide();
    for (int i=0;i<AutoFramingComboBoxNBRCOLUMN;i++) {
        Table->insertColumn(0);
        Table->setColumnWidth(0,AutoFramingComboBoxIMAGEWIDTH);
    }
    setModel(Table->model());
    setView(Table);
    ItemDelegate.ComboBox=this;
    setItemDelegate(&ItemDelegate);
    this->view()->setFixedWidth(AutoFramingComboBoxIMAGEWIDTH*AutoFramingComboBoxNBRCOLUMN+18);
    this->view()->setVerticalScrollBarPolicy(Qt::ScrollBarAlwaysOn);
    connect(Table,SIGNAL(itemSelectionChanged()),this,SLOT(s_ItemSelectionChanged()));
}

//========================================================================================================================

void cCFramingComboBox::hidePopup() {
    QComboBox::hidePopup();
    if (isVisible()) {
        emit itemSelectionHaveChanged();
        MakeIcons();
    }
    CurrentFramingStyle=GetCurrentFraming();
}

//========================================================================================================================

void cCFramingComboBox::keyReleaseEvent(QKeyEvent *event) {
    int CurIndex=((QTableWidget *)view())->currentRow()*AutoFramingComboBoxNBRCOLUMN+((QTableWidget *)view())->currentColumn();
    int aCurIndex=CurIndex;
    if ((event->key()==Qt::Key_Right)||(event->key()==Qt::Key_Down)) {
        if (CurIndex<FramingStyleTable.count()-1) CurIndex++;
    } else if ((event->key()==Qt::Key_Left)||(event->key()==Qt::Key_Up)) {
        if (CurIndex>0) CurIndex--;
    } else QComboBox::keyReleaseEvent(event);
    if (aCurIndex!=CurIndex) {
        STOPMAJ=true;
        ((QTableWidget *)view())->setCurrentCell(CurIndex/AutoFramingComboBoxNBRCOLUMN,CurIndex-(CurIndex/AutoFramingComboBoxNBRCOLUMN)*AutoFramingComboBoxNBRCOLUMN);
        setCurrentIndex(CurIndex/AutoFramingComboBoxNBRCOLUMN);
        MakeIcons();
        STOPMAJ=false;
        emit itemSelectionHaveChanged();
    }
}

//========================================================================================================================

void cCFramingComboBox::PrepareFramingStyleTable(bool ResetContent,int Filter,cBrushDefinition *Brush,QImage *SourceImage,int BackgroundForm,qreal ProjectGeometry) {
    qreal   maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    QImage  *Image=Brush->ImageToWorkspace(SourceImage,AutoFramingComboBoxIMAGEWIDTH,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4);

    int  AutoFraming  =Brush->GetCurrentFramingStyle(ProjectGeometry);
    bool AllowInternal=(int(Brush->ImageRotation/90)!=(Brush->ImageRotation/90));
    if (AllowInternal) Filter|=FILTERFRAMING_INTERNAL;
    qreal ImageGeometry=(qreal(SourceImage->height())/qreal(SourceImage->width()));
    if (ProjectGeometry==ImageGeometry) Filter=Filter & (~FILTERFRAMING_PROJECT);
    FramingStyleTable.clear();
    for (int i=0;i<NBR_AUTOFRAMING;i++) {
        bool ToAdd=(AutoFraming==i);
        if (!ToAdd) switch (i) {
            case AUTOFRAMING_CUSTOMUNLOCK   :   if ((Filter & FILTERFRAMING_CUSTOM)>0)                                                                      ToAdd=true;     break;
            case AUTOFRAMING_CUSTOMLOCK     :   if ((Filter & FILTERFRAMING_CUSTOM)>0)                                                                      ToAdd=true;     break;
            case AUTOFRAMING_CUSTOMIMGLOCK  :   if (((Filter & (FILTERFRAMING_IMAGE|FILTERFRAMING_CUSTOM))==(FILTERFRAMING_IMAGE|FILTERFRAMING_CUSTOM)))    ToAdd=true;     break;
            case AUTOFRAMING_CUSTOMPRJLOCK  :   if ((Filter & (FILTERFRAMING_PROJECT|FILTERFRAMING_CUSTOM))==(FILTERFRAMING_PROJECT|FILTERFRAMING_CUSTOM))  ToAdd=true;     break;
            case AUTOFRAMING_FULLMAX        :   if (((Filter & FILTERFRAMING_IMAGE)>0))                                                                     ToAdd=true;     break;
            case AUTOFRAMING_FULLMIN        :   if (((Filter & FILTERFRAMING_IMAGE)>0)&&(AllowInternal))                                                    ToAdd=true;     break;
            case AUTOFRAMING_HEIGHTLEFTMAX  :   if (((Filter & FILTERFRAMING_PROJECT)>0)&&(ProjectGeometry>ImageGeometry))                                  ToAdd=true;     break;
            case AUTOFRAMING_HEIGHTLEFTMIN  :   if (((Filter & FILTERFRAMING_PROJECT)>0)&&(ProjectGeometry>ImageGeometry)&&(AllowInternal))                 ToAdd=true;     break;
            case AUTOFRAMING_HEIGHTMIDLEMAX :   if (((Filter & FILTERFRAMING_PROJECT)>0))                                                                   ToAdd=true;     break;
            case AUTOFRAMING_HEIGHTMIDLEMIN :   if (((Filter & FILTERFRAMING_PROJECT)>0)&&(AllowInternal))                                                  ToAdd=true;     break;
            case AUTOFRAMING_HEIGHTRIGHTMAX :   if (((Filter & FILTERFRAMING_PROJECT)>0)&&(ProjectGeometry>ImageGeometry))                                  ToAdd=true;     break;
            case AUTOFRAMING_HEIGHTRIGHTMIN :   if (((Filter & FILTERFRAMING_PROJECT)>0)&&(ProjectGeometry>ImageGeometry)&&(AllowInternal))                 ToAdd=true;     break;
            case AUTOFRAMING_WIDTHTOPMAX    :   if (((Filter & FILTERFRAMING_PROJECT)>0)&&(ProjectGeometry<ImageGeometry))                                  ToAdd=true;     break;
            case AUTOFRAMING_WIDTHTOPMIN    :   if (((Filter & FILTERFRAMING_PROJECT)>0)&&(ProjectGeometry<ImageGeometry)&&(AllowInternal))                 ToAdd=true;     break;
            case AUTOFRAMING_WIDTHMIDLEMAX  :   if (((Filter & FILTERFRAMING_PROJECT)>0))                                                                   ToAdd=true;     break;
            case AUTOFRAMING_WIDTHMIDLEMIN  :   if (((Filter & FILTERFRAMING_PROJECT)>0)&&(AllowInternal))                                                  ToAdd=true;     break;
            case AUTOFRAMING_WIDTHBOTTOMMAX :   if (((Filter & FILTERFRAMING_PROJECT)>0)&&(ProjectGeometry<ImageGeometry))                                  ToAdd=true;     break;
            case AUTOFRAMING_WIDTHBOTTOMMIN :   if (((Filter & FILTERFRAMING_PROJECT)>0)&&(ProjectGeometry<ImageGeometry)&&(AllowInternal))                 ToAdd=true;     break;
        }
        if (ToAdd) {
            QImage CurImage=Image->copy();
            Brush->ApplyMaskToImageToWorkspace(&CurImage,i,BackgroundForm,AutoFramingComboBoxIMAGEWIDTH,maxw,maxh,minw,minh,X,Y,ZoomFactor,AspectRatio,ProjectGeometry);
            FramingStyleTable.append(cFramingStyleTableItem(&CurImage,i));
        }
    }

    if (ResetContent || (CurrentFilter!=Filter) || (CurrentNbrITem!=FramingStyleTable.count())) {
        CurrentFilter =Filter;
        CurrentNbrITem=FramingStyleTable.count();
        int CurIndex  =((QTableWidget *)view())->currentRow()*AutoFramingComboBoxNBRCOLUMN+((QTableWidget *)view())->currentColumn();
        while (count()>0) removeItem(count()-1);
        int NbrItem=FramingStyleTable.count();
        int NbrRow=NbrItem/AutoFramingComboBoxNBRCOLUMN;
        if (NbrRow*AutoFramingComboBoxNBRCOLUMN<NbrItem) NbrRow++;
        for (int i=0;i<NbrRow;i++) {
            addItem(QIcon(AUTOFRAMING_ICON_GEOMETRY_IMAGE),"");    //automaticaly do a Table->insertRow(Table->rowCount());
            ((QTableWidget *)view())->setRowHeight(((QTableWidget *)view())->rowCount()-1,AutoFramingComboBoxIMAGEWIDTH);
        }
        ((QTableWidget *)view())->setCurrentCell(CurIndex/AutoFramingComboBoxNBRCOLUMN,CurIndex-(CurIndex/AutoFramingComboBoxNBRCOLUMN)*AutoFramingComboBoxNBRCOLUMN);
        setCurrentIndex(CurIndex/AutoFramingComboBoxNBRCOLUMN);
    }
    delete Image;
}

//========================================================================================================================

void cCFramingComboBox::SetCurrentFraming(int AutoFraming) {
    if (STOPMAJ) return;
    CurrentFramingStyle=AutoFraming;
    int Index=0;
    while ((Index<FramingStyleTable.count())&&(AutoFraming!=FramingStyleTable.at(Index).FrameStyle)) Index++;
    if (Index<FramingStyleTable.count()) {
        STOPMAJ=true;
        ((QTableWidget *)view())->setCurrentCell(Index/AutoFramingComboBoxNBRCOLUMN,Index-(Index/AutoFramingComboBoxNBRCOLUMN)*AutoFramingComboBoxNBRCOLUMN);
        setCurrentIndex(Index/AutoFramingComboBoxNBRCOLUMN);
        MakeIcons();
        STOPMAJ=false;
    }
}

//========================================================================================================================

int cCFramingComboBox::GetCurrentFraming() {
    int CurIndex=((QTableWidget *)view())->currentRow()*AutoFramingComboBoxNBRCOLUMN+((QTableWidget *)view())->currentColumn();
    if ((CurIndex>=0)&&(CurIndex<FramingStyleTable.count())) return FramingStyleTable.at(CurIndex).FrameStyle;
    return -1;
}

//========================================================================================================================

void cCFramingComboBox::MakeIcons() {
    int CurIndex=((QTableWidget *)view())->currentRow()*AutoFramingComboBoxNBRCOLUMN+((QTableWidget *)view())->currentColumn();
    if ((CurIndex>=0)&&(CurIndex<FramingStyleTable.count())) {
        QIcon IconGeoImage;
        switch (AUTOFRAMINGDEF[FramingStyleTable.at(CurIndex).FrameStyle].GeometryType) {
            case AUTOFRAMING_GEOMETRY_CUSTOM :  IconGeoImage=FramingStyleTable.at(CurIndex).FrameStyle==AUTOFRAMING_CUSTOMUNLOCK?QIcon(AUTOFRAMING_ICON_GEOMETRY_UNLOCKED):
                                                                                                        QIcon(AUTOFRAMING_ICON_GEOMETRY_LOCKED);       break;
            case AUTOFRAMING_GEOMETRY_PROJECT : IconGeoImage=QIcon(AUTOFRAMING_ICON_GEOMETRY_PROJECT);                                                 break;
            case AUTOFRAMING_GEOMETRY_IMAGE :   IconGeoImage=QIcon(AUTOFRAMING_ICON_GEOMETRY_IMAGE);                                                   break;
        }
        setItemIcon(((QTableWidget *)view())->currentRow(),IconGeoImage);
        setItemText(((QTableWidget *)view())->currentRow(),AUTOFRAMINGDEF[FramingStyleTable.at(CurIndex).FrameStyle].ToolTip);
    }
}

//========================================================================================================================

void cCFramingComboBox::s_ItemSelectionChanged() {
    int CurIndex=((QTableWidget *)view())->currentRow()*AutoFramingComboBoxNBRCOLUMN+((QTableWidget *)view())->currentColumn();
    if ((CurIndex>=0)&&(CurIndex<FramingStyleTable.count())) {
        STOPMAJ=true;
        setCurrentIndex(((QTableWidget *)view())->currentRow());
        emit currentIndexChanged(((QTableWidget *)view())->currentRow());
        ((QTableWidget *)view())->setToolTip(AUTOFRAMINGDEF[FramingStyleTable.at(CurIndex).FrameStyle].ToolTip);
        STOPMAJ=false;
    }
}
