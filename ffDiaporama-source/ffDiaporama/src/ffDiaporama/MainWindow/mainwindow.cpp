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

#include "cCustomSlideTable.h"

#include "mainwindow.h"
#include "ui_mainwindow.h"

#include <QClipboard>
#include <QMimeData>
#include <QDomElement>
#include <QDomDocument>
#include <QSplashScreen>
#include <QMenu>
#include <QAction>
#include <QMessageBox>
#include <QFileDialog>
#include <QScrollBar>
#include <QEventLoop>

#include "QCustomHorizSplitter.h"
#include "cTextFrame.h"
#include "engine/_Variables.h"
#include "engine/cLocation.h"

#include "HelpPopup/HelpPopup.h"
#include "DlgInfoFile/DlgInfoFile.h"
#include "DlgCheckConfig/DlgCheckConfig.h"
#include "DlgffDPjrProperties/DlgffDPjrProperties.h"
#include "DlgRenderVideo/DlgRenderVideo.h"
#include "DlgAbout/DlgAbout.h"
#include "DlgTransition/DlgTransitionProperties.h"
#include "DlgTransition/DlgTransitionDuration.h"
#include "DlgMusic/DlgMusicProperties.h"
#include "DlgMusic/DlgAdjustToSound.h"
#include "DlgBackground/DlgBackgroundProperties.h"
#include "DlgSlide/DlgSlideProperties.h"
#include "DlgSlide/DlgSlideDuration.h"
#include "DlgAppSettings/DlgApplicationSettings.h"
#include "DlgManageFavorite/DlgManageFavorite.h"
#include "DlgFileExplorer/DlgFileExplorer.h"
#include "DlgAutoTitleSlide/DlgAutoTitleSlide.h"
#include "DlgExportProject/DlgExportProject.h"
#include "DlgGMapsLocation/DlgGMapsGeneration.h"
#include "DlgImage/DlgImageCorrection.h"

#include <cmath>

// Note: GUID from http://www.guidgenerator.com/online-guid-generator.aspx
#define GUID_SERVERNAME  "4b8b9da3-bb03-4771-a43f-90ebe9d0a3c3"

//====================================================================================================================

MainWindow::MainWindow(QString ForceLanguage,QWidget *parent):QMainWindow(parent),ui(new Ui::MainWindow) {
    ApplicationConfig       =new cApplicationConfig(this,ALLOWEDWEBLANGUAGE);
    CurrentThreadId         =this->thread()->currentThreadId();
    IsFirstInitDone         =false;        // true when first show window was done
    FLAGSTOPITEMSELECTION   =false;        // Flag to stop Item Selection process for delete and move of object
    DlgWorkingTaskDialog    =NULL;
    CancelAction            =false;
    CurrentDriveCheck       =0;
    ClipboardLock           =false;
    this->ForceLanguage     =ForceLanguage;
    EventReceiver           =this;          // Connect Event Receiver so now we accept LOG messages

    setAcceptDrops(true);
    ApplicationConfig->ParentWindow=this;
    QTimer::singleShot(LATENCY,this,SLOT(InitWindow()));
}

//====================================================================================================================

void MainWindow::InitWindow() {
    QSplashScreen screen(QPixmap(":/img/splash.png"));
    screen.show();
    screen.raise();

    // Init database
    screen.showMessage(QApplication::translate("MainWindow","Init home user database..."),Qt::AlignHCenter|Qt::AlignBottom);
    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Init home user database..."));
    ApplicationConfig->Database=new cDatabase(QDir::toNativeSeparators(ApplicationConfig->UserConfigPath+"ffdiaporama.db"));
    ApplicationConfig->Database->ApplicationConfig=ApplicationConfig;
    bool IsDBCreation=!QFileInfo(ApplicationConfig->Database->dbPath).exists();
    if (ApplicationConfig->Database->OpenDB()) {
        //==== Tables definition
        ApplicationConfig->Database->Tables.append(ApplicationConfig->SettingsTable   =new cSettingsTable(ApplicationConfig->Database));
        ApplicationConfig->Database->Tables.append(ApplicationConfig->FoldersTable    =new cFolderTable(ApplicationConfig->Database));
        ApplicationConfig->Database->Tables.append(ApplicationConfig->FilesTable      =new cFilesTable(ApplicationConfig->Database));
        ApplicationConfig->Database->Tables.append(ApplicationConfig->SlideThumbsTable=new cSlideThumbsTable(ApplicationConfig->Database));
        ApplicationConfig->Database->Tables.append(ApplicationConfig->LocationTable   =new cLocationTable(ApplicationConfig->Database));
        ApplicationConfig->ImagesCache.FilesTable =ApplicationConfig->FilesTable;
        ApplicationConfig->ImagesCache.ThumbsTable=ApplicationConfig->SlideThumbsTable;
        //==== End of tables definition
        if (((!IsDBCreation)&&(!ApplicationConfig->Database->CheckDatabaseVersion()))||(!ApplicationConfig->Database->ValidateTables())) {
            ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","Error initialising home user database..."));
            CustomMessageBox(NULL,QMessageBox::Critical,QApplication::translate("MainWindow","Error","Error message"),
                             QApplication::translate("MainWindow","Error initialising home user database\nffDiaporama can't start","Error message"),QMessageBox::Close);
            exit(1);
        }
    }

    // Init application config
    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Init translations..."));
    ApplicationConfig->InitConfigurationValues(ForceLanguage);

    // Test if another instance of ffDiaporama is already started on the computer
    MonoInstanceSocket.connectToServer(GUID_SERVERNAME);
    bool AlreadyStarted=MonoInstanceSocket.waitForConnected(2000);

    // No other instance reply, so try to open a server
    if ((!AlreadyStarted)&&(!MonoInstanceServer.listen(GUID_SERVERNAME))) {
        // Impossible to start new server so probably another instance crashed on this computer, then try to remove crashed server
        ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","Restore from a previous crash..."));
        MonoInstanceServer.removeServer(GUID_SERVERNAME);
        AlreadyStarted=!MonoInstanceServer.listen(GUID_SERVERNAME);
    }
    if (AlreadyStarted) {
        CustomMessageBox(NULL,QMessageBox::Critical,"ffDiaporama",
                         QApplication::translate("MainWindow","Sorry, but ffDiaporama is already started on this computer and can't be started several time."),
                         QMessageBox::Close);
        exit(1);
    }
    // Create MonoInstanceServer to answer to next instance
    connect(&MonoInstanceServer,SIGNAL(newConnection()),this,SLOT(MonoInstanceSocketConnection()));

    // Reset database cache of thumbnails
    ApplicationConfig->SlideThumbsTable->ClearTable();

    // Now, we have application settings then we can init all others
    ui->setupUi(this);

    // Update logo image
    QPixmap     LogoImg(":/img/logo_big.png");
    QPainter    P;
    QTextOption QTO;
    QFont       Font("Serif",20,QFont::Normal,QFont::StyleItalic);
    QPen        Pen;

    P.begin(&LogoImg);
    ScaleFontAdjust=double(P.fontMetrics().boundingRect("0").height());
    P.setFont(Font);
    int Size         =P.fontMetrics().boundingRect("99/99/9999").width();           // Size should be 150 on standard Linux and 136 on standard Windows
    ScreenFontAdjust =double(Size)/double(150);                                     // Adjustement for text functions using direct font
    SCALINGTEXTFACTOR=int(std::floor(double(SCALINGTEXTFACTOR)*ScreenFontAdjust));  // Adjust Windows to correspond to Linux size
    QTO.setAlignment(Qt::AlignRight|Qt::AlignTop);
    QTO.setWrapMode(QTextOption::NoWrap);
    QTO.setTextDirection(Qt::LeftToRight);
    Pen.setColor(Qt::yellow);
    Pen.setWidth(1);
    Pen.setStyle(Qt::SolidLine);
    P.setPen(Pen);
    P.drawText(QRect(0,38,LogoImg.width()-10,LogoImg.height()-38),CurrentAppName,QTO);
    P.end();
    ui->TABToolimg->setPixmap(LogoImg);

    ui->timeline->ApplicationConfig=ApplicationConfig;
    ui->preview->FLAGSTOPITEMSELECTION=&FLAGSTOPITEMSELECTION;
    ui->preview2->FLAGSTOPITEMSELECTION=&FLAGSTOPITEMSELECTION;
    ui->ToolBoxNormal->setCurrentIndex(0);

    Transparent.setTextureImage(QImage(":/img/transparent.png"));  // Load transparent brush

    // Prepare title bar depending on running version
    TitleBar=QString(APPLICATION_NAME)+" "+CurrentAppName;
    if ((TitleBar.toLower().indexOf("devel")!=-1)||(TitleBar.toLower().indexOf("beta")!=-1)) TitleBar=TitleBar+QString(" - ")+CurrentAppVersion;

    screen.showMessage(QApplication::translate("MainWindow","Loading system icons..."),Qt::AlignHCenter|Qt::AlignBottom);
    ApplicationConfig->PreloadSystemIcons();

    // Register all formats and codecs for libavformat/libavcodec/etc ...
    screen.showMessage(QApplication::translate("MainWindow","Starting libav..."),Qt::AlignHCenter|Qt::AlignBottom);
    if (!ApplicationConfig->DeviceModelList.InitLibav()) exit(1);

    // Register background library
    screen.showMessage(QApplication::translate("MainWindow","Loading background library..."),Qt::AlignHCenter|Qt::AlignBottom);
    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Loading background library..."));
    BackgroundList.ScanDisk("background",ApplicationConfig);

    // Register text frame library
    screen.showMessage(QApplication::translate("MainWindow","Loading text frame library..."),Qt::AlignHCenter|Qt::AlignBottom);
    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Loading text frame library..."));
    TextFrameList.DoPreploadList();

    // Register non luma library
    screen.showMessage(QApplication::translate("MainWindow","Loading no-luma transitions..."),Qt::AlignHCenter|Qt::AlignBottom);
    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Loading no-luma transitions..."));
    RegisterNoLumaTransition();

    // Register luma library
    screen.showMessage(QApplication::translate("MainWindow","Loading luma transitions..."),Qt::AlignHCenter|Qt::AlignBottom);
    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Loading luma transitions..."));
    RegisterLumaTransition();

    AutoFramingDefInit();
    ShapeFormDefinitionInit();

    // Because now we have local installed, then we can translate drive name
    screen.showMessage(QApplication::translate("MainWindow","Scan drives in computer..."),Qt::AlignHCenter|Qt::AlignBottom);
    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Scan drives in computer..."));
    ApplicationConfig->DriveList=new cDriveList(ApplicationConfig);

    // Register models
    screen.showMessage(QApplication::translate("MainWindow","Register models..."),Qt::AlignHCenter|Qt::AlignBottom);
    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Register models..."));
    ApplicationConfig->ThumbnailModels=new cModelList(ApplicationConfig,ffd_MODELTYPE_THUMBNAIL,&ApplicationConfig->ThumbnailModelsNextNumber,GEOMETRY_THUMBNAIL,0,"");
    int Cur;
    for (int geo=GEOMETRY_4_3;geo<=GEOMETRY_40_17;geo++) {
        Cur=0;
        ApplicationConfig->PrjTitleModels[geo][Cur]=new cModelList(ApplicationConfig,ffd_MODELTYPE_PROJECTTITLE,&ApplicationConfig->PrjTitleModelsNextNumber[geo],(ffd_GEOMETRY)geo,Cur,QApplication::translate("cModelList","Simple titles without animation"));            Cur++;
        ApplicationConfig->PrjTitleModels[geo][Cur]=new cModelList(ApplicationConfig,ffd_MODELTYPE_PROJECTTITLE,&ApplicationConfig->PrjTitleModelsNextNumber[geo],(ffd_GEOMETRY)geo,Cur,QApplication::translate("cModelList","Animated titles"));                            Cur++;
        //ApplicationConfig->PrjTitleModels[geo][Cur]=new cModelList(ApplicationConfig,ffd_MODELTYPE_PROJECTTITLE,&ApplicationConfig->PrjTitleModelsNextNumber[geo],(ffd_GEOMETRY)geo,Cur,QApplication::translate("cModelList","Titles dedicated to events"));                 Cur++;
        ApplicationConfig->PrjTitleModels[geo][Cur]=new cModelList(ApplicationConfig,ffd_MODELTYPE_PROJECTTITLE,&ApplicationConfig->PrjTitleModelsNextNumber[geo],(ffd_GEOMETRY)geo,9,  QApplication::translate("cModelList","Custom titles"));
        Cur=0;
        ApplicationConfig->CptTitleModels[geo][Cur]=new cModelList(ApplicationConfig,ffd_MODELTYPE_CHAPTERTITLE,&ApplicationConfig->CptTitleModelsNextNumber[geo],(ffd_GEOMETRY)geo,Cur,QApplication::translate("cModelList","Simple chapter titles without animation"));    Cur++;
        ApplicationConfig->CptTitleModels[geo][Cur]=new cModelList(ApplicationConfig,ffd_MODELTYPE_CHAPTERTITLE,&ApplicationConfig->CptTitleModelsNextNumber[geo],(ffd_GEOMETRY)geo,Cur,QApplication::translate("cModelList","Animated chapter titles"));                    Cur++;
        //ApplicationConfig->CptTitleModels[geo][Cur]=new cModelList(ApplicationConfig,ffd_MODELTYPE_CHAPTERTITLE,&ApplicationConfig->CptTitleModelsNextNumber[geo],(ffd_GEOMETRY)geo,Cur,QApplication::translate("cModelList","Chapter titles dedicated to events"));         Cur++;
        ApplicationConfig->CptTitleModels[geo][Cur]=new cModelList(ApplicationConfig,ffd_MODELTYPE_CHAPTERTITLE,&ApplicationConfig->CptTitleModelsNextNumber[geo],(ffd_GEOMETRY)geo,9,  QApplication::translate("cModelList","Custom chapter titles"));
        Cur=0;
        ApplicationConfig->CreditTitleModels[geo][Cur]=new cModelList(ApplicationConfig,ffd_MODELTYPE_CREDITTITLE,&ApplicationConfig->CreditTitleModelsNextNumber[geo],(ffd_GEOMETRY)geo,Cur,QApplication::translate("cModelList","Simple credit titles"));    Cur++;
        ApplicationConfig->CreditTitleModels[geo][Cur]=new cModelList(ApplicationConfig,ffd_MODELTYPE_CREDITTITLE,&ApplicationConfig->CreditTitleModelsNextNumber[geo],(ffd_GEOMETRY)geo,9,  QApplication::translate("cModelList","Custom credit titles"));
    }

    // Because now we have local installed, then we can translate collection style name
    ApplicationConfig->StyleTextCollection.DoTranslateCollection();
    ApplicationConfig->StyleTextBackgroundCollection.DoTranslateCollection();
    ApplicationConfig->StyleBlockShapeCollection.DoTranslateCollection();

    ApplicationConfig->ImagesCache.MaxValue=ApplicationConfig->MemCacheMaxValue;

    // Force icon in contextual menu
    ui->actionAddTitle->setIconVisibleInMenu(true);
    ui->actionAddFiles->setIconVisibleInMenu(true);
    ui->actionAddProject->setIconVisibleInMenu(true);
    ui->actionEdit_background->setIconVisibleInMenu(true);
    ui->actionEdit_object->setIconVisibleInMenu(true);
    ui->actionEdit_music->setIconVisibleInMenu(true);
    ui->actionEdit_object_in_transition->setIconVisibleInMenu(true);
    ui->actionCut->setIconVisibleInMenu(true);
    ui->actionCopy->setIconVisibleInMenu(true);
    ui->actionPaste->setIconVisibleInMenu(true);
    ui->actionRemove->setIconVisibleInMenu(true);
    ui->actionSet_first_shot_duration->setIconVisibleInMenu(true);
    ui->actionReset_background->setIconVisibleInMenu(true);
    ui->actionReset_musictrack->setIconVisibleInMenu(true);
    ui->actionRemove_transition->setIconVisibleInMenu(true);
    ui->actionSelect_a_transition->setIconVisibleInMenu(true);
    ui->actionSet_transition_duration->setIconVisibleInMenu(true);
    ui->actionRandomize_transition->setIconVisibleInMenu(true);
    ui->actionAddEmptySlide->setIconVisibleInMenu(true);
    ui->actionAddAutoTitleSlide->setIconVisibleInMenu(true);
    ui->actionAddGMap->setIconVisibleInMenu(true);
    ui->actionSaveProjectAs->setIconVisibleInMenu(true);
    ui->actionExportProject->setIconVisibleInMenu(true);
    ui->actionRemovePlaylist->setIconVisibleInMenu(true);
    ui->actionPlaylistToPlay->setIconVisibleInMenu(true);
    ui->actionPlaylistToPause->setIconVisibleInMenu(true);
    ui->actionAdjustOnMusic->setIconVisibleInMenu(true);

    ui->ActionDocumentation_BT->setIcon(QApplication::style()->standardIcon(QStyle::SP_DialogHelpButton));
    ui->ActionDocumentation_BT_2->setIcon(QApplication::style()->standardIcon(QStyle::SP_DialogHelpButton));

    // Initialise integrated browser
    screen.showMessage(QApplication::translate("MainWindow","Init multimedia browser..."),Qt::AlignHCenter|Qt::AlignBottom);
    ApplicationConfig->DriveList->UpdateDriveList();
    ui->Browser->DoInitWidget(BROWSER_TYPE_MainWindow,true,true,true,ApplicationConfig);
    ui->Browser->DoInitDialog();

    // Initialise diaporama
    Diaporama=new cDiaporama(ApplicationConfig,true,this);
    ui->timeline->Diaporama=Diaporama;
    ui->preview->InitDiaporamaPlay(Diaporama);
    ui->preview2->InitDiaporamaPlay(Diaporama);

    ui->ZoomMinusBT->setEnabled(ApplicationConfig->TimelineHeight>TIMELINEMINHEIGH);
    ui->ZoomPlusBT->setEnabled(ApplicationConfig->TimelineHeight<TIMELINEMAXHEIGH);

    // Init help window
    screen.showMessage(QApplication::translate("MainWindow","Init WIKI..."),Qt::AlignHCenter|Qt::AlignBottom);
    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Init WIKI..."));
    ApplicationConfig->PopupHelp=new HelpPopup(ApplicationConfig);
    ApplicationConfig->PopupHelp->InitDialog();
    ApplicationConfig->PopupHelp->hide();
    ApplicationConfig->PopupHelp->OpenHelp("main",false);

    toolTipTowhatsThis(this);

    connect(ui->TABTooltip,SIGNAL(linkActivated(const QString)),this,SLOT(s_Action_OpenTABHelpLink(const QString)));
    connect(ui->ToolBoxNormal,SIGNAL(currentChanged(int)),this,SLOT(s_Event_ToolbarChanged(int)));

    // Help menu
    connect(ui->Action_About_BT,SIGNAL(released()),this,SLOT(s_Action_About()));                            connect(ui->Action_About_BT_2,SIGNAL(released()),this,SLOT(s_Action_About()));
    connect(ui->ActionDocumentation_BT,SIGNAL(released()),this,SLOT(s_Action_Documentation()));             connect(ui->ActionDocumentation_BT_2,SIGNAL(released()),this,SLOT(s_Action_Documentation()));
    connect(ui->ActionNewFunctions_BT,SIGNAL(released()),this,SLOT(s_Action_NewFunctions()));

    // File menu
    connect(ui->Action_New_BT,SIGNAL(released()),this,SLOT(s_Action_New()));                                connect(ui->Action_New_BT_2,SIGNAL(released()),this,SLOT(s_Action_New()));
    connect(ui->Action_Open_BT,SIGNAL(released()),this,SLOT(s_Action_Open()));                              connect(ui->Action_Open_BT_2,SIGNAL(released()),this,SLOT(s_Action_Open()));
    connect(ui->Action_OpenRecent_BT,SIGNAL(pressed()),this,SLOT(s_Action_OpenRecent()));                   connect(ui->Action_OpenRecent_BT_2,SIGNAL(pressed()),this,SLOT(s_Action_OpenRecent()));
    connect(ui->Action_Save_BT,SIGNAL(released()),this,SLOT(s_Action_Save()));                              connect(ui->Action_Save_BT_2,SIGNAL(released()),this,SLOT(s_Action_Save()));
    connect(ui->ActionSave_as_BT,SIGNAL(released()),this,SLOT(s_Action_SaveAsBT()));                        connect(ui->ActionSave_as_BT_2,SIGNAL(released()),this,SLOT(s_Action_SaveAsBT()));
    connect(ui->Action_PrjProperties_BT,SIGNAL(released()),this,SLOT(s_Action_ProjectProperties()));        connect(ui->Action_PrjProperties_BT_2,SIGNAL(released()),this,SLOT(s_Action_ProjectProperties()));
    connect(ui->ActionConfiguration_BT,SIGNAL(released()),this,SLOT(s_Action_ChangeApplicationSettings())); connect(ui->ActionConfiguration_BT_2,SIGNAL(released()),this,SLOT(s_Action_ChangeApplicationSettings()));
    connect(ui->actionSaveProjectAs,SIGNAL(triggered()),this,SLOT(s_Action_SaveAs()));
    connect(ui->actionExportProject,SIGNAL(triggered()),this,SLOT(s_Action_Export()));

    // Project menu
    connect(ui->ActionAdd_BT,SIGNAL(released()),this,SLOT(s_Action_AddFile()));
    connect(ui->ActionAdd_BT_2,SIGNAL(released()),this,SLOT(s_Action_AddFile()));
    connect(ui->actionAddFiles,SIGNAL(triggered()),this,SLOT(s_Action_AddFile()));

    connect(ui->ActionAddtitle_BT,SIGNAL(pressed()),this,SLOT(s_Action_AddTitle()));
    connect(ui->ActionAddtitle_BT_2,SIGNAL(pressed()),this,SLOT(s_Action_AddTitle()));
    connect(ui->actionAddTitle,SIGNAL(triggered()),this,SLOT(s_Action_AddTitle()));
    connect(ui->actionAddEmptySlide,SIGNAL(triggered()),this,SLOT(s_Action_AddEmptyTitle()));
    connect(ui->actionAddAutoTitleSlide,SIGNAL(triggered()),this,SLOT(s_Action_AddAutoTitleSlide()));
    connect(ui->actionAddGMap,SIGNAL(triggered()),this,SLOT(s_Action_AddGMap()));

    connect(ui->ActionAddProject_BT,SIGNAL(released()),this,SLOT(s_Action_AddProject()));
    connect(ui->ActionAddProject_BT_2,SIGNAL(released()),this,SLOT(s_Action_AddProject()));
    connect(ui->actionAddProject,SIGNAL(triggered()),this,SLOT(s_Action_AddProject()));

    connect(ui->ActionRemove_BT,SIGNAL(released()),this,SLOT(s_Action_RemoveObject()));
    connect(ui->ActionRemove_BT_2,SIGNAL(released()),this,SLOT(s_Action_RemoveObject()));
    connect(ui->actionRemove,SIGNAL(triggered()),this,SLOT(s_Action_RemoveObject()));
    connect(ui->ActionCut_BT,SIGNAL(released()),this,SLOT(s_Action_CutToClipboard()));
    connect(ui->ActionCut_BT_2,SIGNAL(released()),this,SLOT(s_Action_CutToClipboard()));
    connect(ui->actionCut,SIGNAL(triggered()),this,SLOT(s_Action_CutToClipboard()));
    connect(ui->ActionCopy_BT,SIGNAL(released()),this,SLOT(s_Action_CopyToClipboard()));
    connect(ui->ActionCopy_BT_2,SIGNAL(released()),this,SLOT(s_Action_CopyToClipboard()));
    connect(ui->actionCopy,SIGNAL(triggered()),this,SLOT(s_Action_CopyToClipboard()));
    connect(ui->ActionPaste_BT,SIGNAL(released()),this,SLOT(s_Action_PasteFromClipboard()));
    connect(ui->ActionPaste_BT_2,SIGNAL(released()),this,SLOT(s_Action_PasteFromClipboard()));
    connect(ui->actionPaste,SIGNAL(triggered()),this,SLOT(s_Action_PasteFromClipboard()));
    connect(ui->ActionEdit_BT,SIGNAL(pressed()),this,SLOT(s_Action_EditObject()));
    connect(ui->ActionEdit_BT_2,SIGNAL(pressed()),this,SLOT(s_Action_EditObject()));

    // Exit button
    connect(ui->Action_Exit_BT,SIGNAL(released()),this,SLOT(s_Action_Exit()));
    connect(ui->Action_Exit_BT_2,SIGNAL(released()),this,SLOT(s_Action_Exit()));
    connect(ui->Action_Exit_BT_3,SIGNAL(released()),this,SLOT(s_Action_Exit()));
    connect(ui->Action_Exit_BT_4,SIGNAL(released()),this,SLOT(s_Action_Exit()));
    connect(ui->Action_Exit_BT_5,SIGNAL(released()),this,SLOT(s_Action_Exit()));

    connect(QApplication::clipboard(),SIGNAL(dataChanged()),this,SLOT(s_Event_ClipboardChanged()));

    connect(ui->actionEdit_background,SIGNAL(triggered()),this,SLOT(s_Event_DoubleClickedOnBackground()));
    connect(ui->actionEdit_object,SIGNAL(triggered()),this,SLOT(s_Event_DoubleClickedOnObject()));
    connect(ui->actionEdit_object_in_transition,SIGNAL(triggered()),this,SLOT(s_Event_DoubleClickedOnTransition()));
    connect(ui->actionEdit_music,SIGNAL(triggered()),this,SLOT(s_Event_DoubleClickedOnMusic()));

    connect(ui->actionSet_first_shot_duration,SIGNAL(triggered()),this,SLOT(s_ActionMultiple_SetFirstShotDuration()));
    connect(ui->actionReset_background,SIGNAL(triggered()),this,SLOT(s_ActionMultiple_ResetBackground()));
    connect(ui->actionReset_musictrack,SIGNAL(triggered()),this,SLOT(s_ActionMultiple_ResetMusic()));
    connect(ui->actionRemove_transition,SIGNAL(triggered()),this,SLOT(s_ActionMultiple_RemoveTransition()));
    connect(ui->actionSelect_a_transition,SIGNAL(triggered()),this,SLOT(s_ActionMultiple_SelectTransition()));
    connect(ui->actionSet_transition_duration,SIGNAL(triggered()),this,SLOT(s_ActionMultiple_SetTransitionDuration()));
    connect(ui->actionRandomize_transition,SIGNAL(triggered()),this,SLOT(s_ActionMultiple_Randomize()));
    connect(ui->actionRemovePlaylist,SIGNAL(triggered()),this,SLOT(s_Action_RemovePlaylist()));
    connect(ui->actionPlaylistToPlay,SIGNAL(triggered()),this,SLOT(s_Action_PlaylistToPlay()));
    connect(ui->actionPlaylistToPause,SIGNAL(triggered()),this,SLOT(s_Action_PlaylistToPause()));
    connect(ui->actionAdjustOnMusic,SIGNAL(triggered()),this,SLOT(s_Action_AdjustOnMusic()));

    // Render menu
    connect(ui->ActionRender_BT,SIGNAL(released()),this,SLOT(s_Action_RenderVideo()));                          connect(ui->ActionRender_BT_2,SIGNAL(released()),this,SLOT(s_Action_RenderVideo()));
    connect(ui->ActionSmartphone_BT,SIGNAL(released()),this,SLOT(s_Action_RenderSmartphone()));                 connect(ui->ActionSmartphone_BT_2,SIGNAL(released()),this,SLOT(s_Action_RenderSmartphone()));
    connect(ui->ActionMultimedia_BT,SIGNAL(released()),this,SLOT(s_Action_RenderMultimedia()));                 connect(ui->ActionMultimedia_BT_2,SIGNAL(released()),this,SLOT(s_Action_RenderMultimedia()));
    connect(ui->ActionForTheWEB_BT,SIGNAL(released()),this,SLOT(s_Action_RenderForTheWEB()));                   connect(ui->ActionForTheWEB_BT_2,SIGNAL(released()),this,SLOT(s_Action_RenderForTheWEB()));
    connect(ui->ActionLossLess_BT,SIGNAL(released()),this,SLOT(s_Action_RenderLossLess()));                     connect(ui->ActionLossLess_BT_2,SIGNAL(released()),this,SLOT(s_Action_RenderLossLess()));
    connect(ui->ActionSoundtrack_BT,SIGNAL(released()),this,SLOT(s_Action_RenderSoundTrack()));                 connect(ui->ActionSoundtrack_BT_2,SIGNAL(released()),this,SLOT(s_Action_RenderSoundTrack()));

    // Timeline
    connect(ui->VersionBT,SIGNAL(released()),this,SLOT(s_Action_Version()));
    connect(ui->ZoomPlusBT,SIGNAL(released()),this,SLOT(s_Action_ZoomPlus()));
    connect(ui->ZoomMinusBT,SIGNAL(released()),this,SLOT(s_Action_ZoomMinus()));
    connect(ui->timeline,SIGNAL(itemSelectionChanged()),this,SLOT(s_Event_TimelineSelectionChanged()));
    connect(ui->timeline,SIGNAL(DragMoveItem()),this,SLOT(s_Event_TimelineDragMoveItem()));
    connect(ui->timeline,SIGNAL(DoAddDragAndDropFile()),this,SLOT(s_Event_TimelineAddDragAndDropFile()));
    connect(ui->timeline,SIGNAL(EditBackground()),((MainWindow *)ApplicationConfig->TopLevelWindow),SLOT(s_Event_DoubleClickedOnBackground()));
    connect(ui->timeline,SIGNAL(EditMediaObject()),((MainWindow *)ApplicationConfig->TopLevelWindow),SLOT(s_Event_DoubleClickedOnObject()));
    connect(ui->timeline,SIGNAL(EditTransition()),((MainWindow *)ApplicationConfig->TopLevelWindow),SLOT(s_Event_DoubleClickedOnTransition()));
    connect(ui->timeline,SIGNAL(EditMusicTrack()),((MainWindow *)ApplicationConfig->TopLevelWindow),SLOT(s_Event_DoubleClickedOnMusic()));
    connect(ui->PartitionBT,SIGNAL(released()),this,SLOT(s_Action_ChWindowDisplayMode_ToPlayerMode()));
    connect(ui->Partition2BT,SIGNAL(released()),this,SLOT(s_Action_ChWindowDisplayMode_ToPartitionMode()));
    connect(ui->Partition3BT,SIGNAL(released()),this,SLOT(s_Action_ChWindowDisplayMode_ToBrowserMode()));

    // Contextual menu
    connect(ui->timeline,SIGNAL(RightClickEvent(QMouseEvent *)),this,SLOT(s_Event_ContextualMenu(QMouseEvent *)));
    connect(ui->preview,SIGNAL(RightClickEvent(QMouseEvent *)),this,SLOT(s_Event_ContextualMenu(QMouseEvent *)));
    connect(ui->preview2,SIGNAL(RightClickEvent(QMouseEvent *)),this,SLOT(s_Event_ContextualMenu(QMouseEvent *)));

    // double click
    connect(ui->preview,SIGNAL(DoubleClick()),this,SLOT(s_Event_DoubleClickedOnObject()));
    connect(ui->preview2,SIGNAL(DoubleClick()),this,SLOT(s_Event_DoubleClickedOnObject()));

    // Save image event
    connect(ui->preview,SIGNAL(SaveImageEvent()),this,SLOT(s_VideoPlayer_SaveImageEvent()));
    connect(ui->preview2,SIGNAL(SaveImageEvent()),this,SLOT(s_VideoPlayer_SaveImageEvent()));

    // Volume Changed
    connect(ui->preview,SIGNAL(VolumeChanged()),this,SLOT(s_VideoPlayer_VolumeChanged()));
    connect(ui->preview2,SIGNAL(VolumeChanged()),this,SLOT(s_VideoPlayer_VolumeChanged()));

    // Browser event
    connect(ui->Browser,SIGNAL(DoRefreshControls()),this,SLOT(RefreshControls()));
    connect(ui->Browser,SIGNAL(DoOpenFile()),this,SLOT(s_Browser_OpenFile()));
    connect(ui->Browser,SIGNAL(DoAddFiles()),this,SLOT(s_Browser_AddFiles()));

    // Some other init
    LastLogMessageTime=QTime::currentTime();
    ui->StatusBar_SlideNumber->setText(QApplication::translate("MainWindow","Slide: ")+"0/0");
    ui->StatusBar_ChapterNumber->setText(QApplication::translate("MainWindow","Chapter: ")+"0/0");
    s_Event_ToolbarChanged(0);
    ToStatusBar("");
    SetModifyFlag(false);           // Setup title window and do first RefreshControls();
    s_Event_ClipboardChanged();     // Setup clipboard button state

    QString     WindowStateString;
    qlonglong   TypeWindowState=TypeWindowState_withsplitterpos;
    if (ApplicationConfig->SettingsTable->GetIntAndTextValue("MainWindow",&TypeWindowState,&WindowStateString)) {
        QDomDocument    domDocument;
        QString         errorStr;
        int             errorLine,errorColumn;
        if (!domDocument.setContent(WindowStateString,true,&errorStr,&errorLine,&errorColumn)) {
            ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","Error reading window state of %1 from home user database","Error message").arg(objectName()));
        } else {
            cSaveWinWithSplitterPos DlgWSP("MainWindow",ApplicationConfig->RestoreWindow,true);
            DlgWSP.LoadFromXML(domDocument.documentElement());
            if (DlgWSP.IsInit) {
                DlgWSP.ApplyToWindow(this,ui->Browser->GetSplitter());
                if (DlgWSP.IsMaximized) QTimer::singleShot(LATENCY,this,SLOT(DoMaximized()));
            }
        }
    }
    show();

    QApplication::processEvents();

    s_Action_ChWindowDisplayMode();

    if (ApplicationConfig->CheckConfigAtStartup) QTimer::singleShot(LATENCY,this,SLOT(s_Action_DlgCheckConfig()));
    if (FileForIO!="") QTimer::singleShot(LATENCY,this,SLOT(DoOpenFile()));
}

