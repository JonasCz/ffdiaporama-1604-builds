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

#ifndef cApplicationConfig_H
#define cApplicationConfig_H

// Basic inclusions (common to all files)
#include "_GlobalDefines.h"
#include "cBaseAppConfig.h"

// Include some additional standard class
#include <QString>
#include <QStringList>
#include <QWidget>
#include <QTranslator>
#include <QDomElement>
#include <QDomDocument>
#include <QMainWindow>
#include <QNetworkReply>
#include <QNetworkAccessManager>

// Include some common various class
#include "cSaveWindowPosition.h"
#include "cCustomIcon.h"
#include "cDeviceModelDef.h"
#include "cDriveList.h"
#include "_StyleDefinitions.h"
#include "cSpeedWave.h"
#include "_Transition.h"
#include "_Model.h"

#if defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
    bool SearchRasterMode();
#endif

//============================================

// Define possible values for images geometry
#define IMAGE_GEOMETRY_UNKNOWN                  0   // undefined image geometry
#define IMAGE_GEOMETRY_3_2                      1   // Standard 3:2 landscape image
#define IMAGE_GEOMETRY_2_3                      2   // Standard 3:2 portrait image
#define IMAGE_GEOMETRY_4_3                      3   // Standard 4:3 landscape image
#define IMAGE_GEOMETRY_3_4                      4   // Standard 4:3 portrait image
#define IMAGE_GEOMETRY_16_9                     5   // Standard 16:9 landscape image
#define IMAGE_GEOMETRY_9_16                     6   // Standard 16:9 portrait image
#define IMAGE_GEOMETRY_40_17                    7   // Standard cinema landscape image
#define IMAGE_GEOMETRY_17_40                    8   // Standard cinema portrait image

//============================================

// Media filtering constant
#define FILTERALLOW_OBJECTTYPE_UNMANAGED        0x0001
#define FILTERALLOW_OBJECTTYPE_MANAGED          0x0002
#define FILTERALLOW_OBJECTTYPE_FOLDER           0x0004
#define FILTERALLOW_OBJECTTYPE_FFDFILE          0x0008
#define FILTERALLOW_OBJECTTYPE_IMAGEFILE        0x0010
#define FILTERALLOW_OBJECTTYPE_VIDEOFILE        0x0020
#define FILTERALLOW_OBJECTTYPE_MUSICFILE        0x0040
#define FILTERALLOW_OBJECTTYPE_IMAGEVECTOR      0x0080
#define FILTERALLOW_OBJECTTYPE_THUMBNAIL        0x0100
#define FILTERALLOW_OBJECTTYPE_MEDIAFILES       FILTERALLOW_OBJECTTYPE_IMAGEFILE|FILTERALLOW_OBJECTTYPE_IMAGEVECTOR|FILTERALLOW_OBJECTTYPE_VIDEOFILE
#define FILTERALLOW_OBJECTTYPE_ALL              0xffff

// Multimedia file explorer allowed display mode
#define DISPLAY_DATA                            0
#define DISPLAY_ICON100                         1

// Multimedia file explorer thumbs size
#define Image_ThumbWidth                        300
#define Image_ThumbHeight                       200
#define Music_ThumbWidth                        200
#define Music_ThumbHeight                       200
#define Video_ThumbWidth                        162
#define Video_ThumbHeight                       216

// Minimum height of EXIF preview image for use it
#define MinimumEXIFHeight                       100

//============================================

// Mainwindow display mode
#define DISPLAYWINDOWMODE_PLAYER                0
#define DISPLAYWINDOWMODE_PARTITION             1
#define DISPLAYWINDOWMODE_BROWSER               2

// Mainwindow display size of thumbnails in timeline
#define TIMELINEMINHEIGH                        144                 // min heigh of montage track =(32+4)*4
#define TIMELINEMAXHEIGH                        224                 // max heigh of montage track (min height+4x20 pixels)

//============================================

// Composition type definition
#define COMPOSITIONTYPE_BACKGROUND          0
#define COMPOSITIONTYPE_OBJECT              1
#define COMPOSITIONTYPE_SHOT                2

//============================================

