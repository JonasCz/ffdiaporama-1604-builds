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

#ifndef _TRANSITION_H
#define _TRANSITION_H

    // Transition familly definition
    enum TRFAMILLY {
        TRANSITIONFAMILLY_BASE,
        TRANSITIONFAMILLY_ZOOMINOUT,
        TRANSITIONFAMILLY_SLIDE,
        TRANSITIONFAMILLY_PUSH,
        TRANSITIONFAMILLY_LUMA_BAR,
        TRANSITIONFAMILLY_LUMA_BOX,
        TRANSITIONFAMILLY_LUMA_CENTER,
        TRANSITIONFAMILLY_LUMA_CHECKER,
        TRANSITIONFAMILLY_LUMA_CLOCK,
        TRANSITIONFAMILLY_LUMA_SNAKE,
        TRANSITIONFAMILLY_DEFORM
    };

    //============================================

    // Transition subtype for LUMA_BAR transitions
    enum TRLUMABAR {
        Bar128,    Bar146,    Bar164,    Bar182,
        Bar219,    Bar237,    Bar273,    Bar291,
        BilinearA1,BilinearA4,BilinearA8,BilinearA9,
        BilinearB1,BilinearB4,BilinearB8,BilinearB9,
        StoreA446, StoreA846, StoreB482, StoreB882,
        ZBar01,    ZBar02,    ZBar03,    ZBar04,
        TRANSITIONMAXSUBTYPE_LUMABAR
    };

    // Transition subtype for TRANSITIONFAMILLY_LUMA_CLOCK transitions
    enum TRLUMACLOCK {
        ClockA1,ClockA2,ClockA3,ClockA4,
        ClockA6,ClockA7,ClockA8,ClockA9,
        ClockB1,ClockB2,ClockB3,ClockB4,
        ClockB6,ClockB7,ClockB8,ClockB9,
        ClockC1,ClockC2,ClockC3,ClockC4,
        ClockC6,ClockC7,ClockC8,ClockC9,
        //ClockD1,ClockD2,
        TRANSITIONMAXSUBTYPE_LUMACLOCK
    };

    //============================================

    // No luma transition : number of sub type
    #define TRANSITIONMAXSUBTYPE_BASE           5
    #define TRANSITIONMAXSUBTYPE_ZOOMINOUT      18
    #define TRANSITIONMAXSUBTYPE_SLIDE          22
    #define TRANSITIONMAXSUBTYPE_PUSH           20
    #define TRANSITIONMAXSUBTYPE_DEFORM         4

    // static local values use to work with luma images
    #define     LUMADLG_HEIGHT  80
    extern int  LUMADLG_WIDTH;

    //============================================

    #include "_GlobalDefines.h"
    #include "cApplicationConfig.h"

    #include <QImage>
    #include <QPainter>

    //*********************************************************************************************************************************************
    // Global class containing icons of transitions
    //*********************************************************************************************************************************************
    class cLumaObject;
    class cIconObject {
    public:
        QImage      Icon;                       // The icon
        TRFAMILLY   TransitionFamilly;          // Transition familly
        int         TransitionSubType;          // Transition type in the familly

        cIconObject(TRFAMILLY TransitionFamilly,int TransitionSubType);
        cIconObject(TRFAMILLY TransitionFamilly,int TransitionSubType,cLumaObject *Luma);
    };

    //*********************************************************************************************************************************************
    // Global class containing icons library
    //*********************************************************************************************************************************************

    class cIconList {
    public:
        QList<cIconObject>  List;                       // list of icons

        cIconList();
        ~cIconList();

        QImage *GetIcon(TRFAMILLY TransitionFamilly,int TransitionSubType);
    };

    //*********************************************************************************************************************************************
    // Global class containing luma library
    //*********************************************************************************************************************************************

    class cLumaObject {
    public:
        QImage      OriginalLuma;
        QImage      DlgLumaImage;
        QString     Name;
        int         TransitionSubType;
        TRFAMILLY   TransitionFamilly;

        cLumaObject(TRFAMILLY TrFamilly,int TrSubType,QString FileName);
        QImage GetLuma(int DestImageWith,int DestImageHeight);

    private:
        QImage GetLumaBar(int DestImageWith,int DestImageHeight);
        QImage GetLumaClock(int DestImageWith,int DestImageHeight);
    };

    //*****************************************************************

    class   cLumaList {
    public:
        int                 Geometry;
        QList<cLumaObject>  List;                       // list of Luma

        cLumaList();
        ~cLumaList();

        void    ScanDisk(QString Path,TRFAMILLY TransitionFamilly);
        void    SetGeometry(ffd_GEOMETRY Geometry);
    };

    // static global values
    extern  cLumaList       LumaList_Bar;
    extern  cLumaList       LumaList_Box;
    extern  cLumaList       LumaList_Center;
    extern  cLumaList       LumaList_Checker;
    extern  cLumaList       LumaList_Clock;
    extern  cLumaList       LumaList_Snake;
    extern  cIconList       IconList;

    int RegisterNoLumaTransition();
    int RegisterLumaTransition();

    //*********************************************************************************************************************

    void DoTransition(TRFAMILLY TransitionFamilly,int TransitionSubType,double PCT,QImage *ImageA,QImage *ImageB,QPainter *WorkingPainter,int DestImageWith,int DestImageHeight);

    void Transition_Basic( int TransitionSubType,double PCT,QImage *ImageA,QImage *ImageB,QPainter *WorkingPainter,int DestImageWith,int DestImageHeight);
    void Transition_Zoom(  int TransitionSubType,double PCT,QImage *ImageA,QImage *ImageB,QPainter *WorkingPainter,int DestImageWith,int DestImageHeight);
    void Transition_Slide( int TransitionSubType,double PCT,QImage *ImageA,QImage *ImageB,QPainter *WorkingPainter,int DestImageWith,int DestImageHeight);
    void Transition_Push(  int TransitionSubType,double PCT,QImage *ImageA,QImage *ImageB,QPainter *WorkingPainter,int DestImageWith,int DestImageHeight);
    void Transition_Deform(int TransitionSubType,double PCT,QImage *ImageA,QImage *ImageB,QPainter *WorkingPainter,int DestImageWith,int DestImageHeight);
    void Transition_Luma(  QImage Luma,          double PCT,QImage *ImageA,QImage *ImageB,QPainter *WorkingPainter,int DestImageWith,int DestImageHeight);

#endif // _TRANSITION_H