//====================================================================================================================
// Function use to duplicate toolTip properties of all child object to whatsThis properties

void MainWindow::toolTipTowhatsThis(QObject *StartObj) {
    if (StartObj->property("toolTip").toString()!="") {
        StartObj->setProperty("whatsThis",StartObj->property("toolTip").toString());
        if (ApplicationConfig->DisableTooltips) StartObj->setProperty("toolTip","");
    } else if ((!ApplicationConfig->DisableTooltips)&&(StartObj->property("toolTip").toString()=="")&&(StartObj->property("whatsThis").toString()!=""))
        StartObj->setProperty("toolTip",StartObj->property("whatsThis").toString());
    for (int i=0;i<StartObj->children().count();i++) toolTipTowhatsThis(StartObj->children().at(i));
}

//====================================================================================================================

MainWindow::~MainWindow() {
    delete ui;
    delete Diaporama;
    delete ApplicationConfig;

    // Close some libav additionnals
    #if defined(LIBAV) || (defined(FFMPEG)&&(FFMPEGVERSIONINT<201))
    avfilter_uninit();
    #endif
    avformat_network_deinit();

    // Close Mono Instance Server
    MonoInstanceServer.close();
}

//====================================================================================================================

void MainWindow::customEvent(QEvent *event) {
    if (event->type()!=BaseAppEvent) QMainWindow::customEvent(event); else while (!EventList.isEmpty()) {
        QString Event      =EventList.takeFirst();
        int     EventType  =((QString)(Event.split("###;###")[0])).toInt();
        QString EventParam =Event.split("###;###")[1];

        if (EventType==EVENT_GeneralLogChanged) {
            //int     MessageType =((QString)EventParam.split("###:###")[0]).toInt();
            QString Message     =EventParam.split("###:###")[1];
            //QString EventSource =EventParam.split("###:###")[2];
            ToStatusBar(Message);
            LastLogMessageTime=QTime::currentTime();
            QTimer::singleShot(1000,this,SLOT(s_CleanStatusBar()));
        }
    }
}

//====================================================================================================================

void MainWindow::s_CleanStatusBar() {
    if (LastLogMessageTime.msecsTo(QTime::currentTime())>=500) ToStatusBar("");
    //LastLogMessageTime=QTime::currentTime();
}

//====================================================================================================================

void MainWindow::keyReleaseEvent(QKeyEvent *event) {
    bool Find=true;
    if (!event->isAutoRepeat()) {
        if (event->matches(QKeySequence::Quit))             s_Action_Exit();
        else if (event->matches(QKeySequence::New))         s_Action_New();
        else if (event->matches(QKeySequence::Open))        s_Action_Open();
        else if (event->matches(QKeySequence::Save))        s_Action_Save();
        else if (event->matches(QKeySequence::SaveAs))      s_Action_SaveAs();
        else if (event->matches(QKeySequence::Copy))        s_Action_CopyToClipboard();
        else if (event->matches(QKeySequence::Cut))         s_Action_CutToClipboard();
        else if (event->matches(QKeySequence::Paste))       s_Action_PasteFromClipboard();
        else if (event->matches(QKeySequence::Delete))      s_Action_RemoveObject();
        //else if (event->matches(QKeySequence::ZoomIn))    s_Action_ZoomPlus();
        //else if (event->matches(QKeySequence::ZoomOut))   s_Action_ZoomMinus();
        else if (event->key()==Qt::Key_Space)               s_Event_PlayPause();
        else if (event->key()==Qt::Key_Insert)              s_Action_AddFile();
        else if (event->key()==Qt::Key_F1)                  s_Action_Documentation();
        else if (event->key()==Qt::Key_F5)                  ui->Browser->RefreshAll();
        else if (event->key()==Qt::Key_F6)                  s_Event_DoubleClickedOnObject();
        else if (event->key()==Qt::Key_F7)                  s_Event_DoubleClickedOnMusic();
        else if (event->key()==Qt::Key_F8)                  s_Event_DoubleClickedOnTransition();
        else Find=false;

        if (!Find) {
            if ((ui->preview->hasFocus())||(ui->preview2->hasFocus())||(ui->timeline->hasFocus()))
                ui->timeline->dokeyReleaseEvent(event);
            else QMainWindow::keyReleaseEvent(event);
        }
    }
}

//====================================================================================================================

void MainWindow::ToStatusBar(QString Text) {
    if (IsFirstInitDone) ui->StatusBar_General->setText(Text);
}

//====================================================================================================================

bool MainWindow::ForcePause(const char *caller) {
    if ((ui->preview->PlayerPlayMode && !ui->preview->PlayerPauseMode)||(ui->preview2->PlayerPlayMode && !ui->preview2->PlayerPauseMode)) {
        ui->preview->SetPlayerToPause();    // Ensure player is stop
        ui->preview2->SetPlayerToPause();   // Ensure player is stop
        QTimer::singleShot(LATENCY,this,caller);
        return true;
    }
    return false;
}

//====================================================================================================================

void MainWindow::UpdateChapterInfo() {
    QString     ChapterNum="Chapter_000:";
    QList<int>  Chapter;

    Diaporama->UpdateChapterInformation();
    for (int i=0;i<Diaporama->ProjectInfo->NbrChapters;i++) {
        ChapterNum=QString("%1").arg(i);
        while (ChapterNum.length()<3) ChapterNum="0"+ChapterNum;
        ChapterNum="Chapter_"+ChapterNum+":";
        Chapter.append(GetInformationValue(ChapterNum+"InSlide",&Diaporama->ProjectInfo->ChaptersProperties).toInt());
    }
    if (Chapter.count()==0) {
        Diaporama->CurrentChapter=-1;
        Diaporama->CurrentChapterName="";
        ui->StatusBar_ChapterNumber->setText(QApplication::translate("MainWindow","Chapter: ")+QString("0/0"));
    } else {
        Diaporama->CurrentChapter=1;
        while ((Diaporama->CurrentChapter<Chapter.count())&&((Diaporama->CurrentCol+1)>=Chapter.at(Diaporama->CurrentChapter))) Diaporama->CurrentChapter++;
        ChapterNum=QString("%1").arg(Diaporama->CurrentChapter-1);
        while (ChapterNum.length()<3) ChapterNum="0"+ChapterNum;
        ChapterNum="Chapter_"+ChapterNum+":";
        Diaporama->CurrentChapterName=GetInformationValue(ChapterNum+"title",&Diaporama->ProjectInfo->ChaptersProperties);
        ui->StatusBar_ChapterNumber->setText(QApplication::translate("MainWindow","Chapter: ")+QString("%1/%2 [%3]").arg(Diaporama->CurrentChapter).arg(Diaporama->ProjectInfo->NbrChapters).arg(Diaporama->CurrentChapterName));
    }
    ToStatusBar("");
}

//====================================================================================================================

void MainWindow::SetTimelineHeight() {
    int H,W,RW;
    switch (ApplicationConfig->WindowDisplayMode) {
        case DISPLAYWINDOWMODE_PLAYER:
            ApplicationConfig->PartitionMode=false;
            ui->Browser->setVisible(false);
            ui->ToolBoxPartition->setVisible(false);
            ui->preview2->setVisible(false);
            ui->scrollArea->setVisible(true);
            ui->ToolBoxNormal->setVisible(true);
            ui->TABTooltip->setVisible(true);
            ui->TABToolimg->setVisible(true);
            ui->PartitionBT->setDown(true);
            ui->PartitionBT->setEnabled(false);
            ui->Partition2BT->setEnabled(true);
            ui->Partition3BT->setEnabled(true);
            ui->preview->setVisible(true);
            H=this->geometry().height()-ui->ToolBoxNormal->height()-ui->timeline->height()-ui->StatusBar_General->height();
            W=Diaporama->GetWidthForHeight(H);
            ui->preview->setFixedHeight(H);
            ui->preview->setSizePolicy(QSizePolicy::Fixed,QSizePolicy::Expanding);
            ui->preview->setFixedWidth(W);
            QApplication::processEvents();
            RW=this->width()-ui->scrollArea->width();
            if (W>RW) ui->preview->setFixedWidth(RW);
            break;
        case DISPLAYWINDOWMODE_PARTITION:
            ApplicationConfig->PartitionMode=true;
            ui->Browser->setVisible(false);
            ui->scrollArea->setVisible(false);
            ui->ToolBoxPartition->setVisible(true);
            ui->ToolBoxNormal->setVisible(false);
            ui->preview->setVisible(false);
            ui->preview2->setVisible(true);
            ui->preview2->setFixedWidth(Diaporama->GetWidthForHeight(ui->preview2->height()-ui->preview2->GetButtonBarHeight()));
            ui->TABTooltip->setVisible(false);
            ui->TABToolimg->setVisible(false);
            ui->Partition2BT->setDown(true);
            ui->PartitionBT->setEnabled(true);
            ui->Partition2BT->setEnabled(false);
            ui->Partition3BT->setEnabled(true);
            break;
        case DISPLAYWINDOWMODE_BROWSER:
            ApplicationConfig->PartitionMode=false;
            ui->Browser->setVisible(true);
            ui->scrollArea->setVisible(false);
            ui->ToolBoxPartition->setVisible(true);
            ui->ToolBoxNormal->setVisible(false);
            ui->preview->setVisible(false);
            ui->preview2->setVisible(true);
            ui->preview2->setFixedWidth(Diaporama->GetWidthForHeight(ui->preview2->height()-ui->preview2->GetButtonBarHeight()));
            ui->TABTooltip->setVisible(false);
            ui->TABToolimg->setVisible(false);
            ui->Partition3BT->setDown(true);
            ui->PartitionBT->setEnabled(true);
            ui->Partition2BT->setEnabled(true);
            ui->Partition3BT->setEnabled(false);
            break;
    }
}

//====================================================================================================================

void MainWindow::closeEvent(QCloseEvent *Event) {
    ui->preview->SetPlayerToPause(); // Ensure player is stop
    ui->preview2->SetPlayerToPause(); // Ensure player is stop
    if (Diaporama->IsModify) {
        int Bt=CustomMessageBox(this,QMessageBox::Question,QApplication::translate("MainWindow","Close application"),QApplication::translate("MainWindow","Want to save the project before closing?"),
        QMessageBox::Yes | QMessageBox::No | QMessageBox::Cancel, QMessageBox::Yes);
        if (Bt==QMessageBox::Yes) s_Action_Save();
        if (Bt==QMessageBox::Cancel) {
            Event->setAccepted(false);
            return;
        }
    }
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    ApplicationConfig->PopupHelp->close();
    if (ApplicationConfig->RestoreWindow) {
        cSaveWinWithSplitterPos DlgWSP("MainWindow",ApplicationConfig->RestoreWindow,true);
        DlgWSP.SaveWindowState(this,ui->Browser->GetSplitter());
        if (isMaximized()) {
            DlgWSP.IsMaximized=true;
            showNormal();
            QApplication::processEvents(QEventLoop::ExcludeUserInputEvents);
        } else DlgWSP.IsMaximized=false;
        if (isMinimized()) {
            showNormal();
            QApplication::processEvents(QEventLoop::ExcludeUserInputEvents);
        }
        QDomDocument            domDocument;
        QDomElement             root=domDocument.createElement("WindowState");
        domDocument.appendChild(root);
        DlgWSP.SaveToXML(root);
        ApplicationConfig->SettingsTable->SetIntAndTextValue("MainWindow",TypeWindowState_withsplitterpos,domDocument.toString());
    }
    ApplicationConfig->SaveConfigurationFile();
    QApplication::restoreOverrideCursor();
}

