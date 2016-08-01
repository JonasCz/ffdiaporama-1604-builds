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

#include "QCustomRuler.h"

#include <QPainter>
#include <QFont>

//======================================
// Specific defines for this dialog box
//======================================
#define TAQUET_SIZE         9       // TAQUET_SIZE is QSlider::handle:horizontal (width+margin)/2
#define CompletTickH1       3       // Y start position of the complete tick line
#define CompletTickH2       15      // Y end position of the complete tick line
#define IntermediateTickH1  7       // Y start position of the intermediate tick line
#define IntermediateTickH2  15      // Y end position of the intermediate tick line
#define ThumbWidth          14      // Width of the thumb
#define ThumbHeight         20      // Height of the thumb
#define ThumbYPos           16      // Y midle position of the thumb

//*********************************************************************************************************************************************
// Base object for frame manipulation
//*********************************************************************************************************************************************

cFrameList::cFrameList() {
}

//====================================================================================================================

cFrameList::~cFrameList() {
    ClearList();
}

//====================================================================================================================
// Clear the list (make av_free of each packet)
//====================================================================================================================
void cFrameList::ClearList() {
    while (List.count()>0) {
        cDiaporamaObjectInfo *Frame=(cDiaporamaObjectInfo *)DetachFirstFrame();
        if (Frame) delete(Frame);
    }
}

//====================================================================================================================
// Detach the first image of the list (do not make delete)
//====================================================================================================================
void *cFrameList::DetachFirstFrame() {
    if (List.count()>0) return List.takeFirst(); else return NULL;
}

//====================================================================================================================
// Retreve a link to the first frame in the list
//====================================================================================================================
void *cFrameList::GetFirstFrame() {
    if (List.count()>0) return List[0]; else return NULL;
}

//====================================================================================================================
// Retreve a link to the last frame in the list
//====================================================================================================================
void *cFrameList::GetLastFrame() {
    if (List.count()>0) return List[List.count()-1]; else return NULL;
}

//====================================================================================================================
// Append a packet to the end of the list
//====================================================================================================================
void cFrameList::AppendFrame(void *Frame) {
    List.append(Frame);
}

//====================================================================================================================

QCustomRuler::QCustomRuler(QWidget *parent):QSlider(parent) {
    EditStartEnd    =false;
    TrackingMode    =TrackingMode_Thumb;
    StartPos        =0;
    EndPos          =0;
    TotalDuration   =0;
    PreviousStartPos=-1;
    PrevisousEndPos =-1;
    NextStartPos    =-1;
    NextEndPos      =-1;
    IsAnalysed      =false;
    Analysed        =100;
    SoundWave       =NULL;

    //setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Fixed);
    //setFixedHeight(32);
}

QCustomRuler::~QCustomRuler() {
    if (SoundWave) {
        delete SoundWave;
        SoundWave=NULL;
    }
}
//====================================================================================================================

void QCustomRuler::AnalyseSound(cVideoFile *MusicObject) {
    IsAnalysed=MusicObject->DoAnalyseSound(&Peak,&Moyenne,&IsAnalysed,&Analysed);
    SoundLevel=MusicObject->GetSoundLevel();
    PrepareSoundWave();
    Analysed=100;
    TotalDuration=QTime(0,0,0,0).msecsTo(MusicObject->GetRealDuration());
}

//====================================================================================================================

