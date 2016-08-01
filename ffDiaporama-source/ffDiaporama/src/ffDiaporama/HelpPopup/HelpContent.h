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

#ifndef HELPCONTENT_H
#define HELPCONTENT_H

#include "engine/_GlobalDefines.h"
#include <QtHelp/QHelpEngine>
#include <QtHelp/QHelpContentWidget>
#include <QUrl>

class HelpContent : public QTreeView {
Q_OBJECT
public:
    QHelpEngine *HelpEngine;

    explicit    HelpContent(QWidget *parent = 0);
    void        InitHelpEngine(QHelpEngine *HelpEngine);
    QUrl        GetURL(const QModelIndex & index);
    bool        SearchPage(QString Page,QModelIndex Parent,QModelIndex &FoundItem);
    void        ResizeScrollBar();

private:
    int         ComputeTreeSize(QModelIndex Parent,QFontMetrics &FM,int Indent);
};

#endif // HELPCONTENT_H
