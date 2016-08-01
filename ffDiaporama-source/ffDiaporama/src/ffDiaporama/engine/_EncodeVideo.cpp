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

#include "_EncodeVideo.h"

#define PIXFMT      AV_PIX_FMT_RGB24
#define QTPIXFMT    QImage::Format_RGB888

//*************************************************************************************************************************************************

int CheckEncoderCapabilities(VFORMAT_ID FormatId,AVCodecID VideoCodec,AVCodecID AudioCodec) {
    if (VideoCodec==AV_CODEC_ID_NONE) return SUPPORTED_COMBINATION;

    int Ret=INVALID_COMBINATION;

    switch (FormatId) {
        case VFORMAT_3GP:
            if (((VideoCodec==AV_CODEC_ID_MPEG4)||(VideoCodec==AV_CODEC_ID_H264))&&((AudioCodec==AV_CODEC_ID_AMR_NB)||(AudioCodec==AV_CODEC_ID_AMR_WB)))
                Ret=SUPPORTED_COMBINATION;
            break;
        case VFORMAT_MJPEG:
            if ((VideoCodec==AV_CODEC_ID_MJPEG)&&(AudioCodec==AV_CODEC_ID_PCM_S16LE))
                Ret=SUPPORTED_COMBINATION;
            break;
        case VFORMAT_OGV:
            if ((VideoCodec==AV_CODEC_ID_THEORA)&&(AudioCodec==AV_CODEC_ID_VORBIS))
                Ret=SUPPORTED_COMBINATION;
            break;
        case VFORMAT_WEBM:
            if ((VideoCodec==AV_CODEC_ID_VP8)&&(AudioCodec==AV_CODEC_ID_VORBIS))
                Ret=SUPPORTED_COMBINATION;
            break;
        case VFORMAT_OLDFLV:
            if ((VideoCodec==AV_CODEC_ID_FLV1)&&(AudioCodec==AV_CODEC_ID_MP3))
                Ret=SUPPORTED_COMBINATION;
            break;
        case VFORMAT_FLV:
            if ((VideoCodec==AV_CODEC_ID_H264)&&(AudioCodec==AV_CODEC_ID_AAC))
                Ret=SUPPORTED_COMBINATION;
            break;
        case VFORMAT_MPEG:
            if ((VideoCodec==AV_CODEC_ID_MPEG2VIDEO)&&((AudioCodec==AV_CODEC_ID_AC3)||(AudioCodec==AV_CODEC_ID_MP2)))
                Ret=SUPPORTED_COMBINATION;
            break;
        case VFORMAT_AVI:
            if (((VideoCodec==AV_CODEC_ID_MPEG4)||(VideoCodec==AV_CODEC_ID_H264))&&
                ((AudioCodec==AV_CODEC_ID_AC3)||(AudioCodec==AV_CODEC_ID_MP3)||(AudioCodec==AV_CODEC_ID_PCM_S16LE)))
                Ret=SUPPORTED_COMBINATION;
            break;
        case VFORMAT_MP4:
            if (((VideoCodec==AV_CODEC_ID_MPEG4)||(VideoCodec==AV_CODEC_ID_H264))&&((AudioCodec==AV_CODEC_ID_MP3)||(AudioCodec==AV_CODEC_ID_AAC)))
                Ret=SUPPORTED_COMBINATION;
            break;
        case VFORMAT_MKV:
            Ret=SUPPORTED_COMBINATION;
            break;
        default: break;
    }
    return Ret;
}

//*************************************************************************************************************************************************

cEncodeVideo::cEncodeVideo() {
    StopProcessWanted       =false;
    Diaporama               =NULL;
    Container               =NULL;
    IsOpen                  =false;

    // Audio buffers
    AudioStream             =NULL;
    AudioFrame              =NULL;
    AudioResampler          =NULL;
    AudioResamplerBuffer    =NULL;

    //Video buffers
    VideoStream             =NULL;
    VideoEncodeBuffer       =NULL;
    VideoEncodeBufferSize   =40*1024*1024;
    VideoFrameConverter     =NULL;
    VideoFrame              =NULL;
    InternalWidth           =0;
    InternalHeight          =0;
    ExtendV                 =0;
    VideoFrameBufSize       =0;
    VideoFrameBuf           =NULL;
}

//*************************************************************************************************************************************************

cEncodeVideo::~cEncodeVideo() {
    CloseEncoder();
}

//*************************************************************************************************************************************************

void cEncodeVideo::CloseEncoder() {
    if (Container) {
        if (IsOpen) {
            if ((AudioStream)&&(AudioStream->codec->codec_id==AV_CODEC_ID_FLAC)) {
                AVPacket pkt;
                int got_packet;
                av_init_packet(&pkt);
                pkt.data=NULL;
                pkt.size=0;
                pkt.pts =AudioFrameNbr++;
                pkt.dts =AV_NOPTS_VALUE;
                avcodec_encode_audio2(AudioStream->codec,&pkt,NULL,&got_packet);
                avcodec_flush_buffers(AudioStream->codec);
            }
            av_write_trailer(Container);
            avio_close(Container->pb);
        }
        // Because of memory leak bug in libav/ffmpeg see: https://trac.ffmpeg.org/ticket/2937
        for (unsigned int i=0;i<Container->nb_streams;i++) {
            av_freep(&Container->streams[i]->index_entries);
            av_freep(&Container->streams[i]->probe_data.buf);
            av_dict_free(&Container->streams[i]->metadata);
            av_freep(&Container->streams[i]->codec->extradata);
            av_freep(&Container->streams[i]->codec->subtitle_header);
            av_freep(&Container->streams[i]->priv_data);
            if (Container->streams[i]->info) av_freep(&Container->streams[i]->info->duration_error);
        }
        //=== End of patch
        avformat_free_context(Container);
        Container=NULL;
    }
    VideoStream=NULL;
    AudioStream=NULL;

    // Audio buffers
    if (AudioFrame) av_freep(&AudioFrame);

    if (AudioResampler) {
        #if defined(LIBAV) && (LIBAVVERSIONINT<=8)
            audio_resample_close(AudioResampler);
        #elif defined(LIBAV) && (LIBAVVERSIONINT<=9)
            avresample_close(AudioResampler);
            avresample_free(&AudioResampler);
        #elif defined(FFMPEG)
            swr_free(&AudioResampler);
        #endif
        AudioResampler=NULL;
    }
    if (AudioResamplerBuffer) {
        av_free(AudioResamplerBuffer);
        AudioResamplerBuffer=NULL;
    }

    // Video buffers
    if (VideoEncodeBuffer) {
        av_free(VideoEncodeBuffer);
        VideoEncodeBuffer=NULL;
    }
    if (VideoFrameConverter) {
        sws_freeContext(VideoFrameConverter);
        VideoFrameConverter=NULL;
    }
    if (VideoFrame) {
        if ((VideoFrame->extended_data)&&(VideoFrame->extended_data!=VideoFrame->data)) av_freep(&VideoFrame->extended_data);
        if (VideoFrame->data[0]) av_freep(&VideoFrame->data[0]);
        av_freep(&VideoFrame);
    }
}

//*************************************************************************************************************************************************

int cEncodeVideo::getThreadFlags(AVCodecID ID) {
    int Ret=0;
    switch (ID) {
        case AV_CODEC_ID_PRORES:
        case AV_CODEC_ID_MPEG1VIDEO:
        case AV_CODEC_ID_DVVIDEO:
        case AV_CODEC_ID_MPEG2VIDEO:   Ret=FF_THREAD_SLICE;                    break;
        case AV_CODEC_ID_H264 :        Ret=FF_THREAD_FRAME|FF_THREAD_SLICE;    break;
        default:                    Ret=FF_THREAD_FRAME;                    break;
    }
    return Ret;
}

//*************************************************************************************************************************************************