void QCustomRuler::PrepareSoundWave() {
    QImage   *Image=new QImage(width()-TAQUET_SIZE,height()-32,QImage::Format_ARGB32_Premultiplied);
    QPainter Painter;
    QPen     BluePen,GreenPen,BlackPen,WhitePen;
    int      Height=Image->height();
    Painter.begin(Image);
    Painter.fillRect(QRect(0,0,Image->width(),Height),Qt::white);
    Height=Height/2;
    Painter.translate(0,Height);
    Painter.save();
    BluePen.setColor(Qt::blue);
    GreenPen.setColor(Qt::green);
    BlackPen.setColor(Qt::black);
    WhitePen.setColor(Qt::white);
    Painter.scale(qreal(Image->width())/qreal(Peak.count()),1);
    for (int i=0;i<Peak.count();i++) {
        Painter.setPen(BluePen);  Painter.drawLine(QPointF(i,Peak[i]*Height),QPointF(i,-Peak[i]*Height));
        Painter.setPen(GreenPen); Painter.drawLine(QPointF(i,Moyenne[i]*Height),QPointF(i,-Moyenne[i]*Height));
    }
    Painter.restore();
    WhitePen.setStyle(Qt::DashLine);    Painter.setPen(WhitePen);
    Painter.drawLine(QPointF(0,-SoundLevel*Height),QPointF(Image->width(),-SoundLevel*Height));
    BlackPen.setStyle(Qt::DashLine);    Painter.setPen(BlackPen);
    Painter.drawLine(QPointF(-1,-1-SoundLevel*Height),QPointF(-1+Image->width(),-1-SoundLevel*Height));
    BlackPen.setStyle(Qt::SolidLine);
    WhitePen.setStyle(Qt::SolidLine);
    QFont font= QApplication::font();
    Painter.setFont(font);
    #ifdef Q_OS_WIN
    font.setPointSizeF(double(90)/ScaleFontAdjust);                    // Scale font
    #else
    font.setPointSizeF((double(110)/ScaleFontAdjust)*ScreenFontAdjust);// Scale font
    #endif
    Painter.setFont(font);
    int HFont=Painter.fontMetrics().height();
    if (Height-SoundLevel*Height-HFont>0) {
        Painter.setPen(WhitePen);
        Painter.drawText(QRectF(0,-Height,Image->width(),Height-SoundLevel*Height),QString("%1").arg(int(SoundLevel*100)),QTextOption(Qt::AlignRight|Qt::AlignBottom));
        Painter.setPen(BlackPen);
        Painter.drawText(QRectF(-1,-1-Height,Image->width(),Height-SoundLevel*Height),QString("%1").arg(int(SoundLevel*100)),QTextOption(Qt::AlignRight|Qt::AlignBottom));
    } else {
        Painter.setPen(WhitePen);
        Painter.drawText(QRectF(0,-Height+SoundLevel*Height,Image->width(),SoundLevel*Height),QString("%1").arg(int(SoundLevel*100)),QTextOption(Qt::AlignRight|Qt::AlignTop));
        Painter.setPen(BlackPen);
        Painter.drawText(QRectF(-1,-1-Height+SoundLevel*Height,Image->width(),SoundLevel*Height),QString("%1").arg(int(SoundLevel*100)),QTextOption(Qt::AlignRight|Qt::AlignTop));
    }
    Painter.end();
    if (SoundWave) delete SoundWave;
    SoundWave=Image;
}

//====================================================================================================================

void QCustomRuler::ActiveSlider(int TotalDuration) {
    this->TotalDuration=TotalDuration;
}

//====================================================================================================================

void QCustomRuler::resizeEvent(QResizeEvent *) {
//    if (Slider!=NULL) Slider->setMinimumWidth(this->width());
}

//====================================================================================================================

void QCustomRuler::mouseMoveEvent(QMouseEvent *ev) {
    if (isSliderDown()) {
        ev->accept();
        int Delta=int((double(ev->pos().x()-TrackingOffset)/double(width()-TAQUET_SIZE*2))*maximum());
        int NewPosition=TrackingValue+Delta;
        if (NewPosition<0)  NewPosition=0;
        if (NewPosition>maximum()) NewPosition=maximum();
        if (TrackingMode==TrackingMode_Start) {
            if (NewPosition>EndPos) NewPosition=EndPos-100;
            StartPos=NewPosition;
            setValue(NewPosition);
            emit StartEndChangeByUser();
        } else if (TrackingMode==TrackingMode_End) {
            if (NewPosition<StartPos) NewPosition=StartPos+100;
            EndPos=NewPosition;
            setValue(NewPosition);
            emit StartEndChangeByUser();
        } else setValue(NewPosition);
    } else QSlider::mouseMoveEvent(ev);
}

//====================================================================================================================

