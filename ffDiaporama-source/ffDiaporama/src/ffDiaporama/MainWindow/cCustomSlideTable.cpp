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

#include "cCustomSlideTable.h"

#include <QStyledItemDelegate>
#include <QStyleOptionViewItem>
#include <QModelIndex>

#include <QHeaderView>
#include <QScrollBar>
#include <QInputDialog>
#include <QLineEdit>
#include <QMessageBox>

#include "mainwindow.h"

//======================================
// Specific defines for this dialog box
//======================================
#define TransitionSize          36
#define WidgetSelection_Color   Qt::blue
#define WidgetDrag_Color        Qt::red
#define WidgetBackground_Color  0xC2C7CB
#define WidgetBorder_Color      Qt::black
#define ObjectBackground_Ruller Qt::darkGray
#define FirstMusic_Color        Qt::green
#define SecondMusic_Color       Qt::darkGreen
#define FirstSound_Color        Qt::cyan
#define SecondSound_Color       Qt::darkCyan
#define DotLine_Color           Qt::white

// Icons
#define ICON_SHOTPRESENCE                   ":/img/TimelineShots.png"               // FileName of icon representing shots in the timeline
#define ICON_BLOCKPRESENCE                  ":/img/TimelineBlocks.png"              // FileName of icon representing blocks in the timeline
#define ICON_HAVEFILTER                     ":/img/Transform.png"                   // FileName of icon representing block with filter in the timeline
#define ICON_PLAYERPAUSE                    ":/img/player_pause.png"                // FileName of pause icon
#define ICON_AUTOSLIDECHAPTER               ":/img/AutoTS.png"
#define ICON_CHAPTER                        ":/img/Chapter.png"
#define ICON_AUTOPROJECT                    ":/img/object_text.png"
#define ICON_AUTOCHAPTER                    ":/img/Chapter_big.png"
#define ICON_AUTOCREDIT                     ":/img/medal.png"
#define ICON_CONTINUEPLAYLIST               ":/img/ContinuePlayList.png"
#define ICON_EMPTYPLAYLIST                  ":/img/sound_KO.png"

//********************************************************************************************************
// QCustomThumbItemDelegate
//********************************************************************************************************

class QCustomThumbItemDelegate : public QStyledItemDelegate {
//Q_OBJECT
public:
    cCustomSlideTable  *ParentTable;

    explicit QCustomThumbItemDelegate(QObject *parent);

    virtual void    paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const;
};

//========================================================================================================================

QCustomThumbItemDelegate::QCustomThumbItemDelegate(QObject *parent):QStyledItemDelegate(parent) {
    ParentTable=(cCustomSlideTable *)parent;
}

//===========================================================================================================================

void DrawThumbnailsBox(int Xa,int Ya,int Width,int Height,QPainter *Painter,QImage *Icon,bool IsAutoSlide=false) {
    QPen Pen;
    Pen.setWidth(1);
    Pen.setColor(IsAutoSlide?Qt::darkGreen:Qt::darkGray);
    Painter->setPen(Pen);
    Painter->setBrush(Qt::NoBrush);
    Painter->drawRect(Xa-1,Ya-1,Width+4-1,Height+4-1);
    Pen.setColor(IsAutoSlide?Qt::green:Qt::white);
    Painter->setPen(Pen);
    Painter->drawRect(Xa-1,Ya-1,Width+2-1,Height+2-1);
    Pen.setColor(Qt::black);
    Painter->setPen(Pen);
    Painter->drawRect(Xa-2,Ya-2,Width+4-1,Height+4-1);

    // -------------------------- if Transition Icon
    if (Icon) {
        Painter->drawImage(QRect(Xa,Ya,32,32),*Icon);
        delete Icon;
    }
}

//========================================================================================================================

