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

#ifndef _SHAPE_H
#define _SHAPE_H

#include "BasicDefines.h"
#include <QPolygonF>

//============================================
// Shape definitions
//============================================

enum SHAPEFORM_ID {
    SHAPEFORM_NOSHAPE,
    SHAPEFORM_RECTANGLE,        SHAPEFORM_ROUNDRECT,        SHAPEFORM_BUBBLE,           SHAPEFORM_ELLIPSE,
    SHAPEFORM_TRIANGLEUP,       SHAPEFORM_TRIANGLERIGHT,    SHAPEFORM_TRIANGLEDOWN,     SHAPEFORM_TRIANGLELEFT,     SHAPEFORM_RHOMBUS,          SHAPEFORM_PENTAGON,             SHAPEFORM_HEXAGON,          SHAPEFORM_OCTOGON,
    SHAPEFORM_SIMPLEARROWUP,    SHAPEFORM_SIMPLEARROWRIGHT, SHAPEFORM_SIMPLEARROWDOWN,  SHAPEFORM_SIMPLEARROWLEFT,  SHAPEFORM_HEART,            SHAPEFORM_PUZZLEUL,             SHAPEFORM_PUZZLEUC,         SHAPEFORM_PUZZLEUR,
    SHAPEFORM_DOUBLEARROWVERT,  SHAPEFORM_DOUBLEARROWHORIZ, SHAPEFORM_DOUBLEARROWDIAG1, SHAPEFORM_DOUBLEARROWDIAG2, SHAPEFORM_SPADE,            SHAPEFORM_PUZZLEML,             SHAPEFORM_PUZZLEMC,         SHAPEFORM_PUZZLEMR,
    SHAPEFORM_RIGHTTRIANGLEUL,  SHAPEFORM_RIGHTTRIANGLEUR,  SHAPEFORM_RIGHTTRIANGLEDL,  SHAPEFORM_RIGHTTRIANGLEDR,  SHAPEFORM_CLUB,             SHAPEFORM_PUZZLEDL,             SHAPEFORM_PUZZLEDC,         SHAPEFORM_PUZZLEDR,
    SHAPEFORM_STRIANGLEUP,      SHAPEFORM_STRIANGLERIGHT,   SHAPEFORM_STRIANGLEDOWN,    SHAPEFORM_STRIANGLELEFT,    SHAPEFORM_PUSHEDUP,         SHAPEFORM_SHARPDOWN,            SHAPEFORM_STAR4,            SHAPEFORM_STAR5,
    SHAPEFORM_DTRIANGLEUP,      SHAPEFORM_DTRIANGLERIGHT,   SHAPEFORM_DTRIANGLEDOWN,    SHAPEFORM_DTRIANGLELEFT,    SHAPEFORM_DCHEVRONUP,       SHAPEFORM_SCHEVRONDOWN,         SHAPEFORM_STAR6,            SHAPEFORM_STAR8,
    SHAPEFORM_PUSHEDLEFT,       SHAPEFORM_DCHEVRONLEFT,     SHAPEFORM_SCHEVRONLEFT,     SHAPEFORM_SHARPLEFT,        SHAPEFORM_SCHEVRONUP,       SHAPEFORM_DCHEVRONDOWN,         SHAPEFORM_GEAR6,            SHAPEFORM_GEAR8,
    SHAPEFORM_SHARPRIGHT,       SHAPEFORM_SCHEVRONRIGHT,    SHAPEFORM_DCHEVRONRIGHT,    SHAPEFORM_PUSHEDRIGHT,      SHAPEFORM_SHARPUP,          SHAPEFORM_PUSHEDDOWN,           SHAPEFORM_GEAR10,           SHAPEFORM_GEAR12,
    SHAPEFORM_BINOCULARSV,      SHAPEFORM_TRINOCULARSV,     SHAPEFORM_TRAPEZOIDOWNRIGHT,SHAPEFORM_TRAPEZOIDUP,      SHAPEFORM_TRAPEZOIDOWNLEFT, SHAPEFORM_TRAPEZOIDRIGHTDOWN,   SHAPEFORM_TRAPEZOIDLEFTDOWN,SHAPEFORM_KEYHOLE,
    SHAPEFORM_BINOCULARSH,      SHAPEFORM_TRINOCULARSH,     SHAPEFORM_TRAPEZOIDUPRIGHT, SHAPEFORM_TRAPEZOIDOWN,     SHAPEFORM_TRAPEZOIDUPLEFT,  SHAPEFORM_TRAPEZOIDLEFT,        SHAPEFORM_TRAPEZOIDRIGHT,   SHAPEFORM_PLUS,
    SHAPEFORM_FOUROCULARS,      SHAPEFORM_PARALLELOLEFT,    SHAPEFORM_PARALLELORIGHT,   SHAPEFORM_PARALLELOUP,      SHAPEFORM_PARALLELODOWN,    SHAPEFORM_TRAPEZOIDRIGHTUP,     SHAPEFORM_TRAPEZOIDLEFTUP,  SHAPEFORM_HOURGLASS,
    NBR_SHAPEFORM                   // Last of the list !
};

