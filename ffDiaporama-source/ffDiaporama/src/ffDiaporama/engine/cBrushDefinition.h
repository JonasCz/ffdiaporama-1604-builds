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

#ifndef CBRUSHDEFINITION_H
#define CBRUSHDEFINITION_H

// Basic inclusions (common to all files)
#include "_GlobalDefines.h"

// Include some additional standard class
#include <QRectF>
#include <QPainter>
#include <QImage>
#include <QString>
#include <QtXml/QDomDocument>
#include <QtXml/QDomElement>

// Include some common various class
#include "cBaseBrushDefinition.h"
#include "cSpeedWave.h"
#include "Shape.h"
#include "cBaseMediaFile.h"
#include "cSoundBlockList.h"

//============================================
// Auto Framing
//============================================

class cAutoFramingDef {
public:
    QString     ToolTip;
    int         GeometryType;
    bool        IsInternal;

    cAutoFramingDef() {}
    cAutoFramingDef(QString ToolTip,bool IsInternal,int GeometryType);
};
extern cAutoFramingDef AUTOFRAMINGDEF[NBR_AUTOFRAMING];
void   AutoFramingDefInit();

//*********************************************************************************************************************************************
// Base object for brush object
//*********************************************************************************************************************************************

class cBrushDefinition:public cBaseBrushDefinition {
public:
    // Link to global objects
    cApplicationConfig      *ApplicationConfig;
    QObject                 *CompositionObject;         // Link to parent (cCompositionObject)

    // Basic settings
    int                     TypeComposition;            // Type of composition object (COMPOSITIONTYPE_BACKGROUND, COMPOSITIONTYPE_OBJECT, COMPOSITIONTYPE_SHOT)
    int                     ImageSpeedWave;             // Speed wave for this object during annimations

    // Embedded media object
    cBaseMediaFile          *MediaObject;               // Embeded Media Object
    bool                    DeleteMediaObject;

    // Image correction part
    double                  X;                          // X position (in %) relative to up/left corner
    double                  Y;                          // Y position (in %) relative to up/left corner
    double                  ZoomFactor;                 // Zoom factor (in %)
    double                  ImageRotation;              // Image rotation (in °)
    int                     Brightness;                 // Brightness adjustment
    int                     Contrast;                   // Contrast adjustment
    double                  Gamma;                      // Gamma adjustment
    int                     Red;                        // Red adjustment
    int                     Green;                      // Green adjustment
    int                     Blue;                       // Blue adjustment
    bool                    LockGeometry;               // True if geometry is locked
    double                  AspectRatio;                // Aspect Ratio of image
    bool                    FullFilling;                // Background image disk only : If true aspect ratio is not keep and image is deformed to fill the frame
    double                  GaussBlurSharpenSigma,BlurSharpenRadius;       // Blur/Sharpen parameters
    int                     TypeBlurSharpen,QuickBlurSharpenSigma;
    double                  Desat,Swirl,Implode;        // Filter parameters
    int                     OnOffFilter;                // On-Off filter = combination of Despeckle, Equalize, Gray and Negative;

    // Video specific part
    double                  SoundVolume;                // Volume of soundtrack
    bool                    Deinterlace;                // Add a YADIF filter to deinterlace video (on/off)

    // Google maps specific part
    struct sMarker {
        QString MarkerColor;
        QString TextColor;
        QString LineColor;
        enum MARKERVISIBILITY {MARKERHIDE,MARKERSHADE,MARKERSHOW,MARKERTABLE} Visibility;
        enum MARKERSIZE {SMALL,MEDIUM,LARGE,VERYLARGE};
    };

    QList<sMarker>          Markers;

    explicit                cBrushDefinition(QObject *CompositionObject,cApplicationConfig *TheApplicationConfig);
                           ~cBrushDefinition();

    virtual void            InitDefaultValues();

    void                    *GetDiaporamaObject();
    void                    *GetDiaporama();