bool cEncodeVideo::OpenEncoder(QWidget *ParentWindow,cDiaporama *Diaporama,QString OutputFileName,int FromSlide,int ToSlide,
                    bool EncodeVideo,int VideoCodecSubId,bool VBR,sIMAGEDEF *ImageDef,int ImageWidth,int ImageHeight,int ExtendV,int InternalWidth,int InternalHeight,AVRational PixelAspectRatio,int VideoBitrate,
                    bool EncodeAudio,int AudioCodecSubId,int AudioChannels,int AudioBitrate,int AudioSampleRate,QString Language) {

    sFormatDef *FormatDef   =NULL;
    this->Diaporama         =Diaporama;
    this->OutputFileName    =OutputFileName;
    this->FromSlide         =FromSlide;
    this->ToSlide           =ToSlide;
    QString FMT             =QFileInfo(OutputFileName).suffix();

    //=======================================
    // Prepare container
    //=======================================

    // Search FMT from FROMATDEF
    int i=0;
    while ((i<VFORMAT_NBR)&&(QString(FORMATDEF[i].FileExtension)!=FMT)) i++;

    // if FMT not found, search it from AUDIOFORMATDEF
    if (i>=VFORMAT_NBR) {
        int i=0;
        while ((i<NBR_AFORMAT)&&(QString(AUDIOFORMATDEF[i].FileExtension)!=FMT)) i++;
        if (i>=NBR_AFORMAT) {
            ToLog(LOGMSG_CRITICAL,QString("EncodeVideo-OpenEncoder: Unknown format %1").arg(FMT));
            return false;
        } else FormatDef=&AUDIOFORMATDEF[i];
    } else FormatDef=&FORMATDEF[i];

    // Alloc container
    Container=avformat_alloc_context();
    if (!Container) {
        ToLog(LOGMSG_CRITICAL,"EncodeVideo-OpenEncoder: Unable to allocate AVFormatContext");
        return false;
    }

    // Prepare container struct
    snprintf(Container->filename,sizeof(Container->filename),"%s",OutputFileName.toUtf8().constData());

    Container->oformat=av_guess_format(QString(FormatDef->ShortName).toUtf8().constData(),NULL,NULL);
    if (!Container->oformat) {
        ToLog(LOGMSG_CRITICAL,QString("EncodeVideo-OpenEncoder: Unable to guess av_guess_format from container %1").arg(QString(FormatDef->ShortName)));
        return false;
    }
    if (Container->oformat->flags & AVFMT_NOFILE) {
        ToLog(LOGMSG_CRITICAL,QString("EncodeVideo-OpenEncoder: Container->oformat->flags==AVFMT_NOFILE"));
        return false;
    }

    //=======================================
    // Open video stream
    //=======================================

    if (EncodeVideo) {

        // Video parameters
        this->VideoBitrate   =VideoBitrate;
        this->ImageDef       =ImageDef;
        this->VideoFrameRate =ImageDef->AVFPS;
        this->VideoCodecSubId=VideoCodecSubId;
        this->InternalWidth  =InternalWidth;
        this->InternalHeight =InternalHeight;
        this->ExtendV        =ExtendV;

        // Add stream
        if (!OpenVideoStream(&VIDEOCODECDEF[VideoCodecSubId],VideoCodecSubId,VBR,VideoFrameRate,ImageWidth,ImageHeight+ExtendV,PixelAspectRatio,VideoBitrate))
            return false;

    } else {
        // If sound only, ensure FrameRate have a value
        VideoFrameRate.num=1;
        VideoFrameRate.den=25;
    }

    //=======================================
    // Open Audio stream
    //=======================================

    if (EncodeAudio) {
        // Audio parameters
        this->AudioCodecSubId=AudioCodecSubId;

        // Add stream
        if (!OpenAudioStream(&AUDIOCODECDEF[AudioCodecSubId],AudioChannels,AudioBitrate,AudioSampleRate,Language))
            return false;

        this->AudioChannels  =AudioChannels;
        this->AudioBitrate   =AudioBitrate;
        this->AudioSampleRate=AudioSampleRate;
    }

    //********************************************
    // Open file and header
    //********************************************
    if (!PrepareTAG(Language)) return false;

    int errcode=avio_open(&Container->pb,Container->filename,AVIO_FLAG_WRITE);
    if (errcode<0) {
        ToLog(LOGMSG_CRITICAL,QString("EncodeVideo-OpenEncoder: avio_open() failed : %1").arg(GetAvErrorMessage(errcode)));
        QString ErrorMessage=errcode==-2?QString("\n\n")+QApplication::translate("DlgRenderVideo","invalid path or invalid filename"):QString("\n\n%1").arg(GetAvErrorMessage(errcode));
        CustomMessageBox(ParentWindow,QMessageBox::Critical,QApplication::translate("DlgRenderVideo","Start rendering process"),
            QApplication::translate("DlgRenderVideo","Error starting encoding process:")+ErrorMessage);
        return false;
    }
    int mux_preload=int(0.5*AV_TIME_BASE);
    int mux_max_delay=int(0.7*AV_TIME_BASE);
    int mux_rate=0;
    int packet_size=-1;

    if (QString(Container->oformat->name)==QString("mpegts")) {
        packet_size =188;
        mux_rate    =int(VideoStream->codec->bit_rate*1.1);
    } else if (QString(Container->oformat->name)==QString("matroska")) {
        mux_rate     =10080*1000;
        mux_preload  =AV_TIME_BASE/10;  // 100 ms preloading
        mux_max_delay=200*1000;         // 500 ms
    } else if (QString(Container->oformat->name)==QString("webm")) {
        mux_rate     =10080*1000;
        mux_preload  =AV_TIME_BASE/10;  // 100 ms preloading
        mux_max_delay=200*1000;         // 500 ms
    }
    Container->flags   |=AVFMT_FLAG_NONBLOCK;
    Container->max_delay=mux_max_delay;
    av_opt_set_int(Container,"preload",mux_preload,AV_OPT_SEARCH_CHILDREN);
    av_opt_set_int(Container,"muxrate",mux_rate,AV_OPT_SEARCH_CHILDREN);
    if (packet_size!=-1) Container->packet_size=packet_size;

    if (avformat_write_header(Container,NULL)<0) {
        ToLog(LOGMSG_CRITICAL,"EncodeVideo-OpenEncoder: avformat_write_header() failed");
        return false;
    }

    //********************************************
    // Log output format
    //********************************************
    av_dump_format(Container,0,OutputFileName.toUtf8().constData(),1);
    IsOpen=true;

    //=======================================
    // Init counter
    //=======================================

    dFPS    =qreal(VideoFrameRate.den)/qreal(VideoFrameRate.num);
    NbrFrame=int(qreal(Diaporama->GetPartialDuration(FromSlide,ToSlide))*dFPS/1000);    // Number of frame to generate

    return true;
}

//*************************************************************************************************************************************************
// Create a stream
//*************************************************************************************************************************************************

bool cEncodeVideo::AddStream(AVStream **Stream,AVCodec **codec,const char *CodecName,AVMediaType Type) {
    *codec=avcodec_find_encoder_by_name(CodecName);
    if (!(*codec)) {
        ToLog(LOGMSG_CRITICAL,QString("EncodeVideo-AddStream: Unable to find codec %1").arg(CodecName));
        return false;
    }
    if ((*codec)->id==AV_CODEC_ID_NONE) {
        ToLog(LOGMSG_CRITICAL,QString("EncodeVideo-AddStream: codec->id==AV_CODEC_ID_NONE"));
        return false;
    }

    // Create stream
    *Stream=avformat_new_stream(Container,*codec);
    if (!(*Stream)) {
        ToLog(LOGMSG_CRITICAL,"EncodeVideo-AddStream: avformat_new_stream() failed");
        return false;
    }
    (*Stream)->codec->codec_type=Type;
    (*Stream)->codec->codec_id  =(*codec)->id;

    // Setup encoder context for stream
    if (avcodec_get_context_defaults3((*Stream)->codec,*codec)<0) {
        ToLog(LOGMSG_CRITICAL,"EncodeVideo-AddStream: avcodec_get_context_defaults3() failed");
        return false;
    }

    if (Type==AVMEDIA_TYPE_VIDEO) Container->oformat->video_codec=(*codec)->id;
        else if (Type==AVMEDIA_TYPE_AUDIO) Container->oformat->audio_codec=(*codec)->id;

    (*Stream)->codec->codec_type=Type;          // set again
    (*Stream)->codec->codec_id  =(*codec)->id;  // set again

    if ((Container->oformat->flags & AVFMT_GLOBALHEADER)
            ||(!strcmp(Container->oformat->name,"mp4"))
            //||(!strcmp(Container->oformat->name,"mov"))
            ||(!strcmp(Container->oformat->name,"mpegts"))
            ||(!strcmp(Container->oformat->name,"3gp"))
        )
        (*Stream)->codec->flags|=CODEC_FLAG_GLOBAL_HEADER;

    int ThreadC =((getCpuCount()/*-1*/)>1)?(getCpuCount()-1):1;
    if (ThreadC>0) (*Stream)->codec->thread_count=ThreadC;
    (*Stream)->codec->thread_type=getThreadFlags((*codec)->id);

    return true;
}

//*************************************************************************************************************************************************
// Create video streams
//*************************************************************************************************************************************************

