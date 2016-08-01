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

#ifndef CBASEMEDIAFILE_H
#define CBASEMEDIAFILE_H

// Basic inclusions (common to all files)
#include "_GlobalDefines.h"

// Include some common various class
#include "cApplicationConfig.h"

// Include some additional standard class
#include <QString>
#include <QTime>
#include <QDateTime>
#include <QImage>

#if QT_VERSION >= 0x050000
    #include <QtSvg/QtSvg>
#else
    #include <QtSvg>
#endif

// Include some common various class
#include "cDeviceModelDef.h"                // Contains Libav include
#include "cSoundBlockList.h"
#include "cCustomIcon.h"

extern bool Exiv2WithPreview;
extern int  Exiv2MajorVersion,Eviv2MinorVersion,Exiv2PatchVersion;

#if defined(LIBAV) && (LIBAVVERSIONINT<=8)
extern int TaglibMajorVersion,TaglibMinorVersion,TaglibPatchVersion;
#endif

// Utility defines and constant to manage angles
const double dPI=                           3.14159265358979323846;
#define RADIANS(a)                          (a*dPI/180)
#define DEGREES(a)                          (a*180/dPI)
#define KMTOMILES(KM)                       ((KM*0.621371192))

// Utility defines and macro used to managed GPS and Google Pixel unit
#define GPS2PIXEL_X(GPSX,ZOOMLEVEL,SCALE)   ((256*(GPSX+180)/360)*(pow(2,ZOOMLEVEL))*SCALE)
#define GPS2PIXEL_Y(GPSY,ZOOMLEVEL,SCALE)   ((256/2-log(tan((dPI/4)+RADIANS(GPSY)/2))*(256/(2*dPI)))*(pow(2,ZOOMLEVEL))*SCALE)
#define PIXEL2GPS_X(PIXELX,ZOOMLEVEL,SCALE) (((PIXELX)/(SCALE*(pow(2,ZOOMLEVEL))))*360/256-180)
#define PIXEL2GPS_Y(PIXELY,ZOOMLEVEL,SCALE) (DEGREES((atan(exp((-((PIXELY)/(SCALE*(pow(2,ZOOMLEVEL))))+256/2)/(256/(2*dPI))))-(dPI/4))*2))

// Distance computation: See wikipedia at http://fr.wikipedia.org/wiki/Distance_du_grand_cercle
#define DISTANCE(GPS0x,GPS0y,GPS1x,GPS1y)   (2*6371*asin(sqrt(pow(sin((RADIANS(GPS1y)-RADIANS(GPS0y))/2),2)+cos(RADIANS(GPS0y))*cos(RADIANS(GPS1y))*pow(sin((RADIANS(GPS1x)-RADIANS(GPS0x))/2),2))))

//============================================
// Class for exporting project
//============================================

class cReplaceObject {
public:
    QString SourceFileName;
    QString DestFileName;
    cReplaceObject(QString SourceFileName,QString DestFileName) {this->SourceFileName=SourceFileName; this->DestFileName=DestFileName;}
};

class cReplaceObjectList {
public:
    QList<cReplaceObject> List;

            cReplaceObjectList();

    void    SearchAppendObject(QString SourceFileName);
    QString GetDestinationFileName(QString SourceFileName);
};

//****************************************************************************************************************************************************************

class cBaseMediaFile {
public:
    enum    ImageSizeFmt {FULLWEB,SIZEONLY,FMTONLY,GEOONLY};

    cApplicationConfig      *ApplicationConfig;
    OBJECTTYPE              ObjectType;
    QString                 ObjectName;                     // ObjectName in XML .ffd file

    qlonglong               FileKey;                        // Key index of this file in the Files table of the database
    qlonglong               FolderKey;                      // Key index of the folder containing this file in the Folders table of the database
    qlonglong               RessourceKey;                   // Key index of this ressource in the slidethumb table of the database
    QString                 CachedFileName;                 // To speed up browser

