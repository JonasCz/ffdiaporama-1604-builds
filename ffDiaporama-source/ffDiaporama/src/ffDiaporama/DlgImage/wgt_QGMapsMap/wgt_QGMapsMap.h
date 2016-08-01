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

#ifndef WGT_QGMAPSMAP_H
#define WGT_QGMAPSMAP_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"
#include "engine/_Diaporama.h"
#include <QNetworkAccessManager>
#include <QNetworkReply>

namespace Ui {
    class wgt_QGMapsMap;
}

class wgt_QGMapsMap : public QWidget {
Q_OBJECT
public:
    cBrushDefinition        *CurrentBrush;
    QCustomDialog           *ParentDialog;
    QPushButton             *ExportMapBT;
    cGMapsMap               *CurrentMap;
    bool                    StopMaj;

    explicit                wgt_QGMapsMap(QWidget *parent = 0);
                            ~wgt_QGMapsMap();

    void                    DoInitWidget(QCustomDialog *ParentDialog,QPushButton *ExportMapBT,cBrushDefinition *CurrentBrush);
    void                    DoInitDialog();
    void                    RefreshControls();
    void                    WinFocus();
    void                    LostFocus();
    bool                    DoAccept();                                 // Call when user click on Ok button
    void                    DoRejet() {}

    void                    UpdateDisplayMap();
    void                    UpdateMapSizes();
    void                    ResetDisplayMap();
    int                     GetCurLocationIndex();

protected:
    virtual void            resizeEvent(QResizeEvent *);

private slots:
    void                    ExportMap();
    void                    LocationSelectionChanged();
    void                    RestartRequest();
    void                    AddGMapsLocation();
    void                    EditLocation();
    void                    RemoveLocation();
    void                    MapTypeChanged(int);
    void                    ImageSizeChanged(int);
    void                    MapSizeChanged(int);
    void                    DoubleClickedLocation(QModelIndex);

    void                    RequestGoogle(bool DuplicateRessource=true);

    void                    LineColorChanged(int);
    void                    MarkerColorChanged(int);
    void                    TextColorChanged(int);
    void                    PointFormChanged(int);
    void                    MarkerFormChanged(int);
    void                    MarkerSizeChanged(int);
    void                    MarkerCompoChanged(int);
    void                    VisibilityChanged(int);
    void                    DistanceChanged(int);

signals:
    void                    DoRefreshImageObject();

private:
    Ui::wgt_QGMapsMap       *ui;
};

#endif // WGT_QGMAPSMAP_H