//====================================================================================================================

void MainWindow::resizeEvent(QResizeEvent *) {
    ui->preview->SetPlayerToPause();  // Ensure player is stop
    ui->preview2->SetPlayerToPause(); // Ensure player is stop
    SetTimelineHeight();
    ui->timeline->SetTimelineHeight(ApplicationConfig->PartitionMode);
}

//====================================================================================================================

void MainWindow::showEvent(QShowEvent *) {
    if (!IsFirstInitDone) {
        IsFirstInitDone=true;  // do this only one time

        // Check BUILDVERSION to propose to the user to upgrade the application if a new one is available on internet
        // Start a network process to give last ffdiaporama version from internet web site
        QNetworkAccessManager *mNetworkManager=ApplicationConfig->GetNetworkAccessManager(this);
        connect(mNetworkManager,SIGNAL(finished(QNetworkReply*)),this,SLOT(DoCheckBUILDVERSION(QNetworkReply*)));
        QUrl            url(BUILDVERSION_WEBURL);
        mNetworkManager->get(QNetworkRequest(url));

        // Set player size and pos
        SetTimelineHeight();
        ui->timeline->SetTimelineHeight(ApplicationConfig->PartitionMode);
    }
}

//====================================================================================================================

void MainWindow::DoMaximized() {
    showMaximized();
}

//====================================================================================================================
// Function use when reading BUILDVERSION from WEB Site
//====================================================================================================================

void MainWindow::s_Action_Version() {
    CustomMessageBox(this,QMessageBox::Information,APPLICATION_NAME,ui->VersionBT->toolTip());
}

void MainWindow::DoCheckBUILDVERSION(QNetworkReply* reply) {
    QString InternetBUILDVERSION;
    if (reply->error()==QNetworkReply::NoError) {
        int httpstatuscode=reply->attribute(QNetworkRequest::HttpStatusCodeAttribute).toUInt();
        if ((httpstatuscode>=200)&&(httpstatuscode<300)&&(reply->isReadable())) {
            InternetBUILDVERSION=QString::fromUtf8(reply->readAll().data());
            if (InternetBUILDVERSION.endsWith("\n"))   InternetBUILDVERSION=InternetBUILDVERSION.left(InternetBUILDVERSION.length()-QString("\n").length());
            while (InternetBUILDVERSION.endsWith(" ")) InternetBUILDVERSION=InternetBUILDVERSION.left(InternetBUILDVERSION.length()-1);
            if (InternetBUILDVERSION.lastIndexOf(" ")) InternetBUILDVERSION=InternetBUILDVERSION.mid(InternetBUILDVERSION.lastIndexOf(" ")+1);
            int CurrentVersion =CurrentAppVersion.toInt();
            int InternetVersion=InternetBUILDVERSION.toInt();
            if (InternetVersion>CurrentVersion) {
                InternetBUILDVERSION=QApplication::translate("MainWindow","A new release is available from WEB site. Please update from http://ffdiaporama.tuxfamily.org !");
                ui->VersionBT->setIcon(QIcon(":/img/Red.png"));
                ui->VersionBT->setToolTip(InternetBUILDVERSION);
                if ((ApplicationConfig->OpenWEBNewVersion)&&
                    (CustomMessageBox(this,QMessageBox::Question,APPLICATION_NAME,
                                      QApplication::translate("MainWindow","A new version is available from WEB site.\nDo you want to download it now?"),
                                      QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)==QMessageBox::Yes)) {
                    QDesktopServices::openUrl(QUrl(QString(DOWNLOADPAGE).arg(ApplicationConfig->GetValideWEBLanguage(ApplicationConfig->CurrentLanguage))));
                }
            } else {
                InternetBUILDVERSION="";
                ui->VersionBT->setIcon(QIcon(":/img/Green.png"));
                ui->VersionBT->setToolTip(QApplication::translate("MainWindow","Your version of %1 is up to day").arg(APPLICATION_NAME));
            }
        } else InternetBUILDVERSION="";
    } else InternetBUILDVERSION="";
    ToStatusBar(InternetBUILDVERSION);
    reply->deleteLater();
}

//====================================================================================================================

void MainWindow::RefreshControls() {
    bool IsMultipleSelection=ui->timeline->IsMultipleSelection();

    // Timeline actions
    ui->ActionRemove_BT->setEnabled(Diaporama->List.count()>0);
    ui->ActionRemove_BT_2->setEnabled(Diaporama->List.count()>0);
    ui->actionRemove->setEnabled(Diaporama->List.count()>0);
    ui->ActionEdit_BT->setEnabled(Diaporama->List.count()>0);
    ui->ActionEdit_BT_2->setEnabled(Diaporama->List.count()>0);
    ui->ZoomMinusBT->setEnabled((Diaporama->List.count()>0)&&(ApplicationConfig->TimelineHeight>TIMELINEMINHEIGH));
    ui->ZoomPlusBT->setEnabled((Diaporama->List.count()>0)&&(ApplicationConfig->TimelineHeight<TIMELINEMAXHEIGH));

    // File menu
    ui->Action_Save_BT->setEnabled(Diaporama->IsModify);
    ui->Action_Save_BT_2->setEnabled(Diaporama->IsModify);
    ui->ActionSave_as_BT->setEnabled(Diaporama->List.count()>0);
    ui->ActionSave_as_BT_2->setEnabled(Diaporama->List.count()>0);
    ui->Action_OpenRecent_BT->setEnabled(ApplicationConfig->RecentFile.count()>0);
    ui->Action_OpenRecent_BT_2->setEnabled(ApplicationConfig->RecentFile.count()>0);

    // Project menu
    ui->actionEdit_background->setEnabled(!IsMultipleSelection && (Diaporama->List.count()>0));
    ui->actionEdit_object->setEnabled(!IsMultipleSelection && (Diaporama->List.count()>0));
    ui->actionEdit_object_in_transition->setEnabled(!IsMultipleSelection && (Diaporama->List.count()>0));
    ui->actionEdit_music->setEnabled(!IsMultipleSelection && (Diaporama->List.count()>0));

    // Clipboard_Object
    ui->ActionCopy_BT->setEnabled(ui->timeline->CurrentSelected()>=0);
    ui->ActionCopy_BT_2->setEnabled(ui->timeline->CurrentSelected()>=0);
    ui->actionCopy->setEnabled(ui->timeline->CurrentSelected()>=0);
    ui->ActionCut_BT->setEnabled(ui->timeline->CurrentSelected()>=0);
    ui->ActionCut_BT_2->setEnabled(ui->timeline->CurrentSelected()>=0);
    ui->actionCut->setEnabled(ui->timeline->CurrentSelected()>=0);

    // Render menu
    ui->ActionRender_BT->setEnabled(Diaporama->List.count()>0);
    ui->ActionRender_BT_2->setEnabled(Diaporama->List.count()>0);
    ui->ActionSmartphone_BT->setEnabled(Diaporama->List.count()>0);
    ui->ActionSmartphone_BT_2->setEnabled(Diaporama->List.count()>0);
    ui->ActionMultimedia_BT->setEnabled(Diaporama->List.count()>0);
    ui->ActionMultimedia_BT_2->setEnabled(Diaporama->List.count()>0);
    ui->ActionForTheWEB_BT->setEnabled(Diaporama->List.count()>0);
    ui->ActionForTheWEB_BT_2->setEnabled(Diaporama->List.count()>0);
    ui->ActionSoundtrack_BT->setEnabled(Diaporama->List.count()>0);
    ui->ActionSoundtrack_BT_2->setEnabled(Diaporama->List.count()>0);

    ui->ActionLossLess_BT->setEnabled((Diaporama->List.count()>0)&&(AUDIOCODECDEF[7].IsFind)&&(VIDEOCODECDEF[8].IsFind)&&(FORMATDEF[2].IsFind));
    ui->ActionLossLess_BT_2->setEnabled((Diaporama->List.count()>0)&&(AUDIOCODECDEF[7].IsFind)&&(VIDEOCODECDEF[8].IsFind)&&(FORMATDEF[2].IsFind));

    // Browser
    ui->Browser->RefreshControls(false);

    // StatusBar
    ui->StatusBar_SlideNumber->setText(QApplication::translate("MainWindow","Slide: ")+QString("%1/%2").arg(Diaporama->List.count()>0?Diaporama->CurrentCol+1:0).arg(Diaporama->List.count()));
}

//====================================================================================================================

void MainWindow::SetModifyFlag(bool IsModify) {
    Diaporama->IsModify=IsModify;
    this->setWindowTitle(TitleBar+QString("-")+
                         (Diaporama->ProjectFileName!=""?Diaporama->ProjectFileName:QApplication::translate("MainWindow","<new project>","when project have no name define"))+
                         (Diaporama->IsModify?"*":""));
    RefreshControls();
    Diaporama->UpdateInformation();
}

void MainWindow::s_Event_SetModifyFlag() {
    SetModifyFlag(true);
}

//====================================================================================================================

void MainWindow::SetTimelineCurrentCell(int Cell) {
    if (FLAGSTOPITEMSELECTION) return;
    FLAGSTOPITEMSELECTION=true;
    int OldCurrentCol=Diaporama->CurrentCol;
    ui->timeline->SetCurrentCell(Cell);
    if (OldCurrentCol!=Diaporama->CurrentCol) UpdateChapterInfo();
    FLAGSTOPITEMSELECTION=false;
}

//====================================================================================================================

void MainWindow::s_Action_About() {
    ui->Action_About_BT->setDown(false);
    ui->Action_About_BT_2->setDown(false);
    DlgAbout Dlg(ApplicationConfig,this);
    Dlg.InitDialog();
    Dlg.exec();
}

//====================================================================================================================

void MainWindow::s_Action_DlgCheckConfig() {
    DlgCheckConfig Dlg(ApplicationConfig,this);
    Dlg.InitDialog();
    Dlg.exec();
}

//====================================================================================================================

void MainWindow::s_Action_Documentation() {
    ui->ActionDocumentation_BT->setDown(false);
    ui->ActionDocumentation_BT_2->setDown(false);

    ApplicationConfig->PopupHelp->OpenHelp("main",true);
}

//====================================================================================================================

void MainWindow::s_Action_NewFunctions() {
    ui->ActionNewFunctions_BT->setDown(false);
    QDesktopServices::openUrl(QUrl(QString(HELPFILE_CAT).arg(HELPFILE_NEWS).arg(ApplicationConfig->GetValideWEBLanguage(ApplicationConfig->CurrentLanguage))));
}

//====================================================================================================================

void MainWindow::s_Action_Exit() {
    if (ForcePause(SLOT(s_Action_Exit()))) return;
    ui->Browser->EnsureThreadIsStopped();
    close();
}

//====================================================================================================================

void MainWindow::s_Action_ZoomPlus() {
    if (ForcePause(SLOT(s_Action_ZoomPlus()))) return;
    if (ui->timeline->rowHeight(0)<TIMELINEMAXHEIGH) {
        ApplicationConfig->TimelineHeight+=20;
        if (ApplicationConfig->TimelineHeight>TIMELINEMAXHEIGH) ApplicationConfig->TimelineHeight=TIMELINEMAXHEIGH;
        SetTimelineHeight();
        ui->timeline->SetTimelineHeight(ApplicationConfig->PartitionMode);
    }
    RefreshControls();
}

//====================================================================================================================

void MainWindow::s_Action_ZoomMinus() {
    if (ForcePause(SLOT(s_Action_ZoomMinus()))) return;
    if (ui->timeline->rowHeight(0)>TIMELINEMINHEIGH) {
        ApplicationConfig->TimelineHeight-=20;
        if (ApplicationConfig->TimelineHeight<TIMELINEMINHEIGH) ApplicationConfig->TimelineHeight=TIMELINEMINHEIGH;
        SetTimelineHeight();
        ui->timeline->SetTimelineHeight(ApplicationConfig->PartitionMode);
    }
    RefreshControls();
}

//====================================================================================================================

void MainWindow::s_Action_ChWindowDisplayMode_ToPlayerMode() {
    s_Action_ChWindowDisplayMode(DISPLAYWINDOWMODE_PLAYER);
}

//====================================================================================================================

void MainWindow::s_Action_ChWindowDisplayMode_ToPartitionMode() {
    s_Action_ChWindowDisplayMode(DISPLAYWINDOWMODE_PARTITION);
}

//====================================================================================================================

void MainWindow::s_Action_ChWindowDisplayMode_ToBrowserMode() {
    s_Action_ChWindowDisplayMode(DISPLAYWINDOWMODE_BROWSER);
}

//====================================================================================================================

void MainWindow::s_Action_ChWindowDisplayMode(int Mode) {
    if (ApplicationConfig->WindowDisplayMode!=Mode) {
        ApplicationConfig->WindowDisplayMode=Mode;
        s_Action_ChWindowDisplayMode();
    }
}

