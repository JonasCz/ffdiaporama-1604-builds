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

#include "Shape.h"

#include <QPainterPath>
#include <QTransform>

#define PI              3.14159265
#define COSSIN45        0.707106781
#define COS30           0.866
#define SIN30           0.5
#define SIN60           0.866
#define COS60           0.5

#define OPTION_UP       0x01
#define OPTION_DOWN     0x02
#define OPTION_RIGHT    0x04
#define OPTION_LEFT     0x08
#define OPTION_ALL      0x0F

//====================================================================================================================

QList<cShapeFormDefinition> ShapeFormDefinition;

cShapeFormDefinition::cShapeFormDefinition(bool Enable,QList<double> AdditonnalRulerX,QList<double> AdditonnalRulerY,double TMx,double TMy,double TMw,double TMh,QString Name) {
    this->Enable=Enable;
    this->Name  =Name;
    this->TMx   =TMx;
    this->TMy   =TMy;
    this->TMw   =TMw;
    this->TMh   =TMh;
    for (int i=0;i<AdditonnalRulerX.count();i++) this->AdditonnalRulerX.append(AdditonnalRulerX.at(i));
    for (int i=0;i<AdditonnalRulerY.count();i++) this->AdditonnalRulerY.append(AdditonnalRulerY.at(i));
}

