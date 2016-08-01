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

#ifndef CDIAPORAMA_H
#define CDIAPORAMA_H

// Basic inclusions (common to all files)
#include "_GlobalDefines.h"
#include "_Transition.h"

// Include some additional standard class
#include "cApplicationConfig.h"
#include "cBaseMediaFile.h"
#include "cBrushDefinition.h"
#include "cTextFrame.h"

#include "DlgWorkingTask/DlgWorkingTask.h"


// Specific inclusions
class cCompositionList;
class cCompositionObject;
class cDiaporamaShot;
class cDiaporamaObjectInfo;
class cDiaporama;
class cDiaporamaObject;

// Shot type definition
#define SHOTTYPE_STATIC                     0
#define SHOTTYPE_MOBIL                      1
#define SHOTTYPE_VIDEO                      2

//============================================
// Block animations
//============================================

#define BLOCKANIMTYPE_NONE                  0
#define BLOCKANIMTYPE_MULTIPLETURN          1
#define BLOCKANIMTYPE_DISSOLVE              2

#define BLOCKANIMVALUE_APPEAR               0
#define BLOCKANIMVALUE_DISAPPEAR            1
#define BLOCKANIMVALUE_BLINK_SLOW           2
#define BLOCKANIMVALUE_BLINK_MEDIUM         3
#define BLOCKANIMVALUE_BLINK_FAST           4
#define BLOCKANIMVALUE_BLINK_VERYFAST       5

//============================================
// Text margins
//============================================

#define TEXTMARGINS_FULLSHAPE               0
#define TEXTMARGINS_SHAPEDEFAULT            1
#define TEXTMARGINS_CUSTOM                  2

//============================================
// Default values
//============================================

#define DEFAULT_FONT_FAMILLY                "Arial"
#define DEFAULT_FONT_SIZE                   12
#define DEFAULT_FONT_COLOR                  "#ffffaa"
#define DEFAULT_FONT_SHADOWCOLOR            "#333333"
#define DEFAULT_FONT_ISBOLD                 false
#define DEFAULT_FONT_ISITALIC               false
#define DEFAULT_FONT_ISUNDERLINE            false
#define DEFAULT_FONT_HALIGN                 1
#define DEFAULT_FONT_VALIGN                 1
#define DEFAULT_FONT_TEXTEFFECT             5

#define DEFAULT_SHAPE_OPACITY               0
#define DEFAULT_SHAPE_BORDERSIZE            0
#define DEFAULT_SHAPE_BORDERCOLOR           "#333333"
#define DEFAULT_SHAPE_SHADOWCOLOR           "#000000"
#define DEFAULT_SHAPE_INTERNALBORDERSIZE    6
#define DEFAULT_SHAPE_INTERNALBORDERCOLOR1  "#808080"
#define DEFAULT_SHAPE_INTERNALBORDERCOLOR2  "#c0c0c0"
#define DEFAULT_SHAPE_BRUSHCOLORD           "#808080"

//*********************************************************************************************************************************************
// Base object for composition definition
//*********************************************************************************************************************************************

class cCompositionObjectContext : public QObject {
Q_OBJECT
public:
    bool                    NeedPreparedBrush;
    double                  width,height;
    bool                    PreviewMode;
    bool                    AddStartPos;
    int64_t                 VideoPosition,StartPosToAdd,ShotDuration;
    cSoundBlockList         *SoundTrackMontage;
    double                  BlockPctDone,ImagePctDone;
    cCompositionObject      *PrevCompoObject;
    bool                    UseBrushCache,Transfo,EnableAnimation;
    double                  NewX,NewY,NewW,NewH;
    double                  TheX,TheY,TheW,TheH;
    double                  TheRotateZAxis,TheRotateXAxis,TheRotateYAxis;
    double                  TheTxtZoomLevel,TheTxtScrollX,TheTxtScrollY;
    double                  X,Y,W,H;
    double                  DestOpacity;
    bool                    IsCurrentObject;
    QList<QPolygonF>        PolygonList;
    QRectF                  ShapeRect;
    cDiaporamaShot          *CurShot;
    cDiaporamaShot          *PreviousShot;
    cDiaporamaObjectInfo    *Info;
    int                     ObjectNumber;

