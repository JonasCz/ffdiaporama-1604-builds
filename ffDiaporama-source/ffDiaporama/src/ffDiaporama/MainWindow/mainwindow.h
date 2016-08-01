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

#ifndef MAINWINDOW_H
#define MAINWINDOW_H

// Basic inclusions (common to all files)
#include "engine/_GlobalDefines.h"
#include "engine/cApplicationConfig.h"
#include "engine/_Diaporama.h"

// Include some common various class
#include "DlgWorkingTask/DlgWorkingTask.h"

#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QLocalSocket>
#include <QLocalServer>

namespace Ui {
    class MainWindow;
}

class MainWindow : public QMainWindow {
Q_OBJECT
public:
    QString                 ForceLanguage;
    bool                    IsFirstInitDone;                // true when first show window was done
    bool                    FLAGSTOPITEMSELECTION;          // Flag to stop Item Selection process in the timeline
    cApplicationConfig      *ApplicationConfig;
    cDiaporama              *Diaporama;
    int                     LastCount;
    QString                 TitleBar;
    QTime                   LastLogMessageTime;
    QStringList             AliasList;
    bool                    ClipboardLock;                  // Flag to stop clipboard use during copy/paste operation

    // Variables used for actions
    QString                 FileForIO;
    int                     SavedCurIndex,CurIndex;

    Qt::HANDLE              CurrentThreadId;

    DlgWorkingTask          *DlgWorkingTaskDialog;
    bool                    CancelAction;
    int                     CurrentDriveCheck;

    // Loading operation
    QStringList             FileList,MusicFileList;
    QDomElement             CurrentLoadingProjectDocument;
    int                     CurrentLoadingProjectObject;
    int                     CurrentLoadingProjectNbrObject;

    // Appending a project operation
    QString                 CurrentAppendingProjectName;
    QDomDocument            CurrentAppendingProjectDocument;
    QDomElement             CurrentAppendingRoot;
    int                     CurrentAppendingProjectObject;
    int                     CurrentAppendingProjectNbrObject;


    explicit MainWindow(QString ForceLanguage,QWidget *parent = 0);
    ~MainWindow();

    void    SetModifyFlag(bool IsModify);
    void    AdjustRuller(int CurIndex=-1);
    void    CheckVersion();
    void    ToStatusBar(QString Text);
    void    SetTimelineCurrentCell(int Cell);
    void    DoTimelineSelectionChanged();                   // Timeline current item changed
    bool    ForcePause(const char *caller);

protected:
    virtual void    resizeEvent(QResizeEvent *);
    virtual void    closeEvent(QCloseEvent *);
    virtual void    showEvent(QShowEvent *);
    virtual void    keyReleaseEvent(QKeyEvent *event);
    virtual void    customEvent(QEvent *);                  // LOG messages event


private slots:
    void    RefreshControls();
    void    InitWindow();
    void    SetTimelineHeight();

    void    s_CleanStatusBar();
    void    DoMaximized();                                  // Use on init to force window maximized
    void    s_Event_SetModifyFlag();
    void    s_Event_RefreshDisplay();

    // Event functions
    void    s_Event_ClipboardChanged();                     // Something have changed in the clipboard
    void    s_Event_ToolbarChanged(int MenuIndex);          // User change current toolbar TAB
    void    DoCheckBUILDVERSION(QNetworkReply*);            // Build version was downloaded from internet

    // Timeline & player
    void    s_Event_PlayPause();
    void    s_Event_TimelineDragMoveItem();                 // Drag & drop operation in timeline
    void    s_Event_TimelineAddDragAndDropFile();           // Add files from drag & drop (event send from timeline)
    void    s_Event_TimelineSelectionChanged();             // Timeline current item changed
    void    s_Event_DoubleClickedOnObject();                // Double click on widget in the object track
    void    s_Event_DoubleClickedOnTransition();            // Double click on transition part of widget in the object track
    void    s_Event_DoubleClickedOnBackground();            // Double click on widget in the background track
    void    s_Event_DoubleClickedOnMusic();                 // Double click on widget in the music track
    void    s_Event_ContextualMenu(QMouseEvent *);          // Right click
    void    s_VideoPlayer_SaveImageEvent();                 // Click on preview save image button
    void    s_VideoPlayer_VolumeChanged();

