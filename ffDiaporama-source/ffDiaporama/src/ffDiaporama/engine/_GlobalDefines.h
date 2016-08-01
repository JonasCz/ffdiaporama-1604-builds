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

#ifndef _GLOBALDEFINES_H
#define _GLOBALDEFINES_H

#include "BasicDefines.h"
#include <QAction>

#if QT_VERSION < 0x050000
    #ifdef Q_OS_WIN
    void    SetLFHeap();
    #endif
#endif

#ifdef Q_OS_WIN
    extern bool IsWindowsXP;    // True if OS is Windows/XP
#endif

//====================================================================

// Note : Application version and revision are in BUILDVERSION.txt
// Syntax for BUILDVERSION.txt is : <Version MAJOR.MINOR[.SUB|_beta_VERSION|_devel]>
#define APPLICATION_NAME                    "ffDiaporama"
// File extension of configuration files
#define CONFIGFILEEXT                       ".xml"
// Name of root node in the config xml file
#define CONFIGFILE_ROOTNAME                 "Configuration"
// Name of root node in the project xml file
#define APPLICATION_ROOTNAME                "Project"
// Name of root node in the title model xml files
#define TITLEMODEL_ROOTNAME                 "Model"
// Name of element in the title model xml files
#define TITLEMODEL_ELEMENTNAME              "TitleModel"
// Name of root node in the thumbnail xml files
#define THUMBMODEL_ROOTNAME                 "Thumbnail"
// Name of element in the thumbnail xml files
#define THUMBMODEL_ELEMENTNAME              "ProjectThumbnail"

// Application version : url to file on internet

    // devel version
#define BUILDVERSION_WEBURL                 "http://ffdiaporama.tuxfamily.org/Devel/BUILDVERSION.txt"
#define DOWNLOADPAGE                        "http://ffdiaporama.tuxfamily.org/?page_id=3635&lang=%1"
#define LOCAL_WEBURL                        "http://download.tuxfamily.org/ffdiaporama/Devel/"

    // stable version
//#define BUILDVERSION_WEBURL                 "http://ffdiaporama.tuxfamily.org/Stable/BUILDVERSION.txt"
//#define DOWNLOADPAGE                        "http://ffdiaporama.tuxfamily.org/?page_id=178&lang=%1"
//#define LOCAL_WEBURL                        "http://download.tuxfamily.org/ffdiaporama/Stable/"

// Global values
extern QString  CurrentAppName;             // Application name (including devel, beta, ...)
extern QString  CurrentAppVersion;          // Application version read from BUILDVERSION.txt
extern double   ScreenFontAdjust;           // System Font adjustement
extern int      SCALINGTEXTFACTOR;          // 700 instead of 400 (ffD 1.0/1.1/1.2) to keep similar display from plaintext to richtext
extern double   ScaleFontAdjust;

// URL to link to help page
#define HELPFILE_CAT                        "http://ffdiaporama.tuxfamily.org/?cat=%1&lang=%2"
#define ALLOWEDWEBLANGUAGE                  "en;fr;it;es;el;de;nl;pt;ru"

//====================================================================
// Latency for QTimer::singleShot(LATENCY, ... actions
#define LATENCY 5

//====================================================================

#define THUMBWITH                           600
#define THUMBHEIGHT                         800
#define THUMBGEOMETRY                       (double(THUMBWITH)/double(THUMBHEIGHT))
#define THUMB_THUMBWITH                     600/10
#define THUMB_THUMBHEIGHT                   800/10

//====================================================================

enum    FilterFile          {ALLFILE,IMAGEFILE,IMAGEVECTORFILE,VIDEOFILE,MUSICFILE};
enum    LoadConfigFileType  {USERCONFIGFILE,GLOBALCONFIGFILE};

//====================================================================
// Various functions
//====================================================================

QString ito2a(int val);
QString ito3a(int val);
QString UpInitials(QString Source);
QString FormatLongDate(QDate EventDate);
QString GetInformationValue(QString ValueToSearch,QStringList *InformationList);                        // Get a value from a list of value (value as store in pair name##value)
QString GetCumulInfoStr(QStringList *InformationList,QString Key1,QString Key2);                        // Return a string concataining each value of a key containing key1 and key2
int     getCpuCount();                                                                                  // Retrieve number of processor
QString GetTextSize(int64_t Size);                                                                      // transform a size (_int64) in a string with apropriate unit (Gb/Tb...)
QAction *CreateMenuAction(QImage *Icon,QString Text,int Data,bool Checkable,bool IsCheck,QWidget *Parent);
QAction *CreateMenuAction(QIcon Icon,QString Text,int Data,bool Checkable,bool IsCheck,QWidget *Parent);

//====================================================================
// VARIOUS
//====================================================================

enum SELECTMODE {SELECTMODE_NONE, SELECTMODE_ONE, SELECTMODE_MULTIPLE};

#endif // _GLOBALDEFINES_H