// Utility function to init shape collection and translate shape names
void ShapeFormDefinitionInit() {
    double d25CosSin45=0.25*(1+COSSIN45)/2;
    double d75CosSin45=1-d25CosSin45;
    double d50CosSin45=1-d25CosSin45-d25CosSin45;
    double dhCosSin45 =(1-COSSIN45)/2;
    ShapeFormDefinition.append(cShapeFormDefinition(false,QList<double>(),                          QList<double>(),                            0,          0,          1,              1,              QApplication::translate("Shape forms","No shape")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0,          0,          1,              1,              QApplication::translate("Shape forms","Rectangle")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.025,      0.025,      0.95,           0.95,           QApplication::translate("Shape forms","Rounded rectangle")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.05,       0.05,       0.9,            0.9,            QApplication::translate("Shape forms","Bubble")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            dhCosSin45, dhCosSin45, 1-2*dhCosSin45, 1-2*dhCosSin45, QApplication::translate("Shape forms","Ellipse")));
    ShapeFormDefinition.append(cShapeFormDefinition(false,QList<double>(),                          QList<double>(),                            0,          0,          1,              1,              QApplication::translate("Shape forms","Old Triangle up version")));
    ShapeFormDefinition.append(cShapeFormDefinition(false,QList<double>(),                          QList<double>(),                            0,          0,          1,              1,              QApplication::translate("Shape forms","Old Triangle right version")));
    ShapeFormDefinition.append(cShapeFormDefinition(false,QList<double>(),                          QList<double>(),                            0,          0,          1,              1,              QApplication::translate("Shape forms","Old Triangle down version")));
    ShapeFormDefinition.append(cShapeFormDefinition(false,QList<double>(),                          QList<double>(),                            0,          0,          1,              1,              QApplication::translate("Shape forms","Old Triangle left version")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.25,       0.25,       0.5,            0.5,            QApplication::translate("Shape forms","Rhombus")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.2,        0.2,        0.55,           0.7,            QApplication::translate("Shape forms","Pentagon")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.25,       0,          0.5,            0.85,           QApplication::translate("Shape forms","Hexagon")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.15,       0.15,       0.7,            0.7,            QApplication::translate("Shape forms","Octogon")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.34,       0.125,      0.32,           0.875,          QApplication::translate("Shape forms","Simple arrow up")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0,          0.34,       0.875,          0.32,           QApplication::translate("Shape forms","Simple arrow right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.34,       0,          0.32,           0.875,          QApplication::translate("Shape forms","Simple arrow down")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.125,      0.34,       0.875,          0.32,           QApplication::translate("Shape forms","Simple arrow left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.1,        0.1,        0.8,            0.5,            QApplication::translate("Shape forms","Heart")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<d75CosSin45,             QList<double>()<<d75CosSin45,               0,          0,          d75CosSin45,    d75CosSin45,    QApplication::translate("Shape forms","Puzzle Up-Left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<d25CosSin45<<d75CosSin45,QList<double>()<<d75CosSin45 ,              d25CosSin45,0,          d50CosSin45,    d75CosSin45,    QApplication::translate("Shape forms","Puzzle Up-Center")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<d25CosSin45,             QList<double>()<<d75CosSin45,               d25CosSin45,0,          d50CosSin45,    d75CosSin45,    QApplication::translate("Shape forms","Puzzle Up-Right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.34,       0.125,      0.32,           0.75,           QApplication::translate("Shape forms","Double vertical arrows")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.125,      0.34,       0.75,           0.32,           QApplication::translate("Shape forms","Double horizontal arrows")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0,          0,          1,              1,              QApplication::translate("Shape forms","Double diagonal arrows 1")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0,          0,          1,              1,              QApplication::translate("Shape forms","Double diagonal arrows 2")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.15,       0.325,      0.675,          0.5,            QApplication::translate("Shape forms","Spade")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<d75CosSin45,             QList<double>()<<d25CosSin45<<d75CosSin45,  0,          d25CosSin45,d75CosSin45,    d50CosSin45,    QApplication::translate("Shape forms","Puzzle Middle-Left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<d25CosSin45<<d75CosSin45,QList<double>()<<d25CosSin45<<d75CosSin45,  d25CosSin45,d25CosSin45,d50CosSin45,    d50CosSin45,    QApplication::translate("Shape forms","Puzzle Middle-Center")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<d25CosSin45,             QList<double>()<<d25CosSin45<<d75CosSin45,  d25CosSin45,d25CosSin45,d50CosSin45,    d50CosSin45,    QApplication::translate("Shape forms","Puzzle Middle-Right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0,          0,          0.5,            0.5,            QApplication::translate("Shape forms","Right triangle Up-Left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.5,        0,          0.5,            0.5,            QApplication::translate("Shape forms","Right triangle Up-Right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0,          0.5,        0.5,            0.5,            QApplication::translate("Shape forms","Right triangle Down-Left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.5,        0.5,        0.5,            0.5,            QApplication::translate("Shape forms","Right triangle Down-Right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.25,       0.25,       0.5,            0.5,            QApplication::translate("Shape forms","Club")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<d75CosSin45,             QList<double>()<<d25CosSin45,               0,          d25CosSin45,d75CosSin45,    d50CosSin45,    QApplication::translate("Shape forms","Puzzle Down-Left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<d25CosSin45<<d75CosSin45,QList<double>()<<d25CosSin45,               d25CosSin45,d25CosSin45,d50CosSin45,    d50CosSin45,    QApplication::translate("Shape forms","Puzzle Down-Center")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<d25CosSin45,             QList<double>()<<d25CosSin45,               d25CosSin45,d25CosSin45,d50CosSin45,    d50CosSin45,    QApplication::translate("Shape forms","Puzzle Down-Right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.25,       0.5,        0.5,            0.5,            QApplication::translate("Shape forms","Single triangle up")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0,          0.25,       0.5,            0.5,            QApplication::translate("Shape forms","Single triangle right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.25,       0,          0.5,            0.5,            QApplication::translate("Shape forms","Single triangle down")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.5,        0.25,       0.5,            0.5,            QApplication::translate("Shape forms","Single triangle left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.8,                       0,          0,          1,              0.8,            QApplication::translate("Shape forms","Pushed up")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.8,                       0,          0,          1,              0.8,            QApplication::translate("Shape forms","Sharp down")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.3,        0.3,        0.4,            0.4,            QApplication::translate("Shape forms","Four-pointed stars")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.25,       0.35,       0.5,            0.5,            QApplication::translate("Shape forms","Five-pointed stars")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0,          0,          1,              1,              QApplication::translate("Shape forms","Double triangle up")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0,          0,          1,              1,              QApplication::translate("Shape forms","Double triangle right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0,          0,          1,              1,              QApplication::translate("Shape forms","Double triangle down")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0,          0,          1,              1,              QApplication::translate("Shape forms","Double triangle left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.2<<0.8,                  0,          0.2,        1,              0.6,            QApplication::translate("Shape forms","Double chevron up")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.2<<0.8,                  0,          0.2,        1,              0.6,            QApplication::translate("Shape forms","Single chevron down")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.2,        0.3,        0.6,            0.4,            QApplication::translate("Shape forms","Six-pointed stars")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.25,       0.25,       0.5,            0.5,            QApplication::translate("Shape forms","Height-pointed stars")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.8,                     QList<double>(),                            0,          0,          0.8,            1,              QApplication::translate("Shape forms","Pushed left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.2<<0.8,                QList<double>(),                            0.2,        0,          0.6,            1,              QApplication::translate("Shape forms","Double chevron left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.2<<0.8,                QList<double>(),                            0.2,        0,          0.6,            1,              QApplication::translate("Shape forms","Single chevron left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.2,                     QList<double>(),                            0.2,        0,          0.8,            1,              QApplication::translate("Shape forms","Sharp left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.2<<0.8,                  0,          0.2,        1,              0.6,            QApplication::translate("Shape forms","Single chevron up")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.2<<0.8,                  0,          0.2,        1,              0.6,            QApplication::translate("Shape forms","Double chevron down")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.1,        0.2,        0.8,            0.6,            QApplication::translate("Shape forms","Six tooth gear")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.15,       0.15,       0.7,            0.7,            QApplication::translate("Shape forms","Eight tooth gear")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.8,                     QList<double>(),                            0,          0,          0.8,            1,              QApplication::translate("Shape forms","Sharp right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.2<<0.8,                QList<double>(),                            0.2,        0,          0.6,            1,              QApplication::translate("Shape forms","Single chevron right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.2<<0.8,                QList<double>(),                            0.2,        0,          0.6,            1,              QApplication::translate("Shape forms","Double chevron right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.2,                     QList<double>(),                            0.2,        0,          0.8,            1,              QApplication::translate("Shape forms","Pushed right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.2,                       0,          0.2,        1,              0.8,            QApplication::translate("Shape forms","Sharp up")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.2,                       0,          0.2,        1,              0.8,            QApplication::translate("Shape forms","Pushed down")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.175,      0.125,      0.65,           0.75,           QApplication::translate("Shape forms","Ten tooth gear")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.1,        0.225,      0.8,            0.55,           QApplication::translate("Shape forms","Twelve tooth gear")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.04,       0.26,       0.92,           0.48,           QApplication::translate("Shape forms","Vertical Binoculars")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.03,       0.26,       0.94,           0.48,           QApplication::translate("Shape forms","Vertical Trinoculars")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.75,                    QList<double>(),                            0,          0,          0.75,           1,              QApplication::translate("Shape forms","Trapezoid Down-Right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.25<<0.75,              QList<double>(),                            0.25,       0,          0.5,            1,              QApplication::translate("Shape forms","Trapezoid Up")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.25,                    QList<double>(),                            0.25,       0,          0.75,           1,              QApplication::translate("Shape forms","Trapezoid Down-Left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.75,                      0,          0,          1,              0.75,           QApplication::translate("Shape forms","Trapezoid Right-Down")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.75,                      0,          0,          1,              0.75,           QApplication::translate("Shape forms","Trapezoid Left-Down")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.25,       0.05,       0.5,            0.95,           QApplication::translate("Shape forms","Keyhole")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.26,       0.04,       0.48,           0.92,           QApplication::translate("Shape forms","Horizontal Binoculars")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.26,       0.03,       0.48,           0.94,           QApplication::translate("Shape forms","Horizontal Trinoculars")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.75,                    QList<double>(),                            0,          0,          0.75,           1,              QApplication::translate("Shape forms","Trapezoid Up-Right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.25<<0.75,              QList<double>(),                            0.25,       0,          0.5,            1,              QApplication::translate("Shape forms","Trapezoid Down")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.25,                    QList<double>(),                            0.25,       0,          0.75,           1,              QApplication::translate("Shape forms","Trapezoid Up-Left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.25<<0.75,                0,          0.25,       1,              0.5,            QApplication::translate("Shape forms","Trapezoid Left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.25<<0.75,                0,          0.25,       1,              0.5,            QApplication::translate("Shape forms","Trapezoid Right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.25<<0.75,              QList<double>()<<0.25<<0.75,                0,          0.25,       1,              0.5,            QApplication::translate("Shape forms","Plus")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0.09,       0.09,       0.82,           0.82,           QApplication::translate("Shape forms","Four oculars")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.25<<0.75,              QList<double>(),                            0.25,       0,          0.5,            1,              QApplication::translate("Shape forms","Parallelogram Left")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>()<<0.25<<0.75,              QList<double>(),                            0.25,       0,          0.5,            1,              QApplication::translate("Shape forms","Parallelogram Right")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.25<<0.75,                0,          0.25,       1,              0.5,            QApplication::translate("Shape forms","Parallelogram Up")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.25<<0.75,                0,          0.25,       1,              0.5,            QApplication::translate("Shape forms","Parallelogram Down")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.25,                      0,          0.25,       1,              0.75,           QApplication::translate("Shape forms","Trapezoid Right-Up")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>()<<0.25,                      0,          0.25,       1,              0.75,           QApplication::translate("Shape forms","Trapezoid Left-Up")));
    ShapeFormDefinition.append(cShapeFormDefinition(true, QList<double>(),                          QList<double>(),                            0,          0,          1,              1,              QApplication::translate("Shape forms","Hourglass")));
}

//====================================================================================================================
// Utilities functions to compute shape
//====================================================================================================================

QList<QPolygonF> ComputePolygonRect(QRectF Rect) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    Path.moveTo(Rect.left(),Rect.top());
    Path.lineTo(Rect.right(),Rect.top());
    Path.lineTo(Rect.right(),Rect.bottom());
    Path.lineTo(Rect.left(),Rect.bottom());
    Path.lineTo(Rect.left(),Rect.top());
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputePolygonRoundRect(QRectF Rect,qreal RayX,qreal RayY) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    //Path.addRoundedRect(Rect.left(),Rect.top(),Rect.width(),Rect.height(),RayX,RayY);
    Path.moveTo(Rect.left()+RayX,Rect.top());
    Path.lineTo(Rect.right()-RayX,Rect.top());
    Path.cubicTo(QPointF(Rect.right()-RayX,Rect.top()),QPointF(Rect.right(),Rect.top()),QPointF(Rect.right(),Rect.top()+RayX));
    Path.lineTo(Rect.right(),Rect.bottom()-RayY);
    Path.cubicTo(QPointF(Rect.right(),Rect.bottom()),QPointF(Rect.right()-RayX,Rect.bottom()),QPointF(Rect.right()-RayX,Rect.bottom()));
    Path.lineTo(Rect.left()+RayX,Rect.bottom());
    Path.cubicTo(QPointF(Rect.left(),Rect.bottom()),QPointF(Rect.left(),Rect.bottom()-RayY),QPointF(Rect.left(),Rect.bottom()-RayY));
    Path.lineTo(Rect.left(),Rect.top()+RayY);
    Path.cubicTo(QPointF(Rect.left(),Rect.top()),QPointF(Rect.left()+RayX,Rect.top()),QPointF(Rect.left()+RayX,Rect.top()));
    //Path.arcTo(QRectF(Rect.left(),Rect.top(),RayX*2,RayY*2),180,-90);
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputePolygonEllipse(QRectF Rect) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    Path.moveTo(Rect.right(),Rect.center().y());
    Path.arcTo(Rect,0,  90);
    Path.arcTo(Rect,90, 90);
    Path.arcTo(Rect,180,90);
    Path.arcTo(Rect,270,90);
    //Path.addEllipse(Rect);
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeHeart(QRectF Rect) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    qreal               WRect=(Rect.width()/2)*(2/(1+COSSIN45)),HRect=2*Rect.height()/3;
    qreal               WRectH=WRect/2,HRectH=HRect/2;
    QRectF              SubRect1=QRectF(Rect.left(),                    Rect.top(), WRect,HRect);
    QRectF              SubRect2=QRectF(Rect.right()-SubRect1.width(),  Rect.top(), WRect,HRect);

    Path.moveTo(SubRect1.left()+WRectH+COSSIN45*WRectH,SubRect1.top()+HRectH-COSSIN45*HRectH);
    Path.arcTo(SubRect1,45,180);
    Path.lineTo(QPointF(Rect.center().x(),Rect.bottom()));
    Path.lineTo(SubRect2.left()+WRectH+COSSIN45*WRectH,SubRect2.top()+HRectH+COSSIN45*HRectH);
    Path.arcTo(SubRect2,-45,180);
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeSpade(QRectF Rect) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    qreal               WRect=(Rect.width()/2)*(2/(1+COSSIN45)),HRect=(2*Rect.height()/3)-(Rect.height()*0.1);
    qreal               WRectH=WRect/2,HRectH=HRect/2;
    QRectF              SubRect1=QRectF(Rect.left(),                    Rect.bottom()-HRect-(Rect.height()*0.1), WRect,HRect);
    QRectF              SubRect2=QRectF(Rect.right()-SubRect1.width(),  SubRect1.top(),                          WRect,HRect);
    QRectF              SubRect3=QRectF(Rect.left(),                    Rect.bottom()-(Rect.height()*0.4),       Rect.width()/2,Rect.height()*0.4);
    QRectF              SubRect4=QRectF(SubRect3.right(),               SubRect3.top(),                          SubRect3.width(),SubRect3.height());

    Path.moveTo(SubRect1.left()+WRectH+COSSIN45*WRectH,SubRect1.top()+HRectH+COSSIN45*HRectH);
    Path.arcTo(SubRect1,-45,-180);
    Path.lineTo(QPointF(Rect.center().x(),Rect.top()));
    Path.lineTo(SubRect2.left()+WRectH+COSSIN45*WRectH,SubRect2.top()+HRectH-COSSIN45*HRectH);
    Path.arcTo(SubRect2,45,-180);
    Path.arcTo(SubRect3,0,-90);
    Path.lineTo(SubRect4.center().x(),SubRect4.bottom());
    Path.arcTo(SubRect4,-90,-90);
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeClub(QRectF Rect) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    qreal               WRect=Rect.width()/2;
    qreal               HRect=Rect.height()/2;
    qreal               HRectH=HRect/2;
    QRectF              SubRect0=QRectF(Rect.center().x()-WRect/2,      Rect.top(),                                             WRect,HRect);
    QRectF              SubRect1=QRectF(Rect.left(),                    SubRect0.bottom()-(SubRect0.height()/2)*(1-COSSIN45),   WRect,HRect);
    QRectF              SubRect2=QRectF(Rect.right()-SubRect1.width(),  SubRect1.top(),                                         WRect,HRect);
    QRectF              SubRect3=QRectF(Rect.left(),                    SubRect1.top(),                                         Rect.width()/2,Rect.bottom()-SubRect1.top());
    QRectF              SubRect4=QRectF(SubRect3.right(),               SubRect3.top(),                                         SubRect3.width(),SubRect3.height());

    Path.moveTo(SubRect1.right(),SubRect1.top()+HRectH);
    Path.arcTo(SubRect1,0,-270);
    Path.arcTo(SubRect0,225,-270);
    Path.arcTo(SubRect2,90,-270);
    Path.arcTo(SubRect3,0,-90);
    Path.lineTo(SubRect4.center().x(),SubRect4.bottom());
    Path.arcTo(SubRect4,-90,-90);
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputePolygonR(double width,double height,double CenterX,double CenterY,int MaxPoint,double StartAngle) {
    QList<QPolygonF>    List;
    QPolygonF           Polygon;
    qreal               vcos,vsin,Angle;
    int                 i;

    Angle=StartAngle;
    for (i=0;i<MaxPoint;i++) {
        vcos=cos(Angle*3.14159265/180)*(width/2);
        vsin=sin(Angle*3.14159265/180)*(height/2);
        Polygon<<QPointF(CenterX+vcos,CenterY-vsin);
        Angle=Angle+(double(360)/MaxPoint);
        if (Angle>=360) Angle=-Angle+360;
    }
    List.append(Polygon);
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeSingleChevron(QRectF Rect,int Angle,int Options) {
    QList<QPolygonF>    List;
    QPainterPath        Path;

    switch (Angle) {
        case 0 :
            if ((Options&OPTION_UP)==OPTION_UP) {
                Path.moveTo(QPointF(0,Rect.height()*0.2)+QPointF(Rect.left(),Rect.top()));
                Path.lineTo(QPointF(Rect.width()/2,0)+QPointF(Rect.left(),Rect.top()));
                Path.lineTo(QPointF(Rect.width(),Rect.height()*0.2)+QPointF(Rect.left(),Rect.top()));
            } else {
                Path.moveTo(QPointF(0,0)+QPointF(Rect.left(),Rect.top()));
                Path.lineTo(QPointF(Rect.width(),0)+QPointF(Rect.left(),Rect.top()));
            }
            Path.lineTo(QPointF(Rect.width(),Rect.height())+QPointF(Rect.left(),Rect.top()));
            if ((Options&OPTION_DOWN)==OPTION_DOWN) Path.lineTo(QPointF(Rect.width()/2,Rect.height()*0.8)+QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(0,Rect.height())+QPointF(Rect.left(),Rect.top()));
            if ((Options&OPTION_UP)==OPTION_UP) Path.lineTo(QPointF(0,Rect.height()*0.2)+QPointF(Rect.left(),Rect.top()));
                else Path.lineTo(QPointF(0,Rect.height())+QPointF(Rect.left(),Rect.top()));
            break;
        case 180 :
            if ((Options&OPTION_DOWN)==OPTION_DOWN) {
                Path.moveTo(QPointF(0,Rect.height()*0.8)+QPointF(Rect.left(),Rect.top()));
                Path.lineTo(QPointF(Rect.width()/2,Rect.height())+QPointF(Rect.left(),Rect.top()));
                Path.lineTo(QPointF(Rect.width(),Rect.height()*0.8)+QPointF(Rect.left(),Rect.top()));
            } else {
                Path.moveTo(QPointF(0,Rect.height())+QPointF(Rect.left(),Rect.top()));
                Path.lineTo(QPointF(Rect.width(),Rect.height())+QPointF(Rect.left(),Rect.top()));
            }
            Path.lineTo(QPointF(Rect.width(),0)+QPointF(Rect.left(),Rect.top()));
            if ((Options&OPTION_UP)==OPTION_UP)     Path.lineTo(QPointF(Rect.width()/2,Rect.height()*0.2)+QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(0,0)+QPointF(Rect.left(),Rect.top()));
            if ((Options&OPTION_DOWN)==OPTION_DOWN) Path.lineTo(QPointF(0,Rect.height()*0.8)+QPointF(Rect.left(),Rect.top()));
                else Path.lineTo(QPointF(0,Rect.height())+QPointF(Rect.left(),Rect.top()));
            break;
        case 90 :
            if ((Options&OPTION_LEFT)==OPTION_LEFT) {
                Path.moveTo(QPointF(Rect.width()*0.2,0)+QPointF(Rect.left(),Rect.top()));
                Path.lineTo(QPointF(0,Rect.height()/2)+QPointF(Rect.left(),Rect.top()));
                Path.lineTo(QPointF(Rect.width()*0.2,Rect.height())+QPointF(Rect.left(),Rect.top()));
            } else {
                Path.moveTo(QPointF(0,0)+QPointF(Rect.left(),Rect.top()));
                Path.lineTo(QPointF(0,Rect.height())+QPointF(Rect.left(),Rect.top()));
            }
            Path.lineTo(QPointF(Rect.width(),Rect.height())+QPointF(Rect.left(),Rect.top()));
            if ((Options&OPTION_RIGHT)==OPTION_RIGHT) Path.lineTo(QPointF(Rect.width()*0.8,Rect.height()/2)+QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.width(),0)+QPointF(Rect.left(),Rect.top()));
            if ((Options&OPTION_LEFT)==OPTION_LEFT) Path.lineTo(QPointF(Rect.width()*0.2,0)+QPointF(Rect.left(),Rect.top()));
                else Path.lineTo(QPointF(0,0)+QPointF(Rect.left(),Rect.top()));
            break;
        case -90 :
            if ((Options&OPTION_RIGHT)==OPTION_RIGHT) {
                Path.moveTo(QPointF(Rect.width()*0.8,0)+QPointF(Rect.left(),Rect.top()));
                Path.lineTo(QPointF(Rect.width(),Rect.height()/2)+QPointF(Rect.left(),Rect.top()));
                Path.lineTo(QPointF(Rect.width()*0.8,Rect.height())+QPointF(Rect.left(),Rect.top()));
            } else {
                Path.moveTo(QPointF(Rect.width(),0)+QPointF(Rect.left(),Rect.top()));
                Path.lineTo(QPointF(Rect.width(),Rect.height())+QPointF(Rect.left(),Rect.top()));
            }
            Path.lineTo(QPointF(0,Rect.height())+QPointF(Rect.left(),Rect.top()));
            if ((Options&OPTION_LEFT)==OPTION_LEFT) Path.lineTo(QPointF(Rect.width()*0.2,Rect.height()/2)+QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(0,0)+QPointF(Rect.left(),Rect.top()));
            if ((Options&OPTION_RIGHT)==OPTION_RIGHT) Path.lineTo(QPointF(Rect.width()*0.8,0)+QPointF(Rect.left(),Rect.top()));
                else    Path.lineTo(QPointF(Rect.width(),0)+QPointF(Rect.left(),Rect.top()));
            break;
    }
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeDoubleChevron(QRectF Rect,int Angle) {
    QList<QPolygonF>    List;
    QPainterPath        Path1,Path2;
    switch (Angle) {
        case 0 :
            Path1.moveTo(QPointF(Rect.width()/2,0)                   +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width(),  Rect.height()*0.2)   +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width(),  Rect.height()*0.55)  +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width()/2,Rect.height()*0.35)  +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(0,             Rect.height()*0.55)  +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(0,             Rect.height()*0.2)   +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width()/2,0)                   +QPointF(Rect.left(),Rect.top()));

            Path2.moveTo(QPointF(Rect.width()/2,Rect.height()*0.45)  +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width(),  Rect.height()*0.65)  +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width(),  Rect.height())       +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width()/2,Rect.height()*0.8)   +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(0,             Rect.height())       +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(0,             Rect.height()*0.65)  +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width()/2,Rect.height()*0.45)  +QPointF(Rect.left(),Rect.top()));
            break;
        case 180 :
            Path2.moveTo(QPointF(Rect.width()/2,Rect.height())       +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width(),  Rect.height()*0.8)   +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width(),  Rect.height()*0.45)  +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width()/2,Rect.height()*0.65)  +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(0,             Rect.height()*0.45)  +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(0,             Rect.height()*0.8)   +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width()/2,Rect.height())       +QPointF(Rect.left(),Rect.top()));

            Path1.moveTo(QPointF(Rect.width()/2,Rect.height()*0.55)  +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width(),  Rect.height()*0.35)  +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width(),  0)                   +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width()/2,Rect.height()*0.2)   +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(0,             0)                   +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(0,             Rect.height()*0.35)  +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width()/2,Rect.height()*0.55)  +QPointF(Rect.left(),Rect.top()));
            break;
        case 90 :
            Path1.moveTo(QPointF(0,                 Rect.height()/2)+QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width()*0.2,  Rect.height())  +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width()*0.55, Rect.height())  +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width()*0.35, Rect.height()/2)+QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width()*0.55, 0)              +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width()*0.2,  0)              +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(0,                 Rect.height()/2)+QPointF(Rect.left(),Rect.top()));

            Path2.moveTo(QPointF(Rect.width()*0.45, Rect.height()/2)+QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width()*0.65, Rect.height())  +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width(),      Rect.height())  +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width()*0.8,  Rect.height()/2)+QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width(),      0)              +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width()*0.65, 0)              +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width()*0.45, Rect.height()/2)+QPointF(Rect.left(),Rect.top()));
            break;
        case -90 :
            Path1.moveTo(QPointF(Rect.width()*0.55, Rect.height()/2)+QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width()*0.35, Rect.height())  +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(0,                 Rect.height())  +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width()*0.2,  Rect.height()/2)+QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(0,                 0)              +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width()*0.35, 0)              +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width()*0.55, Rect.height()/2)+QPointF(Rect.left(),Rect.top()));

            Path2.moveTo(QPointF(Rect.width(),      Rect.height()/2)+QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width()*0.8,  Rect.height())  +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width()*0.45, Rect.height())  +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width()*0.65, Rect.height()/2)+QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width()*0.45, 0)              +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width()*0.8,  0)              +QPointF(Rect.left(),Rect.top()));
            Path2.lineTo(QPointF(Rect.width(),      Rect.height()/2)+QPointF(Rect.left(),Rect.top()));
            break;
    }
    List.append(Path1.toFillPolygon(QTransform()));
    List.append(Path2.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeSingleTriangle(QRectF Rect,int Angle) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    qreal               RWA=Rect.width()/2;
    qreal               RHA=Rect.height()/2;

    switch (Angle) {
        case 0 :
            Path.moveTo(QPointF(RWA, 0)         +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.width(),   Rect.height())      +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(0,              Rect.height())      +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(RWA,            0)                  +QPointF(Rect.left(),Rect.top()));
            break;
        case 180 :
            Path.moveTo(QPointF(RWA,            Rect.height())      +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.width(),   0)                  +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(0,              0)                  +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(RWA,            Rect.height())      +QPointF(Rect.left(),Rect.top()));
            break;
        case 90 :
            Path.moveTo(QPointF(0,              RHA)                +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.width(),   Rect.height())      +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.width(),   0)                  +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(0,              RHA)                +QPointF(Rect.left(),Rect.top()));
            break;
        case -90 :
            Path.moveTo(QPointF(Rect.width(),   RHA)                +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(0,              Rect.height())      +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(0,              0)                  +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.width(),   RHA)                +QPointF(Rect.left(),Rect.top()));
            break;
    }
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeDoubleTriangle(QRectF Rect,int Angle) {
    QList<QPolygonF>    List;
    QPainterPath        Path1,Path2;
    qreal               RWA=Rect.width()/2;
    qreal               RHA=Rect.height()/2;

    switch (Angle) {
        case 0 :
            Path1.moveTo(QPointF(RWA, 0)                            +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width(),   RHA)               +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(0,              RHA)               +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(RWA,            0)                 +QPointF(Rect.left(),Rect.top()));
            Path2.moveTo(QPointF(RWA, 0)                            +QPointF(Rect.left(),Rect.top()+RHA));
            Path2.lineTo(QPointF(Rect.width(),   RHA)               +QPointF(Rect.left(),Rect.top()+RHA));
            Path2.lineTo(QPointF(0,              RHA)               +QPointF(Rect.left(),Rect.top()+RHA));
            Path2.lineTo(QPointF(RWA,            0)                 +QPointF(Rect.left(),Rect.top()+RHA));
            break;
        case 180 :
            Path1.moveTo(QPointF(RWA,            RHA)               +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(Rect.width(),   0)                 +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(0,              0)                 +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(RWA,            RHA)               +QPointF(Rect.left(),Rect.top()));
            Path2.moveTo(QPointF(RWA,            RHA)               +QPointF(Rect.left(),Rect.top()+RHA));
            Path2.lineTo(QPointF(Rect.width(),   0)                 +QPointF(Rect.left(),Rect.top()+RHA));
            Path2.lineTo(QPointF(0,              0)                 +QPointF(Rect.left(),Rect.top()+RHA));
            Path2.lineTo(QPointF(RWA,            RHA)               +QPointF(Rect.left(),Rect.top()+RHA));
            break;
        case 90 :
            Path1.moveTo(QPointF(0,              RHA)               +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(RWA,            Rect.height())     +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(RWA,            0)                 +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(0,              RHA)               +QPointF(Rect.left(),Rect.top()));
            Path2.moveTo(QPointF(0,              RHA)               +QPointF(Rect.left()+RWA,Rect.top()));
            Path2.lineTo(QPointF(RWA,            Rect.height())     +QPointF(Rect.left()+RWA,Rect.top()));
            Path2.lineTo(QPointF(RWA,            0)                 +QPointF(Rect.left()+RWA,Rect.top()));
            Path2.lineTo(QPointF(0,              RHA)               +QPointF(Rect.left()+RWA,Rect.top()));
            break;
        case -90 :
            Path1.moveTo(QPointF(RWA,            RHA)               +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(0,              Rect.height())     +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(0,              0)                 +QPointF(Rect.left(),Rect.top()));
            Path1.lineTo(QPointF(RWA,            RHA)               +QPointF(Rect.left(),Rect.top()));
            Path2.moveTo(QPointF(RWA,            RHA)               +QPointF(Rect.left()+RWA,Rect.top()));
            Path2.lineTo(QPointF(0,              Rect.height())     +QPointF(Rect.left()+RWA,Rect.top()));
            Path2.lineTo(QPointF(0,              0)                 +QPointF(Rect.left()+RWA,Rect.top()));
            Path2.lineTo(QPointF(RWA,            RHA)               +QPointF(Rect.left()+RWA,Rect.top()));
            break;
    }
    List.append(Path1.toFillPolygon(QTransform()));
    List.append(Path2.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeSimpleArrow(QRectF Rect,int Angle) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    qreal               RWA=Rect.width()/2 ,RWB=Rect.width()/3;
    qreal               RHA=Rect.height()/2,RHB=Rect.height()/3;

    switch (Angle) {
        case 0 :
            Path.moveTo(QPointF(RWA,                0)              +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.width(),       RHB)            +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(2*RWB,              RHB)            +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(2*RWB,              Rect.height())  +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(RWB,                Rect.height())  +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(RWB,                RHB)            +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(0,                  RHB)            +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(RWA,                0)              +QPointF(Rect.left(),Rect.top()));
            break;
        case 180 :
            Path.moveTo(QPointF(RWA,                RHB)            +QPointF(Rect.left(),Rect.bottom()-RHB));
            Path.lineTo(QPointF(Rect.width(),       0)              +QPointF(Rect.left(),Rect.bottom()-RHB));
            Path.lineTo(QPointF(Rect.width()-RWB,   0)              +QPointF(Rect.left(),Rect.bottom()-RHB));
            Path.lineTo(QPointF(Rect.width()-RWB,   0)              +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(RWB,                0)              +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(RWB,                0)              +QPointF(Rect.left(),Rect.bottom()-RHB));
            Path.lineTo(QPointF(0,                  0)              +QPointF(Rect.left(),Rect.bottom()-RHB));
            Path.lineTo(QPointF(RWA,                RHB)            +QPointF(Rect.left(),Rect.bottom()-RHB));
            break;
        case 90 :
            Path.moveTo(QPointF(0,                  RHA)            +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(RWB,                Rect.height())  +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(RWB,                2*RHB)          +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.width(),       2*RHB)          +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.width(),       RHB)            +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(RWB,                RHB)            +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(RWB,                0)              +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(0,                  RHA)            +QPointF(Rect.left(),Rect.top()));
            break;
        case -90 :
            Path.moveTo(QPointF(RWB,                RHA)            +QPointF(Rect.right()-RWB,Rect.top()));
            Path.lineTo(QPointF(0,                  Rect.height())  +QPointF(Rect.right()-RWB,Rect.top()));
            Path.lineTo(QPointF(0,                  2*RHB)          +QPointF(Rect.right()-RWB,Rect.top()));
            Path.lineTo(QPointF(0,                  2*RHB)          +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(0,                  RHB)            +QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(0,                  RHB)            +QPointF(Rect.right()-RWB,Rect.top()));
            Path.lineTo(QPointF(0,                  0)              +QPointF(Rect.right()-RWB,Rect.top()));
            Path.lineTo(QPointF(RWB,                RHA)            +QPointF(Rect.right()-RWB,Rect.top()));
            break;
    }
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeDoubleArrow(QRectF Rect,int Angle) {
    QList<QPolygonF>    List;
    QPointF             Table[11];
    QPainterPath        Path;
    qreal               Ray=(sqrt(qreal(Rect.width())*qreal(Rect.width())+qreal(Rect.height())*qreal(Rect.height())))/2;
    qreal               RB=2*Ray/3;

    switch (Angle) {
        case 0:
            Table[0] =QPointF(Ray,      0);
            Table[1] =QPointF(2*Ray,    RB);
            Table[2] =QPointF(2*RB,     RB);
            Table[3] =QPointF(2*RB,     2*RB);
            Table[4] =QPointF(2*Ray,    2*RB);
            Table[5] =QPointF(Ray,      2*Ray);
            Table[6] =QPointF(0,        2*RB);
            Table[7] =QPointF(RB,       2*RB);
            Table[8] =QPointF(RB,       RB);
            Table[9] =QPointF(0,        RB);
            Table[10]=QPointF(Ray,      0);
            break;
        case 90:
            Table[0] =QPointF(0,        Ray);
            Table[1] =QPointF(RB,       2*Ray);
            Table[2] =QPointF(RB,       2*RB);
            Table[3] =QPointF(2*RB,     2*RB);
            Table[4] =QPointF(2*RB,     2*Ray);
            Table[5] =QPointF(2*Ray,    Ray);
            Table[6] =QPointF(2*RB,     0);
            Table[7] =QPointF(2*RB,     RB);
            Table[8] =QPointF(RB,       RB);
            Table[9] =QPointF(RB,       0);
            Table[10]=QPointF(0,        Ray);
            break;
        case 45:
            Table[0] =QPointF(2*Ray,    0);
            Table[1] =QPointF(2*Ray,    Ray);
            Table[2] =QPointF(Ray+RB,   RB);
            Table[3] =QPointF(RB,       Ray+RB);
            Table[4] =QPointF(Ray,      2*Ray);
            Table[5] =QPointF(0,        2*Ray);
            Table[6] =QPointF(0,        Ray);
            Table[7] =QPointF(RB/2,     Ray+RB/2);
            Table[8] =QPointF(Ray+RB/2, RB/2);
            Table[9] =QPointF(Ray,      0);
            Table[10]=QPointF(2*Ray,    0);
            break;
        case -45:
            Table[0] =QPointF(0,        0);
            Table[1] =QPointF(Ray,      0);
            Table[2] =QPointF(RB,       RB/2);
            Table[3] =QPointF(Ray+RB,   Ray+RB/2);
            Table[4] =QPointF(2*Ray,    Ray);
            Table[5] =QPointF(2*Ray,    2*Ray);
            Table[6] =QPointF(Ray,      2*Ray);
            Table[7] =QPointF(Ray+RB/2, Ray+RB);
            Table[8] =QPointF(RB/2,     RB);
            Table[9] =QPointF(0,        Ray);
            Table[10]=QPointF(0,        0);
            break;
    }
    //Scale
    qreal x1=Table[0].x();
    qreal y1=Table[0].y();
    qreal x2=Table[0].x();
    qreal y2=Table[0].y();
    for (int i=1;i<11;i++) {
        if (Table[i].x()<x1) x1=Table[i].x();
        if (Table[i].y()<y1) y1=Table[i].y();
        if (Table[i].x()>x2) x2=Table[i].x();
        if (Table[i].y()>y2) y2=Table[i].y();
    }
    qreal ScaleX=Rect.width()/(x2-x1);
    qreal ScaleY=Rect.height()/(y2-y1);
    Path.moveTo(QPointF(Table[0].x()*ScaleX,Table[0].y()*ScaleY)+QPointF(Rect.left(),Rect.top()));
    for (int i=1;i<11;i++) Path.lineTo(QPointF(Table[i].x()*ScaleX,Table[i].y()*ScaleY)+QPointF(Rect.left(),Rect.top()));

    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeStar(QRectF Rect,int Pointed) {
    QList<QPolygonF>    List;
    QPointF             Table[100];
    QPainterPath        Path;
    qreal               Segment=(180/Pointed),CurAngle=-90;
    qreal               Ray1=(sqrt(qreal(Rect.width())*qreal(Rect.width())+qreal(Rect.height())*qreal(Rect.height())))/2;
    qreal               Ray2=Ray1/2;

    //Compute star
    for (int i=0;i<=Pointed;i++) {
        Table[i*2]=QPointF(cos(CurAngle*PI/180)*Ray1+Ray1,sin(CurAngle*PI/180)*Ray1+Ray1);
        CurAngle=CurAngle+Segment;
        Table[i*2+1]=QPointF(cos(CurAngle*PI/180)*Ray2+Ray1,sin(CurAngle*PI/180)*Ray2+Ray1);
        CurAngle=CurAngle+Segment;
    }

    //Scale
    qreal x1=Table[0].x();
    qreal y1=Table[0].y();
    qreal x2=Table[0].x();
    qreal y2=Table[0].y();
    for (int i=1;i<=Pointed*2;i++) {
        if (Table[i].x()<x1) x1=Table[i].x();
        if (Table[i].y()<y1) y1=Table[i].y();
        if (Table[i].x()>x2) x2=Table[i].x();
        if (Table[i].y()>y2) y2=Table[i].y();
    }
    qreal ScaleX=Rect.width()/(x2-x1);
    qreal ScaleY=Rect.height()/(y2-y1);
    Path.moveTo(QPointF(Table[0].x()*ScaleX,Table[0].y()*ScaleY)+QPointF(Rect.left(),Rect.top()));
    for (int i=1;i<Pointed*2;i++) Path.lineTo(QPointF(Table[i].x()*ScaleX,Table[i].y()*ScaleY)+QPointF(Rect.left(),Rect.top()));

    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeGear(QRectF Rect,int tooth) {
    QList<QPolygonF>    List;
    QPointF             Table[100];
    QPainterPath        Path;
    qreal               Segment=(180/tooth),CurAngle=90;
    qreal               PartSegment=Segment/10;
    qreal               Ray1=(sqrt(qreal(Rect.width())*qreal(Rect.width())+qreal(Rect.height())*qreal(Rect.height())))/2;
    qreal               Ray2=Ray1*0.8;

    //Compute gear
    for (int i=0;i<=tooth;i++) {
        Table[i*4]=QPointF(cos(CurAngle*PI/180)*Ray1+Ray1,sin(CurAngle*PI/180)*Ray1+Ray1);
        CurAngle=CurAngle+PartSegment;
        Table[i*4+1]=QPointF(cos(CurAngle*PI/180)*Ray1+Ray1,sin(CurAngle*PI/180)*Ray1+Ray1);
        CurAngle=CurAngle+Segment-PartSegment;
        Table[i*4+2]=QPointF(cos(CurAngle*PI/180)*Ray2+Ray1,sin(CurAngle*PI/180)*Ray2+Ray1);
        CurAngle=CurAngle+PartSegment;
        Table[i*4+3]=QPointF(cos(CurAngle*PI/180)*Ray2+Ray1,sin(CurAngle*PI/180)*Ray2+Ray1);
        CurAngle=CurAngle+Segment-PartSegment;
    }

    //Scale
    qreal x1=Table[0].x();
    qreal y1=Table[0].y();
    qreal x2=Table[0].x();
    qreal y2=Table[0].y();
    for (int i=1;i<=tooth*4;i++) {
        if (Table[i].x()<x1) x1=Table[i].x();
        if (Table[i].y()<y1) y1=Table[i].y();
        if (Table[i].x()>x2) x2=Table[i].x();
        if (Table[i].y()>y2) y2=Table[i].y();
    }
    qreal ScaleX=Rect.width()/(x2-x1);
    qreal ScaleY=Rect.height()/(y2-y1);
    Path.moveTo(QPointF(Table[0].x()*ScaleX,Table[0].y()*ScaleY)+QPointF(Rect.left(),Rect.top()));
    for (int i=1;i<tooth*4;i++) Path.lineTo(QPointF(Table[i].x()*ScaleX,Table[i].y()*ScaleY)+QPointF(Rect.left(),Rect.top()));

    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeRightTriangle(QRectF Rect,int Angle) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    switch (Angle) {
        case 0:
            Path.moveTo(QPointF(Rect.left(),Rect.bottom()));
            Path.lineTo(QPointF(Rect.right(),Rect.top()));
            Path.lineTo(QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.left(),Rect.bottom()));
            break;
        case 1:
            Path.moveTo(QPointF(Rect.right(),Rect.bottom()));
            Path.lineTo(QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.right(),Rect.top()));
            Path.lineTo(QPointF(Rect.right(),Rect.bottom()));
            break;
        case 2 :
            Path.moveTo(QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.right(),Rect.bottom()));
            Path.lineTo(QPointF(Rect.left(),Rect.bottom()));
            Path.lineTo(QPointF(Rect.left(),Rect.top()));
            break;
        case 3 :
            Path.moveTo(QPointF(Rect.right(),Rect.top()));
            Path.lineTo(QPointF(Rect.left(),Rect.bottom()));
            Path.lineTo(QPointF(Rect.right(),Rect.bottom()));
            Path.lineTo(QPointF(Rect.right(),Rect.top()));
            break;
    }
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputePuzzle(QRectF Rect,int Forme) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    qreal               QuarterW=Rect.width()/4, COSSINW=COSSIN45*(QuarterW/2),COSSINiW=(1-COSSIN45)*(QuarterW/2);
    qreal               QuarterH=Rect.height()/4,COSSINH=COSSIN45*(QuarterH/2),COSSINiH=(1-COSSIN45)*(QuarterH/2);
    qreal               RullerX =Rect.left()+(Rect.width()-(QuarterW/2)-COSSINW)/2;
    qreal               RullerY =Rect.top()+(Rect.height()-(QuarterH/2)-COSSINH)/2;
    /*QRectF              NewRect=QRectF(Rect.left(),Rect.top(),
                                       (Forme&OPTION_RIGHT)==OPTION_RIGHT?Rect.width()-QuarterW+COSSINiW:Rect.width(),
                                       (Forme&OPTION_DOWN) ==OPTION_DOWN?Rect.height()-(QuarterH/2)-COSSINH:Rect.height());*/
    QRectF              NewRect=QRectF(Rect.left(),Rect.top(),Rect.width()-QuarterW+COSSINiW,Rect.height()-(QuarterH/2)-COSSINH);
    QRectF              RectUp   =QRectF(RullerX-QuarterW/2,        NewRect.top()-COSSINiH,     QuarterW,QuarterH);
    QRectF              RectDown =QRectF(RullerX-QuarterW/2,        NewRect.bottom()-COSSINiH,  QuarterW,QuarterH);
    QRectF              RectLeft =QRectF(NewRect.left()-COSSINiW,   RullerY-QuarterH/2,         QuarterW,QuarterH);
    QRectF              RectRight=QRectF(NewRect.right()-COSSINiW,  RullerY-QuarterH/2,         QuarterW,QuarterH);

    // Up
    Path.moveTo(QPointF(NewRect.left(),NewRect.top()));
    if ((Forme&OPTION_UP)==OPTION_UP) {
        Path.lineTo(QPointF(RectUp.left()-COSSINiW,NewRect.top()));
        Path.arcTo(RectUp,90+45,90+90+90);
    }
    Path.lineTo(QPointF(NewRect.right(),NewRect.top()));

    // Right
    if ((Forme&OPTION_RIGHT)==OPTION_RIGHT) {
        Path.lineTo(QPointF(RectRight.left()+COSSINiW,RullerY-COSSINH));
        Path.arcTo(RectRight,90+45,-90-90-90);
    }
    Path.lineTo(QPointF(NewRect.right(),NewRect.bottom()));

    // Down
    if ((Forme&OPTION_DOWN)==OPTION_DOWN) {
        Path.lineTo(QPointF(RectDown.right()-COSSINiW,NewRect.bottom()));
        Path.arcTo(RectDown,45,-90-90-90);
    }
    Path.lineTo(QPointF(NewRect.left(),NewRect.bottom()));

    // Left
    if ((Forme&OPTION_LEFT)==OPTION_LEFT) {
        Path.lineTo(QPointF(NewRect.left(),RectLeft.bottom()-COSSINiH));
        Path.arcTo(RectLeft,90+90+45,90+90+90);
    }
    Path.lineTo(QPointF(NewRect.left(),NewRect.top()));

    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeOculars(QRectF Rect,int OcularsNbr,int Options) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    QRectF              DemiRect;
    if (OcularsNbr==2) {
        if (Options==OPTION_UP) {
            DemiRect=QRectF(Rect.left(),Rect.top(),(Rect.width()/4)*(2+(1-COS30)),Rect.height());
            Path.moveTo(DemiRect.center().x()+COS30*DemiRect.width()/2,DemiRect.center().y()-SIN30*DemiRect.height()/2);
            Path.arcTo(DemiRect, 30,300);
            DemiRect=QRectF(Rect.left()+Rect.width()/2-(1-COS30)*(Rect.width()/4),Rect.top(),DemiRect.width(),DemiRect.height());
            Path.arcTo(DemiRect,210,300);
        } else {
            DemiRect=QRectF(Rect.left(),Rect.top(),Rect.width(),(Rect.height()/4)*(2+(1-SIN60)));
            Path.moveTo(DemiRect.center().x()-COS60*DemiRect.width()/2,DemiRect.center().y()+SIN60*DemiRect.height()/2);
            Path.arcTo(DemiRect,240,-300);
            DemiRect=QRectF(Rect.left(),Rect.top()+Rect.height()/2-(1-SIN60)*(Rect.height()/4),DemiRect.width(),DemiRect.height());
            Path.arcTo(DemiRect, 60,-300);
        }
    } else if (OcularsNbr==3) {
        if (Options==OPTION_UP) {
            DemiRect=QRectF(Rect.left(),Rect.top(),(Rect.width()/6)*(2+1-COS30+(1-COS30)/3),Rect.height());
            Path.moveTo(DemiRect.center().x()+COS30*DemiRect.width()/2,DemiRect.center().y()-SIN30*DemiRect.height()/2);
            Path.arcTo(DemiRect, 30,300);
            DemiRect=QRectF(Rect.center().x()-DemiRect.width()/2,Rect.top(),DemiRect.width(),DemiRect.height());
            Path.arcTo(DemiRect,210,120);
            DemiRect=QRectF(Rect.right()-DemiRect.width(),Rect.top(),DemiRect.width(),DemiRect.height());
            Path.arcTo(DemiRect,210,300);
            DemiRect=QRectF(Rect.center().x()-DemiRect.width()/2,Rect.top(),DemiRect.width(),DemiRect.height());
            Path.arcTo(DemiRect, 30,120);
        } else {
            DemiRect=QRectF(Rect.left(),Rect.top(),Rect.width(),(Rect.height()/6)*(2+1-SIN60+(1-SIN60)/3));
            Path.moveTo(DemiRect.center().x()-COS60*DemiRect.width()/2,DemiRect.center().y()+SIN60*DemiRect.height()/2);
            Path.arcTo(DemiRect,240,-300);
            DemiRect=QRectF(Rect.left(),Rect.center().y()-DemiRect.height()/2,DemiRect.width(),DemiRect.height());
            Path.arcTo(DemiRect, 60,-120);
            DemiRect=QRectF(Rect.left(),Rect.bottom()-DemiRect.height(),DemiRect.width(),DemiRect.height());
            Path.arcTo(DemiRect, 60,-300);
            DemiRect=QRectF(Rect.left(),Rect.center().y()-DemiRect.height()/2,DemiRect.width(),DemiRect.height());
            Path.arcTo(DemiRect,240,-120);
        }
    } else if (OcularsNbr==4) {
        DemiRect=QRectF(Rect.left(),Rect.top(),(Rect.width()/4)*(2+(1-COSSIN45)),(Rect.height()/4)*(2+(1-COSSIN45)));
        Path.moveTo(DemiRect.center().x()-COSSIN45*DemiRect.width()/2,DemiRect.center().y()+COSSIN45*DemiRect.height()/2);
        Path.arcTo(DemiRect,225,-180);
        DemiRect=QRectF(Rect.left()+Rect.width()/2-(1-COSSIN45)*(Rect.width()/4),Rect.top(),DemiRect.width(),DemiRect.height());
        Path.arcTo(DemiRect,135,-180);
        DemiRect=QRectF(DemiRect.left(),Rect.top()+Rect.height()/2-(1-COSSIN45)*(Rect.height()/4),DemiRect.width(),DemiRect.height());
        Path.arcTo(DemiRect, 45,-180);
        DemiRect=QRectF(Rect.left(),DemiRect.top(),DemiRect.width(),DemiRect.height());
        Path.arcTo(DemiRect,-45,-180);
    }
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeTrapezoid(QRectF Rect,int Options,int SubOptions) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    qreal               QuarterX=Rect.width()/4;
    qreal               QuarterY=Rect.height()/4;
    switch (Options) {
        case OPTION_UP:
            Path.moveTo(QPointF(Rect.left(),Rect.bottom()));
            if ((SubOptions&OPTION_LEFT)!=0)  Path.lineTo(QPointF(Rect.left()+QuarterX,Rect.top()));  else Path.lineTo(QPointF(Rect.left(),Rect.top()));
            if ((SubOptions&OPTION_RIGHT)!=0) Path.lineTo(QPointF(Rect.right()-QuarterX,Rect.top())); else Path.lineTo(QPointF(Rect.right(),Rect.top()));
            Path.lineTo(QPointF(Rect.right(),Rect.bottom()));
            Path.lineTo(QPointF(Rect.left(),Rect.bottom()));
            break;

        case OPTION_DOWN:
            Path.moveTo(QPointF(Rect.left(),Rect.top()));
            if ((SubOptions&OPTION_LEFT)!=0)  Path.lineTo(QPointF(Rect.left()+QuarterX,Rect.bottom()));  else Path.lineTo(QPointF(Rect.left(),Rect.bottom()));
            if ((SubOptions&OPTION_RIGHT)!=0) Path.lineTo(QPointF(Rect.right()-QuarterX,Rect.bottom())); else Path.lineTo(QPointF(Rect.right(),Rect.bottom()));
            Path.lineTo(QPointF(Rect.right(),Rect.top()));
            Path.lineTo(QPointF(Rect.left(),Rect.top()));
            break;
        case OPTION_LEFT :
            Path.moveTo(QPointF(Rect.right(),Rect.bottom()));
            if ((SubOptions&OPTION_DOWN)!=0) Path.lineTo(QPointF(Rect.left(),Rect.bottom()-QuarterY)); else Path.lineTo(QPointF(Rect.left(),Rect.bottom()));
            if ((SubOptions&OPTION_UP)!=0)   Path.lineTo(QPointF(Rect.left(),Rect.top()+QuarterY));    else Path.lineTo(QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.right(),Rect.top()));
            Path.lineTo(QPointF(Rect.right(),Rect.bottom()));
            break;
        case OPTION_RIGHT :
            Path.moveTo(QPointF(Rect.left(),Rect.bottom()));
            if ((SubOptions&OPTION_DOWN)!=0) Path.lineTo(QPointF(Rect.right(),Rect.bottom()-QuarterY)); else Path.lineTo(QPointF(Rect.right(),Rect.bottom()));
            if ((SubOptions&OPTION_UP)!=0)   Path.lineTo(QPointF(Rect.right(),Rect.top()+QuarterY));    else Path.lineTo(QPointF(Rect.right(),Rect.top()));
            Path.lineTo(QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.left(),Rect.bottom()));
            break;
    }
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeParallelo(QRectF Rect,int Options) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    qreal               QuarterX=Rect.width()/4;
    qreal               QuarterY=Rect.height()/4;
    switch (Options) {
        case OPTION_LEFT:
            Path.moveTo(QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.right()-QuarterX,Rect.top()));
            Path.lineTo(QPointF(Rect.right(),Rect.bottom()));
            Path.lineTo(QPointF(Rect.left()+QuarterX,Rect.bottom()));
            Path.lineTo(QPointF(Rect.left(),Rect.top()));
            break;
        case OPTION_RIGHT:
            Path.moveTo(QPointF(Rect.left()+QuarterX,Rect.top()));
            Path.lineTo(QPointF(Rect.right(),Rect.top()));
            Path.lineTo(QPointF(Rect.right()-QuarterX,Rect.bottom()));
            Path.lineTo(QPointF(Rect.left(),Rect.bottom()));
            Path.lineTo(QPointF(Rect.left()+QuarterX,Rect.top()));
            break;
        case OPTION_UP:
            Path.moveTo(QPointF(Rect.left(),Rect.top()+QuarterY));
            Path.lineTo(QPointF(Rect.right(),Rect.top()));
            Path.lineTo(QPointF(Rect.right(),Rect.bottom()-QuarterY));
            Path.lineTo(QPointF(Rect.left(),Rect.bottom()));
            Path.lineTo(QPointF(Rect.left(),Rect.top()+QuarterY));
            break;
        case OPTION_DOWN:
            Path.moveTo(QPointF(Rect.left(),Rect.top()));
            Path.lineTo(QPointF(Rect.right(),Rect.top()+QuarterY));
            Path.lineTo(QPointF(Rect.right(),Rect.bottom()));
            Path.lineTo(QPointF(Rect.left(),Rect.bottom()-QuarterY));
            Path.lineTo(QPointF(Rect.left(),Rect.top()));
            break;
    }
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputeKeyHole(QRectF Rect) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    QRectF              DemiRect;

    DemiRect=QRectF(Rect.left(),Rect.top(),Rect.width(),(Rect.height()/4)*(2+(1-SIN60)));
    Path.moveTo(DemiRect.center().x()-COS60*DemiRect.width()/2,DemiRect.center().y()+SIN60*DemiRect.height()/2);
    Path.arcTo(DemiRect,240,-300);
    Path.lineTo(QPointF(Rect.right()-Rect.width()*0.1,Rect.bottom()));
    Path.lineTo(QPointF(Rect.left()+Rect.width()*0.1,Rect.bottom()));
    Path.lineTo(DemiRect.center().x()-COS60*DemiRect.width()/2,DemiRect.center().y()+SIN60*DemiRect.height()/2);
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

