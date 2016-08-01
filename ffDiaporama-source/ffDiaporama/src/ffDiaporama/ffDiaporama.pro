# ======================================================================
#  This file is part of ffDiaporama
#  ffDiaporama is a tools to make diaporama as video
#  Copyright (C) 2011-2014 Dominique Levray <domledom@laposte.net>
#
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#
#  You should have received a copy of the GNU General Public License along
#  with this program; if not, write to the Free Software Foundation, Inc.,
#  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
# ======================================================================

isEmpty(PREFIX) {
    PREFIX = /usr
}

CONFIG += qt thread

greaterThan(QT_MAJOR_VERSION,4) {
    # QT5 version
    QT += widgets concurrent help multimedia
} else {
    # QT4 version
    CONFIG += help mobility
    MOBILITY = multimedia

    unix {
        INCLUDEPATH += /usr/include/QtMultimediaKit
        INCLUDEPATH += /usr/include/QtMobility
    }
}

QT          += core gui xml network svg sql
QMAKE_STRIP  = echo
APPFOLDER    = ffDiaporama
TARGET       = ffDiaporama
TEMPLATE     = app

#--------------------------------------------------------------
# Add link to ffDiaporama_lib
#--------------------------------------------------------------

INCLUDEPATH += ../ffDiaporama_lib
LIBS        += -lffDiaporama_lib

#--------------------------------------------------------------
# DEFINES $$DESTDIR DIRECTORIES, COMMON INCLUDES AND COMMON LIBS
#--------------------------------------------------------------

DEFINES +=SHARE_DIR=\\\"$$PREFIX\\\"

