**************************************************
* FFDIAPORAMA 2.1 - trunk
*
* readme.txt on 24/11/2013
**************************************************

ffDiaporama is a tools to make diaporama as video
ffDiaporama is a Free Software (Open Source) and is distributed under the GNU General Public License (GPL) version 2
See authors.txt for more copyright and credits information

Index:
    1-General purposes about building ffDiaporama for Linux
    2-General purposes about libav and ffmpeg
    3-Build ffDiaporama for Ubuntu/LinuxMint (Ubuntu based version)
    4-Build ffDiaporama for openSUSE
    5-Build ffDiaporama for Fedora
    6-Build ffDiaporama for Windows


General purposes about building ffDiaporama for Linux
-----------------------------------------------------

    In general:
        Once a system has Qt 5, it was this version of Qt that is preferred.
        If a system has ffmpeg, ffmpeg is preferred to libav.
        If a system has only libav 0.8.x, then the libtag library must also be installed.

    Notes:
        In previous ffDiaporama versions the QImageBlitz library was used. This library is provided by most Linux distributions in Qt 4 release only.
        So, in this ffDiaporama version, a Qt 4/Qt 5 version of QImageBlitz was built and integrated directly into the code.
        Then, this dependence is no longer necessary.

        The PREFIX variable used in the following command can take three different values​​:
            /usr to make the application compatible with installation in /usr/bin for the binary and /usr/share/ffDiaporama for data
            /opt to make the application compatible with installation in /opt/bin for the binary and /opt/share/ffDiaporama for data
            /usr/local to make the application compatible with installation in /usr/local/bin for the binary and /usr/local/share/ffDiaporama for data




General purposes about libav and ffmpeg
---------------------------------------

    The following table list versions of libav supported with ffDiaporama
      LIBAV	LIBAVUTIL	LIBAVCODEC	LIBAVFORMAT	LIBAVDEVICE	LIBAVFILTER	LIBSWSCALE	LIBAVRESAMPLE
      0.8.x	51.22.1		53.35.0		53.21.1		53.2.0		2.15.0		2.1.0		-
      9.x	52.3.0		54.35.0		54.20.3		53.2.0		3.3.0		2.1.1		1.0.1

      Note: support of version 9.x is actually partial

    The following table list versions of ffmpeg supported with ffDiaporama
      FFMPEG	LIBAVUTIL	LIBAVCODEC	LIBAVFORMAT	LIBAVDEVICE	LIBAVFILTER	LIBSWSCALE	LIBSWRESAMPLE
      1.2.3	52,18,100	54,92,100	54,63,104	54,3,103	3,42,103	2,2,100		0,17,102
      2.0.1	52,38,100	55,18,102	55,12,100	55,3,100	3,79,101	2,3,100		0,17,102
      2.1       52.48.100       55.39.100       55.19.104       55.5.100        3.90.100        2.5.101         0.17.104




