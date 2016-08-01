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

#include "wgt_QMultimediaBrowser.h"
#include "ui_wgt_QMultimediaBrowser.h"
#include "DlgInfoFile/DlgInfoFile.h"
#include "DlgManageFavorite/DlgManageFavorite.h"

//====================================================================================================================

wgt_QMultimediaBrowser::wgt_QMultimediaBrowser(QWidget *parent):QWidget(parent),ui(new Ui::wgt_QMultimediaBrowser) {
    ui->setupUi(this);
    // No other initialisation here : all must be done by a call to DoInitWidget
}

//====================================================================================================================

wgt_QMultimediaBrowser::~wgt_QMultimediaBrowser() {
    EnsureThreadIsStopped();
    delete ui;
}

//====================================================================================================================
// Initialisation part done during constructor

void wgt_QMultimediaBrowser::DoInitWidget(BROWSER_TYPE_ID BrowserType,bool AllowMultipleSelection,bool AllowDragDrop,bool AllowAddToProject,cApplicationConfig *ApplicationConfig) {
    this->ApplicationConfig=ApplicationConfig;
    DlgWorkingTaskDialog   =NULL;
    CancelAction           =false;
    CurrentDriveCheck      =0;

    ui->RefreshBt->setIcon(QApplication::style()->standardIcon(QStyle::SP_BrowserReload));
    ui->UpFolderBt->setIcon(QApplication::style()->standardIcon(QStyle::SP_FileDialogToParent));
    ui->PreviousFolderBt->setIcon(QApplication::style()->standardIcon(QStyle::SP_ArrowBack));

    ui->FolderTree->ApplicationConfig       =ApplicationConfig;
    ui->FolderTree->FolderTable             =ui->FolderTable;
    ui->FolderTree->IsRemoveAllowed         =(BrowserType==BROWSER_TYPE_MainWindow);
    ui->FolderTree->IsRenameAllowed         =(BrowserType==BROWSER_TYPE_MainWindow);
    ui->FolderTree->IsCreateFolderAllowed   =(BrowserType==BROWSER_TYPE_MainWindow);
    ui->FolderTree->InitDrives();

    ui->FolderTable->InitSettings(ApplicationConfig,BrowserType);
    ui->FolderTable->IsAddToProjectAllowed  =AllowAddToProject;
    ui->FolderTable->IsRemoveAllowed        =(BrowserType==BROWSER_TYPE_MainWindow);
    ui->FolderTable->IsRenameAllowed        =(BrowserType==BROWSER_TYPE_MainWindow);
    ui->FolderTable->setDragDropMode(AllowDragDrop?QAbstractItemView::DragOnly:QAbstractItemView::NoDragDrop);
    ui->FolderTable->setSelectionMode(AllowMultipleSelection?QAbstractItemView::ExtendedSelection:QAbstractItemView::SingleSelection);
}

//====================================================================================================================
// Initialisation part done during init dialog of parent

void wgt_QMultimediaBrowser::DoInitDialog() {
    // Button bar events
    connect(ui->PreviousFolderBt,SIGNAL(released()),this,SLOT(SetToPrevious()));
    connect(ui->UpFolderBt,SIGNAL(released()),this,SLOT(SetToUpper()));
    connect(ui->IconViewBT,SIGNAL(pressed()),this,SLOT(ChangeToIconView()));
    connect(ui->DetailViewBT,SIGNAL(pressed()),this,SLOT(ChangeToDetailView()));
    connect(ui->ActionModeBt,SIGNAL(pressed()),this,SLOT(SettingsMenu()));
    connect(ui->RefreshBt,SIGNAL(released()),this,SLOT(RefreshAll()));
    connect(ui->FavoriteBt,SIGNAL(pressed()),this,SLOT(FavoriteMenu()));

    // tree events
    connect(ui->FolderTree,SIGNAL(currentItemChanged(QTreeWidgetItem *,QTreeWidgetItem *)),this,SLOT(FolderTreeItemChanged(QTreeWidgetItem *,QTreeWidgetItem *)));
    connect(ui->FolderTree,SIGNAL(ActionRefreshAll()),this,SLOT(RefreshAll()));
    connect(ui->FolderTree,SIGNAL(ActionRefreshHere()),this,SLOT(RefreshHere()));
    connect(ui->FolderTree,SIGNAL(ActionRemoveFolder()),this,SLOT(RemoveFolder()));
    connect(ui->FolderTree,SIGNAL(ActionRenameFolder()),this,SLOT(RenameFolder()));

    // table events
    connect(ui->FolderTable,SIGNAL(itemSelectionChanged()),this,SLOT(DoBrowserRefreshSelectedFileInfo()));
    connect(ui->FolderTable,SIGNAL(RefreshFolderInfo()),this,SLOT(DoBrowserRefreshFolderInfo()));
    connect(ui->FolderTable,SIGNAL(DoubleClickEvent()),this,SLOT(DoubleClicked()));
    connect(ui->FolderTable,SIGNAL(Refresh()),this,SLOT(RefreshAll()));
    connect(ui->FolderTable,SIGNAL(RemoveFiles()),this,SLOT(RemoveFile()));
    connect(ui->FolderTable,SIGNAL(InsertFiles()),this,SLOT(AddFiles()));
    connect(ui->FolderTable,SIGNAL(OpenFile()),this,SLOT(OpenFile()));
    connect(ui->FolderTable,SIGNAL(RenameFiles()),this,SLOT(RenameFile()));

    // Set initial path
    ui->FolderTree->SetSelectItemByPath(ui->FolderTree->RealPathToTreePath(ui->FolderTable->CurrentPath));
    RefreshControls();
}

