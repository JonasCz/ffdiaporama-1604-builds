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

#include "cDriveList.h"
#include "cApplicationConfig.h"

#include <QtDebug>
#include <QFileInfoList>
#include <QFileInfo>
#include <QDir>
#include <QFile>

#ifdef Q_OS_WIN
    #include <windows.h>
    #include <QSettings>
    #include <lmcons.h>
#endif

QString PersonalFolder          ="";
QString DefaultMediaPath        ="";           // default folder for image/video
QString DefaultMusicPath        ="";           // default folder for music
QString DefaultProjectPath      ="";           // default folder for project
QString DefaultExportPath       ="";           // default folder for project export
QString DefaultRenderVideoPath  ="";           // default folder for render video
QString DefaultRenderAudioPath  ="";           // default folder for render audio
QString DefaultCaptureImage     ="";           // default folder for captured image
QString DefaultBrowserPath      ="";           // default folder for integrated browser
QString DefaultPositionIconPath ="";           // default folder for integrated browser
QString ClipArtFolder           ="";
QString ModelFolder             ="";
QString CAF                     ="";
QString MFD                     ="";

//*******************************************************************************************************************************************************

#ifdef Q_OS_WIN
    bool IsDriveAvailable(QString Path) {
        Path.replace("/","\\");

        WCHAR       Drive[256+1];
        WCHAR       VolumeName[256+1];
        WCHAR       SysName[256+1];
        DWORD       SerialNumber;
        DWORD       MaxComponent;
        DWORD       FileSysFlag;

        QString PhysicalPath=Path;
        if ((PhysicalPath[1]==':')&&(PhysicalPath[2]=='\\')) PhysicalPath=PhysicalPath.left(3);
        MultiByteToWideChar(CP_ACP,0,PhysicalPath.toLocal8Bit(),-1,Drive,256+1);
        if (((GetDriveType(Drive)==DRIVE_REMOVABLE)||(GetDriveType(Drive)==DRIVE_CDROM))&&
            (!GetVolumeInformation(Drive,VolumeName,sizeof(WCHAR)*(256+1),&SerialNumber,&MaxComponent,&FileSysFlag,SysName,sizeof(WCHAR)*(256+1))))
                return false;
        return true;
    }
#endif