    explicit                cCompositionObjectContext(int ObjectNumber,bool PreviewMode,bool IsCurrentObject,cDiaporamaObjectInfo *Info,double width,double height,
                                                      cDiaporamaShot *CurShot,cDiaporamaShot *PreviousShot,cSoundBlockList *SoundTrackMontage,bool AddStartPos,
                                                      int64_t ShotDuration,QObject *Parent);
    void                    Compute();
};

//**********************************

class cCompositionObject : public QObject {
Q_OBJECT
public:
    int                 TypeComposition;        // Type of composition object (COMPOSITIONTYPE_BACKGROUND, COMPOSITIONTYPE_OBJECT, COMPOSITIONTYPE_SHOT)
    int                 IndexKey;
    bool                IsVisible;              // True if block is visible during this shot
    bool                BlockInheritance;         // If true and not first shot then use the same value as in precedent shot

    // Coordinates attributs of the object (Shot values)
    double              x,y,w,h;                // Position (x,y) and size (width,height)
    double              RotateZAxis;            // Rotation from Z axis
    double              RotateXAxis;            // Rotation from X axis
    double              RotateYAxis;            // Rotation from Y axis

    // Block Annimation
    int                 BlockSpeedWave;         // Speed wave for block animation
    int                 BlockAnimType;          // Type of block animation (#define BLOCKANIMTYPE_)
    int                 TurnZAxis;              // BLOCKANIMTYPE_MULTIPLETURN : Number of turn from Z axis
    int                 TurnXAxis;              // BLOCKANIMTYPE_MULTIPLETURN : Number of turn from X axis
    int                 TurnYAxis;              // BLOCKANIMTYPE_MULTIPLETURN : Number of turn from Y axis
    int                 Dissolve;               // BLOCKANIMTYPE_DISSOLVE     : Dissolve value

    // Attribut of the text part (Global values)
    QString             Text;                   // Text of the object
    QString             TextClipArtName;        // ClipArt name (if text clipart mode)
    QString             FontName;               // font name
    int                 FontSize;               // font size
    QString             FontColor;              // font color
    QString             FontShadowColor;        // font shadow color
    bool                IsBold;                 // true if bold mode
    bool                IsItalic;               // true if Italic mode
    bool                IsUnderline;            // true if Underline mode
    int                 HAlign;                 // Horizontal alignement : 0=left, 1=center, 2=right, 3=justif
    int                 VAlign;                 // Vertical alignement : 0=up, 1=center, 2=bottom
    int                 StyleText;              // Style : 0=normal, 1=outerline, 2=shadow up-left, 3=shadow up-right, 4=shadow bt-left, 5=shadow bt-right
    int                 TxtZoomLevel;           // Zoom Level for text
    int                 TxtScrollX;             // Scrolling X for text
    int                 TxtScrollY;             // Scrolling Y for text
    int                 TMType;                 // Text margins type (0=full shape, 1=shape default, 2=custom)
    double              TMx,TMy,TMw,TMh;        // Text margins

    // Attribut of the shap part (Global values)
    int                 BackgroundForm;         // Type of the form : 0=None, 1=Rectangle, 2=RoundRect, 3=Buble, 4=Ellipse, 5=Triangle UP (Polygon)
    cBrushDefinition    *BackgroundBrush;       // Brush of the background of the form
    int                 PenSize;                // Width of the border of the form
    int                 PenStyle;               // Style of the pen border of the form
    QString             PenColor;               // Color of the border of the form
    int                 FormShadow;             // 0=none, 1=shadow up-left, 2=shadow up-right, 3=shadow bt-left, 4=shadow bt-right
    int                 FormShadowDistance;     // Distance from form to shadow
    QString             FormShadowColor;        // Color of the shadow of the form
    int                 Opacity;                // Opacity of the form

    // Optimisation flags
    bool                IsTextEmpty;
    bool                IsFullScreen;

    cApplicationConfig *ApplicationConfig;

    explicit            cCompositionObject(int TypeComposition,int IndexKey,cApplicationConfig *TheApplicationConfig,QObject *Parent);
                        ~cCompositionObject();