unix {
    CONFIG += link_pkgconfig
    PKGCONFIG += libavformat libavcodec libavutil libswscale libavfilter libswresample
    LIBS   += -L../ffDiaporama_lib

    CFLAGS += -W"Missing debug information for"

    HARDWARE_PLATFORM = $$system(uname -m)
    contains(HARDWARE_PLATFORM,x86_64) {
           DEFINES+=Q_OS_LINUX64
            message("Linux x86_64 build")
    } else {
            DEFINES+=Q_OS_LINUX32
            message("Linux x86 build")
    }


    LIBS        += -lexiv2                                                  #------ Exiv2

    OTHER_FILES += ffDiaporama.rc \
                   ffdiaporama.ico \    # icon file to be install on windows system
                   ffDiaporama.url      # URL file to be install on windows system

} else:win32 { 

    contains(QMAKE_HOST.arch,x86_64) {
        DEFINES+=Q_OS_WIN64
        message("x86_64 build")
        INCLUDEPATH += "../../../win_src/ffmpeg-2.2.1-win64-dev/include"
        LIBS        += -L"../../../win_src/ffmpeg-2.2.1-win64-dev/lib"
        CONFIG(debug, debug|release) {
            LIBS += -L"F:\Dev\ffdiaporama\trunk\Win64Debug\src\ffDiaporama_lib\debug"
        } else {
            LIBS += -L"F:\Dev\ffdiaporama\trunk\Win64Release\src\ffDiaporama_lib\release"
        }
    } else {
        DEFINES+=Q_OS_WIN32
        message("x86 build")
        INCLUDEPATH += "../../../win_src/ffmpeg-2.2.1-win32-dev/include"
        LIBS        += -L"../../../win_src/ffmpeg-2.2.1-win32-dev/lib"
        CONFIG(debug, debug|release) {
            LIBS += -L"F:\Dev\ffdiaporama\trunk\Win32Debug\src\ffDiaporama_lib\debug"
        } else {
            LIBS += -L"F:\Dev\ffdiaporama\trunk\Win32Release\src\ffDiaporama_lib\release"
        }
    }

    CONFIG      += sql                                                      #------ I don't know why, but windows version need sql module in config directive
    DEFINES     += USELIBSWRESAMPLE

    INCLUDEPATH += .                                                        #------ I don't know why, but windows need this !
    INCLUDEPATH += ../exiv2
    INCLUDEPATH += "../../../win_src/exiv2-0.24/src"
    INCLUDEPATH += "../../../win_src/msinttypes"

    LIBS        += -lgdi32 -lkernel32 -luser32 -lshell32 -ladvapi32         #------ Windows GDI libs link
    LIBS        += -lswresample                                             #------ conditionnaly include libswresample

    SOURCES += \
        ../../../win_src/exiv2-0.24/src/xmpsidecar.cpp \
        ../../../win_src/exiv2-0.24/src/xmp.cpp \
        ../../../win_src/exiv2-0.24/src/version.cpp \
        ../../../win_src/exiv2-0.24/src/value.cpp \
        ../../../win_src/exiv2-0.24/src/utils.cpp \
        ../../../win_src/exiv2-0.24/src/types.cpp \
        ../../../win_src/exiv2-0.24/src/tiffvisitor.cpp \
        ../../../win_src/exiv2-0.24/src/tiffimage.cpp \
        ../../../win_src/exiv2-0.24/src/tiffcomposite.cpp \
        ../../../win_src/exiv2-0.24/src/tgaimage.cpp \
        ../../../win_src/exiv2-0.24/src/tags.cpp \
        ../../../win_src/exiv2-0.24/src/sonymn.cpp \
        ../../../win_src/exiv2-0.24/src/sigmamn.cpp \
        ../../../win_src/exiv2-0.24/src/samsungmn.cpp \
        ../../../win_src/exiv2-0.24/src/rw2image.cpp \
        ../../../win_src/exiv2-0.24/src/rafimage.cpp \
        ../../../win_src/exiv2-0.24/src/psdimage.cpp \
        ../../../win_src/exiv2-0.24/src/properties.cpp \
        ../../../win_src/exiv2-0.24/src/preview.cpp \
        ../../../win_src/exiv2-0.24/src/pngimage.cpp \
        ../../../win_src/exiv2-0.24/src/pngchunk.cpp \
        ../../../win_src/exiv2-0.24/src/pgfimage.cpp \
        ../../../win_src/exiv2-0.24/src/pentaxmn.cpp \
        ../../../win_src/exiv2-0.24/src/panasonicmn.cpp \
        ../../../win_src/exiv2-0.24/src/orfimage.cpp \
        ../../../win_src/exiv2-0.24/src/olympusmn.cpp \
        ../../../win_src/exiv2-0.24/src/nikonmn.cpp \
        ../../../win_src/exiv2-0.24/src/mrwimage.cpp \
        ../../../win_src/exiv2-0.24/src/minoltamn.cpp \
        ../../../win_src/exiv2-0.24/src/metadatum.cpp \
        ../../../win_src/exiv2-0.24/src/makernote.cpp \
        ../../../win_src/exiv2-0.24/src/localtime.c \
        ../../../win_src/exiv2-0.24/src/jpgimage.cpp \
        ../../../win_src/exiv2-0.24/src/jp2image.cpp \
        ../../../win_src/exiv2-0.24/src/iptc.cpp \
        ../../../win_src/exiv2-0.24/src/image.cpp \
        ../../../win_src/exiv2-0.24/src/gifimage.cpp \
        ../../../win_src/exiv2-0.24/src/getopt_win32.c \
        ../../../win_src/exiv2-0.24/src/futils.cpp \
        ../../../win_src/exiv2-0.24/src/fujimn.cpp \
        ../../../win_src/exiv2-0.24/src/exif.cpp \
        ../../../win_src/exiv2-0.24/src/error.cpp \
        ../../../win_src/exiv2-0.24/src/epsimage.cpp \
        ../../../win_src/exiv2-0.24/src/easyaccess.cpp \
        ../../../win_src/exiv2-0.24/src/datasets.cpp \
        ../../../win_src/exiv2-0.24/src/crwimage.cpp \
        ../../../win_src/exiv2-0.24/src/cr2image.cpp \
        ../../../win_src/exiv2-0.24/src/convert.cpp \
        ../../../win_src/exiv2-0.24/src/canonmn.cpp \
        ../../../win_src/exiv2-0.24/src/bmpimage.cpp \
        ../../../win_src/exiv2-0.24/src/basicio.cpp \
        ../../../win_src/exiv2-0.24/src/asfvideo.cpp \
        ../../../win_src/exiv2-0.24/src/matroskavideo.cpp \
        ../../../win_src/exiv2-0.24/src/quicktimevideo.cpp \
        ../../../win_src/exiv2-0.24/src/riffvideo.cpp

    HEADERS += \
        ../../../win_src/exiv2-0.24/src/xmpsidecar.hpp \
        ../../../win_src/exiv2-0.24/src/xmp.hpp \
        ../../../win_src/exiv2-0.24/src/version.hpp \
        ../../../win_src/exiv2-0.24/src/value.hpp \
        ../../../win_src/exiv2-0.24/src/utils.hpp \
        ../../../win_src/exiv2-0.24/src/tzfile.h \
        ../../../win_src/exiv2-0.24/src/types.hpp \
        ../../../win_src/exiv2-0.24/src/timegm.h \
        ../../../win_src/exiv2-0.24/src/tiffvisitor_int.hpp \
        ../../../win_src/exiv2-0.24/src/tiffimage_int.hpp \
        ../../../win_src/exiv2-0.24/src/tiffimage.hpp \
        ../../../win_src/exiv2-0.24/src/tifffwd_int.hpp \
        ../../../win_src/exiv2-0.24/src/tiffcomposite_int.hpp \
        ../../../win_src/exiv2-0.24/src/tgaimage.hpp \
        ../../../win_src/exiv2-0.24/src/tags_int.hpp \
        ../../../win_src/exiv2-0.24/src/tags.hpp \
        ../../../win_src/exiv2-0.24/src/sonymn_int.hpp \
        ../../../win_src/exiv2-0.24/src/sigmamn_int.hpp \
        ../../../win_src/exiv2-0.24/src/samsungmn_int.hpp \
        ../../../win_src/exiv2-0.24/src/rw2image_int.hpp \
        ../../../win_src/exiv2-0.24/src/rw2image.hpp \
        ../../../win_src/exiv2-0.24/src/rcsid_int.hpp \
        ../../../win_src/exiv2-0.24/src/rafimage.hpp \
        ../../../win_src/exiv2-0.24/src/psdimage.hpp \
        ../../../win_src/exiv2-0.24/src/properties.hpp \
        ../../../win_src/exiv2-0.24/src/private.h \
        ../../../win_src/exiv2-0.24/src/preview.hpp \
        ../../../win_src/exiv2-0.24/src/pngimage.hpp \
        ../../../win_src/exiv2-0.24/src/pngchunk_int.hpp \
        ../../../win_src/exiv2-0.24/src/pgfimage.hpp \
        ../../../win_src/exiv2-0.24/src/pentaxmn_int.hpp \
        ../../../win_src/exiv2-0.24/src/panasonicmn_int.hpp \
        ../../../win_src/exiv2-0.24/src/orfimage_int.hpp \
        ../../../win_src/exiv2-0.24/src/orfimage.hpp \
        ../../../win_src/exiv2-0.24/src/olympusmn_int.hpp \
        ../../../win_src/exiv2-0.24/src/nikonmn_int.hpp \
        ../../../win_src/exiv2-0.24/src/mrwimage.hpp \
        ../../../win_src/exiv2-0.24/src/minoltamn_int.hpp \
        ../../../win_src/exiv2-0.24/src/metadatum.hpp \
        ../../../win_src/exiv2-0.24/src/makernote_int.hpp \
        ../../../win_src/exiv2-0.24/src/jpgimage.hpp \
        ../../../win_src/exiv2-0.24/src/jp2image.hpp \
        ../../../win_src/exiv2-0.24/src/iptc.hpp \
        ../../../win_src/exiv2-0.24/src/image.hpp \
        ../../../win_src/exiv2-0.24/src/i18n.h \
        ../../../win_src/exiv2-0.24/src/gifimage.hpp \
        ../../../win_src/exiv2-0.24/src/getopt_win32.h \
        ../../../win_src/exiv2-0.24/src/futils.hpp \
        ../../../win_src/exiv2-0.24/src/fujimn_int.hpp \
        ../../../win_src/exiv2-0.24/src/exiv2app.hpp \
        ../../../win_src/exiv2-0.24/src/exiv2.hpp \
        ../../../win_src/exiv2-0.24/src/exif.hpp \
        ../../../win_src/exiv2-0.24/src/error.hpp \
        ../../../win_src/exiv2-0.24/src/epsimage.hpp \
        ../../../win_src/exiv2-0.24/src/easyaccess.hpp \
        ../../../win_src/exiv2-0.24/src/datasets.hpp \
        ../../../win_src/exiv2-0.24/src/crwimage_int.hpp \
        ../../../win_src/exiv2-0.24/src/crwimage.hpp \
        ../../../win_src/exiv2-0.24/src/cr2image_int.hpp \
        ../../../win_src/exiv2-0.24/src/cr2image.hpp \
        ../../../win_src/exiv2-0.24/src/convert.hpp \
        ../../../win_src/exiv2-0.24/src/canonmn_int.hpp \
        ../../../win_src/exiv2-0.24/src/bmpimage.hpp \
        ../../../win_src/exiv2-0.24/src/basicio.hpp \
        ../../../win_src/exiv2-0.24/src/actions.hpp \
        ../../../win_src/exiv2-0.24/src/asfvideo.hpp \
        ../../../win_src/exiv2-0.24/src/matroskavideo.hpp \
        ../../../win_src/exiv2-0.24/src/quicktimevideo.hpp \
        ../../../win_src/exiv2-0.24/src/riffvideo.hpp \
            ../exiv2/exv_msvc.h

    RC_FILE     += ffDiaporama.rc
    OTHER_FILES += ffdiaporama.ico \    # icon file to be install on windows system
                   ffDiaporama.url      # URL file to be install on windows system

}