//====================================================================================================================

int             wgt_QMultimediaBrowser::GetSortOrder()                                                    { return ui->FolderTable->SortFile; }
QStringList     wgt_QMultimediaBrowser::GetCurrentSelectedFiles()                                         { return ui->FolderTable->GetCurrentSelectedFiles(); }
void            wgt_QMultimediaBrowser::GetCurrentSelectedMediaFile(QList<cBaseMediaFile*> *SelMediaList) { ui->FolderTable->GetCurrentSelectedMediaFile(SelMediaList); }
cBaseMediaFile  *wgt_QMultimediaBrowser::GetCurrentMediaFile()                                            { return ui->FolderTable->GetCurrentMediaFile(); }
QSplitter       *wgt_QMultimediaBrowser::GetSplitter()                                                    { return ui->BrowserWidget; }
void            wgt_QMultimediaBrowser::EnsureThreadIsStopped()                                           { ui->FolderTable->EnsureThreadIsStopped(); }

//====================================================================================================================

void wgt_QMultimediaBrowser::RefreshControls(bool EmitToParent) {
    if (ui->FolderTable->CurrentMode==DISPLAY_ICON100) {
        ui->IconViewBT->setDown(true);
        ui->IconViewBT->setEnabled(false);
        ui->DetailViewBT->setDown(false);
        ui->DetailViewBT->setEnabled(true);
    } else if (ui->FolderTable->CurrentMode==DISPLAY_DATA) {
        ui->IconViewBT->setDown(false);
        ui->IconViewBT->setEnabled(true);
        ui->DetailViewBT->setDown(true);
        ui->DetailViewBT->setEnabled(false);
    }
    ui->PreviousFolderBt->setEnabled(ui->FolderTable->CanBrowseToPreviousPath());
    ui->UpFolderBt->setEnabled(ui->FolderTable->CanBrowseToUpperPath());
    if (EmitToParent) emit DoRefreshControls();
}

//====================================================================================================================

void wgt_QMultimediaBrowser::FolderTreeItemChanged(QTreeWidgetItem *current,QTreeWidgetItem *) {
    ui->FolderTable->CurrentPath=ui->FolderTree->GetFolderPath(current,false);

    ui->FolderTree->RefreshItemByPath(ui->FolderTree->GetFolderPath(current,true),false);
    ui->CurrentPathED->setText(ui->FolderTable->CurrentPath);
    ui->FolderIcon->setPixmap(ApplicationConfig->DriveList->GetFolderIcon(ui->FolderTable->CurrentPath).pixmap(16,16));

    QString Path=ui->FolderTable->CurrentPath;
    #ifdef Q_OS_WIN
        Path.replace("%HOMEDRIVE%%HOMEPATH%",ApplicationConfig->DriveList->List[0].Path,Qt::CaseInsensitive);
        Path.replace("%USERPROFILE%",ApplicationConfig->DriveList->List[0].Path,Qt::CaseInsensitive);
        Path=QDir::toNativeSeparators(Path);
        if (QDir(Path).canonicalPath()!="") Path=QDir(Path).canonicalPath(); // Resolved eventual .lnk files
    #endif
    ui->FolderTable->FillListFolder(Path);
    DoBrowserRefreshFolderInfo();
}

//====================================================================================================================