    void                InitDefaultValues();
    void                CopyBlockProperties(cCompositionObject *SourceBlock,cCompositionObject *DestBlock);
    void                CopyFromCompositionObject(cCompositionObject *CompositionObjectToCopy);
    void                DrawCompositionObject(cDiaporamaObject *Object,QPainter *Painter,double  ADJUST_RATIO,double width,double height,bool PreviewMode,int64_t Position,
                                      cSoundBlockList *SoundTrackMontage,double BlockPctDone,double ImagePctDone,cCompositionObject *PreviousCompositionObject,
                                      int64_t ShotDuration,bool EnableAnimation,
                                      bool Transfo=false,double NewX=0,double NewY=0,double NewW=0,double NewH=0,
                                      bool DisplayTextMargin=false,cCompositionObjectContext *PreparedBrush=NULL);

    void                SaveToXML(QDomElement &domDocument,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,bool CheckTypeComposition,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool SaveBrush,bool IsModel);
    bool                LoadFromXML(QDomElement domDocument,QString ElementName,QString PathForRelativPath,cCompositionList *ObjectComposition,QStringList *AliasList,bool CheckTypeComposition,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes,bool RestoreBrush,cCompositionObject *GlobalBlock=NULL);

    QRectF              GetTextMargin(QRectF Workspace,double  ADJUST_RATIO);
    void                ApplyTextMargin(int TMType);

    // Style managment functions
    int                 GetAutoCompoSize(int ffDProjectGeometry);
    void                ApplyAutoCompoSize(int AutoCompoStyle,int ffDProjectGeometry,bool AllowMove=true);

    QString             GetCoordinateStyle();
    void                ApplyCoordinateStyle(QString StyleDef);

    QString             GetTextStyle();
    void                ApplyTextStyle(QString StyleDef);

    QString             GetBackgroundStyle();
    void                ApplyBackgroundStyle(QString StyleDef);

    QString             GetBlockShapeStyle();
    void                ApplyBlockShapeStyle(QString StyleDef);

    void                ComputeOptimisationFlags(cCompositionObject *Previous);

private:
    QRectF              GetPrivateTextMargin();
};

//*********************************************************************************************************************************************
// Global class containing composition list
//*********************************************************************************************************************************************

class cCompositionList : public QObject {
Q_OBJECT
public:
    int                         TypeComposition;            // Type of composition list
    QList<cCompositionObject*>  List;                       // list of cCompositionObject

    explicit                    cCompositionList(QObject *Parent);
                                ~cCompositionList();

    void                        SaveToXML(QDomElement &domDocument,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel);
    bool                        LoadFromXML(QDomElement domDocument,QString ElementName,QString PathForRelativPath,cCompositionList *ObjectComposition,QStringList *AliasList,cApplicationConfig *ApplicationConfig,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes);
};

//*********************************************************************************************************************************************
// Base object for scene definition
//*********************************************************************************************************************************************
class cDiaporamaShot : public QObject {
Q_OBJECT
public:
    cDiaporamaObject        *Parent;
    int64_t                 StaticDuration;         // Duration (in msec) of the static part animation
    cCompositionList        ShotComposition;        // Shot Composition object list

    explicit                cDiaporamaShot(cDiaporamaObject *Parent);
                            ~cDiaporamaShot();

    void                    SaveToXML(QDomElement &domDocument,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,bool LimitedInfo,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel);
    bool                    LoadFromXML(QDomElement domDocument,QString ElementName,QString PathForRelativPath,cCompositionList *ObjectComposition,QStringList *AliasList,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes);
};

//*********************************************************************************************************************************************
// class containing one slide
//*********************************************************************************************************************************************
class cDiaporamaObject : public QObject {
Q_OBJECT
public:
    cDiaporama              *Parent;                    // Link to global object
    QString                 SlideName;                  // Display name of the slide
    QList<cDiaporamaShot *> List;                       // list of scene definition

