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

// Include some common various class
#include "cApplicationConfig.h"
#include "cDeviceModelDef.h"

// Include some additional standard class
#include <QFile>
#include <QDir>
#include <QFileInfo>
#include <QTextStream>
#include <QTranslator>
#include <QTextDocument>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QNetworkProxy>
#include "HelpPopup/HelpPopup.h"

struct sBrowserTypeDef BrowserTypeDef[BROWSER_TYPE_NBR]={
    // BROWSERString/DefaultPath/SortFile/ShowFoldersFirst/ShowHiddenFilesAndDir/ShowMntDrive/AllowedFilter/CurrentFilter/CurrentMode/DisplayFileName
     {"Browser",        &DefaultBrowserPath,        SORTORDER_BYNAME,1,0,0,FILTERALLOW_OBJECTTYPE_ALL,              OBJECTTYPE_MANAGED,     DISPLAY_ICON100,true}    // BROWSER_TYPE_MainWindow
    ,{"ImageOnly",      &DefaultMediaPath,          SORTORDER_BYNAME,1,0,0,FILTERALLOW_OBJECTTYPE_IMAGEFILE,        OBJECTTYPE_IMAGEFILE,   DISPLAY_ICON100,true}    // BROWSER_TYPE_IMAGEONLY
    ,{"ImageVectorOnly",&DefaultMediaPath,          SORTORDER_BYNAME,1,0,0,FILTERALLOW_OBJECTTYPE_IMAGEVECTOR,      OBJECTTYPE_IMAGEVECTOR, DISPLAY_ICON100,true}    // BROWSER_TYPE_IMAGEVECTORONLY
    ,{"VideoOnly",      &DefaultMediaPath,          SORTORDER_BYNAME,1,0,0,FILTERALLOW_OBJECTTYPE_VIDEOFILE,        OBJECTTYPE_VIDEOFILE,   DISPLAY_ICON100,true}    // BROWSER_TYPE_VIDEOONLY
    ,{"SoundOnly",      &DefaultMusicPath,          SORTORDER_BYNAME,1,0,0,FILTERALLOW_OBJECTTYPE_MUSICFILE,        OBJECTTYPE_MUSICFILE,   DISPLAY_ICON100,true}    // BROWSER_TYPE_SOUNDONLY
    ,{"MediaFiles",     &DefaultMediaPath,          SORTORDER_BYNAME,1,0,0,FILTERALLOW_OBJECTTYPE_MEDIAFILES,       OBJECTTYPE_MANAGED,     DISPLAY_ICON100,true}    // BROWSER_TYPE_MEDIAFILES
    ,{"Project",        &DefaultProjectPath,        SORTORDER_BYNAME,1,0,0,FILTERALLOW_OBJECTTYPE_FFDFILE,          OBJECTTYPE_FFDFILE,     DISPLAY_ICON100,true}    // BROWSER_TYPE_PROJECT
    ,{"Export",         &DefaultExportPath,         SORTORDER_BYNAME,1,0,0,FILTERALLOW_OBJECTTYPE_FOLDER,           OBJECTTYPE_FOLDER,      DISPLAY_ICON100,true}    // BROWSER_TYPE_EXPORT
    ,{"RenderVideo",    &DefaultRenderVideoPath,    SORTORDER_BYNAME,1,0,0,FILTERALLOW_OBJECTTYPE_VIDEOFILE,        OBJECTTYPE_VIDEOFILE,   DISPLAY_ICON100,true}    // BROWSER_TYPE_RENDERVIDEO
    ,{"RenderAudio",    &DefaultRenderAudioPath,    SORTORDER_BYNAME,1,0,0,FILTERALLOW_OBJECTTYPE_MUSICFILE,        OBJECTTYPE_MUSICFILE,   DISPLAY_ICON100,true}    // BROWSER_TYPE_RENDERAUDIO
    ,{"CaptureImage",   &DefaultCaptureImage,       SORTORDER_BYNAME,1,0,0,FILTERALLOW_OBJECTTYPE_IMAGEFILE,        OBJECTTYPE_IMAGEFILE,   DISPLAY_ICON100,true}    // BROWSER_TYPE_CAPTUREIMAGE
    ,{"GPSIcon",        &DefaultPositionIconPath,   SORTORDER_BYNAME,1,0,0,FILTERALLOW_OBJECTTYPE_IMAGEFILE,        OBJECTTYPE_IMAGEFILE,   DISPLAY_ICON100,true}    // BROWSER_TYPE_ICONLOCATION
};

//*****************************************************************************************************************************************

#if defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
    bool SearchRasterMode() {
        QString UserConfigPath;    // Path and filename to user profil path
        QString UserConfigFile;    // Path and filename to user configuration file
        QString GlobalConfigFile;  // Path and filename to global configuration file (in binary directory)
        bool    RasterMode=true;

        UserConfigPath=QDir::homePath();
        if (!UserConfigPath.endsWith(QDir::separator())) UserConfigPath=UserConfigPath+QDir::separator();
        UserConfigPath  = UserConfigPath+"."+QString(APPLICATION_NAME)+QDir::separator();
        GlobalConfigFile=QFileInfo(QString(APPLICATION_NAME)+QString(CONFIGFILEEXT)).absoluteFilePath();
        UserConfigFile  =QFileInfo(UserConfigPath+QString(APPLICATION_NAME)+QString(CONFIGFILEEXT)).absoluteFilePath();

        QFile           file(GlobalConfigFile);
        QDomDocument    domDocument;
        QDomElement     root;
        QString         errorStr;
        int             errorLine,errorColumn;

        // Load Global preferences
        if (file.open(QFile::ReadOnly | QFile::Text)) {
            if (domDocument.setContent(&file,true,&errorStr,&errorLine,&errorColumn)) {
                root = domDocument.documentElement();
                if ((root.tagName()==QString(CONFIGFILE_ROOTNAME))&&(root.elementsByTagName("GlobalPreferences").length()>0)&&(root.elementsByTagName("GlobalPreferences").item(0).isElement()==true)) {
                    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Search Raster mode in configuration file")+GlobalConfigFile);
                    QDomElement Element=root.elementsByTagName("GlobalPreferences").item(0).toElement();
                    if (Element.hasAttribute("RasterMode")) RasterMode=Element.attribute("RasterMode")=="1";
                }
            }
            file.close();
        }

        // Load user preferences
        file.setFileName(UserConfigFile);
        if (file.open(QFile::ReadOnly | QFile::Text)) {
            if (domDocument.setContent(&file,true,&errorStr,&errorLine,&errorColumn)) {
                root = domDocument.documentElement();
                if ((root.tagName()==QString(CONFIGFILE_ROOTNAME))&&(root.elementsByTagName("GlobalPreferences").length()>0)&&(root.elementsByTagName("GlobalPreferences").item(0).isElement()==true)) {
                    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Search Raster mode in configuration file")+GlobalConfigFile);
                    QDomElement Element=root.elementsByTagName("GlobalPreferences").item(0).toElement();
                    if (Element.hasAttribute("RasterMode")) RasterMode=Element.attribute("RasterMode")=="1";
                }
            }
            file.close();
        }

        return RasterMode;
    }
#endif

//====================================================================================================================

DownloadObject::DownloadObject(QString FileName,QObject *parent):QObject(parent) {
    ApplicationConfig   =(cApplicationConfig *)parent;
    Status              =false;
    NetworkDataFileName =FileName;
    loop                =NULL;
    NetworkManager      =ApplicationConfig->GetNetworkAccessManager(this);
    GetNewtorkDataReply =NetworkManager->get(QNetworkRequest(QUrl(QString(LOCAL_WEBURL)+NetworkDataFileName)));
    int httpstatuscode  =GetNewtorkDataReply->attribute(QNetworkRequest::HttpStatusCodeAttribute).toUInt();

    if (!httpstatuscode) {
        if (GetNewtorkDataReply->error()==QNetworkReply::NoError) {
            TimeOutTimer.setSingleShot(true);
            loop=new QEventLoop(this);
            connect(&TimeOutTimer,      SIGNAL(timeout()),  loop,SLOT(quit()));
            connect(GetNewtorkDataReply,SIGNAL(finished()), this,SLOT(httpGetDataFinished()));
            connect(GetNewtorkDataReply,SIGNAL(readyRead()),this,SLOT(httpGetDataReadyRead()));
            TimeOutTimer.start(DOWNLOADTIMEOUT);
            loop->exec();
            if(TimeOutTimer.isActive()) {
                TimeOutTimer.stop();
                if (Status) ToLog(LOGMSG_INFORMATION,QString("Downloading %1 from ffDiaporama Web Site ... done").arg(NetworkDataFileName));
                    else    ToLog(LOGMSG_INFORMATION,QString("Downloading %1 from ffDiaporama Web Site ... error").arg(NetworkDataFileName));
            } else {
               // timeout
               disconnect(GetNewtorkDataReply,SIGNAL(finished()),loop,SLOT(quit()));
               GetNewtorkDataReply->abort();
               ToLog(LOGMSG_INFORMATION,QString("Downloading %1 from ffDiaporama Web Site ... timeout").arg(NetworkDataFileName));
            }
            NetworkData.clear();
        }
    }
}

DownloadObject::~DownloadObject() {
    if (loop)                   loop->deleteLater();
    if (GetNewtorkDataReply)    GetNewtorkDataReply->deleteLater();
    if (NetworkManager)         NetworkManager->deleteLater();
}

void DownloadObject::httpGetDataFinished() {
    if (!GetNewtorkDataReply) return;
    if (!NetworkData.isEmpty()) {
        Status=(!NetworkData.contains(QString("404 - Not Found").toLocal8Bit()));
        if (Status) {
            QFile DataFile(ApplicationConfig->UserConfigPath+NetworkDataFileName);
            if (DataFile.open(QFile::WriteOnly)) {
                DataFile.write(NetworkData);
                DataFile.close();
            }
        }
    }
    GetNewtorkDataReply->deleteLater();
    GetNewtorkDataReply=NULL;
    loop->exit();
}

void DownloadObject::httpGetDataReadyRead() {
    if (GetNewtorkDataReply) NetworkData.append(GetNewtorkDataReply->readAll());
}

//**********************************************************************************************************************
// cApplicationConfig
//**********************************************************************************************************************

