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

#include "cCustomIcon.h"

//*****************************************************************************************************************************************

#ifdef Q_OS_WIN
    #include <QPixmapCache>
    #include <windows.h>
    #include <QSettings>
    #ifndef SHGFI_ADDOVERLAYS
        #define SHGFI_ADDOVERLAYS 0x000000020
    #endif

    // qt_fromWinHBITMAP From Qmmander Filemanager / Copyright (C) Alex Skoruppa 2009 (See:http://qmmander.googlecode.com/svn-history/r93/trunk/winfileinfo.cpp)
    QImage qt_fromWinHBITMAP(HDC hdc, HBITMAP bitmap, int w, int h) {
        BITMAPINFO bmi;
        memset(&bmi, 0, sizeof(bmi));
        bmi.bmiHeader.biSize        = sizeof(BITMAPINFOHEADER);
        bmi.bmiHeader.biWidth       = w;
        bmi.bmiHeader.biHeight      = -h;
        bmi.bmiHeader.biPlanes      = 1;
        bmi.bmiHeader.biBitCount    = 32;
        bmi.bmiHeader.biCompression = BI_RGB;
        bmi.bmiHeader.biSizeImage   = w * h * 4;

        QImage image(w, h, QImage::Format_ARGB32_Premultiplied);
        if (image.isNull())
            return image;

        // Get bitmap bits
        uchar *data = (uchar *)malloc(bmi.bmiHeader.biSizeImage);

        if (GetDIBits(hdc, bitmap, 0, h, data, &bmi, DIB_RGB_COLORS)) {
            // Create image and copy data into image.
            for (int y=0; y<h; ++y) {
                void *dest = (void *) image.scanLine(y);
                void *src = data + y * image.bytesPerLine();
                memcpy(dest, src, image.bytesPerLine());
            }
        } else {
            ToLog(LOGMSG_CRITICAL,"qt_fromWinHBITMAP(), failed to get bitmap bits");
        }
        free(data);

        return image;
    }

    //====================================================================================================================
    // convertHIconToPixmap From Qmmander Filemanager / Copyright (C) Alex Skoruppa 2009 (See:http://qmmander.googlecode.com/svn-history/r93/trunk/winfileinfo.cpp)
    QPixmap convertHIconToPixmap( const HICON icon) {
        bool foundAlpha = false;
        HDC screenDevice = GetDC(0);
        HDC hdc = CreateCompatibleDC(screenDevice);
        ReleaseDC(0, screenDevice);

        ICONINFO iconinfo;
        bool result = GetIconInfo(icon, &iconinfo); //x and y Hotspot describes the icon center
        if (!result) {
            ToLog(LOGMSG_CRITICAL,"convertHIconToPixmap(), failed to GetIconInfo()");
            return QPixmap();
        }

        int w = iconinfo.xHotspot * 2;
        int h = iconinfo.yHotspot * 2;

        BITMAPINFOHEADER bitmapInfo;
        bitmapInfo.biSize        = sizeof(BITMAPINFOHEADER);
        bitmapInfo.biWidth       = w;
        bitmapInfo.biHeight      = h;
        bitmapInfo.biPlanes      = 1;
        bitmapInfo.biBitCount    = 32;
        bitmapInfo.biCompression = BI_RGB;
        bitmapInfo.biSizeImage   = 0;
        bitmapInfo.biXPelsPerMeter = 0;
        bitmapInfo.biYPelsPerMeter = 0;
        bitmapInfo.biClrUsed       = 0;
        bitmapInfo.biClrImportant  = 0;
        DWORD* bits;

        HBITMAP winBitmap = CreateDIBSection(hdc, (BITMAPINFO*)&bitmapInfo, DIB_RGB_COLORS, (VOID**)&bits, NULL, 0);
        HGDIOBJ oldhdc = (HBITMAP)SelectObject(hdc, winBitmap);
        DrawIconEx( hdc, 0, 0, icon, iconinfo.xHotspot * 2, iconinfo.yHotspot * 2, 0, 0, DI_NORMAL);
        QImage image = qt_fromWinHBITMAP(hdc, winBitmap, w, h);

        for (int y = 0 ; y < h && !foundAlpha ; y++) {
            QRgb *scanLine= reinterpret_cast<QRgb *>(image.scanLine(y));
            for (int x = 0; x < w ; x++) {
                if (qAlpha(scanLine[x]) != 0) {
                    foundAlpha = true;
                    break;
                }
            }
        }
        if (!foundAlpha) {
            //If no alpha was found, we use the mask to set alpha values
            DrawIconEx( hdc, 0, 0, icon, w, h, 0, 0, DI_MASK);
            QImage mask = qt_fromWinHBITMAP(hdc, winBitmap, w, h);

            for (int y = 0 ; y < h ; y++){
                QRgb *scanlineImage = reinterpret_cast<QRgb *>(image.scanLine(y));
                QRgb *scanlineMask = mask.isNull() ? 0 : reinterpret_cast<QRgb *>(mask.scanLine(y));
                for (int x = 0; x < w ; x++){
                    if (scanlineMask && qRed(scanlineMask[x]) != 0)
                        scanlineImage[x] = 0; //mask out this pixel
                    else
                        scanlineImage[x] |= 0xff000000; // set the alpha channel to 255
                }
            }
        }
        //dispose resources created by iconinfo call
        DeleteObject(iconinfo.hbmMask);
        DeleteObject(iconinfo.hbmColor);

        SelectObject(hdc, oldhdc); //restore state
        DeleteObject(winBitmap);
        DeleteDC(hdc);
        return QPixmap::fromImage(image);
    }

    //====================================================================================================================
    // GetIconForFileOrDir adapted by domledom From Qmmander Filemanager / Copyright (C) Alex Skoruppa 2009 (See:http://qmmander.googlecode.com/svn-history/r93/trunk/winfileinfo.cpp)
    QIcon GetIconForFileOrDir(QString FileName,int IconIndex) {
        QIcon       RetIcon;
        WCHAR       WinFileName[256+1];
        QPixmap     pixmap;

        MultiByteToWideChar(CP_ACP,0,FileName.toLocal8Bit(),-1,WinFileName,256+1);

        if (IconIndex!=0) {
            HICON Icon;
            if (ExtractIconEx(WinFileName,IconIndex,&Icon,NULL,1)>0) {
                pixmap=convertHIconToPixmap(Icon);
                DeleteObject(Icon);
                if (!pixmap.isNull()) RetIcon.addPixmap(pixmap);
                return RetIcon;
            } else if (ExtractIconEx(WinFileName,IconIndex,NULL,&Icon,1)>0) {
                pixmap=convertHIconToPixmap(Icon);
                DeleteObject(Icon);
                if (!pixmap.isNull()) RetIcon.addPixmap(pixmap);
                return RetIcon;
            }
        }

        SHFILEINFO  info;
        QString     key;
        QString     fileExtension=QFileInfo(FileName).suffix().toUpper();
        fileExtension.prepend(QLatin1String("."));

        if (QFileInfo(FileName).isFile() && !QFileInfo(FileName).isExecutable() && !QFileInfo(FileName).isSymLink()) key=QLatin1String("qt_")+fileExtension;
        if (!key.isEmpty()) QPixmapCache::find(key, pixmap);

        if (!pixmap.isNull()) {
            RetIcon.addPixmap(pixmap);
            if (QPixmapCache::find(key+QLatin1Char('l'),pixmap)) RetIcon.addPixmap(pixmap);
            return RetIcon;
        }

        //Get the small icon
        if (SHGetFileInfo(WinFileName,0,&info,sizeof(SHFILEINFO),SHGFI_ICON|SHGFI_SMALLICON|SHGFI_SYSICONINDEX|SHGFI_ADDOVERLAYS)) {
            if (QFileInfo(FileName).isDir() && !QDir(FileName).isRoot()) {
                //using the unique icon index provided by windows save us from duplicate keys
                key = QString::fromLatin1("qt_dir_%1").arg(info.iIcon);
                QPixmapCache::find(key,pixmap);
                if (!pixmap.isNull()) {
                    RetIcon.addPixmap(pixmap);
                    if (QPixmapCache::find(key + QLatin1Char('l'), pixmap)) RetIcon.addPixmap(pixmap);
                    DestroyIcon(info.hIcon);
                    return RetIcon;
                }
            }
            if (pixmap.isNull()) {
                pixmap = convertHIconToPixmap(info.hIcon);
                if (!pixmap.isNull()) {
                    RetIcon.addPixmap(pixmap);
                    if (!key.isEmpty()) QPixmapCache::insert(key,pixmap);
                } else {
                    ToLog(LOGMSG_WARNING,"QCustomFolderTree::getWinIcon() no small icon found");
                }
            }
            DestroyIcon(info.hIcon);
        }
        //Get the big icon
        if (SHGetFileInfo(WinFileName,0,&info,sizeof(SHFILEINFO),SHGFI_ICON|SHGFI_LARGEICON|SHGFI_SYSICONINDEX|SHGFI_ADDOVERLAYS)) {
            if (QFileInfo(FileName).isDir() && !QFileInfo(FileName).isRoot()) {
                //using the unique icon index provided by windows save us from duplicate keys
                key=QString::fromLatin1("qt_dir_%1").arg(info.iIcon);
            }
            pixmap=convertHIconToPixmap(info.hIcon);
            if (!pixmap.isNull()) {
                RetIcon.addPixmap(pixmap);
                if (!key.isEmpty()) QPixmapCache::insert(key+QLatin1Char('l'),pixmap);
            } else {
                ToLog(LOGMSG_WARNING,"QCustomFolderTree::getWinIcon() no large icon found");
            }
            DestroyIcon(info.hIcon);
        }
        if (RetIcon.isNull()) ToLog(LOGMSG_CRITICAL,QString("Loading icon nbr %1 From %2 Error").arg(IconIndex).arg(FileName));
        return RetIcon;
    }

