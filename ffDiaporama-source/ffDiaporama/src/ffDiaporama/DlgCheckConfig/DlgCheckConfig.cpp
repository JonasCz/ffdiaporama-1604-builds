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

#include "DlgCheckConfig.h"
#include "ui_DlgCheckConfig.h"
#include "engine/cBaseMediaFile.h"
#include "engine/_Transition.h"
#include "engine/cBrushDefinition.h"

#define ICON_GREEN      ":/img/SmallGreen.png"
#define ICON_RED        ":/img/SmallRed.png"
#define ICON_YELLOW     ":/img/SmallYellow.png"

//====================================================================================================================

DlgCheckConfig::DlgCheckConfig(cApplicationConfig *ApplicationConfig,QWidget *parent)
    :QCustomDialog(ApplicationConfig,parent),ui(new Ui::DlgCheckConfig) {

    ui->setupUi(this);
    OkBt    =ui->OKBT;
    HelpBt  =ui->HelpBt;
    HelpFile="0106";
}

//====================================================================================================================

DlgCheckConfig::~DlgCheckConfig() {
    delete ui;
}

//====================================================================================================================
// Initialise dialog

void DlgCheckConfig::DoInitDialog() {
    QString StatusStr;
    int     LumaListNbr=LumaList_Bar.List.count()+LumaList_Box.List.count()+LumaList_Center.List.count()+LumaList_Checker.List.count()+LumaList_Clock.List.count()+LumaList_Snake.List.count();

    // ffDiaporama
    ui->ListWidget->addItem(new QListWidgetItem(QString("%1 %2 (%3) ...").arg(APPLICATION_NAME).arg(CurrentAppName).arg(CurrentAppVersion)));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","Operating system version: %1 - %2 Core/CPU").arg(ApplicationConfig->Plateforme).arg(getCpuCount())));

    #if (!defined(Q_OS_WIN64))&&(defined(Q_OS_WIN32) || defined(Q_OS_LINUX32) || defined(Q_OS_SOLARIS32))
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","Application architecture: 32 bits")));
    #else
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","Application architecture: 64 bits")));
    #endif
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","User config file: %1").arg(QDir::toNativeSeparators(ApplicationConfig->UserConfigFile))));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","Global config file: %1").arg(QDir::toNativeSeparators(ApplicationConfig->GlobalConfigFile))));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","Starting path: %1").arg(QDir::toNativeSeparators(ApplicationConfig->StartingPath))));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","Working path set to: %1").arg(QDir::toNativeSeparators(QDir::currentPath()))));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","Search path set to: %1").arg(getenv("PATH"))));
    // Ressources libraries
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","The background library contains %1 pictures").arg(BackgroundList.List.count())));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","The non-luma library contains %1 transitions").arg(IconList.List.count()-LumaListNbr)));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","The luma library contains %1 transitions").arg(LumaListNbr)));
    // fmt_filters
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","fmt_filters version:0.6.4-Licence=LGPL")));
    // qimageblitz
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","qimageblitz version:0.6.6-Licence=LGPL")));
    // QT
    ui->ListWidget->addItem(new QListWidgetItem(""));
    ui->ListWidget->addItem(new QListWidgetItem(QApplication::translate("DlgCheckConfig","QT version: %1").arg(qVersion())));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","Detected system locale: %1").arg(ApplicationConfig->CurrentLanguage)));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","Translation file loaded: %1").arg(QDir::toNativeSeparators(QDir().absoluteFilePath(QString("locale")+QDir::separator()+QString("locale_")+ApplicationConfig->CurrentLanguage+".qm")))));
    ui->ListWidget->addItem(new QListWidgetItem(""));

    // exiv2
    StatusStr=QApplication::translate("DlgCheckConfig","LibExiv2 version:")+QString(" %1.%2.%3").arg(Exiv2MajorVersion).arg(Eviv2MinorVersion).arg(Exiv2PatchVersion);
    ui->ListWidget->addItem(new QListWidgetItem(StatusStr));
    StatusStr=QApplication::translate("DlgCheckConfig","LibExiv2 support for preview image")+" "+(Exiv2WithPreview?QApplication::translate("DlgCheckConfig","available"):QApplication::translate("DlgCheckConfig","not available"));
    ui->ListWidget->addItem(new QListWidgetItem(Exiv2WithPreview?QIcon(ICON_GREEN):QIcon(ICON_YELLOW),StatusStr));
    ui->ListWidget->addItem(new QListWidgetItem(""));

    #if defined(LIBAV) && (LIBAVVERSIONINT<=8)
    bool Status=false;
    // taglib
    ui->ListWidget->addItem(new QListWidgetItem(QApplication::translate("DlgCheckConfig","TAGLib version:")+QString(" %1.%2.%3").arg(TaglibMajorVersion).arg(TaglibMinorVersion).arg(TaglibPatchVersion)));
    #ifdef TAGLIBWITHFLAC
    Status=true;
    #else
    Status=false;
    #endif
    StatusStr=QApplication::translate("DlgCheckConfig","TAGLib support for FLAC")+" "+(Status?QApplication::translate("DlgCheckConfig","available"):QApplication::translate("DlgCheckConfig","not available"));
    ui->ListWidget->addItem(new QListWidgetItem(Status?QIcon(ICON_GREEN):QIcon(ICON_YELLOW),StatusStr));
    #ifdef TAGLIBWITHASF
    Status=true;
    #else
    Status=false;
    #endif
    StatusStr=QApplication::translate("DlgCheckConfig","TAGLib support for ASF/WMA")+" "+(Status?QApplication::translate("DlgCheckConfig","available"):QApplication::translate("DlgCheckConfig","not available"));
    ui->ListWidget->addItem(new QListWidgetItem(Status?QIcon(ICON_GREEN):QIcon(ICON_YELLOW),StatusStr));
    #ifdef TAGLIB_WITH_MP4
    Status=true;
    #else
    Status=false;
    #endif
    StatusStr=QApplication::translate("DlgCheckConfig","TAGLib support for M4A/MP4")+" "+(Status?QApplication::translate("DlgCheckConfig","available"):QApplication::translate("DlgCheckConfig","not available"));
    ui->ListWidget->addItem(new QListWidgetItem(Status?QIcon(ICON_GREEN):QIcon(ICON_YELLOW),StatusStr));
    ui->ListWidget->addItem(new QListWidgetItem(""));
    #endif

    // libav
    ui->ListWidget->addItem(new QListWidgetItem("libav"));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","LIBAV general version:")+
                                            #if defined(FFMPEG)
                                                FFMPEGVERSION
                                            #else
                                                LIBAVVERSION
                                            #endif
                                                ));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","LIBAVUTIL version: %1.%2.%3.%4") .arg(LIBAVUTIL_VERSION_MAJOR) .arg(LIBAVUTIL_VERSION_MINOR) .arg(LIBAVUTIL_VERSION_MICRO) .arg(avutil_version())));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","LIBAVCODEC version: %1.%2.%3.%4") .arg(LIBAVCODEC_VERSION_MAJOR) .arg(LIBAVCODEC_VERSION_MINOR) .arg(LIBAVCODEC_VERSION_MICRO) .arg(avcodec_version())));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","LIBAVFORMAT version: %1.%2.%3.%4").arg(LIBAVFORMAT_VERSION_MAJOR).arg(LIBAVFORMAT_VERSION_MINOR).arg(LIBAVFORMAT_VERSION_MICRO).arg(avformat_version())));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","LIBAVFILTER version: %1.%2.%3.%4").arg(LIBAVFILTER_VERSION_MAJOR).arg(LIBAVFILTER_VERSION_MINOR).arg(LIBAVFILTER_VERSION_MICRO).arg(avfilter_version())));
    ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","LIBSWSCALE version: %1.%2.%3.%4") .arg(LIBSWSCALE_VERSION_MAJOR) .arg(LIBSWSCALE_VERSION_MINOR) .arg(LIBSWSCALE_VERSION_MICRO) .arg(swscale_version())));
    #if defined(LIBAV) && (LIBAVVERSIONINT>=9)
        ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","LIBAVRESAMPLE version: %1.%2.%3.%4") .arg(LIBAVRESAMPLE_VERSION_MAJOR) .arg(LIBAVRESAMPLE_VERSION_MINOR) .arg(LIBAVRESAMPLE_VERSION_MICRO).arg(avresample_version())));
    #elif defined(FFMPEG)
        ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","LIBSWRESAMPLE version: %1.%2.%3.%4") .arg(LIBSWRESAMPLE_VERSION_MAJOR) .arg(LIBSWRESAMPLE_VERSION_MINOR) .arg(LIBSWRESAMPLE_VERSION_MICRO).arg(swresample_version())));
    #endif

    if ((AUDIOCODECDEF[7].IsFind)&&(VIDEOCODECDEF[8].IsFind)&&(FORMATDEF[2].IsFind)) ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_GREEN),QApplication::translate("DlgCheckConfig","Lossless rendering")+" "+QApplication::translate("DlgCheckConfig","available")));
        else ui->ListWidget->addItem(new QListWidgetItem(QIcon(ICON_RED),QApplication::translate("DlgCheckConfig","Lossless rendering")+" "+QApplication::translate("DlgCheckConfig","not available")));

    ui->ListWidget->addItem(new QListWidgetItem(""));

    // Codecs
    ui->ListWidget->addItem(new QListWidgetItem(QApplication::translate("DlgCheckConfig","Audio Codecs")));
    for (int i=0;i<NBR_AUDIOCODECDEF;i++) ui->ListWidget->addItem(new QListWidgetItem(AUDIOCODECDEF[i].IsFind?QIcon(ICON_GREEN):AUDIOCODECDEF[i].IsRead?QIcon(ICON_YELLOW):QIcon(ICON_RED),QString(AUDIOCODECDEF[i].LongName)+" "+(AUDIOCODECDEF[i].IsFind||AUDIOCODECDEF[i].IsRead?QApplication::translate("DlgCheckConfig","available")+QString(" - Codec=%1").arg(QString(AUDIOCODECDEF[i].ShortName)):QApplication::translate("DlgCheckConfig","not available"))));

    ui->ListWidget->addItem(new QListWidgetItem(""));
    ui->ListWidget->addItem(new QListWidgetItem(QApplication::translate("DlgCheckConfig","Video Codecs")));
    for (int i=0;i<NBR_VIDEOCODECDEF;i++) ui->ListWidget->addItem(new QListWidgetItem(VIDEOCODECDEF[i].IsFind?QIcon(ICON_GREEN):VIDEOCODECDEF[i].IsRead?QIcon(ICON_YELLOW):QIcon(ICON_RED),QString(VIDEOCODECDEF[i].LongName)+" "+(VIDEOCODECDEF[i].IsFind||VIDEOCODECDEF[i].IsRead?QApplication::translate("DlgCheckConfig","available")+QString(" - Codec=%1").arg(QString(VIDEOCODECDEF[i].ShortName)):QApplication::translate("DlgCheckConfig","not available"))));

    ui->ListWidget->addItem(new QListWidgetItem(""));
    ui->ListWidget->addItem(new QListWidgetItem(QApplication::translate("DlgCheckConfig","Container Formats")));
    for (int i=0;i<VFORMAT_NBR;i++) ui->ListWidget->addItem(new QListWidgetItem(FORMATDEF[i].IsFind?QIcon(ICON_GREEN):FORMATDEF[i].IsRead?QIcon(ICON_YELLOW):QIcon(ICON_RED),QString(FORMATDEF[i].LongName)+" "+(FORMATDEF[i].IsFind||FORMATDEF[i].IsRead?QApplication::translate("DlgCheckConfig","available"):QApplication::translate("DlgCheckConfig","not available"))));

    ui->CheckConfigAtStartupCB->setChecked(ApplicationConfig->CheckConfigAtStartup);
}

//====================================================================================================================
// Call when user click on Ok button

bool DlgCheckConfig::DoAccept() {
    ApplicationConfig->CheckConfigAtStartup=ui->CheckConfigAtStartupCB->isChecked();
    return true;
}
