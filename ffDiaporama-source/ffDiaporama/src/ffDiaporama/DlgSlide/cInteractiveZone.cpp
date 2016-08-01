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

#include "cInteractiveZone.h"

#define HANDLESIZEX     8
#define HANDLESIZEY     8
#define HANDLEMAGNETX   14
#define HANDLEMAGNETY   10

#define RULER_HORIZ_SCREENBORDER    0x0001
#define RULER_HORIZ_TVMARGIN        0x0002
#define RULER_HORIZ_SCREENCENTER    0x0004
#define RULER_HORIZ_UNSELECTED      0x0008
#define RULER_VERT_SCREENBORDER     0x0010
#define RULER_VERT_TVMARGIN         0x0020
#define RULER_VERT_SCREENCENTER     0x0040
#define RULER_VERT_UNSELECTED       0x0080

#define MINVALUE                    0.002       // Never less than this value for width or height

SortBlock MakeSortBlock(int Index,qreal Position) {
    SortBlock SB;
    SB.Index=Index;
    SB.Position=Position;
    return SB;
}

//====================================================================================================================

cInteractiveZone::cInteractiveZone(QWidget *parent):QWidget(parent) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cInteractiveZone::cInteractiveZone");
    BlockTable      =NULL;
    DiaporamaObject =NULL;
    BackgroundImage =NULL;
    ForegroundImage =NULL;
    IsCapture       =false;
    TransfoType     =NOTYETDEFINED;
    setMouseTracking(true);
    AspectRatio     =1;
    Sel_X           =0;
    Sel_Y           =0;
    Sel_W           =0;
    Sel_H           =0;
    RSel_X          =0;
    RSel_Y          =0;
    RSel_W          =0;
    RSel_H          =0;
    Move_X          =0;
    Move_Y          =0;
    Scale_X         =0;
    Scale_Y         =0;
    CurrentShotNbr  =0;
    DisplayMode     =DisplayMode_BlockShape;
    IsRefreshQueued =false;
}

//====================================================================================================================

cInteractiveZone::~cInteractiveZone() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cInteractiveZone::~cInteractiveZone");
    if (BackgroundImage!=NULL) {
        delete BackgroundImage;
        BackgroundImage=NULL;
    }
    if (ForegroundImage!=NULL) {
        delete ForegroundImage;
        ForegroundImage=NULL;
    }
}

//====================================================================================================================

void cInteractiveZone::GetForDisplayUnit(double &DisplayW,double &DisplayH) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cInteractiveZone::GetForDisplayUnit");

    if (DiaporamaObject->Parent->ImageGeometry==GEOMETRY_4_3)        { DisplayW=1440; DisplayH=1080; }
    else if (DiaporamaObject->Parent->ImageGeometry==GEOMETRY_16_9)  { DisplayW=1920; DisplayH=1080; }
    else if (DiaporamaObject->Parent->ImageGeometry==GEOMETRY_40_17) { DisplayW=1920; DisplayH=816;  }
    else { DisplayW=0; DisplayH=0; }
}

//====================================================================================================================

void cInteractiveZone::DifferedEmitRightClickEvent() {
    emit RightClickEvent(NULL);
}

//====================================================================================================================

void cInteractiveZone::DifferedEmitDoubleClickEvent() {
    emit DoubleClickEvent(NULL);
}

//====================================================================================================================

QRectF cInteractiveZone::ApplyModifAndScaleFactors(int Block,QRectF Ref,bool ApplyShape) {
    qreal  NewX         =BlockTable->CompositionList->List[Block]->x;
    qreal  NewY         =BlockTable->CompositionList->List[Block]->y;
    qreal  NewW         =BlockTable->CompositionList->List[Block]->w;
    qreal  NewH         =BlockTable->CompositionList->List[Block]->h;
    qreal  RatioScale_X =(RSel_W+Scale_X)/RSel_W;
    qreal  RatioScale_Y =(RSel_H+Scale_Y)/RSel_H;
    QList<QPolygonF> Pol=ComputePolygon(BlockTable->CompositionList->List[Block]->BackgroundForm,NewX*Ref.width(),NewY*Ref.height(),NewW*Ref.width(),NewH*Ref.height());
    QPolygonF PolU(Pol.at(0));
    for (int i=1;i<Pol.count();i++) PolU=PolU.united(Pol.at(i));
    QRectF tmpRect=PolU.boundingRect();

    qreal  Decal_X      =(tmpRect.left()-NewX*Ref.width())/Ref.width();
    qreal  Decal_Y      =(tmpRect.top()-NewY*Ref.height())/Ref.height();
    qreal  Ratio_X      =(NewW*Ref.width())/tmpRect.width();
    qreal  Ratio_Y      =(NewH*Ref.height())/tmpRect.height();

    if ((IsCapture)&&(TransfoType!=NOTYETDEFINED)&&(BlockTable->CompositionList->List[Block]->IsVisible)&&(IsSelected[Block])) {
        NewX=RSel_X+Move_X+(NewX-RSel_X)*RatioScale_X;
        NewY=RSel_Y+Move_Y+(NewY-RSel_Y)*RatioScale_Y;
        NewW=NewW*RatioScale_X;
        if (NewW<0.002) NewW=0.002;
        if (BlockTable->CompositionList->List[Block]->BackgroundBrush->LockGeometry) NewH=((NewW*Ref.width())*BlockTable->CompositionList->List[Block]->BackgroundBrush->AspectRatio)/Ref.height();
            else NewH=NewH*RatioScale_Y;
        if (NewH<0.002) NewH=0.002;
        if (ApplyShape) {
            NewX=NewX+Decal_X*RatioScale_X;
            NewY=NewY+Decal_Y*RatioScale_Y;
        }
    } else if (IsSelected[Block]) {
        NewX=NewX+Decal_X;
        NewY=NewY+Decal_Y;
    }

    if (ApplyShape) {
        NewW=NewW/Ratio_X;
        NewH=NewH/Ratio_Y;
    }
    return QRectF(NewX*Ref.width(),NewY*Ref.height(),NewW*Ref.width(),NewH*Ref.height());
}

//====================================================================================================================

void cInteractiveZone::RefreshDisplay() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cInteractiveZone::RefreshDisplay");
    if ((!BlockTable)||(!BlockTable->CompositionList)) return;

    IsRefreshQueued=false;
    if (BlockTable->updatesEnabled()) {

        ScreenRect=QRectF(0,0,DisplayW,DisplayH);
        // Prepare BackgroundImage if not exist
        if (!BackgroundImage) {
            QPainter Painter;
            BackgroundImage=new QImage(DisplayW,DisplayH,QImage::Format_ARGB32_Premultiplied);
            Painter.begin(BackgroundImage);
            DiaporamaObject->Parent->PrepareBackground(DiaporamaObject->Parent->GetObjectIndex(DiaporamaObject),DisplayW,DisplayH,&Painter,0,0);
            Painter.end();
        }

        if (ForegroundImage!=NULL) {
            delete ForegroundImage;
            ForegroundImage=NULL;
        }

        ForegroundImage =new QImage(BackgroundImage->scaled(QSize(this->width()+2,this->height()+2),Qt::KeepAspectRatio,Qt::SmoothTransformation));
        SceneRect       =QRect((this->width()+2-ForegroundImage->width())/2,(this->height()+2-ForegroundImage->height())/2,ForegroundImage->width(),ForegroundImage->height());

        UpdateIsSelected();

        // Draw image of the scene under the background
        QPainter P;
        P.begin(ForegroundImage);
        P.save();

        int StartVideoPos=0;

        for (int i=0;i<BlockTable->CompositionList->List.count();i++) if (BlockTable->CompositionList->List[i]->IsVisible) {
            // If it's a video block, calc video position
            if ((BlockTable->CompositionList->List[i]->BackgroundBrush->MediaObject)&&(BlockTable->CompositionList->List[i]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)) {
                StartVideoPos=QTime(0,0,0,0).msecsTo(((cVideoFile *)BlockTable->CompositionList->List[i]->BackgroundBrush->MediaObject)->StartPos);
                for (int k=0;k<CurrentShotNbr;k++) {
                    for (int l=0;l<DiaporamaObject->List[k]->ShotComposition.List.count();l++) {
                        if (DiaporamaObject->List[k]->ShotComposition.List[l]->IndexKey==BlockTable->CompositionList->List[i]->IndexKey) {
                            if (DiaporamaObject->List[k]->ShotComposition.List[l]->IsVisible) StartVideoPos+=DiaporamaObject->List[k]->StaticDuration;
                            l=DiaporamaObject->List[k]->ShotComposition.List.count();    // stop loop
                        }
                    }
                }
            } else StartVideoPos=0;

            QRectF NewRect=ApplyModifAndScaleFactors(i,SceneRect,false);
            BlockTable->CompositionList->List[i]->DrawCompositionObject(DiaporamaObject,&P,double(ForegroundImage->height())/double(1080),ForegroundImage->width(),ForegroundImage->height(),true,StartVideoPos,
                                                                        NULL,1,1,NULL,DiaporamaObject->List[CurrentShotNbr]->StaticDuration,false,
                                                                        (IsCapture)&&(TransfoType!=NOTYETDEFINED),NewRect.left()/SceneRect.width(),NewRect.top()/SceneRect.height(),NewRect.width()/SceneRect.width(),NewRect.height()/SceneRect.height(),
                                                                        (DisplayMode==DisplayMode_TextMargin)&&(BlockTable->CompositionList->List[i]->IsVisible)&&(IsSelected[i]));
        }

        P.restore();
        P.end();
        repaint();
    }
}

