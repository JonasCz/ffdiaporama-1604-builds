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

#ifndef CDEVICEMODELDEF_H
#define CDEVICEMODELDEF_H

// Basic inclusions (common to all files)
#include "_GlobalDefines.h"

// Include some additional standard class
#include <QString>
#include <QStringList>
#include <QtXml/QDomDocument>
#include <QtXml/QDomElement>

// Include some common various class
//#include "cApplicationConfig.h"

//****************************************************************************************************************************************************************
// LIBAV inclusion
//****************************************************************************************************************************************************************

extern "C" {
    #ifndef INT64_C
    #define INT64_C(c) (c ## LL)
    #define UINT64_C(c) (c ## ULL)
    #endif

#include <libavcodec/version.h>
#include <libavdevice/avdevice.h>
#include <libavfilter/version.h>
#include <libavformat/version.h>
#include <libavutil/avutil.h>
#include <libavutil/opt.h>
#include <libswscale/swscale.h>

#include <libavutil/mathematics.h>
#include <libavutil/pixdesc.h>

#include <libavcodec/avcodec.h>

#include <libavformat/avformat.h>
#include <libavformat/avio.h>

#include "libavfilter/avfilter.h"
#include "libavfilter/avfiltergraph.h"

#if (LIBAVUTIL_VERSION_MICRO<100)&&(LIBAVCODEC_VERSION_MICRO<100)&&(LIBAVFORMAT_VERSION_MICRO<100)&&(LIBAVDEVICE_VERSION_MICRO<100)&&(LIBAVFILTER_VERSION_MICRO<100)&&(LIBSWSCALE_VERSION_MICRO<100)
    #define LIBAV
    #if ((LIBAVUTIL_VERSION_INT>=AV_VERSION_INT(52,3,0))&&(LIBAVCODEC_VERSION_INT>=AV_VERSION_INT(54,35,0))&&(LIBAVFORMAT_VERSION_INT>=AV_VERSION_INT(54,20,0))&&(LIBAVDEVICE_VERSION_INT>=AV_VERSION_INT(53,2,0))&&(LIBAVFILTER_VERSION_INT>=AV_VERSION_INT(3,3,0))&&(LIBSWSCALE_VERSION_INT>=AV_VERSION_INT(2,1,1)))
        #define LIBAVVERSION        "Libav 9.x"
        #define LIBAVVERSIONINT     9
        #include "libavresample/avresample.h"
        #define RESAMPLE_MAX_CHANNELS AVRESAMPLE_MAX_CHANNELS
        #include "libavfilter/buffersink.h"
        #include "libavfilter/buffersrc.h"
    #elif ((LIBAVUTIL_VERSION_INT>=AV_VERSION_INT(51,22,1))&&(LIBAVCODEC_VERSION_INT>=AV_VERSION_INT(53,35,0))&&(LIBAVFORMAT_VERSION_INT>=AV_VERSION_INT(53,21,1))&&(LIBAVDEVICE_VERSION_INT>=AV_VERSION_INT(53,2,0))&&(LIBAVFILTER_VERSION_INT>=AV_VERSION_INT(2,15,0))&&(LIBSWSCALE_VERSION_INT>=AV_VERSION_INT(2,1,0)))
        #define LIBAVVERSION        "Libav 0.8.x"
        #define LIBAVVERSIONINT     8
        #define AVCodecID           CodecID
        #include "libavfilter/buffersrc.h"
        #include "libavfilter/vsrc_buffer.h"
    #else
        // unsupported version
    #endif
#elif (LIBAVUTIL_VERSION_MICRO>=100)&&(LIBAVCODEC_VERSION_MICRO>=100)&&(LIBAVFORMAT_VERSION_MICRO>=100)&&(LIBAVDEVICE_VERSION_MICRO>=100)&&(LIBAVFILTER_VERSION_MICRO>=100)&&(LIBSWSCALE_VERSION_MICRO>=100)
    #define FFMPEG
    #include "libswresample/swresample.h"
    #include "libavcodec/avcodec.h"
    #include "libavfilter/buffersink.h"
    #include "libavfilter/buffersrc.h"
    #if     ((LIBAVUTIL_VERSION_INT>=AV_VERSION_INT(54,15,100))&&(LIBAVCODEC_VERSION_INT>=AV_VERSION_INT(56,13,100))&&(LIBAVFORMAT_VERSION_INT>=AV_VERSION_INT(56,15,102))&&   \
             (LIBAVDEVICE_VERSION_INT>=AV_VERSION_INT(56,3,100))&&(LIBAVFILTER_VERSION_INT>=AV_VERSION_INT(5,2,103))&&(LIBSWSCALE_VERSION_INT>=AV_VERSION_INT(3,1,101))&&   \
             (LIBSWRESAMPLE_VERSION_INT>=AV_VERSION_INT(1,1,100)))
    #define FFMPEGVERSIONINT    250
        #define FFMPEGVERSION       "FFmpeg 2.5 or higher"
        #define RESAMPLE_MAX_CHANNELS 32
    #elif   ((LIBAVUTIL_VERSION_INT>=AV_VERSION_INT(52,66,100))&&(LIBAVCODEC_VERSION_INT>=AV_VERSION_INT(55,52,102))&&(LIBAVFORMAT_VERSION_INT>=AV_VERSION_INT(55,33,100))&& \
             (LIBAVDEVICE_VERSION_INT>=AV_VERSION_INT(55,10,100))&&(LIBAVFILTER_VERSION_INT>=AV_VERSION_INT(4,2,100))&&(LIBSWSCALE_VERSION_INT>=AV_VERSION_INT(2,5,102))&&   \
             (LIBSWRESAMPLE_VERSION_INT>=AV_VERSION_INT(0,18,100)))
        #define FFMPEGVERSIONINT    220
        #define FFMPEGVERSION       "FFmpeg 2.2 or higher"
    #elif     ((LIBAVUTIL_VERSION_INT>=AV_VERSION_INT(52,48,100))&&(LIBAVCODEC_VERSION_INT>=AV_VERSION_INT(55,39,100))&&(LIBAVFORMAT_VERSION_INT>=AV_VERSION_INT(55,19,104))&&(LIBAVDEVICE_VERSION_INT>=AV_VERSION_INT(55,5,100))&&(LIBAVFILTER_VERSION_INT>=AV_VERSION_INT(3,90,100))&&(LIBSWSCALE_VERSION_INT>=AV_VERSION_INT(2,5,101))&&(LIBSWRESAMPLE_VERSION_INT>=AV_VERSION_INT(0,17,104)))
        #define FFMPEGVERSIONINT    210
        #define FFMPEGVERSION       "FFmpeg 2.1 or higher"
    #elif   ((LIBAVUTIL_VERSION_INT>=AV_VERSION_INT(52,38,100))&&(LIBAVCODEC_VERSION_INT>=AV_VERSION_INT(55,18,102))&&(LIBAVFORMAT_VERSION_INT>=AV_VERSION_INT(55,12,100))&&(LIBAVDEVICE_VERSION_INT>=AV_VERSION_INT(55,3,100))&&(LIBAVFILTER_VERSION_INT>=AV_VERSION_INT(3,79,101))&&(LIBSWSCALE_VERSION_INT>=AV_VERSION_INT(2,3,100))&&(LIBSWRESAMPLE_VERSION_INT>=AV_VERSION_INT(0,17,102)))
        #define FFMPEGVERSIONINT    201
        #define FFMPEGVERSION       "FFmpeg 2.0.1 or higher"
    #elif ((LIBAVUTIL_VERSION_INT>=AV_VERSION_INT(52,18,100))&&(LIBAVCODEC_VERSION_INT>=AV_VERSION_INT(54,92,100))&&(LIBAVFORMAT_VERSION_INT>=AV_VERSION_INT(54,63,104))&&(LIBAVDEVICE_VERSION_INT>=AV_VERSION_INT(54,3,103))&&(LIBAVFILTER_VERSION_INT>=AV_VERSION_INT(3,42,103))&&(LIBSWSCALE_VERSION_INT>=AV_VERSION_INT(2,2,100))&&(LIBSWRESAMPLE_VERSION_INT>=AV_VERSION_INT(0,17,102)))
        #define FFMPEGVERSIONINT    123
        #define FFMPEGVERSION       "FFmpeg 1.2.3 or higher"
    #elif ((LIBAVUTIL_VERSION_INT>=AV_VERSION_INT(52,13,100))&&(LIBAVCODEC_VERSION_INT>=AV_VERSION_INT(54,86,100))&&(LIBAVFORMAT_VERSION_INT>=AV_VERSION_INT(54,59,106))&&(LIBAVDEVICE_VERSION_INT>=AV_VERSION_INT(54,3,102))&&(LIBAVFILTER_VERSION_INT>=AV_VERSION_INT(3,32,100))&&(LIBSWSCALE_VERSION_INT>=AV_VERSION_INT(2,1,103))&&(LIBSWRESAMPLE_VERSION_INT>=AV_VERSION_INT(0,17,102)))
        #define FFMPEGVERSIONINT    115
        #define FFMPEGVERSION       "FFmpeg 1.1.5 or higher"
    #else
        // unsupported version
    #endif
    #if (FFMPEGVERSIONINT >=250)
   #define RESAMPLE_MAX_CHANNELS 32
    #else
   #define RESAMPLE_MAX_CHANNELS SWR_CH_MAX
    #endif
 #endif
}

