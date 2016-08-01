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

// Include some common various class
#include "cDeviceModelDef.h"

// Remove error with MSVC and AV_TIME_BASE_Q
#ifdef _MSC_VER
    AVRational AV_TIME_BASE_Q={1, AV_TIME_BASE};
#endif

int AVLOGLEVEL=AV_LOG_ERROR;    // Default loglevel for libav
QMutex Mutex;

//****************************************************************************************************************************************************************

AVFrame *ALLOCFRAME() {
    #if (FFMPEGVERSIONINT>=220)
    return av_frame_alloc();
    #else
    return avcodec_alloc_frame();
    #endif
}

void FREEFRAME(AVFrame **Buf) {
    avcodec_free_frame(Buf);
    *Buf=NULL;
}

/****************************************************************************
  Definition of image format supported by the application
****************************************************************************/

sIMAGEDEF DefImageFormat [2][3][NBR_SIZEDEF] = {
    {   // STANDARD_PAL
        {   // GEOMETRY_4_3
            {320, 240, 4,3,   25,           "25",        AVRCAST{1,25},        "QVGA - 320x240 - 25 FPS",                  0},
            {426, 320, 4,3,   25,           "25",        AVRCAST{1,25},        "HVGA - 426x320 - 25 FPS",                  0},
            {640, 480, 4,3,   25,           "25",        AVRCAST{1,25},        "VGA - 640x480 - 25 FPS",                   0},
            {720, 576, 4,3,   25,           "25",        AVRCAST{1,25},        "SD/DVD - 720x576 - 25 FPS",                0},     // SIZE_DVD - No extend ! special case
            {640, 480, 4,3,   25,           "25",        AVRCAST{1,25},        "WVGA - 640x480 - 25 FPS",                  0},
            {1024,768, 4,3,   25,           "25",        AVRCAST{1,25},        "XGA - 1024x768 - 25 FPS",                  0},
            {960, 720, 4,3,   25,           "25",        AVRCAST{1,25},        "720p - 960x720 - 25 FPS",                  0},
            {1440,1080,4,3,   25,           "25",        AVRCAST{1,25},        "1080p - 1440x1080 - 25 FPS",               0},
            {240, 180, 4,3,   24,           "24",        AVRCAST{1,24},        "RIM 240 - 240x180 - 24 FPS",               0},
            {720, 576, 4,3,   30000L/1001L, "30000/1001",AVRCAST{1001,30000},  "SD/DVD - 720x576 - 29.97 FPS (PAL-M)",     0},     // SIZE_DVD - No extend ! special case for PAL-M
            {0,   0,   4,3,   0,            "0",         AVRCAST{1,25},        "free",                                     0}      // free - not used
        },{ // GEOMETRY_16_9
            {320, 180, 4,3,   25,           "25",        AVRCAST{1,25},        "QVGA - 320x180 - 25 FPS",                 30},
            {480, 270, 16,9,  25,           "25",        AVRCAST{1,25},        "HVGA - 480x270 - 25 FPS",                  0},
            {640, 360, 16,9,  25,           "25",        AVRCAST{1,25},        "VGA - 640x360 - 25 FPS",                   0},
            {720, 576, 16,9,  25,           "25",        AVRCAST{1,25},        "SD/DVD - 720x576 WIDE - 25 FPS",           0},     // SIZE_DVD - No extend ! special case
            {800, 450, 16,9,  25,           "25",        AVRCAST{1,25},        "WVGA - 800x450 - 25 FPS",                  0},
            {1024,576, 16,9,  25,           "25",        AVRCAST{1,25},        "XGA - 1024x576 - 25 FPS",                  0},
            {1280,720, 16,9,  25,           "25",        AVRCAST{1,25},        "720p - 1280x720 - 25 FPS",                 0},
            {1920,1080,16,9,  25,           "25",        AVRCAST{1,25},        "1080p - 1920x1080 - 25 FPS",               0},
            {240, 136, 4,3,   24,           "24",        AVRCAST{1,24},        "RIM 240 - 240x136 - 24 FPS",               22},
            {720, 576, 16,9,  30000L/1001L, "30000/1001",AVRCAST{1001,30000},  "SD/DVD - 720x576 WIDE - 29.97 FPS (PAL-M)",0},     // SIZE_DVD - No extend ! special case for PAL-M
            {0,   0,   19,9,  0,            "0",         AVRCAST{1,25},        "free",                                     0}      // free - not used
        },{ // GEOMETRY_40_17
            {320, 136, 4,3,   25,           "25",        AVRCAST{1,25},        "QVGA - 320x136+PAD - 25 FPS",              52},
            {480, 204, 40,17, 25,           "25",        AVRCAST{1,25},        "HVGA - 480x204 - 25 FPS",                  0},
            {640, 272, 40,17, 25,           "25",        AVRCAST{1,25},        "VGA - 640x272 - 25 FPS",                   0},
            {720, 436, 40,17, 25,           "25",        AVRCAST{1,25},        "SD/DVD - 720x436 WIDE - 25 FPS",           0},     // SIZE_DVD - No extend ! special case
            {800, 340, 40,17, 25,           "25",        AVRCAST{1,25},        "WVGA - 800x340 - 25 FPS",                  0},
            {1024,436, 40,17, 25,           "25",        AVRCAST{1,25},        "XGA - 1024x436 - 25 FPS",                  0},
            {1280,544, 40,17, 25,           "25",        AVRCAST{1,25},        "720p - 1280x544 - 25 FPS",                 0},
            {1920,816, 40,17, 25,           "25",        AVRCAST{1,25},        "1080p - 1920x816 - 25 FPS",                0},
            {240, 102, 4,3,   24,           "24",        AVRCAST{1,24},        "RIM 240 - 240x136+PAD - 24 FPS",           39},
            {720, 436, 40,17, 30000L/1001L, "30000/1001",AVRCAST{1001,30000},  "SD/DVD - 720x436 WIDE - 29.97 FPS (PAL-M)",0},     // SIZE_DVD - No extend ! special case for PAL-M
            {0,   0,   40,17, 0,            "0",         AVRCAST{1,25},        "free",                                     0}      // free - not used
    }},{// STANDARD_NTSC
        {   // GEOMETRY_4_3
            {320, 240, 4,3,    30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "QVGA - 320x240 - 29.97 FPS",               0},
            {426, 320, 4,3,    30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "HVGA - 426x320 - 29.97 FPS",               0},
            {640, 480, 4,3,    30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "VGA - 640x480 - 29.97 FPS",                0},
            {720, 480, 4,3,    30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "SD/DVD - 720x480 - 29.97 FPS",             0},     // SIZE_DVD - No extend ! special case
            {640, 480, 4,3,    30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "WVGA - 640x480 - 29.97 FPS",               0},
            {1024,768, 4,3,    30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "XGA - 1024x768 - 29.97 FPS",               0},
            {960, 720, 4,3,    24000L/1001L,"24000/1001",AVRCAST{1001,24000},  "720p - 960x720 - 23.976 FPS",              0},
            {1440,1080,4,3,    24000L/1001L,"24000/1001",AVRCAST{1001,24000},  "1080p - 1440x1080 - 23.976 FPS",           0},
            {240, 180, 4,3,    24,          "24",        AVRCAST{1,24},        "RIM 240 - 240x180 - 24 FPS",               0},
            {960, 720, 4,3,    30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "720p - 960x720 - 29.97 FPS",               0},
            {1440,1080,4,3,    30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "1080p - 1440x1080 - 29.97 FPS",            0}
        },{ // GEOMETRY_16_9
            {320, 180, 4,3,    30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "QVGA - 320x180+PAD - 29.97 FPS",           30},
            {480, 270, 16,9,   30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "HVGA - 480x270 - 29.97 FPS",               0},
            {640, 360, 16,9,   30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "VGA - 640x272 - 29.97 FPS",                0},
            {720, 480, 16,9,   30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "SD/DVD - 720x480 WIDE - 29.97 FPS",        0},     // SIZE_DVD - No extend ! special case
            {800, 450, 16,9,   30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "WVGA - 800x450 - 29.97 FPS",               0},
            {1024,576, 16,9,   30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "XGA - 1024x576 - 29.97 FPS",               0},
            {1280,720, 16,9,   24000L/1001L,"24000/1001",AVRCAST{1001,24000},  "720p - 1280x720 - 23.976 FPS",             0},
            {1920,1080,16,9,   24000L/1001L,"24000/1001",AVRCAST{1001,24000},  "1080p - 1920x1080 - 23.976 FPS",           0},
            {240, 136, 4,3,    24,          "24",        AVRCAST{1,24},        "RIM 240 - 240x136 - 24 FPS",               22},
            {1280,720, 16,9,   30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "720p - 1280x720 - 29.97 FPS",              0},
            {1920,1080,16,9,   30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "1080p - 1920x1080 - 29.97 FPS",            0}
        },{ // GEOMETRY_40_17
            {320, 136,4,3,     30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "QVGA - 320x136+PAD - 29.97 FPS",           52},
            {480, 204,40,17,   30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "HVGA - 480x204 - 29.97 FPS",               0},
            {640, 272,40,17,   30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "VGA - 640x272 - 29.97 FPS",                0},
            {720, 362,40,17,   30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "SD/DVD - 720x362 WIDE - 29.97 FPS",        0},     // SIZE_DVD - No extend ! special case
            {800, 340,40,17,   30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "WVGA - 800x340 - 29.97 FPS",               0},
            {1024,436,40,17,   30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "XGA - 1024x436 - 29.97 FPS",               0},
            {1280,544,40,17,   24000L/1001L,"24000/1001",AVRCAST{1001,24000},  "720p - 1280x544 - 23.976 FPS",             0},
            {1920,816,40,17,   24000L/1001L,"24000/1001",AVRCAST{1001,24000},  "1080p - 1920x816 - 23.976 FPS",            0},
            {240, 102,4,3,     24,          "24",        AVRCAST{1,24},        "RIM 240 - 240x136+PAD - 24 FPS",           39},
            {1280,544,40,17,   30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "720p - 1280x544 - 29.97 FPS",              0},
            {1920,816,40,17,   30000L/1001L,"30000/1001",AVRCAST{1001,30000},  "1080p - 1920x816 - 29.97 FPS",             0}
    }}
};