#---- Libs for windows and linux
LIBS        += -lavformat -lavcodec -lavutil -lswscale -lavfilter           #------ libav

#--------------------------------------------------------------
# PROJECT FILES
#--------------------------------------------------------------

# Ressource files
RESOURCES   += RSCffDiaporama.qrc

# Source files
SOURCES +=  MainWindow/cCustomSlideTable.cpp \
            MainWindow/mainwindow.cpp \
            DlgRenderVideo/DlgRenderVideo.cpp \
            DlgManageStyle/DlgManageStyle.cpp \
            DlgAbout/DlgAbout.cpp \
            DlgTransition/DlgTransitionProperties.cpp \
            DlgMusic/DlgMusicProperties.cpp \
            DlgMusic/DlgEditMusic.cpp \
            DlgMusic/DlgAdjustToSound.cpp \
            DlgBackground/DlgBackgroundProperties.cpp \
            DlgAppSettings/DlgManageDevices/DlgManageDevices.cpp \
            DlgAppSettings/DlgApplicationSettings.cpp \
            DlgGMapsLocation/DlgGMapsLocation.cpp \
            DlgGMapsLocation/DlgGMapsGeneration.cpp \
            DlgImage/wgt_QGMapsMap/wgt_QGMapsMap.cpp \
            DlgImage/wgt_QGMapsMap/cCustomLocationTable.cpp \
            DlgImage/wgt_QEditImage/cImgInteractiveZone.cpp \
            DlgImage/wgt_QEditImage/wgt_QEditImage.cpp \
            DlgImage/wgt_QEditVideo/wgt_QEditVideo.cpp \
            DlgImage/DlgImageCorrection.cpp \
            DlgSlide/cCustomBlockTable.cpp \
            DlgSlide/DlgSlideProperties.cpp \
            DlgSlide/cInteractiveZone.cpp \
            DlgSlide/cCustomShotTable.cpp \
            DlgSlide/DlgRuler/DlgRulerDef.cpp \
            DlgSlide/cShotComposer.cpp \
            DlgSlide/DlgSlideDuration.cpp \
            DlgSlide/DlgImageComposer.cpp \
            DlgText/cCustomTextEdit.cpp \
            DlgText/DlgTextEdit.cpp \
            DlgCheckConfig/DlgCheckConfig.cpp \
            DlgInfoFile/DlgInfoFile.cpp \
            DlgffDPjrProperties/DlgffDPjrProperties.cpp \
            DlgManageFavorite/DlgManageFavorite.cpp \
            DlgWorkingTask/DlgWorkingTask.cpp \
            DlgTransition/DlgTransitionDuration.cpp \
            DlgFileExplorer/DlgFileExplorer.cpp \
            DlgChapter/DlgChapter.cpp \
            DlgAutoTitleSlide/cCustomTitleModelTable.cpp \
            DlgAutoTitleSlide/DlgAutoTitleSlide.cpp \
            DlgExportProject/DlgExportProject.cpp \
            HelpPopup/HelpPopup.cpp \
            HelpPopup/HelpBrowser.cpp \
            engine/_GlobalDefines.cpp \
            engine/cApplicationConfig.cpp \
            engine/cDeviceModelDef.cpp \
            engine/cSoundBlockList.cpp \
            engine/cBaseMediaFile.cpp \
            engine/cBrushDefinition.cpp \
            engine/cDriveList.cpp \
            engine/_Transition.cpp \
            engine/_EncodeVideo.cpp \
            engine/_StyleDefinitions.cpp \
            engine/_Diaporama.cpp \
            engine/_Variables.cpp \
            engine/_Model.cpp \
            engine/cLocation.cpp \
            CustomCtrl/_QCustomDialog.cpp \
            CustomCtrl/cCFramingComboBox.cpp \
            CustomCtrl/cCShapeComboBox.cpp \
            CustomCtrl/cThumbnailComboBox.cpp \
            CustomCtrl/cQDateTimeEdit.cpp \
            CustomCtrl/QCustomRuler.cpp \
            CustomCtrl/QMovieLabel.cpp \
            wgt_QMultimediaBrowser/QCustomFolderTable.cpp \
            wgt_QMultimediaBrowser/QCustomFolderTree.cpp \
            wgt_QMultimediaBrowser/wgt_QMultimediaBrowser.cpp \
            wgt_QVideoPlayer/wgt_QVideoPlayer.cpp \
            HelpPopup/HelpContent.cpp \
            main.cpp

