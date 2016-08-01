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

#ifndef CLOCATION_H
#define CLOCATION_H

// Basic inclusions (common to all files)
#include "_GlobalDefines.h"
#include "cBrushDefinition.h"

class cLocation {
public:
    enum LOCATIONTYPE {FREE,PROJECT,CHAPTER}                                LocationType;           // Indicate if this location is a link to another location
    qlonglong                                                               FavKey;                 // Database key of favorite definition for this location (or -1 if it's not a favorite)
    QString                                                                 Name;                   // Friendly name
    QString                                                                 Address;                // Address as text
    QString                                                                 FriendlyAddress;        // Friendly address
    double                                                                  GPS_cx,GPS_cy;          // GPS position (longitude/latitude)
    int                                                                     ZoomLevel;              // Preferred Map ZoomLevel
    qlonglong                                                               ThumbnailResKey;        // Key of a 64x64 image as thumb
    cBrushDefinition                                                        *Icon;                  // cBrushDefinition to create thumb
    QSize                                                                   MarkerSize;             // keep size
    enum MARKERCOMPO {ICONNAMEADDR,ICONNAME,ICON,NAME,NAMEADDR,ADDR}        MarkerCompo;            // Marker composition
    enum MARKERPOINT {MARKERPOINTPOINT,MARKERPOINTCIRCLE,MARKERPOINTRECT}   MarkerPointForm;        // GPS Position form
    enum MARKERFORM  {MARKERFORMRECT,MARKERFORMBUBLE}                       MarkerForm;             // Marker form
    cBrushDefinition::sMarker::MARKERSIZE                                   Size;                   // Size of the marker and the GPS Position
    enum MARKERDISTANCE {MARKERDISTNEAR,MARKERDISTNORMAL,MARKERDISTFAR}     Distance;               // Distance between the localization on the map and the marker

    explicit                cLocation(cApplicationConfig *ApplicationConfig);
    virtual                 ~cLocation();

    virtual void            CopyFromLocation(cLocation *Src);
    virtual void            SaveToXML(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel);
    virtual bool            LoadFromXML(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,QStringList *AliasList,bool *ModifyFlag,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes);

    virtual QImage          GetThumb(int IconSize);
    virtual void            AddToFavorite();
    virtual void            UpdateFavorite();
    virtual void            RemoveFavorite();
    virtual bool            LoadFromFavorite(qlonglong Key);
    virtual bool            SearchInFavorite();

signals:

public slots:

};

#endif // CLOCATION_H
