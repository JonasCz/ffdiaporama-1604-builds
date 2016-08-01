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

#ifndef DLGAUTOTITLESLIDE_H
#define DLGAUTOTITLESLIDE_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"
#include "engine/_Diaporama.h"

namespace Ui {
    class DlgAutoTitleSlide;
}

class DlgAutoTitleSlide : public QCustomDialog {
Q_OBJECT
public:
    cDiaporamaObject    *CurrentSlide;              // Current slide
    QString             OldName;
    bool                IsCreation;
    QTimer              Timer;
    bool                IsLocationChanged;

    explicit DlgAutoTitleSlide(bool IsCreation,cDiaporamaObject *DiaporamaObject,cApplicationConfig *ApplicationConfig,QWidget *parent = 0);
    ~DlgAutoTitleSlide();

    // function to be overloaded
    virtual void        DoInitDialog();                             // Initialise dialog
    virtual bool        DoAccept();                                 // Call when user click on Ok button
    virtual void        DoRejet()           {/*Nothing to do*/}     // Call when user click on Cancel button
    virtual void        PrepareGlobalUndo();                        // Initiale Undo
    virtual void        DoGlobalUndo();                             // Apply Undo : call when user click on Cancel button

    void                RefreshControl();

signals:
    void                SetModifyFlag();

private slots:
    void                s_TimerEvent();
    void                OKPrevious();
    void                OKNext();
    void                OKConvert();
    void                OverrideProjectDateChanged(int);
    void                OverrideDateCBChanged(int);
    void                ChapterEventDateChanged(const QDate &NewDate);
    void                s_ChSlideTypeCB(int);
    void                s_ChSlideCatCB(int);
    void                s_ChapterNameChanged(QString);
    void                s_ChapterDateChanged();
    void                SelectLocation();
    void                ClearLocation();
    void                OverrideLocationCBChanged(int);
    void                ProjectProperties();

private:
    Ui::DlgAutoTitleSlide *ui;
};

#endif // DLGAUTOTITLESLIDE_H
