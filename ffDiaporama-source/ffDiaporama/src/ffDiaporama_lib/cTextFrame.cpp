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

#include "cTextFrame.h"
#include <QtSvg>

cTextFrameList TextFrameList;

#define ICONSIZE    48
#define MEDIUMBLACK QString("FontSize:14###HAlign:1###VAlign:1###StyleText:0###FontColor:#000000###FontShadowColor:#f2f2f2###Bold:0###Italic:1###Underline:0###FontName:Sans Serif")

//====================================================================================================================

cTextFrameObject::cTextFrameObject(QString RessourceName,double TMx,double TMy,double TMw,double TMh,QColor BckColor,QString TextStyle) {
    this->RessourceName =RessourceName;
    this->TMx           =TMx;
    this->TMy           =TMy;
    this->TMw           =TMw;
    this->TMh           =TMh;
    this->BckColor      =BckColor;
    this->TextStyle     =TextStyle;
    Isvalide            =false;
    QSvgRenderer SVGImg(RessourceName);
    if (SVGImg.isValid()) {
        Icon=QImage(ICONSIZE,ICONSIZE,QImage::Format_ARGB32_Premultiplied);
        QPainter Painter;
        Painter.begin(&Icon);
        Painter.setCompositionMode(QPainter::CompositionMode_Source);
        Painter.fillRect(QRect(0,0,ICONSIZE,ICONSIZE),Qt::transparent);
        Painter.setCompositionMode(QPainter::CompositionMode_SourceOver);
        SVGImg.render(&Painter,QRectF(0,0,ICONSIZE,ICONSIZE));
        Painter.end();
        Isvalide=true;
    }
}

//====================================================================================================================

cTextFrameList::cTextFrameList() {
}

//====================================================================================================================

int cTextFrameList::SearchImage(QString NameToFind) {
    int Ret=-1;
    int j=0;
    while ((j<List.count())&&(Ret==-1)) if (List[j].RessourceName==NameToFind) Ret=j; else j++;
    if (Ret==-1) Ret=0; // If not found : switch to first background
    return Ret;
}

//====================================================================================================================

void cTextFrameList::DoPreploadList() {
    List.append(cTextFrameObject(":/img/TextFrame/010.svg", 0.08,0.11,0.83,0.54,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/011.svg", 0.07,0.10,0.84,0.53,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/012.svg", 0.07,0.09,0.85,0.55,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/020b.svg",0.22,0.15,0.66,0.42,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/020c.svg",0.19,0.05,0.58,0.72,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/020.svg", 0.07,0.12,0.80,0.49,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/021.svg", 0.09,0.14,0.79,0.48,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/022b.svg",0.09,0.18,0.84,0.67,QColor(0xe6,0xe6,0xe6),MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/022c.svg",0.14,0.15,0.73,0.71,QColor(0xe7,0xe7,0xe7),MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/022.svg", 0.09,0.13,0.79,0.50,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/023b.svg",0.08,0.05,0.86,0.68,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/023c.svg",0.06,0.19,0.90,0.16,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/023.svg", 0.09,0.13,0.79,0.50,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/030b.svg",0.02,0.02,0.96,0.68,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/030c.svg",0.03,0.03,0.95,0.65,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/030.svg", 0.06,0.08,0.86,0.52,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/031.svg", 0.06,0.08,0.86,0.52,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/032b.svg",0.02,0.02,0.96,0.68,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/032c.svg",0.02,0.04,0.95,0.64,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/032.svg", 0.06,0.08,0.86,0.52,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/040b.svg",0.05,0.06,0.89,0.62,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/040.svg", 0.05,0.08,0.89,0.59,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/041.svg", 0.05,0.08,0.89,0.59,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/042.svg", 0.18,0.17,0.64,0.65,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/043b.svg",0.07,0.07,0.86,0.59,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/043.svg", 0.06,0.08,0.87,0.59,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/050b.svg",0.08,0.09,0.53,0.82,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/050c.svg",0.08,0.12,0.85,0.42,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/050d.svg",0.06,0.08,0.87,0.65,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/050.svg", 0.07,0.13,0.84,0.55,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/051.svg", 0.07,0.13,0.84,0.55,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/052b.svg",0.40,0.10,0.50,0.78,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/052c.svg",0.08,0.12,0.85,0.42,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/052d.svg",0.05,0.08,0.90,0.64,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/052.svg", 0.07,0.12,0.85,0.59,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/060.svg", 0.14,0.21,0.75,0.39,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/061.svg", 0.14,0.21,0.75,0.39,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/062.svg", 0.14,0.21,0.75,0.39,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/063.svg", 0.14,0.21,0.75,0.39,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/070b.svg",0.21,0.14,0.57,0.30,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/070.svg", 0.16,0.17,0.58,0.39,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/071.svg", 0.16,0.17,0.58,0.39,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/072.svg", 0.16,0.17,0.58,0.39,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/073b.svg",0.21,0.14,0.57,0.30,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/073.svg", 0.16,0.17,0.58,0.39,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/100c.svg",0.09,0.15,0.61,0.47,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/100.svg", 0.09,0.15,0.61,0.41,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/101.svg", 0.30,0.15,0.61,0.41,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/102.svg", 0.09,0.15,0.61,0.47,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/103.svg", 0.30,0.15,0.61,0.47,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/104.svg", 0.09,0.15,0.68,0.47,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/105.svg", 0.22,0.15,0.68,0.45,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/108.svg", 0.10,0.17,0.82,0.74,QColor(0xfb,0xf9,0xea),MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/109.svg", 0.10,0.17,0.82,0.74,QColor(0xfb,0xf9,0xea),MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/110.svg", 0.06,0.15,0.86,0.78,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/111.svg", 0.11,0.10,0.75,0.79,QColor(0xe6,0xe2,0xd2),MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/112.svg", 0.22,0.15,0.69,0.64,QColor(0xe6,0xe2,0xd2),MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/114.svg", 0.09,0.11,0.82,0.77,QColor(0xda,0xbf,0x97),MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/115.svg", 0.05,0.15,0.89,0.73,QColor(0xda,0xbf,0x97),MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/116.svg", 0.15,0.26,0.68,0.50,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/117.svg", 0.18,0.27,0.68,0.50,QColor(0xd7,0xda,0x77),MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/118.svg", 0.04,0.04,0.92,0.51,Qt::white,             MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/119.svg", 0.11,0.10,0.78,0.84,QColor(0xf4,0xf2,0xf2),MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/120.svg", 0.02,0.01,0.97,0.98,QColor(0xc4,0xc4,0xc4),MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/121.svg", 0.02,0.39,0.95,0.60,QColor(0xf2,0xef,0xef),MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/122.svg", 0.06,0.05,0.85,0.86,QColor(0xfa,0xf8,0x98),MEDIUMBLACK));
    List.append(cTextFrameObject(":/img/TextFrame/123.svg", 0.02,0.08,0.85,0.36,QColor(0xed,0x8f,0x66),MEDIUMBLACK));
}
