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
#include "DlgManageStyle.h"
#include "ui_DlgManageStyle.h"

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

DlgManageStyle::DlgManageStyle(cStyleCollection *TheCollection,cApplicationConfig *ApplicationConfig,QWidget *parent):
    QCustomDialog(ApplicationConfig,parent),ui(new Ui::DlgManageStyle) {

    ui->setupUi(this);
    OkBt        =ui->OKBT;
    CancelBt    =ui->CancelBt;
    HelpBt      =ui->HelpBt;
    HelpFile    ="0113";
    Collection  =TheCollection;
}

//====================================================================================================================

DlgManageStyle::~DlgManageStyle() {
    delete ui;
    delete UndoCollection;
}

//====================================================================================================================

void DlgManageStyle::DoInitDialog() {
    PopulateList("");

    // Define handler
    connect(ui->ListStyle,SIGNAL(currentRowChanged(int)),this,SLOT(s_currentRowChanged(int)));
    connect(ui->DBRenameBT,SIGNAL(clicked()),this,SLOT(s_DBRename()));
    connect(ui->DBRemoveBT,SIGNAL(clicked()),this,SLOT(s_DBRemove()));
    connect(ui->DBResetBT,SIGNAL(clicked()),this,SLOT(s_DBReset()));

    ui->ListStyle->setCurrentRow(0);
}

//====================================================================================================================
// Initiale Undo

void DlgManageStyle::PrepareGlobalUndo() {
    // Save object before modification for cancel button
    UndoCollection=Collection->PrepUndo();
}

//====================================================================================================================
// Apply Undo : call when user click on Cancel button

void DlgManageStyle::DoGlobalUndo() {
    UndoCollection->SourceCollection->ApplyUndo(UndoCollection);
}

//====================================================================================================================

void DlgManageStyle::PopulateList(QString StyleToActivate) {
    ui->ListStyle->setUpdatesEnabled(false);
    ui->ListStyle->clear();
    QString Item;
    for (int i=0;i<Collection->Collection.count();i++)
        if (((!Collection->GeometryFilter)&&(Collection->Collection[i].GetFilteredPart()==""))||
            (((Collection->GeometryFilter)&&(Collection->Collection[i].GetFilteredPart()==Collection->ActiveFilter)))
        ) {
        Item=Collection->Collection[i].StyleName.mid(Collection->Collection[i].GetFilteredPart().length());
        ui->ListStyle->addItem(new QListWidgetItem(Collection->Collection[i].FromUserConf?QIcon(ICON_USERCONF):QIcon(ICON_GLOBALCONF),Item));
        if (StyleToActivate==(Collection->GeometryFilter?Collection->ActiveFilter:"")+Item) ui->ListStyle->setCurrentRow(ui->ListStyle->count()-1);
    }
    ui->ListStyle->setUpdatesEnabled(true);
}

//====================================================================================================================

void DlgManageStyle::s_currentRowChanged(int NewRow) {
    QListWidgetItem *Item=ui->ListStyle->item(NewRow);
    if (Item) {
        QString StyleName=(Collection->GeometryFilter?Collection->ActiveFilter:"")+Item->text();
        int i=0;
        while ((i<Collection->Collection.count())&&(Collection->Collection[i].StyleName!=StyleName)) i++;
        if ((i<Collection->Collection.count())&&(Collection->Collection[i].StyleName==StyleName)) {
            ui->DBRenameBT->setEnabled(true);
            ui->DBRemoveBT->setEnabled(Collection->Collection[i].FromGlobalConf==false);
            ui->DBResetBT->setEnabled(Collection->Collection[i].FromGlobalConf==true);
        } else {
            ui->DBRenameBT->setEnabled(false);
            ui->DBRemoveBT->setEnabled(false);
            ui->DBResetBT->setEnabled(false);
        }
    } else {
        ui->DBRenameBT->setEnabled(false);
        ui->DBRemoveBT->setEnabled(false);
        ui->DBResetBT->setEnabled(false);
    }
}