void QCustomThumbItemDelegate::paint(QPainter *Painter,const QStyleOptionViewItem &option,const QModelIndex &index) const {
    if (ParentTable->columnCount()==0) return;

    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    Painter->save();

    int ItemIndex = index.row()*ParentTable->columnCount()+index.column();

    if (ItemIndex>=ParentTable->Diaporama->List.count()) {

        Painter->fillRect(option.rect,QColor(Qt::white));

    } else {

        cDiaporamaObject *Object        =ParentTable->Diaporama->List[ItemIndex];
        cDiaporamaObject *PreviousObject=ItemIndex>0?ParentTable->Diaporama->List[ItemIndex-1]:NULL;
        cDiaporamaObject *NextObject    =ItemIndex<ParentTable->Diaporama->List.count()-1?ParentTable->Diaporama->List[ItemIndex+1]:NULL;

        int              ThumbWidth  =ParentTable->columnWidth(0);
        int              ThumbHeight =ParentTable->rowHeight(0);
        bool             IsTransition=((Object->TransitionFamilly!=0)||(Object->TransitionSubType!=0));
        QPointF          Table[10];

        Painter->setRenderHints(QPainter::Antialiasing|QPainter::TextAntialiasing|QPainter::SmoothPixmapTransform|QPainter::HighQualityAntialiasing|QPainter::NonCosmeticDefaultPen);
        Painter->setClipRect(QRectF(option.rect.x(),option.rect.y(),option.rect.width(),option.rect.height()));
        // Fill background
        Painter->fillRect(option.rect,QColor(WidgetBackground_Color));
        // Translate painter (if needed) so all coordinate are from 0,0
        if ((option.rect.x()!=0)||(option.rect.y()!=0)) Painter->translate(option.rect.x(),option.rect.y());

        QPen RedPen;
        RedPen.setWidth(1);
        RedPen.setStyle(Qt::SolidLine);
        RedPen.setColor(QColor(0xff,0,0));

        // Draw slide separation line for Partition mode
        QPen    Pen;
        Pen.setWidth(1);
        Pen.setStyle(Qt::SolidLine);
        Pen.setColor(WidgetBorder_Color);
        Painter->setPen(Pen);
        Painter->drawLine(0,ThumbHeight-1,ThumbWidth-1,ThumbHeight-1);

        int FontFactor  =((ParentTable->ApplicationConfig->TimelineHeight-TIMELINEMINHEIGH)/20)*10;
        QFont normalFont=QApplication::font();
        QFont smallFont = QApplication::font();

        Painter->setFont(normalFont);
        #ifdef Q_OS_WIN
        normalFont.setPointSizeF(double(110+FontFactor)/double(Painter->fontMetrics().boundingRect("0").height()));                         // Scale font
        smallFont.setPointSizeF ((double(110+FontFactor)/double(Painter->fontMetrics().boundingRect("0").height()))*0.8);                   // Scale font
        #else
        normalFont.setPointSizeF((double(140+FontFactor)/double(Painter->fontMetrics().boundingRect("0").height()))*ScreenFontAdjust);      // Scale font
        smallFont.setPointSizeF ((double(140+FontFactor)/double(Painter->fontMetrics().boundingRect("0").height()))*ScreenFontAdjust*0.8);  // Scale font
        #endif

        //==========================================================================================================================
        // Track BACKGROUND (first 1/4 height of the slide)
        //==========================================================================================================================

        int BackThumbHeight = ThumbHeight/4-6;
        int BackThumbWidth  = ParentTable->Diaporama->GetWidthForHeight(BackThumbHeight);

        // Fill background track
        Painter->fillRect(QRect(0,(ThumbHeight/4-16)/2,ThumbWidth,16),QColor(ObjectBackground_Ruller));

        // Draw thumb
        ParentTable->Diaporama->PrepareBackground(ItemIndex,BackThumbWidth,BackThumbHeight,Painter,TransitionSize+3,2);

        // Draw frame arround thumb
        DrawThumbnailsBox(TransitionSize+3,2,BackThumbWidth,BackThumbHeight,Painter,NULL);

        // Draw background transition box & icon (if transition exist)
        if (Object->BackgroundType) DrawThumbnailsBox(2,(ThumbHeight/4-32)/2-1,32,32,Painter,IsTransition?IconList.GetIcon(TRANSITIONFAMILLY_BASE,1):IconList.GetIcon(TRANSITIONFAMILLY_BASE,0));


        //==========================================================================================================================
        // Track OBJECT (second and third 1/4 height of the slide)
        //==========================================================================================================================

        // Transition box
        DrawThumbnailsBox(2,ThumbHeight/4+2-1,32,32,Painter,IsTransition?IconList.GetIcon(Object->TransitionFamilly,Object->TransitionSubType):IconList.GetIcon(TRANSITIONFAMILLY_BASE,0));

        int     NewThumbWidth       = ThumbWidth-TransitionSize-6;
        int     NewThumbHeight      = ParentTable->Diaporama->GetHeightForWidth(NewThumbWidth);
        int     BarWidth            = (ThumbWidth-NewThumbWidth)/2;

        bool    HaveFilter          =Object->CachedHaveFilter;
        bool    HaveSound           =Object->CachedHaveSound;
        double  SoundVolume         =Object->CachedSoundVolume; if (SoundVolume==-1) SoundVolume=1;
        bool    PreviousHaveSound   =PreviousObject?PreviousObject->CachedHaveSound:false;
        double  PreviousSoundVolume =PreviousObject?PreviousObject->CachedSoundVolume:0; if (PreviousSoundVolume==-1) PreviousSoundVolume=1;

        QString SlideDuration       =QTime(0,0,0,0).addMSecs(Object->CachedDuration).toString("hh:mm:ss.zzz");
        QString FileName            =Object->SlideName;
        QString TransitionDuration  =QTime(0,0,0,0).addMSecs(Object->CachedTransitDuration).toString("ss.z");
        QString SlideNumber         =QString("%1").arg(ItemIndex+1);
        int     AutoTSNumber        =Object->GetAutoTSNumber();

        // Draw transition out of previous track
        if (IsTransition && PreviousHaveSound && !HaveSound) {
            Pen.setColor(ObjectBackground_Ruller);
            Pen.setWidth(1);
            Pen.setStyle(Qt::SolidLine);
            Painter->setPen(Pen);
            Painter->setBrush(QBrush(QColor(ObjectBackground_Ruller)));
            Table[0]=QPointF(0,3*ThumbHeight/4-TIMELINESOUNDHEIGHT-2);
            Table[1]=QPointF(TransitionSize,3*ThumbHeight/4-2);
            Table[2]=QPointF(0,3*ThumbHeight/4-2);
            Painter->drawPolygon(Table,3);

            // Draw transition out for this (previous) soundtrack
            Pen.setColor(((ItemIndex&0x1)!=0x1)?FirstSound_Color:SecondSound_Color);
            Pen.setWidth(1);
            Pen.setStyle(Qt::SolidLine);
            Painter->setPen(Pen);
            Painter->setBrush(QBrush(QColor(((ItemIndex&0x1)!=0x1)?FirstSound_Color:SecondSound_Color)));
            int RHeightPrevious=int(double(TIMELINESOUNDHEIGHT)*(PreviousSoundVolume/1.5));
            Table[0]=QPointF(0,3*ThumbHeight/4-RHeightPrevious-2);
            Table[1]=QPointF(TransitionSize,3*ThumbHeight/4-2);
            Table[2]=QPointF(0,3*ThumbHeight/4-2);
            Painter->drawPolygon(Table,3);
        }

        if (!HaveSound) {
            // Display a thumb with no sound
            Painter->fillRect(TransitionSize+3,ThumbHeight/4+2-1,NewThumbWidth,NewThumbHeight,Transparent);     // Fill background with transparent image
            Object->DrawThumbnail(NewThumbWidth,NewThumbHeight,Painter,TransitionSize+3,ThumbHeight/4+1);       // Draw thumb
            DrawThumbnailsBox(TransitionSize+3,ThumbHeight/4+2-1,NewThumbWidth,NewThumbHeight,Painter,NULL,AutoTSNumber!=-1);    // Draw frame arround thumb
            if (Object->ObjectComposition.List.count()>1)   Painter->drawImage(TransitionSize+3+8,                  2-1+ThumbHeight/4+8,    QImage(ICON_BLOCKPRESENCE));    // Add mark if multiple block
            if (Object->List.count()>1)                     Painter->drawImage(TransitionSize+3+NewThumbWidth-32,   2-1+ThumbHeight/4+8,    QImage(ICON_SHOTPRESENCE));     // Add mark if multiple shot
            if (HaveFilter)                                 Painter->drawImage(TransitionSize+3+NewThumbWidth-32,   2-1+ThumbHeight/4+32,   QImage(ICON_HAVEFILTER));       // Add mark if at least one block have filter

        } else {
            // Display a thumb with sound track
            int     VideoThumbWidth =NewThumbWidth-BarWidth*2;
            int     VideoThumbHeight=ParentTable->Diaporama->GetHeightForWidth(VideoThumbWidth);

            // Draw thumb part
            Painter->fillRect(TransitionSize+3+BarWidth,ThumbHeight/4+2-1,VideoThumbWidth,VideoThumbHeight,Transparent);     // Fill background with transparent image
            Object->DrawThumbnail(VideoThumbWidth,VideoThumbHeight,Painter,TransitionSize+3+BarWidth,ThumbHeight/4+1);       // Draw thumb

            // Draw black bar for cinema decoration at left & right
            Painter->fillRect(TransitionSize+3,                         ThumbHeight/4+2-1, BarWidth,VideoThumbHeight,QBrush(Qt::black));
            Painter->fillRect(TransitionSize+3+BarWidth+VideoThumbWidth,ThumbHeight/4+2-1, BarWidth,VideoThumbHeight,QBrush(Qt::black));

            // Draw cinema decoration at left & right
            for (int HH=0;HH<3;HH++) {
                Painter->fillRect(TransitionSize+3+4,                         ThumbHeight/4+2-1+HH*(VideoThumbHeight/3)+4,BarWidth-9,(VideoThumbHeight/5),QBrush(Qt::lightGray));
                Painter->fillRect(TransitionSize+3+5+BarWidth+VideoThumbWidth,ThumbHeight/4+2-1+HH*(VideoThumbHeight/3)+4,BarWidth-9,(VideoThumbHeight/5),QBrush(Qt::lightGray));
            }

            QPen Pen;
            Pen.setWidth(1);
            Painter->setBrush(Qt::NoBrush);
            Pen.setColor(Qt::black);    Painter->setPen(Pen);    Painter->drawRect(TransitionSize+3-2,ThumbHeight/4+1-2,NewThumbWidth+4,VideoThumbHeight+4);
            Pen.setColor(Qt::darkGray); Painter->setPen(Pen);
            Painter->drawRect(TransitionSize+3-1,ThumbHeight/4+1-1,NewThumbWidth+2,VideoThumbHeight+2);
            Painter->drawRect(TransitionSize+3+BarWidth-2,ThumbHeight/4,VideoThumbWidth+4,VideoThumbHeight);

            Pen.setColor(Qt::white);    Painter->setPen(Pen);
            Painter->drawRect(TransitionSize+3,  ThumbHeight/4+1,  NewThumbWidth,  VideoThumbHeight+1);
            Painter->drawRect(TransitionSize+3+BarWidth-1,ThumbHeight/4+1,VideoThumbWidth+2,VideoThumbHeight);

            if (Object->ObjectComposition.List.count()>1)   Painter->drawImage(TransitionSize+3+BarWidth+8,                  2-1+ThumbHeight/4+8,    QImage(ICON_BLOCKPRESENCE));    // Add mark if multiple block
            if (Object->List.count()>1)                     Painter->drawImage(TransitionSize+3+BarWidth+VideoThumbWidth-32, 2-1+ThumbHeight/4+8,    QImage(ICON_SHOTPRESENCE));     // Add mark if multiple shot
            if (HaveFilter)                                 Painter->drawImage(TransitionSize+3+BarWidth+VideoThumbWidth-32, 2-1+ThumbHeight/4+32,   QImage(ICON_HAVEFILTER));       // Add mark if at least one block have filter

            // Soundtrack part
            int RHeight=int(double(TIMELINESOUNDHEIGHT)*(SoundVolume/1.5));

            Pen.setColor(ObjectBackground_Ruller);
            Pen.setWidth(1);
            Pen.setStyle(Qt::SolidLine);
            Painter->setPen(Pen);
            Painter->setBrush(QBrush(QColor(ObjectBackground_Ruller)));
            Painter->drawRect(0,3*ThumbHeight/4-2-TIMELINESOUNDHEIGHT,ThumbWidth,TIMELINESOUNDHEIGHT);

            // Draw transitions
            if (IsTransition) {
                // Draw transition out for previous soundtrack
                if ((ItemIndex>0)&&(PreviousHaveSound)) {
                    Pen.setColor(((ItemIndex&0x1)!=0x1)?FirstSound_Color:SecondSound_Color);
                    Pen.setWidth(1);
                    Pen.setStyle(Qt::SolidLine);
                    Painter->setPen(Pen);
                    Painter->setBrush(QBrush(QColor(((ItemIndex&0x1)!=0x1)?FirstSound_Color:SecondSound_Color)));
                    int RHeightPrevious=int(double(TIMELINESOUNDHEIGHT)*(PreviousSoundVolume/1.5));
                    Table[0]=QPointF(0,             3*ThumbHeight/4-2-RHeightPrevious);
                    Table[1]=QPointF(TransitionSize,3*ThumbHeight/4-2);
                    Table[2]=QPointF(0,             3*ThumbHeight/4-2);
                    Painter->drawPolygon(Table,3);
                }
                // Draw in transition + soundtrack
                Pen.setColor(((ItemIndex&0x1)==0x1)?FirstSound_Color:SecondSound_Color);
                Pen.setWidth(1);
                Pen.setStyle(Qt::SolidLine);
                Painter->setPen(Pen);
                Painter->setBrush(QBrush(QColor(((ItemIndex&0x1)==0x1)?FirstSound_Color:SecondSound_Color)));
                Table[0]=QPointF(0,             3*ThumbHeight/4-2);
                Table[1]=QPointF(TransitionSize,3*ThumbHeight/4-2-RHeight);
                Table[2]=QPointF(ThumbWidth,    3*ThumbHeight/4-2-RHeight);                          // Draw soundtrack without transition
                Table[3]=QPointF(ThumbWidth,    3*ThumbHeight/4-2);
                Painter->drawPolygon(Table,4);
            } else {
                Pen.setColor(((ItemIndex&0x1)==0x1)?FirstSound_Color:SecondSound_Color);
                Pen.setWidth(1);
                Pen.setStyle(Qt::SolidLine);
                Painter->setPen(Pen);
                Painter->setBrush(QBrush(QColor(((ItemIndex&0x1)==0x1)?FirstSound_Color:SecondSound_Color)));
                Table[0]=QPointF(0,         3*ThumbHeight/4-2);
                Table[1]=QPointF(0,         3*ThumbHeight/4-2-RHeight);
                Table[2]=QPointF(ThumbWidth,3*ThumbHeight/4-2-RHeight);                          // Draw soundtrack without transition
                Table[3]=QPointF(ThumbWidth,3*ThumbHeight/4-2);
                Painter->drawPolygon(Table,4);
            }
        }

        // Draw transition duration, slide duration and slide name
        Pen.setWidth(1);
        Pen.setStyle(Qt::SolidLine);

        // Chapter TAG
        if (Object->StartNewChapter)        Painter->drawImage(TransitionSize+3,2,QImage(ICON_CHAPTER));

        // Transition
        if (TransitionDuration[0]=='0')             TransitionDuration=TransitionDuration.right(TransitionDuration.length()-1);   // Cut first 0
        while (TransitionDuration.endsWith("0"))    TransitionDuration=TransitionDuration.left(TransitionDuration.length()-1);
        while (TransitionDuration.endsWith("."))    TransitionDuration=TransitionDuration.left(TransitionDuration.length()-1);

        Pen.setColor(Qt::black);
        Painter->setPen(Pen);
        Painter->setFont(normalFont);

        Painter->drawText(QRectF(TransitionSize+3+1,        ThumbHeight/4+2-1+1,                    NewThumbWidth,              16),SlideDuration,Qt::AlignHCenter|Qt::AlignVCenter);
        if (AutoTSNumber==-1) Painter->drawText(QRectF(TransitionSize+3+1,ThumbHeight/4+2-1+1+NewThumbHeight-16,NewThumbWidth,16),FileName,Qt::AlignHCenter|Qt::AlignVCenter);
        Painter->drawText(QRectF(2+1,                       ThumbHeight/4+2-1+34+1,                 32,                         16),TransitionDuration,Qt::AlignHCenter|Qt::AlignVCenter);
        Painter->drawText(QRectF(BackThumbWidth+2+1,        (ThumbHeight/4-16)/2+1,                 ThumbWidth-BackThumbWidth-4,16),SlideNumber,Qt::AlignHCenter|Qt::AlignVCenter);

        Pen.setColor(Qt::white);
        Painter->setPen(Pen);
        Painter->drawText(QRectF(TransitionSize+3,          ThumbHeight/4+2-1,                      NewThumbWidth,              16),SlideDuration,Qt::AlignHCenter|Qt::AlignVCenter);
        if (AutoTSNumber==-1) Painter->drawText(QRectF(TransitionSize+3,ThumbHeight/4+2-1+NewThumbHeight-16,NewThumbWidth,16),FileName,Qt::AlignHCenter|Qt::AlignVCenter);
        Painter->drawText(QRectF(2,                         ThumbHeight/4+2-1+34,                   32,                         16),TransitionDuration,Qt::AlignHCenter|Qt::AlignVCenter);
        Painter->drawText(QRectF(BackThumbWidth+2,          (ThumbHeight/4-16)/2,                   ThumbWidth-BackThumbWidth-4,16),SlideNumber,Qt::AlignHCenter|Qt::AlignVCenter);

        if (AutoTSNumber!=-1) {
            Painter->drawImage(TransitionSize+3  ,ThumbHeight/4+2-1+NewThumbHeight-16  ,QImage(ICON_AUTOSLIDECHAPTER));
            switch (AutoTSNumber/100000) {
                case 1: Painter->drawImage(ThumbWidth-26,ThumbHeight/4+2-1+NewThumbHeight-16,QImage(ICON_AUTOPROJECT)); break;
                case 2: Painter->drawImage(ThumbWidth-26,ThumbHeight/4+2-1+NewThumbHeight-16,QImage(ICON_AUTOCHAPTER)); break;
                case 3: Painter->drawImage(ThumbWidth-26,ThumbHeight/4+2-1+NewThumbHeight-16,QImage(ICON_AUTOCREDIT));  break;
            }
        }

        //==========================================================================================================================
        // Track MUSIC (last 1/4 height of the slide)
        //==========================================================================================================================

        int             OwnerObjectMusic    =0;
        int             CurrentCountObjet   =0;
        int64_t         StartPosition       =0;
        cMusicObject    *CurMusic           =Object->Parent->GetMusicObject(ItemIndex,StartPosition,&CurrentCountObjet,&OwnerObjectMusic);

        int             PrevCountObjet      =0;
        int64_t         PrevStartPosition   =0;
        cMusicObject    *PrevMusic          =PreviousObject?Object->Parent->GetMusicObject(ItemIndex-1,PrevStartPosition,&PrevCountObjet):NULL;

        bool            EndMusic            =Object->CachedMusicEnd;
        int64_t         CurSlideDuration    =Object->CachedDuration-(NextObject?NextObject->GetTransitDuration():0);
        double          CurrentFactor       =Object->MusicPause?0:Object->MusicReduceVolume?Object->MusicReduceFactor:1;

        bool            DrawOutTransition   =Object->CachedPrevMusicFadOUT;                                 //false;
        bool            DrawInTransition    =Object->CachedMusicFadIN;                                      //false;
        bool            PrevEndMusicTransit =Object->CachedPrevMusicEnd;                                    //false;
        double          PreviousFactor      =PrevMusic?((PreviousObject->MusicPause)?0:(PreviousObject->MusicReduceVolume)?PreviousObject->MusicReduceFactor:1):0;

        bool            DrawVolumeTransition=(PreviousFactor!=CurrentFactor);
        int             RHeight             =int(TIMELINESOUNDHEIGHT*2*(CurrentFactor/1.5));
        int             PHeight             =int(TIMELINESOUNDHEIGHT*2*(PreviousFactor/1.5));

        // Draw out transition from a previous object
        if (DrawOutTransition) {
            if ((PrevCountObjet & 1)==1) {
                Painter->setBrush(QBrush(QColor(FirstMusic_Color)));
                Pen.setColor(FirstMusic_Color);
            } else {
                Painter->setBrush(QBrush(QColor(SecondMusic_Color)));
                Pen.setColor(SecondMusic_Color);
            }
            Pen.setWidth(0);
            Painter->setPen(Pen);
            Table[0]=QPointF(-1,ThumbHeight-5-PHeight+2);
            Table[1]=QPointF(TransitionSize,ThumbHeight-5+2);
            Table[2]=QPointF(-1,ThumbHeight-5+2);
            Painter->drawPolygon(Table,3);
            if (PreviousObject->CachedMusicRemaining<Object->CachedTransitDuration) {
                Painter->setPen(RedPen);
                Painter->drawLine(Table[0],Table[1]);
            }

        // Previous music end during the entering transition
        } else if (PrevEndMusicTransit) {
            if ((PrevCountObjet & 1)==1) {
                Painter->setBrush(QBrush(QColor(FirstMusic_Color)));
                Pen.setColor(FirstMusic_Color);
            } else {
                Painter->setBrush(QBrush(QColor(SecondMusic_Color)));
                Pen.setColor(SecondMusic_Color);
            }
            Pen.setWidth(0);
            Painter->setPen(Pen);
            qreal PCTSound=qreal(PreviousObject->CachedMusicRemaining)/qreal(Object->CachedTransitDuration);
            Table[0]=QPointF(-1,ThumbHeight-5+2);
            Table[1]=QPointF(-1,ThumbHeight-5-PHeight+2);
            Table[2]=QPointF(qreal(TransitionSize)*PCTSound,ThumbHeight-5-PHeight+2);
            Table[3]=QPointF(qreal(TransitionSize)*PCTSound,ThumbHeight-5+2);
            Table[4]=QPointF(-1,ThumbHeight-5+2);
            Painter->drawPolygon(Table,5);
            if (PreviousObject->CachedMusicRemaining<Object->CachedTransitDuration) {
                Painter->setPen(RedPen);
                Painter->drawLine(Table[2],Table[3]);
            }
        }

        if (CurMusic!=NULL) {
            // Start a new Playlist
            if ((Object->MusicType)&&(Object->MusicList.count()>0)) DrawVolumeTransition=false;
            if (DrawInTransition && IsTransition) {
                Table[0]=QPointF(-1,ThumbHeight-5+2);
                Table[1]=QPointF(TransitionSize,ThumbHeight-5-RHeight+2);
            } else if (DrawVolumeTransition && IsTransition) {
                Table[0]=QPointF(-1,ThumbHeight-5-PHeight+2);
                Table[1]=QPointF(TransitionSize,ThumbHeight-5-RHeight+2);
            } else {
                Table[0]=QPointF(-1,ThumbHeight-5+2);
                Table[1]=QPointF(-1,ThumbHeight-5-RHeight+2);
            }

            // Music end during the slide
            if (EndMusic) {
                qreal PCTSound=qreal(Object->CachedMusicTimePlayed-Object->CachedTransitDuration)/qreal(CurSlideDuration-Object->CachedTransitDuration);
                Table[2]=QPointF(TransitionSize+(ThumbWidth-TransitionSize)*PCTSound,ThumbHeight-5-RHeight+2);
                Table[3]=QPointF(TransitionSize+(ThumbWidth-TransitionSize)*PCTSound,ThumbHeight-5+2);
            } else {
                Table[2]=QPointF(ThumbWidth+2,ThumbHeight-5-RHeight+2);
                Table[3]=QPointF(ThumbWidth+2,ThumbHeight-5+2);
            }

            Table[4]=QPointF(-1,ThumbHeight-5+2);

            if ((CurrentCountObjet & 1)==1) {
                Painter->setBrush(QBrush(QColor(FirstMusic_Color)));
                Pen.setColor(FirstMusic_Color);
            } else {
                Painter->setBrush(QBrush(QColor(SecondMusic_Color)));
                Pen.setColor(SecondMusic_Color);
            }
            Pen.setWidth(0);
            Painter->setPen(Pen);
            Painter->drawPolygon(Table,5);

            // if music end during this slide, draw a red line at the end
            if (EndMusic) {
                Painter->setPen(RedPen);
                Painter->drawLine(Table[2],Table[3]);
                if (CurMusic->ForceFadOut>0) {
                    // if force fade out, draw a diag line
                    qreal length=(ThumbWidth-TransitionSize)*(qreal(CurMusic->ForceFadOut)/qreal(CurSlideDuration));
                    Table[2].setX(Table[2].x()-length);
                    Painter->drawLine(Table[2],Table[3]);
                }
                Painter->setPen(Pen);
            }
        }

        if ((CurMusic)&&(CurMusic!=PrevMusic)) {
            QStringList TempExtProperties;
            ParentTable->ApplicationConfig->FilesTable->GetExtendedProperties(CurMusic->FileKey,&TempExtProperties);
            QImage  Icon     =CurMusic->GetIcon(cCustomIcon::ICON100,false).scaledToHeight(24);
            QString Artist   =GetInformationValue("artist",&TempExtProperties);
            QString Title    =GetInformationValue("title",&TempExtProperties);
            QString MusicName=((Artist!="")&&(Title!="")?Artist+"\n"+Title:QFileInfo(CurMusic->FileName()).baseName());

            Painter->drawImage(TransitionSize-1-24,ThumbHeight-4-24+1,Icon);
            Pen.setWidth(1);
            Pen.setStyle(Qt::SolidLine);
            Pen.setColor(Qt::black);
            Painter->setPen(Pen);
            Painter->setFont(smallFont);
            Painter->drawText(QRectF(TransitionSize+4+1,ThumbHeight-4-24+1,ThumbWidth-8-TransitionSize,24),MusicName,Qt::AlignLeft|Qt::AlignVCenter);
            Pen.setColor(Qt::white);
            Painter->setPen(Pen);
            Painter->drawText(QRectF(TransitionSize+4,ThumbHeight-4-24,ThumbWidth-8-TransitionSize,24),MusicName,Qt::AlignLeft|Qt::AlignVCenter);
            if (OwnerObjectMusic!=ItemIndex) Painter->drawImage(TransitionSize-1-24,ThumbHeight-4-24+1,QImage(ICON_CONTINUEPLAYLIST));
            if ((!DrawInTransition)&&(CurMusic->ForceFadIn>0)) {
                // if force fade in, draw a diag line
                qreal length=(ThumbWidth-TransitionSize)*(qreal(CurMusic->ForceFadIn)/qreal(CurSlideDuration));
                Table[0]=QPointF(-1,ThumbHeight-5+2);
                Table[1]=QPointF(-1+length,ThumbHeight-5-RHeight+2);
                Painter->setPen(RedPen);
                Painter->drawLine(Table[0],Table[1]);
                Painter->setPen(Pen);
            }
        } else if ((!CurMusic)&&(Object->MusicType)) {
            Painter->drawImage(TransitionSize-1-24,ThumbHeight-4-24+1,QImage(ICON_EMPTYPLAYLIST));
        }
        if (Object->MusicPause) Painter->drawImage((ThumbWidth-24-TransitionSize)/2+TransitionSize,ThumbHeight-5-24,QImage(ICON_PLAYERPAUSE));
        // Draw separated line
        Pen.setWidth(1);
        Pen.setStyle(Qt::DotLine);
        Pen.setColor(DotLine_Color);
        Painter->setPen(Pen);
        Painter->drawLine(QPointF(TransitionSize+1,3*ThumbHeight/4),QPointF(TransitionSize+1,ThumbHeight-1));
        Painter->drawLine(QPointF(ThumbWidth-1,    3*ThumbHeight/4),QPointF(ThumbWidth-1,    ThumbHeight-1));

        //==========================================================================================================================
        // Draw current box (if needed)
        //==========================================================================================================================
        if (ItemIndex==ParentTable->Diaporama->CurrentCol) {
            Pen.setColor(WidgetSelection_Color);
            Pen.setStyle(Qt::SolidLine);
            Pen.setWidth(10);
            Painter->setPen(Pen);
            Painter->setBrush(Qt::NoBrush); //QBrush(QColor(WidgetSelection_Color)));
            //Painter->setOpacity(0.5);
            Painter->drawRect(0,0,ThumbWidth,ThumbHeight);
            //Painter->setOpacity(1);
        }

        //==========================================================================================================================
        // Draw Drag & Drop inserting point (if needed)
        //==========================================================================================================================
        if ((ParentTable->CursorPosValide)||(ParentTable->DragItemDest==ParentTable->DragItemSource)) {
            bool    DrawDragBefore    =false;
            bool    DrawDragAfter     =false;
            bool    DrawMusicPart     =false;
            bool    DrawBackgroundPart=false;

            if (ParentTable->IsDragOn==DRAGMODE_INTERNALMOVE_SLIDE) {             //  Drag source is timeline
                if ((ItemIndex!=ParentTable->DragItemSource)&&(ItemIndex!=ParentTable->DragItemSource+1)) {
                    if (ItemIndex==ParentTable->DragItemDest)                                                           DrawDragBefore=true;
                    if ((ItemIndex==ParentTable->DragItemDest-1)&&(ItemIndex==ParentTable->Diaporama->List.count()-1))  DrawDragAfter =true;
                }

            } else if (ParentTable->IsDragOn==DRAGMODE_EXTERNALADD_SLIDE) {      //  Drag source is external to timeline
                if (ItemIndex==ParentTable->DragItemDest)                                                               DrawDragBefore=true;
                if ((ItemIndex==ParentTable->DragItemDest-1)&&(ItemIndex==ParentTable->Diaporama->List.count()-1))      DrawDragAfter =true;

            } else if ((ParentTable->IsDragOn==DRAGMODE_EXTERNALADD_MUSIC)||(ParentTable->IsDragOn==DRAGMODE_INTERNALMOVE_MUSIC)) {
                if (ItemIndex==ParentTable->DragItemDest)                                                               DrawMusicPart=true;
            } else if (ParentTable->IsDragOn==DRAGMODE_INTERNALMOVE_BACKGROUND) {
                if (ItemIndex==ParentTable->DragItemDest)                                                               DrawBackgroundPart=true;
            }

            if (DrawDragBefore || DrawDragAfter || DrawMusicPart || DrawBackgroundPart) {
                Pen.setColor(WidgetDrag_Color);
                Pen.setStyle(Qt::SolidLine);
                Pen.setWidth(6);
                Painter->setPen(Pen);
                Painter->setBrush(Qt::NoBrush); //QBrush(QColor(WidgetSelection_Color)));
                Painter->setOpacity(0.5);

                if (DrawDragBefore) {
                    // Before slide
                    Painter->drawRect(3,3,ThumbWidth-8,ThumbHeight-8);
                    //Painter->drawLine(3,3*(ThumbHeight/8),3,ThumbHeight-3*(ThumbHeight/8));
                    Painter->drawLine(3,ThumbHeight/2,32,3*(ThumbHeight/8));
                    Painter->drawLine(3,ThumbHeight/2,32,ThumbHeight-3*(ThumbHeight/8));
                    Painter->drawLine(3,ThumbHeight/2,64,ThumbHeight/2);
                } else if (DrawDragAfter) {
                    // After slide
                    Painter->drawRect(3,3,ThumbWidth-8,ThumbHeight-8);
                    //Painter->drawLine(ThumbWidth-3,3*(ThumbHeight/8),ThumbWidth-3,ThumbHeight-3*(ThumbHeight/8));
                    Painter->drawLine(ThumbWidth-3,ThumbHeight/2,ThumbWidth-3-32,3*(ThumbHeight/8));
                    Painter->drawLine(ThumbWidth-3,ThumbHeight/2,ThumbWidth-3-32,ThumbHeight-3*(ThumbHeight/8));
                    Painter->drawLine(ThumbWidth-3,ThumbHeight/2,ThumbWidth-3-64,ThumbHeight/2);
                } else if (DrawMusicPart) {
                    Painter->drawRect(3,ThumbHeight-ThumbHeight/4+3,ThumbWidth-8,ThumbHeight/4-8);
                } else if (DrawBackgroundPart) {
                    Painter->drawRect(3,3,ThumbWidth-8,ThumbHeight/4-8);
                }
                Painter->setOpacity(1);
            }
        }

        //==========================================================================================================================
        // Draw selection
        //==========================================================================================================================
        if (option.state & QStyle::State_Selected) {
            Painter->setPen(QPen(Qt::NoPen));
            Painter->setBrush(QBrush(Qt::blue));
            Painter->setOpacity(0.25);
            Painter->drawRect(0,0,ThumbWidth,ThumbHeight);
            Painter->setOpacity(1);
        }
    }
    Painter->restore();
    QApplication::restoreOverrideCursor();
}

