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

#ifndef DLGCHAPTER_H
#define DLGCHAPTER_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"
#include "engine/_Diaporama.h"

namespace Ui {
    class DlgChapter;
}

class DlgChapter : public QCustomDialog {
Q_OBJECT
public:
    cDiaporamaObject    *CurrentSlide;              // Current slide
    bool                IsLocationChanged;

    explicit DlgChapter(cDiaporamaObject *DiaporamaObject,cApplicationConfig *ApplicationConfig,QWidget *parent = 0);
    ~DlgChapter();
    
    // function to be overloaded
    virtual void        DoInitDialog();                             // Initialise dialog
    virtual bool        DoAccept();                                 // Call when user click on Ok button
    virtual void        DoRejet()           {/*Nothing to do*/}     // Call when user click on Cancel button
    virtual void        PrepareGlobalUndo();                        // Initiale Undo
    virtual void        DoGlobalUndo();                             // Apply Undo : call when user click on Cancel button

    void                RefreshControl();

private slots:
    void                StartNewChapterCBChanged(int);
    void                OverrideProjectDateChanged(int);
    void                OverrideDateCBChanged(int);
    void                ChapterEventDateChanged(const QDate &NewDate);
    void                SelectLocation();
    void                ClearLocation();
    void                OverrideLocationCBChanged(int);

private:
    Ui::DlgChapter *ui;
};

#endif // DLGCHAPTER_H
