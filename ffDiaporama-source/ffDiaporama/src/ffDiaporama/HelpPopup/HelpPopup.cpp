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

#include "HelpPopup.h"
#include "ui_HelpPopup.h"

#include <QTextBrowser>
#include <QSplitter>
#include <QtHelp/QHelpContentModel>
#include <QtHelp/QHelpContentWidget>

HelpPopup::HelpPopup(cApplicationConfig *ApplicationConfig,QWidget *):QCustomDialog(ApplicationConfig,NULL),ui(new Ui::HelpPopup) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::HelpPopup");

    HelpEngine              =NULL;
    Path                    ="ffdiaporama_";
    QString CollectionFile  =ApplicationConfig->UserConfigPath;
    QString NameSpace       ="ffdiaporama_";

    if (!CollectionFile.endsWith(QDir::separator())) CollectionFile=CollectionFile+QDir::separator();
    if (QFileInfo(CollectionFile+QString("wiki_%1.qhc").arg(ApplicationConfig->CurrentLanguage)).exists()) {
        CollectionFile=CollectionFile+QString("wiki_%1.qhc").arg(ApplicationConfig->CurrentLanguage);
        Path=Path+ApplicationConfig->CurrentLanguage;
        NameSpace=NameSpace+ApplicationConfig->CurrentLanguage;
    } else {
        CollectionFile=ApplicationConfig->StartingPath+QDir::separator()+"locale"+QDir::separator()+"wiki_en.qhc";
        Path=Path+"en";
        NameSpace=NameSpace+"en";
    }
    HelpEngine=new QHelpEngine(CollectionFile,this);
    if (!HelpEngine->setupData()) {
        delete HelpEngine;
        HelpEngine=NULL;
    }

    setAttribute(Qt::WA_AlwaysShowToolTips);
    setWindowModality(Qt::NonModal);
    #ifndef Q_OS_WIN
    setWindowFlags(Qt::Window);
    #endif

    WikiFollowInterface=&ApplicationConfig->WikiFollowInterface;
    DisableContentChange=false;

    ui->setupUi(this);
    TypeWindowState =TypeWindowState_withsplitterpos;
    Splitter        =ui->HelpSplitter;
}

//====================================================================================================================
// Initialise dialog

void HelpPopup::DoInitDialog() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::DoInitDialog");

    if (HelpEngine) {
        ui->HelpBrowserWidget->HelpEngine=HelpEngine;
        ui->ContentWidget->InitHelpEngine(HelpEngine);
        ui->FollowInterfaceCB->setChecked(*WikiFollowInterface);
        ui->HelpSplitter->setStretchFactor(0,1);
        ui->HelpSplitter->setStretchFactor(1,3);

        connect(ui->HelpBrowserWidget,SIGNAL(historyChanged()),SLOT(PageChanged()));
        connect(ui->HelpBrowserWidget,SIGNAL(sourceChanged(QUrl)),SLOT(SourceChanged(QUrl)));
        connect(ui->ContentWidget,SIGNAL(clicked(QModelIndex)),this,SLOT(UpdateUrl(QModelIndex)));
        connect(ui->ContentWidget,SIGNAL(collapsed(QModelIndex)),this,SLOT(CollapsedOrExpanded(QModelIndex)));
        connect(ui->ContentWidget,SIGNAL(expanded(QModelIndex)),this,SLOT(CollapsedOrExpanded(QModelIndex)));
        connect(ui->ExitBT,SIGNAL(pressed()),this,SLOT(Exit()));
        connect(ui->PreviousBT,SIGNAL(pressed()),this,SLOT(Back()));
        connect(ui->NextBT,SIGNAL(pressed()),this,SLOT(Next()));
        connect(ui->CCBYSABT,SIGNAL(pressed()),this,SLOT(CCBYSABT()));
        connect(ui->HomeBT,SIGNAL(pressed()),this,SLOT(Home()));
        connect(ui->WebSiteBT,SIGNAL(pressed()),this,SLOT(WebSite()));
        connect(ui->ForumBT,SIGNAL(pressed()),this,SLOT(Forum()));
        connect(ui->FollowInterfaceCB,SIGNAL(clicked()),this,SLOT(Follow()));
        PageChanged();
    }
}