QString IMAGEDEFGENNAME[2][NBR_SIZEDEF]={
    { // PAL
        "QVGA (25 FPS-4:3=320x240-16:9=320x180-40:17=320x136)",                                                 // SIZE_QVGA
        "HVGA (25 FPS-4:3=426x320-16:9=480x270-40:17=480x204)",                                                 // SIZE_HVGA
        "VGA (25 FPS-4:3=640x480-16:9=460x360-40:17=640x272)",                                                  // SIZE_VGA
        "SD/DVD (25 FPS-4:3=720x576-16:9=720x576W-40:17=720x576WP)",                                            // SIZE_DVD
        "WVGA (25 FPS-4:3=640x480-16:9=800x450-40:17=800x340)",                                                 // SIZE_WVGA
        "XGA (25 FPS-4:3=1024x768-16:9=1024x576-40:17=1024x436)",                                               // SIZE_XGA
        "720p (25 FPS-4:3=960x720-16:9=1280x720-40:17=1280x544)",                                               // SIZE_720P
        "1080p (25 FPS-4:3=1440x1080-16:9=1920x1080-40:17=1920x816)",                                           // SIZE_1080p
        "RIM 240 (24 FPS-4:3=240x180-16:9=240x135-40:17=240x135P)",                                             // SIZE_RIM240
        "SD/DVD (29.97 FPS-4:3=720x576-16:9=720x576W-40:17=720x576WP)",                                         // SIZE_DVD (PAL-M)
        "free-not used"                                                                                         // -
    },{ // NTSC
        "QVGA (29.97 FPS-4:3=320x240-16:9=320x180-40:17=320x136)",                                              // SIZE_QVGA
        "HVGA (29.97 FPS-4:3=426x320-16:9=480x270-40:17=480x204)",                                              // SIZE_HVGA
        "VGA (29.97 FPS-4:3=640x480-16:9=460x360-40:17=640x272)",                                               // SIZE_VGA
        "SD/DVD (29.97 FPS-4:3=720x480-16:9=720x480W-40:17=720x480WP)",                                         // SIZE_DVD
        "WVGA (29.97 FPS-4:3=640x480-16:9=800x450-40:17=800x340)",                                              // SIZE_WVGA
        "XGA (29.97 FPS-4:3=1024x768-16:9=1024x576-40:17=1024x436)",                                            // SIZE_XGA
        "720p (23.976 FPS-4:3=960x720-16:9=1280x720-40:17=1280x544)",                                           // SIZE_720P
        "1080p (23.976 FPS-4:3=1440x1080-16:9=1920x1080-40:17=1920x816)",                                       // SIZE_1080p
        "RIM 240 (24 FPS-4:3=240x180-16:9=240x135-40:17=240x135P)",                                             // SIZE_RIM240
        "720p (29.97 FPS-4:3=960x720-16:9=1280x720-40:17=1280x544)",                                            // SIZE_720P-29.97
        "1080p (29.97 FPS-4:3=1440x1080-16:9=1920x1080-40:17=1920x816)"                                         // SIZE_1080p-29.97
    }
};

int ORDERIMAGENAME[2][NBR_SIZEDEF]={
    {2,3,4,6,5,8,9,10,1,7,0},         // PAL
    {2,3,4,6,5,7,8,10,1,9,11}         // NTSC
};