class cShapeFormDefinition {
public:
    bool            Enable;
    QString         Name;
    QList<double>   AdditonnalRulerX;       // Additionnal rulers
    QList<double>   AdditonnalRulerY;       // Additionnal rulers
    double          TMx,TMy,TMw,TMh;        // Default shape text margins
    cShapeFormDefinition() {}
    cShapeFormDefinition(bool Enable,QList<double> AdditonnalRulerX,QList<double> AdditonnalRulerY,double TMx,double TMy,double TMw,double TMh,QString Name);
};

extern QList<cShapeFormDefinition> ShapeFormDefinition;
void   ShapeFormDefinitionInit();  // Utility function to init shape collection and translate shape names

//============================================
// Shape computations
//============================================

// Utilities functions to compute a polygon for a given form
QList<QPolygonF>    ComputePolygon(int BackgroundForm,qreal left,qreal top,qreal width,qreal height);
QRectF              PolygonToRectF(QList<QPolygonF> Polygon);

// Utilities functions to compute shape
QList<QPolygonF>    ComputePolygonRect(QRectF Rect);
QList<QPolygonF>    ComputePolygonRoundRect(QRectF Rect,qreal RayX,qreal RayY);
QList<QPolygonF>    ComputePolygonEllipse(QRectF Rect);
QList<QPolygonF>    ComputeHeart(QRectF Rect);
QList<QPolygonF>    ComputeSpade(QRectF Rect);
QList<QPolygonF>    ComputeClub(QRectF Rect);
QList<QPolygonF>    ComputePolygonR(double width,double height,double CenterX,double CenterY,int MaxPoint,double StartAngle);
QList<QPolygonF>    ComputeSingleChevron(QRectF Rect,int Angle,int Options);
QList<QPolygonF>    ComputeDoubleChevron(QRectF Rect,int Angle);
QList<QPolygonF>    ComputeSingleTriangle(QRectF Rect,int Angle);
QList<QPolygonF>    ComputeDoubleTriangle(QRectF Rect,int Angle);
QList<QPolygonF>    ComputeSimpleArrow(QRectF Rect,int Angle);
QList<QPolygonF>    ComputeDoubleArrow(QRectF Rect,int Angle);
QList<QPolygonF>    ComputeStar(QRectF Rect,int Pointed);
QList<QPolygonF>    ComputeGear(QRectF Rect,int tooth);
QList<QPolygonF>    ComputeRightTriangle(QRectF Rect,int Angle);
QList<QPolygonF>    ComputePuzzle(QRectF Rect,int Forme);
QList<QPolygonF>    ComputeOculars(QRectF Rect,int OcularsNbr,int Options);
QList<QPolygonF>    ComputeTrapezoid(QRectF Rect,int Options,int SubOptions);
QList<QPolygonF>    ComputeParallelo(QRectF Rect,int Options);
QList<QPolygonF>    ComputeKeyHole(QRectF Rect,int Options);
QList<QPolygonF>    ComputePlus(QRectF Rect,int Options);
QList<QPolygonF>    ComputeHourglass(QRectF Rect,int Options);

#endif // _SHAPE_H
