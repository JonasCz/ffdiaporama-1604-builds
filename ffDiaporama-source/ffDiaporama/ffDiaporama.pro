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
#   QMAKE PREFIX=xxx ffDiaporama.pro
#       xxx could be /usr, /usr/local or /opt
#--------------------------------------------------------------

isEmpty(PREFIX) {
    PREFIX = /usr
}

# this file is to be used by qmake for Windows & Linux
TEMPLATE        = subdirs

# ffDiaporama_lib (c++ classes and functions that are rarely modified)
SUBDIRS         += src/ffDiaporama_lib
TARGET          += ffDiaporama_lib

# ffDiaporama main application
SUBDIRS         += src/ffDiaporama
TARGET          += ffDiaporama

# Translation files
TRANSLATIONS += locale/ffDiaporama_cz.ts \
    locale/ffDiaporama_de.ts \
    locale/ffDiaporama_el.ts \
    locale/ffDiaporama_es.ts \
    locale/ffDiaporama_fr.ts \
    locale/ffDiaporama_gl.ts \
    locale/ffDiaporama_it.ts \
    locale/ffDiaporama_nl.ts \
    locale/ffDiaporama_pt.ts \
    locale/ffDiaporama_pt_br.ts \
    locale/ffDiaporama_ru.ts \
    locale/ffDiaporama_zh_tw.ts

OTHER_FILES += $$TRANSLATIONS \
    TODO-LIST.txt \          # Developpement file
    WIKI/src_en/wiki_en.qhp \
    WIKI/src_en/wiki_en.qhcp \
    WIKI/src_en/main.html \
    WIKI/src_en/0010.html \
    WIKI/src_en/0011.html \
    WIKI/src_en/0012.html \
    WIKI/src_en/0013.html \
    WIKI/src_en/0014.html \
    WIKI/src_en/0015.html \
    WIKI/src_en/0016.html \
    WIKI/src_en/0020.html \
    WIKI/src_en/0021.html \
    WIKI/src_en/0022.html \
    WIKI/src_en/0023.html \
    WIKI/src_en/0024.html \
    WIKI/src_en/0030.html \
    WIKI/src_en/0031.html \
    WIKI/src_en/0032.html \
    WIKI/src_en/0033.html \
    WIKI/src_en/0034.html \
    WIKI/src_en/0035.html \
    WIKI/src_en/0036.html \
    WIKI/src_en/0037.html \
    WIKI/src_en/0038.html \
    WIKI/src_en/0039.html \
    WIKI/src_en/003A.html \
    WIKI/src_en/0040.html \
    WIKI/src_en/0041.html \
    WIKI/src_en/0042.html \
    WIKI/src_en/0043.html \
    WIKI/src_en/0044.html \
    WIKI/src_en/0045.html \
    WIKI/src_en/0101.html \
    WIKI/src_en/0102.html \
    WIKI/src_en/0103.html \
    WIKI/src_en/0104.html \
    WIKI/src_en/0105.html \
    WIKI/src_en/0106.html \
    WIKI/src_en/0107.html \
    WIKI/src_en/0108.html \
    WIKI/src_en/0109.html \
    WIKI/src_en/0110.html \
    WIKI/src_en/0111.html \
    WIKI/src_en/0112.html \
    WIKI/src_en/0113.html \
    WIKI/src_en/0114.html \
    WIKI/src_en/0115.html \
    WIKI/src_en/0116.html \
    WIKI/src_en/0117.html \
    WIKI/src_en/0118.html \
    WIKI/src_en/0119.html \
    WIKI/src_en/0120.html \
    WIKI/src_en/0121.html \
    WIKI/src_en/0122.html \
    WIKI/src_en/0123.html \
    WIKI/src_en/0124.html \
    WIKI/UpdateTSFiles.bash \
    WIKI/UpdateQMFiles.bash \
    WIKI/readme.txt \
    WIKI/UpdateTSFiles.cmd \
    WIKI/UpdateQMFiles.cmd \
    WIKI/PREPLANGUAGE.cmd \
    WIKI/wiki.css \
    WIKI/WIKI.txt \
    WIKI/wikifake_de.ts \
    WIKI/wikifake_el.ts \
    WIKI/wikifake_es.ts \
    WIKI/wikifake_fr.ts \
    WIKI/wikifake_gl.ts \
    WIKI/wikifake_it.ts \
    WIKI/wikifake_pt.ts \
    WIKI/wikifake_ru.ts

#--------------------------------------------------------------
# INSTALLATION
#--------------------------------------------------------------
message("Install to : $$PREFIX")
