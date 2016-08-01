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

#ifndef DLGAPPLICATIONSETTINGS_H
#define DLGAPPLICATIONSETTINGS_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"

namespace Ui {
    class DlgApplicationSettings;
}

class DlgApplicationSettings : public QCustomDialog {
Q_OBJECT
public:
    cApplicationConfig  *ApplicationConfig;
    bool                    IsDeviceChanged;
    int                     CurrentDevice;
    int                     CurrentDeviceIndex;
    QComboBox               *CB_SL[NBR_IMAGETYPE][2];
    QComboBox               *CB_BA[NBR_IMAGETYPE][2];

    explicit DlgApplicationSettings(cApplicationConfig *ApplicationConfig,QWidget *parent = 0);
    ~DlgApplicationSettings();

    // function to be overloaded
    virtual void    DoInitDialog();             // Initialise dialog
    virtual bool    DoAccept();                 // Call when user click on Ok button
    virtual void    DoRejet();                  // Call when user click on Cancel button
    virtual void    PrepareGlobalUndo();        // Initiale Undo
    virtual void    DoGlobalUndo();             // Apply Undo : call when user click on Cancel button

private slots:
    void            s_CheckConfig();
    void            s_ManageDevices();
    void            TabChanged(int);
    void            s_ProxyChanged();

    void            FileFormatCombo(int);
    void            SoundtrackFileFormatCombo(int);

    void            InitVideoBitRateCB(int);
    void            InitAudioBitRateCB(int);
    void            InitSoundTrackAudioBitRateCB(int);
    void            InitImageSizeCombo(int);

    void            ChangeSmartphoneTypeCB(int);
    void            ChangeMMSystemTypeCB(int);
    void            ChangeForTheWTypeCB(int);

private:
    void            AddItemToFramingCB(QComboBox *CB,int FraminStyle);     // Utility function use to add item in framing combobox
    QStringList     StringToSortedStringList(QString String);

    Ui::DlgApplicationSettings *ui;
};

#endif // DLGAPPLICATIONSETTINGS_H
