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

#include "cImgInteractiveZone.h"

#include <QKeyEvent>
#include <QMouseEvent>

#define HANDLESIZEX     8
#define HANDLESIZEY     8
#define HANDLEMAGNETX   14
#define HANDLEMAGNETY   10

#define MINVALUE        0.002       // Never less than this value for width or height
#define PI              3.14159265

//====================================================================================================================

cImgInteractiveZone::cImgInteractiveZone(QWidget *parent):QWidget(parent) {
    ForegroundImage =NULL;
    CachedImage     =NULL;
    IsCapture       =false;
    TransfoType     =NOTYETDEFINED;

    CompoObject     =NULL;
    BackgroundForm  =NULL;
    CurrentBrush    =NULL;
    VideoPosition   =0;

    Move_X          =0;
    Scale_X         =0;
    Move_Y          =0;
    Scale_Y         =0;

    SceneRect       =QRectF(0,0,0,0);
    IsRefreshQueued =false;
    setMouseTracking(true);
}

//====================================================================================================================

cImgInteractiveZone::~cImgInteractiveZone() {
    if (ForegroundImage!=NULL) {
        delete ForegroundImage;
        ForegroundImage=NULL;
    }
    if (CachedImage!=NULL) {
        delete CachedImage;
        CachedImage=NULL;
    }
}

//====================================================================================================================

void cImgInteractiveZone::InitCachedImage(cCompositionObject *TheCompoObject,int *TheBackgroundForm,cBrushDefinition *TheCurrentBrush,int TheVideoPosition) {
    CompoObject     =TheCompoObject;
    BackgroundForm  =TheBackgroundForm;
    CurrentBrush    =TheCurrentBrush;
    VideoPosition   =TheVideoPosition;

    if (CachedImage!=NULL) {
        delete CachedImage;
        CachedImage=NULL;
    }

    cVideoFile *Video=NULL;
    if (CurrentBrush->MediaObject) switch (CurrentBrush->MediaObject->ObjectType) {
        case OBJECTTYPE_IMAGEFILE:
        case OBJECTTYPE_IMAGEVECTOR:
        case OBJECTTYPE_IMAGECLIPBOARD:
            CachedImage=CurrentBrush->MediaObject->ImageAt(false);
            break;
        case OBJECTTYPE_GMAPSMAP:
            CachedImage=CurrentBrush->MediaObject->ImageAt(false);
            CurrentBrush->AddMarkerToImage(CachedImage);
            break;
        case OBJECTTYPE_VIDEOFILE:
            Video=(cVideoFile *)CurrentBrush->MediaObject;
            CachedImage=Video->ImageAt(false,VideoPosition+QTime(0,0,0,0).msecsTo(Video->StartPos),NULL,CurrentBrush->Deinterlace,1,false,false);
            break;
        default: break; // to avoid warning
    }
    if ((CachedImage)&&(CachedImage->format()!=QImage::Format_ARGB32_Premultiplied)) {
        QImage *NewCachedImage=new QImage(CachedImage->convertToFormat(QImage::Format_ARGB32_Premultiplied));
        delete CachedImage;
        CachedImage=NewCachedImage;
    }
}

//====================================================================================================================

void cImgInteractiveZone::paintEvent(QPaintEvent *) {
    if ((!ForegroundImage)||(Hyp.Screen==0)||(Hyp.Screen==0)) return;

    QImage   ShapeMask(ForegroundImage->width(),ForegroundImage->height(),QImage::Format_ARGB32_Premultiplied);
    QPainter Painter(this);

    Painter.save();
    Painter.translate(SceneRect.left(),SceneRect.top());
    Painter.drawImage(0,0,*ForegroundImage);

    //***********************
    // Compute shape polygon
    //***********************

    // Refresh CurImgSelRect and CurScrSelRect
    QRectF TmpImgSelRect=QRectF(CurrentBrush->X*Hyp.Image, CurrentBrush->Y*Hyp.Image, CurrentBrush->ZoomFactor*Hyp.Image, CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio*Hyp.Image);
    QRectF TmpScrSelRect=QRectF(CurrentBrush->X*Hyp.Screen,CurrentBrush->Y*Hyp.Screen,CurrentBrush->ZoomFactor*Hyp.Screen,CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio*Hyp.Screen);
    CurImgSelRect=PolygonToRectF(ComputePolygon(*BackgroundForm,TmpImgSelRect.left(),TmpImgSelRect.top(),TmpImgSelRect.width(),TmpImgSelRect.height()));
    CurScrSelRect=PolygonToRectF(ComputePolygon(*BackgroundForm,TmpScrSelRect.left(),TmpScrSelRect.top(),TmpScrSelRect.width(),TmpScrSelRect.height()));
    Ratio_X=TmpImgSelRect.width()/CurImgSelRect.width();
    Ratio_Y=TmpImgSelRect.height()/CurImgSelRect.height();

    // Compute new ImgSelRect and ScrSelRect
    TmpScrSelRect        =QRectF((CurrentBrush->X+Move_X)*Hyp.Screen,(CurrentBrush->Y+Move_Y)*Hyp.Screen,(CurrentBrush->ZoomFactor+Scale_X)*Hyp.Screen,(CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio+Scale_Y)*Hyp.Screen);
    QList<QPolygonF> List=ComputePolygon(*BackgroundForm,TmpScrSelRect.left(),TmpScrSelRect.top(),TmpScrSelRect.width(),TmpScrSelRect.height());
    QRectF  ScrSelRect   =PolygonToRectF(List);

    //**************************
    // Draw external shape mask
    //**************************
    QPainter ShapePainter;
    ShapePainter.begin(&ShapeMask);
    ShapePainter.setPen(Qt::NoPen);
    ShapePainter.fillRect(QRect(0,0,ShapeMask.width(),ShapeMask.height()),QBrush(0x555555));
    ShapePainter.setBrush(Qt::transparent);
    ShapePainter.setCompositionMode(QPainter::CompositionMode_Source);
    for (int i=0;i<List.count();i++) ShapePainter.drawPolygon(List.at(i));
    ShapePainter.setCompositionMode(QPainter::CompositionMode_SourceOver);
    ShapePainter.end();
    // Apply External Shape Mask
    Painter.setOpacity(0.75);
    Painter.drawImage(0,0,ShapeMask);
    Painter.setOpacity(1);

    //************************************************
    // Draw internal shape image with filters applyed
    //************************************************
    Painter.setPen(Qt::NoPen);
    Painter.setCompositionMode(QPainter::CompositionMode_SourceAtop);
    QImage PartImage=ForegroundImage->copy(ScrSelRect.left(),ScrSelRect.top(),ScrSelRect.width(),ScrSelRect.height());
    PartImage=CurrentBrush->ApplyFilter(PartImage);
    QBrush PartBrush(PartImage);
    PartBrush.setTransform(QTransform().translate(ScrSelRect.left(),ScrSelRect.top()));
    Painter.setBrush(PartBrush);
    for (int i=0;i<List.count();i++) Painter.drawPolygon(List.at(i));
    Painter.setCompositionMode(QPainter::CompositionMode_SourceOver);

    //**********************************
    // Draw rulers if they was enabled
    //**********************************
    Painter.setBrush(Qt::NoBrush);
    Painter.setCompositionMode(QPainter::RasterOp_SourceXorDestination);
    if (MagneticRuler) {
        QPen pen=QPen(QColor(0,255,0));
        pen.setWidth(1);
        pen.setStyle(Qt::DotLine);
        Painter.setPen(pen);
        for (int i=0;i<MagnetVert.count();i++)  Painter.drawLine(MagnetVert[i].Screen,0,MagnetVert[i].Screen,Hyp.Screen);
        for (int i=0;i<MagnetHoriz.count();i++) Painter.drawLine(0,MagnetHoriz[i].Screen,Hyp.Screen,MagnetHoriz[i].Screen);
    }

    QPen pen(Qt::red);
    pen.setWidth(2);
    pen.setStyle(Qt::DashLine);
    Painter.setPen(pen);
    DrawSelect(Painter,QRectF(ScrSelRect.left()-1,ScrSelRect.top()-1,ScrSelRect.width(),ScrSelRect.height()),true);

    Painter.restore();
}