bool cEncodeVideo::OpenVideoStream(sVideoCodecDef *VideoCodecDef,int VideoCodecSubId,bool VBR,AVRational VideoFrameRate,
                                   int ImageWidth,int ImageHeight,AVRational PixelAspectRatio,int VideoBitrate) {
    AVCodec *codec;
    if (!AddStream(&VideoStream,&codec,VideoCodecDef->ShortName,AVMEDIA_TYPE_VIDEO)) return false;

    AVDictionary *opts=NULL;
    int MinRate=-1;
    int MaxRate=-1;
    int BufSize=-1;
    int BFrames=-1;

    // Setup codec parameters
    VideoStream->codec->width               =ImageWidth;
    VideoStream->codec->height              =ImageHeight;
    VideoStream->codec->pix_fmt             =AV_PIX_FMT_YUV420P;
    VideoStream->codec->time_base           =VideoFrameRate;
    #if FFMPEGVERSIONINT>=250
    VideoStream->time_base                  = VideoFrameRate;   //new ffmpeg 2.5.0!!!!
    #endif
    VideoStream->codec->sample_aspect_ratio =PixelAspectRatio;
    VideoStream->sample_aspect_ratio        =PixelAspectRatio;
    VideoStream->codec->gop_size            =12;

    if ((codec->id!=AV_CODEC_ID_H264)||(!VBR)) {
        VideoStream->codec->bit_rate=VideoBitrate;
        av_dict_set(&opts,"b",QString("%1").arg(VideoBitrate).toUtf8(),0);
    }

    if (codec->id==AV_CODEC_ID_MPEG2VIDEO) {

        BFrames=2;
        #if defined(LIBAV) && (LIBAVVERSIONINT<=8)
        MinRate=VideoBitrate;
        MaxRate=VideoBitrate;
        BufSize=1000000;
        VideoStream->codec->flags                |=CODEC_FLAG_CLOSED_GOP;
        VideoStream->codec->flags2               |=CODEC_FLAG2_STRICT_GOP;
        VideoStream->codec->scenechange_threshold =1000000000;
        VideoStream->codec->error_concealment    |=FF_EC_DEBLOCK;
        #endif

    } else if (codec->id==AV_CODEC_ID_MJPEG) {

        //-qscale 2 -qmin 2 -qmax 2
        VideoStream->codec->pix_fmt             =AV_PIX_FMT_YUVJ420P;
        VideoStream->codec->qmin                =2;
        VideoStream->codec->qmax                =2;
        VideoStream->codec->bit_rate_tolerance  =int(qreal(int64_t(ImageWidth)*int64_t(ImageHeight)*int64_t(VideoFrameRate.den))/qreal(VideoFrameRate.num))*10;

    } else if (codec->id==AV_CODEC_ID_VP8) {

        BFrames=3;
        VideoStream->codec->gop_size=120;
        VideoStream->codec->qmax    =ImageHeight<=576?63:51;                av_dict_set(&opts,"qmax",QString("%1").arg(VideoStream->codec->qmax).toUtf8(),0);
        VideoStream->codec->qmin    =ImageHeight<=576?1:11;                 av_dict_set(&opts,"qmin",QString("%1").arg(VideoStream->codec->qmin).toUtf8(),0);
        VideoStream->codec->mb_lmin =VideoStream->codec->qmin*FF_QP2LAMBDA;
        VideoStream->codec->lmin    =VideoStream->codec->qmin*FF_QP2LAMBDA;
        VideoStream->codec->mb_lmax =VideoStream->codec->qmax*FF_QP2LAMBDA;
        VideoStream->codec->lmax    =VideoStream->codec->qmax*FF_QP2LAMBDA;

        if (ImageHeight<=720) av_dict_set(&opts,"profile","0",0); else av_dict_set(&opts,"profile","1",0);
        if (ImageHeight>576)  av_dict_set(&opts,"slices","4",0);

        av_dict_set(&opts,"lag-in-frames","16",0);
        av_dict_set(&opts,"deadline","good",0);
        if (VideoStream->codec->thread_count>0) av_dict_set(&opts,"cpu-used",QString("%1").arg(VideoStream->codec->thread_count).toUtf8(),0);

        #if defined(LIBAV) && (LIBAVVERSIONINT<=8)
            MinRate=VideoBitrate;
            MaxRate=VideoBitrate;
            BufSize=VideoBitrate;
        #endif

    } else if (codec->id==AV_CODEC_ID_H264) {

        VideoStream->codec->qmin    =0;             av_dict_set(&opts,"qmin",QString("%1").arg(VideoStream->codec->qmin).toUtf8(),0);
        VideoStream->codec->qmax    =69;            av_dict_set(&opts,"qmax",QString("%1").arg(VideoStream->codec->qmax).toUtf8(),0);
        if (VideoStream->codec->thread_count>0)     av_dict_set(&opts,"threads",QString("%1").arg(VideoStream->codec->thread_count).toUtf8(),0);

        switch (VideoCodecSubId) {
            case VCODEC_H264HQ:     // High Quality H.264 AVC/MPEG-4 AVC
            case VCODEC_H264PQ:     // Phone Quality H.264 AVC/MPEG-4 AVC
                av_dict_set(&opts,"refs","3",0);
                if (VBR) {
                    MinRate=int(double(VideoBitrate)*VBRMINCOEF);
                    MaxRate=int(double(VideoBitrate)*VBRMAXCOEF);
                    BufSize=int(double(VideoBitrate)*4);
                } else {
                    MinRate=int(double(VideoBitrate)*0.9);
                    MaxRate=int(double(VideoBitrate)*1.1);
                    BufSize=int(double(VideoBitrate)*2);
                }
                //                                                           High Quality   Phone Quality
                av_dict_set(&opts,"preset",  (VideoCodecSubId==VCODEC_H264HQ?Diaporama->ApplicationConfig->Preset_HQ :Diaporama->ApplicationConfig->Preset_PQ).toLocal8Bit(),0);
                av_dict_set(&opts,"vprofile",(VideoCodecSubId==VCODEC_H264HQ?Diaporama->ApplicationConfig->Profile_HQ:Diaporama->ApplicationConfig->Profile_PQ).toLocal8Bit(),0);  // 2 versions to support differents libav/ffmpeg
                av_dict_set(&opts,"profile", (VideoCodecSubId==VCODEC_H264HQ?Diaporama->ApplicationConfig->Profile_HQ:Diaporama->ApplicationConfig->Profile_PQ).toLocal8Bit(),0);
                av_dict_set(&opts,"tune",    (VideoCodecSubId==VCODEC_H264HQ?Diaporama->ApplicationConfig->Tune_HQ   :Diaporama->ApplicationConfig->Tune_PQ).toLocal8Bit(),0);
                break;

            case VCODEC_X264LL: // x264 lossless
                av_dict_set(&opts,"preset","veryfast",0);
                av_dict_set(&opts,"refs","3",0);
                av_dict_set(&opts,"qp",  "0",0);
                break;
        }

    }

    VideoStream->codec->keyint_min=1;
    av_dict_set(&opts,"g",QString("%1").arg(VideoStream->codec->gop_size).toUtf8(),0);
    av_dict_set(&opts,"keyint_min",QString("%1").arg(VideoStream->codec->keyint_min).toUtf8(),0);

    if (MinRate!=-1) {
        av_dict_set(&opts,"minrate",QString("%1").arg(MinRate).toUtf8(),0);
        av_dict_set(&opts,"maxrate",QString("%1").arg(MaxRate).toUtf8(),0);
        av_dict_set(&opts,"bufsize",QString("%1").arg(BufSize).toUtf8(),0);
    }

    if (BFrames!=-1) {
        VideoStream->codec->max_b_frames=BFrames;
        av_dict_set(&opts,"bf",QString("%1").arg(BFrames).toUtf8(),0);
    }
    VideoStream->codec->has_b_frames=(VideoStream->codec->max_b_frames>0)?1:0;

    // Open encoder
    int errcode=avcodec_open2(VideoStream->codec,codec,&opts);
    if (errcode<0) {
        char Buf[2048];
        av_strerror(errcode,Buf,2048);
        ToLog(LOGMSG_CRITICAL,"EncodeVideo-OpenVideoStream: avcodec_open2() failed: "+QString(Buf));
        return false;
    }

    // Create VideoFrameConverter
    VideoFrameConverter=sws_getContext(
        InternalWidth,VideoStream->codec->height,PIXFMT,                                    // Src Widht,Height,Format
        VideoStream->codec->width,VideoStream->codec->height,VideoStream->codec->pix_fmt,   // Destination Width,Height,Format
        SWS_BICUBIC,                                                                        // flags
        NULL,NULL,NULL);                                                                    // src Filter,dst Filter,param
    if (!VideoFrameConverter) {
        ToLog(LOGMSG_CRITICAL,"EncodeVideo-OpenVideoStream: sws_getContext() failed");
        return false;
    }

    #if defined(LIBAV) && (LIBAVVERSIONINT<=8)
    // Create VideoEncodeBuffer
    VideoEncodeBuffer=(u_int8_t *)av_malloc(VideoEncodeBufferSize);
    if (!VideoEncodeBuffer) {
        ToLog(LOGMSG_CRITICAL,"EncodeVideo-OpenVideoStream: av_malloc() failed for VideoEncodeBuffer");
        return false;
    }
    #endif

    // Create and prepare VideoFrame and VideoFrameBuf
    VideoFrame=ALLOCFRAME();  // Allocate structure for RGB image
    if (!VideoFrame) {
        ToLog(LOGMSG_CRITICAL,"EncodeVideo-OpenVideoStream: avcodec_alloc_frame() failed");
        return false;
    } else {
        VideoFrameBufSize=avpicture_get_size(VideoStream->codec->pix_fmt,VideoStream->codec->width,VideoStream->codec->height);
        VideoFrameBuf   =(u_int8_t *)av_malloc(VideoFrameBufSize);
        if ((!VideoFrameBufSize)||(!VideoFrameBuf)) {
            ToLog(LOGMSG_CRITICAL,"EncodeVideo-OpenVideoStream: av_malloc() failed for VideoFrameBuf");
            return false;
        }
    }

    return true;
}