#endif

//*****************************************************************************************************************************************

cCustomIcon::cCustomIcon() {
}

void cCustomIcon::LoadIcons(QString FileName) {
    QImage Icon(FileName);
    if (Icon.isNull()) ToLog(LOGMSG_CRITICAL,QString("Loading %1 Error").arg(FileName)); else {
        if (Icon.width()>Icon.height()) {
            Icon16 =Icon.scaledToWidth(16,Qt::SmoothTransformation);
            Icon100=Icon.scaledToWidth(100,Qt::SmoothTransformation);
        } else {
            Icon16 =Icon.scaledToHeight(16,Qt::SmoothTransformation);
            Icon100=Icon.scaledToHeight(100,Qt::SmoothTransformation);
        }
    }
}

//====================================================================================================================

void cCustomIcon::LoadIcons(cCustomIcon *CustomIcon) {
    Icon16 =CustomIcon->Icon16.copy();
    Icon100=CustomIcon->Icon100.copy();
}

//====================================================================================================================

void cCustomIcon::LoadIconsFromIMG(QString FileName) {
    Icon16.load (":/img/MediaIcons/16x16/"+FileName);     if (Icon16.isNull())  ToLog(LOGMSG_CRITICAL,QString("Loading img/MediaIcons/16x16/%1 Error").arg(FileName));
    Icon100.load(":/img/MediaIcons/100x100/"+FileName);   if (Icon100.isNull()) ToLog(LOGMSG_CRITICAL,QString("Loading img/MediaIcons/100x100/%1 Error").arg(FileName));
}

