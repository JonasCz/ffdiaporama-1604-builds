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

#include "cBaseBrushDefinition.h"

QBrush  Transparent;                    // Transparent brush

//*********************************************************************************************************************************************
// Utility function to create a gradient brush
//*********************************************************************************************************************************************

QBrush *GetGradientBrush(QRectF Rect,int BrushType,int GradientOrientation,QString ColorD,QString ColorF,QString ColorIntermed,double Intermediate) {
    QGradient Gradient;
    switch (GradientOrientation) {
        case GRADIENTORIENTATION_UPLEFT:        Gradient=QLinearGradient(QPointF(Rect.x(),Rect.y()),QPointF(Rect.x()+Rect.width(),Rect.y()+Rect.height()));                                                                                             break;          // Up-Left
        case GRADIENTORIENTATION_UP:            Gradient=QLinearGradient(QPointF(Rect.x()+Rect.width()/2,Rect.y()),QPointF(Rect.x()+Rect.width()/2,Rect.y()+Rect.height()));                                                                            break;          // Up
        case GRADIENTORIENTATION_UPRIGHT:       Gradient=QLinearGradient(QPointF(Rect.x()+Rect.width(),Rect.y()),QPointF(Rect.x(),Rect.y()+Rect.height()));                                                                                             break;          // Up-right
        case GRADIENTORIENTATION_LEFT:          Gradient=QLinearGradient(QPointF(Rect.x(),Rect.y()+Rect.height()/2),QPointF(Rect.x()+Rect.width(),Rect.y()+Rect.height()/2));                                                                           break;          // Left
        case GRADIENTORIENTATION_RADIAL:        Gradient=QRadialGradient(QPointF(Rect.x()+Rect.width()/2,Rect.y()+Rect.height()/2),Rect.width()>Rect.height()?Rect.width():Rect.height(),QPointF(Rect.x()+Rect.width()/2,Rect.y()+Rect.height()/2));    break;                                                                                                                                      // Radial
        case GRADIENTORIENTATION_RIGHT:         Gradient=QLinearGradient(QPointF(Rect.x()+Rect.width(),Rect.y()+Rect.height()/2),QPointF(Rect.x(),Rect.y()+Rect.height()/2));                                                                           break;          // Right
        case GRADIENTORIENTATION_BOTTOMLEFT:    Gradient=QLinearGradient(QPointF(Rect.x(),Rect.y()+Rect.height()),QPointF(Rect.x()+Rect.width(),Rect.y()));                                                                                             break;          // bt-Left
        case GRADIENTORIENTATION_BOTTOM:        Gradient=QLinearGradient(QPointF(Rect.x()+Rect.width()/2,Rect.y()+Rect.height()),QPointF(Rect.x()+Rect.width()/2,Rect.y()));                                                                            break;          // bottom
        case GRADIENTORIENTATION_BOTTOMRIGHT:   Gradient=QLinearGradient(QPointF(Rect.x()+Rect.width(),Rect.y()+Rect.height()),QPointF(Rect.x(),Rect.y()));                                                                                             break;          // bt-right
    }
    Gradient.setColorAt(0,QColor(ColorD));
    Gradient.setColorAt(1,QColor(ColorF));
    if (BrushType==BRUSHTYPE_GRADIENT3) Gradient.setColorAt(Intermediate,QColor(ColorIntermed));
    return new QBrush(Gradient);
}

//*********************************************************************************************************************************************
// Base object for composition definition
//*********************************************************************************************************************************************