    // Cached data to improve interface speed
    int64_t                 CachedDuration;             // Real duration of the slide
    int64_t                 CachedTransitDuration;      // Real duration of the transition of slide
    int64_t                 CachedStartPosition;        // Start position of the music
    int                     CachedMusicIndex;           // Index of slide owner of the music
    int                     CachedMusicListIndex;       // Index of track in music table of slide owner of the music
    int                     CachedBackgroundIndex;      // Index of slide owner of the background
    bool                    CachedHaveFilter;           // True if object in slide have at least one filter
    bool                    CachedHaveSound;            // True if object in slide have sound
    double                  CachedSoundVolume;          // Max volume in the slide
    bool                    CachedMusicFadIN;           // if true fad-in to music during entering transition
    bool                    CachedMusicEnd;             // if true then music end during slide
    bool                    CachedPrevMusicFadOUT;      // if true then fad-out to previous music during entering transition
    bool                    CachedPrevMusicEnd;         // if true then previous music end during entering transition
    int64_t                 CachedMusicRemaining;       // time left for music after this slide
    int64_t                 CachedMusicTimePlayed;      // time played during this slide

    // Chapter definition
    bool                    StartNewChapter;            // if true then start a new chapter from this slide
    QString                 ChapterName;                // Chapter name
    bool                    OverrideProjectEventDate;   // if true then chapter date is different from project date
    QDate                   ChapterEventDate;           // Chapter event date (if OverrideProjectEventDate is true)
    bool                    OverrideChapterLongDate;    // if true then chapter long date is different from project long date
    QString                 ChapterLongDate;            // Chapter long date (if OverrideChapterLongDate is true)
    void                    *ChapterLocation;           // Chapter location (NULL if same as project)

    // Background definition
    bool                    BackgroundType;             // Background type : false=same as precedent - true=new background definition
    cBrushDefinition        *BackgroundBrush;           // Background brush

    // Object definition
    cCompositionList        ObjectComposition;          // Composition object list
    int                     NextIndexKey;               // Next index key (incremental value)

    // Music definition
    bool                    MusicType;                  // Music type : false=same as precedent - true=new playlist definition
    bool                    MusicPause;                 // true if music is pause during this object
    bool                    MusicReduceVolume;          // true if volume if reduce by MusicReduceFactor
    double                  MusicReduceFactor;          // factor for volume reduction if MusicReduceVolume is true

    // Transition
    TRFAMILLY               TransitionFamilly;          // Transition familly
    int                     TransitionSubType;          // Transition type in the familly
    int64_t                 TransitionDuration;         // Transition duration (in msec)
    int                     TransitionSpeedWave;        // Transition SpeedWave

    qlonglong               ThumbnailKey;               // Thumbnail key in the database
    QList<cMusicObject*>    MusicList;                  // List of music definition

    explicit                cDiaporamaObject(cDiaporama *Parent);
                            ~cDiaporamaObject();

    void                    InitDefaultValues();
    QString                 GetDisplayName();
    int64_t                 GetCumulTransitDuration();
    int64_t                 GetDuration();
    void                    DrawThumbnail(int ThumbWidth,int ThumbHeight,QPainter *Painter,int AddX,int AddY,int ShotNumber=0);   // Draw Thumb @ position 0
    void                    SaveToXML(QDomElement &domDocument,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool SaveThumbAllowed);
    bool                    LoadFromXML(QDomElement domDocument,QString ElementName,QString PathForRelativPath,QStringList *AliasList,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes,DlgWorkingTask *DlgWorkingTaskDialog=NULL);
    int64_t                 GetTransitDuration();
    int                     GetSpeedWave();
    int                     ComputeChapterNumber(cDiaporamaObject **Object=NULL);
    int                     GetSlideNumber();
    int                     GetAutoTSNumber();

    // Models part
    void                    LoadModelFromXMLData(ffd_MODELTYPE TypeModel,QDomDocument domDocument,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes);
    bool                    SaveModelFile(ffd_MODELTYPE TypeModel,QString ModelFileName);
    QString                 SaveAsNewCustomModelFile(ffd_MODELTYPE TypeModel);

    // Thread functions
    void                    ThreadedLoadThumb(QDomElement Element);
};

//*********************************************************************************************************************************************
// Technical class object for rendering
//*********************************************************************************************************************************************
class cDiaporamaObjectInfo {
public:
    //=====> All objects
    QImage              RenderedImage;                          // Final image rendered
    double              FrameDuration;                          // Duration of a frame (in msec)
    bool                IsShotStatic;
    bool                IsTransitStatic;

