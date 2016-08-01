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

// Basic inclusions (common to all files)
#include <QDir>
#include "_GlobalDefines.h"

QString CurrentAppName;                         // Application name (including devel, beta, ...)
QString CurrentAppVersion;                      // Application version read from BUILDVERSION.txt
double  ScreenFontAdjust=1;                     // System Font adjustement
double  ScaleFontAdjust=0;
int     SCALINGTEXTFACTOR=700;                  // 700 instead of 400 (ffD 1.0/1.1/1.2) to keep similar display from plaintext to richtext

#ifdef Q_OS_WIN

    bool IsWindowsXP=false;

    #include <windows.h>
    #include <winbase.h>
    #include <stdio.h>

    #if QT_VERSION<0x050000

        // set low fragmentation heap to remove memory error
        // from http://social.msdn.microsoft.com/forums/en-US/vclanguage/thread/7eec66a1-07b5-47aa-816d-7c1d7f7be274
        // NOTE: To enable the low-fragmentation heap when running under a debugger, set the _NO_DEBUG_HEAP environment variable to 1.
        void SetLFHeap() {

            // Re-attach stdio if application was started from a console
            BOOL (WINAPI *pAttachConsole)(DWORD dwProcessId);
            pAttachConsole = (BOOL (WINAPI*)(DWORD))
            GetProcAddress(LoadLibraryA("kernel32.dll"), "AttachConsole");

            if (pAttachConsole != NULL && pAttachConsole(((DWORD)-1))) {
               if (_fileno(stdout) < 0) freopen("CONOUT$","wb",stdout);
               if (_fileno(stderr) < 0) freopen("CONOUT$","wb",stderr);
               if (_fileno(stdin) < 0)  freopen("CONIN$","rb",stdin);
               std::ios::sync_with_stdio(); // Fix C++
            }

            // Check Windows System Version
            if (QSysInfo().WindowsVersion<0x0030) {     // prior to Windows XP

                ToLog(LOGMSG_CRITICAL,"Sorry but this application can't work on this system");
                exit(1);

            } else if (QSysInfo().WindowsVersion==0x0030) {    // If Windows XP

                IsWindowsXP=true;

                // Why would we have have to code it the hard way, that is by pulling the function out of the kernel32.dll?
                // VS 6.0 doesn't have the API defined in its headers.

                // Missing enum borrowed from: C:\Program Files\Microsoft Visual Studio 8\VC\PlatformSDK\Include\WinNT.h(8815)
                typedef enum _HEAP_INFORMATION_CLASS {
                    HeapCompatibilityInformation
                } HEAP_INFORMATION_CLASS;

                // Function pointer prototype
                typedef BOOL (WINAPI *Function_HeapSetInformation) (HANDLE, HEAP_INFORMATION_CLASS, PVOID, SIZE_T);

                WCHAR WinFileName[256+1];
                MultiByteToWideChar(CP_ACP,0,QString("kernel32.dll").toLocal8Bit(),-1,WinFileName,256+1);
                HMODULE hKernel32 = GetModuleHandle(WinFileName);

                if(hKernel32) {
                    Function_HeapSetInformation heapSetInfo;
                    ULONG heapFlags = 2;  // LFH == 2
                    HANDLE hProcessHeap = GetProcessHeap();
                    heapSetInfo = (Function_HeapSetInformation)GetProcAddress(hKernel32, "HeapSetInformation");
                    if (heapSetInfo) {
                        if(heapSetInfo(hProcessHeap, HeapCompatibilityInformation, &heapFlags, sizeof(ULONG))) {
                            ToLog(LOGMSG_INFORMATION,"DLLMain's Request for Low Fragmentation Heap for the Process Heap Successful");
                        } else {
                            ToLog(LOGMSG_WARNING,"DLLMain's Request for Low Fragmentation Heap for the Process Heap Unsuccessful.  Will Run with the Standard Heap Allocators");
                        }
                        #if _MSC_VER >= 1300
                        // no way to get the pointer to the CRT heap in VC 6.0 (_crtheap)
                        if(heapSetInfo((HANDLE)_get_heap_handle(), HeapCompatibilityInformation, &heapFlags, sizeof(ULONG))) {
                            ToLog(LOGMSG_INFORMATION,"DLLMain's Request for Low Fragmentation for the CRT Heap Successful");
                        } else {
                            ToLog(LOGMSG_WARNING,"DLLMain's Request for Low Fragmentation for the CRT Heap Unsuccessful.  Will Run with the Standard Heap Allocators");
                        }
                        #endif
                    } else {
                        ToLog(LOGMSG_WARNING,"DllMain unable to GetProcAddress for HeapSetInformation");
                    }
                } else {
                    ToLog(LOGMSG_WARNING,"DllMain unable to GetModuleHandle(kernel32.dll)");
                }
                // Only try to set the heap once.  If it fails, live with it.
            }
            // If > Windows/XP : nothing to do !
        }
    #endif