    int64_t                 FileSize;                       // filesize
    QDateTime               CreatDateTime;                  // Original date/time
    QDateTime               ModifDateTime;                  // Last modified date/time

    int                     ImageWidth;                     // Widht of normal image
    int                     ImageHeight;                    // Height of normal image
    int                     ImageOrientation;               // EXIF ImageOrientation (or -1)
    int                     ObjectGeometry;                 // Image geometry of the embeded image or video
    double                  AspectRatio;                    // Aspect ratio

    bool                    IsValide;                       // if true if object if initialise
    bool                    IsInformationValide;            // if true if ExtendedProperties if fuly initialise in the database

    cBaseMediaFile(cApplicationConfig *ApplicationConfig);
    virtual                 ~cBaseMediaFile();

    virtual QString         FileName();
    virtual QString         ShortName();
    virtual QImage          *ImageAt(bool /*PreviewMode*/)                                                                                                      {return NULL;}

    virtual bool            LoadBasicInformationFromDatabase(QDomElement *,QString,QString,QStringList *,bool *,QList<cSlideThumbsTable::TRResKeyItem> *,bool)  {return false;}
    virtual void            SaveBasicInformationToDatabase(QDomElement *,QString,QString,bool,cReplaceObjectList *,QList<qlonglong> *,bool)                     {}
    virtual bool            LoadFromXML(QDomElement *,QString,QString,QStringList *,bool *,QList<cSlideThumbsTable::TRResKeyItem> *,bool )                      {return true;}
    virtual void            SaveToXML(QDomElement *,QString,QString,bool,cReplaceObjectList *,QList<qlonglong> *,bool)                                          {}

    virtual bool            LoadAnalyseSound(QList<qreal> *Peak,QList<qreal> *Moyenne);
    virtual void            SaveAnalyseSound(QList<qreal> *Peak,QList<qreal> *Moyenne,qreal MaxMoyenneValue);

    virtual void            Reset();
    virtual bool            GetInformationFromFile(QString GivenFileName,QStringList *AliasList,bool *ModifyFlag,qlonglong FolderKey=-1);
    virtual bool            CheckFormatValide(QWidget *)                                                                                                        {return true;}
    virtual bool            GetFullInformationFromFile(bool IsPartial=false);
    virtual bool            GetChildFullInformationFromFile(bool,cCustomIcon *,QStringList *)                                                                   {return true;}

    // return information from basic properties
    virtual QImage          *GetDefaultTypeIcon(cCustomIcon::IconSize) {return NULL;}
    virtual QString         GetFileDateTimeStr(bool Created=false);             // Return file date/time as formated string
    virtual QString         GetFileSizeStr();                                   // Return file size as formated string
    virtual QString         GetImageSizeStr(ImageSizeFmt Fmt=FULLWEB);          // Return image size as formated string
    virtual QString         GetImageGeometryStr();                              // Return image geometry as formated string
    virtual QString         GetFileTypeStr()                {return "";}        // Return type of file

    // return information from extended properties
    virtual QStringList     GetSummaryText(QStringList *ExtendedProperties);    // return 3 lines to display Summary of media file in dialog box which need them
    virtual QString         GetTechInfo(QStringList *)      {return "";}        // Return technical information as formated string
    virtual QString         GetTAGInfo(QStringList *)       {return "";}        // Return TAG information as formated string

    // return icon
    virtual QImage          GetIcon(cCustomIcon::IconSize Size,bool useDelayed);

public:
    QTime   RealAudioDuration;              // Real duration of audio
    QTime   RealVideoDuration;              // Real duration of video
    QTime   GivenDuration;                  // Duration as given by libav/ffmpeg
    qreal   SoundLevel;                     // Sound level

public:
    bool    IsComputedAudioDuration;             // True if audio duration was computed
    bool    IsComputedVideoDuration;             // True if video duration was computed