//********************************************************************************************************************
// cCustomSlideTable
//********************************************************************************************************************

cCustomSlideTable::cCustomSlideTable(QWidget *parent):QTableWidget(parent) {
    Diaporama        =NULL;             // Link to current diaporama
    ApplicationConfig=NULL;             // Link to current application config
    PartitionMode    =false;            // True if multiple line
    DragItemSource   =-1;
    DragItemDest     =-1;
    IsDragOn         =DRAGMODE_NOACTION;

    setItemDelegate(new QCustomThumbItemDelegate(this));

    #if QT_VERSION >= 0x050000
        horizontalHeader()->setSectionResizeMode(QHeaderView::Fixed);
        verticalHeader()->setSectionResizeMode(QHeaderView::Fixed);
    #else
        horizontalHeader()->setResizeMode(QHeaderView::Fixed);
        verticalHeader()->setResizeMode(QHeaderView::Fixed);
    #endif
    setAcceptDrops(true);
}

//====================================================================================================================

void cCustomSlideTable::dokeyReleaseEvent(QKeyEvent *event) {
    QTableWidget::keyReleaseEvent(event);
}

//====================================================================================================================

void cCustomSlideTable::dragEnterEvent(QDragEnterEvent *event) {
    // Construct file list
    QList<QUrl> urlList;
    QString     fName;
    QFileInfo   info;
    QStringList FileList;

    if (event->mimeData()->hasUrls()) {
        urlList = event->mimeData()->urls();                                // returns list of QUrls
        for (int i=0;i<urlList.count();i++) {
            fName = urlList[i].toLocalFile();                               // convert first QUrl to local path
            info.setFile(fName);                                            // information about file
            if (info.isFile()) FileList.append(fName);                      // append file
        }
        // Now, parse all files to find music files (and put them in MusicFileList)
        QStringList MusicFileList;
        int i=0;
        while (i<FileList.count()) {
            if (ApplicationConfig->AllowMusicExtension.contains(QFileInfo(FileList.at(i)).suffix().toLower())) {
                cMusicObject  *MediaFile=new cMusicObject(ApplicationConfig);
                if ((MediaFile)&&(MediaFile->GetInformationFromFile(FileList.at(i),NULL,NULL,-1)&&(MediaFile->CheckFormatValide(this)))) {
                    MusicFileList.append(FileList.at(i));
                    FileList.removeAt(i);
                } else i++;
            } else i++;
        }
        if ((MusicFileList.count()>0)&&(FileList.count()==0)&&(Diaporama->List.count()>0)) {
            // Drag & drop with Music only
            IsDragOn      =DRAGMODE_EXTERNALADD_MUSIC;
            DragItemSource=-1;
            DragItemDest  =-1;
            setCursor(Qt::ClosedHandCursor);
            event->acceptProposedAction();
        } else if ((MusicFileList.count()==0)&&(FileList.count()>0)) {
            // Drag & drop with no music file(s)
            IsDragOn      =DRAGMODE_EXTERNALADD_SLIDE;
            DragItemSource=-1;
            DragItemDest  =-1;
            setCursor(Qt::ClosedHandCursor);
            event->acceptProposedAction();
        } else {
            // Reject action
            DragItemSource   =-1;
            DragItemDest     =-1;
            IsDragOn         =DRAGMODE_NOACTION;
        }
    } else {
        // Reject action
        DragItemSource   =-1;
        DragItemDest     =-1;
        IsDragOn         =DRAGMODE_NOACTION;
    }
}

