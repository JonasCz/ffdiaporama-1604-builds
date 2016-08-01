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

#ifndef CTEXTFRAME_H
#define CTEXTFRAME_H

#include <QString>
#include <QColor>
#include <QImage>

class cTextFrameObject {
public:
    QString                 RessourceName;
    double                  TMx,TMy,TMw,TMh;        // Text margins
    QImage                  Icon;
    bool                    Isvalide;
    QColor                  BckColor;               // Background color to use in text editor
    QString                 TextStyle;              // Default text style

                            cTextFrameObject(QString RessourceName,double TMx,double TMy,double TMw,double TMh,QColor BckColor,QString TextStyle);
};

class cTextFrameList {
public:
    QList<cTextFrameObject> List;                       // list of brush

                            cTextFrameList();
    void                    DoPreploadList();
    int                     SearchImage(QString NameToFind);
};
extern  cTextFrameList TextFrameList;

#endif // CTEXTFRAME_H
