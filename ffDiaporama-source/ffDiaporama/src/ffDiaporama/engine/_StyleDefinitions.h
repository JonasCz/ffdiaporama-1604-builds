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

#ifndef _STYLEDEFINITIONS_H
#define _STYLEDEFINITIONS_H

// Basic inclusions (common to all files)
#include "_GlobalDefines.h"
//#include "cDeviceModelDef.h"

// Include some additional standard class
#include <QComboBox>

//============================================
// Define styles name used in xml file
//============================================

#define STYLENAME_TEXTSTYLE                 "TextStyleCollection"
#define STYLENAME_BACKGROUNDSTYLE           "TextBackgroundStyleCollection"
#define STYLENAME_COORDINATESTYLE           "StyleCoordinateCollection"
#define STYLENAME_BLOCKSHAPESTYLE           "StyleBlockShapeCollection"

// this class is define later
class cApplicationConfig;

//============================================
// Style collection item definition
//============================================

class cStyleCollectionItem {
public:
    bool    FromGlobalConf;                                     // true if device model is defined in global config file
    bool    FromUserConf;                                       // true if device model is defined in user config file
    bool    IsFind;                                             // true if device model format is supported by installed version of libav
    int     StyleIndex;                                         // Style number index key
    QString StyleName;                                          // Long name for the style
    QString StyleDef;                                           // Style definition

    // Save value to be able to reset to default
    QString BckStyleName;                                       // Backup value for style name (use for reset to global conf)
    QString BckStyleDef;                                        // Backup value for style definition (use for reset to global conf)

    cStyleCollectionItem(bool IsGlobalConf,int IndexKey,QString StyleName,QString StyleDef);
    cStyleCollectionItem(cStyleCollectionItem *Item);
    ~cStyleCollectionItem();

    void                SaveToXML(QDomElement &domDocument,QString ElementName);
    bool                LoadFromXML(QDomElement domDocument,QString ElementName,bool IsUserConfigFile,bool MustCheck);
    QString             GetFilteredPart();
};

//============================================
// Style collection definition
//============================================

class cStyleCollection {
public:
    QString                     CollectionName;                 // Collection name
    QList<cStyleCollectionItem> Collection;                     // Collection items
    bool                        GeometryFilter;                 // True if GeometryFilter is ON
    QString                     ActiveFilter;
    cStyleCollection            *SourceCollection;              // SourceCollection if collection is an undo object

    cStyleCollection();
    ~cStyleCollection();

    void                SaveToXML(QDomElement &root);
    void                LoadFromXML(QDomElement root,LoadConfigFileType TypeConfigFile);
    void                SetProjectGeometryFilter(ffd_GEOMETRY Geometry);
    void                SetImageGeometryFilter(ffd_GEOMETRY ProjectGeometry,int ImageGeometry);
    void                SortList();
    QString             GetStyleName(QString StyleDef);
    QString             GetStyleDef(QString StyleName);
    void                FillCollectionCB(QComboBox *CB,QString ActualStyleName);
    QString             PopupCollectionMenu(QWidget *ParentWindow,cApplicationConfig *BaseApplicationConfig,QString ActualStyleDef);
    void                UpdateExistingStyle(QString StyleName,QString ActualStyleDef);
    void                CreateNewStyle(QWidget *ParentWindow,QString ActualStyleDef);
    void                ManageExistingStyle(QWidget *ParentWindow,cApplicationConfig *BaseApplicationConfig);
    void                StringToStringList(QString String,QStringList &List);
    void                StringDefToStringList(QString String,QStringList &List);
    void                DoTranslateCollection();
    QString             DecodeString(QString String);
    QString             EncodeString(QComboBox *CB,ffd_GEOMETRY ProjectGeometry,int ImageGeometry);
    cStyleCollection    *PrepUndo();
    void                ApplyUndo(cStyleCollection *UndoCollection);
};

#endif // _STYLEDEFINITIONS_H