//====================================================================================================================

void cCustomSlideTable::dragLeaveEvent(QDragLeaveEvent *event) {
    if (IsDragOn==DRAGMODE_EXTERNALADD_SLIDE) {
        // Clear previous selected slide
        int NbrX=columnCount();
        if ((NbrX>0)&&(DragItemDest>=0)) {
            int ToUse   =DragItemDest;
            DragItemDest=-1;
            if (ToUse<Diaporama->List.count())  update(model()->index(ToUse/NbrX,ToUse-(ToUse/NbrX)*NbrX));
                else                            update(model()->index((ToUse-1)/NbrX,(ToUse-1)-((ToUse-1)/NbrX)*NbrX));
        }
        IsDragOn=DRAGMODE_NOACTION;
    }
    event->accept();
    setCursor(Qt::ArrowCursor);
}

//====================================================================================================================

void cCustomSlideTable::dropEvent(QDropEvent *event) {
    IsDragOn=DRAGMODE_NOACTION;
    ((MainWindow *)ApplicationConfig->TopLevelWindow)->FileList.clear();

    QList<QUrl> urlList;
    QString     fName;
    QFileInfo   info;

    if (event->mimeData()->hasUrls()) {
        urlList = event->mimeData()->urls();                                // returns list of QUrls
        for (int i=0;i<urlList.count();i++) {
            fName = urlList[i].toLocalFile();                               // convert first QUrl to local path
            info.setFile(fName);                                            // information about file
            if (info.isFile()) ((MainWindow *)ApplicationConfig->TopLevelWindow)->FileList.append(fName);    // append file
        }
    }
    event->acceptProposedAction();
    if (((MainWindow *)ApplicationConfig->TopLevelWindow)->FileList.count()>0) emit DoAddDragAndDropFile();
}