/****************************************************************************
 Definition of audio/video codec and file format supported by the application
****************************************************************************/
struct sVideoCodecDef VIDEOCODECDEF[NBR_VIDEOCODECDEF]={
    {
        false,false,AV_CODEC_ID_MJPEG,VCODEC_MJPEG,VCODECST_MJPEG,                                               // IsFind,Codec_id,FFD_VCODEC,FFD_VCODECST
        "mjpeg","Motion JPEG",                                                                          // ShortName[50], LongName[200]
        "",                                                                                             // PossibleBitrate
        {{""},{""}}                                                                                     // DefaultBitrate[2][NBR_SIZEDEF]
    },{
        false,false,AV_CODEC_ID_MPEG2VIDEO,VCODEC_MPEG,VCODECST_MPEG,                                            // IsFind,Codec_id,FFD_VCODEC,FFD_VCODECST
        "mpeg2video","MPEG-2 video",                                                                    // ShortName[50], LongName[200]
        "2000k#3000k#4000k#6000k#8000k#10000k#12000k#15000k#20000k#400k",                               // PossibleBitrate
        {{                                                                                              // DefaultBitrate[2][NBR_SIZEDEF] - PAL
        "1000k",    // QVGA-320x240
        "2000k",    // HVGA-480x320
        "3000k",    // VGA-640x480
        "6000k",    // DVD-720x576
        "6000k",    // WVGA-800x480
        "10000k",   // XGA-1024x768
        "12000k",   // 720p
        "20000k",   // 1080p
        "400k",     // RIM 240
        "6000k",    // DVD-720x576 - PAL-M
        "",         // free
        },{                                                                                             // DefaultBitrate[2][NBR_SIZEDEF] - NTSC
        "1000k",    // QVGA-320x240
        "2000k",    // HVGA-480x320
        "3000k",    // VGA-640x480
        "6000k",    // DVD-720x576
        "6000k",    // WVGA-800x480
        "10000k",   // XGA-1024x768
        "12000k",   // 720p-23.98
        "20000k",   // 1080p-23.98
        "400k",     // RIM 240
        "12000k",   // 720p-29.97
        "20000k"    // 1080p-29.97
        }}
    },{
        false,false,AV_CODEC_ID_MPEG4,VCODEC_MPEG4,VCODECST_MPEG4,                                               // IsFind,Codec_id,FFD_VCODEC,FFD_VCODECST
        "mpeg4","DivX/XVid/MPEG-4",                                                                     // ShortName[50], LongName[200]
        "500k#1000k#1200k#1500k#2000k#2500k#3000k#4000k#5000k#6000k#8000k#400k#4500k",                  // PossibleBitrate
        {{                                                                                              // DefaultBitrate[2][NBR_SIZEDEF] - PAL
        "500k",     // QVGA-320x240
        "1000k",    // HVGA-480x320
        "2000k",    // VGA-640x480
        "3000k",    // DVD-720x576
        "4000k",    // WVGA-800x480
        "5000k",    // XGA-1024x768
        "6000k",    // 720p
        "8000k",    // 1080p
        "400k",      // RIM 240
        "3000k",    // DVD-720x576 - PAL-M
        "",         // free
        },{                                                                                             // DefaultBitrate[2][NBR_SIZEDEF] - NTSC
        "500k",     // QVGA-320x240
        "1000k",    // HVGA-480x320
        "2000k",    // VGA-640x480
        "3000k",    // DVD-720x576
        "4000k",    // WVGA-800x480
        "5000k",    // XGA-1024x768
        "6000k",    // 720p-23.98
        "8000k",    // 1080p-23.98
        "400k",     // RIM 240
        "6000k",    // 720p-29.97
        "8000k"     // 1080p-29.97
        }}
    },{
        false,false,AV_CODEC_ID_H264,VCODEC_H264HQ,VCODECST_H264HQ,                                              // IsFind,Codec_id,FFD_VCODEC,FFD_VCODECST
        "libx264","High Quality H.264 AVC/MPEG-4 AVC",                                                  // ShortName[50], LongName[200]
        "500k#1000k#1200k#1500k#2000k#2500k#3000k#4000k#5000k#6000k#8000k#10000k#12000k#400k#3500k",    // PossibleBitrate
        {{                                                                                              // DefaultBitrate[2][NBR_SIZEDEF] - PAL
        "500k",     // QVGA-320x240
        "1000k",    // HVGA-480x320
        "1500k",    // VGA-640x480
        "2500k",    // DVD-720x576
        "3000k",    // WVGA-800x480
        "4000k",    // XGA-1024x768
        "5000k",    // 720p
        "8000k",    // 1080p
        "400k",     // RIM 240
        "2500k",    // DVD-720x576-PAL-M
        "",         // free
        },{                                                                                             // DefaultBitrate[2][NBR_SIZEDEF] - NTSC
        "500k",     // QVGA-320x240
        "1000k",    // HVGA-480x320
        "1500k",    // VGA-640x480
        "2500k",    // DVD-720x576
        "3000k",    // WVGA-800x480
        "4000k",    // XGA-1024x768
        "5000k",    // 720p-23.98
        "8000k",    // 1080p-23.98
        "400k",     // RIM 240
        "5000k",    // 720p-29.97
        "8000k",    // 1080p-29.97
        }}
    },{
        false,false,AV_CODEC_ID_H264,VCODEC_H264PQ,VCODECST_H264PQ,                                              // IsFind,Codec_id,FFD_VCODEC,FFD_VCODECST
        "libx264","Phone Quality H.264 AVC/MPEG-4 AVC",                                                 // ShortName[50], LongName[200]
        "500k#1000k#1200k#1500k#2000k#2500k#3000k#4000k#5000k#6000k#8000k#10000k#400k#3500k",           // PossibleBitrate
        {{                                                                                              // DefaultBitrate[2][NBR_SIZEDEF] - PAL
        "500k",     // QVGA-320x240
        "1200k",    // HVGA-480x320
        "1500k",    // VGA-640x480
        "2500k",    // DVD-720x576
        "3000k",    // WVGA-800x480
        "4000k",    // XGA-1024x768
        "5000k",    // 720p
        "8000k",    // 1080p
        "400k",     // RIM 240
        "2500k",    // DVD-720x576-PAL-M
        ""          // free
        },{                                                                                             // DefaultBitrate[2][NBR_SIZEDEF] - NTSC
        "500k",     // QVGA-320x240
        "1200k",    // HVGA-480x320
        "1500k",    // VGA-640x480
        "2500k",    // DVD-720x576
        "3000k",    // WVGA-800x480
        "4000k",    // XGA-1024x768
        "5000k",    // 720p-23.98
        "8000k",    // 1080p-23.98
        "400k",     // RIM 240
        "5000k",    // 720p-29.97
        "8000k"     // 1080p-29.97
        }}
    },{
        false,false,AV_CODEC_ID_VP8,VCODEC_VP8,VCODECST_VP8,                                                     // IsFind,Codec_id,FFD_VCODEC,FFD_VCODECST
        "libvpx","WebM-VP8",                                                                            // ShortName[50], LongName[200]
        "500k#1000k#1200k#1500k#2000k#2500k#3000k#4000k#5000k#6000k#8000k#400k#3500k",                  // PossibleBitrate
        {{                                                                                              // DefaultBitrate[2][NBR_SIZEDEF] - PAL
        "500k",     // QVGA-320x240
        "1000k",    // HVGA-480x320
        "1500k",    // VGA-640x480
        "2500k",    // DVD-720x576
        "3000k",    // WVGA-800x480
        "4000k",    // XGA-1024x768
        "5000k",    // 720p
        "8000k",    // 1080p
        "400k",     // RIM 240
        "2500k",    // DVD-720x576-PAL-M
        ""          // free
        },{                                                                                             // DefaultBitrate[2][NBR_SIZEDEF] - NTSC
        "500k",     // QVGA-320x240
        "1000k",    // HVGA-480x320
        "1500k",    // VGA-640x480
        "2500k",    // DVD-720x576
        "3000k",    // WVGA-800x480
        "4000k",    // XGA-1024x768
        "5000k",    // 720p-23.98
        "8000k",    // 1080p-23.98
        "400k",     // RIM 240
        "5000k",    // 720p-29.97
        "8000k"     // 1080p-29.97
        }}
    },{
        false,false,AV_CODEC_ID_FLV1,VCODEC_H263,VCODECST_H263,                                            // IsFind,Codec_id,FFD_VCODEC,FFD_VCODECST
        "flv","Flash Video / Sorenson H.263",                                                           // ShortName[50], LongName[200]
        "500k#1000k#1200k#1500k#2000k#2500k#3000k#4000k#5000k#6000k#8000k#400k#3500k",                  // PossibleBitrate
        {{                                                                                              // DefaultBitrate[2][NBR_SIZEDEF] - PAL
        "500k",     // QVGA-320x240
        "1000k",    // HVGA-480x320
        "1500k",    // VGA-640x480
        "2500k",    // DVD-720x576
        "3000k",    // WVGA-800x480
        "4000k",    // XGA-1024x768
        "5000k",    // 720p
        "8000k",    // 1080p
        "400k",     // RIM 240
        "2500k",    // DVD-720x576-PAL-M
        "",         // free
        },{                                                                                             // DefaultBitrate[2][NBR_SIZEDEF] - NTSC
        "500k",     // QVGA-320x240
        "1000k",    // HVGA-480x320
        "1500k",    // VGA-640x480
        "2500k",    // DVD-720x576
        "3000k",    // WVGA-800x480
        "4000k",    // XGA-1024x768
        "5000k",    // 720p-23.98
        "8000k",    // 1080p-23.98
        "400k",     // RIM 240
        "5000k",    // 720p-29.97
        "8000k"     // 1080p-29.97
        }}
    },{
        false,false,AV_CODEC_ID_THEORA,VCODEC_THEORA,VCODECST_THEORA,                                           // IsFind,Codec_id,FFD_VCODEC,FFD_VCODECST
        "libtheora","Theora VP3",                                                                       // ShortName[50], LongName[200]
        "500k#1000k#1200k#1500k#2000k#2500k#3000k#4000k#5000k#6000k#8000k#400k#3500k",                  // PossibleBitrate
        {{                                                                                              // DefaultBitrate[2][NBR_SIZEDEF] - PAL
        "500k",     // QVGA-320x240
        "1000k",    // HVGA-480x320
        "1500k",    // VGA-640x480
        "2500k",    // DVD-720x576
        "3000k",    // WVGA-800x480
        "4000k",    // XGA-1024x768
        "5000k",    // 720p
        "8000k",    // 1080p
        "400k",     // RIM 240
        "2500k",    // DVD-720x576-PAL-M
        ""          // free
        },{                                                                                             // DefaultBitrate[2][NBR_SIZEDEF] - NTSC
        "500k",     // QVGA-320x240
        "1000k",    // HVGA-480x320
        "1500k",    // VGA-640x480
        "2500k",    // DVD-720x576
        "3000k",    // WVGA-800x480
        "4000k",    // XGA-1024x768
        "5000k",    // 720p-23.98
        "8000k",    // 1080p-23.98
        "400k",     // RIM 240
        "5000k",    // 720p-29.97
        "8000k"     // 1080p-29.97
        }}
    },{
        false,false,AV_CODEC_ID_H264,VCODEC_X264LL,VCODECST_X264LL,                                        // IsFind,Codec_id,FFD_VCODEC,FFD_VCODECST
        "libx264","x264 lossless",                                                                      // ShortName[50], LongName[200]
        "",                                                                                             // PossibleBitrate
        {{""},{""}}                                                                                     // DefaultBitrate[2][NBR_SIZEDEF]
    },{
        false,false,AV_CODEC_ID_WMV1,VCODEC_WMV1,VCODECST_WMV1,                                            // IsFind,Codec_id,FFD_VCODEC,FFD_VCODECST
        "wmv1","Windows Media Video 7",                                                                 // ShortName[50], LongName[200]
        "",                                                                                             // PossibleBitrate
        {{""},{""}}                                                                                     // DefaultBitrate[2][NBR_SIZEDEF]
    },{
        false,false,AV_CODEC_ID_WMV2,VCODEC_WMV2,VCODECST_WMV2,                                         // IsFind,Codec_id,FFD_VCODEC,FFD_VCODECST
        "wmv2","Windows Media Video 8",                                                                 // ShortName[50], LongName[200]
        "",                                                                                             // PossibleBitrate
        {{""},{""}}                                                                                     // DefaultBitrate[2][NBR_SIZEDEF]
    },{
        false,false,AV_CODEC_ID_WMV3,VCODEC_WMV3,VCODECST_WMV3,                                         // IsFind,Codec_id,FFD_VCODEC,FFD_VCODECST
        "wmv3","Windows Media Video 9",                                                                 // ShortName[50], LongName[200]
        "",                                                                                             // PossibleBitrate
        {{""},{""}}                                                                                     // DefaultBitrate[2][NBR_SIZEDEF]
    }
};