void wgt_QMultimediaBrowser::DoBrowserRefreshFolderInfo() {
    ApplicationConfig->DriveList->UpdateDriveList();   // To update free space on drive
    cDriveDesc *HDD=ui->FolderTree->SearchRealDrive(ui->FolderTable->CurrentPath);
    if (HDD) {
        // If scan in progress
        if (ui->FolderTable->ScanMediaListProgress) {
            ui->FolderPgr->setMaximum(0);
            ui->FolderPgr->setValue(0);
            ui->FolderPgr->setFormat("%P%");
            ui->FolderPgr->setAlignment(Qt::AlignHCenter);
            ui->FolderDuration->setText("--:--:--.---");

        // If scan is finished
        } else {
            // Ensure Used and Size fit in an _int32 value for QProgressBar
            int64_t Used=HDD->Used,Size=HDD->Size;
            while (Used>1024*1024) { Used=Used/1024; Size=Size/1024; }
            ui->FolderPgr->setMaximum(Size);
            ui->FolderPgr->setValue(Used);
            ui->FolderPgr->setFormat(GetTextSize(HDD->Used)+"/"+GetTextSize(HDD->Size));
            ui->FolderPgr->setAlignment(Qt::AlignHCenter);

            int64_t   duration=ui->FolderTable->CurrentShowDuration;
            int         msec =duration % 1000;          duration=duration/1000;
            int         sec  =duration % 60;            duration=duration/60;
            int         mn   =duration % 60;            duration=duration/60;
            int         hours=duration % 24;
            int         days =duration / 24;
            if (days>0) ui->FolderDuration->setText(QString("%1.%2:%3:%4.%5").arg(ito2a(days)).arg(ito2a(hours)).arg(ito2a(mn)).arg(ito2a(sec)).arg(ito3a(msec)));
                else    ui->FolderDuration->setText(QString("%1:%2:%3.%4").arg(ito2a(hours)).arg(ito2a(mn)).arg(ito2a(sec)).arg(ito3a(msec)));
        }

        ui->NbrFiles->setText(QString("%1").arg(ui->FolderTable->CurrentShowFilesNumber));
        ui->NbrFolders->setText(QString("%1").arg(ui->FolderTable->CurrentShowFolderNumber));
        ui->FolderSize->setText(QString("%1").arg(GetTextSize(ui->FolderTable->CurrentShowFolderSize)));

    } else {
        ui->FolderPgr->setMaximum(0);
        ui->FolderPgr->setValue(0);
        ui->FolderPgr->setFormat("%P%");
        ui->FolderPgr->setAlignment(Qt::AlignHCenter);
        ui->NbrFiles->setText("");
        ui->NbrFolders->setText("");
        ui->FolderSize->setText("");
        ui->FolderDuration->setText("");
    }
    DoBrowserRefreshSelectedFileInfo();
}

//====================================================================================================================

