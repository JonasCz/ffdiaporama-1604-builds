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

#include "cCustomBlockTable.h"
#include <QStyledItemDelegate>
#include <QHeaderView>
#include <QTextDocument>
#include <QScrollBar>
#include "cTextFrame.h"

#define ICON_VISIBLE_OK                     ":/img/Visible_OK.png"
#define ICON_VISIBLE_KO                     ":/img/Visible_KO.png"
#define ICON_SOUND_OK                       ":/img/object_sound.png"
#define ICON_SOUND_KO                       ":/img/sound_KO.png"
#define ICON_HAVEFILTER                     ":/img/Transform.png"
#define ICON_INHERITDOWNLOCK                ":/img/inheritance_down_lock.png"
#define ICON_INHERITDOWNUNLOCK              ":/img/inheritance_down_unlock.png"

//********************************************************************************************************************************
// cBlockTableItemDelegate : Item delegate for block table
//********************************************************************************************************************************

class cBlockTableItemDelegate : public QStyledItemDelegate {
//Q_OBJECT
public:
    cCustomBlockTable  *ParentTable;

    explicit cBlockTableItemDelegate(QObject *parent);

    virtual void    paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const;
};

//========================================================================================================================

cBlockTableItemDelegate::cBlockTableItemDelegate(QObject *parent):QStyledItemDelegate(parent) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cBlockTableItemDelegate::cBlockTableItemDelegate");

    ParentTable=(cCustomBlockTable *)parent;
}

//========================================================================================================================

