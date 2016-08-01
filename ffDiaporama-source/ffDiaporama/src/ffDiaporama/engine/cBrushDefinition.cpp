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

#include "cBrushDefinition.h"
#include <QtSvg>
#include <engine/cLocation.h>

#include "ImageFilters.h"
#include "_Variables.h"

#define DEFAULT_IMAGEROTATION   0
#define DEFAULT_BRIGHTNESS      0
#define DEFAULT_CONTRAST        0
#define DEFAULT_GAMMA           1
#define DEFAULT_RED             0
#define DEFAULT_GREEN           0
#define DEFAULT_BLUE            0
#define DEFAULT_LOCKGEOMETRY    false
#define DEFAULT_ASPECTRATIO     1
#define DEFAULT_FULLFILLING     false
#define DEFAULT_TYPEBLURSHARPEN 0
#define DEFAULT_GBSSIGMA        0
#define DEFAULT_GBSRADIUS       5
#define DEFAULT_QBSSIGMA        0
#define DEFAULT_DESAT           0
#define DEFAULT_SWIRL           0
#define DEFAULT_IMPLODE         0
#define DEFAULT_ONOFFFILTER     0

//============================================
// Global static
//============================================

cBackgroundList BackgroundList;

#define PI              3.14159265

//*********************************************************************************************************************************************

cAutoFramingDef AUTOFRAMINGDEF[NBR_AUTOFRAMING];

cAutoFramingDef::cAutoFramingDef(QString ToolTip,bool IsInternal,int GeometryType) {
    this->ToolTip       =ToolTip;
    this->GeometryType  =GeometryType;
    this->IsInternal    =IsInternal;
}

void AutoFramingDefInit() {
    for (int i=0;i<NBR_AUTOFRAMING;i++) switch(i) {
        case AUTOFRAMING_CUSTOMUNLOCK   :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Custom geometry - unlocked"),false,                 AUTOFRAMING_GEOMETRY_CUSTOM);   break;
        case AUTOFRAMING_CUSTOMLOCK     :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Custom geometry - locked"),false,                   AUTOFRAMING_GEOMETRY_CUSTOM);   break;
        case AUTOFRAMING_CUSTOMIMGLOCK  :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Custom size - Image geometry"),false,               AUTOFRAMING_GEOMETRY_IMAGE);    break;
        case AUTOFRAMING_CUSTOMPRJLOCK  :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Custom size - Project geometry"),false,             AUTOFRAMING_GEOMETRY_PROJECT);  break;
        case AUTOFRAMING_FULLMAX        :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Full image"),false,                                 AUTOFRAMING_GEOMETRY_IMAGE);    break;
        case AUTOFRAMING_FULLMIN        :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Full inner image"),true,                            AUTOFRAMING_GEOMETRY_IMAGE);    break;
        case AUTOFRAMING_HEIGHTLEFTMAX  :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Project height - to the left"),false,               AUTOFRAMING_GEOMETRY_PROJECT);  break;
        case AUTOFRAMING_HEIGHTLEFTMIN  :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Project inner height - to the left"),true,          AUTOFRAMING_GEOMETRY_PROJECT);  break;
        case AUTOFRAMING_HEIGHTMIDLEMAX :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Project height - in the center"),false,             AUTOFRAMING_GEOMETRY_PROJECT);  break;
        case AUTOFRAMING_HEIGHTMIDLEMIN :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Project inner height - in the center"),true,        AUTOFRAMING_GEOMETRY_PROJECT);  break;
        case AUTOFRAMING_HEIGHTRIGHTMAX :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Project height - to the right"),false,              AUTOFRAMING_GEOMETRY_PROJECT);  break;
        case AUTOFRAMING_HEIGHTRIGHTMIN :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Project inner height - to the right"),true,         AUTOFRAMING_GEOMETRY_PROJECT);  break;
        case AUTOFRAMING_WIDTHTOPMAX    :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Project width - at the top"),false,                 AUTOFRAMING_GEOMETRY_PROJECT);  break;
        case AUTOFRAMING_WIDTHTOPMIN    :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Project inner width - at the top"),true,            AUTOFRAMING_GEOMETRY_PROJECT);  break;
        case AUTOFRAMING_WIDTHMIDLEMAX  :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Project width - in the middle"),false,              AUTOFRAMING_GEOMETRY_PROJECT);  break;
        case AUTOFRAMING_WIDTHMIDLEMIN  :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Project inner width - in the middle"),true,         AUTOFRAMING_GEOMETRY_PROJECT);  break;
        case AUTOFRAMING_WIDTHBOTTOMMAX :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Project width - at the bottom"),false,              AUTOFRAMING_GEOMETRY_PROJECT);  break;
        case AUTOFRAMING_WIDTHBOTTOMMIN :   AUTOFRAMINGDEF[i]=cAutoFramingDef(QApplication::translate("Framing styles","Project inner width - at the bottom"),true,         AUTOFRAMING_GEOMETRY_PROJECT);  break;
    }
}

//*********************************************************************************************************************************************
// Object for Brush definition
//*********************************************************************************************************************************************

cBrushDefinition::cBrushDefinition(QObject *TheCompositionObject,cApplicationConfig *TheApplicationConfig) {
    TypeComposition         =COMPOSITIONTYPE_BACKGROUND;
    ApplicationConfig       =TheApplicationConfig;
    CompositionObject       =TheCompositionObject;
    MediaObject             =NULL;
    DeleteMediaObject       =true;

    InitDefaultValues();
}

//====================================================================================================================

void cBrushDefinition::InitDefaultValues() {
    cBaseBrushDefinition::InitDefaultValues();

    SoundVolume             =-1;                            // Volume of soundtrack (-1=auto)
    Deinterlace             =false;                         // Add a YADIF filter to deinterlace video (on/off)

    // Image correction part
    ImageRotation           =DEFAULT_IMAGEROTATION;         // Image rotation
    X                       =0;                             // X position (in %) relative to up/left corner
    Y                       =0;                             // Y position (in %) relative to up/left corner
    ZoomFactor              =1;                             // Zoom factor (in %)
    Brightness              =DEFAULT_BRIGHTNESS;
    Contrast                =DEFAULT_CONTRAST;
    Gamma                   =DEFAULT_GAMMA;
    Red                     =DEFAULT_RED;
    Green                   =DEFAULT_GREEN;
    Blue                    =DEFAULT_BLUE;
    LockGeometry            =DEFAULT_LOCKGEOMETRY;
    AspectRatio             =DEFAULT_ASPECTRATIO;
    FullFilling             =DEFAULT_FULLFILLING;
    GaussBlurSharpenSigma   =DEFAULT_GBSSIGMA;
    BlurSharpenRadius       =DEFAULT_GBSRADIUS;
    QuickBlurSharpenSigma   =DEFAULT_QBSSIGMA;
    TypeBlurSharpen         =DEFAULT_TYPEBLURSHARPEN; // 0=Quick, 1=Gaussian
    Desat                   =DEFAULT_DESAT;
    Swirl                   =DEFAULT_SWIRL;
    Implode                 =DEFAULT_IMPLODE;
    OnOffFilter             =DEFAULT_ONOFFFILTER;
    ImageSpeedWave          =SPEEDWAVE_PROJECTDEFAULT;
}

//====================================================================================================================

cBrushDefinition::~cBrushDefinition() {
    if (MediaObject) {
        if (DeleteMediaObject)
            delete MediaObject;
        MediaObject=NULL;
    }
}

//====================================================================================================================

QBrush *cBrushDefinition::GetBrush(QRectF Rect,bool PreviewMode,int Position,cSoundBlockList *SoundTrackMontage,double PctDone,cBrushDefinition *PreviousBrush) {
    QBrush  *Br=NULL;
    if (BrushType==BRUSHTYPE_IMAGEDISK) {
        QImage Img=GetImageDiskBrush(Rect,PreviewMode,Position,SoundTrackMontage,PctDone,PreviousBrush);
        if (!Img.isNull()) Br=new QBrush(Img);
    } else Br=cBaseBrushDefinition::GetBrush(Rect);
    return Br;
}

//====================================================================================================================

QImage cBrushDefinition::ApplyFilters(QImage NewRenderImage,double TheBrightness,double TheContrast,double TheGamma,double TheRed,double TheGreen,double TheBlue,double TheDesat,
                                      bool ProgressifOnOffFilter,cBrushDefinition *PreviousBrush,double PctDone) {
    if ((TheBrightness!=0)||(TheContrast!=0)||(TheGamma!=1)||(TheRed!=0)||(TheGreen!=0)||(TheBlue!=0)) {
        if (TheBrightness!=0)                                           FltBrightness(NewRenderImage,TheBrightness);
        if (TheContrast!=0)                                             FltContrast(NewRenderImage,TheContrast);
        if (TheGamma!=1)                                                FltGamma(NewRenderImage,TheGamma);
        if ((TheRed!=0)||(TheGreen!=0)||(TheBlue!=0))                   FltColorize(NewRenderImage,TheRed,TheGreen,TheBlue);
    }
    if (TheDesat!=0) FltDesaturate(NewRenderImage,TheDesat);

    if ((ProgressifOnOffFilter)||(GaussBlurSharpenSigma!=0)||(QuickBlurSharpenSigma!=0)||(OnOffFilter!=0)) {
        QImage PreviousImage=NewRenderImage.copy();

        // Apply previous filter to image
        if ((TypeBlurSharpen==1)&&(GaussBlurSharpenSigma<0))        FltGaussianBlur(NewRenderImage,BlurSharpenRadius,-GaussBlurSharpenSigma);
        if ((TypeBlurSharpen==1)&&(GaussBlurSharpenSigma>0))        FltGaussianSharpen(NewRenderImage,BlurSharpenRadius,GaussBlurSharpenSigma);
        if ((TypeBlurSharpen==0)&&(QuickBlurSharpenSigma<0))        FltBlur(NewRenderImage,-QuickBlurSharpenSigma);
        if ((TypeBlurSharpen==0)&&(QuickBlurSharpenSigma>0))        FltSharpen(NewRenderImage,QuickBlurSharpenSigma);
        if ((OnOffFilter & FilterDespeckle)!=0)                     FltDespeckle(NewRenderImage);
        if ((OnOffFilter & FilterEqualize)!=0)                      FltEqualize(NewRenderImage);
        if ((OnOffFilter & FilterGray)!=0)                          FltGrayscale(NewRenderImage);
        if ((OnOffFilter & FilterNegative)!=0)                      NewRenderImage.invertPixels(QImage::InvertRgb);
        if ((OnOffFilter & FilterEmboss)!=0)                        FltEmboss(NewRenderImage,0,1);
        if ((OnOffFilter & FilterEdge)!=0)                          FltEdge(NewRenderImage);
        if ((OnOffFilter & FilterAntialias)!=0)                     FltAntialias(NewRenderImage);
        if ((OnOffFilter & FilterNormalize)!=0)                     FltAutoContrast(NewRenderImage);
        if ((OnOffFilter & FilterCharcoal)!=0)                      FltCharcoal(NewRenderImage);
        if ((OnOffFilter & FilterOil)!=0)                           FltOilPaint(NewRenderImage);

        if (ProgressifOnOffFilter) {

            // Apply previous filter to copied image
            if ((PreviousBrush->TypeBlurSharpen==1)&&(PreviousBrush->GaussBlurSharpenSigma<0))  FltGaussianBlur(PreviousImage,PreviousBrush->BlurSharpenRadius,-PreviousBrush->GaussBlurSharpenSigma);
            if ((PreviousBrush->TypeBlurSharpen==1)&&(PreviousBrush->GaussBlurSharpenSigma>0))  FltGaussianSharpen(PreviousImage,PreviousBrush->BlurSharpenRadius,PreviousBrush->GaussBlurSharpenSigma);
            if ((PreviousBrush->TypeBlurSharpen==0)&&(PreviousBrush->QuickBlurSharpenSigma<0))  FltBlur(PreviousImage,-PreviousBrush->QuickBlurSharpenSigma);
            if ((PreviousBrush->TypeBlurSharpen==0)&&(PreviousBrush->QuickBlurSharpenSigma>0))  FltSharpen(PreviousImage,PreviousBrush->QuickBlurSharpenSigma);
            if ((PreviousBrush->OnOffFilter & FilterDespeckle)!=0)                              FltDespeckle(PreviousImage);
            if ((PreviousBrush->OnOffFilter & FilterEqualize)!=0)                               FltEqualize(PreviousImage);
            if ((PreviousBrush->OnOffFilter & FilterGray)!=0)                                   FltGrayscale(PreviousImage);
            if ((PreviousBrush->OnOffFilter & FilterNegative)!=0)                               PreviousImage.invertPixels(QImage::InvertRgb);
            if ((PreviousBrush->OnOffFilter & FilterEmboss)!=0)                                 FltEmboss(PreviousImage,0,1);
            if ((PreviousBrush->OnOffFilter & FilterEdge)!=0)                                   FltEdge(PreviousImage);
            if ((PreviousBrush->OnOffFilter & FilterAntialias)!=0)                              FltAntialias(PreviousImage);
            if ((PreviousBrush->OnOffFilter & FilterNormalize)!=0)                              FltAutoContrast(PreviousImage);
            if ((PreviousBrush->OnOffFilter & FilterCharcoal)!=0)                               FltCharcoal(PreviousImage);
            if ((PreviousBrush->OnOffFilter & FilterOil)!=0)                                    FltOilPaint(PreviousImage);

            // Mix images
            QPainter P;
            P.begin(&PreviousImage);
            P.setOpacity(PctDone);
            P.drawImage(0,0,NewRenderImage);
            P.setOpacity(1);
            P.end();
            NewRenderImage=PreviousImage;
        }
    }

    return NewRenderImage;
}

