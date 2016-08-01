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

#include "DlgAbout.h"
#include "ui_DlgAbout.h"

//====================================================================================================================

DlgAbout::DlgAbout(cApplicationConfig *ApplicationConfig,QWidget *parent):
    QCustomDialog(ApplicationConfig,parent),ui(new Ui::DlgAbout) {

    ui->setupUi(this);
    OkBt    =ui->OKBT;
    //CancelBt=;
    //HelpBt  =ui->HelpBT;
}

//====================================================================================================================

DlgAbout::~DlgAbout() {
    delete ui;
}

//====================================================================================================================
// Initialise dialog

void DlgAbout::DoInitDialog() {
    QString FName,Text;
    QFile   File;

    if (ApplicationConfig->CurrentLanguage!="fr") FName=ApplicationConfig->StartingPath+QDir::separator()+QString("changelog-en.txt");
        else FName=ApplicationConfig->StartingPath+QDir::separator()+QString("changelog-fr.txt");
    File.setFileName(FName);
    if (File.open(QIODevice::ReadOnly|QIODevice::Text)) {
        QTextStream InStream(&File);
        InStream.setCodec("UTF-8");
        Text=InStream.readAll();
        ui->ChangelogED->setText(Text);
        File.close();
    } else {
        ui->tabWidget->removeTab(5);
    }

    Text.clear();
    if (ApplicationConfig->CurrentLanguage!="en") {
        FName=ApplicationConfig->UserConfigPath+QString("%1_LOCALEVERSION.TXT").arg(ApplicationConfig->CurrentLanguage);
        File.setFileName(FName);
        if (!File.exists()) {
            FName=ApplicationConfig->UserConfigPath+QString("%1_VERSION.TXT").arg(ApplicationConfig->CurrentLanguage);
            File.setFileName(FName);
        }
        if (!File.exists()) {
            FName=ApplicationConfig->UserConfigPath+QString("LOCALEVERSION.TXT");
            File.setFileName(FName);
        }
        if (!File.exists()) {
            FName=ApplicationConfig->UserConfigPath+QString("VERSION.TXT");
            File.setFileName(FName);
        }
        if (File.open(QIODevice::ReadOnly|QIODevice::Text)) {
            while (!File.atEnd()) {
                QString Line=File.readLine();
                if (Line.indexOf("=")<0) Line=QApplication::translate("DlgAbout","Interface translation version: ")+Line+"\n\ten\t100%\n"; else {
                    if (Line.indexOf("to translate")) Line.replace("to translate",QApplication::translate("DlgAbout","to translate"));
                    Line="\t"+Line;
                    Line.replace(" = ","\t");
                }
                Text.append(Line);
            }
            File.close();
        }
    }

    if (ApplicationConfig->CurrentLanguage!="en") {
        FName=ApplicationConfig->UserConfigPath+QString("%1_WIKIVERSION.TXT").arg(ApplicationConfig->CurrentLanguage);
        File.setFileName(FName);
        if (!File.exists()) {
            FName=ApplicationConfig->UserConfigPath+QString("WIKIVERSION.TXT");
            File.setFileName(FName);
        }
        if (File.open(QIODevice::ReadOnly|QIODevice::Text)) {
            while (!File.atEnd()) {
                QString Line=File.readLine();
                if (Line.indexOf("=")<0) {
                    if (!Text.isEmpty()) Text.append("\n");
                    Line=QApplication::translate("DlgAbout","WIKI translation version: ")+Line+"\n\ten\t100%\n";
                } else {
                    if (Line.indexOf("to translate")) Line.replace("to translate",QApplication::translate("DlgAbout","to translate"));
                    Line="\t"+Line;
                    Line.replace(" = ","\t");
                }
                Text.append(Line);
            }
            File.close();
        }
    }
    if (!Text.isEmpty()) ui->TranslationED->setText(Text); else ui->tabWidget->removeTab(4);

    FName=QString("clipart")+QDir::separator()+QString("openclipart-0.18-svgonly-readme.txt");
    File.setFileName(FName);
    if (File.open(QIODevice::ReadOnly|QIODevice::Text)) {
        Text=File.readAll();
        ui->OpenclipartED->setText(Text);
        File.close();
    } else {
        ui->tabWidget->removeTab(3);
    }
    FName=QString("background")+QDir::separator()+QString("texturemate")+QDir::separator()+QString("readme.txt");
    File.setFileName(FName);
    if (File.open(QIODevice::ReadOnly|QIODevice::Text)) {
        QString Text=File.readAll();
        ui->TexturemateED->setText(Text);
        File.close();
    } else {
        ui->tabWidget->removeTab(2);
    }
    QFile File2("authors.txt");
    if (File2.open(QIODevice::ReadOnly|QIODevice::Text)) {
        QString Text=File2.readAll();
        ui->CreditsED->setText(Text);
        File2.close();
    } else {
        ui->tabWidget->removeTab(1);
    }

    ui->ApplicationReleaseLabel->setText(QString("%1 (%2)").arg(CurrentAppName).arg(CurrentAppVersion));
    ui->ApplicationNameLabel->setText(APPLICATION_NAME);
    ui->tabWidget->setCurrentIndex(0);
}