// Define possible values for images type
#define IMAGETYPE_UNKNOWN                   0
#define IMAGETYPE_PHOTOLANDSCAPE            1
#define IMAGETYPE_PHOTOPORTRAIT             2
#define IMAGETYPE_CLIPARTLANDSCAPE          3   // Cliparts are images less than 1920x1080
#define IMAGETYPE_CLIPARTPORTRAIT           4
#define IMAGETYPE_VIDEOLANDSCAPE            5
#define IMAGETYPE_VIDEOPORTRAIT             6
#define NBR_IMAGETYPE                       7

//============================================

// Brush Auto Framing definition
#define AUTOFRAMING_CUSTOMUNLOCK            0
#define AUTOFRAMING_CUSTOMLOCK              1
#define AUTOFRAMING_CUSTOMIMGLOCK           2
#define AUTOFRAMING_CUSTOMPRJLOCK           3
#define AUTOFRAMING_FULLMAX                 4
#define AUTOFRAMING_FULLMIN                 5
#define AUTOFRAMING_HEIGHTLEFTMAX           6
#define AUTOFRAMING_HEIGHTLEFTMIN           7
#define AUTOFRAMING_HEIGHTMIDLEMAX          8
#define AUTOFRAMING_HEIGHTMIDLEMIN          9
#define AUTOFRAMING_HEIGHTRIGHTMAX          10
#define AUTOFRAMING_HEIGHTRIGHTMIN          11
#define AUTOFRAMING_WIDTHTOPMAX             12
#define AUTOFRAMING_WIDTHTOPMIN             13
#define AUTOFRAMING_WIDTHMIDLEMAX           14
#define AUTOFRAMING_WIDTHMIDLEMIN           15
#define AUTOFRAMING_WIDTHBOTTOMMAX          16
#define AUTOFRAMING_WIDTHBOTTOMMIN          17
#define NBR_AUTOFRAMING                     18

#define AUTOFRAMING_ICON_GEOMETRY_LOCKED    ":/img/Geometry_Lock.png"
#define AUTOFRAMING_ICON_GEOMETRY_UNLOCKED  ":/img/Geometry_Unlock.png"
#define AUTOFRAMING_ICON_GEOMETRY_PROJECT   ":/img/Geometry_ProjectLock.png"
#define AUTOFRAMING_ICON_GEOMETRY_IMAGE     ":/img/Geometry_ImageLock.png"

#define AUTOFRAMING_GEOMETRY_CUSTOM         0
#define AUTOFRAMING_GEOMETRY_PROJECT        1
#define AUTOFRAMING_GEOMETRY_IMAGE          2

//============================================

#define RULER_HORIZ_SCREENBORDER    0x0001
#define RULER_HORIZ_TVMARGIN        0x0002
#define RULER_HORIZ_SCREENCENTER    0x0004
#define RULER_HORIZ_UNSELECTED      0x0008
#define RULER_VERT_SCREENBORDER     0x0010
#define RULER_VERT_TVMARGIN         0x0020
#define RULER_VERT_SCREENCENTER     0x0040
#define RULER_VERT_UNSELECTED       0x0080
#define RULER_DEFAULT               RULER_HORIZ_SCREENBORDER|RULER_HORIZ_TVMARGIN|RULER_HORIZ_SCREENCENTER|RULER_HORIZ_UNSELECTED|RULER_VERT_SCREENBORDER|RULER_VERT_TVMARGIN|RULER_VERT_SCREENCENTER|RULER_VERT_UNSELECTED
#define RULER_THUMB_DEFAULT         RULER_HORIZ_SCREENBORDER|RULER_HORIZ_SCREENCENTER|RULER_HORIZ_UNSELECTED|RULER_VERT_SCREENBORDER|RULER_VERT_SCREENCENTER|RULER_VERT_UNSELECTED

//============================================

#define AUTOCOMPOSIZE_CUSTOM                0
#define AUTOCOMPOSIZE_REALSIZE              1
#define AUTOCOMPOSIZE_FULLSCREEN            2
#define AUTOCOMPOSIZE_TVMARGINS             3
#define AUTOCOMPOSIZE_TWOTHIRDSSCREEN       4
#define AUTOCOMPOSIZE_HALFSCREEN            5
#define AUTOCOMPOSIZE_THIRDSCREEN           6
#define AUTOCOMPOSIZE_QUARTERSCREEN         7

//============================================
// OnOffFilter mask definition
//============================================

