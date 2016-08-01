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

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"

#include <QFileInfoList>
#include <QFileInfo>
#include <QDir>
#include <QFile>

#include <QPainter>
#include <QModelIndex>
#include <QModelIndexList>

#include "QCustomFolderTable.h"

#include "ImageFilters.h"
#include <DlgInfoFile/DlgInfoFile.h>

#define FILETABLESTATE_FILETOCHEK   1
#define FileToCheckIcon             ":/img/player_time.png"
#define CELLBORDER                  8

int DISPLAYFILENAMEHEIGHT           =20;                        // Will be compute because it's not the same for all operating system

//********************************************************************************************************
// MediaFileItem
//********************************************************************************************************

MediaFileItem::MediaFileItem(cBaseMediaFile *MediaFileObject) {
    ApplicationConfig   =MediaFileObject->ApplicationConfig;
    FileKey             =MediaFileObject->FileKey;
    FolderKey           =MediaFileObject->FolderKey;
    ObjectType          =MediaFileObject->ObjectType;
    IsInformationValide =MediaFileObject->IsInformationValide;
    DefaultTypeIcon16   =MediaFileObject->GetDefaultTypeIcon(cCustomIcon::ICON16);
    DefaultTypeIcon100  =MediaFileObject->GetDefaultTypeIcon(cCustomIcon::ICON100);
    ShortName           =MediaFileObject->ShortName();
    Duration            =MediaFileObject->GetRealDuration();
    Modified            =MediaFileObject->ModifDateTime;
}

QString MediaFileItem::GetTextForColumn(int Col) {
    if (Col<TextToDisplay.count()) return TextToDisplay[Col]; else return "";
}

cBaseMediaFile *MediaFileItem::CreateBaseMediaFile() const {
    cBaseMediaFile *MediaObject=NULL;
    switch (ObjectType) {
        case OBJECTTYPE_FOLDER   :      MediaObject=new cFolder(ApplicationConfig);                  break;
        case OBJECTTYPE_UNMANAGED:      MediaObject=new cUnmanagedFile(ApplicationConfig);           break;
        case OBJECTTYPE_FFDFILE  :
            MediaObject=new cffDProjectFile(ApplicationConfig);          break;
        case OBJECTTYPE_IMAGEVECTOR:
        case OBJECTTYPE_IMAGEFILE:      MediaObject=new cImageFile(ApplicationConfig);               break;
        case OBJECTTYPE_VIDEOFILE:      MediaObject=new cVideoFile(ApplicationConfig);              break;
        case OBJECTTYPE_MUSICFILE:      MediaObject=new cMusicObject(ApplicationConfig);             break;
        case OBJECTTYPE_THUMBNAIL:      MediaObject=new cImageFile(ApplicationConfig);               break;
        case OBJECTTYPE_IMAGECLIPBOARD:
        case OBJECTTYPE_MANAGED:
        case OBJECTTYPE_GMAPSMAP:       break;  // to avoid warning
    }
    if (MediaObject) {
        MediaObject->ObjectType=ObjectType;
        MediaObject->FolderKey =FolderKey;
        MediaObject->FileKey   =FileKey;
        MediaObject->GetInformationFromFile(MediaObject->FileName(),NULL,NULL,FolderKey);
    }
    return MediaObject;
}

//====================================================================================================================

QImage MediaFileItem::GetIcon(cCustomIcon::IconSize Size,bool useDelayed) {
    QImage Icon16,Icon100;
    ApplicationConfig->FilesTable->GetThumbs(FileKey,&Icon16,&Icon100);
    if (Size==cCustomIcon::ICON16) {
        if (Icon16.isNull()) {
            if (ObjectType==OBJECTTYPE_UNMANAGED)   Icon16=ApplicationConfig->DefaultFILEIcon.Icon16.copy();
                else if (useDelayed)                Icon16=ApplicationConfig->DefaultDelayedIcon.GetIcon(cCustomIcon::ICON16)->copy();
                else                                Icon16=DefaultTypeIcon16->copy();
        }
        return Icon16;
    } else {
        if (Icon100.isNull()) {
            if (ObjectType==OBJECTTYPE_UNMANAGED)   Icon100=ApplicationConfig->DefaultFILEIcon.Icon100.copy();
                else if (useDelayed)                Icon100=ApplicationConfig->DefaultDelayedIcon.GetIcon(cCustomIcon::ICON100)->copy();
                else                                Icon100=DefaultTypeIcon100->copy();
        }
        return Icon100;
    }
}

//********************************************************************************************************
// QCustomFolderTable
//********************************************************************************************************

class QCustomStyledItemDelegate : public QStyledItemDelegate {
//Q_OBJECT
public:
    QCustomFolderTable  *ParentTable;

    explicit QCustomStyledItemDelegate(QObject *parent);

    virtual void    paint(QPainter *painter,const QStyleOptionViewItem &option,const QModelIndex &index) const;
};

//========================================================================================================================

QCustomStyledItemDelegate::QCustomStyledItemDelegate(QObject *parent):QStyledItemDelegate(parent) {
    ParentTable=(QCustomFolderTable *)parent;
}

//========================================================================================================================

void QCustomStyledItemDelegate::paint(QPainter *Painter,const QStyleOptionViewItem &option,const QModelIndex &index) const {
    if (((ParentTable->CurrentMode==DISPLAY_DATA)&&(index.row()>=ParentTable->MediaList.count()))||
        ((ParentTable->CurrentMode!=DISPLAY_DATA)&&(index.row()*ParentTable->columnCount()+index.column()>=ParentTable->MediaList.count()))) {

        // index is out of range
        Painter->fillRect(option.rect,Qt::white);

    } else {
        int ItemIndex=(ParentTable->CurrentMode==DISPLAY_DATA?index.row():index.row()*ParentTable->columnCount()+index.column());
        if (ItemIndex>=ParentTable->MediaList.count()) return;

        bool ThreadToPause=false;
        if (ParentTable->ScanMediaList.isRunning()) {
            ThreadToPause=true;
            ParentTable->ScanMediaList.pause();
        }

        if (ParentTable->CurrentMode==DISPLAY_DATA) {

            QString         TextToDisplay  =ParentTable->MediaList[ItemIndex].GetTextForColumn(index.column());
            QImage          ImageToDisplay =(index.column()==0)?ParentTable->MediaList[ItemIndex].GetIcon(cCustomIcon::ICON16,true):
                                            (index.column()==ParentTable->ColImageType)?ParentTable->MediaList[ItemIndex].DefaultTypeIcon16->copy():
                                            QImage();
            Qt::Alignment   Alignment      =((Qt::Alignment)(ParentTable->horizontalHeaderItem(index.column())?ParentTable->horizontalHeaderItem(index.column())->textAlignment():Qt::AlignHCenter))|Qt::AlignVCenter;
            int             DecalX         =(!ImageToDisplay.isNull()?18:0);
            int             addY           =(option.rect.height()-16)/2;
            QColor          Background     =((index.row() & 0x01)==0x01)?Qt::white:QColor(0xE0,0xE0,0xE0);
            QFont           font;
            QTextOption     OptionText;
            QPen            Pen;

            // Setup default brush
            Painter->setBrush(Background);
            // Setup default pen
            Pen.setColor(Qt::black);
            Pen.setWidth(1);
            Pen.setStyle(Qt::SolidLine);
            Painter->setPen(Pen);

            // Setup font and text options
            font=QFont("Sans serif",9,QFont::Normal,QFont::StyleNormal);
            font.setBold(ParentTable->MediaList[ItemIndex].ObjectType==OBJECTTYPE_FOLDER);
            font.setUnderline(false);
            Painter->setFont(font);
            OptionText=QTextOption(Alignment);                    // Setup alignement
            OptionText.setWrapMode(QTextOption::NoWrap);          // Setup word wrap text option

            // Drawing
            Painter->fillRect(option.rect,Background);
            if (!ImageToDisplay.isNull()) Painter->drawImage(QRectF(option.rect.x()+1,option.rect.y()+addY,16,16),ImageToDisplay);
            Painter->drawText(QRectF(option.rect.x()+2+DecalX,option.rect.y()+1,option.rect.width()-4-DecalX,option.rect.height()-2),TextToDisplay,OptionText);

        } else {

            QImage      Icon=ParentTable->MediaList[ItemIndex].GetIcon(cCustomIcon::ICON100,true);
            int         addX=0;
            int         addY=0;
            QFont       font;
            QTextOption OptionText;
            QPen        Pen;

            // Draw Icon
            if (!Icon.isNull()) {
                addX=(option.rect.width()-Icon.width())/2;
                if (ParentTable->DisplayFileName) addY=(option.rect.height()-Icon.height()-DISPLAYFILENAMEHEIGHT)/3;
                    else addY=(option.rect.height()-Icon.height())/2;
                Painter->drawImage(QRectF(option.rect.x()+1+addX,option.rect.y()+1+addY,Icon.width(),Icon.height()),Icon);
            }

            // Setup default brush
            Painter->setBrush(Qt::NoBrush);
            // Setup default pen
            Pen.setColor(Qt::black);
            Pen.setWidth(1);
            Pen.setStyle(Qt::SolidLine);
            Painter->setPen(Pen);

            // Draw file name if needed
            if (ParentTable->DisplayFileName) {
                // Setup default font
                font=QFont("Sans serif",8,QFont::Normal,QFont::StyleNormal);
                font.setUnderline(false);
                Painter->setFont(font);
                #ifdef Q_OS_WIN
                font.setPointSizeF(double(120)/double(Painter->fontMetrics().boundingRect("0").height()));                      // Scale font
                #else
                font.setPointSizeF((double(100)/double(Painter->fontMetrics().boundingRect("0").height()))*ScreenFontAdjust);   // Scale font
                #endif
                Painter->setFont(font);

                OptionText=QTextOption(Qt::AlignHCenter|Qt::AlignTop);                      // Setup alignement
                OptionText.setWrapMode(QTextOption::WrapAtWordBoundaryOrAnywhere);          // Setup word wrap text option
                Painter->drawText(QRectF(option.rect.x()+1,option.rect.y()+option.rect.height()-1-DISPLAYFILENAMEHEIGHT,option.rect.width()-2,DISPLAYFILENAMEHEIGHT),
                                  ParentTable->MediaList[ItemIndex].ShortName,OptionText);
            }

        }

        // Selection mode (Note: MouseOver is removed because it works correctly only on KDE !)
        if (option.state & QStyle::State_Selected) {
            Painter->setPen(QPen(Qt::NoPen));
            Painter->setBrush(QBrush(Qt::blue));
            Painter->setOpacity(0.25);
            Painter->drawRect(option.rect.x(),option.rect.y(),option.rect.width(),option.rect.height());
            Painter->setOpacity(1);
        }

        if (ThreadToPause) ParentTable->ScanMediaList.resume();
    }
}

