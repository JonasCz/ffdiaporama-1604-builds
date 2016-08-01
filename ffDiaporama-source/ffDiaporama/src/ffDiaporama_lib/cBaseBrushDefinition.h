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

#ifndef CBASEBRUSHDEFINITION_H
#define CBASEBRUSHDEFINITION_H

#include "BasicDefines.h"
#include "cBaseAppConfig.h"
#include <QBrush>

//============================================

// Brush type definition
#define BRUSHTYPE_NOBRUSH                   0
#define BRUSHTYPE_SOLID                     1
#define BRUSHTYPE_PATTERN                   2
#define BRUSHTYPE_GRADIENT2                 3
#define BRUSHTYPE_GRADIENT3                 4
#define BRUSHTYPE_IMAGELIBRARY              5
#define BRUSHTYPE_IMAGEDISK                 6

// Brush Gradient orientation
#define GRADIENTORIENTATION_UPLEFT          0
#define GRADIENTORIENTATION_UP              1
#define GRADIENTORIENTATION_UPRIGHT         2
#define GRADIENTORIENTATION_LEFT            3
#define GRADIENTORIENTATION_RADIAL          4
#define GRADIENTORIENTATION_RIGHT           5
#define GRADIENTORIENTATION_BOTTOMLEFT      6
#define GRADIENTORIENTATION_BOTTOM          7
#define GRADIENTORIENTATION_BOTTOMRIGHT     8

//============================================

extern  QBrush  Transparent;    // Transparent brush
QBrush  *GetGradientBrush(QRectF Rect,int BrushType,int GradientOrientation,QString ColorD,QString ColorF,QString ColorIntermed,double Intermediate);

//*********************************************************************************************************************************************
// Base object for background library object
//*********************************************************************************************************************************************

class   cBackgroundObject {
public:
    bool            IsValide;
    qlonglong       FileKey;
    QDateTime       ModifDateTime;
    cBaseAppConfig  *ApplicationConfig;
    QString         Name;

    cBackgroundObject(QString FileName,cBaseAppConfig *ApplicationConfig);

    QImage* GetBackgroundImage();
    QImage  GetBackgroundThumb(int Geometry);

private:
    int         CurrentGeometry;
    QImage      Thumbnail[3];
};

//*********************************************************************************************************************************************
// Global class containing background library
//*********************************************************************************************************************************************

class   cBackgroundList {
public:
    QList<cBackgroundObject> List;                       // list of brush

    cBackgroundList();

    void    ScanDisk(QString Path,cBaseAppConfig *ApplicationConfig);
    int     SearchImage(QString NameToFind);
};
extern  cBackgroundList BackgroundList;

//============================================

class cBaseBrushDefinition {
public:
    int                     BrushType;                  // 0=no brush, 1=Solid, 2=Pattern, 3=Gradient 2 colors, 4=Gradient 3 colors
    int                     PatternType;                // Type of pattern when BrushType is Pattern (Qt::BrushStyle standard)
    int                     GradientOrientation;        // 0=Radial, 1->4=Linear from a corner, 5->9=Linear from a border
    QString                 ColorD;                     // First Color
    QString                 ColorF;                     // Last Color
    QString                 ColorIntermed;              // Intermediate Color
    double                  Intermediate;               // Intermediate position of 2nd color (in %) for gradient 3 colors
    QString                 BrushImage;                 // Image name if image from library

    explicit                cBaseBrushDefinition();
    virtual                 ~cBaseBrushDefinition();

    virtual void            InitDefaultValues();
    virtual QBrush          *GetBrush(QRectF Rect);
    QBrush                  *GetLibraryBrush(QRectF Rect);
};

#endif // CBASEBRUSHDEFINITION_H
