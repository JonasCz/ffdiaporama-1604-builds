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

// Include some common various class
#include "cBaseAppConfig.h"

// Include some additional standard class
#include <QFileInfo>
#include <QImageReader>

QMutex MemoryMutex;

//*********************************************************************************************************************************************
// Base object for image cache manipulation
//*********************************************************************************************************************************************
// Constructor for image file

cLuLoImageCacheObject::cLuLoImageCacheObject(qlonglong TheRessourceKey,qlonglong TheFileKey,QDateTime TheModifDateTime,int TheImageOrientation,QString TheFilterString,bool TheSmoothing,cLuLoImageCache *Parent) {
    RessourceKey        =TheRessourceKey;
    FileKey             =TheFileKey;       // Full filename
    ModifDateTime       =TheModifDateTime;
    FilterString        =TheFilterString;
    Smoothing           =TheSmoothing;
    CacheRenderImage    =NULL;
    CachePreviewImage   =NULL;
    ImageOrientation    =TheImageOrientation;                 // Image orientation (EXIF)
    LuLoImageCache      =Parent;
    Position            =0;
    ByteCount           =0;
}

//===============================================================================

cLuLoImageCacheObject::~cLuLoImageCacheObject() {
    if (CachePreviewImage!=NULL) {
        if (CachePreviewImage!=CacheRenderImage) delete CachePreviewImage;
        CachePreviewImage=NULL;
    }
    if (CacheRenderImage!=NULL) {
        delete CacheRenderImage;
        CacheRenderImage=NULL;
    }
}

//===============================================================================

QImage cLuLoImageCacheObject::ValidateCacheRenderImageNC(qlonglong RessourceKey) {
    LuLoImageCache->FreeMemoryToMaxValue(this);
    MemoryMutex.lock();
    if (CacheRenderImage==NULL) {
        if (RessourceKey!=-1) {
            QImage Image;
            ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Loading file from ressource"));
            LuLoImageCache->ThumbsTable->GetThumbs(&RessourceKey,&Image);
            CacheRenderImage=new QImage(Image);
            if ((CacheRenderImage)&&(CacheRenderImage->isNull())) {
                ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","Error loading ressource"));
                delete CacheRenderImage;
                CacheRenderImage=NULL;
            }
        } else {
            QString FileName=LuLoImageCache->FilesTable->GetFileName(FileKey);

            // Load image from disk
            ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Loading file :")+QFileInfo(FileName).fileName());
            QImageReader Img(FileName);
            CacheRenderImage=new QImage(Img.read());
            if ((CacheRenderImage)&&(CacheRenderImage->isNull())) {
                ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","Error loading file :")+FileName);
                delete CacheRenderImage;
                CacheRenderImage=NULL;
            }
        }
        if (!CacheRenderImage)
            ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","Error allocating memory for render image"));

        // If image is ok then apply exif orientation (if needed)
        if (CacheRenderImage) {
            if (ImageOrientation==8) {          // Rotating image anti-clockwise by 90 degrees...'
                QMatrix matrix;
                matrix.rotate(-90);
                QImage *NewImage=new QImage(CacheRenderImage->transformed(matrix,Smoothing?Qt::SmoothTransformation:Qt::FastTransformation));
                if (NewImage) {
                    if (NewImage->isNull()) delete NewImage; else {
                        delete CacheRenderImage;
                        CacheRenderImage=NewImage;
                    }
                }
            } else if (ImageOrientation==3) {   // Rotating image clockwise by 180 degrees...'
                QMatrix matrix;
                matrix.rotate(180);
                QImage *NewImage=new QImage(CacheRenderImage->transformed(matrix,Smoothing?Qt::SmoothTransformation:Qt::FastTransformation));
                if (NewImage) {
                    if (NewImage->isNull()) delete NewImage; else {
                        delete CacheRenderImage;
                        CacheRenderImage=NewImage;
                    }
                }
            } else if (ImageOrientation==6) {   // Rotating image clockwise by 90 degrees...'
                QMatrix matrix;
                matrix.rotate(90);
                QImage *NewImage=new QImage(CacheRenderImage->transformed(matrix,Smoothing?Qt::SmoothTransformation:Qt::FastTransformation));
                if (NewImage) {
                    if (NewImage->isNull()) delete NewImage; else {
                        delete CacheRenderImage;
                        CacheRenderImage=NewImage;
                    }
                }
            }
        }

        // If error
        if ((CacheRenderImage)&&(CacheRenderImage->isNull())) {
            delete CacheRenderImage;
            CacheRenderImage=NULL;
        }

    }
    if (CacheRenderImage==NULL) ToLog(LOGMSG_CRITICAL,"Error in cLuLoImageCacheObject::ValidateCacheRenderImage() : return NULL");
    ByteCount=((CacheRenderImage)?CacheRenderImage->byteCount():0)+(((CachePreviewImage)&&(CachePreviewImage!=CacheRenderImage))?CachePreviewImage->byteCount():0);
    MemoryMutex.unlock();
    return (CacheRenderImage?*CacheRenderImage:QImage());
}