//********************************************************************************************************
// QCustomFolderTable
//********************************************************************************************************

QCustomFolderTable::QCustomFolderTable(QWidget *parent):QTableWidget(parent) {
    DefaultModel            =model();               // Save default QAbstractItemModel
    DefaultDelegate         =itemDelegate();        // Save default QAbstractItemDelegate
    IconDelegate            =(QAbstractItemDelegate *)new QCustomStyledItemDelegate(this);
    ApplicationConfig       =NULL;
    StopAllEvent            =false;
    InSelChange             =false;
    CurrentShowFolderNumber =0;
    CurrentShowFilesNumber  =0;
    CurrentShowFolderNumber =0;
    CurrentTotalFilesNumber =0;
    CurrentShowFolderSize   =0;
    CurrentTotalFolderSize  =0;
    CurrentDisplayItem      =0;
    CurrentShowDuration     =0;
    StopScanMediaList       =false;
    ScanMediaListProgress   =false;
    InScanMediaFunction     =false;

    setContextMenuPolicy(Qt::CustomContextMenu);
    connect(this,SIGNAL(NeedResizeColumns()),this,SLOT(DoResizeColumns()));
    connect(this,SIGNAL(customContextMenuRequested(const QPoint)),this,SLOT(s_ContextMenu(const QPoint)));
}

//====================================================================================================================

QCustomFolderTable::~QCustomFolderTable() {
    // Ensure scan thread is stoped
    StopAllEvent=true;
    EnsureThreadIsStopped();
    // Clear MediaList
    while (!MediaList.isEmpty()) MediaList.removeLast();
}

//====================================================================================================================

void QCustomFolderTable::InitSettings(cApplicationConfig *ApplicationConfig,BROWSER_TYPE_ID BrowserType) {
    this->ApplicationConfig =ApplicationConfig;
    this->BrowserType       =BrowserType;

    BROWSERString           =BrowserTypeDef[BrowserType].BROWSERString;
    DefaultPath             =*BrowserTypeDef[BrowserType].DefaultPath;
    AllowedFilter           =BrowserTypeDef[BrowserType].AllowedFilter|FILTERALLOW_OBJECTTYPE_FOLDER;

    SortFile                =ApplicationConfig->SettingsTable->GetIntValue(QString("%1_SortFile")             .arg(BROWSERString),BrowserTypeDef[BrowserType].SortFile);
    ShowFoldersFirst        =ApplicationConfig->SettingsTable->GetIntValue(QString("%1_ShowFoldersFirst")     .arg(BROWSERString),BrowserTypeDef[BrowserType].ShowFoldersFirst)==1;
    ShowHiddenFilesAndDir   =ApplicationConfig->SettingsTable->GetIntValue(QString("%1_ShowHiddenFilesAndDir").arg(BROWSERString),BrowserTypeDef[BrowserType].ShowHiddenFilesAndDir)==1;
    ShowMntDrive            =ApplicationConfig->SettingsTable->GetIntValue(QString("%1_ShowMntDrive")         .arg(BROWSERString),BrowserTypeDef[BrowserType].ShowMntDrive)==1;
    DisplayFileName         =ApplicationConfig->SettingsTable->GetIntValue(QString("%1_DisplayFileName")      .arg(BROWSERString),BrowserTypeDef[BrowserType].DisplayFileName)==1;
    CurrentFilter           =ApplicationConfig->SettingsTable->GetIntValue(QString("%1_CurrentFilter")        .arg(BROWSERString),BrowserTypeDef[BrowserType].CurrentFilter);
    CurrentMode             =ApplicationConfig->SettingsTable->GetIntValue(QString("%1_CurrentMode")          .arg(BROWSERString),BrowserTypeDef[BrowserType].CurrentMode);
    CurrentPath             =ApplicationConfig->RememberLastDirectories?QDir::toNativeSeparators(ApplicationConfig->SettingsTable->GetTextValue(QString("%1_path").arg(BROWSERString),DefaultPath)):DefaultPath;

    SetMode();
}

//====================================================================================================================

void QCustomFolderTable::SaveSettings() {
    ApplicationConfig->SettingsTable->SetIntValue(QString("%1_SortFile")             .arg(BROWSERString),SortFile);
    ApplicationConfig->SettingsTable->SetIntValue(QString("%1_ShowFoldersFirst")     .arg(BROWSERString),ShowFoldersFirst?1:0);
    ApplicationConfig->SettingsTable->SetIntValue(QString("%1_ShowHiddenFilesAndDir").arg(BROWSERString),ShowHiddenFilesAndDir?1:0);
    ApplicationConfig->SettingsTable->SetIntValue(QString("%1_ShowMntDrive")         .arg(BROWSERString),ShowMntDrive?1:0);
    ApplicationConfig->SettingsTable->SetIntValue(QString("%1_DisplayFileName")      .arg(BROWSERString),DisplayFileName?1:0);
    ApplicationConfig->SettingsTable->SetIntValue(QString("%1_CurrentFilter")        .arg(BROWSERString),CurrentFilter);
    ApplicationConfig->SettingsTable->SetIntValue(QString("%1_CurrentMode")          .arg(BROWSERString),CurrentMode);
    if (ApplicationConfig->RememberLastDirectories) ApplicationConfig->SettingsTable->SetTextValue(QString("%1_path").arg(BROWSERString),QDir::toNativeSeparators(CurrentPath));
}

//====================================================================================================================

QMimeData *QCustomFolderTable::mimeData(const QList <QTableWidgetItem *>) const {
    QMimeData   *mimeData=new QMimeData;
    QList<QUrl> UrlList;
    QList<cBaseMediaFile*> SelMediaList;
    GetCurrentSelectedMediaFile(&SelMediaList);
    for (int i=0;i<SelMediaList.count();i++)
        UrlList.append(QUrl().fromLocalFile(QDir::toNativeSeparators(SelMediaList[i]->FileName())));
    mimeData->setUrls(UrlList);
    while (!SelMediaList.isEmpty()) delete SelMediaList.takeLast();
    return mimeData;
}


//====================================================================================================================

void QCustomFolderTable::selectAll() {
    InSelChange=true;
    QTableWidget::selectAll();
    InSelChange=false;
    emit RefreshFolderInfo();
}

//====================================================================================================================

void QCustomFolderTable::keyReleaseEvent(QKeyEvent *event) {
    if ((selectionModel()->selectedIndexes().count()>0)&&(!event->isAutoRepeat())) {
        if (event->matches(QKeySequence::Delete))   emit RemoveFiles();
            else if (event->key()==Qt::Key_Insert)  emit InsertFiles();
            else if (event->key()==Qt::Key_F5)      emit Refresh();
            else if (event->key()==Qt::Key_F2)      emit RenameFiles();
            else QTableWidget::keyReleaseEvent(event);
    } else QTableWidget::keyReleaseEvent(event);
}

//====================================================================================================================