//*************************************************************************************************************************************************
// Create audio streams
//*************************************************************************************************************************************************

bool cEncodeVideo::OpenAudioStream(sAudioCodecDef *AudioCodecDef,int &AudioChannels,int &AudioBitrate,int &AudioSampleRate,QString Language) {
    AVCodec *codec;
    if (!AddStream(&AudioStream,&codec,AudioCodecDef->ShortName,AVMEDIA_TYPE_AUDIO)) return false;

    AVDictionary    *opts   =NULL;

    // Setup codec parameters
    AudioStream->codec->sample_fmt  =AV_SAMPLE_FMT_S16;
    AudioStream->codec->channels    =AudioChannels;
    AudioStream->codec->sample_rate =AudioSampleRate;

    av_dict_set(&AudioStream->metadata,"language",Language.toUtf8().constData(),0);

    if (codec->id==AV_CODEC_ID_PCM_S16LE) {
        AudioBitrate=AudioSampleRate*16*AudioChannels;
    } else if (codec->id==AV_CODEC_ID_FLAC) {
        av_dict_set(&opts,"lpc_coeff_precision","15",0);
        av_dict_set(&opts,"lpc_type","2",0);
        av_dict_set(&opts,"lpc_passes","1",0);
        av_dict_set(&opts,"min_partition_order","0",0);
        av_dict_set(&opts,"max_partition_order","8",0);
        av_dict_set(&opts,"prediction_order_method","0",0);
        av_dict_set(&opts,"ch_mode","-1",0);
    } else if (codec->id==AV_CODEC_ID_AAC) {
        //VideoStream->codec->profile=FF_PROFILE_AAC_MAIN;
        if (QString(AUDIOCODECDEF[2].ShortName)=="aac") {
            AudioStream->codec->strict_std_compliance = FF_COMPLIANCE_EXPERIMENTAL;
            #if defined(FFMPEG)
            AudioStream->codec->sample_fmt =AV_SAMPLE_FMT_FLTP;
            #endif
        }
    } else if (codec->id==AV_CODEC_ID_MP2) {

    } else if (codec->id==AV_CODEC_ID_MP3) {
        #if (defined(LIBAV)&&(LIBAVVERSIONINT>=9))||defined(FFMPEG)
        AudioStream->codec->sample_fmt =AV_SAMPLE_FMT_S16P;
        #endif
        av_dict_set(&opts,"reservoir","1",0);
    } else if (codec->id==AV_CODEC_ID_VORBIS) {
        #if (defined(LIBAV)&&(LIBAVVERSIONINT>=9))||defined(FFMPEG)
        AudioStream->codec->sample_fmt =AV_SAMPLE_FMT_FLTP;
        #else
        //AudioStream->codec->sample_fmt =AV_SAMPLE_FMT_FLT;
        AudioStream->codec->sample_fmt =AV_SAMPLE_FMT_S16;
        #endif
    } else if (codec->id==AV_CODEC_ID_AC3) {
        #if (defined(LIBAV)&&(LIBAVVERSIONINT>=9))||defined(FFMPEG)
        AudioStream->codec->sample_fmt =AV_SAMPLE_FMT_FLTP;
        #else
        AudioStream->codec->sample_fmt =AV_SAMPLE_FMT_FLT;
        #endif
    } else if (codec->id==AV_CODEC_ID_AMR_NB) {
        AudioStream->codec->channels=1;
        AudioChannels=1;
    } else if (codec->id==AV_CODEC_ID_AMR_WB) {
        AudioStream->codec->channels=1;
        AudioChannels=1;
    }
    AudioStream->codec->bit_rate    =AudioBitrate;
    av_dict_set(&opts,"ab",QString("%1").arg(AudioBitrate).toUtf8(),0);
    AudioStream->codec->channel_layout=(AudioStream->codec->channels==2?AV_CH_LAYOUT_STEREO:AV_CH_LAYOUT_MONO);

    int errcode=avcodec_open2(AudioStream->codec,codec,&opts);
    if (errcode<0) {
        char Buf[2048];
        av_strerror(errcode,Buf,2048);
        ToLog(LOGMSG_CRITICAL,"EncodeVideo-OpenAudioStream: avcodec_open2() failed: "+QString(Buf));
        return false;
    }

    AudioFrame=ALLOCFRAME();  // Allocate structure for RGB image
    if (AudioFrame==NULL) {
        ToLog(LOGMSG_CRITICAL,QString("EncodeVideo-OpenAudioStream:: avcodec_alloc_frame failed"));
        return false;
    }

    return true;
}

//*************************************************************************************************************************************************

bool cEncodeVideo::PrepareTAG(QString Language) {
    // Set TAGS
    av_dict_set(&Container->metadata,"language",Language.toUtf8().constData(),0);
    av_dict_set(&Container->metadata,"title",AdjustMETA(Diaporama->ProjectInfo->Title==""?QFileInfo(OutputFileName).baseName():Diaporama->ProjectInfo->Title).toUtf8().constData(),0);
    av_dict_set(&Container->metadata,"artist",AdjustMETA(Diaporama->ProjectInfo->Author).toUtf8().constData(),0);
    av_dict_set(&Container->metadata,"album",AdjustMETA(Diaporama->ProjectInfo->Album).toUtf8().constData(),0);
    av_dict_set(&Container->metadata,"comment",AdjustMETA(Diaporama->ProjectInfo->Comment).toUtf8().constData(),0);
    av_dict_set(&Container->metadata,"date",QString("%1").arg(Diaporama->ProjectInfo->EventDate.year()).toUtf8().constData(),0);
    av_dict_set(&Container->metadata,"composer",QString(QString(APPLICATION_NAME)+QString(" ")+CurrentAppName).toUtf8().constData(),0);
    av_dict_set(&Container->metadata,"creation_time",QDateTime::currentDateTime().toString("yyyy-MM-dd hh:mm:ss").toUtf8().constData(),0); // ISO 8601 format

    // Set Chapters (only if video stream)
    if (VideoStream) {
        for (int i=FromSlide;i<=ToSlide;i++) if ((i==FromSlide)||(Diaporama->List[i]->StartNewChapter)) {
            AVChapter *Chapter=(AVChapter *)av_mallocz(sizeof(AVChapter));
            int64_t   Start   =Diaporama->GetObjectStartPosition(i)+(i>FromSlide?Diaporama->List[i]->GetTransitDuration():0)-Diaporama->GetObjectStartPosition(FromSlide);
            int64_t   Duration=Diaporama->List[i]->GetDuration()-(i>FromSlide?Diaporama->List[i]->GetTransitDuration():0);
            int       NextC   =i+1;
            while ((NextC<ToSlide)&&(!Diaporama->List[NextC]->StartNewChapter)) {
                Duration=Duration+Diaporama->List[NextC]->GetDuration();
                NextC++;
                if (NextC<=ToSlide) Duration=Duration-Diaporama->List[NextC-1]->GetTransitDuration();
            }
            int64_t   End     =Start+Duration;
            int64_t   ts_off  =av_rescale_q(Container->start_time,AV_TIME_BASE_Q,VideoStream->time_base);
            Chapter->id       =Container->nb_chapters;
            Chapter->time_base=VideoStream->time_base;
            Chapter->start    =av_rescale_q((Start-ts_off)*1000,AV_TIME_BASE_Q,VideoStream->time_base);
            Chapter->end      =av_rescale_q((End-ts_off)*1000,AV_TIME_BASE_Q,VideoStream->time_base);
            QString CptName=Diaporama->List[i]->StartNewChapter?Diaporama->List[i]->ChapterName:Diaporama->ProjectInfo->Title;
            av_dict_set(&Chapter->metadata,"title",CptName.toUtf8(),0);
            Container->chapters=(AVChapter **)av_realloc(Container->chapters,sizeof(AVChapter)*(Container->nb_chapters+1));
            Container->chapters[Container->nb_chapters]=Chapter;
            Container->nb_chapters++;
        }
    }

    return true;
}

//*************************************************************************************************************************************************