#ifndef AVCODEC_MAX_AUDIO_FRAME_SIZE
    #define AVCODEC_MAX_AUDIO_FRAME_SIZE 192000
#endif

#if !defined(avcodec_free_frame)
    #define avcodec_free_frame  av_freep
#endif

// Remove error with MSVC and AV_TIME_BASE_Q
#ifdef _MSC_VER
    #undef AV_TIME_BASE_Q
    extern AVRational AV_TIME_BASE_Q;
#endif

//****************************************************************************************************************************************************************

AVFrame *ALLOCFRAME();
void    FREEFRAME(AVFrame **Buf);

//****************************************************************************************************************************************************************

#define CONFIGFILENAME      "Devices"
#define CONFIGDOCNAME       "DEVICES"
#define CONFIGROOTNAME      "Configuration"

// Export mode definition
#define EXPORTMODE_ADVANCED                 0
#define ICON_ADVANCED                       ":/img/render.png"
#define MODE_SMARTPHONE                     1
#define ICON_SMARTPHONE                     ":/img/Smartphone.png"
#define MODE_MULTIMEDIASYS                  2
#define ICON_MULTIMEDIASYS                  ":/img/tv.png"
#define MODE_FORTHEWEB                      3
#define ICON_FORTHEWEB                      ":/img/Internet.png"
#define MODE_LOSSLESS                       4
#define ICON_LOSSLESS                       ":/img/Lossless.png"
#define MODE_SOUNDTRACK                     5
#define ICON_SOUNDTRACK                     ":/img/object_sound.png"