QString QCustomFolderTable::GetTextForColumn(int Col,cBaseMediaFile *MediaObject,QStringList *ExtendedProperties) {
    if ((StopAllEvent)||(Col>=columnCount())) return "";

    QString TextToDisplay="";
    QString ColName      =(horizontalHeaderItem(Col)!=NULL)?horizontalHeaderItem(Col)->text():"";

    if      (ColName==QApplication::translate("QCustomFolderTable","File","Column header"))             TextToDisplay=MediaObject->ShortName();
    else if (ColName==QApplication::translate("QCustomFolderTable","File Type","Column header"))        TextToDisplay=MediaObject->GetFileTypeStr();
    else if (ColName==QApplication::translate("QCustomFolderTable","File Size","Column header"))        TextToDisplay=MediaObject->GetFileSizeStr();
    else if (ColName==QApplication::translate("QCustomFolderTable","File Date","Column header"))        TextToDisplay=MediaObject->GetFileDateTimeStr();
    else if (ColName==QApplication::translate("QCustomFolderTable","Duration","Column header"))         TextToDisplay=MediaObject->GetRealDuration()!=QTime(0,0,0,0)?MediaObject->GetRealDuration().toString("HH:mm:ss.zzz"):"";
    else if (ColName==QApplication::translate("QCustomFolderTable","Image Size","Column header"))       TextToDisplay=MediaObject->GetImageSizeStr(cBaseMediaFile::SIZEONLY);
    else if (ColName==QApplication::translate("QCustomFolderTable","Image Format","Column header"))     TextToDisplay=MediaObject->GetImageSizeStr(cBaseMediaFile::FMTONLY);
    else if (ColName==QApplication::translate("QCustomFolderTable","Image Geometry","Column header"))   TextToDisplay=MediaObject->GetImageSizeStr(cBaseMediaFile::GEOONLY);
    else if (ColName==QApplication::translate("QCustomFolderTable","Video Codec","Column header"))      TextToDisplay=GetCumulInfoStr(ExtendedProperties,"Video","Codec");
    else if (ColName==QApplication::translate("QCustomFolderTable","Frame Rate","Column header"))       TextToDisplay=GetCumulInfoStr(ExtendedProperties,"Video","Frame rate");
    else if (ColName==QApplication::translate("QCustomFolderTable","Video Bitrate","Column header"))    TextToDisplay=GetCumulInfoStr(ExtendedProperties,"Video","Bitrate");
    else if (ColName==QApplication::translate("QCustomFolderTable","Audio Language","Column header"))   TextToDisplay=GetCumulInfoStr(ExtendedProperties,"Audio","language");
    else if (ColName==QApplication::translate("QCustomFolderTable","Audio Codec","Column header"))      TextToDisplay=GetCumulInfoStr(ExtendedProperties,"Audio","Codec");
    else if (ColName==QApplication::translate("QCustomFolderTable","Audio Channels","Column header"))   TextToDisplay=GetCumulInfoStr(ExtendedProperties,"Audio","Channels");
    else if (ColName==QApplication::translate("QCustomFolderTable","Audio Bitrate","Column header"))    TextToDisplay=GetCumulInfoStr(ExtendedProperties,"Audio","Bitrate");
    else if (ColName==QApplication::translate("QCustomFolderTable","Audio Frequency","Column header"))  TextToDisplay=GetCumulInfoStr(ExtendedProperties,"Audio","Frequency");
    else if (ColName==QApplication::translate("QCustomFolderTable","Title","Column header"))            TextToDisplay=MediaObject->ObjectType!=OBJECTTYPE_FFDFILE?GetInformationValue("title",ExtendedProperties):((cffDProjectFile *)MediaObject)->Title;
    else if (ColName==QApplication::translate("QCustomFolderTable","Artist","Column header"))           TextToDisplay=MediaObject->ObjectType!=OBJECTTYPE_FFDFILE?GetInformationValue("artist",ExtendedProperties):((cffDProjectFile *)MediaObject)->Author;
    else if (ColName==QApplication::translate("QCustomFolderTable","Author","Column header"))           TextToDisplay=MediaObject->ObjectType!=OBJECTTYPE_FFDFILE?GetInformationValue("artist",ExtendedProperties):((cffDProjectFile *)MediaObject)->Author;
    else if (ColName==QApplication::translate("QCustomFolderTable","Album","Column header"))            TextToDisplay=MediaObject->ObjectType!=OBJECTTYPE_FFDFILE?GetInformationValue("album",ExtendedProperties):((cffDProjectFile *)MediaObject)->Album;
    else if (ColName==QApplication::translate("QCustomFolderTable","Year","Column header"))             TextToDisplay=MediaObject->ObjectType!=OBJECTTYPE_FFDFILE?GetInformationValue("date",ExtendedProperties):((cffDProjectFile *)MediaObject)->EventDate.toString(ApplicationConfig->ShortDateFormat);
    else if (ColName==QApplication::translate("QCustomFolderTable","Track","Column header"))            TextToDisplay=GetInformationValue("track",ExtendedProperties);
    else if (ColName==QApplication::translate("QCustomFolderTable","Genre","Column header"))            TextToDisplay=GetInformationValue("genre",ExtendedProperties);
    else if (ColName==QApplication::translate("QCustomFolderTable","Comment","Column header"))          TextToDisplay=MediaObject->ObjectType!=OBJECTTYPE_FFDFILE?GetInformationValue("comment",ExtendedProperties):((cffDProjectFile *)MediaObject)->Comment;
    else if (ColName==QApplication::translate("QCustomFolderTable","Composer","Column header"))         TextToDisplay=MediaObject->ObjectType!=OBJECTTYPE_FFDFILE?GetInformationValue("composer",ExtendedProperties):((cffDProjectFile *)MediaObject)->Composer;
    else if (ColName==QApplication::translate("QCustomFolderTable","Encoder","Column header"))          TextToDisplay=GetInformationValue("encoder",ExtendedProperties);
    else if (ColName==QApplication::translate("QCustomFolderTable","Chapters","Column header")) {
        int NbrChapter=0;
        if (MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE) NbrChapter=((cVideoFile *)MediaObject)->NbrChapters;
        if (MediaObject->ObjectType==OBJECTTYPE_FFDFILE)   NbrChapter=((cffDProjectFile *)MediaObject)->NbrChapters;
        TextToDisplay=(NbrChapter>0?QString("%1").arg(NbrChapter):"");
    }
    return TextToDisplay;
}

//====================================================================================================================

int QCustomFolderTable::GetAlignmentForColumn(int Col) {
    if ((StopAllEvent)||(Col>=columnCount())) return Qt::AlignLeft;

    int     Alignment=Qt::AlignLeft;
    QString ColName  =(horizontalHeaderItem(Col)!=NULL)?horizontalHeaderItem(Col)->text():"";

    if      (ColName==QApplication::translate("QCustomFolderTable","File","Column header"))             Alignment=Qt::AlignLeft;
    else if (ColName==QApplication::translate("QCustomFolderTable","File Type","Column header"))        Alignment=Qt::AlignLeft;
    else if (ColName==QApplication::translate("QCustomFolderTable","File Size","Column header"))        Alignment=Qt::AlignRight;
    else if (ColName==QApplication::translate("QCustomFolderTable","File Date","Column header"))        Alignment=Qt::AlignLeft;
    else if (ColName==QApplication::translate("QCustomFolderTable","Duration","Column header"))         Alignment=Qt::AlignRight;
    else if (ColName==QApplication::translate("QCustomFolderTable","Image Size","Column header"))       Alignment=Qt::AlignHCenter;
    else if (ColName==QApplication::translate("QCustomFolderTable","Image Format","Column header"))     Alignment=Qt::AlignHCenter;
    else if (ColName==QApplication::translate("QCustomFolderTable","Chapters","Column header"))         Alignment=Qt::AlignHCenter;
    else if (ColName==QApplication::translate("QCustomFolderTable","Image Geometry","Column header"))   Alignment=Qt::AlignHCenter;
    else if (ColName==QApplication::translate("QCustomFolderTable","Video Codec","Column header"))      Alignment=Qt::AlignHCenter;
    else if (ColName==QApplication::translate("QCustomFolderTable","Frame Rate","Column header"))       Alignment=Qt::AlignHCenter;
    else if (ColName==QApplication::translate("QCustomFolderTable","Video Bitrate","Column header"))    Alignment=Qt::AlignHCenter;
    else if (ColName==QApplication::translate("QCustomFolderTable","Audio Language","Column header"))   Alignment=Qt::AlignHCenter;
    else if (ColName==QApplication::translate("QCustomFolderTable","Audio Codec","Column header"))      Alignment=Qt::AlignHCenter;
    else if (ColName==QApplication::translate("QCustomFolderTable","Audio Channels","Column header"))   Alignment=Qt::AlignHCenter;
    else if (ColName==QApplication::translate("QCustomFolderTable","Audio Bitrate","Column header"))    Alignment=Qt::AlignHCenter;
    else if (ColName==QApplication::translate("QCustomFolderTable","Audio Frequency","Column header"))  Alignment=Qt::AlignHCenter;
    else if (ColName==QApplication::translate("QCustomFolderTable","Title","Column header"))            Alignment=Qt::AlignLeft;
    else if (ColName==QApplication::translate("QCustomFolderTable","Artist","Column header"))           Alignment=Qt::AlignLeft;
    else if (ColName==QApplication::translate("QCustomFolderTable","Album","Column header"))            Alignment=Qt::AlignLeft;
    else if (ColName==QApplication::translate("QCustomFolderTable","Year","Column header"))             Alignment=Qt::AlignHCenter;
    else if (ColName==QApplication::translate("QCustomFolderTable","Track","Column header"))            Alignment=Qt::AlignHCenter;
    else if (ColName==QApplication::translate("QCustomFolderTable","Genre","Column header"))            Alignment=Qt::AlignLeft;
    else if (ColName==QApplication::translate("QCustomFolderTable","Comment","Column header"))          Alignment=Qt::AlignLeft;
    else if (ColName==QApplication::translate("QCustomFolderTable","Composer","Column header"))         Alignment=Qt::AlignLeft;
    else if (ColName==QApplication::translate("QCustomFolderTable","Encoder","Column header"))          Alignment=Qt::AlignLeft;
    return Alignment;
}

