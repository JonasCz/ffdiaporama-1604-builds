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

#-------------------------------------------------------------
# SYNTAXE IS :
#   QMAKE PREFIX=xxx ffDiaporama_rsc.pro
#       xxx could be /usr, /usr/local or /opt
#--------------------------------------------------------------

isEmpty(PREFIX) {
    PREFIX = /usr
}

QT         -= core gui
QMAKE_STRIP = echo
QMAKE_INSTALL_PROGRAM = install -m644
APPFOLDER   = ffDiaporama
TARGET      = RSCBUILDVERSION.txt
TEMPLATE    =

OTHER_FILES += \
    readme_rsc.txt \
    licence.rtf \
    licences.txt \
    RSCBUILDVERSION.txt \
    background/001.ic1 \
    background/001.ic2 \
    background/001.ic3 \
    background/002.ic1 \
    background/002.ic2 \
    background/002.ic3 \
    background/003.ic1 \
    background/003.ic2 \
    background/003.ic3 \
    background/004.ic1 \
    background/004.ic2 \
    background/004.ic3 \
    background/005.ic1 \
    background/005.ic2 \
    background/005.ic3 \
    background/006.ic1 \
    background/006.ic2 \
    background/006.ic3 \
    background/007.ic1 \
    background/007.ic2 \
    background/007.ic3 \
    background/008.ic1 \
    background/008.ic2 \
    background/008.ic3 \
    background/009.ic1 \
    background/009.ic2 \
    background/009.ic3 \
    background/010.ic1 \
    background/010.ic2 \
    background/010.ic3 \
    background/011.ic1 \
    background/011.ic2 \
    background/011.ic3 \
    background/012.ic1 \
    background/012.ic2 \
    background/012.ic3 \
    background/001.jpg \
    background/002.jpg \
    background/003.jpg \
    background/004.jpg \
    background/005.jpg \
    background/006.jpg \
    background/007.jpg \
    background/008.jpg \
    background/009.jpg \
    background/010.jpg \
    background/011.jpg \
    background/012.jpg \
    background/001.txt \
    background/002.txt \
    background/003.txt \
    background/004.txt \
    background/005.txt \
    background/006.txt \
    background/007.txt \
    background/008.txt \
    background/009.txt \
    background/010.txt \
    background/011.txt \
    background/012.txt \
    clipart/ffDiaporama/ffdiapoprama-web-QR code.png \
    clipart/ffDiaporama/HD logo.png \
    clipart/ffDiaporama/plop2.png \
    clipart/ffDiaporama/plopi1.png \
    clipart/ffDiaporama/plopi2.png \
    clipart/ffDiaporama/plopi3.png \
    clipart/ffDiaporama/plopi4.png \
    clipart/ffDiaporama/sansre2sv.png \
    clipart/ffDiaporama/sansre2svq.png \
    luma/readme.txt \
    luma/Box/BoxA1.png \
    luma/Box/BoxA2.png \
    luma/Box/BoxA3.png \
    luma/Box/BoxA4.png \
    luma/Box/BoxA6.png \
    luma/Box/BoxA7.png \
    luma/Box/BoxA8.png \
    luma/Box/BoxA9.png \
    luma/Center/Center-burst_in.png \
    luma/Center/Center-burst_out.png \
    luma/Center/Center-fourbox_in.png \
    luma/Center/Center-fourbox_out.png \
    luma/Center/CenterA01-01.png \
    luma/Center/CenterA01-02.png \
    luma/Center/CenterA01-03.png \
    luma/Center/CenterA01-04.png \
    luma/Center/SpiraleA1.png \
    luma/Center/SpiraleA3.png \
    luma/Center/SpiraleB2.png \
    luma/Center/SpiraleB4.png \
    luma/Checker/CheckerA04-01.png \
    luma/Checker/CheckerA04-02.png \
    luma/Checker/CheckerA04-03.png \
    luma/Checker/CheckerA04-04.png \
    luma/Checker/CheckerA16-01.png \
    luma/Checker/CheckerA16-02.png \
    luma/Checker/CheckerA16-03.png \
    luma/Checker/CheckerA16-04.png \
    luma/Checker/checkerboard_small.png \
    luma/Checker/special_effect01.png \
    luma/Checker/special_effect02.png \
    luma/Checker/special_effect03.png \
    luma/Checker/special_effect08.png \
    luma/Checker/special_effect09.png \
    luma/Checker/special_effect14.png \
    luma/Checker/special_effect16.png \
    luma/Checker/special_effect17.png \
    luma/Checker/special_effect19.png \
    luma/Clock/ClockD1.png \
    luma/Clock/ClockD2.png \
    luma/Snake/Snake01.png \
    luma/Snake/Snake02.png \
    luma/Snake/Snake03.png \
    luma/Snake/Snake04.png \
    luma/Snake/Snake05.png \
    luma/Snake/Snake06.png \
    luma/Snake/Snake07.png \
    luma/Snake/Snake08.png \
    model/Thumbnails/100000.png \
    model/Thumbnails/100101.png \
    model/Thumbnails/100200.png \
    model/Thumbnails/BalloonBorder.svg \
    model/Thumbnails/Beach.svg \
    model/Thumbnails/camera.svg \
    model/Thumbnails/Christmas.svg \
    model/Thumbnails/Coffee.svg \
    model/Thumbnails/Gift.svg \
    model/Thumbnails/Glass.svg \
    model/Thumbnails/microphone.svg \
    model/Thumbnails/Travel.svg \
    model/Thumbnails/Work.svg \
    model/Thumbnails/100000.thb \
    model/Thumbnails/100001.thb \
    model/Thumbnails/100100.thb \
    model/Thumbnails/100101.thb \
    model/Thumbnails/100200.thb \
    model/Thumbnails/100201.thb \
    model/Thumbnails/100202.thb \
    model/Thumbnails/100203.thb \
    model/Thumbnails/100204.thb \
    model/Thumbnails/100205.thb \
    model/Thumbnails/100206.thb \
    model/Thumbnails/100207.thb \
    model/Thumbnails/100208.thb \
    model/Titles/4_3/100000.tss \
    model/Titles/4_3/100001.tss \
    model/Titles/4_3/100002.tss \
    model/Titles/4_3/100003.tss \
    model/Titles/4_3/110000.tss \
    model/Titles/4_3/110001.tss \
    model/Titles/4_3/110002.tss \
    model/Titles/4_3/110003.tss \
    model/Titles/4_3/200000.tss \
    model/Titles/4_3/200001.tss \
    model/Titles/4_3/200002.tss \
    model/Titles/4_3/200003.tss \
    model/Titles/4_3/200004.tss \
    model/Titles/4_3/210000.tss \
    model/Titles/4_3/210001.tss \
    model/Titles/4_3/210002.tss \
    model/Titles/4_3/210003.tss \
    model/Titles/4_3/210004.tss \
    model/Titles/4_3/300000.tss \
    model/Titles/4_3/300001.tss \
    model/Titles/4_3/300002.tss \
    model/Titles/4_3/300003.tss \
    model/Titles/16_9/100000.tss \
    model/Titles/16_9/100001.tss \
    model/Titles/16_9/100002.tss \
    model/Titles/16_9/100003.tss \
    model/Titles/16_9/110000.tss \
    model/Titles/16_9/110001.tss \
    model/Titles/16_9/110002.tss \
    model/Titles/16_9/110003.tss \
    model/Titles/16_9/200000.tss \
    model/Titles/16_9/200001.tss \
    model/Titles/16_9/200002.tss \
    model/Titles/16_9/200003.tss \
    model/Titles/16_9/200004.tss \
    model/Titles/16_9/210000.tss \
    model/Titles/16_9/210001.tss \
    model/Titles/16_9/210002.tss \
    model/Titles/16_9/210003.tss \
    model/Titles/16_9/210004.tss \
    model/Titles/16_9/300000.tss \
    model/Titles/16_9/300001.tss \
    model/Titles/16_9/300002.tss \
    model/Titles/16_9/300003.tss \
    model/Titles/40_17/100000.tss \
    model/Titles/40_17/100001.tss \
    model/Titles/40_17/100002.tss \
    model/Titles/40_17/100003.tss \
    model/Titles/40_17/110000.tss \
    model/Titles/40_17/110001.tss \
    model/Titles/40_17/110002.tss \
    model/Titles/40_17/110003.tss \
    model/Titles/40_17/200000.tss \
    model/Titles/40_17/200001.tss \
    model/Titles/40_17/200002.tss \
    model/Titles/40_17/200003.tss \
    model/Titles/40_17/200004.tss \
    model/Titles/40_17/210000.tss \
    model/Titles/40_17/210001.tss \
    model/Titles/40_17/210002.tss \
    model/Titles/40_17/210003.tss \
    model/Titles/40_17/210004.tss \
    model/Titles/40_17/300000.tss \
    model/Titles/40_17/300001.tss \
    model/Titles/40_17/300002.tss \
    model/Titles/40_17/300003.tss \
    model/readme.txt \
    model/Titles/readme.txt \
    clipart/readme.txt