struct sAudioCodecDef AUDIOCODECDEF[NBR_AUDIOCODECDEF]={
    {false,false, AV_CODEC_ID_PCM_S16LE,"pcm_s16le",         "WAV (PCM signed 16-bit little-endian)","",                                                                               false,"",                                           "",     "8000#11025#12000#16000#22050#24000#32000#44100#48000",AFORMAT_WAV},
    {false,false, AV_CODEC_ID_MP3,      "libmp3lame",        "MP3 (MPEG-1/2 Audio Layer III)",       "8k#16k#24k#32k#40k#48k#56k#64k#80k#96k#112k#128k#144k#160k#192k#224k#256k#320k", false,"",                                           "160k", "8000#11025#12000#16000#22050#24000#32000#44100#48000",AFORMAT_MP3},
    {false,false, AV_CODEC_ID_AAC,      "aac",               "AAC-LC (Advanced Audio Codec)",        "64k#80k#96k#112k#128k#144k#160k#192k#224k#256k#320k#384k",                       true,"224k#256k#320k#384k#448k#500k#512k#576k#640k","160k", "8000#11025#12000#16000#22050#24000#32000#44100#48000",AFORMAT_AAC},
    {false,false, AV_CODEC_ID_AC3,      "ac3",               "AC-3 (Dolby Digital)",                 "64k#80k#96k#112k#128k#144k#160k#192k#224k#256k#320k#384k",                       true,"224k#256k#320k#384k#448k#500k#512k#576k#640k","160k", "32000#44100#48000",AFORMAT_AC3},
    {false,false, AV_CODEC_ID_VORBIS,   "vorbis",            "OGG (Vorbis)",                         "64k#96k#128k#192k#256k#500k",                                                    false,"",                                           "128k", "8000#11025#12000#16000#22050#24000#32000#44100#48000",AFORMAT_OGG},
    {false,false, AV_CODEC_ID_MP2,      "mp2",               "MP2 (MPEG-1 Audio Layer II)",          "64k#96k#128k#192k#256k#500k",                                                    false,"",                                           "128k", "16000#22050#24000#32000#44100#48000",AFORMAT_MP2},
    {false,false, AV_CODEC_ID_AMR_WB,   "libvo_amrwbenc",    "Adaptive Multi-Rate (AMR) Wide-Band",  "6.60k#8.85k#12.65k#14.25k#15.85k#18.25k#19.85k#23.05k#23.85k",                   false,"",                                           "8.85k","16000",AFORMAT_3GP},
    {false,false, AV_CODEC_ID_FLAC,     "flac",              "FLAC (Free Lossless Audio Codec)",     "",                                                                               false,"",                                           "",     "8000#11025#12000#16000#22050#24000#32000#44100#48000",AFORMAT_FLAC},
    {false,false, AV_CODEC_ID_AMR_NB,   "libopencore_amrnb", "Adaptive Multi-Rate (AMR) NB",         "4.75k#5.15k#5.90k#6.70k#7.40k#7.95k#10.20k#12.20k",                              false,"",                                           "6.70k","8000",AFORMAT_3GP},
    {false,false, AV_CODEC_ID_WMAV1,    "wmav1",             "Windows Media Audio 1",                "",                                                                               false,"",                                           "",     "8000#11025#12000#16000#22050#24000#32000#44100#48000",-1},
    {false,false, AV_CODEC_ID_WMAV2,    "wmav2",             "Windows Media Audio 2",                "",                                                                               false,"",                                           "",     "8000#11025#12000#16000#22050#24000#32000#44100#48000",-1}
};