#define FilterEqualize                      0x0001
#define FilterDespeckle                     0x0002
#define FilterGray                          0x0004
#define FilterNegative                      0x0008
#define FilterEmboss                        0x0010
#define FilterEdge                          0x0020
#define FilterAntialias                     0x0040
#define FilterNormalize                     0x0080
#define FilterCharcoal                      0x0100
#define FilterOil                           0x0200

//============================================
// Last folder used and browser settings
//============================================

enum BROWSER_TYPE_ID {
    BROWSER_TYPE_MainWindow,
    BROWSER_TYPE_IMAGEONLY,
    BROWSER_TYPE_IMAGEVECTOR,
    BROWSER_TYPE_VIDEOONLY,
    BROWSER_TYPE_SOUNDONLY,
    BROWSER_TYPE_MEDIAFILES,

    BROWSER_TYPE_PROJECT,
    BROWSER_TYPE_EXPORT,
    BROWSER_TYPE_RENDERVIDEO,
    BROWSER_TYPE_RENDERAUDIO,
    BROWSER_TYPE_CAPTUREIMAGE,
    BROWSER_TYPE_ICONLOCATION,

    BROWSER_TYPE_NBR
};

struct sBrowserTypeDef {
    char        BROWSERString[20];
    QString     *DefaultPath;                               // ptr to DefaultPath string
    int         SortFile;                                   // Sort order for file insertion and file display in browser
    bool        ShowFoldersFirst;                           // If true, display folders at first in table list
    bool        ShowHiddenFilesAndDir;                      // If true, hidden files will be show
    bool        ShowMntDrive;                               // If true, show drives under /mnt/ [Linux only]
    int         AllowedFilter;
    int         CurrentFilter;                              // Currently selected filter
    int         CurrentMode;                                // Currently selected display mode
    bool        DisplayFileName;                            // If true Display File Name in icon views
};
extern struct sBrowserTypeDef BrowserTypeDef[BROWSER_TYPE_NBR];

//============================================
// Sort order of files definition
//============================================

enum SORTORDER_ID {
    SORTORDER_BYNUMBER,
    SORTORDER_BYNAME,
    SORTORDER_BYDATE
};

//====================================================================================================================

struct sDefaultBlockCoord {
    int     AutoCompo;
    int     AutoFraming;
};

//====================================================================================================================
// Utility class to download locale files
//====================================================================================================================

#define DOWNLOADTIMEOUT 30000

class cApplicationConfig;
class DownloadObject : public QObject {
Q_OBJECT
public:
    cApplicationConfig  *ApplicationConfig;
    bool                    Status;
    QNetworkReply           *GetNewtorkDataReply;
    QByteArray              NetworkData;
    QString                 NetworkDataFileName;
    QNetworkAccessManager   *NetworkManager;
    QEventLoop              *loop;
    QTimer                  TimeOutTimer;

    explicit                DownloadObject(QString FileName,QObject *parent);
                            ~DownloadObject();

private slots:
    void                    httpGetDataFinished();
    void                    httpGetDataReadyRead();
};

//====================================================================================================================
// Application config class
//====================================================================================================================

class HelpPopup;
class cApplicationConfig : public cBaseAppConfig {
Q_OBJECT
public:
    QMainWindow             *TopLevelWindow;                            // Link to MainWindow of the application
    cDeviceModelList        DeviceModelList;                            // List of known rendering device model
    cDriveList              *DriveList;                                 // Drive list for multimedia file explorer
    QString                 AllowedWEBLanguage;
    HelpPopup               *PopupHelp;

    // Models
    cModelList              *ThumbnailModels;
    int64_t                 ThumbnailModelsNextNumber;

    cModelList              *PrjTitleModels[3][MODELTYPE_PROJECTTITLE_CATNUMBER];
    int64_t                 PrjTitleModelsNextNumber[3];
    cModelList              *CptTitleModels[3][MODELTYPE_CHAPTERTITLE_CATNUMBER];
    int64_t                 CptTitleModelsNextNumber[3];
    cModelList              *CreditTitleModels[3][MODELTYPE_CREDITTITLE_CATNUMBER];
    int64_t                 CreditTitleModelsNextNumber[3];