void cBlockTableItemDelegate::paint(QPainter *Painter,const QStyleOptionViewItem &option,const QModelIndex &index) const {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cBlockTableItemDelegate::paint");

    if ((ParentTable->CompositionList==NULL)||(index.row()>=ParentTable->rowCount())||(index.column()>=ParentTable->columnCount())||(index.row()>=ParentTable->CompositionList->List.count())) return;
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));

    // Display adjustement
    int     FontFactor=((((cApplicationConfig *)ParentTable->ApplicationConfig)->TimelineHeight-TIMELINEMINHEIGH)/20+1)*10;
    int     RowHeight =48+((((cApplicationConfig *)ParentTable->ApplicationConfig)->TimelineHeight-TIMELINEMINHEIGH)/20+1)*3;

    if (!ParentTable->CompositionList->List[index.row()]->IsVisible) Painter->setOpacity(0.5);


    cBaseMediaFile *MediaFile=ParentTable->CompositionList->List[index.row()]->BackgroundBrush->MediaObject;

    QImage Icon;

    if (MediaFile!=NULL) {

        QImage  *RenderImage=NULL;
        int     Position    =0;

        // Compute position of video
        if (MediaFile->ObjectType==OBJECTTYPE_VIDEOFILE) {
            for (int i=0;i<ParentTable->CurrentShotNbr;i++)
                for (int j=0;j<ParentTable->CurrentSlide->List[i]->ShotComposition.List.count();j++)
                    if (ParentTable->CurrentSlide->List[i]->ShotComposition.List[j]->IndexKey==ParentTable->CompositionList->List[index.row()]->IndexKey) {
                        if (ParentTable->CurrentSlide->List[i]->ShotComposition.List[j]->IsVisible) Position+=ParentTable->CurrentSlide->List[i]->StaticDuration;
            }
            RenderImage=((cVideoFile *)MediaFile)->ImageAt(true,Position+QTime(0,0,0,0).msecsTo(((cVideoFile *)MediaFile)->StartPos),NULL,ParentTable->CompositionList->List[index.row()]->BackgroundBrush->Deinterlace,1,false,false);
        } else RenderImage=MediaFile->ImageAt(true);

        if (RenderImage!=NULL) {
            // Create square workspace image
            qreal   maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
            QImage  *NewRenderImage=ParentTable->CompositionList->List[index.row()]->BackgroundBrush->ImageToWorkspace(RenderImage,RowHeight,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4);
            QRectF  CurSelRect     =QRectF(ParentTable->CompositionList->List[index.row()]->BackgroundBrush->X*RowHeight,
                                           ParentTable->CompositionList->List[index.row()]->BackgroundBrush->Y*RowHeight,
                                           ParentTable->CompositionList->List[index.row()]->BackgroundBrush->ZoomFactor*RowHeight,
                                           ParentTable->CompositionList->List[index.row()]->BackgroundBrush->ZoomFactor*ParentTable->CompositionList->List[index.row()]->BackgroundBrush->AspectRatio*RowHeight);
            ParentTable->CompositionList->List[index.row()]->BackgroundBrush->ApplyMaskToImageToWorkspace(NewRenderImage,CurSelRect,ParentTable->CompositionList->List[index.row()]->BackgroundForm,
                                                                                                          ParentTable->CompositionList->List[index.row()]->BackgroundBrush->GetCurrentFramingStyle(ParentTable->ProjectGeometry));

            // Create icon
            //Icon=(NewRenderImage->width()>NewRenderImage->height())?NewRenderImage->scaledToWidth(RowHeight):NewRenderImage->scaledToHeight(RowHeight);
            Icon=NewRenderImage->copy();
            delete RenderImage;
            delete NewRenderImage;
        }

    } else {
        if (ParentTable->CompositionList->List[index.row()]->TextClipArtName=="") Icon=ParentTable->TextIcon.copy();
            else Icon=TextFrameList.List[TextFrameList.SearchImage(ParentTable->CompositionList->List[index.row()]->TextClipArtName)].Icon.copy();
    }

    int         IconHeight  =RowHeight;
    int         IconWidth   =RowHeight+16;
    int         addX        =(IconHeight-(!Icon.isNull()?Icon.width():0))/2;
    int         addY        =(IconHeight-(!Icon.isNull()?Icon.height():0))/2;
    QFont       font;
    QTextOption OptionText;
    QPen        Pen;


    if ((ParentTable->CurrentShotNbr>0)&&(ParentTable->CompositionList->List[index.row()]->BlockInheritance))
        Painter->fillRect(QRect(option.rect.x(),option.rect.y(),option.rect.width(),option.rect.height()),QColor(Qt::lightGray));

    // Draw Icon
    if (!Icon.isNull()) Painter->drawImage(QRectF(option.rect.x()+1+addX,option.rect.y()+1+addY,Icon.width(),Icon.height()),Icon);

    // Visible or not visible
    Painter->drawImage(QRectF(option.rect.x()+1+RowHeight,option.rect.y()+1+2*(RowHeight/3),16,16),QImage(ParentTable->CompositionList->List[index.row()]->IsVisible?ICON_VISIBLE_OK:ICON_VISIBLE_KO));

    // With same as previous shot ?
    if (ParentTable->CurrentShotNbr>0) Painter->drawImage(QRectF(option.rect.x()+1+RowHeight,option.rect.y()+1,16,16),QImage(ParentTable->CompositionList->List[index.row()]->BlockInheritance?ICON_INHERITDOWNLOCK:ICON_INHERITDOWNUNLOCK));

    // With sound ?
    if ((ParentTable->CompositionList->List[index.row()]->BackgroundBrush->MediaObject)&&(ParentTable->CompositionList->List[index.row()]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)) {
        double SoundVolume=ParentTable->CompositionList->List[index.row()]->BackgroundBrush->SoundVolume;
        if (SoundVolume==-1) SoundVolume=1;
        Painter->drawImage(QRectF(option.rect.x()+1+RowHeight,option.rect.y()+1+RowHeight/3,16,16),QImage((SoundVolume!=0)?ICON_SOUND_OK:ICON_SOUND_KO));
    }

    // With filter ?
    if ((ParentTable->CompositionList->List[index.row()]->BackgroundBrush->GaussBlurSharpenSigma!=0)||
        (ParentTable->CompositionList->List[index.row()]->BackgroundBrush->QuickBlurSharpenSigma!=0)||
        (ParentTable->CompositionList->List[index.row()]->BackgroundBrush->Desat!=0)||
        (ParentTable->CompositionList->List[index.row()]->BackgroundBrush->Swirl!=0)||
        (ParentTable->CompositionList->List[index.row()]->BackgroundBrush->Implode!=0)||
        (ParentTable->CompositionList->List[index.row()]->BackgroundBrush->OnOffFilter!=0)
       ) Painter->drawImage(QRectF(option.rect.x()+1,option.rect.y()+RowHeight/2,24,24),QImage(ICON_HAVEFILTER));

    // Setup default brush
    Painter->setBrush(Qt::NoBrush);

    // Setup default pen
    Pen.setColor(Qt::black);
    Pen.setWidth(1);
    Pen.setStyle(Qt::SolidLine);
    Painter->setPen(Pen);

    // Init text to display in summary views
    if (MediaFile!=NULL) {
        QStringList TempExtProperties;
        ParentTable->ApplicationConfig->FilesTable->GetExtendedProperties(MediaFile->FileKey,&TempExtProperties);
        QStringList SummaryText=MediaFile->GetSummaryText(&TempExtProperties);
        // First line
        font=QFont("Sans serif",9,QFont::Bold,QFont::StyleNormal);          // First line use bold
        Painter->setFont(font);
        #ifdef Q_OS_WIN
        font.setPointSizeF(double(110+FontFactor)/double(Painter->fontMetrics().boundingRect("0").height()));                    // Scale font
        #else
        font.setPointSizeF((double(120+FontFactor)/double(Painter->fontMetrics().boundingRect("0").height()))*ScreenFontAdjust); // Scale font
        #endif
        Painter->setFont(font);

        OptionText=QTextOption(Qt::AlignLeft|Qt::AlignVCenter);                     // Setup alignement
        OptionText.setWrapMode(QTextOption::NoWrap);                                // Setup word wrap text option
        Painter->drawText(QRectF(option.rect.x()+IconWidth+2+2,option.rect.y()+1,option.rect.width()-IconWidth-3-2,14),SummaryText[0],OptionText);

        // Second line
        font=QFont("Sans serif",8,QFont::Normal,QFont::StyleNormal);
        font.setUnderline(false);
        Painter->setFont(font);
        #ifdef Q_OS_WIN
        font.setPointSizeF(double(100+FontFactor)/double(Painter->fontMetrics().boundingRect("0").height()));                  // Scale font
        #else
        font.setPointSizeF((double(100+FontFactor)/double(Painter->fontMetrics().boundingRect("0").height()))*ScreenFontAdjust);// Scale font
        #endif
        Painter->setFont(font);
        Painter->drawText(QRectF(option.rect.x()+IconWidth+2+2,option.rect.y()+1+(RowHeight/3),option.rect.width()-IconWidth-3-2,14),SummaryText[1],OptionText);

        // Third line
        Painter->drawText(QRectF(option.rect.x()+IconWidth+2+2,option.rect.y()+1+(RowHeight/3)*2,option.rect.width()-IconWidth-3-2,14),SummaryText[2],OptionText);

    } else {
        font=QFont("Sans serif",8,QFont::Normal,QFont::StyleNormal);
        font.setUnderline(false);
        Painter->setFont(font);
        #ifdef Q_OS_WIN
        font.setPointSizeF(double(100+FontFactor)/double(Painter->fontMetrics().boundingRect("0").height()));                  // Scale font
        #else
        font.setPointSizeF((double(100+FontFactor)/double(Painter->fontMetrics().boundingRect("0").height()))*ScreenFontAdjust);// Scale font
        #endif
        Painter->setFont(font);
        OptionText=QTextOption(Qt::AlignLeft|Qt::AlignVCenter);                     // Setup alignement
        OptionText.setWrapMode(QTextOption::NoWrap);                                // Setup word wrap text option
        QTextDocument   TextDoc;
        TextDoc.setHtml(ParentTable->CompositionList->List[index.row()]->Text);
        Painter->drawText(QRectF(option.rect.x()+IconWidth+2+2,option.rect.y()+1,option.rect.width()-IconWidth-3-2,IconHeight-2),TextDoc.toPlainText(),OptionText);
    }

    if (!ParentTable->CompositionList->List[index.row()]->IsVisible) Painter->setOpacity(1);

    // Selection mode (Note: MouseOver is removed because it works correctly only on KDE !)
    if (option.state & QStyle::State_Selected) {
        Painter->setPen(QPen(Qt::NoPen));
        Painter->setBrush(QBrush(Qt::blue));
        Painter->setOpacity(0.25);
        Painter->drawRect(option.rect.x(),option.rect.y(),option.rect.width(),option.rect.height());
        Painter->setOpacity(1);
    }

    //Drag & Drop operation
    if ((ParentTable->IsDragOn!=0)&&(ParentTable->DragItemDest!=ParentTable->DragItemSource)&&(ParentTable->DragItemDest!=ParentTable->DragItemSource+1)&&((index.row()==ParentTable->DragItemDest)||((index.row()==ParentTable->rowCount()-1)&&(index.row()==ParentTable->DragItemDest-1)))) {
        Painter->save();
        Pen.setColor(Qt::red);
        Pen.setStyle(Qt::SolidLine);
        Pen.setWidth(6);
        Painter->setPen(Pen);
        Painter->setBrush(Qt::NoBrush); //QBrush(QColor(WidgetSelection_Color)));
        Painter->setOpacity(0.5);
        if (index.row()==ParentTable->DragItemDest) Painter->drawLine(0,option.rect.y()+3,                     option.rect.width(),option.rect.y()+3);
            else                                    Painter->drawLine(0,option.rect.y()+option.rect.height()-3,option.rect.width(),option.rect.y()+option.rect.height()-3);
        Painter->setOpacity(1);
        Painter->restore();
    }
    QApplication::restoreOverrideCursor();
}