cDriveDesc::cDriveDesc(QString ThePath,QString Alias,cApplicationConfig *ApplicationConfig) {
    Flag        =2;         // New DriveDesc
    Label       ="";
    Size        =0;
    Used        =0;
    Avail       =0;
    IsReadOnly  =false;
    if (ThePath=="") {
        Path    ="";
        Device  =Alias;
        Alias   ="";
    } else {
        Path    =ThePath;
        Device  ="";
        Label   =Alias;
    }

    if (Alias==PersonalFolder) IconDrive=ApplicationConfig->DefaultUSERIcon.GetIcon(cCustomIcon::ICON16)->copy();
    if (Label==QApplication::translate("QCustomFolderTree","Clipart")) {
        Path=ClipArtFolder;
        if (!Path.endsWith(QDir::separator())) Path=Path+QDir::separator();
        IconDrive=ApplicationConfig->DefaultClipartIcon.GetIcon(cCustomIcon::ICON16)->copy();
    }

    // Adjust path depending on Operating System
    #ifdef Q_OS_WIN
        Path.replace("/","\\");

        WCHAR       Drive[256+1];
        WCHAR       VolumeName[256+1];
        WCHAR       SysName[256+1];
        DWORD       SerialNumber;
        DWORD       MaxComponent;
        DWORD       FileSysFlag;

        QString PhysicalPath=Path;
        if ((PhysicalPath[1]==':')&&(PhysicalPath[2]=='\\')) PhysicalPath=PhysicalPath.left(3);
        MultiByteToWideChar(CP_ACP,0,PhysicalPath.toLocal8Bit(),-1,Drive,256+1);
        switch (GetDriveType(Drive)) {
            case DRIVE_CDROM     :  IconDrive=ApplicationConfig->DefaultCDROMIcon.GetIcon(cCustomIcon::ICON16)->copy();  IsReadOnly=true;       break;
            case DRIVE_REMOTE    :  IconDrive=ApplicationConfig->DefaultREMOTEIcon.GetIcon(cCustomIcon::ICON16)->copy();                        break;
            case DRIVE_REMOVABLE :  IconDrive=ApplicationConfig->DefaultREMOTEIcon.GetIcon(cCustomIcon::ICON16)->copy();                        break;
            default              :  if (IconDrive.isNull()) IconDrive=ApplicationConfig->DefaultHDDIcon.GetIcon(cCustomIcon::ICON16)->copy();   break;
        }
        if (GetVolumeInformation(Drive,VolumeName,sizeof(WCHAR)*(256+1),&SerialNumber,&MaxComponent,&FileSysFlag,SysName,sizeof(WCHAR)*(256+1))) {
            if (Label=="") {
                Label=Path;
                if (QString().fromWCharArray(VolumeName)!="") Label=Label+"["+QString().fromWCharArray(VolumeName)+"]";
            }
            _ULARGE_INTEGER Available,FullSize,TotalNumberOfFreeBytes;
            if (GetDiskFreeSpaceEx(Drive,&Available,&FullSize,&TotalNumberOfFreeBytes)) {
                Avail   =Available.QuadPart;
                Size    =FullSize.QuadPart;
                Used    =Size-TotalNumberOfFreeBytes.QuadPart;
            }
        } else {
            // Must be a CD/DVD ROM drive without disk
            if ((Label!=PersonalFolder)&&(Label!=QApplication::translate("QCustomFolderTree","Clipart")))
                Label=Path+"["+QApplication::translate("QCustomFolderTree","Empty drive...")+"]";
        }

    #elif defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
        bool        IsOk=true;

        QProcess    Process;
        Process.setProcessChannelMode(QProcess::MergedChannels);

        if (Path=="") Process.start("df "+Device); else Process.start("df "+Path);

        // use df to get information on drive (size/used/avail) and ensure drive is mounted
        if (!Process.waitForStarted()) {
            ToLog(LOGMSG_CRITICAL,"Impossible to execute df");
            IsOk=false;
        } else if (!Process.waitForFinished()) {
            Process.kill();
            ToLog(LOGMSG_CRITICAL,"Error during mount df");
            IsOk=false;
        }
        if (IsOk && (Process.exitStatus()<0)) {
            ToLog(LOGMSG_CRITICAL,"mount return df");
            IsOk=false;
        }
        if (!IsOk) {
            Process.terminate();
            Process.close();
        } else {
            QString Part=QString().fromLocal8Bit(Process.readAllStandardOutput());
            Process.terminate();
            Process.close();

            // First line is the header => then pass it :
            Part=Part.mid(Part.indexOf("\n")+QString("\n").length());

            // Second line contains information we whant like Device | Size | Used | Avail | Mount path
            // If Mount path = asked path then drive is mounted !

            if (Part.indexOf(" ")!=-1) {
                Device=Part.left(Part.indexOf(" "));
                Part  =Part.mid(Part.indexOf(" ")).trimmed();

                // Next is size
                if (Part.indexOf(" ")!=-1) {
                    Size=Part.left(Part.indexOf(" ")).toLongLong();
                    Part=Part.mid(Part.indexOf(" ")).trimmed();

                    // Next is used
                    if (Part.indexOf(" ")!=-1) {
                        Used=Part.left(Part.indexOf(" ")).toLongLong();
                        Part=Part.mid(Part.indexOf(" ")).trimmed();

                        // Next is avail
                        Avail=Part.left(Part.indexOf(" ")).toLongLong();
                        Part=Part.mid(Part.indexOf(" ")).trimmed();

                        // Next is Pct Use

                        // and finaly : the mounted path
                        if (Path=="") Path =Part.mid(Part.indexOf(" ")).trimmed();
                    }
                }
            }
        }

        // Get drive type
        if ((Path!="")&&(Device!="")) {
            if (Path=="/") {
                IconDrive   =QApplication::style()->standardIcon(QStyle::SP_ComputerIcon).pixmap(16,16).toImage();
            } else if (Device.startsWith("/dev/sr") || Device.startsWith("/dev/scd")) {
                IconDrive   =ApplicationConfig->DefaultCDROMIcon.GetIcon(cCustomIcon::ICON16)->copy();
                IsReadOnly  =true;
            } else {
                // use dmesg to get drive type

                QProcess    Process;
                bool        IsOk=true;

                Process.setProcessChannelMode(QProcess::MergedChannels);
                Process.start("dmesg");
                if (!Process.waitForStarted()) {
                    ToLog(LOGMSG_CRITICAL,"Impossible to execute dmesg");
                    IsOk=false;
                }
                if (IsOk && !Process.waitForFinished()) {
                    Process.kill();
                    ToLog(LOGMSG_CRITICAL,"Error during mount dmesg");
                    IsOk=false;
                }
                if (IsOk && (Process.exitStatus()<0)) {
                    ToLog(LOGMSG_CRITICAL,"mount return dmesg");
                    IsOk=false;
                }
                if (!IsOk) {
                    Process.terminate();
                    Process.close();
                } else {
                    QString DmesgInfo=QString().fromLocal8Bit(Process.readAllStandardOutput());
                    Process.terminate();
                    Process.close();

                    // line we search is like "[dev without number] Attached"
                    QString ToFind=Device.mid(QString("/dev/").length());
                    if (!ToFind.isEmpty()) {
                        if ((ToFind[ToFind.length()-1]>='0')&&(ToFind[ToFind.length()-1]<='9')) ToFind=ToFind.left(ToFind.length()-1);
                        ToFind="["+ToFind+"] Attached";

                        // Parse all line in Dmesg to try find line containing "[dev without number] Attached"
                        QString DriveTypeStr;
                        QString DmesgLine;
                        while (DmesgInfo!="") {
                            if (DmesgInfo.indexOf("\n")!=-1) {
                                DmesgLine=DmesgInfo.left(DmesgInfo.indexOf("\n"));
                                DmesgInfo=DmesgInfo.mid(DmesgInfo.indexOf("\n")+QString("\n").length());
                            } else {
                                DmesgLine=DmesgInfo;
                                DmesgInfo="";
                            }
                            if (DmesgLine.indexOf(ToFind)!=-1) DriveTypeStr=DmesgLine.mid(DmesgLine.indexOf(ToFind)+ToFind.length()+1);
                        }
                        if (DriveTypeStr=="SCSI removable disk") IconDrive=ApplicationConfig->DefaultHDDIcon.GetIcon(cCustomIcon::ICON16)->copy();
                    }
                }
            }

            if (!Path.endsWith(QDir::separator())) Path=Path+QDir::separator();
            if (IconDrive.isNull()) IconDrive=ApplicationConfig->DefaultHDDIcon.GetIcon(cCustomIcon::ICON16)->copy();
        }

        Path.replace("\\","/");
        if (Alias!="") Label=Alias; else if ((Path.length()>2)&&(Path.mid(1).indexOf("/")!=-1)) {
            Label=Path;
            if (Label.endsWith("/")) Label=Label.left(Label.length()-QString("/").length());
            // On some linux, removeable media are mounted in /media/<user>/ instead of /media/
            while (Label.indexOf("/")!=-1) Label=Label.mid(Label.indexOf("/")+QString("/").length());
        }
    #endif

    // Check if there is an autorun.inf, a desktop.ini or folder.jpg
    if (Path!="") {
        QFileInfoList Directorys=QDir(Path).entryInfoList(QDir::Files|QDir::Hidden);
        for (int j=0;j<Directorys.count();j++) {
            if (Directorys[j].fileName().toLower()=="autorun.inf") {
                QString FileName=Path+Directorys[j].fileName();
                QFile   FileIO(FileName);
                if (FileIO.open(QIODevice::ReadOnly|QIODevice::Text)) {
                    QTextStream FileST(&FileIO);
                    while (!FileST.atEnd()) {
                        QString Line=FileST.readLine();
                        Line.trimmed();
                        if ((Line.toUpper().startsWith("ICON"))&&(Line.indexOf("=")!=-1)) {
                            Line=Line.mid(Line.indexOf("=")+1).trimmed();
                            if (Line.toLower().endsWith(".jpg") || Line.toLower().endsWith(".png") || Line.toLower().endsWith(".ico")) IconDrive=QIcon(QDir::toNativeSeparators(Path+Line)).pixmap(16,16).toImage().copy();
                            #ifdef Q_OS_WIN
                            else {
                                QIcon Ico(GetIconForFileOrDir(QDir::toNativeSeparators(Path+Line),0));
                                IconDrive=Ico.pixmap(16,16).toImage();
                            }
                            #endif
                        }
                    }
                    FileIO.close();
                }
            } else if (Directorys[j].fileName().toLower()=="desktop.ini") {
                QString FileName=Path;
                if (!FileName.endsWith(QDir::separator())) FileName=FileName+QDir::separator();
                FileName=FileName+Directorys[j].fileName();
                QFile   FileIO(FileName);
                QString IconFile ="";
                #ifdef Q_OS_WIN
                int     IconIndex=0;
                #endif
                if (FileIO.open(QIODevice::ReadOnly/*|QIODevice::Text*/)) {
                    // Sometimes this kind of files have incorrect line terminator : nor \r\n nor \n
                    QTextStream FileST(&FileIO);
                    QString     AllInfo=FileST.readAll();
                    QString     Line="";
                    while (AllInfo!="") {
                        int j=0;
                        while ((j<AllInfo.length())&&((AllInfo[j]>=char(32))||(AllInfo[j]==9))) j++;
                        if (j<AllInfo.length()) {
                            Line=AllInfo.left(j);
                            while ((j<AllInfo.length())&&(AllInfo[j]<=char(32))) j++;
                            if (j<AllInfo.length()) AllInfo=AllInfo.mid(j); else AllInfo="";
                        } else {
                            Line=AllInfo;
                            AllInfo="";
                        }
                        #ifdef Q_OS_WIN
                        if ((Line.toUpper().startsWith("ICONINDEX"))&&(Line.indexOf("=")!=-1)) {
                            IconIndex=Line.mid(Line.indexOf("=")+1).toInt();
                        } else
                        #endif
                        if ((Line.toUpper().startsWith("ICONFILE"))&&(Line.indexOf("=")!=-1)) {
                            Line=Line.mid(Line.indexOf("=")+1).trimmed();
                            // Replace all variables like %systemroot%
                            while (Line.indexOf("%")!=-1) {
                                QString Var=Line.mid(Line.indexOf("%")+1);  Var=Var.left(Var.indexOf("%"));
                                QString Value=getenv(Var.toLocal8Bit());
                                Line.replace("%"+Var+"%",Value,Qt::CaseInsensitive);
                            }
                            if (QFileInfo(Line).isRelative()) IconFile=QDir::toNativeSeparators(Path+(Path.endsWith(QDir::separator())?QString(""):QDir::separator())+Line);
                                else IconFile=QDir::toNativeSeparators(QFileInfo(Line).absoluteFilePath());
                        }
                    }
                    FileIO.close();
                }
                if (IconFile.toLower().endsWith(".jpg") || IconFile.toLower().endsWith(".png")) IconDrive=QImage(IconFile);
                else if (IconFile.toLower().endsWith(".ico")) {
                    QIcon Ico(IconFile);
                    if (!Ico.isNull()) IconDrive=Ico.pixmap(16,16).toImage();
                }

                #ifdef Q_OS_WIN
                else {
                    QIcon Ico=GetIconForFileOrDir(IconFile,IconIndex);
                    if (!Ico.isNull()) IconDrive=Ico.pixmap(16,16).toImage();
                }
                #endif
            } else if (Directorys[j].fileName().toLower()=="folder.jpg") {
                IconDrive=QImage(Path+Directorys[j].fileName());
            }
        }
    }
}