    QTime   GetRealDuration();
    QTime   GetRealAudioDuration();
    QTime   GetRealVideoDuration();
    QTime   GetGivenDuration();
    void    SetGivenDuration(QTime GivenDuration);
    void    SetRealAudioDuration(QTime RealDuration);
    void    SetRealVideoDuration(QTime RealDuration);
    qreal   GetSoundLevel()                         { return SoundLevel;        }
    void    SetSoundLevel(qreal TheSoundLevel)      { SoundLevel=TheSoundLevel; }
};

//*********************************************************************************************************************************************
// Unmanaged file
//*********************************************************************************************************************************************
class cUnmanagedFile : public cBaseMediaFile {
public:
    explicit cUnmanagedFile(cApplicationConfig *ApplicationConfig);

    virtual QString         GetFileTypeStr();
    virtual bool            LoadBasicInformationFromDatabase(QDomElement *,QString,QString,QStringList *,bool *,QList<cSlideThumbsTable::TRResKeyItem> *,bool)  { return true;}
    virtual void            SaveBasicInformationToDatabase(QDomElement *,QString,QString,bool,cReplaceObjectList *,QList<qlonglong> *,bool)                     { /*Nothing to do*/}
    virtual QImage          *GetDefaultTypeIcon(cCustomIcon::IconSize Size)                                                                                     { return ApplicationConfig->DefaultFILEIcon.GetIcon(Size); }
    virtual QString         GetTechInfo(QStringList *)                                                                                                          { return ""; }
    virtual QString         GetTAGInfo(QStringList *)                                                                                                           { return ""; }
};

//*********************************************************************************************************************************************
// Folder
//*********************************************************************************************************************************************
class cFolder : public cBaseMediaFile {
public:
    explicit cFolder(cApplicationConfig *ApplicationConfig);

    virtual QString         GetFileTypeStr();
    virtual bool            LoadBasicInformationFromDatabase(QDomElement *,QString,QString,QStringList *,bool *,QList<cSlideThumbsTable::TRResKeyItem> *,bool)  { return true;}
    virtual void            SaveBasicInformationToDatabase(QDomElement *,QString,QString,bool,cReplaceObjectList *,QList<qlonglong> *,bool)                     { /*Nothing to do*/}
    virtual bool            GetChildFullInformationFromFile(bool IsPartial,cCustomIcon *Icon,QStringList *ExtendedProperties);
    virtual QImage          *GetDefaultTypeIcon(cCustomIcon::IconSize Size)                                                                                     { return ApplicationConfig->DefaultFOLDERIcon.GetIcon(Size); }
    virtual QString         GetTechInfo(QStringList *)                                                                                                          { return ""; }
    virtual QString         GetTAGInfo(QStringList *)                                                                                                           { return ""; }
};

//*********************************************************************************************************************************************
// ffDiaporama project file
//*********************************************************************************************************************************************
class cffDProjectFile : public cBaseMediaFile {
public:
    // TAG values
    QString     Title;              // 30 or 200 char depending on ID3V2 compatibility option
    QString     Author;             // 30 or 200 char depending on ID3V2 compatibility option
    QString     Album;              // 30 or 200 char depending on ID3V2 compatibility option
    QDate       EventDate;
    bool        OverrideDate;
    QString     LongDate;           // Project dates
    QString     Comment;            // Free text - free size
    QString     Composer;           // ffDiaporama version
    int         NbrSlide;           // (Number of slide in project)
    QString     ffDRevision;        // ffD Application version (in reverse date format)
    QString     DefaultLanguage;    // Default Language (ISO 639 language code)
    int         NbrChapters;        // Number of chapters in the file
    QStringList ChaptersProperties; // Properties of chapters
    void        *Location;          // a link to a cLocation object

    explicit                cffDProjectFile(cApplicationConfig *ApplicationConfig);
                            ~cffDProjectFile();

    void                    InitDefaultValues();

