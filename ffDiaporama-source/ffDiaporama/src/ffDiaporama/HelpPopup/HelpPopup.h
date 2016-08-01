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

#ifndef HELPPOPUP_H
#define HELPPOPUP_H

#include <QtHelp/QHelpEngine>
#include <CustomCtrl/_QCustomDialog.h>
#include "HelpBrowser.h"

namespace Ui {
    class HelpPopup;
}

class HelpPopup : public QCustomDialog {
Q_OBJECT
public:
    QHelpEngine     *HelpEngine;
    QString         Path;
    QStringList     HelpFileHistory;            // Saved help file (work with SaveLatestHelpFile / RestorePreviousHelpFile)
    QString         LatestHelpFile;
    bool            *WikiFollowInterface;
    bool            DisableContentChange;

    explicit        HelpPopup(cApplicationConfig *ApplicationConfig,QWidget *parent=0);
                    ~HelpPopup();

    virtual void    DoInitDialog();
    virtual bool    DoAccept()          {return true;}
    virtual void    DoRejet()           {/*Nothing to do*/}
    virtual void    PrepareGlobalUndo() {/*Nothing to do*/}
    virtual void    DoGlobalUndo()      {/*Nothing to do*/}

    void            OpenHelp(QString HelpFile,bool ForceWindow);
    void            SaveLatestHelpFile();
    void            RestorePreviousHelpFile();

private slots:
    void            UpdateUrl(QModelIndex);
    void            PageChanged();
    void            CollapsedOrExpanded(QModelIndex);
    void            Exit();
    void            Back();
    void            Next();
    void            CCBYSABT();
    void            Home();
    void            WebSite();
    void            Forum();
    void            Follow();
    void            SourceChanged(const QUrl &name);

private:
    Ui::HelpPopup   *ui;
};

#endif // HELPPOPUP_H