cApplicationConfig::cApplicationConfig(QMainWindow *TheTopLevelWindow,QString TheAllowedWEBLanguage):cBaseAppConfig(TheTopLevelWindow) {
    #ifdef Q_OS_WIN
        // Options for windows only
        // registry value for specific Windows Folder
        QString WINDOWS_APPDATA;                                        // specific Windows Folder : AppData
        QString WINDOWS_MUSIC;                                          // specific Windows Folder : My Music
        QString WINDOWS_PICTURES;                                       // specific Windows Folder : My Pictures
        QString WINDOWS_VIDEO;                                          // specific Windows Folder : My Video
        QString WINDOWS_DOCUMENTS;                                      // specific Windows Folder : Personal
    #endif

    UseNetworkProxy         =false;
    PopupHelp               =NULL;
    AllowedWEBLanguage      =TheAllowedWEBLanguage;
    TopLevelWindow          =TheTopLevelWindow;            // Link to MainWindow of the application

    // Drivelist and models will be init by mainwindow init process
    DriveList                   =NULL;
    ThumbnailModels             =NULL;
    ThumbnailModelsNextNumber   =0;

    for (int geo=GEOMETRY_4_3;geo<=GEOMETRY_40_17;geo++) {
        PrjTitleModelsNextNumber[geo]=0;    for (int Cat=0;Cat<MODELTYPE_PROJECTTITLE_CATNUMBER;Cat++)  PrjTitleModels[geo][Cat]=NULL;
        CptTitleModelsNextNumber[geo]=0;    for (int Cat=0;Cat<MODELTYPE_CHAPTERTITLE_CATNUMBER;Cat++)  CptTitleModels[geo][Cat]=NULL;
        CreditTitleModelsNextNumber[geo]=0; for (int Cat=0;Cat<MODELTYPE_CREDITTITLE_CATNUMBER;Cat++)   CreditTitleModels[geo][Cat]=NULL;
    }

    // Initialise all variables and set them default value
    ParentWindow            =NULL;
    StartingPath            =QDir::toNativeSeparators(QDir::currentPath());
    this->ForceLanguage     =ForceLanguage;
    RestoreWindow           =true;                                                         // if true then restore windows size and position
    DisableTooltips         =false;
    #if defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
        RasterMode          =true;                                                         // Enable or disable raster mode [Linux only]
        CheckConfigAtStartup=true;
        OpenWEBNewVersion   =false;
    #else
        CheckConfigAtStartup=false;
        OpenWEBNewVersion   =true;
    #endif
    Crop1088To1080          =true;                                                         // Automaticaly crop video from 1088 lines to 1080 (CANON)
    Deinterlace             =false;
    RememberLastDirectories =true;
    DefaultSoundLevel       =20;

    //*********************************************************************
    // Search plateforme and define specific value depending on plateforme
    //*********************************************************************

    #ifdef Q_OS_WIN
        switch (QSysInfo().WindowsVersion) {
            case 0x0010 : Plateforme="Windows NT";                                                      break;
            case 0x0020 : Plateforme="Windows 2000";                                                    break;
            case 0x0030 : Plateforme="Windows XP";                                                      break;
            case 0x0040 : Plateforme="Windows Server 2003/2003 R2/Home Server/XP Professional x64";     break;
            case 0x0080 : Plateforme="Windows Vista/Windows Server 2008";                               break;
            case 0x0090 : Plateforme="Windows 7/Windows Server 2008 R2";                                break;
            case 0x00a0 : Plateforme="Windows 8";                                                       break;
            default     : Plateforme="Unknown version";                                                 break;
        }

        #ifdef Q_OS_WIN64
            Plateforme=Plateforme+" 64 bits";
        #else
            Plateforme=Plateforme+" 32 bits";
        #endif

        // Load registry value for specific Windows Folder
        QSettings Settings("HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Folders",QSettings::NativeFormat);
        WINDOWS_APPDATA  =Settings.value("AppData").toString();
        WINDOWS_MUSIC    =Settings.value("My Music").toString();
        WINDOWS_PICTURES =Settings.value("My Pictures").toString();
        WINDOWS_VIDEO    =Settings.value("My Video").toString();
        WINDOWS_DOCUMENTS=Settings.value("Personal").toString();
    #elif defined(Q_OS_LINUX64)
        Plateforme="Unix/Linux 64 bits";
    #elif defined(Q_OS_LINUX32)
        Plateforme="Unix/Linux 32 bits";
    #elif defined(Q_OS_SOLARIS64)
        Plateforme="Solaris 64 bits";
    #elif defined(Q_OS_SOLARIS32)
        Plateforme="Solaris 32 bits";
    #endif

    //*******************************************************
    // Now we can construct Global and User ConfigFile value
    //*******************************************************
    #ifdef Q_OS_WIN
        UserConfigPath=WINDOWS_APPDATA;
        if (UserConfigPath[UserConfigPath.length()-1]!=QDir::separator()) UserConfigPath=UserConfigPath+QDir::separator();
        UserConfigPath  = UserConfigPath+QString(APPLICATION_NAME)+QDir::separator();
    #else
        UserConfigPath=QDir::homePath();
        if (UserConfigPath[UserConfigPath.length()-1]!=QDir::separator()) UserConfigPath=UserConfigPath+QDir::separator();
        UserConfigPath  = UserConfigPath+"."+QString(APPLICATION_NAME)+QDir::separator();
    #endif
    GlobalConfigFile=QFileInfo(QString(APPLICATION_NAME)+QString(CONFIGFILEEXT)).absoluteFilePath();
    UserConfigFile  =QFileInfo(UserConfigPath+QString(APPLICATION_NAME)+QString(CONFIGFILEEXT)).absoluteFilePath();

    //************************************
    // set default values for path
    //************************************
    #ifdef Q_OS_WIN
        DefaultMediaPath        = WINDOWS_PICTURES;             // Last folder use for image/video
        DefaultMusicPath        = WINDOWS_MUSIC;                // Last folder use for music
        DefaultProjectPath      = WINDOWS_DOCUMENTS;            // Last folder use for project
        DefaultExportPath       = WINDOWS_DOCUMENTS;            // Last folder use for project export
        DefaultRenderVideoPath  = WINDOWS_VIDEO;                // Last folder use for render video
        DefaultRenderAudioPath  = WINDOWS_MUSIC;                // Last folder use for render audio
        DefaultCaptureImage     = WINDOWS_PICTURES;             // Last folder use for captured image
        DefaultBrowserPath      = WINDOWS_DOCUMENTS;
        DefaultPositionIconPath = WINDOWS_PICTURES;             // Last folder use for icon of GPS location
    #else
        DefaultMediaPath        = QDir::home().absolutePath();  // Last folder use for image/video
        DefaultMusicPath        = QDir::home().absolutePath();  // Last folder use for music
        DefaultProjectPath      = QDir::home().absolutePath();  // Last folder use for project
        DefaultExportPath       = QDir::home().absolutePath();  // Last folder use for project
        DefaultRenderVideoPath  = QDir::home().absolutePath();  // Last folder use for render video
        DefaultRenderAudioPath  = QDir::home().absolutePath();  // Last folder use for render audio
        DefaultCaptureImage     = QDir::home().absolutePath();  // Last folder use for captured image
        DefaultBrowserPath      = "~";   // User home folder
        DefaultPositionIconPath = QDir::home().absolutePath();  // Last folder use for icon of GPS location
    #endif
}

//====================================================================================================================

cApplicationConfig::~cApplicationConfig() {
    delete PopupHelp;
    delete DriveList;
    delete ThumbnailModels;
    for (int geo=GEOMETRY_4_3;geo<=GEOMETRY_40_17;geo++) {
        for (int cat=0;cat<MODELTYPE_PROJECTTITLE_CATNUMBER;cat++) delete PrjTitleModels[geo][cat];
        for (int cat=0;cat<MODELTYPE_CHAPTERTITLE_CATNUMBER;cat++) delete CptTitleModels[geo][cat];
        for (int cat=0;cat<MODELTYPE_CREDITTITLE_CATNUMBER;cat++)  delete CreditTitleModels[geo][cat];
    }
}

//====================================================================================================================

QString cApplicationConfig::GetValideWEBLanguage(QString Language) {
    if (!AllowedWEBLanguage.contains(Language)) Language="en";
    return Language;
}

//====================================================================================================================
// Preload system icon images
void cApplicationConfig::PreloadSystemIcons() {
    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Loading system icons..."));
    #ifdef Q_OS_WIN
    if (QSysInfo().WindowsVersion>=0x0090) { // At least Windows 7
        DefaultUSERIcon.LoadIcons(GetIconForFileOrDir("%SystemRoot%\\system32\\imageres.dll",117));
        DefaultCDROMIcon.LoadIcons(GetIconForFileOrDir("%SystemRoot%\\system32\\shell32.dll",11));
        DefaultHDDIcon.LoadIcons(GetIconForFileOrDir("%SystemRoot%\\system32\\shell32.dll",8));
        DefaultFOLDERIcon.LoadIcons(GetIconForFileOrDir("%SystemRoot%\\system32\\shell32.dll",3));
    }
    #endif
    if (DefaultCDROMIcon.Icon16.isNull())   DefaultCDROMIcon.LoadIcons(QApplication::style()->standardIcon(QStyle::SP_DriveDVDIcon));   //.LoadIconsFromIMG(  "cdrom.png");
    if (DefaultHDDIcon.Icon16.isNull())     DefaultHDDIcon.LoadIcons(QApplication::style()->standardIcon(QStyle::SP_DriveHDIcon));      //.LoadIconsFromIMG(    "hdd.png");
    if (DefaultUSBIcon.Icon16.isNull())     DefaultUSBIcon.LoadIconsFromIMG(    "usb.png");
    if (DefaultREMOTEIcon.Icon16.isNull())  DefaultREMOTEIcon.LoadIcons(QApplication::style()->standardIcon(QStyle::SP_DriveNetIcon));  //.LoadIconsFromIMG( "hdd-lan.png");
    if (DefaultFOLDERIcon.Icon16.isNull())  DefaultFOLDERIcon.LoadIcons(QApplication::style()->standardIcon(QStyle::SP_DirIcon));       //.LoadIconsFromIMG( "directory.png");
    if (DefaultDelayedIcon.Icon16.isNull()) DefaultDelayedIcon.LoadIconsFromIMG("delayed.png");
    if (DefaultFFDIcon.Icon16.isNull())     DefaultFFDIcon.LoadIconsFromIMG(    "ffDiaporama.png");
    if (DefaultThumbIcon.Icon16.isNull())   DefaultThumbIcon.LoadIconsFromIMG(  "Thumbnails.png");
    if (DefaultIMAGEIcon.Icon16.isNull())   DefaultIMAGEIcon.LoadIconsFromIMG(  "image.png");
    if (DefaultVIDEOIcon.Icon16.isNull())   DefaultVIDEOIcon.LoadIconsFromIMG(  "video.png");
    if (DefaultMUSICIcon.Icon16.isNull())   DefaultMUSICIcon.LoadIconsFromIMG(  "audio.png");
    if (DefaultClipartIcon.Icon16.isNull()) DefaultClipartIcon.LoadIconsFromIMG("clipart.png");
    if (DefaultUSERIcon.Icon16.isNull())    DefaultUSERIcon.LoadIcons(QApplication::style()->standardIcon(QStyle::SP_DirHomeIcon));     //.LoadIconsFromIMG(   "folder_home.png");
    if (DefaultFILEIcon.Icon16.isNull())    DefaultFILEIcon.LoadIcons(QApplication::style()->standardIcon(QStyle::SP_FileIcon));        //.LoadIconsFromIMG(   "file.png");
    if (DefaultGMapsIcon.Icon16.isNull())   DefaultGMapsIcon.LoadIconsFromIMG("gmaps.png");
    VideoMask_120=QImage(":/img/VideoMask_120x180.png");
    VideoMask_150=QImage(":/img/VideoMask_150x200.png");
    VideoMask_162=QImage(":/img/VideoMask_162x216.png");
}

