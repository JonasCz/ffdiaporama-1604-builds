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

#ifndef DLGEXPORTPROJECT_H
#define DLGEXPORTPROJECT_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"

// Include some common various class
#include "engine/cApplicationConfig.h"
#include "engine/_Diaporama.h"

namespace Ui {
    class DlgExportProject;
}

class DlgExportProject:public QCustomDialog {
Q_OBJECT
public:
    QString                 DestinationPath;
    cDiaporama              *ffdProject;
    cReplaceObjectList      ReplaceList;
    bool                    JobStarted;
    bool                    JobCancel;
    QFutureWatcher<void>    ThreadCopy;
    QString                 ErrorMsg;
    QTimer                  Timer;
    int                     CurrentObject;
    int                     HeighRow;

    explicit DlgExportProject(cDiaporama *ffdProject,cApplicationConfig *ApplicationConfig,QWidget *parent = 0);
    ~DlgExportProject();
    
    // function to be overloaded
    virtual void    DoInitDialog();                             // Initialise dialog
    virtual bool    DoAccept();                                 // Call when user click on Ok button
    virtual void    DoRejet();                                  // Call when user click on Cancel button
    virtual void    PrepareGlobalUndo() {/*Nothing to do*/}     // Initiale Undo
    virtual void    DoGlobalUndo()      {/*Nothing to do*/}     // Apply Undo : call when user click on Cancel button

    void            DoProcessCopy();

private slots:
    void            s_TimerEvent();
    void            SelectDestinationPath();
    void            AdjustDestinationPath();
    void            ScanDiaporama();
    void            EndAccept();

private:
    Ui::DlgExportProject *ui;

    void SearchAppendObject(QString FileName);
};

#endif // DLGEXPORTPROJECT_H
