# Builds of ffDiaporama 2.2 for Ubuntu 16.04.

This repository contains builds / packages of ffDiaporama 2.2 (the latest version) for Ubuntu 16.04, as well as the patched sources used to build them.

What's here:

* **[ffdiaporama-data_2.2-1_i386.deb](http://test)**. This package contains the data files needed by ffDiaporama. Install this first.

* **[ffdiaporama_2.2-20160801-1_i386.deb](http://test)** The main ffDiaporama package.

If you want to use these packages, just install them and you'll be good to go.

---

### Compiling from source:

Either clone this repository (the source here is already patched), _or_ download the upstream 2.2 sources from the [ffDiaporama website](http://ffdiaporama.tuxfamily.org), apply the FFmpeg 3.0 patch from [here](https://aur.archlinux.org/cgit/aur.git/plain/ffmpeg3.0.patch?h=ffdiaporama&id=a25505da62080306824ebe115d4ce98a175f344e) and modify the makefile as per [this forum thread](http://ffdiaporama.tuxfamily.org/Forum/viewtopic.php?id=1299).

* Install the necessary dependencies for compiling :

        sudo apt-get install libqt5multimedia5-plugins libtag1-dev libssh-dev libssl-dev libcurl4-openssl-dev libcurlpp-dev libcurlpp0 libqgsttools-p1 libqt5multimediaquick-p5 qtmultimedia5-dev build-essential libavcodec-dev libavdevice-dev libavfilter-dev libavformat-dev libavresample-dev libexiv2-dev libflac-dev libswscale-dev qt5-image-formats-plugins qt5-qmake libqt5quickwidgets5 libsdl-image1.2-dev libsdl-mixer1.2-dev qt5-default qttools5-dev-tools qttools5-dev libqt5svg5-dev libqt5help5 libqt5sql5-sqlite

* Compile (in the ffDiaporama sources directory):

            qmake ffDiaporama.pro /PREFIX=/usr
            make

* Installation:

            sudo make install

For the resources (`ffDiaporama_rsc`):

        qmake ffDiaporama_rsc.pro /PREFIX=/usr
        make install
        
And you should (hopefully..) have a working ffDiaporama ! Note that I didn't extensively test this, and I didn't test the packages at all (yet), but it does work on my system.

Note that there's a few bugs, notably:

* The preview in the application plays a bit too fast, but it's fine in the final rendered video

* Video rendering somethimes hangs at the end if the audio / music is shorter than the video duration

---

Thanks to:

* http://ffdiaporama.tuxfamily.org/Forum/viewtopic.php?id=1299

* http://ffdiaporama.tuxfamily.org/Forum/viewtopic.php?id=1280
