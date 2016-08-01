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

#include "QMovieLabel.h"
#include <QPainter>

QMovieLabel::QMovieLabel(QWidget *parent):QLabel(parent) {
}

QMovieLabel::~QMovieLabel() {
}

void QMovieLabel::mouseDoubleClickEvent(QMouseEvent *) {
    emit DoubleClick();
}

void QMovieLabel::mouseReleaseEvent(QMouseEvent *event) {
    if (event->button()==Qt::RightButton) emit RightClickEvent(event);  else QLabel::mouseReleaseEvent(event);
}

void QMovieLabel::SetImage(QImage Image) {
    CurrentImage=Image;
    repaint();
}

void QMovieLabel::SetImage(QImage *Image) {
    CurrentImage=Image->copy();
    repaint();
}

void QMovieLabel::resizeEvent(QResizeEvent *Ev) {
    QLabel::resizeEvent(Ev);
    repaint();
}

void QMovieLabel::paintEvent(QPaintEvent *) {
    QPainter Painter(this);
    if (CurrentImage.isNull()) {
        Painter.fillRect(QRectF(0,0,width(),height()),Qt::black);
        return;
    }
    qreal Ratio=qreal(CurrentImage.width())/qreal(CurrentImage.height());
    int MaxW=this->width();
    int MaxH=qreal(MaxW)/Ratio;
    if (MaxH>this->height()) {
        MaxH=this->height();
        MaxW=qreal(MaxH*Ratio);
    }
    if (CurrentImage.width()!=MaxW) {
        QImage CI=CurrentImage.scaledToWidth(MaxW);
        int LeftBar  =(this->width()-CI.width())/2;
        int RightBar =this->width()-CI.width()-LeftBar;
        int TopBar   =(this->height()-CI.height())/2;
        int BottomBar=this->height()-CI.height()-TopBar;
        Painter.drawImage(LeftBar,TopBar,CI);
        if (LeftBar) {
            Painter.fillRect(QRectF(0,0,LeftBar,this->height()),Qt::black);
            Painter.fillRect(QRectF(this->width()-RightBar,0,RightBar,this->height()),Qt::black);
        }
        if (TopBar) {
            Painter.fillRect(QRectF(LeftBar,0,CI.width(),TopBar),Qt::black);
            Painter.fillRect(QRectF(LeftBar,this->height()-BottomBar,CI.width(),BottomBar),Qt::black);
        }
    } else {
        int LeftBar  =(this->width()-CurrentImage.width())/2;
        int RightBar =this->width()-CurrentImage.width()-LeftBar;
        int TopBar   =(this->height()-CurrentImage.height())/2;
        int BottomBar=this->height()-CurrentImage.height()-TopBar;
        Painter.drawImage(LeftBar,TopBar,CurrentImage);
        if (LeftBar) {
            Painter.fillRect(QRectF(0,0,LeftBar,this->height()),Qt::black);
            Painter.fillRect(QRectF(this->width()-RightBar,0,RightBar,this->height()),Qt::black);
        }
        if (TopBar) {
            Painter.fillRect(QRectF(LeftBar,0,CurrentImage.width(),TopBar),Qt::black);
            Painter.fillRect(QRectF(LeftBar,this->height()-BottomBar,CurrentImage.width(),BottomBar),Qt::black);
        }
    }
}