//====================================================================================================================

QString cApplicationConfig::GetFilterForMediaFile(FilterFile type) {
    // enum FilterFile {ALLFILE,IMAGEFILE,VIDEOFILE,MUSICFILE};
    QString ReturnFile="";
    if (type==ALLFILE) {
        ReturnFile=ReturnFile+QApplication::translate("MainWindow","All suported file (");
        for (int i=0;i<AllowImageExtension.count();i++)         ReturnFile=ReturnFile+(i>0?" *":"*.")+AllowImageExtension[i];
        for (int i=0;i<AllowImageVectorExtension.count();i++)   ReturnFile=ReturnFile+(i>0?" *":"*.")+AllowImageVectorExtension[i];
        for (int i=0;i<AllowVideoExtension.count();i++)         ReturnFile=ReturnFile+(i>0?" *":"*.")+AllowVideoExtension[i];
        ReturnFile=ReturnFile+")";
    } else if (type==IMAGEFILE) {
        if (ReturnFile!="") ReturnFile=ReturnFile+";;";
        ReturnFile=ReturnFile+QApplication::translate("MainWindow","Image file (");
        for (int i=0;i<AllowImageExtension.count();i++)   ReturnFile=ReturnFile+(i>0?" *":"*.")+AllowImageExtension[i];
        ReturnFile=ReturnFile+")";
    } else if (type==IMAGEVECTORFILE) {
        if (ReturnFile!="") ReturnFile=ReturnFile+";;";
        ReturnFile=ReturnFile+QApplication::translate("MainWindow","Image vector file (");
        for (int i=0;i<AllowImageVectorExtension.count();i++)   ReturnFile=ReturnFile+(i>0?" *":"*.")+AllowImageVectorExtension[i];
        ReturnFile=ReturnFile+")";
    } else if (type==VIDEOFILE) {
        if (ReturnFile!="") ReturnFile=ReturnFile+";;";
        ReturnFile=ReturnFile+QApplication::translate("MainWindow","Video file (");
        for (int i=0;i<AllowVideoExtension.count();i++) ReturnFile=ReturnFile+(i>0?" *":"*.")+AllowVideoExtension[i];
        ReturnFile=ReturnFile+")";
    } else if (type==MUSICFILE) {
        if (ReturnFile!="") ReturnFile=ReturnFile+";;";
        ReturnFile=ReturnFile+QApplication::translate("MainWindow","Music file (");
        for (int i=0;i<AllowMusicExtension.count();i++) ReturnFile=ReturnFile+(i>0?" *":"*.")+AllowMusicExtension[i];
        ReturnFile=ReturnFile+")";
    }
    return ReturnFile;
}

//====================================================================================================================

bool cApplicationConfig::DownloadFile(QString FileName) {
    DownloadObject Download(FileName,this);
    return Download.Status;
}

//====================================================================================================================