void wgt_QMultimediaBrowser::DoBrowserRefreshSelectedFileInfo() {
    if (ui->FolderTable->InSelChange) return;

    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));

    QList<cBaseMediaFile*> MediaList;
    ui->FolderTable->GetCurrentSelectedMediaFile(&MediaList);

    if (MediaList.count()==0) {
        // No selection

        ui->FileIcon->setPixmap(QPixmap());
        ui->FileInfo1a->setText("");
        ui->FileInfo2a->setText("");
        ui->FileInfo3a->setText("");

    } else if (MediaList.count()==1) {
        // One file selection

        cBaseMediaFile *MediaObject=MediaList[0];
        QStringList     TempExtProperties;
        ApplicationConfig->FilesTable->GetExtendedProperties(MediaObject->FileKey,&TempExtProperties);
        ui->FileIcon->setPixmap(QPixmap().fromImage(MediaObject->GetIcon(cCustomIcon::ICON100,true).scaledToHeight(48,Qt::SmoothTransformation)));

        QString FStr=MediaObject->GetFileSizeStr();
        if (FStr!="") ui->FileInfo1a->setText(QString("%1 (%2)").arg(MediaObject->ShortName()).arg(FStr));
            else ui->FileInfo1a->setText(MediaObject->ShortName());
        if (QTime(0,0,0,0).msecsTo(MediaObject->GetRealDuration())>0) ui->FileInfo2a->setText(QString("%1-%2").arg(MediaObject->GetTechInfo(&TempExtProperties)).arg(MediaObject->GetRealDuration().toString("HH:mm:ss.zzz")));
            else ui->FileInfo2a->setText(MediaObject->GetTechInfo(&TempExtProperties));
        ui->FileInfo3a->setText(MediaObject->GetTAGInfo(&TempExtProperties));

    } else if (MediaList.count()>1) {
        // Multi file select

        // Do qualification of files
        bool    IsFind;
        QStringList FileExtensions;
        QList<int>  ObjectTypes;
        int64_t   TotalDuration=0;
        int64_t   TotalSize    =0;

        for (int i=0;i<MediaList.count();i++) {
            QString FileExtension=QFileInfo(MediaList[i]->FileName()).completeSuffix();
            IsFind=false;   for (int j=0;j<ObjectTypes.count();j++)     if (MediaList[i]->ObjectType==ObjectTypes[j])   IsFind=true; if (!IsFind) ObjectTypes.append(MediaList[i]->ObjectType);
            IsFind=false;   for (int j=0;j<FileExtensions.count();j++)  if (FileExtension==FileExtensions[j])           IsFind=true; if (!IsFind) FileExtensions.append(FileExtension);

            if ((MediaList[i]->ObjectType==OBJECTTYPE_MUSICFILE)||(MediaList[i]->ObjectType==OBJECTTYPE_VIDEOFILE)||(MediaList[i]->ObjectType==OBJECTTYPE_FFDFILE))
                TotalDuration=TotalDuration+QTime(0,0,0,0).msecsTo(MediaList[i]->GetRealDuration());

            TotalSize=TotalSize+MediaList[i]->FileSize;
        }

        if (TotalDuration!=0) {
            int         msec =TotalDuration % 1000;          TotalDuration=TotalDuration/1000;
            int         sec  =TotalDuration % 60;            TotalDuration=TotalDuration/60;
            int         mn   =TotalDuration % 60;            TotalDuration=TotalDuration/60;
            int         hours=TotalDuration % 24;
            int         days =TotalDuration / 24;
            if (days>0) ui->FileInfo2a->setText(QApplication::translate("MainWindow","Total duration:")+QString("%1.%2:%3:%4.%5").arg(ito2a(days)).arg(ito2a(hours)).arg(ito2a(mn)).arg(ito2a(sec)).arg(ito3a(msec)));
                else    ui->FileInfo2a->setText(QApplication::translate("MainWindow","Total duration:")+QString("%1:%2:%3.%4").arg(ito2a(hours)).arg(ito2a(mn)).arg(ito2a(sec)).arg(ito3a(msec)));
        } else ui->FileInfo2a->setText("");

        if (TotalSize!=0) ui->FileInfo3a->setText(QApplication::translate("MainWindow","Total size:%1").arg(GetTextSize(TotalSize)));
            else          ui->FileInfo3a->setText("");

        if (ObjectTypes.count()==1) {
            switch (ObjectTypes[0]) {
                case OBJECTTYPE_MUSICFILE :
                    ui->FileIcon->setPixmap(QPixmap().fromImage(ApplicationConfig->DefaultMUSICIcon.Icon100.scaledToHeight(48,Qt::SmoothTransformation)));
                    ui->FileInfo1a->setText(QApplication::translate("MainWindow","%1 audio files").arg(MediaList.count()));
                    break;
                case OBJECTTYPE_VIDEOFILE :
                    ui->FileIcon->setPixmap(QPixmap().fromImage(ApplicationConfig->DefaultVIDEOIcon.Icon100.scaledToHeight(48,Qt::SmoothTransformation)));
                    ui->FileInfo1a->setText(QApplication::translate("MainWindow","%1 video files").arg(MediaList.count()));
                    break;
                case OBJECTTYPE_IMAGEFILE :
                    ui->FileIcon->setPixmap(QPixmap().fromImage(ApplicationConfig->DefaultIMAGEIcon.Icon100.scaledToHeight(48,Qt::SmoothTransformation)));
                    ui->FileInfo1a->setText(QApplication::translate("MainWindow","%1 image files").arg(MediaList.count()));
                    break;
                case OBJECTTYPE_IMAGEVECTOR :
                    ui->FileIcon->setPixmap(QPixmap().fromImage(ApplicationConfig->DefaultIMAGEIcon.Icon100.scaledToHeight(48,Qt::SmoothTransformation)));
                    ui->FileInfo1a->setText(QApplication::translate("MainWindow","%1 image vector files").arg(MediaList.count()));
                    break;
                case OBJECTTYPE_FFDFILE   :
                    ui->FileIcon->setPixmap(QPixmap().fromImage(ApplicationConfig->DefaultFFDIcon.Icon100.scaledToHeight(48,Qt::SmoothTransformation)));
                    ui->FileInfo1a->setText(QApplication::translate("MainWindow","%1 ffDiaporama project files").arg(MediaList.count()));
                    break;
                case OBJECTTYPE_FOLDER    :
                    ui->FileIcon->setPixmap(QPixmap().fromImage(ApplicationConfig->DefaultFOLDERIcon.Icon100.scaledToHeight(48,Qt::SmoothTransformation)));
                    ui->FileInfo1a->setText(QApplication::translate("MainWindow","%1 folders").arg(MediaList.count()));
                    break;
                default:
                    ui->FileIcon->setPixmap(QPixmap());
                    ui->FileInfo1a->setText(QApplication::translate("MainWindow","%1 files").arg(MediaList.count()));
                    ui->FileInfo2a->setText(QApplication::translate("MainWindow","Multiple file types"));
                    break;
            }


        } else {
            ui->FileIcon->setPixmap(QPixmap());
            ui->FileInfo1a->setText(QApplication::translate("MainWindow","%1 files").arg(MediaList.count()));
            ui->FileInfo2a->setText(QApplication::translate("MainWindow","Multiple file types"));
        }
    }
    while (!MediaList.isEmpty()) delete MediaList.takeLast();
    RefreshControls();

    QApplication::restoreOverrideCursor();
}

//====================================================================================================================

void wgt_QMultimediaBrowser::SetToPrevious() {
    QString Path=ui->FolderTable->BrowseToPreviousPath();
    if (Path!="") ui->FolderTree->SetSelectItemByPath(Path);
}

//====================================================================================================================

void wgt_QMultimediaBrowser::SetToUpper() {
    QString Path=ui->FolderTable->BrowseToUpperPath();
    if (Path!="") ui->FolderTree->SetSelectItemByPath(Path);
}

//====================================================================================================================

void wgt_QMultimediaBrowser::RefreshAll() {
    CurrentDriveCheck=0;
    CancelAction     =false;
    if (DlgWorkingTaskDialog) {
        DlgWorkingTaskDialog->close();
        delete DlgWorkingTaskDialog;
        DlgWorkingTaskDialog=NULL;
    }
    DlgWorkingTaskDialog=new DlgWorkingTask(QApplication::translate("MainWindow","Refresh All"),&CancelAction,ApplicationConfig,this);
    DlgWorkingTaskDialog->InitDialog();
    DlgWorkingTaskDialog->SetMaxValue(ApplicationConfig->DriveList->List.count()+2,0);
    DlgWorkingTaskDialog->DisplayText(QApplication::translate("MainWindow","update drive list"));
    QTimer::singleShot(LATENCY,this,SLOT(RefreshDriveList()));
    DlgWorkingTaskDialog->exec();
}