//====================================================================================================================

void cCustomIcon::LoadIconsFromLinux(QString LinuxPath,QString FileName) {
    Icon16.load(LinuxPath+"16x16/"+FileName);           if (Icon16.isNull())  ToLog(LOGMSG_CRITICAL,QString("Loading %116x16/%2 Error").arg(LinuxPath).arg(FileName));
    Icon100=QImage(LinuxPath+"128x128/"+FileName);      if (Icon100.isNull()) ToLog(LOGMSG_CRITICAL,QString("Loading %1128x128/%2 Error").arg(LinuxPath).arg(FileName));
    if (!Icon100.isNull()) Icon100=Icon100.scaledToHeight(100,Qt::SmoothTransformation);
}

//====================================================================================================================

void cCustomIcon::LoadIcons(QImage *Image) {
    if (Image->width()>Image->height()) {
        Icon16 =Image->scaledToWidth(16,Qt::SmoothTransformation);
        Icon100=Image->scaledToWidth(100,Qt::SmoothTransformation);
    } else {
        Icon16 =Image->scaledToHeight(16,Qt::SmoothTransformation);
        Icon100=Image->scaledToHeight(100,Qt::SmoothTransformation);
    }
}

//====================================================================================================================

void cCustomIcon::LoadIcons(QIcon Icon) {
    Icon16 =Icon.pixmap(16,16).toImage();
    Icon100=Icon.pixmap(100,100).toImage();
    //if ((Icon100.height()<100)&&(Icon100.width()<100)) {
    if (((Icon100.height()<100)&&(Icon100.width()<100))||(Icon100.height()>100)||(Icon100.width()>100)) {
        if (Icon100.height()>Icon100.width()) Icon100=Icon100.scaledToHeight(100,Qt::SmoothTransformation);
            else Icon100=Icon100.scaledToWidth(100,Qt::SmoothTransformation);
    }
}

//====================================================================================================================

QIcon cCustomIcon::GetIcon() {
    QIcon Ret=QIcon(QPixmap().fromImage(Icon16));
    Ret.addPixmap(QPixmap().fromImage(Icon100));
    return Ret;
}

//====================================================================================================================

QImage *cCustomIcon::GetIcon(IconSize Size) {
    switch (Size) {
        case ICON16:  return &Icon16;
        case ICON100: return &Icon100;
        default:      return &Icon16;
    }
}
