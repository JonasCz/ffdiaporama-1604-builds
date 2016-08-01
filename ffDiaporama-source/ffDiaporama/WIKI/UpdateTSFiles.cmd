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

REM Change the path below to the QT binary folder
SET PATH=%PATH%;C:\Qt\Qt5.1.0-32bits\5.1.0\msvc2012\bin

WikiMakeBin fake
cd fake
lupdate -no-obsolete fake.pro
cd ..