//====================================================================================================================

void wgt_QMultimediaBrowser::RefreshDriveList() {
    // Refresh drive list
    ui->FolderTree->RefreshDriveList();
    DlgWorkingTaskDialog->SetMaxValue(ApplicationConfig->DriveList->List.count()+2,0);
    DlgWorkingTaskDialog->DisplayText(QApplication::translate("MainWindow","update drive (%1)").arg(ApplicationConfig->DriveList->List[CurrentDriveCheck].Label));
    DlgWorkingTaskDialog->DisplayProgress(1+ApplicationConfig->DriveList->List.count()-CurrentDriveCheck);
    QTimer::singleShot(LATENCY,this,SLOT(RefreshDrive()));
}

//====================================================================================================================

void wgt_QMultimediaBrowser::RefreshDrive() {
    if (CurrentDriveCheck<ApplicationConfig->DriveList->List.count()) ui->FolderTree->RefreshItemByPath(ApplicationConfig->DriveList->List[CurrentDriveCheck].Label,true);
    CurrentDriveCheck++;
    if ((!CancelAction)&&(CurrentDriveCheck<ApplicationConfig->DriveList->List.count())) {
        DlgWorkingTaskDialog->DisplayText(QApplication::translate("MainWindow","update drive (%1)").arg(ApplicationConfig->DriveList->List[CurrentDriveCheck].Label));
        DlgWorkingTaskDialog->DisplayProgress(1+ApplicationConfig->DriveList->List.count()-CurrentDriveCheck);
        QTimer::singleShot(LATENCY,this,SLOT(RefreshDrive()));
    } else {
        DlgWorkingTaskDialog->DisplayText(QApplication::translate("MainWindow","update current folder"));
        DlgWorkingTaskDialog->DisplayProgress(DlgWorkingTaskDialog->MaxValue);
        QTimer::singleShot(LATENCY,this,SLOT(RefreshHere()));
    }
}

//====================================================================================================================

void wgt_QMultimediaBrowser::RefreshHere() {
    // Force a new scan of folder
    qlonglong FolderKey=ApplicationConfig->FoldersTable->GetFolderKey(ui->FolderTable->CurrentPath);
    ApplicationConfig->FilesTable->UpdateTableForFolder(FolderKey,true);

    // Refresh display
    FolderTreeItemChanged(ui->FolderTree->currentItem(),NULL);
    if (DlgWorkingTaskDialog) {
        DlgWorkingTaskDialog->close();
        delete DlgWorkingTaskDialog;
        DlgWorkingTaskDialog=NULL;
    }
}

//====================================================================================================================

void wgt_QMultimediaBrowser::OpenFolder() {
    cBaseMediaFile *Media=ui->FolderTable->GetCurrentMediaFile();
    if (Media) {
        if (Media->ObjectType==OBJECTTYPE_FOLDER) {
            QString Path=ui->FolderTree->GetCurrentFolderPath();
            if (!Path.endsWith(QDir::separator())) Path=Path+QDir::separator();
            Path=Path+Media->ShortName();
            ui->FolderTree->SetSelectItemByPath(Path);
        } else if (ui->FolderTable->BrowserType==BROWSER_TYPE_MainWindow) emit DoOpenFile(); else emit DoAddFiles();
        delete Media;
    }
}

//====================================================================================================================
#define FAVACTIONTYPE_ACTIONTYPE    0xF000
#define FAVACTIONTYPE_ADD           0x1000
#define FAVACTIONTYPE_MANAGE        0x2000
#define FAVACTIONTYPE_SELECT        0x4000

void wgt_QMultimediaBrowser::FavoriteMenu() {
    QMenu       *ContextMenu=new QMenu(this);
    QStringList BrowserFavorites=ApplicationConfig->LoadBrowserFavoritesFromDabase();

    ContextMenu->addAction(CreateMenuAction(QIcon(":/img/favorite_add.png"),QApplication::translate("MainWindow","Add to favorite"),FAVACTIONTYPE_ADD,false,false,this));
    if (BrowserFavorites.count()>0) {
        ContextMenu->addSeparator();
        for (int i=0;i<BrowserFavorites.count();i++) {
            QStringList Texts=BrowserFavorites[i].split("###");
            ContextMenu->addAction(CreateMenuAction(QIcon(":/img/favorite.png"),QString("%1 [%2]").arg(Texts[0]).arg(Texts[1]),FAVACTIONTYPE_SELECT,true,Texts[1]==ui->FolderTable->CurrentPath,this));
        }
    }
    ContextMenu->addSeparator();
    ContextMenu->addAction(CreateMenuAction(QIcon(":/img/favorite_manage.png"),QApplication::translate("MainWindow","Manage favorites"),FAVACTIONTYPE_MANAGE,false,false,this));

    QAction *Action=ContextMenu->exec(QCursor::pos());
    if (Action) {
        int ActionType=Action->data().toInt() & FAVACTIONTYPE_ACTIONTYPE;
        if (ActionType==FAVACTIONTYPE_ADD)          AddToFavorite();
        else if (ActionType==FAVACTIONTYPE_MANAGE)  ManageFavorite();
        else if (Action->text()!="") {
            QStringList Texts=Action->text().split(" [");
            ui->FolderTree->SetSelectItemByPath(Texts[1].left(Texts[1].length()-1));
        }
    }
    ui->FavoriteBt->setDown(false);
}