//====================================================================================================================

QImage cBrushDefinition::GetImageDiskBrush(QRectF Rect,bool PreviewMode,int64_t Position,cSoundBlockList *SoundTrackMontage,double PctDone,cBrushDefinition *PreviousBrush) {
    // If not an image or a video or filename is empty then return
    if ((!MediaObject)||((MediaObject->RessourceKey==-1)&&(MediaObject->FileKey==-1)&&(MediaObject->ObjectType!=OBJECTTYPE_GMAPSMAP))) {    // Allow gmap object without image (default image will be computed in imageat function)
        QImage Ret(Rect.width(),Rect.height(),QImage::Format_ARGB32_Premultiplied);
        QPainter Painter;
        Painter.begin(&Ret);
        Painter.setCompositionMode(QPainter::CompositionMode_Source);
        Painter.fillRect(QRect(0,0,Rect.width(),Rect.height()),Qt::transparent);
        Painter.setCompositionMode(QPainter::CompositionMode_SourceOver);
        Painter.end();
        return Ret;
    }

    // W and H = 0 when producing sound track in render process
    bool    SoundOnly=((Rect.width()==0)&&(Rect.height()==0));

    if (!SoundOnly) {
        QImage *RenderImage=NULL;
        if ((MediaObject)&&(MediaObject->ObjectType!=OBJECTTYPE_VIDEOFILE)) RenderImage=MediaObject->ImageAt(PreviewMode);
            else if (MediaObject) RenderImage=((cVideoFile *)MediaObject)->ImageAt(PreviewMode,Position,SoundTrackMontage,this->Deinterlace,this->SoundVolume,false,false);

        if ((RenderImage)&&(MediaObject)&&(MediaObject->ObjectType==OBJECTTYPE_GMAPSMAP)) AddMarkerToImage(RenderImage);

        // Compute filters values
        QImage Ret;
        double TheXFactor           =X;
        double TheYFactor           =Y;
        double TheZoomFactor        =ZoomFactor;
        double TheRotateFactor      =ImageRotation;
        double TheBrightness        =Brightness;
        double TheContrast          =((OnOffFilter & FilterNormalize)==0)?Contrast:0;
        double TheGamma             =Gamma;
        double TheRed               =Red;
        double TheGreen             =Green;
        double TheBlue              =Blue;
        double TheDesat             =Desat;
        double TheSwirl             =Swirl;
        double TheImplode           =Implode;
        double TheAspectRatio       =AspectRatio;
        int    TheOnOffFilter       =OnOffFilter;
        bool   ProgressifOnOffFilter=false;

        // Adjust values depending on PctDone and previous Filter (if exist)
        if (PreviousBrush) {
            if (((PreviousBrush->OnOffFilter & FilterNormalize)==0)&&(PreviousBrush->Contrast!=TheContrast))    TheContrast     =PreviousBrush->Contrast+(TheContrast-PreviousBrush->Contrast)*PctDone;
            if (PreviousBrush->X!=TheXFactor)                                                                   TheXFactor      =PreviousBrush->X+(TheXFactor-PreviousBrush->X)*PctDone;
            if (PreviousBrush->Y!=TheYFactor)                                                                   TheYFactor      =PreviousBrush->Y+(TheYFactor-PreviousBrush->Y)*PctDone;
            if (PreviousBrush->ZoomFactor!=TheZoomFactor)                                                       TheZoomFactor   =PreviousBrush->ZoomFactor+(TheZoomFactor-PreviousBrush->ZoomFactor)*PctDone;
            if (PreviousBrush->ImageRotation!=TheRotateFactor)                                                  TheRotateFactor =PreviousBrush->ImageRotation+(TheRotateFactor-PreviousBrush->ImageRotation)*PctDone;
            if (PreviousBrush->Brightness!=TheBrightness)                                                       TheBrightness   =PreviousBrush->Brightness+(TheBrightness-PreviousBrush->Brightness)*PctDone;
            if (PreviousBrush->Gamma!=TheGamma)                                                                 TheGamma        =PreviousBrush->Gamma+(TheGamma-PreviousBrush->Gamma)*PctDone;
            if (PreviousBrush->Red!=TheRed)                                                                     TheRed          =PreviousBrush->Red+(TheRed-PreviousBrush->Red)*PctDone;
            if (PreviousBrush->Green!=TheGreen)                                                                 TheGreen        =PreviousBrush->Green+(TheGreen-PreviousBrush->Green)*PctDone;
            if (PreviousBrush->Blue!=TheBlue)                                                                   TheBlue         =PreviousBrush->Blue+(TheBlue-PreviousBrush->Blue)*PctDone;
            if (PreviousBrush->Desat!=TheDesat)                                                                 TheDesat        =PreviousBrush->Desat+(TheDesat-PreviousBrush->Desat)*PctDone;
            if (PreviousBrush->Swirl!=TheSwirl)                                                                 TheSwirl        =PreviousBrush->Swirl+(TheSwirl-PreviousBrush->Swirl)*PctDone;
            if (PreviousBrush->Implode!=TheImplode)                                                             TheImplode      =PreviousBrush->Implode+(TheImplode-PreviousBrush->Implode)*PctDone;
            //if (PreviousBrush->AspectRatio!=TheAspectRatio)                                                     TheAspectRatio  =PreviousBrush->AspectRatio+(TheAspectRatio-PreviousBrush->AspectRatio)*PctDone;

            if ((PreviousBrush->OnOffFilter!=TheOnOffFilter)||
                (PreviousBrush->GaussBlurSharpenSigma!=GaussBlurSharpenSigma)||
                (PreviousBrush->QuickBlurSharpenSigma!=QuickBlurSharpenSigma)||
                (PreviousBrush->BlurSharpenRadius!=BlurSharpenRadius)||
                (PreviousBrush->TypeBlurSharpen!=TypeBlurSharpen)
               ) ProgressifOnOffFilter=true;
        }

        // Prepare image
        if (RenderImage) {
            if (FullFilling) {
                // Create brush image with distortion
                Ret=QImage(RenderImage->scaled(Rect.width(),Rect.height(),Qt::IgnoreAspectRatio,Qt::SmoothTransformation));
                delete RenderImage;
                RenderImage=NULL;
            } else {

                // if it's a video and it's PreviewMode, then apply filter now before scale image
                if ((MediaObject)&&(MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)&&(PreviewMode)) {
                    QImage TempNewRenderImage=RenderImage->convertToFormat(QImage::Format_ARGB32_Premultiplied);
                    TempNewRenderImage=ApplyFilters(TempNewRenderImage,TheBrightness,TheContrast,TheGamma,TheRed,TheGreen,TheBlue,TheDesat,ProgressifOnOffFilter,PreviousBrush,PctDone);
                    delete RenderImage;
                    RenderImage=new QImage(TempNewRenderImage);
                }

                // Prepare values from sourceimage size
                qreal    RealImageW=RenderImage->width();
                qreal    RealImageH=RenderImage->height();
                qreal    Hyp       =floor(sqrt(RealImageW*RealImageW+RealImageH*RealImageH));
                qreal    HypPixel  =Hyp*TheZoomFactor;

                // Expand canvas
                QImage   NewRenderImage(Hyp,Hyp,QImage::Format_ARGB32_Premultiplied);
                QPainter Painter;
                Painter.begin(&NewRenderImage);
                Painter.setCompositionMode(QPainter::CompositionMode_Source);
                Painter.fillRect(QRect(0,0,NewRenderImage.width(),NewRenderImage.height()),Qt::transparent);
                Painter.setCompositionMode(QPainter::CompositionMode_SourceOver);
                Painter.drawImage(QPoint((Hyp-RealImageW)/2,(Hyp-RealImageH)/2),*RenderImage);
                Painter.end();
                delete RenderImage;

                // Rotate image (if needed)
                if (TheRotateFactor!=0) {
                    QTransform matrix;
                    matrix.rotate(TheRotateFactor,Qt::ZAxis);
                    int W=NewRenderImage.width();
                    int H=NewRenderImage.height();
                    NewRenderImage=NewRenderImage.transformed(matrix,ApplicationConfig->Smoothing?Qt::SmoothTransformation:Qt::FastTransformation);
                    int ax=NewRenderImage.width()-W;
                    int ay=NewRenderImage.height()-H;
                    NewRenderImage=NewRenderImage.copy(ax/2,ay/2,NewRenderImage.width()-ax,NewRenderImage.height()-ay);
                }

                // Get part we need and scaled it to destination size
                TheAspectRatio=qreal(HypPixel*Rect.height())/qreal(Rect.width());
                NewRenderImage=NewRenderImage.copy(Hyp*TheXFactor,Hyp*TheYFactor,HypPixel,/*HypPixel**/TheAspectRatio)
                                    .scaled(Rect.width(),/*Rect.width()*TheAspectRatio*/Rect.height(),Qt::IgnoreAspectRatio,
                                    ApplicationConfig->Smoothing?Qt::SmoothTransformation:Qt::FastTransformation);

                // Apply correction filters to DestImage (if it's a video and it's PreviewMode, then filter was apply before)
                if (!((MediaObject)&&(MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)&&(PreviewMode)))
                    NewRenderImage=ApplyFilters(NewRenderImage,TheBrightness,TheContrast,TheGamma,TheRed,TheGreen,TheBlue,TheDesat,ProgressifOnOffFilter,PreviousBrush,PctDone);
                if (TheSwirl!=0)   FltSwirl(NewRenderImage,-TheSwirl);
                if (TheImplode!=0) FltImplode(NewRenderImage,TheImplode);

                if ((!NewRenderImage.isNull())&&((NewRenderImage.width()!=Rect.width())||(NewRenderImage.height()!=Rect.height())))
                    Ret=NewRenderImage.scaled(Rect.width(),Rect.height(),Qt::IgnoreAspectRatio,Qt::SmoothTransformation);
                else Ret=NewRenderImage;
            }
        }
        return Ret;
    } else {
        // Force loading of sound of video
        if ((MediaObject)&&(MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)) {
            QImage *RenderImage=((cVideoFile *)MediaObject)->ImageAt(PreviewMode,Position,SoundTrackMontage,Deinterlace,SoundVolume,SoundOnly,false);
            if (RenderImage) delete RenderImage;
        }
        QImage Ret(Rect.width(),Rect.height(),QImage::Format_ARGB32_Premultiplied);
        QPainter Painter;
        Painter.begin(&Ret);
        Painter.setCompositionMode(QPainter::CompositionMode_Source);
        Painter.fillRect(QRect(0,0,Rect.width(),Rect.height()),Qt::transparent);
        Painter.setCompositionMode(QPainter::CompositionMode_SourceOver);
        Painter.end();
        return Ret;
    }
}