void MainWindow::s_Action_ChWindowDisplayMode() {
    if (ForcePause(SLOT(s_Action_ChWindowDisplayMode()))) return;
    int Selected=ui->timeline->CurrentSelected(); // Save current seleted item

    SetTimelineHeight();
    ui->timeline->SetTimelineHeight(ApplicationConfig->PartitionMode);

    // Re-select previous current seleted item
    if ((Selected>=0)&&(Selected<Diaporama->List.count())) ui->timeline->SetCurrentCell(Selected);
    (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
}

//====================================================================================================================
// Double click on widget in the object track
//====================================================================================================================

void MainWindow::s_Event_DoubleClickedOnObject() {
    if (ForcePause(SLOT(s_Event_DoubleClickedOnObject()))) return;
    if (Diaporama->List.count()==0) return;

    bool DoneAgain=true;
    while (DoneAgain) {
        DoneAgain=false;
        int Ret=0;
        if (Diaporama->List[Diaporama->CurrentCol]->GetAutoTSNumber()==-1) {
            DlgSlideProperties Dlg(Diaporama->List[Diaporama->CurrentCol],ApplicationConfig,this);
            Dlg.InitDialog();
            connect(&Dlg,SIGNAL(SetModifyFlag()),this,SLOT(s_Event_SetModifyFlag()));
            Ret=Dlg.exec();
        } else {
            DlgAutoTitleSlide Dlg(false,Diaporama->List[Diaporama->CurrentCol],ApplicationConfig,this);
            Dlg.InitDialog();
            connect(&Dlg,SIGNAL(SetModifyFlag()),this,SLOT(s_Event_SetModifyFlag()));
            Ret=Dlg.exec();
        }
        if (Ret==4) {
            DlgSlideProperties Dlg(Diaporama->List[Diaporama->CurrentCol],ApplicationConfig,this);
            Dlg.InitDialog();
            connect(&Dlg,SIGNAL(SetModifyFlag()),this,SLOT(s_Event_SetModifyFlag()));
            Ret=Dlg.exec();
        }
        if (Ret!=1) {
            // Reset thumbnails
            ApplicationConfig->SlideThumbsTable->ClearThumbs(Diaporama->List[Diaporama->CurrentCol]->ThumbnailKey);

            // Reset thumbnails of all slides containing variables
            for (int i=0;i<Diaporama->List.count();i++)
                if ((Diaporama->List[i]->ThumbnailKey!=1)&&(Variable.IsObjectHaveVariables(Diaporama->List[i])))
                    ApplicationConfig->SlideThumbsTable->ClearThumbs(Diaporama->List[i]->ThumbnailKey);

            (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol)-(Diaporama->GetTransitionDuration(Diaporama->CurrentCol)>0?1:0));
            AdjustRuller();
        }
        if ((Ret==2)||(Ret==3)) {
            Diaporama->CurrentCol=Diaporama->CurrentCol+((Ret==2)?-1:1);
            SetTimelineCurrentCell(Diaporama->CurrentCol);

            // Update slider mark
            if (Diaporama->List.count()>0)
                (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SetStartEndPos(
                        Diaporama->GetObjectStartPosition(Diaporama->CurrentCol),                                                               // Current slide
                        Diaporama->List[Diaporama->CurrentCol]->GetDuration(),
                        (Diaporama->CurrentCol>0)?Diaporama->GetObjectStartPosition(Diaporama->CurrentCol-1):((Diaporama->CurrentCol==0)?0:-1), // Previous slide
                        (Diaporama->CurrentCol>0)?Diaporama->List[Diaporama->CurrentCol-1]->GetDuration():((Diaporama->CurrentCol==0)?Diaporama->GetTransitionDuration(Diaporama->CurrentCol):0),
                        Diaporama->CurrentCol<(Diaporama->List.count()-1)?Diaporama->GetObjectStartPosition(Diaporama->CurrentCol+1):-1,        // Next slide
                        Diaporama->CurrentCol<(Diaporama->List.count()-1)?Diaporama->List[Diaporama->CurrentCol+1]->GetDuration():0);
            else (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SetStartEndPos(0,0,-1,0,-1,0);
            // open dialog again
            DoneAgain=true;
        }
    }
}

//====================================================================================================================
// Double click on transition part of widget in the object track
//====================================================================================================================

void MainWindow::s_Event_DoubleClickedOnTransition() {
    if (ForcePause(SLOT(s_Event_DoubleClickedOnTransition()))) return;
    DlgTransitionProperties Dlg(false,Diaporama->List[Diaporama->CurrentCol],ApplicationConfig,this);
    Dlg.InitDialog();
    int Ret=Dlg.exec();
    if (Ret==0) {
        SetModifyFlag(true);
        (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
        AdjustRuller();
    }
}

//====================================================================================================================
// // Double click on widget in the background track
//====================================================================================================================

void MainWindow::s_Event_DoubleClickedOnBackground() {
    if (Diaporama->CurrentCol>=Diaporama->List.count()) return;
    if (ForcePause(SLOT(s_Event_DoubleClickedOnBackground()))) return;
    DlgBackgroundProperties Dlg(Diaporama->List[Diaporama->CurrentCol],ApplicationConfig,this);
    Dlg.InitDialog();
    connect(&Dlg,SIGNAL(RefreshDisplay()),this,SLOT(s_Event_RefreshDisplay()));
    if (Dlg.exec()==0) {
        SetModifyFlag(true);
        (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
        AdjustRuller();
    }
}

//====================================================================================================================

void MainWindow::s_Event_RefreshDisplay() {
    (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
}

//====================================================================================================================
// // Double click on widget in the music track
//====================================================================================================================

void MainWindow::s_Event_DoubleClickedOnMusic() {
    if (ForcePause(SLOT(s_Event_DoubleClickedOnMusic()))) return;
    DlgMusicProperties Dlg(Diaporama->List[Diaporama->CurrentCol],ApplicationConfig,this);
    Dlg.InitDialog();
    connect(&Dlg,SIGNAL(SetModifyFlag()),this,SLOT(s_Event_SetModifyFlag()));
    if (Dlg.exec()==0) {
        Diaporama->UpdateStatInformation();
        SetModifyFlag(true);
        (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
        AdjustRuller();
    }
}

//====================================================================================================================

void MainWindow::s_Event_PlayPause() {
    (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SwitchPlayerPlayPause();
}

//====================================================================================================================

void MainWindow::s_Event_TimelineDragMoveItem() {
    if (ForcePause(SLOT(s_Event_TimelineDragMoveItem()))) return;
    if (!ui->timeline->CursorPosValide) return;
    if ((ui->timeline->DragMoveItemCause==DRAGMODE_INTERNALMOVE_SLIDE)&&(ui->timeline->DragItemSource<ui->timeline->DragItemDest)) ui->timeline->DragItemDest--;

    if ((ui->timeline->DragItemSource!=ui->timeline->DragItemDest)&&(ui->timeline->DragItemSource>=0)&&(ui->timeline->DragItemSource<Diaporama->List.count())
        &&(ui->timeline->DragItemDest>=0)&&(ui->timeline->DragItemDest<Diaporama->List.count())) {

        if (ui->timeline->DragMoveItemCause==DRAGMODE_INTERNALMOVE_SLIDE) {
            Diaporama->List.move(ui->timeline->DragItemSource,ui->timeline->DragItemDest);
        } else if (ui->timeline->DragMoveItemCause==DRAGMODE_INTERNALMOVE_MUSIC) {
            bool Continue=true;
            if (Diaporama->List[ui->timeline->DragItemDest]->MusicType) {
                if (Diaporama->List[ui->timeline->DragItemDest]->MusicList.count()>0) {
                    int Ret=CustomMessageBox(this,QMessageBox::Question,QApplication::translate("MainWindow","Move music file"),
                                              QApplication::translate("MainWindow","This slide already has a playlist. What to do?"),
                                              QMessageBox::Yes|QMessageBox::No|QMessageBox::Cancel, QMessageBox::Yes,
                                              QApplication::translate("MainWindow","Add to the current playlist"),
                                              QApplication::translate("MainWindow","Replace the current playlist"));
                    if (Ret==QMessageBox::Cancel) Continue=false; else if (Ret==QMessageBox::No) {
                        while (Diaporama->List[ui->timeline->DragItemDest]->MusicList.count()) Diaporama->List[ui->timeline->DragItemDest]->MusicList.removeAt(0);
                    }
                }
            }
            if (Continue) {
                while (!Diaporama->List[ui->timeline->DragItemSource]->MusicList.isEmpty())
                    Diaporama->List[ui->timeline->DragItemDest]->MusicList.append(Diaporama->List[ui->timeline->DragItemSource]->MusicList.takeFirst());
                Diaporama->List[ui->timeline->DragItemDest]->MusicType  =true;
                Diaporama->List[ui->timeline->DragItemSource]->MusicType=false;
            }
        } else if (ui->timeline->DragMoveItemCause==DRAGMODE_INTERNALMOVE_BACKGROUND) {
            cBrushDefinition *BR=Diaporama->List[ui->timeline->DragItemDest]->BackgroundBrush;
            Diaporama->List[ui->timeline->DragItemDest]->BackgroundType   =true;
            Diaporama->List[ui->timeline->DragItemDest]->BackgroundBrush  =Diaporama->List[ui->timeline->DragItemSource]->BackgroundBrush;
            Diaporama->List[ui->timeline->DragItemSource]->BackgroundType =false;
            Diaporama->List[ui->timeline->DragItemSource]->BackgroundBrush=BR;
        }
        SetModifyFlag(true);
        ui->timeline->SetCurrentCell(ui->timeline->DragItemDest);
        ui->timeline->setUpdatesEnabled(false);
        Diaporama->UpdateInformation();
        ui->timeline->setUpdatesEnabled(true);
    }
}

//====================================================================================================================
// Current diaporama object selection changed
//====================================================================================================================

void MainWindow::s_Event_TimelineSelectionChanged() {
    if (!FLAGSTOPITEMSELECTION) {
        if (ForcePause(SLOT(s_Event_TimelineSelectionChanged()))) return;
        DoTimelineSelectionChanged();
    }
}

void MainWindow::DoTimelineSelectionChanged() {
    if (!FLAGSTOPITEMSELECTION) {
        FLAGSTOPITEMSELECTION=true;
        QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
        int OldCurrentCol=Diaporama->CurrentCol;
        int Selected=ui->timeline->CurrentSelected();
        if (Selected>=Diaporama->List.count()) {
            Selected=Diaporama->List.count()-1;
            ui->timeline->SetCurrentCell(Selected);
        }
        if (Selected<0) {
            Selected=0;
            ui->timeline->SetCurrentCell(Selected);
        }
        if (Diaporama->CurrentCol<0) Diaporama->CurrentCol=0;

        if ((Diaporama->CurrentCol!=Selected)||((Diaporama->List.count()==1)&&(Diaporama->CurrentCol==0))) {
            if (Diaporama->List.count()>0) {
                Diaporama->CurrentCol=Selected;
                Diaporama->CurrentPosition=Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol);
                if (Diaporama->List[Diaporama->CurrentCol]->GetTransitDuration()>0) Diaporama->CurrentPosition--;
                AdjustRuller(Selected);
            } else {
                (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(0);
                (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SetStartEndPos(0,0,-1,0,-1,0);
            }
        }
        Diaporama->CloseUnusedLibAv(Diaporama->CurrentCol);
        RefreshControls();
        ui->timeline->repaint();
        if (OldCurrentCol!=Diaporama->CurrentCol) UpdateChapterInfo();
        QApplication::restoreOverrideCursor();
        FLAGSTOPITEMSELECTION=false;
    }
}

//====================================================================================================================
// Update dock information
//====================================================================================================================

void MainWindow::s_Action_OpenTABHelpLink(const QString Link) {
    if (Link.startsWith("http:")) QDesktopServices::openUrl(QUrl(Link));
        else ApplicationConfig->PopupHelp->OpenHelp(Link,true);
}

void MainWindow::s_Event_ToolbarChanged(int MenuIndex) {
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));

    QString Html;
    switch (MenuIndex) {
    case 0: Html=QApplication::translate("MainWindow","<html><body>Select a project to open or to create a new project<br>"\
                                         "To discover ffDiaporama:<br><a href=\"%1\">Consult the WIKI</a></body></html>").
                                         arg(HELPFILE_WIKIINDEX);
            break;
    case 1: Html=QApplication::translate("MainWindow","<html><body>Add empty slides or slides based on photos or videos<br>"\
                                         "To discover how to build your slide show and to animate slides:<br><a href=\"%1\">Discover the principles of functioning of ffDiaporama</a></body></html>").
                                         arg(HELPFILE_WIKIINDEX);
            break;
    case 2: Html=QApplication::translate("MainWindow","<html><body>Select the equipment type that you plan to use for your video<br>"\
                                         "To discover how to render videos:<br><a href=\"%1\">Consult the rendering videos WIKI page</a></body></html>").
                                         arg(HELPFILE_RENDERINDEX);
            break;
    case 3: Html=QApplication::translate("MainWindow","<html><body>Visit the ffDiaporama Web site to use the forum,<br>"\
                "consult tutorials and learn the lastest news:<br><a href=\"http://ffdiaporama.tuxfamily.org\">http://ffdiaporama.tuxfamily.org</a></body></html>");
            break;
    }

    ui->TABTooltip->setText(Html);
    QApplication::restoreOverrideCursor();
}

//====================================================================================================================
// Render project
//====================================================================================================================

void MainWindow::s_Action_RenderVideo() {
    if (ForcePause(SLOT(s_Action_RenderVideo()))) return;
    ui->ActionRender_BT->setDown(false);
    ui->ActionRender_BT_2->setDown(false);

    DlgRenderVideo Dlg(*Diaporama,EXPORTMODE_ADVANCED,ApplicationConfig,this);
    connect(&Dlg,SIGNAL(SetModifyFlag()),this,SLOT(s_Event_SetModifyFlag()));
    Dlg.InitDialog();
    Dlg.exec();
    AdjustRuller();
    ui->Browser->RefreshHere();
}

void MainWindow::s_Action_RenderSmartphone() {
    if (ForcePause(SLOT(s_Action_RenderSmartphone()))) return;
    ui->ActionSmartphone_BT->setDown(false);
    ui->ActionSmartphone_BT_2->setDown(false);

    DlgRenderVideo Dlg(*Diaporama,MODE_SMARTPHONE,ApplicationConfig,this);
    connect(&Dlg,SIGNAL(SetModifyFlag()),this,SLOT(s_Event_SetModifyFlag()));
    Dlg.InitDialog();
    Dlg.exec();
    AdjustRuller();
    ui->Browser->RefreshHere();
}

void MainWindow::s_Action_RenderMultimedia() {
    if (ForcePause(SLOT(s_Action_RenderMultimedia()))) return;
    ui->ActionMultimedia_BT->setDown(false);
    ui->ActionMultimedia_BT_2->setDown(false);

    DlgRenderVideo Dlg(*Diaporama,MODE_MULTIMEDIASYS,ApplicationConfig,this);
    connect(&Dlg,SIGNAL(SetModifyFlag()),this,SLOT(s_Event_SetModifyFlag()));
    Dlg.InitDialog();
    Dlg.exec();
    AdjustRuller();
    ui->Browser->RefreshHere();
}

void MainWindow::s_Action_RenderForTheWEB() {
    if (ForcePause(SLOT(s_Action_RenderForTheWEB()))) return;
    ui->ActionForTheWEB_BT->setDown(false);
    ui->ActionForTheWEB_BT_2->setDown(false);

    DlgRenderVideo Dlg(*Diaporama,MODE_FORTHEWEB,ApplicationConfig,this);
    connect(&Dlg,SIGNAL(SetModifyFlag()),this,SLOT(s_Event_SetModifyFlag()));
    Dlg.InitDialog();
    Dlg.exec();
    AdjustRuller();
    ui->Browser->RefreshHere();
}

void MainWindow::s_Action_RenderLossLess() {
    if (ForcePause(SLOT(s_Action_RenderLossLess()))) return;
    ui->ActionLossLess_BT->setDown(false);
    ui->ActionLossLess_BT_2->setDown(false);

    DlgRenderVideo Dlg(*Diaporama,MODE_LOSSLESS,ApplicationConfig,this);
    connect(&Dlg,SIGNAL(SetModifyFlag()),this,SLOT(s_Event_SetModifyFlag()));
    Dlg.InitDialog();
    Dlg.exec();
    AdjustRuller();
    ui->Browser->RefreshHere();
}

void MainWindow::s_Action_RenderSoundTrack() {
    if (ForcePause(SLOT(s_Action_RenderSoundTrack()))) return;
    ui->ActionSoundtrack_BT->setDown(false);
    ui->ActionSoundtrack_BT_2->setDown(false);

    DlgRenderVideo Dlg(*Diaporama,MODE_SOUNDTRACK,ApplicationConfig,this);
    connect(&Dlg,SIGNAL(SetModifyFlag()),this,SLOT(s_Event_SetModifyFlag()));
    Dlg.InitDialog();
    Dlg.exec();
    AdjustRuller();
    ui->Browser->RefreshHere();
}

//====================================================================================================================
// Project properties
//====================================================================================================================

void MainWindow::s_Action_ProjectProperties() {
    if (ForcePause(SLOT(s_Action_ProjectProperties()))) return;
    ui->Action_PrjProperties_BT->setDown(false);
    ui->Action_PrjProperties_BT_2->setDown(false);

    DlgffDPjrProperties Dlg(false,Diaporama,ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) {
        SetModifyFlag(true);

        // Reset thumbnails of all slides containing variables
        for (int i=0;i<Diaporama->List.count();i++)
            if ((Diaporama->List[i]->ThumbnailKey!=1)&&(Variable.IsObjectHaveVariables(Diaporama->List[i])))
                ApplicationConfig->SlideThumbsTable->ClearThumbs(Diaporama->List[i]->ThumbnailKey);

        (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol)-(Diaporama->GetTransitionDuration(Diaporama->CurrentCol)>0?1:0));
        AdjustRuller();
    }
    ui->Browser->RefreshHere();
}

//====================================================================================================================
// Change application settings
//====================================================================================================================

void MainWindow::s_Action_ChangeApplicationSettings() {
    if (ForcePause(SLOT(s_Action_ChangeApplicationSettings()))) return;
    ui->ActionConfiguration_BT->setDown(false);
    ui->ActionConfiguration_BT_2->setDown(false);

    DlgApplicationSettings Dlg(ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) {
        SetTimelineHeight();
        ToStatusBar(QApplication::translate("MainWindow","Saving configuration file and applying new configuration ..."));
        QApplication::processEvents();
        QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
        ui->preview->SetAudioFPS();
        ui->preview2->SetAudioFPS();

        // Save configuration
        //ApplicationConfig->MainWinWSP->SaveWindowState(this); // Do not change get WindowState for mainwindow except when closing
        ApplicationConfig->ImagesCache.MaxValue=ApplicationConfig->MemCacheMaxValue;
        toolTipTowhatsThis(this);
        ApplicationConfig->SaveConfigurationFile();
        QApplication::restoreOverrideCursor();
        ToStatusBar("");
    }
}

//====================================================================================================================
// New project
//====================================================================================================================

void MainWindow::s_Action_New() {
    if (ForcePause(SLOT(s_Action_New()))) return;
    ui->Action_New_BT->setDown(false);
    ui->Action_New_BT_2->setDown(false);

    if ((Diaporama->IsModify)&&(CustomMessageBox(this,QMessageBox::Question,QApplication::translate("DlgffDPjrProperties","New project"),QApplication::translate("MainWindow","Current project has been modified.\nDo you want to save-it ?"),
        QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)==QMessageBox::Yes)) s_Action_Save();

    // Ask user for project option
    cDiaporama *NewDiaporama=new cDiaporama(ApplicationConfig,true,this);
    DlgffDPjrProperties Dlg(true,NewDiaporama,ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) {
        while (ApplicationConfig->ImagesCache.List.count()>0) delete ApplicationConfig->ImagesCache.List.takeLast();
        AliasList.clear();

        // Clean actual timeline and diaporama
        FLAGSTOPITEMSELECTION=true;
        ui->timeline->setUpdatesEnabled(false);
        for (int Row=0;Row<ui->timeline->rowCount();Row++) for (int Col=0;Col<ui->timeline->columnCount();Col++) if (ui->timeline->cellWidget(Row,Col)!=NULL) ui->timeline->removeCellWidget(Row,Col);
        delete Diaporama;
        Diaporama=NULL;
        ui->timeline->setUpdatesEnabled(true);
        FLAGSTOPITEMSELECTION=false;

        // Create new diaporama
        Diaporama=NewDiaporama;
        ui->timeline->Diaporama=Diaporama;
        ui->preview->InitDiaporamaPlay(Diaporama);
        ui->preview->SetActualDuration(Diaporama->GetDuration());
        ui->preview->SetStartEndPos(0,0,-1,0,-1,0);
        ui->preview2->InitDiaporamaPlay(Diaporama);
        ui->preview2->SetActualDuration(Diaporama->GetDuration());
        ui->preview2->SetStartEndPos(0,0,-1,0,-1,0);
        ui->timeline->ResetDisplay(-1);
        RefreshControls();
        SetModifyFlag(false);
        resizeEvent(NULL);
        Diaporama->UpdateInformation();
    }
}

//====================================================================================================================
// Open an existing project
//====================================================================================================================

void MainWindow::s_Action_OpenRecent() {
    if (ForcePause(SLOT(s_Action_OpenRecent()))) return;
    QMenu *ContextMenu=new QMenu(this);
    for (int i=ApplicationConfig->RecentFile.count()-1;i>=0;i--) ContextMenu->addAction(QDir::toNativeSeparators(ApplicationConfig->RecentFile.at(i)));
    QAction *Action=ContextMenu->exec(QCursor::pos());
    QString Selected="";
    if (Action) Selected=Action->iconText();
    delete ContextMenu;
    ui->Action_OpenRecent_BT->setDown(false);
    ui->Action_OpenRecent_BT_2->setDown(false);

    if (Selected!="") {
        if ((Diaporama->IsModify)&&(CustomMessageBox(this,QMessageBox::Question,QApplication::translate("MainWindow","Open project"),QApplication::translate("MainWindow","Current project has been modified.\nDo you want to save-it ?"),
            QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)==QMessageBox::Yes)) s_Action_Save();

        ToStatusBar(QApplication::translate("MainWindow","Open file :")+QFileInfo(Selected).fileName());
        FileForIO=Selected;
        QTimer::singleShot(LATENCY,this,SLOT(DoOpenFile()));
    }
}

void MainWindow::s_Action_Open() {
    if (ForcePause(SLOT(s_Action_Open()))) return;
    ui->Action_Open_BT->setDown(false);
    ui->Action_Open_BT_2->setDown(false);

    DlgFileExplorer Dlg(BROWSER_TYPE_PROJECT,false,false,false,QApplication::translate("MainWindow","Open project"),ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) {
        FileList=Dlg.GetCurrentSelectedFiles();
        if (FileList.count()==1) {
            if ((Diaporama->IsModify)&&(CustomMessageBox(this,QMessageBox::Question,QApplication::translate("MainWindow","Open project"),QApplication::translate("MainWindow","Current project has been modified.\nDo you want to save-it ?"),
                QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)==QMessageBox::Yes)) s_Action_Save();
            FileForIO=FileList.at(0);
            QTimer::singleShot(LATENCY,this,SLOT(DoOpenFile()));
        }
    }
    ui->Browser->RefreshHere();
}

void MainWindow::DoOpenFile() {
    if (ForcePause(SLOT(DoOpenFile()))) return;
    ToStatusBar(QApplication::translate("MainWindow","Open file :")+QFileInfo(FileForIO).fileName());
    bool            Continue=true;
    QDomDocument    domDocument;
    QString         ProjectFileName=QDir::toNativeSeparators(FileForIO);

    // Check if ffDRevision is not > current ffDRevision
    cffDProjectFile File(ApplicationConfig);
    if (!File.GetInformationFromFile(ProjectFileName,NULL,NULL,-1)) return;
    File.GetFullInformationFromFile();
    if ((File.ffDRevision.toInt()>CurrentAppVersion.toInt())&&(CustomMessageBox(this,QMessageBox::Question,QApplication::translate("MainWindow","Open project"),
        QApplication::translate("MainWindow","This project was created with a newer version of ffDiaporama.\nIf you continue, you take the risk of losing data!\nDo you want to open it nevertheless?"),QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)==QMessageBox::No))
        return;

    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));

    // Clean actual timeline and diaporama
    FLAGSTOPITEMSELECTION=true;
    ui->timeline->setUpdatesEnabled(false);

    // Clean timeline
    for (int Row=0;Row<ui->timeline->rowCount();Row++) for (int Col=0;Col<ui->timeline->columnCount();Col++) if (ui->timeline->cellWidget(Row,Col)!=NULL) ui->timeline->removeCellWidget(Row,Col);

    // Clean diaporama
    delete Diaporama;

    // Clean images cache
    while (ApplicationConfig->ImagesCache.List.count()>0) delete ApplicationConfig->ImagesCache.List.takeLast();

    // Create new diaporama
    Diaporama=new cDiaporama(ApplicationConfig,true,this);
    AliasList.clear();
    ui->timeline->Diaporama=Diaporama;
    ui->preview->InitDiaporamaPlay(Diaporama);      // Init GUI for this project
    ui->preview2->InitDiaporamaPlay(Diaporama);     // Init GUI for this project

    ui->timeline->setUpdatesEnabled(true);
    FLAGSTOPITEMSELECTION=false;

    // Load file
    SetModifyFlag(false);
    // Setup preview player position to project start
    Diaporama->CurrentCol     =0;
    Diaporama->CurrentPosition=0;
    Diaporama->ProjectFileName=ProjectFileName;

    while ((Continue)&&(!QFileInfo(ProjectFileName).exists())) {
        if (CustomMessageBox(this,QMessageBox::Question,QApplication::translate("MainWindow","Open project file"),
            QApplication::translate("MainWindow","Impossible to open file ")+ProjectFileName+"\n"+QApplication::translate("MainWindow","Do you want to select another file ?"),
            QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)!=QMessageBox::Yes) Continue=false; else {

            QString NewFileName=QFileDialog::getOpenFileName(((MainWindow *)ApplicationConfig->TopLevelWindow),QApplication::translate("MainWindow","Select another file for ")+QFileInfo(ProjectFileName).fileName(),
               ApplicationConfig->RememberLastDirectories?QDir::toNativeSeparators(ApplicationConfig->SettingsTable->GetTextValue(QString("%1_path").arg(BrowserTypeDef[BROWSER_TYPE_PROJECT].BROWSERString),DefaultProjectPath)):DefaultProjectPath,QString("ffDiaporama (*.ffd)"));
            if (NewFileName!="") ProjectFileName=NewFileName; else Continue=false;
        }
    }
    if (!Continue) ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","Impossible to open project file %1").arg(ProjectFileName)); else {

        QFile    file(ProjectFileName);
        QString  errorStr;
        int      errorLine,errorColumn;

        if (!file.open(QFile::ReadOnly | QFile::Text)) {
            QString ErrorMsg=QApplication::translate("MainWindow","Error reading project file","Error message")+"\n"+ProjectFileName;
            CustomMessageBox(this,QMessageBox::Critical,QApplication::translate("MainWindow","Error","Error message"),ErrorMsg,QMessageBox::Close);
            Continue=false;
        } else {

            ResKeyList.clear();

            // Open progress window
            if (DlgWorkingTaskDialog) {
                DlgWorkingTaskDialog->close();
                delete DlgWorkingTaskDialog;
                DlgWorkingTaskDialog=NULL;
            }
            DlgWorkingTaskDialog=new DlgWorkingTask(QApplication::translate("MainWindow","Open project file"),&CancelAction,ApplicationConfig,this);
            DlgWorkingTaskDialog->InitDialog();
            DlgWorkingTaskDialog->SetMaxValue(CurrentLoadingProjectNbrObject,0);
            DlgWorkingTaskDialog->show();
            QApplication::processEvents();
            DlgWorkingTaskDialog->HideProgress();
            DlgWorkingTaskDialog->update();
            QApplication::processEvents();

            QTextStream InStream(&file);
            QString     ffDPart;
            QString     OtherPart="<!DOCTYPE ffDiaporama>\n";
            bool        EndffDPart=false;
            int         Num=0;

            InStream.setCodec("UTF-8");
            while (!InStream.atEnd()) {
                QString Line=InStream.readLine();
                if (!EndffDPart) {
                    ffDPart.append(Line);
                    if (Line=="</Project>") EndffDPart=true;
                } else {
                    OtherPart.append(Line);
                    if (Line.endsWith("/>")) {
                        DlgWorkingTaskDialog->DisplayText(QApplication::translate("MainWindow","Loading project ressources: %1").arg(Num++));
                        DlgWorkingTaskDialog->update();
                        QApplication::processEvents();
                        QDomDocument ResDoc;
                        if (ResDoc.setContent(OtherPart,true,&errorStr,&errorLine,&errorColumn)) {
                            QDomElement  ResElem=ResDoc.documentElement();
                            if (ResElem.tagName()=="Ressource") {
                                int         Width   =ResElem.attribute("Width").toInt();
                                int         Height  =ResElem.attribute("Height").toInt();
                                qlonglong   Key     =ResElem.attribute("Key").toLongLong();
                                QImage      Thumb(Width,Height,QImage::Format_ARGB32_Premultiplied);
                                QByteArray  Compressed   =QByteArray::fromHex(ResElem.attribute("Image").toUtf8());
                                QByteArray  Decompressed =qUncompress(Compressed);
                                Thumb.loadFromData(Decompressed);
                                ResKeyList.append(ApplicationConfig->SlideThumbsTable->AppendThumbs(Key,Thumb));
                            }
                        }
                        // Go to next ressource
                        OtherPart="<!DOCTYPE ffDiaporama>\n";
                    }
                }
            }

            file.close();

            // Now import ffDPart
            if (!domDocument.setContent(ffDPart, true, &errorStr, &errorLine,&errorColumn)) {
                CustomMessageBox(this,QMessageBox::Critical,QApplication::translate("MainWindow","Error","Error message"),QApplication::translate("MainWindow","Error reading content of project file","Error message"),QMessageBox::Close);
                Continue=false;
            }
            file.close();
        }
    }

    if (Continue) {
        CurrentLoadingProjectDocument=domDocument.documentElement();
        if (CurrentLoadingProjectDocument.tagName()!=APPLICATION_ROOTNAME) {

            CustomMessageBox(this,QMessageBox::Critical,QApplication::translate("MainWindow","Error","Error message"),QApplication::translate("MainWindow","The file is not a valid project file","Error message"),QMessageBox::Close);

        } else {

            if ((CurrentLoadingProjectDocument.elementsByTagName("Project").length()>0)&&(CurrentLoadingProjectDocument.elementsByTagName("Project").item(0).isElement()==true)) {

                // Manage Recent files list
                for (int i=0;i<ApplicationConfig->RecentFile.count();i++) if (QDir::toNativeSeparators(ApplicationConfig->RecentFile.at(i))==ProjectFileName) {
                    ApplicationConfig->RecentFile.removeAt(i);
                    break;
                }
                ApplicationConfig->RecentFile.append(ProjectFileName);
                while (ApplicationConfig->RecentFile.count()>10) ApplicationConfig->RecentFile.takeFirst();

                // Load project properties
                Diaporama->ProjectInfo->LoadFromXML(&CurrentLoadingProjectDocument,"",QFileInfo(Diaporama->ProjectFileName).absolutePath(),&AliasList,NULL,&ResKeyList,false,false);
                Diaporama->ProjectThumbnail->LoadFromXML(CurrentLoadingProjectDocument,"ProjectThumbnail",QFileInfo(Diaporama->ProjectFileName).absolutePath(),&AliasList,&ResKeyList,false);

                // Load project geometry and adjust timeline and preview geometry
                QDomElement Element=CurrentLoadingProjectDocument.elementsByTagName("Project").item(0).toElement();
                Diaporama->ImageGeometry   =(ffd_GEOMETRY)Element.attribute("ImageGeometry").toInt();

                Diaporama->DefineSizeAndGeometry(Diaporama->ImageGeometry);
                SetTimelineHeight();
                ui->timeline->SetTimelineHeight(ApplicationConfig->PartitionMode);

                // Load object list
                CurrentLoadingProjectNbrObject=Element.attribute("ObjectNumber").toInt();
                CurrentLoadingProjectObject=0;

                // Open progress window
                if (DlgWorkingTaskDialog) {
                    DlgWorkingTaskDialog->close();
                    delete DlgWorkingTaskDialog;
                    DlgWorkingTaskDialog=NULL;
                }
                DlgWorkingTaskDialog=new DlgWorkingTask(QApplication::translate("MainWindow","Open project file"),&CancelAction,ApplicationConfig,this);
                DlgWorkingTaskDialog->InitDialog();
                DlgWorkingTaskDialog->SetMaxValue(CurrentLoadingProjectNbrObject,0);
                QTimer::singleShot(LATENCY,this,SLOT(DoOpenFileObject()));
                DlgWorkingTaskDialog->exec();
                return;

            }
        }
    }
    QApplication::restoreOverrideCursor();
    ToStatusBar("");
}

//====================================================================================================================
// Load an object from a project file and add it to the timeline
//====================================================================================================================
void MainWindow::DoOpenFileObject() {
    if ((!CancelAction)&&(CurrentLoadingProjectObject<CurrentLoadingProjectNbrObject)&&
        (CurrentLoadingProjectDocument.elementsByTagName("Object-"+QString("%1").arg(CurrentLoadingProjectObject)).length()>0)&&
        (CurrentLoadingProjectDocument.elementsByTagName("Object-"+QString("%1").arg(CurrentLoadingProjectObject)).item(0).isElement()==true)) {

        if (DlgWorkingTaskDialog) {
            DlgWorkingTaskDialog->DisplayText(QApplication::translate("MainWindow","Loading slide %1/%2").arg(CurrentLoadingProjectObject+1).arg(CurrentLoadingProjectNbrObject));
            DlgWorkingTaskDialog->DisplayProgress(CurrentLoadingProjectObject+1);
        }

        Diaporama->List.append(new cDiaporamaObject(Diaporama));

        if (Diaporama->List[Diaporama->List.count()-1]->LoadFromXML(CurrentLoadingProjectDocument,"Object-"+QString("%1").arg(CurrentLoadingProjectObject).trimmed(),
                                                                    QFileInfo(Diaporama->ProjectFileName).absolutePath(),&AliasList,&ResKeyList,false,DlgWorkingTaskDialog)) {

            if (CurrentLoadingProjectObject==0) Diaporama->CurrentPosition=Diaporama->GetTransitionDuration(0);

        } else delete Diaporama->List.takeLast();

        // switch to next object
        CurrentLoadingProjectObject++;
        QTimer::singleShot(LATENCY,this,SLOT(DoOpenFileObject()));

    } else {

        // stop loading object process

        if (DlgWorkingTaskDialog) {
            DlgWorkingTaskDialog->close();
            delete DlgWorkingTaskDialog;
            DlgWorkingTaskDialog=NULL;
        }

        (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->ActualPosition=-1;
        AdjustRuller(0);    // Set first slide as current

        QApplication::restoreOverrideCursor();
        ToStatusBar("");
        // Update gmaps object (if needed)
        Diaporama->UpdateGMapsObject(true);
        // finaly set modify flag
        SetModifyFlag(Diaporama->IsModify);
    }
}

//====================================================================================================================
// Save current project
//====================================================================================================================

void MainWindow::s_Action_Save() {
    ui->preview->SetPlayerToPause();    // Ensure player is stop
    ui->preview2->SetPlayerToPause();   // Ensure player is stop
    ui->Action_Save_BT->setDown(false);
    ui->Action_Save_BT_2->setDown(false);

    if (Diaporama->ProjectFileName=="") s_Action_SaveAs(); else DoSaveFile();
}

//====================================================================================================================
void MainWindow::DoSaveFile() {
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    ToStatusBar(QApplication::translate("MainWindow","Saving project file ...")+QFileInfo(Diaporama->ProjectFileName).fileName());
    QApplication::processEvents();
    if (Diaporama->SaveFile(this)) SetModifyFlag(false);
    ToStatusBar("");
    QApplication::restoreOverrideCursor();
    ui->Browser->RefreshHere();
}

//====================================================================================================================
// Save current project as
//====================================================================================================================

void MainWindow::s_Action_SaveAsBT() {
    if (ForcePause(SLOT(s_Action_SaveAsBT()))) return;
    ui->ActionSave_as_BT->setDown(false);
    ui->ActionSave_as_BT_2->setDown(false);
    QMenu *ContextMenu=new QMenu(this);
    ContextMenu->addAction(ui->actionSaveProjectAs);
    ContextMenu->addAction(ui->actionExportProject);
    ContextMenu->exec(QCursor::pos());
    delete ContextMenu;
}

//====================================================================================================================
// Export current project in a new folder
//====================================================================================================================

void MainWindow::s_Action_Export() {
    DlgExportProject Dlg(Diaporama,ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) ui->Browser->RefreshHere();
}

//====================================================================================================================
// Save current project as
//====================================================================================================================

void MainWindow::s_Action_SaveAs() {
    // Save project
    Diaporama->ProjectFileName=QFileDialog::getSaveFileName(this,QApplication::translate("MainWindow","Save project as"),
                                                            Diaporama->ProjectFileName.isEmpty()?QDir::toNativeSeparators(ApplicationConfig->SettingsTable->GetTextValue(QString("%1_path").arg(BrowserTypeDef[BROWSER_TYPE_PROJECT].BROWSERString),DefaultProjectPath)):Diaporama->ProjectFileName,
                                                            QString("ffDiaporama (*.ffd)"));
    if (Diaporama->ProjectFileName!="") {
        if (QFileInfo(Diaporama->ProjectFileName).suffix()!="ffd") Diaporama->ProjectFileName=Diaporama->ProjectFileName+".ffd";
        ApplicationConfig->SettingsTable->SetTextValue(QString("%1_path").arg(BrowserTypeDef[BROWSER_TYPE_PROJECT].BROWSERString),QFileInfo(Diaporama->ProjectFileName).dir().absolutePath());
        // Manage Recent files list
        for (int i=0;i<ApplicationConfig->RecentFile.count();i++) if (ApplicationConfig->RecentFile.at(i)==QDir::toNativeSeparators(Diaporama->ProjectFileName)) {
            ApplicationConfig->RecentFile.removeAt(i);
            break;
        }
        ApplicationConfig->RecentFile.append(Diaporama->ProjectFileName);
        while (ApplicationConfig->RecentFile.count()>10) ApplicationConfig->RecentFile.takeFirst();
        DoSaveFile();
    }
}

//====================================================================================================================
// Add a title object
//====================================================================================================================

void MainWindow::s_Action_AddTitle() {
    if (ForcePause(SLOT(s_Action_AddTitle()))) return;
    ui->ActionAddtitle_BT->setDown(false);
    ui->ActionAddtitle_BT_2->setDown(false);
    QMenu *ContextMenu=new QMenu(this);
    ContextMenu->addAction(ui->actionAddEmptySlide);
    ContextMenu->addAction(ui->actionAddAutoTitleSlide);
    ContextMenu->addAction(ui->actionAddGMap);
    ContextMenu->exec(QCursor::pos());
    delete ContextMenu;
}

void MainWindow::s_Action_AddEmptyTitle() {
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    CurIndex=Diaporama->List.count()==0?0:(ApplicationConfig->AppendObject?Diaporama->List.count()-1:Diaporama->CurrentCol)+1;

    Diaporama->List.insert(CurIndex,new cDiaporamaObject(Diaporama));
    cDiaporamaObject *DiaporamaObject       =Diaporama->List[CurIndex];
    DiaporamaObject->List[0]->Parent        =DiaporamaObject;
    DiaporamaObject->List[0]->StaticDuration=ApplicationConfig->NoShotDuration;

    if (Diaporama->ApplicationConfig->RandomTransition) {
        qsrand(QTime(0,0,0,0).msecsTo(QTime::currentTime()));
        int Random=qrand();
        Random=int(double(IconList.List.count())*(double(Random)/double(RAND_MAX)));
        if (Random<IconList.List.count()) {
            Diaporama->List[CurIndex]->TransitionFamilly=IconList.List[Random].TransitionFamilly;
            Diaporama->List[CurIndex]->TransitionSubType=IconList.List[Random].TransitionSubType;
        }
    } else {
        Diaporama->List[CurIndex]->TransitionFamilly=Diaporama->ApplicationConfig->DefaultTransitionFamilly;
        Diaporama->List[CurIndex]->TransitionSubType=Diaporama->ApplicationConfig->DefaultTransitionSubType;
    }
    Diaporama->List[CurIndex]->TransitionDuration=Diaporama->ApplicationConfig->DefaultTransitionDuration;
    SetModifyFlag(true);
    AdjustRuller(CurIndex);
    QApplication::restoreOverrideCursor();
}

void MainWindow::s_Action_AddAutoTitleSlide() {
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    SavedCurIndex=Diaporama->CurrentCol;
    CurIndex     =Diaporama->List.count()==0?0:(ApplicationConfig->AppendObject?Diaporama->List.count()-1:Diaporama->CurrentCol)+1;

    Diaporama->List.insert(CurIndex,new cDiaporamaObject(Diaporama));
    cDiaporamaObject *DiaporamaObject       =Diaporama->List[CurIndex];
    DiaporamaObject->List[0]->Parent        =DiaporamaObject;
    DiaporamaObject->List[0]->StaticDuration=ApplicationConfig->NoShotDuration;
    DiaporamaObject->Parent                 =Diaporama;

    if (Diaporama->ApplicationConfig->RandomTransition) {
        qsrand(QTime(0,0,0,0).msecsTo(QTime::currentTime()));
        int Random=qrand();
        Random=int(double(IconList.List.count())*(double(Random)/double(RAND_MAX)));
        if (Random<IconList.List.count()) {
            Diaporama->List[CurIndex]->TransitionFamilly=IconList.List[Random].TransitionFamilly;
            Diaporama->List[CurIndex]->TransitionSubType=IconList.List[Random].TransitionSubType;
        }
    } else {
        Diaporama->List[CurIndex]->TransitionFamilly=Diaporama->ApplicationConfig->DefaultTransitionFamilly;
        Diaporama->List[CurIndex]->TransitionSubType=Diaporama->ApplicationConfig->DefaultTransitionSubType;
    }
    Diaporama->List[CurIndex]->TransitionDuration=Diaporama->ApplicationConfig->DefaultTransitionDuration;

    AdjustRuller(CurIndex);
    (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));

    DlgAutoTitleSlide Dlg(true,Diaporama->List[CurIndex],ApplicationConfig,this);
    Dlg.InitDialog();
    connect(&Dlg,SIGNAL(SetModifyFlag()),this,SLOT(s_Event_SetModifyFlag()));
    QApplication::restoreOverrideCursor();
    int Ret=Dlg.exec();
    if (Ret!=1) { // ok, ok next or ok previous
        if (Ret==4) { // Convert
            DlgSlideProperties Dlg(Diaporama->List[CurIndex],ApplicationConfig,this);
            Dlg.InitDialog();
            connect(&Dlg,SIGNAL(SetModifyFlag()),this,SLOT(s_Event_SetModifyFlag()));
            Ret=Dlg.exec();
        }
        // Reset thumbnails of this slide
        ApplicationConfig->SlideThumbsTable->ClearThumbs(Diaporama->List[CurIndex]->ThumbnailKey);

        AdjustRuller();

        // Reset thumbnails of all slides containing variables
        for (int i=0;i<Diaporama->List.count();i++)
            if ((Diaporama->List[i]->ThumbnailKey!=1)&&(Variable.IsObjectHaveVariables(Diaporama->List[i])))
                ApplicationConfig->SlideThumbsTable->ClearThumbs(Diaporama->List[i]->ThumbnailKey);


    } else { // Cancel
        delete Diaporama->List.takeAt(CurIndex);
        AdjustRuller(SavedCurIndex);
        CurIndex=SavedCurIndex;
    }

    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    ui->timeline->ResetDisplay(CurIndex);    // FLAGSTOPITEMSELECTION is set to false by ResetDisplay
    (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
    ui->timeline->setUpdatesEnabled(true);
    QApplication::restoreOverrideCursor();
}

void MainWindow::s_Action_AddGMap() {
    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    SavedCurIndex=Diaporama->CurrentCol;
    CurIndex     =Diaporama->List.count()==0?0:(ApplicationConfig->AppendObject?Diaporama->List.count()-1:Diaporama->CurrentCol)+1;

    Diaporama->List.insert(CurIndex,new cDiaporamaObject(Diaporama));
    cDiaporamaObject *DiaporamaObject       =Diaporama->List[CurIndex];
    DiaporamaObject->List[0]->Parent        =DiaporamaObject;
    DiaporamaObject->List[0]->StaticDuration=ApplicationConfig->NoShotDuration;
    DiaporamaObject->Parent                 =Diaporama;

    // Create an GMapsMap wrapper
    cGMapsMap   *MediaObject=new cGMapsMap(ApplicationConfig);
    MediaObject->CreatDateTime=QDateTime().currentDateTime();
    MediaObject->CreateDefaultImage(Diaporama);   // create default image
    MediaObject->GetInformationFromFile("",NULL,NULL,-1);

    // Add this block
    Diaporama->List[CurIndex]->ObjectComposition.List.insert(0,new cCompositionObject(COMPOSITIONTYPE_OBJECT,Diaporama->List[CurIndex]->NextIndexKey,ApplicationConfig,&Diaporama->List[CurIndex]->ObjectComposition));
    cCompositionObject  *CompositionObject=Diaporama->List[CurIndex]->ObjectComposition.List[0];
    cCompositionObject  *ShotCompoObject  =NULL;
    cBrushDefinition    *CurrentBrush     =CompositionObject->BackgroundBrush;

    // Set CompositionObject to full screen
    CompositionObject->x=0;
    CompositionObject->y=0;
    CompositionObject->w=1;
    CompositionObject->h=1;

    // Set other values
    CompositionObject->Text     ="";
    CompositionObject->PenSize  =0;
    CurrentBrush->BrushType     =BRUSHTYPE_IMAGEDISK;

    // Create an cImageClipboard wrapper
    CurrentBrush->MediaObject=MediaObject;

    // Apply Styles
    CompositionObject->ApplyTextStyle(ApplicationConfig->StyleTextCollection.GetStyleDef(ApplicationConfig->StyleTextCollection.DecodeString(ApplicationConfig->DefaultBlockSL_IMG_TextST)));
    CompositionObject->ApplyBlockShapeStyle(ApplicationConfig->StyleBlockShapeCollection.GetStyleDef(ApplicationConfig->StyleBlockShapeCollection.DecodeString(ApplicationConfig->DefaultBlockSL_IMG_ShapeST)));
    qreal ProjectGeometry=qreal(Diaporama->ImageGeometry==GEOMETRY_4_3?1440:Diaporama->ImageGeometry==GEOMETRY_16_9?1080:Diaporama->ImageGeometry==GEOMETRY_40_17?816:1920)/qreal(1920);
    CurrentBrush->ApplyAutoFraming(ApplicationConfig->DefaultBlockSL[CurrentBrush->GetImageType()].AutoFraming,ProjectGeometry);
    CompositionObject->ApplyAutoCompoSize(ApplicationConfig->DefaultBlockSL[CurrentBrush->GetImageType()].AutoCompo,Diaporama->ImageGeometry);

    // Inc NextIndexKey
    Diaporama->List[CurIndex]->NextIndexKey++;

    // Now create and append a shot composition block to all shot
    for (int i=0;i<Diaporama->List[CurIndex]->List.count();i++) {
        Diaporama->List[CurIndex]->List[i]->ShotComposition.List.append(new cCompositionObject(COMPOSITIONTYPE_SHOT,CompositionObject->IndexKey,ApplicationConfig,&Diaporama->List[CurIndex]->List[i]->ShotComposition));
        Diaporama->List[CurIndex]->List[i]->ShotComposition.List[Diaporama->List[CurIndex]->List[i]->ShotComposition.List.count()-1]->CopyFromCompositionObject(CompositionObject);
    }

    // Now setup transition
    if (Diaporama->ApplicationConfig->RandomTransition) {
        qsrand(QTime(0,0,0,0).msecsTo(QTime::currentTime()));
        int Random=qrand();
        Random=int(double(IconList.List.count())*(double(Random)/double(RAND_MAX)));
        if (Random<IconList.List.count()) {
            Diaporama->List[CurIndex]->TransitionFamilly=IconList.List[Random].TransitionFamilly;
            Diaporama->List[CurIndex]->TransitionSubType=IconList.List[Random].TransitionSubType;
        }
    } else {
        Diaporama->List[CurIndex]->TransitionFamilly=Diaporama->ApplicationConfig->DefaultTransitionFamilly;
        Diaporama->List[CurIndex]->TransitionSubType=Diaporama->ApplicationConfig->DefaultTransitionSubType;
    }
    Diaporama->List[CurIndex]->TransitionDuration=Diaporama->ApplicationConfig->DefaultTransitionDuration;

    // Compute Optimisation Flags
    for (int aa=0;aa<Diaporama->List[CurIndex]->List.count();aa++)
        for (int bb=0;bb<Diaporama->List[CurIndex]->List[aa]->ShotComposition.List.count();bb++)
            Diaporama->List[CurIndex]->List[aa]->ShotComposition.List[bb]->ComputeOptimisationFlags(aa>0?Diaporama->List[CurIndex]->List[aa-1]->ShotComposition.List[bb]:NULL);

    AdjustRuller(CurIndex);
    (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));

    QApplication::restoreOverrideCursor();

    ShotCompoObject=Diaporama->List[CurIndex]->List[0]->ShotComposition.List[0];
    DlgImageCorrection Dlg(ShotCompoObject,&ShotCompoObject->BackgroundForm,ShotCompoObject->BackgroundBrush,0,Diaporama->ImageGeometry,Diaporama->ImageAnimSpeedWave,ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) {
        // Lulo object must be removed
        ApplicationConfig->ImagesCache.RemoveImageObject(CompositionObject->BackgroundBrush->MediaObject->RessourceKey,CompositionObject->BackgroundBrush->MediaObject->FileKey);

        // Apply to GlobalComposition objects
        CompositionObject->CopyFromCompositionObject(ShotCompoObject);
        CompositionObject->BackgroundBrush->TypeComposition=CompositionObject->TypeComposition; // because CopyFromCompositionObject force it to COMPOSITIONTYPE_SHOT

        // Reset thumbnails of this slide
        ApplicationConfig->SlideThumbsTable->ClearThumbs(Diaporama->List[CurIndex]->ThumbnailKey);

        // Set title flag
        SetModifyFlag(true);

    } else { // Cancel
        delete Diaporama->List.takeAt(CurIndex);
        AdjustRuller(SavedCurIndex);
        CurIndex=SavedCurIndex;
    }

    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    ui->timeline->ResetDisplay(CurIndex);    // FLAGSTOPITEMSELECTION is set to false by ResetDisplay
    (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
    ui->timeline->setUpdatesEnabled(true);
    QApplication::restoreOverrideCursor();
}

//====================================================================================================================
// Add a slide (image or video)
//====================================================================================================================

void MainWindow::s_Action_AddFile() {
    if (ForcePause(SLOT(s_Action_AddFile()))) return;
    ui->ActionAdd_BT->setDown(false);
    ui->ActionAdd_BT_2->setDown(false);

    DlgFileExplorer Dlg(BROWSER_TYPE_MEDIAFILES,true,true,true,QApplication::translate("MainWindow","Add files"),ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) FileList=Dlg.GetCurrentSelectedFiles();
    ui->Browser->RefreshHere();
    if (FileList.count()>0) {

        SavedCurIndex=Diaporama->CurrentCol;
        CurIndex     =Diaporama->List.count()==0?0:(ApplicationConfig->AppendObject?Diaporama->List.count()-1:Diaporama->CurrentCol)+1;

        if (DlgWorkingTaskDialog) {
            DlgWorkingTaskDialog->close();
            delete DlgWorkingTaskDialog;
            DlgWorkingTaskDialog=NULL;
        }
        DlgWorkingTaskDialog=new DlgWorkingTask(QApplication::translate("MainWindow","Add file to project"),&CancelAction,ApplicationConfig,this);
        DlgWorkingTaskDialog->InitDialog();
        DlgWorkingTaskDialog->SetMaxValue(FileList.count(),0);
        QTimer::singleShot(LATENCY,this,SLOT(DoAddFile()));
        DlgWorkingTaskDialog->exec();
    }
}

//====================================================================================================================
// Add a slide from drag & drop
//====================================================================================================================
bool ByName(const QString &Item1,const QString &Item2) { return QFileInfo(Item1).completeBaseName()<QFileInfo(Item2).completeBaseName(); }
bool ByDate(const QString &Item1,const QString &Item2) { return QFileInfo(Item1).lastModified()<QFileInfo(Item2).lastModified(); }
bool ByNumber(const QString &Item1,const QString &Item2) {
    bool ok1,ok2;
    QString NameA=QFileInfo(Item1).completeBaseName();
    int NumA=NameA.length()-1;
    while ((NumA>0)&&(((NameA[NumA]>='0')&&(NameA[NumA]<='9'))||((NameA[NumA]>='A')&&(NameA[NumA]<='F'))||((NameA[NumA]>='a')&&(NameA[NumA]<='f')))) NumA--;
    if (NumA>=0) NumA=NameA.mid(NumA+1).toInt(&ok1,16);

    QString NameB=QFileInfo(Item2).completeBaseName();
    int NumB=NameB.length()-1;
    while ((NumB>0)&&(((NameB[NumB]>='0')&&(NameB[NumB]<='9'))||((NameB[NumB]>='A')&&(NameB[NumB]<='F'))||((NameB[NumB]>='a')&&(NameB[NumB]<='f')))) NumB--;
    if (NumB>=0) NumB=NameB.mid(NumB+1).toInt(&ok2,16);

    if (ok1 && ok2) return NumA<NumB; else return QFileInfo(Item1).completeBaseName()<QFileInfo(Item2).completeBaseName();
}
//=====
void MainWindow::s_Event_TimelineAddDragAndDropFile() {
    if (!ui->timeline->CursorPosValide) return;

    if (ForcePause(SLOT(s_Event_TimelineAddDragAndDropFile()))) return;

    CurIndex     =ui->timeline->DragItemDest;
    SavedCurIndex=CurIndex-1;
    CancelAction =false;

    // Sort files in the fileList
    if          (ui->Browser->GetSortOrder()==SORTORDER_BYNUMBER)   qSort(FileList.begin(),FileList.end(),ByNumber);
        else if (ui->Browser->GetSortOrder()==SORTORDER_BYNAME)     qSort(FileList.begin(),FileList.end(),ByName);
        else if (ui->Browser->GetSortOrder()==SORTORDER_BYDATE)     qSort(FileList.begin(),FileList.end(),ByDate);

    // Parse all files to find music files (and put them in MusicFileList)
    MusicFileList.clear();
    int i=0;
    while (i<FileList.count()) {
        if (ApplicationConfig->AllowMusicExtension.contains(QFileInfo(FileList.at(i)).suffix().toLower())) {
            cMusicObject  *MediaFile=new cMusicObject(ApplicationConfig);
            if ((MediaFile)&&(MediaFile->GetInformationFromFile(FileList.at(i),NULL,NULL,-1)&&(MediaFile->CheckFormatValide(this)))) {
                MusicFileList.append(FileList.at(i));
                FileList.removeAt(i);
            } else i++;
        } else i++;
    }
    if (DlgWorkingTaskDialog) {
        DlgWorkingTaskDialog->close();
        delete DlgWorkingTaskDialog;
        DlgWorkingTaskDialog=NULL;
    }
    if (MusicFileList.count()>0) {
        CurIndex     =ui->timeline->DragItemDest;
        SavedCurIndex=ui->timeline->DragItemDest;

        bool Continue=true;
        if (Diaporama->List[CurIndex]->MusicType) {
            if (Diaporama->List[CurIndex]->MusicList.count()>0) {
                int Ret=CustomMessageBox(this,QMessageBox::Question,QApplication::translate("MainWindow","Add music file"),
                                          QApplication::translate("MainWindow","This slide already has a playlist. What to do?"),
                                          QMessageBox::Yes|QMessageBox::No|QMessageBox::Cancel, QMessageBox::Yes,
                                          QApplication::translate("MainWindow","Add to the current playlist"),
                                          QApplication::translate("MainWindow","Replace the current playlist"));
                if (Ret==QMessageBox::Cancel) Continue=false; else if (Ret==QMessageBox::No) {
                    while (Diaporama->List[CurIndex]->MusicList.count()) Diaporama->List[CurIndex]->MusicList.removeAt(0);
                }
            }
        }
        if (Continue) {
            // Open progress window
            CurrentLoadingProjectNbrObject=MusicFileList.count();
            DlgWorkingTaskDialog=new DlgWorkingTask(QApplication::translate("MainWindow","Add music file"),&CancelAction,ApplicationConfig,this);
            DlgWorkingTaskDialog->InitDialog();
            DlgWorkingTaskDialog->SetMaxValue(CurrentLoadingProjectNbrObject,0);
            QTimer::singleShot(LATENCY,this,SLOT(s_Action_DoUseAsPlayList()));
            DlgWorkingTaskDialog->exec();
        }
    } else {
        DlgWorkingTaskDialog=new DlgWorkingTask(QApplication::translate("MainWindow","Add file to project"),&CancelAction,ApplicationConfig,this);
        DlgWorkingTaskDialog->InitDialog();
        DlgWorkingTaskDialog->SetMaxValue(FileList.count(),0);
        QTimer::singleShot(LATENCY,this,SLOT(DoAddFile()));
        DlgWorkingTaskDialog->exec();
    }
}

//====================================================================================================================
// Add a slide from a current reading of project
//====================================================================================================================

void MainWindow::DoAppendFile() {
    if ((CurrentAppendingProjectNbrObject<CurrentAppendingProjectObject)&&
        (CurrentAppendingRoot.elementsByTagName("Object-"+QString("%1").arg(CurrentAppendingProjectNbrObject)).length()>0)&&
        (CurrentAppendingRoot.elementsByTagName("Object-"+QString("%1").arg(CurrentAppendingProjectNbrObject)).item(0).isElement()==true)) {

        if (DlgWorkingTaskDialog) DlgWorkingTaskDialog->DisplayProgress(DlgWorkingTaskDialog->MaxValue+DlgWorkingTaskDialog->AddValue-FileList.count()-CurrentAppendingProjectObject+CurrentAppendingProjectNbrObject);

        Diaporama->List.insert(CurIndex,new cDiaporamaObject(Diaporama));
        if (Diaporama->List[CurIndex]->LoadFromXML(CurrentAppendingRoot,"Object-"+QString("%1").arg(CurrentAppendingProjectNbrObject).trimmed(),
            QFileInfo(CurrentAppendingProjectName).absolutePath(),&AliasList,&ResKeyList,false)) {

            if (CurrentAppendingProjectNbrObject==0) Diaporama->List[CurIndex]->StartNewChapter=true;
            CurIndex++;

        } else delete Diaporama->List.takeAt(CurIndex);

        CurrentAppendingProjectNbrObject++;
        QTimer::singleShot(LATENCY,this,SLOT(DoAppendFile()));

    } else QTimer::singleShot(LATENCY,this,SLOT(DoAddFile()));
}

//====================================================================================================================
// Add an (sub) project
//====================================================================================================================

void MainWindow::s_Action_AddProject() {
    if (ForcePause(SLOT(s_Action_AddProject()))) return;
    ui->ActionAddProject_BT->setDown(false);
    ui->ActionAddProject_BT_2->setDown(false);

    DlgFileExplorer Dlg(BROWSER_TYPE_PROJECT,true,true,true,QApplication::translate("MainWindow","Add a sub project"),ApplicationConfig,this);
    Dlg.InitDialog();
    if (Dlg.exec()==0) FileList=Dlg.GetCurrentSelectedFiles();
    ui->Browser->RefreshHere();
    CancelAction=false;
    if (FileList.count()>0) {

        // Load object list
        CurrentLoadingProjectNbrObject=FileList.count();
        CurrentLoadingProjectObject   =0;
        CancelAction                  =false;

        // Open progress window
        if (DlgWorkingTaskDialog) {
            DlgWorkingTaskDialog->close();
            delete DlgWorkingTaskDialog;
            DlgWorkingTaskDialog=NULL;
        }
        DlgWorkingTaskDialog=new DlgWorkingTask(QApplication::translate("MainWindow","Add files to project"),&CancelAction,ApplicationConfig,this);
        DlgWorkingTaskDialog->InitDialog();
        DlgWorkingTaskDialog->SetMaxValue(CurrentLoadingProjectNbrObject,0);

        // Calc position of new object depending on ApplicationConfig->AppendObject
        SavedCurIndex=Diaporama->CurrentCol;
        CurIndex     =Diaporama->List.count()==0?0:(ApplicationConfig->AppendObject?Diaporama->List.count()-1:Diaporama->CurrentCol)+1;

        ToStatusBar(QApplication::translate("MainWindow","Add project file :")+QFileInfo(FileList[0]).fileName());
        QTimer::singleShot(LATENCY,this,SLOT(DoAddFile()));
        DlgWorkingTaskDialog->exec();
    }
}

//====================================================================================================================
// Add a slide from a list of file (FileList)
// This sub is called by himself and:
//  - s_Action_AddFile
//  - s_Event_TimelineAddDragAndDropFile
//  - DoAppendFile
//  - s_Action_AddProject
//  - s_Browser_AddFiles
//====================================================================================================================

void MainWindow::DoAddFile() {
    if ((FileList.count()==0)||(CancelAction)) {
        if (DlgWorkingTaskDialog) {
            DlgWorkingTaskDialog->close();
            delete DlgWorkingTaskDialog;
            DlgWorkingTaskDialog=NULL;
        }
        FileList.clear();
        AdjustRuller(SavedCurIndex+1);
        FLAGSTOPITEMSELECTION=false;
        return;
    }

    if (DlgWorkingTaskDialog) {
        DlgWorkingTaskDialog->DisplayText(QApplication::translate("MainWindow","Add file to project :")+QFileInfo(FileList[0]).fileName());
        DlgWorkingTaskDialog->DisplayProgress(DlgWorkingTaskDialog->MaxValue+DlgWorkingTaskDialog->AddValue-FileList.count());
    }

    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    QString NewFile   =FileList.takeFirst();
    int     ChapterNum=-1;

    // if it's a ffDiaporama project file
    if ((QFileInfo(NewFile).suffix()!="")&&(QFileInfo(NewFile).suffix().toLower()=="ffd")) {

        CurrentAppendingProjectName=NewFile;

        QFile    file(CurrentAppendingProjectName);
        QString  errorStr;
        int      errorLine,errorColumn;
        bool     IsOk=true;

        if (file.open(QFile::ReadOnly | QFile::Text)) {

            ResKeyList.clear();

            QTextStream InStream(&file);
            QString     ffDPart;
            QString     OtherPart="<!DOCTYPE ffDiaporama>\n";
            bool        EndffDPart=false;

            InStream.setCodec("UTF-8");
            while (!InStream.atEnd()) {
                QString Line=InStream.readLine();
                if (!EndffDPart) {
                    ffDPart.append(Line);
                    if (Line=="</Project>") EndffDPart=true;
                } else {
                    OtherPart.append(Line);
                    if (Line.endsWith("/>")) {
                        QDomDocument ResDoc;
                        if (ResDoc.setContent(OtherPart,true,&errorStr,&errorLine,&errorColumn)) {
                            QDomElement  ResElem=ResDoc.documentElement();
                            if (ResElem.tagName()=="Ressource") {
                                int         Width   =ResElem.attribute("Width").toInt();
                                int         Height  =ResElem.attribute("Height").toInt();
                                qlonglong   Key     =ResElem.attribute("Key").toLongLong();
                                QImage      Thumb(Width,Height,QImage::Format_ARGB32_Premultiplied);
                                QByteArray  Compressed   =QByteArray::fromHex(ResElem.attribute("Image").toUtf8());
                                QByteArray  Decompressed =qUncompress(Compressed);
                                Thumb.loadFromData(Decompressed);
                                ResKeyList.append(ApplicationConfig->SlideThumbsTable->AppendThumbs(Key,Thumb));
                            }
                        }
                        // Go to next ressource
                        OtherPart="<!DOCTYPE ffDiaporama>\n";
                    }
                }
            }

            file.close();

            // Now import ffDPart
            if ((CurrentAppendingProjectDocument.setContent(ffDPart,true,&errorStr,&errorLine,&errorColumn))) {

                CurrentAppendingRoot=CurrentAppendingProjectDocument.documentElement();
                if (CurrentAppendingRoot.tagName()!=APPLICATION_ROOTNAME) {
                    CustomMessageBox(NULL,QMessageBox::Critical,QApplication::translate("MainWindow","Error","Error message"),QApplication::translate("MainWindow","The file is not a valid project file","Error message"),QMessageBox::Close);
                    IsOk=false;
                }

                if ((IsOk)&&((CurrentAppendingRoot.elementsByTagName("Project").length()>0)&&(CurrentAppendingRoot.elementsByTagName("Project").item(0).isElement()==true))) {
                    QDomElement Element=CurrentAppendingRoot.elementsByTagName("Project").item(0).toElement();
                    ffd_GEOMETRY TheImageGeometry   =(ffd_GEOMETRY)Element.attribute("ImageGeometry").toInt();
                    if (TheImageGeometry!=Diaporama->ImageGeometry) {
                        CustomMessageBox(NULL,QMessageBox::Critical,QApplication::translate("MainWindow","Error","Error message"),QApplication::translate("MainWindow","Impossible to import this file :\nImage geometry in this file is not the same than the current project","Error message"),QMessageBox::Close);
                        IsOk=false;
                    }
                }

                // Load basic information on project
                if ((IsOk)&&((CurrentAppendingRoot.elementsByTagName("Project").length()>0)&&(CurrentAppendingRoot.elementsByTagName("Project").item(0).isElement()==true))) {
                    QDomElement Element=CurrentAppendingRoot.elementsByTagName("Project").item(0).toElement();

                    // Load object list
                    CurrentAppendingProjectObject   =Element.attribute("ObjectNumber").toInt();
                    CurrentAppendingProjectNbrObject=0;
                    if (DlgWorkingTaskDialog) DlgWorkingTaskDialog->SetMaxValue(DlgWorkingTaskDialog->MaxValue,DlgWorkingTaskDialog->AddValue+CurrentAppendingProjectObject);
                    QTimer::singleShot(LATENCY,this,SLOT(DoAppendFile()));
                }

            } else  {
                file.close();
                CustomMessageBox(NULL,QMessageBox::Critical,QApplication::translate("MainWindow","Error","Error message"),QApplication::translate("MainWindow","Error reading content of project file","Error message"),QMessageBox::Close);
                QTimer::singleShot(LATENCY,this,SLOT(DoAddFile()));
            }

        } else {
            CustomMessageBox(NULL,QMessageBox::Critical,QApplication::translate("MainWindow","Error","Error message"),QApplication::translate("MainWindow","Error reading project file","Error message"),QMessageBox::Close);
            QTimer::singleShot(LATENCY,this,SLOT(DoAddFile()));
        }

    } else {
        // Image or video file

        // Chapter adjustement
        if (NewFile.contains("#CHAP_")) {
            ChapterNum=NewFile.mid(NewFile.indexOf("#CHAP_")+QString("#CHAP_").length()).toInt();
            NewFile   =NewFile.left(NewFile.indexOf("#CHAP_"));
        }

        QString         BrushFileName=QFileInfo(NewFile).absoluteFilePath();
        QString         Extension    =QFileInfo(BrushFileName).suffix().toLower();
        cBaseMediaFile  *MediaFile=NULL;

        if (ApplicationConfig->AllowImageExtension.contains(Extension))                 MediaFile=new cImageFile(ApplicationConfig);
            else if (ApplicationConfig->AllowImageVectorExtension.contains(Extension))  MediaFile=new cImageFile(ApplicationConfig);
            else if (ApplicationConfig->AllowVideoExtension.contains(Extension))        MediaFile=new cVideoFile(ApplicationConfig);

        if ((MediaFile)&&(MediaFile->GetInformationFromFile(BrushFileName,NULL,NULL,-1)&&(MediaFile->CheckFormatValide(this)))) {
            cVideoFile *Video=(MediaFile->ObjectType==OBJECTTYPE_VIDEOFILE)?(cVideoFile *)MediaFile:NULL;

            //**********************************************
            // Chapter management
            //**********************************************
            if ((Video)&&(ChapterNum==-1)&&(Video->NbrChapters>1)&&(CustomMessageBox(this,QMessageBox::Question,QApplication::translate("cBaseMediaFile","Add video file"),
                QApplication::translate("MainWindow","This video files contains more than one chapter.\nDo you want to create one slide for each chapters ?"),QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)==QMessageBox::Yes)) {

                // Define Chapter index for this file
                ChapterNum=0;

                // Insert this file again at top for each chapters
                for (int i=Video->NbrChapters-1;i>0;i--) FileList.insert(0,NewFile+"#CHAP_"+QString("%1").arg(i));
            }

            //**********************************************
            // Create Diaporama Object and load first image
            //**********************************************

            if (CurIndex==-1) CurIndex=0;

            Diaporama->List.insert(CurIndex,new cDiaporamaObject(Diaporama));
            cDiaporamaObject *DiaporamaObject       =Diaporama->List[CurIndex];
            DiaporamaObject->List[0]->Parent        =DiaporamaObject;
            DiaporamaObject->List[0]->StaticDuration=ApplicationConfig->NoShotDuration;
            DiaporamaObject->Parent                 =Diaporama;

            // Create and append a composition block to the object list
            DiaporamaObject->ObjectComposition.List.append(new cCompositionObject(COMPOSITIONTYPE_OBJECT,DiaporamaObject->NextIndexKey,ApplicationConfig,&DiaporamaObject->ObjectComposition));
            cCompositionObject *CompositionObject   =DiaporamaObject->ObjectComposition.List[DiaporamaObject->ObjectComposition.List.count()-1];
            cBrushDefinition   *CurrentBrush        =CompositionObject->BackgroundBrush;

            // Set CompositionObject to full screen
            CompositionObject->x=0;
            CompositionObject->y=0;
            CompositionObject->w=1;
            CompositionObject->h=1;

            // Set other values
            CompositionObject->Text     ="";
            CompositionObject->PenSize  =0;
            CurrentBrush->BrushType     =BRUSHTYPE_IMAGEDISK;
            DiaporamaObject->SlideName  =QFileInfo(NewFile).fileName();

            //*****************************************************
            // Transfert mediafile to brush and chapter management
            //*****************************************************

            CurrentBrush->MediaObject=MediaFile;
            if (Video) {
                // Do analyse
                DlgWorkingTaskDialog->DisplayText2(QApplication::translate("MainWindow","Analyse file:"));
                QList<qreal> Peak,Moyenne;
                DlgWorkingTaskDialog->TimerProgress=0;
                if (!Video->IsComputedAudioDuration) Video->DoAnalyseSound(&Peak,&Moyenne,&CancelAction,&DlgWorkingTaskDialog->TimerProgress);
                DlgWorkingTaskDialog->StopText2();

                // Prepare default values
                DiaporamaObject->List[0]->StaticDuration=1000;
                if (ChapterNum>=0) {
                    QStringList TempExtProperties;
                    ApplicationConfig->FilesTable->GetExtendedProperties(MediaFile->FileKey,&TempExtProperties);
                    QString ChapterStr=QString("%1").arg(ChapterNum);
                    while (ChapterStr.length()<3) ChapterStr="0"+ChapterStr;
                    ChapterStr="Chapter_"+ChapterStr+":";
                    QString Start=GetInformationValue(ChapterStr+"Start",&TempExtProperties);
                    QString End  =GetInformationValue(ChapterStr+"End",&TempExtProperties);
                    Video->StartPos=QTime().fromString(Start);
                    Video->EndPos  =QTime().fromString(End);
                    DiaporamaObject->SlideName   =GetInformationValue(ChapterStr+"title",&TempExtProperties);
                } else {
                    Video->EndPos=Video->GetRealDuration();
                    if (Video->LibavStartTime>0) Video->StartPos=QTime(0,0,0,0).addMSecs(int64_t((double(Video->LibavStartTime)/AV_TIME_BASE)*1000));
                }
                QString FileExtension=QFileInfo(Video->FileName()).completeSuffix().toLower();
                CurrentBrush->Deinterlace=(ApplicationConfig->Deinterlace)&&(Video)&&((FileExtension=="mts")||(FileExtension=="m2ts")||(FileExtension=="mod"));
            }

            //**********************************************
            // Apply default style to media file
            //**********************************************

            // Apply Styles for texte
            CompositionObject->ApplyTextStyle(ApplicationConfig->StyleTextCollection.GetStyleDef(ApplicationConfig->StyleTextCollection.DecodeString(ApplicationConfig->DefaultBlockSL_IMG_TextST)));

            // Apply Styles for shape
            CompositionObject->ApplyBlockShapeStyle(ApplicationConfig->StyleBlockShapeCollection.GetStyleDef(ApplicationConfig->StyleBlockShapeCollection.DecodeString(ApplicationConfig->DefaultBlockSL_IMG_ShapeST)));

            // Apply styles for coordinates
            qreal ProjectGeometry=qreal(Diaporama->ImageGeometry==GEOMETRY_4_3?1440:Diaporama->ImageGeometry==GEOMETRY_16_9?1080:Diaporama->ImageGeometry==GEOMETRY_40_17?816:1920)/qreal(1920);
            CurrentBrush->ApplyAutoFraming(ApplicationConfig->DefaultBlockSL[CurrentBrush->GetImageType()].AutoFraming,ProjectGeometry);
            if (CurrentBrush->MediaObject->ObjectType==OBJECTTYPE_IMAGEVECTOR) {
                CompositionObject->ApplyAutoCompoSize(AUTOCOMPOSIZE_REALSIZE,Diaporama->ImageGeometry);
                // adjust for image was not too small !
                if ((CompositionObject->w<0.2)&&(CompositionObject->h<0.2)) {
                    while ((CompositionObject->w<0.2)&&(CompositionObject->h<0.2)) {
                        CompositionObject->w=CompositionObject->w*2;
                        CompositionObject->h=CompositionObject->h*2;
                    }
                    CompositionObject->x=(1-CompositionObject->w)/2;
                    CompositionObject->y=(1-CompositionObject->h)/2;
                }
            } else CompositionObject->ApplyAutoCompoSize(ApplicationConfig->DefaultBlockSL[CurrentBrush->GetImageType()].AutoCompo,Diaporama->ImageGeometry);

            //*************************************************************
            // Now create and append a shot composition block to all shot
            //*************************************************************
            for (int i=0;i<DiaporamaObject->List.count();i++) {
                DiaporamaObject->List[i]->ShotComposition.List.append(new cCompositionObject(COMPOSITIONTYPE_SHOT,CompositionObject->IndexKey,ApplicationConfig,&DiaporamaObject->List[i]->ShotComposition));
                DiaporamaObject->List[i]->ShotComposition.List[DiaporamaObject->List[i]->ShotComposition.List.count()-1]->CopyFromCompositionObject(CompositionObject);
            }

            //*************************************************************
            // Now setup transition
            //*************************************************************
            if (ChapterNum<1) {
                if (Diaporama->ApplicationConfig->RandomTransition) {
                    qsrand(QTime(0,0,0,0).msecsTo(QTime::currentTime()));
                    int Random=qrand();
                    Random=int(double(IconList.List.count())*(double(Random)/double(RAND_MAX)));
                    if (Random<IconList.List.count()) {
                        Diaporama->List[CurIndex]->TransitionFamilly=IconList.List[Random].TransitionFamilly;
                        Diaporama->List[CurIndex]->TransitionSubType=IconList.List[Random].TransitionSubType;
                    }
                } else {
                    Diaporama->List[CurIndex]->TransitionFamilly=Diaporama->ApplicationConfig->DefaultTransitionFamilly;
                    Diaporama->List[CurIndex]->TransitionSubType=Diaporama->ApplicationConfig->DefaultTransitionSubType;
                }
                Diaporama->List[CurIndex]->TransitionDuration=Diaporama->ApplicationConfig->DefaultTransitionDuration;
            } else {
                // No transition for chapter > 1
                Diaporama->List[CurIndex]->TransitionFamilly =TRANSITIONFAMILLY_BASE;
                Diaporama->List[CurIndex]->TransitionSubType =0;
                Diaporama->List[CurIndex]->TransitionDuration=0;
            }
            if (ChapterNum>=0) {
                // But keep chapter information
                Diaporama->List[CurIndex]->StartNewChapter   =true;
            }

            // Compute Optimisation Flags
            for (int aa=0;aa<Diaporama->List[CurIndex]->List.count();aa++)
                for (int bb=0;bb<Diaporama->List[CurIndex]->List[aa]->ShotComposition.List.count();bb++)
                    Diaporama->List[CurIndex]->List[aa]->ShotComposition.List[bb]->ComputeOptimisationFlags(aa>0?Diaporama->List[CurIndex]->List[aa-1]->ShotComposition.List[bb]:NULL);

            // Inc NextIndexKey
            DiaporamaObject->NextIndexKey++;

            // Generate slide thumbs
            int ThumbWidth      =Diaporama->GetWidthForHeight(ApplicationConfig->TimelineHeight/2-4)+36+5;
            int NewThumbWidth   =ThumbWidth-36-6;
            int NewThumbHeight  =Diaporama->GetHeightForWidth(NewThumbWidth);
            int BarWidth        =(ThumbWidth-NewThumbWidth)/2;
            int VideoThumbWidth =NewThumbWidth-BarWidth*2;
            int VideoThumbHeight=Diaporama->GetHeightForWidth(VideoThumbWidth);

            if (Video) Diaporama->List[CurIndex]->DrawThumbnail(VideoThumbWidth,VideoThumbHeight,NULL,0,0,0);
                else Diaporama->List[CurIndex]->DrawThumbnail(NewThumbWidth,NewThumbHeight,NULL,0,0,0);

            // Set title flag
            SetModifyFlag(true);
        }
        CurIndex++;
        QTimer::singleShot(LATENCY,this,SLOT(DoAddFile()));
    }
    QApplication::restoreOverrideCursor();
}
//====================================================================================================================
// Define a music playlist (Drag & drop or browser contextual menu)
//====================================================================================================================

void MainWindow::s_Action_DoUseAsPlayList() {
    if (!DlgWorkingTaskDialog) return;
    if ((MusicFileList.count()==0)||(CancelAction)) {
        if (DlgWorkingTaskDialog) {
            DlgWorkingTaskDialog->close();
            delete DlgWorkingTaskDialog;
            DlgWorkingTaskDialog=NULL;
        }
        MusicFileList.clear();
        Diaporama->UpdateCachedInformation();
        ui->timeline->setUpdatesEnabled(false);
        ui->timeline->setUpdatesEnabled(true);
        return;
    }

    if ((CurIndex>=0)&&(CurIndex<Diaporama->List.count())) {
        if (!Diaporama->List[CurIndex]->MusicType) {
            Diaporama->List[CurIndex]->MusicType=true;
            Diaporama->List[CurIndex]->MusicPause=false;
            Diaporama->List[CurIndex]->MusicReduceVolume=false;
        }
        while ((!CancelAction)&&(MusicFileList.count()>0)) {
            QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
            QString NewFile=MusicFileList.takeFirst();
            DlgWorkingTaskDialog->DisplayText(QFileInfo(NewFile).fileName());
            DlgWorkingTaskDialog->DisplayProgress(DlgWorkingTaskDialog->MaxValue+DlgWorkingTaskDialog->AddValue-MusicFileList.count());
            int CurMusIndex=Diaporama->List[CurIndex]->MusicList.count();
            Diaporama->List[CurIndex]->MusicList.insert(CurMusIndex,new cMusicObject(ApplicationConfig));
            bool ModifyFlag=false;
            if (!Diaporama->List[CurIndex]->MusicList[CurMusIndex]->GetInformationFromFile(NewFile,NULL,&ModifyFlag)&&(!Diaporama->List[CurIndex]->MusicList[CurMusIndex]->CheckFormatValide(this))) {
                Diaporama->List[CurIndex]->MusicList.removeAt(CurMusIndex);
            } else {
                DlgWorkingTaskDialog->DisplayText2(QApplication::translate("MainWindow","Analyse file:"));
                QList<qreal> Peak,Moyenne;
                DlgWorkingTaskDialog->TimerProgress=0;
                if (!Diaporama->List[CurIndex]->MusicList[CurMusIndex]->IsComputedAudioDuration)
                    Diaporama->List[CurIndex]->MusicList[CurMusIndex]->DoAnalyseSound(&Peak,&Moyenne,&CancelAction,&DlgWorkingTaskDialog->TimerProgress);
                DlgWorkingTaskDialog->StopText2();
                Diaporama->List[CurIndex]->MusicList[CurMusIndex]->EndPos=Diaporama->List[CurIndex]->MusicList[CurMusIndex]->GetRealDuration();
            }
            SetModifyFlag(true);
            QApplication::restoreOverrideCursor();
        }
    }
    QTimer::singleShot(LATENCY,this,SLOT(s_Action_DoUseAsPlayList()));
}

//====================================================================================================================
void MainWindow::s_VideoPlayer_VolumeChanged() {
    #if QT_VERSION >= 0x050000
    if (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER) ui->preview2->audio_outputStream->setVolume(ApplicationConfig->PreviewSoundVolume);
        else ui->preview->audio_outputStream->setVolume(ApplicationConfig->PreviewSoundVolume);
    #endif
}
//====================================================================================================================

void MainWindow::s_VideoPlayer_SaveImageEvent() {
    if (ForcePause(SLOT(s_VideoPlayer_SaveImageEvent()))) return;
    QStringList Size;
    QMenu *ContextMenu=new QMenu(this);
    for (int i=0;i<NBR_SIZEDEF;i++)
        Size.append(QString("%1x%2").arg(DefImageFormat[0][ApplicationConfig->ImageGeometry][i].Width).arg(Diaporama->GetHeightForWidth(DefImageFormat[0][ApplicationConfig->ImageGeometry][i].Width)));

    // Sort list
    for (int i=0;i<Size.count();i++) {
        for (int j=0;j<Size.count()-1;j++) {
            int a=Size[j].left(Size[j].indexOf("x")).toInt();
            int b=Size[j+1].left(Size[j+1].indexOf("x")).toInt();
            if (a>b) Size.swap(j,j+1);
        }
    }

    for (int i=0;i<Size.count();i++) if (Size[i]!="0x0") {
        QAction *UpdateAction=new QAction(QApplication::translate("MainWindow","Capture the image ")+Size[i],this);
        UpdateAction->setFont(QFont("Sans Serif",9));
        ContextMenu->addAction(UpdateAction);
    }
    QAction *Ret=ContextMenu->exec(QCursor::pos());
    if (Ret!=NULL) {
        QString Format=Ret->text().mid(QApplication::translate("MainWindow","Capture the image ").length());
        int Width =Format.left(Format.indexOf("x")).toInt();
        int Height=Format.mid(Format.indexOf("x")+1).toInt();
        QString OutputFileName=QDir::toNativeSeparators(ApplicationConfig->SettingsTable->GetTextValue(QString("%1_path").arg(BrowserTypeDef[BROWSER_TYPE_CAPTUREIMAGE].BROWSERString),DefaultProjectPath));
        QString Filter="PNG (*.png)";
        if (!OutputFileName.endsWith(QDir::separator())) OutputFileName=OutputFileName+QDir::separator();
        OutputFileName=OutputFileName+QApplication::translate("MainWindow","Capture image");
        OutputFileName=QFileDialog::getSaveFileName(this,QApplication::translate("MainWindow","Select destination file"),OutputFileName,"PNG (*.png);;JPG (*.jpg)",&Filter);
        if (OutputFileName!="") {
            QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
            if (ApplicationConfig->RememberLastDirectories) ApplicationConfig->SettingsTable->SetTextValue(QString("%1_path").arg(BrowserTypeDef[BROWSER_TYPE_CAPTUREIMAGE].BROWSERString),QFileInfo(OutputFileName).absolutePath());     // Keep folder for next use
            if ((Filter.toLower().indexOf("png")!=-1)&&(!OutputFileName.endsWith(".png"))) OutputFileName=OutputFileName+".png";
            if ((Filter.toLower().indexOf("jpg")!=-1)&&(!OutputFileName.endsWith(".jpg"))) OutputFileName=OutputFileName+".jpg";
            cDiaporamaObjectInfo *Frame=new cDiaporamaObjectInfo(NULL,Diaporama->CurrentPosition,Diaporama,1,false);
            QList<cCompositionObjectContext *> PreparedTransitBrushList;
            QList<cCompositionObjectContext *> PreparedBrushList;
            if ((Frame->IsTransition)&&(Frame->TransitObject)) Diaporama->CreateObjectContextList(Frame,Width,Height,false,false,true,PreparedTransitBrushList,Diaporama);
            Diaporama->CreateObjectContextList(Frame,Width,Height,true,false,true,PreparedBrushList,Diaporama);
            Diaporama->LoadSources(Frame,Width,Height,false,true,PreparedTransitBrushList,PreparedBrushList);
            Diaporama->DoAssembly(ComputePCT(Frame->CurrentObject?Frame->CurrentObject->GetSpeedWave():0,Frame->TransitionPCTDone),Frame,Width,Height);
            Frame->RenderedImage.save(OutputFileName,0,100);
            QApplication::restoreOverrideCursor();
            delete Frame;
        }
    }
    delete ContextMenu;
}

//====================================================================================================================

void MainWindow::s_Event_ContextualMenu(QMouseEvent *) {
    if (ForcePause(SLOT(s_Event_ContextualMenu()))) return;

    int         Current=ui->timeline->CurrentSelected();
    QList<int>  SlideList;

    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    ui->timeline->CurrentSelectionList(&SlideList);

    QMenu *ContextMenu=new QMenu(this);
    if (SlideList.count()==1) {
        // Single slide selection
        ContextMenu->addAction(ui->actionAddTitle);
        ContextMenu->addAction(ui->actionAddFiles);
        ContextMenu->addAction(ui->actionAddProject);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionEdit_background);
        ContextMenu->addAction(ui->actionEdit_object);
        ContextMenu->addAction(ui->actionEdit_music);
        ContextMenu->addAction(ui->actionEdit_object_in_transition);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionCut);
        ContextMenu->addAction(ui->actionCopy);
        ContextMenu->addAction(ui->actionPaste);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionRemove);
        if ((ui->timeline->ClickedSlide>=0)&&(ui->timeline->ClickedSlide<Diaporama->List.count())) {
            bool AddSep=false;
            if ((Diaporama->List[ui->timeline->ClickedSlide]->MusicType)&&(ui->timeline->MusicPart))  {
                ContextMenu->addSeparator();
                AddSep=true;
                ContextMenu->addAction(ui->actionRemovePlaylist);
            }
            int          CurrentCountObjet   =0;
            int64_t      StartPosition       =0;
            cMusicObject *CurMusic=Diaporama->GetMusicObject(ui->timeline->ClickedSlide,StartPosition,&CurrentCountObjet);
            if ((CurMusic)&&(StartPosition>=(QTime(0,0,0,0).msecsTo(CurMusic->GetDuration())-Diaporama->List[ui->timeline->ClickedSlide]->TransitionDuration))) CurMusic=NULL;
            if (CurMusic) {
                if (ui->timeline->MusicPart) {
                    if (!AddSep) {
                        ContextMenu->addSeparator();
                        AddSep=true;
                    }
                    if (Diaporama->List[ui->timeline->ClickedSlide]->MusicPause) ContextMenu->addAction(ui->actionPlaylistToPlay);
                        else                                                     ContextMenu->addAction(ui->actionPlaylistToPause);
                }
                if (!AddSep) ContextMenu->addSeparator();
                ContextMenu->addAction(ui->actionAdjustOnMusic);
            }
        }
    } else if (SlideList.count()>1) {
        // Multiple slide selection
        ContextMenu->addAction(ui->actionAddTitle);
        ContextMenu->addAction(ui->actionAddFiles);
        ContextMenu->addAction(ui->actionAddProject);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionCut);
        ContextMenu->addAction(ui->actionCopy);
        ContextMenu->addAction(ui->actionPaste);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionSet_first_shot_duration);
        ContextMenu->addAction(ui->actionReset_background);
        ContextMenu->addAction(ui->actionReset_musictrack);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionRemove_transition);
        ContextMenu->addAction(ui->actionSelect_a_transition);
        ContextMenu->addAction(ui->actionSet_transition_duration);
        ContextMenu->addAction(ui->actionRandomize_transition);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionRemove);

        int64_t      StartPosition=0;
        cMusicObject *CurMusic    =Diaporama->GetMusicObject(SlideList.at(0),StartPosition,NULL,NULL);
        if (CurMusic) {
            ContextMenu->addSeparator();
            ContextMenu->addAction(ui->actionAdjustOnMusic);
        }
    }
    ContextMenu->exec(QCursor::pos());
    delete ContextMenu;
}