    virtual void            SetRealDuration(QTime RealDuration) { SetRealAudioDuration(RealDuration); } // Special case for project : audioduration is project duration
    virtual QString         GetFileTypeStr();
    virtual bool            LoadBasicInformationFromDatabase(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,QStringList *AliasList,bool *ModifyFlag,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes);
    virtual void            SaveBasicInformationToDatabase(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel);
    virtual bool            GetChildFullInformationFromFile(bool IsPartial,cCustomIcon *Icon,QStringList *ExtendedProperties);
    virtual QImage          *GetDefaultTypeIcon(cCustomIcon::IconSize Size) { return ApplicationConfig->DefaultFFDIcon.GetIcon(Size); }

    virtual QString         GetTechInfo(QStringList *ExtendedProperties);
    virtual QString         GetTAGInfo(QStringList *ExtendedProperties);

    void                    SaveToXML(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel);
    bool                    LoadFromXML(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,QStringList *AliasList,bool *ModifyFlag,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes,bool IsPartial);
};

//*********************************************************************************************************************************************
// Image file
//*********************************************************************************************************************************************
class cImageFile : public cBaseMediaFile {
public:
    bool                    NoExifData;

    explicit                cImageFile(cApplicationConfig *ApplicationConfig);
                            ~cImageFile();

    virtual bool            CheckFormatValide(QWidget *Window);
    virtual bool            GetInformationFromFile(QString GivenFileName,QStringList *AliasList,bool *ModifyFlag,qlonglong FolderKey);
    virtual QImage          *ImageAt(bool PreviewMode);
    virtual QString         GetFileTypeStr();
    virtual bool            LoadBasicInformationFromDatabase(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,QStringList *AliasList,bool *ModifyFlag,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes);
    virtual void            SaveBasicInformationToDatabase(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel);
    virtual bool            GetChildFullInformationFromFile(bool IsPartial,cCustomIcon *Icon,QStringList *ExtendedProperties);
    virtual QImage          *GetDefaultTypeIcon(cCustomIcon::IconSize Size) { return (ObjectType==OBJECTTYPE_THUMBNAIL?ApplicationConfig->DefaultThumbIcon:ApplicationConfig->DefaultIMAGEIcon).GetIcon(Size); }
    virtual QString         GetTechInfo(QStringList *ExtendedProperties);
    virtual QString         GetTAGInfo(QStringList *ExtendedProperties);
};

//*********************************************************************************************************************************************
// Google maps map
//*********************************************************************************************************************************************
class cImageClipboard : public cImageFile {
public:
    explicit                cImageClipboard(cApplicationConfig *ApplicationConfig);
                            ~cImageClipboard();

    virtual QString         FileName()                                      { return QString(":/img/%1").arg(RessourceKey); }
    virtual QString         ShortName()                                     { return QString(":/img/%1").arg(RessourceKey); }
    virtual QString         GetFileTypeStr()                                { return QApplication::translate("cBaseMediaFile","Image from clipboard","File type"); }
    virtual QImage          *GetDefaultTypeIcon(cCustomIcon::IconSize Size) { return ApplicationConfig->DefaultIMAGEIcon.GetIcon(Size); }

    virtual bool            GetInformationFromFile(QString GivenFileName,QStringList *AliasList,bool *ModifyFlag,qlonglong FolderKey);
    virtual bool            LoadBasicInformationFromDatabase(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,QStringList *AliasList,bool *ModifyFlag,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes);
    virtual void            SaveBasicInformationToDatabase(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel);
    virtual bool            GetChildFullInformationFromFile(bool IsPartial,cCustomIcon *Icon,QStringList *ExtendedProperties);
    virtual QStringList     GetSummaryText(QStringList *ExtendedProperties);   // return 3 lines to display Summary of media file in dialog box which need them

    virtual bool            LoadFromXML(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,QStringList *AliasList,bool *ModifyFlag,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes);
    virtual void            SaveToXML(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel);
};

//*********************************************************************************************************************************************
// Google maps map
//*********************************************************************************************************************************************