bool cApplicationConfig::InitConfigurationValues(QString ForceLanguage) {
    //************************************
    // Prepare lists of allowed extension
    //************************************
    int c;
    AllowVideoExtension      =AllowVideoExtensions.split("#");          c=AllowVideoExtension.count();       for (int i=0;i<c;i++) AllowVideoExtension.append(AllowVideoExtension[i].toUpper());
    AllowImageExtension      =AllowImageExtensions.split("#");          c=AllowImageExtension.count();       for (int i=0;i<c;i++) AllowImageExtension.append(AllowImageExtension[i].toUpper());
    AllowImageVectorExtension=AllowImageVectorExtensions.split("#");    c=AllowImageVectorExtension.count(); for (int i=0;i<c;i++) AllowImageVectorExtension.append(AllowImageVectorExtension[i].toUpper());
    AllowMusicExtension      =AllowMusicExtensions.split("#");          c=AllowMusicExtension.count();       for (int i=0;i<c;i++) AllowMusicExtension.append(AllowMusicExtension[i].toUpper());

    //************************************
    // set language
    //************************************
    // First thing to do is to load ForceLanguage, UseNetworkProxy and NetworkProxy from USERCONFIGFILE and install AppTranslator to fix text codec !
    QFile           file(UserConfigFile);
    QDomDocument    domDocument;
    QDomElement     root;
    QString         errorStr;
    int             errorLine,errorColumn;

    if (file.open(QFile::ReadOnly | QFile::Text)) {
        QTextStream in(&file);
        in.setCodec("UTF-8");
        if (domDocument.setContent(in.readAll(),true,&errorStr,&errorLine,&errorColumn)) {
            domDocument.setContent(domDocument.toString(4),true,&errorStr,&errorLine,&errorColumn);
            if ((root.elementsByTagName("GlobalPreferences").length()>0)&&(root.elementsByTagName("GlobalPreferences").item(0).isElement()==true)) {
                QDomElement Element=root.elementsByTagName("GlobalPreferences").item(0).toElement();
                if ((Element.hasAttribute("ForceLanguage"))&&(ForceLanguage=="")) ForceLanguage   =Element.attribute("ForceLanguage");
                if (Element.hasAttribute("UseNetworkProxy"))                      UseNetworkProxy =Element.attribute("UseNetworkProxy")=="1";
                if (Element.hasAttribute("NetworkProxy"))                         NetworkProxy    =Element.attribute("NetworkProxy");
                if (Element.hasAttribute("NetworkProxyPort"))                     NetworkProxyPort=Element.attribute("NetworkProxyPort").toInt();
                if (Element.hasAttribute("NetworkProxyUser"))                     NetworkProxyUser=Element.attribute("NetworkProxyUser");
                if (Element.hasAttribute("NetworkProxyPWD"))                      NetworkProxyPWD =Element.attribute("NetworkProxyPWD");
            }
        }
    }
    // Search system language
    QString CurrentSubLanguage;
    if (ForceLanguage!="") {
        CurrentSubLanguage=ForceLanguage.toLower();
        CurrentLanguage   =ForceLanguage.left(2).toLower();
    } else {
        CurrentLanguage   =QLocale::system().name().left(2).toLower();
        CurrentSubLanguage=QLocale::system().name().toLower();
    }

    //======================================== Download version files from internet

    QString ActualTRVersion  ="00000000";
    QString WebTRVersion     ="00000000";
    QString ActualWIKIVersion="00000000";
    QString WebWIKIVersion   ="00000000";

    // try to download version from the web site
    if ((DownloadFile("LOCALEVERSION.TXT"))&&(QFileInfo(UserConfigPath+QString("LOCALEVERSION.TXT")).exists())) {
        QFile File(UserConfigPath+QString("LOCALEVERSION.TXT"));
        if (File.open(QFile::ReadOnly | QFile::Text)) {
            QTextStream InStream(&File);
            InStream.setCodec("UTF-8");
            WebTRVersion=InStream.readLine();
            File.close();
        }

        // try to download version from the web site
        if ((DownloadFile("WIKIVERSION.TXT"))&&(QFileInfo(UserConfigPath+QString("WIKIVERSION.TXT")).exists())) {
            QFile File(UserConfigPath+QString("WIKIVERSION.TXT"));
            if (File.open(QFile::ReadOnly | QFile::Text)) {
                QTextStream InStream(&File);
                InStream.setCodec("UTF-8");
                WebWIKIVersion=InStream.readLine();
                File.close();
            }
        }
    }

    if (CurrentLanguage!="en") {
        // try to download locales from the web site

        //======================================== INTERFACE

        // get actual version for this language
        if (QFileInfo(UserConfigPath+QString("%1_VERSION.TXT").arg(CurrentSubLanguage)).exists()) {
            QFile File(UserConfigPath+QString("%1_VERSION.TXT").arg(CurrentSubLanguage));
            if (File.open(QFile::ReadOnly | QFile::Text)) {
                QTextStream InStream(&File);
                InStream.setCodec("UTF-8");
                ActualTRVersion=InStream.readLine();
                File.close();
            }
        } else if (QFileInfo(UserConfigPath+QString("%1_VERSION.TXT").arg(CurrentLanguage)).exists()) {
            QFile File(UserConfigPath+QString("%1_VERSION.TXT").arg(CurrentLanguage));
            if (File.open(QFile::ReadOnly | QFile::Text)) {
                QTextStream InStream(&File);
                InStream.setCodec("UTF-8");
                ActualTRVersion=InStream.readLine();
                File.close();
            }
        }

        // if actual version is outdated or local file not exist in the home folder
        if ((ActualTRVersion<WebTRVersion)||(
            (!QFileInfo(UserConfigPath+QString(APPLICATION_NAME)+QString("_")+QString(CurrentSubLanguage)+QString(".qm")).exists())&&
            (!QFileInfo(UserConfigPath+QString(APPLICATION_NAME)+QString("_")+QString(CurrentLanguage)+QString(".qm")).exists()))) {

            if (DownloadFile(QString(APPLICATION_NAME)+QString("_")+QString(CurrentSubLanguage)+QString(".qm"))) {
                DownloadFile(QString("qt_")+QString(CurrentSubLanguage)+QString(".qm"));
                if (QFileInfo(UserConfigPath+QString("%1_VERSION.TXT").arg(CurrentSubLanguage)).exists()) QFile(UserConfigPath+QString("%1_VERSION.TXT").arg(CurrentSubLanguage)).remove();
                QFile(UserConfigPath+QString("LOCALEVERSION.TXT")).rename(UserConfigPath+QString("%1_VERSION.TXT").arg(CurrentSubLanguage));
            } else if (DownloadFile(QString(APPLICATION_NAME)+QString("_")+QString(CurrentLanguage)+QString(".qm"))) {
                DownloadFile(QString("qt_")+QString(CurrentLanguage)+QString(".qm"));
                if (QFileInfo(UserConfigPath+QString("%1_VERSION.TXT").arg(CurrentLanguage)).exists()) QFile(UserConfigPath+QString("%1_VERSION.TXT").arg(CurrentLanguage)).remove();
                QFile(UserConfigPath+QString("LOCALEVERSION.TXT")).rename(UserConfigPath+QString("%1_VERSION.TXT").arg(CurrentLanguage));
            }
        }

        //======================================== WIKI

        // get actual version for this language
        if (QFileInfo(UserConfigPath+QString("%1_WIKIVERSION.TXT").arg(CurrentSubLanguage)).exists()) {
            QFile File(UserConfigPath+QString("%1_WIKIVERSION.TXT").arg(CurrentSubLanguage));
            if (File.open(QFile::ReadOnly | QFile::Text)) {
                QTextStream InStream(&File);
                InStream.setCodec("UTF-8");
                ActualWIKIVersion=InStream.readLine();
                File.close();
            }
        } else if (QFileInfo(UserConfigPath+QString("%1_WIKIVERSION.TXT").arg(CurrentLanguage)).exists()) {
            QFile File(UserConfigPath+QString("%1_WIKIVERSION.TXT").arg(CurrentLanguage));
            if (File.open(QFile::ReadOnly | QFile::Text)) {
                QTextStream InStream(&File);
                InStream.setCodec("UTF-8");
                ActualWIKIVersion=InStream.readLine();
                File.close();
            }
        }

        // if actual version is outdated or local file not exist in the home folder
        if ((ActualWIKIVersion<WebWIKIVersion)||(
            (!QFileInfo(UserConfigPath+QString("wiki_")+QString(CurrentSubLanguage)+QString(".qch")).exists())&&
            (!QFileInfo(UserConfigPath+QString("wiki_")+QString(CurrentLanguage)+QString(".qch")).exists()))) {

            if (DownloadFile(QString("wiki_")+QString(CurrentSubLanguage)+QString(".qch")) && DownloadFile(QString("wiki_")+QString(CurrentSubLanguage)+QString(".qhc"))) {
                if (QFileInfo(UserConfigPath+QString("%1_WIKIVERSION.TXT").arg(CurrentSubLanguage)).exists()) QFile(UserConfigPath+QString("%1_WIKIVERSION.TXT").arg(CurrentSubLanguage)).remove();
                QFile(UserConfigPath+QString("WIKIVERSION.TXT")).rename(UserConfigPath+QString("%1_WIKIVERSION.TXT").arg(CurrentSubLanguage));
            } else if (DownloadFile(QString("wiki_")+QString(CurrentLanguage)+QString(".qch")) && DownloadFile(QString("wiki_")+QString(CurrentLanguage)+QString(".qhc"))) {
                if (QFileInfo(UserConfigPath+QString("%1_WIKIVERSION.TXT").arg(CurrentLanguage)).exists()) QFile(UserConfigPath+QString("%1_WIKIVERSION.TXT").arg(CurrentLanguage)).remove();
                QFile(UserConfigPath+QString("WIKIVERSION.TXT")).rename(UserConfigPath+QString("%1_WIKIVERSION.TXT").arg(CurrentLanguage));
            }
        }

        //========================================

        // Now, try to use locales
        if (QFileInfo(UserConfigPath+QString(APPLICATION_NAME)+QString("_")+QString(CurrentSubLanguage)+QString(".qm")).exists()) {

            // Load translation
            if (!AppTranslator.load(UserConfigPath+QString(APPLICATION_NAME)+QString("_")+CurrentLanguage+QString(".qm"))) {
                ToLog(LOGMSG_WARNING,QString("Error loading application translation file ... ")+UserConfigPath+QString(APPLICATION_NAME)+QString("_")+CurrentSubLanguage+QString(".qm"));
                exit(1);
            } else {
                ToLog(LOGMSG_INFORMATION,QString("Loading application translation file ... ")+QString(APPLICATION_NAME)+QString("_")+CurrentSubLanguage+QString(".qm"));
                QApplication::installTranslator(&AppTranslator);
            }

            if (QFileInfo(UserConfigPath+QString("qt_")+QString(CurrentSubLanguage)+QString(".qm")).exists()) {
                if (!QTtranslator.load(UserConfigPath+QString("qt_")+CurrentLanguage+QString(".qm"))) {
                    ToLog(LOGMSG_WARNING,QString("Error loading QT system translation file ... ")+UserConfigPath+QString("qt_")+CurrentSubLanguage+".qm");
                } else {
                    ToLog(LOGMSG_INFORMATION,QString("Loading QT system translation file ... ")+QString("qt_")+CurrentSubLanguage+".qm");
                    QApplication::installTranslator(&QTtranslator);
                }
            }
            CurrentLanguage=CurrentSubLanguage;

        } else if (QFileInfo(UserConfigPath+QString(APPLICATION_NAME)+QString("_")+QString(CurrentLanguage)+QString(".qm")).exists()) {

            // Load translation
            if (!AppTranslator.load(UserConfigPath+QString(APPLICATION_NAME)+QString("_")+CurrentLanguage+QString(".qm"))) {
                ToLog(LOGMSG_WARNING,QString("Error loading application translation file ... ")+UserConfigPath+QString(APPLICATION_NAME)+QString("_")+CurrentLanguage+QString(".qm"));
                exit(1);
            } else {
                ToLog(LOGMSG_INFORMATION,QString("Loading application translation file ... ")+QString(APPLICATION_NAME)+QString("_")+CurrentLanguage+QString(".qm"));
                QApplication::installTranslator(&AppTranslator);
            }

            if (QFileInfo(UserConfigPath+QString("qt_")+QString(CurrentLanguage)+QString(".qm")).exists()) {
                if (!QTtranslator.load(UserConfigPath+QString("qt_")+CurrentLanguage+QString(".qm"))) {
                    ToLog(LOGMSG_WARNING,QString("Error loading QT system translation file ... ")+UserConfigPath+QString("qt_")+CurrentLanguage+".qm");
                } else {
                    ToLog(LOGMSG_INFORMATION,QString("Loading QT system translation file ... ")+QString("qt_")+CurrentLanguage+".qm");
                    QApplication::installTranslator(&QTtranslator);
                }
            }

        } else {
            ToLog(LOGMSG_INFORMATION,QString("Language \"%1\" not found : switch to english").arg(CurrentLanguage));
            CurrentLanguage="en";
        }
    }

    // Now AppTranslator are loaded, then we can load configuration files

    // Init all others values by call subclassing function
    InitValues();

    LoadConfigurationFile(GLOBALCONFIGFILE);                                                 // Get values from global configuration file (overwrite previously initialized values)
    if (!LoadConfigurationFile(USERCONFIGFILE)) SaveConfigurationFile();                     // Load values from user configuration file (overwrite previously initialized values)

    return true;
}

//====================================================================================================================