struct sFormatDef FORMATDEF[VFORMAT_NBR]={
    {false,false, "3gp",      "3gp",  "3GP file format",              "MPEG4#H264PQ",                "libvo_amrwbenc#libopencore_amrnb",                                                "8000#16000",                                           "8000"},
    {false,false, "avi",      "avi",  "AVI file format",              "MPEG4#H264HQ#H264PQ",         "pcm_s16le#libmp3lame#ac3",                                                        "8000#11025#12000#16000#22050#24000#32000#44100#48000", "48000"},
    {false,false, "matroska", "mkv",  "MKV Matroska file format",     "H264HQ#H264PQ",               "pcm_s16le#libmp3lame#libfaac#aac#libvo_aacenc#ac3#libvorbis#vorbis",              "8000#11025#12000#16000#22050#24000#32000#44100#48000", "48000"},
    {false,false, "mjpeg",    "avi",  "MJPEG video",                  "MJPEG",                       "pcm_s16le",                                                                       "8000#11025#12000#16000#22050#24000#32000#44100#48000", "48000"},
    {false,false, "mp4",      "mp4",  "MP4 file format",              "MPEG4#H264HQ#H264PQ",         "libmp3lame#libfaac#aac#libvo_aacenc",                                             "8000#11025#12000#16000#22050#24000#32000#44100#48000", "48000"},
    {false,false, "mpegts",   "mpg",  "MPEG file format",             "MPEG",                        "mp2#ac3",                                                                         "8000#11025#12000#16000#22050#24000#32000#44100#48000", "48000"},
    {false,false, "webm",     "webm", "WEBM file format",             "VP8",                         "libvorbis#vorbis",                                                                "8000#11025#12000#16000#22050#24000#32000#44100#48000", "48000"},
    {false,false, "flv",      "flv",  "FLV Flash file format 2005",   "H263",                        "libmp3lame",                                                                      "44100",                                                "44100"},
    {false,false, "flv",      "flv",  "FLV Flash file format 2008",   "H264HQ#H264PQ",               "libfaac#aac#libvo_aacenc",                                                        "44100",                                                "44100"},
    {false,false, "ogg",      "ogv",  "OGV Ogg/Theroa file format",   "THEORA#LIBTHEORA",            "libvorbis#vorbis",                                                                "8000#11025#12000#16000#22050#24000#32000#44100#48000", "48000"},
    {false,false, "asf",      "wmv",  "ASF/Window Media Video format","",                            "",                                                                                "",                                                     ""}
};

struct sFormatDef AUDIOFORMATDEF[NBR_AFORMAT]={
    {false,false, "3gp",  "3ga", "3GP format",                        "",                                 "libvo_amrwbenc#libopencore_amrnb", "8000#16000","8000"},
    {false,false, "ac3",  "ac3", "AC-3 (Dolby Digital)",              "",                                 "ac3", "8000#11025#12000#16000#22050#24000#32000#44100#48000","48000"},
    {false,false, "adts", "aac", "ADTS AAC (Advanced Audio Coding)",  "",                                 "libfaac#aac#libvo_aacenc", "8000#11025#12000#16000#22050#24000#32000#44100#48000","48000"},
    {false,false, "flac", "flac","FLAC",                              "",                                 "flac", "8000#11025#12000#16000#22050#24000#32000#44100#48000","44100"},
    {false,false, "mp4",  "m4a", "M4A QuickTime/MOV",                 "",                                 "libfaac#aac#libvo_aacenc#libmp3lame", "8000#11025#12000#16000#22050#24000#32000#44100#48000","44100"},
    {false,false, "mp2",  "mp2", "MP2 (MPEG audio layer 2)",          "",                                 "mp2", "8000#11025#12000#16000#22050#24000#32000#44100#48000","48000"},
    {false,false, "mp3",  "mp3", "MP3 (MPEG audio layer 3)",          "",                                 "libmp3lame", "8000#11025#12000#16000#22050#24000#32000#44100#48000","44100"},
    {false,false, "ogg",  "ogg", "OGG",                               "",                                 "libvorbis#vorbis", "8000#11025#12000#16000#22050#24000#32000#44100#48000","44100"},
    {false,false, "wav",  "wav", "WAV / WAVE (Waveform Audio)",       "",                                 "pcm_s16le", "8000#11025#12000#16000#22050#24000#32000#44100#48000","44100"}
};

// List of all file extension allowed for video
QString AllowVideoExtensions="avi#mov#mpg#mpeg#m4v#mkv#mp4#flv#3gp#ogv#webm#dv#wmv#mts#m2ts#mod";
// List of all file extension allowed for image
QString AllowImageExtensions="bmp#gif#jpg#jpeg#png#pbm#pgm#ppm#tiff#tif#xbm#xpm";
// List of all file extension allowed for image vector
QString AllowImageVectorExtensions="svg";
// List of all file extension allowed for musique
QString AllowMusicExtensions="wav#aac#adts#ac3#mp2#mp3#m4a#m4b#m4p#3g2#3ga#3gp#ogg#oga#spx#wma#flac";

//====================================================================================================================
QString Previous;
int     LastLibAvMessageLevel=0;

void LibAVLogCallback(void * /*ptr*/, int level, const char *fmt, va_list vargs) {
//    if (level>AVLOGLEVEL) return;
    // Crash if this is send !
    if (QString(fmt)==QString("rate control settings\n  %*s%u\n  %*s%u\n  %*s%u\n  %*s%u\n  %*s%d\n  %*s%p(%zu)\n  %*s%u\n")) return;

    char    Buf[16384*10];
    int     MessageLevel=0;
    vsprintf(Buf,fmt,vargs);
    while ((strlen(Buf)>0)&&(Buf[strlen(Buf)-1]==32)) Buf[strlen(Buf)-1]=0;
    if (strlen(Buf)>0) {
        char    End=Buf[strlen(Buf)-1];
        QString DisplayMsg;

        if ((End==10)||(End==13)) {
            while ((strlen(Buf)>0)&&((Buf[strlen(Buf)-1]==10)||(Buf[strlen(Buf)-1]==13))) Buf[strlen(Buf)-1]=0;
            DisplayMsg=QString("LIBAV: ")+Previous+QString(Buf);
            Previous  ="";
            if (level>=AV_LOG_DEBUG)            MessageLevel=LOGMSG_DEBUGTRACE;
                else if (level>=AV_LOG_INFO)    MessageLevel=LOGMSG_INFORMATION;
                else if (level>=AV_LOG_WARNING) MessageLevel=LOGMSG_WARNING;
                else                            MessageLevel=LOGMSG_CRITICAL;
            ToLog(MessageLevel,DisplayMsg,"internal",true);
            if (LastLibAvMessageLevel<MessageLevel) LastLibAvMessageLevel=MessageLevel;
        } else Previous=Previous+QString(Buf);
    }
}