//*******************************************************************************************************************************************************

cDriveList::cDriveList(cApplicationConfig *TheApplicationConfig) {
    ApplicationConfig=TheApplicationConfig;

    #ifdef Q_OS_WIN
    TCHAR winUserName[UNLEN+1]; // UNLEN is defined in LMCONS.H
    DWORD winUserNameSize = sizeof(winUserName);
    GetUserName(winUserName,&winUserNameSize);
    PersonalFolder = QString::fromStdWString(winUserName);
    #else
    PersonalFolder=QApplication::translate("QCustomFolderTree","Personal folder");
    #endif
    ClipArtFolder=QDir::toNativeSeparators(QDir::currentPath());
    if (!ClipArtFolder.endsWith(QDir::separator())) ClipArtFolder=ClipArtFolder+QDir::separator();
    ModelFolder=ClipArtFolder;
    ClipArtFolder=ClipArtFolder+"clipart";
    ModelFolder=ModelFolder+"model";
    CAF=ClipArtFolder;  if (CAF.endsWith(QDir::separator())) CAF=CAF.lastIndexOf(CAF.length()-1);
    MFD=ModelFolder;    if (MFD.endsWith(QDir::separator())) MFD=MFD.lastIndexOf(MFD.length()-1);
}

//====================================================================================================================
// Private utility function to be use to populate ListList
bool cDriveList::SearchDrive(QString Path) {
    if (!Path.endsWith(QDir::separator())) Path=Path+QDir::separator();
    int i=0;
    while ((i<List.count())&&((List[i].Path!=Path)&&(List[i].Path+QDir::separator()!=Path))) i++;
    if ((i<List.count())&&((List[i].Path==Path)||(List[i].Path+QDir::separator()==Path))) {
        List[i].Flag=1;
        return true;
    } else return false;
}