bool cApplicationConfig::LoadConfigurationFile(LoadConfigFileType TypeConfigFile) {
    QFile           file(TypeConfigFile==USERCONFIGFILE?UserConfigFile:GlobalConfigFile);
    QDomDocument    domDocument;
    QDomElement     root;
    QString         errorStr;
    int             errorLine,errorColumn;
    bool            IsOk=true;
    bool            UpgradeConf=false;

    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Read configuration file")+" "+QDir::toNativeSeparators(TypeConfigFile==USERCONFIGFILE?UserConfigFile:GlobalConfigFile));
    if (!file.open(QFile::ReadOnly | QFile::Text)) {
        ToLog(LOGMSG_WARNING,QApplication::translate("MainWindow","Error reading configuration file","Error message")+" "+QDir::toNativeSeparators(TypeConfigFile==USERCONFIGFILE?UserConfigFile:GlobalConfigFile));
        IsOk=false;
    }

    if (IsOk) {
        QTextStream in(&file);
        in.setCodec("UTF-8");
        if (!domDocument.setContent(in.readAll(),true,&errorStr,&errorLine,&errorColumn)) {
            ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","Error reading content of configuration file","Error message")+" "+QDir::toNativeSeparators(TypeConfigFile==USERCONFIGFILE?UserConfigFile:GlobalConfigFile));
            IsOk=false;
        }

        domDocument.setContent(domDocument.toString(4),true,&errorStr,&errorLine,&errorColumn);
    }

    if (IsOk) {
        root = domDocument.documentElement();
        if (root.tagName()!=QString(CONFIGFILE_ROOTNAME)) {
            ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","The file is not a valid configuration file","Error message")+" "+QDir::toNativeSeparators(TypeConfigFile==USERCONFIGFILE?UserConfigFile:GlobalConfigFile));
            IsOk=false;
        }
    }

    if (IsOk) {
        // Load Global preferences
        if ((root.elementsByTagName("GlobalPreferences").length()>0)&&(root.elementsByTagName("GlobalPreferences").item(0).isElement()==true)) {
            QDomElement Element=root.elementsByTagName("GlobalPreferences").item(0).toElement();
            #if defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
            if (Element.hasAttribute("RasterMode"))                 RasterMode              =Element.attribute("RasterMode")=="1";
            #endif
            if (Element.hasAttribute("OpenWEBNewVersion"))          OpenWEBNewVersion       =Element.attribute("OpenWEBNewVersion")=="1";
            if (Element.hasAttribute("RestoreWindow"))              RestoreWindow           =Element.attribute("RestoreWindow")=="1";
            if (Element.hasAttribute("RememberLastDirectories"))    RememberLastDirectories =Element.attribute("RememberLastDirectories")=="1";
            if (Element.hasAttribute("DisableTooltips"))            DisableTooltips         =Element.attribute("DisableTooltips")=="1";
            if (Element.hasAttribute("Crop1088To1080"))             Crop1088To1080          =Element.attribute("Crop1088To1080")!="0";
            if (Element.hasAttribute("Deinterlace"))                Deinterlace             =Element.attribute("Deinterlace")!="0";
            if (Element.hasAttribute("Smoothing"))                  Smoothing               =Element.attribute("Smoothing")=="1";
            if (Element.hasAttribute("CheckConfigAtStartup"))       CheckConfigAtStartup    =Element.attribute("CheckConfigAtStartup")=="1";
            if (Element.hasAttribute("DefaultSoundLevel"))          DefaultSoundLevel       =Element.attribute("DefaultSoundLevel").toInt();
        }

        if ((domDocument.elementsByTagName("CacheMemory").length()>0)&&(domDocument.elementsByTagName("CacheMemory").item(0).isElement()==true)) {
            QDomElement Element=domDocument.elementsByTagName("CacheMemory").item(0).toElement();
            if (Element.hasAttribute("MemCacheMaxValue"))           MemCacheMaxValue=int64_t(Element.attribute("MemCacheMaxValue").toInt())*int64_t(1024*1024);
        }

        if ((root.elementsByTagName("EditorOptions").length()>0)&&(root.elementsByTagName("EditorOptions").item(0).isElement()==true)) {
            QDomElement Element=root.elementsByTagName("EditorOptions").item(0).toElement();
            if (Element.hasAttribute("MemCacheMaxValue"))           MemCacheMaxValue            =Element.attribute("MemCacheMaxValue").toLongLong();
            #if (!defined(Q_OS_WIN64))&&(defined(Q_OS_WIN32) || defined(Q_OS_LINUX32) || defined(Q_OS_SOLARIS32))
            if (MemCacheMaxValue>int64_t(512*1024*1024)) MemCacheMaxValue=int64_t(512*1024*1024);
            #endif
            if (Element.hasAttribute("AppendObject"))               AppendObject                =Element.attribute("AppendObject")=="1";
            if (Element.hasAttribute("PartitionMode"))              PartitionMode               =Element.attribute("PartitionMode")=="1";
            if (Element.hasAttribute("WindowDisplayMode"))          WindowDisplayMode           =Element.attribute("WindowDisplayMode").toInt();
            if (Element.hasAttribute("DisplayUnit"))                DisplayUnit                 =Element.attribute("DisplayUnit").toInt();
            if (Element.hasAttribute("NewTimelineHeight"))          TimelineHeight              =Element.attribute("NewTimelineHeight").toInt();
            if (TimelineHeight<TIMELINEMINHEIGH) TimelineHeight=TIMELINEMINHEIGH;
            if (TimelineHeight>TIMELINEMAXHEIGH) TimelineHeight=TIMELINEMAXHEIGH;
            if (Element.hasAttribute("DefaultFraming"))             DefaultFraming              =Element.attribute("DefaultFraming").toInt();
            if (Element.hasAttribute("PreviewFPS"))                 PreviewFPS                  =GetDoubleValue(Element,"PreviewFPS");
            if (Element.hasAttribute("PreviewSoundVolume"))         PreviewSoundVolume          =GetDoubleValue(Element,"PreviewSoundVolume");
            if (Element.hasAttribute("PreviewSamplingRate"))        PreviewSamplingRate         =Element.attribute("PreviewSamplingRate").toLong();
            if (Element.hasAttribute("MaxVideoPreviewHeight"))      MaxVideoPreviewHeight       =Element.attribute("MaxVideoPreviewHeight").toInt();
            if (Element.hasAttribute("RandomTransition"))           RandomTransition            =Element.attribute("RandomTransition")=="1";
            if (Element.hasAttribute("DefaultTransitionFamilly"))   DefaultTransitionFamilly    =(TRFAMILLY)Element.attribute("DefaultTransitionFamilly").toInt();
            if (Element.hasAttribute("DefaultTransitionSubType"))   DefaultTransitionSubType    =Element.attribute("DefaultTransitionSubType").toInt();
            if (Element.hasAttribute("DefaultTransitionDuration"))  DefaultTransitionDuration   =Element.attribute("DefaultTransitionDuration").toInt();
            if (Element.hasAttribute("AskUserToRemove"))            AskUserToRemove             =Element.attribute("AskUserToRemove")!="0";
            if (Element.hasAttribute("WikiFollowInterface"))        WikiFollowInterface         =Element.attribute("WikiFollowInterface")!="0";
            if (Element.hasAttribute("UseNetworkProxy"))            UseNetworkProxy             =Element.attribute("UseNetworkProxy")!="0";
            if (Element.hasAttribute("NetworkProxy"))               NetworkProxy                =Element.attribute("NetworkProxy");
            if (Element.hasAttribute("NetworkProxyPort"))           NetworkProxyPort            =Element.attribute("NetworkProxyPort").toInt();
            if (Element.hasAttribute("NetworkProxyUser"))           NetworkProxyUser            =Element.attribute("NetworkProxyUser");
            if (Element.hasAttribute("NetworkProxyPWD"))            NetworkProxyPWD             =Element.attribute("NetworkProxyPWD");
            if ((Element.hasAttribute("SlideRuler"))&&(Element.attribute("SlideRuler")!="0"))   SlideRuler=RULER_DEFAULT;
            if (Element.hasAttribute("DlgSlideRuler"))              SlideRuler                  =Element.attribute("DlgSlideRuler").toInt();
            if (Element.hasAttribute("ThumbRuler"))                 ThumbRuler                  =Element.attribute("ThumbRuler").toInt();
            if (Element.hasAttribute("FramingRuler"))               FramingRuler                =Element.attribute("FramingRuler")!="0";
        }

        // Compatibility with version prior to 20131129
        if ((root.elementsByTagName("BrowserFavorites").length()>0)&&(root.elementsByTagName("BrowserFavorites").item(0).isElement()==true)) {
            QDomElement Element=root.elementsByTagName("BrowserFavorites").item(0).toElement();
            int         FavToLoad=0;
            QStringList BrowserFavorites;
            if (Element.hasAttribute("FavoritesNumber")) FavToLoad=Element.attribute("FavoritesNumber").toInt();
            for (int i=0;i<FavToLoad;i++) if (Element.hasAttribute(QString("BrowserFavorites_%1").arg(i))) BrowserFavorites.append(Element.attribute(QString("BrowserFavorites_%1").arg(i)));
            SaveBrowserFavoritesToDabase(BrowserFavorites);
            UpgradeConf=true;
        }

        if ((root.elementsByTagName("ProjectDefault").length()>0)&&(root.elementsByTagName("ProjectDefault").item(0).isElement()==true)) {
            QDomElement  Element=root.elementsByTagName("ProjectDefault").item(0).toElement();
            if (Element.hasAttribute("ImageGeometry"))              ImageGeometry               =(ffd_GEOMETRY)Element.attribute("ImageGeometry").toInt();
            if (Element.hasAttribute("NoShotDuration"))             NoShotDuration              =Element.attribute("NoShotDuration").toInt();
            if (Element.hasAttribute("FixedDuration"))              FixedDuration               =Element.attribute("FixedDuration").toInt();
            if (Element.hasAttribute("DefaultTitleFilling"))        DefaultTitleFilling         =Element.attribute("DefaultTitleFilling").toInt();
            if (Element.hasAttribute("DefaultAuthor"))              DefaultAuthor               =Element.attribute("DefaultAuthor");
            if (Element.hasAttribute("DefaultAlbum"))               DefaultAlbum                =Element.attribute("DefaultAlbum");
            if (Element.hasAttribute("DefaultTransitionSpeedWave")) DefaultTransitionSpeedWave  =Element.attribute("DefaultTransitionSpeedWave").toInt();
            if (Element.hasAttribute("DefaultBlockAnimSpeedWave"))  DefaultBlockAnimSpeedWave   =Element.attribute("DefaultBlockAnimSpeedWave").toInt();
            if (Element.hasAttribute("DefaultImageAnimSpeedWave"))  DefaultImageAnimSpeedWave   =Element.attribute("DefaultImageAnimSpeedWave").toInt();
            if (Element.hasAttribute("ID3V2Comptatibility"))        ID3V2Comptatibility         =Element.attribute("ID3V2Comptatibility")!="0";
            if (Element.hasAttribute("ShortDateFormat"))            ShortDateFormat             =Element.attribute("ShortDateFormat");
            if (Element.hasAttribute("DistanceUnit"))               DistanceUnit                =(DISTANCEUNIT)Element.attribute("DistanceUnit").toInt();

            // Compatibility with version prior to 1.5
            if (Element.hasAttribute("SpeedWave")) {
                DefaultTransitionSpeedWave=Element.attribute("SpeedWave").toInt();
                DefaultBlockAnimSpeedWave =Element.attribute("SpeedWave").toInt();
                DefaultImageAnimSpeedWave =Element.attribute("SpeedWave").toInt();
                UpgradeConf=true;
            }

            if ((Element.elementsByTagName("DefaultBlock_Text").length()>0)&&(Element.elementsByTagName("DefaultBlock_Text").item(0).isElement()==true)) {
                QDomElement SubElement=Element.elementsByTagName("DefaultBlock_Text").item(0).toElement();
                if (SubElement.hasAttribute("TextST"))              DefaultBlock_Text_TextST    =SubElement.attribute("TextST");
                if (SubElement.hasAttribute("BackGST"))             DefaultBlock_Text_BackGST   =SubElement.attribute("BackGST");
                if (SubElement.hasAttribute("ShapeST"))             DefaultBlock_Text_ShapeST   =SubElement.attribute("ShapeST");
                if (SubElement.hasAttribute("AutoSizePos"))         DefaultBlock_AutoSizePos    =SubElement.attribute("AutoSizePos").toInt();
                if (SubElement.hasAttribute("AutoLocking"))         DefaultBlock_AutoLocking    =SubElement.attribute("AutoLocking").toInt();
            }
            if ((Element.elementsByTagName("DefaultBlockSL_IMG").length()>0)&&(Element.elementsByTagName("DefaultBlockSL_IMG").item(0).isElement()==true)) {
                QDomElement SubElement=Element.elementsByTagName("DefaultBlockSL_IMG").item(0).toElement();
                if (SubElement.hasAttribute("TextST"))   DefaultBlockSL_IMG_TextST    =SubElement.attribute("TextST");
                if (SubElement.hasAttribute("ShapeST"))  DefaultBlockSL_IMG_ShapeST   =SubElement.attribute("ShapeST");
                for (int i=1;i<NBR_IMAGETYPE;i++) if ((SubElement.elementsByTagName(QString("IMG_GEO_%1").arg(i)).length()>0)&&(SubElement.elementsByTagName(QString("IMG_GEO_%1").arg(i)).item(0).isElement()==true)) {
                    QDomElement SubSubElement=SubElement.elementsByTagName(QString("IMG_GEO_%1").arg(i)).item(0).toElement();
                    if (SubSubElement.hasAttribute("AutoCompo"))   DefaultBlockSL[i].AutoCompo  =SubSubElement.attribute("AutoCompo").toInt();
                    if (SubSubElement.hasAttribute("AutoFraming")) DefaultBlockSL[i].AutoFraming=SubSubElement.attribute("AutoFraming").toInt();
                }
            }

            if ((Element.elementsByTagName("DefaultBlockBA_IMG").length()>0)&&(Element.elementsByTagName("DefaultBlockBA_IMG").item(0).isElement()==true)) {
                QDomElement SubElement=Element.elementsByTagName("DefaultBlockBA_IMG").item(0).toElement();
                if (SubElement.hasAttribute("TextST"))   DefaultBlockBA_IMG_TextST    =SubElement.attribute("TextST");
                if (SubElement.hasAttribute("ShapeST"))  DefaultBlockBA_IMG_ShapeST   =SubElement.attribute("ShapeST");
                for (int i=1;i<NBR_IMAGETYPE;i++) if ((SubElement.elementsByTagName(QString("IMG_GEO_%1").arg(i)).length()>0)&&(SubElement.elementsByTagName(QString("IMG_GEO_%1").arg(i)).item(0).isElement()==true)) {
                    QDomElement SubSubElement=SubElement.elementsByTagName(QString("IMG_GEO_%1").arg(i)).item(0).toElement();
                    if (SubSubElement.hasAttribute("AutoCompo"))   DefaultBlockBA[i].AutoCompo  =SubSubElement.attribute("AutoCompo").toInt();
                    if (SubSubElement.hasAttribute("AutoFraming")) DefaultBlockBA[i].AutoFraming=SubSubElement.attribute("AutoFraming").toInt();
                }
            }
        }
        if ((root.elementsByTagName("RenderDefault").length()>0)&&(root.elementsByTagName("RenderDefault").item(0).isElement()==true)) {
            QDomElement Element=root.elementsByTagName("RenderDefault").item(0).toElement();
            if (Element.hasAttribute("DefaultNameProjectName"))         DefaultNameProjectName      =Element.attribute("DefaultNameProjectName")=="1";
            if (Element.hasAttribute("Format"))                         DefaultFormat               =Element.attribute("Format").toInt();
            if (Element.hasAttribute("VideoCodec"))                     DefaultVideoCodec           =Element.attribute("VideoCodec");
            if (Element.hasAttribute("VideoBitRate"))                   DefaultVideoBitRate         =Element.attribute("VideoBitRate").toInt();
            if (Element.hasAttribute("AudioCodec"))                     DefaultAudioCodec           =Element.attribute("AudioCodec");
            if (Element.hasAttribute("AudioBitRate"))                   DefaultAudioBitRate         =Element.attribute("AudioBitRate").toInt();
            if (Element.hasAttribute("AudioFreq"))                      DefaultFreq                 =Element.attribute("AudioFreq").toInt();
            if (Element.hasAttribute("ImageSize"))                      DefaultImageSize            =Element.attribute("ImageSize").toInt();
            if (Element.hasAttribute("Standard"))                       DefaultStandard             =Element.attribute("Standard").toInt();
            if (Element.hasAttribute("DefaultSoundtrackBitRate"))       DefaultSoundtrackBitRate    =Element.attribute("DefaultSoundtrackBitRate").toInt();
            if (Element.hasAttribute("DefaultSoundtrackFreq"))          DefaultSoundtrackFreq       =Element.attribute("DefaultSoundtrackFreq").toInt();
            if (Element.hasAttribute("DefaultSoundtrackFormat"))        DefaultSoundtrackFormat     =Element.attribute("DefaultSoundtrackFormat").toInt();
            if (Element.hasAttribute("DefaultSoundtrackAudioCodec"))    DefaultSoundtrackAudioCodec =Element.attribute("DefaultSoundtrackAudioCodec");
            if (Element.hasAttribute("Language"))                       DefaultLanguage             =Element.attribute("Language");
            if (Element.hasAttribute("DefaultSmartphoneType"))          DefaultSmartphoneType       =Element.attribute("DefaultSmartphoneType").toInt();
            if (Element.hasAttribute("DefaultSmartphoneModel"))         DefaultSmartphoneModel      =Element.attribute("DefaultSmartphoneModel").toInt();
            if (Element.hasAttribute("DefaultMultimediaType"))          DefaultMultimediaType       =Element.attribute("DefaultMultimediaType").toInt();
            if (Element.hasAttribute("DefaultMultimediaModel"))         DefaultMultimediaModel      =Element.attribute("DefaultMultimediaModel").toInt();
            if (Element.hasAttribute("DefaultForTheWEBType"))           DefaultForTheWEBType        =Element.attribute("DefaultForTheWEBType").toInt();
            if (Element.hasAttribute("DefaultForTheWEBModel"))          DefaultForTheWEBModel       =Element.attribute("DefaultForTheWEBModel").toInt();
            if (Element.hasAttribute("DefaultLossLess"))                DefaultLossLess             =Element.attribute("DefaultLossLess").toInt();
            if (Element.hasAttribute("DefaultExportThumbnail"))         DefaultExportThumbnail      =Element.attribute("DefaultExportThumbnail")=="1";
            if (Element.hasAttribute("DefaultExportXBMCNfo"))           DefaultExportXBMCNfo        =Element.attribute("DefaultExportXBMCNfo")=="1";
            if (Element.hasAttribute("ProfileHQ"))                      Profile_HQ                  =Element.attribute("ProfileHQ");
            if (Element.hasAttribute("ProfilePQ"))                      Profile_PQ                  =Element.attribute("ProfilePQ");
            if (Element.hasAttribute("PresetHQ"))                       Preset_HQ                   =Element.attribute("PresetHQ");
            if (Element.hasAttribute("PresetPQ"))                       Preset_PQ                   =Element.attribute("PresetPQ");
            if (Element.hasAttribute("TuneHQ"))                         Tune_HQ                     =Element.attribute("TuneHQ");
            if (Element.hasAttribute("TunePQ"))                         Tune_PQ                     =Element.attribute("TunePQ");
        }

        if ((root.elementsByTagName("Models").length()>0)&&(root.elementsByTagName("Models").item(0).isElement()==true)) {
            QDomElement Element=root.elementsByTagName("Models").item(0).toElement();
            if (Element.hasAttribute("DefaultThumbnailName"))           DefaultThumbnailName        =Element.attribute("DefaultThumbnailName");
            if (Element.hasAttribute("ThumbnailModelsIndex"))           ThumbnailModelsNextNumber   =Element.attribute("ThumbnailModelsIndex").toLongLong();
        }

        if ((root.elementsByTagName("RecentFiles").length()>0)&&(root.elementsByTagName("RecentFiles").item(0).isElement()==true)) {
            QDomElement Element=root.elementsByTagName("RecentFiles").item(0).toElement();
            int i=0;
            while ((Element.elementsByTagName("Recent-"+QString("%1").arg(i)).length()>0)&&(root.elementsByTagName("Recent-"+QString("%1").arg(i)).item(0).isElement()==true)) {
                QDomElement SubElement=root.elementsByTagName("Recent-"+QString("%1").arg(i)).item(0).toElement();
                QString     File=SubElement.attribute("File");
                RecentFile.append(File);
                i++;
            }
        }

        // Load other collections
        StyleTextCollection.LoadFromXML(root,TypeConfigFile);
        StyleTextBackgroundCollection.LoadFromXML(root,TypeConfigFile);
        StyleBlockShapeCollection.LoadFromXML(root,TypeConfigFile);
    }

    if (!IsOk) {
        if (TypeConfigFile==USERCONFIGFILE) DeviceModelList.TranslatRenderType();
    } else if (!DeviceModelList.LoadConfigurationFile(TypeConfigFile==USERCONFIGFILE?UserConfigFile:GlobalConfigFile,TypeConfigFile)) {
        if (TypeConfigFile==USERCONFIGFILE) DeviceModelList.TranslatRenderType();
        IsOk=false;
    }

    if ((UpgradeConf)&&(TypeConfigFile==USERCONFIGFILE)) SaveConfigurationFile();

    return IsOk;
}

