/* ======================================================================
    This file is part of ffDiaporama
    ffDiaporama is a tools to make diaporama as video
    Copyright (C) 2011-2013 Dominique Levray <levray.dominique@bbox.fr>

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

#pragma comment(linker, "/SUBSYSTEM:windows /ENTRY:wmainCRTStartup")

#include <windows.h>
#include <winbase.h>
#include <stdio.h>
#include <stdlib.h>
#include <direct.h>
#include <tchar.h>
#include <iostream>
#include <fstream>
#include <Shellapi.h>

//*****************************************************************************************************************

int wmain(int argc, wchar_t* argv[]) {
    WCHAR   wFile[2048],wParam[2048],wFolder[2048];

    // Software to start
    swprintf(wFile,2048,L"%S","ffDiaporama.exe");

    // compute current folder
    wcscpy_s(wFolder,2048,argv[0]);
    if (wcsrchr(wFolder,'\\')) *wcsrchr(wFolder,'\\')=0;
    if (wcslen(wFolder)==0) {
        _wgetcwd(wFolder,2048);
        if (wcsrchr(wFolder,'\\')) *wcsrchr(wFolder,'\\')=0;
    }

    // Get parameters
    wParam[0]=0;
    for (int i=1;i<argc;i++) {
        wcscat_s(wParam,2048,L"\"");
        wcscat_s(wParam,2048,argv[i]);
        wcscat_s(wParam,2048,L"\" ");
    }

    ShellExecute(NULL,NULL,wFile,wParam,wFolder,SW_SHOWNORMAL);
    return 0;
}
