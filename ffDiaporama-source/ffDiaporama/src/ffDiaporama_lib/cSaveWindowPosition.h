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

#ifndef CSAVEWINDOWPOSITION_H
#define CSAVEWINDOWPOSITION_H

//============================================
// Class to handle window size & position
//============================================

// Basic inclusions (common to all files)
#include "BasicDefines.h"

// Include some additional standard class
#include <QtXml/QDomElement>
#include <QWidget>
#include <QString>
#include <QSplitter>

enum Type_WindowState {
    TypeWindowState_undefined,
    TypeWindowState_simple,
    TypeWindowState_withsplitterpos
};

//====================================================================================================================

class cSaveWindowPosition {
public:
    QString     WindowName;     // Name of the Window
    bool        *RestoreWindow; // Link to RestoreWindow boolean variable
    bool        IsMainWindow;   // true if window is a QDockWidget
    QString     WindowGeo;      // Array for saveGeometry (All windows)
    QString     MainWinSS;      // Array for saveState (QMainWindow only)
    bool        IsInit;         // True if data are ready
    bool        IsMaximized;    // True if window is mainwindow and was maximized

    cSaveWindowPosition(QString WindowName,bool &RestoreWindow,bool IsMainWindow);
    virtual         ~cSaveWindowPosition() {}
    virtual void    ApplyToWindow(QWidget *Window);
    virtual void    SaveWindowState(QWidget *Window);
    virtual void    SaveToXML(QDomElement &domDocument);
    virtual void    OverloadedSaveToXML(QDomElement &domDocument);
    virtual void    LoadFromXML(QDomElement domDocument);
    virtual void    OverloadedLoadFromXML(QDomElement domDocument);
};

//====================================================================================================================

class cSaveWinWithSplitterPos : public cSaveWindowPosition {
public:
    QString SplitterTop;

    explicit        cSaveWinWithSplitterPos(QString WindowName,bool &RestoreWindow,bool IsMainWindow);
    virtual         ~cSaveWinWithSplitterPos() {}
    virtual void    ApplyToWindow(QWidget *Window,QSplitter *Top);
    virtual void    SaveWindowState(QWidget *Window,QSplitter *Top);
    virtual void    OverloadedSaveToXML(QDomElement &domDocument);
    virtual void    OverloadedLoadFromXML(QDomElement domDocument);
};

#endif  // CSAVEWINDOWPOSITION_H