//============================================

// Standard definition
#define STANDARD_PAL                        0
#define STANDARD_NTSC                       1

// Image size definition
#define NBR_SIZEDEF                         11
#define SIZE_QVGA                           0
#define SIZE_HVGA                           1
#define SIZE_VGA                            2
#define SIZE_DVD                            3
#define SIZE_WVGA                           4
#define SIZE_XGA                            5
#define SIZE_720P                           6
#define SIZE_1080p                          7
#define SIZE_RIM240                         8

//============================================
// Image format definition
//============================================
struct sIMAGEDEF {
    int         Width;                                          // Width
    int         Height;                                         // Height
    int         PARNUM;                                         // Pixel aspect ratio (num)
    int         PARDEN;                                         // Pixel aspect ratio (den)
    double      dFPS;                                           // Frame per second
    char        FPS[20];                                        // Frame per second
    AVRational  AVFPS;
    char        Name[100];                                      // Display name
    int         Extend;                                         // Padding for cinema mode with DVD
};
extern sIMAGEDEF DefImageFormat [2][3][NBR_SIZEDEF];            // Image format definition
extern QString   IMAGEDEFGENNAME[2][NBR_SIZEDEF];               // Image format generic name
extern int       ORDERIMAGENAME[2][NBR_SIZEDEF];                // Display order of image size

