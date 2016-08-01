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

#ifndef WGT_QMULTIMEDIABROWSER_H
#define WGT_QMULTIMEDIABROWSER_H

// Basic inclusions (common to all files)
#include "engine/_GlobalDefines.h"
#include "engine/cApplicationConfig.h"
#include "engine/cDriveList.h"
#include "QCustomFolderTable.h"
#include "QCustomFolderTree.h"
#include "DlgWorkingTask/DlgWorkingTask.h"

namespace Ui {
    class wgt_QMultimediaBrowser;
}

class wgt_QMultimediaBrowser : public QWidget {
Q_OBJECT
public:
    cApplicationConfig  *ApplicationConfig;
    DlgWorkingTask          *DlgWorkingTaskDialog;
    bool                    CancelAction;
    int                     CurrentDriveCheck;

    explicit                wgt_QMultimediaBrowser(QWidget *parent = 0);
                            ~wgt_QMultimediaBrowser();

    void                    DoInitWidget(BROWSER_TYPE_ID BrowserType,bool AllowMultipleSelection,bool AllowDragDrop,bool AllowAddToProject,cApplicationConfig *ApplicationConfig);
    void                    DoInitDialog();
    void                    RefreshControls(bool EmitToParent=true);

    int                     GetSortOrder();
    QStringList             GetCurrentSelectedFiles();
    void                    GetCurrentSelectedMediaFile(QList<cBaseMediaFile*> *SelMediaList);
    cBaseMediaFile          *GetCurrentMediaFile();
    QSplitter               *GetSplitter();
    void                    EnsureThreadIsStopped();

public slots:
    void                    OpenFolder();
    void                    RefreshAll();
    void                    RefreshHere();

private slots:
    void                    SetToPrevious();
    void                    SetToUpper();

    void                    ChangeToIconView();
    void                    ChangeToDetailView();
    void                    SettingsMenu();

    void                    FavoriteMenu();
    void                    AddToFavorite();
    void                    ManageFavorite();

    void                    FolderTreeItemChanged(QTreeWidgetItem *current,QTreeWidgetItem *);
    void                    RefreshDriveList();
    void                    RefreshDrive();
    void                    DoubleClicked()     { OpenFolder(); }
    void                    DoBrowserRefreshFolderInfo();
    void                    DoBrowserRefreshSelectedFileInfo();

    void                    RemoveFolder();
    void                    RemoveFile();
    void                    RenameFolder();
    void                    RenameFile();
    void                    OpenFile()          { emit DoOpenFile(); }
    void                    AddFiles()          { emit DoAddFiles(); }

    void                    s_Action_DoRemoveFile();
    bool                    InRemoveFolder(QString FolderPath);

signals:
    void                    DoRefreshControls();
    void                    DoOpenFile();
    void                    DoAddFiles();

private:
    Ui::wgt_QMultimediaBrowser  *ui;
    QStringList                 FileList;

};

#endif // WGT_QMULTIMEDIABROWSER_H