void QCustomRuler::mousePressEvent(QMouseEvent *ev) {
    if (ev->button()==Qt::LeftButton) {
        ev->accept();
        int DecalY=height()-32;
        int ThumbX=int(double(this->width()-TAQUET_SIZE*2)*(double(value())/double(maximum())))+TAQUET_SIZE;
        int EndX  =int(double(this->width()-TAQUET_SIZE*2)*(double(EndPos)/double(TotalDuration)))+TAQUET_SIZE;
        int StartX=int(double(this->width()-TAQUET_SIZE*2)*(double(StartPos)/double(TotalDuration)))+TAQUET_SIZE;
        if ((EditStartEnd)&&(ev->y()>DecalY+16)&&(ev->x()>=StartX-ThumbWidth)&&(ev->x()<=StartX+ThumbWidth)) {                 // It's on the start thumb
            TrackingMode=TrackingMode_Start;
            setValue(StartPos);
        } else if ((EditStartEnd)&&(ev->y()>DecalY+16)&&(ev->x()>=EndX-ThumbWidth)&&(ev->x()<=EndX+ThumbWidth)) {              // It's on the end thumb
            TrackingMode=TrackingMode_End;
            setValue(EndPos);
        } else if ((ev->x()>=ThumbX-ThumbWidth/2)&&(ev->x()<=ThumbX+ThumbWidth/2)) {                                    // It's on the thumb
            TrackingMode=TrackingMode_Thumb;
        } else if ((ev->x()>=TAQUET_SIZE-ThumbWidth/2)&&(ev->x()<=this->width()-TAQUET_SIZE+ThumbWidth/2)) {            // It's on the ruller so set new value
            TrackingMode=TrackingMode_None;
            setValue(int(double((ev->x()-TAQUET_SIZE)/double(this->width()-TAQUET_SIZE*2))*double(maximum())));
        }
        if (TrackingMode!=TrackingMode_None) {
            TrackingOffset=ev->pos().x();
            TrackingValue =value();
            triggerAction(SliderMove);
            setRepeatAction(SliderNoAction);
            update();
            setSliderDown(true);
        }
        emit PositionChangeByUser();
    } else QSlider::mousePressEvent(ev);
}

//====================================================================================================================

void QCustomRuler::mouseReleaseEvent(QMouseEvent *ev) {
    if (isSliderDown()) {
        ev->accept();
        setRepeatAction(SliderNoAction);
        setSliderDown(false);
        TrackingMode=TrackingMode_None;
        update();
        emit PositionChangeByUser();
    } else QSlider::mouseReleaseEvent(ev);
}

//====================================================================================================================