//====================================================================================================================
// Utility function to be use to populate ListList

void cDriveList::UpdateDriveList() {
    for (int i=0;i<List.count();i++) List[i].Flag=0;

    if (!SearchDrive(QDir::toNativeSeparators(ClipArtFolder)))    List.append(cDriveDesc(QDir::toNativeSeparators(ClipArtFolder),QApplication::translate("QCustomFolderTree","Clipart"),ApplicationConfig));
    if (!SearchDrive(QDir::toNativeSeparators(QDir::homePath()))) List.append(cDriveDesc(QDir::homePath(),PersonalFolder,ApplicationConfig));
    #ifdef Q_OS_WIN
        foreach(QFileInfo drive,QDir::drives()) {
            QString Path=QDir::toNativeSeparators(drive.filePath());
            if (((((Path.length()>=3)&&(Path.at(1)==":")&&(Path.at(2)=="\\")&&(Path.at(0)>='C')&&(Path.at(0)<='Z'))||   // If it's a drive
                   (Path.startsWith("\\\\"))                                                                            // or it's a network path
                  )&&(!SearchDrive(Path))                                                                               // and it's not yet included
                )) if (IsDriveAvailable(Path)) List.append(cDriveDesc(Path,"",ApplicationConfig));
        }
    #elif defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)

        if (!SearchDrive("/")) List.append(cDriveDesc("/",QApplication::translate("QCustomFolderTree","System files"),ApplicationConfig));

        // list mounted drives using mount command
        QProcess    Process;
        bool        IsOk=true;
        Process.setProcessChannelMode(QProcess::MergedChannels);

        Process.start("mount");
        if (!Process.waitForStarted()) {
            ToLog(LOGMSG_CRITICAL,"Impossible to execute mount");
            IsOk=false;
        }
        if (IsOk && !Process.waitForFinished()) {
            Process.kill();
            ToLog(LOGMSG_CRITICAL,"Error during mount process");
            IsOk=false;
        }
        if (IsOk && (Process.exitStatus()<0)) {
            ToLog(LOGMSG_CRITICAL,"mount return error");
            IsOk=false;
        }
        if (!IsOk) {
            Process.terminate();
            Process.close();
        } else {
            QString Info=QString().fromLocal8Bit(Process.readAllStandardOutput());
            Process.terminate();
            Process.close();

            QString InfoLine;
            while (Info!="") {
                if (Info.indexOf("\n")!=-1) {
                    InfoLine=Info.left(Info.indexOf("\n"));
                    Info    =Info.mid(Info.indexOf("\n")+1);
                } else {
                    InfoLine=Info;
                    Info    ="";
                }
                if (InfoLine.indexOf(" ")!=-1) {
                    QString Device=InfoLine.left(InfoLine.indexOf(" "));
                    if (Device.startsWith("/dev/")) {
                        cDriveDesc ToAppend("",Device,ApplicationConfig);
                        if (ToAppend.Path!="/") if (!SearchDrive(ToAppend.Path)) List.append(ToAppend);
                    }
                }
            }
        }
    #endif
}