    //=====> Current object
    int                 CurrentObject_Number;                   // Object number
    int64_t             CurrentObject_StartTime;                // Position (in msec) of the first frame relative to the diaporama
    int64_t             CurrentObject_InObjectTime;             // Position (in msec) in the object
    cDiaporamaObject    *CurrentObject;                         // Link to the current object
    int                 CurrentObject_ShotSequenceNumber;       // Number of the shot sequence in the current object
    cDiaporamaShot      *CurrentObject_CurrentShot;             // Link to the current shot in the current object
    int                 CurrentObject_CurrentShotType;          // Type of the current shot : Static/Mobil/Video
    int64_t             CurrentObject_ShotDuration;             // Time the static shot end (if CurrentObject_CurrentShotType=SHOTTYPE_STATIC)
    double              CurrentObject_PCTDone;                  // PCT achevement for static shot
    int                 CurrentObject_BackgroundIndex;          // Object number containing current background definition
    QBrush              *CurrentObject_BackgroundBrush;         // Current background brush
    bool                CurrentObject_FreeBackgroundBrush;      // True if allow to delete CurrentObject_BackgroundBrush during destructor
    QImage              CurrentObject_PreparedBackground;       // Current image produce for background
    cSoundBlockList     *CurrentObject_SoundTrackMontage;       // Sound for playing sound from montage track
    bool                CurrentObject_FreeSoundTrackMontage;    // True if allow to delete CurrentObject_SoundTrackMontage during destructor
    QImage              CurrentObject_PreparedImage;            // Current image prepared
    cSoundBlockList     *CurrentObject_MusicTrack;              // Sound for playing music from music track
    bool                CurrentObject_FreeMusicTrack;           // True if allow to delete CurrentObject_MusicTrack during destructor
    cMusicObject        *CurrentObject_MusicObject;             // Ref to the current playing music

    //=====> Transitionnal object
    bool                IsTransition;                           // True if transition in progress
    double              TransitionPCTDone;                      // PCT achevement for transition
    TRFAMILLY           TransitionFamilly;                      // Transition familly
    int                 TransitionSubType;                      // Transition type in the familly
    int64_t             TransitionDuration;                     // Transition duration (in msec)
    int                 TransitObject_Number;                   // Object number
    int64_t             TransitObject_StartTime;                // Position (in msec) of the first frame relative to the diaporama
    int64_t             TransitObject_InObjectTime;             // Position (in msec) in the object
    cDiaporamaObject    *TransitObject;                         // Link to the current object
    int                 TransitObject_ShotSequenceNumber;       // Number of the shot sequence in the current object
    cDiaporamaShot      *TransitObject_CurrentShot;             // Link to the current shot in the current object
    int                 TransitObject_CurrentShotType;          // Type of the current shot : Static/Mobil/Video
    int64_t             TransitObject_ShotDuration;             // Time the static shot end (if TransitObject_CurrentShotType=SHOTTYPE_STATIC)
    double              TransitObject_PCTDone;                  // PCT achevement for static shot
    int                 TransitObject_BackgroundIndex;          // Object number containing current background definition
    QBrush              *TransitObject_BackgroundBrush;         // Current background brush
    bool                TransitObject_FreeBackgroundBrush;      // True if allow to delete TransitObject_BackgroundBrush during destructor
    QImage              TransitObject_PreparedBackground;       // Current image produce for background
    cSoundBlockList     *TransitObject_SoundTrackMontage;       // Sound for playing sound from montage track
    bool                TransitObject_FreeSoundTrackMontage;    // True if allow to delete TransitObject_SoundTrackMontage during destructor
    QImage              TransitObject_PreparedImage;            // Current image prepared
    cSoundBlockList     *TransitObject_MusicTrack;              // Sound for playing music from music track
    bool                TransitObject_FreeMusicTrack;           // True if allow to delete TransitObject_MusicTrack during destructor
    cMusicObject        *TransitObject_MusicObject;             // Ref to the current playing music

    cDiaporamaObjectInfo();
    cDiaporamaObjectInfo(cDiaporamaObjectInfo *PreviousFrame,int64_t TimePosition,cDiaporama *Diaporama,double FrameDuration,bool WantSound);
    ~cDiaporamaObjectInfo();
    void Copy(cDiaporamaObjectInfo *PreviousFrame);
    bool ComputeIsShotStatic(cDiaporamaObject *Object,int ShotNumber);
};