void cImgInteractiveZone::DrawSelect(QPainter &Painter,QRectF Rect,bool WithHandles) {
    Painter.drawRect(Rect);
    if (WithHandles) {
        QPen OldPen=Painter.pen();
        QPen pen=OldPen;
        pen.setStyle(Qt::SolidLine);
        Painter.setPen(pen);
        Painter.drawRect(QRectF(Rect.left()-HANDLESIZEX/2, Rect.top()-HANDLESIZEY/2,                 HANDLESIZEX,HANDLESIZEY));    // Top left
        Painter.drawRect(QRectF(Rect.left()-HANDLESIZEX/2, Rect.top()+Rect.height()/2-HANDLESIZEY/2, HANDLESIZEX,HANDLESIZEY));    // Left
        Painter.drawRect(QRectF(Rect.left()-HANDLESIZEX/2, Rect.bottom()-HANDLESIZEY/2,              HANDLESIZEX,HANDLESIZEY));    // Bottom left
        Painter.drawRect(QRectF(Rect.right()-HANDLESIZEX/2,Rect.top()-HANDLESIZEY/2,                 HANDLESIZEX,HANDLESIZEY));    // Top right
        Painter.drawRect(QRectF(Rect.right()-HANDLESIZEX/2,Rect.top()+Rect.height()/2-HANDLESIZEY/2, HANDLESIZEX,HANDLESIZEY));    // right
        Painter.drawRect(QRectF(Rect.right()-HANDLESIZEX/2,Rect.bottom()-HANDLESIZEY/2,              HANDLESIZEX,HANDLESIZEY));    // Bottom right
        Painter.drawRect(QRectF(Rect.left()+Rect.width()/2-HANDLESIZEX/2,Rect.top()-HANDLESIZEY/2,   HANDLESIZEX,HANDLESIZEY));    // Top
        Painter.drawRect(QRectF(Rect.left()+Rect.width()/2-HANDLESIZEX/2,Rect.bottom()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY));    // Bottom
        Painter.setPen(OldPen);
    }
}

//====================================================================================================================

void cImgInteractiveZone::SendRefreshDisplay() {
    if (!IsRefreshQueued) {
        IsRefreshQueued=true;
        QTimer::singleShot(LATENCY,this,SLOT(RefreshDisplay()));
    }
}

//====================================================================================================================

