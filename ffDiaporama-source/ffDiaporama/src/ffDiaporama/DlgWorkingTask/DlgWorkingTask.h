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

#ifndef DLGWORKINGTASK_H
#define DLGWORKINGTASK_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"

namespace Ui {
    class DlgWorkingTask;
}

class DlgWorkingTask : public QCustomDialog {
Q_OBJECT
public:
    bool    *CancelActionFlag;
    int     MaxValue,AddValue;

    QTimer  Timer;
    qreal   TimerProgress;
    QString TimerText;

    explicit DlgWorkingTask(QString Title,bool *CancelAction,cApplicationConfig *ApplicationConfig,QWidget *parent=0);
    ~DlgWorkingTask();

    // function to be overloaded
    virtual void    DoInitDialog();                             // Initialise dialog
    virtual bool    DoAccept()          {return true;}          // Call when user click on Ok button
    virtual void    DoRejet();                                  // Call when user click on Cancel button
    virtual void    PrepareGlobalUndo() {/*Nothing to do*/}     // Initiale Undo
    virtual void    DoGlobalUndo()      {/*Nothing to do*/}     // Apply Undo : call when user click on Cancel button

    void            DisplayText(QString Text);
    void            DisplayText2(QString Text);
    void            StopText2();
    void            DisplayProgress(int Value);
    void            SetMaxValue(int Value,int AddValue);
    void            HideProgress();

private slots:
    void            s_TimerEvent();


private:
    Ui::DlgWorkingTask *ui;
};

#endif // DLGWORKINGTASK_H
