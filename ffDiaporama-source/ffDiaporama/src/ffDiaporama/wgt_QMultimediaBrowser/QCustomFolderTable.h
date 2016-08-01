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

#ifndef QCUSTOMFOLDERTABLE_H
#define QCUSTOMFOLDERTABLE_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"

// Include some additional standard class
#include <QFutureWatcher>

// Include some common various class
#include "engine/cApplicationConfig.h"
#include "engine/cBaseMediaFile.h"

//*************************************************************
// Define action types for Settings menu

#define ACTIONTYPE_ACTIONTYPE           0x0f00
#define ACTIONTYPE_DISPLAYMODE          0x0100
#define ACTIONTYPE_FILTERMODE           0x0200
#define ACTIONTYPE_ONOFFOPTIONS         0x0400
#define ACTIONTYPE_SORTORDER            0x0800
#define ONOFFOPTIONS_SHOWHIDDEN         1
#define ONOFFOPTIONS_HIDEHIDDEN         2
#define ONOFFOPTIONS_HIDEFILENAME       3
#define ONOFFOPTIONS_SHOWFILENAME       4
#define ONOFFOPTIONS_SHOWFOLDERFIRST    5

//*************************************************************

class MediaFileItem {
public:
    cApplicationConfig  *ApplicationConfig;
    qlonglong               FileKey;
    qlonglong               FolderKey;
    QStringList             TextToDisplay;
    int                     ColImageType;
    OBJECTTYPE              ObjectType;
    bool                    IsInformationValide;
    QImage                  *DefaultTypeIcon16,*DefaultTypeIcon100;
    QString                 ShortName;
    QTime                   Duration;
    QDateTime               Modified;

    explicit                MediaFileItem(cBaseMediaFile *MediaFileObject);
                            ~MediaFileItem() {}

    QString                 GetTextForColumn(int Col);
    cBaseMediaFile          *CreateBaseMediaFile() const;

    QImage                  GetIcon(cCustomIcon::IconSize Size,bool useDelayed);
};

//*************************************************************

class QCustomFolderTable : public QTableWidget {
Q_OBJECT
public:
    QStringList             BrowsePathList;
    QList<MediaFileItem>    MediaList;
    cApplicationConfig  *ApplicationConfig;

    // Settings
    BROWSER_TYPE_ID         BrowserType;
    QString                 BROWSERString;
    QString                 CurrentPath;
    QString                 DefaultPath;
    int                     SortFile;                                   // Sort order for file insertion and file display in browser
    bool                    ShowFoldersFirst;                           // If true, display folders at first in table list
    bool                    ShowHiddenFilesAndDir;                      // If true, hidden files will be show
    bool                    ShowMntDrive;                               // If true, show drives under /mnt/ [Linux only]
    int                     AllowedFilter;
    int                     CurrentFilter;                              // Currently selected filter
    int                     CurrentMode;                                // Currently selected display mode
    bool                    DisplayFileName;                            // If true Display File Name in icon views
    bool                    IsAddToProjectAllowed;
    bool                    IsRemoveAllowed;
    bool                    IsRenameAllowed;
    bool                    InSelChange;

    // Actual values
    int                     CurrentShowFolderNumber;
    int                     CurrentTotalFilesNumber;
    int                     CurrentShowFilesNumber;
    int                     CurrentDisplayItem;
    int64_t                 CurrentShowFolderSize;
    int64_t                 CurrentTotalFolderSize;
    int64_t                 CurrentShowDuration;

    int                     ColImageType;

    // Thread controls
    QFutureWatcher<void>    ScanMediaList;
    bool                    StopScanMediaList;
    bool                    StopAllEvent;
    bool                    ScanMediaListProgress;
    bool                    InScanMediaFunction;

    QAbstractItemModel      *DefaultModel;
    QAbstractItemDelegate   *DefaultDelegate,*IconDelegate;

    explicit                QCustomFolderTable(QWidget *parent = 0);
                            ~QCustomFolderTable();

    virtual void            InitSettings(cApplicationConfig *ApplicationConfig,BROWSER_TYPE_ID BrowserType);
    virtual void            SaveSettings();
    virtual void            EnsureThreadIsStopped();

    virtual void            resizeEvent(QResizeEvent *);
    virtual void            mouseDoubleClickEvent(QMouseEvent *);
    virtual void            mouseReleaseEvent(QMouseEvent *);
    virtual void            mousePressEvent(QMouseEvent *event);
    virtual void            selectAll();

    virtual void            SetMode();
    virtual void            FillListFolder(QString Path);

    virtual void            AppendMediaToTable(cBaseMediaFile *MediaObject);

    virtual QString         GetTextForColumn(int Col,cBaseMediaFile *MediaObject,QStringList *ExtendedProperties);
    virtual int             GetAlignmentForColumn(int Col);

    virtual cBaseMediaFile  *GetCurrentMediaFile();
    virtual void            GetCurrentSelectedMediaFile(QList<cBaseMediaFile*> *SelMediaList) const;
    virtual QStringList     GetCurrentSelectedFiles();

    virtual bool            CanBrowseToPreviousPath();
    virtual QString         BrowseToPreviousPath();
    virtual bool            CanBrowseToUpperPath();
    virtual QString         BrowseToUpperPath();

    virtual QMenu           *PrepSettingsMenuMenu(QWidget *Parent);

protected:
    virtual QMimeData       *mimeData(const QList <QTableWidgetItem *>) const;
    virtual void            keyReleaseEvent(QKeyEvent *event);

signals:
    void                    DoubleClickEvent();
    void                    RefreshFolderInfo();
    void                    NeedResizeColumns();
    void                    RemoveFiles();
    void                    InsertFiles();
    void                    OpenFile();
    void                    RenameFiles();
    void                    Refresh();

public slots:
    void                    DoResizeColumns();
    void                    s_ContextMenu(const QPoint Point);
    void                    s_Browser_Properties();

private:
    void                    DoScanMediaList();
    int                     GetWidthForIcon();
    int                     GetHeightForIcon();
    QTableWidgetItem        *CreateItem(QString ItemText,int Alignment,QBrush Background);
};

#endif // QCUSTOMFOLDERTABLE_H