cBackgroundObject::cBackgroundObject(QString FileName,cBaseAppConfig *AppConfig) {
    ApplicationConfig   =AppConfig;
    qlonglong FolderKey =ApplicationConfig->FoldersTable->GetFolderKey(QFileInfo(FileName).absolutePath());
    IsValide            =false;
    ModifDateTime       =QFileInfo(FileName).created();
    Name                =QFileInfo(FileName).baseName();
    FileKey             =ApplicationConfig->FilesTable->GetFileKey(FolderKey,QFileInfo(FileName).fileName(),OBJECTTYPE_IMAGEFILE);

    QString FName=QFileInfo(FileName).absoluteFilePath();
    FName=FName.left(FName.lastIndexOf("."));
    Thumbnail[GEOMETRY_4_3].load(FName+".ic1","PNG");
    if (!Thumbnail[GEOMETRY_4_3].isNull()) {
        Thumbnail[GEOMETRY_16_9].load(FName+".ic2","PNG");
        Thumbnail[GEOMETRY_40_17].load(FName+".ic3","PNG");
    } else {
        // Load file
        QImage Image(FileName);
        IsValide=!Image.isNull();

        // Make Icon
        QImage Img56 =Image.scaledToHeight(56);
        QImage Img132=Image.scaledToWidth(132);
        Thumbnail[GEOMETRY_4_3]  =Img56.copy((Img56.width()-75)/2 ,0,75 ,56);
        Thumbnail[GEOMETRY_16_9] =Img56;
        Thumbnail[GEOMETRY_40_17]=Img132.copy(0,(Img132.height()-56)/2,132,56);

        // Save Icon
        //Thumbnail[GEOMETRY_4_3].save(FName+".ic1","PNG");
        //Thumbnail[GEOMETRY_16_9].save(FName+".ic2","PNG");
        //Thumbnail[GEOMETRY_40_17].save(FName+".ic3","PNG");
    }
}

QImage* cBackgroundObject::GetBackgroundImage() {
    cLuLoImageCacheObject *ImageObject=ApplicationConfig->ImagesCache.FindObject(-1,FileKey,ModifDateTime,1,ApplicationConfig->Smoothing,true);
    if (ImageObject==NULL) {
        ToLog(LOGMSG_CRITICAL,"Error in cBackgroundObject::GetBackgroundImage : FindObject return NULL for background image loading !");
    } else {
        QImage *LN_Image=ImageObject->ValidateCacheRenderImage();   // Get a link to render image in LuLoImageCache collection
        if ((LN_Image==NULL)||(LN_Image->isNull())) {
            ToLog(LOGMSG_CRITICAL,"Error in cBackgroundObject::GetBackgroundImage : ValidateCacheRenderImage return NULL for background image loading !");
        } else {
            return LN_Image;
        }
    }
    return NULL;
}

QImage cBackgroundObject::GetBackgroundThumb(int Geometry) {
    switch (Geometry) {
        case GEOMETRY_4_3   : return Thumbnail[GEOMETRY_4_3];
        case GEOMETRY_40_17 : return Thumbnail[GEOMETRY_40_17];
        default             : return Thumbnail[GEOMETRY_16_9];
    }
}

//*********************************************************************************************************************************************
// Global class containing background library
//*********************************************************************************************************************************************
cBackgroundList::cBackgroundList() {
}

//====================================================================================================================

void cBackgroundList::ScanDisk(QString Path,cBaseAppConfig *ApplicationConfig) {
    QDir                Folder(Path);
    QFileInfoList       Files=Folder.entryInfoList();;

    for (int i=0;i<Files.count();i++) {
        if (Files[i].isFile() && ((QString(Files[i].suffix()).toLower()=="jpg")||(QString(Files[i].suffix()).toLower()=="png"))) {
            QString FileName=QFileInfo(Files[i]).absoluteFilePath();
            if (QFileInfo(QString(FileName)).isFile()) List.append(cBackgroundObject(Files[i].absoluteFilePath(),ApplicationConfig));
        } else if (Files[i].isDir() && (QString(Files[i].fileName())!=".")&&(QString(Files[i].fileName())!=".."))
            ScanDisk(Files[i].absoluteFilePath(),ApplicationConfig);
    }
}

//====================================================================================================================

