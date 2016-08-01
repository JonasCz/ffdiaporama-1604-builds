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

#ifndef HELPBROWSER_H
#define HELPBROWSER_H

#include "engine/_GlobalDefines.h"
#include <QTextBrowser>
#include <QtHelp/QHelpEngine>
#include <QLabel>

class HelpBrowser : public QTextBrowser {
Q_OBJECT
public:
    QHelpEngine         *HelpEngine;

    explicit            HelpBrowser(QWidget *parent = 0);
    virtual void        setSource(const QUrl &name);

private:
    virtual QVariant    loadResource(int type,const QUrl &name);
};

#endif // HELPBROWSER_H