//====================================================================================================================
// Note:This function is use only by cBrushDefinition !
QImage cBrushDefinition::ApplyFilter(QImage Image) {
    if (Image.isNull()) return Image;
    if (Brightness!=0)                                          FltBrightness(Image,Brightness);
    if ((Contrast!=0)&&((OnOffFilter & FilterNormalize)==0))    FltContrast(Image,Contrast);
    if (Gamma!=1)                                               FltGamma(Image,Gamma);
    if ((Red!=0)||(Green!=0)||(Blue!=0))                        FltColorize(Image,Red,Green,Blue);
    if ((TypeBlurSharpen==0)&&(QuickBlurSharpenSigma<0))        FltBlur(Image,-QuickBlurSharpenSigma);
    if ((TypeBlurSharpen==0)&&(QuickBlurSharpenSigma>0))        FltSharpen(Image,QuickBlurSharpenSigma);
    if ((TypeBlurSharpen==1)&&(GaussBlurSharpenSigma<0))        FltGaussianBlur(Image,BlurSharpenRadius,-GaussBlurSharpenSigma);
    if ((TypeBlurSharpen==1)&&(GaussBlurSharpenSigma>0))        FltGaussianSharpen(Image,BlurSharpenRadius,GaussBlurSharpenSigma);
    if ((OnOffFilter & FilterDespeckle)!=0)                     FltDespeckle(Image);
    if ((OnOffFilter & FilterEqualize)!=0)                      FltEqualize(Image);
    if ((OnOffFilter & FilterGray)!=0)                          FltGrayscale(Image);
    if ((OnOffFilter & FilterNegative)!=0)                      Image.invertPixels(QImage::InvertRgb);
    if ((OnOffFilter & FilterEmboss)!=0)                        FltEmboss(Image,0,1);
    if ((OnOffFilter & FilterEdge)!=0)                          FltEdge(Image);
    if ((OnOffFilter & FilterAntialias)!=0)                     FltAntialias(Image);
    if ((OnOffFilter & FilterNormalize)!=0)                     FltAutoContrast(Image);
    if ((OnOffFilter & FilterCharcoal)!=0)                      FltCharcoal(Image);
    if ((OnOffFilter & FilterOil)!=0)                           FltOilPaint(Image);
    if (Desat!=0)                                               FltDesaturate(Image,Desat);
    if (Swirl!=0)                                               FltSwirl(Image,-Swirl);
    if (Implode!=0)                                             FltImplode(Image,Implode);
    return Image;
}

//====================================================================================================================
// Return height for width depending on Rect geometry
int cBrushDefinition::GetHeightForWidth(int WantedWith,QRectF Rect) {
    double   Ratio=Rect.width()/Rect.height();
    return int(double(double(WantedWith)/Ratio));
}

//====================================================================================================================
// Return width for height depending on Rect geometry
int cBrushDefinition::GetWidthForHeight(int WantedHeight,QRectF Rect) {
    double   Ratio=Rect.height()/Rect.width();
    return int(double(double(WantedHeight)/Ratio));
}

//====================================================================================================================
// create a COMPOSITIONTYPE_SHOT brush as a copy of a given brush

void cBrushDefinition::CopyFromBrushDefinition(cBrushDefinition *BrushToCopy) {
    TypeComposition         =COMPOSITIONTYPE_SHOT;
    BrushType               =BrushToCopy->BrushType;
    PatternType             =BrushToCopy->PatternType;
    GradientOrientation     =BrushToCopy->GradientOrientation;
    ColorD                  =BrushToCopy->ColorD;
    ColorF                  =BrushToCopy->ColorF;
    ColorIntermed           =BrushToCopy->ColorIntermed;
    Intermediate            =BrushToCopy->Intermediate;
    BrushImage              =BrushToCopy->BrushImage;
    MediaObject             =BrushToCopy->MediaObject;
    DeleteMediaObject       =false;
    SoundVolume             =BrushToCopy->SoundVolume;
    Deinterlace             =BrushToCopy->Deinterlace;

    // Image correction part
    ImageRotation           =BrushToCopy->ImageRotation;
    X                       =BrushToCopy->X;
    Y                       =BrushToCopy->Y;
    ZoomFactor              =BrushToCopy->ZoomFactor;
    Brightness              =BrushToCopy->Brightness;
    Contrast                =BrushToCopy->Contrast;
    Gamma                   =BrushToCopy->Gamma;
    Red                     =BrushToCopy->Red;
    Green                   =BrushToCopy->Green;
    Blue                    =BrushToCopy->Blue;
    LockGeometry            =BrushToCopy->LockGeometry;
    FullFilling             =BrushToCopy->FullFilling;
    AspectRatio             =BrushToCopy->AspectRatio;
    GaussBlurSharpenSigma   =BrushToCopy->GaussBlurSharpenSigma;
    BlurSharpenRadius       =BrushToCopy->BlurSharpenRadius;
    QuickBlurSharpenSigma   =BrushToCopy->QuickBlurSharpenSigma;
    TypeBlurSharpen         =BrushToCopy->TypeBlurSharpen;
    Desat                   =BrushToCopy->Desat;
    Swirl                   =BrushToCopy->Swirl;
    Implode                 =BrushToCopy->Implode;
    OnOffFilter             =BrushToCopy->OnOffFilter;
    ImageSpeedWave          =BrushToCopy->ImageSpeedWave;

    Markers                 =BrushToCopy->Markers;
}

//====================================================================================================================

void cBrushDefinition::AddShotPartToXML(QDomElement *Element) {
    if (!MediaObject) return;
    if (MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE) {
        Element->setAttribute("SoundVolume",QString("%1").arg(SoundVolume,0,'f'));               // Volume of soundtrack (for video only)
        Element->setAttribute("Deinterlace",Deinterlace?"1":0);                                  // Add a YADIF filter to deinterlace video (on/off) (for video only)
    } else if (MediaObject->ObjectType==OBJECTTYPE_GMAPSMAP) {
        // Save marker settings
        QDomDocument    DomDocument;
        for (int MarkerNum=0;MarkerNum<Markers.count();MarkerNum++) {
            QDomElement SubElement=DomDocument.createElement(QString("Marker_%1").arg(MarkerNum));
            SubElement.setAttribute("MarkerColor",Markers[MarkerNum].MarkerColor);
            SubElement.setAttribute("TextColor",Markers[MarkerNum].TextColor);
            SubElement.setAttribute("LineColor",Markers[MarkerNum].LineColor);
            SubElement.setAttribute("Visibility", int(Markers[MarkerNum].Visibility));
            Element->appendChild(SubElement);
        }
    }
}

//====================================================================================================================

void cBrushDefinition::SaveToXML(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel) {
    QDomDocument    DomDocument;
    QDomElement     Element      =DomDocument.createElement(ElementName);
    QString         BrushFileName=(MediaObject?MediaObject->FileName():"");
    OBJECTTYPE      ObjectType   =(MediaObject?MediaObject->ObjectType:OBJECTTYPE_UNMANAGED);

    if ((!BrushFileName.isEmpty())&&(!BrushFileName.startsWith(":/img/"))) {
        if (QDir::toNativeSeparators(BrushFileName).startsWith(ClipArtFolder)) {
            BrushFileName="%CLIPARTFOLDER%"+QDir::toNativeSeparators(BrushFileName).mid(ClipArtFolder.length());
            #ifdef Q_OS_WIN
            BrushFileName=BrushFileName.replace("\\","/");  // Force Linux mode separator
            #endif
        } else if (QDir::toNativeSeparators(BrushFileName).startsWith(ModelFolder)) {
            BrushFileName="%MODELFOLDER%"  +QDir::toNativeSeparators(BrushFileName).mid(ModelFolder.length());
            #ifdef Q_OS_WIN
            BrushFileName=BrushFileName.replace("\\","/");  // Force Linux mode separator
            #endif
        } else {

            if (ReplaceList) {
                BrushFileName=ReplaceList->GetDestinationFileName(BrushFileName);
            } else {
                if ((PathForRelativPath!="")&&(BrushFileName!="")) {
                    if (ForceAbsolutPath)
                        BrushFileName=QDir::cleanPath(QDir(QFileInfo(PathForRelativPath).absolutePath()).absoluteFilePath(BrushFileName));
                    else
                        BrushFileName=QDir::cleanPath(QDir(QFileInfo(PathForRelativPath).absolutePath()).relativeFilePath(BrushFileName));
                }
            }
        }
    }
    // Attribut of the object
    Element.setAttribute("ObjectType",ObjectType);
    Element.setAttribute("TypeComposition",TypeComposition);
    Element.setAttribute("BrushType",BrushType);                                                            // 0=No brush !, 1=Solid one color, 2=Pattern, 3=Gradient 2 colors, 4=Gradient 3 colors

    switch (BrushType) {
        case BRUSHTYPE_PATTERN      :
            Element.setAttribute("PatternType",PatternType);                                                // Type of pattern when BrushType is Pattern (Qt::BrushStyle standard)
            Element.setAttribute("ColorD",ColorD);                                                          // First Color
            break;
        case BRUSHTYPE_GRADIENT3    :
            Element.setAttribute("ColorIntermed",ColorIntermed);                                            // Intermediate Color
            Element.setAttribute("Intermediate",Intermediate);                                              // Intermediate position of 2nd color (in %)
        case BRUSHTYPE_GRADIENT2    :
            Element.setAttribute("ColorF",ColorF);                                                          // Last Color
            Element.setAttribute("GradientOrientation",GradientOrientation);                                // 0=Radial, 1=Up-Left, 2=Up, 3=Up-right, 4=Right, 5=bt-right, 6=bottom, 7=bt-Left, 8=Left
        case BRUSHTYPE_SOLID        :
            Element.setAttribute("ColorD",ColorD);                                                          // First Color
            break;
        case BRUSHTYPE_IMAGELIBRARY :
            Element.setAttribute("BrushImage",BrushImage);                                                  // Image name if image from library
            break;
        case BRUSHTYPE_IMAGEDISK :
            if (MediaObject) switch (MediaObject->ObjectType) {
                case OBJECTTYPE_VIDEOFILE:
                    if (TypeComposition!=COMPOSITIONTYPE_SHOT) {                                                            // Global definition only !
                        Element.setAttribute("BrushFileName",BrushFileName);                                                // File name if image from disk
                        Element.setAttribute("StartPos",((cVideoFile*)MediaObject)->StartPos.toString("HH:mm:ss.zzz"));     // Start position (video only)
                        Element.setAttribute("EndPos",((cVideoFile*)MediaObject)->EndPos.toString("HH:mm:ss.zzz"));         // End position (video only)
                    } else AddShotPartToXML(&Element);
                    break;
                case OBJECTTYPE_IMAGEFILE:
                case OBJECTTYPE_IMAGEVECTOR:
                    if (TypeComposition!=COMPOSITIONTYPE_SHOT) {                                                            // Global definition only !
                        Element.setAttribute("BrushFileName",BrushFileName);                                                // File name if image from disk
                        Element.setAttribute("ImageOrientation",((cImageFile*)MediaObject)->ImageOrientation);
                    }
                    break;
                case OBJECTTYPE_IMAGECLIPBOARD:
                    if (TypeComposition!=COMPOSITIONTYPE_SHOT) MediaObject->SaveToXML(&Element,"",PathForRelativPath,ForceAbsolutPath,ReplaceList,ResKeyList,IsModel);
                    break;
                case OBJECTTYPE_GMAPSMAP:
                    if (TypeComposition!=COMPOSITIONTYPE_SHOT) MediaObject->SaveToXML(&Element,"",PathForRelativPath,ForceAbsolutPath,ReplaceList,ResKeyList,IsModel);
                        else AddShotPartToXML(&Element);
                    break;
                default: break;
            }
            break;
    }

    // Image correction part
    QDomElement CorrectElement=DomDocument.createElement("ImageCorrection");
    CorrectElement.setAttribute("X",                    X);                 // X position (in %) relative to up/left corner
    CorrectElement.setAttribute("Y",                    Y);                 // Y position (in %) relative to up/left corner
    CorrectElement.setAttribute("ZoomFactor",           ZoomFactor);        // Zoom factor (in %)
    if (ImageRotation!=DEFAULT_IMAGEROTATION)       CorrectElement.setAttribute("ImageRotation",        ImageRotation);     // Image rotation (in °)
    if (Brightness!=DEFAULT_BRIGHTNESS)             CorrectElement.setAttribute("Brightness",           Brightness);
    if (Contrast!=DEFAULT_CONTRAST)                 CorrectElement.setAttribute("Contrast",             Contrast);
    if (Gamma!=DEFAULT_GAMMA)                       CorrectElement.setAttribute("Gamma",                Gamma);
    if (Red!=DEFAULT_RED)                           CorrectElement.setAttribute("Red",                  Red);
    if (Green!=DEFAULT_GREEN)                       CorrectElement.setAttribute("Green",                Green);
    if (Blue!=DEFAULT_BLUE)                         CorrectElement.setAttribute("Blue",                 Blue);
    if (LockGeometry!=DEFAULT_LOCKGEOMETRY)         CorrectElement.setAttribute("LockGeometry",         LockGeometry?1:0);
    if (AspectRatio!=DEFAULT_ASPECTRATIO)           CorrectElement.setAttribute("AspectRatio",          AspectRatio);
    if (FullFilling!=DEFAULT_FULLFILLING)           CorrectElement.setAttribute("FullFilling",          FullFilling?1:0);
    if (TypeBlurSharpen!=DEFAULT_TYPEBLURSHARPEN)   CorrectElement.setAttribute("TypeBlurSharpen",      TypeBlurSharpen);
    if (GaussBlurSharpenSigma!=DEFAULT_GBSSIGMA)    CorrectElement.setAttribute("GaussBlurSharpenSigma",GaussBlurSharpenSigma);
    if (BlurSharpenRadius!=DEFAULT_GBSRADIUS)       CorrectElement.setAttribute("BlurSharpenRadius",    BlurSharpenRadius);
    if (QuickBlurSharpenSigma!=DEFAULT_QBSSIGMA)    CorrectElement.setAttribute("QuickBlurSharpenSigma",QuickBlurSharpenSigma);
    if (Desat!=DEFAULT_DESAT)                       CorrectElement.setAttribute("Desat",                Desat);
    if (Swirl!=DEFAULT_SWIRL)                       CorrectElement.setAttribute("Swirl",                Swirl);
    if (Implode!=DEFAULT_IMPLODE)                   CorrectElement.setAttribute("Implode",              Implode);
    if (OnOffFilter!=DEFAULT_ONOFFFILTER)           CorrectElement.setAttribute("OnOffFilter",          OnOffFilter);
    if (ImageSpeedWave!=SPEEDWAVE_PROJECTDEFAULT)   CorrectElement.setAttribute("ImageSpeedWave",       ImageSpeedWave);
    Element.appendChild(CorrectElement);

    ParentElement->appendChild(Element);
}

