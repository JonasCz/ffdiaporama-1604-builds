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

#ifndef CBASEAPPCONFIG_H
#define CBASEAPPCONFIG_H

class cBaseAppConfig;
#include "BasicDefines.h"
#include "cDatabase.h"
#include "cLuLoImageCache.h"
#include "cCustomIcon.h"

class cBaseAppConfig : public QObject {
Q_OBJECT
public:
    bool                    Smoothing;                                  // True do smoothing in preview

    // Image cache
    cLuLoImageCache         ImagesCache;                                // cLuLoImageCache List Object
    int64_t                 MemCacheMaxValue;                           // Maximum value for image cache

    // Database
    cDatabase               *Database;
    cSettingsTable          *SettingsTable;                             // Settings table on the database
    cFolderTable            *FoldersTable;                              // Folders table on the database
    cFilesTable             *FilesTable;                                // Files table on the database
    cSlideThumbsTable       *SlideThumbsTable;                          // Slide thumbnails table on the database
    cLocationTable          *LocationTable;                             // Locations table on the database

    QStringList             AllowVideoExtension;                        // List of all file extension allowed for video
    QStringList             AllowImageExtension;                        // List of all file extension allowed for image
    QStringList             AllowImageVectorExtension;                  // List of all file extension allowed for image
    QStringList             AllowMusicExtension;                        // List of all file extension allowed for music

    explicit                cBaseAppConfig(QObject *TheTopLevelWindow);
                            ~cBaseAppConfig();
};

#endif // CBASEAPPCONFIG_H