//====================================================================================================================

void MainWindow::s_Action_RemovePlaylist() {
    int Current=ui->timeline->ClickedSlide;
    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    while (Diaporama->List[Current]->MusicList.count()) Diaporama->List[Current]->MusicList.removeAt(0);
    Diaporama->List[Current]->MusicType=false;
    SetModifyFlag(true);
    Diaporama->UpdateCachedInformation();
    ui->timeline->setUpdatesEnabled(false);
    ui->timeline->setUpdatesEnabled(true);
}

//====================================================================================================================

void MainWindow::s_Action_PlaylistToPlay() {
    int Current=ui->timeline->ClickedSlide;
    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    Diaporama->List[Current]->MusicPause=false;
    SetModifyFlag(true);
    Diaporama->UpdateCachedInformation();
    ui->timeline->setUpdatesEnabled(false);
    ui->timeline->setUpdatesEnabled(true);
}

//====================================================================================================================

void MainWindow::s_Action_PlaylistToPause() {
    int Current=ui->timeline->ClickedSlide;
    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    Diaporama->List[Current]->MusicPause=true;
    SetModifyFlag(true);
    Diaporama->UpdateCachedInformation();
    ui->timeline->setUpdatesEnabled(false);
    ui->timeline->setUpdatesEnabled(true);
}