//====================================================================================================================

bool cBrushDefinition::LoadFromXML(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,QStringList *AliasList,bool *ModifyFlag,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes) {
    QString     Extension,BrushFileName;
    bool        IsValide  =false;
    OBJECTTYPE  ObjectType=OBJECTTYPE_UNMANAGED;

    InitDefaultValues();

    if (ModifyFlag) *ModifyFlag=false;
    if ((ParentElement->elementsByTagName(ElementName).length()>0)&&(ParentElement->elementsByTagName(ElementName).item(0).isElement()==true)) {
        QDomElement Element=ParentElement->elementsByTagName(ElementName).item(0).toElement();

        // Attribut of the object
        if (Element.hasAttribute("ObjectType")) ObjectType=(OBJECTTYPE)Element.attribute("ObjectType").toInt();
        TypeComposition =Element.attribute("TypeComposition").toInt();
        BrushType       =Element.attribute("BrushType").toInt();                         // 0=No brush !, 1=Solid one color, 2=Pattern, 3=Gradient 2 colors, 4=Gradient 3 colors
        switch (BrushType) {
            case BRUSHTYPE_PATTERN      :
                PatternType         =Element.attribute("PatternType").toInt();          // Type of pattern when BrushType is Pattern (Qt::BrushStyle standard)
                ColorD              =Element.attribute("ColorD");                       // First Color
                break;
            case BRUSHTYPE_GRADIENT3    :
                ColorIntermed       =Element.attribute("ColorIntermed");                // Intermediate Color
                Intermediate        =GetDoubleValue(Element,"Intermediate");            // Intermediate position of 2nd color (in %)
            case BRUSHTYPE_GRADIENT2    :
                ColorF              =Element.attribute("ColorF");                       // Last Color
                GradientOrientation =Element.attribute("GradientOrientation").toInt();  // 0=Radial, 1=Up-Left, 2=Up, 3=Up-right, 4=Right, 5=bt-right, 6=bottom, 7=bt-Left, 8=Left
            case BRUSHTYPE_SOLID        :
                ColorD=Element.attribute("ColorD");                                    // First Color
                break;
            case BRUSHTYPE_IMAGELIBRARY :
                BrushImage=Element.attribute("BrushImage");  // Image name if image from library
                break;
            case BRUSHTYPE_IMAGEDISK :
                if (TypeComposition!=COMPOSITIONTYPE_SHOT) {
                    // File name if image from disk
                    BrushFileName=HTMLConverter.ToPlainText(Element.attribute("BrushFileName"));
                    if ((!BrushFileName.isEmpty())&&(!BrushFileName.startsWith(":/img/"))) {
                        BrushFileName=BrushFileName.replace("<%CLIPARTFOLDER%>",CAF);   BrushFileName=BrushFileName.replace("%CLIPARTFOLDER%",CAF);
                        BrushFileName=BrushFileName.replace("<%MODELFOLDER%>",MFD);     BrushFileName=BrushFileName.replace("%MODELFOLDER%",MFD);
                        if ((PathForRelativPath!="")&&(BrushFileName!="")) BrushFileName=QDir::cleanPath(QDir(PathForRelativPath).absoluteFilePath(BrushFileName));
                        // Fixes a previous bug in relative path
                        #ifndef Q_OS_WIN
                        if (BrushFileName.startsWith("/..")) {
                            if (BrushFileName.contains("/home/")) BrushFileName=BrushFileName.mid(BrushFileName.indexOf("/home/"));
                            if (BrushFileName.contains("/mnt/"))  BrushFileName=BrushFileName.mid(BrushFileName.indexOf("/mnt/"));
                        }
                        #endif
                        Extension=QFileInfo(BrushFileName).suffix().toLower();
                        if (ObjectType==OBJECTTYPE_UNMANAGED) {
                            if      (ApplicationConfig->AllowVideoExtension.contains(Extension.toLower()))       ObjectType=OBJECTTYPE_VIDEOFILE;
                            else if (ApplicationConfig->AllowImageExtension.contains(Extension.toLower()))       ObjectType=OBJECTTYPE_IMAGEFILE;
                            else if (ApplicationConfig->AllowImageVectorExtension.contains(Extension.toLower())) ObjectType=OBJECTTYPE_IMAGEVECTOR;
                        }
                    }
                    if (MediaObject) {
                        delete MediaObject;
                        MediaObject=NULL;
                    }
                    switch (ObjectType) {
                        case OBJECTTYPE_IMAGEFILE:
                            MediaObject=new cImageFile(ApplicationConfig);
                            ((cImageFile *)MediaObject)->ImageOrientation=Element.attribute("ImageOrientation").toInt();
                            IsValide=MediaObject->GetInformationFromFile(BrushFileName,AliasList,ModifyFlag,-1) && MediaObject->GetFullInformationFromFile();
                            break;
                        case OBJECTTYPE_IMAGEVECTOR:
                            MediaObject=new cImageFile(ApplicationConfig);
                            ((cImageFile *)MediaObject)->ImageOrientation=Element.attribute("ImageOrientation").toInt();
                            IsValide=MediaObject->GetInformationFromFile(BrushFileName,AliasList,ModifyFlag,-1) && MediaObject->GetFullInformationFromFile();
                            break;
                        case OBJECTTYPE_IMAGECLIPBOARD:
                            MediaObject=new cImageClipboard(ApplicationConfig);
                            MediaObject->LoadFromXML(&Element,"",PathForRelativPath,AliasList,ModifyFlag,ResKeyList,DuplicateRes);
                            IsValide=MediaObject->GetInformationFromFile("",NULL,NULL,-1);
                            break;
                        case OBJECTTYPE_VIDEOFILE:
                            MediaObject=new cVideoFile(ApplicationConfig);
                            IsValide=MediaObject->GetInformationFromFile(BrushFileName,AliasList,ModifyFlag,-1) && MediaObject->GetFullInformationFromFile();
                            if (IsValide) {
                                ((cVideoFile*)MediaObject)->StartPos =QTime().fromString(Element.attribute("StartPos"));    // Start position (video only)
                                ((cVideoFile*)MediaObject)->EndPos   =QTime().fromString(Element.attribute("EndPos"));      // End position (video only)
                            }
                            break;
                        case OBJECTTYPE_GMAPSMAP:
                            MediaObject=new cGMapsMap(ApplicationConfig);
                            MediaObject->LoadFromXML(&Element,"",PathForRelativPath,AliasList,ModifyFlag,ResKeyList,DuplicateRes);
                            IsValide=MediaObject->GetInformationFromFile("",NULL,NULL,-1);
                            break;
                        case OBJECTTYPE_UNMANAGED:
                        default:
                            // For compatibility with version prior to 20131127
                            for (int i=0;i<ApplicationConfig->AllowImageExtension.count();i++) if (ApplicationConfig->AllowImageExtension[i]==Extension) {
                                MediaObject=new cImageFile(ApplicationConfig);
                                ((cImageFile *)MediaObject)->ImageOrientation=Element.attribute("ImageOrientation").toInt();
                                IsValide=MediaObject->GetInformationFromFile(BrushFileName,AliasList,ModifyFlag,-1) && MediaObject->GetFullInformationFromFile();
                                break;
                            }
                            if (MediaObject==NULL) for (int i=0;i<ApplicationConfig->AllowImageVectorExtension.count();i++) if (ApplicationConfig->AllowImageVectorExtension[i]==Extension) {
                                MediaObject=new cImageFile(ApplicationConfig);
                                ((cImageFile *)MediaObject)->ImageOrientation=Element.attribute("ImageOrientation").toInt();
                                IsValide=MediaObject->GetInformationFromFile(BrushFileName,AliasList,ModifyFlag,-1) && MediaObject->GetFullInformationFromFile();
                                break;
                            }
                            if (MediaObject==NULL) for (int i=0;i<ApplicationConfig->AllowVideoExtension.count();i++) if (ApplicationConfig->AllowVideoExtension[i]==Extension) {
                                MediaObject=new cVideoFile(ApplicationConfig);
                                IsValide=MediaObject->GetInformationFromFile(BrushFileName,AliasList,ModifyFlag,-1) && MediaObject->GetFullInformationFromFile();
                                break;
                            }
                            break;
                    }
                    if ((!IsValide)&&(MediaObject)) {
                        delete MediaObject;
                        MediaObject=NULL;
                    }
                }
                if ((MediaObject)&&(TypeComposition==COMPOSITIONTYPE_SHOT)) {
                    switch (MediaObject->ObjectType) {
                        case OBJECTTYPE_VIDEOFILE:
                            SoundVolume=GetDoubleValue(Element,"SoundVolume");                                          // Volume of soundtrack (for video only)
                            Deinterlace=Element.attribute("Deinterlace")=="1";                                          // Add a YADIF filter to deinterlace video (on/off) (for video only)
                            break;
                        case OBJECTTYPE_IMAGEFILE:
                        case OBJECTTYPE_IMAGEVECTOR:
                           // Old Image transformation (for compatibility with version prio to 1.5)
                            if ((Element.elementsByTagName("ImageTransformation").length()>0)&&(Element.elementsByTagName("ImageTransformation").item(0).isElement()==true)) {
                               QDomElement SubElement=Element.elementsByTagName("ImageTransformation").item(0).toElement();
                               if (SubElement.hasAttribute("BlurSigma"))   GaussBlurSharpenSigma=GetDoubleValue(SubElement,"BlurSigma");
                               if (SubElement.hasAttribute("BlurRadius"))  BlurSharpenRadius    =GetDoubleValue(SubElement,"BlurRadius");
                               if (SubElement.hasAttribute("OnOffFilter")) OnOffFilter          =SubElement.attribute("OnOffFilter").toInt();
                               if (GaussBlurSharpenSigma!=0)               TypeBlurSharpen      =1;
                            }
                            break;
                        default: break;
                    }
                }
                if ((MediaObject)&&(MediaObject->ObjectType==OBJECTTYPE_GMAPSMAP)) {
                    // Load marker settings
                    int MarkerNum=0;
                    Markers.clear();
                    while ((Element.elementsByTagName(QString("Marker_%1").arg(MarkerNum)).length()>0)&&(Element.elementsByTagName(QString("Marker_%1").arg(MarkerNum)).item(0).isElement()==true)) {
                        QDomElement SubElement=Element.elementsByTagName(QString("Marker_%1").arg(MarkerNum)).item(0).toElement();
                        sMarker Marker;
                        if (SubElement.hasAttribute("TextColor"))   Marker.TextColor=SubElement.attribute("TextColor");
                        if (SubElement.hasAttribute("MarkerColor")) Marker.MarkerColor=SubElement.attribute("MarkerColor");
                        if (SubElement.hasAttribute("LineColor"))   Marker.LineColor=SubElement.attribute("LineColor");
                        if (SubElement.hasAttribute("Visibility"))  Marker.Visibility =(sMarker::MARKERVISIBILITY)SubElement.attribute("Visibility").toInt();
                        Markers.append(Marker);
                        MarkerNum++;
                    }
                }
                break;
        }

        // Image correction part
        if ((Element.elementsByTagName("ImageCorrection").length()>0)&&(Element.elementsByTagName("ImageCorrection").item(0).isElement()==true)) {
            QDomElement CorrectElement=Element.elementsByTagName("ImageCorrection").item(0).toElement();

            if (CorrectElement.hasAttribute("X"))                       X                       =GetDoubleValue(CorrectElement,"X");                      // X position (in %) relative to up/left corner
            if (CorrectElement.hasAttribute("Y"))                       Y                       =GetDoubleValue(CorrectElement,"Y");                      // Y position (in %) relative to up/left corner
            if (CorrectElement.hasAttribute("ZoomFactor"))              ZoomFactor              =GetDoubleValue(CorrectElement,"ZoomFactor");             // Zoom factor (in %)
            if (CorrectElement.hasAttribute("ImageRotation"))           ImageRotation           =GetDoubleValue(CorrectElement,"ImageRotation");          // Image rotation (in °)
            if (CorrectElement.hasAttribute("Brightness"))              Brightness              =CorrectElement.attribute("Brightness").toInt();
            if (CorrectElement.hasAttribute("Contrast"))                Contrast                =CorrectElement.attribute("Contrast").toInt();
            if (CorrectElement.hasAttribute("Gamma"))                   Gamma                   =GetDoubleValue(CorrectElement,"Gamma");
            if (CorrectElement.hasAttribute("Red"))                     Red                     =CorrectElement.attribute("Red").toInt();
            if (CorrectElement.hasAttribute("Green"))                   Green                   =CorrectElement.attribute("Green").toInt();
            if (CorrectElement.hasAttribute("Blue"))                    Blue                    =CorrectElement.attribute("Blue").toInt();
            if (CorrectElement.hasAttribute("AspectRatio"))             AspectRatio             =GetDoubleValue(CorrectElement,"AspectRatio");
            if (CorrectElement.hasAttribute("FullFilling"))             FullFilling             =CorrectElement.attribute("FullFilling").toInt()==1;
            if (CorrectElement.hasAttribute("TypeBlurSharpen"))         TypeBlurSharpen         =GetDoubleValue(CorrectElement,"TypeBlurSharpen");
            if (CorrectElement.hasAttribute("GaussBlurSharpenSigma"))   GaussBlurSharpenSigma   =GetDoubleValue(CorrectElement,"GaussBlurSharpenSigma");
            if (CorrectElement.hasAttribute("BlurSharpenRadius"))       BlurSharpenRadius       =GetDoubleValue(CorrectElement,"BlurSharpenRadius");
            if (CorrectElement.hasAttribute("QuickBlurSharpenSigma"))   QuickBlurSharpenSigma   =CorrectElement.attribute("QuickBlurSharpenSigma").toInt();
            if (CorrectElement.hasAttribute("Desat"))                   Desat                   =GetDoubleValue(CorrectElement,"Desat");
            if (CorrectElement.hasAttribute("Swirl"))                   Swirl                   =GetDoubleValue(CorrectElement,"Swirl");
            if (CorrectElement.hasAttribute("Implode"))                 Implode                 =GetDoubleValue(CorrectElement,"Implode");
            if (CorrectElement.hasAttribute("OnOffFilter"))             OnOffFilter             =CorrectElement.attribute("OnOffFilter").toInt();
            if (CorrectElement.hasAttribute("ImageSpeedWave"))          ImageSpeedWave          =CorrectElement.attribute("ImageSpeedWave").toInt();

            // If old ImageGeometry value in project file then compute LockGeometry
            if (CorrectElement.hasAttribute("ImageGeometry"))           LockGeometry=(CorrectElement.attribute("ImageGeometry").toInt()!=2);
                else if (CorrectElement.hasAttribute("LockGeometry"))   LockGeometry=(CorrectElement.attribute("LockGeometry").toInt()==1); // Else load saved value

        }

        return (BrushType==BRUSHTYPE_IMAGEDISK)?(MediaObject!=NULL):true;
    }
    return false;
}