//============================================
// Video codec definitions
//============================================
#define     VCODEC_MJPEG        0                               // Motion JPEG
#define     VCODECST_MJPEG      "MJPEG"                         // String Motion JPEG
#define     VCODEC_MPEG         1                               // MPEG-2 video
#define     VCODECST_MPEG       "MPEG"                          // String MPEG-2 video
#define     VCODEC_MPEG4        2                               // DivX/XVid/MPEG-4
#define     VCODECST_MPEG4      "MPEG4"                         // String DivX/XVid/MPEG-4
#define     VCODEC_H264HQ       3                               // H.264 AVC/MPEG-4 AVC + VPRE libx264-hq.ffpreset
#define     VCODECST_H264HQ     "H264HQ"                        // String H.264 AVC/MPEG-4 AVC + VPRE libx264-hq.ffpreset
#define     VCODEC_H264PQ       4                               // H.264 AVC/MPEG-4 AVC + VPRE libx264-hq.ffpreset ********
#define     VCODECST_H264PQ     "H264PQ"                        // String H.264 AVC/MPEG-4 AVC + VPRE libx264-hq.ffpreset ********
#define     VCODEC_VP8          5                               // WebM-VP8
#define     VCODECST_VP8        "VP8"                           // String WebM-VP8
#define     VCODEC_H263         6                               // Flash Video / Sorenson H.263
#define     VCODECST_H263       "H263"                          // String Flash Video / Sorenson H.263
#define     VCODEC_THEORA       7                               // Theora
#define     VCODECST_THEORA     "THEORA"                        // String Theora
#define     VCODEC_X264LL       8                               // x264 lossless + VPRE libx264-lossless.ffpreset ********
#define     VCODECST_X264LL     "X264LL"                        // String x264 lossless ********
#define     VCODEC_WMV1         9                               // Windows Media Video 7
#define     VCODECST_WMV1       "WMV1"                          // String Windows Media Video 7
#define     VCODEC_WMV2         10                              // Windows Media Video 8
#define     VCODECST_WMV2       "WMV2"                          // String Windows Media Video 8
#define     VCODEC_WMV3         11                              // Windows Media Video 9
#define     VCODECST_WMV3       "WMV3"                          // String Windows Media Video 9

struct sVideoCodecDef {
    bool    IsFind,IsRead;                                      // true if codec is supported for write,read by installed version of libav
    int     Codec_id;                                           // libav codec id
    int     FFD_VCODEC;                                         // ffDiaporama video codec id
    char    FFD_VCODECST[10];                                   // ffDiaporama video codec id string
    char    ShortName[50];                                      // short name of the codec (copy of the libav value)
    char    LongName[200];                                      // long name of the codec (define by this application)
    char    PossibleBitrate[200];                               // list of possible compression bit rate (define by this application)
    char    DefaultBitrate[2][NBR_SIZEDEF][10];                 // prefered compression bit rate for each possible size
};
#define NBR_VIDEOCODECDEF   12
extern struct sVideoCodecDef VIDEOCODECDEF[NBR_VIDEOCODECDEF];

//============================================
// Audio codec definitions
//============================================

struct sAudioCodecDef {
    bool    IsFind,IsRead;                                      // true if codec is supported for write,read by installed version of libav
    int     Codec_id;                                           // libav codec id
    char    ShortName[50];                                      // short name of the codec (copy of the libav value)
    char    LongName[200];                                      // long name of the codec (define by this application)
    char    PossibleBitrate2CH[200];                            // list of possible compression bit rate in stereo mode (define by this application)
    bool    Possibly6CH;                                        // true if this codec support 5.1/6 chanels mode
    char    PossibleBitrate6CH[200];                            // list of possible compression bit rate in 5.1/6 chanels mode (define by this application)
    char    Default[10];                                        // prefered compression bit rate
    char    PossibleFrequency[200];                             // list of possible audio frequency
    int     PreferedAudioContainer;                             // If use alone : preferred AFORMAT_ID
};
#define NBR_AUDIOCODECDEF   11
extern struct sAudioCodecDef AUDIOCODECDEF[NBR_AUDIOCODECDEF];

//============================================
// Format container definitions
//============================================

enum VFORMAT_ID {
    VFORMAT_3GP,
    VFORMAT_AVI,
    VFORMAT_MKV,
    VFORMAT_MJPEG,
    VFORMAT_MP4,
    VFORMAT_MPEG,
    VFORMAT_WEBM,
    VFORMAT_OLDFLV,
    VFORMAT_FLV,
    VFORMAT_OGV,
    VFORMAT_WMV,
    VFORMAT_NBR
};