class cGMapsMap : public cImageClipboard {
public:
    static const int SectionWith   =640;    // With of a section
    static const int SectionHeight =600;    // Height of a section

    struct RequestSection {
        QRectF  Rect;                       // Portion of the destination image where this section is
        QString GoogleRequest;              // Google request to create this portion
    };

    QList<void *>           List;           // List of location (should be QList<cLocation *> but use void* because of .h chain)
    QList<RequestSection>   RequestList;    // List of pending Google requests to be used to create the map (if the list is empty then the map is fully created)
    int                     ZoomLevel;      // Google Zoom level of the actual map
    int                     Scale;          // Google Scale level of the actual map
    double                  MapCx;          // Center X position of the actual map in Google pixel unit
    double                  MapCy;          // Center Y position of the actual map in Google pixel unit
    bool                    IsMapValide;    // True if map was succesfully generated

    enum GMapsMapType {
        Roadmap,
        Satellite,
        Terrain,
        Hybrid,
        GMapsMapType_NBR
    } MapType;                              // Type of the map

    enum GMapsImageSize {
        Small,              // 640x360 (half 720p)
        FS720P,             // 1280x720
        FS720X4,            // 2560x1440
        FS720X9,            // 3840x2160
        FS1080P,            // 1920x1080
        FS1080X4,           // 3840x2160
        FS1080X9,           // 5760x3240
        GMapsImageSize_NBR
    } ImageSize;                            // Image size of the map

    explicit                cGMapsMap(cApplicationConfig *ApplicationConfig);
                            ~cGMapsMap();

    virtual void            SaveToXML(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel);

    virtual QString         GetFileTypeStr()                                { return QApplication::translate("cBaseMediaFile","Google Maps map","File type"); }
    virtual QImage          *GetDefaultTypeIcon(cCustomIcon::IconSize Size) { return ApplicationConfig->DefaultGMapsIcon.GetIcon(Size); }

    virtual QImage          *ImageAt(bool PreviewMode);

    virtual bool            GetInformationFromFile(QString GivenFileName,QStringList *AliasList,bool *ModifyFlag,qlonglong FolderKey);
    virtual bool            LoadBasicInformationFromDatabase(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,QStringList *AliasList,bool *ModifyFlag,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes);
    virtual void            SaveBasicInformationToDatabase(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel);
    virtual bool            GetChildFullInformationFromFile(bool IsPartial,cCustomIcon *Icon,QStringList *ExtendedProperties);
    virtual QString         GetTechInfo(QStringList *ExtendedProperties);
    virtual QString         GetTAGInfo(QStringList *ExtendedProperties);
    virtual QStringList     GetSummaryText(QStringList *ExtendedProperties);   // return 3 lines to display Summary of media file in dialog box which need them

    virtual QStringList     GetGoogleMapTypeNames();
    virtual QStringList     GetMapTypeNames();
    virtual QStringList     GetImageSizeNames();
    virtual QStringList     GetShortImageSizeNames();

    virtual QString         GetCurrentGoogleMapTypeName();
    virtual QString         GetCurrentMapTypeName();

    virtual QString         GetCurrentImageSizeName(bool Full=true);
    virtual QSize           GetCurrentImageSize();

    virtual QImage          CreateDefaultImage(cDiaporama *Diaporama);  // Create a new empty image (to be fill by requests to Google)
    virtual int             ComputeNbrSection(int Size,int Divisor);    // Compute number of sections needed to create map for current image size
    virtual void            ComputeSectionList();                       // Create sections to request to Google

    virtual QStringList     GetMapSizesPerZoomLevel();                  // Compute Map Size for each Google Maps zoomlevel
    virtual QPoint          GetLocationPoint(int Index);

private:
    virtual QRectF          GetGPSRectF();                              // Return rectangle needed to handle all locations in GPS unit
    virtual QRectF          GetPixRectF();                              // Return rectangle needed to handle all locations in Google pixel unit
    virtual int             GetMinZoomLevelForSize();                   // Return minimum zoom level depending on current image size
};