//====================================================================================================================

void MainWindow::s_Action_AdjustOnMusic() {
    int         Current=ui->timeline->CurrentSelected();
    QList<int>  SlideList;

    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    ui->timeline->CurrentSelectionList(&SlideList);

    // Ensure first slide of the selection have music
    int64_t      StartPosition=0;
    cMusicObject *CurMusic    =Diaporama->GetMusicObject(SlideList.at(0),StartPosition,NULL,NULL);
    if (CurMusic) {
        // Ensure all slides in selection are concurrent
        bool IsConcurrent=true;
        bool MusicRestart=false;
        for (int i=0;i<SlideList.count();i++) {
            if ((i<SlideList.count()-1)&&(SlideList[i+1]-SlideList[i]>1)) IsConcurrent=false;
            if ((i>0)&&(Diaporama->List[SlideList[i]]->MusicType)) MusicRestart=true;
        }
        if (!IsConcurrent) {
            CustomMessageBox(this,QMessageBox::Information,QApplication::translate("MainWindow","Adjust slide duration on music"),
                QApplication::translate("MainWindow","To adjust duration of multiple slides on music, selected slides must be adjacent"));
            return;
        }
        if (MusicRestart) {
            CustomMessageBox(this,QMessageBox::Information,QApplication::translate("MainWindow","Adjust slide duration on music"),
                QApplication::translate("MainWindow","To adjust duration of multiple slides on music, no slides can define a new playlist (except the first)"));
            return;
        }
        DlgAdjustToSound Dlg(&SlideList,Diaporama,ApplicationConfig,this);
        Dlg.InitDialog();
        if (Dlg.exec()==0) {
            SetModifyFlag(true);
            Diaporama->UpdateCachedInformation();
            ui->timeline->setUpdatesEnabled(false);
            ui->timeline->setUpdatesEnabled(true);
        }
    }
}