//====================================================================================================================

void QCustomFolderTable::EnsureThreadIsStopped() {
    // Ensure scan thread is stoped
    if (ScanMediaList.isRunning()) {
        StopScanMediaList=true;
        ScanMediaList.waitForFinished();
        // flush event queue"
        //while (QApplication::hasPendingEvents()) QApplication::processEvents();
        StopScanMediaList=false;
    }
}

//====================================================================================================================

int QCustomFolderTable::GetWidthForIcon() {
    int SizeColumn;
    if (CurrentMode==DISPLAY_ICON100) {
        SizeColumn=100+CELLBORDER;
    } else {
        if (CurrentFilter==OBJECTTYPE_VIDEOFILE)            SizeColumn=Video_ThumbWidth+CELLBORDER;
            else if (CurrentFilter==OBJECTTYPE_IMAGEFILE)   SizeColumn=Image_ThumbWidth+CELLBORDER;
            else if (CurrentFilter==OBJECTTYPE_IMAGEVECTOR) SizeColumn=Image_ThumbWidth+CELLBORDER;
            else {
            SizeColumn=Image_ThumbWidth;
            if (SizeColumn<Music_ThumbWidth) SizeColumn=Music_ThumbWidth;
            if (SizeColumn<Video_ThumbWidth) SizeColumn=Video_ThumbWidth;
            SizeColumn+=CELLBORDER;
        }
    }
    return SizeColumn;
}

//====================================================================================================================

int QCustomFolderTable::GetHeightForIcon() {
    int SizeColumn;
    if (CurrentMode==DISPLAY_ICON100)   {

        SizeColumn=100+CELLBORDER+(DisplayFileName?DISPLAYFILENAMEHEIGHT:0);

    } else {

        SizeColumn=QFontMetrics(QApplication::font()).boundingRect("0").height();
        if (SizeColumn<16) SizeColumn=16; // Not less than Icon

    }
    return SizeColumn;
}

//====================================================================================================================

void QCustomFolderTable::resizeEvent(QResizeEvent *ev) {
    // Update view
    if (CurrentMode==DISPLAY_ICON100) {
        int ColumnWidth   =GetWidthForIcon();
        int RowHeight     =GetHeightForIcon();
        int NewColumnCount=(viewport()->width()/ColumnWidth);	if (NewColumnCount<=0) NewColumnCount=1;
        int NewRowCount   =CurrentDisplayItem/NewColumnCount;   if (NewRowCount*NewColumnCount<CurrentDisplayItem) NewRowCount++;

        if ((NewColumnCount!=columnCount())||(NewRowCount!=rowCount())) {
            setColumnCount(NewColumnCount); for (int i=0;i<NewColumnCount;i++)  setColumnWidth(i,ColumnWidth);
            setRowCount(NewRowCount);       for (int i=0;i<NewRowCount;i++)     setRowHeight(i,RowHeight);
        }
    }
    QTableWidget::resizeEvent(ev);
}

//====================================================================================================================

void QCustomFolderTable::SetMode() {
    // Ensure scan thread is stoped
    EnsureThreadIsStopped();
    if (CurrentMode>DISPLAY_ICON100) CurrentMode=DISPLAY_ICON100;
    if (CurrentMode==DISPLAY_ICON100) {
        // Compute DISPLAYFILENAMEHEIGHT
        QImage      Img(100,100,QImage::Format_ARGB32);
        QPainter    Painter;
        Painter.begin(&Img);
        QFont font("Sans serif",8,QFont::Normal,QFont::StyleNormal);
        Painter.setFont(font);
        #ifdef Q_OS_WIN
        font.setPointSizeF(double(120)/ScaleFontAdjust);                   // Scale font
        #else
        font.setPointSizeF((double(100)/ScaleFontAdjust)*ScreenFontAdjust);// Scale font
        #endif
        Painter.setFont(font);
        DISPLAYFILENAMEHEIGHT=Painter.fontMetrics().boundingRect("0").height()*2;                                   // 2 lines for bigest mode
        Painter.end();
    }

    // Reset content
    setRowCount(0);
    setColumnCount(0);

    // Define columns
    QString ColumnDef="";

    setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Expanding);
    setVerticalScrollBarPolicy(Qt::ScrollBarAlwaysOn);
    setWordWrap(false);                 // Ensure no word wrap
    setTextElideMode(Qt::ElideNone);    // Ensure no line ellipsis (...)

    horizontalHeader()->setSortIndicatorShown(false);
    horizontalHeader()->setCascadingSectionResizes(false);
    horizontalHeader()->setDefaultAlignment(Qt::AlignLeft);

    verticalHeader()->setStretchLastSection(false);
    verticalHeader()->setSortIndicatorShown(false);
    verticalHeader()->hide();

    #if QT_VERSION >= 0x050000
    horizontalHeader()->setSectionsClickable(false);
    horizontalHeader()->setSectionsMovable(false);
    horizontalHeader()->setSectionResizeMode(QHeaderView::Fixed);          //Fixed because ResizeToContents will be done after table filling
    verticalHeader()->setSectionResizeMode(QHeaderView::Fixed);            // Fixed because ResizeToContents will be done after table filling
    #else
    horizontalHeader()->setClickable(false);
    horizontalHeader()->setMovable(false);
    horizontalHeader()->setResizeMode(QHeaderView::Fixed);          //Fixed because ResizeToContents will be done after table filling
    verticalHeader()->setResizeMode(QHeaderView::Fixed);            // Fixed because ResizeToContents will be done after table filling
    #endif

    setItemDelegate(IconDelegate);

    switch (CurrentMode) {
        case DISPLAY_ICON100 :
            setHorizontalScrollBarPolicy(Qt::ScrollBarAlwaysOff);
            setSelectionBehavior(QAbstractItemView::SelectItems);
            horizontalHeader()->hide();
            horizontalHeader()->setStretchLastSection(false);
            setShowGrid(false);
            ColImageType=-1;
            break;

        case DISPLAY_DATA :
            setHorizontalScrollBarPolicy(Qt::ScrollBarAsNeeded);
            setSelectionBehavior(QAbstractItemView::SelectRows);
            horizontalHeader()->show();
            horizontalHeader()->setStretchLastSection(false);
            setShowGrid(false);
            switch (CurrentFilter) {
                //case OBJECTTYPE_FOLDER    :
                //case OBJECTTYPE_THUMBNAIL :
                case OBJECTTYPE_UNMANAGED :
                case OBJECTTYPE_MANAGED   :
                    ColImageType=1;
                    ColumnDef = QApplication::translate("QCustomFolderTable","File","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","File Type","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","File Size","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","File Date","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Duration","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Chapters","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Image Size","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Image Format","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Image Geometry","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Video Codec","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Frame Rate","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Video Bitrate","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Audio Language","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Audio Codec","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Audio Channels","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Audio Bitrate","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Audio Frequency","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Title","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Artist","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Album","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Year","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Track","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Genre","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Comment","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Composer","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Encoder","Column header");
                    break;
                case OBJECTTYPE_FFDFILE   :
                    ColImageType=-1;
                    ColumnDef=  QApplication::translate("QCustomFolderTable","File","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","File Size","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","File Date","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Duration","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Title","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Author","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Album","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Year","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Composer","Column header");
                    break;
                case OBJECTTYPE_IMAGEVECTOR :
                case OBJECTTYPE_IMAGEFILE :
                    ColImageType=-1;
                    ColumnDef=  QApplication::translate("QCustomFolderTable","File","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","File Size","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","File Date","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Image Size","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Image Format","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Image Geometry","Column header");
                    break;
                case OBJECTTYPE_VIDEOFILE :
                    ColImageType=-1;
                    ColumnDef=  QApplication::translate("QCustomFolderTable","File","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","File Size","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","File Date","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Duration","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Chapters","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Image Size","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Image Format","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Image Geometry","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Video Codec","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Frame Rate","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Video Bitrate","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Audio Language","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Audio Codec","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Audio Channels","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Audio Bitrate","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Audio Frequency","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Title","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Artist","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Album","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Year","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Track","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Genre","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Comment","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Composer","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Encoder","Column header");
                    break;
                case OBJECTTYPE_MUSICFILE :
                    ColImageType=-1;
                    ColumnDef=  QApplication::translate("QCustomFolderTable","File","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","File Size","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","File Date","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Duration","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Audio Codec","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Audio Channels","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Audio Bitrate","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Audio Frequency","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Title","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Artist","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Album","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Year","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Track","Column header")+";"+
                                QApplication::translate("QCustomFolderTable","Genre","Column header");
                    break;
            }
            setColumnCount(ColumnDef.split(";").count());
            setHorizontalHeaderLabels(ColumnDef.split(";"));
            for (int Col=0;Col<columnCount();Col++) horizontalHeaderItem(Col)->setTextAlignment(GetAlignmentForColumn(Col));  // Size to the right
            break;
    }
}