# Header files
HEADERS  += MainWindow/cCustomSlideTable.h \
            MainWindow/mainwindow.h \
            DlgRenderVideo/DlgRenderVideo.h \
            DlgManageStyle/DlgManageStyle.h \
            DlgAbout/DlgAbout.h \
            DlgTransition/DlgTransitionProperties.h \
            DlgMusic/DlgMusicProperties.h \
            DlgMusic/DlgEditMusic.h \
            DlgMusic/DlgAdjustToSound.h \
            DlgBackground/DlgBackgroundProperties.h \
            DlgAppSettings/DlgManageDevices/DlgManageDevices.h \
            DlgAppSettings/DlgApplicationSettings.h \
            DlgGMapsLocation/DlgGMapsLocation.h \
            DlgGMapsLocation/DlgGMapsGeneration.h \
            DlgImage/wgt_QGMapsMap/wgt_QGMapsMap.h \
            DlgImage/wgt_QGMapsMap/cCustomLocationTable.h \
            DlgImage/wgt_QEditImage/cImgInteractiveZone.h \
            DlgImage/wgt_QEditImage/wgt_QEditImage.h \
            DlgImage/wgt_QEditVideo/wgt_QEditVideo.h \
            DlgImage/DlgImageCorrection.h \
            DlgSlide/DlgSlideProperties.h \
            DlgSlide/cCustomBlockTable.h \
            DlgSlide/cInteractiveZone.h \
            DlgSlide/cCustomShotTable.h \
            DlgSlide/DlgRuler/DlgRulerDef.h \
            DlgSlide/cShotComposer.h \
            DlgSlide/DlgSlideDuration.h \
            DlgSlide/DlgImageComposer.h \
            DlgText/cCustomTextEdit.h \
            DlgText/DlgTextEdit.h \
            DlgCheckConfig/DlgCheckConfig.h \
            DlgInfoFile/DlgInfoFile.h \
            DlgffDPjrProperties/DlgffDPjrProperties.h \
            DlgManageFavorite/DlgManageFavorite.h \
            DlgWorkingTask/DlgWorkingTask.h \
            DlgTransition/DlgTransitionDuration.h \
            DlgFileExplorer/DlgFileExplorer.h \
            DlgChapter/DlgChapter.h \
            DlgAutoTitleSlide/cCustomTitleModelTable.h \
            DlgAutoTitleSlide/DlgAutoTitleSlide.h \
            DlgExportProject/DlgExportProject.h \
            HelpPopup/HelpPopup.h \
            HelpPopup/HelpBrowser.h \
            engine/cApplicationConfig.h \
            engine/cDeviceModelDef.h \
            engine/_GlobalDefines.h \
            engine/cSoundBlockList.h \
            engine/cBaseMediaFile.h \
            engine/cBrushDefinition.h \
            engine/cDriveList.h \
            engine/_Transition.h \
            engine/_EncodeVideo.h \
            engine/_StyleDefinitions.h \
            engine/_Diaporama.h \
            engine/_Variables.h \
            engine/_Model.h \
            engine/cLocation.h \
            CustomCtrl/_QCustomDialog.h \
            CustomCtrl/cCFramingComboBox.h \
            CustomCtrl/cCShapeComboBox.h \
            CustomCtrl/cThumbnailComboBox.h \
            CustomCtrl/cQDateTimeEdit.h \
            CustomCtrl/QCustomRuler.h \
            CustomCtrl/QMovieLabel.h \
            wgt_QMultimediaBrowser/QCustomFolderTable.h \
            wgt_QMultimediaBrowser/QCustomFolderTree.h \
            wgt_QMultimediaBrowser/wgt_QMultimediaBrowser.h \
            wgt_QVideoPlayer/wgt_QVideoPlayer.h \
            HelpPopup/HelpContent.h