#--------------------------------------------------------------
# INSTALLATION
#--------------------------------------------------------------

background.path     = $$PREFIX/share/$$APPFOLDER/background
background.files    = background/*.*
#background.depends  = General
INSTALLS 	    += background

clipart.path        = $$PREFIX/share/$$APPFOLDER/clipart
clipart.files       = clipart/*.*
#clipart.depends     = General
ffdclipart.path     = $$PREFIX/share/$$APPFOLDER/clipart/ffDiaporama
ffdclipart.files    = clipart/ffDiaporama/*.*
#ffdclipart.depends  = clipart
INSTALLS 	    += ffdclipart clipart

model_tts43.path     = $$PREFIX/share/$$APPFOLDER/model/Titles/4_3
model_tts43.files    = model/Titles/4_3/*.*
#model_tts43.depends  = model
model_tts169.path    = $$PREFIX/share/$$APPFOLDER/model/Titles/16_9
model_tts169.files   = model/Titles/16_9/*.*
#model_tts169.depends = model
model_tts4017.path   = $$PREFIX/share/$$APPFOLDER/model/Titles/40_17
model_tts4017.files  = model/Titles/40_17/*.*
#model_tts4017.depends= model
INSTALLS 	    += model_tts43 model_tts169 model_tts4017

model.path           = $$PREFIX/share/$$APPFOLDER/model
model.files          = model/*.*
#model.depends        = General
thumbnails.path      = $$PREFIX/share/$$APPFOLDER/model/Thumbnails
thumbnails.files     = model/Thumbnails/*.*
#thumbnails.depends   = model
model_tts.path       = $$PREFIX/share/$$APPFOLDER/model/Titles
model_tts.files      = model/Titles/*.*
#model_tts.depends    = model
INSTALLS 	    += model_tts thumbnails model

luma.path           = $$PREFIX/share/$$APPFOLDER/luma
luma.files          = luma/*.*
luma_Box.path       = $$PREFIX/share/$$APPFOLDER/luma/Box
luma_Box.files      = luma/Box/*.*
#luma_Box.depends    = luma
luma_Center.path    = $$PREFIX/share/$$APPFOLDER/luma/Center
luma_Center.files   = luma/Center/*.*
#luma_Center.depends = luma
luma_Checker.path   = $$PREFIX/share/$$APPFOLDER/luma/Checker
luma_Checker.files  = luma/Checker/*.*
#luma_Checker.depends= luma
luma_Clock.path     = $$PREFIX/share/$$APPFOLDER/luma/Clock
luma_Clock.files    = luma/Clock/*.*
#luma_Clock.depends  = luma
luma_Snake.path     = $$PREFIX/share/$$APPFOLDER/luma/Snake
luma_Snake.files    = luma/Snake/*.*
#luma_Snake.depends  = luma
INSTALLS 	    += luma_Box luma_Center luma_Checker luma_Clock luma_Snake luma

General.path        = $$PREFIX/share/$$APPFOLDER
General.files       = RSCBUILDVERSION.txt
INSTALLS            += General