QString cEncodeVideo::AdjustMETA(QString Text) {
    //Metadata keys or values containing special characters (’=’, ’;’, ’#’, ’\’ and a newline) must be escaped with a backslash ’\’.
    Text.replace("=","\\=");
    Text.replace(";","\\;");
    Text.replace("#","\\#");
    //Text.replace("\\","\\\\");
    Text.replace("\n","\\\n");
    #ifdef Q_OS_WIN
        return Text.toUtf8();
    #else
        return Text;
    #endif
}

//*************************************************************************************************************************************************

bool cEncodeVideo::DoEncode() {
    bool                    Continue=true;
    cSoundBlockList         RenderMusic,ToEncodeMusic;
    cDiaporamaObjectInfo    *PreviousFrame=NULL,*PreviousPreviousFrame=NULL;
    cDiaporamaObjectInfo    *Frame        =NULL;
    int                     FrameSize     =0;
    QObject                 FakeParentObject(NULL);

    IncreasingVideoPts=qreal(1000)/dFPS;

    // Init RenderMusic and ToEncodeMusic
    if (AudioStream) {
        RenderMusic.SetFPS(IncreasingVideoPts,AudioChannels,AudioSampleRate,AV_SAMPLE_FMT_S16);
        FrameSize=AudioStream->codec->frame_size;
        if ((!FrameSize)&&(AudioStream->codec->codec_id==AV_CODEC_ID_PCM_S16LE)) FrameSize=1024;
        if ((FrameSize==0)&&(VideoStream)) FrameSize=(AudioStream->codec->sample_rate*AudioStream->time_base.num)/AudioStream->time_base.den;
        #if defined(LIBAV) && (LIBAVVERSIONINT<=8)
            // LIBAV 0.8 => ToEncodeMusic use AudioStream->codec->sample_fmt format
            int ComputedFrameSize=AudioStream->codec->channels*av_get_bytes_per_sample(AudioStream->codec->sample_fmt)*FrameSize;
            if (ComputedFrameSize==0) ComputedFrameSize=RenderMusic.SoundPacketSize;
            ToEncodeMusic.SetFrameSize(ComputedFrameSize,AudioStream->codec->channels,AudioSampleRate,AudioStream->codec->sample_fmt);
        #else
            // LIBAV 9 AND FFMPEG => ToEncodeMusic use AV_SAMPLE_FMT_S16 format
            int ComputedFrameSize=AudioChannels*av_get_bytes_per_sample(AV_SAMPLE_FMT_S16)*FrameSize;
            if (ComputedFrameSize==0) ComputedFrameSize=RenderMusic.SoundPacketSize;
            ToEncodeMusic.SetFrameSize(ComputedFrameSize,RenderMusic.Channels,AudioSampleRate,AV_SAMPLE_FMT_S16);
        #endif
    }

    AudioFrameNbr       =0;
    VideoFrameNbr       =0;
    LastAudioPts        =0;
    LastVideoPts        =0;
    IncreasingAudioPts  =AudioStream?FrameSize*1000*AudioStream->codec->time_base.num/AudioStream->codec->time_base.den:0;
    StartTime           =QTime::currentTime();
    LastCheckTime       =StartTime;                                     // Display control : last time the loop start
    Position            =Diaporama->GetObjectStartPosition(FromSlide);  // Render current position
    ColumnStart         =-1;                                            // Render start position of current object
    Column              =FromSlide-1;                                   // Render current object
    RenderedFrame       =0;

    // Init Resampler (if needed)
    if (AudioStream) {
        #if defined(LIBAV) && (LIBAVVERSIONINT<=8)
            if ((AudioStream->codec->sample_fmt!=RenderMusic.SampleFormat)||(AudioStream->codec->channels!=RenderMusic.Channels)||(AudioSampleRate!=RenderMusic.SamplingRate)) {
                if (!AudioResamplerBuffer) {
                    AudioResamplerBufferSize=AVCODEC_MAX_AUDIO_FRAME_SIZE*ToEncodeMusic.Channels;
                    AudioResamplerBuffer=(u_int8_t *)av_malloc(AudioResamplerBufferSize);
                    if (!AudioResamplerBuffer) {
                        ToLog(LOGMSG_CRITICAL,QString("EncodeMusic: AudioResamplerBuffer allocation failed"));
                        Continue=false;
                    }
                }
                if (!AudioResampler) AudioResampler=av_audio_resample_init(         // Context for resampling audio data
                    AudioStream->codec->channels,RenderMusic.Channels,              // output_channels, input_channels
                    AudioSampleRate,RenderMusic.SamplingRate,                       // output_rate, input_rate
                    AudioStream->codec->sample_fmt,RenderMusic.SampleFormat,        // sample_fmt_out, sample_fmt_in
                    0,                                                              // filter_length
                    0,                                                              // log2_phase_count
                    1,                                                              // linear
                    0);                                                             // cutoff
                if (!AudioResampler) {
                    ToLog(LOGMSG_CRITICAL,QString("EncodeMusic: av_audio_resample_init failed"));
                    Continue=false;
                }
            }
        #elif defined(LIBAV) && (LIBAVVERSIONINT<=9)
            if ((AudioStream->codec->sample_fmt!=ToEncodeMusic.SampleFormat)||(AudioStream->codec->channels!=ToEncodeMusic.Channels)||(AudioSampleRate!=ToEncodeMusic.SamplingRate)) {
                if (!AudioResamplerBuffer) {
                    int out_linesize=0;
                    if (av_samples_alloc(&AudioResamplerBuffer,&out_linesize,ToEncodeMusic.Channels,AVCODEC_MAX_AUDIO_FRAME_SIZE,ToEncodeMusic.SampleFormat,1)<0) {
                        ToLog(LOGMSG_CRITICAL,QString("EncodeMusic: AudioResamplerBuffer allocation failed"));
                        Continue=false;
                    } else {
                        AudioResamplerBufferSize=out_linesize*ToEncodeMusic.Channels;
                    }
                }
                if (!AudioResampler) {
                    AudioResampler=avresample_alloc_context();
                    if (AudioResampler) {
                        av_opt_set_int(AudioResampler,"in_channel_layout", av_get_default_channel_layout(ToEncodeMusic.Channels),0);
                        av_opt_set_int(AudioResampler,"in_sample_rate",    ToEncodeMusic.SamplingRate,0);
                        av_opt_set_int(AudioResampler,"out_channel_layout",AudioStream->codec->channel_layout,0);
                        av_opt_set_int(AudioResampler,"out_sample_rate",   AudioSampleRate,0);
                        av_opt_set_int(AudioResampler,"in_sample_fmt",     ToEncodeMusic.SampleFormat,0);
                        av_opt_set_int(AudioResampler,"out_sample_fmt",    AudioStream->codec->sample_fmt,0);
                            if (avresample_open(AudioResampler)<0) {
                                ToLog(LOGMSG_CRITICAL,QString("DoEncode: avresample_open failed"));
                                Continue=false;
                            }
                    } else {
                        ToLog(LOGMSG_CRITICAL,QString("Error allocating AVAudioResampleContext"));
                        Continue=false;
                    }
                }
            }
        #elif defined(FFMPEG)
            if ((AudioStream->codec->sample_fmt!=RenderMusic.SampleFormat)||(AudioStream->codec->channels!=RenderMusic.Channels)||(AudioSampleRate!=RenderMusic.SamplingRate)) {
                if (!AudioResampler) {
                    AudioResampler=swr_alloc();
                    av_opt_set_int(AudioResampler,"in_channel_layout",     av_get_default_channel_layout(ToEncodeMusic.Channels),0);
                    av_opt_set_int(AudioResampler,"in_sample_rate",        ToEncodeMusic.SamplingRate,0);
                    av_opt_set_int(AudioResampler,"out_channel_layout",    AudioStream->codec->channel_layout,0);
                    av_opt_set_int(AudioResampler,"out_sample_rate",       AudioStream->codec->sample_rate,0);
                    av_opt_set_int(AudioResampler,"in_channel_count",      ToEncodeMusic.Channels,0);
                    av_opt_set_int(AudioResampler,"out_channel_count",     AudioStream->codec->channels,0);
                    av_opt_set_sample_fmt(AudioResampler,"out_sample_fmt", AudioStream->codec->sample_fmt,0);
                    av_opt_set_sample_fmt(AudioResampler,"in_sample_fmt",  ToEncodeMusic.SampleFormat,0);
                    if (swr_init(AudioResampler)<0) {
                        ToLog(LOGMSG_CRITICAL,QString("DoEncode: swr_alloc_set_opts failed"));
                        Continue=false;
                    }
                }
            }
        #endif
    }

    // Prepare a DefaultSourceImage to not create it for each frame
    QImage DefaultSourceImage;
    if ((InternalWidth!=0)&&(InternalHeight!=0)) {
        // create an empty transparent image
        DefaultSourceImage=QImage(InternalWidth,InternalHeight,QImage::Format_ARGB32_Premultiplied);
        QPainter PT;
        PT.begin(&DefaultSourceImage);
        PT.setCompositionMode(QPainter::CompositionMode_Source);
        PT.fillRect(QRect(0,0,InternalWidth,InternalHeight),Qt::transparent);
        PT.setCompositionMode(QPainter::CompositionMode_SourceOver);
        PT.end();
    } else {
        // Create a very small image to have a ptr
        DefaultSourceImage=QImage(5,5,QImage::Format_ARGB32_Premultiplied);
    }

    // Define InterleaveFrame to not compute it for each frame
    #if defined(FFMPEG)&&(FFMPEGVERSIONINT>=201)
    InterleaveFrame=(strcmp(Container->oformat->name,"avi")!=0);
    #else
    InterleaveFrame=true;
    #endif

    #ifdef Q_OS_WIN
    QThread::currentThread()->setPriority(QThread::TimeCriticalPriority);
    #endif

    for (RenderedFrame=0;Continue && (RenderedFrame<NbrFrame);RenderedFrame++) {
        // Calculate position & column
        AdjustedDuration=((Column>=0)&&(Column<Diaporama->List.count()))?Diaporama->List[Column]->GetDuration()-Diaporama->GetTransitionDuration(Column+1):0;
        if (AdjustedDuration<33) AdjustedDuration=33; // Not less than 1/30 sec

        if ((ColumnStart==-1)||(Column==-1)||((Column<Diaporama->List.count())&&((ColumnStart+AdjustedDuration)<=Position))) {
            Column++;
            AdjustedDuration=((Column>=0)&&(Column<Diaporama->List.count()))?Diaporama->List[Column]->GetDuration()-Diaporama->GetTransitionDuration(Column+1):0;
            if (AdjustedDuration<33) AdjustedDuration=33; // Not less than 1/30 sec
            ColumnStart=Diaporama->GetObjectStartPosition(Column);
            Diaporama->CloseUnusedLibAv(Column);
            if (LastCheckTime.msecsTo(QTime::currentTime())>=1000) {
                LastCheckTime=QTime::currentTime();
            }
        }

        // Get current frame
        Frame=new cDiaporamaObjectInfo(PreviousFrame,Position,Diaporama,IncreasingVideoPts,AudioStream!=NULL);
        // Ensure MusicTracks are ready
        if ((AudioStream)&&(Frame->CurrentObject)&&(Frame->CurrentObject_MusicTrack==NULL)) {
            Frame->CurrentObject_MusicTrack=new cSoundBlockList();
            Frame->CurrentObject_MusicTrack->SetFPS(IncreasingVideoPts,AudioChannels,AudioSampleRate,AV_SAMPLE_FMT_S16);
        }
        if ((AudioStream)&&(Frame->TransitObject)&&(Frame->TransitObject_MusicTrack==NULL)&&(Frame->TransitObject_MusicObject!=NULL)&&(Frame->TransitObject_MusicObject!=Frame->CurrentObject_MusicObject)) {
            Frame->TransitObject_MusicTrack=new cSoundBlockList();
            Frame->TransitObject_MusicTrack->SetFPS(IncreasingVideoPts,AudioChannels,AudioSampleRate,AV_SAMPLE_FMT_S16);
        }

        // Ensure SoundTracks are ready
        if ((AudioStream)&&(Frame->CurrentObject)&&(Frame->CurrentObject_SoundTrackMontage==NULL)) {
            Frame->CurrentObject_SoundTrackMontage=new cSoundBlockList();
            Frame->CurrentObject_SoundTrackMontage->SetFPS(IncreasingVideoPts,AudioChannels,AudioSampleRate,AV_SAMPLE_FMT_S16);
        }
        if ((AudioStream)&&(Frame->TransitObject)&&(Frame->TransitObject_SoundTrackMontage==NULL)) {
            Frame->TransitObject_SoundTrackMontage=new cSoundBlockList();
            Frame->TransitObject_SoundTrackMontage->SetFPS(IncreasingVideoPts,AudioChannels,AudioSampleRate,AV_SAMPLE_FMT_S16);
        }

        // Prepare frame (if W=H=0 then soundonly)
        if ((Frame->IsTransition)&&(Frame->TransitObject)) Diaporama->CreateObjectContextList(Frame,InternalWidth,InternalHeight,false,false,true,PreparedTransitBrushList,&FakeParentObject);
        Diaporama->CreateObjectContextList(Frame,InternalWidth,InternalHeight,true,false,true,PreparedBrushList,&FakeParentObject);
        Diaporama->LoadSources(Frame,InternalWidth,InternalHeight,false,true,PreparedTransitBrushList,PreparedBrushList,2);

        // Ensure previous Assembly was ended
        if (ThreadAssembly.isRunning()) ThreadAssembly.waitForFinished();

        // mix audio data
        if (Frame->CurrentObject_MusicTrack) {
            int MaxJ=Frame->CurrentObject_MusicTrack->NbrPacketForFPS;
            //if (MaxJ>Frame->CurrentObject_MusicTrack->ListCount()) MaxJ=Frame->CurrentObject_MusicTrack->ListCount();
            RenderMusic.Mutex.lock();
            for (int j=0;j<MaxJ;j++) {
                int16_t *Music=(((Frame->IsTransition)&&(Frame->TransitObject)&&(!Frame->TransitObject->MusicPause))||
                                (!Frame->CurrentObject->MusicPause))?Frame->CurrentObject_MusicTrack->DetachFirstPacket(true):NULL;
                int16_t *Sound=(Frame->CurrentObject_SoundTrackMontage!=NULL)?Frame->CurrentObject_SoundTrackMontage->DetachFirstPacket(true):NULL;
                RenderMusic.MixAppendPacket(Frame->CurrentObject_StartTime+Frame->CurrentObject_InObjectTime,Music,Sound,true);
            }
            RenderMusic.Mutex.unlock();
        }
        // Delete PreviousFrame used by assembly thread
        if (PreviousPreviousFrame) delete PreviousPreviousFrame;

        // Keep actual PreviousFrame for next time
        PreviousPreviousFrame=PreviousFrame;

        // If not static image then compute using threaded function
        if ((!PreviousFrame)||(PreviousFrame->RenderedImage.isNull()))
            ThreadAssembly.setFuture(QtConcurrent::run(this,&cEncodeVideo::Assembly,Frame,PreviousFrame,&RenderMusic,&ToEncodeMusic,Continue));
            else Assembly(Frame,PreviousFrame,&RenderMusic,&ToEncodeMusic,Continue);
        //Assembly+=Time.elapsed(); Time.restart();

        // Calculate next position
        if (Continue) {
            Position+=IncreasingVideoPts;
            PreviousFrame=Frame;
            Frame=NULL;
        }

        // Stop the process if error occur or user ask to stop
        Continue=Continue && !StopProcessWanted;
    }

    if (ThreadAssembly.isRunning())    ThreadAssembly.waitForFinished();
    if (ThreadEncodeAudio.isRunning()) ThreadEncodeAudio.waitForFinished();
    if (ThreadEncodeVideo.isRunning()) ThreadEncodeVideo.waitForFinished();

    #ifdef Q_OS_WIN
    QThread::currentThread()->setPriority(QThread::HighestPriority);
    #endif

    Position=-1;
    ColumnStart=0;
    AdjustedDuration=0;

    // Cleaning
    if (PreviousPreviousFrame)  delete PreviousPreviousFrame;
    if (PreviousFrame!=NULL)    delete PreviousFrame;
    if (Frame!=NULL)            delete Frame;

    CloseEncoder();

    return Continue;
}

