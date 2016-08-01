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

#ifndef DLGMANAGEDEVICES_H
#define DLGMANAGEDEVICES_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"

// Include some common various class
#include "engine/cApplicationConfig.h"
#include "engine/cDeviceModelDef.h"

namespace Ui {
    class DlgManageDevices;
}

class DlgManageDevices : public QCustomDialog {
Q_OBJECT
public:
    cDeviceModelList    *DeviceModelList;
    bool                IsDeviceChanged;
    int                 CurrentDevice;
    int                 CurrentDeviceIndex;
    QComboBox           *CB_SL[9][3];
    QComboBox           *CB_BA[9][3];
    QComboBox           *CB_SL_CLIPARTST[3];
    QComboBox           *CB_BA_CLIPARTST[3];

    explicit DlgManageDevices(cDeviceModelList *DeviceModelList,cApplicationConfig *ApplicationConfig,QWidget *parent = 0);
    ~DlgManageDevices();

    // function to be overloaded
    virtual void    DoInitDialog();                             // Initialise dialog
    virtual bool    DoAccept();                                 // Call when user click on Ok button
    virtual void    DoRejet()           {/*Nothing to do*/}     // Call when user click on Cancel button
    virtual void    PrepareGlobalUndo() {/*Nothing to do*/}     // Initiale Undo
    virtual void    DoGlobalUndo()      {/*Nothing to do*/}     // Apply Undo : call when user click on Cancel button

protected:
    void        AskApplyDBChange();

private slots:
    // Device database tab
    void        DBApplyChange();
    void        DBAddDevice();
    void        DBRemoveBT();
    void        DBResetToDefaultBT();
    void        DBFillTableDevice(int);
    void        DBImageSizeCombo(int);
    void        DBFileFormatCombo(int);
    void        DBSelectionChanged();
    void        DBChImageSizeCB(int);
    void        DBVideoBitRateCB(int);
    void        DBAudioBitRateCB(int);
    void        DBChModel(QString);
    void        DBDeviceSubtypeCB(int);
    void        DBChVideoBitRateCB(int);
    void        DBChAudioBitRateCB(int);

private:
    Ui::DlgManageDevices *ui;
};

#endif // DLGMANAGEDEVICES_H