    // Preferences
    bool                    OpenWEBNewVersion;                          // Offer to open the download Web page when a new version is available
    bool                    RasterMode;                                 // Enable or disable raster mode [Linux only]
    bool                    RestoreWindow;                              // If true, restore window state and position at startup
    bool                    RememberLastDirectories;                    // If true, Remember all directories for future use
    bool                    DisableTooltips;                            // If true, tooltips are disable in dialog boxes
    bool                    AskUserToRemove;                            // If true, user must answer to a confirmation dialog box to remove slide
    bool                    PartitionMode;                              // If true, partition mode is on
    int                     WindowDisplayMode;
    bool                    WikiFollowInterface;                        // If true Wiki follow the interface
    bool                    UseNetworkProxy;                            // If true use a proxy to access to internet
    QString                 NetworkProxy;                               // Network proxy address
    int                     NetworkProxyPort;                           // Network proxy port
    QString                 NetworkProxyUser,NetworkProxyPWD;           // Network proxy login/pwd

    // Editor options
    bool                    AppendObject;                               // If true, new object will be append at the end of the diaporama, if false, new object will be insert after current position
    int                     DisplayUnit;                                // Display coordinates unit
    int                     DefaultFraming;                             // 0=Width, 1=Height
    int                     TimelineHeight;                             // Height of the timeline
    int                     SlideRuler;                                 // rulers for slide properties dialog box
    int                     ThumbRuler;                                 // rulers for thumbnail tab in project properties dialog box
    bool                    FramingRuler;                               // ruler for framing/correction dialog box

    // Preview setting
    double                  PreviewFPS;                                 // Preview FrameRate
    int64_t                 PreviewSamplingRate;                        // Sampling rate (frequency) for preview
    int                     MaxVideoPreviewHeight;
    qreal                   PreviewSoundVolume;

    // Other
    bool                    Crop1088To1080;                             // Automaticaly crop video from 1088 lines to 1080 (CANON)
    bool                    Deinterlace;                                // Automaticaly activate deinterlace filter when add new MTS videos
    bool                    CheckConfigAtStartup;                       // If true, check config at startup

    cStyleCollection        StyleTextCollection;                        // List of known text style
    cStyleCollection        StyleTextBackgroundCollection;              // List of known background text style
    cStyleCollection        StyleBlockShapeCollection;                  // List of known BlockShapestyle

    // Default new text block options
    QString                 DefaultBlock_Text_TextST;
    QString                 DefaultBlock_Text_BackGST;
    QString                 DefaultBlock_Text_ShapeST;
    int                     DefaultBlock_AutoSizePos;
    int                     DefaultBlock_AutoLocking;

    // Default new image block option (when slide creation)
    QString                 DefaultBlockSL_IMG_TextST;
    QString                 DefaultBlockSL_IMG_ShapeST;
    sDefaultBlockCoord      DefaultBlockSL[NBR_IMAGETYPE];

    // Default new image block option (when block add in slide dialog)
    QString                 DefaultBlockBA_IMG_TextST;
    QString                 DefaultBlockBA_IMG_ShapeST;
    sDefaultBlockCoord      DefaultBlockBA[NBR_IMAGETYPE];

    // Default project settings
    ffd_GEOMETRY            ImageGeometry;                              // Project image geometry for image rendering
    int                     NoShotDuration;                             // Default duration for fixed image when is alone (no shot)
    int                     FixedDuration;                              // Default duration for fixed image
    QString                 DefaultAuthor;                              // Default Author name
    QString                 DefaultAlbum;                               // Default Album name
    int                     DefaultTitleFilling;                        // Default Title filling mode
    int                     DefaultTransitionSpeedWave;                 // Default Speed wave for transition
    int                     DefaultBlockAnimSpeedWave;                  // Default Speed wave for block animation
    int                     DefaultImageAnimSpeedWave;                  // Default Speed wave for image framing and correction animation
    bool                    ID3V2Comptatibility;
    QString                 DefaultThumbnailName;                       // Default Thumbnail
    QString                 ShortDateFormat;                            // Short date format to be used with variables
    enum DISTANCEUNIT {KILOMETERS,MILES} DistanceUnit;                  // Distance unit to be used with gmaps object

    // Default transition
    bool                    RandomTransition;                           // if true randomize a transition
    TRFAMILLY               DefaultTransitionFamilly;                   // Transition familly
    int                     DefaultTransitionSubType;                   // Transition type in the familly
    int                     DefaultTransitionDuration;                  // Transition duration (in msec)