//====================================================================================================================

void DlgManageStyle::s_DBRename() {
    QListWidgetItem *Item=ui->ListStyle->item(ui->ListStyle->currentRow());
    if (Item) {
        QString StyleName=(Collection->GeometryFilter?Collection->ActiveFilter:"")+Item->text();
        int i=0;
        while ((i<Collection->Collection.count())&&(Collection->Collection[i].StyleName!=StyleName)) i++;
        if ((i<Collection->Collection.count())&&(Collection->Collection[i].StyleName==StyleName)) {
            bool    Ok,Continue=true;
            QString Text=Item->text();
            while (Continue) {
                Continue=false;
                Text=QInputDialog::getText(this,QApplication::translate("DlgManageStyle","Rename style"),QApplication::translate("DlgManageStyle","New style name:"),QLineEdit::Normal,Text,&Ok);
                if (Ok && !Text.isEmpty()) {
                    // Ensure Style is not use by another style
                    int j=0;
                    while ((j<Collection->Collection.count())&&((j==i)||(Collection->Collection[j].StyleName!=(Collection->GeometryFilter?Collection->ActiveFilter:"")+Text))) j++;
                    if ((j<Collection->Collection.count())&&(Collection->Collection[j].StyleName==(Collection->GeometryFilter?Collection->ActiveFilter:"")+Text)) {
                        CustomMessageBox(this,QMessageBox::Critical,QApplication::translate("DlgManageStyle","Rename style"),
                                              QApplication::translate("DlgManageStyle","A style with this name already exist.\nPlease select another name!"));
                        Continue=true;
                    } else {
                        // If all is ok then apply new name
                        Collection->Collection[i].StyleName=(Collection->GeometryFilter?Collection->ActiveFilter:"")+Text;
                        Collection->Collection[i].FromUserConf=true;
                    }
                }
            }
            QString StyleName=Collection->Collection[i].StyleName;
            Collection->SortList();
            PopulateList(StyleName);
        }
    }
}

//====================================================================================================================

void DlgManageStyle::s_DBRemove() {
    QListWidgetItem *Item=ui->ListStyle->item(ui->ListStyle->currentRow());
    if (Item) {
        QString StyleName=(Collection->GeometryFilter?Collection->ActiveFilter:"")+Item->text();
        int i=0;
        while ((i<Collection->Collection.count())&&(Collection->Collection[i].StyleName!=StyleName)) i++;
        if ((i<Collection->Collection.count())&&(Collection->Collection[i].StyleName==StyleName)) {
            if (ui->ListStyle->currentRow()<ui->ListStyle->count()-1) Item=ui->ListStyle->item(ui->ListStyle->currentRow()+1);
            else if (ui->ListStyle->currentRow()>0) Item=ui->ListStyle->item(ui->ListStyle->currentRow()-1);
            else Item=NULL;
            Collection->Collection.removeAt(i);
            PopulateList(Item==NULL?"":(Collection->GeometryFilter?Collection->ActiveFilter:"")+Item->text());
        }
    }
}

//====================================================================================================================

void DlgManageStyle::s_DBReset() {
    QListWidgetItem *Item=ui->ListStyle->item(ui->ListStyle->currentRow());
    if (Item) {
        QString StyleName=(Collection->GeometryFilter?Collection->ActiveFilter:"")+Item->text();
        int i=0;
        while ((i<Collection->Collection.count())&&(Collection->Collection[i].StyleName!=StyleName)) i++;
        if ((i<Collection->Collection.count())&&(Collection->Collection[i].StyleName==StyleName)) {
            Collection->Collection[i].StyleName=Collection->Collection[i].BckStyleName;
            Collection->Collection[i].StyleDef =Collection->Collection[i].BckStyleDef;
            Collection->Collection[i].FromUserConf=false;
            QString StyleName=Collection->Collection[i].StyleName;
            Collection->SortList();
            PopulateList(StyleName);
        }
    }
}