//====================================================================================================================

bool cApplicationConfig::SaveConfigurationFile() {
    // Save all option to the configuration file
    QFile           file(UserConfigFile);
    QDomDocument    domDocument(QString(APPLICATION_NAME));   domDocument.appendChild(domDocument.createProcessingInstruction("xml", "version=\"1.0\" encoding=\"UTF-8\""));
    QDomElement     root;

    // Ensure destination exist
    QFileInfo       ConfPath(UserConfigFile);
    QDir            ConfDir;
    ConfDir.mkdir(ConfPath.path());

    // Create xml document and root
    root=domDocument.createElement(QString(CONFIGFILE_ROOTNAME));
    domDocument.appendChild(root);

    // Save preferences
    QDomElement     Element,SubElement,SubSubElement;
    Element=domDocument.createElement("GlobalPreferences");
    #if defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
    Element.setAttribute("RasterMode",                  RasterMode?"1":"0");
    #endif
    Element.setAttribute("OpenWEBNewVersion",           OpenWEBNewVersion?"1":"0");
    Element.setAttribute("RestoreWindow",               RestoreWindow?"1":"0");
    Element.setAttribute("RememberLastDirectories",     RememberLastDirectories?"1":"0");
    Element.setAttribute("DisableTooltips",             DisableTooltips?"1":"0");
    Element.setAttribute("ForceLanguage",               ForceLanguage);
    Element.setAttribute("Crop1088To1080",              Crop1088To1080?"1":"0");
    Element.setAttribute("Deinterlace",                 Deinterlace?"1":"0");
    Element.setAttribute("Smoothing",                   Smoothing?"1":0);
    Element.setAttribute("CheckConfigAtStartup",        CheckConfigAtStartup?"1":"0");
    Element.setAttribute("DefaultSoundLevel",           DefaultSoundLevel);
    root.appendChild(Element);

    Element=domDocument.createElement("CacheMemory");
    Element.setAttribute("MemCacheMaxValue",            qlonglong(MemCacheMaxValue/(1024*1024)));
    root.appendChild(Element);

    // Save preferences
    Element=domDocument.createElement("EditorOptions");
    Element.setAttribute("AppendObject",                AppendObject?"1":"0");
    Element.setAttribute("DisplayUnit",                 DisplayUnit);
    Element.setAttribute("PartitionMode",               PartitionMode?"1":"0");
    Element.setAttribute("WindowDisplayMode",           WindowDisplayMode);
    Element.setAttribute("NewTimelineHeight",           TimelineHeight);
    Element.setAttribute("DefaultFraming",              DefaultFraming);
    Element.setAttribute("PreviewFPS",                  (QString("%1").arg(PreviewFPS,0,'f')));
    Element.setAttribute("PreviewSoundVolume",          (QString("%1").arg(PreviewSoundVolume,0,'f')));
    Element.setAttribute("PreviewSamplingRate",         (QString("%1").arg(PreviewSamplingRate)));
    Element.setAttribute("MaxVideoPreviewHeight",       MaxVideoPreviewHeight);
    Element.setAttribute("RandomTransition",            RandomTransition?"1":"0");
    Element.setAttribute("DefaultTransitionFamilly",    DefaultTransitionFamilly);
    Element.setAttribute("DefaultTransitionSubType",    DefaultTransitionSubType);
    Element.setAttribute("DefaultTransitionDuration",   DefaultTransitionDuration);
    Element.setAttribute("AskUserToRemove",             AskUserToRemove?"1":"0");
    Element.setAttribute("WikiFollowInterface",         WikiFollowInterface?"1":"0");
    Element.setAttribute("UseNetworkProxy",             UseNetworkProxy?"1":"0");
    Element.setAttribute("NetworkProxy",                NetworkProxy);
    Element.setAttribute("NetworkProxyPort",            NetworkProxyPort);
    Element.setAttribute("NetworkProxyUser",            NetworkProxyUser);
    Element.setAttribute("NetworkProxyPWD",             NetworkProxyPWD);

    Element.setAttribute("DlgSlideRuler",               SlideRuler);
    Element.setAttribute("ThumbRuler",                  ThumbRuler);
    Element.setAttribute("FramingRuler",                FramingRuler?"1":"0");
    root.appendChild(Element);

    Element=domDocument.createElement("ProjectDefault");
    Element.setAttribute("ImageGeometry",               ImageGeometry);
    Element.setAttribute("NoShotDuration",              NoShotDuration);
    Element.setAttribute("FixedDuration",               FixedDuration);
    Element.setAttribute("DefaultAuthor",               DefaultAuthor);
    Element.setAttribute("DefaultAlbum",                DefaultAlbum);
    Element.setAttribute("DefaultTitleFilling",         DefaultTitleFilling);
    Element.setAttribute("DefaultTransitionSpeedWave",  DefaultTransitionSpeedWave);
    Element.setAttribute("DefaultBlockAnimSpeedWave",   DefaultBlockAnimSpeedWave);
    Element.setAttribute("DefaultImageAnimSpeedWave",   DefaultImageAnimSpeedWave);
    Element.setAttribute("ID3V2Comptatibility",         ID3V2Comptatibility?"1":"0");
    Element.setAttribute("ShortDateFormat",             ShortDateFormat);
    Element.setAttribute("DistanceUnit",                DistanceUnit);

    SubElement=domDocument.createElement("DefaultBlock_Text");
    SubElement.setAttribute("TextST",                   DefaultBlock_Text_TextST);
    SubElement.setAttribute("BackGST",                  DefaultBlock_Text_BackGST);
    SubElement.setAttribute("ShapeST",                  DefaultBlock_Text_ShapeST);
    SubElement.setAttribute("AutoSizePos",              DefaultBlock_AutoSizePos);
    SubElement.setAttribute("AutoLocking",              DefaultBlock_AutoLocking);
    Element.appendChild(SubElement);

    SubElement=domDocument.createElement("DefaultBlockSL_IMG");
    SubElement.setAttribute("TextST",                   DefaultBlockSL_IMG_TextST);
    SubElement.setAttribute("ShapeST",                  DefaultBlockSL_IMG_ShapeST);
    for (int i=1;i<NBR_IMAGETYPE;i++) {
        SubSubElement=domDocument.createElement(QString("IMG_GEO_%1").arg(i));
        SubSubElement.setAttribute("AutoCompo",         DefaultBlockSL[i].AutoCompo);
        SubSubElement.setAttribute("AutoFraming",       DefaultBlockSL[i].AutoFraming);
        SubElement.appendChild(SubSubElement);
    }
    Element.appendChild(SubElement);

    SubElement=domDocument.createElement("DefaultBlockBA_IMG");
    SubElement.setAttribute("TextST",                   DefaultBlockBA_IMG_TextST);
    SubElement.setAttribute("ShapeST",                  DefaultBlockBA_IMG_ShapeST);
    for (int i=1;i<NBR_IMAGETYPE;i++) {
        SubSubElement=domDocument.createElement(QString("IMG_GEO_%1").arg(i));
        SubSubElement.setAttribute("AutoCompo",         DefaultBlockBA[i].AutoCompo);
        SubSubElement.setAttribute("AutoFraming",       DefaultBlockBA[i].AutoFraming);
        SubElement.appendChild(SubSubElement);
    }
    Element.appendChild(SubElement);
    root.appendChild(Element);

    Element=domDocument.createElement("RenderDefault");
    Element.setAttribute("DefaultNameProjectName",      DefaultNameProjectName?"1":"0");
    Element.setAttribute("Format",                      DefaultFormat);
    Element.setAttribute("VideoCodec",                  DefaultVideoCodec);
    Element.setAttribute("VideoBitRate",                DefaultVideoBitRate);
    Element.setAttribute("AudioCodec",                  DefaultAudioCodec);
    Element.setAttribute("AudioBitRate",                DefaultAudioBitRate);
    Element.setAttribute("AudioFreq",                   DefaultFreq);
    Element.setAttribute("Standard",                    DefaultStandard);
    Element.setAttribute("Language",                    DefaultLanguage);
    Element.setAttribute("ImageSize",                   DefaultImageSize);
    Element.setAttribute("DefaultSoundtrackFormat",     DefaultSoundtrackFormat);
    Element.setAttribute("DefaultSoundtrackAudioCodec", DefaultSoundtrackAudioCodec);
    Element.setAttribute("DefaultSoundtrackBitRate",    DefaultSoundtrackBitRate);
    Element.setAttribute("DefaultSoundtrackFreq",       DefaultSoundtrackFreq);
    Element.setAttribute("DefaultSmartphoneType",       DefaultSmartphoneType);
    Element.setAttribute("DefaultSmartphoneModel",      DefaultSmartphoneModel);
    Element.setAttribute("DefaultMultimediaType",       DefaultMultimediaType);
    Element.setAttribute("DefaultMultimediaModel",      DefaultMultimediaModel);
    Element.setAttribute("DefaultForTheWEBType",        DefaultForTheWEBType);
    Element.setAttribute("DefaultForTheWEBModel",       DefaultForTheWEBModel);
    Element.setAttribute("DefaultLossLess",             DefaultLossLess);
    Element.setAttribute("DefaultExportThumbnail",      DefaultExportThumbnail?"1":"0");
    Element.setAttribute("DefaultExportXBMCNfo",        DefaultExportXBMCNfo?"1":"0");
    Element.setAttribute("ProfileHQ",                   Profile_HQ);
    Element.setAttribute("ProfilePQ",                   Profile_PQ);
    Element.setAttribute("PresetHQ",                    Preset_HQ);
    Element.setAttribute("PresetPQ",                    Preset_PQ);
    Element.setAttribute("TuneHQ",                      Tune_HQ);
    Element.setAttribute("TunePQ",                      Tune_PQ);
    root.appendChild(Element);

    Element=domDocument.createElement("Models");
    Element.setAttribute("ThumbnailModelsIndex",        QString("%1").arg(ThumbnailModelsNextNumber));
    Element.setAttribute("DefaultThumbnailName",        DefaultThumbnailName);
    root.appendChild(Element);

    Element=domDocument.createElement("RecentFiles");
    for (int i=0;i<RecentFile.count();i++) {
        SubElement=domDocument.createElement("Recent-"+QString("%1").arg(i));
        SubElement.setAttribute("File",RecentFile.at(i));
        Element.appendChild(SubElement);
    }
    root.appendChild(Element);

    // Save other collections
    StyleTextCollection.SaveToXML(root);
    StyleTextBackgroundCollection.SaveToXML(root);
    StyleBlockShapeCollection.SaveToXML(root);

    // Write file to disk
    if (!file.open(QFile::WriteOnly | QFile::Text)) {
        ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","Error creating configuration file","Error message")+" "+UserConfigFile);
        return false;
    }
    QTextStream out(&file);
    out.setCodec(QTextCodec::codecForName("UTF-8"));
    domDocument.save(out,4);
    file.close();

    return DeviceModelList.SaveConfigurationFile(UserConfigFile);
}