//====================================================================================================================

QString GetAvErrorMessage(int ErrorCode) {
    if (ErrorCode>=0) return "";
    char Buf[2048];
    if (av_strerror(ErrorCode,Buf,2048)==0) return QString("AV Error %1:%2").arg(ErrorCode).arg(QString().fromLocal8Bit(Buf));
        else return QString("No error message for %1").arg(ErrorCode);
}

//====================================================================================================================
// Device model class definition
//====================================================================================================================

cDeviceModelDef::cDeviceModelDef(bool IsGlobalConf,int IndexKey) {
    FromGlobalConf  =IsGlobalConf;                          // true if device model is defined in global config file
    FromUserConf    =!IsGlobalConf;                         // true if device model is defined in user config file
    IsFind          =false;                                 // true if device model format is supported by installed version of libav
    DeviceIndex     =IndexKey;                              // Device number index key
    DeviceName      ="";                                    // long name for the device model
    DeviceType      =0;                                     // device type
    DeviceSubtype   =0;
    FileFormat      =0;                                     // sFormatDef number
    VideoCodec      =0;                                     // sVideoCodecDef number
    AudioCodec      =0;                                     // sAudioCodecDef number
    AudioBitrate    =0;                                     // Bitrate number in sAudioCodecDef
    ImageSize       =0;                                     // DefImageFormat number
    VideoBitrate    =0;                                     // Bitrate number in sVideoCodecDef
    Standard        =0;
}

cDeviceModelDef::~cDeviceModelDef() {
}

//====================================================================================================================

void cDeviceModelDef::SaveToXML(QDomElement &domDocument,QString ElementName) {
    QDomDocument    DomDocument;
    QDomElement     Element=DomDocument.createElement(ElementName);
    Element.setAttribute("DeviceIndex",DeviceIndex);
    Element.setAttribute("DeviceName",DeviceName);
    Element.setAttribute("DeviceType",DeviceType);
    Element.setAttribute("DeviceSubtype",DeviceSubtype);
    Element.setAttribute("FileFormat",FileFormat);
    Element.setAttribute("VideoCodec",VideoCodec);
    Element.setAttribute("AudioCodec",AudioCodec);
    Element.setAttribute("AudioBitrate",AudioBitrate);
    Element.setAttribute("Standard",Standard);
    Element.setAttribute("ImageSize",ImageSize);
    Element.setAttribute("VideoBitrate",VideoBitrate);
    domDocument.appendChild(Element);
}

//====================================================================================================================

bool cDeviceModelDef::LoadFromXML(QDomElement domDocument,QString ElementName,bool IsUserConfigFile) {
    if ((domDocument.elementsByTagName(ElementName).length()>0)&&(domDocument.elementsByTagName(ElementName).item(0).isElement()==true)) {
        QDomElement Element=domDocument.elementsByTagName(ElementName).item(0).toElement();
        if (IsUserConfigFile) FromUserConf=true;
        DeviceName      =Element.attribute("DeviceName");
        DeviceType      =Element.attribute("DeviceType").toInt();
        DeviceSubtype   =Element.attribute("DeviceSubtype").toInt();
        FileFormat      =Element.attribute("FileFormat").toInt();
        VideoCodec      =Element.attribute("VideoCodec").toInt();
        AudioCodec      =Element.attribute("AudioCodec").toInt();
        Standard        =Element.attribute("Standard").toInt();
        ImageSize       =Element.attribute("ImageSize").toInt();
        VideoBitrate    =Element.attribute("VideoBitrate").toInt();

        // Special case for audio bitrate wich can be exprim as double value
        QString BitRate =Element.attribute("AudioBitrate");
        if (BitRate.endsWith("k")) {
            if (BitRate.contains(".")) {
                BitRate=BitRate.left(BitRate.length()-1);
                double Value=BitRate.toDouble()*1000;
                BitRate=QString("%1").arg(int(Value));
            } else BitRate=BitRate.left(BitRate.length()-1)+"000";
        }
        AudioBitrate=BitRate.toInt();

        if (FromUserConf==false) {
            BckDeviceName   =DeviceName;                                      // long name for the device model
            BckDeviceType   =DeviceType;                                      // device type
            BckDeviceSubtype=DeviceSubtype;                                   // device Subtype
            BckStandard     =Standard;                                        // standard : PAL/NTSC
            BckFileFormat   =FileFormat;                                      // sFormatDef number
            BckImageSize    =ImageSize;                                       // DefImageFormat number
            BckVideoCodec   =VideoCodec;                                      // sVideoCodecDef number
            BckVideoBitrate =VideoBitrate;                                    // Bitrate number in sVideoCodecDef
            BckAudioCodec   =AudioCodec;                                      // sAudioCodecDef number
            BckAudioBitrate =AudioBitrate;                                    // Bitrate number in sAudioCodecDef
        }
        return true;
    } else return false;
}

//====================================================================================================================
// Device model list definition
//====================================================================================================================

cDeviceModelList::cDeviceModelList() {
}

//====================================================================================================================

cDeviceModelList::~cDeviceModelList() {
    while (!RenderDeviceModel.isEmpty()) delete RenderDeviceModel.takeLast();
}

//====================================================================================================================

bool cDeviceModelList::LoadConfigurationFile(QString ConfigFileName,LoadConfigFileType TypeConfigFile) {
    // Compute FileName
    QString FileName=QFileInfo(ConfigFileName).absolutePath();
    if (!FileName.endsWith(QDir::separator())) FileName=FileName+QDir::separator();
    FileName=FileName+CONFIGFILENAME+"."+QFileInfo(ConfigFileName).suffix();

    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Read configuration file")+" "+QDir::toNativeSeparators(FileName));

    QFile           file(FileName);
    QDomDocument    domDocument;
    QDomElement     root;
    QString         errorStr;
    int             errorLine,errorColumn;
    bool            IsOk=true;

    if (!file.open(QFile::ReadOnly | QFile::Text)) {
        ToLog(LOGMSG_WARNING,QApplication::translate("MainWindow","Error reading configuration file","Error message")+" "+QDir::toNativeSeparators(FileName));
        IsOk=false;
    }

    if (IsOk && (!domDocument.setContent(&file,true,&errorStr,&errorLine,&errorColumn))) {
        ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","Error reading content of configuration file","Error message")+" "+QDir::toNativeSeparators(FileName));
        IsOk=false;
    }

    if (IsOk) {
        root = domDocument.documentElement();
        if (root.tagName()!=CONFIGROOTNAME) {
            ToLog(LOGMSG_CRITICAL,QApplication::translate("MainWindow","The file is not a valid configuration file","Error message")+" "+QDir::toNativeSeparators(FileName));
            IsOk=false;
        }
    }

    if (LoadFromXML(root,TypeConfigFile)) {
        if (TypeConfigFile==USERCONFIGFILE) TranslatRenderType();
        return true;
    }
    return false;
}

//====================================================================================================================