//====================================================================================================================

void cCustomSlideTable::dragMoveEvent(QDragMoveEvent *event) {
    if ((IsDragOn==DRAGMODE_EXTERNALADD_SLIDE)||(IsDragOn==DRAGMODE_EXTERNALADD_MUSIC)) {

        int ThumbWidth  =columnWidth(0);
        int ThumbHeight =rowHeight(0);
        int NbrX        =columnCount();

        // Get item number under mouse
        int newrow              =ThumbHeight>0?(event->pos().y()+verticalOffset())/ThumbHeight:0;
        int newcol              =ThumbWidth>0?(event->pos().x()+horizontalOffset())/ThumbWidth:0;
        int Selected            =newrow*NbrX+newcol;
        bool MusicPart          =((event->pos().y()+verticalOffset())-newrow*ThumbHeight)>=3*(ThumbHeight/4);
        //bool BackgroundPart =((event->pos().y()+verticalOffset())-newrow*ThumbHeight)<(ThumbHeight/4);
        bool AncCursorPosValide =CursorPosValide;

        // Adjust selected
        if (IsDragOn==DRAGMODE_EXTERNALADD_SLIDE) {
            if (Selected>Diaporama->List.count()) Selected=Diaporama->List.count();
            else if ((Selected==Diaporama->List.count()-1)&&(event->pos().x()>0)&&(event->pos().x()<width())) {
                int NewX=event->pos().x()-(event->pos().x()/ThumbWidth)*ThumbWidth;
                if (NewX>=3*ThumbWidth/4) Selected=Diaporama->List.count();
            }
        }
        if (Selected<0) Selected=0;

        if ((event->pos().x()>=0)&&(event->pos().x()<=viewport()->width())&&(event->pos().y()>=0)&&(event->pos().y()<=viewport()->height())) {
            CursorPosValide=false;
            if (IsDragOn==DRAGMODE_EXTERNALADD_MUSIC) {
                if ((Selected>=0)&&(Selected<Diaporama->List.count())&&(event->pos().x()>=-columnWidth(0))&&(event->pos().x()<=width()+columnWidth(0))&&
                    (event->pos().y()>=0-(PartitionMode?rowHeight(0):0))&&(event->pos().y()<=height()+(PartitionMode?rowHeight(0):0))) {
                        if ((MusicPart)/*&&(!Diaporama->List[Selected]->MusicType)*/) CursorPosValide=true;
                }
            } else if (IsDragOn==DRAGMODE_EXTERNALADD_SLIDE) {
                if ((Selected!=-1)&&(event->pos().x()>=-columnWidth(0))&&(event->pos().x()<=width()+columnWidth(0))&&
                    (event->pos().y()>=0-(PartitionMode?rowHeight(0):0))&&(event->pos().y()<=height()+(PartitionMode?rowHeight(0):0))) {
                    CursorPosValide=true;
                }
            }
        } else CursorPosValide=false;

        if ((Selected!=DragItemDest)||(AncCursorPosValide!=CursorPosValide)) {

            // Clear previous selected slide
            if ((NbrX>0)&&(DragItemDest>=0)) {
                int ToUse   =DragItemDest;
                DragItemDest=-1;
                if (ToUse<Diaporama->List.count())  update(model()->index(ToUse/NbrX,ToUse-(ToUse/NbrX)*NbrX));
                    else                            update(model()->index((ToUse-1)/NbrX,(ToUse-1)-((ToUse-1)/NbrX)*NbrX));
            }

            DragItemDest=Selected;

            // Display new selected slide
            if ((NbrX>0)&&(Selected>=0)) {
                if (Selected<Diaporama->List.count())   update(model()->index(Selected/NbrX,Selected-(Selected/NbrX)*NbrX));
                    else                                update(model()->index((Selected-1)/NbrX,(Selected-1)-((Selected-1)/NbrX)*NbrX));
            }
        }
        if (CursorPosValide) event->acceptProposedAction(); else event->setDropAction(Qt::IgnoreAction);
    }
}