//*********************************************************************************************************************************************
// Video file
//*********************************************************************************************************************************************
extern int MAXCACHEIMAGE;

class cImageInCache {
public:
    int64_t     Position;
    AVFrame     *FiltFrame,*FrameBufferYUV;
    cImageInCache(int64_t Position,AVFrame *FiltFrame,AVFrame *FrameBufferYUV);
    ~cImageInCache();
};

class cVideoFile : public cBaseMediaFile {
public:
    bool                    IsOpen;                             // True if Libav open on this file
    bool                    MusicOnly;                          // True if object is a music only file
    bool                    IsVorbis;                           // True if vorbis version must be use instead of MP3/WAV version
    bool                    IsMTS;                              // True if file is a MTS file
    QTime                   StartPos;                           // Start position
    QTime                   EndPos;                             // End position
    QString                 Container;                          // Container type (get from file extension)
    QString                 VideoCodecInfo;
    QString                 AudioCodecInfo;
    int                     NbrChapters;                        // Number of chapters in the file
    int64_t                 LibavStartTime;                     // copy of the start_time information from the libavfile
    int64_t                 LastAudioReadedPosition;            // Use to keep the last readed position to determine if a seek is needed
    int64_t                 LastVideoReadedPosition;            // Use to keep the last readed position to determine if a seek is needed

    // Video part
    int                     VideoStreamNumber;                  // Number of the video stream
    int                     VideoTrackNbr;                      // Number of video stream in file
    QImage                  LastImage;                          // Keep last image return
    QList<cImageInCache *>  CacheImage;

    int                     SeekErrorCount;

    // Audio part
    int                     AudioStreamNumber;                  // Number of the audio stream
    int                     AudioTrackNbr;                      // Number of audio stream in file

    explicit                cVideoFile(cApplicationConfig *ApplicationConfig);
                            ~cVideoFile();
    virtual void            Reset(OBJECTTYPE TheWantedObjectType);

    virtual qreal           GetFPSDuration();
    virtual QString         GetFileTypeStr();
    virtual bool            LoadBasicInformationFromDatabase(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,QStringList *AliasList,bool *ModifyFlag,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes);
    virtual void            SaveBasicInformationToDatabase(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel);
    virtual bool            CheckFormatValide(QWidget *);
    virtual bool            GetChildFullInformationFromFile(bool IsPartial,cCustomIcon *Icon,QStringList *ExtendedProperties);
    virtual QImage          *GetDefaultTypeIcon(cCustomIcon::IconSize Size);

    virtual QString         GetTechInfo(QStringList *ExtendedProperties);
    virtual QString         GetTAGInfo(QStringList *ExtendedProperties);
    virtual bool            DoAnalyseSound(QList<qreal> *Peak,QList<qreal> *Moyenne,bool *IsAnalysed,qreal *Analysed);

    virtual int             getThreadFlags(AVCodecID ID);

    virtual bool            OpenCodecAndFile();
    virtual void            CloseCodecAndFile();

    virtual QImage          *ImageAt(bool PreviewMode,int64_t Position,cSoundBlockList *SoundTrackMontage,bool Deinterlace,double Volume,bool ForceSoundOnly,bool DontUseEndPos,int NbrDuration=2);
    virtual QImage          *ReadFrame(bool PreviewMode,int64_t Position,bool DontUseEndPos,bool Deinterlace,cSoundBlockList *SoundTrackBloc,double Volume,bool ForceSoundOnly,int NbrDuration=2);
    virtual QImage          *ConvertYUVToRGB(bool PreviewMode,AVFrame *Frame);