//====================================================================================================================

int cBrushDefinition::GetImageType() {
    int ImageType=IMAGETYPE_UNKNOWN;
    if ((MediaObject)&&(MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)) {
        ImageType=IMAGETYPE_VIDEOLANDSCAPE;
        if ((qreal(MediaObject->ImageWidth)/qreal(MediaObject->ImageHeight))<1) ImageType++;
    } else if (MediaObject) {
        if ((MediaObject->ImageWidth>1080)&&(MediaObject->ImageHeight>1080)) ImageType=IMAGETYPE_PHOTOLANDSCAPE; else ImageType=IMAGETYPE_CLIPARTLANDSCAPE;
        if ((qreal(MediaObject->ImageWidth)/qreal(MediaObject->ImageHeight))<1) ImageType++;
    }
    return ImageType;
}

//====================================================================================================================

void cBrushDefinition::ApplyMaskToImageToWorkspace(QImage *SrcImage,QRectF CurSelRect,int BackgroundForm,int AutoFramingStyle) {
    // Create shape mask
    int RowHeight=SrcImage->width();
    QImage Image(RowHeight,RowHeight,QImage::Format_ARGB32_Premultiplied);
    QPainter PainterImg;
    PainterImg.begin(&Image);
    PainterImg.setPen(Qt::NoPen);
    PainterImg.fillRect(QRect(0,0,RowHeight,RowHeight),QBrush(0x555555));
    PainterImg.setBrush(Qt::transparent);
    PainterImg.setCompositionMode(QPainter::CompositionMode_Source);
    QList<QPolygonF> List=ComputePolygon(BackgroundForm,CurSelRect.left(),CurSelRect.top(),CurSelRect.width(),CurSelRect.height());
    for (int i=0;i<List.count();i++) PainterImg.drawPolygon(List.at(i));
    PainterImg.setCompositionMode(QPainter::CompositionMode_SourceOver);
    PainterImg.end();

    // Apply mask to workspace image
    PainterImg.begin(SrcImage);
    PainterImg.setOpacity(0.75);
    PainterImg.drawImage(0,0,Image);
    PainterImg.setOpacity(1);
    PainterImg.end();

    // Add Icon (if wanted)
    if ((AutoFramingStyle>=0)&&(AutoFramingStyle<NBR_AUTOFRAMING)) {
        QImage IconGeoImage;
        switch (AUTOFRAMINGDEF[AutoFramingStyle].GeometryType) {
            case AUTOFRAMING_GEOMETRY_CUSTOM :  IconGeoImage=AutoFramingStyle==AUTOFRAMING_CUSTOMUNLOCK?QImage(AUTOFRAMING_ICON_GEOMETRY_UNLOCKED):
                                                                                                        QImage(AUTOFRAMING_ICON_GEOMETRY_LOCKED);       break;
            case AUTOFRAMING_GEOMETRY_PROJECT : IconGeoImage=QImage(AUTOFRAMING_ICON_GEOMETRY_PROJECT);                                                 break;
            case AUTOFRAMING_GEOMETRY_IMAGE :   IconGeoImage=QImage(AUTOFRAMING_ICON_GEOMETRY_IMAGE);                                                   break;
        }
        QPainter P;
        P.begin(SrcImage);
        P.drawImage(SrcImage->width()-IconGeoImage.width()-2,SrcImage->height()-IconGeoImage.height()-2,IconGeoImage);
        P.end();
    }
}

void cBrushDefinition::ApplyMaskToImageToWorkspace(QImage *SrcImage,int AutoFramingStyle,int BackgroundForm,int WantedSize,qreal maxw,qreal maxh,qreal minw,qreal minh,qreal X,qreal Y,qreal ZoomFactor,qreal AspectRatio,qreal ProjectGeometry) {
    QRectF CurSelRect;
    switch (AutoFramingStyle) {
        case AUTOFRAMING_CUSTOMUNLOCK   :   CurSelRect=QRectF(WantedSize*X,WantedSize*Y,WantedSize*ZoomFactor-1,WantedSize*ZoomFactor*AspectRatio-1);                   break;
        case AUTOFRAMING_CUSTOMLOCK     :   CurSelRect=QRectF(WantedSize*X,WantedSize*Y,WantedSize*ZoomFactor-1,WantedSize*ZoomFactor*AspectRatio-1);                   break;
        case AUTOFRAMING_CUSTOMIMGLOCK  :   CurSelRect=QRectF(WantedSize*X,WantedSize*Y,WantedSize*ZoomFactor-1,WantedSize*ZoomFactor*(maxh/maxw)-1);                   break;
        case AUTOFRAMING_CUSTOMPRJLOCK  :   CurSelRect=QRectF(WantedSize*X,WantedSize*Y,WantedSize*ZoomFactor-1,WantedSize*ZoomFactor*ProjectGeometry-1);               break;
        case AUTOFRAMING_FULLMAX        :   CurSelRect=QRectF((WantedSize-maxw)/2,(WantedSize-maxh)/2,maxw-1,maxh-1);                                                   break;
        case AUTOFRAMING_FULLMIN        :   CurSelRect=QRectF((WantedSize-minw)/2,(WantedSize-minh)/2,minw-1,minh-1);                                                   break;
        case AUTOFRAMING_HEIGHTLEFTMAX  :   CurSelRect=QRectF((WantedSize-maxw)/2,(WantedSize-maxh)/2,maxh/ProjectGeometry-1,maxh-1);                                   break;
        case AUTOFRAMING_HEIGHTLEFTMIN  :   CurSelRect=QRectF((WantedSize-minw)/2,(WantedSize-minh)/2,minh/ProjectGeometry-1,minh-1);                                   break;
        case AUTOFRAMING_HEIGHTMIDLEMAX :   CurSelRect=QRectF((WantedSize-(maxh/ProjectGeometry))/2,(WantedSize-maxh)/2,maxh/ProjectGeometry-1,maxh-1);                 break;
        case AUTOFRAMING_HEIGHTMIDLEMIN :   CurSelRect=QRectF((WantedSize-(minh/ProjectGeometry))/2,(WantedSize-minh)/2,minh/ProjectGeometry-1,minh-1);                 break;
        case AUTOFRAMING_HEIGHTRIGHTMAX :   CurSelRect=QRectF(WantedSize-(maxh/ProjectGeometry)-(WantedSize-maxw)/2,(WantedSize-maxh)/2,maxh/ProjectGeometry-1,maxh-1); break;
        case AUTOFRAMING_HEIGHTRIGHTMIN :   CurSelRect=QRectF(WantedSize-(minh/ProjectGeometry)-(WantedSize-minw)/2,(WantedSize-minh)/2,minh/ProjectGeometry-1,minh-1); break;
        case AUTOFRAMING_WIDTHTOPMAX    :   CurSelRect=QRectF((WantedSize-maxw)/2,(WantedSize-maxh)/2,maxw-1,maxw*ProjectGeometry-1);                                   break;
        case AUTOFRAMING_WIDTHTOPMIN    :   CurSelRect=QRectF((WantedSize-minw)/2,(WantedSize-minh)/2,minw-1,minw*ProjectGeometry-1);                                   break;
        case AUTOFRAMING_WIDTHMIDLEMAX  :   CurSelRect=QRectF((WantedSize-maxw)/2,(WantedSize-(maxw*ProjectGeometry))/2,maxw-1,maxw*ProjectGeometry-1);                 break;
        case AUTOFRAMING_WIDTHMIDLEMIN  :   CurSelRect=QRectF((WantedSize-minw)/2,(WantedSize-(minw*ProjectGeometry))/2,minw-1,minw*ProjectGeometry-1);                 break;
        case AUTOFRAMING_WIDTHBOTTOMMAX :   CurSelRect=QRectF((WantedSize-maxw)/2,WantedSize-(maxw*ProjectGeometry)-(WantedSize-maxh)/2,maxw-1,maxw*ProjectGeometry-1); break;
        case AUTOFRAMING_WIDTHBOTTOMMIN :   CurSelRect=QRectF((WantedSize-minw)/2,WantedSize-(minw*ProjectGeometry)-(WantedSize-minh)/2,minw-1,minw*ProjectGeometry-1); break;
        default : return;
    }
    ApplyMaskToImageToWorkspace(SrcImage,CurSelRect,BackgroundForm,AutoFramingStyle);
}

