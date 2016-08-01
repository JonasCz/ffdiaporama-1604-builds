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

#include "cLocation.h"

#define DEFAULT_LineColor           "#000000"
#define DEFAULT_MarkerPointForm     cLocation::MARKERPOINTPOINT
#define DEFAULT_MarkerForm          cLocation::MARKERFORMRECT
#define DEFAULT_MarkerCompo         cLocation::ICONNAMEADDR
#define DEFAULT_Size                cBrushDefinition::sMarker::MEDIUM
#define DEFAULT_Position            cLocation::TOP
#define DEFAULT_Distance            cLocation::MARKERDISTNORMAL

cLocation::cLocation(cApplicationConfig *ApplicationConfig) {
    LocationType    =FREE;
    FavKey          =-1;
    ThumbnailResKey =-1;
    GPS_cx          =0;
    GPS_cy          =0;
    ZoomLevel       =13;
    MarkerPointForm =DEFAULT_MarkerPointForm;
    MarkerForm      =DEFAULT_MarkerForm;
    MarkerCompo     =DEFAULT_MarkerCompo;
    Size            =DEFAULT_Size;
    Distance        =DEFAULT_Distance;
    Icon            =new cBrushDefinition(NULL,ApplicationConfig);
}

cLocation::~cLocation() {
    delete Icon;
    Icon=NULL;
}

//========================================================================================================================

void cLocation::CopyFromLocation(cLocation *Src) {
    LocationType    =Src->LocationType;
    FavKey          =Src->FavKey;
    Name            =Src->Name;
    Address         =Src->Address;
    FriendlyAddress =Src->FriendlyAddress;
    GPS_cx          =Src->GPS_cx;
    GPS_cy          =Src->GPS_cy;
    ZoomLevel       =Src->ZoomLevel;
    ThumbnailResKey =-1;
    MarkerSize      =Src->MarkerSize;
    MarkerCompo     =Src->MarkerCompo;
    MarkerPointForm =Src->MarkerPointForm;
    MarkerForm      =Src->MarkerForm;
    Size            =Src->Size;
    Distance        =Src->Distance;
    Icon->CopyFromBrushDefinition(Src->Icon);
}

//========================================================================================================================

void cLocation::SaveToXML(QDomElement *ParentElement,QString,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel) {
    ParentElement->setAttribute("LocationType",LocationType);
    if ((!IsModel)||(IsModel && (LocationType==FREE))) {
        ParentElement->setAttribute("Name",Name);
        ParentElement->setAttribute("FAddress",FriendlyAddress);
        ParentElement->setAttribute("GPS_cx",GPS_cx);
        ParentElement->setAttribute("GPS_cy",GPS_cy);
    }
    if (LocationType==FREE) {
        ParentElement->setAttribute("Address",Address);
        ParentElement->setAttribute("ZoomLevel",ZoomLevel);
        Icon->SaveToXML(ParentElement,"Icon",PathForRelativPath,ForceAbsolutPath,ReplaceList,ResKeyList,false);
        if (ResKeyList) ResKeyList->append(ThumbnailResKey);
        ParentElement->setAttribute("ThumbResKey",ThumbnailResKey);
    }
    ParentElement->setAttribute("MarkerW",MarkerSize.width());
    ParentElement->setAttribute("MarkerH",MarkerSize.height());
    if (Size!=DEFAULT_Size)                         ParentElement->setAttribute("Size",int(Size));
    if (Distance!=DEFAULT_Distance)                 ParentElement->setAttribute("Distance",int(Distance));
    if (MarkerPointForm!=DEFAULT_MarkerPointForm)   ParentElement->setAttribute("MarkerPointForm",int(MarkerPointForm));
    if (MarkerCompo!=DEFAULT_MarkerCompo)           ParentElement->setAttribute("MarkerCompo",int(MarkerCompo));
    if (MarkerForm!=DEFAULT_MarkerForm)             ParentElement->setAttribute("MarkerForm",int(MarkerForm));
}

//========================================================================================================================