# Forms files
FORMS    += MainWindow/mainwindow.ui \
            DlgRenderVideo/DlgRenderVideo.ui \
            DlgManageStyle/DlgManageStyle.ui \
            DlgAbout/DlgAbout.ui \
            DlgTransition/DlgTransitionProperties.ui \
            DlgMusic/DlgMusicProperties.ui \
            DlgMusic/DlgEditMusic.ui \
            DlgBackground/DlgBackgroundProperties.ui \
            DlgAppSettings/DlgManageDevices/DlgManageDevices.ui \
            DlgAppSettings/DlgApplicationSettings.ui \
            DlgGMapsLocation/DlgGMapsLocation.ui \
            DlgGMapsLocation/DlgGMapsGeneration.ui \
            DlgImage/wgt_QGMapsMap/wgt_QGMapsMap.ui \
            DlgImage/wgt_QEditImage/wgt_QEditImageimage.ui \
            DlgImage/wgt_QEditVideo/wgt_QEditVideo.ui \
            DlgImage/DlgImageCorrection.ui \
            DlgSlide/DlgSlideProperties.ui \
            DlgSlide/DlgRuler/DlgRulerDef.ui \
            DlgSlide/DlgImageComposer.ui \
            DlgText/DlgTextEdit.ui \
            DlgCheckConfig/DlgCheckConfig.ui \
            DlgInfoFile/DlgInfoFile.ui \
            DlgffDPjrProperties/DlgffDPjrProperties.ui \ 
            DlgManageFavorite/DlgManageFavorite.ui \
            DlgWorkingTask/DlgWorkingTask.ui \
            DlgTransition/DlgTransitionDuration.ui \
            DlgSlide/DlgSlideDuration.ui \
            DlgFileExplorer/DlgFileExplorer.ui \
            DlgChapter/DlgChapter.ui \
            DlgAutoTitleSlide/DlgAutoTitleSlide.ui \
            DlgExportProject/DlgExportProject.ui \
            wgt_QMultimediaBrowser/wgt_QMultimediaBrowser.ui \
            wgt_QVideoPlayer/wgt_QVideoPlayer.ui \
            HelpPopup/HelpPopup.ui \
            DlgMusic/DlgAdjustToSound.ui