void QCustomRuler::paintEvent(QPaintEvent *) {
    double      Width = double(this->width());
    double      Height= double(this->height());
    QPainter    Painter(this);
    QFont       font= QApplication::font();
    Painter.setFont(font);

    if (Analysed<100) {
        QPen Pen;
        Pen.setWidth(1);
        Pen.setColor(Qt::black);
        Painter.setPen(Pen);
        QTextOption Option(Qt::AlignCenter);
        Painter.setBrush(Qt::white);
        Painter.drawRect(QRect(0,0,Width-1,Height-32-1));
        Painter.drawText(QRect(0,0,Width-1,Height-32-1),QApplication::translate("MainWindow","Analyse file %1% ...").arg(Analysed*100,0,'f',1),Option);
        Painter.setOpacity(0.5);
        Painter.fillRect(QRect(1,1,qreal(Analysed)*qreal(Width-2),Height-32-2),QColor(Qt::blue));
        Painter.setOpacity(1);
    } else {

        #ifdef Q_OS_WIN
        font.setPointSizeF(double(90)/ScaleFontAdjust);                    // Scale font
        #else
        font.setPointSizeF((double(110)/ScaleFontAdjust)*ScreenFontAdjust);// Scale font
        #endif
        Painter.setFont(font);

        // Prepare QPainter and calc positions
        int         WidthTick   =Painter.fontMetrics().width("00:00");
        long        PosStart    =TotalDuration!=0?long((Width-TAQUET_SIZE*2)*(double(StartPos)/double(TotalDuration))):0;
        long        PosEnd      =TotalDuration!=0?long((Width-TAQUET_SIZE*2)*(double(EndPos)/double(TotalDuration))):0;
        QPen        Pen;

        Pen.setWidth(1);
        Painter.save();

        //********************************************************
        // Draw slider background
        //********************************************************

        Pen.setColor(QColor(0x20,0x20,0x20));
        Painter.setPen(Pen);
        if (Height>32) {
            if (SoundWave) {
                Painter.drawImage(TAQUET_SIZE,0,*SoundWave);
                Painter.fillRect(QRect(0,0,TAQUET_SIZE,Height-32-2),QColor(Qt::white));
                Painter.fillRect(QRect(Width-TAQUET_SIZE,0,TAQUET_SIZE,Height-32-2),QColor(Qt::white));
                Painter.setBrush(Qt::NoBrush);
                // Draw start/end zone
                if ((TotalDuration!=0)&&(StartPos<EndPos)) {
                    Painter.setOpacity(0.5);
                    Painter.fillRect(QRect(TAQUET_SIZE+PosStart,1,PosEnd-PosStart,Height-32-2),QColor(Qt::blue));
                    Painter.setOpacity(1);
                }
            } else Painter.setBrush(Qt::white);
            Painter.drawRect(QRect(0,0,Width-1,Height-32-1));
        }
        Painter.translate(0,Height-32);
        Height=32;
        Painter.fillRect(QRect(0,0,Width,Height),QColor(Qt::black));
        Painter.drawLine(0,0,Width,0);
        Pen.setColor(Qt::white);
        Painter.setPen(Pen);

        if (PosEnd>PosStart) {
            // Draw zone
            Painter.fillRect(QRect(TAQUET_SIZE+PosStart,IntermediateTickH1,PosEnd-PosStart,IntermediateTickH2),QColor(Qt::blue));
            // Draw previous zone
            if (PreviousStartPos!=-1) {
                Painter.setOpacity(0.5);
                //long    PosStart=long((Width-TAQUET_SIZE*2)*(double(PreviousStartPos)/double(TotalDuration)));
                long    aPosEnd  =long((Width-TAQUET_SIZE*2)*(double(PrevisousEndPos)/double(TotalDuration)));
                Painter.fillRect(QRect(TAQUET_SIZE+PosStart,IntermediateTickH1,aPosEnd-PosStart,IntermediateTickH2),QColor(Qt::green));
                Painter.setOpacity(1);
            }
            // Draw next zone
            if (NextStartPos!=-1) {
                Painter.setOpacity(0.5);
                long    aPosStart=long((Width-TAQUET_SIZE*2)*(double(NextStartPos)/double(TotalDuration)));
                //long    PosEnd  =long((Width-TAQUET_SIZE*2)*(double(NextEndPos)/double(TotalDuration)));
                Painter.fillRect(QRect(TAQUET_SIZE+aPosStart,IntermediateTickH1,PosEnd-aPosStart,IntermediateTickH2),QColor(Qt::red));
                Painter.setOpacity(1);
            }
        }

        // Now : Draw line and texte of the ruller

        // Define an echelle
        double  Duration=TotalDuration/1000;           // Calc duration in sec (double)
        double  SizeTick;
        QString Ech;

        // Test for WidthTick pixels between 2 ticks
        if ((Duration<10)&&(Width/Duration)>WidthTick) {
            Ech     ="S" ;                               // Use sec as echelle
            SizeTick=(Width-TAQUET_SIZE*2)/Duration;
        } else if ((Duration<600)&&((Width-TAQUET_SIZE*2)/(Duration/10))>WidthTick) {
            Ech="10S";                                   // Use 10 sec as echelle
            SizeTick=(Width-TAQUET_SIZE*2)/(Duration/10);
        } else if ((Duration<6000)&&(((Width-TAQUET_SIZE*2)/(Duration/60))>WidthTick)) {
            Ech="M";                                     // Use minute as echelle
            SizeTick=(Width-TAQUET_SIZE*2)/(Duration/60);
        } else if ((Duration<360000)&&(((Width-TAQUET_SIZE*2)/(Duration/600))>WidthTick)) {
            Ech="10M";                                   // Use 10 minute as echelle
            SizeTick=(Width-TAQUET_SIZE*2)/(Duration/600);
        } else {
            Ech="H";                                     // Use hour as echelle
            SizeTick=(Width-TAQUET_SIZE*2)/(Duration/3600);
        }

        short int   TimeSec  = 0;
        short int   TimeMin  = 0;
        short int   TimeHour = 0;
        short int   Cur      = 0;
        QString     Text;

        while ((TAQUET_SIZE*2+Cur*SizeTick+(WidthTick/2))<Width) {
            Painter.drawLine(TAQUET_SIZE+Cur*SizeTick,CompletTickH1,TAQUET_SIZE+Cur*SizeTick,CompletTickH2);

            // Draw text
            if ((Ech=="H")||(Ech=="10M")) Text=QString("%1:%2").arg(TimeHour,2,10,QChar('0')).arg(TimeMin,2,10,QChar('0'));
                else Text=QString("%1:%2").arg(TimeMin,2,10,QChar('0')).arg(TimeSec,2,10,QChar('0'));

            if ((!((TimeSec==0)&&(TimeMin==0)&&(TimeHour==0)))&&((TAQUET_SIZE+Cur*SizeTick+(WidthTick/2))<Width))
                Painter.drawText(TAQUET_SIZE+Cur*SizeTick-(WidthTick/2),32-1,Text);

            // Draw intermediate tick and then increment time depending on echelle
            if (Ech=="S") {
                TimeSec+=1;
                Text="";
            } else if (Ech=="10S") {
                // Draw an intermediate tick
                Painter.drawLine(TAQUET_SIZE+(Cur+0.5)*SizeTick,IntermediateTickH1,TAQUET_SIZE+(Cur+0.5)*SizeTick,IntermediateTickH2);
                Text=QString("%1:%2").arg(TimeMin,2,10,QChar('0')).arg(TimeSec+5,2,10,QChar('0'));
                TimeSec+=10;
            } else if (Ech=="M") {
                // Draw an intermediate tick
                Painter.drawLine(TAQUET_SIZE+(Cur+0.5)*SizeTick,IntermediateTickH1,TAQUET_SIZE+(Cur+0.5)*SizeTick,IntermediateTickH2);
                Text=QString("%1:%2").arg(TimeMin,2,10,QChar('0')).arg(TimeSec+30,2,10,QChar('0'));
                TimeMin+=1;
            } else if (Ech=="10M") {
                // Draw an intermediate tick
                Painter.drawLine(TAQUET_SIZE+(Cur+0.5)*SizeTick,IntermediateTickH1,TAQUET_SIZE+(Cur+0.5)*SizeTick,IntermediateTickH2);
                Text=QString("%1:%2").arg(TimeHour,2,10,QChar('0')).arg(TimeMin+5,2,10,QChar('0'));
                TimeMin+=10;
            } else {
                // Draw an intermediate tick
                Painter.drawLine(TAQUET_SIZE+(Cur+0.5)*SizeTick,IntermediateTickH1,TAQUET_SIZE+(Cur+0.5)*SizeTick,IntermediateTickH2);
                Text=QString("%1:%2").arg(TimeHour,2,10,QChar('0')).arg(TimeMin+30,2,10,QChar('0'));
                TimeHour+=1;
            }
            // Draw text if there is place !
            if ((WidthTick<(SizeTick/3))&&(TAQUET_SIZE+(Cur+0.5)*SizeTick+(WidthTick/2)<Width)) Painter.drawText(TAQUET_SIZE+(Cur+0.5)*SizeTick-(WidthTick/2),32-1,Text);

            // Adjust time
            if (TimeSec>59) {
                TimeSec-=60;
                TimeMin+=1;
            }
            if (TimeMin>59) {
                TimeMin-=60;
                TimeHour+=1;
            }

            // Go to next tick
            Cur=Cur+1;
        }

        //********************************************************
        // Draw slider
        //********************************************************

        Painter.setPen(QColor(0x20,0x20,0x20));
        Painter.setBrush(QBrush(QColor(0xA0,0xA0,0xA0)));
        Painter.drawRect(TAQUET_SIZE-1,15,Width-TAQUET_SIZE*2+2,5);

        //********************************************************
        // Draw thumbs
        //********************************************************

        if (EditStartEnd) {
            // Draw start pos
            Painter.setBrush(isSliderDown()&&(TrackingMode==TrackingMode_Start)?Qt::white:QBrush(QColor(0xCC,0xCC,0xCC)));
            int     StartX=int(double(Width-TAQUET_SIZE*2)*(double(StartPos)/double(TotalDuration)))+TAQUET_SIZE;
            QPointF StartPosTable[5];
            StartPosTable[0]=QPointF(StartX,16);
            StartPosTable[1]=QPointF(StartX,32-1);
            StartPosTable[2]=QPointF(StartX-TAQUET_SIZE,32-1);
            StartPosTable[3]=QPointF(StartX-TAQUET_SIZE,25);
            StartPosTable[4]=QPointF(StartX,16);
            Painter.drawPolygon(StartPosTable,5);

            // Draw end pos
            Painter.setBrush(isSliderDown()&&(TrackingMode==TrackingMode_End)?Qt::white:QBrush(QColor(0xCC,0xCC,0xCC)));
            int     EndX=int(double(Width-TAQUET_SIZE*2)*(double(EndPos)/double(TotalDuration)))+TAQUET_SIZE;
            QPointF EndPosTable[5];
            EndPosTable[0]=QPointF(EndX,16);
            EndPosTable[1]=QPointF(EndX,32-1);
            EndPosTable[2]=QPointF(EndX+TAQUET_SIZE,32-1);
            EndPosTable[3]=QPointF(EndX+TAQUET_SIZE,25);
            EndPosTable[4]=QPointF(EndX,16);
            Painter.drawPolygon(EndPosTable,5);

            // Draw thumb
            if ((TrackingMode!=TrackingMode_Start)&&(TrackingMode!=TrackingMode_End)) {
                Painter.setBrush(isSliderDown()?Qt::white:QBrush(QColor(0xCC,0xCC,0xCC)));
                int     x1=int(double(Width-TAQUET_SIZE*2)*(double(value())/double(maximum())))+TAQUET_SIZE;
                QPointF Table[3];
                double  vcos,vsin,Angle;
                int     i,DecalY=0,HH=ThumbHeight/2;
                DecalY=-8;
                Angle=-90;
                for (i=0;i<3;i++) {
                    vcos=cos(Angle*3.14159265/180)*(ThumbWidth/2);
                    vsin=sin(Angle*3.14159265/180)*HH;
                    Table[i]=QPointF(x1+vcos,ThumbYPos-vsin+DecalY);
                    Angle=Angle+(double(360)/3);
                    if (Angle>=360) Angle=-Angle+360;
                }
                Painter.drawPolygon(Table,3);
                Painter.restore();  // remove translation
                Pen.setColor(QColor(0x70,0x70,0x70));
                Painter.setPen(Pen);
                Painter.drawLine(x1-1,0,x1-1,height()-32+2);
                Painter.drawLine(x1,0,x1,height()-32+2);
            } else if (TrackingMode==TrackingMode_Start) {
                Painter.restore();  // remove translation
                Pen.setColor(QColor(0x70,0x70,0x70));
                Painter.setPen(Pen);
                Painter.drawLine(StartX-1,0,StartX-1,height()-32+16);
                Painter.drawLine(StartX,0,StartX,height()-32+16);
            } else if (TrackingMode==TrackingMode_End) {
                Painter.restore();  // remove translation
                Pen.setColor(QColor(0x70,0x70,0x70));
                Painter.setPen(Pen);
                Painter.drawLine(EndX-1,0,EndX-1,height()-32+16);
                Painter.drawLine(EndX,0,EndX,height()-32+16);
            } else Painter.restore();  // remove translation

        } else {
            Painter.setBrush(isSliderDown()?Qt::white:QBrush(QColor(0xCC,0xCC,0xCC)));
            int     x1=int(double(Width-TAQUET_SIZE*2)*(double(value())/double(maximum())))+TAQUET_SIZE;
            QPointF Table[3];
            double  vcos,vsin,Angle;
            int     i,HH=ThumbHeight/2;
            Angle=90;
            for (i=0;i<3;i++) {
                vcos=cos(Angle*3.14159265/180)*(ThumbWidth/2);
                vsin=sin(Angle*3.14159265/180)*HH;
                Table[i]=QPointF(x1+vcos,ThumbYPos-vsin);
                Angle=Angle+(double(360)/3);
                if (Angle>=360) Angle=-Angle+360;
            }
            // Draw thumb
            Painter.drawPolygon(Table,3);
            Pen.setColor(QColor(0x70,0x70,0x70));
            Painter.setPen(Pen);
            Painter.drawLine(x1-1,7,x1-1,16);
            Painter.drawLine(x1,7,x1,16);
            Painter.restore();  // remove translation
        }
    }
}