struct sFormatDef {
    bool    IsFind,IsRead;                                      // true if format container is supported for write,read by installed version of libav
    char    ShortName[50];                                      // short name of the format container (copy of the libav value)
    char    FileExtension[10];                                  // prefered file extension for the format container (define by this application)
    char    LongName[200];                                      // long name of the codec (define by this application)
    char    PossibleVideoCodec[200];                            // list of possible video codec for this format container (using VCODECST String define)
    char    PossibleAudioCodec[200];                            // list of possible audio codec for this format container (define by this application)
    char    PossibleFrequency[200];                             // list of possible audio frequency
    char    DefaultAudioFreq[10];                               // prefered audio frequency
};
extern struct sFormatDef FORMATDEF[VFORMAT_NBR];

enum AFORMAT_ID {
    AFORMAT_3GP,
    AFORMAT_AC3,
    AFORMAT_AAC,
    AFORMAT_FLAC,
    AFORMAT_MP4,
    AFORMAT_MP2,
    AFORMAT_MP3,
    AFORMAT_OGG,
    AFORMAT_WAV,
    NBR_AFORMAT     // Last of the list !
};
extern struct sFormatDef AUDIOFORMATDEF[NBR_AFORMAT];

//============================================
// Device model class definition
//============================================

class cDeviceModelDef {
public:
    bool    FromGlobalConf;                                     // true if device model is defined in global config file
    bool    FromUserConf;                                       // true if device model is defined in user config file
    bool    IsFind;                                             // true if device model format is supported by installed version of Libav
    int     DeviceIndex;                                        // Device number index key
    QString DeviceName;                                         // long name for the device model
    int     DeviceType;                                         // device type
    int     DeviceSubtype;                                      // device Subtype
    int     Standard;                                           // standard : PAL/NTSC
    int     FileFormat;                                         // sFormatDef number
    int     ImageSize;                                          // DefImageFormat number
    int     VideoCodec;                                         // sVideoCodecDef number
    int     VideoBitrate;                                       // Bitrate number in sVideoCodecDef
    int     AudioCodec;                                         // sAudioCodecDef number
    int     AudioBitrate;                                       // Bitrate number in sAudioCodecDef

    // Save value to be able to reset to default
    QString BckDeviceName;                                      // long name for the device model
    int     BckDeviceType;                                      // device type
    int     BckDeviceSubtype;                                   // device Subtype
    int     BckStandard;                                        // standard : PAL/NTSC
    int     BckFileFormat;                                      // sFormatDef number
    int     BckImageSize;                                       // DefImageFormat number
    int     BckVideoCodec;                                      // sVideoCodecDef number
    int     BckVideoBitrate;                                    // Bitrate number in sVideoCodecDef
    int     BckAudioCodec;                                      // sAudioCodecDef number
    int     BckAudioBitrate;                                    // Bitrate number in sAudioCodecDef

    cDeviceModelDef(bool IsGlobalConf,int IndexKey);
    virtual         ~cDeviceModelDef();

    virtual void    SaveToXML(QDomElement &domDocument,QString ElementName);
    virtual bool    LoadFromXML(QDomElement domDocument,QString ElementName,bool IsUserConfigFile);
};

//============================================
// Device model list definition
//============================================

class cDeviceModelList {
public:
    QList<cDeviceModelDef *>    RenderDeviceModel;              // List of known rendering device model
    QStringList                 TranslatedRenderType;           // Translated render device type
    QStringList                 TranslatedRenderSubtype[4];     // Translated render device subtype

    cDeviceModelList();
    virtual         ~cDeviceModelList();

    virtual bool    LoadConfigurationFile(QString ConfigFileName,LoadConfigFileType TypeConfigFile);
    virtual bool    SaveConfigurationFile(QString ConfigFileName);
    virtual bool    LoadFromXML(QDomElement domDocument,LoadConfigFileType TypeConfigFile);

    virtual void    TranslatRenderType();
    virtual bool    InitLibav();
};

//============================================
// Allowed file extensions for reading
//============================================

extern QString AllowVideoExtensions;                            // List of all file extension allowed for video
extern QString AllowImageExtensions;                            // List of all file extension allowed for image
extern QString AllowImageVectorExtensions;                      // List of all file extension allowed for image vector
extern QString AllowMusicExtensions;                            // List of all file extension allowed for musique

//============================================
// Various
//============================================

extern QMutex  Mutex;                                           // Mutex used to control multithreaded operations for LIBAV
extern int     LastLibAvMessageLevel;                           // Last level of message received from LIBAV

QString GetAvErrorMessage(int ErrorCode);

#endif // CDEVICEMODELDEF_H