Build ffDiaporama for Ubuntu/LinuxMint (Ubuntu based version)
-------------------------------------------------------------

    Version 12.04 and 12.10 (Qt 4.8.1/Libav 0.8.9 on 15/11/2013)
        Installation prerequisites:
            sudo apt-get install build-essential
            sudo apt-get install qt4-qmake libqt4-dev libqt4-sql-sqlite
            sudo apt-get install libavutil-dev libavformat-dev libavcodec-dev libavdevice-dev libavfilter-dev libswscale-dev
            sudo apt-get install libsdl-image1.2-dev libsdl-mixer1.2-dev libexiv2-dev libtag1-dev
        Compilation:
            qmake-qt4 ffDiaporama.pro /PREFIX=/usr
            make
        Installation:
            sudo make install

    Version 13.04 (Qt 5.01/Libav 0.8.9) and Version 13.10 (Qt 5.02/Libav 0.8.9)

        Installation prerequisites:
            sudo apt-get install build-essential
            sudo apt-get install qt5-qmake qt5-default qttools5-dev qttools5-dev-tools libqt5svg5-dev libqt5help5 libqt5sql5-sqlite qt5-image-formats-plugins
            sudo apt-get install libavutil-dev libavformat-dev libavcodec-dev libavdevice-dev libavfilter-dev libswscale-dev
            sudo apt-get install libsdl-image1.2-dev libsdl-mixer1.2-dev libexiv2-dev libtag1-dev
        Compilation:
            qmake ffDiaporama.pro /PREFIX=/usr
            make
        Installation:
            sudo make install

    Version 14.04 (Qt 5.02/Libav 9.10)
        Installation prerequisites:
            sudo apt-get install build-essential
            sudo apt-get install qt5-qmake qt5-default qttools5-dev qttools5-dev-tools libqt5svg5-dev libqt5help5 libqt5sql5-sqlite qt5-image-formats-plugins
            sudo apt-get install libavutil-dev libavformat-dev libavcodec-dev libavdevice-dev libavfilter-dev libswscale-dev libavresample-dev
            sudo apt-get install libsdl-image1.2-dev libsdl-mixer1.2-dev libexiv2-dev
        Compilation:
            qmake ffDiaporama.pro /PREFIX=/usr
            make
        Installation:
            sudo make install

    NOTE: For users who want to use an up to date ffmpeg version instead of outdated libav 0.8, on Ubuntu 13.04/13.10, it is possible to use the Sam Rog PPA. To do this:
        -Install prerequisites as describe above
        -Add this ppa: https://launchpad.net/~samrog131/+archive/ppa
        -Add this complementaries prerequisites
            sudo apt-get install ffmpeg-real libavcodec-ffmpeg-dev libavdevice-ffmpeg-dev libavfilter-ffmpeg-dev libavformat-ffmpeg-dev \
                                 libavutil-ffmpeg-dev libpostproc-ffmpeg-dev libswresample-ffmpeg-dev libswscale-ffmpeg-dev
        -For Compilation and Installation use instructions as describe above

        WARNING: Actual ffmpeg version proposed on the samrog ppa is the 2.1.0
        This version is unstable and may cause infinite loop reading some videos




Build ffDiaporama for openSUSE
------------------------------

    Version openSUSE 12.3 (Qt 4.8.4/ffmpeg 2.1)
        Installation prerequisites:
            sudo zypper in make gcc build kernel-desktop-devel
            sudo zypper in libSDL-1_2-0 libSDL_mixer-1_2-0 libSDL_mixer-devel
            sudo zypper in ffmpeg libffmpeg-devel libSDL-devel
            sudo zypper in exiv2 libexiv2-devel
            sudo zypper in libqt4 libqt4-devel
        Compilation:
            qmake ffDiaporama.pro /PREFIX=/usr
            make
        Installation:
            sudo make install

    Version openSUSE 13.1 (Qt 5.1.1/ffmpeg 2.1)
        Installation prerequisites:
            sudo zypper in make gcc build kernel-desktop-devel
            sudo zypper in libSDL-1_2-0 libSDL_mixer-1_2-0 libSDL_mixer-devel
            sudo zypper in ffmpeg libffmpeg-devel libSDL-devel
            sudo zypper in exiv2 libexiv2-devel
            sudo zypper in libqt5-qtbase libQt5Gui5 libQt5Widgets5 libQt5Svg5 libQt5Sql5 libqt5-sql-sqlite libqt5-qtimageformats
            sudo zypper in libqt5-qtbase-devel libqt5-qttools libqt5-qttools-devel
        Compilation:
            qmake-qt5 ffDiaporama.pro /PREFIX=/usr
            make
        Installation:
            sudo make install


Build ffDiaporama for Fedora
----------------------------

    Fedora 19 (Qt 5.1.1/ffmpeg 1.2.4) and Fedora 20 (Qt 5.2.0/ffmpeg 2.1.1)
        Installation prerequisites:
            sudo yum groupinstall development-tools
            sudo yum install gcc-c++
            sudo yum install qt5-qtbase-devel qt5-qttools-devel qt5-qtsvg-devel qt5-qtbase qt5-qttools qt5-qtsvg qt5-qtimageformats
            sudo yum install ffmpeg ffmpeg-devel
            sudo yum install SDL SDL-devel SDL_mixer-devel SDL_mixer
            sudo yum install exiv2 exiv2-devel
        Compilation:
            qmake-qt5 ffDiaporama.pro /PREFIX=/usr
            make
        Installation:
            sudo make install