void cImgInteractiveZone::RefreshDisplay() {
    if (!CurrentBrush || !CachedImage) return;

    IsRefreshQueued=false;

    int         ImgWidth =CachedImage->width();     //CurrentBrush->Image?CurrentBrush->Image->ImageWidth :CurrentBrush->Video?CurrentBrush->Video->ImageWidth:0;
    int         ImgHeight=CachedImage->height();    //CurrentBrush->Image?CurrentBrush->Image->ImageHeight:CurrentBrush->Video?CurrentBrush->Video->ImageHeight:0;
    sDualQReal  x1,x2,x3,x4,y1,y2,y3,y4,Center;
    QImage      *SourceImage=NULL;
    sDualQReal  rx,ry,xtab[4],ytab[4];
    qreal       a,DstX,DstY,DstW,DstH;

    if ((CurrentBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)&&(ImgWidth==1920)&&(ImgHeight=1088)&&(CurrentBrush->ApplicationConfig->Crop1088To1080)) ImgHeight=1080;
    if ((ImgWidth==0)||(ImgHeight==0)) return;

    if (ForegroundImage!=NULL) {
        delete ForegroundImage;
        ForegroundImage=NULL;
    }

    Hyp.Screen=width()<height()?width():height();
    Hyp.Image =sqrt(qreal(ImgWidth)*qreal(ImgWidth)+qreal(ImgHeight)*qreal(ImgHeight));

    // calc rectangle points before rotation
    //  - RotatePoint.X = ((Pt.X - Centre.X) * Cos(AngCrad) - (Pt.Y - Centre.Y) * Sin(AngCrad) + Centre.X)
    //  - RotatePoint.Y = ((Pt.X - Centre.X) * Sin(AngCrad) + (Pt.Y - Centre.Y) * Cos(AngCrad) + Centre.Y)

    rx.Image=ImgWidth/2;    rx.Screen=rx.Image*(Hyp.Screen/Hyp.Image);
    ry.Image=ImgHeight/2;   ry.Screen=ry.Image*(Hyp.Screen/Hyp.Image);
    xtab[0].Image =-rx.Image*cos((CurrentBrush->ImageRotation)*PI/180) +ry.Image*sin(CurrentBrush->ImageRotation*PI/180) +Hyp.Image/2;
    xtab[1].Image =+rx.Image*cos((CurrentBrush->ImageRotation)*PI/180) +ry.Image*sin(CurrentBrush->ImageRotation*PI/180) +Hyp.Image/2;
    xtab[2].Image =-rx.Image*cos((CurrentBrush->ImageRotation)*PI/180) -ry.Image*sin(CurrentBrush->ImageRotation*PI/180) +Hyp.Image/2;
    xtab[3].Image =+rx.Image*cos((CurrentBrush->ImageRotation)*PI/180) -ry.Image*sin(CurrentBrush->ImageRotation*PI/180) +Hyp.Image/2;
    ytab[0].Image =-rx.Image*sin((CurrentBrush->ImageRotation)*PI/180) +ry.Image*cos(CurrentBrush->ImageRotation*PI/180) +Hyp.Image/2;
    ytab[1].Image =+rx.Image*sin((CurrentBrush->ImageRotation)*PI/180) +ry.Image*cos(CurrentBrush->ImageRotation*PI/180) +Hyp.Image/2;
    ytab[2].Image =-rx.Image*sin((CurrentBrush->ImageRotation)*PI/180) -ry.Image*cos(CurrentBrush->ImageRotation*PI/180) +Hyp.Image/2;
    ytab[3].Image =+rx.Image*sin((CurrentBrush->ImageRotation)*PI/180) -ry.Image*cos(CurrentBrush->ImageRotation*PI/180) +Hyp.Image/2;

    // Sort xtab and ytab
    for (int i=0;i<4;i++) for (int j=0;j<3;j++) {
        if (xtab[j].Image>xtab[j+1].Image) {    a=xtab[j+1].Image;   xtab[j+1].Image =xtab[j].Image;   xtab[j].Image =a;    }
        if (ytab[j].Image>ytab[j+1].Image) {    a=ytab[j+1].Image;   ytab[j+1].Image =ytab[j].Image;   ytab[j].Image=a;     }
    }

    // Calc screen version
    for (int i=0;i<4;i++) {
        xtab[i].Screen=xtab[i].Image*(Hyp.Screen/Hyp.Image);
        ytab[i].Screen=ytab[i].Image*(Hyp.Screen/Hyp.Image);
    }

    maxw.Screen=xtab[3].Screen-xtab[0].Screen;      maxw.Image=xtab[3].Image-xtab[0].Image;
    maxh.Screen=ytab[3].Screen-ytab[0].Screen;      maxh.Image=ytab[3].Image-ytab[0].Image;

    // Rotate image if needed and create a SourceImage
    if (CurrentBrush->ImageRotation!=0) {
        QTransform matrix;
        matrix.rotate(CurrentBrush->ImageRotation,Qt::ZAxis);
        SourceImage=new QImage(CachedImage->transformed(matrix,Qt::SmoothTransformation));

    // If no rotation then SourceImage=SrcImage
    } else SourceImage=CachedImage;

    // Calc coordinates of the part in the source image
    qreal  RealImageW=qreal(SourceImage->width());                  // Get real image widht
    qreal  RealImageH=qreal(SourceImage->height());                 // Get real image height

    DstW=RealImageW*(Hyp.Screen/Hyp.Image);
    DstH=RealImageH*(Hyp.Screen/Hyp.Image);
    DstX=((Hyp.Screen-DstW)/2);
    DstY=((Hyp.Screen-DstH)/2);

    QImage  ToUseImage=SourceImage->scaled(DstW,DstH);
    if (SourceImage!=CachedImage) delete SourceImage;

    if (ToUseImage.format()!=QImage::Format_ARGB32_Premultiplied) ToUseImage=ToUseImage.convertToFormat(QImage::Format_ARGB32_Premultiplied);

    //CurrentBrush->ApplyFilter(&ToUseImage);

    ForegroundImage=new QImage(Hyp.Screen,Hyp.Screen,QImage::Format_ARGB32_Premultiplied);
    QPainter P;
    P.begin(ForegroundImage);
    P.fillRect(QRectF(0,0,Hyp.Screen,Hyp.Screen),Transparent);
    P.drawImage(QRectF(DstX,DstY,DstW,DstH),ToUseImage,QRectF(0,0,DstW,DstH));
    P.end();

    x1.Screen=xtab[0].Screen; y1.Screen=ytab[0].Screen;     x1.Image=xtab[0].Image; y1.Image=ytab[0].Image;
    x2.Screen=xtab[1].Screen; y2.Screen=ytab[1].Screen;     x2.Image=xtab[1].Image; y2.Image=ytab[1].Image;
    x3.Screen=xtab[2].Screen; y3.Screen=ytab[2].Screen;     x3.Image=xtab[2].Image; y3.Image=ytab[2].Image;
    x4.Screen=xtab[3].Screen; y4.Screen=ytab[3].Screen;     x4.Image=xtab[3].Image; y4.Image=ytab[3].Image;

    // Computer center ruller
    Center.Screen=Hyp.Screen/2;
    Center.Image =Hyp.Image/2;
    SceneRect=QRect((this->width()-ForegroundImage->width())/2,(this->height()-ForegroundImage->height())/2,Hyp.Screen,Hyp.Screen);

    // *************************************************************************
    // Create rulers
    // *************************************************************************

    MagnetHoriz.clear();
    MagnetVert.clear();
    if (MagneticRuler) {
        MagnetVert.append(Center);
        MagnetVert.append(x1);
        MagnetVert.append(x2);
        MagnetVert.append(x3);
        MagnetVert.append(x4);
        MagnetHoriz.append(Center);
        MagnetHoriz.append(y1);
        MagnetHoriz.append(y2);
        MagnetHoriz.append(y3);
        MagnetHoriz.append(y4);
    }
    // Clean collections (remove doublons)
    for (int i=MagnetHoriz.count()-1;i>=0;i--) for (int j=0;j<i;j++) if (int(MagnetHoriz[j].Screen)==int(MagnetHoriz[i].Screen)) { MagnetHoriz.removeAt(i); break; }
    for (int i=MagnetVert.count()-1;i>=0;i--)  for (int j=0;j<i;j++) if (int(MagnetVert[j].Screen) ==int(MagnetVert[i].Screen))  { MagnetVert.removeAt(i);  break; }

    repaint();
}

//====================================================================================================================