int cBrushDefinition::GetCurrentFramingStyle(qreal ProjectGeometry) {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return -1;

    int aX=X*dmax;
    int aY=Y*dmax;
    int aW=dmax*ZoomFactor;
    int aH=dmax*ZoomFactor*AspectRatio;

    if (!LockGeometry)                                                                                                                                                      return AUTOFRAMING_CUSTOMUNLOCK;
    if      ((aX==int((dmax-maxw)/2))                            &&(aY==int((dmax-maxh)/2))                               &&(aW==int(maxw))                &&(aH==int(maxh)))                   return AUTOFRAMING_FULLMAX;
    else if ((aX==int((dmax-minw)/2))                            &&(aY==int((dmax-minh)/2))                               &&(aW==int(minw))                &&(aH==int(minh)))                   return AUTOFRAMING_FULLMIN;
    else if ((aX==int((dmax-maxw)/2))                            &&(aY==int((dmax-maxh)/2))                               &&(aW==int(maxh/ProjectGeometry))&&(aH==int(maxh)))                   return AUTOFRAMING_HEIGHTLEFTMAX;
    else if ((aX==int((dmax-minw)/2))                            &&(aY==int((dmax-minh)/2))                               &&(aW==int(minh/ProjectGeometry))&&(aH==int(minh)))                   return AUTOFRAMING_HEIGHTLEFTMIN;
    else if ((aX==int((dmax-(maxh/ProjectGeometry))/2))          &&(aY==int((dmax-maxh)/2))                               &&(aW==int(maxh/ProjectGeometry))&&(aH==int(maxh)))                   return AUTOFRAMING_HEIGHTMIDLEMAX;
    else if ((aX==int((dmax-(minh/ProjectGeometry))/2))          &&(aY==int((dmax-minh)/2))                               &&(aW==int(minh/ProjectGeometry))&&(aH==int(minh)))                   return AUTOFRAMING_HEIGHTMIDLEMIN;
    else if ((aX==int(dmax-(maxh/ProjectGeometry)-(dmax-maxw)/2))&&(aY==int((dmax-maxh)/2))                               &&(aW==int(maxh/ProjectGeometry))&&(aH==int(maxh)))                   return AUTOFRAMING_HEIGHTRIGHTMAX;
    else if ((aX==int(dmax-(minh/ProjectGeometry)-(dmax-minw)/2))&&(aY==int((dmax-minh)/2))                               &&(aW==int(minh/ProjectGeometry))&&(aH==int(minh)))                   return AUTOFRAMING_HEIGHTRIGHTMIN;
    else if ((aX==int((dmax-maxw)/2))                            &&(aY==int((dmax-maxh)/2))                               &&(aW==int(maxw))                &&(aH==int(maxw*ProjectGeometry)))   return AUTOFRAMING_WIDTHTOPMAX;
    else if ((aX==int((dmax-minw)/2))                            &&(aY==int((dmax-minh)/2))                               &&(aW==int(minw))                &&(aH==int(minw*ProjectGeometry)))   return AUTOFRAMING_WIDTHTOPMIN;
    else if ((aX==int((dmax-maxw)/2))                            &&(aY==int((dmax-(maxw*ProjectGeometry))/2))             &&(aW==int(maxw))                &&(aH==int(maxw*ProjectGeometry)))   return AUTOFRAMING_WIDTHMIDLEMAX;
    else if ((aX==int((dmax-minw)/2))                            &&(aY==int((dmax-(minw*ProjectGeometry))/2))             &&(aW==int(minw))                &&(aH==int(minw*ProjectGeometry)))   return AUTOFRAMING_WIDTHMIDLEMIN;
    else if ((aX==int((dmax-maxw)/2))                            &&(aY==int(dmax-(maxw*ProjectGeometry)-(dmax-maxh)/2))   &&(aW==int(maxw))                &&(aH==int(maxw*ProjectGeometry)))   return AUTOFRAMING_WIDTHBOTTOMMAX;
    else if ((aX==int((dmax-minw)/2))                            &&(aY==int(dmax-(minw*ProjectGeometry)-(dmax-minh)/2))   &&(aW==int(minw))                &&(aH==int(minw*ProjectGeometry)))   return AUTOFRAMING_WIDTHBOTTOMMIN;
    else if (AspectRatio==(maxh/maxw))                                                                                                                                                          return AUTOFRAMING_CUSTOMIMGLOCK;
    else if (AspectRatio==ProjectGeometry)                                                                                                                                                      return AUTOFRAMING_CUSTOMPRJLOCK;
    else                                                                                                                                                                                        return AUTOFRAMING_CUSTOMLOCK;
}

//====================================================================================================================

QImage *cBrushDefinition::ImageToWorkspace(QImage *SrcImage,int WantedSize,qreal &maxw,qreal &maxh,qreal &minw,qreal &minh,qreal &x1,qreal &x2,qreal &x3,qreal &x4,qreal &y1,qreal &y2,qreal &y3,qreal &y4) {
    QImage  *RetImage   =NULL;
    QImage  *SourceImage=NULL;
    qreal   Hyp         =sqrt(qreal(SrcImage->width())*qreal(SrcImage->width())+qreal(SrcImage->height())*qreal(SrcImage->height()));   // Calc hypothenuse of the image to define full canvas
    qreal   DstX,DstY,DstW,DstH;

    // calc rectangle before rotation
    qreal  rx=qreal(SrcImage->width())*(WantedSize/Hyp)/2;
    qreal  ry=qreal(SrcImage->height())*(WantedSize/Hyp)/2;

    //RotatePoint.X = ((Pt.X - Centre.X) * Cos(AngCrad) - (Pt.Y - Centre.Y) * Sin(AngCrad) + Centre.X)
    //RotatePoint.Y = ((Pt.X - Centre.X) * Sin(AngCrad) + (Pt.Y - Centre.Y) * Cos(AngCrad) + Centre.Y)

    qreal  xtab[4],ytab[4];
    xtab[0]=-rx*cos((ImageRotation)*PI/180)+ry*sin(ImageRotation*PI/180)+WantedSize/2;
    xtab[1]=+rx*cos((ImageRotation)*PI/180)+ry*sin(ImageRotation*PI/180)+WantedSize/2;
    xtab[2]=-rx*cos((ImageRotation)*PI/180)-ry*sin(ImageRotation*PI/180)+WantedSize/2;
    xtab[3]=+rx*cos((ImageRotation)*PI/180)-ry*sin(ImageRotation*PI/180)+WantedSize/2;
    ytab[0]=-rx*sin((ImageRotation)*PI/180)+ry*cos(ImageRotation*PI/180)+WantedSize/2;
    ytab[1]=+rx*sin((ImageRotation)*PI/180)+ry*cos(ImageRotation*PI/180)+WantedSize/2;
    ytab[2]=-rx*sin((ImageRotation)*PI/180)-ry*cos(ImageRotation*PI/180)+WantedSize/2;
    ytab[3]=+rx*sin((ImageRotation)*PI/180)-ry*cos(ImageRotation*PI/180)+WantedSize/2;

    // Sort xtab and ytab
    for (int i=0;i<4;i++) for (int j=0;j<3;j++) {
        if (xtab[j]>xtab[j+1]) {    qreal a=xtab[j+1];  xtab[j+1]=xtab[j];  xtab[j]=a;  }
        if (ytab[j]>ytab[j+1]) {    qreal a=ytab[j+1];  ytab[j+1]=ytab[j];  ytab[j]=a;  }
    }
    maxw=xtab[3]-xtab[0];   minw=xtab[2]-xtab[1];
    maxh=ytab[3]-ytab[0];   minh=ytab[2]-ytab[1];

    // Rotate image if needed and create a SourceImage
    if (ImageRotation!=0) {
        QTransform matrix;
        matrix.rotate(ImageRotation,Qt::ZAxis);
        SourceImage=new QImage(SrcImage->transformed(matrix,Qt::SmoothTransformation));

    // If no rotation then SourceImage=SrcImage
    } else SourceImage=SrcImage;

    // Calc coordinates of the part in the source image
    qreal  RealImageW=qreal(SourceImage->width());                  // Get real image widht
    qreal  RealImageH=qreal(SourceImage->height());                 // Get real image height

    DstX=((Hyp-RealImageW)/2)*(WantedSize/Hyp);
    DstY=((Hyp-RealImageH)/2)*(WantedSize/Hyp);
    DstW=RealImageW*(WantedSize/Hyp);
    DstH=RealImageH*(WantedSize/Hyp);

    QImage  ToUseImage=SourceImage->scaled(DstW,DstH);
    if (SourceImage!=SrcImage) delete SourceImage;

    if (ToUseImage.format()!=QImage::Format_ARGB32_Premultiplied) ToUseImage=ToUseImage.convertToFormat(QImage::Format_ARGB32_Premultiplied);

    ToUseImage=ApplyFilter(ToUseImage);

    RetImage=new QImage(WantedSize,WantedSize,QImage::Format_ARGB32_Premultiplied);
    QPainter P;
    P.begin(RetImage);
    P.fillRect(QRectF(0,0,WantedSize,WantedSize),Transparent);
    P.drawImage(QRectF(DstX,DstY,DstW,DstH),ToUseImage,QRectF(0,0,DstW,DstH));
    P.end();

    x1=xtab[0]; y1=ytab[0];
    x2=xtab[1]; y2=ytab[1];
    x3=xtab[2]; y3=ytab[2];
    x4=xtab[3]; y4=ytab[3];

    return RetImage;
}

//====================================================================================================================

bool cBrushDefinition::CalcWorkspace(qreal &dmax,qreal &maxw,qreal &maxh,qreal &minw,qreal &minh,qreal &x1,qreal &x2,qreal &x3,qreal &x4,qreal &y1,qreal &y2,qreal &y3,qreal &y4) {
    int     ImgWidth =MediaObject?MediaObject->ImageWidth:0;
    int     ImgHeight=MediaObject?MediaObject->ImageHeight:0;

    if ((MediaObject)&&(MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)&&(ImgWidth==1920)&&(ImgHeight=1088)&&(ApplicationConfig->Crop1088To1080)) ImgHeight=1080;

    if ((ImgWidth==0)||(ImgHeight==0)) return false;

    dmax=sqrt(qreal(ImgWidth)*qreal(ImgWidth)+qreal(ImgHeight)*qreal(ImgHeight));   // Calc hypothenuse of the image to define full canvas

    // calc rectangle before rotation
    qreal  rx=qreal(ImgWidth)/2;
    qreal  ry=qreal(ImgHeight)/2;

    qreal  xtab[4],ytab[4];
    xtab[0]=-rx*cos((ImageRotation)*PI/180)+ry*sin(ImageRotation*PI/180)+dmax/2;
    xtab[1]=+rx*cos((ImageRotation)*PI/180)+ry*sin(ImageRotation*PI/180)+dmax/2;
    xtab[2]=-rx*cos((ImageRotation)*PI/180)-ry*sin(ImageRotation*PI/180)+dmax/2;
    xtab[3]=+rx*cos((ImageRotation)*PI/180)-ry*sin(ImageRotation*PI/180)+dmax/2;
    ytab[0]=-rx*sin((ImageRotation)*PI/180)+ry*cos(ImageRotation*PI/180)+dmax/2;
    ytab[1]=+rx*sin((ImageRotation)*PI/180)+ry*cos(ImageRotation*PI/180)+dmax/2;
    ytab[2]=-rx*sin((ImageRotation)*PI/180)-ry*cos(ImageRotation*PI/180)+dmax/2;
    ytab[3]=+rx*sin((ImageRotation)*PI/180)-ry*cos(ImageRotation*PI/180)+dmax/2;

    // Sort xtab and ytab
    for (int i=0;i<4;i++) for (int j=0;j<3;j++) {
        if (xtab[j]>xtab[j+1]) {    qreal a=xtab[j+1];  xtab[j+1]=xtab[j];  xtab[j]=a;  }
        if (ytab[j]>ytab[j+1]) {    qreal a=ytab[j+1];  ytab[j+1]=ytab[j];  ytab[j]=a;  }
    }
    maxw=xtab[3]-xtab[0];   minw=xtab[2]-xtab[1];
    maxh=ytab[3]-ytab[0];   minh=ytab[2]-ytab[1];
    x1=xtab[0];             y1=ytab[0];
    x2=xtab[1];             y2=ytab[1];
    x3=xtab[2];             y3=ytab[2];
    x4=xtab[3];             y4=ytab[3];

    return true;
}

//====================================================================================================================