//====================================================================================================================

void cCustomSlideTable::mouseMoveEvent(QMouseEvent *event) {
    if ((IsDragOn!=DRAGMODE_INTERNALMOVE_SLIDE)&&(IsDragOn!=DRAGMODE_INTERNALMOVE_MUSIC)&&(IsDragOn!=DRAGMODE_INTERNALMOVE_BACKGROUND)) {
        QTableWidget::mouseMoveEvent(event);
    } else {
        if      ((!PartitionMode)&&(event->pos().x()<5/*0*/)&&(horizontalScrollBar()->value()>0))                                        horizontalScrollBar()->setValue(horizontalScrollBar()->value()-1);  // Try to scroll left if not partition mode
        else if ((!PartitionMode)&&(event->pos().x()>width()-5)&&(horizontalScrollBar()->value()<horizontalScrollBar()->maximum()))   horizontalScrollBar()->setValue(horizontalScrollBar()->value()+1);  // Try to scroll right if not partition mode
        else if (( PartitionMode)&&(event->pos().y()<0)&&(verticalScrollBar()->value()>0))                                          verticalScrollBar()->setValue(verticalScrollBar()->value()-1);      // Try to scroll up if partition mode
        else if (( PartitionMode)&&(event->pos().y()>height())&&(verticalScrollBar()->value()<verticalScrollBar()->maximum()))      verticalScrollBar()->setValue(verticalScrollBar()->value()+1);      // Try to scroll down if partition mode

        int ThumbWidth  =columnWidth(0);
        int ThumbHeight =rowHeight(0);
        int NbrX        =columnCount();

        int newrow=ThumbHeight>0?(event->pos().y()+verticalOffset())/ThumbHeight:0;
        int newcol=ThumbWidth>0?(event->pos().x()+horizontalOffset())/ThumbWidth:0;
        int Selected=newrow*NbrX+newcol;
        if (Selected>Diaporama->List.count()) Selected=Diaporama->List.count();
        if (Selected<0) Selected=0;

        bool MusicPart     =((event->pos().y()+verticalOffset())-newrow*ThumbHeight)>=3*(ThumbHeight/4);
        bool BackgroundPart=((event->pos().y()+verticalOffset())-newrow*ThumbHeight)<(ThumbHeight/4);
        bool AncCursorPosValide=CursorPosValide;

        if ((event->pos().x()>=0)&&(event->pos().x()<=viewport()->width())&&(event->pos().y()>=0)&&(event->pos().y()<=viewport()->height())) {
            CursorPosValide=false;
            if (IsDragOn==DRAGMODE_INTERNALMOVE_MUSIC) {
                if ((Selected!=-1)&&(event->pos().x()>=-columnWidth(0))&&(event->pos().x()<=width()+columnWidth(0))&&
                    (event->pos().y()>=0-(PartitionMode?rowHeight(0):0))&&(event->pos().y()<=height()+(PartitionMode?rowHeight(0):0))) {
                        if ((Selected!=Diaporama->CurrentCol)&&(Selected<Diaporama->List.count())&&(MusicPart)/*&&(!Diaporama->List[Selected]->MusicType)*/) CursorPosValide=true;
                }
            } else if (IsDragOn==DRAGMODE_INTERNALMOVE_BACKGROUND) {
                if ((Selected!=-1)&&(event->pos().x()>=-columnWidth(0))&&(event->pos().x()<=width()+columnWidth(0))&&
                    (event->pos().y()>=0-(PartitionMode?rowHeight(0):0))&&(event->pos().y()<=height()+(PartitionMode?rowHeight(0):0))) {
                        if ((Selected!=Diaporama->CurrentCol)&&(Selected<Diaporama->List.count())&&(BackgroundPart)&&(!Diaporama->List[Selected]->BackgroundType)) CursorPosValide=true;
                }
            } else if (IsDragOn==DRAGMODE_INTERNALMOVE_SLIDE) {
                if ((Selected!=-1)&&(event->pos().x()>=-columnWidth(0))&&(event->pos().x()<=width()+columnWidth(0))&&
                    (event->pos().y()>=0-(PartitionMode?rowHeight(0):0))&&(event->pos().y()<=height()+(PartitionMode?rowHeight(0):0))) {
                    if ((Selected!=Diaporama->CurrentCol)&&(Selected!=Diaporama->CurrentCol+1)) CursorPosValide=true;
                }
            }
        } else CursorPosValide=false;

        if (CursorPosValide) setCursor(Qt::ClosedHandCursor); else setCursor(Qt::ForbiddenCursor);

        if ((Selected!=DragItemDest)||(AncCursorPosValide!=CursorPosValide)) {

            // Clear previous selected slide
            if ((NbrX>0)&&(DragItemDest>=0)) {
                int ToUse   =DragItemDest;
                DragItemDest=-1;
                if (ToUse<Diaporama->List.count())  update(model()->index(ToUse/NbrX,ToUse-(ToUse/NbrX)*NbrX));
                    else                            update(model()->index((ToUse-1)/NbrX,(ToUse-1)-((ToUse-1)/NbrX)*NbrX));
            }

            DragItemDest=Selected;

            // Display new selected slide
            if ((NbrX>0)&&(Selected>=0)) {
                if (Selected<Diaporama->List.count())   update(model()->index(Selected/NbrX,Selected-(Selected/NbrX)*NbrX));
                    else                                update(model()->index((Selected-1)/NbrX,(Selected-1)-((Selected-1)/NbrX)*NbrX));
            }
        }
    }
}