#endif

//====================================================================================================================

QString UpInitials(QString Source) {
    for (int i=0;i<Source.length();i++)
        if ((i==0)||(Source.at(i-1)==' ')) Source[i]=Source.at(i).toUpper();
    return Source;
}

//====================================================================================================================

QString FormatLongDate(QDate EventDate) {
    return UpInitials(EventDate.toString(Qt::DefaultLocaleLongDate));
}

//====================================================================================================================

QString GetInformationValue(QString ValueToSearch,QStringList *InformationList) {
    if (!InformationList) return "";
    int i=0;
    while ((i<InformationList->count())&&(!InformationList->at(i).startsWith(ValueToSearch+"##"))) i++;
    if ((i<InformationList->count())&&(InformationList->at(i).startsWith(ValueToSearch))) {
        QStringList Values=InformationList->at(i).split("##");
        if (Values.count()==2) return ((QString)Values[1]).trimmed();
    }
    return "";
}

//====================================================================================================================

QString GetCumulInfoStr(QStringList *InformationList,QString Key1,QString Key2) {
    int     Num     =0;
    QString TrackNum="";
    QString Value   ="";
    QString Info    ="";
    do {
        TrackNum=QString("%1").arg(Num);
        while (TrackNum.length()<3) TrackNum="0"+TrackNum;
        TrackNum=Key1+"_"+TrackNum+":";
        Value=GetInformationValue(TrackNum+Key2,InformationList);
        if (Value!="") Info=Info+((Num>0)?",":"")+Value;
        // Next
        Num++;
    } while (Value!="");
    return Info;
}

//====================================================================================================================

QString ito2a(int val) {
    QString Ret=QString("%1").arg(val);
    while (Ret.length()<2) Ret="0"+Ret;
    return Ret;
}

QString ito3a(int val) {
    QString Ret=QString("%1").arg(val);
    while (Ret.length()<3) Ret="0"+Ret;
    return Ret;
}

//====================================================================================================================

QString GetTextSize(int64_t Size) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:GetTextSize");

    QString UnitStr="";
    int     Unit   =0;

    while ((Size>1024*1024)&&(Unit<2)) {
        Unit++;
        Size=Size/1024;
    }
    switch (Unit) {
        case 0 : UnitStr=QApplication::translate("QCustomFolderTree","Kb","Unit Kb");   break;
        case 1 : UnitStr=QApplication::translate("QCustomFolderTree","Mb","Unit Mb");   break;
        case 2 : UnitStr=QApplication::translate("QCustomFolderTree","Gb","Unit Gb");   break;
        case 3 : UnitStr=QApplication::translate("QCustomFolderTree","Tb","Unit Tb");   break;
    }
    if (Size==0) return "0";
    else if (double(Size)/double(1024)>0.1) return QString("%1").arg(double(Size)/double(1024),8,'f',1).trimmed()+" "+UnitStr;
    else return "<0.1"+UnitStr;
}

//====================================================================================================================

//functions used to retrieve number of processor
//Thanks to : Stuart Nixon
//See : http://lists.trolltech.com/qt-interest/2006-05/thread00922-0.html
int getCpuCount() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:getCpuCount");
    int cpuCount=1;

    #ifdef Q_OS_WIN
    SYSTEM_INFO    si;
    GetSystemInfo(&si);
    cpuCount = si.dwNumberOfProcessors;
    #elif defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
    cpuCount = sysconf(_SC_NPROCESSORS_ONLN);
    #endif
    if(cpuCount<1) cpuCount=1;
    return cpuCount;
}

//====================================================================================================================
// UTILITY FUNCTIONS
//====================================================================================================================

QAction *CreateMenuAction(QImage *Icon,QString Text,int Data,bool Checkable,bool IsCheck,QWidget *Parent) {
    QAction *Action;
    if (Icon) Action=new QAction(QIcon(QPixmap().fromImage(*Icon)),Text,Parent);
        else Action=new QAction(Text,Parent);
    Action->setIconVisibleInMenu(true);
    Action->setCheckable(Checkable);
    Action->setFont(QFont("Sans Serif",9));
    if (Checkable) Action->setChecked(IsCheck);
    Action->setData(QVariant(Data));
    return Action;
}

//====================================================================================================================

QAction *CreateMenuAction(QIcon Icon,QString Text,int Data,bool Checkable,bool IsCheck,QWidget *Parent) {
    QAction *Action;
    Action=new QAction(Icon,Text,Parent);
    Action->setIconVisibleInMenu(true);
    Action->setCheckable(Checkable);
    Action->setFont(QFont("Sans Serif",9));
    if (Checkable) Action->setChecked(IsCheck);
    Action->setData(QVariant(Data));
    return Action;
}