//====================================================================================================================

void MainWindow::s_Action_EditObject() {
    if (ForcePause(SLOT(s_Action_EditObject()))) return;

    int         Current=ui->timeline->CurrentSelected();
    QList<int>  SlideList;

    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    ui->timeline->CurrentSelectionList(&SlideList);

    QMenu *ContextMenu=new QMenu(this);
    if (SlideList.count()==1) {
        // Single slide selection
        ContextMenu->addAction(ui->actionEdit_background);
        ContextMenu->addAction(ui->actionEdit_object);
        ContextMenu->addAction(ui->actionEdit_music);
        ContextMenu->addAction(ui->actionEdit_object_in_transition);
    } else if (SlideList.count()>1) {
        // Multiple slide selection
        ContextMenu->addAction(ui->actionSet_first_shot_duration);
        ContextMenu->addAction(ui->actionReset_background);
        ContextMenu->addAction(ui->actionReset_musictrack);
        ContextMenu->addSeparator();
        ContextMenu->addAction(ui->actionRemove_transition);
        ContextMenu->addAction(ui->actionSelect_a_transition);
        ContextMenu->addAction(ui->actionSet_transition_duration);
        ContextMenu->addAction(ui->actionRandomize_transition);
    }
    ContextMenu->exec(QCursor::pos());
    delete ContextMenu;
    ui->ActionEdit_BT->setDown(false);
    ui->ActionEdit_BT_2->setDown(false);
}

//====================================================================================================================

void MainWindow::s_Action_RemoveObject() {
    if (ForcePause(SLOT(s_Action_RemoveObject()))) return;
    ui->ActionRemove_BT->setDown(false);
    ui->ActionRemove_BT_2->setDown(false);

    int         Current=ui->timeline->CurrentSelected();
    QList<int>  SlideList;

    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    ui->timeline->CurrentSelectionList(&SlideList);
    if (SlideList.count()==1) {
        if ((ApplicationConfig->AskUserToRemove)&&(CustomMessageBox(this,QMessageBox::Question,QApplication::translate("MainWindow","Remove slide"),QApplication::translate("MainWindow","Are you sure you want to remove this slide?"),
                                  QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)==QMessageBox::No)) return;

    } else {
        if ((ApplicationConfig->AskUserToRemove)&&(CustomMessageBox(this,QMessageBox::Question,QApplication::translate("MainWindow","Remove multiple slides"),QApplication::translate("MainWindow","Are you sure you want to remove these %1 slides?").arg(SlideList.count()),
                                  QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)==QMessageBox::No)) return;
    }

    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
    ui->timeline->setUpdatesEnabled(false);
    FLAGSTOPITEMSELECTION=true;
    while (SlideList.count()>0) {
        int ToRemove=SlideList.takeLast();
        delete Diaporama->List.takeAt(ToRemove);
        if (Current>=ToRemove) Current--;
    }
    if (Current<0) Current=0;
    if (Current>=Diaporama->List.count()) Current=Diaporama->List.count()-1;
    Diaporama->UpdateInformation();
    ui->timeline->ResetDisplay(Current);    // FLAGSTOPITEMSELECTION is set to false by ResetDisplay
    (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Current)+Diaporama->GetTransitionDuration(Current));
    SetModifyFlag(true);
    AdjustRuller();
    ui->timeline->setUpdatesEnabled(true);
    QApplication::restoreOverrideCursor();
}

//====================================================================================================================

void MainWindow::s_Action_CutToClipboard() {
    if (ForcePause(SLOT(s_Action_CutToClipboard()))) return;
    ui->ActionCut_BT->setDown(false);
    ui->ActionCut_BT_2->setDown(false);

    int         Current=ui->timeline->CurrentSelected();
    QList<int>  SlideList;

    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    ui->timeline->CurrentSelectionList(&SlideList);

    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));

    // Create xml document and root
    QDomDocument Object=QDomDocument(APPLICATION_NAME);
    QDomElement  root  =Object.createElement("CLIPBOARD");
    root.setAttribute("SlideNumber",SlideList.count());
    for (int i=0;i<SlideList.count();i++) {
        QDomElement  SlideClipboard=Object.createElement(QString("CLIPBOARD_%1").arg(i));
        Diaporama->List[SlideList[i]]->SaveToXML(SlideClipboard,"CLIPBOARD-OBJECT",Diaporama->ProjectFileName,true,NULL,NULL,false);
        root.appendChild(SlideClipboard);
    }
    Object.appendChild(root);

    // Transfert xml document to clipboard
    QMimeData *SlideData=new QMimeData();
    SlideData->setData("ffDiaporama/slide",Object.toByteArray());
    QApplication::clipboard()->setMimeData(SlideData);

    s_Action_RemoveObject();   // RefreshControls() done by s_Action_RemoveObject()
    QApplication::restoreOverrideCursor();
}

//====================================================================================================================

void MainWindow::s_Action_CopyToClipboard() {
    if (ForcePause(SLOT(s_Action_CopyToClipboard()))) return;
    ui->ActionCopy_BT->setDown(false);
    ui->ActionCopy_BT_2->setDown(false);

    int         Current=ui->timeline->CurrentSelected();
    QList<int>  SlideList;

    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    ui->timeline->CurrentSelectionList(&SlideList);

    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));

    // Create xml document and root
    QDomDocument Object=QDomDocument(APPLICATION_NAME);
    QDomElement  root  =Object.createElement("CLIPBOARD");
    root.setAttribute("SlideNumber",SlideList.count());
    for (int i=0;i<SlideList.count();i++) {
        QDomElement  SlideClipboard=Object.createElement(QString("CLIPBOARD_%1").arg(i));
        Diaporama->List[SlideList[i]]->SaveToXML(SlideClipboard,"CLIPBOARD-OBJECT",Diaporama->ProjectFileName,true,NULL,NULL,false);
        root.appendChild(SlideClipboard);
    }
    Object.appendChild(root);

    // Transfert xml document to clipboard
    QMimeData *SlideData=new QMimeData();
    SlideData->setData("ffDiaporama/slide",Object.toByteArray());
    QApplication::clipboard()->setMimeData(SlideData);

    QApplication::restoreOverrideCursor();
}

//====================================================================================================================