    virtual bool            SeekFile(AVStream *VideoStream,AVStream *AudioStream,int64_t Position);
    virtual void            CloseResampler();
    virtual void            CheckResampler(int RSC_InChannels,int RSC_OutChannels,AVSampleFormat RSC_InSampleFmt,AVSampleFormat RSC_OutSampleFmt,int RSC_InSampleRate,int RSC_OutSampleRate
                                                #if (defined(LIBAV)&&(LIBAVVERSIONINT>=9)) || defined(FFMPEG)
                                                   ,uint64_t RSC_InChannelLayout,uint64_t RSC_OutChannelLayout
                                                #endif
                                          );
    virtual u_int8_t        *Resample(AVFrame *Frame,int64_t *SizeDecoded,int DstSampleSize);

    //*********************
    // video filters part
    //*********************
    AVFilterGraph           *VideoFilterGraph;
    AVFilterContext         *VideoFilterIn;
    AVFilterContext         *VideoFilterOut;

    virtual int             VideoFilter_Open();
    virtual void            VideoFilter_Close();
    #if defined(LIBAV) || (FFMPEGVERSIONINT<201)
        virtual int         VideoFilter_Process();
    #endif

protected:
    AVFormatContext         *LibavAudioFile,*LibavVideoFile;    // LibAVFormat contexts
    AVCodec                 *VideoDecoderCodec;                 // Associated LibAVCodec for video stream
    AVCodec                 *AudioDecoderCodec;                 // Associated LibAVCodec for audio stream
    AVFrame                 *FrameBufferYUV;
    bool                    FrameBufferYUVReady;        // true if FrameBufferYUV is ready to convert
    int64_t                 FrameBufferYUVPosition;     // If FrameBufferYUV is ready to convert then keep FrameBufferYUV position

    // Audio resampling
    #if defined(LIBAV) && (LIBAVVERSIONINT<=8)
    ReSampleContext         *RSC;
    #elif defined(LIBAV) && (LIBAVVERSIONINT<=9)
    AVAudioResampleContext  *RSC;
    uint64_t                RSC_InChannelLayout,RSC_OutChannelLayout;
    #elif defined(FFMPEG)
    SwrContext              *RSC;
    uint64_t                RSC_InChannelLayout,RSC_OutChannelLayout;
    #endif
    int                     RSC_InChannels,RSC_OutChannels;
    int                     RSC_InSampleRate,RSC_OutSampleRate;
    AVSampleFormat          RSC_InSampleFmt,RSC_OutSampleFmt;

private:
    struct sAudioContext {
        AVStream        *AudioStream;
        cSoundBlockList *SoundTrackBloc;
        int64_t         FPSSize;
        int64_t         FPSDuration;
        int64_t         DstSampleSize;
        bool            DontUseEndPos;
        double          *dEndFile;
        int             NbrDuration;
        double          TimeBase;
        bool            NeedResampling;
        int64_t         AudioLenDecoded;
        int             Counter;
        double          AudioFramePosition;
        double          Volume;
        bool            ContinueAudio;
    };
private slots:
    void DecodeAudio(sAudioContext *AudioContext,AVPacket *StreamPacket,int64_t Position);
    void DecodeAudioFrame(sAudioContext *AudioContext,qreal *FramePts,AVFrame *Frame,int64_t Position);
};

//*********************************************************************************************************************************************
// Music file
//*********************************************************************************************************************************************

class cMusicObject : public cVideoFile {
public:
    double                  Volume;                 // Volume as % from 10% to 150%
    bool                    AllowCredit;            // if true, this music will appear in credit title
    int64_t                 ForceFadIn;             // Fad-IN duration on sound part (or 0 if none)
    int64_t                 ForceFadOut;            // Fad-OUT duration on sound part (or 0 if none)

    cMusicObject(cApplicationConfig *ApplicationConfig);

    virtual bool            CheckFormatValide(QWidget *);
    void                    SaveToXML(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel);
    bool                    LoadFromXML(QDomElement *ParentElement,QString ElementName,QString PathForRelativPath,QStringList *AliasList,bool *ModifyFlag);
    QTime                   GetDuration();
    qreal                   GetFading(int64_t Position,bool SlideHaveFadIn,bool SlideHaveFadOut);
};

#endif // CBASEMEDIAFILE_H