//********************************************************************************************************************************
// cCustomBlockTable : block table
//********************************************************************************************************************************

cCustomBlockTable::cCustomBlockTable(QWidget *parent):QTableWidget(parent) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cCustomBlockTable::cCustomBlockTable");

    CompositionList =NULL;
    CurrentSlide    =NULL;
    IsDragOn        =false;
    TextIcon        =QImage(":/img/MediaIcons/48x48/Text.png");

    setRowCount(0);

    setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Expanding);
    setVerticalScrollBarPolicy(Qt::ScrollBarAlwaysOn);
    setWordWrap(false);                 // Ensure no word wrap
    setTextElideMode(Qt::ElideNone);    // Ensure no line ellipsis (...)

    horizontalHeader()->setSortIndicatorShown(false);
    horizontalHeader()->setCascadingSectionResizes(false);
    horizontalHeader()->setDefaultAlignment(Qt::AlignLeft);
    horizontalHeader()->hide();
    horizontalHeader()->setStretchLastSection(true);

    verticalHeader()->setStretchLastSection(false);
    verticalHeader()->setSortIndicatorShown(false);
    verticalHeader()->hide();

#if QT_VERSION >= 0x050000
    horizontalHeader()->setSectionResizeMode(QHeaderView::Fixed);          //Fixed because ResizeToContents will be done after table filling
    verticalHeader()->setSectionResizeMode(QHeaderView::Fixed);            // Fixed because ResizeToContents will be done after table filling
    horizontalHeader()->setSectionsClickable(false);
    horizontalHeader()->setSectionsMovable(false);