bool cLocation::LoadFromXML(QDomElement *ParentElement,QString,QString PathForRelativPath,QStringList *AliasList,bool *ModifyFlag,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes) {
    bool IsOk=true;
    if (ParentElement->hasAttribute("LocationType"))    LocationType=(LOCATIONTYPE)ParentElement->attribute("LocationType").toInt();
    if (ParentElement->hasAttribute("Name"))            Name            =ParentElement->attribute("Name");
    if (ParentElement->hasAttribute("FAddress"))        FriendlyAddress =ParentElement->attribute("FAddress");
    if (ParentElement->hasAttribute("GPS_cx"))          GPS_cx          =GetDoubleValue(*ParentElement,"GPS_cx");
    if (ParentElement->hasAttribute("GPS_cy"))          GPS_cy          =GetDoubleValue(*ParentElement,"GPS_cy");
    if (LocationType==FREE) {
        if (ParentElement->hasAttribute("Address"))         Address         =ParentElement->attribute("Address");
        if (ParentElement->hasAttribute("ZoomLevel"))       ZoomLevel       =ParentElement->attribute("ZoomLevel").toInt();
        if (ParentElement->hasAttribute("ThumbResKey"))     ThumbnailResKey =ParentElement->attribute("ThumbResKey").toLongLong();
        IsOk=Icon->LoadFromXML(ParentElement,"Icon",PathForRelativPath,AliasList,ModifyFlag,ResKeyList,DuplicateRes);
        if ((IsOk)&&(ThumbnailResKey==-1)) {
            QImage ThumbImage;
            if (Icon->MediaObject) {
                ThumbImage=Icon->GetImageDiskBrush(QRect(0,0,64,64),true,0,NULL,1,NULL);
                Icon->ApplicationConfig->SlideThumbsTable->SetThumbs(&ThumbnailResKey,ThumbImage);
            } else {
                ThumbImage=QImage(64,64,QImage::Format_ARGB32_Premultiplied);
                ThumbImage.fill(Qt::white);
            }
        } else {
            // Translate ThumbnailResKey is needed
            if (ResKeyList) for (int ResNum=0;ResNum<ResKeyList->count();ResNum++) if (ThumbnailResKey==ResKeyList->at(ResNum).OrigKey) {
                ThumbnailResKey=ResKeyList->at(ResNum).NewKey;
                break;
            }
            // Duplicate ressource if needed
            if (DuplicateRes) {
                QImage ThumbImage;
                Icon->ApplicationConfig->SlideThumbsTable->GetThumbs(&ThumbnailResKey,&ThumbImage);
                ThumbnailResKey=-1;
                Icon->ApplicationConfig->SlideThumbsTable->SetThumbs(&ThumbnailResKey,ThumbImage);
            }
        }
        if (FavKey==-1) SearchInFavorite();
        if ((FriendlyAddress.isEmpty())&&(!Address.isEmpty())) FriendlyAddress=Address;
    }
    if (ParentElement->hasAttribute("MarkerW"))         MarkerSize.setWidth(ParentElement->attribute("MarkerW").toInt());
    if (ParentElement->hasAttribute("MarkerH"))         MarkerSize.setHeight(ParentElement->attribute("MarkerH").toInt());
    if (ParentElement->hasAttribute("Size"))            Size            =(cBrushDefinition::sMarker::MARKERSIZE)ParentElement->attribute("Size").toInt();
    if (ParentElement->hasAttribute("Distance"))        Distance        =(MARKERDISTANCE)ParentElement->attribute("Distance").toInt();
    if (ParentElement->hasAttribute("MarkerPointForm")) MarkerPointForm =(MARKERPOINT)ParentElement->attribute("MarkerPointForm").toInt();
    if (ParentElement->hasAttribute("MarkerCompo"))     MarkerCompo     =(MARKERCOMPO)ParentElement->attribute("MarkerCompo").toInt();
    if (ParentElement->hasAttribute("MarkerForm"))      MarkerForm      =(MARKERFORM)ParentElement->attribute("MarkerForm").toInt();
    return IsOk;
}

//========================================================================================================================

void cLocation::AddToFavorite() {
    QImage  Image;
    if (Icon->MediaObject) Icon->GetImageDiskBrush(QRect(0,0,64,64),true,0,NULL,1,NULL); else {
        Image=QImage(64,64,QImage::Format_ARGB32_Premultiplied);
        Image.fill(Qt::white);
    }
    QDomDocument domDocument;
    QDomElement  root=domDocument.createElement("Icon");
    domDocument.appendChild(root);
    Icon->SaveToXML(&root,"Icon","",true,NULL,NULL,false);
    FavKey=Icon->ApplicationConfig->LocationTable->AppendLocation(Name,Address,FriendlyAddress,GPS_cy,GPS_cx,ZoomLevel,domDocument.toString(),Image);
}

//========================================================================================================================

void cLocation::UpdateFavorite() {
    QImage  Image;
    if (Icon->MediaObject) Icon->GetImageDiskBrush(QRect(0,0,64,64),true,0,NULL,1,NULL); else {
        Image=QImage(64,64,QImage::Format_ARGB32_Premultiplied);
        Image.fill(Qt::white);
    }
    QDomDocument domDocument;
    QDomElement  root=domDocument.createElement("Icon");
    domDocument.appendChild(root);
    Icon->SaveToXML(&root,"Icon","",true,NULL,NULL,false);
    Icon->ApplicationConfig->LocationTable->UpdateLocation(FavKey,Name,Address,FriendlyAddress,GPS_cy,GPS_cx,ZoomLevel,domDocument.toString(),Image);
}

