# Builds of ffDiaporama 2.2 for Ubuntu 16.04.

This repository contains builds / packages of ffDiaporama 2.2 (the latest development version) for Ubuntu 16.04, as well as the patched sources used to build them.

### Packages:

* **[ffdiaporama-data_2.2-1_i386.deb](https://github.com/JonasCz/ffdiaporama-1604-builds/raw/master/ffdiaporama-data_2.2-1_i386.deb)**. This package contains the data files needed by ffDiaporama. Install this first.

* **[ffdiaporama_2.2-20160801-1_i386.deb](https://github.com/JonasCz/ffdiaporama-1604-builds/raw/master/ffdiaporama_2.2-20160801-1_i386.deb)** The main ffDiaporama package.

* 64-bit builds (not by me) can be found here: https://forums.linuxmint.com/viewtopic.php?f=47&t=229333&p=1213312&hilit=ffdiaporama#p1213146

If you want to use these packages, just install them and you'll be good to go. Otherwise, you can compile from source:

---

### Compiling from source:

Either clone this repository (the source here is already patched), _or_ download the upstream 2.2 sources from the [ffDiaporama website](http://ffdiaporama.tuxfamily.org), apply the FFmpeg 3.0 patch from [here](https://aur.archlinux.org/cgit/aur.git/plain/ffmpeg3.0.patch?h=ffdiaporama&id=a25505da62080306824ebe115d4ce98a175f344e) and modify the makefile as per [this forum thread](http://ffdiaporama.tuxfamily.org/Forum/viewtopic.php?id=1299).

* Install the necessary dependencies for compiling :

        sudo apt-get update
        sudo apt-get install libqt5multimedia5-plugins libtag1-dev libssh-dev libssl-dev libcurl4-openssl-dev libcurlpp-dev libcurlpp0 libqgsttools-p1 libqt5multimediaquick-p5 qtmultimedia5-dev build-essential libavcodec-dev libavdevice-dev libavfilter-dev libavformat-dev libavresample-dev libexiv2-dev libflac-dev libswscale-dev qt5-image-formats-plugins qt5-qmake libqt5quickwidgets5 libsdl-image1.2-dev libsdl-mixer1.2-dev qt5-default qttools5-dev-tools qttools5-dev libqt5svg5-dev libqt5help5 libqt5sql5-sqlite

* Compile (in the ffDiaporama sources directory):

        qmake ffDiaporama.pro /PREFIX=/usr
        make

* Installation:

        sudo make install

For the resources (`ffDiaporama_rsc`):

* 

        qmake ffDiaporama_rsc.pro /PREFIX=/usr
        make install
        
And you should have a working ffDiaporama !

### Notes (read before using):

* **These are _not_ official builds !**

* There's a few bugs, notably:

    * The preview in the application plays a bit too fast, but it's fine in the final rendered video

    * Video rendering somethimes hangs at the end if the audio / music is shorter than the video duration (Possibly only when using .wav files for music / audio)
    
    * My packages have more dependencies than the program actually needs (most notably some `-dev` packages), I'll fix this at some point when I have time.


* Both the packages and the tarball work for me on a fresh install.

* Further reading:

    * http://ffdiaporama.tuxfamily.org/Forum/viewtopic.php?id=1299

    * http://ffdiaporama.tuxfamily.org/Forum/viewtopic.php?id=1280
    
    * Instructions on how to compile (in French) / Instructions pour la compilation (en Français ) : https://forum.ubuntu-fr.org/viewtopic.php?id=1994993
    
    * Instructions in German / Anleitungen auf Deutsch: http://multimedia4linux.de/index.php/bildbearbeitung/ffdiaporama/installation-von-ffdiaporama-auf-ubuntu-16-04

