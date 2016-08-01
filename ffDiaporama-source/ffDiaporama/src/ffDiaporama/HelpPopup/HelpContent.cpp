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

#include "HelpContent.h"
#include <QPainter>

HelpContent::HelpContent(QWidget *parent):QTreeView(parent) {
    HelpEngine=NULL;
}

//====================================================================================================================

void HelpContent::InitHelpEngine(QHelpEngine *HelpEngine) {
    this->HelpEngine=HelpEngine;
    setModel(HelpEngine->contentModel());
}

//====================================================================================================================

QUrl HelpContent::GetURL(const QModelIndex &index) {
    QHelpContentModel *Model=HelpEngine->contentModel();
    QHelpContentItem  *Item =Model->contentItemAt(index);
    return Item->url();
}

//====================================================================================================================

bool HelpContent::SearchPage(QString Page,QModelIndex Parent,QModelIndex &FoundItem) {
    QModelIndex         Current;
    QHelpContentModel   *Model=HelpEngine->contentModel();

    if (!Parent.isValid()) Parent=Model->index(0,0);  // if Parent is root
    if ((Model->contentItemAt(Parent))&&(Model->contentItemAt(Parent)->url().toString().endsWith(Page))) {
        FoundItem=Parent;
        return true;
    }

    if (Model->hasChildren(Parent)) {
        int row=0;
        while (Model->hasIndex(row,0,Parent)) {
            Current=Model->index(row,0,Parent);
            if (Model->contentItemAt(Current)->url().toString().endsWith(Page)) {
                FoundItem=Current;
                return true;
            }
            if (Model->hasChildren(Current)) {
                if (SearchPage(Page,Current,FoundItem)) return true;
            }
            row++;
        }
    }
    return false;
}

//====================================================================================================================

int HelpContent::ComputeTreeSize(QModelIndex Parent,QFontMetrics &FM,int Indent) {
    QModelIndex         Current;
    QHelpContentModel   *Model=HelpEngine->contentModel();
    QHelpContentItem    *Item=NULL;
    int                 Size=0,NewSize=0;

    if (!Parent.isValid()) Parent=Model->index(0,0);  // if Parent is root
    Item=Model->contentItemAt(Parent);
    if (Item) {
        NewSize=FM.width(Item->url().toString())+Indent;
        if (Size<NewSize) Size=NewSize;
    }

    if (Model->hasChildren(Parent)) {
        int row=0;
        while (Model->hasIndex(row,0,Parent)) {
            Current=Model->index(row,0,Parent);
            Item   =Model->contentItemAt(Current);
            if (Item) {
                NewSize=FM.width(Item->url().toString())+Indent;
                if (Size<NewSize) Size=NewSize;
            }
            if (Model->hasChildren(Current)) {
                NewSize=ComputeTreeSize(Current,FM,Indent+indentation());
                if (Size<NewSize) Size=NewSize;
            }
            row++;
        }
    }
    return Size;
}

void HelpContent::ResizeScrollBar() {
    QImage          Image(100,100,QImage::Format_ARGB32_Premultiplied);
    QPainter        Painter;
    QFont           font("Sans serif",9,QFont::Normal,QFont::StyleNormal);
    int             Size=0;

    Painter.begin(&Image);
    Painter.setFont(font);
    QFontMetrics FM=Painter.fontMetrics();
    Size=ComputeTreeSize(rootIndex(),FM,indentation());
    Painter.end();
    setColumnWidth(0,Size*2);
}
