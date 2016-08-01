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

#ifndef _QCUSTOMDIALOG_H
#define _QCUSTOMDIALOG_H

// Basic inclusions (common to all files)
#include "engine/_GlobalDefines.h"

// Include some additional standard class
#include <QAction>
#include <QComboBox>
#include <QDialog>
#include <QDomDocument>
#include <QDesktopServices>
#include <QHeaderView>
#include <QIcon>
#include <QImage>
#include <QLineEdit>
#include <QMessageBox>
#include <QPushButton>
#include <QShowEvent>
#include <QString>
#include <QStyledItemDelegate>
#include <QTableWidget>
#include <QTableWidgetItem>
#include <QTreeWidget>
#include <QWidget>

// Include some common various class
#include "engine/cApplicationConfig.h"

//**********************************************************************************
// Dialogbox help file number
//**********************************************************************************

#define HELPFILE_NEWS                       5
#define HELPFILE_WIKIINDEX                  "main"
#define HELPFILE_RENDERINDEX                "0030"    // Rendering videos

//**********************************************************************************
// name of default icons
//**********************************************************************************

#define ICON_GEOMETRY_LOCKED                ":/img/Geometry_Lock.png"
#define ICON_GEOMETRY_UNLOCKED              ":/img/Geometry_Unlock.png"
#define ICON_GEOMETRY_PROJECT               ":/img/Geometry_ProjectLock.png"

//**********************************************************************************
// Display coordinates unit
//**********************************************************************************

#define DISPLAYUNIT_PERCENT                 0
#define DISPLAYUNIT_PIXELS                  1

//**********************************************************************************

class QCustomDialog : public QDialog {
Q_OBJECT
public:
    struct sUndoData {
        int         ActionType;
        QString     Data;
        QWidget     *FocusWindow;
        QWidget     *FocusTab;
    };

    QList<sUndoData>            UndoDataList;

    cApplicationConfig          *ApplicationConfig;
    qlonglong                   TypeWindowState;
    QSplitter                   *Splitter;
    QDomDocument                *Undo;                          // Save object before modification for cancel button
    QStringList                 UndoData;
    QAbstractButton             *OkBt;
    QAbstractButton             *CancelBt;
    QAbstractButton             *UndoBt;
    QAbstractButton             *HelpBt;
    QString                     HelpFile;

    explicit                    QCustomDialog(cApplicationConfig *BaseApplicationConfig,QWidget *parent = 0);
                                ~QCustomDialog();

    virtual void                InitDialog();

    // Abstract function : need to be overloaded
    virtual void                DoInitDialog()=0;           // Initialise dialog
    virtual bool                DoAccept()=0;               // Call when user click on Ok button
    virtual void                DoRejet()=0;                // Call when user click on Cancel button
    virtual void                PrepareGlobalUndo()=0;      // Initiale Undo
    virtual void                DoGlobalUndo()=0;           // Apply Undo : call when user click on Cancel button

    virtual void                SaveWindowState();
    virtual void                RestoreWindowState();
    virtual void                SaveAdditionnalWindowState(QDomElement &)   {}
    virtual void                RestoreAdditionnalWindowState(QDomElement)  {}


    virtual void                AppendPartialUndo(int ActionType,QWidget *FocusWindow,bool ForceAdd,QWidget *FocusTab=NULL,bool DuplicateRessource=false);
    virtual void                AppendPartialUndo(int ActionType,QString WidgetName,bool ForceAdd,QWidget *FocusTab=NULL,bool DuplicateRessource=false);
    virtual void                RemoveLastPartialUndo();

    virtual void                PreparePartialUndo(int,QDomElement,bool) {}     // To be overloaded
    virtual void                ApplyPartialUndo(int,QDomElement)   {}     // To be overloaded

    virtual void                toolTipTowhatsThis(QObject *StartObj);

protected:
    virtual void                accept();
    virtual void                reject();
    virtual void                keyReleaseEvent(QKeyEvent *event);

    // Utility functions
    virtual void                DoInitTableWidget(QTableWidget *Table,QString TableColumns);
    virtual QTableWidgetItem    *CreateItem(QString ItemText,int Alignment,QBrush Background);
    virtual void                DoResizeColumnsTableWidget(QTableWidget *Table);
    virtual void                SetCBIndex(QComboBox *CB,int ItemData);                             // Utility function use to set current index in a combobox base on an itemdata

protected slots:
    virtual void                DoPartialUndo();
    virtual void                help();
};

//**********************************************************************************

class QNullTableWidgetItem : public QTableWidgetItem {
public:
    explicit QNullTableWidgetItem(const QIcon &icon, const QString &text, int type):QTableWidgetItem(icon,text,type=Type)   {setFlags(Qt::NoItemFlags);}
    explicit QNullTableWidgetItem(const QTableWidgetItem &other):QTableWidgetItem(other)                                    {setFlags(Qt::NoItemFlags);}
    explicit QNullTableWidgetItem(int type):QTableWidgetItem(type=Type)                                                     {setFlags(Qt::NoItemFlags);}
    explicit QNullTableWidgetItem(const QString &text,int type=Type):QTableWidgetItem(text,type=Type)                       {setFlags(Qt::NoItemFlags);}
};


// New definition for QInputDialog::getText
QString CustomInputDialog(QWidget *parent,const QString &title,const QString &label,int mode,const QString &text,bool *ok,Qt::InputMethodHints inputMethodHints=Qt::ImhNone);
int     CustomMessageBox (QWidget *parent,QMessageBox::Icon icon,const QString& title,const QString& text,QMessageBox::StandardButtons buttons=QMessageBox::Ok,
                          QMessageBox::StandardButton defaultButton=QMessageBox::NoButton,QString ButtonYesText="",QString ButtonNoText="");

#endif // _QCUSTOMDIALOG_H