#--------------------------------------------------------------
# INSTALLATION
#--------------------------------------------------------------

TARGET.path         = $$PREFIX/bin
TARGET.files        = $$TARGET
INSTALLS 	    += TARGET

Licences.path       = $$PREFIX/share/$$APPFOLDER
Licences.files      = ../../authors.txt \
                      ../../licences.txt \
                      ../../licence.rtf
INSTALLS            += Licences

XMLConfig.path      = $$PREFIX/share/$$APPFOLDER
XMLConfig.files     = ../../Devices.xml \
                      ../../ffDiaporama.xml
INSTALLS            += XMLConfig

General.path        = $$PREFIX/share/$$APPFOLDER
General.files       = ../../changelog-en.txt \
                      ../../changelog-fr.txt \
                      ../../BUILDVERSION.txt \
                      ../../readme.txt
INSTALLS            += General

ico.path            = $$PREFIX/share/icons/hicolor/32x32/apps
ico.files           = ../../ffdiaporama.png
INSTALLS 	    += ico

desktop.path        = $$PREFIX/share/applications
desktop.files       = ../../ffDiaporama.desktop
INSTALLS 	    += desktop

mimefile.path       = $$PREFIX/share/mime/packages
mimefile.files      = ../../ffDiaporama-mime.xml
INSTALLS 	    += mimefile

translation.path    = $$PREFIX/share/$$APPFOLDER/locale
translation.files   = ../../locale/wiki_en.*
INSTALLS 	    += translation