//====================================================================================================================

void cCustomSlideTable::mousePressEvent(QMouseEvent *event) {
    if (event->button()!=Qt::LeftButton) {
        QTableWidget::mousePressEvent(event);
        IsDragOn=DRAGMODE_NOACTION;
    } else {
        if ((columnCount()==0)||(Diaporama->List.count()==0)||(IsDragOn==DRAGMODE_INTERNALMOVE_SLIDE)||(IsDragOn==DRAGMODE_INTERNALMOVE_MUSIC)||(IsDragOn==DRAGMODE_INTERNALMOVE_BACKGROUND)) {
            QTableWidget::mousePressEvent(event);
            return;
        }
        setCursor(Qt::ArrowCursor);

        // Get item number under mouse
        int ThumbWidth      =columnWidth(0);
        int ThumbHeight     =rowHeight(0);
        int row             =(event->pos().y()+verticalOffset())/ThumbHeight;
        int col             =(event->pos().x()+horizontalOffset())/ThumbWidth;
        int Current         =currentRow()*columnCount()+currentColumn();
        int Selected        =row*columnCount()+col;
        bool MusicPart      =((event->pos().y()+verticalOffset())-row*ThumbHeight)>=3*(ThumbHeight/4);
        bool BackgroundPart =((event->pos().y()+verticalOffset())-row*ThumbHeight)<(ThumbHeight/4);

        if (event->modifiers()==Qt::ShiftModifier) {
            // Shift : Add all items from current to item
            if (Current<Selected) for (int i=Current+1;i<=Selected;i++) selectionModel()->select(model()->index(i/columnCount(),i-(i/columnCount())*columnCount(),QModelIndex()),QItemSelectionModel::Select);
                else              for (int i=Current-1;i>=Selected;i--) selectionModel()->select(model()->index(i/columnCount(),i-(i/columnCount())*columnCount(),QModelIndex()),QItemSelectionModel::Select);
        } else if (event->modifiers()==Qt::ControlModifier) {
            // Control : toggle selection for item (if is not current item)
            if (Selected!=Diaporama->CurrentCol) selectionModel()->select(model()->index(row,col,QModelIndex()),QItemSelectionModel::Toggle);
        } else {
            // Other : clear selection, then add item to selection
            ResetDisplay(Selected);
        }

        IsDragOn=DRAGMODE_NOACTION;
        DragItemSource=row*columnCount()+col;

        // if it was previously selected then start a drag & drop operation
        if ((Selected>=0)&&(Selected<Diaporama->List.count())) {
            if ((MusicPart)&&(Diaporama->List[Selected]->MusicType)&&(Diaporama->List[Selected]->MusicList.count()>0)) IsDragOn=DRAGMODE_INTERNALMOVE_MUSIC;
                else if ((BackgroundPart)&&(Diaporama->List[Selected]->BackgroundType)) IsDragOn=DRAGMODE_INTERNALMOVE_BACKGROUND;
                else IsDragOn=DRAGMODE_INTERNALMOVE_SLIDE;
            DragItemSource=Selected;
            DragItemDest  =Selected;
            setCursor(Qt::ClosedHandCursor);
        }
    }
}

//====================================================================================================================

void cCustomSlideTable::mouseReleaseEvent(QMouseEvent *event) {
    if (columnCount()==0) return;
    setCursor(Qt::ArrowCursor);
    if (event->button()==Qt::RightButton) {
        int ThumbWidth      =columnWidth(0);
        int ThumbHeight     =rowHeight(0);
        int row             =(event->pos().y()+verticalOffset())/ThumbHeight;
        int col             =(event->pos().x()+horizontalOffset())/ThumbWidth;

        ClickedSlide  =row*columnCount()+col;
        MusicPart     =((event->pos().y()+verticalOffset())-row*ThumbHeight)>=3*(ThumbHeight/4);
        BackgroundPart=((event->pos().y()+verticalOffset())-row*ThumbHeight)<(ThumbHeight/4);

        emit RightClickEvent(event);
        IsDragOn=DRAGMODE_NOACTION;
    } else if ((IsDragOn!=DRAGMODE_INTERNALMOVE_SLIDE)&&(IsDragOn!=DRAGMODE_INTERNALMOVE_MUSIC)&&(IsDragOn!=DRAGMODE_INTERNALMOVE_BACKGROUND)) {
        QTableWidget::mouseReleaseEvent(event);
        IsDragOn=DRAGMODE_NOACTION;
    } else {
        if ((DragItemDest!=-1)&&(DragItemDest!=DragItemSource)&&(event->pos().x()>=-columnWidth(0))&&(event->pos().x()<=width()+columnWidth(0))&&
            (event->pos().y()>=0-(PartitionMode?rowHeight(0):0))&&(event->pos().y()<=height()+(PartitionMode?rowHeight(0):0))) {
            DragMoveItemCause=IsDragOn;
            emit DragMoveItem();
        } else {
            setUpdatesEnabled(false);
            setUpdatesEnabled(true);
        }
        IsDragOn=DRAGMODE_NOACTION;
    }
    setCursor(Qt::ArrowCursor);
}