#else
    horizontalHeader()->setResizeMode(QHeaderView::Fixed);          //Fixed because ResizeToContents will be done after table filling
    verticalHeader()->setResizeMode(QHeaderView::Fixed);            // Fixed because ResizeToContents will be done after table filling
    horizontalHeader()->setClickable(false);
    horizontalHeader()->setMovable(false);
#endif

    setSelectionBehavior(QAbstractItemView::SelectRows);
    setHorizontalScrollBarPolicy(Qt::ScrollBarAlwaysOff);
    setHorizontalHeaderLabels(QString("WEB_VIEW").split(";"));
    setShowGrid(true);

    setItemDelegate(new cBlockTableItemDelegate(this));
    setColumnCount(1);

    setDragDropOverwriteMode(false);
    setAcceptDrops(true);
    setDropIndicatorShown(true);

    setContextMenuPolicy(Qt::PreventContextMenu);
}

//====================================================================================================================

void cCustomBlockTable::resizeEvent(QResizeEvent *ev) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cCustomBlockTable::resizeEvent");

    setColumnWidth(0,viewport()->width());
    QTableWidget::resizeEvent(ev);
}

//====================================================================================================================

void cCustomBlockTable::mouseDoubleClickEvent(QMouseEvent *ev) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cCustomBlockTable::mouseDoubleClickEvent");

    emit DoubleClickEvent(ev);
}

//====================================================================================================================