//====================================================================================================================
// Private utility function to get Icon corresponding to a FilePath
//      FilePath : Path to get Icon

QIcon cDriveList::GetFolderIcon(QString FilePath) {
    if (!FilePath.endsWith(QDir::separator())) FilePath=FilePath+QDir::separator();

    #if defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
    if (FilePath.startsWith("~")) FilePath=QDir::homePath()+FilePath.mid(1);
    #else
        if (FilePath.startsWith(PersonalFolder)) FilePath=QDir::homePath()+FilePath.mid(PersonalFolder.length());
        FilePath=QDir::toNativeSeparators(FilePath);
    #endif

    QIcon   RetIcon;

    // Search if it's a root item
    int i=0;
    while ((i<List.count())&&(List[i].Path!=FilePath)&&(List[i].Path+QDir::separator()!=FilePath)) i++;
    if ((i<List.count())&&((List[i].Path==FilePath)||(List[i].Path+QDir::separator()==FilePath)))
        RetIcon.addPixmap(QPixmap().fromImage(List[i].IconDrive));

    // If not a root item but a standard item
    if (RetIcon.isNull()) {
        // Check if a folder.jpg file exist
        QFileInfoList Directorys=QDir(FilePath).entryInfoList(QDir::Files);
        for (int j=0;j<Directorys.count();j++) if (Directorys[j].fileName().toLower()=="folder.jpg") {
            QString FileName=FilePath+Directorys[j].fileName();
            RetIcon=QIcon(FileName);
        }
    }

    // Check if there is an desktop.ini
    if (RetIcon.isNull()) {
        QFileInfoList Directorys=QDir(FilePath).entryInfoList(QDir::Files|QDir::Hidden);
        for (int j=0;j<Directorys.count();j++) if (Directorys[j].fileName().toLower()=="desktop.ini") {
            QString FileName=FilePath;
            if (!FileName.endsWith(QDir::separator())) FileName=FileName+QDir::separator();
            FileName=FileName+Directorys[j].fileName();
            QFile   FileIO(FileName);
            QString IconFile ="";
            #ifdef Q_OS_WIN
            int     IconIndex=0;
            #endif
            if (FileIO.open(QIODevice::ReadOnly/*|QIODevice::Text*/)) {
                // Sometimes this kind of files have incorrect line terminator : nor \r\n nor \n
                QTextStream FileST(&FileIO);
                QString     AllInfo=FileST.readAll();
                QString     Line="";
                while (AllInfo!="") {
                    int j=0;
                    while ((j<AllInfo.length())&&((AllInfo[j]>=char(32))||(AllInfo[j]==9))) j++;
                    if (j<AllInfo.length()) {
                        Line=AllInfo.left(j);
                        while ((j<AllInfo.length())&&(AllInfo[j]<=char(32))) j++;
                        if (j<AllInfo.length()) AllInfo=AllInfo.mid(j); else AllInfo="";
                    } else {
                        Line=AllInfo;
                        AllInfo="";
                    }
                    #ifdef Q_OS_WIN
                    if ((Line.toUpper().startsWith("ICONINDEX"))&&(Line.indexOf("=")!=-1)) {
                        IconIndex=Line.mid(Line.indexOf("=")+1).toInt();
                    } else
                    #endif
                    if ((Line.toUpper().startsWith("ICONFILE"))&&(Line.indexOf("=")!=-1)) {
                        Line=Line.mid(Line.indexOf("=")+1).trimmed();
                        // Replace all variables like %systemroot%
                        while (Line.indexOf("%")!=-1) {
                            QString Var=Line.mid(Line.indexOf("%")+1);  Var=Var.left(Var.indexOf("%"));
                            QString Value=getenv(Var.toLocal8Bit());
                            Line.replace("%"+Var+"%",Value,Qt::CaseInsensitive);
                        }
                        if (QFileInfo(Line).isRelative()) IconFile=QDir::toNativeSeparators(FilePath+(FilePath.endsWith(QDir::separator())?QString(""):QDir::separator())+Line);
                            else IconFile=QDir::toNativeSeparators(QFileInfo(Line).absoluteFilePath());
                    }
                }
                FileIO.close();
            }
            if (IconFile.toLower().endsWith(".jpg") || IconFile.toLower().endsWith(".png") || IconFile.toLower().endsWith(".ico")) RetIcon=QIcon(IconFile);
            #ifdef Q_OS_WIN
            else RetIcon=GetIconForFileOrDir(IconFile,IconIndex);
            #endif
        }
    }

    if (RetIcon.isNull()) {
        if (!FilePath.endsWith(QDir::separator())) FilePath=FilePath+QDir::separator();
        // If root item
        for (int i=0;i<List.count();i++) if (FilePath==List[i].Path) RetIcon=QIcon(QPixmap().fromImage(List[i].IconDrive));
    }

    // If nothing found, use default closed folder icon
    if (RetIcon.isNull()) return ApplicationConfig->DefaultFOLDERIcon.GetIcon(); else return RetIcon;
}