void MainWindow::s_Action_PasteFromClipboard() {
    if (ForcePause(SLOT(s_Action_PasteFromClipboard()))) return;
    ui->ActionPaste_BT->setDown(false);
    ui->ActionPaste_BT_2->setDown(false);

    // Calc position of new object depending on ApplicationConfig->AppendObject
    int SavedCurIndex=ApplicationConfig->AppendObject?Diaporama->List.count():Diaporama->CurrentCol;
    int CurIndex=Diaporama->List.count()!=0?SavedCurIndex+1:0;
    if (SavedCurIndex==Diaporama->List.count()) SavedCurIndex--;

    QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));

    ClipboardLock=true;

    QClipboard      *Clipboard=QApplication::clipboard();
    const QMimeData *Mime     =Clipboard?Clipboard->mimeData():NULL;

    if ((Mime)&&(Mime->hasImage())) {
        QImage ImageClipboard=Clipboard->image();
        if (ImageClipboard.isNull()) {
            CustomMessageBox(NULL,QMessageBox::Critical,QApplication::translate("MainWindow","Error","Error message"),
                             QApplication::translate("MainWindow","Error getting image from clipboard","Error message"),QMessageBox::Close);
        } else {
            ui->timeline->setUpdatesEnabled(false);

            cImageClipboard *MediaObject=new cImageClipboard(ApplicationConfig);
            MediaObject->CreatDateTime=QDateTime().currentDateTime();
            ApplicationConfig->SlideThumbsTable->SetThumbs(&MediaObject->RessourceKey,ImageClipboard);
            MediaObject->GetInformationFromFile("",NULL,NULL,-1);

            // Create Diaporama Object and load first image
            Diaporama->List.insert(CurIndex,new cDiaporamaObject(Diaporama));
            cDiaporamaObject *DiaporamaObject       =Diaporama->List[CurIndex];
            DiaporamaObject->List[0]->Parent        =DiaporamaObject;
            DiaporamaObject->List[0]->StaticDuration=ApplicationConfig->NoShotDuration;
            DiaporamaObject->Parent                 =Diaporama;

            // Create and append a composition block to the object list
            DiaporamaObject->ObjectComposition.List.append(new cCompositionObject(COMPOSITIONTYPE_OBJECT,DiaporamaObject->NextIndexKey,ApplicationConfig,&DiaporamaObject->ObjectComposition));
            cCompositionObject *CompositionObject   =DiaporamaObject->ObjectComposition.List[DiaporamaObject->ObjectComposition.List.count()-1];
            cBrushDefinition   *CurrentBrush        =CompositionObject->BackgroundBrush;

            // Set CompositionObject to full screen
            CompositionObject->x=0;
            CompositionObject->y=0;
            CompositionObject->w=1;
            CompositionObject->h=1;

            // Set other values
            CompositionObject->Text     ="";
            CompositionObject->PenSize  =0;
            CurrentBrush->BrushType     =BRUSHTYPE_IMAGEDISK;
            DiaporamaObject->SlideName  =MediaObject->GetFileTypeStr();

            // Transfert mediafile to brush and chapter management
            CurrentBrush->MediaObject=MediaObject;

            // Apply Styles for texte
            CompositionObject->ApplyTextStyle(ApplicationConfig->StyleTextCollection.GetStyleDef(ApplicationConfig->StyleTextCollection.DecodeString(ApplicationConfig->DefaultBlockSL_IMG_TextST)));

            // Apply Styles for shape
            CompositionObject->ApplyBlockShapeStyle(ApplicationConfig->StyleBlockShapeCollection.GetStyleDef(ApplicationConfig->StyleBlockShapeCollection.DecodeString(ApplicationConfig->DefaultBlockSL_IMG_ShapeST)));

            // Apply styles for coordinates
            qreal ProjectGeometry=qreal(Diaporama->ImageGeometry==GEOMETRY_4_3?1440:Diaporama->ImageGeometry==GEOMETRY_16_9?1080:Diaporama->ImageGeometry==GEOMETRY_40_17?816:1920)/qreal(1920);
            CurrentBrush->ApplyAutoFraming(ApplicationConfig->DefaultBlockSL[CurrentBrush->GetImageType()].AutoFraming,ProjectGeometry);
            CompositionObject->ApplyAutoCompoSize(ApplicationConfig->DefaultBlockSL[CurrentBrush->GetImageType()].AutoCompo,Diaporama->ImageGeometry);

            // Now create and append a shot composition block to all shot
            for (int i=0;i<DiaporamaObject->List.count();i++) {
                DiaporamaObject->List[i]->ShotComposition.List.append(new cCompositionObject(COMPOSITIONTYPE_SHOT,CompositionObject->IndexKey,ApplicationConfig,&DiaporamaObject->List[i]->ShotComposition));
                DiaporamaObject->List[i]->ShotComposition.List[DiaporamaObject->List[i]->ShotComposition.List.count()-1]->CopyFromCompositionObject(CompositionObject);
            }

            // Setup transition
            if (Diaporama->ApplicationConfig->RandomTransition) {
                qsrand(QTime(0,0,0,0).msecsTo(QTime::currentTime()));
                int Random=qrand();
                Random=int(double(IconList.List.count())*(double(Random)/double(RAND_MAX)));
                if (Random<IconList.List.count()) {
                    Diaporama->List[CurIndex]->TransitionFamilly=IconList.List[Random].TransitionFamilly;
                    Diaporama->List[CurIndex]->TransitionSubType=IconList.List[Random].TransitionSubType;
                }
            } else {
                Diaporama->List[CurIndex]->TransitionFamilly=Diaporama->ApplicationConfig->DefaultTransitionFamilly;
                Diaporama->List[CurIndex]->TransitionSubType=Diaporama->ApplicationConfig->DefaultTransitionSubType;
            }
            Diaporama->List[CurIndex]->TransitionDuration=Diaporama->ApplicationConfig->DefaultTransitionDuration;

            // Compute Optimisation Flags
            for (int aa=0;aa<Diaporama->List[CurIndex]->List.count();aa++)
                for (int bb=0;bb<Diaporama->List[CurIndex]->List[aa]->ShotComposition.List.count();bb++)
                    Diaporama->List[CurIndex]->List[aa]->ShotComposition.List[bb]->ComputeOptimisationFlags(aa>0?Diaporama->List[CurIndex]->List[aa-1]->ShotComposition.List[bb]:NULL);

            // Inc NextIndexKey
            DiaporamaObject->NextIndexKey++;

            // Generate slide thumbs
            int ThumbWidth      =Diaporama->GetWidthForHeight(ApplicationConfig->TimelineHeight/2-4)+36+5;
            int NewThumbWidth   =ThumbWidth-36-6;
            int NewThumbHeight  =Diaporama->GetHeightForWidth(NewThumbWidth);

            Diaporama->List[CurIndex]->DrawThumbnail(NewThumbWidth,NewThumbHeight,NULL,0,0,0);

            // Set title flag
            SetModifyFlag(true);
            ui->timeline->ResetDisplay(CurIndex);
            AdjustRuller();
            ui->timeline->setUpdatesEnabled(true);
        }

    } else if ((Mime)&&(Mime->hasFormat("ffDiaporama/slide"))) {

        QDomDocument Object=QDomDocument(APPLICATION_NAME);
        Object.setContent(Mime->data("ffDiaporama/slide"));

        if ((Object.elementsByTagName("CLIPBOARD").length()>0)&&(Object.elementsByTagName("CLIPBOARD").item(0).isElement()==true)) {
            QDomElement root        =Object.elementsByTagName("CLIPBOARD").item(0).toElement();
            int         SlideNumber =0;

            ui->timeline->setUpdatesEnabled(false);

            if (root.hasAttribute("SlideNumber")) SlideNumber=root.attribute("SlideNumber").toInt();
            for (int i=0;i<SlideNumber;i++) {
                if ((root.elementsByTagName(QString("CLIPBOARD_%1").arg(i)).length()>0)&&(root.elementsByTagName(QString("CLIPBOARD_%1").arg(i)).item(0).isElement()==true)) {
                    QDomElement SlideClipboard=root.elementsByTagName(QString("CLIPBOARD_%1").arg(i)).item(0).toElement();
                    Diaporama->List.insert(CurIndex,new cDiaporamaObject(Diaporama));
                    Diaporama->List[CurIndex]->LoadFromXML(SlideClipboard,"CLIPBOARD-OBJECT","",NULL,NULL,false);   // No duplicate ressource on paste
                    CurIndex++;
                }
            }
            // Set title flag
            SetModifyFlag(true);

            // Set current selection to first new object
            ui->timeline->ResetDisplay(SavedCurIndex+1);
            AdjustRuller();
            ui->timeline->setUpdatesEnabled(true);
        }
    }
    ClipboardLock=false;

    QApplication::restoreOverrideCursor();
}

//====================================================================================================================

void MainWindow::s_Event_ClipboardChanged() {
    if (!ClipboardLock) {
        ClipboardLock=true;
        QClipboard      *Clipboard=QApplication::clipboard();
        const QMimeData *Mime     =Clipboard?Clipboard->mimeData():NULL;
        bool            Enable    =(Mime)&&((Mime->hasFormat("ffDiaporama/slide"))||(Mime->hasImage()));
        ui->ActionPaste_BT->setEnabled(Enable);
        ui->ActionPaste_BT_2->setEnabled(Enable);
        ui->actionPaste->setEnabled(Enable);
        ClipboardLock=false;
    }
}

//====================================================================================================================
// Adjust preview ruller depending on current Disporama Currentcol
//====================================================================================================================

void MainWindow::AdjustRuller(int CurIndex) {
    Diaporama->UpdateCachedInformation();
    ui->preview->SetActualDuration(Diaporama->GetDuration());
    ui->preview2->SetActualDuration(Diaporama->GetDuration());
    if (CurIndex!=-1) {
        FLAGSTOPITEMSELECTION=true;
        ui->timeline->AddObjectToTimeLine(CurIndex);
        FLAGSTOPITEMSELECTION=false;
        (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
    } else ui->timeline->repaint();
    if (Diaporama->List.count()>0)  {
        Diaporama->ProjectInfo->SetGivenDuration(QTime(0,0,0,0).addMSecs(Diaporama->GetDuration()));
        Diaporama->ProjectInfo->NbrSlide=Diaporama->List.count();
        ui->preview->SetStartEndPos(
                Diaporama->GetObjectStartPosition(Diaporama->CurrentCol),                                                           // Current slide
                Diaporama->List[Diaporama->CurrentCol]->CachedDuration,
                (Diaporama->CurrentCol>0)?Diaporama->GetObjectStartPosition(Diaporama->CurrentCol-1):((Diaporama->CurrentCol==0)?0:-1),                            // Previous slide
                (Diaporama->CurrentCol>0)?Diaporama->List[Diaporama->CurrentCol-1]->CachedDuration:((Diaporama->CurrentCol==0)?Diaporama->GetTransitionDuration(Diaporama->CurrentCol):0),
                Diaporama->CurrentCol<(Diaporama->List.count()-1)?Diaporama->GetObjectStartPosition(Diaporama->CurrentCol+1):-1,    // Next slide
                Diaporama->CurrentCol<(Diaporama->List.count()-1)?Diaporama->List[Diaporama->CurrentCol+1]->CachedDuration:0);
        ui->preview2->SetStartEndPos(
                Diaporama->GetObjectStartPosition(Diaporama->CurrentCol),                                                           // Current slide
                Diaporama->List[Diaporama->CurrentCol]->CachedDuration,
                (Diaporama->CurrentCol>0)?Diaporama->GetObjectStartPosition(Diaporama->CurrentCol-1):((Diaporama->CurrentCol==0)?0:-1),                            // Previous slide
                (Diaporama->CurrentCol>0)?Diaporama->List[Diaporama->CurrentCol-1]->CachedDuration:((Diaporama->CurrentCol==0)?Diaporama->GetTransitionDuration(Diaporama->CurrentCol):0),
                Diaporama->CurrentCol<(Diaporama->List.count()-1)?Diaporama->GetObjectStartPosition(Diaporama->CurrentCol+1):-1,    // Next slide
                Diaporama->CurrentCol<(Diaporama->List.count()-1)?Diaporama->List[Diaporama->CurrentCol+1]->CachedDuration:0);
    } else {
        ui->preview->SetStartEndPos(0,0,-1,0,-1,0);
        ui->preview2->SetStartEndPos(0,0,-1,0,-1,0);
    }
    RefreshControls();
    UpdateChapterInfo();
}

//====================================================================================================================

void MainWindow::s_Browser_OpenFile() {
    cBaseMediaFile *Media=ui->Browser->GetCurrentMediaFile();
    if (Media) {
        if ((Media->ObjectType==OBJECTTYPE_IMAGEFILE)||(Media->ObjectType==OBJECTTYPE_VIDEOFILE)||(Media->ObjectType==OBJECTTYPE_MUSICFILE)||(Media->ObjectType==OBJECTTYPE_THUMBNAIL)) {
            QDesktopServices::openUrl(QUrl().fromLocalFile(Media->FileName()));
        } else if (Media->ObjectType==OBJECTTYPE_FFDFILE) {
            FileForIO=Media->FileName();
            int Ret=QMessageBox::Yes;
            if (Diaporama->IsModify) {
                Ret=CustomMessageBox(this,QMessageBox::Question,QApplication::translate("MainWindow","Open project"),
                    QApplication::translate("MainWindow","Current project has been modified.\nDo you want to save-it ?"),
                    QMessageBox::Cancel|QMessageBox::Yes|QMessageBox::No,QMessageBox::Yes);
                if (Ret==QMessageBox::Yes) s_Action_Save();
            }
            if (Ret!=QMessageBox::Cancel) {
                ToStatusBar(QApplication::translate("MainWindow","Open file :")+QFileInfo(FileForIO).fileName());
                QTimer::singleShot(LATENCY,this,SLOT(DoOpenFile()));
            }
        }
        delete Media;
    }
}

//====================================================================================================================

void MainWindow::s_Browser_AddFiles() {
    QList<cBaseMediaFile*> MediaList;
    ui->Browser->GetCurrentSelectedMediaFile(&MediaList);
    if (MediaList.count()>0) {
        // Query the list to known if it is music
        MusicFileList.clear();
        for (int i=0;i<MediaList.count();i++) if (MediaList[i]->ObjectType==OBJECTTYPE_MUSICFILE) MusicFileList.append(QFileInfo(MediaList[i]->FileName()).absoluteFilePath());

        if (DlgWorkingTaskDialog) {
            DlgWorkingTaskDialog->close();
            delete DlgWorkingTaskDialog;
            DlgWorkingTaskDialog=NULL;
        }

        CancelAction                =false;
        CurrentLoadingProjectObject =0;

        if (MusicFileList.count()>0) {
            CurIndex     =Diaporama->CurrentCol;
            SavedCurIndex=Diaporama->CurrentCol;

            bool Continue=true;
            if (Diaporama->List[CurIndex]->MusicType) {
                if (Diaporama->List[CurIndex]->MusicList.count()>0) {
                    int Ret=CustomMessageBox(this,QMessageBox::Question,QApplication::translate("MainWindow","Add music file"),
                                              QApplication::translate("MainWindow","This slide already has a playlist. What to do?"),
                                              QMessageBox::Yes|QMessageBox::No|QMessageBox::Cancel, QMessageBox::Yes,
                                              QApplication::translate("MainWindow","Add to the current playlist"),
                                              QApplication::translate("MainWindow","Replace the current playlist"));
                    if (Ret==QMessageBox::Cancel) Continue=false; else if (Ret==QMessageBox::No) {
                        while (Diaporama->List[CurIndex]->MusicList.count()) Diaporama->List[CurIndex]->MusicList.removeAt(0);
                    }
                }
            }
            if (Continue) {
                // Open progress window
                CurrentLoadingProjectNbrObject=MusicFileList.count();
                DlgWorkingTaskDialog=new DlgWorkingTask(QApplication::translate("MainWindow","Add music file"),&CancelAction,ApplicationConfig,this);
                DlgWorkingTaskDialog->InitDialog();
                DlgWorkingTaskDialog->SetMaxValue(CurrentLoadingProjectNbrObject,0);
                ToStatusBar(QApplication::translate("MainWindow","Analyse file :")+QFileInfo(MusicFileList[0]).fileName());
                QTimer::singleShot(LATENCY,this,SLOT(s_Action_DoUseAsPlayList()));
                DlgWorkingTaskDialog->exec();

            }
        } else {
            // If it is not music object, then calc position of new object depending on ApplicationConfig->AppendObject
            if (ApplicationConfig->AppendObject) {
                SavedCurIndex   =Diaporama->List.count();
                CurIndex        =Diaporama->List.count();
            } else {
                SavedCurIndex=Diaporama->CurrentCol;
                CurIndex=Diaporama->List.count()!=0?SavedCurIndex+1:0;
                if (SavedCurIndex==Diaporama->List.count()) SavedCurIndex--;
            }
            FileList.clear();
            for (int i=0;i<MediaList.count();i++) FileList.append(MediaList[i]->FileName());

            // Open progress window
            CurrentLoadingProjectNbrObject=FileList.count();
            DlgWorkingTaskDialog=new DlgWorkingTask(QApplication::translate("MainWindow","Add files to project"),&CancelAction,ApplicationConfig,this);
            DlgWorkingTaskDialog->InitDialog();
            DlgWorkingTaskDialog->SetMaxValue(CurrentLoadingProjectNbrObject,0);
            ToStatusBar(QApplication::translate("MainWindow","Add file to project :")+QFileInfo(FileList[0]).fileName());
            QTimer::singleShot(LATENCY,this,SLOT(DoAddFile()));
            DlgWorkingTaskDialog->exec();
        }
        while (!MediaList.isEmpty()) delete MediaList.takeLast();
    }
}

//====================================================================================================================
// Actions contextual menu (on multiple selection)
//====================================================================================================================

void MainWindow::s_ActionMultiple_SetFirstShotDuration() {
    int         Current=ui->timeline->CurrentSelected();
    QList<int>  SlideList;
    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    ui->timeline->CurrentSelectionList(&SlideList);

    DlgSlideDuration Dlg(Diaporama->List[Diaporama->CurrentCol]->List[0]->StaticDuration,ApplicationConfig,this);
    Dlg.InitDialog();
    int Ret=Dlg.exec();
    if (Ret==0) {
        int64_t Duration=Dlg.Duration;
        for (int i=0;i<SlideList.count();i++)
            if (Diaporama->List[SlideList[i]]->GetAutoTSNumber()==-1) Diaporama->List[SlideList[i]]->List[0]->StaticDuration=Duration;
                else ToLog(LOGMSG_INFORMATION,"Do not set First Shot Duration to automatic slide");

        SetModifyFlag(true);
        (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
        AdjustRuller();
    }
}

//====================================================================================================================

void MainWindow::s_ActionMultiple_ResetBackground() {
    int         Current=ui->timeline->CurrentSelected();
    QList<int>  SlideList;
    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    ui->timeline->CurrentSelectionList(&SlideList);

    for (int i=0;i<SlideList.count();i++) {
        Diaporama->List[SlideList[i]]->BackgroundType=false; // Background type : false=same as precedent - true=new background definition
    }

    SetModifyFlag(true);
    (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
    AdjustRuller();
}

//====================================================================================================================

void MainWindow::s_ActionMultiple_ResetMusic() {
    int         Current=ui->timeline->CurrentSelected();
    QList<int>  SlideList;
    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    ui->timeline->CurrentSelectionList(&SlideList);

    for (int i=0;i<SlideList.count();i++) {
        Diaporama->List[SlideList[i]]->MusicType        = false;                        // Music type : false=same as precedent - true=new playlist definition
        Diaporama->List[SlideList[i]]->MusicPause       = false;                        // true if music is pause during this object
        Diaporama->List[SlideList[i]]->MusicReduceVolume= false;                        // true if volume if reduce by MusicReduceFactor
        while (Diaporama->List[SlideList[i]]->MusicList.count()) Diaporama->List[SlideList[i]]->MusicList.removeAt(0);
    }

    SetModifyFlag(true);
    (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
    AdjustRuller();
}

//====================================================================================================================

void MainWindow::s_ActionMultiple_RemoveTransition() {
    int         Current=ui->timeline->CurrentSelected();
    QList<int>  SlideList;
    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    ui->timeline->CurrentSelectionList(&SlideList);

    for (int i=0;i<SlideList.count();i++) {
        Diaporama->List[SlideList[i]]->TransitionFamilly=TRANSITIONFAMILLY_BASE;
        Diaporama->List[SlideList[i]]->TransitionSubType=0;
    }

    SetModifyFlag(true);
    (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
    AdjustRuller();
}

//====================================================================================================================

void MainWindow::s_ActionMultiple_SelectTransition() {
    int         Current=ui->timeline->CurrentSelected();
    QList<int>  SlideList;
    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    ui->timeline->CurrentSelectionList(&SlideList);

    DlgTransitionProperties Dlg(true,Diaporama->List[Diaporama->CurrentCol],ApplicationConfig,this);
    Dlg.InitDialog();
    int Ret=Dlg.exec();
    if (Ret==0) {
        TRFAMILLY Familly =Diaporama->List[Diaporama->CurrentCol]->TransitionFamilly;
        int       SubType =Diaporama->List[Diaporama->CurrentCol]->TransitionSubType;
        int64_t   Duration=Diaporama->List[Diaporama->CurrentCol]->TransitionDuration;
        for (int i=0;i<SlideList.count();i++) {
            Diaporama->List[SlideList[i]]->TransitionFamilly    =Familly;
            Diaporama->List[SlideList[i]]->TransitionSubType    =SubType;
            Diaporama->List[SlideList[i]]->TransitionDuration   =Duration;
        }
        SetModifyFlag(true);
        (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
        AdjustRuller();
    }
}

//====================================================================================================================

void MainWindow::s_ActionMultiple_SetTransitionDuration() {
    int         Current=ui->timeline->CurrentSelected();
    QList<int>  SlideList;
    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    ui->timeline->CurrentSelectionList(&SlideList);

    DlgTransitionDuration Dlg(Diaporama->List[Diaporama->CurrentCol]->TransitionDuration,ApplicationConfig,this);
    Dlg.InitDialog();
    int Ret=Dlg.exec();
    if (Ret==0) {
        int64_t Duration=Dlg.Duration;
        for (int i=0;i<SlideList.count();i++) {
            Diaporama->List[SlideList[i]]->TransitionDuration=Duration;
        }
        SetModifyFlag(true);
        (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
        AdjustRuller();
    }
}

//====================================================================================================================

void MainWindow::s_ActionMultiple_Randomize() {
    int         Current=ui->timeline->CurrentSelected();
    QList<int>  SlideList;
    if ((Current<0)||(Current>=Diaporama->List.count())) return;
    ui->timeline->CurrentSelectionList(&SlideList);

    qsrand(QTime(0,0,0,0).msecsTo(QTime::currentTime()));
    for (int i=0;i<SlideList.count();i++) {
        int Random=qrand();
        Random=int(double(IconList.List.count())*(double(Random)/double(RAND_MAX)));
        if (Random<IconList.List.count()) {
            Diaporama->List[SlideList[i]]->TransitionFamilly=IconList.List[Random].TransitionFamilly;
            Diaporama->List[SlideList[i]]->TransitionSubType=IconList.List[Random].TransitionSubType;
        } else {
            Diaporama->List[SlideList[i]]->TransitionFamilly=Diaporama->ApplicationConfig->DefaultTransitionFamilly;
            Diaporama->List[SlideList[i]]->TransitionSubType=Diaporama->ApplicationConfig->DefaultTransitionSubType;
        }
        if (Diaporama->List[SlideList[i]]->TransitionDuration==0) Diaporama->List[SlideList[i]]->TransitionDuration=Diaporama->ApplicationConfig->DefaultTransitionDuration;
    }

    SetModifyFlag(true);
    (ApplicationConfig->WindowDisplayMode==DISPLAYWINDOWMODE_PLAYER?ui->preview:ui->preview2)->SeekPlayer(Diaporama->GetObjectStartPosition(Diaporama->CurrentCol)+Diaporama->GetTransitionDuration(Diaporama->CurrentCol));
    AdjustRuller();
}
