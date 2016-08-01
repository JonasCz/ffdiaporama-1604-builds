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

#ifndef cDriveList_H
#define cDriveList_H

// Basic inclusions (common to all files)
#include "_GlobalDefines.h"

// Include some additional standard class
#include <QString>
#include <QIcon>
#include <QList>

// this class will be define later
class cApplicationConfig;

// class to handle one drive
class cDriveDesc {
public:
    QString     Path;
    QString     Label;
    int64_t     Size;
    int64_t     Used;
    int64_t     Avail;
    QImage      IconDrive;
    QString     Device;         // Linux only : associated device path (/dev/...)
    bool        IsReadOnly;
    int         Flag;           // Use by cDriveList::UpdateDriveList = 0=No longer exist, 1=Already, 2=New drive

    cDriveDesc(QString Path,QString Alias,cApplicationConfig *ApplicationConfig);
};

// class to handle drive list
class cDriveList {
public:
    QList<cDriveDesc>       List;                      // Table of alias for drives
    cApplicationConfig  *ApplicationConfig;

    cDriveList(cApplicationConfig *ApplicationConfig);
    virtual             ~cDriveList() {}

    virtual void        UpdateDriveList();
    virtual QIcon       GetFolderIcon(QString FilePath);

private:
    bool                SearchDrive(QString Path);
};

extern QString  PersonalFolder;              // Personnal home folder
extern QString  DefaultMediaPath;            // default folder for image/video
extern QString  DefaultMusicPath;            // default folder for music
extern QString  DefaultProjectPath;          // default folder for project
extern QString  DefaultExportPath;           // default folder for project export
extern QString  DefaultRenderVideoPath;      // default folder for render video
extern QString  DefaultRenderAudioPath;      // default folder for render audio
extern QString  DefaultCaptureImage;         // default folder for captured image
extern QString  DefaultBrowserPath;          // default folder for integrated browser
extern QString  DefaultPositionIconPath;     // default folder for icon of GPS location

extern QString ClipArtFolder,CAF;
extern QString ModelFolder,MFD;

#endif // cDriveList_H