//====================================================================================================================

void wgt_QMultimediaBrowser::AddToFavorite() {
    bool        Ok,Continue=true;
    QString     Text=ui->FolderTable->CurrentPath;
    QStringList BrowserFavorites=ApplicationConfig->LoadBrowserFavoritesFromDabase();

    while (Text.indexOf(QDir::separator())!=-1) Text=Text.mid(Text.indexOf(QDir::separator())+1);
    while (Continue) {
        Continue=false;
        Text=CustomInputDialog(this,QApplication::translate("MainWindow","Add to favorite"),QApplication::translate("MainWindow","Favorite name:"),QLineEdit::Normal,Text,&Ok);
        if (Ok && !Text.isEmpty()) {

            int i=0;
            while ((i<BrowserFavorites.count())&&(!BrowserFavorites[i].startsWith(Text+"###"))) i++;
            if ((i<BrowserFavorites.count())&&(BrowserFavorites[i].startsWith(Text+"###"))) {
                if (CustomMessageBox(this,QMessageBox::Question,QApplication::translate("MainWindow","Add to favorite"),
                                          QApplication::translate("MainWindow","A favorite with this name already exists.\nDo you want to overwrite it?"),
                                          QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)==QMessageBox::Yes)
                    BrowserFavorites[i]=Text+"###"+ui->FolderTable->CurrentPath;
                else Continue=true;

            } else {

                int i=0;
                while ((i<BrowserFavorites.count())&&(!BrowserFavorites[i].endsWith("###"+ui->FolderTable->CurrentPath))) i++;
                if ((i<BrowserFavorites.count())&&(BrowserFavorites[i].endsWith("###"+ui->FolderTable->CurrentPath))) {
                    if (CustomMessageBox(this,QMessageBox::Question,QApplication::translate("MainWindow","Add to favorite"),
                                              QApplication::translate("MainWindow","A favorite with for this path already exists.\nDo you want to overwrite it?"),
                                              QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)==QMessageBox::Yes)
                        BrowserFavorites[i]=Text+"###"+ui->FolderTable->CurrentPath;
                    else Continue=true;

                } else {
                    BrowserFavorites.append(Text+"###"+ui->FolderTable->CurrentPath);
                }
            }
        }
    }
    BrowserFavorites.sort();
    ApplicationConfig->SaveBrowserFavoritesToDabase(BrowserFavorites);
}

//====================================================================================================================

void wgt_QMultimediaBrowser::ManageFavorite() {
    QStringList BrowserFavorites=ApplicationConfig->LoadBrowserFavoritesFromDabase();
    DlgManageFavorite Dlg(&BrowserFavorites,ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) ApplicationConfig->SaveBrowserFavoritesToDabase(BrowserFavorites);
}

//====================================================================================================================

void wgt_QMultimediaBrowser::ChangeToIconView() {
    ui->FolderTable->CurrentMode=DISPLAY_ICON100;
    ui->FolderTable->SetMode();
    FolderTreeItemChanged(ui->FolderTree->currentItem(),NULL);
}

//====================================================================================================================

void wgt_QMultimediaBrowser::ChangeToDetailView() {
    ui->FolderTable->CurrentMode=DISPLAY_DATA;
    ui->FolderTable->SetMode();
    FolderTreeItemChanged(ui->FolderTree->currentItem(),NULL);
}

//====================================================================================================================

void wgt_QMultimediaBrowser::SettingsMenu() {
    // Create menu
    QMenu *ContextMenu=ui->FolderTable->PrepSettingsMenuMenu(this);

    // Exec menu
    QAction *Action=ContextMenu->exec(QCursor::pos());
    if (Action) {
        int ActionType=Action->data().toInt() & ACTIONTYPE_ACTIONTYPE;
        int SubAction =Action->data().toInt() & (~ACTIONTYPE_ACTIONTYPE);
        if (ActionType==ACTIONTYPE_FILTERMODE) {
            if (ui->FolderTable->CurrentFilter!=SubAction) {
                ui->FolderTable->CurrentFilter=SubAction;
                ui->FolderTable->SetMode();
                FolderTreeItemChanged(ui->FolderTree->currentItem(),NULL);
            }
        } else if (ActionType==ACTIONTYPE_ONOFFOPTIONS) {
            if ((SubAction==ONOFFOPTIONS_SHOWHIDDEN)||(SubAction==ONOFFOPTIONS_HIDEHIDDEN)) {
                ui->FolderTable->ShowHiddenFilesAndDir=(SubAction==ONOFFOPTIONS_SHOWHIDDEN);
                RefreshAll();
            } else if ((SubAction==ONOFFOPTIONS_SHOWFILENAME)||(SubAction==ONOFFOPTIONS_HIDEFILENAME)) {
                ui->FolderTable->DisplayFileName=(SubAction==ONOFFOPTIONS_SHOWFILENAME);
                RefreshAll();
            } else if (SubAction==ONOFFOPTIONS_SHOWFOLDERFIRST) {
                ui->FolderTable->ShowFoldersFirst=!ui->FolderTable->ShowFoldersFirst;
                RefreshHere();
            }
        } else if (ActionType==ACTIONTYPE_SORTORDER) {
            ui->FolderTable->SortFile=SubAction;
            RefreshHere();
        }
    }

    // set up button
    ui->ActionModeBt->setDown(false);
}