//====================================================================================================================

HelpPopup::~HelpPopup() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::~HelpPopup");
    delete ui;
}

//====================================================================================================================

void HelpPopup::UpdateUrl(QModelIndex index) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::UpdateUrl");
    if (HelpEngine) {
        DisableContentChange=true;
        ui->HelpBrowserWidget->setSource(ui->ContentWidget->GetURL(index));
        DisableContentChange=false;
    }
}

//====================================================================================================================

void HelpPopup::Exit() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::Exit");
    close();
}

//====================================================================================================================

void HelpPopup::Back() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::Back");
    ui->HelpBrowserWidget->backward();
}

//====================================================================================================================

void HelpPopup::Next() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::Next");
    ui->HelpBrowserWidget->forward();
}

//====================================================================================================================

void HelpPopup::CCBYSABT() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::CCBYSABT");
    QDesktopServices::openUrl(QUrl("http://creativecommons.org/licenses/by-sa/3.0/"));
}

//====================================================================================================================

void HelpPopup::Home() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::Home");
    OpenHelp("main",false);
}

//====================================================================================================================

void HelpPopup::WebSite() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::WebSite");
    QDesktopServices::openUrl(QUrl(QString("http://ffdiaporama.tuxfamily.org/?lang=%1").arg(ApplicationConfig->CurrentLanguage)));
}

//====================================================================================================================

void HelpPopup::Forum() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::Forum");
    QDesktopServices::openUrl(QUrl("http://ffdiaporama.tuxfamily.org/Forum/"));
}

//====================================================================================================================

void HelpPopup::PageChanged() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::PageChanged");
    ui->PreviousBT->setEnabled(ui->HelpBrowserWidget->backwardHistoryCount()>0);
    ui->NextBT->setEnabled(ui->HelpBrowserWidget->isForwardAvailable());
}

//====================================================================================================================

void HelpPopup::OpenHelp(QString HelpFile,bool ForceWindow) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::OpenHelp");
    if (HelpEngine) {
        LatestHelpFile=HelpFile;
        if (HelpFile.endsWith(".html")) ui->HelpBrowserWidget->setSource(QString("qthelp://%1%2").arg(Path).arg(HelpFile));
            else                        ui->HelpBrowserWidget->setSource(QString("qthelp://%1/doc/%2.html").arg(Path).arg(HelpFile));
        if ((ForceWindow)&&(!this->isVisible())) show();
        if (ForceWindow) raise();
    }
}

//====================================================================================================================

void HelpPopup::SourceChanged(const QUrl &name) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::SourceChanged");
    LatestHelpFile=name.path();
    QString Title=ui->HelpBrowserWidget->documentTitle();
    Title.replace("\n","");
    ui->HelpTitle->setText(Title.trimmed());

    if (!DisableContentChange) {
        QModelIndex Item;
        if (ui->ContentWidget->SearchPage(name.path(),ui->ContentWidget->rootIndex(),Item)) ui->ContentWidget->setCurrentIndex(Item);
        ui->ContentWidget->ResizeScrollBar();
    }
}

//====================================================================================================================

void HelpPopup::CollapsedOrExpanded(QModelIndex) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::CollapsedOrExpanded");
    ui->ContentWidget->ResizeScrollBar();
}

//====================================================================================================================

void HelpPopup::SaveLatestHelpFile() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::SaveLatestHelpFile");
    HelpFileHistory.append(LatestHelpFile);
}

//====================================================================================================================

void HelpPopup::RestorePreviousHelpFile() {
   ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::RestorePreviousHelpFile");
   if (!HelpFileHistory.isEmpty()) OpenHelp(HelpFileHistory.takeLast(),false);
}

//====================================================================================================================

void HelpPopup::Follow() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:HelpPopup::SourceChanged");
    *WikiFollowInterface=ui->FollowInterfaceCB->isChecked();
}