void cBrushDefinition::ApplyAutoFraming(int AutoAdjust,qreal ProjectGeometry) {
    switch (AutoAdjust) {
        case AUTOFRAMING_FULLMAX        :   s_AdjustWH();                           break;
        case AUTOFRAMING_FULLMIN        :   s_AdjustMinWH();                        break;
        case AUTOFRAMING_HEIGHTLEFTMAX  :   s_AdjustHLeft(ProjectGeometry);         break;
        case AUTOFRAMING_HEIGHTLEFTMIN  :   s_AdjustMinHLeft(ProjectGeometry);      break;
        case AUTOFRAMING_HEIGHTMIDLEMAX :   s_AdjustHMidle(ProjectGeometry);        break;
        case AUTOFRAMING_HEIGHTMIDLEMIN :   s_AdjustMinHMidle(ProjectGeometry);     break;
        case AUTOFRAMING_HEIGHTRIGHTMAX :   s_AdjustHRight(ProjectGeometry);        break;
        case AUTOFRAMING_HEIGHTRIGHTMIN :   s_AdjustMinHRight(ProjectGeometry);     break;
        case AUTOFRAMING_WIDTHTOPMAX    :   s_AdjustWTop(ProjectGeometry);          break;
        case AUTOFRAMING_WIDTHTOPMIN    :   s_AdjustMinWTop(ProjectGeometry);       break;
        case AUTOFRAMING_WIDTHMIDLEMAX  :   s_AdjustWMidle(ProjectGeometry);        break;
        case AUTOFRAMING_WIDTHMIDLEMIN  :   s_AdjustMinWMidle(ProjectGeometry);     break;
        case AUTOFRAMING_WIDTHBOTTOMMAX :   s_AdjustWBottom(ProjectGeometry);       break;
        case AUTOFRAMING_WIDTHBOTTOMMIN :   s_AdjustMinWBottom(ProjectGeometry);    break;
    }
}

void cBrushDefinition::s_AdjustWTop(qreal ProjectGeometry) {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return;

    LockGeometry=true;
    AspectRatio =ProjectGeometry;
    qreal W=maxw;
    //qreal H=W*AspectRatio;
    X=((dmax-W)/2)/dmax;
    Y=((dmax-maxh)/2)/dmax;
    ZoomFactor=W/dmax;
}

void cBrushDefinition::s_AdjustMinWTop(qreal ProjectGeometry) {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return;

    LockGeometry=true;
    AspectRatio =ProjectGeometry;
    qreal W=minw;
    //qreal H=W*AspectRatio;
    X=((dmax-W)/2)/dmax;
    Y=((dmax-minh)/2)/dmax;
    ZoomFactor=W/dmax;
}

void cBrushDefinition::s_AdjustWMidle(qreal ProjectGeometry) {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return;

    LockGeometry=true;
    AspectRatio =ProjectGeometry;
    qreal W=maxw;
    qreal H=W*AspectRatio;
    X=((dmax-W)/2)/dmax;
    Y=((dmax-H)/2)/dmax;
    ZoomFactor=W/dmax;
}

void cBrushDefinition::s_AdjustMinWMidle(qreal ProjectGeometry) {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return;

    LockGeometry=true;
    AspectRatio =ProjectGeometry;
    qreal W=minw;
    qreal H=W*AspectRatio;
    X=((dmax-W)/2)/dmax;
    Y=((dmax-H)/2)/dmax;
    ZoomFactor=W/dmax;
}

void cBrushDefinition::s_AdjustWBottom(qreal ProjectGeometry) {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return;

    LockGeometry=true;
    AspectRatio =ProjectGeometry;
    qreal W=maxw;
    qreal H=W*AspectRatio;
    X=((dmax-W)/2)/dmax;
    Y=(dmax-H-(dmax-maxh)/2)/dmax;
    ZoomFactor=W/dmax;
}

void cBrushDefinition::s_AdjustMinWBottom(qreal ProjectGeometry) {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return;

    LockGeometry=true;
    AspectRatio =ProjectGeometry;
    qreal W=minw;
    qreal H=W*AspectRatio;
    X=((dmax-W)/2)/dmax;
    Y=(dmax-H-(dmax-minh)/2)/dmax;
    ZoomFactor=W/dmax;
}

//====================================================================================================================

void cBrushDefinition::s_AdjustHLeft(qreal ProjectGeometry) {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return;

    LockGeometry=true;
    AspectRatio =ProjectGeometry;
    qreal H=maxh;
    qreal W=H/AspectRatio;
    X=((dmax-maxw)/2)/dmax;
    Y=((dmax-H)/2)/dmax;
    ZoomFactor=W/dmax;
}

void cBrushDefinition::s_AdjustMinHLeft(qreal ProjectGeometry) {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return;

    LockGeometry=true;
    AspectRatio =ProjectGeometry;
    qreal H=minh;
    qreal W=H/AspectRatio;
    X=((dmax-minw)/2)/dmax;
    Y=((dmax-H)/2)/dmax;
    ZoomFactor=W/dmax;
}

void cBrushDefinition::s_AdjustHMidle(qreal ProjectGeometry) {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return;

    LockGeometry=true;
    AspectRatio =ProjectGeometry;
    qreal H=maxh;
    qreal W=H/AspectRatio;
    X=((dmax-W)/2)/dmax;
    Y=((dmax-H)/2)/dmax;
    ZoomFactor=W/dmax;
}

void cBrushDefinition::s_AdjustMinHMidle(qreal ProjectGeometry) {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return;

    LockGeometry=true;
    AspectRatio =ProjectGeometry;
    qreal H=minh;
    qreal W=H/AspectRatio;
    X=((dmax-W)/2)/dmax;
    Y=((dmax-H)/2)/dmax;
    ZoomFactor=W/dmax;
}

void cBrushDefinition::s_AdjustHRight(qreal ProjectGeometry) {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return;

    LockGeometry=true;
    AspectRatio =ProjectGeometry;
    qreal H=maxh;
    qreal W=H/AspectRatio;
    X=(dmax-W-(dmax-maxw)/2)/dmax;
    Y=((dmax-H)/2)/dmax;
    ZoomFactor=W/dmax;
}

void cBrushDefinition::s_AdjustMinHRight(qreal ProjectGeometry) {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return;

    LockGeometry=true;
    AspectRatio =ProjectGeometry;
    qreal H=minh;
    qreal W=H/AspectRatio;
    X=(dmax-W-(dmax-minw)/2)/dmax;
    Y=((dmax-H)/2)/dmax;
    ZoomFactor=W/dmax;
}

//====================================================================================================================

void cBrushDefinition::s_AdjustWH() {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return;

    LockGeometry=true;
    AspectRatio =maxh/maxw;
    qreal W=maxw;
    qreal H=W*AspectRatio;
    X=((dmax-W)/2)/dmax;
    Y=((dmax-H)/2)/dmax;
    ZoomFactor=W/dmax;
}

void cBrushDefinition::s_AdjustMinWH() {
    qreal dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4;
    if (!CalcWorkspace(dmax,maxw,maxh,minw,minh,x1,x2,x3,x4,y1,y2,y3,y4)) return;

    LockGeometry=true;
    AspectRatio =minh/minw;
    qreal W=minw;
    qreal H=W*AspectRatio;
    X=((dmax-W)/2)/dmax;
    Y=((dmax-H)/2)/dmax;
    ZoomFactor=W/dmax;
}

//====================================================================================================================

void *cBrushDefinition::GetDiaporamaObject() {
    QObject *Object=CompositionObject;
    while ((Object)&&(Object->objectName()!="cDiaporamaObject")) Object=Object->parent();
    return Object;
}

void *cBrushDefinition::GetDiaporama() {
    cDiaporamaObject *Object=(cDiaporamaObject *)GetDiaporamaObject();
    if (Object) return Object->Parent; else return NULL;
}

//====================================================================================================================

void cBrushDefinition::GetRealLocation(void **Location,void **RealLocation) {
    *RealLocation=*Location;
    if ((*Location)&&(((cLocation *)(*Location))->LocationType==cLocation::PROJECT)) {
        cDiaporama *Diaporama=(cDiaporama *)GetDiaporama();
        if (Diaporama) *RealLocation=Diaporama->ProjectInfo->Location;
    } else if ((*Location)&&(((cLocation *)(*Location))->LocationType==cLocation::CHAPTER)) {
        cDiaporamaObject *DiaporamaObject=(cDiaporamaObject *)GetDiaporamaObject();
        if (DiaporamaObject) {
            cDiaporamaObject *ChapterObject=DiaporamaObject->Parent->GetChapterDefObject(DiaporamaObject);
            if ((ChapterObject)&&(ChapterObject->ChapterLocation)) *RealLocation=ChapterObject->ChapterLocation;
                else if (DiaporamaObject)                          *RealLocation=DiaporamaObject->Parent->ProjectInfo->Location;
        }
    }

}

//====================================================================================================================

void cBrushDefinition::DrawMarker(QPainter *Painter,QPoint Position,int MarkerNum,sMarker::MARKERVISIBILITY Visibility,QSize MarkerSize,cBrushDefinition::sMarker::MARKERSIZE Size,bool DisplayType) {
    if ((MarkerNum<0)||(MarkerNum>=Markers.count())||(Visibility==sMarker::MARKERHIDE)||(!MediaObject)||(MediaObject->ObjectType!=OBJECTTYPE_GMAPSMAP)) return;

    cLocation *Location=((cLocation *)((cGMapsMap *)MediaObject)->List[MarkerNum]);
    cLocation *RealLoc =NULL;
    GetRealLocation((void **)&Location,(void **)&RealLoc);
    if (!Location) return;

    bool    HaveIcon=(Visibility==sMarker::MARKERTABLE)||(Location->MarkerCompo==cLocation::ICONNAMEADDR)||(Location->MarkerCompo==cLocation::ICONNAME)||(Location->MarkerCompo==cLocation::ICON);
    bool    HaveName=(Visibility==sMarker::MARKERTABLE)||(Location->MarkerCompo==cLocation::ICONNAMEADDR)||(Location->MarkerCompo==cLocation::ICONNAME)||(Location->MarkerCompo==cLocation::NAME)||(Location->MarkerCompo==cLocation::NAMEADDR);
    bool    HaveAddr=(Visibility==sMarker::MARKERTABLE)||(Location->MarkerCompo==cLocation::ICONNAMEADDR)||(Location->MarkerCompo==cLocation::NAMEADDR)||(Location->MarkerCompo==cLocation::ADDR);

    cLocation::LOCATIONTYPE Type=(Location!=NULL?Location->LocationType:cLocation::FREE);
    QFont                   FontNormal,FontBold;
    QTextOption             OptionText;
    int                     IconSize,Spacer,CornerSize;
    double                  FontSize;
    QString                 Name   =RealLoc!=NULL?RealLoc->Name:QApplication::translate("cBrushDefinition","Error: Project's location no set");
    QString                 Address=RealLoc!=NULL?RealLoc->FriendlyAddress:QApplication::translate("cBrushDefinition","Error: Project's location no set");
    sMarker::MARKERSIZE     sSize=(Visibility==sMarker::MARKERTABLE?sMarker::MEDIUM:Size);

    if ((DisplayType)&&(Type==cLocation::PROJECT)) {
        Name=QApplication::translate("cBrushDefinition","Project's location (%1)").arg(Name);
        Address=QApplication::translate("cBrushDefinition","Project's location (%1)").arg(Address);
    } else if ((DisplayType)&&(Type==cLocation::CHAPTER)) {
        Name   =QApplication::translate("cBrushDefinition","Chapter's location (%1)").arg(Name);
        Address=QApplication::translate("cBrushDefinition","Chapter's location (%1)").arg(Address);
    }

    // Setup FontFactor
    switch (sSize) {
        case cBrushDefinition::sMarker::SMALL:      IconSize=24;    FontSize=90;    Spacer=3;   CornerSize=6;   break;
        case cBrushDefinition::sMarker::MEDIUM:     IconSize=32;    FontSize=120;   Spacer=3;   CornerSize=8;   break;
        case cBrushDefinition::sMarker::LARGE:      IconSize=48;    FontSize=180;   Spacer=4;   CornerSize=12;  break;
        case cBrushDefinition::sMarker::VERYLARGE:
        default:
                                                    IconSize=64;    FontSize=240;   Spacer=4;   CornerSize=16;  break;
    }

    if ((Visibility==sMarker::MARKERTABLE)||(Location->MarkerForm!=cLocation::MARKERFORMBUBLE)) CornerSize=0;

    // Draw icon
    if (HaveIcon) {
        QImage Icon =RealLoc!=NULL?RealLoc->GetThumb(IconSize):QImage();
        if (!Icon.isNull()) Painter->drawImage(Position.x()+Spacer+CornerSize/2,Position.y()+Spacer+CornerSize/2,Icon);
    } else IconSize=0;

    int XText=Spacer*(HaveIcon?2:1)+IconSize+CornerSize/2;

    OptionText=QTextOption(Qt::AlignLeft|Qt::AlignVCenter);     // Setup alignement
    OptionText.setWrapMode(QTextOption::NoWrap);                // Setup word wrap text option

    Painter->setPen(QPen(QColor(Markers[MarkerNum].TextColor)));
    if (HaveAddr) {
        FontNormal=QFont("Sans serif",9,QFont::Normal,false);      // Font size is adjusted after
        #ifdef Q_OS_WIN
        FontNormal.setPointSizeF(double(FontSize)/ScaleFontAdjust);                         // Scale font
        #else
        FontNormal.setPointSizeF((double(FontSize)/ScaleFontAdjust)*ScreenFontAdjust);      // Scale font
        #endif
        Painter->setFont(FontNormal);
        Painter->drawText(QRect(Position.x()+XText,Position.y()+MarkerSize.height()-Spacer-CornerSize/2-QFontMetrics(FontNormal).height(),
                                MarkerSize.width()-Spacer-XText,QFontMetrics(FontNormal).height()),Address,OptionText);
    }
    if (HaveName) {
        if (!HaveAddr && HaveIcon) FontSize=FontSize*2;
        FontBold  =QFont("Sans serif",9,QFont::Bold,  false);      // Font size is adjusted after
        #ifdef Q_OS_WIN
        FontBold.setPointSizeF(double(FontSize*1.1)/ScaleFontAdjust);                       // Scale font
        #else
        FontBold.setPointSizeF((double(FontSize*1.1)/ScaleFontAdjust)*ScreenFontAdjust);    // Scale font
        #endif
        Painter->setFont(FontBold);
        int H=(HaveIcon?(HaveAddr?IconSize/2:IconSize):QFontMetrics(FontBold).height());
        Painter->drawText(QRect(Position.x()+XText,Position.y()+Spacer+CornerSize/2,
                                MarkerSize.width()-Spacer-XText,H),Name,OptionText);
    }
}