//====================================================================================================================

QTableWidgetItem *QCustomFolderTable::CreateItem(QString ItemText,int Alignment,QBrush Background) {
    QTableWidgetItem *Item=new QTableWidgetItem(ItemText);
    Item->setTextAlignment(Alignment);
    Item->setBackground(Background);
    return Item;
}

//====================================================================================================================

void QCustomFolderTable::mouseDoubleClickEvent(QMouseEvent *) {
    emit DoubleClickEvent();
}

//====================================================================================================================

void QCustomFolderTable::mouseReleaseEvent(QMouseEvent *event) {
    if ((columnCount()==0)||(rowCount()==0)) {
        QTableWidget::mouseReleaseEvent(event);
        return;
    }
    InSelChange=true;
    if ((CurrentMode==DISPLAY_ICON100)&&(event->button()==Qt::LeftButton)&&(event->modifiers()!=Qt::ShiftModifier)&&(event->modifiers()!=Qt::ControlModifier)) {
        // Get item number under mouse
        int ThumbWidth  =columnWidth(0);
        int ThumbHeight =rowHeight(0);
        int row         =(event->pos().y()+verticalOffset())/ThumbHeight;
        int col         =(event->pos().x()+horizontalOffset())/ThumbWidth;
        // Clear selection
        selectionModel()->clear();
        // then add item to selection
        selectionModel()->select(model()->index(row,col,QModelIndex()),QItemSelectionModel::Select);
        setCurrentCell(row,col,QItemSelectionModel::Select|QItemSelectionModel::Current);
    } else QTableWidget::mouseReleaseEvent(event);
    InSelChange=false;
    emit RefreshFolderInfo();
}

//====================================================================================================================

void QCustomFolderTable::mousePressEvent(QMouseEvent *event) {
    InSelChange=true;
    if ((CurrentMode!=DISPLAY_ICON100)||(event->button()!=Qt::LeftButton)) {
        QTableWidget::mousePressEvent(event);
    } else if ((rowCount()>0)&&(columnCount()>0)) {
        // Get item number under mouse
        int ThumbWidth  =columnWidth(0);
        int ThumbHeight =rowHeight(0);
        int row         =(event->pos().y()+verticalOffset())/ThumbHeight;
        int col         =(event->pos().x()+horizontalOffset())/ThumbWidth;
        int Current     =currentRow()*columnCount()+currentColumn();
        int Selected    =row*columnCount()+col;

        if (event->modifiers()==Qt::ShiftModifier) {
            // Shift : Add all items from current to item
            if (Current<Selected) for (int i=Current+1;i<=Selected;i++) selectionModel()->select(model()->index(i/columnCount(),i-(i/columnCount())*columnCount(),QModelIndex()),QItemSelectionModel::Select);
                else              for (int i=Current-1;i>=Selected;i--) selectionModel()->select(model()->index(i/columnCount(),i-(i/columnCount())*columnCount(),QModelIndex()),QItemSelectionModel::Select);
        } else if (event->modifiers()==Qt::ControlModifier) {
            // Control : toggle selection for item (if is not current item)
            selectionModel()->select(model()->index(row,col,QModelIndex()),QItemSelectionModel::Toggle);
        } else {
            QTableWidget::mousePressEvent(event);
        }
    }
    InSelChange=false;
}

//====================================================================================================================
bool bShowFoldersFirst=true;

bool ByNumber(const MediaFileItem &Item1,const MediaFileItem &Item2) {
    int NmA=(((bShowFoldersFirst)&&(Item1.ObjectType==OBJECTTYPE_FOLDER))?0:1);
    int NmB=(((bShowFoldersFirst)&&(Item2.ObjectType==OBJECTTYPE_FOLDER))?0:1);
    if (NmA<NmB) return true; else if (NmA>NmB) return false;

    bool ok1,ok2;

    QString NameA=Item1.ShortName;
    if (NameA.contains(".")) NameA=NameA.left(NameA.lastIndexOf("."));
    int NumA=NameA.length()-1;
    while ((NumA>0)&&(((NameA[NumA]>='0')&&(NameA[NumA]<='9'))||((NameA[NumA]>='A')&&(NameA[NumA]<='F'))||((NameA[NumA]>='a')&&(NameA[NumA]<='f')))) NumA--;
    if (NumA>=0) {
        NameA=NameA.mid(NumA+1);
        NumA=NameA.toInt(&ok1,16);
    }

    QString NameB=Item2.ShortName;
    if (NameB.contains(".")) NameB=NameB.left(NameB.lastIndexOf("."));
    int NumB=NameB.length()-1;
    while ((NumB>0)&&(((NameB[NumB]>='0')&&(NameB[NumB]<='9'))||((NameB[NumB]>='A')&&(NameB[NumB]<='F'))||((NameB[NumB]>='a')&&(NameB[NumB]<='f')))) NumB--;
    if (NumB>=0) {
        NameB=NameB.mid(NumB+1);
        NumB=NameB.toInt(&ok2,16);
    }

    if (ok1 && ok2) return NumA<NumB; else return Item1.ShortName<Item2.ShortName;
}

bool ByName(const MediaFileItem &Item1,const MediaFileItem &Item2) {
    int NmA=(((bShowFoldersFirst)&&(Item1.ObjectType==OBJECTTYPE_FOLDER))?0:1);
    int NmB=(((bShowFoldersFirst)&&(Item2.ObjectType==OBJECTTYPE_FOLDER))?0:1);
    if (NmA<NmB) return true; else if (NmA>NmB) return false;
    return Item1.ShortName<Item2.ShortName;
}

//LessThan
bool ByDate(const MediaFileItem &Item1,const MediaFileItem &Item2) {
    int NmA=(((bShowFoldersFirst)&&(Item1.ObjectType==OBJECTTYPE_FOLDER))?0:1);
    int NmB=(((bShowFoldersFirst)&&(Item2.ObjectType==OBJECTTYPE_FOLDER))?0:1);
    if (NmA<NmB) return true; else if (NmA>NmB) return false;
    if (Item1.Modified==Item2.Modified) return Item1.ShortName<Item2.ShortName;
    return Item1.Modified<Item2.Modified;
}