//====================================================================================================================

bool wgt_QMultimediaBrowser::InRemoveFolder(QString FolderPath) {
    QDir            Folder(FolderPath);
    QFileInfoList   Dirs=Folder.entryInfoList(QDir::Dirs|QDir::AllDirs|QDir::Hidden);

    foreach(QFileInfo Dir,Dirs)
        if ((Dir.isDir())&&(Dir.absoluteFilePath()!=FolderPath)&&(Dir.fileName()!=".")&&(Dir.fileName()!=".."))
            if (!InRemoveFolder(Dir.absoluteFilePath())) return false;

    QFileInfoList  Files=Folder.entryInfoList(QDir::Dirs|QDir::AllEntries|QDir::Hidden);
    foreach(QFileInfo File,Files) if (!File.isDir()) if (!QFile(File.absoluteFilePath()).remove()) {
        ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","Impossible to remove file %1 - error %2:%3").arg(File.fileName()).arg(errno).arg(QString().fromLocal8Bit(strerror(errno))));
        return false;
    }

    if (!QDir().rmdir(FolderPath)) {
        ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","Impossible to remove folder %1 - error %2:%3").arg(FolderPath).arg(errno).arg(QString().fromLocal8Bit(strerror(errno))));
        return false;
    } else {
        ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Successfully deleted folder (and all its content) %1").arg(FolderPath));
        return true;
    }
}

//====================================================================================================================

void wgt_QMultimediaBrowser::RemoveFolder() {
    QString FolderPath=ui->FolderTree->GetFolderPath(ui->FolderTree->currentItem(),false);
    #if defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
        if (FolderPath.startsWith("~")) FolderPath=QDir::homePath()+FolderPath.mid(1);
    #else
        if (FolderPath.startsWith(PersonalFolder)) FolderPath=QDir::homePath()+FolderPath.mid(PersonalFolder.length());
        FolderPath=QDir::toNativeSeparators(FolderPath);
    #endif

    QString NewFolderPath=ui->FolderTree->GetFolderPath(ui->FolderTree->currentItem(),true);
    if (NewFolderPath.lastIndexOf(QDir::separator())!=-1) NewFolderPath=NewFolderPath.left(NewFolderPath.lastIndexOf(QDir::separator()));

    if (CustomMessageBox(this,QMessageBox::Question,APPLICATION_NAME,QApplication::translate("MainWindow","Are you sure to remove this folder ?\n(Warning: Content will not be moved to trash)")+"\n"+FolderPath,QMessageBox::Yes|QMessageBox::No)==QMessageBox::Yes) {
        InRemoveFolder(FolderPath);
        ui->FolderTree->SetSelectItemByPath(NewFolderPath);
    }
}

//====================================================================================================================

void wgt_QMultimediaBrowser::RenameFolder() {
    bool    Ok;
    bool    PersoF=false;

    QString FolderPath=ui->FolderTree->GetFolderPath(ui->FolderTree->currentItem(),false);
    #if defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
        if (FolderPath.startsWith("~")) {
            FolderPath=QDir::homePath()+FolderPath.mid(1);
            PersoF=true;
        }
    #else
        if (FolderPath.startsWith(PersonalFolder)) {
            FolderPath=QDir::homePath()+FolderPath.mid(PersonalFolder.length());
            FolderPath=QDir::toNativeSeparators(FolderPath);
            PersoF=true;
        }
    #endif
    QString SrcFolder    =FolderPath;
    QString SubFolderName=FolderPath;
    if (SubFolderName.endsWith(QDir::separator())) SubFolderName=SubFolderName.lastIndexOf(SubFolderName.length()-1);
    if (SubFolderName.indexOf(QDir::separator())!=-1) {
        FolderPath=FolderPath.left(FolderPath.lastIndexOf(QDir::separator()));
        SubFolderName=SubFolderName.mid(SubFolderName.lastIndexOf(QDir::separator())+1);
        SubFolderName=CustomInputDialog(this,QApplication::translate("MainWindow","Rename folder"),QApplication::translate("MainWindow","Folder:"),QLineEdit::Normal,SubFolderName,&Ok);
        if (Ok && !SubFolderName.isEmpty()) {
            if (!QDir().rename(SrcFolder,FolderPath+QDir::separator()+SubFolderName)) CustomMessageBox(this,QMessageBox::Critical,QApplication::translate("MainWindow","Rename folder"),QApplication::translate("MainWindow","Impossible to rename folder!"),QMessageBox::Ok);
            else {
                if (PersoF) {
                    #if defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
                    FolderPath.replace(QDir::homePath(),"~");
                    #else
                    FolderPath.replace(QDir::toNativeSeparators(QDir::homePath()),PersonalFolder);
                    #endif
                }
                ui->FolderTree->RefreshItemByPath(ui->FolderTree->GetFolderPath(ui->FolderTree->currentItem()->parent(),true),false);
                ui->FolderTree->SetSelectItemByPath(FolderPath+QDir::separator()+SubFolderName);
            }
        }
    }
}