//*************************************************************************************************************************************************

void cEncodeVideo::Assembly(cDiaporamaObjectInfo *Frame,cDiaporamaObjectInfo *PreviousFrame,cSoundBlockList *RenderMusic,cSoundBlockList *ToEncodeMusic,bool &Continue) {
    // Make final assembly
    Diaporama->DoAssembly(ComputePCT(Frame->CurrentObject?Frame->CurrentObject->GetSpeedWave():0,Frame->TransitionPCTDone),Frame,InternalWidth,InternalHeight,QTPIXFMT);

    // Ensure previous threaded encoding was ended before continuing
    if (ThreadEncodeAudio.isRunning()) ThreadEncodeAudio.waitForFinished();
    if (ThreadEncodeVideo.isRunning()) ThreadEncodeVideo.waitForFinished();

    // Write data to disk
    if ((Continue)&&(AudioStream)&&(AudioFrame))
        ThreadEncodeAudio.setFuture(QtConcurrent::run(this,&cEncodeVideo::EncodeMusic,Frame,RenderMusic,ToEncodeMusic,Continue));

    if ((Continue)&&(VideoStream)&&(VideoFrameConverter)&&(VideoFrame)) {
        QImage *Image=((PreviousFrame)&&(!PreviousFrame->IsTransition)&&(Frame->IsShotStatic)&&(!Frame->IsTransition))?NULL:&Frame->RenderedImage;
        ThreadEncodeVideo.setFuture(QtConcurrent::run(this,&cEncodeVideo::EncodeVideo,Image,Continue));
    }
}