    // Default rendering options
    int                     DefaultSoundLevel;                          // Default sound level wanted to keed constant sound level
    int                     DefaultNameProjectName;                     // Use project name as default name for rendering
    int                     DefaultFormat;                              // Default output format container
    QString                 DefaultVideoCodec;                          // Default video codec
    int                     DefaultVideoBitRate;                        // Default video bit rate
    QString                 DefaultAudioCodec;                          // Default audio codec
    int                     DefaultAudioBitRate;                        // Default audio bit rate
    int                     DefaultFreq;                                // Default frequency for audio
    int                     DefaultImageSize;                           // Default image size
    int                     DefaultStandard;                            // Default standard (PAL/NTSC)
    int                     DefaultSoundtrackFormat;                    // Default format container for export soundtrack
    QString                 DefaultSoundtrackAudioCodec;                // Default audio codec for export soundtrack
    int                     DefaultSoundtrackBitRate;                   // Default audio bit rate for export soundtrack
    int                     DefaultSoundtrackFreq;                      // Default frequency for export soundtrack
    QString                 DefaultLanguage;                            // Default Language (ISO 639 language code)

    int                     DefaultSmartphoneType;                      // Default Smartphone Type
    int                     DefaultSmartphoneModel;                     // Default Smartphone Model
    int                     DefaultMultimediaType;                      // Default Multimedia Type
    int                     DefaultMultimediaModel;                     // Default Multimedia Model
    int                     DefaultForTheWEBType;                       // Default ForTheWEB Type
    int                     DefaultForTheWEBModel;                      // Default ForTheWEB Model
    int                     DefaultLossLess;                            // Default Lossless imagesize
    bool                    DefaultExportThumbnail;
    bool                    DefaultExportXBMCNfo;

    QString                 Profile_HQ,Profile_PQ;                      // Profiles for h264 codecs
    QString                 Preset_HQ,Preset_PQ;                        // Presets for h264 codecs
    QString                 Tune_HQ,Tune_PQ;                            // Tune for h264 codecs

    QStringList             RecentFile;                                 // Recent project files

    QString                 Plateforme;                                 // Operating system in use
    QWidget                 *ParentWindow;                              // Link to the top window
    QString                 UserConfigPath;                             // Path and filename to user profil path
    QString                 UserConfigFile;                             // Path and filename to user configuration file
    QString                 GlobalConfigFile;                           // Path and filename to global configuration file (in binary directory)
    QString                 CurrentFolder;                              // Current Path
    QString                 CurrentLanguage;                            // Current Language translation
    QString                 ForceLanguage;                              // Empty or forced language
    QString                 StartingPath;

    QTranslator             AppTranslator;                              // translator for the application
    QTranslator             QTtranslator;                               // translator for QT default text

    // Default systems icons
    cCustomIcon             DefaultCDROMIcon,DefaultHDDIcon,DefaultUSBIcon,DefaultREMOTEIcon;
    cCustomIcon             DefaultUSERIcon,DefaultFOLDERIcon,DefaultClipartIcon;
    cCustomIcon             DefaultFILEIcon,DefaultDelayedIcon;
    cCustomIcon             DefaultIMAGEIcon,DefaultThumbIcon,DefaultGMapsIcon;
    cCustomIcon             DefaultVIDEOIcon,DefaultMUSICIcon;
    cCustomIcon             DefaultFFDIcon;
    QImage                  VideoMask_120,VideoMask_150,VideoMask_162;

    explicit                cApplicationConfig(QMainWindow *TopLevelWindow,QString AllowedWEBLanguage);
                            ~cApplicationConfig();

    virtual bool            DownloadFile(QString FileName);
    virtual QString         GetFilterForMediaFile(FilterFile type);
    virtual void            InitValues();
    virtual bool            InitConfigurationValues(QString ForceLanguage);
    virtual bool            LoadConfigurationFile(LoadConfigFileType TypeConfigFile);
    virtual bool            SaveConfigurationFile();

    virtual QString         GetValideWEBLanguage(QString Language);
    virtual void            PreloadSystemIcons();

    QNetworkAccessManager   *GetNetworkAccessManager(QObject *parent);

    QStringList             LoadBrowserFavoritesFromDabase();
    void                    SaveBrowserFavoritesToDabase(QStringList BrowserFavorites);

    void                    DuplicateRessource(qlonglong *RessourceKey);    // Duplicate an image in ressource and get a new RessourceKey
};

#endif // cApplicationConfig_H
