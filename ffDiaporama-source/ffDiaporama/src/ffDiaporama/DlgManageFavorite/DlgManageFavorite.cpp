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

// Specific inclusions
#include "DlgManageFavorite.h"
#include "ui_DlgManageFavorite.h"

#include <QMessageBox>
#include <QInputDialog>
#include <QLineEdit>

#define ICON_FRAMING_CUSTOM                 ":/img/action_cancel.png"
#define ICON_FRAMING_FULL                   ":/img/AdjustWH.png"
#define ICON_FRAMING_WIDTH                  ":/img/AdjustW.png"
#define ICON_FRAMING_HEIGHT                 ":/img/AdjustH.png"
#define ICON_GLOBALCONF                     ":/img/db.png"
#define ICON_USERCONF                       ":/img/db_update.png"

//============================================================================================================================
// Manage style dialog
//============================================================================================================================

DlgManageFavorite::DlgManageFavorite(QStringList *TheCollection,cApplicationConfig *ApplicationConfig,QWidget *parent):
    QCustomDialog(ApplicationConfig,parent),ui(new Ui::DlgManageFavorite) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageFavorite::DlgManageFavorite");
    ui->setupUi(this);
    OkBt        =ui->OKBT;
    CancelBt    =ui->CancelBt;
    HelpBt      =ui->HelpBt;
    HelpFile    ="0112";
    Collection  =TheCollection;
}

//====================================================================================================================

DlgManageFavorite::~DlgManageFavorite() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageFavorite::~DlgManageFavorite");
    delete ui;
}

//====================================================================================================================

void DlgManageFavorite::DoInitDialog() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageFavorite::DoInitDialog");
    PopulateList("");

    // Define handler
    connect(ui->ListFavorite,SIGNAL(currentRowChanged(int)),this,SLOT(s_currentRowChanged(int)));
    connect(ui->DBRenameBT,SIGNAL(clicked()),this,SLOT(s_DBRename()));
    connect(ui->DBRemoveBT,SIGNAL(clicked()),this,SLOT(s_DBRemove()));

    ui->ListFavorite->setCurrentRow(0);
}

//====================================================================================================================
// Initiale Undo

void DlgManageFavorite::PrepareGlobalUndo() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageFavorite::PrepareGlobalUndo");
    // Save object before modification for cancel button
    UndoCollection.clear();
    for (int i=0;i<Collection->count();i++) UndoCollection.append((*Collection)[i]);
}

//====================================================================================================================
// Apply Undo : call when user click on Cancel button

void DlgManageFavorite::DoGlobalUndo() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageFavorite::DoGlobalUndo");
    Collection->clear();
    for (int i=0;i<UndoCollection.count();i++) Collection->append(UndoCollection[i]);
}

//====================================================================================================================

void DlgManageFavorite::s_currentRowChanged(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageFavorite::s_currentRowChanged");
    ui->DBRenameBT->setEnabled(ui->ListFavorite->currentRow()!=-1);
    ui->DBRemoveBT->setEnabled(ui->ListFavorite->currentRow()!=-1);
}

//====================================================================================================================

void DlgManageFavorite::PopulateList(QString ActiveName) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageFavorite::PopulateList");
    ui->ListFavorite->setUpdatesEnabled(false);
    ui->ListFavorite->clear();
    for (int i=0;i<Collection->count();i++) {
        QString     Text=(*Collection)[i];
        QStringList Texts=Text.split("###");
        ui->ListFavorite->addItem(new QListWidgetItem(QIcon(":/img/favorite.png"),QString("%1 [%2]").arg(Texts[0]).arg(Texts[1])));
        if (ActiveName==Text) ui->ListFavorite->setCurrentRow(ui->ListFavorite->count()-1);
    }
    ui->ListFavorite->setUpdatesEnabled(true);
}

//====================================================================================================================

void DlgManageFavorite::s_DBRename() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageFavorite::s_DBRename");
    QListWidgetItem *Item=ui->ListFavorite->item(ui->ListFavorite->currentRow());
    if (Item) {
        QString     Text=Item->text();
        QStringList Texts=Text.split(" [");
        Texts[1]=Texts[1].left(Texts[1].length()-1);
        int i=0;
        while ((i<Collection->count())&&((*Collection)[i]!=Texts[0]+"###"+Texts[1])) i++;
        if ((i<Collection->count())&&((*Collection)[i]==Texts[0]+"###"+Texts[1])) {
            bool Ok,Continue=true;
            while (Continue) {
                Continue=false;
                Texts[0]=QInputDialog::getText(this,QApplication::translate("DlgManageFavorite","Rename favorite"),QApplication::translate("DlgManageFavorite","New favorite name:"),QLineEdit::Normal,Texts[0],&Ok);
                if (Ok && !Text.isEmpty()) {
                    // Ensure favorite name is not use by another favorite
                    int j=0;
                    while ((j<Collection->count())&&((j==i)||(!(*Collection)[j].startsWith(Texts[0]+"###")))) j++;
                    if ((j<Collection->count())&&((*Collection)[j].startsWith(Texts[0]+"###"))) {
                        CustomMessageBox(this,QMessageBox::Critical,QApplication::translate("DlgManageFavorite","Rename favorite"),
                                              QApplication::translate("DlgManageFavorite","A favorite with this name already exist.\nPlease select another name!"));
                        Continue=true;
                    } else {
                        // If all is ok then apply new name
                        (*Collection)[i]=Texts[0]+"###"+Texts[1];
                    }
                }
            }
            QString Name=(*Collection)[i];
            Collection->sort();
            PopulateList(Name);
        }
    }
}

//====================================================================================================================

void DlgManageFavorite::s_DBRemove() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageFavorite::s_DBRemove");
    QListWidgetItem *Item=ui->ListFavorite->item(ui->ListFavorite->currentRow());
    if (Item) {
        QString     Text=Item->text();
        QStringList Texts=Text.split(" [");
        Texts[1]=Texts[1].left(Texts[1].length()-1);
        int i=0;
        while ((i<Collection->count())&&((*Collection)[i]!=Texts[0]+"###"+Texts[1])) i++;
        if ((i<Collection->count())&&((*Collection)[i]==Texts[0]+"###"+Texts[1])) {
            Collection->removeAt(i);
            PopulateList("");
        }
    }
}
