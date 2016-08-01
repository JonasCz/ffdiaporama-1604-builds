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

#ifndef DLGGMAPSLOCATION_H
#define DLGGMAPSLOCATION_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"
#include "engine/cLocation.h"

#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QKeyEvent>
#include <QLabel>

namespace Ui {
    class DlgGMapsLocation;
}

//**********************************************************************

class cCustomMapWidget : public QLabel {
Q_OBJECT
public:
    int                     X,Y;
    explicit                cCustomMapWidget(QWidget *Parent,Qt::WindowFlags f=0);

protected:
    virtual void            mouseReleaseEvent(QMouseEvent *ev);

signals:
    void                    ClickOnMap();
};

//**********************************************************************

class DlgGMapsLocation : public QCustomDialog {
Q_OBJECT
public:
    cLocation               *Location;
    qlonglong               PrevRessourceKey;
    cCustomMapWidget        *MapWidget;
    QString                 ReceiveLatLng;
    QByteArray              ReceiveMap;
    QString                 ReceiveAddress;
    QImage                  CurrentMap;
    bool                    StopMaj;

    explicit DlgGMapsLocation(cLocation *Location,cApplicationConfig *ApplicationConfig,QWidget *parent=0);
    ~DlgGMapsLocation();

    // function to be overloaded
    virtual void            DoInitDialog();                             // Initialise dialog
    virtual bool            DoAccept();                                 // Call when user click on Ok button
    virtual void            DoRejet();                                  // Call when user click on Cancel button
    virtual void            PrepareGlobalUndo();                        // Initiale Undo
    virtual void            DoGlobalUndo();                             // Apply Undo : call when user click on Cancel button

    void                    NoMoreRetry();
    virtual void            keyPressEvent(QKeyEvent* e);
    virtual void            resizeEvent(QResizeEvent *);

protected slots:
    // GMaps functions
    void                    httpGetLatLngReadyRead();                   // Function used when gmaps send data on a get geocode (coordinates for address) request
    void                    httpGetLatLngFinished();                    // Function used when get geocode (coordinates for address) request end
    void                    httpGetMapReadyRead();                      // Function used when gmaps send data on a get staticmap request
    void                    httpGetMapFinished();                       // Function used when get staticmap request end
    void                    httpGetAddressReadyRead();                  // Function used when gmaps send data on a get geocode (address for coordinates) request
    void                    httpGetAddressFinished();                   // Function used when get geocode (address for coordinates) request end

    // Interface functions
    void                    RefreshMap();
    void                    ZoomDown();                                 // When clicked on zoom down button
    void                    ZoomUp();                                   // When clicked on zoom up button
    void                    ZoomChanged(int);                           // When zoomlevel has changed
    void                    NameChanged(QString NewText);
    void                    AddressNameChanged(QString NewText);
    void                    AddressChanged(QString NewText);            // When a new selection is done on the combo
    void                    AddressChanged(int);                        // When a new selection is done on the combo
    void                    UserEnterAddress();                         // When user enter a new address in the combo
    void                    ClickOnMap();                               // When user click on the map
    void                    Favorite();
    void                    SelectIcon();
    void                    ClearIcon();

private:
    Ui::DlgGMapsLocation    *ui;

    QNetworkAccessManager   *NetworkAccessManager;
    bool                    GetLatLngAtWork,GetMapAtWork,GetAddressAtWork,NoMap;
    QNetworkReply           *GetLatLngNetReply,*GetMapNetReply,*GetAddressNetReply;
    int                     RetryCount;

    QString                 GetNodeValue(QDomElement Node,QString NodeName);    // Utility function used to retrieve a value from a xml node
};

#endif // DLGGMAPSLOCATION_H