Build ffDiaporama for Windows
-----------------------------

    Prerequisites:
        Visual studio express:
            Visual studio express 2012 from Microsoft (http://download.microsoft.com/download/1/F/5/1F519CC5-0B90-4EA3-8159-33BFB97EF4D9/VS2012_WDX_ENU.iso)

        Microsoft SDK:
            Microsoft Software Development kit (SDK Windows for Windows 8) from Microsoft (http://msdn.microsoft.com/fr-fr/library/windows/desktop/hh852363.aspx)

        QT:
            --32 bits version: Qt 5.1.1 for Windows 32-bit (VS 2012 without OpenGL) from Digia (http://download.qt-project.org/official_releases/qt/5.1/5.1.1/qt-windows-opensource-5.1.1-msvc2012-x86-offline.exe)
            --64 bits version: Qt 5.1.1 for Windows 64-bit (VS 2012 without OpenGL) from Digia (http://download.qt-project.org/official_releases/qt/5.1/5.1.1/qt-windows-opensource-5.1.1-msvc2012-x86_64-offline.exe)
            32 bits version: Qt 5.2.1 for Windows 32-bit (VS 2012 without OpenGL) from Digia (http://download.qt-project.org/official_releases/qt/5.2/5.2.1/qt-opensource-windows-x86-msvc2012-5.2.1.exe)
            64 bits version: Qt 5.2.1 for Windows 64-bit (VS 2012 without OpenGL) from Digia (http://download.qt-project.org/official_releases/qt/5.2/5.2.1/qt-opensource-windows-x86-msvc2012_64-5.2.1.exe)

        ffmpeg:
          32 bits version (2.1.3):
            --ffmpeg win32 shared from zeranoe web site (http://ffmpeg.zeranoe.com/builds/win32/shared/ffmpeg-2.1-win32-shared.7z)
            --ffmpeg win32 dev from zeranoe web site (http://ffmpeg.zeranoe.com/builds/win32/dev/ffmpeg-2.1-win32-dev.7z)
            ffmpeg win32 shared from zeranoe web site (http://ffmpeg.zeranoe.com/builds/win32/shared/ffmpeg-2.1.3-win32-shared.7z)
            ffmpeg win32 dev from zeranoe web site (http://ffmpeg.zeranoe.com/builds/win32/dev/ffmpeg-2.1.3-win32-dev.7z)

          64 bits version (2.1):
             --ffmpeg win64 shared from zeranoe web site (http://ffmpeg.zeranoe.com/builds/win64/shared/ffmpeg-2.1-win64-shared.7z)
             --ffmpeg win64 dev from zeranoe web site (http://ffmpeg.zeranoe.com/builds/win64/dev/ffmpeg-2.1-win64-dev.7z)
             ffmpeg win64 shared from zeranoe web site (http://ffmpeg.zeranoe.com/builds/win64/shared/ffmpeg-2.1.3-win64-shared.7z)
             ffmpeg win64 dev from zeranoe web site (http://ffmpeg.zeranoe.com/builds/win64/dev/ffmpeg-2.1.3-win64-dev.7z)

        Exiv2:
            --Exiv2 v0.23 Source from exiv2.org web site (http://www.exiv2.org/exiv2-0.23.tar.gz)
            Exiv2 v0.24 Source from exiv2.org web site (http://www.exiv2.org/exiv2-0.24.tar.gz)

        SDL:
            32 bits version: SDL-1.2.15-win32.zip from libsdl.org (http://www.libsdl.org/release/SDL-1.2.15-win32.zip)
            64 bits version: SDL-1.2.15-win32-x64.zip from libsdl.org (http://www.libsdl.org/release/SDL-1.2.15-win32-x64.zip)

        msinttypes:
            msinttypes-r26.zip from google code (http://code.google.com/p/msinttypes/downloads/list)

    Preparation:
        create a win_src folder at the same level as ffDiaporama folder like this:
            ffDiaporama
                files and folder included in ffDiaporama .tar.gz file

            win_src

                exiv2-0.23
                    files and folder included in exiv2-0.23.tar.gz

                ffmpeg-2.1-win32-dev or ffmpeg-2.1-win64-dev
                    files and folders included in ffmpeg dev file

                ffmpeg-2.1-win32-shared or ffmpeg-2.1-win64-shared
                    files and folders included in ffmpeg shared file

                msinttypes
                    files included in msinttypes-r26.zip

                SDL-1.2.15
                    files and folder included in SDL zip file
                    lib
                        x86
                            files included in SDL 32 bits zip file
                        x64
                            files included in SDL 32 bits zip file

        Edit ffDiaporama.pro file to update path to the differents external libraries

    Build ffDiaporama for Windows
        Use QT creator to compil ffDiaporama