//========================================================================================================================

void cLocation::RemoveFavorite() {
    if (FavKey==-1) return;
    QSqlQuery Query(Icon->ApplicationConfig->Database->db);
    Query.prepare(QString("DELETE FROM Location WHERE Key=:Key"));
    Query.bindValue(":Key",FavKey,QSql::In);
    if (!Query.exec()) DisplayLastSQLError(&Query);
}

//=====================================================================================================

bool cLocation::LoadFromFavorite(qlonglong Key) {
    QSqlQuery Query(Icon->ApplicationConfig->Database->db);
    Query.prepare(QString("SELECT Name,Address,FAddress,Latitude,Longitude,Zoomlevel,Icon,Thumbnail FROM Location WHERE Key=:Key"));
    Query.bindValue(":Key",Key,QSql::In);
    if (!Query.exec()) {
        DisplayLastSQLError(&Query);
        return false;
    }
    while (Query.next()) {
        FavKey          =Key;
        Name            =Query.value(0).toString();
        Address         =Query.value(1).toString();
        FriendlyAddress =Query.value(2).toString();
        GPS_cy          =Query.value(3).toDouble();
        GPS_cx          =Query.value(4).toDouble();
        ZoomLevel       =Query.value(5).toInt();
        QString sIcon   =Query.value(6).toString();
        QByteArray Data =Query.value(7).toByteArray();
        QImage Thumb;
        if (!Data.isEmpty()) Thumb.loadFromData(Data);
        QDomDocument domDocument;
        QString      errorStr;
        int          errorLine,errorColumn;
        if (domDocument.setContent(sIcon,true,&errorStr,&errorLine,&errorColumn)) {
            if ((domDocument.elementsByTagName("Icon").length()>0)&&(domDocument.elementsByTagName("Icon").item(0).isElement()==true)) {
                QDomElement Element=domDocument.elementsByTagName("Icon").item(0).toElement();
                Icon->LoadFromXML(&Element,"Icon","",NULL,NULL,NULL,true);
                QImage ThumbImage;
                if (Thumb.isNull()) {
                    ThumbImage=Icon->GetImageDiskBrush(QRect(0,0,64,64),false,0,NULL,1,NULL);
                    if (Icon->MediaObject) Icon->GetImageDiskBrush(QRect(0,0,64,64),true,0,NULL,1,NULL); else {
                        ThumbImage=QImage(64,64,QImage::Format_ARGB32_Premultiplied);
                        ThumbImage.fill(Qt::white);
                    }
                } else ThumbImage=Thumb;
                Icon->ApplicationConfig->ImagesCache.RemoveImageObject(ThumbnailResKey,-1);
                Icon->ApplicationConfig->SlideThumbsTable->SetThumbs(&ThumbnailResKey,ThumbImage);
                return true;
            }
        }
    }
    return false;
}

//=====================================================================================================

bool cLocation::SearchInFavorite() {
    bool      IsOk=false;
    QSqlQuery Query(Icon->ApplicationConfig->Database->db);
    Query.prepare(QString("SELECT Key FROM Location WHERE Latitude=:Latitude AND Longitude=:Longitude"));
    Query.bindValue(":Latitude", GPS_cy,QSql::In);
    Query.bindValue(":Longitude",GPS_cx,QSql::In);
    if (!Query.exec()) {
        DisplayLastSQLError(&Query);
        return false;
    }
    while (Query.next()) {
        FavKey=Query.value(0).toLongLong();
        IsOk=true;
    }
    return IsOk;
}

//=====================================================================================================

QImage cLocation::GetThumb(int IconSize) {
    QImage Thumb;
    if (Icon->MediaObject) {
        cLuLoImageCacheObject *ImageObject=Icon->ApplicationConfig->ImagesCache.FindObject(ThumbnailResKey,-1,QDateTime(),0,true,true);
        if (ImageObject) Thumb=ImageObject->ValidateCacheRenderImageNC(ThumbnailResKey);
        if (Thumb.isNull()) {
            Thumb=Icon->GetImageDiskBrush(QRect(0,0,64,64),false,0,NULL,1,NULL);
            if (!Thumb.isNull()) {
                Icon->ApplicationConfig->SlideThumbsTable->SetThumbs(&ThumbnailResKey,Thumb);
                if (ImageObject) ImageObject->CacheRenderImage=new QImage(Thumb.copy());
            }
        }
    } else {
        Thumb=QImage(64,64,QImage::Format_ARGB32_Premultiplied);
        Thumb.fill(Qt::white);
    }
    if ((!Thumb.isNull())&&(Thumb.width()!=IconSize)) Thumb=Thumb.scaledToWidth(IconSize);
    return Thumb;
}