QList<QPolygonF> ComputePlus(QRectF Rect) {
    qreal               QuarterX=Rect.width()/4;
    qreal               QuarterY=Rect.height()/4;
    QList<QPolygonF>    List;
    QPainterPath        Path;
    Path.moveTo(QPointF(Rect.left()+QuarterX,Rect.top()));
    Path.lineTo(QPointF(Rect.right()-QuarterX,Rect.top()));
    Path.lineTo(QPointF(Rect.right()-QuarterX,Rect.top()+QuarterY));
    Path.lineTo(QPointF(Rect.right(),Rect.top()+QuarterY));
    Path.lineTo(QPointF(Rect.right(),Rect.bottom()-QuarterY));
    Path.lineTo(QPointF(Rect.right()-QuarterX,Rect.bottom()-QuarterY));
    Path.lineTo(QPointF(Rect.right()-QuarterX,Rect.bottom()));
    Path.lineTo(QPointF(Rect.left()+QuarterX,Rect.bottom()));
    Path.lineTo(QPointF(Rect.left()+QuarterX,Rect.bottom()-QuarterY));
    Path.lineTo(QPointF(Rect.left(),Rect.bottom()-QuarterY));
    Path.lineTo(QPointF(Rect.left(),Rect.top()+QuarterY));
    Path.lineTo(QPointF(Rect.left()+QuarterX,Rect.top()+QuarterY));
    Path.lineTo(QPointF(Rect.left()+QuarterX,Rect.top()));
    List.append(Path.toFillPolygon(QTransform()));
    return List;
}

