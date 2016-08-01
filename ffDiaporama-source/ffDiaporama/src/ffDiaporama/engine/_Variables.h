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

#ifndef _VARIABLES_H
#define _VARIABLES_H

// Basic inclusions (common to all files)
#include "_GlobalDefines.h"

// Specific inclusions
#include "_Diaporama.h"

class cVariableItem {
public:
    QString VarName;
    QString Value;
    cVariableItem(QString VarName);
};

class cVariable {
public:
    QList<cVariableItem> Variables;

    cVariable();

    QString ResolveTextVariable(cDiaporamaObject *Object,QString SourceText);
    bool    IsTextHaveVariables(QString SourceText);
    bool    IsObjectHaveVariables(cDiaporamaObject *Object);
    QString PopupVariableMenu(QWidget *ParentWindow);
};

//*****************************************************

class cHTMLConversionItem {
public:
    QString Normal;
    QString HTML;
    cHTMLConversionItem(QString Normal,QString HTML) {this->Normal=Normal; this->HTML=HTML;}
};

class cHTMLConversion {
public:
    QList<cHTMLConversionItem> List;

    cHTMLConversion();

    QString ToHTML(QString Source);
    QString ToPlainText(QString Source);

};

extern cVariable        Variable;
extern cHTMLConversion  HTMLConverter;

#endif // _VARIABLES_H