//====================================================================================================================

void cInteractiveZone::paintEvent(QPaintEvent *) {
    if (!ForegroundImage) return;
    QPainter Painter(this);
    Painter.save();
    Painter.translate(SceneRect.left(),SceneRect.top());
    Painter.drawImage(-1,-1,*ForegroundImage);

    //Painter.setCompositionMode(QPainter::RasterOp_SourceXorDestination);
    Painter.setBrush(Qt::NoBrush);

    UpdateIsSelected();

    int CurSelect=0;

    if (DisplayMode==DisplayMode_BlockShape) {

        // Draw blue frame borders when multi-select
        for (int i=0;i<BlockTable->CompositionList->List.count();i++) if ((BlockTable->CompositionList->List[i]->IsVisible)&&(IsSelected[i])) {

            QRectF FullRect     =QRectF(BlockTable->CompositionList->List[i]->x*ScreenRect.width(),BlockTable->CompositionList->List[i]->y*ScreenRect.height(),
                                        BlockTable->CompositionList->List[i]->w*ScreenRect.width(),BlockTable->CompositionList->List[i]->h*ScreenRect.height());

            QRectF NewRect      =ApplyModifAndScaleFactors(i,SceneRect,true);
            QRectF NewRectScreen=ApplyModifAndScaleFactors(i,ScreenRect,true);
            if (NbrSelected>1) {
                QPen pen(Qt::white);
                pen.setJoinStyle(Qt::RoundJoin);
                pen.setWidth(1);
                pen.setStyle(Qt::DashLine);
                Painter.setPen(pen);
                DrawSelect(Painter,QRectF(NewRect.left()+1,NewRect.top()+1,NewRect.width(),NewRect.height()),false);
                pen.setColor(Qt::blue);
                Painter.setPen(pen);
                DrawSelect(Painter,NewRect,false);
            }

            if (CurSelect==0) {
                FullSelRect     =FullRect;
                CurSelRect      =NewRect;
                CurSelScreenRect=NewRectScreen;
                if (!IsCapture) {
                    Sel_X=NewRectScreen.left()/ScreenRect.width();      RSel_X=BlockTable->CompositionList->List[i]->x;
                    Sel_Y=NewRectScreen.top()/ScreenRect.height();      RSel_Y=BlockTable->CompositionList->List[i]->y;
                    Sel_W=NewRectScreen.width()/ScreenRect.width();     RSel_W=BlockTable->CompositionList->List[i]->w;
                    Sel_H=NewRectScreen.height()/ScreenRect.height();   RSel_H=BlockTable->CompositionList->List[i]->h;
                }
            } else {
                if (NewRect.left()  <CurSelRect.left())   {
                    CurSelRect.setLeft(NewRect.left());
                    CurSelScreenRect.setLeft(NewRectScreen.left());
                    if (!IsCapture) {
                        Sel_W=Sel_X+Sel_W-NewRectScreen.left()/ScreenRect.width();
                        Sel_X=NewRectScreen.left()/ScreenRect.width();
                    }
                }
                if (NewRect.top()   <CurSelRect.top())    {
                    CurSelRect.setTop(NewRect.top());
                    CurSelScreenRect.setTop(NewRectScreen.top());
                    if (!IsCapture) {
                        Sel_H=Sel_Y+Sel_H-NewRectScreen.top()/ScreenRect.height();
                        Sel_Y=NewRectScreen.top()/ScreenRect.height();
                    }
                }
                if (NewRect.right() >CurSelRect.right())  {
                    CurSelRect.setRight(NewRect.right());
                    CurSelScreenRect.setRight(NewRectScreen.right());
                    if (!IsCapture) Sel_W=NewRectScreen.left()/ScreenRect.width()+NewRectScreen.width()/ScreenRect.width()-Sel_X;
                }
                if (NewRect.bottom()>CurSelRect.bottom()) {
                    CurSelRect.setBottom(NewRect.bottom());
                    CurSelScreenRect.setBottom(NewRectScreen.bottom());
                    if (!IsCapture) Sel_H=NewRectScreen.top()/ScreenRect.height()+NewRectScreen.height()/ScreenRect.height()-Sel_Y;
                }
                //************
                if (FullRect.left()  <FullSelRect.left())   {
                    FullSelRect.setLeft(FullRect.left());
                    if (!IsCapture) {
                        RSel_W=RSel_X+RSel_W-FullRect.left()/ScreenRect.width();
                        RSel_X=FullRect.left()/ScreenRect.width();
                    }
                }
                if (FullRect.top()   <FullSelRect.top())    {
                    FullSelRect.setTop(FullRect.top());
                    if (!IsCapture) {
                        RSel_H=RSel_Y+RSel_H-FullRect.top()/ScreenRect.height();
                        RSel_Y=FullRect.top()/ScreenRect.height();
                    }
                }
                if (FullRect.right() >FullSelRect.right())  {
                    FullSelRect.setRight(FullRect.right());
                    if (!IsCapture) RSel_W=FullRect.left()/ScreenRect.width()+FullRect.width()/ScreenRect.width()-RSel_X;
                }
                if (FullRect.bottom()>FullSelRect.bottom()) {
                    FullSelRect.setBottom(FullRect.bottom());
                    if (!IsCapture) RSel_H=FullRect.top()/ScreenRect.height()+FullRect.height()/ScreenRect.height()-RSel_Y;
                }

            }
            CurSelect++;

        }

        if ((!IsCapture)&&(NbrSelected>0)) {
            if ((CurSelRect.width()==0)||(CurSelRect.height()==0)) {
                Sel_W=0.02;
                Sel_H=0.02;
                CurSelRect.setWidth(2);     CurSelScreenRect.setWidth(2);
                CurSelRect.setHeight(2);    CurSelScreenRect.setHeight(2);
            }
            if ((FullSelRect.width()==0)||(FullSelRect.height()==0)) {
                RSel_W=0.02;
                RSel_H=0.02;
                FullSelRect.setWidth(2);
                FullSelRect.setHeight(2);
            }
            AspectRatio=double(FullSelRect.height())/double(FullSelRect.width());
        }

        // Draw rullers if they was enabled
        if (MagneticRuler!=0) {
            QList<sDualQReal>   MagnetVert;
            QList<sDualQReal>   MagnetHoriz;
            ComputeRulers(MagnetVert,MagnetHoriz);

            // Draw rulers
            Painter.setCompositionMode(QPainter::RasterOp_SourceXorDestination);
            QPen Pen1=QPen(QColor(0,255,0)),Pen2=QPen(QColor(0,255,0));
            Pen1.setWidth(1);
            Pen1.setStyle(Qt::DotLine);
            Pen2.setWidth(1);
            Pen2.setStyle(Qt::DashDotDotLine);
            for (int i=0;i<MagnetVert.count();i++)  {
                if ((MagnetVert[i].Block==0)||(MagnetVert[i].Block==SceneRect.width())||                                                    // borders of the screen
                    (MagnetVert[i].Block==SceneRect.width()*0.5-1)||(MagnetVert[i].Block==SceneRect.width()*0.5)||                          // center of the screen
                    (MagnetVert[i].Block==SceneRect.width()*0.05)||(MagnetVert[i].Block==SceneRect.width()-SceneRect.width()*0.05))         // TV Margins
                        Painter.setPen(Pen1); else Painter.setPen(Pen2);
                if ((MagnetVert[i].Block!=0)&&(MagnetVert[i].Block!=SceneRect.width())) {                                                   // don't draw screen borders
                        Painter.drawLine(MagnetVert[i].Block,0,MagnetVert[i].Block,SceneRect.height());
                }
            }
            for (int i=0;i<MagnetHoriz.count();i++) {
                if ((MagnetHoriz[i].Block==0)||(MagnetHoriz[i].Block==SceneRect.height())||                                                 // borders of the screen
                    (MagnetHoriz[i].Block==SceneRect.height()*0.5-1)||(MagnetHoriz[i].Block==SceneRect.height()*0.5)||                      // centers of the screen
                    (MagnetHoriz[i].Block==SceneRect.height()*0.05)||(MagnetHoriz[i].Block==SceneRect.height()-SceneRect.height()*0.05))    // TV Margins
                        Painter.setPen(Pen1); else Painter.setPen(Pen2);
                if ((MagnetHoriz[i].Block!=0)&&(MagnetHoriz[i].Block!=SceneRect.height())) {                                                // don't draw screen borders
                        Painter.drawLine(0,MagnetHoriz[i].Block,SceneRect.width(),MagnetHoriz[i].Block);
                }
            }
        }

        // Draw select frame border
        if (NbrSelected>0) {
            QPen pen(Qt::red);
            pen.setWidth(2);
            pen.setStyle(Qt::DashLine);
            Painter.setPen(pen);
            if (CurSelRect.isValid()) DrawSelect(Painter,CurSelRect,true);
        }

    }

    Painter.restore();
}