bool cDeviceModelList::SaveConfigurationFile(QString ConfigFileName) {
    // Compute FileName
    QString FileName=QFileInfo(ConfigFileName).absolutePath();
    if (!FileName.endsWith(QDir::separator())) FileName=FileName+QDir::separator();
    FileName=FileName+CONFIGFILENAME+"."+QFileInfo(ConfigFileName).suffix();

    // Save all option to the configuration file
    QFile           file(FileName);
    QDomDocument    domDocument(CONFIGDOCNAME);
    QDomElement     root;

    // Ensure destination exist
    QFileInfo       ConfPath(FileName);
    QDir            ConfDir;
    ConfDir.mkdir(ConfPath.path());

    // Create xml document and root
    root=domDocument.createElement(CONFIGROOTNAME);
    domDocument.appendChild(root);

    // Save RenderDeviceModel collection
    int j=0;
    QDomElement Element=domDocument.createElement("RenderingDeviceModel");
    for (int i=0;i<RenderDeviceModel.count();i++) if (RenderDeviceModel[i]->FromUserConf) {
        RenderDeviceModel[i]->SaveToXML(Element,QString("Device_"+QString("%1").arg(j)));
        j++;
    }
    if (j>0) root.appendChild(Element);

    // Write file to disk
    if (!file.open(QFile::WriteOnly | QFile::Text)) {
        ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Error creating configuration file","Error message")+" "+FileName);
        return false;
    }
    QTextStream out(&file);
    out.setCodec("UTF-8");
    domDocument.save(out,4);
    file.close();
    return true;
}

//====================================================================================================================

bool cDeviceModelList::LoadFromXML(QDomElement domDocument,LoadConfigFileType TypeConfigFile) {
    if ((domDocument.elementsByTagName("RenderingDeviceModel").length()>0)&&(domDocument.elementsByTagName("RenderingDeviceModel").item(0).isElement()==true)) {
        QDomElement Element=domDocument.elementsByTagName("RenderingDeviceModel").item(0).toElement();
        int i=0;
        while ((Element.elementsByTagName("Device_"+QString("%1").arg(i)).length()>0)&&(domDocument.elementsByTagName("Device_"+QString("%1").arg(i)).item(0).isElement()==true)) {
            if (TypeConfigFile==GLOBALCONFIGFILE) {
                // Reading from global config file : append device
                RenderDeviceModel.append(new cDeviceModelDef(TypeConfigFile==GLOBALCONFIGFILE,i));
                RenderDeviceModel[i]->LoadFromXML(Element,QString("Device_"+QString("%1").arg(i)),false);
            } else {
                // Reading from user config file : search if device already exist, then load it else append a new one
                QString ElementName=QString("Device_"+QString("%1").arg(i));
                if ((domDocument.elementsByTagName(ElementName).length()>0)&&(domDocument.elementsByTagName(ElementName).item(0).isElement()==true)) {
                    QDomElement TheElement=domDocument.elementsByTagName(ElementName).item(0).toElement();
                    int IndexKey=TheElement.attribute("DeviceIndex").toInt();
                    int j=0;
                    while ((j<RenderDeviceModel.count())&&(RenderDeviceModel[j]->DeviceIndex!=IndexKey)) j++;
                    if (j<RenderDeviceModel.count()) RenderDeviceModel[IndexKey]->LoadFromXML(Element,QString("Device_"+QString("%1").arg(i)),true); else {
                        j=RenderDeviceModel.count();
                        RenderDeviceModel.append(new cDeviceModelDef(false,IndexKey));
                        RenderDeviceModel[j]->LoadFromXML(Element,QString("Device_"+QString("%1").arg(i)),true);
                    }
                }
            }
            i++;
        }
    }
    return true;
}

//====================================================================================================================

void cDeviceModelList::TranslatRenderType() {
    TranslatedRenderType.append(QApplication::translate("cDeviceModelList","Advanced","Device database type"));           // EXPORTMODE_ADVANCED
    TranslatedRenderType.append(QApplication::translate("cDeviceModelList","Smartphone","Device database type"));         // MODE_SMARTPHONE
    TranslatedRenderType.append(QApplication::translate("cDeviceModelList","Multimedia system","Device database type"));  // MODE_MULTIMEDIASYS
    TranslatedRenderType.append(QApplication::translate("cDeviceModelList","For the WEB","Device database type"));        // MODE_FORTHEWEB
    TranslatedRenderType.append(QApplication::translate("cDeviceModelList","Lossless","Device database type"));           // MODE_LOSSLESS
    TranslatedRenderSubtype[MODE_SMARTPHONE].append(QApplication::translate("cDeviceModelList","Smartphone","Device database type"));
    TranslatedRenderSubtype[MODE_SMARTPHONE].append(QApplication::translate("cDeviceModelList","Portable Player","Device database type"));
    TranslatedRenderSubtype[MODE_SMARTPHONE].append(QApplication::translate("cDeviceModelList","Netbook/NetPC","Device database type"));
    TranslatedRenderSubtype[MODE_SMARTPHONE].append(QApplication::translate("cDeviceModelList","Handheld game console","Device database type"));
    TranslatedRenderSubtype[MODE_SMARTPHONE].append(QApplication::translate("cDeviceModelList","Tablet computer","Device database type"));
    TranslatedRenderSubtype[MODE_MULTIMEDIASYS].append(QApplication::translate("cDeviceModelList","Multimedia hard drive and gateway","Device database type"));
    TranslatedRenderSubtype[MODE_MULTIMEDIASYS].append(QApplication::translate("cDeviceModelList","Player","Device database type"));
    TranslatedRenderSubtype[MODE_MULTIMEDIASYS].append(QApplication::translate("cDeviceModelList","ADSL Box","Device database type"));
    TranslatedRenderSubtype[MODE_MULTIMEDIASYS].append(QApplication::translate("cDeviceModelList","Game console","Device database type"));
    TranslatedRenderSubtype[MODE_FORTHEWEB].append(QApplication::translate("cDeviceModelList","SWF Flash Player","Device database type"));
    TranslatedRenderSubtype[MODE_FORTHEWEB].append(QApplication::translate("cDeviceModelList","Video-sharing and social WebSite","Device database type"));
    TranslatedRenderSubtype[MODE_FORTHEWEB].append(QApplication::translate("cDeviceModelList","HTML 5","Device database type"));
}

//====================================================================================================================

