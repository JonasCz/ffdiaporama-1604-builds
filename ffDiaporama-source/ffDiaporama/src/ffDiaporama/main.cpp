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

// Somethings needed by libav
#ifdef _STDINT_H
    #undef _STDINT_H            // Remove previous inclusion (if exist)
#endif
#define __STDC_CONSTANT_MACROS  // Activate macro for stdint
#include <stdint.h>             // Include stdint with macro activated
#include <iostream>

#include "MainWindow/mainwindow.h"
#include <QTranslator>
#include <QtDebug>
#include <QSharedMemory>

//====================================================================================================================

bool CheckFolder(QString FileToTest,QString PathToTest) {
    QString Path=QDir(PathToTest).absolutePath();
    if (!Path.endsWith(QDir::separator())) Path=Path+QDir::separator();
    bool IsFound=QFileInfo(Path+FileToTest).exists();
    if (IsFound) {
        QDir::setCurrent(Path);
        ToLog(LOGMSG_INFORMATION,QString("Application found in directory %1").arg(QDir::toNativeSeparators(Path)+FileToTest));
    } else {
    ToLog(LOGMSG_INFORMATION,QString("Application not found in directory %1").arg(QDir::toNativeSeparators(Path)+FileToTest));
    }
    return IsFound;
}

//**************************************************
// First thing to do : ensure correct current path
// At program startup : CurrentPath is set to data folder (we search GlobalConfig file) that could be :
//      in current path
//      or in ../ApplicationGroupName
//      or in ../ApplicationName
//      or in $$PREFIX/share/ApplicationGroupName
//      or in $$PREFIX/share/ApplicationName
//**************************************************

bool SetWorkingPath(char * const argv[],QString ApplicationName) {
    QString StartupDir=QFileInfo(argv[0]).absolutePath();
    ToLog(LOGMSG_INFORMATION,"StartupDir "+QDir::toNativeSeparators(StartupDir));
    //QDir::setCurrent(StartupDir);

    QString FileToTest="BUILDVERSION.txt";

    if (!CheckFolder(FileToTest,QDir::currentPath())
        &&(!CheckFolder(FileToTest,QString("..")+QDir().separator()+QString("..")+QDir().separator()+QString("..")+QDir().separator()+QString("..")+QDir().separator()+ApplicationName))
        &&(!CheckFolder(FileToTest,QString("..")+QDir().separator()+QString("..")+QDir().separator()+QString("..")+QDir().separator()+ApplicationName))
        #if defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
            &&(!CheckFolder(FileToTest,"/opt/share/"+ApplicationName))
            &&(!CheckFolder(FileToTest,"/usr/share/"+ApplicationName))
        #endif
       ) {
        ToLog(LOGMSG_INFORMATION,QString("Critical error : Impossible to find application directory"));
        exit(1);
    }
    ToLog(LOGMSG_INFORMATION,"Set working path to "+QDir::toNativeSeparators(QDir::currentPath()));

    return true;
}

//====================================================================================================================

int main(int argc, char* argv[]) {
    #if QT_VERSION >= 0x050000
    qInstallMessageHandler(QTMessageOutput);
    #else
    qInstallMsgHandler(QTMessageOutput);
    #endif

    ToLog(LOGMSG_INFORMATION,QString("QT Version:%1").arg(qVersion()));

    // Change startup directory to the one containing BUILDVERSION.txt
    SetWorkingPath(argv,APPLICATION_NAME);

    // Read build version to set global variable CurrentAppName and CurrentAppVersion
    QFile file("BUILDVERSION.txt");
    if (!file.open(QIODevice::ReadOnly | QIODevice::Text)) exit(1);
    CurrentAppName=QString(file.readLine());
    CurrentAppName.replace("Version ","");
    if (CurrentAppName.endsWith("\n"))   CurrentAppName=CurrentAppName.left(CurrentAppName.length()-QString("\n").length());
    while (CurrentAppName.endsWith(" ")) CurrentAppName=CurrentAppName.left(CurrentAppName.length()-1);
    if (CurrentAppName.lastIndexOf(" ")) {
        CurrentAppVersion=CurrentAppName.mid(CurrentAppName.lastIndexOf(" ")+1);
        CurrentAppName   =CurrentAppName.left(CurrentAppName.lastIndexOf(" "));
        CurrentAppName.replace("_"," ");
        CurrentAppName.replace("-"," ");
    }
    file.close();

    // Init application
    ToLog(LOGMSG_INFORMATION,QString("Start %1 %2 (%3) ...").arg(APPLICATION_NAME).arg(CurrentAppName).arg(CurrentAppVersion));

    int     zero=1;
    char    *WM_NAME[]={(char *)APPLICATION_NAME};
    #if defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
        #if QT_VERSION >= 0x050000
        #else
            if (SearchRasterMode()) QApplication::setGraphicsSystem("raster");
        #endif
        QApplication app(zero,WM_NAME);
    #elif defined(Q_OS_WIN)
        #if QT_VERSION >= 0x050000
            QApplication app(zero,WM_NAME);
        #else
            // Check Windows version and :
            //      If <Windows/XP then exit application
            //      If Windows/XP then swith to low fragmentation heap mode
            //      If >Windows/XP then it's OK
            // And attach stdio to console if application was started from a console
            SetLFHeap();
            QThread::currentThread()->setPriority(QThread::HighestPriority);
            QApplication::setStyle("Cleanlooks");
            QApplication app(zero,WM_NAME);
        #endif
    #endif
    app.setApplicationName(APPLICATION_NAME+QString(" ")+CurrentAppVersion);

    // Parse parameters to find ForceLanguage and AutoLoad
    ToLog(LOGMSG_INFORMATION,"Parse command line ...");
    QString AutoLoad="";
    QString ForceLanguage="";
    int     FuturLogMsgLevel=LogMsgLevel;
    for (int i=1;i<argc;i++) {
        QString Param=QString(argv[i]).toLower();
        if (Param.startsWith("-lang="))             ForceLanguage=Param.mid(QString("-lang=").length());
        else if (Param.startsWith("-loglevel="))    FuturLogMsgLevel=Param.mid(QString("-loglevel=").length()).toInt();
        else                                        AutoLoad=QString().fromLocal8Bit(argv[i]);
    }

    // Log Level part
    if ((FuturLogMsgLevel<1)||(FuturLogMsgLevel>4)) FuturLogMsgLevel=2;
    switch (FuturLogMsgLevel) {
        case 1 : ToLog(LOGMSG_INFORMATION,"Set LogLevel to DEBUGTRACE");    break;
        case 2 : ToLog(LOGMSG_INFORMATION,"Set LogLevel to INFORMATION");   break;
        case 3 : ToLog(LOGMSG_INFORMATION,"Set LogLevel to WARNING");       break;
        case 4 :
        default: ToLog(LOGMSG_INFORMATION,"Set LogLevel to CRITICAL");      break;
    }
    LogMsgLevel=FuturLogMsgLevel;

    // Start GUI
    ToLog(LOGMSG_INFORMATION,"Start GUI ...");
    MainWindow w(ForceLanguage);
    w.FileForIO=AutoLoad;

    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Start ..."));

    return app.exec();
}