void cCustomBlockTable::mousePressEvent(QMouseEvent *event) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cCustomBlockTable::mousePressEvent");
    QTableWidget::mousePressEvent(event);
    if (event->button()==Qt::RightButton) {
        emit RightClickEvent(event);
    } else {
        if ((IsDragOn)||(rowCount()==0)) return;
        setCursor(Qt::ArrowCursor);
        IsDragOn      =false;
        DragItemSource=(event->pos().y()+verticalOffset())/rowHeight(0);

        QModelIndexList SelList=selectionModel()->selectedIndexes();
        QList<bool>     IsSelected;
        for (int i=0;i<rowCount();i++)      IsSelected.append(false);
        for (int i=0;i<SelList.count();i++) IsSelected[SelList.at(i).row()]=true;
        int NbrSelected =0;
        int ObjectNbr   =-1;
        for (int i=0;i<IsSelected.count();i++) if (IsSelected[i]) {
            if (NbrSelected==0) ObjectNbr=i;
            NbrSelected++;
        }
        if ((NbrSelected==1)&&(DragItemSource==ObjectNbr)) {
            IsDragOn    =true;
            DragItemDest=DragItemSource;
            setCursor(Qt::ClosedHandCursor);
            setUpdatesEnabled(false);
            setUpdatesEnabled(true);
        }
    }
}

//====================================================================================================================

void cCustomBlockTable::mouseMoveEvent(QMouseEvent *event) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cCustomBlockTable::mouseMoveEvent");
    if (!IsDragOn) {
        QTableWidget::mouseMoveEvent(event);
    } else {
        // Try to scroll up
        if ((event->pos().y()<0)&&(verticalScrollBar()->value()>0)) verticalScrollBar()->setValue(verticalScrollBar()->value()-1);

        // Try to scroll down
        else if ((event->pos().y()>height())&&(verticalScrollBar()->value()<verticalScrollBar()->maximum())) verticalScrollBar()->setValue(verticalScrollBar()->value()+1);

        else if ((event->pos().x()<0)||(event->pos().x()>width())||(event->pos().y()<0)||(event->pos().y()>height())) setCursor(Qt::ForbiddenCursor);
        else {
            DragItemDest=(event->pos().y()+verticalOffset())/rowHeight(0);
            if (DragItemDest>rowCount())    setCursor(Qt::ForbiddenCursor);
                else                        setCursor(Qt::ClosedHandCursor);
        }
        setUpdatesEnabled(false);
        setUpdatesEnabled(true);
    }
}

//====================================================================================================================

void cCustomBlockTable::mouseReleaseEvent(QMouseEvent *event) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cCustomBlockTable::mouseReleaseEvent");

    if (event->button()==Qt::RightButton) {
        //emit RightClickEvent(event);
    } else if (!IsDragOn) {
        QTableWidget::mouseReleaseEvent(event);
    } else {
        setCursor(Qt::ArrowCursor);
        IsDragOn=false;
        if (!((event->pos().x()<0)||(event->pos().x()>width())||(event->pos().y()<0)||(event->pos().y()>height()))) {
            DragItemDest=(event->pos().y()+verticalOffset())/rowHeight(0);
            if ((DragItemDest<=rowCount())&&(DragItemDest!=DragItemSource)) emit DragMoveBlock(DragItemSource,DragItemDest);
       }
        setUpdatesEnabled(false);
        setUpdatesEnabled(true);
    }
}

//====================================================================================================================

void cCustomBlockTable::dragEnterEvent(QDragEnterEvent *event) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cCustomBlockTable::dragEnterEvent");
    IsDragOn      =2;
    DragItemSource=-10;
    DragItemDest  =-1;
    setCursor(Qt::ClosedHandCursor);
    event->acceptProposedAction();
}

//====================================================================================================================

void cCustomBlockTable::dropEvent(QDropEvent *event) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cCustomBlockTable::dropEvent");
    IsDragOn=0;
    if (event->mimeData()->hasUrls()) {
        emit DragDropFiles(event->mimeData()->urls());
        event->acceptProposedAction();
    }
}

//====================================================================================================================

void cCustomBlockTable::dragMoveEvent(QDragMoveEvent *event) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cCustomBlockTable::dragMoveEvent");
    int OldDragItemDest=DragItemDest;
    if (rowCount()>0) DragItemDest=(event->pos().y()+verticalOffset())/rowHeight(0); else DragItemDest=0;
    if (DragItemDest>rowCount())    setCursor(Qt::ForbiddenCursor);
        else                        setCursor(Qt::ClosedHandCursor);
    event->acceptProposedAction();
    if (OldDragItemDest==DragItemDest) {
        setUpdatesEnabled(false);
        setUpdatesEnabled(true);
    }
}