//*************************************************************************************************************************************************

void cEncodeVideo::EncodeMusic(cDiaporamaObjectInfo *Frame,cSoundBlockList *RenderMusic,cSoundBlockList *ToEncodeMusic,bool &Continue) {
    // Transfert RenderMusic data to EncodeMusic data
    //while ((Continue)&&(RenderMusic->List.count()>0)) {
    int MaxPQ=RenderMusic->NbrPacketForFPS;
    if (MaxPQ>RenderMusic->ListCount()) MaxPQ=RenderMusic->ListCount();
    for (int PQ=0;(Continue)&&(PQ<MaxPQ);PQ++) {
        u_int8_t *PacketSound=(u_int8_t *)RenderMusic->DetachFirstPacket();
        if (PacketSound==NULL) {
            PacketSound=(u_int8_t *)av_malloc(RenderMusic->SoundPacketSize+8);
            memset(PacketSound,0,RenderMusic->SoundPacketSize);
        }
        #if defined(LIBAV) && (LIBAVVERSIONINT<=8)
            // LIBAV 0.8 => ToEncodeMusic must have exactly AudioStream->codec->frame_size data
            if ((AudioResampler!=NULL)&&(AudioResamplerBuffer!=NULL)) {
                int64_t DestNbrSamples=RenderMusic->SoundPacketSize/(RenderMusic->Channels*av_get_bytes_per_sample(RenderMusic->SampleFormat));
                int64_t DestPacketSize=audio_resample(AudioResampler,(short int*)AudioResamplerBuffer,(short int*)PacketSound,DestNbrSamples)*AudioStream->codec->channels*av_get_bytes_per_sample(AudioStream->codec->sample_fmt);
                if (DestPacketSize<=0) {
                    ToLog(LOGMSG_CRITICAL,QString("EncodeMusic: audio_resample failed"));
                    Continue=false;
                } else ToEncodeMusic->AppendData(Frame->CurrentObject_StartTime+Frame->CurrentObject_InObjectTime,(int16_t *)AudioResamplerBuffer,DestPacketSize);
            } else ToEncodeMusic->AppendData(Frame->CurrentObject_StartTime+Frame->CurrentObject_InObjectTime,(int16_t *)PacketSound,RenderMusic->SoundPacketSize);
        #else
            // LIBAV 9 AND FFMPEG => ToEncodeMusic is converted during encoding process
            ToEncodeMusic->AppendData(Frame->CurrentObject_StartTime+Frame->CurrentObject_InObjectTime,(int16_t *)PacketSound,RenderMusic->SoundPacketSize);
        #endif
        av_free(PacketSound);
    }

    int         errcode;
    int64_t     DestNbrSamples=ToEncodeMusic->SoundPacketSize/(ToEncodeMusic->Channels*av_get_bytes_per_sample(ToEncodeMusic->SampleFormat));
    int         DestSampleSize=AudioStream->codec->channels*av_get_bytes_per_sample(AudioStream->codec->sample_fmt);
    u_int8_t    *DestPacket   =NULL;
    int16_t     *PacketSound  =NULL;
    int64_t     DestPacketSize=DestNbrSamples*DestSampleSize;

    // Flush audio frame of ToEncodeMusic
    while ((Continue)&&(ToEncodeMusic->ListCount()>0)&&(!StopProcessWanted)) {
        PacketSound=ToEncodeMusic->DetachFirstPacket();
        if (PacketSound==NULL) {
            ToLog(LOGMSG_CRITICAL,QString("EncodeMusic: PacketSound==NULL"));
            Continue=false;
        } else {
            #if defined(LIBAV) && (LIBAVVERSIONINT<=8)
                DestPacket=(u_int8_t *)PacketSound;
            #elif defined(LIBAV) && (LIBAVVERSIONINT<=9)
                // LIBAV 9 => Convert sample format (is needed)
                if ((AudioResampler!=NULL)&&(AudioResamplerBuffer!=NULL)) {
                    DestPacket=AudioResamplerBuffer;
                    u_int8_t *in_data[RESAMPLE_MAX_CHANNELS]={0},*out_data[RESAMPLE_MAX_CHANNELS]={0};
                    int      in_linesize=0,out_linesize=0;
                    int      out_samples=avresample_available(AudioResampler)+av_rescale_rnd(avresample_get_delay(AudioResampler)+DestNbrSamples,AudioStream->codec->sample_rate,ToEncodeMusic->SamplingRate,AV_ROUND_UP);
                    if (av_samples_fill_arrays(in_data,&in_linesize,(u_int8_t *)PacketSound,ToEncodeMusic->Channels,DestNbrSamples,ToEncodeMusic->SampleFormat,1)<0) {
                        ToLog(LOGMSG_CRITICAL,QString("failed in_data fill arrays"));
                        Continue=false;
                    } else {
                        if (av_samples_fill_arrays(out_data,&out_linesize,AudioResamplerBuffer,AudioStream->codec->channels,out_samples,AudioStream->codec->sample_fmt,1)<0) {
                            ToLog(LOGMSG_CRITICAL,QString("failed out_data fill arrays"));
                            Continue=false;
                        } else {
                            DestPacketSize=avresample_convert(AudioResampler,out_data,out_linesize,out_samples,in_data,in_linesize,DestNbrSamples)*DestSampleSize;
                            if (DestPacketSize<=0) {
                                ToLog(LOGMSG_CRITICAL,QString("Error in avresample_convert"));
                                Continue=false;
                            }
                        }
                    }
                    DestPacket=out_data[0];
                } else DestPacket=(u_int8_t *)PacketSound;
            #elif defined(FFMPEG)
                if (AudioResampler!=NULL) {
                    int out_samples=av_rescale_rnd(swr_get_delay(AudioResampler,ToEncodeMusic->SamplingRate)+DestNbrSamples,AudioStream->codec->sample_rate,ToEncodeMusic->SamplingRate,AV_ROUND_UP);
                    av_samples_alloc(&AudioResamplerBuffer,NULL,AudioStream->codec->channels,out_samples,AudioStream->codec->sample_fmt,0);
                    if (!AudioResamplerBuffer) {
                        ToLog(LOGMSG_CRITICAL,QString("EncodeMusic: AudioResamplerBuffer allocation failed"));
                        Continue=false;
                    }
                    u_int8_t *in_data[RESAMPLE_MAX_CHANNELS]={0},*out_data[RESAMPLE_MAX_CHANNELS]={0};
                    int     in_linesize=0,out_linesize=0;
                    if (av_samples_fill_arrays(in_data,&in_linesize,(u_int8_t *)PacketSound,ToEncodeMusic->Channels,DestNbrSamples,ToEncodeMusic->SampleFormat,0)<0) {
                        ToLog(LOGMSG_CRITICAL,QString("failed in_data fill arrays"));
                        Continue=false;
                    } else {
                        if (av_samples_fill_arrays(out_data,&out_linesize,AudioResamplerBuffer,AudioStream->codec->channels,out_samples,AudioStream->codec->sample_fmt,0)<0) {
                            ToLog(LOGMSG_CRITICAL,QString("failed out_data fill arrays"));
                            Continue=false;
                        } else {
                            //DestPacketSize=swr_convert(AudioResampler,out_data,out_samples,(const u_int8_t **)&in_data,DestNbrSamples)*DestSampleSize;
                            DestPacketSize=swr_convert(AudioResampler,out_data,out_samples,(const u_int8_t **)in_data,DestNbrSamples)*DestSampleSize;
                            if (DestPacketSize<=0) {
                                ToLog(LOGMSG_CRITICAL,QString("EncodeMusic: swr_convert failed"));
                                Continue=false;
                            }
                            DestPacket=(u_int8_t *)out_data[0];
                        }
                    }
                } else DestPacket=(u_int8_t *)PacketSound;
            #endif

            if (Continue) {
                // Init AudioFrame
                AVRational AVR;

                #if (FFMPEGVERSIONINT>=220)
                    av_frame_unref(AudioFrame);
                #else
                    avcodec_get_frame_defaults(AudioFrame);
                #endif

                AVR.num                     =1;
                AVR.den                     =AudioStream->codec->sample_rate;
                AudioFrame->nb_samples      =DestPacketSize/DestSampleSize;
                AudioFrame->pts             =av_rescale_q(AudioFrame->nb_samples*AudioFrameNbr,AVR,AudioStream->time_base);
                #if (defined(LIBAV) && (LIBAVVERSIONINT>=9)) || defined(FFMPEG)
                AudioFrame->format          =AudioStream->codec->sample_fmt;
                AudioFrame->channel_layout  =AudioStream->codec->channel_layout;
                #endif

                // fill buffer
                errcode=avcodec_fill_audio_frame(AudioFrame,AudioStream->codec->channels,AudioStream->codec->sample_fmt,(const u_int8_t*)DestPacket,DestPacketSize,1);
                if (errcode>=0) {
                    // Init packet
                    AVPacket pkt;
                    av_init_packet(&pkt);
                    pkt.size=0;
                    pkt.data=NULL;

                    int got_packet=0;
                    errcode=avcodec_encode_audio2(AudioStream->codec,&pkt,AudioFrame,&got_packet);
                    if (errcode<0) {
                        char Buf[2048];
                        av_strerror(errcode,Buf,2048);
                        ToLog(LOGMSG_CRITICAL,QString("EncodeMusic: avcodec_encode_audio2() failed: ")+QString(Buf));
                        Continue=false;
                    } else if (got_packet) {
                        pkt.flags|=AV_PKT_FLAG_KEY;

                        if (AudioStream->codec->coded_frame && AudioStream->codec->coded_frame->pts!=(int64_t)AV_NOPTS_VALUE)
                            pkt.pts=av_rescale_q(AudioStream->codec->coded_frame->pts,AudioStream->codec->time_base,AudioStream->time_base);

                        // write the compressed frame in the media file
                        pkt.stream_index=AudioStream->index;

                        // Encode frame
                        Mutex.lock();
                        if (InterleaveFrame) {
                            errcode=av_interleaved_write_frame(Container,&pkt);
                        } else {
                            pkt.pts=AV_NOPTS_VALUE;
                            pkt.dts=AV_NOPTS_VALUE;
                            errcode=av_write_frame(Container,&pkt);
                        }
                        Mutex.unlock();

                        if (errcode!=0) {
                            char Buf[2048];
                            av_strerror(errcode,Buf,2048);
                            ToLog(LOGMSG_CRITICAL,QString("EncodeMusic: av_interleaved_write_frame failed: ")+QString(Buf));
                            Continue=false;
                        }
                    }

                    LastAudioPts+=IncreasingAudioPts;
                    AudioFrameNbr++;
                    //ToLog(LOGMSG_INFORMATION,QString("Audio:  Stream:%1 - Frame:%2 - PTS:%3").arg(AudioStream->index).arg(AudioFrameNbr).arg(LastAudioPts));
                } else {
                    char Buf[2048];
                    av_strerror(errcode,Buf,2048);
                    ToLog(LOGMSG_CRITICAL,QString("EncodeMusic: avcodec_fill_audio_frame() failed: ")+QString(Buf));
                    Continue=false;
                }
            }

            if ((AudioFrame->extended_data)&&(AudioFrame->extended_data!=AudioFrame->data)) {
                av_free(AudioFrame->extended_data);
                AudioFrame->extended_data=NULL;
            }

        }
        av_free(PacketSound);

        #if defined(USELIBSWRESAMPLE)
        av_free(AudioResamplerBuffer);
        AudioResamplerBuffer=NULL;
        #endif
    }

}