//*********************************************************************************************************************************************
// Global class containing the project
//*********************************************************************************************************************************************
class cDiaporama :public QObject {
Q_OBJECT
public:
    cApplicationConfig  *ApplicationConfig;

    cffDProjectFile         *ProjectInfo;

    QString                 ThumbnailName;
    cDiaporamaObject        *ProjectThumbnail;

    int                     CurrentCol;             // Current position in the timeline (column)
    int64_t                 CurrentPosition;        // Current position in the timeline (msec)

    int                     CurrentChapter;
    QString                 CurrentChapterName;

    bool                    IsModify;               // true if project was modify
    QString                 ProjectFileName;        // Path and name of current file project

    // Output rendering values
    ffd_GEOMETRY            ImageGeometry;          // Project image geometry for image rendering
    int                     InternalWidth;          // Real width for image rendering
    int                     InternalHeight;         // Real height for image rendering

    // Speed wave
    int                     TransitionSpeedWave;    // Speed wave for transition
    int                     BlockAnimSpeedWave;     // Speed wave for block animation
    int                     ImageAnimSpeedWave;     // Speed wave for image framing and correction animation

    // slides objects
    QList<cDiaporamaObject *> List;                   // list of all media object

    explicit                cDiaporama(cApplicationConfig *ApplicationConfig,bool LoadDefaultModel,QObject *Parent);
                            ~cDiaporama();

    int                     GetHeightForWidth(int WantedWith);
    int                     GetWidthForHeight(int WantedHeight);
    int                     GetObjectIndex(cDiaporamaObject *ObjectToFind);
    int64_t                 GetDuration();
    int64_t                 GetPartialDuration(int from,int to);
    int64_t                 GetObjectStartPosition(int index);
    int64_t                 GetTransitionDuration(int index);
    void                    UpdateCachedInformation();
    void                    PrepareBackground(int ObjectIndex,int Width,int Height,QPainter *Painter,int AddX,int AddY);
    cMusicObject            *GetMusicObject(int ObjectIndex,int64_t &StartPosition,int *CountObject=NULL,int *IndexObject=NULL);
    void                    DefineSizeAndGeometry(ffd_GEOMETRY Geometry);                        // Init size and geometry
    bool                    SaveFile(QWidget *ParentWindow,cReplaceObjectList *ReplaceList=NULL,QString *ExportFileName=NULL);

    void                    UpdateInformation();
    void                    UpdateChapterInformation();
    void                    UpdateStatInformation();
    cDiaporamaObject        *GetChapterDefObject(cDiaporamaObject *Object);

    // Thread functions
    struct PrepareMusicBlocContext {
        bool            PreviewMode;
        int             Column;
        int64_t         Position;
        cSoundBlockList *MusicTrack;
        int             NbrDuration;
        bool            FadIn;
        bool            FadOut;
        bool            IsCurrent;
        int64_t         PositionInSlide;
    };

    void                    PrepareMusicBloc(PrepareMusicBlocContext *Context);
    void                    LoadSources(cDiaporamaObjectInfo *Info,int W,int H,bool PreviewMode,bool AddStartPos,QList<cCompositionObjectContext *> &PreparedTransitBrushList,QList<cCompositionObjectContext *> &PreparedBrushList,int NbrDuration=2);
    void                    DoAssembly(double PCT,cDiaporamaObjectInfo *Info,int W,int H,QImage::Format QTFMT=QImage::Format_ARGB32_Premultiplied);

    // Memory
    void                    CloseUnusedLibAv(int CurrentCell);

    void                    CreateObjectContextList(cDiaporamaObjectInfo *Info,int W,int H,bool IsCurrentObject,bool PreviewMode,bool AddStartPos,QList<cCompositionObjectContext *> &PreparedBrushList,QObject *Parent);
    void                    PrepareImage(cDiaporamaObjectInfo *Info,int W,int H,bool IsCurrentObject,bool AddStartPos,QList<cCompositionObjectContext *> &PreparedBrushList);

    void                    UpdateGMapsObject(bool ProposeAll=false);
};

#endif // CDIAPORAMA_H