bool cImgInteractiveZone::IsInRect(QPointF Pos,QRectF Rect) {
    return ((Pos.x()-SceneRect.left()>=Rect.left())&&(Pos.x()-SceneRect.left()<=Rect.right())&&(Pos.y()-SceneRect.top()>=Rect.top())&&(Pos.y()-SceneRect.top()<=Rect.bottom()));
}

//====================================================================================================================

bool cImgInteractiveZone::IsInSelectedRect(QPointF Pos) {
    if ((Pos.x()-SceneRect.left()>=CurScrSelRect.left())&&(Pos.x()-SceneRect.left()<=CurScrSelRect.right())&&
        (Pos.y()-SceneRect.top()>=CurScrSelRect.top())&&(Pos.y()-SceneRect.top()<=CurScrSelRect.bottom())) return true;
    return false;
}

//====================================================================================================================

void cImgInteractiveZone::ManageCursor(QPoint Posi,Qt::KeyboardModifiers Modifiers) {
    QPointF Pos(Posi);
    if      (IsInRect(Pos,QRectF(CurScrSelRect.left()-HANDLESIZEX/2, CurScrSelRect.bottom()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))                         setCursor(Qt::SizeBDiagCursor);  // Bottom left
    else if (IsInRect(Pos,QRectF(CurScrSelRect.left()-HANDLESIZEX/2, CurScrSelRect.top()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))                            setCursor(Qt::SizeFDiagCursor);  // Top left
    else if (IsInRect(Pos,QRectF(CurScrSelRect.left()-HANDLESIZEX/2, CurScrSelRect.top()+CurScrSelRect.height()/2-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))   setCursor(Qt::SizeHorCursor);    // Left
    else if (IsInRect(Pos,QRectF(CurScrSelRect.right()-HANDLESIZEX/2,CurScrSelRect.top()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))                            setCursor(Qt::SizeBDiagCursor);  // Top right
    else if (IsInRect(Pos,QRectF(CurScrSelRect.right()-HANDLESIZEX/2,CurScrSelRect.top()+CurScrSelRect.height()/2-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))   setCursor(Qt::SizeHorCursor);    // Right
    else if (IsInRect(Pos,QRectF(CurScrSelRect.right()-HANDLESIZEX/2,CurScrSelRect.bottom()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))                         setCursor(Qt::SizeFDiagCursor);  // Bottom right
    else if (IsInRect(Pos,QRectF(CurScrSelRect.left()+CurScrSelRect.width()/2-HANDLESIZEX/2,CurScrSelRect.top()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))     setCursor(Qt::SizeVerCursor);    // Top
    else if (IsInRect(Pos,QRectF(CurScrSelRect.left()+CurScrSelRect.width()/2-HANDLESIZEX/2,CurScrSelRect.bottom()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))  setCursor(Qt::SizeVerCursor);    // Bottom
    else if ((IsInSelectedRect(Pos))&&(Modifiers==Qt::NoModifier))                                                                                           setCursor(Qt::OpenHandCursor);
    else setCursor(Qt::ArrowCursor);   // standard
}

//====================================================================================================================

void cImgInteractiveZone::ComputeNewCurSelRect(QRectF &ScrRect,QRectF &ImgRect) {
    QRectF TmpRect=QRectF((CurrentBrush->X+Move_X)*Hyp.Screen,(CurrentBrush->Y+Move_Y)*Hyp.Screen,(CurrentBrush->ZoomFactor+Scale_X)*Hyp.Screen,(CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio+Scale_Y)*Hyp.Screen);
    ScrRect       =PolygonToRectF(ComputePolygon(*BackgroundForm,TmpRect.left(),TmpRect.top(),TmpRect.width(),TmpRect.height()));
    TmpRect       =QRectF((CurrentBrush->X+Move_X)*Hyp.Image,(CurrentBrush->Y+Move_Y)*Hyp.Image,(CurrentBrush->ZoomFactor+Scale_X)*Hyp.Image,(CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio+Scale_Y)*Hyp.Image);
    ImgRect       =PolygonToRectF(ComputePolygon(*BackgroundForm,TmpRect.left(),TmpRect.top(),TmpRect.width(),TmpRect.height()));
}


//====================================================================================================================

void cImgInteractiveZone::keyPressEvent(QKeyEvent *event) {
    if (!CurrentBrush) return;

    ManageCursor(mapFromGlobal(QCursor::pos()),event->modifiers());
    qreal Step;

    Step    =qreal(1)/Hyp.Screen;
    Move_X  =0;
    Scale_X =0;
    Move_Y  =0;
    Scale_Y =0;

    switch (event->key()) {
        case Qt::Key_Left:
            if (event->modifiers()==Qt::ShiftModifier) {
                Move_X =-Step;
                Scale_X=Step*Ratio_X;
                Move_Y =CurrentBrush->LockGeometry?(Move_X*Hyp.Screen*CurrentBrush->AspectRatio)/Hyp.Screen:0;
                Scale_Y=(CurrentBrush->LockGeometry?(Step*Hyp.Screen*CurrentBrush->AspectRatio)/Hyp.Screen:0)*Ratio_Y;
            } else if (event->modifiers()==Qt::ControlModifier) {
                Scale_X=-Step*Ratio_X;
                Scale_Y=(CurrentBrush->LockGeometry?-(CurrentBrush->AspectRatio*Step*Hyp.Screen)/Hyp.Screen:0)*Ratio_Y;
            } else {
                Move_X=-Step;
            }
            break;
        case Qt::Key_Right:
            if (event->modifiers()==Qt::ShiftModifier) {
                Move_X =Step;
                Scale_X=-Step*Ratio_X;
                Move_Y =CurrentBrush->LockGeometry?(Move_X*Hyp.Screen*CurrentBrush->AspectRatio)/Hyp.Screen:0;
                Scale_Y=(CurrentBrush->LockGeometry?-(Step*Hyp.Screen*CurrentBrush->AspectRatio)/Hyp.Screen:0)*Ratio_Y;
            } else if (event->modifiers()==Qt::ControlModifier) {
                Scale_X=Step;
                Scale_Y=(CurrentBrush->LockGeometry?(Step*Hyp.Screen*CurrentBrush->AspectRatio)/Hyp.Screen:0)*Ratio_Y;
            } else {
                Move_X=Step;
            }
            break;
        case Qt::Key_Up:
            if (event->modifiers()==Qt::ShiftModifier) {
                Move_Y =-Step;
                Scale_Y=Step*Ratio_Y;
                Move_X =CurrentBrush->LockGeometry?((Move_Y*Hyp.Screen)/CurrentBrush->AspectRatio)/Hyp.Screen:0;
                Scale_X=(CurrentBrush->LockGeometry?((Step*Hyp.Screen)/CurrentBrush->AspectRatio)/Hyp.Screen:0)*Ratio_X;
            } else if (event->modifiers()==Qt::ControlModifier) {
                Scale_Y=-Step;
                Scale_X=(CurrentBrush->LockGeometry?-(Step*Hyp.Screen*CurrentBrush->AspectRatio)/Hyp.Screen:0)*Ratio_X;
            } else {
                Move_Y=-Step;
            }
            break;
        case Qt::Key_Down:
            if (event->modifiers()==Qt::ShiftModifier) {
                Move_Y =Step;
                Scale_Y=-Step*Ratio_Y;
                Move_X =CurrentBrush->LockGeometry?((Move_Y*Hyp.Screen)/CurrentBrush->AspectRatio)/Hyp.Screen:0;
                Scale_X=(CurrentBrush->LockGeometry?-((Step*Hyp.Screen)/CurrentBrush->AspectRatio)/Hyp.Screen:0)*Ratio_X;
            } else if (event->modifiers()==Qt::ControlModifier) {
                Scale_Y=Step;
                Scale_X=(CurrentBrush->LockGeometry?((Step*Hyp.Screen)/CurrentBrush->AspectRatio)/Hyp.Screen:0)*Ratio_X;
            } else {
                Move_Y=Step;
            }
            break;
        default :
            QWidget::keyPressEvent(event);
            break;
    }
    if ((Move_X!=0)||(Move_Y!=0)||(Scale_X!=0)||(Scale_Y!=0)) emit TransformBlock(Move_X,Move_Y,Scale_X,Scale_Y);
}

//====================================================================================================================

void cImgInteractiveZone::keyReleaseEvent(QKeyEvent *event) {
    if (!CurrentBrush) return;

    ManageCursor(mapFromGlobal(QCursor::pos()),event->modifiers());
    QWidget::keyReleaseEvent(event);
}

//====================================================================================================================

void cImgInteractiveZone::mouseMoveEvent(QMouseEvent *event) {
    if (!CurrentBrush) return;

    if (!IsCapture) {

        ManageCursor(event->pos(),event->modifiers());

    } else {

        // *************************************************************************
        // Calc transformation
        // *************************************************************************

        qreal  DX=(qreal(event->pos().x()-CapturePos.x())/Hyp.Screen);
        qreal  DY=(qreal(event->pos().y()-CapturePos.y())/Hyp.Screen);
        QRectF NewCurScrSelRect,NewCurImgSelRect;

        // Top left
        if  (TransfoType==RESIZEUPLEFT) {
            // Adjust DX and DY for resize not less than 0
            if (DX>=CurrentBrush->ZoomFactor-MINVALUE)  DX=CurrentBrush->ZoomFactor-MINVALUE;
            if (DY>=CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE)  DY=CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE;
            Move_X       =DX;
            Move_Y       =CurrentBrush->LockGeometry?(Move_X*CurrentBrush->AspectRatio):DY;
            Scale_X      =-Move_X*Ratio_X;
            Scale_Y      =-Move_Y*Ratio_Y;
            ComputeNewCurSelRect(NewCurScrSelRect,NewCurImgSelRect);

            // Apply magnetic rules vertical
            for (int Ruller=0;Ruller<MagnetVert.count();Ruller++) if ((MagnetVert[Ruller].Screen<NewCurScrSelRect.right())&&(NewCurScrSelRect.left()>=MagnetVert[Ruller].Screen-HANDLEMAGNETX)&&(NewCurScrSelRect.left()<=MagnetVert[Ruller].Screen+HANDLEMAGNETX)) {
                Move_X =(MagnetVert[Ruller].Image-CurImgSelRect.left())/Hyp.Image;
                if (CurrentBrush->LockGeometry) Move_Y=(Move_X*CurrentBrush->AspectRatio);
                Scale_X=-Move_X*Ratio_X;
                Scale_Y=-Move_Y*Ratio_Y;
                break;
            }

            // Apply magnetic rules horizontal
            for (int Ruller=0;Ruller<MagnetHoriz.count();Ruller++) if ((MagnetHoriz[Ruller].Screen<NewCurScrSelRect.bottom())&&(NewCurScrSelRect.top()>=MagnetHoriz[Ruller].Screen-HANDLEMAGNETY)&&(NewCurScrSelRect.top()<=MagnetHoriz[Ruller].Screen+HANDLEMAGNETY)) {
                Move_Y =(MagnetHoriz[Ruller].Image-CurImgSelRect.top())/Hyp.Image;
                if (CurrentBrush->LockGeometry) Move_X=(Move_Y/CurrentBrush->AspectRatio);
                Scale_X=-Move_X*Ratio_X;
                Scale_Y=-Move_Y*Ratio_Y;
                break;
            }

        // Left
        } else if (TransfoType==RESIZELEFT) {
            // Adjust DX and DY for resize not less than 0
            if (DX>=CurrentBrush->ZoomFactor-MINVALUE)  DX=CurrentBrush->ZoomFactor-MINVALUE;
            if (DY>=CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE)  DY=CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE;
            Move_X =DX;
            Scale_X=-Move_X*Ratio_X;
            if (CurrentBrush->LockGeometry) {
                Scale_Y=(Scale_X*Hyp.Image*CurrentBrush->AspectRatio)/Hyp.Image;
                Move_Y =-Scale_Y/2;
            }
            ComputeNewCurSelRect(NewCurScrSelRect,NewCurImgSelRect);

            // Apply magnetic rules vertical
            for (int Ruller=0;Ruller<MagnetVert.count();Ruller++) if ((MagnetVert[Ruller].Screen<NewCurScrSelRect.right())&&(NewCurScrSelRect.left()>=MagnetVert[Ruller].Screen-HANDLEMAGNETX)&&(NewCurScrSelRect.left()<=MagnetVert[Ruller].Screen+HANDLEMAGNETX)) {
                //Move_X =(MagnetVert[Ruller].Image-CurrentBrush->X*Hyp.Image)/Hyp.Image;
                Move_X =(MagnetVert[Ruller].Image-CurImgSelRect.left())/Hyp.Image;
                Scale_X=-Move_X*Ratio_X;
                if (CurrentBrush->LockGeometry) {
                    Scale_Y=(Scale_X*Hyp.Image*CurrentBrush->AspectRatio)/Hyp.Image;
                    Move_Y =-Scale_Y/2;
                }
                break;
            }

        // Bottom left
        } else if (TransfoType==RESIZEDOWNLEFT) {
            // Adjust DX and DY for resize not less than 0
            if (CurrentBrush->ZoomFactor!=0) {
                if (DX>=CurrentBrush->ZoomFactor-MINVALUE)     DX=CurrentBrush->ZoomFactor-MINVALUE;
                if (DY<=-(CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE))  DY=-(CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE);
            }
            Move_X       =DX;
            Scale_X      =-Move_X*Ratio_X;
            Move_Y       =0;
            Scale_Y      =(CurrentBrush->LockGeometry?(-Move_X*Hyp.Image*CurrentBrush->AspectRatio)/Hyp.Image:DY)*Ratio_Y;

            ComputeNewCurSelRect(NewCurScrSelRect,NewCurImgSelRect);

            // Apply magnetic rules vertical
            for (int Ruller=0;Ruller<MagnetVert.count();Ruller++) if ((MagnetVert[Ruller].Screen<NewCurScrSelRect.right())&&(NewCurScrSelRect.left()>=MagnetVert[Ruller].Screen-HANDLEMAGNETX)&&(NewCurScrSelRect.left()<=MagnetVert[Ruller].Screen+HANDLEMAGNETX)) {
                Move_X =(MagnetVert[Ruller].Image-CurImgSelRect.left())/Hyp.Image;
                Scale_X=-Move_X*Ratio_X;
                if (CurrentBrush->LockGeometry) Scale_Y=-((Move_X*Hyp.Image*CurrentBrush->AspectRatio)/Hyp.Image)*Ratio_Y;
                break;
            }

            // Apply magnetic rules horizontal
            for (int Ruller=0;Ruller<MagnetHoriz.count();Ruller++) if ((MagnetHoriz[Ruller].Screen>NewCurScrSelRect.top())&&(NewCurScrSelRect.bottom()>=MagnetHoriz[Ruller].Screen-HANDLEMAGNETY)&&(NewCurScrSelRect.bottom()<=MagnetHoriz[Ruller].Screen+HANDLEMAGNETY)) {
                Scale_Y =((MagnetHoriz[Ruller].Image-CurImgSelRect.bottom())/Hyp.Image)*Ratio_Y;
                if (CurrentBrush->LockGeometry) {
                    Move_X =-(((MagnetHoriz[Ruller].Image-CurImgSelRect.bottom())/Hyp.Image)*Hyp.Image/CurrentBrush->AspectRatio)/Hyp.Image;
                    Scale_X=-Move_X*Ratio_X;
                }
                break;
            }

        // Top right
        } else if (TransfoType==RESIZEUPRIGHT) {
            // Adjust DX and DY for resize not less than 0
            if (DX<=-(CurrentBrush->ZoomFactor-MINVALUE))                           DX=-(CurrentBrush->ZoomFactor-MINVALUE);
            if (DY>=CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE)    DY=CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE;
            Move_X       =0;
            Move_Y       =CurrentBrush->LockGeometry?(-DX*Hyp.Image*CurrentBrush->AspectRatio)/Hyp.Image:DY;
            Scale_X      =DX*Ratio_X;
            Scale_Y      =-Move_Y*Ratio_Y;
            ComputeNewCurSelRect(NewCurScrSelRect,NewCurImgSelRect);

            // Apply magnetic rules vertical
            for (int Ruller=0;Ruller<MagnetVert.count();Ruller++) if ((MagnetVert[Ruller].Screen>NewCurScrSelRect.left())&&(NewCurScrSelRect.right()>=MagnetVert[Ruller].Screen-HANDLEMAGNETX)&&(NewCurScrSelRect.right()<=MagnetVert[Ruller].Screen+HANDLEMAGNETX)) {
                Scale_X=(MagnetVert[Ruller].Image-CurImgSelRect.right())/Hyp.Image*Ratio_X;
                if (CurrentBrush->LockGeometry) Move_Y=-((MagnetVert[Ruller].Image-CurImgSelRect.right())/Hyp.Image)*CurrentBrush->AspectRatio;
                Scale_Y=-Move_Y*Ratio_Y;
                break;
            }

            // Apply magnetic rules horizontal
            for (int Ruller=0;Ruller<MagnetHoriz.count();Ruller++) if ((MagnetHoriz[Ruller].Screen<NewCurScrSelRect.bottom())&&(NewCurScrSelRect.top()>=MagnetHoriz[Ruller].Screen-HANDLEMAGNETY)&&(NewCurScrSelRect.top()<=MagnetHoriz[Ruller].Screen+HANDLEMAGNETY)) {
                Move_Y =(MagnetHoriz[Ruller].Image-CurImgSelRect.top())/Hyp.Image;
                if (CurrentBrush->LockGeometry) Scale_X=-(Move_Y/CurrentBrush->AspectRatio)*Ratio_X;
                Scale_Y=-Move_Y*Ratio_Y;
                break;
            }
        // Right
        } else if (TransfoType==RESIZERIGHT) {
            // Adjust DX and DY for resize not less than 0
            if (DX<=-(CurrentBrush->ZoomFactor-MINVALUE))                           DX=-(CurrentBrush->ZoomFactor-MINVALUE);
            if (DY<=-(CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE)) DY=-(CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE);
            Move_X =0;
            Scale_X=DX*Ratio_X;
            if (CurrentBrush->LockGeometry) {
                Scale_Y=(DX*CurrentBrush->AspectRatio)*Ratio_Y;
                Move_Y =-DX*CurrentBrush->AspectRatio/2;
            }
            ComputeNewCurSelRect(NewCurScrSelRect,NewCurImgSelRect);

            // Apply magnetic rules vertical
            for (int Ruller=0;Ruller<MagnetVert.count();Ruller++) if ((MagnetVert[Ruller].Screen>NewCurScrSelRect.left())&&(NewCurScrSelRect.right()>=MagnetVert[Ruller].Screen-HANDLEMAGNETX)&&(NewCurScrSelRect.right()<=MagnetVert[Ruller].Screen+HANDLEMAGNETX)) {
                Scale_X=(MagnetVert[Ruller].Image-CurImgSelRect.right())/Hyp.Image*Ratio_X;
                if (CurrentBrush->LockGeometry) Move_Y=-(((MagnetVert[Ruller].Image-CurImgSelRect.right())/Hyp.Image)*Hyp.Image*CurrentBrush->AspectRatio)/Hyp.Image/2;
                Scale_Y=-Move_Y*2*Ratio_Y;
                break;
            }
        // Bottom right
        } else if (TransfoType==RESIZEDOWNRIGHT) {
            // Adjust DX and DY for resize not less than 0
            if (DX<=-(CurrentBrush->ZoomFactor-MINVALUE))                           DX=-(CurrentBrush->ZoomFactor-MINVALUE);
            if (DY<=-(CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE)) DY=-(CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE);
            Move_X       =0;
            Scale_X      =DX*Ratio_X;
            Move_Y       =0;
            Scale_Y      =(CurrentBrush->LockGeometry?(DX*CurrentBrush->AspectRatio):DY)*Ratio_Y;
            ComputeNewCurSelRect(NewCurScrSelRect,NewCurImgSelRect);

            // Apply magnetic rules vertical
            for (int Ruller=0;Ruller<MagnetVert.count();Ruller++) if ((MagnetVert[Ruller].Screen>NewCurScrSelRect.left())&&(NewCurScrSelRect.right()>=MagnetVert[Ruller].Screen-HANDLEMAGNETX)&&(NewCurScrSelRect.right()<=MagnetVert[Ruller].Screen+HANDLEMAGNETX)) {
                Scale_X=(MagnetVert[Ruller].Image-CurImgSelRect.right())/Hyp.Image*Ratio_X;
                if (CurrentBrush->LockGeometry) Scale_Y=(((MagnetVert[Ruller].Image-CurImgSelRect.right())/Hyp.Image)*CurrentBrush->AspectRatio)*Ratio_Y;
                break;
            }

            // Apply magnetic rules horizontal
            for (int Ruller=0;Ruller<MagnetHoriz.count();Ruller++) if ((MagnetHoriz[Ruller].Screen>NewCurScrSelRect.top())&&(NewCurScrSelRect.bottom()>=MagnetHoriz[Ruller].Screen-HANDLEMAGNETY)&&(NewCurScrSelRect.bottom()<=MagnetHoriz[Ruller].Screen+HANDLEMAGNETY)) {
                Scale_Y =((MagnetHoriz[Ruller].Image-CurImgSelRect.bottom())/Hyp.Image)*Ratio_Y;
                if (CurrentBrush->LockGeometry) Scale_X=(((MagnetHoriz[Ruller].Image-CurImgSelRect.bottom())/Hyp.Image)/CurrentBrush->AspectRatio)*Ratio_X;
                break;
            }
        // Top
        } else if (TransfoType==RESIZEUP) {
            // Adjust DX and DY for resize not less than 0
            if (DY>=CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE)  DY=CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE;
            Move_Y =DY;
            Scale_Y=-Move_Y*Ratio_Y;
            if (CurrentBrush->LockGeometry) {
                Scale_X=-(DY/CurrentBrush->AspectRatio)*Ratio_X;
                Move_X =(DY/CurrentBrush->AspectRatio)/2;
            }
            ComputeNewCurSelRect(NewCurScrSelRect,NewCurImgSelRect);

            // Apply magnetic rules horizontal
            for (int Ruller=0;Ruller<MagnetHoriz.count();Ruller++) if ((MagnetHoriz[Ruller].Screen<NewCurScrSelRect.bottom())&&(NewCurScrSelRect.top()>=MagnetHoriz[Ruller].Screen-HANDLEMAGNETY)&&(NewCurScrSelRect.top()<=MagnetHoriz[Ruller].Screen+HANDLEMAGNETY)) {
                Move_Y =(MagnetHoriz[Ruller].Image-CurImgSelRect.top())/Hyp.Image;
                Scale_Y=-Move_Y*Ratio_Y;
                if (CurrentBrush->LockGeometry) {
                    Scale_X=-(Move_Y/CurrentBrush->AspectRatio)*Ratio_X;
                    Move_X =(Move_Y/CurrentBrush->AspectRatio)/2;
                }
                break;
            }
        // Bottom
        } else if (TransfoType==RESIZEDOWN) {
            // Adjust DX and DY for resize not less than 0
            if (DY<=-(CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE)) DY=-(CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio-MINVALUE);
            Move_Y =0;
            Scale_Y=DY*Ratio_Y;
            if (CurrentBrush->LockGeometry) {
                Scale_X=(DY/CurrentBrush->AspectRatio)*Ratio_X;
                Move_X =-(DY/CurrentBrush->AspectRatio)/2;
            }
            ComputeNewCurSelRect(NewCurScrSelRect,NewCurImgSelRect);

            // Apply magnetic rules horizontal
            for (int Ruller=0;Ruller<MagnetHoriz.count();Ruller++) if ((MagnetHoriz[Ruller].Screen>NewCurScrSelRect.top())&&(NewCurScrSelRect.bottom()>=MagnetHoriz[Ruller].Screen-HANDLEMAGNETY)&&(NewCurScrSelRect.bottom()<=MagnetHoriz[Ruller].Screen+HANDLEMAGNETY)) {
                Scale_Y =((MagnetHoriz[Ruller].Image-CurImgSelRect.bottom())/Hyp.Image)*Ratio_Y;
                if (CurrentBrush->LockGeometry) {
                    Scale_X=(((MagnetHoriz[Ruller].Image-CurImgSelRect.bottom())/Hyp.Image)/CurrentBrush->AspectRatio)*Ratio_X;
                    Move_X =-(((MagnetHoriz[Ruller].Image-CurImgSelRect.bottom())/Hyp.Image)/CurrentBrush->AspectRatio)/2;
                }
                break;
            }

        //*****************************
        // Move
        //*****************************
        } else if (TransfoType==MOVEBLOCK) {
            Move_X =DX;
            Move_Y =DY;
            Scale_X=0;
            Scale_Y=0;

            if (MagneticRuler!=0) {

                ComputeNewCurSelRect(NewCurScrSelRect,NewCurImgSelRect);

                // Apply magnetic rules vertical
                for (int Ruller=0;Ruller<MagnetVert.count();Ruller++) {
                    if ((NewCurScrSelRect.left()>=MagnetVert[Ruller].Screen-HANDLEMAGNETX)&&(NewCurScrSelRect.left()<=MagnetVert[Ruller].Screen+HANDLEMAGNETX)) {
                        Move_X=(MagnetVert[Ruller].Image-CurImgSelRect.left())/Hyp.Image;
                        break;
                    } else if ((NewCurScrSelRect.right()>=MagnetVert[Ruller].Screen-HANDLEMAGNETX)&&(NewCurScrSelRect.right()<=MagnetVert[Ruller].Screen+HANDLEMAGNETX)) {
                        Move_X=(MagnetVert[Ruller].Image-CurImgSelRect.right())/Hyp.Image;
                        break;
                    } else if ((NewCurScrSelRect.center().x()>=MagnetVert[Ruller].Screen-HANDLEMAGNETX)&&(NewCurScrSelRect.center().x()<=MagnetVert[Ruller].Screen+HANDLEMAGNETX)) {
                        Move_X=(MagnetVert[Ruller].Image-CurImgSelRect.center().x())/Hyp.Image;
                        break;
                    }
                }

                // Apply magnetic rules horizontal
                for (int Ruller=0;Ruller<MagnetHoriz.count();Ruller++) {
                    if ((NewCurScrSelRect.top()>=MagnetHoriz[Ruller].Screen-HANDLEMAGNETY)&&(NewCurScrSelRect.top()<=MagnetHoriz[Ruller].Screen+HANDLEMAGNETY)) {
                        Move_Y=(MagnetHoriz[Ruller].Image-CurImgSelRect.top())/Hyp.Image;
                        break;
                    } else if ((NewCurScrSelRect.bottom()>=MagnetHoriz[Ruller].Screen-HANDLEMAGNETY)&&(NewCurScrSelRect.bottom()<=MagnetHoriz[Ruller].Screen+HANDLEMAGNETY)) {
                        Move_Y=(MagnetHoriz[Ruller].Image-CurImgSelRect.bottom())/Hyp.Image;
                        break;
                    } else if ((NewCurScrSelRect.center().y()>=MagnetHoriz[Ruller].Screen-HANDLEMAGNETY)&&(NewCurScrSelRect.center().y()<=MagnetHoriz[Ruller].Screen+HANDLEMAGNETY)) {
                        Move_Y=(MagnetHoriz[Ruller].Image-CurImgSelRect.center().y())/Hyp.Image;
                        break;
                    }
                }
            }
        }

        // Refresh display
        SendRefreshDisplay();
        emit DisplayTransformBlock(Move_X,Move_Y,Scale_X,Scale_Y);
    }
}

//====================================================================================================================

void cImgInteractiveZone::mousePressEvent(QMouseEvent *event) {
    if (!CurrentBrush) return;

    ManageCursor(event->pos(),event->modifiers());
    setFocus();
    if ((event->button()==Qt::LeftButton)&&(event->modifiers()==Qt::NoModifier)) {
        QRectF CurImgSelRect=QRectF(CurrentBrush->X*Hyp.Image, CurrentBrush->Y*Hyp.Image, CurrentBrush->ZoomFactor*Hyp.Image, CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio*Hyp.Image);
        QRectF CurScrSelRect=QRectF(CurrentBrush->X*Hyp.Screen,CurrentBrush->Y*Hyp.Screen,CurrentBrush->ZoomFactor*Hyp.Screen,CurrentBrush->ZoomFactor*CurrentBrush->AspectRatio*Hyp.Screen);
        CurImgSelRect=PolygonToRectF(ComputePolygon(*BackgroundForm,CurImgSelRect.left(),CurImgSelRect.top(),CurImgSelRect.width(),CurImgSelRect.height()));
        CurScrSelRect=PolygonToRectF(ComputePolygon(*BackgroundForm,CurScrSelRect.left(),CurScrSelRect.top(),CurScrSelRect.width(),CurScrSelRect.height()));
        TransfoType  =NOTYETDEFINED;
        Move_X       =0;
        Scale_X      =0;
        Move_Y       =0;
        Scale_Y      =0;
        CapturePos   =event->pos();

        // Resize
        if ((IsInRect(event->pos(),QRect(CurScrSelRect.left()-HANDLESIZEX/2, CurScrSelRect.bottom()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))                               TransfoType=RESIZEDOWNLEFT; // Bottom left
        else if ((IsInRect(event->pos(),QRect(CurScrSelRect.left()-HANDLESIZEX/2,CurScrSelRect.top()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))                              TransfoType=RESIZEUPLEFT;   // Top left
        else if ((IsInRect(event->pos(),QRect(CurScrSelRect.left()-HANDLESIZEX/2, CurScrSelRect.top()+CurScrSelRect.height()/2-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))    TransfoType=RESIZELEFT;     // Left
        else if ((IsInRect(event->pos(),QRect(CurScrSelRect.right()-HANDLESIZEX/2,CurScrSelRect.top()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))                             TransfoType=RESIZEUPRIGHT;  // Top right
        else if ((IsInRect(event->pos(),QRect(CurScrSelRect.right()-HANDLESIZEX/2,CurScrSelRect.top()+CurScrSelRect.height()/2-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))    TransfoType=RESIZERIGHT;    // Right
        else if ((IsInRect(event->pos(),QRect(CurScrSelRect.right()-HANDLESIZEX/2,CurScrSelRect.bottom()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))                          TransfoType=RESIZEDOWNRIGHT;// Bottom right
        else if ((IsInRect(event->pos(),QRect(CurScrSelRect.left()+CurScrSelRect.width()/2-HANDLESIZEX/2,CurScrSelRect.top()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))      TransfoType=RESIZEUP;       // Top
        else if ((IsInRect(event->pos(),QRect(CurScrSelRect.left()+CurScrSelRect.width()/2-HANDLESIZEX/2,CurScrSelRect.bottom()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))   TransfoType=RESIZEDOWN;     // Bottom
        // Move
        else if (IsInSelectedRect(event->pos())) {
            TransfoType=MOVEBLOCK;
            setCursor(Qt::ClosedHandCursor);
        }
        IsCapture =(TransfoType!=NOTYETDEFINED);
    }
}

//====================================================================================================================

void cImgInteractiveZone::mouseReleaseEvent(QMouseEvent *event) {
    if ((!CurrentBrush)||(!IsCapture)) return;

    IsCapture=false;

    // Block move
    if (((Move_X!=0)||(Move_Y!=0)||(Scale_X!=0)||(Scale_Y!=0))) emit TransformBlock(Move_X,Move_Y,Scale_X,Scale_Y);
    ManageCursor(event->pos(),event->modifiers());
}