QImage *cLuLoImageCacheObject::ValidateCacheRenderImage() {
    QImage Img=ValidateCacheRenderImageNC(RessourceKey);
    return (!Img.isNull())?new QImage(Img.copy()):NULL;
}

//===============================================================================

QImage *cLuLoImageCacheObject::ValidateCachePreviewImage() {
    LuLoImageCache->FreeMemoryToMaxValue(this);
    MemoryMutex.lock();
    if (CachePreviewImage==NULL) {
        // ValidateCacheRenderImage();

        // if CacheRenderImage exist then copy it
        if ((CacheRenderImage)&&(!CacheRenderImage->isNull())) {

            if (CacheRenderImage->height()<=PREVIEWMAXHEIGHT) CachePreviewImage=CacheRenderImage;
                else CachePreviewImage=new QImage(CacheRenderImage->scaledToHeight(PREVIEWMAXHEIGHT,Smoothing?Qt::SmoothTransformation:Qt::FastTransformation));

        } else {

            if (RessourceKey!=-1) {

                QImage Image;
                ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Loading file from ressource"));
                LuLoImageCache->ThumbsTable->GetThumbs(&RessourceKey,&Image);

                // then copy it at correct size into CachePreviewImage
                if (Image.height()<=PREVIEWMAXHEIGHT) CachePreviewImage=new QImage(Image);
                    else CachePreviewImage=new QImage(Image.scaledToHeight(PREVIEWMAXHEIGHT,Smoothing?Qt::SmoothTransformation:Qt::FastTransformation));

            } else {

                QString FileName=LuLoImageCache->FilesTable->GetFileName(FileKey);
                ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Loading file :")+QFileInfo(FileName).fileName());
                // if no CacheRenderImage then load image directly at correct size
                QImageReader Img(FileName);
                if (Img.canRead()) {
                    QSize Size =Img.size();
                    if (((ImageOrientation==8)||(ImageOrientation==6))&&(Size.width()>PREVIEWMAXHEIGHT)) {
                        Size.setHeight((qreal(Size.height())/qreal(Size.width()))*PREVIEWMAXHEIGHT);
                        Size.setWidth(PREVIEWMAXHEIGHT);
                        Img.setScaledSize(Size);
                    } else if ((ImageOrientation!=8)&&(ImageOrientation!=6)&&(Size.height()>PREVIEWMAXHEIGHT)) {
                        Size.setWidth((qreal(Size.width())/qreal(Size.height()))*PREVIEWMAXHEIGHT);
                        Size.setHeight(PREVIEWMAXHEIGHT);
                        Img.setScaledSize(Size);
                    }
                    CachePreviewImage=new QImage(Img.read());
                }
                if ((CachePreviewImage)&&(CachePreviewImage->isNull())) {
                    ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","Error loading file :")+FileName);
                    delete CachePreviewImage;
                    CachePreviewImage=NULL;
                }

                if (CachePreviewImage) {
                    if (ImageOrientation==8) {          // Rotating image anti-clockwise by 90 degrees...'
                        QMatrix matrix;
                        matrix.rotate(-90);
                        QImage *NewImage=new QImage(CachePreviewImage->transformed(matrix,Smoothing?Qt::SmoothTransformation:Qt::FastTransformation));
                        if (NewImage) {
                            if (NewImage->isNull()) delete NewImage; else {
                                delete CachePreviewImage;
                                CachePreviewImage=NewImage;
                            }
                        }
                    } else if (ImageOrientation==3) {   // Rotating image clockwise by 180 degrees...'
                        QMatrix matrix;
                        matrix.rotate(180);
                        QImage *NewImage=new QImage(CachePreviewImage->transformed(matrix,Smoothing?Qt::SmoothTransformation:Qt::FastTransformation));
                        if (NewImage) {
                            if (NewImage->isNull()) delete NewImage; else {
                                delete CachePreviewImage;
                                CachePreviewImage=NewImage;
                            }
                        }
                    } else if (ImageOrientation==6) {   // Rotating image clockwise by 90 degrees...'
                        QMatrix matrix;
                        matrix.rotate(90);
                        QImage *NewImage=new QImage(CachePreviewImage->transformed(matrix,Smoothing?Qt::SmoothTransformation:Qt::FastTransformation));
                        if (NewImage) {
                            if (NewImage->isNull()) delete NewImage; else {
                                delete CachePreviewImage;
                                CachePreviewImage=NewImage;
                            }
                        }
                    }
                }
            }

        }

        // If error
        if ((CachePreviewImage)&&(CachePreviewImage->isNull())) {
            delete CachePreviewImage;
            CachePreviewImage=NULL;
        }

    }
    if (CachePreviewImage==NULL) ToLog(LOGMSG_CRITICAL,"Error in cLuLoImageCacheObject::CachePreviewImage() : return NULL");
    ByteCount=((CacheRenderImage)?CacheRenderImage->byteCount():0)+(((CachePreviewImage)&&(CachePreviewImage!=CacheRenderImage))?CachePreviewImage->byteCount():0);
    QImage *Ret=(CachePreviewImage)?new QImage(CachePreviewImage->copy()):NULL;
    MemoryMutex.unlock();
    return Ret;
}

