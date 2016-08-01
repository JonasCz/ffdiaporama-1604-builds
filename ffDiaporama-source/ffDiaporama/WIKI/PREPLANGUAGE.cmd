@ECHO OFF
REM ======================================================================
REM    This file is part of ffDiaporama
REM    ffDiaporama is a tools to make diaporama as video
REM    Copyright (C) 2011-2014 Dominique Levray <domledom@laposte.net>
REM
REM    This program is free software; you can redistribute it and/or modify
REM    it under the terms of the GNU General Public License as published by
REM    the Free Software Foundation; either version 2 of the License, or
REM    (at your option) any later version.
REM
REM    This program is distributed in the hope that it will be useful,
REM    but WITHOUT ANY WARRANTY; without even the implied warranty of
REM    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
REM    GNU General Public License for more details.
REM
REM    You should have received a copy of the GNU General Public License along
REM    with this program; if not, write to the Free Software Foundation, Inc.,
REM    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
REM   ====================================================================== */
echo "Prepare for language: %1"

WikiMakeBin make=%1
cd %1
rd wiki_img
mklink /J wiki_img ..\wiki_img
rd img
mklink /J img ..\..\src\ffDiaporama\img
copy ..\wiki.css wiki.css
qhelpgenerator -c "wiki_%1.qhp" -o "wiki_%1.qch"
qcollectiongenerator "wiki_%1.qhcp" -o "wiki_%1.qhc"
move "wiki_%1.qhc" ../../locale
move "wiki_%1.qch" ../../locale
cd ..