void QCustomFolderTable::FillListFolder(QString Path) {
    ToLog(LOGMSG_INFORMATION,QApplication::translate("QCustomFolderTable","Reading directory content (%1)").arg(QDir::toNativeSeparators(Path)));

    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));

    // Ensure scan thread is stoped
    EnsureThreadIsStopped();

    // Set ScanMediaListProgress flag to inform that scan is not done
    ScanMediaListProgress=true;

    CurrentShowFolderNumber =0;
    CurrentShowFilesNumber  =0;
    CurrentShowFolderNumber =0;
    CurrentTotalFilesNumber =0;
    CurrentShowFolderSize   =0;
    CurrentTotalFolderSize  =0;
    CurrentDisplayItem      =0;
    CurrentShowDuration     =0;

    // Reset content of the table (but keep column)
    setRowCount(0);

    // Adjust given Path
    if (Path.startsWith(QApplication::translate("QCustomFolderTree","Clipart"))) Path=ClipArtFolder+Path.mid(QApplication::translate("QCustomFolderTree","Clipart").length());
    #if defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
    if (Path.startsWith("~")) Path=QDir::homePath()+Path.mid(1);
    #else
    if (Path.startsWith(PersonalFolder)) Path=QDir::homePath()+Path.mid(PersonalFolder.length());
    Path=QDir::toNativeSeparators(Path);
    #endif
    if (!Path.endsWith(QDir::separator())) Path=Path+QDir::separator();

    // Manage history
    if ((BrowsePathList.isEmpty())||(BrowsePathList[BrowsePathList.count()-1]!=Path)) {
        BrowsePathList.append(Path);
        CurrentPath=Path;   // Keep current path
    }
    while (BrowsePathList.count()>20) BrowsePathList.removeFirst(); // Not more than 20 path in the history !

    // clear actual MediaList
    while (!MediaList.isEmpty()) MediaList.removeLast();

    // Scan files and add them to table
    qlonglong FolderKey=ApplicationConfig->FoldersTable->GetFolderKey(Path);
    ApplicationConfig->FilesTable->UpdateTableForFolder(FolderKey,false);

    // request database for files to display
    QSqlQuery   Query(ApplicationConfig->Database->db);
    QString     QueryString("SELECT Key,MediaFileType FROM MediaFiles WHERE FolderKey=:FolderKey");

    // Construct where clause depending on current filter
    switch (CurrentFilter) {
        case OBJECTTYPE_IMAGEVECTOR:
        case OBJECTTYPE_IMAGEFILE:
        case OBJECTTYPE_VIDEOFILE:
        case OBJECTTYPE_MUSICFILE:
        case OBJECTTYPE_FFDFILE:
            QueryString=QueryString+QString(" AND (MediaFileType=%1 OR MediaFileType=%2)").arg(CurrentFilter).arg(OBJECTTYPE_FOLDER);;
            break;
        case OBJECTTYPE_MANAGED:
            QueryString=QueryString+QString(" AND MediaFileType<>%1 AND MediaFileType<>%2").arg(OBJECTTYPE_UNMANAGED).arg(OBJECTTYPE_THUMBNAIL);
            break;
    }
    if (!ShowHiddenFilesAndDir) QueryString=QueryString+" AND IsHidden=0";

    // Create column (if needed)
    if (CurrentMode==DISPLAY_ICON100) {
        int SizeColumn=GetWidthForIcon();
        if (viewport()->width()/SizeColumn==0) setColumnCount(1); else setColumnCount(viewport()->width()/SizeColumn);
        for (int i=0;i<columnCount();i++) setColumnWidth(i,SizeColumn);
    }

    // Query the database to construct the list
    Query.prepare(QueryString);
    Query.bindValue(":FolderKey",FolderKey,QSql::In);
    if (!Query.exec()) DisplayLastSQLError(&Query); else while (Query.next()) {
        bool Ret=true;
        qlonglong   FileKey   =Query.value(0).toLongLong(&Ret);         if (!Ret) FileKey=-1;
        OBJECTTYPE  ObjectType=(OBJECTTYPE)Query.value(1).toInt(&Ret);  if (!Ret) ObjectType=(OBJECTTYPE)-1;
        if ((FileKey!=-1)&&(ObjectType!=-1)) {
            cBaseMediaFile *MediaObject=NULL;
            switch (ObjectType) {
                case OBJECTTYPE_FOLDER   :      if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_FOLDER)>0)        MediaObject=new cFolder(ApplicationConfig);             break;
                case OBJECTTYPE_UNMANAGED:                                                                  MediaObject=new cUnmanagedFile(ApplicationConfig);      break;
                case OBJECTTYPE_FFDFILE  :      if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_FFDFILE)>0)       MediaObject=new cffDProjectFile(ApplicationConfig);     break;
                case OBJECTTYPE_IMAGEFILE:      if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_IMAGEFILE)>0)     MediaObject=new cImageFile(ApplicationConfig);          break;
                case OBJECTTYPE_IMAGEVECTOR:    if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_IMAGEVECTOR)>0)   MediaObject=new cImageFile(ApplicationConfig);          break;
                case OBJECTTYPE_VIDEOFILE:      if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_VIDEOFILE)>0)     MediaObject=new cVideoFile(ApplicationConfig);          break;
                case OBJECTTYPE_MUSICFILE:      if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_MUSICFILE)>0)     MediaObject=new cMusicObject(ApplicationConfig);        break;
                case OBJECTTYPE_THUMBNAIL:      if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_THUMBNAIL)>0)     MediaObject=new cImageFile(ApplicationConfig);          break;
                // to avoid warning
                case OBJECTTYPE_IMAGECLIPBOARD:
                case OBJECTTYPE_MANAGED:
                case OBJECTTYPE_GMAPSMAP:       break;
            }
            if (MediaObject) {
                MediaObject->ObjectType=ObjectType;
                MediaObject->FolderKey =FolderKey;
                MediaObject->FileKey   =FileKey;
                MediaObject->GetInformationFromFile(MediaObject->FileName(),NULL,NULL,FolderKey);
                AppendMediaToTable(MediaObject);    // Append Media to table
                MediaList.append(MediaFileItem(MediaObject));
                if (CurrentMode==DISPLAY_DATA) {
                    QStringList ExtendedProperties;
                    ApplicationConfig->FilesTable->GetExtendedProperties(MediaObject->FileKey,&ExtendedProperties);
                    for (int Col=0;Col<columnCount();Col++) MediaList[MediaList.count()-1].TextToDisplay.append(GetTextForColumn(Col,MediaObject,&ExtendedProperties));
                } else {
                    MediaList[MediaList.count()-1].TextToDisplay.append(MediaObject->ShortName());
                }

            }
            delete MediaObject;
        }
    }

    // Sort files in the fileList
    bShowFoldersFirst=ShowFoldersFirst;
    if          (SortFile==SORTORDER_BYNUMBER)    qSort(MediaList.begin(),MediaList.end(),ByNumber);
        else if (SortFile==SORTORDER_BYNAME)      qSort(MediaList.begin(),MediaList.end(),ByName);
        else if (SortFile==SORTORDER_BYDATE)      qSort(MediaList.begin(),MediaList.end(),ByDate);

    //**********************************************************

    // Update display
    DoResizeColumns();
    if (updatesEnabled()) setUpdatesEnabled(false);
    setUpdatesEnabled(true);

    // Start thread to scan files
    ScanMediaList.setFuture(QtConcurrent::run(this,&QCustomFolderTable::DoScanMediaList));

    QApplication::restoreOverrideCursor();
    SaveSettings();
}

//====================================================================================================================

bool QCustomFolderTable::CanBrowseToPreviousPath() {
    return (BrowsePathList.count()>1);
}

//====================================================================================================================

QString QCustomFolderTable::BrowseToPreviousPath() {
    if (BrowsePathList.count()>1) {
        QString Path=BrowsePathList.takeLast();     // Actual folder
        Path=BrowsePathList.takeLast();             // Previous folder
        return Path;
    } else return "";
}

//====================================================================================================================

bool QCustomFolderTable::CanBrowseToUpperPath() {
    if (BrowsePathList.count()>0) {
        QString Path=QDir::toNativeSeparators(BrowsePathList[BrowsePathList.count()-1]);     // Actual folder
        if (Path.endsWith(QDir::separator())) Path=Path.left(Path.length()-1);
        #ifdef Q_OS_WIN
        if ((Path.length()==2)&&(Path.at(1)==':')) return false;    // if it's a drive !
        #endif
        QStringList PathList=Path.split(QDir::separator());
        return PathList.count()>0;
    } else return false;
}

//====================================================================================================================

QString QCustomFolderTable::BrowseToUpperPath() {
    QString Path="";
    if (BrowsePathList.count()>0) {
        Path=QDir::toNativeSeparators(BrowsePathList[BrowsePathList.count()-1]);     // Actual folder
        if (Path.endsWith(QDir::separator())) Path=Path.left(Path.length()-1);
        #ifdef Q_OS_WIN
        if ((Path.length()==2)&&(Path.at(1)==':')) return "";    // if it's a drive !
        #endif
        QStringList PathList=Path.split(QDir::separator());
        #ifdef Q_OS_WIN
        Path="";
        #else
        if ((PathList.count()>0)&&(PathList[0]=="")) Path="/"; else Path="";
        #endif
        for (int i=0;i<PathList.count()-1;i++) {
            if ((Path!="")&&(!Path.endsWith(QDir::separator()))) Path=Path+QDir::separator();
            Path=Path+PathList[i];
        }
    }
    return Path;
}

//====================================================================================================================

QStringList QCustomFolderTable::GetCurrentSelectedFiles() {
    QList<cBaseMediaFile*> SelMediaList;
    GetCurrentSelectedMediaFile(&SelMediaList);
    QStringList Files;
    for (int i=0;i<SelMediaList.count();i++) Files.append(SelMediaList.at(i)->FileName());
    while (!SelMediaList.isEmpty()) delete SelMediaList.takeLast();
    return Files;
}

//====================================================================================================================

void QCustomFolderTable::GetCurrentSelectedMediaFile(QList<cBaseMediaFile*> *SelMediaList) const {
    QModelIndexList SelList=selectionModel()->selectedIndexes();
    QList<int> List;
    for (int i=0;i<MediaList.count();i++) List.append(0);
    if (CurrentMode==DISPLAY_DATA) {
        for (int i=0;i<SelList.count();i++) List[SelList[i].row()]=1;
    } else {
        for (int i=0;i<SelList.count();i++) {
            int Col   =SelList[i].column();
            int Row   =SelList[i].row();
            if (Row*columnCount()+Col<MediaList.count()) {
                List[Row*columnCount()+Col]=1;
            }
        }
    }
    for (int i=0;i<List.count();i++) if (List[i]==1) {
        cBaseMediaFile *Media=MediaList[i].CreateBaseMediaFile();
        if (Media) SelMediaList->append(Media);
    }
}

//====================================================================================================================

cBaseMediaFile *QCustomFolderTable::GetCurrentMediaFile() {
    cBaseMediaFile  *MediaObject=NULL;
    if (currentRow()>=0) {
        int Index;
        if (CurrentMode==DISPLAY_DATA) Index=currentRow();
            else Index=currentRow()*columnCount()+currentColumn();
        if (Index<MediaList.count()) MediaObject=MediaList[Index].CreateBaseMediaFile();
    }
    return MediaObject;
}

