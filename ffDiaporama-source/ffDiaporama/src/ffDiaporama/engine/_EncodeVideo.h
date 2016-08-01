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

#ifndef _ENCODEVIDEO_H
#define _ENCODEVIDEO_H

// Basic inclusions (common to all files)
#include "_GlobalDefines.h"

// Specific inclusions
#include "_Diaporama.h"

#define SUPPORTED_COMBINATION       0
#define UNSUPPORTED_COMBINATION     1
#define INVALID_COMBINATION         2
#define VBRMINCOEF                  0.5
#define VBRMAXCOEF                  1.25

int CheckEncoderCapabilities(VFORMAT_ID FormatId,AVCodecID VideoCodec,AVCodecID AudioCodec);

//************************************************

class cEncodeVideo{
public:
    cDiaporama          *Diaporama;
    bool                IsOpen,InterleaveFrame;

    // Container parameters & buffers
    QString             OutputFileName;
    int                 FromSlide,ToSlide;
    int64_t             NbrFrame;                       // Number of frame to generate
    AVFormatContext     *Container;

    // Video parameters & buffers
    AVRational          VideoFrameRate;
    int                 VideoBitrate;
    int                 VideoCodecSubId;
    sIMAGEDEF           *ImageDef;

    qreal               LastVideoPts;
    qreal               IncreasingVideoPts;
    int64_t             VideoFrameNbr;
    AVStream            *VideoStream;
    qreal               dFPS;
    int                 InternalWidth,InternalHeight,ExtendV;
    AVFrame             *VideoFrame;
    struct SwsContext   *VideoFrameConverter;           // Converter from QImage to YUV image
    u_int8_t            *VideoEncodeBuffer;             // Buffer for encoded image
    int                 VideoEncodeBufferSize;          // Buffer for encoded image
    int64_t             VideoFrameBufSize;
    u_int8_t            *VideoFrameBuf;

    // Audio parameters & buffers
    int                 AudioChannels;
    int                 AudioBitrate;
    int                 AudioSampleRate;
    int                 AudioCodecSubId;

    qreal               LastAudioPts;
    qreal               IncreasingAudioPts;
    int64_t             AudioFrameNbr;
    AVStream            *AudioStream;
    AVFrame             *AudioFrame;
    u_int8_t            *AudioResamplerBuffer;          // Buffer for sampled audio
    int                 AudioResamplerBufferSize;
    #if defined(LIBAV) && (LIBAVVERSIONINT<=8)
    ReSampleContext         *AudioResampler;            // Audio resampler
    #elif defined(LIBAV) && (LIBAVVERSIONINT<=9)
    AVAudioResampleContext  *AudioResampler;
    #elif defined(FFMPEG)
    SwrContext              *AudioResampler;
    #endif

    // Progress display settings
    bool                StopProcessWanted;              // True if user click on cancel or close during encoding process
    QTime               StartTime;                      // Time the process start
    QTime               LastCheckTime;                  // Last time the loop start

    int64_t             RenderedFrame;
    qreal               Position;
    int                 Column,ColumnStart,AdjustedDuration;

    QList<cCompositionObjectContext *> PreparedTransitBrushList;
    QList<cCompositionObjectContext *> PreparedBrushList;

    QFutureWatcher<void> ThreadAssembly;
    QFutureWatcher<void> ThreadEncodeVideo;
    QFutureWatcher<void> ThreadEncodeAudio;

    cEncodeVideo();
    ~cEncodeVideo();

    bool            OpenEncoder(QWidget *ParentWindow,cDiaporama *Diaporama,QString OutputFileName,int FromSlide,int ToSlide,
                        bool EncodeVideo,int VideoCodecSubId,bool VBR,sIMAGEDEF *ImageDef,int ImageWidth,int ImageHeight,int ExtendV,int InternalWidth,int InternalHeight,AVRational PixelAspectRatio,int VideoBitrate,
                        bool EncodeAudio,int AudioCodecSubId,int AudioChannels,int AudioBitrate,int AudioSampleRate,QString Language);
    bool            DoEncode();
    void            CloseEncoder();

private:

    int             getThreadFlags(AVCodecID ID);
    bool            AddStream(AVStream **Stream,AVCodec **codec,const char *CodecName,AVMediaType Type);
    bool            OpenVideoStream(sVideoCodecDef *VideoCodecDef,int VideoCodecSubId,bool VBR,AVRational VideoFrameRate,int ImageWidth,int ImageHeight,AVRational PixelAspectRatio,int VideoBitrate);
    bool            OpenAudioStream(sAudioCodecDef *AudioCodecDef,int &AudioChannels,int &AudioBitrate,int &AudioSampleRate,QString Language);

    bool            PrepareTAG(QString Language);
    QString         AdjustMETA(QString Text);

    void            Assembly(cDiaporamaObjectInfo *Frame,cDiaporamaObjectInfo *PreviousFrame,cSoundBlockList *RenderMusic,cSoundBlockList *ToEncodeMusic,bool &Continue);
    void            EncodeMusic(cDiaporamaObjectInfo *Frame,cSoundBlockList *RenderMusic,cSoundBlockList *ToEncodeMusic,bool &Continue);
    void            EncodeVideo(QImage *ImageList,bool &Continue);
};

#endif // _ENCODEVIDEO_H