//*********************************************************************************************************************************************
// List object for image cache manipulation
//*********************************************************************************************************************************************

cLuLoImageCache::cLuLoImageCache() {
    MaxValue   =1024*1024*1024;
    FilesTable =NULL;
    ThumbsTable=NULL;
}

//===============================================================================

cLuLoImageCache::~cLuLoImageCache() {
    clear();
}

//===============================================================================

void cLuLoImageCache::clear() {
    while (List.count()>0) delete List.takeLast();
}

//===============================================================================
// Find object corresponding to FileName - if object not found then create one
//===============================================================================

// Image version
cLuLoImageCacheObject *cLuLoImageCache::FindObject(qlonglong RessourceKey,qlonglong FileKey,QDateTime ModifDateTime,int ImageOrientation,bool Smoothing,bool SetAtTop) {
    int i=0;
    MemoryMutex.lock();

    if (RessourceKey!=-1) {

        while ((i<List.count())&&((List[i]->RessourceKey!=RessourceKey)||(List[i]->Smoothing!=Smoothing))) i++;
        if ((i<List.count())&&(List[i]->RessourceKey==RessourceKey)&&(List[i]->Smoothing==Smoothing)) {
            // if wanted and image found then set it to the top of the list
            if ((SetAtTop)&&(i>0)) { // If item is not the first
                cLuLoImageCacheObject *Object=List.takeAt(i);   // Detach item from the list
                List.prepend(Object);                           // Re-attach item at first position
                i=0;
            }
        } else {
            // Image not found then create it at top of the list
            List.prepend(new cLuLoImageCacheObject(RessourceKey,-1,ModifDateTime,ImageOrientation,"",Smoothing,this));     // Append a new object at first position
            i=0;
        }

    } else {

        while ((i<List.count())&&((List[i]->FileKey!=FileKey)||(List[i]->Smoothing!=Smoothing))) i++;
        if ((i<List.count())&&(List[i]->FileKey==FileKey)&&(List[i]->ModifDateTime==ModifDateTime)&&(List[i]->Smoothing==Smoothing)) {
            // if wanted and image found then set it to the top of the list
            if ((SetAtTop)&&(i>0)) { // If item is not the first
                cLuLoImageCacheObject *Object=List.takeAt(i);   // Detach item from the list
                List.prepend(Object);                           // Re-attach item at first position
                i=0;
            }
        } else {
            // Image not found then create it at top of the list
            List.prepend(new cLuLoImageCacheObject(-1,FileKey,ModifDateTime,ImageOrientation,"",Smoothing,this));     // Append a new object at first position
            i=0;
        }

    }
    MemoryMutex.unlock();
    return List[i]; // return first object
}