int cBackgroundList::SearchImage(QString NameToFind) {
    int Ret=-1;
    int j=0;
    while ((j<List.count())&&(Ret==-1)) if (List[j].Name==NameToFind) Ret=j; else j++;
    if (Ret==-1) Ret=0; // If not found : switch to first background
    return Ret;
}

//*********************************************************************************************************************************************
// cBaseBrushDefinition object
//*********************************************************************************************************************************************

cBaseBrushDefinition::cBaseBrushDefinition() {
}

cBaseBrushDefinition::~cBaseBrushDefinition() {

}

//====================================================================================================================

void cBaseBrushDefinition::InitDefaultValues() {
    GradientOrientation     =6;                             // 1=Up-Left, 2=Up, 3=Up-right, ...
    BrushType               =BRUSHTYPE_SOLID;               // 0=No brush !, 1=Solid one color, 2=Pattern, 3=Gradient 2 colors, 4=Gradient 3 colors, 5=brush library, 6=image disk
    PatternType             =Qt::Dense4Pattern;             // Type of pattern when BrushType is Pattern (Qt::BrushStyle standard)
    ColorD                  ="#C0C0C0";                     // First Color
    ColorIntermed           ="#777777";                     // Intermediate Color
    ColorF                  ="#000000";                     // Last Color
    Intermediate            =0.1;                           // Intermediate position of 2nd color (in %)
}

//====================================================================================================================

QBrush *cBaseBrushDefinition::GetBrush(QRectF Rect) {
    QBrush  *Br=NULL;
    switch (BrushType) {
        case BRUSHTYPE_NOBRUSH :        Br=new QBrush(Qt::NoBrush);                                                                         break;
        case BRUSHTYPE_SOLID :          Br=new QBrush(QColor(ColorD),Qt::SolidPattern);                                                     break;
        case BRUSHTYPE_PATTERN :        Br=new QBrush(QColor(ColorD),(Qt::BrushStyle)(PatternType+3));                                      break;
        case BRUSHTYPE_GRADIENT2 :      Br=GetGradientBrush(Rect,BrushType,GradientOrientation,ColorD,ColorF,ColorIntermed,Intermediate);   break;
        case BRUSHTYPE_GRADIENT3 :      Br=GetGradientBrush(Rect,BrushType,GradientOrientation,ColorD,ColorF,ColorIntermed,Intermediate);   break;
        case BRUSHTYPE_IMAGELIBRARY :   Br=GetLibraryBrush(Rect);                                                                           break;
        default :                       Br=new QBrush(Qt::NoBrush);                                                                         break;
    }
    return Br;
}

//====================================================================================================================

QBrush *cBaseBrushDefinition::GetLibraryBrush(QRectF Rect) {
    int BackgroundImageNumber=BackgroundList.SearchImage(BrushImage);
    if ((BackgroundImageNumber>=0)&&(BackgroundImageNumber<BackgroundList.List.count())) {
        QImage *Bckg=BackgroundList.List[BackgroundImageNumber].GetBackgroundImage();
        if (Bckg) {
            double RatioBck  =double(Bckg->height())/double(Bckg->width());
            double RatioRect =double(Rect.height()+1)/double(Rect.width()+1);
            if (RatioRect>=RatioBck) {
                QImage Background=Bckg->scaledToHeight(Rect.height()+1,Qt::SmoothTransformation);
                delete Bckg;
                return new QBrush(Background.copy((Background.width()-(Rect.width()+1))/2,0,Rect.width()+1,Background.height()));
            } else {
                QImage Background=Bckg->scaledToWidth(Rect.width()+1,Qt::SmoothTransformation);
                delete Bckg;
                return new QBrush(Background.copy(0,(Background.height()-(Rect.height()+1))/2,Background.width(),Rect.height()+1));
            }
            delete Bckg;
        } else return new QBrush(Qt::NoBrush);
    } else return new QBrush(Qt::NoBrush);
}
