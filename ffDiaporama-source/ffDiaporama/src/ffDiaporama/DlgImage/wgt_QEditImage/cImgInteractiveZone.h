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

#ifndef CIMGINTERACTIVEZONE_H
#define CIMGINTERACTIVEZONE_H

#include "engine/_GlobalDefines.h"
#include "engine/_Diaporama.h"

#include <QWidget>

enum TRANSFOTYPE {NOTYETDEFINED,MOVEBLOCK,RESIZEUPLEFT,RESIZEDOWNLEFT,RESIZEUPRIGHT,RESIZEDOWNRIGHT,RESIZELEFT,RESIZERIGHT,RESIZEUP,RESIZEDOWN};

class cImgInteractiveZone : public QWidget {
Q_OBJECT
public:
    struct sDualQReal {
        qreal   Screen;
        qreal   Image;
    };

    int                 MagneticRuler;
    bool                IsRefreshQueued;

    cCompositionObject  *CompoObject;
    int                 *BackgroundForm;
    cBrushDefinition    *CurrentBrush;
    int                 VideoPosition;

    QImage              *ForegroundImage;
    QImage              *CachedImage;
    sDualQReal          maxw,maxh,Hyp;

    QRectF              SceneRect;
    QRectF              CurScrSelRect,CurImgSelRect;
    bool                IsCapture;                      // True if there is an active capture
    QPoint              CapturePos;

    // Transformations
    TRANSFOTYPE         TransfoType;
    qreal               Move_X,Move_Y;                  // Blocks move
    qreal               Scale_X,Scale_Y;                // Blocks resize
    qreal               Ratio_X,Ratio_Y;

    // Rulers
    QList<sDualQReal>   MagnetVert;
    QList<sDualQReal>   MagnetHoriz;

    explicit            cImgInteractiveZone(QWidget *parent = 0);
                        ~cImgInteractiveZone();

    void                InitCachedImage(cCompositionObject *TheCompoObject,int *TheBackgroundForm,cBrushDefinition *TheCurrentBrush,int TheVideoPosition);
    void                SendRefreshDisplay();

public slots:
    void                RefreshDisplay();

protected:
    virtual void        paintEvent(QPaintEvent *event);

    virtual void        mouseMoveEvent(QMouseEvent *event);
    virtual void        mousePressEvent(QMouseEvent *event);
    virtual void        mouseReleaseEvent(QMouseEvent *event);
    virtual void        keyPressEvent(QKeyEvent *event);
    virtual void        keyReleaseEvent(QKeyEvent *event);

signals:
    void                TransformBlock(qreal Move_X,qreal Move_Y,qreal Scale_X,qreal Scale_Y);
    void                DisplayTransformBlock(qreal Move_X,qreal Move_Y,qreal Scale_X,qreal Scale_Y);

private:
    bool                IsInRect(QPointF Pos,QRectF Rect);
    bool                IsInSelectedRect(QPointF Pos);
    void                ManageCursor(QPoint Pos,Qt::KeyboardModifiers Modifiers);
    void                ComputeNewCurSelRect(QRectF &ScrRect,QRectF &ImgRect);
    void                DrawSelect(QPainter &Painter,QRectF Rect,bool WithHandles);
};

#endif // CIMGINTERACTIVEZONE_H