//====================================================================================================================

void cApplicationConfig::InitValues() {
    // Initialise all variables and set them default value
    WindowDisplayMode           = DISPLAYWINDOWMODE_PLAYER; // Mainwindow display mode
    PartitionMode               = false;                    // If true, partition mode is on (timeline with multiple row)
    MemCacheMaxValue            = int64_t(512*1024*1024);
    AskUserToRemove             = true;                     // If true, user must answer to a confirmation dialog box to remove slide
    AppendObject                = false;                    // If true, new object will be append at the end of the diaporama, if false, new object will be insert after current position
    WikiFollowInterface         = true;
    DisplayUnit                 = 1;                        // Display coordinates unit
    DefaultFraming              = 2;                        // 0=Width, 1=Height, 2=Full
    TimelineHeight              = TIMELINEMINHEIGH;         // Initial height of the timeline
    PreviewFPS                  = 12.5;                     // Preview FrameRate
    PreviewSoundVolume          = 0.8;
    PreviewSamplingRate         = 44100;                    // Preview sound audio rate
    MaxVideoPreviewHeight       = 360;
    NoShotDuration              = 6000;                     // Default duration for fixed image when is alone (no shot)
    FixedDuration               = 3000;                     // Default duration for fixed image (msec)
    ImageGeometry               = GEOMETRY_16_9;            // Project image geometry for image rendering
    SlideRuler                  = RULER_DEFAULT;            // if true, ruler is on in slide properties dialog box
    ThumbRuler                  = RULER_THUMB_DEFAULT;
    FramingRuler                = true;                     // if true, ruler is on in framing/correction dialog box
    DefaultTitleFilling         = 0;                        // Default Title filling mode
    DefaultAuthor               = "";                       // Default Author name
    DefaultAlbum                = "";                       // Default Album name
    DefaultTransitionSpeedWave  = SPEEDWAVE_SINQUARTER;     // Default Speed wave for transition
    DefaultBlockAnimSpeedWave   = SPEEDWAVE_LINEAR;         // Default Speed wave for block animation
    DefaultImageAnimSpeedWave   = SPEEDWAVE_LINEAR;         // Default Speed wave for image framing and correction animation
    ID3V2Comptatibility         = false;                    // if true, ffd project properties field are limited to 30 characters
    DefaultThumbnailName        = "100000";
    ShortDateFormat             = QApplication::translate("DlgApplicationSettings","MM/dd/yyyy","Default Date format : dd/MM/yyyy or MM/dd/yyyy or yyyy/MM/dd or dd.MM.yyyy and so on...");
    DistanceUnit                = KILOMETERS;

    DefaultFormat               = 1;                        // Default format = avi
    DefaultNameProjectName      = true;                     // Use project name as default name for rendering
    DefaultImageSize            = SIZE_720P;                // Default image size
    DefaultStandard             = STANDARD_PAL;             // Default standard (PAL/NTSC)
    DefaultSoundtrackFormat     = 5;                        // Default format container for export soundtrack
    DefaultSoundtrackAudioCodec = "libmp3lame";             // Default audio codec for export soundtrack
    DefaultSoundtrackBitRate    = 128000;                   // Default audio bit rate for export soundtrack
    DefaultSoundtrackFreq       = 44100;                    // Default audio frequency for export soundtrack
    DefaultLanguage             = "und";                    // Default Language (ISO 639 language code)

    RandomTransition            = true;                     // if true randomize a transition
    DefaultTransitionFamilly    = TRANSITIONFAMILLY_BASE;   // Transition familly
    DefaultTransitionSubType    = 1;                        // Transition type in the familly
    DefaultTransitionDuration   = 1000;                     // Transition duration (in msec)

    DefaultSmartphoneType       = 0;                        // Default Smartphone Type
    DefaultSmartphoneModel      = 0;                        // Default Smartphone Model
    DefaultMultimediaType       = 0;                        // Default Multimedia Type
    DefaultMultimediaModel      = 0;                        // Default Multimedia Model
    DefaultForTheWEBType        = 0;                        // Default ForTheWEB Type
    DefaultForTheWEBModel       = 0;                        // Default ForTheWEB Model
    DefaultLossLess             = 0;                        // Default Lossless imagesize
    DefaultExportThumbnail      = true;
    DefaultExportXBMCNfo        = true;
    Profile_HQ                  = "main";
    Profile_PQ                  = "baseline";
    Preset_HQ                   = "faster";
    Preset_PQ                   = "veryfast";
    Tune_HQ                     = "zerolatency";
    Tune_PQ                     = "fastdecode";

    // Init collections
    StyleTextCollection.CollectionName          =QString(STYLENAME_TEXTSTYLE);
    StyleTextBackgroundCollection.CollectionName=QString(STYLENAME_BACKGROUNDSTYLE);
    StyleBlockShapeCollection.CollectionName    =QString(STYLENAME_BLOCKSHAPESTYLE);

    // Default new text block options
    DefaultBlock_Text_TextST    ="###GLOBALSTYLE###:0";
    DefaultBlock_Text_BackGST   ="###GLOBALSTYLE###:0";
    DefaultBlock_Text_ShapeST   ="###GLOBALSTYLE###:0";
    DefaultBlock_AutoSizePos    =AUTOCOMPOSIZE_HALFSCREEN;
    DefaultBlock_AutoLocking    =AUTOFRAMING_CUSTOMUNLOCK;

    // Default new image block option (when slide creation)
    DefaultBlockSL_IMG_TextST   ="###GLOBALSTYLE###:0";
    DefaultBlockSL_IMG_ShapeST  ="###GLOBALSTYLE###:0";
    DefaultBlockSL[IMAGETYPE_UNKNOWN         ].AutoCompo=DefaultBlock_AutoSizePos;      DefaultBlockSL[IMAGETYPE_UNKNOWN         ].AutoFraming=DefaultBlock_AutoLocking;
    DefaultBlockSL[IMAGETYPE_PHOTOLANDSCAPE  ].AutoCompo=AUTOCOMPOSIZE_FULLSCREEN;      DefaultBlockSL[IMAGETYPE_PHOTOLANDSCAPE  ].AutoFraming=AUTOFRAMING_WIDTHMIDLEMAX;
    DefaultBlockSL[IMAGETYPE_PHOTOPORTRAIT   ].AutoCompo=AUTOCOMPOSIZE_FULLSCREEN;      DefaultBlockSL[IMAGETYPE_PHOTOPORTRAIT   ].AutoFraming=AUTOFRAMING_HEIGHTMIDLEMAX;
    DefaultBlockSL[IMAGETYPE_CLIPARTLANDSCAPE].AutoCompo=AUTOCOMPOSIZE_REALSIZE;        DefaultBlockSL[IMAGETYPE_CLIPARTLANDSCAPE].AutoFraming=AUTOFRAMING_FULLMAX;
    DefaultBlockSL[IMAGETYPE_CLIPARTPORTRAIT ].AutoCompo=AUTOCOMPOSIZE_REALSIZE;        DefaultBlockSL[IMAGETYPE_CLIPARTPORTRAIT ].AutoFraming=AUTOFRAMING_FULLMAX;
    DefaultBlockSL[IMAGETYPE_VIDEOLANDSCAPE  ].AutoCompo=AUTOCOMPOSIZE_REALSIZE;        DefaultBlockSL[IMAGETYPE_VIDEOLANDSCAPE  ].AutoFraming=AUTOFRAMING_FULLMAX;
    DefaultBlockSL[IMAGETYPE_VIDEOPORTRAIT   ].AutoCompo=AUTOCOMPOSIZE_REALSIZE;        DefaultBlockSL[IMAGETYPE_VIDEOPORTRAIT   ].AutoFraming=AUTOFRAMING_FULLMAX;

    // Default new image block option (when block add in slide dialog)
    DefaultBlockBA_IMG_TextST   ="###GLOBALSTYLE###:0";
    DefaultBlockBA_IMG_ShapeST  ="###GLOBALSTYLE###:0";
    DefaultBlockBA[IMAGETYPE_UNKNOWN         ].AutoCompo=DefaultBlock_AutoSizePos;      DefaultBlockBA[IMAGETYPE_UNKNOWN         ].AutoFraming=DefaultBlock_AutoLocking;
    DefaultBlockBA[IMAGETYPE_PHOTOLANDSCAPE  ].AutoCompo=AUTOCOMPOSIZE_HALFSCREEN;      DefaultBlockBA[IMAGETYPE_PHOTOLANDSCAPE  ].AutoFraming=AUTOFRAMING_WIDTHMIDLEMAX;
    DefaultBlockBA[IMAGETYPE_PHOTOPORTRAIT   ].AutoCompo=AUTOCOMPOSIZE_HALFSCREEN;      DefaultBlockBA[IMAGETYPE_PHOTOPORTRAIT   ].AutoFraming=AUTOFRAMING_HEIGHTMIDLEMAX;
    DefaultBlockBA[IMAGETYPE_CLIPARTLANDSCAPE].AutoCompo=AUTOCOMPOSIZE_REALSIZE;        DefaultBlockBA[IMAGETYPE_CLIPARTLANDSCAPE].AutoFraming=AUTOFRAMING_FULLMAX;
    DefaultBlockBA[IMAGETYPE_CLIPARTPORTRAIT ].AutoCompo=AUTOCOMPOSIZE_REALSIZE;        DefaultBlockBA[IMAGETYPE_CLIPARTPORTRAIT ].AutoFraming=AUTOFRAMING_FULLMAX;
    DefaultBlockBA[IMAGETYPE_VIDEOLANDSCAPE  ].AutoCompo=AUTOCOMPOSIZE_REALSIZE;        DefaultBlockBA[IMAGETYPE_VIDEOLANDSCAPE  ].AutoFraming=AUTOFRAMING_FULLMAX;
    DefaultBlockBA[IMAGETYPE_VIDEOPORTRAIT   ].AutoCompo=AUTOCOMPOSIZE_REALSIZE;        DefaultBlockBA[IMAGETYPE_VIDEOPORTRAIT   ].AutoFraming=AUTOFRAMING_FULLMAX;
}