//*************************************************************************************************************************************************

void cEncodeVideo::EncodeVideo(QImage *SrcImage,bool &Continue) {
    QImage *Image=SrcImage;
    int     errcode;

    if (Image) {
        #if (FFMPEGVERSIONINT>=220)
            av_frame_unref(VideoFrame);
        #else
            avcodec_get_frame_defaults(VideoFrame);
        #endif
        if (avpicture_fill(
            (AVPicture *)VideoFrame,            // Frame to prepare
            VideoFrameBuf,                      // Buffer which will contain the image data
            VideoStream->codec->pix_fmt,        // The format in which the picture data is stored
            VideoStream->codec->width,          // The width of the image in pixels
            VideoStream->codec->height          // The height of the image in pixels
        )!=VideoFrameBufSize) {
            ToLog(LOGMSG_CRITICAL,"EncodeVideo-EncodeVideo: avpicture_fill() failed for VideoFrameBuf");
            return;
        }
        // Apply ExtendV
        if ((Continue)&&(!StopProcessWanted)&&(Image->height()!=VideoStream->codec->height)) {
            Image=new QImage(InternalWidth,VideoStream->codec->height,QTPIXFMT);
            QPainter P;
            P.begin(Image);
            P.fillRect(QRect(0,0,Image->width(),Image->height()),Qt::black);
            P.drawImage(0,(VideoStream->codec->height-SrcImage->height())/2,*SrcImage);
            P.end();
        }

        // Now, convert image
        if ((Continue)&&(!StopProcessWanted)) {
            #ifdef USELIBSWRESAMPLE
            u_int8_t *data={(u_int8_t *)Image->bits()};
            #else
            u_int8_t *data=(u_int8_t *)Image->bits();
            #endif
            int LineSize=Image->bytesPerLine();
            int Ret=sws_scale(
                VideoFrameConverter,    // libswscale converter
                &data,                  // Source buffer
                &LineSize,              // Source Stride ?
                0,                      // Source SliceY:the position in the source image of the slice to process, that is the number (counted starting from zero) in the image of the first row of the slice
                Image->height(),        // Source SliceH:the height of the source slice, that is the number of rows in the slice
                VideoFrame->data,       // Destination buffer
                VideoFrame->linesize    // Destination Stride
            );
            if (Ret!=Image->height()) {
                ToLog(LOGMSG_CRITICAL,"EncodeVideo-ConvertRGBToYUV: sws_scale() failed");
                Continue=false;
            }
        }
    }

    if ((VideoFrameNbr%VideoStream->codec->gop_size)==0) VideoFrame->pict_type=AV_PICTURE_TYPE_I;
        else VideoFrame->pict_type=(AVPictureType)0;
    VideoFrame->pts=VideoFrameNbr;

    if ((Continue)&&(!StopProcessWanted)) {

        AVPacket pkt;
        av_init_packet(&pkt);
        pkt.size=0;
        pkt.data=NULL;

        #if defined(LIBAV) && (LIBAVVERSIONINT<=8)
        int out_size=avcodec_encode_video(VideoStream->codec,VideoEncodeBuffer,VideoEncodeBufferSize,VideoFrame);
        if (out_size<0) {
            ToLog(LOGMSG_CRITICAL,QString("EncodeVideo: avcodec_encode_video failed"));
            Continue=false;
        } else if (out_size>0) {
            pkt.data=VideoEncodeBuffer;
            pkt.size=out_size;
            if (VideoStream->codec->coded_frame && VideoStream->codec->coded_frame->pts!=(int64_t)AV_NOPTS_VALUE)
                pkt.pts=av_rescale_q(VideoStream->codec->coded_frame->pts,VideoStream->codec->time_base,VideoStream->time_base);
        #else
        int got_packet=0;
        errcode=avcodec_encode_video2(VideoStream->codec,&pkt,VideoFrame,&got_packet);
        if (errcode!=0) {
            char Buf[2048];
            av_strerror(errcode,Buf,2048);
            ToLog(LOGMSG_CRITICAL,QString("EncodeVideo: avcodec_encode_video2 failed")+QString(Buf));
            Continue=false;
        } else if (got_packet) {
            if (pkt.dts!=(int64_t)AV_NOPTS_VALUE) pkt.dts=av_rescale_q(pkt.dts,VideoStream->codec->time_base,VideoStream->time_base);
            if (pkt.pts!=(int64_t)AV_NOPTS_VALUE) pkt.pts=av_rescale_q(pkt.pts,VideoStream->codec->time_base,VideoStream->time_base);
        #endif

            pkt.stream_index=VideoStream->index;
            if (VideoStream->codec->coded_frame && VideoStream->codec->coded_frame->key_frame) pkt.flags|=AV_PKT_FLAG_KEY;

            // Encode frame
            Mutex.lock();
            if (InterleaveFrame) {
                errcode=av_interleaved_write_frame(Container,&pkt);
            } else {
                pkt.pts=AV_NOPTS_VALUE;
                pkt.dts=AV_NOPTS_VALUE;
                errcode=av_write_frame(Container,&pkt);
            }
            Mutex.unlock();

            if (errcode!=0) {
                char Buf[2048];
                av_strerror(errcode,Buf,2048);
                ToLog(LOGMSG_CRITICAL,QString("EncodeVideo: av_interleaved_write_frame failed: ")+QString(Buf));
                Continue=false;
            }
        }

        LastVideoPts+=IncreasingVideoPts;
        VideoFrameNbr++;
        //ToLog(LOGMSG_INFORMATION,QString("Video:  Stream:%1 - Frame:%2 - PTS:%3").arg(VideoStream->index).arg(VideoFrameNbr).arg(LastVideoPts));

        if ((VideoFrame->extended_data)&&(VideoFrame->extended_data!=VideoFrame->data)) {
            av_free(VideoFrame->extended_data);
            VideoFrame->extended_data=NULL;
        }
    }
    if ((Image)&&(Image!=SrcImage)) delete Image;
}