//====================================================================================================================

void wgt_QMultimediaBrowser::RemoveFile() {
    QList<cBaseMediaFile*> MediaList;
    ui->FolderTable->GetCurrentSelectedMediaFile(&MediaList);
    if (MediaList.count()>0) {
        while (FileList.count()>0) FileList.removeLast();
        for (int i=0;i<MediaList.count();i++) {
            FileList.append(MediaList[i]->FileName());
            QString FName=MediaList[i]->FileName();
            QString FileExtension=QFileInfo(MediaList[i]->FileName()).completeSuffix();
            if (!FileExtension.isEmpty())                   FName.replace("."+FileExtension,"");
            if (QFileInfo(FName+".jpg").exists())           FileList.append(FName+".jpg");
            if (QFileInfo(FName+"-poster.jpg").exists())    FileList.append(FName+"-poster.jpg");
            if (QFileInfo(FName+".nfo").exists())           FileList.append(FName+".nfo");
        }
        DlgWorkingTaskDialog=new DlgWorkingTask(QApplication::translate("MainWindow","Remove files"),&CancelAction,ApplicationConfig,this);
        DlgWorkingTaskDialog->InitDialog();
        DlgWorkingTaskDialog->SetMaxValue(FileList.count(),0);
        QTimer::singleShot(LATENCY,this,SLOT(s_Action_DoRemoveFile()));
        DlgWorkingTaskDialog->exec();
        while (!MediaList.isEmpty()) delete MediaList.takeLast();
    }
}

void wgt_QMultimediaBrowser::s_Action_DoRemoveFile() {
    if ((FileList.count()==0)||(CancelAction)) {
        if (DlgWorkingTaskDialog) {
            DlgWorkingTaskDialog->close();
            delete DlgWorkingTaskDialog;
            DlgWorkingTaskDialog=NULL;
            RefreshHere();
        }
        FileList.clear();
        return;
    }

    if (DlgWorkingTaskDialog) {
        DlgWorkingTaskDialog->DisplayText(QApplication::translate("MainWindow","Remove file :")+QFileInfo(FileList[0]).fileName());
        DlgWorkingTaskDialog->DisplayProgress(DlgWorkingTaskDialog->MaxValue-FileList.count());
    }

    QString FileToRemove=FileList.takeFirst();
    if (CustomMessageBox(this,QMessageBox::Question,APPLICATION_NAME,QApplication::translate("MainWindow","Are you sure to delete this file or folder ?\n(Warning: Content will not be moved to trash)")+"\n"+FileToRemove,QMessageBox::Yes|QMessageBox::No)==QMessageBox::Yes) {
        if (QFileInfo(FileToRemove).isDir()) {
            if (!QDir().rmdir(FileToRemove)) CustomMessageBox(this,QMessageBox::Critical,QApplication::translate("MainWindow","Remove folder"),QApplication::translate("MainWindow","Impossible to delete folder!\nAre you sure it is empty?"),QMessageBox::Ok);
        } else {
            if (!QFile(FileToRemove).remove()) CustomMessageBox(this,QMessageBox::Critical,QApplication::translate("MainWindow","Remove file"),QApplication::translate("MainWindow","Impossible to delete file!"),QMessageBox::Ok);
        }
    }
    QTimer::singleShot(LATENCY,this,SLOT(s_Action_DoRemoveFile()));
}

//====================================================================================================================

void wgt_QMultimediaBrowser::RenameFile() {
    cBaseMediaFile *Media=ui->FolderTable->GetCurrentMediaFile();
    if (Media) {
        bool Ok=true;
        QString NewName=Media->ShortName();
        NewName=CustomInputDialog(this,QApplication::translate("MainWindow","Rename file"),QApplication::translate("MainWindow","New name:"),QLineEdit::Normal,NewName,&Ok);
        if (Ok && !NewName.isEmpty()) {
            NewName=QDir::toNativeSeparators(QFileInfo(Media->FileName()).absolutePath()+QDir::separator()+NewName);
            if (!QDir().rename(Media->FileName(),NewName)) CustomMessageBox(this,QMessageBox::Critical,QApplication::translate("MainWindow","Rename file"),QApplication::translate("MainWindow","Impossible to rename file!"),QMessageBox::Ok); else {
                if (QFileInfo(NewName).isDir())
                    ui->FolderTree->RefreshItemByPath(ui->FolderTree->GetFolderPath(ui->FolderTree->currentItem(),true),false);
                RefreshHere();
            }
        }
        delete Media;
    }
}