//====================================================================================================================

void QCustomFolderTable::DoResizeColumns() {
    if (!StopAllEvent) {
        if (CurrentMode==DISPLAY_DATA) {
            int      ColSize[100]; for (int i=0;i<100;i++) ColSize[i]=horizontalHeader()->sectionSizeHint(i);
            QImage   Image(100,100,QImage::Format_ARGB32_Premultiplied);
            QPainter Painter;
            Painter.begin(&Image);

            for (int ItemIndex=0;ItemIndex<MediaList.count();ItemIndex++) for (int Col=0;Col<columnCount();Col++) {
                QString         TextToDisplay  =MediaList[ItemIndex].GetTextForColumn(Col);
                QImage          ImageToDisplay =(Col==0)?MediaList[ItemIndex].GetIcon(cCustomIcon::ICON16,true):
                                                (Col==ColImageType)?MediaList[ItemIndex].DefaultTypeIcon16->copy():
                                                QImage();
                int             DecalX         =(!ImageToDisplay.isNull()?18:0);
                QFont           font("Sans serif",9,QFont::Normal,QFont::StyleNormal);
                font.setBold(MediaList[ItemIndex].ObjectType==OBJECTTYPE_FOLDER);
                font.setUnderline(false);
                Painter.setFont(font);

                QFontMetrics fm  =Painter.fontMetrics();
                int          Size=fm.width(TextToDisplay)+4+DecalX;
                if (ColSize[Col]<Size) ColSize[Col]=Size;
            }
            Painter.end();
            for (int Col=0;Col<columnCount();Col++) {
                if (ColSize[Col]>500) ColSize[Col]=500;
                if (columnWidth(Col)!=ColSize[Col]) setColumnWidth(Col,ColSize[Col]);
            }
        }
        this->viewport()->update();
        emit RefreshFolderInfo();
    }
}

//====================================================================================================================

void QCustomFolderTable::AppendMediaToTable(cBaseMediaFile *MediaObject) {
    int Row=rowCount();
    int Col=0;

    if (MediaObject->ObjectType==OBJECTTYPE_FOLDER) {
        // Specific for folder : don't wait thread but call GetFullInformationFromFile now
        MediaObject->GetFullInformationFromFile();
        CurrentShowFolderNumber++;
    } else {
        CurrentShowFilesNumber++;
        CurrentShowFolderSize+=MediaObject->FileSize;
    }

    if (CurrentMode==DISPLAY_DATA) {

        insertRow(Row);
        #if QT_VERSION >= 0x050000
        verticalHeader()->setSectionResizeMode(Row,QHeaderView::Fixed);
        #else
        verticalHeader()->setResizeMode(Row,QHeaderView::Fixed);
        #endif
        setRowHeight(Row,GetHeightForIcon()+2);

    } else {

        int NbrCol=columnCount();

        // Check if we need to create a new line
        if (CurrentDisplayItem/NbrCol==rowCount()) {
            insertRow(Row);
            #if QT_VERSION >= 0x050000
            verticalHeader()->setSectionResizeMode(Row,QHeaderView::Fixed);
            #else
            verticalHeader()->setResizeMode(Row,QHeaderView::Fixed);
            #endif
            setRowHeight(Row,GetHeightForIcon());
        } else {
            Row--;
        }
    }
    update(model()->index(Row,Col));
    CurrentDisplayItem++;
}

//====================================================================================================================

void QCustomFolderTable::DoScanMediaList() {

    if (InScanMediaFunction) return;
    InScanMediaFunction=true;
    CurrentShowDuration=0;

    for (int ItemIndex=0;(ItemIndex<MediaList.count())&&(!StopScanMediaList)&&(!StopAllEvent);ItemIndex++) {

        if (!MediaList[ItemIndex].IsInformationValide) {
            cBaseMediaFile *MediaObject=MediaList[ItemIndex].CreateBaseMediaFile();
            MediaObject->GetFullInformationFromFile(true); // Get full information

            // Update display
            while (!MediaList[ItemIndex].TextToDisplay.isEmpty()) MediaList[ItemIndex].TextToDisplay.removeLast();
            if (CurrentMode==DISPLAY_DATA) {
                QStringList ExtendedProperties;
                ApplicationConfig->FilesTable->GetExtendedProperties(MediaObject->FileKey,&ExtendedProperties);
                for (int Col=0;Col<columnCount();Col++) MediaList[ItemIndex].TextToDisplay.append(GetTextForColumn(Col,MediaObject,&ExtendedProperties));
                for (int Col=0;Col<columnCount();Col++) update(model()->index(ItemIndex,Col));
            } else {
                MediaList[ItemIndex].TextToDisplay.append(MediaObject->ShortName());
                int Row=ItemIndex/columnCount();
                int Col=ItemIndex-Row*columnCount();
                update(model()->index(Row,Col));
            }
            delete MediaObject;

        }
        if ((MediaList[ItemIndex].ObjectType==OBJECTTYPE_MUSICFILE)||(MediaList[ItemIndex].ObjectType==OBJECTTYPE_VIDEOFILE)||(MediaList[ItemIndex].ObjectType==OBJECTTYPE_FFDFILE))
                CurrentShowDuration=CurrentShowDuration+QTime(0,0,0,0).msecsTo(MediaList[ItemIndex].Duration);

    }

    // Clear ScanMediaListProgress flag to inform that scan is done
    ScanMediaListProgress=false;

    // Send message to ResizeColumns
    if (!StopAllEvent) emit NeedResizeColumns();
    InScanMediaFunction=false;
}

//====================================================================================================================

QMenu *QCustomFolderTable::PrepSettingsMenuMenu(QWidget *Parent) {
    QMenu *ContextMenu=new QMenu(Parent);
    ContextMenu->addAction(CreateMenuAction(QIcon(":/img/SortByNumber.png"),                                    QApplication::translate("MainWindow","Sort by number"),                 ACTIONTYPE_SORTORDER|SORTORDER_BYNUMBER,                true,SortFile==SORTORDER_BYNUMBER,          Parent));
    ContextMenu->addAction(CreateMenuAction(QIcon(":/img/SortByName.png"),                                      QApplication::translate("MainWindow","Sort by name"),                   ACTIONTYPE_SORTORDER|SORTORDER_BYNAME,                  true,SortFile==SORTORDER_BYNAME,            Parent));
    ContextMenu->addAction(CreateMenuAction(QIcon(":/img/SortByDate.png"),                                      QApplication::translate("MainWindow","Sort by date"),                   ACTIONTYPE_SORTORDER|SORTORDER_BYDATE,                  true,SortFile==SORTORDER_BYDATE,            Parent));
    ContextMenu->addAction(CreateMenuAction(ApplicationConfig->DefaultFOLDERIcon.GetIcon(cCustomIcon::ICON16),  QApplication::translate("MainWindow","Show folder first"),              ACTIONTYPE_ONOFFOPTIONS|ONOFFOPTIONS_SHOWFOLDERFIRST,   true,ShowFoldersFirst,                      Parent));
    ContextMenu->addSeparator();
    int ForceManaged=0;
    if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_MANAGED)!=0)      ForceManaged++;
    if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_IMAGEFILE)!=0)    ForceManaged++;
    if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_IMAGEVECTOR)!=0)  ForceManaged++;
    if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_VIDEOFILE)!=0)    ForceManaged++;
    if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_UNMANAGED)!=0)    ContextMenu->addAction(CreateMenuAction(ApplicationConfig->DefaultFILEIcon.GetIcon(cCustomIcon::ICON16),    QApplication::translate("MainWindow","All files"),                      ACTIONTYPE_FILTERMODE|OBJECTTYPE_UNMANAGED,             true,CurrentFilter==OBJECTTYPE_UNMANAGED,   Parent));
    if (ForceManaged>1)                                         ContextMenu->addAction(CreateMenuAction(ApplicationConfig->DefaultFILEIcon.GetIcon(cCustomIcon::ICON16),    QApplication::translate("MainWindow","Managed files"),                  ACTIONTYPE_FILTERMODE|OBJECTTYPE_MANAGED,               true,CurrentFilter==OBJECTTYPE_MANAGED,     Parent));
    if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_IMAGEFILE)!=0)    ContextMenu->addAction(CreateMenuAction(ApplicationConfig->DefaultIMAGEIcon.GetIcon(cCustomIcon::ICON16),   QApplication::translate("MainWindow","Image files"),                    ACTIONTYPE_FILTERMODE|OBJECTTYPE_IMAGEFILE,             true,CurrentFilter==OBJECTTYPE_IMAGEFILE,   Parent));
    if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_IMAGEVECTOR)!=0)  ContextMenu->addAction(CreateMenuAction(ApplicationConfig->DefaultIMAGEIcon.GetIcon(cCustomIcon::ICON16),   QApplication::translate("MainWindow","Image vector files"),             ACTIONTYPE_FILTERMODE|OBJECTTYPE_IMAGEVECTOR,           true,CurrentFilter==OBJECTTYPE_IMAGEVECTOR, Parent));
    if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_VIDEOFILE)!=0)    ContextMenu->addAction(CreateMenuAction(ApplicationConfig->DefaultVIDEOIcon.GetIcon(cCustomIcon::ICON16),   QApplication::translate("MainWindow","Video files"),                    ACTIONTYPE_FILTERMODE|OBJECTTYPE_VIDEOFILE,             true,CurrentFilter==OBJECTTYPE_VIDEOFILE,   Parent));
    if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_MUSICFILE)!=0)    ContextMenu->addAction(CreateMenuAction(ApplicationConfig->DefaultMUSICIcon.GetIcon(cCustomIcon::ICON16),   QApplication::translate("MainWindow","Music files"),                    ACTIONTYPE_FILTERMODE|OBJECTTYPE_MUSICFILE,             true,CurrentFilter==OBJECTTYPE_MUSICFILE,   Parent));
    if ((AllowedFilter&FILTERALLOW_OBJECTTYPE_FFDFILE)!=0)      ContextMenu->addAction(CreateMenuAction(ApplicationConfig->DefaultFFDIcon.GetIcon(cCustomIcon::ICON16),     QApplication::translate("MainWindow","ffDiaporama project files"),      ACTIONTYPE_FILTERMODE|OBJECTTYPE_FFDFILE,               true,CurrentFilter==OBJECTTYPE_FFDFILE,     Parent));
    ContextMenu->addSeparator();
    if (ShowHiddenFilesAndDir) ContextMenu->addAction(CreateMenuAction(QIcon(":/img/Visible_KO.png"),           QApplication::translate("MainWindow","Hide hidden files and folders"),  ACTIONTYPE_ONOFFOPTIONS|ONOFFOPTIONS_HIDEHIDDEN,        true,false,                                 Parent));
        else                   ContextMenu->addAction(CreateMenuAction(QIcon(":/img/Visible_OK.png"),           QApplication::translate("MainWindow","Show hidden files and folders"),  ACTIONTYPE_ONOFFOPTIONS|ONOFFOPTIONS_SHOWHIDDEN,        true,false,                                 Parent));
    if (CurrentMode==DISPLAY_ICON100) {
        if (DisplayFileName)   ContextMenu->addAction(CreateMenuAction(QIcon(":/img/Visible_KO.png"),           QApplication::translate("MainWindow","Hide files name"),                ACTIONTYPE_ONOFFOPTIONS|ONOFFOPTIONS_HIDEFILENAME,      true,false,                                 Parent));
            else               ContextMenu->addAction(CreateMenuAction(QIcon(":/img/Visible_OK.png"),           QApplication::translate("MainWindow","Show files name"),                ACTIONTYPE_ONOFFOPTIONS|ONOFFOPTIONS_SHOWFILENAME,      true,false,                                 Parent));
    }
    return ContextMenu;
}