//====================================================================================================================

void cInteractiveZone::DrawSelect(QPainter &Painter,QRectF Rect,bool WithHandles) {
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

void cInteractiveZone::UpdateIsSelected() {
    QModelIndexList SelList=BlockTable->selectionModel()->selectedIndexes();
    IsSelected.clear();
    NbrSelected           =0;
    LockGeometry          =false;

    for (int i=0;i<BlockTable->rowCount();i++)  IsSelected.append(false);
    for (int i=0;i<SelList.count();i++)         IsSelected[SelList.at(i).row()]=BlockTable->CompositionList->List[SelList.at(i).row()]->IsVisible;

    for (int i=0;i<IsSelected.count();i++) if (IsSelected[i]) {
        NbrSelected++;
        if (BlockTable->CompositionList->List[i]->BackgroundBrush->LockGeometry) LockGeometry=true;
    }
}

//====================================================================================================================

bool cInteractiveZone::IsInRect(QPointF Pos,QRectF Rect) {
    return ((Pos.x()-SceneRect.left()>=Rect.left())&&(Pos.x()-SceneRect.left()<=Rect.right())&&(Pos.y()-SceneRect.top()>=Rect.top())&&(Pos.y()-SceneRect.top()<=Rect.bottom()));
}

//====================================================================================================================

bool cInteractiveZone::IsInSelectedRect(QPointF Pos) {
    UpdateIsSelected();
    for (int i=0;i<BlockTable->CompositionList->List.count();i++) if ((BlockTable->CompositionList->List[i]->IsVisible)&&(IsSelected[i])) {
        QRectF ObjRect=ApplyModifAndScaleFactors(i,SceneRect,true);
        if ((Pos.x()-SceneRect.left()>=ObjRect.left())&&(Pos.x()-SceneRect.left()<=ObjRect.right())&&(Pos.y()-SceneRect.top()>=ObjRect.top())&&(Pos.y()-SceneRect.top()<=ObjRect.bottom())) return true;
    }
    return false;
}

//====================================================================================================================

void cInteractiveZone::ManageCursor(QPointF Pos,Qt::KeyboardModifiers Modifiers) {
    if      (IsInRect(Pos,QRect(CurSelRect.left()-HANDLESIZEX/2, CurSelRect.bottom()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))                      setCursor(Qt::SizeBDiagCursor);  // Bottom left
    else if (IsInRect(Pos,QRect(CurSelRect.left()-HANDLESIZEX/2,CurSelRect.top()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))                          setCursor(Qt::SizeFDiagCursor);  // Top left
    else if (IsInRect(Pos,QRect(CurSelRect.left()-HANDLESIZEX/2, CurSelRect.top()+CurSelRect.height()/2-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))   setCursor(Qt::SizeHorCursor);    // Left
    else if (IsInRect(Pos,QRect(CurSelRect.right()-HANDLESIZEX/2,CurSelRect.top()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))                         setCursor(Qt::SizeBDiagCursor);  // Top right
    else if (IsInRect(Pos,QRect(CurSelRect.right()-HANDLESIZEX/2,CurSelRect.top()+CurSelRect.height()/2-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))   setCursor(Qt::SizeHorCursor);    // Right
    else if (IsInRect(Pos,QRect(CurSelRect.right()-HANDLESIZEX/2,CurSelRect.bottom()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))                      setCursor(Qt::SizeFDiagCursor);  // Bottom right
    else if (IsInRect(Pos,QRect(CurSelRect.left()+CurSelRect.width()/2-HANDLESIZEX/2,CurSelRect.top()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))     setCursor(Qt::SizeVerCursor);    // Top
    else if (IsInRect(Pos,QRect(CurSelRect.left()+CurSelRect.width()/2-HANDLESIZEX/2,CurSelRect.bottom()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY)))  setCursor(Qt::SizeVerCursor);    // Bottom
    else if (IsInSelectedRect(Pos)) {
        if      (Modifiers==Qt::NoModifier)                                         setCursor(Qt::OpenHandCursor);
        else if ((Modifiers==Qt::ControlModifier)||(Modifiers==Qt::ShiftModifier))  setCursor(Qt::PointingHandCursor);
        else if (Modifiers==(Qt::ControlModifier|Qt::ShiftModifier))                setCursor(Qt::CrossCursor);
        else                                                                        setCursor(Qt::ArrowCursor);
    } else setCursor(Qt::ArrowCursor);   // standard
}

//====================================================================================================================

QRectF cInteractiveZone::ComputeNewCurSelRect() {
    QRectF NewCurSelRect;
    int CurSelect=0;
    for (int i=0;i<BlockTable->CompositionList->List.count();i++) if ((BlockTable->CompositionList->List[i]->IsVisible)&&(IsSelected[i])) {
        QRectF NewRect=ApplyModifAndScaleFactors(i,SceneRect,true);
        if (CurSelect==0) NewCurSelRect=NewRect; else {
            if (NewRect.left()  <NewCurSelRect.left())   NewCurSelRect.setLeft(NewRect.left());
            if (NewRect.top()   <NewCurSelRect.top())    NewCurSelRect.setTop(NewRect.top());
            if (NewRect.right() >NewCurSelRect.right())  NewCurSelRect.setRight(NewRect.right());
            if (NewRect.bottom()>NewCurSelRect.bottom()) NewCurSelRect.setBottom(NewRect.bottom());
        }
        CurSelect++;
    }
    return NewCurSelRect;
}

QRectF cInteractiveZone::ComputeNewCurSelScreenRect() {
    QRectF NewCurSelRect;
    int CurSelect=0;
    for (int i=0;i<BlockTable->CompositionList->List.count();i++) if ((BlockTable->CompositionList->List[i]->IsVisible)&&(IsSelected[i])) {
        QRectF NewRect=ApplyModifAndScaleFactors(i,ScreenRect,true);
        if (CurSelect==0) NewCurSelRect=NewRect; else {
            if (NewRect.left()  <NewCurSelRect.left())   NewCurSelRect.setLeft(NewRect.left());
            if (NewRect.top()   <NewCurSelRect.top())    NewCurSelRect.setTop(NewRect.top());
            if (NewRect.right() >NewCurSelRect.right())  NewCurSelRect.setRight(NewRect.right());
            if (NewRect.bottom()>NewCurSelRect.bottom()) NewCurSelRect.setBottom(NewRect.bottom());
        }
        CurSelect++;
    }
    return NewCurSelRect;
}

//====================================================================================================================

void cInteractiveZone::keyPressEvent(QKeyEvent *event) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cInteractiveZone::keyPressEvent");
    if ((!BlockTable)||(!BlockTable->CompositionList)) return;

    ManageCursor(mapFromGlobal(QCursor::pos()),event->modifiers());
    if (NbrSelected>0) {
        double StepX=double(1)/SceneRect.width();
        double StepY=double(1)/SceneRect.height();

        Move_X =0;
        Scale_X=0;
        Move_Y =0;
        Scale_Y=0;

        switch (event->key()) {
            case Qt::Key_Left:
                if (event->modifiers()==Qt::ShiftModifier)          {Move_X =-StepX; Scale_X=StepX; Move_Y=LockGeometry?(AspectRatio*Move_X*SceneRect.width())/SceneRect.height():0; Scale_Y=LockGeometry?(AspectRatio*Scale_X*SceneRect.width())/SceneRect.height():0;}
                else if (event->modifiers()==Qt::ControlModifier)   {Scale_X=-StepX; Scale_Y=LockGeometry?(AspectRatio*Scale_X*SceneRect.width())/SceneRect.height():0; }
                else                                                 Move_X=-StepX;
                break;
            case Qt::Key_Right:
                if (event->modifiers()==Qt::ShiftModifier)          {Move_X =StepX; Scale_X=-StepX; Move_Y=LockGeometry?(AspectRatio*Move_X*SceneRect.width())/SceneRect.height():0; Scale_Y=LockGeometry?(AspectRatio*Scale_X*SceneRect.width())/SceneRect.height():0;}
                else if (event->modifiers()==Qt::ControlModifier)   {Scale_X=StepX; Scale_Y=LockGeometry?(AspectRatio*Scale_X*SceneRect.width())/SceneRect.height():0; }
                else                                                 Move_X=StepX;
                break;
            case Qt::Key_Up:
                if (event->modifiers()==Qt::ShiftModifier)          {Move_Y =-StepY; Scale_Y=StepY; Move_X=LockGeometry?((Move_Y*SceneRect.height())/AspectRatio)/SceneRect.width():0; Scale_X=LockGeometry?((Scale_Y*SceneRect.height())/AspectRatio)/SceneRect.width():0;}
                else if (event->modifiers()==Qt::ControlModifier)   {Scale_Y=-StepY; Scale_X=LockGeometry?((Scale_Y*SceneRect.height())/AspectRatio)/SceneRect.width():0; }
                else                                                 Move_Y=-StepY;
                break;
            case Qt::Key_Down:
                if (event->modifiers()==Qt::ShiftModifier)          {Move_Y =StepY; Scale_Y=-StepY; Move_X=LockGeometry?((Move_Y*SceneRect.height())/AspectRatio)/SceneRect.width():0; Scale_X=LockGeometry?((Scale_Y*SceneRect.height())/AspectRatio)/SceneRect.width():0;}
                else if (event->modifiers()==Qt::ControlModifier)   {Scale_Y=StepY; Scale_X=LockGeometry?((Scale_Y*SceneRect.height())/AspectRatio)/SceneRect.width():0; }
                else                                                 Move_Y=StepY;
                break;
            default :
                QWidget::keyPressEvent(event);
                break;
        }
        if ((Move_X!=0)||(Move_Y!=0)||(Scale_X!=0)||(Scale_Y!=0)) emit TransformBlock(Move_X,Move_Y,Scale_X,Scale_Y,RSel_X,RSel_Y,RSel_W,RSel_H);
    } else QWidget::keyPressEvent(event);
}

//====================================================================================================================

void cInteractiveZone::keyReleaseEvent(QKeyEvent *event) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cInteractiveZone::keyReleaseEvent");
    if ((!BlockTable)||(!BlockTable->CompositionList)) return;

    ManageCursor(mapFromGlobal(QCursor::pos()),event->modifiers());
    QWidget::keyReleaseEvent(event);
}

//====================================================================================================================

cInteractiveZone::sDualQReal cInteractiveZone::PrepDualQReal(qreal Screen,qreal Block) {
    sDualQReal Prep;
    Prep.Screen=Screen;
    Prep.Block =Block;
    return Prep;
}

//====================================================================================================================

void cInteractiveZone::ComputeRulers(QList<sDualQReal> &MagnetVert,QList<sDualQReal> &MagnetHoriz) {
    qreal hEcart=0.005*ScreenRect.width(),                          vEcart=0.005*ScreenRect.height();
    qreal h1=CurSelScreenRect.left(),                               v1=CurSelScreenRect.top();
    qreal h2=CurSelScreenRect.left()+(CurSelScreenRect.width()/2),  v2=CurSelScreenRect.top()+(CurSelScreenRect.height()/2);
    qreal h3=CurSelScreenRect.right(),                              v3=CurSelScreenRect.bottom();

    if ((MagneticRuler&RULER_VERT_SCREENBORDER)!=0)     MagnetVert.append(PrepDualQReal(0,                                              0));                                            // Left screen
    if ((MagneticRuler&RULER_VERT_SCREENBORDER)!=0)     MagnetVert.append(PrepDualQReal(ScreenRect.width(),                             SceneRect.width()));                            // Right screen
    if ((MagneticRuler&RULER_VERT_TVMARGIN)!=0)         MagnetVert.append(PrepDualQReal(ScreenRect.width()*0.05,                        SceneRect.width()*0.05));                       // 5% Left TV Margins
    if ((MagneticRuler&RULER_VERT_TVMARGIN)!=0)         MagnetVert.append(PrepDualQReal(ScreenRect.width()-ScreenRect.width()*0.05,     SceneRect.width()-SceneRect.width()*0.05));     // 5% Right TV Margins
    if ((MagneticRuler&RULER_VERT_SCREENCENTER)!=0)     MagnetVert.append(PrepDualQReal(ScreenRect.width()*0.5,     SceneRect.width()*0.5));
    if ((MagneticRuler&RULER_HORIZ_SCREENBORDER)!=0)    MagnetHoriz.append(PrepDualQReal(0,                                             0));                                            // Top screen
    if ((MagneticRuler&RULER_HORIZ_SCREENBORDER)!=0)    MagnetHoriz.append(PrepDualQReal(ScreenRect.height(),                           SceneRect.height()));                           // Bottom screen
    if ((MagneticRuler&RULER_HORIZ_TVMARGIN)!=0)        MagnetHoriz.append(PrepDualQReal(ScreenRect.height()*0.05,                      SceneRect.height()*0.05));                      // 5% Up TV Margins
    if ((MagneticRuler&RULER_HORIZ_TVMARGIN)!=0)        MagnetHoriz.append(PrepDualQReal(ScreenRect.height()-ScreenRect.height()*0.05,  SceneRect.height()-SceneRect.height()*0.05));   // 5% Bottom TV Margins
    if ((MagneticRuler&RULER_HORIZ_SCREENCENTER)!=0)    MagnetHoriz.append(PrepDualQReal(ScreenRect.height()*0.5,   SceneRect.height()*0.5));

    // Unselected object
    if (IsCapture) for (int i=BlockTable->CompositionList->List.count()-1;i>=0;i--) if ((!IsSelected[i])&&(BlockTable->CompositionList->List[i]->IsVisible)) {
        QList<QPolygonF> PolScene=ComputePolygon( BlockTable->CompositionList->List[i]->BackgroundForm,
                                                  BlockTable->CompositionList->List[i]->x*SceneRect.width(),  BlockTable->CompositionList->List[i]->y*SceneRect.height(),
                                                  BlockTable->CompositionList->List[i]->w*SceneRect.width(),  BlockTable->CompositionList->List[i]->h*SceneRect.height());

        QList<QPolygonF> PolScreen=ComputePolygon(BlockTable->CompositionList->List[i]->BackgroundForm,
                                                  BlockTable->CompositionList->List[i]->x*ScreenRect.width(),  BlockTable->CompositionList->List[i]->y*ScreenRect.height(),
                                                  BlockTable->CompositionList->List[i]->w*ScreenRect.width(),  BlockTable->CompositionList->List[i]->h*ScreenRect.height());

        QPolygonF PolSceneU(PolScene.at(0));
        for (int j=1;j<PolScene.count();j++) PolSceneU=PolSceneU.united(PolScene.at(j));
        QRectF tmpSceneRect=PolSceneU.boundingRect();

        QPolygonF PolScreenU(PolScreen.at(0));
        for (int j=1;j<PolScreen.count();j++) PolScreenU=PolScreenU.united(PolScreen.at(j));
        QRectF tmpScreenRect=PolScreenU.boundingRect();

        /*
        if ((BlockTable->CompositionList->List[i]->RotateXAxis!=0)||(BlockTable->CompositionList->List[i]->RotateYAxis!=0)||(BlockTable->CompositionList->List[i]->RotateZAxis!=0)) {
            QTransform   Matrix;
            Matrix.rotate(BlockTable->CompositionList->List[i]->RotateXAxis,Qt::XAxis);
            Matrix.rotate(BlockTable->CompositionList->List[i]->RotateYAxis,Qt::YAxis);
            Matrix.rotate(BlockTable->CompositionList->List[i]->RotateZAxis,Qt::ZAxis);

            QPointF      Center=tmpSceneRect.center();
            QPainterPath Path;
            PolSceneU.translate(-Center.x(),-Center.y());
            Path.addPolygon(PolSceneU);
            tmpSceneRect=Path.toFillPolygon(Matrix).boundingRect();
            tmpSceneRect.translate(Center);

            Center=tmpScreenRect.center();
            Path  =QPainterPath();
            PolScreenU.translate(-Center.x(),-Center.y());
            Path.addPolygon(PolScreenU);
            tmpScreenRect=Path.toFillPolygon(Matrix).boundingRect();
            tmpScreenRect.translate(Center);
        }
        */
        qreal x1=tmpScreenRect.left(),      y1=tmpScreenRect.top();
        qreal x2=tmpScreenRect.center().x(),y2=tmpScreenRect.center().y();
        qreal x3=tmpScreenRect.right(),     y3=tmpScreenRect.bottom();

        if ((MagneticRuler&RULER_VERT_UNSELECTED)!=0) {
            if (((x1>(h1-hEcart))&&(x1<(h1+hEcart)))||((x1>(h2-hEcart))&&(x1<(h2+hEcart)))||((x1>(h3-hEcart))&&(x1<(h3+hEcart)))) MagnetVert.append(PrepDualQReal(x1,tmpSceneRect.left()));
            if (((x2>(h1-hEcart))&&(x2<(h1+hEcart)))||((x2>(h2-hEcart))&&(x2<(h2+hEcart)))||((x2>(h3-hEcart))&&(x2<(h3+hEcart)))) MagnetVert.append(PrepDualQReal(x2,tmpSceneRect.center().x()));
            if (((x3>(h1-hEcart))&&(x3<(h1+hEcart)))||((x3>(h2-hEcart))&&(x3<(h2+hEcart)))||((x3>(h3-hEcart))&&(x3<(h3+hEcart)))) MagnetVert.append(PrepDualQReal(x3,tmpSceneRect.right()));
            // Add intermediate rulers if exist and block don't rotated
            if ((ShapeFormDefinition.at(BlockTable->CompositionList->List[i]->BackgroundForm).AdditonnalRulerX.count()>0)&&
                (BlockTable->CompositionList->List[i]->RotateXAxis==0)&&(BlockTable->CompositionList->List[i]->RotateYAxis==0)&&(BlockTable->CompositionList->List[i]->RotateZAxis==0))
                for (int AddR=0;AddR<ShapeFormDefinition.at(BlockTable->CompositionList->List[i]->BackgroundForm).AdditonnalRulerX.count();AddR++) {
                    double PosXScreen=tmpScreenRect.left()+tmpScreenRect.width()*ShapeFormDefinition.at(BlockTable->CompositionList->List[i]->BackgroundForm).AdditonnalRulerX.at(AddR);
                    double PosXScene =tmpSceneRect.left() +tmpSceneRect.width()* ShapeFormDefinition.at(BlockTable->CompositionList->List[i]->BackgroundForm).AdditonnalRulerX.at(AddR);
                    if (((PosXScreen>(h1-hEcart))&&(PosXScreen<(h1+hEcart)))||((PosXScreen>(h2-hEcart))&&(PosXScreen<(h2+hEcart)))||((PosXScreen>(h3-hEcart))&&(PosXScreen<(h3+hEcart)))) MagnetVert.append(PrepDualQReal(PosXScreen,PosXScene));
            }
        }

        if ((MagneticRuler&RULER_HORIZ_UNSELECTED)!=0) {
            if (((y1>(v1-vEcart))&&(y1<(v1+vEcart)))||((y1>(v2-vEcart))&&(y1<(v2+vEcart)))||((y1>(v3-vEcart))&&(y1<(v3+vEcart)))) MagnetHoriz.append(PrepDualQReal(y1,tmpSceneRect.top()));
            if (((y2>(v1-vEcart))&&(y2<(v1+vEcart)))||((y2>(v2-vEcart))&&(y2<(v2+vEcart)))||((y2>(v3-vEcart))&&(y2<(v3+vEcart)))) MagnetHoriz.append(PrepDualQReal(y2,tmpSceneRect.center().y()));
            if (((y3>(v1-vEcart))&&(y3<(v1+vEcart)))||((y3>(v2-vEcart))&&(y3<(v2+vEcart)))||((y3>(v3-vEcart))&&(y3<(v3+vEcart)))) MagnetHoriz.append(PrepDualQReal(y3,tmpSceneRect.bottom()));
            // Add intermediate rulers if exist and block don't rotated
            if ((ShapeFormDefinition.at(BlockTable->CompositionList->List[i]->BackgroundForm).AdditonnalRulerY.count()>0)&&
                (BlockTable->CompositionList->List[i]->RotateXAxis==0)&&(BlockTable->CompositionList->List[i]->RotateYAxis==0)&&(BlockTable->CompositionList->List[i]->RotateZAxis==0))
                for (int AddR=0;AddR<ShapeFormDefinition.at(BlockTable->CompositionList->List[i]->BackgroundForm).AdditonnalRulerY.count();AddR++) {
                    double PosYScreen=tmpScreenRect.top()+tmpScreenRect.height()*ShapeFormDefinition.at(BlockTable->CompositionList->List[i]->BackgroundForm).AdditonnalRulerY.at(AddR);
                    double PosYScene =tmpSceneRect.top() +tmpSceneRect.height()* ShapeFormDefinition.at(BlockTable->CompositionList->List[i]->BackgroundForm).AdditonnalRulerY.at(AddR);
                    if (((PosYScreen>(v1-vEcart))&&(PosYScreen<(v1+vEcart)))||((PosYScreen>(v2-vEcart))&&(PosYScreen<(v2+vEcart)))||((PosYScreen>(v3-vEcart))&&(PosYScreen<(v3+vEcart)))) MagnetHoriz.append(PrepDualQReal(PosYScreen,PosYScene));
            }
        }
    }

    // Clean collections
    for (int i=MagnetHoriz.count()-1;i>=0;i--) for (int j=0;j<i;j++) if (int(MagnetHoriz[j].Block)==int(MagnetHoriz[i].Block)) { MagnetHoriz.removeAt(i); break; }
    for (int i=MagnetVert.count()-1;i>=0;i--)  for (int j=0;j<i;j++) if (int(MagnetVert[j].Block) ==int(MagnetVert[i].Block))  { MagnetVert.removeAt(i);  break; }
}

//====================================================================================================================

void cInteractiveZone::mouseMoveEvent(QMouseEvent *event) {
    //ToLog(LOGMSG_DEBUGTRACE,"IN:cInteractiveZone::mouseMoveEvent");   // Remove : too much
    if ((!BlockTable)||(!BlockTable->CompositionList)) return;

    if (!IsCapture) {

        ManageCursor(event->pos(),event->modifiers());

    } else {

        // *************************************************************************
        // Create rulers
        // *************************************************************************

        QList<sDualQReal>   MagnetVert;
        QList<sDualQReal>   MagnetHoriz;
        ComputeRulers(MagnetVert,MagnetHoriz);

        // *************************************************************************
        // Calc transformation
        // *************************************************************************

        QRectF  NewCurSelRect;
        qreal   DX      =qreal(event->pos().x()-CapturePos.x())/SceneRect.width();
        qreal   DY      =qreal(event->pos().y()-CapturePos.y())/SceneRect.height();
        Move_X          =0;
        Move_Y          =0;
        Scale_X         =0;
        Scale_Y         =0;
        CurSelScreenRect=ComputeNewCurSelScreenRect();

        // Top left
        if  (TransfoType==RESIZEUPLEFT) {
            // Adjust DX and DY for resize not less than 0
            if (DX>=Sel_W-MINVALUE)  DX=Sel_W-MINVALUE;
            if (DY>=Sel_H-MINVALUE)  DY=Sel_H-MINVALUE;
            Move_X          =DX;
            Move_Y          =LockGeometry?(AspectRatio*Move_X*ScreenRect.width())/ScreenRect.height():DY;
            Scale_X         =-Move_X;
            Scale_Y         =-Move_Y;
            NewCurSelRect   =ComputeNewCurSelRect();

            // Apply magnetic rules vertical
            for (int Ruller=0;Ruller<MagnetVert.count();Ruller++) if ((MagnetVert[Ruller].Block<NewCurSelRect.right())&&(NewCurSelRect.left()>=MagnetVert[Ruller].Block-HANDLEMAGNETX)&&(NewCurSelRect.left()<=MagnetVert[Ruller].Block+HANDLEMAGNETX)) {
                qreal NewW  =CurSelScreenRect.right()-MagnetVert[Ruller].Screen;
                qreal OldW  =CurSelScreenRect.width();
                qreal Trans =NewW/OldW;
                Move_X =-(NewW-OldW+(CurSelScreenRect.left()-FullSelRect.left())*Trans-(CurSelScreenRect.left()-FullSelRect.left()))/ScreenRect.width();
                if (LockGeometry) Move_Y=(AspectRatio*Move_X*ScreenRect.width())/ScreenRect.height();
                Scale_Y=-Move_Y;
                Scale_X=-Move_X;
                break;
            }

            // Apply magnetic rules horizontal
            for (int Ruller=0;Ruller<MagnetHoriz.count();Ruller++) if ((MagnetHoriz[Ruller].Block<NewCurSelRect.bottom())&&(NewCurSelRect.top()>=MagnetHoriz[Ruller].Block-HANDLEMAGNETY)&&(NewCurSelRect.top()<=MagnetHoriz[Ruller].Block+HANDLEMAGNETY)) {
                qreal NewH  =CurSelScreenRect.bottom()-MagnetHoriz[Ruller].Screen;
                qreal OldH  =CurSelScreenRect.height();
                qreal Trans =NewH/OldH;
                Move_Y =-(NewH-OldH+(CurSelScreenRect.top()-FullSelRect.top())*Trans-(CurSelScreenRect.top()-FullSelRect.top()))/ScreenRect.height();
                if (LockGeometry) Move_X=(Move_Y*ScreenRect.height()/AspectRatio)/ScreenRect.width();
                Scale_Y=-Move_Y;
                Scale_X=-Move_X;
                break;
            }

        // Left
        } else if (TransfoType==RESIZELEFT) {
            // Adjust DX and DY for resize not less than 0
            if (DX>=Sel_W-MINVALUE)  DX=Sel_W-MINVALUE;
            if (DY>=Sel_H-MINVALUE)  DY=Sel_H-MINVALUE;
            Move_X =DX;
            Scale_X=-Move_X;
            if (LockGeometry) {
                Scale_Y=(AspectRatio*Scale_X*ScreenRect.width())/ScreenRect.height();
                Move_Y =-Scale_Y/2;
            }
            NewCurSelRect=ComputeNewCurSelRect();

            // Apply magnetic rules vertical
            for (int Ruller=0;Ruller<MagnetVert.count();Ruller++) if ((MagnetVert[Ruller].Block<NewCurSelRect.right())&&(NewCurSelRect.left()>=MagnetVert[Ruller].Block-HANDLEMAGNETX)&&(NewCurSelRect.left()<=MagnetVert[Ruller].Block+HANDLEMAGNETX)) {
                qreal NewW  =CurSelScreenRect.right()-MagnetVert[Ruller].Screen;
                qreal OldW  =CurSelScreenRect.width();
                qreal Trans =NewW/OldW;
                Move_X =-(NewW-OldW+(CurSelScreenRect.left()-FullSelRect.left())*Trans-(CurSelScreenRect.left()-FullSelRect.left()))/ScreenRect.width();
                Scale_X=-Move_X;
                if (LockGeometry) {
                    Scale_Y=(AspectRatio*Scale_X*ScreenRect.width())/ScreenRect.height();
                    Move_Y =-Scale_Y/2;
                }
                break;
            }

        // Bottom left
        } else if (TransfoType==RESIZEDOWNLEFT) {
            // Adjust DX and DY for resize not less than 0
            if (Sel_W!=0) {
                if (DX>=Sel_W-MINVALUE)     DX=Sel_W-MINVALUE;
                if (DY<=-(Sel_H-MINVALUE))  DY=-(Sel_H-MINVALUE);
            }
            Move_X       =DX;
            Scale_X      =-Move_X;
            Move_Y       =0;
            Scale_Y      =LockGeometry?(AspectRatio*Scale_X*ScreenRect.width())/ScreenRect.height():DY;

            NewCurSelRect=ComputeNewCurSelRect();

            // Apply magnetic rules vertical
            for (int Ruller=0;Ruller<MagnetVert.count();Ruller++) if ((MagnetVert[Ruller].Block<NewCurSelRect.right())&&(NewCurSelRect.left()>=MagnetVert[Ruller].Block-HANDLEMAGNETX)&&(NewCurSelRect.left()<=MagnetVert[Ruller].Block+HANDLEMAGNETX)) {
                qreal NewW  =CurSelScreenRect.right()-MagnetVert[Ruller].Screen;
                qreal OldW  =CurSelScreenRect.width();
                qreal Trans =NewW/OldW;
                Move_X      =-(NewW-OldW+(CurSelScreenRect.left()-FullSelRect.left())*Trans-(CurSelScreenRect.left()-FullSelRect.left()))/ScreenRect.width();
                Scale_X     =-Move_X;
                if (LockGeometry) Scale_Y=-(AspectRatio*Move_X*ScreenRect.width())/ScreenRect.height();
                break;
            }

            // Apply magnetic rules horizontal
            for (int Ruller=0;Ruller<MagnetHoriz.count();Ruller++) if ((MagnetHoriz[Ruller].Block>NewCurSelRect.top())&&(NewCurSelRect.bottom()>=MagnetHoriz[Ruller].Block-HANDLEMAGNETY)&&(NewCurSelRect.bottom()<=MagnetHoriz[Ruller].Block+HANDLEMAGNETY)) {
                qreal NewH  =MagnetHoriz[Ruller].Screen-CurSelScreenRect.top();
                qreal OldH  =CurSelScreenRect.height();
                qreal Trans =NewH/OldH;
                Scale_Y     =(NewH-OldH+(FullSelRect.bottom()-CurSelScreenRect.bottom())*Trans-(FullSelRect.bottom()-CurSelScreenRect.bottom()))/ScreenRect.height();

                if (LockGeometry) {
                    Move_X =-(Scale_Y*ScreenRect.height()/AspectRatio)/ScreenRect.width();
                    Scale_X=-Move_X;
                }
                break;
            }

        // Top right
        } else if (TransfoType==RESIZEUPRIGHT) {
            // Adjust DX and DY for resize not less than 0
            if (DX<=-(Sel_W-MINVALUE))  DX=-(Sel_W-MINVALUE);
            if (DY>=Sel_H-MINVALUE)     DY=Sel_H-MINVALUE;
            Move_X       =0;
            Scale_X      =DX;
            Move_Y       =LockGeometry?(-AspectRatio*Scale_X*ScreenRect.width())/ScreenRect.height():DY;
            Scale_Y      =-Move_Y;
            NewCurSelRect=ComputeNewCurSelRect();

            // Apply magnetic rules vertical
            for (int Ruller=0;Ruller<MagnetVert.count();Ruller++) if ((MagnetVert[Ruller].Block>NewCurSelRect.left())&&(NewCurSelRect.right()>=MagnetVert[Ruller].Block-HANDLEMAGNETX)&&(NewCurSelRect.right()<=MagnetVert[Ruller].Block+HANDLEMAGNETX)) {
                qreal NewW  =MagnetVert[Ruller].Screen-CurSelScreenRect.left();
                qreal OldW  =CurSelScreenRect.width();
                qreal Trans =NewW/OldW;
                Scale_X     =(NewW-OldW+(FullSelRect.right()-CurSelScreenRect.right())*Trans-(FullSelRect.right()-CurSelScreenRect.right()))/ScreenRect.width();
                if (LockGeometry) Move_Y=-(AspectRatio*Scale_X*ScreenRect.width())/ScreenRect.height();
                Scale_Y=-Move_Y;
                break;
            }

            // Apply magnetic rules horizontal
            for (int Ruller=0;Ruller<MagnetHoriz.count();Ruller++) if ((MagnetHoriz[Ruller].Block<NewCurSelRect.bottom())&&(NewCurSelRect.top()>=MagnetHoriz[Ruller].Block-HANDLEMAGNETY)&&(NewCurSelRect.top()<=MagnetHoriz[Ruller].Block+HANDLEMAGNETY)) {
                qreal NewH  =CurSelScreenRect.bottom()-MagnetHoriz[Ruller].Screen;
                qreal OldH  =CurSelScreenRect.height();
                qreal Trans =NewH/OldH;
                Move_Y =-(NewH-OldH+(CurSelScreenRect.top()-FullSelRect.top())*Trans-(CurSelScreenRect.top()-FullSelRect.top()))/ScreenRect.height();
                if (LockGeometry) Scale_X=-(Move_Y*ScreenRect.height()/AspectRatio)/ScreenRect.width();
                Scale_Y=-Move_Y;
                break;
            }
        // Right
        } else if (TransfoType==RESIZERIGHT) {
            // Adjust DX and DY for resize not less than 0
            if (DX<=-(Sel_W-MINVALUE)) DX=-(Sel_W-MINVALUE);
            if (DY<=-(Sel_H-MINVALUE)) DY=-(Sel_H-MINVALUE);
            Move_X =0;
            Scale_X=DX;
            if (LockGeometry) {
                Scale_Y=(AspectRatio*Scale_X*ScreenRect.width())/ScreenRect.height();
                Move_Y =-Scale_Y/2;
            }
            NewCurSelRect=ComputeNewCurSelRect();

            // Apply magnetic rules vertical
            for (int Ruller=0;Ruller<MagnetVert.count();Ruller++) if ((MagnetVert[Ruller].Block>NewCurSelRect.left())&&(NewCurSelRect.right()>=MagnetVert[Ruller].Block-HANDLEMAGNETX)&&(NewCurSelRect.right()<=MagnetVert[Ruller].Block+HANDLEMAGNETX)) {
                qreal NewW  =MagnetVert[Ruller].Screen-CurSelScreenRect.left();
                qreal OldW  =CurSelScreenRect.width();
                qreal Trans =NewW/OldW;
                Scale_X     =(NewW-OldW+(FullSelRect.right()-CurSelScreenRect.right())*Trans-(FullSelRect.right()-CurSelScreenRect.right()))/ScreenRect.width();
                if (LockGeometry) {
                    Scale_Y=(AspectRatio*Scale_X*ScreenRect.width())/ScreenRect.height();
                    Move_Y =-Scale_Y/2;
                }
                break;
            }
        // Bottom right
        } else if (TransfoType==RESIZEDOWNRIGHT) {
            // Adjust DX and DY for resize not less than 0
            if (DX<=-(Sel_W-MINVALUE)) DX=-(Sel_W-MINVALUE);
            if (DY<=-(Sel_H-MINVALUE)) DY=-(Sel_H-MINVALUE);
            Move_X       =0;
            Scale_X      =DX;
            Move_Y       =0;
            Scale_Y      =LockGeometry?(AspectRatio*Scale_X*ScreenRect.width())/ScreenRect.height():DY;
            NewCurSelRect=ComputeNewCurSelRect();

            // Apply magnetic rules vertical
            for (int Ruller=0;Ruller<MagnetVert.count();Ruller++) if ((MagnetVert[Ruller].Block>NewCurSelRect.left())&&(NewCurSelRect.right()>=MagnetVert[Ruller].Block-HANDLEMAGNETX)&&(NewCurSelRect.right()<=MagnetVert[Ruller].Block+HANDLEMAGNETX)) {
                qreal NewW  =MagnetVert[Ruller].Screen-CurSelScreenRect.left();
                qreal OldW  =CurSelScreenRect.width();
                qreal Trans =NewW/OldW;
                Scale_X     =(NewW-OldW+(FullSelRect.right()-CurSelScreenRect.right())*Trans-(FullSelRect.right()-CurSelScreenRect.right()))/ScreenRect.width();
                if (LockGeometry) Scale_Y=(AspectRatio*Scale_X*ScreenRect.width())/ScreenRect.height();
                break;
            }

            // Apply magnetic rules horizontal
            for (int Ruller=0;Ruller<MagnetHoriz.count();Ruller++) if ((MagnetHoriz[Ruller].Block>NewCurSelRect.top())&&(NewCurSelRect.bottom()>=MagnetHoriz[Ruller].Block-HANDLEMAGNETY)&&(NewCurSelRect.bottom()<=MagnetHoriz[Ruller].Block+HANDLEMAGNETY)) {
                qreal NewH  =MagnetHoriz[Ruller].Screen-CurSelScreenRect.top();
                qreal OldH  =CurSelScreenRect.height();
                qreal Trans =NewH/OldH;
                Scale_Y =(NewH-OldH+(FullSelRect.bottom()-CurSelScreenRect.bottom())*Trans-(FullSelRect.bottom()-CurSelScreenRect.bottom()))/ScreenRect.height();
                if (LockGeometry) Scale_X=(Scale_Y*ScreenRect.height()/AspectRatio)/ScreenRect.width();
                break;
            }
        // Top
        } else if (TransfoType==RESIZEUP) {
            // Adjust DX and DY for resize not less than 0
            if (DY>=Sel_H-MINVALUE)  DY=Sel_H-MINVALUE;
            Move_Y =DY;
            Scale_Y=-Move_Y;
            if (LockGeometry) {
                Scale_X=(Scale_Y*ScreenRect.height()/AspectRatio)/ScreenRect.width();
                Move_X =-Scale_X/2;
            }
            NewCurSelRect=ComputeNewCurSelRect();

            // Apply magnetic rules horizontal
            for (int Ruller=0;Ruller<MagnetHoriz.count();Ruller++) if ((MagnetHoriz[Ruller].Block<NewCurSelRect.bottom())&&(NewCurSelRect.top()>=MagnetHoriz[Ruller].Block-HANDLEMAGNETY)&&(NewCurSelRect.top()<=MagnetHoriz[Ruller].Block+HANDLEMAGNETY)) {
                qreal NewH  =CurSelScreenRect.bottom()-MagnetHoriz[Ruller].Screen;
                qreal OldH  =CurSelScreenRect.height();
                qreal Trans =NewH/OldH;
                Move_Y =-(NewH-OldH+(CurSelScreenRect.top()-FullSelRect.top())*Trans-(CurSelScreenRect.top()-FullSelRect.top()))/ScreenRect.height();
                Scale_Y=-Move_Y;
                if (LockGeometry) {
                    Scale_X=(Scale_Y*ScreenRect.height()/AspectRatio)/ScreenRect.width();
                    Move_X =-Scale_X/2;
                }
                break;
            }
        // Bottom
        } else if (TransfoType==RESIZEDOWN) {
            // Adjust DX and DY for resize not less than 0
            if (DY<=-(Sel_H-MINVALUE)) DY=-(Sel_H-MINVALUE);
            Move_Y =0;
            Scale_Y=DY;
            if (LockGeometry) {
                Scale_X=(Scale_Y*ScreenRect.height()/AspectRatio)/ScreenRect.width();
                Move_X =-Scale_X/2;
            }
            NewCurSelRect=ComputeNewCurSelRect();

            // Apply magnetic rules horizontal
            for (int Ruller=0;Ruller<MagnetHoriz.count();Ruller++) if ((MagnetHoriz[Ruller].Block>NewCurSelRect.top())&&(NewCurSelRect.bottom()>=MagnetHoriz[Ruller].Block-HANDLEMAGNETY)&&(NewCurSelRect.bottom()<=MagnetHoriz[Ruller].Block+HANDLEMAGNETY)) {
                qreal NewH  =MagnetHoriz[Ruller].Screen-CurSelScreenRect.top();
                qreal OldH  =CurSelScreenRect.height();
                qreal Trans =NewH/OldH;
                Scale_Y =(NewH-OldH+(FullSelRect.bottom()-CurSelScreenRect.bottom())*Trans-(FullSelRect.bottom()-CurSelScreenRect.bottom()))/ScreenRect.height();
                if (LockGeometry) {
                    Scale_X=(Scale_Y*ScreenRect.height()/AspectRatio)/ScreenRect.width();
                    Move_X =-Scale_X/2;
                }
                break;
            }
        // Move
        } else if (TransfoType==MOVEBLOCK) {
            Move_X =DX;
            Move_Y =DY;

            if (MagneticRuler!=0) {
                QRectF NewCurSelRect=ComputeNewCurSelRect();

                // Apply magnetic rules vertical
                for (int Ruller=0;Ruller<MagnetVert.count();Ruller++) {
                    if      ((NewCurSelRect.left()      >=MagnetVert[Ruller].Block-HANDLEMAGNETX)&&(NewCurSelRect.left()       <=MagnetVert[Ruller].Block+HANDLEMAGNETX))  { Move_X=qreal(MagnetVert[Ruller].Screen-CurSelScreenRect.left()      )/ScreenRect.width();   break; }
                    else if ((NewCurSelRect.right()     >=MagnetVert[Ruller].Block-HANDLEMAGNETX)&&(NewCurSelRect.right()      <=MagnetVert[Ruller].Block+HANDLEMAGNETX))  { Move_X=qreal(MagnetVert[Ruller].Screen-CurSelScreenRect.right()     )/ScreenRect.width();   break; }
                    else if ((NewCurSelRect.center().x()>=MagnetVert[Ruller].Block-HANDLEMAGNETX)&&(NewCurSelRect.center().x() <=MagnetVert[Ruller].Block+HANDLEMAGNETX))  { Move_X=qreal(MagnetVert[Ruller].Screen-CurSelScreenRect.center().x())/ScreenRect.width();   break; }
                }

                // Apply magnetic rules horizontal
                for (int Ruller=0;Ruller<MagnetHoriz.count();Ruller++) {
                    if      ((NewCurSelRect.top()       >=MagnetHoriz[Ruller].Block-HANDLEMAGNETY)&&(NewCurSelRect.top()       <=MagnetHoriz[Ruller].Block+HANDLEMAGNETY)) { Move_Y=qreal(MagnetHoriz[Ruller].Screen-CurSelScreenRect.top()       )/ScreenRect.height();  break; }
                    else if ((NewCurSelRect.bottom()    >=MagnetHoriz[Ruller].Block-HANDLEMAGNETY)&&(NewCurSelRect.bottom()    <=MagnetHoriz[Ruller].Block+HANDLEMAGNETY)) { Move_Y=qreal(MagnetHoriz[Ruller].Screen-CurSelScreenRect.bottom()    )/ScreenRect.height();  break; }
                    else if ((NewCurSelRect.center().y()>=MagnetHoriz[Ruller].Block-HANDLEMAGNETY)&&(NewCurSelRect.center().y()<=MagnetHoriz[Ruller].Block+HANDLEMAGNETY)) { Move_Y=qreal(MagnetHoriz[Ruller].Screen-CurSelScreenRect.center().y())/ScreenRect.height();  break; }
                }
            }
        }
        if (!IsRefreshQueued) {
            IsRefreshQueued=true;
            QTimer::singleShot(LATENCY,this,SLOT(RefreshDisplay()));
        }
        if (NbrSelected==1) emit DisplayTransformBlock(Move_X,Move_Y,Scale_X,Scale_Y,RSel_X,RSel_Y,RSel_W,RSel_H);
    }
}

//====================================================================================================================

void cInteractiveZone::mouseDoubleClickEvent(QMouseEvent *event) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cInteractiveZone::mouseDoubleClickEvent");
    if ((!BlockTable)||(!BlockTable->CompositionList)) return;

    if (event->button()==Qt::LeftButton) {
        if (!((NbrSelected==1)&&(IsInSelectedRect(event->pos())))) {
            if (NbrSelected>=0) BlockTable->clearSelection();
            // Try to select another block
            int i=BlockTable->CompositionList->List.count()-1;
            while (i>=0) {
                if (BlockTable->CompositionList->List[i]->IsVisible) {
                    QRect ObjRect=QRect(BlockTable->CompositionList->List[i]->x*SceneRect.width(),BlockTable->CompositionList->List[i]->y*SceneRect.height(),
                                        BlockTable->CompositionList->List[i]->w*SceneRect.width(),BlockTable->CompositionList->List[i]->h*SceneRect.height());
                    if (IsInRect(event->pos(),ObjRect)) {
                        BlockTable->clearSelection();
                        BlockTable->setCurrentCell(i,0,QItemSelectionModel::Current|QItemSelectionModel::Select);
                        break;
                    }
                }
                i--;
            }
            UpdateIsSelected();
        }
        if ((NbrSelected==1)&&(IsInSelectedRect(event->pos()))) QTimer::singleShot(250,this,SLOT(DifferedEmitDoubleClickEvent()));    // Append " emit DoubleClickEvent" to the message queue
    }
}

//====================================================================================================================

void cInteractiveZone::mousePressEvent(QMouseEvent *event) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cInteractiveZone::mousePressEvent");
    if ((!BlockTable)||(!BlockTable->CompositionList)) return;

    ManageCursor(event->pos(),event->modifiers());
    emit StartSelectionChange();
    setFocus();
    if (event->button()==Qt::RightButton) {

        // Reset selection if no block or only one is selected
        if ((!((NbrSelected>0)&&(IsInSelectedRect(event->pos()))))&&(NbrSelected<2)) {
            BlockTable->clearSelection();
            // Try to select another block
            int i=BlockTable->CompositionList->List.count()-1;
            while (i>=0) {
                if (BlockTable->CompositionList->List[i]->IsVisible) {
                    QRectF ObjRect=ApplyModifAndScaleFactors(i,SceneRect,true);
                    if (IsInRect(event->pos(),ObjRect)) {
                        BlockTable->clearSelection();
                        BlockTable->setCurrentCell(i,0,QItemSelectionModel::Current|QItemSelectionModel::Select);
                        break;
                    }
                }
                i--;
            }
            UpdateIsSelected();
        }
        QTimer::singleShot(250,this,SLOT(DifferedEmitRightClickEvent()));    // Append " emit RightClickEvent" to the message queue

    } if (event->button()==Qt::LeftButton) {

        TransfoType=NOTYETDEFINED;

        if ((event->modifiers()==Qt::ControlModifier)||(event->modifiers()==Qt::ShiftModifier)) {

            // Try to toggle block to a multi block selection (one click to add, new click to remove)
            int i=BlockTable->CompositionList->List.count()-1;
            while (i>=0) {
                if (BlockTable->CompositionList->List[i]->IsVisible) {
                    QRectF ObjRect=ApplyModifAndScaleFactors(i,SceneRect,true);
                    if (IsInRect(event->pos(),ObjRect)) {
                        IsSelected[i]=!IsSelected[i];
                        break;
                    }
                }
                i--;
            }

            int FirstSelected=-1;
            for (i=0;i<BlockTable->CompositionList->List.count();i++) if (IsSelected[i]) {
                FirstSelected=i;
                break;
            }
            BlockTable->clearSelection();
            if (FirstSelected==-1) {
                BlockTable->setCurrentCell(i,0,QItemSelectionModel::Current|QItemSelectionModel::Deselect);
            } else {
                BlockTable->setCurrentCell(i,0,QItemSelectionModel::Current|QItemSelectionModel::Select);
                for (i=0;i<BlockTable->CompositionList->List.count();i++) if ((IsSelected[i])&&(i!=FirstSelected))
                    BlockTable->setCurrentCell(i,0,QItemSelectionModel::Select);
            }
        } else if (event->modifiers()==(Qt::ShiftModifier|Qt::ControlModifier)) {

            // Try to select a block under current selected block
            if (NbrSelected==1) {
                int i=IsSelected.count()-1;
                while ((i>=0)&&(!IsSelected[i])) i--;   // Find current selected block
                for (int j=i-1;j>=0;j--) if (BlockTable->CompositionList->List[j]->IsVisible) {
                    QRectF ObjRect=ApplyModifAndScaleFactors(i,SceneRect,true);
                    if (IsInRect(event->pos(),ObjRect)) {
                        BlockTable->clearSelection();
                        BlockTable->setCurrentCell(j,0,QItemSelectionModel::Current|QItemSelectionModel::Select);
                        break;
                    }
                }
            }

        } else if (event->modifiers()==Qt::NoModifier) {
            // Resize
            if ((NbrSelected>0)&&(IsInRect(event->pos(),QRect(CurSelRect.left()-HANDLESIZEX/2, CurSelRect.bottom()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))                           TransfoType=RESIZEDOWNLEFT; // Bottom left
            else if ((NbrSelected>0)&&(IsInRect(event->pos(),QRect(CurSelRect.left()-HANDLESIZEX/2,CurSelRect.top()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))                          TransfoType=RESIZEUPLEFT;   // Top left
            else if ((NbrSelected>0)&&(IsInRect(event->pos(),QRect(CurSelRect.left()-HANDLESIZEX/2, CurSelRect.top()+CurSelRect.height()/2-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))   TransfoType=RESIZELEFT;     // Left
            else if ((NbrSelected>0)&&(IsInRect(event->pos(),QRect(CurSelRect.right()-HANDLESIZEX/2,CurSelRect.top()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))                         TransfoType=RESIZEUPRIGHT;  // Top right
            else if ((NbrSelected>0)&&(IsInRect(event->pos(),QRect(CurSelRect.right()-HANDLESIZEX/2,CurSelRect.top()+CurSelRect.height()/2-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))   TransfoType=RESIZERIGHT;    // Right
            else if ((NbrSelected>0)&&(IsInRect(event->pos(),QRect(CurSelRect.right()-HANDLESIZEX/2,CurSelRect.bottom()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))                      TransfoType=RESIZEDOWNRIGHT;// Bottom right
            else if ((NbrSelected>0)&&(IsInRect(event->pos(),QRect(CurSelRect.left()+CurSelRect.width()/2-HANDLESIZEX/2,CurSelRect.top()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))     TransfoType=RESIZEUP;       // Top
            else if ((NbrSelected>0)&&(IsInRect(event->pos(),QRect(CurSelRect.left()+CurSelRect.width()/2-HANDLESIZEX/2,CurSelRect.bottom()-HANDLESIZEY/2,HANDLESIZEX,HANDLESIZEY))))  TransfoType=RESIZEDOWN;     // Bottom
            else {
                // Move
                if ((NbrSelected==0)||(!IsInSelectedRect(event->pos()))) {

                    // Replace current selection
                    BlockTable->clearSelection();
                    int i=BlockTable->CompositionList->List.count()-1;
                    while (i>=0) {
                        if (BlockTable->CompositionList->List[i]->IsVisible) {
                            QRectF ObjRect=ApplyModifAndScaleFactors(i,SceneRect,true);
                            if (IsInRect(event->pos(),ObjRect)) {
                                BlockTable->clearSelection();
                                BlockTable->setCurrentCell(i,0,QItemSelectionModel::Current|QItemSelectionModel::Select);
                                break;
                            }
                        }
                        i--;
                    }
                } else if (IsInSelectedRect(event->pos())) {
                    TransfoType=MOVEBLOCK;
                    setCursor(Qt::ClosedHandCursor);
                }
            }

            if (TransfoType!=NOTYETDEFINED) {
                IsCapture=true;
                CapturePos=event->pos();
                Move_X =0;
                Move_Y =0;
                Scale_X=0;
                Scale_Y=0;
            }
        }
    }
    emit EndSelectionChange();
}

//====================================================================================================================

void cInteractiveZone::mouseReleaseEvent(QMouseEvent *event) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:cInteractiveZone::mouseReleaseEvent");
    if ((!BlockTable)||(!BlockTable->CompositionList)||(!IsCapture)) return;

    IsCapture=false;

    // Block move
    if (((Move_X!=0)||(Move_Y!=0)||(Scale_X!=0)||(Scale_Y!=0))) emit TransformBlock(Move_X,Move_Y,Scale_X,Scale_Y,RSel_X,RSel_Y,RSel_W,RSel_H);
    ManageCursor(event->pos(),event->modifiers());
}