//====================================================================================================================

#define COS80 0.173648178
#define SIN80 0.984807753

QList<QPolygonF> ComputeHourglass(QRectF Rect) {
    QList<QPolygonF>    List;
    QPainterPath        Path;
    QRectF              DemiRect;
    DemiRect=QRectF(Rect.left(),Rect.top()-Rect.height()/2,Rect.width(),Rect.height());
    Path.moveTo(DemiRect.center().x()-COS80*DemiRect.width()/2,DemiRect.center().y()+SIN80*DemiRect.height()/2);
    Path.arcTo(DemiRect,260,-80);
    Path.lineTo(Rect.right(),Rect.top());
    Path.arcTo(DemiRect,0,-80);
    DemiRect=QRectF(Rect.left(),Rect.bottom()-Rect.height()/2,Rect.width(),Rect.height());
    Path.arcTo(DemiRect,80,-80);
    Path.lineTo(Rect.left(),Rect.bottom());
    Path.arcTo(DemiRect,180,-80);
    List.append(Path.toFillPolygon(QTransform()));
    return List;

}

//====================================================================================================================
// Utilities functions to compute a polygon for a given form

QList<QPolygonF> ComputePolygon(int BackgroundForm,qreal left,qreal top,qreal width,qreal height) {
    qreal CenterX=left+width/2;
    qreal CenterY=top+height/2;
    qreal RayX   =0;
    qreal RayY   =0;

    switch (BackgroundForm) {
        case SHAPEFORM_ROUNDRECT : // Round rect
            RayX=width/10;     if (RayX>16) RayX=16; else if (RayX<2)  RayX=2;
            RayY=height/10;    if (RayY>16) RayY=16; else if (RayY<2)  RayY=2;
            return ComputePolygonRoundRect(QRectF(left,top,width,height),RayX,RayY);
            break;
        case SHAPEFORM_BUBBLE : // Bubble
            RayX=2*width/10;   if (RayX<4)  RayX=4;
            RayY=2*height/10;  if (RayY<4)  RayY=4;
            return ComputePolygonRoundRect(QRectF(left,top,width,height),RayX,RayY);
            break;
        case SHAPEFORM_ELLIPSE          : return ComputePolygonEllipse(QRectF(left,top,width,height));                                          break;  // Ellipse
        case SHAPEFORM_TRIANGLEUP       : return ComputePolygonR(width,height,CenterX,CenterY,3,90);                                            break;  // Triangle Up
        case SHAPEFORM_TRIANGLERIGHT    : return ComputePolygonR(width,height,CenterX,CenterY,3,0);                                             break;  // Triangle Right
        case SHAPEFORM_TRIANGLEDOWN     : return ComputePolygonR(width,height,CenterX,CenterY,3,-90);                                           break;  // Triangle Down
        case SHAPEFORM_TRIANGLELEFT     : return ComputePolygonR(width,height,CenterX,CenterY,3,-180);                                          break;  // Triangle left
        case SHAPEFORM_RIGHTTRIANGLEUL  : return ComputeRightTriangle(QRectF(left,top,width,height),0);                                         break;  // Right triangle Up-Left
        case SHAPEFORM_RIGHTTRIANGLEUR  : return ComputeRightTriangle(QRectF(left,top,width,height),1);                                         break;  // Right triangle Up-Right
        case SHAPEFORM_RIGHTTRIANGLEDL  : return ComputeRightTriangle(QRectF(left,top,width,height),2);                                         break;  // Right triangle Down-Left
        case SHAPEFORM_RIGHTTRIANGLEDR  : return ComputeRightTriangle(QRectF(left,top,width,height),3);                                         break;  // Right triangle Down-Right
        case SHAPEFORM_RHOMBUS          : return ComputePolygonR(width,height,CenterX,CenterY,4,0);                                             break;  // Losange
        case SHAPEFORM_PENTAGON         : return ComputePolygonR(width,height,CenterX,CenterY,5,90-(double(360)/5));                            break;  // Pentagone
        case SHAPEFORM_HEXAGON          : return ComputePolygonR(width,height,CenterX,CenterY,6,-(double(360)/6));                              break;  // Hexagone
        case SHAPEFORM_OCTOGON          : return ComputePolygonR(width,height,CenterX,CenterY,8,-(double(360)/8));                              break;  // Octogone
        case SHAPEFORM_SIMPLEARROWUP    : return ComputeSimpleArrow(QRectF(left,top,width,height),0);                                           break;  // Simple arrow top
        case SHAPEFORM_SIMPLEARROWRIGHT : return ComputeSimpleArrow(QRectF(left,top,width,height),-90);                                         break;  // Simple arrow right
        case SHAPEFORM_SIMPLEARROWDOWN  : return ComputeSimpleArrow(QRectF(left,top,width,height),180);                                         break;  // Simple arrow down
        case SHAPEFORM_SIMPLEARROWLEFT  : return ComputeSimpleArrow(QRectF(left,top,width,height),90);                                          break;  // Simple arrow left
        case SHAPEFORM_DOUBLEARROWVERT  : return ComputeDoubleArrow(QRectF(left,top,width,height),0);                                           break;  // Double vert arrows
        case SHAPEFORM_DOUBLEARROWHORIZ : return ComputeDoubleArrow(QRectF(left,top,width,height),90);                                          break;  // Double horiz arrows
        case SHAPEFORM_DOUBLEARROWDIAG1 : return ComputeDoubleArrow(QRectF(left,top,width,height),-45);                                         break;  // Double diag arrows 1
        case SHAPEFORM_DOUBLEARROWDIAG2 : return ComputeDoubleArrow(QRectF(left,top,width,height),45);                                          break;  // Double diag arrows 2
        case SHAPEFORM_STRIANGLEUP      : return ComputeSingleTriangle(QRectF(left,top,width,height),0);                                        break;  // Single triangle top
        case SHAPEFORM_STRIANGLERIGHT   : return ComputeSingleTriangle(QRectF(left,top,width,height),-90);                                      break;  // Single triangle right
        case SHAPEFORM_STRIANGLEDOWN    : return ComputeSingleTriangle(QRectF(left,top,width,height),180);                                      break;  // Single triangle down
        case SHAPEFORM_STRIANGLELEFT    : return ComputeSingleTriangle(QRectF(left,top,width,height),90);                                       break;  // Single triangle left
        case SHAPEFORM_DTRIANGLEUP      : return ComputeDoubleTriangle(QRectF(left,top,width,height),0);                                        break;  // Double chevron top
        case SHAPEFORM_DTRIANGLERIGHT   : return ComputeDoubleTriangle(QRectF(left,top,width,height),-90);                                      break;  // Double chevron right
        case SHAPEFORM_DTRIANGLEDOWN    : return ComputeDoubleTriangle(QRectF(left,top,width,height),180);                                      break;  // Double chevron down
        case SHAPEFORM_DTRIANGLELEFT    : return ComputeDoubleTriangle(QRectF(left,top,width,height),90);                                       break;  // Double chevron left
        case SHAPEFORM_SCHEVRONUP       : return ComputeSingleChevron(QRectF(left,top,width,height),0,OPTION_UP|OPTION_DOWN);                   break;  // Single chevron up
        case SHAPEFORM_SCHEVRONRIGHT    : return ComputeSingleChevron(QRectF(left,top,width,height),-90,OPTION_LEFT|OPTION_RIGHT);              break;  // Single chevron right
        case SHAPEFORM_SCHEVRONDOWN     : return ComputeSingleChevron(QRectF(left,top,width,height),180,OPTION_UP|OPTION_DOWN);                 break;  // Single chevron down
        case SHAPEFORM_SCHEVRONLEFT     : return ComputeSingleChevron(QRectF(left,top,width,height),90,OPTION_LEFT|OPTION_RIGHT);               break;  // Single chevron left
        case SHAPEFORM_PUSHEDUP         : return ComputeSingleChevron(QRectF(left,top,width,height),0,OPTION_DOWN);                             break;  // Pushed up
        case SHAPEFORM_PUSHEDRIGHT      : return ComputeSingleChevron(QRectF(left,top,width,height),-90,OPTION_LEFT);                           break;  // Pushed right
        case SHAPEFORM_PUSHEDDOWN       : return ComputeSingleChevron(QRectF(left,top,width,height),180,OPTION_UP);                             break;  // Pushed down
        case SHAPEFORM_PUSHEDLEFT       : return ComputeSingleChevron(QRectF(left,top,width,height),90,OPTION_RIGHT);                           break;  // Pushed left
        case SHAPEFORM_SHARPUP          : return ComputeSingleChevron(QRectF(left,top,width,height),0,OPTION_UP);                               break;  // Sharp up
        case SHAPEFORM_SHARPRIGHT       : return ComputeSingleChevron(QRectF(left,top,width,height),-90,OPTION_RIGHT);                          break;  // Sharp right
        case SHAPEFORM_SHARPDOWN        : return ComputeSingleChevron(QRectF(left,top,width,height),180,OPTION_DOWN);                           break;  // Sharp down
        case SHAPEFORM_SHARPLEFT        : return ComputeSingleChevron(QRectF(left,top,width,height),90,OPTION_LEFT);                            break;  // Sharp left
        case SHAPEFORM_DCHEVRONUP       : return ComputeDoubleChevron(QRectF(left,top,width,height),0);                                         break;  // Double chevron up
        case SHAPEFORM_DCHEVRONRIGHT    : return ComputeDoubleChevron(QRectF(left,top,width,height),-90);                                       break;  // Double chevron right
        case SHAPEFORM_DCHEVRONDOWN     : return ComputeDoubleChevron(QRectF(left,top,width,height),180);                                       break;  // Double chevron down
        case SHAPEFORM_DCHEVRONLEFT     : return ComputeDoubleChevron(QRectF(left,top,width,height),90);                                        break;  // Double chevron left
        case SHAPEFORM_STAR4            : return ComputeStar(QRectF(left,top,width,height),4);                                                  break;  // Star 4
        case SHAPEFORM_STAR5            : return ComputeStar(QRectF(left,top,width,height),5);                                                  break;  // Star 5
        case SHAPEFORM_STAR6            : return ComputeStar(QRectF(left,top,width,height),6);                                                  break;  // Star 6
        case SHAPEFORM_STAR8            : return ComputeStar(QRectF(left,top,width,height),8);                                                  break;  // Star 8
        case SHAPEFORM_GEAR6            : return ComputeGear(QRectF(left,top,width,height),6);                                                  break;  // Gear 6
        case SHAPEFORM_GEAR8            : return ComputeGear(QRectF(left,top,width,height),8);                                                  break;  // Gear 8
        case SHAPEFORM_GEAR10           : return ComputeGear(QRectF(left,top,width,height),10);                                                 break;  // Gear 10
        case SHAPEFORM_GEAR12           : return ComputeGear(QRectF(left,top,width,height),12);                                                 break;  // Gear 12
        case SHAPEFORM_HEART            : return ComputeHeart(QRectF(left,top,width,height));                                                   break;  // Heart
        case SHAPEFORM_SPADE            : return ComputeSpade(QRectF(left,top,width,height));                                                   break;  // Spade
        case SHAPEFORM_CLUB             : return ComputeClub(QRectF(left,top,width,height));                                                    break;  // Club
        case SHAPEFORM_PUZZLEUL         : return ComputePuzzle(QRectF(left,top,width,height),OPTION_RIGHT|OPTION_DOWN);                         break;  // Puzzle Up-Left
        case SHAPEFORM_PUZZLEUC         : return ComputePuzzle(QRectF(left,top,width,height),OPTION_LEFT|OPTION_RIGHT|OPTION_DOWN);             break;  // Puzzle Up-Center
        case SHAPEFORM_PUZZLEUR         : return ComputePuzzle(QRectF(left,top,width,height),OPTION_LEFT|OPTION_DOWN);                          break;  // Puzzle Up-Right
        case SHAPEFORM_PUZZLEML         : return ComputePuzzle(QRectF(left,top,width,height),OPTION_UP|OPTION_RIGHT|OPTION_DOWN);               break;  // Puzzle Middle-Left
        case SHAPEFORM_PUZZLEMC         : return ComputePuzzle(QRectF(left,top,width,height),OPTION_UP|OPTION_LEFT|OPTION_RIGHT|OPTION_DOWN);   break;  // Puzzle Middle-Center
        case SHAPEFORM_PUZZLEMR         : return ComputePuzzle(QRectF(left,top,width,height),OPTION_UP|OPTION_LEFT|OPTION_DOWN);                break;  // Puzzle Middle-Right
        case SHAPEFORM_PUZZLEDL         : return ComputePuzzle(QRectF(left,top,width,height),OPTION_UP|OPTION_RIGHT);                           break;  // Puzzle Down-Left
        case SHAPEFORM_PUZZLEDC         : return ComputePuzzle(QRectF(left,top,width,height),OPTION_UP|OPTION_LEFT|OPTION_RIGHT);               break;  // Puzzle Down-Center
        case SHAPEFORM_PUZZLEDR         : return ComputePuzzle(QRectF(left,top,width,height),OPTION_UP|OPTION_LEFT);                            break;  // Puzzle Down-Right
        case SHAPEFORM_BINOCULARSV      : return ComputeOculars(QRectF(left,top,width,height),2,OPTION_UP);                                     break;  // Binoculars vertical
        case SHAPEFORM_TRINOCULARSV     : return ComputeOculars(QRectF(left,top,width,height),3,OPTION_UP);                                     break;  // Trinoculars vertical
        case SHAPEFORM_BINOCULARSH      : return ComputeOculars(QRectF(left,top,width,height),2,OPTION_LEFT);                                   break;  // Binoculars horizontal
        case SHAPEFORM_TRINOCULARSH     : return ComputeOculars(QRectF(left,top,width,height),3,OPTION_LEFT);                                   break;  // Trinoculars horizontal
        case SHAPEFORM_FOUROCULARS      : return ComputeOculars(QRectF(left,top,width,height),4,OPTION_UP);                                     break;  // Four oculars
        case SHAPEFORM_TRAPEZOIDUPLEFT  : return ComputeTrapezoid(QRectF(left,top,width,height),OPTION_UP,OPTION_LEFT);                         break;  // Trapezoid Up-Left
        case SHAPEFORM_TRAPEZOIDUP      : return ComputeTrapezoid(QRectF(left,top,width,height),OPTION_UP,OPTION_LEFT|OPTION_RIGHT);            break;  // Trapezoid Up
        case SHAPEFORM_TRAPEZOIDUPRIGHT : return ComputeTrapezoid(QRectF(left,top,width,height),OPTION_UP,OPTION_RIGHT);                        break;  // Trapezoid Up-Right
        case SHAPEFORM_TRAPEZOIDOWNLEFT : return ComputeTrapezoid(QRectF(left,top,width,height),OPTION_DOWN,OPTION_LEFT);                       break;  // Trapezoid Down-Left
        case SHAPEFORM_TRAPEZOIDOWN     : return ComputeTrapezoid(QRectF(left,top,width,height),OPTION_DOWN,OPTION_LEFT|OPTION_RIGHT);          break;  // Trapezoid Down
        case SHAPEFORM_TRAPEZOIDOWNRIGHT: return ComputeTrapezoid(QRectF(left,top,width,height),OPTION_DOWN,OPTION_RIGHT);                      break;  // Trapezoid Down-Right
        case SHAPEFORM_TRAPEZOIDLEFTUP  : return ComputeTrapezoid(QRectF(left,top,width,height),OPTION_LEFT,OPTION_UP);                         break;  // Trapezoid Left-Up
        case SHAPEFORM_TRAPEZOIDLEFT    : return ComputeTrapezoid(QRectF(left,top,width,height),OPTION_LEFT,OPTION_UP|OPTION_DOWN);             break;  // Trapezoid Left
        case SHAPEFORM_TRAPEZOIDLEFTDOWN: return ComputeTrapezoid(QRectF(left,top,width,height),OPTION_LEFT,OPTION_DOWN);                       break;  // Trapezoid Left-Down
        case SHAPEFORM_TRAPEZOIDRIGHTUP : return ComputeTrapezoid(QRectF(left,top,width,height),OPTION_RIGHT,OPTION_UP);                        break;  // Trapezoid Right-Up
        case SHAPEFORM_TRAPEZOIDRIGHT   : return ComputeTrapezoid(QRectF(left,top,width,height),OPTION_RIGHT,OPTION_UP|OPTION_DOWN);            break;  // Trapezoid Right
        case SHAPEFORM_TRAPEZOIDRIGHTDOWN:return ComputeTrapezoid(QRectF(left,top,width,height),OPTION_RIGHT,OPTION_DOWN);                      break;  // Trapezoid Right-Down
        case SHAPEFORM_PARALLELOLEFT    : return ComputeParallelo(QRectF(left,top,width,height),OPTION_LEFT);                                   break;  // Parallelogram Left
        case SHAPEFORM_PARALLELORIGHT   : return ComputeParallelo(QRectF(left,top,width,height),OPTION_RIGHT);                                  break;  // Parallelogram Right
        case SHAPEFORM_PARALLELOUP      : return ComputeParallelo(QRectF(left,top,width,height),OPTION_UP);                                     break;  // Parallelogram Up
        case SHAPEFORM_PARALLELODOWN    : return ComputeParallelo(QRectF(left,top,width,height),OPTION_DOWN);                                   break;  // Parallelogram Down
        case SHAPEFORM_KEYHOLE          : return ComputeKeyHole(QRectF(left,top,width,height));                                                 break;  // KeyHole
        case SHAPEFORM_PLUS             : return ComputePlus(QRectF(left,top,width,height));                                                    break;  // Plus
        case SHAPEFORM_HOURGLASS        : return ComputeHourglass(QRectF(left,top,width,height));                                               break;  // Hourglass
        default                         : return ComputePolygonRect(QRectF(left,top,width,height));                                             break;  // No shape or rectangle or unknown shape
    }
}

//====================================================================================================================

QRectF PolygonToRectF(QList<QPolygonF> Polygon) {
    qreal x1=0,x2=0,y1=0,y2=0;
    if ((Polygon.count()==0)||(Polygon.at(0).toList().count()==0)) return QRectF();
    for (int j=0;j<Polygon.count();j++) {
        QList<QPointF> List=Polygon.at(j).toList();
        if (j==0) {
            x1=List[0].x();
            x2=List[0].x();
            y1=List[0].y();
            y2=List[0].y();
        }
        for (int i=0;i<List.count();i++) {
            if (List[i].x()<x1) x1=List[i].x();
            if (List[i].x()>x2)  x2=List[i].x();
            if (List[i].y()<y1)  y1=List[i].y();
            if (List[i].y()>y2)  y2=List[i].y();
        }
    }
    return QRectF(x1,y1,x2-x1,y2-y1);
}