//=====================================================================================================

void cBrushDefinition::ComputeMarkerSize(void *Loc,QSize MapImageSize) {
    QFont       FontNormal,FontBold;
    int         IconSize,Spacer,NameWidth,AddressWidth,FullSpacer,H,CornerSize;
    double      FontSize;
    cLocation   *Location=(cLocation *)Loc;
    cLocation   *RealLoc =NULL;
    GetRealLocation((void **)&Location,(void **)&RealLoc);
    if (!Location) return;

    bool    HaveIcon=(Location->MarkerCompo==cLocation::ICONNAMEADDR)||(Location->MarkerCompo==cLocation::ICONNAME)||(Location->MarkerCompo==cLocation::ICON);
    bool    HaveName=(Location->MarkerCompo==cLocation::ICONNAMEADDR)||(Location->MarkerCompo==cLocation::ICONNAME)||(Location->MarkerCompo==cLocation::NAME)||(Location->MarkerCompo==cLocation::NAMEADDR);
    bool    HaveAddr=(Location->MarkerCompo==cLocation::ICONNAMEADDR)||(Location->MarkerCompo==cLocation::NAMEADDR)||(Location->MarkerCompo==cLocation::ADDR);
    QString Name   =RealLoc!=NULL?RealLoc->Name:QApplication::translate("cBrushDefinition","Error: Project's location no set");
    QString Address=RealLoc!=NULL?RealLoc->FriendlyAddress:QApplication::translate("cBrushDefinition","Error: Project's location no set");

    // Setup FontFactor
    switch (Location->Size) {
        case cBrushDefinition::sMarker::SMALL:      IconSize=24;    FontSize=90;    Spacer=3;   CornerSize=6;   break;
        case cBrushDefinition::sMarker::MEDIUM:     IconSize=32;    FontSize=120;   Spacer=3;   CornerSize=8;   break;
        case cBrushDefinition::sMarker::LARGE:      IconSize=48;    FontSize=180;   Spacer=4;   CornerSize=12;  break;
        case cBrushDefinition::sMarker::VERYLARGE:
        default:                                    IconSize=64;    FontSize=240;   Spacer=4;   CornerSize=16;  break;
    }
    if (!HaveIcon) IconSize=0;
    if (Location->MarkerForm!=cLocation::MARKERFORMBUBLE) CornerSize=0;

    // Setup fonts
    if (HaveAddr) {
        FontNormal=QFont("Sans serif",9,QFont::Normal,false);      // Font size is adjusted after
        #ifdef Q_OS_WIN
        FontNormal.setPointSizeF(double(FontSize)/ScaleFontAdjust);                         // Scale font
        #else
        FontNormal.setPointSizeF((double(FontSize)/ScaleFontAdjust)*ScreenFontAdjust);      // Scale font
        #endif
        QFontMetrics fmn(FontNormal);
        AddressWidth=fmn.boundingRect(QRect(0,0,MapImageSize.width(),MapImageSize.height()),0,Address).width()*1.02;
    } else AddressWidth=0;

    if (HaveName) {
        if (!HaveAddr && HaveIcon) FontSize=FontSize*2;
        FontBold  =QFont("Sans serif",9,QFont::Bold,  false);      // Font size is adjusted after
        #ifdef Q_OS_WIN
        FontBold.setPointSizeF(double(FontSize*1.1)/ScaleFontAdjust);                       // Scale font
        #else
        FontBold.setPointSizeF((double(FontSize*1.1)/ScaleFontAdjust)*ScreenFontAdjust);    // Scale font
        #endif
        QFontMetrics fmb(FontBold);
        NameWidth=fmb.boundingRect(QRect(0,0,MapImageSize.width(),MapImageSize.height()),0,Name).width()*1.02;
    } else NameWidth=0;

    if (HaveIcon)                           H=IconSize+Spacer*2;
        else if (HaveName && HaveAddr)      H=QFontMetrics(FontBold).height()+QFontMetrics(FontNormal).height()+Spacer*3;
        else if (HaveName)                  H=QFontMetrics(FontBold).height()+Spacer*2;
        else                                H=QFontMetrics(FontNormal).height()+Spacer*2;

    if (HaveIcon && (HaveName || HaveAddr)) FullSpacer=IconSize+Spacer*3;
        else                                FullSpacer=IconSize+Spacer*2;

    // Compute MarkerSize
    Location->MarkerSize.setWidth((NameWidth>AddressWidth?NameWidth:AddressWidth)+FullSpacer+CornerSize);
    //if (MarkerSize.width()>(MapImageSize.width()*0.6)) MarkerSize.setWidth(MapImageSize.width()*0.6);     // Not more than 60% of the map width
    Location->MarkerSize.setHeight(H+CornerSize);
}

//====================================================================================================================

void cBrushDefinition::AddMarkerToImage(QImage *DestImage) {
    if ((!MediaObject)||(MediaObject->ObjectType!=OBJECTTYPE_GMAPSMAP)||(!DestImage)) return;

    cGMapsMap *CurrentMap=(cGMapsMap *)MediaObject;
    if (!CurrentMap->IsMapValide) return;

    QSize    DestMapSize=CurrentMap->GetCurrentImageSize();
    QPainter Painter;
    Painter.begin(DestImage);
    if (DestImage->size()!=DestMapSize) Painter.setWindow(0,0,DestMapSize.width(),DestMapSize.height());

    for (int i=0;i<CurrentMap->List.count();i++) if (Markers[i].Visibility!=cBrushDefinition::sMarker::MARKERHIDE) {
        cLocation *Location=((cLocation *)CurrentMap->List[i]);
        cLocation *RealLoc =NULL;
        GetRealLocation((void **)&Location,(void **)&RealLoc);

        if ((Location)&&(RealLoc)) {
            QPoint          MarkerPoint=CurrentMap->GetLocationPoint(i);
            QPoint          MarkerPosition;
            QPoint          MarkerStartLine;
            int             GPSPointSize,CornerSize,PenSize;
            QPen            Pen;
            QPainterPath    MarkerPath,PointPath,LinePath;
            int             MakerLineLen=1;

            // Compute distance
            switch (Location->Distance) {
                case cLocation::MARKERDISTNEAR:    MakerLineLen=DestMapSize.height()/24;  break;
                case cLocation::MARKERDISTNORMAL:  MakerLineLen=DestMapSize.height()/17;  break;
                case cLocation::MARKERDISTFAR:     MakerLineLen=DestMapSize.height()/10;  break;
            }

            // Compute sizes
            switch (Location->Size) {
                case cBrushDefinition::sMarker::SMALL:      GPSPointSize=7;     PenSize=1;    CornerSize=6;   break;
                case cBrushDefinition::sMarker::MEDIUM:     GPSPointSize=10;    PenSize=1;    CornerSize=8;   break;
                case cBrushDefinition::sMarker::LARGE:      GPSPointSize=13;    PenSize=2;    CornerSize=12;  break;
                case cBrushDefinition::sMarker::VERYLARGE:
                default:                                    GPSPointSize=16;    PenSize=2;    CornerSize=16;  break;
            }

            // Compute orientation of marker
            if (MarkerPoint.y()>Location->MarkerSize.height()+MakerLineLen) {
                MarkerPosition=QPoint(MarkerPoint.x()-(Location->MarkerSize.width()/2),MarkerPoint.y()-MakerLineLen-Location->MarkerSize.height());
                MarkerStartLine.setY(MarkerPosition.y()+Location->MarkerSize.height()-1);
            } else {
                MarkerPosition=QPoint(MarkerPoint.x()-(Location->MarkerSize.width()/2),MarkerPoint.y()+MakerLineLen);
                MarkerStartLine.setY(MarkerPosition.y()+1);
            }
            if (MarkerPosition.x()<0) MarkerPosition.setX(0);
            if (MarkerPosition.x()+Location->MarkerSize.width()>DestMapSize.width()) MarkerPosition.setX(DestMapSize.width()-Location->MarkerSize.width());
            MarkerStartLine.setX(MarkerPosition.x()+Location->MarkerSize.width()/2);

            // Prepare GPS point path
            switch (Location->MarkerPointForm) {
                case cLocation::MARKERPOINTPOINT:   PointPath.moveTo(MarkerPoint);                                                                              break;
                case cLocation::MARKERPOINTCIRCLE:  PointPath.addEllipse(MarkerPoint,GPSPointSize/2,GPSPointSize/2);                                            break;
                case cLocation::MARKERPOINTRECT:    PointPath.addRect(MarkerPoint.x()-GPSPointSize/2,MarkerPoint.y()-GPSPointSize/2,GPSPointSize,GPSPointSize); break;
            }

            // Prepare line path and marker path
            int BubbleSize=GPSPointSize*2;
            if (BubbleSize>(Location->MarkerSize.width()/4)) BubbleSize=Location->MarkerSize.width()/4;
            switch (Location->MarkerForm) {
                case cLocation::MARKERFORMRECT:
                    LinePath.moveTo(QPoint(MarkerPoint.x()-PenSize*2,MarkerPoint.y()));
                    LinePath.lineTo(QPoint(MarkerStartLine.x()-PenSize*2,MarkerStartLine.y()));
                    LinePath.lineTo(QPoint(MarkerStartLine.x()+PenSize*2,MarkerStartLine.y()));
                    LinePath.lineTo(QPoint(MarkerPoint.x()+PenSize*2,MarkerPoint.y()));
                    LinePath.lineTo(QPoint(MarkerPoint.x()-PenSize*2,MarkerPoint.y()));
                    MarkerPath.addRect(MarkerPosition.x(),MarkerPosition.y(),Location->MarkerSize.width(),Location->MarkerSize.height());
                    break;
                case cLocation::MARKERFORMBUBLE:
                    LinePath.moveTo(MarkerPoint);
                    LinePath.lineTo(QPoint(MarkerStartLine.x()-BubbleSize,MarkerStartLine.y()));
                    LinePath.lineTo(QPoint(MarkerStartLine.x()+BubbleSize,MarkerStartLine.y()));
                    LinePath.lineTo(MarkerPoint);
                    MarkerPath.addRoundedRect(MarkerPosition.x(),MarkerPosition.y(),Location->MarkerSize.width(),Location->MarkerSize.height(),CornerSize,CornerSize);
                    break;
            }
            // Make union
            MarkerPath=MarkerPath.united(LinePath);
            MarkerPath=MarkerPath.united(PointPath);

            Painter.save();
            Painter.setBrush(QBrush(QColor(Markers[i].MarkerColor),Qt::SolidPattern));
            Pen.setColor(QColor(Markers[i].LineColor));
            Pen.setStyle(Qt::SolidLine);
            Pen.setWidth(PenSize);
            Painter.setPen(Pen);
            if (Markers[i].Visibility==cBrushDefinition::sMarker::MARKERSHADE) Painter.setOpacity(0.5);
            Painter.drawPath(MarkerPath);
            PenSize*=2;
            Painter.setClipRect(MarkerPosition.x()+PenSize,MarkerPosition.y()+PenSize,Location->MarkerSize.width()-2*PenSize,Location->MarkerSize.height()-2*PenSize);
            DrawMarker(&Painter,MarkerPosition,i,Markers[i].Visibility,Location->MarkerSize,Location->Size);
            Painter.restore();
        }
    }
    Painter.end();
}
