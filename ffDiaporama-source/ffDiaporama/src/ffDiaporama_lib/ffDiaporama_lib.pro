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

CONFIG   += qt thread
QT       += core gui svg sql xml

greaterThan(QT_MAJOR_VERSION,4) {
    # QT5 version
    QT += widgets concurrent help
} else {
    # QT4 version
    CONFIG += help
}

QMAKE_STRIP = echo
APPFOLDER   = ffDiaporama
TARGET      = ffDiaporama_lib
TEMPLATE    = lib
CONFIG     += staticlib

OTHER_FILES += readme.txt

SOURCES  += BasicDefines.cpp \
            cBackgroundComboBox.cpp \
            cBaseAppConfig.cpp \
            cBaseBrushDefinition.cpp \
            cBrushComboBox.cpp \
            cColorComboBox.cpp \
            cCustomIcon.cpp \
            cDatabase.cpp \
            cGrdOrientationComboBox.cpp \
            cLuLoImageCache.cpp \
            cSaveWindowPosition.cpp \
            cSpeedWave.cpp \
            cSpeedWaveComboBox.cpp \
            cTexteFrameComboBox.cpp \
            cTextFrame.cpp \
            ImageFilters.cpp \
            QCustomComboBox.cpp \
            QCustomHorizSplitter.cpp \
            Shape.cpp

HEADERS  += BasicDefines.h \
            cBackgroundComboBox.h \
            cBaseAppConfig.h \
            cBaseBrushDefinition.h \
            cBrushComboBox.h \
            cColorComboBox.h \
            cCustomIcon.h \
            cDatabase.h \
            cGrdOrientationComboBox.h \
            cLuLoImageCache.h \
            cSaveWindowPosition.h \
            cSpeedWave.h \
            cSpeedWaveComboBox.h \
            cTexteFrameComboBox.h \
            cTextFrame.h \
            ImageFilters.h \
            QCustomComboBox.h \
            QCustomHorizSplitter.h \
            Shape.h

#--------------------------------------------------------------
# INSTALLATION
#--------------------------------------------------------------
unix:!symbian {
    TARGET.path   = $$PREFIX/lib
    #TARGET.files = $$TARGET
    INSTALLS += TARGET
}