    // Actions small bottom right toolbar menu
    void    s_Action_Version();
    void    s_Action_ZoomPlus();
    void    s_Action_ZoomMinus();
    void    s_Action_ChWindowDisplayMode_ToPlayerMode();
    void    s_Action_ChWindowDisplayMode_ToPartitionMode();
    void    s_Action_ChWindowDisplayMode_ToBrowserMode();
    void    s_Action_ChWindowDisplayMode(int Mode);
    void    s_Action_ChWindowDisplayMode();

    // Actions File menu
    void    s_Action_New();
    void    s_Action_Open();
    void    s_Action_OpenRecent();
    void    s_Action_Save();
    void    s_Action_SaveAsBT();
    void    s_Action_SaveAs();
    void    s_Action_Export();
    void    s_Action_ProjectProperties();
    void    s_Action_ChangeApplicationSettings();
    void    s_Action_DlgCheckConfig();
    void    s_Action_Exit();

    // Actions Project menu
    void    s_Action_AddFile();
    void    s_Action_AddTitle();
    void    s_Action_AddEmptyTitle();
    void    s_Action_AddAutoTitleSlide();
    void    s_Action_AddGMap();
    void    s_Action_AddProject();
    void    DoAddFile();
    void    DoAppendFile();
    void    s_Action_DoUseAsPlayList();
    void    s_Action_RemoveObject();
    void    s_Action_EditObject();
    void    s_Action_CutToClipboard();
    void    s_Action_CopyToClipboard();
    void    s_Action_PasteFromClipboard();

    // Actions contextual menu (on single slide music part)
    void    s_Action_RemovePlaylist();
    void    s_Action_PlaylistToPlay();
    void    s_Action_PlaylistToPause();
    void    s_Action_AdjustOnMusic();

    // Actions contextual menu (on multiple selection)
    void    s_ActionMultiple_SetFirstShotDuration();
    void    s_ActionMultiple_ResetBackground();
    void    s_ActionMultiple_ResetMusic();
    void    s_ActionMultiple_RemoveTransition();
    void    s_ActionMultiple_SelectTransition();
    void    s_ActionMultiple_SetTransitionDuration();
    void    s_ActionMultiple_Randomize();

    // Actions Render menu
    void    s_Action_RenderVideo();
    void    s_Action_RenderSmartphone();
    void    s_Action_RenderMultimedia();
    void    s_Action_RenderForTheWEB();
    void    s_Action_RenderLossLess();
    void    s_Action_RenderSoundTrack();

    // Actions Help menu
    void    s_Action_About();
    void    s_Action_Documentation();
    void    s_Action_NewFunctions();
    void    s_Action_OpenTABHelpLink(const QString);

    // Do function (call by action or event function)
    void    DoOpenFile();
    void    DoOpenFileObject();
    void    DoSaveFile();

    // Browser event
    void    s_Browser_OpenFile();
    void    s_Browser_AddFiles();

    // To avoid multiple instance of the application
    void    MonoInstanceSocketConnection() {}

private:
    // Utility functions
    void    UpdateChapterInfo();
    void    toolTipTowhatsThis(QObject *StartObj);
    bool    DownloadFile(QString FileName);

    Ui::MainWindow                          *ui;
    QList<cSlideThumbsTable::TRResKeyItem>  ResKeyList;     // Ressource key mapping table

     // To avoid multiple instance of the application
    QLocalSocket    MonoInstanceSocket;
    QLocalServer    MonoInstanceServer;
};

#endif // MAINWINDOW_H