//====================================================================================================================

void cCustomSlideTable::mouseDoubleClickEvent(QMouseEvent *event) {
    if (columnCount()==0) return;
    int  ThumbWidth =columnWidth(0);
    int  ThumbHeight=rowHeight(0);
    int  row=(event->pos().y()+verticalOffset())/ThumbHeight;
    int  col=(event->pos().x()+horizontalOffset())/ThumbWidth;
    int  NbrX          =width()/ThumbWidth;
    bool MusicPart     =((event->pos().y()+verticalOffset())-row*ThumbHeight)>=3*(ThumbHeight/4);
    bool BackgroundPart=((event->pos().y()+verticalOffset())-row*ThumbHeight)<(ThumbHeight/4);

    int Selected=(PartitionMode?row*NbrX+col:col);
    int x=event->pos().x()+horizontalOffset()-col*ThumbWidth;

    if ((Selected>=0)&&(Selected<Diaporama->List.count())) {
        if (MusicPart)              emit EditMusicTrack();
        else if (BackgroundPart)    emit EditBackground();
        else if (x<=TransitionSize) emit EditTransition();
        else                        emit EditMediaObject();
    }
}

//====================================================================================================================

void cCustomSlideTable::wheelEvent(QWheelEvent *event) {
    if (!PartitionMode) {
        int numDegrees = event->delta() / 8;
        int numSteps = numDegrees / 15;

        SetCurrentCell(Diaporama->CurrentCol-numSteps);
        event->accept();
    } else QTableWidget::wheelEvent(event);
}

//====================================================================================================================

void cCustomSlideTable::AddObjectToTimeLine(int CurIndex) {
    int ThumbWidth =Diaporama->GetWidthForHeight(ApplicationConfig->TimelineHeight/2-4)+36+5;
    int ThumbHeight=ApplicationConfig->TimelineHeight;
    int NbrX       =viewport()->width()/ThumbWidth;
    int NbrY       =NbrX>0?Diaporama->List.count()/NbrX:0;

    if (NbrX*NbrY<Diaporama->List.count()) NbrY++;

    // Remove empty cell with unselecable item (if needed)
    for (int Row=0;Row<rowCount();Row++) for (int Col=0;Col<columnCount();Col++) if (cellWidget(Row,Col)!=NULL) removeCellWidget(Row,Col);

    if (PartitionMode) {
        // Partition mode
        setColumnCount(NbrX);   for (int Col=0;Col<columnCount();Col++) setColumnWidth(Col,ThumbWidth);
        setRowCount(NbrY);      for (int Row=0;Row<rowCount();Row++)    setRowHeight(Row,ThumbHeight);
    } else {
        setRowCount(1);                             setRowHeight(0,ThumbHeight);
        setColumnCount(Diaporama->List.count());    for (int i=0;i<columnCount();i++) setColumnWidth(i,ThumbWidth);
    }

    // Adjust current sel
    Diaporama->CurrentCol=CurIndex;
    SetCurrentCell(Diaporama->CurrentCol);
}

//====================================================================================================================

void cCustomSlideTable::DoResetDisplay() {
    ResetDisplay(CurrentSelected());
}

void cCustomSlideTable::ResetDisplay(int Selected) {
    int ThumbWidth =Diaporama->GetWidthForHeight(ApplicationConfig->TimelineHeight/2-4)+36+5;
    int ThumbHeight=ApplicationConfig->TimelineHeight;
    int NbrX       =viewport()->width()/ThumbWidth;
    int NbrY       =NbrX>0?Diaporama->List.count()/NbrX:0;

    if (NbrX*NbrY<Diaporama->List.count()) NbrY++;

    ((MainWindow *)ApplicationConfig->TopLevelWindow)->FLAGSTOPITEMSELECTION=true;
    setUpdatesEnabled(false);

    // Clear selection
    selectionModel()->clear();

    // Remove empty cell with unselecable item (if needed)
    for (int Row=0;Row<rowCount();Row++) for (int Col=0;Col<columnCount();Col++) if (cellWidget(Row,Col)!=NULL) removeCellWidget(Row,Col);
    // Set new col and row count
    if (PartitionMode) {
        // Partition mode
        setColumnCount(NbrX);   for (int Col=0;Col<columnCount();Col++) setColumnWidth(Col,ThumbWidth);
        setRowCount(NbrY);      for (int Row=0;Row<rowCount();Row++)    setRowHeight(Row,ThumbHeight);
    } else {
        setRowCount(1);                             setRowHeight(0,ThumbHeight);
        setColumnCount(Diaporama->List.count());    for (int i=0;i<columnCount();i++) setColumnWidth(i,ThumbWidth);
    }
    ((MainWindow *)ApplicationConfig->TopLevelWindow)->FLAGSTOPITEMSELECTION=false;
    if (Selected>=0) {
        int row=columnCount()>0?Selected/columnCount():0;
        int col=Selected-row*columnCount();
        setCurrentCell(row,col,QItemSelectionModel::Select|QItemSelectionModel::Current);
    }
    setUpdatesEnabled(true);  // Reset timeline painting
}

//====================================================================================================================

void cCustomSlideTable::SetTimelineHeight(bool NewPartitionMode) {
    PartitionMode=NewPartitionMode;
    //int Selected=CurrentSelected();
    if (!PartitionMode) {
        setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Fixed);
        setVerticalScrollBarPolicy(Qt::ScrollBarAlwaysOff);
        setHorizontalScrollBarPolicy(Qt::ScrollBarAlwaysOn);
        setFixedHeight(ApplicationConfig->TimelineHeight+(height()-viewport()->height()));
    } else {
        setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Expanding);
        setMaximumHeight(QWIDGETSIZE_MAX);
        setVerticalScrollBarPolicy(Qt::ScrollBarAlwaysOn);
        setHorizontalScrollBarPolicy(Qt::ScrollBarAlwaysOff);
    }
    updateGeometry();
    QTimer::singleShot(LATENCY,this,SLOT(DoResetDisplay()));
}

//====================================================================================================================

int cCustomSlideTable::CurrentSelected() {
    return currentRow()*columnCount()+currentColumn();
}

bool cCustomSlideTable::IsMultipleSelection() {
    QModelIndexList SelList=selectionModel()->selectedIndexes();
    return (SelList.count()>1);
}

void cCustomSlideTable::CurrentSelectionList(QList<int> *List) {
    QModelIndexList SelList=selectionModel()->selectedIndexes();
    QList<bool>     IsSelected;
    for (int i=0;i<rowCount()*columnCount();i++) IsSelected.append(false);
    for (int i=0;i<SelList.count();i++) {
        int Index=SelList.at(i).row()*columnCount()+SelList.at(i).column();
        IsSelected[Index]=true;
    }
    List->clear();
    for (int i=0;i<IsSelected.count();i++) if ((i<Diaporama->List.count())&&(IsSelected[i])) List->append(i);
}

//====================================================================================================================

void cCustomSlideTable::SetCurrentCell(int Index) {
    if (columnCount()==0) return;
    selectionModel()->clear();      // Clear selection
    int row=Index/columnCount();
    int col=Index-row*columnCount();
    setCurrentCell(row,col,QItemSelectionModel::Select|QItemSelectionModel::Current);    
}

//====================================================================================================================

void cCustomSlideTable::CleanAll() {
    setUpdatesEnabled(false);
    for (int Row=0;Row<rowCount();Row++) for (int Col=0;Col<columnCount();Col++) if (cellWidget(Row,Col)!=NULL) removeCellWidget(Row,Col);
    while (columnCount()>0) removeColumn(columnCount()-1);
    while (rowCount())      removeRow(rowCount()-1);
    setUpdatesEnabled(true);
}