//===============================================================================
// Special case for Image object : Remove all image object of this key
void cLuLoImageCache::RemoveImageObject(qlonglong RessourceKey,qlonglong FileKey) {
    MemoryMutex.lock();
    int i=List.count()-1;
    while (i>=0) {
        if ((RessourceKey!=-1)&&(List[i]->RessourceKey==RessourceKey)) delete List.takeAt(i);
        if ((RessourceKey==-1)&&(List[i]->FileKey==FileKey))           delete List.takeAt(i);
        i--;
    }
    MemoryMutex.unlock();
}

//===============================================================================

int64_t cLuLoImageCache::MemoryUsed() {
    int64_t MemUsed=0;
    for (int i=0;i<List.count();i++) MemUsed+=List[i]->ByteCount;
    return MemUsed;
}

//===============================================================================

void cLuLoImageCache::FreeMemoryToMaxValue(cLuLoImageCacheObject *DontFree) {
    if (DontFree) {
        // Ensure DontFree object is at top of list
        int i=0;
        while ((i<List.count())&&(List[i]!=DontFree)) i++;
        if ((i<List.count())&&(List[i]==DontFree)) {
            cLuLoImageCacheObject *Object=List.takeAt(i);   // Detach item from the list
            List.prepend(Object);                           // Re-attach item at first position
        }
    }
    MemoryMutex.lock();
    // 1st step : ensure used memory is less than max allowed
    int64_t Memory    =MemoryUsed();
    int64_t MaxMemory =MaxValue;
    if (Memory>MaxMemory) {
        QString DisplayLog=QString("Free memory for max value (%1 Mb) : Before=%2 cached objects for %3 Mb").arg(MaxMemory/(1024*1024)).arg(List.count()).arg(MaxMemory/(1024*1024));
        while (((Memory=MemoryUsed())>MaxMemory)&&(List.count()>1)) delete List.takeLast();    // Never delete first object
        ToLog(LOGMSG_INFORMATION,DisplayLog+QString(" - After=%1 cached objects for %2 Mb").arg(List.count()).arg(Memory/(1024*1024)));
    }
    // 2st step : ensure we are able to allocate a 128 Mb block
    void *block=NULL;
    while ((block==NULL)&&(List.count()>1)) {
        block=malloc(128*1024*1024);
        if ((block==NULL)&&(List.count()>1)) {  // Never delete first object
            delete List.takeLast();
            ToLog(LOGMSG_INFORMATION,QString("Free memory to ensure enough space to work - After=%1 cached objects for %2 Mb").arg(List.count()).arg(Memory/(1024*1024)));
        }
    }
    if (block) free(block);
    MemoryMutex.unlock();
}