bool cDeviceModelList::InitLibav() {
    // Next step : start libav
    ToLog(LOGMSG_INFORMATION,QApplication::translate("MainWindow","Starting libav..."));
    avfilter_register_all();
    avcodec_register_all();
    av_register_all();
    avformat_network_init();

    av_log_set_callback(LibAVLogCallback);
    switch (LogMsgLevel) {
        case LOGMSG_DEBUGTRACE  : AVLOGLEVEL=AV_LOG_DEBUG;   break;
        case LOGMSG_INFORMATION : AVLOGLEVEL=AV_LOG_VERBOSE; break;
        case LOGMSG_WARNING     : AVLOGLEVEL=AV_LOG_WARNING; break;
        case LOGMSG_CRITICAL    :
        default                 : AVLOGLEVEL=AV_LOG_ERROR;   break;
    }
    //av_log_set_level(AVLOGLEVEL);
    av_log_set_level(AV_LOG_DEBUG);

    // Check codec to know if they was finded
    AVCodec *p=NULL;
    while ((p=av_codec_next(p))) {
        if (
                #if defined(LIBAV) && (LIBAVVERSIONINT<=8)
                (p->encode!=NULL)||(p->encode2!=NULL)
                #else
                (p->encode2!=NULL)
                #endif
           ) {
            if (p->type==AVMEDIA_TYPE_AUDIO) {
                for (int i=0;i<NBR_AUDIOCODECDEF;i++) if ((p->id==AUDIOCODECDEF[i].Codec_id)&&(!AUDIOCODECDEF[i].IsFind)) {
                    AUDIOCODECDEF[i].IsFind=true;
                    //strcpy(AUDIOCODECDEF[i].ShortName,p->name);
                }
                // special case for vorbis codec : if libvorbis is found, prefer it to default internal vorbis encoder
                if (QString(p->name)==QString("libvorbis")) strcpy(AUDIOCODECDEF[4].ShortName,p->name);
                // special case for aac codec : if libfaac is found, prefer it to default internal aac encoder
                if (QString(p->name)==QString("libfaac")) strcpy(AUDIOCODECDEF[2].ShortName,p->name);
                // special case for aac codec : if libvo_aacenc is found, prefer it to default internal aac encoder
                if (QString(p->name)==QString("libvo_aacenc")) strcpy(AUDIOCODECDEF[2].ShortName,p->name);
            }
            if (p->type==AVMEDIA_TYPE_VIDEO) {
                for (int i=0;i<NBR_VIDEOCODECDEF;i++) if ((p->id==VIDEOCODECDEF[i].Codec_id)&&(!VIDEOCODECDEF[i].IsFind)) {
                    VIDEOCODECDEF[i].IsFind=true;
                    strcpy(VIDEOCODECDEF[i].ShortName,p->name);
                }
                // special case for mpeg4 codec : if libxvid is found, prefer it to default mpeg4 internal encoder
                if (QString(p->name)==QString("libxvid")) strcpy(VIDEOCODECDEF[2].ShortName,p->name);
            }
        }
        if (p->decode!=NULL) {
            if (p->type==AVMEDIA_TYPE_AUDIO) {
                for (int i=0;i<NBR_AUDIOCODECDEF;i++) if ((p->id==AUDIOCODECDEF[i].Codec_id)&&(!AUDIOCODECDEF[i].IsRead)) {
                    AUDIOCODECDEF[i].IsRead=true;
                    //strcpy(AUDIOCODECDEF[i].ShortName,p->name);
                }
                // special case for vorbis codec : if libvorbis is found, prefer it to default internal vorbis encoder
                if (QString(p->name)==QString("libvorbis")) strcpy(AUDIOCODECDEF[4].ShortName,p->name);
                // special case for aac codec : if libfaac is found, prefer it to default internal aac encoder
                if (QString(p->name)==QString("libfaac")) strcpy(AUDIOCODECDEF[2].ShortName,p->name);
                // special case for aac codec : if libvo_aacenc is found, prefer it to default internal aac encoder
                if (QString(p->name)==QString("libvo_aacenc")) strcpy(AUDIOCODECDEF[2].ShortName,p->name);
            }
            if (p->type==AVMEDIA_TYPE_VIDEO) {
                for (int i=0;i<NBR_VIDEOCODECDEF;i++) if ((p->id==VIDEOCODECDEF[i].Codec_id)&&(!VIDEOCODECDEF[i].IsRead)) {
                    VIDEOCODECDEF[i].IsRead=true;
                    strcpy(VIDEOCODECDEF[i].ShortName,p->name);
                }
                // special case for mpeg4 codec : if libxvid is found, prefer it to default mpeg4 internal encoder
                if (QString(p->name)==QString("libxvid")) strcpy(VIDEOCODECDEF[2].ShortName,p->name);
            }
        }
    }

    // Check format to know if they was finded
    AVOutputFormat *ofmt=NULL;
    while ((ofmt=av_oformat_next(ofmt))) {
        for (int i=0;i<VFORMAT_NBR;i++) if (strcmp(ofmt->name,FORMATDEF[i].ShortName)==0) {
            QString     AllowedCodec=FORMATDEF[i].PossibleVideoCodec;
            QString     Codec="";
            int         Index=0;
            bool        IsFindVideoCodec=false;
            bool        IsFindAudioCodec=false;

            while (AllowedCodec.length()>0) {
                Index=AllowedCodec.indexOf("#");
                if (Index>0) {
                    Codec=AllowedCodec.left(Index);
                    AllowedCodec=AllowedCodec.right(AllowedCodec.length()-Index-1);
                } else {
                    Codec=AllowedCodec;
                    AllowedCodec="";
                }
                // Now find index of this codec in the VIDEOCODECDEF
                Index=0;
                while ((Index<NBR_VIDEOCODECDEF)&&(Codec!=QString(VIDEOCODECDEF[Index].FFD_VCODECST))) Index++;
                if ((Index<NBR_VIDEOCODECDEF)&&(VIDEOCODECDEF[Index].IsFind)) IsFindVideoCodec=true;
            }
            AllowedCodec=FORMATDEF[i].PossibleAudioCodec;
            Codec="";
            Index=0;
            while (AllowedCodec.length()>0) {
                Index=AllowedCodec.indexOf("#");
                if (Index>0) {
                    Codec=AllowedCodec.left(Index);
                    AllowedCodec=AllowedCodec.right(AllowedCodec.length()-Index-1);
                } else {
                    Codec=AllowedCodec;
                    AllowedCodec="";
                }
                // Now find index of this codec in the AUDIOCODECDEF
                Index=0;
                while ((Index<NBR_AUDIOCODECDEF)&&(Codec!=QString(AUDIOCODECDEF[Index].ShortName))) Index++;
                if ((Index<NBR_AUDIOCODECDEF)&&(AUDIOCODECDEF[Index].IsFind)) IsFindAudioCodec=true;
            }
            FORMATDEF[i].IsFind=IsFindAudioCodec && IsFindVideoCodec;
            if (i==10) FORMATDEF[i].IsRead=(AUDIOCODECDEF[9].IsFind || AUDIOCODECDEF[9].IsRead || AUDIOCODECDEF[10].IsFind || AUDIOCODECDEF[10].IsRead)&&
                                           (VIDEOCODECDEF[9].IsFind || VIDEOCODECDEF[9].IsRead || VIDEOCODECDEF[10].IsFind || VIDEOCODECDEF[10].IsRead || VIDEOCODECDEF[11].IsFind || VIDEOCODECDEF[11].IsRead);
        }
    }

    // Check audio format to know if they was finded
    ofmt=NULL;
    while ((ofmt=av_oformat_next(ofmt))) {
        for (int i=0;i<NBR_AFORMAT;i++) if (strcmp(ofmt->name,AUDIOFORMATDEF[i].ShortName)==0) {
            QString     AllowedCodec=AUDIOFORMATDEF[i].PossibleAudioCodec;
            QString     Codec="";
            int         Index=0;
            bool        IsFindAudioCodec=false;
            while (AllowedCodec.length()>0) {
                Index=AllowedCodec.indexOf("#");
                if (Index>0) {
                    Codec=AllowedCodec.left(Index);
                    AllowedCodec=AllowedCodec.right(AllowedCodec.length()-Index-1);
                } else {
                    Codec=AllowedCodec;
                    AllowedCodec="";
                }
                // Now find index of this codec in the AUDIOCODECDEF
                Index=0;
                while ((Index<NBR_AUDIOCODECDEF)&&(Codec!=QString(AUDIOCODECDEF[Index].ShortName))) Index++;
                if ((Index<NBR_AUDIOCODECDEF)&&(AUDIOCODECDEF[Index].IsFind)) IsFindAudioCodec=true;
            }
            AUDIOFORMATDEF[i].IsFind=IsFindAudioCodec;
        }
    }
    return true;
}