    void                    CopyFromBrushDefinition(cBrushDefinition *BrushToCopy);
    void                    AddShotPartToXML(QDomElement *Element);
    void                    SaveToXML(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel);
    bool                    LoadFromXML(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,QStringList *AliasList,bool *ModifyFlag,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes);
    virtual QBrush          *GetBrush(QRectF Rect,bool PreviewMode,int Position,cSoundBlockList *SoundTrackMontage,double PctDone,cBrushDefinition *PreviousBrush);

    int                     GetImageType();

    // Image correction part
    QImage                  ApplyFilter(QImage Image);
    QImage                  ApplyFilters(QImage NewRenderImage,double TheBrightness,double TheContrast,double TheGamma,double TheRed,double TheGreen,double TheBlue,double TheDesat,bool ProgressifOnOffFilter,cBrushDefinition *PreviousBrush,double PctDone);


    // Utility functions used to draw thumbnails of image
    QImage                  *ImageToWorkspace(QImage *SrcImage,int WantedSize,qreal &maxw,qreal &maxh,qreal &minw,qreal &minh,qreal &x1,qreal &x2,qreal &x3,qreal &x4,qreal &y1,qreal &y2,qreal &y3,qreal &y4);
    void                    ApplyMaskToImageToWorkspace(QImage *SrcImage,QRectF CurSelRect,int BackgroundForm,int AutoFramingStyle=-1);
    void                    ApplyMaskToImageToWorkspace(QImage *SrcImage,int AutoFramingStyle,int BackgroundForm,int WantedSize,qreal maxw,qreal maxh,qreal minw,qreal minh,qreal X,qreal Y,qreal ZoomFactor,qreal AspectRatio,qreal ProjectGeometry);

    // Utility functions used to define default framing
    int                     GetCurrentFramingStyle(qreal ProjectGeometry);
    bool                    CalcWorkspace(qreal &dmax,qreal &maxw,qreal &maxh,qreal &minw,qreal &minh,qreal &x1,qreal &x2,qreal &x3,qreal &x4,qreal &y1,qreal &y2,qreal &y3,qreal &y4);
    void                    ApplyAutoFraming(int AutoAdjust,qreal ProjectGeometry);
    void                    s_AdjustWTop(qreal ProjectGeometry);
    void                    s_AdjustWMidle(qreal ProjectGeometry);
    void                    s_AdjustWBottom(qreal ProjectGeometry);
    void                    s_AdjustHLeft(qreal ProjectGeometry);
    void                    s_AdjustHMidle(qreal ProjectGeometry);
    void                    s_AdjustHRight(qreal ProjectGeometry);
    void                    s_AdjustWH();
    void                    s_AdjustMinWTop(qreal ProjectGeometry);
    void                    s_AdjustMinWMidle(qreal ProjectGeometry);
    void                    s_AdjustMinWBottom(qreal ProjectGeometry);
    void                    s_AdjustMinHLeft(qreal ProjectGeometry);
    void                    s_AdjustMinHMidle(qreal ProjectGeometry);
    void                    s_AdjustMinHRight(qreal ProjectGeometry);
    void                    s_AdjustMinWH();

    QImage                  GetImageDiskBrush(QRectF Rect,bool PreviewMode,int64_t Position,cSoundBlockList *SoundTrackMontage,double PctDone,cBrushDefinition *PreviousBrush);
    int                     GetHeightForWidth(int WantedWith,QRectF Rect);
    int                     GetWidthForHeight(int WantedHeight,QRectF Rect);

    void                    GetRealLocation(void **Location,void **RealLocation);
    void                    DrawMarker(QPainter *Painter,QPoint Position,int MarkerNum,sMarker::MARKERVISIBILITY Visibility,QSize MarkerSize,cBrushDefinition::sMarker::MARKERSIZE Size,bool DisplayType=false);
    void                    ComputeMarkerSize(void *Location,QSize MapImageSize);
    void                    AddMarkerToImage(QImage *DestImage);
};

#endif // CBRUSHDEFINITION_H
