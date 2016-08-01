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

#ifndef QCUSTOMFOLDERTREE_H
#define QCUSTOMFOLDERTREE_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"

// Include some common various class
#include "engine/cDriveList.h"
#include "QCustomFolderTable.h"

class QCustomFolderTree : public QTreeWidget {
Q_OBJECT
public:
    cApplicationConfig  *ApplicationConfig;
    QCustomFolderTable      *FolderTable;

    explicit                QCustomFolderTree(QWidget *parent=0);
    bool                    IsRemoveAllowed;
    bool                    IsRenameAllowed;
    bool                    IsCreateFolderAllowed;

    // Public utility functions
    virtual void        InitDrives();
    virtual QString     GetFolderPath(const QTreeWidgetItem *current,bool TreeMode);
    virtual QString     GetCurrentFolderPath();
    virtual void        SetSelectItemByPath(QString Path);
    virtual void        RefreshItemByPath(QString Path,bool RefreshAll,int Level=0);
    virtual QString     RealPathToTreePath(QString Path);
    virtual cDriveDesc  *SearchRealDrive(QString Path);
    virtual void        RefreshDriveList();

private slots:
    void                s_itemExpanded(QTreeWidgetItem *item);
    void                s_ContextMenu(const QPoint Point);

protected:
    virtual void        keyReleaseEvent(QKeyEvent *event);

private:
    QTreeWidgetItem     *CreateItem(QString Text,QString FilePath,QIcon Icon);
    bool                IsFolderHaveChild(QString Folder);
    bool                IsReadOnlyDrive(QString Folder);
    void                DeleteChildItem(QTreeWidgetItem *Item);

signals:
    void                ActionRemoveFolder();
    void                ActionRenameFolder();
    void                ActionRefreshAll();
    void                ActionRefreshHere();

};

#endif // QCUSTOMFOLDERTREE_H