//====================================================================================================================
enum ActionDataType {
    actionBrowserOpen,
    actionBrowserAddFiles,
    actionBrowserProperties,
    actionBrowserRenameFile,
    actionBrowserRemoveFile,
    actionBrowserUseAsPlaylist,
    actionBrowserOpenFolder
};

void QCustomFolderTable::s_ContextMenu(const QPoint) {
    QList<cBaseMediaFile*> MediaList;
    GetCurrentSelectedMediaFile(&MediaList);
    if (MediaList.count()==0) return;

    bool    Multiple=(MediaList.count()>1);
    bool    IsFind;

    // Do qualification of files
    QStringList FileExtensions;
    QList<int>  ObjectTypes;

    for (int i=0;i<MediaList.count();i++) {
        QString FileExtension=QFileInfo(MediaList[i]->FileName()).completeSuffix();
        IsFind=false;   for (int j=0;j<ObjectTypes.count();j++)     if (MediaList[i]->ObjectType==ObjectTypes[j])   IsFind=true; if (!IsFind) ObjectTypes.append(MediaList[i]->ObjectType);
        IsFind=false;   for (int j=0;j<FileExtensions.count();j++)  if (FileExtension==FileExtensions[j])           IsFind=true; if (!IsFind) FileExtensions.append(FileExtension);
    }

    bool SingleType=(ObjectTypes.count()==1);
    bool IsFolder  =SingleType && (ObjectTypes[0]==OBJECTTYPE_FOLDER);
    bool IsMusic   =SingleType && (ObjectTypes[0]==OBJECTTYPE_MUSICFILE);
    bool IsMedia   =true;
    for (int i=0;i<ObjectTypes.count();i++) if (  (ObjectTypes[i]!=OBJECTTYPE_IMAGEFILE)
                                                &&(ObjectTypes[i]!=OBJECTTYPE_IMAGEVECTOR)
                                                &&(ObjectTypes[i]!=OBJECTTYPE_VIDEOFILE)
                                                &&(ObjectTypes[i]!=OBJECTTYPE_FFDFILE)
                                                ) IsMedia=false;

    QMenu *ContextMenu=new QMenu(this);
    if (IsAddToProjectAllowed && IsMedia)           ContextMenu->addAction(CreateMenuAction(QIcon(":/img/add_image.png"),                             QApplication::translate("MainWindow","Add files to project"),             (int)actionBrowserAddFiles,     false,false,this));
    if (!IsAddToProjectAllowed && IsMedia)          ContextMenu->addAction(CreateMenuAction(QIcon(":/img/add_image.png"),                             QApplication::translate("MainWindow","Select this file"),                 (int)actionBrowserAddFiles,     false,false,this));
    if (IsAddToProjectAllowed && IsMusic)           ContextMenu->addAction(CreateMenuAction(QIcon(":/img/object_sound.png"),                          QApplication::translate("MainWindow","Use as new playlist"),              (int)actionBrowserUseAsPlaylist,false,false,this));
    if (!Multiple && !IsFolder)                     ContextMenu->addAction(CreateMenuAction(QIcon(":/img/Action_Open.png"),                           QApplication::translate("MainWindow","Open"),                             (int)actionBrowserOpen,         false,false,this));
    if (!Multiple && IsFolder)                      ContextMenu->addAction(CreateMenuAction(QIcon(":/img/Action_Open.png"),                           QApplication::translate("MainWindow","Open"),                             (int)actionBrowserOpenFolder,   false,false,this));
    if (!IsFolder && !Multiple)                     ContextMenu->addAction(CreateMenuAction(QIcon(":/img/Action_Info.png"),                           QApplication::translate("MainWindow","Properties"),                       (int)actionBrowserProperties,   false,false,this));
    if (IsRenameAllowed && IsFolder && !Multiple)   ContextMenu->addAction(CreateMenuAction(QIcon(":/img/action_edit.png"),                           QApplication::translate("QCustomFolderTree","Rename folder"),             (int)actionBrowserRenameFile,   false,false,this));
    if (IsRemoveAllowed && IsFolder)                ContextMenu->addAction(CreateMenuAction(QApplication::style()->standardIcon(QStyle::SP_TrashIcon),QApplication::translate("QCustomFolderTree","Remove folder"),             (int)actionBrowserRemoveFile,   false,false,this));   //":/img/trash.png"
    if (IsRenameAllowed && !IsFolder && !Multiple)  ContextMenu->addAction(CreateMenuAction(QIcon(":/img/action_edit.png"),                           QApplication::translate("MainWindow","Rename"),                           (int)actionBrowserRenameFile,   false,false,this));
    if (IsRemoveAllowed && !IsFolder)               ContextMenu->addAction(CreateMenuAction(QApplication::style()->standardIcon(QStyle::SP_TrashIcon),QApplication::translate("MainWindow","Remove"),                           (int)actionBrowserRemoveFile,   false,false,this));   //":/img/trash.png"

    QAction *Action=ContextMenu->exec(QCursor::pos());
    if (Action) {
        int     ActionType=Action->data().toInt();
        switch (ActionType) {
            case actionBrowserOpen:             emit OpenFile();                                                break;
            case actionBrowserOpenFolder:       emit DoubleClickEvent();                                        break;
            case actionBrowserAddFiles:         emit InsertFiles();                                             break;
            case actionBrowserProperties:       QTimer::singleShot(LATENCY,this,SLOT(s_Browser_Properties()));  break;
            case actionBrowserRenameFile:       emit RenameFiles();                                             break;
            case actionBrowserRemoveFile:       emit RemoveFiles();                                             break;
            case actionBrowserUseAsPlaylist:    emit InsertFiles();                                             break;
        }
    }
    // delete menu
    while (ContextMenu->actions().count()) delete ContextMenu->actions().takeLast();
    delete ContextMenu;
    while (!MediaList.isEmpty()) delete MediaList.takeLast();
}

//====================================================================================================================

void QCustomFolderTable::s_Browser_Properties() {
    cBaseMediaFile *Media=GetCurrentMediaFile();
    if (Media) {
        DlgInfoFile Dlg(Media,ApplicationConfig,this);
        Dlg.InitDialog();
        Dlg.exec();
        delete Media;
    }
}