//====================================================================================================================

QStringList cApplicationConfig::LoadBrowserFavoritesFromDabase() {
    QString     TextValue;
    QStringList BrowserFavorites;
    qlonglong   Nbr=0;

    SettingsTable->GetIntAndTextValue("BrowserFavorites",&Nbr,&TextValue);

    QDomDocument    DomDocument;
    QString         errorStr;
    int             errorLine,errorColumn;
    if ((DomDocument.setContent(TextValue,true,&errorStr,&errorLine,&errorColumn))&&
        (DomDocument.elementsByTagName("BrowserFavorites").length()>0)&&
        (DomDocument.elementsByTagName("BrowserFavorites").item(0).isElement()==true)) {
        QDomElement Element=DomDocument.elementsByTagName("BrowserFavorites").item(0).toElement();
        for (int i=0;i<Nbr;i++) if (Element.hasAttribute(QString("BrowserFavorites_%1").arg(i))) BrowserFavorites.append(Element.attribute(QString("BrowserFavorites_%1").arg(i)));
    }
    return BrowserFavorites;
}

void cApplicationConfig::SaveBrowserFavoritesToDabase(QStringList BrowserFavorites) {
    QDomDocument    DomDocument;
    QDomElement     Element=DomDocument.createElement("BrowserFavorites");
    for (int i=0;i<BrowserFavorites.count();i++) Element.setAttribute(QString("BrowserFavorites_%1").arg(i),BrowserFavorites[i]);
    DomDocument.appendChild(Element);
    SettingsTable->SetIntAndTextValue("BrowserFavorites",BrowserFavorites.count(),DomDocument.toString());
}

//====================================================================================================================
// Duplicate an image in ressource and get a new RessourceKey

void cApplicationConfig::DuplicateRessource(qlonglong *RessourceKey) {
    QImage Image;
    SlideThumbsTable->GetThumbs(RessourceKey,&Image);
    cLuLoImageCacheObject *ImgCache=ImagesCache.FindObject(*RessourceKey,-1,QDateTime(),0,Smoothing,false);
    cLuLoImageCacheObject *NewImgCache=new cLuLoImageCacheObject(*RessourceKey,-1,QDateTime(),0,"",Smoothing,&ImagesCache);
    *RessourceKey=-1;
    SlideThumbsTable->SetThumbs(RessourceKey,Image);
    NewImgCache->RessourceKey=*RessourceKey;
    if (ImgCache->CachePreviewImage) NewImgCache->CachePreviewImage=new QImage(*ImgCache->CachePreviewImage);
    if (ImgCache->CacheRenderImage)  NewImgCache->CacheRenderImage =new QImage(*ImgCache->CacheRenderImage);
    NewImgCache->ByteCount=ImgCache->ByteCount;
    ImagesCache.List.prepend(NewImgCache);
}

//====================================================================================================================
// return a QNetworkAccessManager object configured with proxy if needed

QNetworkAccessManager *cApplicationConfig::GetNetworkAccessManager(QObject *parent) {
    QNetworkAccessManager *NAM=new QNetworkAccessManager(parent);
    if (UseNetworkProxy) {
        QNetworkProxy Proxy(QNetworkProxy::HttpProxy,NetworkProxy,NetworkProxyPort,NetworkProxyUser,NetworkProxyPWD);
        NAM->setProxy(Proxy);
    }
    return NAM;
}
