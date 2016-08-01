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

// Specific inclusions
#include "_Diaporama.h"
#include "_Variables.h"
#include "cLocation.h"
#include "CustomCtrl/_QCustomDialog.h"
#include "DlgGMapsLocation/DlgGMapsGeneration.h"
#include "MainWindow/mainwindow.h"

#include <QAbstractTextDocumentLayout>
#include <QTextDocument>
#include <QTextCursor>
#include <QTextCharFormat>
#include <QTextBlockFormat>

int64_t TotalLoadSources=0,TotalAssembly=0,TotalLoadSound=0;

// Composition parameters
#define DEFAULT_ROTATEZAXIS                 0
#define DEFAULT_ROTATEXAXIS                 0
#define DEFAULT_ROTATEYAXIS                 0
#define DEFAULT_TXTZOOMLEVEL                100
#define DEFAULT_TXTSCROLLX                  0
#define DEFAULT_TXTSCROLLY                  0
#define DEFAULT_BLOCKANIMTYPE               BLOCKANIMTYPE_NONE
#define DEFAULT_TURNZAXIS                   0
#define DEFAULT_TURNXAXIS                   0
#define DEFAULT_TURNYAXIS                   0
#define DEFAULT_DISSOLVE                    BLOCKANIMVALUE_APPEAR
#define DEFAULT_BACKGROUNDFORM              1
#define DEFAULT_SHAPE_PENSTYLE              Qt::SolidLine
#define DEFAULT_SHAPE_SHADOW                0
#define DEFAULT_SHAPE_SHADOWDISTANCE        5
#define DEFAULT_TRANSITIONDURATION          1000
#define DEFAULT_MUSICTYPE                   false
#define DEFAULT_MUSICPAUSE                  false
#define DEFAULT_MUSICREDUCEVOLUME           false
#define DEFAULT_MUSICREDUCEFACTOR           0.2
#define DEFAULT_STARTNEWCHAPTER             false
#define DEFAULT_CHAPTEROVERRIDE             false

//====================================================================================================================

cCompositionObjectContext::cCompositionObjectContext(int ObjectNumber,bool PreviewMode,bool IsCurrentObject,cDiaporamaObjectInfo *Info,double width,double height,
                                                     cDiaporamaShot *CurShot,cDiaporamaShot *PreviousShot,cSoundBlockList *SoundTrackMontage,bool AddStartPos,
                                                     int64_t ShotDuration,QObject *Parent):QObject(Parent) {
    setObjectName("cCompositionObjectContext");

    this->NeedPreparedBrush =false;
    this->PrevCompoObject   =NULL;
    this->width             =width;
    this->height            =height;
    this->PreviewMode       =PreviewMode;
    this->UseBrushCache     =false;
    this->Transfo           =false;
    this->EnableAnimation   =true;
    this->NewX              =0;
    this->NewY              =0;
    this->NewW              =0;
    this->NewH              =0;
    this->ShotDuration      =ShotDuration;
    this->IsCurrentObject   =IsCurrentObject;
    this->CurShot           =CurShot;
    this->PreviousShot      =PreviousShot;
    this->Info              =Info;
    this->ObjectNumber      =ObjectNumber;
    this->SoundTrackMontage =SoundTrackMontage;
    this->AddStartPos       =AddStartPos;
}

//====================================================================================================================
// Compute
//  BlockPctDone, ImagePctDone
//  VideoPosition, StartPosToAdd, PrevCompoObject
//====================================================================================================================

void cCompositionObjectContext::Compute() {
    cDiaporamaObject    *CurObject      =IsCurrentObject?Info->CurrentObject:Info->TransitObject;
    int                 CurTimePosition =(IsCurrentObject?Info->CurrentObject_InObjectTime:Info->TransitObject_InObjectTime);
    int                 BlockSpeedWave  =CurShot->ShotComposition.List[ObjectNumber]->BlockSpeedWave;
    int                 ImageSpeedWave  =CurShot->ShotComposition.List[ObjectNumber]->BackgroundBrush->ImageSpeedWave;

    if (BlockSpeedWave==SPEEDWAVE_PROJECTDEFAULT) BlockSpeedWave=CurShot->Parent->Parent->BlockAnimSpeedWave;
    if (ImageSpeedWave==SPEEDWAVE_PROJECTDEFAULT) ImageSpeedWave=CurShot->Parent->Parent->ImageAnimSpeedWave;

    cCompositionObject *Object=CurShot->ShotComposition.List[ObjectNumber];
    BlockPctDone=ComputePCT(BlockSpeedWave,IsCurrentObject?Info->CurrentObject_PCTDone:Info->TransitObject_PCTDone);
    ImagePctDone=ComputePCT(ImageSpeedWave,IsCurrentObject?Info->CurrentObject_PCTDone:Info->TransitObject_PCTDone);

    // Get PrevCompoObject to enable animation from previous shot
    if (PreviousShot) {
        int k=0;
        while (k<PreviousShot->ShotComposition.List.count()) {
            if (PreviousShot->ShotComposition.List[k]->IndexKey==CurShot->ShotComposition.List[ObjectNumber]->IndexKey) {
                PrevCompoObject=PreviousShot->ShotComposition.List[k];
                k=PreviousShot->ShotComposition.List.count();
            } else k++;
        }
    }
    // Calc StartPosToAdd for video depending on AddStartPos
    cVideoFile *Video=((CurShot->ShotComposition.List[ObjectNumber]->BackgroundBrush->MediaObject)&&(CurShot->ShotComposition.List[ObjectNumber]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE))?
                (cVideoFile *)CurShot->ShotComposition.List[ObjectNumber]->BackgroundBrush->MediaObject:NULL;
    StartPosToAdd=((AddStartPos)&&(Video)?QTime(0,0,0,0).msecsTo(Video->StartPos):0);
    VideoPosition=0;

    if (Video) {
        // Calc VideoPosition depending on video set to pause (visible=off) in previous shot
        int ThePosition=0;
        int TheShot=0;
        while ((TheShot<CurObject->List.count())&&(ThePosition+CurObject->List[TheShot]->StaticDuration<CurTimePosition)) {
            for (int w=0;w<CurObject->List[TheShot]->ShotComposition.List.count();w++) if (CurObject->List[TheShot]->ShotComposition.List[w]->IndexKey==CurShot->ShotComposition.List[ObjectNumber]->IndexKey) {
                if (CurObject->List[TheShot]->ShotComposition.List[w]->IsVisible) VideoPosition+=CurObject->List[TheShot]->StaticDuration;
                break;
            }
            ThePosition+=CurObject->List[TheShot]->StaticDuration;
            TheShot++;
        }
        VideoPosition+=(CurTimePosition-ThePosition);

    } else VideoPosition=CurTimePosition;


    // PreparedBrush->W and PreparedBrush->H = 0 when producing sound track in render process
    if ((!Object->IsVisible)||(width==0)||(height==0)||(Transfo && ((NewW==0)||(NewH==0)))||(!Transfo && ((Object->w==0)||(Object->h==0)))) return;

    // Define values depending on BlockPctDone and PrevCompoObject
    TheX             =Transfo?NewX:Object->x;
    TheY             =Transfo?NewY:Object->y;
    TheW             =Transfo?NewW:Object->w;
    TheH             =Transfo?NewH:Object->h;
    TheRotateZAxis   =Object->RotateZAxis+(EnableAnimation && (Object->BlockAnimType==BLOCKANIMTYPE_MULTIPLETURN)?360*Object->TurnZAxis:0);
    TheRotateXAxis   =Object->RotateXAxis+(EnableAnimation && (Object->BlockAnimType==BLOCKANIMTYPE_MULTIPLETURN)?360*Object->TurnXAxis:0);
    TheRotateYAxis   =Object->RotateYAxis+(EnableAnimation && (Object->BlockAnimType==BLOCKANIMTYPE_MULTIPLETURN)?360*Object->TurnYAxis:0);
    TheTxtZoomLevel  =Object->TxtZoomLevel;
    TheTxtScrollX    =Object->TxtScrollX;
    TheTxtScrollY    =Object->TxtScrollY;

    if (PrevCompoObject) {
        if (PrevCompoObject->x!=TheX)                       TheX            =PrevCompoObject->x+(TheX-PrevCompoObject->x)*BlockPctDone;
        if (PrevCompoObject->y!=TheY)                       TheY            =PrevCompoObject->y+(TheY-PrevCompoObject->y)*BlockPctDone;
        if (PrevCompoObject->w!=TheW)                       TheW            =PrevCompoObject->w+(TheW-PrevCompoObject->w)*BlockPctDone;
        if (PrevCompoObject->h!=TheH)                       TheH            =PrevCompoObject->h+(TheH-PrevCompoObject->h)*BlockPctDone;
        if (PrevCompoObject->RotateZAxis!=TheRotateZAxis)   TheRotateZAxis  =PrevCompoObject->RotateZAxis+(TheRotateZAxis-PrevCompoObject->RotateZAxis)*BlockPctDone;
        if (PrevCompoObject->RotateXAxis!=TheRotateXAxis)   TheRotateXAxis  =PrevCompoObject->RotateXAxis+(TheRotateXAxis-PrevCompoObject->RotateXAxis)*BlockPctDone;
        if (PrevCompoObject->RotateYAxis!=TheRotateYAxis)   TheRotateYAxis  =PrevCompoObject->RotateYAxis+(TheRotateYAxis-PrevCompoObject->RotateYAxis)*BlockPctDone;
        if (PrevCompoObject->TxtZoomLevel!=TheTxtZoomLevel) TheTxtZoomLevel =PrevCompoObject->TxtZoomLevel+(TheTxtZoomLevel-PrevCompoObject->TxtZoomLevel)*BlockPctDone;
        if (PrevCompoObject->TxtScrollX!=TheTxtScrollX)     TheTxtScrollX   =PrevCompoObject->TxtScrollX+(TheTxtScrollX-PrevCompoObject->TxtScrollX)*BlockPctDone;
        if (PrevCompoObject->TxtScrollY!=TheTxtScrollY)     TheTxtScrollY   =PrevCompoObject->TxtScrollY+(TheTxtScrollY-PrevCompoObject->TxtScrollY)*BlockPctDone;
    } else {
        if (EnableAnimation && (Object->BlockAnimType==BLOCKANIMTYPE_MULTIPLETURN)) {
            TheRotateZAxis=Object->RotateZAxis+360*Object->TurnZAxis*BlockPctDone;
            TheRotateXAxis=Object->RotateXAxis+360*Object->TurnXAxis*BlockPctDone;
            TheRotateYAxis=Object->RotateYAxis+360*Object->TurnYAxis*BlockPctDone;
        }
    }

    //**********************************************************************************

    X=TheX*width;
    Y=TheY*height;
    W=TheW*width;
    H=TheH*height;

    //**********************************************************************************

    if ((W>0)&&(H>0)) {

        //***********************************************************************************
        // Compute shape
        //***********************************************************************************
        X=floor(X);
        Y=floor(Y);
        W=floor(W/2)*2;
        H=floor(H/2)*2;

        //**********************************************************************************
        // Opacity and dissolve annimation
        //**********************************************************************************
        DestOpacity =(Object->Opacity==1?0.75:Object->Opacity==2?0.50:Object->Opacity==3?0.25:1);
        if (EnableAnimation) {
            if (Object->BlockAnimType==BLOCKANIMTYPE_DISSOLVE) {

                double BlinkNumber=0;
                switch (Object->Dissolve) {
                    case BLOCKANIMVALUE_APPEAR        : DestOpacity=DestOpacity*BlockPctDone;       break;
                    case BLOCKANIMVALUE_DISAPPEAR     : DestOpacity=DestOpacity*(1-BlockPctDone);   break;
                    case BLOCKANIMVALUE_BLINK_SLOW    : BlinkNumber=0.25;                           break;
                    case BLOCKANIMVALUE_BLINK_MEDIUM  : BlinkNumber=0.5;                            break;
                    case BLOCKANIMVALUE_BLINK_FAST    : BlinkNumber=1;                              break;
                    case BLOCKANIMVALUE_BLINK_VERYFAST: BlinkNumber=2;                              break;
                }
                if (BlinkNumber!=0) {
                    BlinkNumber=BlinkNumber*ShotDuration;
                    if (int(BlinkNumber/1000)!=(BlinkNumber/1000)) BlinkNumber=int(BlinkNumber/1000)+1; else BlinkNumber=int(BlinkNumber/1000); // Adjust to upper 1000
                    double FullPct=BlockPctDone*BlinkNumber*100;
                    FullPct=int(FullPct)-int(FullPct/100)*100;
                    FullPct=(FullPct/100)*2;
                    if (FullPct<1)  DestOpacity=DestOpacity*(1-FullPct);
                        else        DestOpacity=DestOpacity*(FullPct-1);
                }
            }
        }

        //***********************************************************************************
        // Compute shape
        //***********************************************************************************
        PolygonList=ComputePolygon(Object->BackgroundForm,X,Y,W,H);
        ShapeRect  =PolygonToRectF(PolygonList);

        //***********************************************************************************
        // Prepare Transform Matrix
        //***********************************************************************************
        if ((Object->TextClipArtName=="")&&
            (!((Object->BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK)&&(Object->BackgroundBrush->MediaObject)&&(Object->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_IMAGEVECTOR)))&&
            (((Object->BackgroundBrush->BrushType!=BRUSHTYPE_NOBRUSH)||(Object->PenSize!=0)))&&
            (Object->BackgroundBrush->BrushType!=BRUSHTYPE_NOBRUSH)
           ) NeedPreparedBrush=true;
    }
}

//*********************************************************************************************************************************************
// Base object for composition definition
//*********************************************************************************************************************************************

cCompositionObject::cCompositionObject(int TheTypeComposition,int TheIndexKey,cApplicationConfig *TheApplicationConfig,QObject *Parent):QObject(Parent) {
    setObjectName("cCompositionObject");

    // Attribut of the text object
    ApplicationConfig       = TheApplicationConfig;
    TypeComposition         = TheTypeComposition;
    IndexKey                = TheIndexKey;
    BackgroundBrush         = new cBrushDefinition(this,ApplicationConfig);  // ERROR : BackgroundList is global !
    InitDefaultValues();
}

//*********************************************************************************************************************************************

void cCompositionObject::InitDefaultValues() {
    IsVisible               = true;
    BlockInheritance        = false;

    IsFullScreen            = false;
    x                       = 0.25;         // Position (x,y) and size (width,height)
    y                       = 0.25;
    w                       = 0.5;
    h                       = 0.5;

    RotateZAxis             = DEFAULT_ROTATEZAXIS;  // Rotation from Z axis
    RotateXAxis             = DEFAULT_ROTATEXAXIS;  // Rotation from X axis
    RotateYAxis             = DEFAULT_ROTATEYAXIS;  // Rotation from Y axis

    // Text part
    IsTextEmpty             = true;
    Text                    = "";                                               // Text of the object
    TextClipArtName         = "";                                               // Clipart name (if clipart mode)
    FontName                = DEFAULT_FONT_FAMILLY;                             // font name
    FontSize                = DEFAULT_FONT_SIZE;                                // font size
    FontColor               = DEFAULT_FONT_COLOR;                               // font color
    FontShadowColor         = DEFAULT_FONT_SHADOWCOLOR;                         // font shadow color
    IsBold                  = DEFAULT_FONT_ISBOLD;                              // true if bold mode
    IsItalic                = DEFAULT_FONT_ISITALIC;                            // true if Italic mode
    IsUnderline             = DEFAULT_FONT_ISUNDERLINE;                         // true if Underline mode
    HAlign                  = DEFAULT_FONT_HALIGN;                              // Horizontal alignement : 0=left, 1=center, 2=right, 3=justif
    VAlign                  = DEFAULT_FONT_VALIGN;                              // Vertical alignement : 0=up, 1=center, 2=bottom
    StyleText               = DEFAULT_FONT_TEXTEFFECT;                          // Style : 0=normal, 1=outerline, 2=shadow up-left, 3=shadow up-right, 4=shadow bt-left, 5=shadow bt-right
    TxtZoomLevel            = DEFAULT_TXTZOOMLEVEL;                             // Zoom Level for text
    TxtScrollX              = DEFAULT_TXTSCROLLX;                               // Scrolling X for text
    TxtScrollY              = DEFAULT_TXTSCROLLY;                               // Scrolling Y for text
    TMType                  = TEXTMARGINS_SHAPEDEFAULT;

    // Shap part
    BackgroundForm          = DEFAULT_BACKGROUNDFORM;                           // Type of the form : 0=None, 1=Rectangle, 2=Ellipse
    Opacity                 = DEFAULT_SHAPE_OPACITY;                            // Style of the background of the form
    PenSize                 = DEFAULT_SHAPE_BORDERSIZE;                         // Width of the border of the form
    PenStyle                = DEFAULT_SHAPE_PENSTYLE;                           // Style of the pen border of the form
    PenColor                = DEFAULT_SHAPE_BORDERCOLOR;                        // Color of the border of the form
    FormShadowColor         = DEFAULT_SHAPE_SHADOWCOLOR;                        // Color of the shadow of the form
    FormShadow              = DEFAULT_SHAPE_SHADOW;                             // 0=none, 1=shadow up-left, 2=shadow up-right, 3=shadow bt-left, 4=shadow bt-right
    FormShadowDistance      = DEFAULT_SHAPE_SHADOWDISTANCE;                     // Distance from form to shadow

    BlockSpeedWave          = SPEEDWAVE_PROJECTDEFAULT;

    // Block animation part
    BlockAnimType           = DEFAULT_BLOCKANIMTYPE;
    TurnZAxis               = DEFAULT_TURNZAXIS;                                                // Number of turn from Z axis
    TurnXAxis               = DEFAULT_TURNXAXIS;                                                // Number of turn from X axis
    TurnYAxis               = DEFAULT_TURNYAXIS;                                                // Number of turn from Y axis
    Dissolve                = DEFAULT_DISSOLVE;

    // BackgroundBrush is initilise by object constructor except TypeComposition and key
    BackgroundBrush->TypeComposition = TypeComposition;

    ApplyTextMargin(TEXTMARGINS_SHAPEDEFAULT);                                  // Init TMx,TMy,TMw,TMh (Text margins)
}

//====================================================================================================================

cCompositionObject::~cCompositionObject() {
    if (BackgroundBrush) {
        delete BackgroundBrush;
        BackgroundBrush=NULL;
    }
}

//====================================================================================================================

void cCompositionObject::ApplyTextMargin(int TMType) {
    if ((this->TMType==TEXTMARGINS_CUSTOM)&&(TMType==TEXTMARGINS_CUSTOM)) return;   // Don't overwrite custom settings
    this->TMType=TMType;
    QRectF Rect =GetPrivateTextMargin();
    this->TMx   =Rect.left();
    this->TMy   =Rect.top();
    this->TMw   =Rect.width();
    this->TMh   =Rect.height();
}

//====================================================================================================================

QRectF cCompositionObject::GetPrivateTextMargin() {
    QRectF RectF;
    if (TMType==TEXTMARGINS_FULLSHAPE) {
            QRectF X100=RectF=PolygonToRectF(ComputePolygon(BackgroundForm,0,0,100,100));
            RectF=QRectF(X100.left()/100,X100.top()/100,X100.width()/100,X100.height()/100);
    } else if (TMType==TEXTMARGINS_SHAPEDEFAULT) {
        if (TextClipArtName!="") {
            cTextFrameObject *TFO=&TextFrameList.List[TextFrameList.SearchImage(TextClipArtName)];
            RectF=QRectF(TFO->TMx,TFO->TMy,TFO->TMw,TFO->TMh);
        } else {
            RectF=QRectF(ShapeFormDefinition[BackgroundForm].TMx,ShapeFormDefinition[BackgroundForm].TMy,
                         ShapeFormDefinition[BackgroundForm].TMw,ShapeFormDefinition[BackgroundForm].TMh);
        }
    } else RectF=QRectF(TMx,TMy,TMw,TMh);
    return RectF;
}

//====================================================================================================================

QRectF cCompositionObject::GetTextMargin(QRectF Workspace,double  ADJUST_RATIO) {
    // if type is ShapeDefault, then adjust with border size
    if ((TMType==TEXTMARGINS_FULLSHAPE)||(TMType==TEXTMARGINS_CUSTOM)) {
        return QRectF(TMx*w*Workspace.width(),TMy*h*Workspace.height(),
                      TMw*w*Workspace.width(),TMh*h*Workspace.height());
    } else {
        double FullMargin=double(PenSize)*ADJUST_RATIO/double(2);
        return QRectF(ShapeFormDefinition[BackgroundForm].TMx*w*Workspace.width()+FullMargin,ShapeFormDefinition[BackgroundForm].TMy*h*Workspace.height()+FullMargin,
                      ShapeFormDefinition[BackgroundForm].TMw*w*Workspace.width()-FullMargin*2,ShapeFormDefinition[BackgroundForm].TMh*h*Workspace.height()-FullMargin*2);
    }
}

//====================================================================================================================

void cCompositionObject::SaveToXML(QDomElement &domDocument,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,bool CheckTypeComposition,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool SaveBrush,bool IsModel) {
    // Force a refresh of IsTextEmpty flag
    QTextDocument TextDocument;
    TextDocument.setHtml(Text);
    IsTextEmpty =TextDocument.isEmpty();

    QDomDocument    DomDocument;
    QDomElement     Element=DomDocument.createElement(ElementName);

    Element.setAttribute("TypeComposition",TypeComposition);
    Element.setAttribute("IndexKey",IndexKey);
    Element.setAttribute("IsVisible",IsVisible?"1":"0");
    Element.setAttribute("SameAsPrevShot",BlockInheritance?"1":"0");

    // Attribut of the object
    Element.setAttribute("x",x);                                    // Position x
    Element.setAttribute("y",y);                                    // Position x
    Element.setAttribute("w",w);                                    // size width
    Element.setAttribute("h",h);                                    // size height

    if (RotateZAxis!=DEFAULT_ROTATEZAXIS)                   Element.setAttribute("RotateZAxis",RotateZAxis);                // Rotation from Z axis
    if (RotateXAxis!=DEFAULT_ROTATEXAXIS)                   Element.setAttribute("RotateXAxis",RotateXAxis);                // Rotation from X axis
    if (RotateYAxis!=DEFAULT_ROTATEYAXIS)                   Element.setAttribute("RotateYAxis",RotateYAxis);                // Rotation from Y axis
    if (Opacity!=DEFAULT_SHAPE_OPACITY)                     Element.setAttribute("BackgroundTransparent",Opacity);          // Opacity of the form
    if (BlockSpeedWave!=SPEEDWAVE_PROJECTDEFAULT)           Element.setAttribute("BlockSpeedWave",BlockSpeedWave);          // Block speed wave

    // Block animation
    if (BlockAnimType!=DEFAULT_BLOCKANIMTYPE)               Element.setAttribute("BlockAnimType",BlockAnimType);            // Block animation type
    if (TurnZAxis!=DEFAULT_TURNZAXIS)                       Element.setAttribute("TurnZAxis",TurnZAxis);                    // Number of turn from Z axis
    if (TurnXAxis!=DEFAULT_TURNXAXIS)                       Element.setAttribute("TurnXAxis",TurnXAxis);                    // Number of turn from X axis
    if (TurnYAxis!=DEFAULT_TURNYAXIS)                       Element.setAttribute("TurnYAxis",TurnYAxis);                    // Number of turn from Y axis
    if (Dissolve!=DEFAULT_DISSOLVE)                         Element.setAttribute("Dissolve",Dissolve);                      // Dissolve value

    // Text part
    if (!TextClipArtName.isEmpty())                         Element.setAttribute("TextClipArtName",TextClipArtName);        // ClipArt name (if text clipart mode)

    if ((!IsTextEmpty)&&((!CheckTypeComposition)||(TypeComposition!=COMPOSITIONTYPE_SHOT))) {
        Element.setAttribute("Text",Text); // Text of the object
        if (Text!="") {
            if (FontName!=DEFAULT_FONT_FAMILLY)             Element.setAttribute("FontName",FontName);                      // font name
            if (FontSize!=DEFAULT_FONT_SIZE)                Element.setAttribute("FontSize",FontSize);                      // font size
            if (FontColor!=DEFAULT_FONT_COLOR)              Element.setAttribute("FontColor",FontColor);                    // font color
            if (FontShadowColor!=DEFAULT_FONT_SHADOWCOLOR)  Element.setAttribute("FontShadowColor",FontShadowColor);        // font shadow color
            if (IsBold!=DEFAULT_FONT_ISBOLD)                Element.setAttribute("IsBold",IsBold?"1":"0");                  // true if bold mode
            if (IsItalic!=DEFAULT_FONT_ISITALIC)            Element.setAttribute("IsItalic",IsItalic?"1":"0");              // true if Italic mode
            if (IsUnderline!=DEFAULT_FONT_ISUNDERLINE)      Element.setAttribute("IsUnderline",IsUnderline?"1":"0");        // true if Underline mode
            if (HAlign!=DEFAULT_FONT_HALIGN)                Element.setAttribute("HAlign",HAlign);                          // Horizontal alignement : 0=left, 1=center, 2=right, 3=justif
            if (VAlign!=DEFAULT_FONT_VALIGN)                Element.setAttribute("VAlign",VAlign);                          // Vertical alignement : 0=up, 1=center, 2=bottom
            if (StyleText!=DEFAULT_FONT_TEXTEFFECT)         Element.setAttribute("StyleText",StyleText);                    // Style : 0=normal, 1=outerline, 2=shadow up-left, 3=shadow up-right, 4=shadow bt-left, 5=shadow bt-right
        }
    }

    // Shot part of text part
    if (TxtZoomLevel!=DEFAULT_TXTZOOMLEVEL)                 Element.setAttribute("TxtZoomLevel",TxtZoomLevel);                      // Zoom Level for text
    if (TxtScrollX!=DEFAULT_TXTSCROLLX)                     Element.setAttribute("TxtScrollX",TxtScrollX);                          // Scrolling X for text
    if (TxtScrollY!=DEFAULT_TXTSCROLLY)                     Element.setAttribute("TxtScrollY",TxtScrollY);                          // Scrolling Y for text

    // Text margins
    Element.setAttribute("TMType",TMType);                                  // Text margins type
    if (TMType==TEXTMARGINS_CUSTOM) {
        Element.setAttribute("TMx",TMx);
        Element.setAttribute("TMy",TMy);
        Element.setAttribute("TMw",TMw);
        Element.setAttribute("TMh",TMh);
    }

    // Shap part
    if (BackgroundForm!=DEFAULT_BACKGROUNDFORM)             Element.setAttribute("BackgroundForm",BackgroundForm);                  // Type of the form : 0=None, 1=Rectangle, 2=Ellipse
    if (PenSize!=DEFAULT_SHAPE_BORDERSIZE)                  Element.setAttribute("PenSize",PenSize);                                // Width of the border of the form
    if (PenStyle!=DEFAULT_SHAPE_PENSTYLE)                   Element.setAttribute("PenStyle",PenStyle);                              // Style of the pen border of the form
    if (PenColor!=DEFAULT_SHAPE_BORDERCOLOR)                Element.setAttribute("PenColor",PenColor);                              // Color of the border of the form
    if (FormShadow!=DEFAULT_SHAPE_SHADOW)                   Element.setAttribute("FormShadow",FormShadow);                          // 0=none, 1=shadow up-left, 2=shadow up-right, 3=shadow bt-left, 4=shadow bt-right
    if (FormShadowDistance!=DEFAULT_SHAPE_SHADOWDISTANCE)   Element.setAttribute("FormShadowDistance",FormShadowDistance);          // Distance from form to shadow
    if (FormShadowColor!=DEFAULT_SHAPE_SHADOWCOLOR)         Element.setAttribute("FormShadowColor",FormShadowColor);                // Shadow color

    if (SaveBrush) BackgroundBrush->SaveToXML(&Element,"BackgroundBrush",PathForRelativPath,ForceAbsolutPath,ReplaceList,ResKeyList,IsModel);    // Brush of the background of the form

    domDocument.appendChild(Element);
}

//====================================================================================================================

bool cCompositionObject::LoadFromXML(QDomElement domDocument,QString ElementName,QString PathForRelativPath,cCompositionList *ObjectComposition,QStringList *AliasList,bool CheckTypeComposition,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes,bool RestoreBrush,cCompositionObject *GlobalBlock) {
    InitDefaultValues();

    if ((domDocument.elementsByTagName(ElementName).length()>0)&&(domDocument.elementsByTagName(ElementName).item(0).isElement()==true)) {
        QDomElement Element=domDocument.elementsByTagName(ElementName).item(0).toElement();
        bool    IsOk=true;

        if (Element.hasAttribute("TypeComposition"))            TypeComposition =Element.attribute("TypeComposition").toInt();
        if (Element.hasAttribute("IsVisible"))                  IsVisible       =Element.attribute("IsVisible")=="1";
        if (Element.hasAttribute("SameAsPrevShot"))             BlockInheritance=Element.attribute("SameAsPrevShot")=="1";

        // Special case for paste operation (indexkey was changed)
        if (GlobalBlock) IndexKey=GlobalBlock->IndexKey; else if (Element.hasAttribute("IndexKey")) IndexKey=Element.attribute("IndexKey").toInt();

        // Attribut of the object
        if (Element.hasAttribute("x"))                          x               =GetDoubleValue(Element,"x");                           // Position x
        if (Element.hasAttribute("y"))                          y               =GetDoubleValue(Element,"y");                           // Position x
        if (Element.hasAttribute("w"))                          w               =GetDoubleValue(Element,"w");                           // size width
        if (Element.hasAttribute("h"))                          h               =GetDoubleValue(Element,"h");                           // size height
        if (Element.hasAttribute("BackgroundTransparent"))      Opacity         =Element.attribute("BackgroundTransparent").toInt();    // Style Opacity of the background of the form
        if (Element.hasAttribute("RotateZAxis"))                RotateZAxis     =GetDoubleValue(Element,"RotateZAxis");                 // Rotation from Z axis
        if (Element.hasAttribute("RotateXAxis"))                RotateXAxis     =GetDoubleValue(Element,"RotateXAxis");                 // Rotation from X axis
        if (Element.hasAttribute("RotateYAxis"))                RotateYAxis     =GetDoubleValue(Element,"RotateYAxis");                 // Rotation from Y axis

        if (Element.hasAttribute("BlockSpeedWave"))             BlockSpeedWave  =Element.attribute("BlockSpeedWave").toInt();           // Block speed wave

        if (Element.hasAttribute("BlockAnimType"))              BlockAnimType   =Element.attribute("BlockAnimType").toInt();            // Block animation type
        if (Element.hasAttribute("TurnZAxis"))                  TurnZAxis       =Element.attribute("TurnZAxis").toInt();                // Number of turn from Z axis
        if (Element.hasAttribute("TurnXAxis"))                  TurnXAxis       =Element.attribute("TurnXAxis").toInt();                // Number of turn from X axis
        if (Element.hasAttribute("TurnYAxis"))                  TurnYAxis       =Element.attribute("TurnYAxis").toInt();                // Number of turn from Y axis
        if (Element.hasAttribute("Dissolve"))                   Dissolve        =Element.attribute("Dissolve").toInt();                 // Dissolve value

        // Text part
        if (Element.hasAttribute("TextClipArtName"))            TextClipArtName =Element.attribute("TextClipArtName");                      // ClipArt name (if text clipart mode)
        if ((Element.hasAttribute("Text"))&&((!CheckTypeComposition)||(TypeComposition!=COMPOSITIONTYPE_SHOT))) {
            Text=Element.attribute("Text");  // Text of the object
            IsTextEmpty=Text.isEmpty();
            if ((!IsTextEmpty)&&(Text.startsWith("<!DOCTYPE HTML"))) {
                QTextDocument TextDocument;
                TextDocument.setHtml(Text);
                IsTextEmpty =TextDocument.isEmpty();
            }
            if (!IsTextEmpty) {
                if (Element.hasAttribute("FontName"))           FontName        =Element.attribute("FontName");                             // font name
                if (Element.hasAttribute("FontSize"))           FontSize        =Element.attribute("FontSize").toInt();                     // font size
                if (Element.hasAttribute("FontColor"))          FontColor       =Element.attribute("FontColor");                            // font color
                if (Element.hasAttribute("FontShadowColor"))    FontShadowColor =Element.attribute("FontShadowColor");                      // font shadow color
                if (Element.hasAttribute("IsBold"))             IsBold          =Element.attribute("IsBold")=="1";                          // true if bold mode
                if (Element.hasAttribute("IsItalic"))           IsItalic        =Element.attribute("IsItalic")=="1";                        // true if Italic mode
                if (Element.hasAttribute("IsUnderline"))        IsUnderline     =Element.attribute("IsUnderline")=="1";                     // true if Underline mode
                if (Element.hasAttribute("HAlign"))             HAlign          =Element.attribute("HAlign").toInt();                       // Horizontal alignement : 0=left, 1=center, 2=right, 3=justif
                if (Element.hasAttribute("VAlign"))             VAlign          =Element.attribute("VAlign").toInt();                       // Vertical alignement : 0=up, 1=center, 2=bottom
                if (Element.hasAttribute("StyleText"))          StyleText       =Element.attribute("StyleText").toInt();                    // Style : 0=normal, 1=outerline, 2=shadow up-left, 3=shadow up-right, 4=shadow bt-left, 5=shadow bt-right

                // Conversion from plaintext (ffd <1.3)
                if (!Text.startsWith("<!DOCTYPE HTML")) {
                    QTextDocument       TextDoc(Text);
                    QFont               Font=QFont(FontName,FontSize*2,IsBold?QFont::Bold:QFont::Normal,IsItalic?QFont::StyleItalic:QFont::StyleNormal);    // FontSize is always 10 and size if given with setPointSizeF !
                    QTextOption         OptionText((HAlign==0)?Qt::AlignLeft:(HAlign==1)?Qt::AlignHCenter:(HAlign==2)?Qt::AlignRight:Qt::AlignJustify); // Setup horizontal alignement
                    QTextCursor         Cursor(&TextDoc);
                    QTextCharFormat     TCF;
                    QTextBlockFormat    TBF;

                    Cursor.select(QTextCursor::Document);
                    OptionText.setWrapMode(QTextOption::WordWrap);                                                                              // Setup word wrap text option
                    Font.setUnderline(IsUnderline);                                                                                             // Set underline

                    TextDoc.setDefaultFont(Font);
                    TextDoc.setDefaultTextOption(OptionText);

                    TCF.setFont(Font);
                    TCF.setFontWeight(IsBold?QFont::Bold:QFont::Normal);
                    TCF.setFontItalic(IsItalic);
                    TCF.setFontUnderline(IsUnderline);
                    TCF.setForeground(QBrush(QColor(FontColor)));
                    TBF.setAlignment((HAlign==0)?Qt::AlignLeft:(HAlign==1)?Qt::AlignHCenter:(HAlign==2)?Qt::AlignRight:Qt::AlignJustify);
                    Cursor.setCharFormat(TCF);
                    Cursor.setBlockFormat(TBF);
                    Text=TextDoc.toHtml();
                }
            }
        }

        // Shot part of text part
        TMType=TEXTMARGINS_FULLSHAPE;   // For compatibility with version prior to 1.5 => force magins type to fullshape
        if (Element.hasAttribute("TxtZoomLevel"))               TxtZoomLevel        =Element.attribute("TxtZoomLevel").toInt();             // Zoom Level for text
        if (Element.hasAttribute("TxtScrollX"))                 TxtScrollX          =Element.attribute("TxtScrollX").toInt();               // Scrolling X for text
        if (Element.hasAttribute("TxtScrollY"))                 TxtScrollY          =Element.attribute("TxtScrollY").toInt();               // Scrolling Y for text
        if (Element.hasAttribute("TMType"))                     TMType              =Element.attribute("TMType").toInt();                   // Text margins type
        if (Element.hasAttribute("TMx"))                        TMx                 =GetDoubleValue(Element,"TMx");                         // Text margins
        if (Element.hasAttribute("TMy"))                        TMy                 =GetDoubleValue(Element,"TMy");                         // Text margins
        if (Element.hasAttribute("TMw"))                        TMw                 =GetDoubleValue(Element,"TMw");                         // Text margins
        if (Element.hasAttribute("TMh"))                        TMh                 =GetDoubleValue(Element,"TMh");                         // Text margins

        // Shap part
        if (Element.hasAttribute("BackgroundForm"))             BackgroundForm      =Element.attribute("BackgroundForm").toInt();           // Type of the form : 0=None, 1=Rectangle, 2=Ellipse
        if (Element.hasAttribute("PenSize"))                    PenSize             =Element.attribute("PenSize").toInt();                  // Width of the border of the form
        if (Element.hasAttribute("PenStyle"))                   PenStyle            =Element.attribute("PenStyle").toInt();                 // Style of the pen border of the form
        if (Element.hasAttribute("PenColor"))                   PenColor            =Element.attribute("PenColor");                         // Color of the border of the form
        if (Element.hasAttribute("FormShadowColor"))            FormShadowColor     =Element.attribute("FormShadowColor");                  // Color of the shadow of the form
        if (Element.hasAttribute("FormShadow"))                 FormShadow          =Element.attribute("FormShadow").toInt();               // 0=none, 1=shadow up-left, 2=shadow up-right, 3=shadow bt-left, 4=shadow bt-right
        if (Element.hasAttribute("FormShadowDistance"))         FormShadowDistance  =Element.attribute("FormShadowDistance").toInt();       // Distance from form to shadow

        if ((TypeComposition==COMPOSITIONTYPE_SHOT)&&(ObjectComposition!=NULL)) {
            // Construct link to object from DiaporamaObject->ObjectComposition
            for (int i=0;i<ObjectComposition->List.count();i++) if (ObjectComposition->List[i]->IndexKey==IndexKey) {
                BackgroundBrush->MediaObject=ObjectComposition->List[i]->BackgroundBrush->MediaObject;
                BackgroundBrush->DeleteMediaObject=false;
                Text=ObjectComposition->List[i]->Text;
                if (Text!="") {
                    FontName        =ObjectComposition->List[i]->FontName;
                    FontSize        =ObjectComposition->List[i]->FontSize;
                    FontColor       =ObjectComposition->List[i]->FontColor;
                    FontShadowColor =ObjectComposition->List[i]->FontShadowColor;
                    IsBold          =ObjectComposition->List[i]->IsBold;
                    IsItalic        =ObjectComposition->List[i]->IsItalic;
                    IsUnderline     =ObjectComposition->List[i]->IsUnderline;
                    HAlign          =ObjectComposition->List[i]->HAlign;
                    VAlign          =ObjectComposition->List[i]->VAlign;
                    StyleText       =ObjectComposition->List[i]->StyleText;
                }
                break;
            }
        }

        // Compatibility with old release : remove case BackgroundForm==0
        if (BackgroundForm==0) {
            BackgroundForm            =1;        // Set to rectangle
            PenSize                   =0;        // border=0
            BackgroundBrush->BrushType=0;        // brushtype=no brush
        }
        if (RestoreBrush) {
            bool ModifyFlag;
            IsOk=BackgroundBrush->LoadFromXML(&Element,"BackgroundBrush",PathForRelativPath,AliasList,&ModifyFlag,ResKeyList,DuplicateRes);  // Brush of the background of the form
            if (ModifyFlag) ((MainWindow *)ApplicationConfig->TopLevelWindow)->SetModifyFlag(true);
        }

        // Ensure unvisible video have no sound !
        if ((!IsVisible)&&(BackgroundBrush->MediaObject)&&(BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)) BackgroundBrush->SoundVolume=0;

        return IsOk;
    }
    return false;
}

//====================================================================================================================

void cCompositionObject::ComputeOptimisationFlags(cCompositionObject *Previous) {
    QTextDocument TextDocument;
    TextDocument.setHtml(Text);
    IsTextEmpty =TextDocument.isEmpty();
    IsFullScreen=(IsTextEmpty)&&(BackgroundBrush->MediaObject)
                 &&(IsVisible)&&(BlockAnimType==0)&&(BackgroundForm==1)&&(PenSize==0)&&(Opacity==0)&&(RotateZAxis==0)&&(RotateXAxis==0)&&(RotateYAxis==0)
                 &&(int(x*10000)==0)&&(int(y*10000)==0)&&(int(w*10000)==10000)&&(int(h*10000)==10000)
                 &&((!Previous)||((x==Previous->x)&&(y==Previous->y)&&(w==Previous->w)&&(h==Previous->h)
                                  &&(RotateXAxis==Previous->RotateXAxis)&&(RotateYAxis==Previous->RotateYAxis)&&(RotateZAxis==Previous->RotateZAxis)));
}

//====================================================================================================================

int cCompositionObject::GetAutoCompoSize(int ffDProjectGeometry) {
    int   ImageType         =BackgroundBrush->GetImageType();
    int   AutoCompoStyle    =AUTOCOMPOSIZE_CUSTOM;

    // Calc screen size
    qreal ScreenWidth       =qreal(1920);
    qreal ScreenHeight      =qreal(ffDProjectGeometry==GEOMETRY_4_3?1440:ffDProjectGeometry==GEOMETRY_16_9?1080:ffDProjectGeometry==GEOMETRY_40_17?816:1920);
    qreal ScreenGeometry    =ScreenHeight/ScreenWidth;

    // Calc real image size (if it's and image)
    qreal RealImageWidth    =qreal(BackgroundBrush->MediaObject?BackgroundBrush->MediaObject->ImageWidth:ScreenWidth);
    qreal RealImageHeight   =qreal(BackgroundBrush->MediaObject?BackgroundBrush->MediaObject->ImageHeight:ScreenHeight);
    if ((BackgroundBrush->MediaObject)&&(BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)&&(RealImageWidth==1920)&&(RealImageHeight=1088)&&(BackgroundBrush->ApplicationConfig->Crop1088To1080)) RealImageHeight=1080;

    // Calc brush size
    qreal CanvasSize        =sqrt(RealImageWidth*RealImageWidth+RealImageHeight*RealImageHeight);   // Calc hypothenuse of the image to define full canvas
    qreal ImageWidth        =CanvasSize*BackgroundBrush->ZoomFactor;
    qreal ImageHeight       =CanvasSize*BackgroundBrush->ZoomFactor*BackgroundBrush->AspectRatio;
    qreal ImageGeometry     =ImageHeight/ImageWidth;

    // Calc destination size
    qreal DestWidth         =ScreenWidth*w;
    qreal DestHeight        =ScreenHeight*h;
    //qreal DestGeometry      =DestHeight/DestWidth;

    if ((DestWidth==ImageWidth)&&(DestHeight==ImageHeight)) AutoCompoStyle=AUTOCOMPOSIZE_REALSIZE; else {

        // Make adjustement if it's not an image and geometry is locked
        if ((ImageType==IMAGETYPE_UNKNOWN)&&(BackgroundBrush->LockGeometry)) {
            if ((ImageHeight*(h/w))<ScreenHeight)                       ScreenHeight=ScreenHeight*(h/w);
                else                                                    ScreenWidth =ScreenWidth/(h/w);
        }

        // Make adjustement if it's an image and ImageGeometry!=DestGeometry
        if ((ImageType!=IMAGETYPE_UNKNOWN)&&(ImageGeometry!=ScreenGeometry)) {
            if ((ImageHeight*(ScreenWidth/ImageWidth))<ScreenHeight)    ScreenHeight=ImageHeight*(ScreenWidth/ImageWidth);
                else                                                    ScreenWidth =ImageWidth*(ScreenHeight/ImageHeight);
        }

        if ((int(DestWidth)==int(ScreenWidth))&&    (int(DestHeight)==int(ScreenHeight)))       AutoCompoStyle=AUTOCOMPOSIZE_FULLSCREEN;
        if ((int(DestWidth)==int(ScreenWidth*0.9))&&(int(DestHeight)==int(ScreenHeight*0.9)))   AutoCompoStyle=AUTOCOMPOSIZE_TVMARGINS;
        if ((int(DestWidth)==int(2*ScreenWidth/3))&&(int(DestHeight)==int(2*ScreenHeight/3)))   AutoCompoStyle=AUTOCOMPOSIZE_TWOTHIRDSSCREEN;
        if ((int(DestWidth)==int(ScreenWidth/2))&&  (int(DestHeight)==int(ScreenHeight/2)))     AutoCompoStyle=AUTOCOMPOSIZE_HALFSCREEN;
        if ((int(DestWidth)==int(ScreenWidth/3))&&  (int(DestHeight)==int(ScreenHeight/3)))     AutoCompoStyle=AUTOCOMPOSIZE_THIRDSCREEN;
        if ((int(DestWidth)==int(ScreenWidth/4))&&  (int(DestHeight)==int(ScreenHeight/4)))     AutoCompoStyle=AUTOCOMPOSIZE_QUARTERSCREEN;
    }
    return AutoCompoStyle;
}

//====================================================================================================================

void cCompositionObject::ApplyAutoCompoSize(int AutoCompoStyle,int ffDProjectGeometry,bool AllowMove) {
    int   ImageType         =BackgroundBrush->GetImageType();

    // Calc screen size
    qreal ScreenWidth       =qreal(ffDProjectGeometry==GEOMETRY_THUMBNAIL?600:1920);
    qreal ScreenHeight      =qreal(ffDProjectGeometry==GEOMETRY_THUMBNAIL?800:ffDProjectGeometry==GEOMETRY_4_3?1440:ffDProjectGeometry==GEOMETRY_16_9?1080:ffDProjectGeometry==GEOMETRY_40_17?816:1920);
    //qreal ScreenGeometry    =ScreenHeight/ScreenWidth;

    // Calc real image size (if it's and image)
    qreal RealImageWidth    =qreal(BackgroundBrush->MediaObject?BackgroundBrush->MediaObject->ImageWidth:ScreenWidth);
    qreal RealImageHeight   =qreal(BackgroundBrush->MediaObject?BackgroundBrush->MediaObject->ImageHeight:ScreenHeight);
    if ((BackgroundBrush->MediaObject)&&(BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)&&(RealImageWidth==1920)&&(RealImageHeight=1088)&&(BackgroundBrush->ApplicationConfig->Crop1088To1080)) RealImageHeight=1080;

    // Calc brush size
    qreal CanvasSize        =sqrt(RealImageWidth*RealImageWidth+RealImageHeight*RealImageHeight);   // Calc hypothenuse of the image to define full canvas
    qreal ImageWidth        =CanvasSize*BackgroundBrush->ZoomFactor;
    qreal ImageHeight       =CanvasSize*BackgroundBrush->ZoomFactor*BackgroundBrush->AspectRatio;
    qreal ImageGeometry     =ImageHeight/ImageWidth;

    // Calc destination size
    qreal DestWidth =ScreenWidth;
    qreal DestHeight=ScreenHeight;
    switch (AutoCompoStyle) {
        case AUTOCOMPOSIZE_CUSTOM           :  DestWidth=ScreenWidth*w;    DestHeight=ScreenHeight*h;      break;      // Keep current value
        case AUTOCOMPOSIZE_REALSIZE         :  DestWidth=ImageWidth;       DestHeight=ImageHeight;         break;
        case AUTOCOMPOSIZE_FULLSCREEN       :  DestWidth=ScreenWidth;      DestHeight=ScreenHeight;        break;
        case AUTOCOMPOSIZE_TVMARGINS        :  DestWidth=ScreenWidth*0.9;  DestHeight=ScreenHeight*0.9;    break;      // TV Margins is 5% each
        case AUTOCOMPOSIZE_TWOTHIRDSSCREEN  :  DestWidth=2*ScreenWidth/3;  DestHeight=2*ScreenHeight/3;    break;
        case AUTOCOMPOSIZE_HALFSCREEN       :  DestWidth=ScreenWidth/2;    DestHeight=ScreenHeight/2;      break;
        case AUTOCOMPOSIZE_THIRDSCREEN      :  DestWidth=ScreenWidth/3;    DestHeight=ScreenHeight/3;      break;
        case AUTOCOMPOSIZE_QUARTERSCREEN    :  DestWidth=ScreenWidth/4;    DestHeight=ScreenHeight/4;      break;
    }
    qreal DestGeometry=DestHeight/DestWidth;

    // Make adjustement if it's not an image and geometry is locked
    if ((ImageType==IMAGETYPE_UNKNOWN)&&(BackgroundBrush->LockGeometry)) {
        if ((ImageHeight*(h/w))<DestHeight)                     DestHeight=DestHeight*(h/w);
            else                                                DestWidth =DestWidth/(h/w);
    }
    // Make adjustement if it's an image and ImageGeometry!=DestGeometry
    if ((ImageType!=IMAGETYPE_UNKNOWN)&&(ImageGeometry!=DestGeometry)) {
        if ((ImageHeight*(DestWidth/ImageWidth))<DestHeight)    DestHeight=ImageHeight*(DestWidth/ImageWidth);
            else                                                DestWidth =ImageWidth*(DestHeight/ImageHeight);
    }

    // Apply destination size to Composition object
    w=DestWidth/ScreenWidth;
    h=DestHeight/ScreenHeight;
    if (AllowMove) {
        x=((ScreenWidth-DestWidth)/2)/ScreenWidth;
        y=((ScreenHeight-DestHeight)/2)/ScreenHeight;
    }
    RotateZAxis =0;
    RotateXAxis =0;
    RotateYAxis =0;
}

//====================================================================================================================

QString cCompositionObject::GetBlockShapeStyle() {
    return  QString("###BackgroundForm:%1").arg(BackgroundForm)+
            QString("###PenSize:%1").arg(PenSize)+
            QString("###PenStyle:%1").arg(PenStyle)+
            QString("###FormShadow:%1").arg(FormShadow)+
            QString("###FormShadowDistance:%1").arg(FormShadowDistance)+
            QString("###Opacity:%1").arg(Opacity)+
            "###PenColor:"+PenColor+
            "###FormShadowColor:"+FormShadowColor;
}

void cCompositionObject::ApplyBlockShapeStyle(QString StyleDef) {
    QStringList List=StyleDef.split("###");

    // Apply Style
    for (int i=0;i<List.count();i++) {
        if      (List[i].startsWith("BackgroundForm:"))     BackgroundForm     =List[i].mid(QString("BackgroundForm:").length()).toInt();
        else if (List[i].startsWith("PenSize:"))            PenSize            =List[i].mid(QString("PenSize:").length()).toInt();
        else if (List[i].startsWith("PenStyle:"))           PenStyle           =List[i].mid(QString("PenStyle:").length()).toInt();
        else if (List[i].startsWith("FormShadow:"))         FormShadow         =List[i].mid(QString("FormShadow:").length()).toInt();
        else if (List[i].startsWith("FormShadowDistance:")) FormShadowDistance =List[i].mid(QString("FormShadowDistance:").length()).toInt();
        else if (List[i].startsWith("Opacity:"))            Opacity            =List[i].mid(QString("Opacity:").length()).toInt();
        else if (List[i].startsWith("PenColor:"))           PenColor           =List[i].mid(QString("PenColor:").length());
        else if (List[i].startsWith("FormShadowColor:"))    FormShadowColor    =List[i].mid(QString("FormShadowColor:").length());
    }
}

//====================================================================================================================

QString cCompositionObject::GetTextStyle() {
    return  QString("FontSize:%1").arg(FontSize)+
            QString("###HAlign:%1").arg(HAlign)+
            QString("###VAlign:%1").arg(VAlign)+
            QString("###StyleText:%1").arg(StyleText)+
            "###FontColor:"+FontColor+
            "###FontShadowColor:"+FontShadowColor+
            QString("###Bold:%1").arg(IsBold?1:0)+
            QString("###Italic:%1").arg(IsItalic?1:0)+
            QString("###Underline:%1").arg(IsUnderline?1:0)+
            "###FontName:"+FontName;
}

void cCompositionObject::ApplyTextStyle(QString StyleDef) {
    QStringList List=StyleDef.split("###");

    // Apply Style
    for (int i=0;i<List.count();i++) {
        if      (List[i].startsWith("FontSize:"))           FontSize       =List[i].mid(QString("FontSize:").length()).toInt();
        else if (List[i].startsWith("HAlign:"))             HAlign         =List[i].mid(QString("HAlign:").length()).toInt();
        else if (List[i].startsWith("VAlign:"))             VAlign         =List[i].mid(QString("VAlign:").length()).toInt();
        else if (List[i].startsWith("StyleText:"))          StyleText      =List[i].mid(QString("StyleText:").length()).toInt();
        else if (List[i].startsWith("FontColor:"))          FontColor      =List[i].mid(QString("FontColor:").length());
        else if (List[i].startsWith("FontShadowColor:"))    FontShadowColor=List[i].mid(QString("FontShadowColor:").length());
        else if (List[i].startsWith("Bold:"))               IsBold         =List[i].mid(QString("Bold:").length()).toInt()==1;
        else if (List[i].startsWith("Italic:"))             IsItalic       =List[i].mid(QString("Italic:").length()).toInt()==1;
        else if (List[i].startsWith("Underline:"))          IsUnderline    =List[i].mid(QString("Underline:").length()).toInt()==1;
        else if (List[i].startsWith("FontName:"))           FontName       =List[i].mid(QString("FontName:").length());
    }

    // Apply to html text
    QTextDocument       TextDoc;
    QFont               Font=QFont(FontName,FontSize,IsBold?QFont::Bold:QFont::Normal,IsItalic?QFont::StyleItalic:QFont::StyleNormal);
    QTextOption         OptionText((HAlign==0)?Qt::AlignLeft:(HAlign==1)?Qt::AlignHCenter:(HAlign==2)?Qt::AlignRight:Qt::AlignJustify);
    QTextCursor         Cursor(&TextDoc);
    QTextCharFormat     TCF;
    QTextBlockFormat    TBF;
    TextDoc.setHtml(Text);
    Cursor.select(QTextCursor::Document);
    OptionText.setWrapMode(QTextOption::WordWrap);
    Font.setUnderline(IsUnderline);
    TextDoc.setDefaultFont(Font);
    TextDoc.setDefaultTextOption(OptionText);
    TCF.setFont(Font);
    TCF.setFontWeight(IsBold?QFont::Bold:QFont::Normal);
    TCF.setFontItalic(IsItalic);
    TCF.setFontUnderline(IsUnderline);
    TCF.setForeground(QBrush(QColor(FontColor)));
    TBF.setAlignment((HAlign==0)?Qt::AlignLeft:(HAlign==1)?Qt::AlignHCenter:(HAlign==2)?Qt::AlignRight:Qt::AlignJustify);
    Cursor.setCharFormat(TCF);
    Cursor.setBlockFormat(TBF);
    Text=TextDoc.toHtml();
}

//====================================================================================================================

QString cCompositionObject::GetBackgroundStyle() {
    return  QString("BrushType:%1").arg(BackgroundBrush->BrushType)+
            QString("###PatternType:%1").arg(BackgroundBrush->PatternType)+
            QString("###GradientOrientation:%1").arg(BackgroundBrush->GradientOrientation)+
            "###ColorD:"+BackgroundBrush->ColorD+
            "###ColorF:"+BackgroundBrush->ColorF+
            "###ColorIntermed:"+BackgroundBrush->ColorIntermed+
            QString("###Intermediate:%1").arg(BackgroundBrush->Intermediate,0,'e')+
            "###BrushImage:"+BackgroundBrush->BrushImage;
}

void cCompositionObject::ApplyBackgroundStyle(QString StyleDef) {
    QStringList List=StyleDef.split("###");

    // Apply Style
    for (int i=0;i<List.count();i++) {
        if      (List[i].startsWith("BrushType:"))              BackgroundBrush->BrushType           =List[i].mid(QString("BrushType:").length()).toInt();
        else if (List[i].startsWith("PatternType:"))            BackgroundBrush->PatternType         =List[i].mid(QString("PatternType:").length()).toInt();
        else if (List[i].startsWith("GradientOrientation:"))    BackgroundBrush->GradientOrientation =List[i].mid(QString("GradientOrientation:").length()).toInt();
        else if (List[i].startsWith("ColorD:"))                 BackgroundBrush->ColorD              =List[i].mid(QString("ColorD:").length());
        else if (List[i].startsWith("ColorF:"))                 BackgroundBrush->ColorF              =List[i].mid(QString("ColorF:").length());
        else if (List[i].startsWith("ColorIntermed:"))          BackgroundBrush->ColorIntermed       =List[i].mid(QString("ColorIntermed:").length());
        else if (List[i].startsWith("Intermediate:"))           BackgroundBrush->Intermediate        =GetDoubleValue(List[i].mid(QString("Intermediate:").length()));
        else if (List[i].startsWith("BrushImage:"))             BackgroundBrush->BrushImage          =List[i].mid(QString("BrushImage:").length());
    }
}

//====================================================================================================================

QString cCompositionObject::GetCoordinateStyle() {
    QString Style=QString("###X:%1").arg(x,0,'e')+
            QString("###Y:%1").arg(y,0,'e')+
            QString("###W:%1").arg(w,0,'e')+
            QString("###H:%1").arg(h,0,'e')+
            QString("###RotateZAxis:%1").arg(RotateZAxis,0,'e')+
            QString("###RotateXAxis:%1").arg(RotateXAxis,0,'e')+
            QString("###RotateYAxis:%1").arg(RotateYAxis,0,'e');

    return Style;
}

void cCompositionObject::ApplyCoordinateStyle(QString StyleDef) {
    QStringList List=StyleDef.split("###");
    bool        RecalcAspectRatio=true;

    // Apply Style
    for (int i=0;i<List.count();i++) {
        if      (List[i].startsWith("X:"))              x               =GetDoubleValue(List[i].mid(QString("X:").length()));
        else if (List[i].startsWith("Y:"))              y               =GetDoubleValue(List[i].mid(QString("Y:").length()));
        else if (List[i].startsWith("W:"))              w               =GetDoubleValue(List[i].mid(QString("W:").length()));
        else if (List[i].startsWith("H:"))              h               =GetDoubleValue(List[i].mid(QString("H:").length()));
        else if (List[i].startsWith("RotateZAxis:"))    RotateZAxis     =GetDoubleValue(List[i].mid(QString("RotateZAxis:").length()));
        else if (List[i].startsWith("RotateXAxis:"))    RotateXAxis     =GetDoubleValue(List[i].mid(QString("RotateXAxis:").length()));
        else if (List[i].startsWith("RotateYAxis:"))    RotateYAxis     =GetDoubleValue(List[i].mid(QString("RotateYAxis:").length()));
    }
    // if not set by style then compute Aspect Ratio
    if (RecalcAspectRatio) {
        double DisplayW=1920,DisplayH=1080;
        if (((MainWindow *)ApplicationConfig->TopLevelWindow)->Diaporama->ImageGeometry==GEOMETRY_4_3)        { DisplayW=1440; DisplayH=1080; }
        else if (((MainWindow *)ApplicationConfig->TopLevelWindow)->Diaporama->ImageGeometry==GEOMETRY_16_9)  { DisplayW=1920; DisplayH=1080; }
        else if (((MainWindow *)ApplicationConfig->TopLevelWindow)->Diaporama->ImageGeometry==GEOMETRY_40_17) { DisplayW=1920; DisplayH=816;  }
        BackgroundBrush->AspectRatio =(h*DisplayH)/(w*DisplayW);
    }
}

//====================================================================================================================

void cCompositionObject::CopyBlockProperties(cCompositionObject *SourceBlock,cCompositionObject *DestBlock) {
    if (SourceBlock==DestBlock) return;

    // Attribut of the text part
    DestBlock->Text                 =SourceBlock->Text;                     // Text of the object
    DestBlock->TextClipArtName      =SourceBlock->TextClipArtName;          // Text ClipArt of the object
    DestBlock->FontName             =SourceBlock->FontName;                 // font name
    DestBlock->FontSize             =SourceBlock->FontSize;                 // font size
    DestBlock->FontColor            =SourceBlock->FontColor;                // font color
    DestBlock->FontShadowColor      =SourceBlock->FontShadowColor;          // font shadow color
    DestBlock->IsBold               =SourceBlock->IsBold;                   // true if bold mode
    DestBlock->IsItalic             =SourceBlock->IsItalic;                 // true if Italic mode
    DestBlock->IsUnderline          =SourceBlock->IsUnderline;              // true if Underline mode
    DestBlock->HAlign               =SourceBlock->HAlign;                   // Horizontal alignement : 0=left, 1=center, 2=right, 3=justif
    DestBlock->VAlign               =SourceBlock->VAlign;                   // Vertical alignement : 0=up, 1=center, 2=bottom
    DestBlock->StyleText            =SourceBlock->StyleText;                // Style : 0=normal, 1=outerline, 2=shadow up-left, 3=shadow up-right, 4=shadow bt-left, 5=shadow bt-right
    DestBlock->TMType               =SourceBlock->TMType;                   // Text margins type (0=full shape, 1=shape default, 2=custom)
    DestBlock->TMx                  =SourceBlock->TMx;                      // Text margins
    DestBlock->TMy                  =SourceBlock->TMy;                      // Text margins
    DestBlock->TMw                  =SourceBlock->TMw;                      // Text margins
    DestBlock->TMh                  =SourceBlock->TMh;                      // Text margins

    // Attribut of the shap part
    DestBlock->BackgroundForm       =SourceBlock->BackgroundForm;           // Type of the form : 0=None, 1=Rectangle, 2=RoundRect, 3=Buble, 4=Ellipse, 5=Triangle UP (Polygon)
    DestBlock->PenSize              =SourceBlock->PenSize;                  // Width of the border of the form
    DestBlock->PenStyle             =SourceBlock->PenStyle;                 // Style of the pen border of the form
    DestBlock->PenColor             =SourceBlock->PenColor;                 // Color of the border of the form
    DestBlock->FormShadow           =SourceBlock->FormShadow;               // 0=none, 1=shadow up-left, 2=shadow up-right, 3=shadow bt-left, 4=shadow bt-right
    DestBlock->FormShadowDistance   =SourceBlock->FormShadowDistance;       // Distance from form to shadow
    DestBlock->FormShadowColor      =SourceBlock->FormShadowColor;          // 0=none, 1=shadow up-left, 2=shadow up-right, 3=shadow bt-left, 4=shadow bt-right
    DestBlock->Opacity              =SourceBlock->Opacity;                  // Opacity of the form

    // Attribut of the BackgroundBrush of the shap part
    DestBlock->BackgroundBrush->BrushType           =SourceBlock->BackgroundBrush->BrushType;
    DestBlock->BackgroundBrush->PatternType         =SourceBlock->BackgroundBrush->PatternType;
    DestBlock->BackgroundBrush->GradientOrientation =SourceBlock->BackgroundBrush->GradientOrientation;
    DestBlock->BackgroundBrush->ColorD              =SourceBlock->BackgroundBrush->ColorD;
    DestBlock->BackgroundBrush->ColorF              =SourceBlock->BackgroundBrush->ColorF;
    DestBlock->BackgroundBrush->ColorIntermed       =SourceBlock->BackgroundBrush->ColorIntermed;
    DestBlock->BackgroundBrush->Intermediate        =SourceBlock->BackgroundBrush->Intermediate;
    DestBlock->BackgroundBrush->BrushImage          =SourceBlock->BackgroundBrush->BrushImage;
}

//====================================================================================================================

void cCompositionObject::CopyFromCompositionObject(cCompositionObject *CompositionObjectToCopy) {
    IsVisible            =CompositionObjectToCopy->IsVisible;
    x                    =CompositionObjectToCopy->x;
    y                    =CompositionObjectToCopy->y;
    w                    =CompositionObjectToCopy->w;
    h                    =CompositionObjectToCopy->h;
    RotateZAxis          =CompositionObjectToCopy->RotateZAxis;
    RotateXAxis          =CompositionObjectToCopy->RotateXAxis;
    RotateYAxis          =CompositionObjectToCopy->RotateYAxis;
    BlockSpeedWave       =CompositionObjectToCopy->BlockSpeedWave;
    if (!((CompositionObjectToCopy->BlockAnimType==BLOCKANIMTYPE_DISSOLVE)&&((CompositionObjectToCopy->Dissolve==BLOCKANIMVALUE_APPEAR)||(CompositionObjectToCopy->Dissolve==BLOCKANIMVALUE_DISAPPEAR)))) {
        BlockAnimType        =CompositionObjectToCopy->BlockAnimType;
        Dissolve             =CompositionObjectToCopy->Dissolve;
    }
    TurnZAxis            =CompositionObjectToCopy->TurnZAxis;
    TurnXAxis            =CompositionObjectToCopy->TurnXAxis;
    TurnYAxis            =CompositionObjectToCopy->TurnYAxis;
    Opacity              =CompositionObjectToCopy->Opacity;
    Text                 =CompositionObjectToCopy->Text;
    TextClipArtName      =CompositionObjectToCopy->TextClipArtName;
    FontName             =CompositionObjectToCopy->FontName;
    FontSize             =CompositionObjectToCopy->FontSize;
    FontColor            =CompositionObjectToCopy->FontColor;
    FontShadowColor      =CompositionObjectToCopy->FontShadowColor;
    IsBold               =CompositionObjectToCopy->IsBold;
    IsItalic             =CompositionObjectToCopy->IsItalic;
    IsUnderline          =CompositionObjectToCopy->IsUnderline;
    HAlign               =CompositionObjectToCopy->HAlign;
    VAlign               =CompositionObjectToCopy->VAlign;
    StyleText            =CompositionObjectToCopy->StyleText;
    BackgroundForm       =CompositionObjectToCopy->BackgroundForm;
    PenSize              =CompositionObjectToCopy->PenSize;
    PenStyle             =CompositionObjectToCopy->PenStyle;
    PenColor             =CompositionObjectToCopy->PenColor;
    FormShadowColor      =CompositionObjectToCopy->FormShadowColor;
    FormShadow           =CompositionObjectToCopy->FormShadow;
    FormShadowDistance   =CompositionObjectToCopy->FormShadowDistance;
    TxtZoomLevel         =CompositionObjectToCopy->TxtZoomLevel;
    TxtScrollX           =CompositionObjectToCopy->TxtScrollX;
    TxtScrollY           =CompositionObjectToCopy->TxtScrollY;
    TMType               =CompositionObjectToCopy->TMType;
    TMx                  =CompositionObjectToCopy->TMx;
    TMy                  =CompositionObjectToCopy->TMy;
    TMw                  =CompositionObjectToCopy->TMw;
    TMh                  =CompositionObjectToCopy->TMh;

    BackgroundBrush->CopyFromBrushDefinition(CompositionObjectToCopy->BackgroundBrush);
}

//====================================================================================================================

// ADJUST_RATIO=Adjustement ratio for pixel size (all size are given for full hd and adjust for real wanted size)
void cCompositionObject::DrawCompositionObject(cDiaporamaObject *Object,QPainter *DestPainter,double  ADJUST_RATIO,double width,double height,bool PreviewMode,int64_t Position,
                                               cSoundBlockList *SoundTrackMontage,double BlockPctDone,double ImagePctDone,cCompositionObject *PrevCompoObject,
                                               int64_t ShotDuration,bool EnableAnimation,
                                               bool Transfo,double NewX,double NewY,double NewW,double NewH,bool DisplayTextMargin,cCompositionObjectContext *PreparedBrush) {
    // W and H = 0 when producing sound track in render process
    if (!IsVisible) return;

    bool SoundOnly=(DestPainter==NULL)||(width==0)||(height==0)||(Transfo && ((NewW==0)||(NewH==0)))||(!Transfo && ((w==0)||(h==0)));

    if (SoundOnly) {
        // if SoundOnly then load Brush of type BRUSHTYPE_IMAGEDISK to SoundTrackMontage
        if ((BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK)&&(SoundTrackMontage!=NULL)) {
            QBrush *BR=BackgroundBrush->GetBrush(QRectF(0,0,0,0),PreviewMode,Position,SoundTrackMontage,ImagePctDone,NULL);
            if (BR) delete BR;
        }
    } else {
        QPainter::RenderHints hints=(!PreviewMode || (ApplicationConfig==NULL) || ApplicationConfig->Smoothing)?
                    QPainter::Antialiasing|QPainter::TextAntialiasing|QPainter::SmoothPixmapTransform|QPainter::HighQualityAntialiasing|QPainter::NonCosmeticDefaultPen:
                    QPainter::Antialiasing|QPainter::TextAntialiasing|QPainter::HighQualityAntialiasing|QPainter::NonCosmeticDefaultPen;

        if (IsFullScreen) {

            QImage Img=BackgroundBrush->GetImageDiskBrush(QRectF(0,0,w*width,h*height),PreviewMode,Position,SoundTrackMontage,ImagePctDone,PrevCompoObject?PrevCompoObject->BackgroundBrush:NULL);
            if (!Img.isNull()) DestPainter->drawImage(x*width,y*height,Img);

        } else {

            double              TheX,TheY,TheW,TheH;
            double              TheRotateZAxis,TheRotateXAxis,TheRotateYAxis;
            double              TheTxtZoomLevel,TheTxtScrollX,TheTxtScrollY;
            double              X,Y,W,H,DestOpacity;
            QList<QPolygonF>    PolygonList;
            QRectF              ShapeRect;

            if (PreparedBrush) {

                TheX            =PreparedBrush->TheX;
                TheY            =PreparedBrush->TheY;
                TheW            =PreparedBrush->TheW;
                TheH            =PreparedBrush->TheH;
                TheRotateZAxis  =PreparedBrush->TheRotateZAxis;
                TheRotateXAxis  =PreparedBrush->TheRotateXAxis;
                TheRotateYAxis  =PreparedBrush->TheRotateYAxis;
                TheTxtZoomLevel =PreparedBrush->TheTxtZoomLevel;
                TheTxtScrollX   =PreparedBrush->TheTxtScrollX;
                TheTxtScrollY   =PreparedBrush->TheTxtScrollY;
                X               =PreparedBrush->X;
                Y               =PreparedBrush->Y;
                W               =PreparedBrush->W;
                H               =PreparedBrush->H;
                DestOpacity     =PreparedBrush->DestOpacity;
                PolygonList     =PreparedBrush->PolygonList;
                ShapeRect       =PreparedBrush->ShapeRect;

            } else {

                // Define values depending on BlockPctDone and PrevCompoObject
                TheX             =Transfo?NewX:x;
                TheY             =Transfo?NewY:y;
                TheW             =Transfo?NewW:w;
                TheH             =Transfo?NewH:h;
                TheRotateZAxis   =RotateZAxis+(EnableAnimation && (BlockAnimType==BLOCKANIMTYPE_MULTIPLETURN)?360*TurnZAxis:0);
                TheRotateXAxis   =RotateXAxis+(EnableAnimation && (BlockAnimType==BLOCKANIMTYPE_MULTIPLETURN)?360*TurnXAxis:0);
                TheRotateYAxis   =RotateYAxis+(EnableAnimation && (BlockAnimType==BLOCKANIMTYPE_MULTIPLETURN)?360*TurnYAxis:0);
                TheTxtZoomLevel  =TxtZoomLevel;
                TheTxtScrollX    =TxtScrollX;
                TheTxtScrollY    =TxtScrollY;

                if (PrevCompoObject) {
                    if (PrevCompoObject->x!=TheX)                       TheX            =PrevCompoObject->x+(TheX-PrevCompoObject->x)*BlockPctDone;
                    if (PrevCompoObject->y!=TheY)                       TheY            =PrevCompoObject->y+(TheY-PrevCompoObject->y)*BlockPctDone;
                    if (PrevCompoObject->w!=TheW)                       TheW            =PrevCompoObject->w+(TheW-PrevCompoObject->w)*BlockPctDone;
                    if (PrevCompoObject->h!=TheH)                       TheH            =PrevCompoObject->h+(TheH-PrevCompoObject->h)*BlockPctDone;
                    if (PrevCompoObject->RotateZAxis!=TheRotateZAxis)   TheRotateZAxis  =PrevCompoObject->RotateZAxis+(TheRotateZAxis-PrevCompoObject->RotateZAxis)*BlockPctDone;
                    if (PrevCompoObject->RotateXAxis!=TheRotateXAxis)   TheRotateXAxis  =PrevCompoObject->RotateXAxis+(TheRotateXAxis-PrevCompoObject->RotateXAxis)*BlockPctDone;
                    if (PrevCompoObject->RotateYAxis!=TheRotateYAxis)   TheRotateYAxis  =PrevCompoObject->RotateYAxis+(TheRotateYAxis-PrevCompoObject->RotateYAxis)*BlockPctDone;
                    if (PrevCompoObject->TxtZoomLevel!=TheTxtZoomLevel) TheTxtZoomLevel =PrevCompoObject->TxtZoomLevel+(TheTxtZoomLevel-PrevCompoObject->TxtZoomLevel)*BlockPctDone;
                    if (PrevCompoObject->TxtScrollX!=TheTxtScrollX)     TheTxtScrollX   =PrevCompoObject->TxtScrollX+(TheTxtScrollX-PrevCompoObject->TxtScrollX)*BlockPctDone;
                    if (PrevCompoObject->TxtScrollY!=TheTxtScrollY)     TheTxtScrollY   =PrevCompoObject->TxtScrollY+(TheTxtScrollY-PrevCompoObject->TxtScrollY)*BlockPctDone;
                } else {
                    if (EnableAnimation && (BlockAnimType==BLOCKANIMTYPE_MULTIPLETURN)) {
                        TheRotateZAxis=RotateZAxis+360*TurnZAxis*BlockPctDone;
                        TheRotateXAxis=RotateXAxis+360*TurnXAxis*BlockPctDone;
                        TheRotateYAxis=RotateYAxis+360*TurnYAxis*BlockPctDone;
                    }
                }

                //**********************************************************************************

                X           =TheX*width;
                Y           =TheY*height;
                W           =TheW*width;
                H           =TheH*height;
                DestOpacity =(Opacity==1?0.75:Opacity==2?0.50:Opacity==3?0.25:1);

                if ((W>0)&&(H>0)) {
                    X=floor(X);
                    Y=floor(Y);
                    W=floor(W/2)*2;
                    H=floor(H/2)*2;
                    //**********************************************************************************
                    // Opacity and dissolve annimation
                    //**********************************************************************************
                    if (EnableAnimation) {
                        if (BlockAnimType==BLOCKANIMTYPE_DISSOLVE) {

                            double BlinkNumber=0;
                            switch (Dissolve) {
                                case BLOCKANIMVALUE_APPEAR        : DestOpacity=DestOpacity*BlockPctDone;       break;
                                case BLOCKANIMVALUE_DISAPPEAR     : DestOpacity=DestOpacity*(1-BlockPctDone);   break;
                                case BLOCKANIMVALUE_BLINK_SLOW    : BlinkNumber=0.25;                           break;
                                case BLOCKANIMVALUE_BLINK_MEDIUM  : BlinkNumber=0.5;                            break;
                                case BLOCKANIMVALUE_BLINK_FAST    : BlinkNumber=1;                              break;
                                case BLOCKANIMVALUE_BLINK_VERYFAST: BlinkNumber=2;                              break;
                            }
                            if (BlinkNumber!=0) {
                                BlinkNumber=BlinkNumber*ShotDuration;
                                if (int(BlinkNumber/1000)!=(BlinkNumber/1000)) BlinkNumber=int(BlinkNumber/1000)+1; else BlinkNumber=int(BlinkNumber/1000); // Adjust to upper 1000
                                double FullPct=BlockPctDone*BlinkNumber*100;
                                FullPct=int(FullPct)-int(FullPct/100)*100;
                                FullPct=(FullPct/100)*2;
                                if (FullPct<1)  DestOpacity=DestOpacity*(1-FullPct);
                                    else        DestOpacity=DestOpacity*(FullPct-1);
                            }
                        }
                    }
                    //***********************************************************************************
                    // Compute shape
                    //***********************************************************************************
                    PolygonList=ComputePolygon(BackgroundForm,X,Y,W,H);
                    ShapeRect  =PolygonToRectF(PolygonList);
                }
            }

            if ((W>0)&&(H>0)) {

                DestPainter->save();
                DestPainter->setOpacity(DestOpacity);
                DestPainter->setRenderHints(hints,true);
                DestPainter->setCompositionMode(QPainter::CompositionMode_SourceOver);

                QPainter    *Painter=DestPainter;
                QImage      ShadowImg;

                //***********************************************************************************
                // If shadow, draw all on a buffered image instead of drawing directly to destination painter
                //***********************************************************************************
                if (FormShadow) {
                    ShadowImg=QImage(width,height,QImage::Format_ARGB32_Premultiplied);
                    Painter=new QPainter();
                    Painter->begin(&ShadowImg);
                    Painter->setRenderHints(hints,true);
                    Painter->setCompositionMode(QPainter::CompositionMode_Source);
                    Painter->fillRect(QRect(0,0,width,height),Qt::transparent);
                    Painter->setCompositionMode(QPainter::CompositionMode_SourceOver);
                }

                //***********************************************************************************
                // Prepare Transform Matrix
                //***********************************************************************************

                QPointF     CenterF(floor(ShapeRect.center().x()/2)*2,floor(ShapeRect.center().y()/2)*2);
                QTransform  Matrix;
                Matrix.translate(CenterF.x(),CenterF.y());                          // Translate to be sure we are on the center of the shape
                if (TheRotateZAxis!=0) Matrix.rotate(TheRotateZAxis,Qt::ZAxis);     // Standard axis
                if (TheRotateXAxis!=0) Matrix.rotate(TheRotateXAxis,Qt::XAxis);     // Rotate from X axis
                if (TheRotateYAxis!=0) Matrix.rotate(TheRotateYAxis,Qt::YAxis);     // Rotate from Y axis
                Painter->setWorldTransform(Matrix,false);

                if (TextClipArtName!="") {
                    QSvgRenderer SVGImg(TextClipArtName);
                    if (!SVGImg.isValid()) {
                        ToLog(LOGMSG_CRITICAL,QString("IN:cCompositionObject:DrawCompositionObject: Error loading ClipArt Image %1").arg(TextClipArtName));
                    } else {
                        SVGImg.render(Painter,QRectF(-W/2,-H/2,W,H));
                    }
                } else if ((BackgroundBrush->BrushType!=BRUSHTYPE_NOBRUSH)||(PenSize!=0)) {
                    for (int i=0;i<PolygonList.count();i++) PolygonList[i].translate(-CenterF.x(),-CenterF.y());
                    QRectF NewShapeRect=PolygonToRectF(PolygonList);

                    //***********************************************************************************
                    // Prepare pen
                    //***********************************************************************************

                    QPen Pen;
                    Pen.setCapStyle(Qt::RoundCap);
                    Pen.setJoinStyle(Qt::RoundJoin);
                    Pen.setCosmetic(false);
                    Pen.setStyle(Qt::SolidLine);
                    if (PenSize==0) Painter->setPen(Qt::NoPen); else {
                        Pen.setColor(PenColor);
                        Pen.setWidthF(double(PenSize)*ADJUST_RATIO);
                        Pen.setStyle((Qt::PenStyle)PenStyle);
                        Painter->setPen(Pen);
                    }

                    //***********************************************************************************
                    // Prepare brush
                    //***********************************************************************************
                    if (BackgroundBrush->BrushType==BRUSHTYPE_NOBRUSH) Painter->setBrush(Qt::NoBrush); else {

                        // Create brush with filter and Ken Burns effect !
                        QBrush *BR=BackgroundBrush->GetBrush(QRectF(0,0,W,H),PreviewMode,Position,BackgroundBrush->SoundVolume!=0?SoundTrackMontage:NULL,ImagePctDone,PrevCompoObject?PrevCompoObject->BackgroundBrush:NULL);
                        if (BR) {
                            QTransform  MatrixBR;
                            // Avoid phantom lines for image brush
                            if ((!BR->textureImage().isNull())&&((TheRotateZAxis!=0)||(TheRotateXAxis!=0)||(TheRotateYAxis!=0))) {
                                QImage   TempImage(W+4,H+4,QImage::Format_ARGB32_Premultiplied);
                                QPainter TempPainter;
                                TempPainter.begin(&TempImage);
                                TempPainter.setRenderHints(hints,true);
                                TempPainter.setCompositionMode(QPainter::CompositionMode_Source);
                                TempPainter.fillRect(QRect(0,0,TempImage.width(),TempImage.height()),Qt::transparent);
                                TempPainter.setCompositionMode(QPainter::CompositionMode_SourceOver);
                                TempPainter.drawImage(2,2,BR->textureImage());
                                TempPainter.end();
                                delete BR;
                                BR=new QBrush(TempImage);
                                MatrixBR.translate(NewShapeRect.left()+(X-ShapeRect.left())-2,NewShapeRect.top()+(Y-ShapeRect.top())-2);
                            } else {
                                MatrixBR.translate(NewShapeRect.left()+(X-ShapeRect.left()),NewShapeRect.top()+(Y-ShapeRect.top()));
                            }
                            BR->setTransform(MatrixBR);         // Apply transform matrix to the brush
                            Painter->setBrush(*BR);
                            delete BR;
                        } else {
                            ToLog(LOGMSG_CRITICAL,"Error in cCompositionObject::DrawCompositionObject Brush is NULL !");
                            Painter->setBrush(Qt::NoBrush);
                        }
                    }

                    //***********************************************************************************
                    // Draw shape (with pen and brush and transform matrix)
                    //***********************************************************************************
                    if (BackgroundBrush->BrushType==BRUSHTYPE_NOBRUSH) Painter->setCompositionMode(QPainter::CompositionMode_Source);
                    for (int i=0;i<PolygonList.count();i++) Painter->drawPolygon(PolygonList.at(i));
                    if (BackgroundBrush->BrushType==BRUSHTYPE_NOBRUSH) Painter->setCompositionMode(QPainter::CompositionMode_SourceOver);
                }
                //**********************************************************************************
                // Text part
                //**********************************************************************************
                if ((TheTxtZoomLevel>0)&&(!IsTextEmpty)) {
                    QTextDocument   TextDocument;
                    QString         TheText=Variable.ResolveTextVariable(Object,Text);
                    TextDocument.setHtml(TheText);

                    double          FullMargin=((TMType==TEXTMARGINS_FULLSHAPE)||(TMType==TEXTMARGINS_CUSTOM))?0:double(PenSize)*ADJUST_RATIO/double(2);
                    QRectF          TextMargin;
                    double          PointSize =((double(width)/double(SCALINGTEXTFACTOR)));

                    if ((TMType==TEXTMARGINS_FULLSHAPE)||(TMType==TEXTMARGINS_CUSTOM)) TextMargin=QRectF(TMx*TheW*width,TMy*TheH*height,TMw*TheW*width,TMh*TheH*height);
                    else if (TextClipArtName!="") {
                            cTextFrameObject *TFO=&TextFrameList.List[TextFrameList.SearchImage(TextClipArtName)];
                            TextMargin=QRectF(TFO->TMx*TheW*width+FullMargin,TFO->TMy*TheH*height+FullMargin,
                                              TFO->TMw*TheW*width-FullMargin*2,TFO->TMh*TheH*height-FullMargin*2);
                    } else {
                        TextMargin=QRectF(ShapeFormDefinition[BackgroundForm].TMx*TheW*width+FullMargin,ShapeFormDefinition[BackgroundForm].TMy*TheH*height+FullMargin,
                                          ShapeFormDefinition[BackgroundForm].TMw*TheW*width-FullMargin*2,ShapeFormDefinition[BackgroundForm].TMh*TheH*height-FullMargin*2);
                    }
                    TextMargin.translate(-ShapeRect.width()/2,-ShapeRect.height()/2);

                    if (DisplayTextMargin) {
                        QPen PP(Qt::blue);
                        PP.setStyle(Qt::DotLine);
                        PP.setWidth(1);
                        Painter->setPen(PP);
                        Painter->setBrush(Qt::NoBrush);
                        Painter->drawRect(TextMargin);
                    }

                    Painter->setClipRect(TextMargin);
                    Painter->setClipping(true);         // Not sure is needed !

                    TextDocument.setTextWidth(TextMargin.width()/PointSize);

                    QRectF  FmtBdRect(0,0,
                                      double(TextDocument.documentLayout()->documentSize().width())*(TheTxtZoomLevel/100)*PointSize,
                                      double(TextDocument.documentLayout()->documentSize().height())*(TheTxtZoomLevel/100)*PointSize);

                    int     MaxH  =TextMargin.height()>FmtBdRect.height()?TextMargin.height():FmtBdRect.height();
                    double  DecalX=(TheTxtScrollX/100)*TextMargin.width()+TextMargin.center().x()-TextMargin.width()/2+(TextMargin.width()-FmtBdRect.width())/2;
                    double  DecalY=(-TheTxtScrollY/100)*MaxH+TextMargin.center().y()-TextMargin.height()/2;

                    if (VAlign==0)      ;                                                               //Qt::AlignTop (Nothing to do)
                    else if (VAlign==1) DecalY=DecalY+(TextMargin.height()-FmtBdRect.height())/2;       //Qt::AlignVCenter
                    else                DecalY=DecalY+(TextMargin.height()-FmtBdRect.height());         //Qt::AlignBottom)

                    QAbstractTextDocumentLayout::PaintContext Context;

                    QTextCursor         Cursor(&TextDocument);
                    QTextCharFormat     TCF;

                    Cursor.select(QTextCursor::Document);
                    if (StyleText==1) {
                        // Add outerline for painting
                        TCF.setTextOutline(QPen(QColor(FontShadowColor)));
                        Cursor.mergeCharFormat(TCF);
                    } else if (StyleText!=0) {
                        // Paint shadow of the text
                        TCF.setForeground(QBrush(QColor(FontShadowColor)));
                        Cursor.mergeCharFormat(TCF);
                        Painter->save();
                        switch (StyleText) {
                            case 2: Painter->translate(DecalX-1,DecalY-1);   break;  //2=shadow up-left
                            case 3: Painter->translate(DecalX+1,DecalY-1);   break;  //3=shadow up-right
                            case 4: Painter->translate(DecalX-1,DecalY+1);   break;  //4=shadow bt-left
                            case 5: Painter->translate(DecalX+1,DecalY+1);   break;  //5=shadow bt-right
                        }
                        Painter->scale((TheTxtZoomLevel/100)*PointSize,(TheTxtZoomLevel/100)*PointSize);
                        TextDocument.documentLayout()->draw(Painter,Context);
                        Painter->restore();
                        TextDocument.setHtml(TheText);     // Restore Text Document
                    }

                    Painter->save();
                    Painter->translate(DecalX,DecalY);
                    Painter->scale((TheTxtZoomLevel/100)*PointSize,(TheTxtZoomLevel/100)*PointSize);
                    TextDocument.documentLayout()->draw(Painter,Context);
                    Painter->restore();
                }

                //**********************************************************************************
                // Block shadow part
                //**********************************************************************************

                // if shadow, draw buffered image to destination painter
                if (FormShadow) {
                    Painter->end();
                    delete Painter;

                    // 1st step : construct ImgShadow as a mask from ShadowImg
                    QImage      ImgShadow   =ShadowImg.copy();
                    u_int8_t    *Data       =ImgShadow.bits();
                    QColor      SColor      =QColor(FormShadowColor);
                    u_int8_t    R           =SColor.red();
                    u_int8_t    G           =SColor.green();
                    u_int8_t    B           =SColor.blue();

                    for (int i=0;i<(width-1)*(height-1);i++) {
                      if (*(Data+3)!=0) {
                        *Data++=B;
                        *Data++=G;
                        *Data++=R;
                        if (*Data) *Data++=0xff;    // force alpha chanel to 1 or 0
                      } else Data+=4;
                    }

                    // 2nd step : Draw images
                    double Distance=double(FormShadowDistance)*ADJUST_RATIO;
                    switch (FormShadow) {
                        case 1  : DestPainter->setOpacity(0.75*DestOpacity); DestPainter->drawImage(-Distance,-Distance,ImgShadow);     break;      // shadow up-left
                        case 2  : DestPainter->setOpacity(0.75*DestOpacity); DestPainter->drawImage(Distance,-Distance,ImgShadow);      break;      // shadow up-right
                        case 3  : DestPainter->setOpacity(0.75*DestOpacity); DestPainter->drawImage(-Distance,Distance,ImgShadow);      break;      // shadow bt-left
                        default : DestPainter->setOpacity(0.75*DestOpacity); DestPainter->drawImage(Distance,Distance,ImgShadow);       break;      // shadow bt-right
                    }
                    DestPainter->setOpacity(DestOpacity);
                    DestPainter->drawImage(0,0,ShadowImg);

                }

                DestPainter->restore();
            }
        }
    }
}

//*********************************************************************************************************************************************

cCompositionList::cCompositionList(QObject *Parent):QObject(Parent) {
    setObjectName("cCompositionList");

    TypeComposition=COMPOSITIONTYPE_BACKGROUND;
}

//====================================================================================================================

cCompositionList::~cCompositionList() {
    while (List.count()>0) delete List.takeLast();
}

//====================================================================================================================

void cCompositionList::SaveToXML(QDomElement &domDocument,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel) {
    QDomDocument    DomDocument;
    QDomElement     Element=DomDocument.createElement(ElementName);
    // Save composition list
    Element.setAttribute("TypeComposition",TypeComposition);
    Element.setAttribute("CompositionNumber",List.count());
    for (int i=0;i<List.count();i++) List[i]->SaveToXML(Element,"Composition-"+QString("%1").arg(i),PathForRelativPath,ForceAbsolutPath,true,ReplaceList,ResKeyList,true,IsModel);
    domDocument.appendChild(Element);
}

//====================================================================================================================

bool cCompositionList::LoadFromXML(QDomElement domDocument,QString ElementName,QString PathForRelativPath,cCompositionList *ObjectComposition,QStringList *AliasList,cApplicationConfig *ApplicationConfig,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes) {
    if ((domDocument.elementsByTagName(ElementName).length()>0)&&(domDocument.elementsByTagName(ElementName).item(0).isElement()==true)) {
        QDomElement Element=domDocument.elementsByTagName(ElementName).item(0).toElement();
        bool    IsOk=true;

        // Load composition list
        List.clear();
        TypeComposition=Element.attribute("TypeComposition").toInt();
        int CompositionNumber=Element.attribute("CompositionNumber").toInt();
        for (int i=0;i<CompositionNumber;i++) {
            cCompositionObject *CompositionObject=new cCompositionObject(TypeComposition,0,((MainWindow *)ApplicationConfig->TopLevelWindow)->ApplicationConfig,this);    // IndexKey will be load from XML
            if (!CompositionObject->LoadFromXML(Element,"Composition-"+QString("%1").arg(i),PathForRelativPath,ObjectComposition,AliasList,true,ResKeyList,DuplicateRes,true)) {
                //IsOk=false;
                delete CompositionObject;
            } else {
                List.append(CompositionObject);
            }
        }
        return IsOk;
    } else return false;
}

//*********************************************************************************************************************************************
//
// Base class containing scene definition
//
//*********************************************************************************************************************************************

cDiaporamaShot::cDiaporamaShot(cDiaporamaObject *DiaporamaObject):QObject(DiaporamaObject),ShotComposition(this) {
    setObjectName("cDiaporamaShot");

    Parent                          = DiaporamaObject;
    StaticDuration                  = ((MainWindow *)Parent->Parent->ApplicationConfig->TopLevelWindow)->ApplicationConfig->FixedDuration;    // Duration (in msec) of the static part animation
    ShotComposition.TypeComposition = COMPOSITIONTYPE_SHOT;
}

//====================================================================================================================

cDiaporamaShot::~cDiaporamaShot() {
}

//===============================================================

void cDiaporamaShot::SaveToXML(QDomElement &domDocument,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,bool LimitedInfo,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool IsModel) {
    QDomDocument    DomDocument;
    QDomElement     Element=DomDocument.createElement(ElementName);

    if (!LimitedInfo) Element.setAttribute("StaticDuration",qlonglong(StaticDuration));                                         // Duration (in msec) of the static part animation
    ShotComposition.SaveToXML(Element,"ShotComposition",PathForRelativPath,ForceAbsolutPath,ReplaceList,ResKeyList,IsModel);    // Composition list for this object
    domDocument.appendChild(Element);
}

//===============================================================

bool cDiaporamaShot::LoadFromXML(QDomElement domDocument,QString ElementName,QString PathForRelativPath,cCompositionList *ObjectComposition,QStringList *AliasList,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes) {
    if ((domDocument.elementsByTagName(ElementName).length()>0)&&(domDocument.elementsByTagName(ElementName).item(0).isElement()==true)) {
        QDomElement Element=domDocument.elementsByTagName(ElementName).item(0).toElement();
        if (Element.hasAttribute("StaticDuration")) StaticDuration=Element.attribute("StaticDuration").toInt();           // Duration (in msec) of the static part animation
        // Composition list for this object
        ShotComposition.LoadFromXML(Element,"ShotComposition",PathForRelativPath,ObjectComposition,AliasList,Parent->Parent->ApplicationConfig,ResKeyList,DuplicateRes);
        return true;
    }
    return false;
}

//*********************************************************************************************************************************************
//
// Base object for all media type
//
//*********************************************************************************************************************************************

cDiaporamaObject::cDiaporamaObject(cDiaporama *Diaporama):QObject(Diaporama),ObjectComposition(this) {
    setObjectName("cDiaporamaObject");

    BackgroundBrush         =new cBrushDefinition(NULL,Diaporama->ApplicationConfig);
    Parent                  =Diaporama;
    SlideName               =QApplication::translate("MainWindow","Title","Default slide name when no file");
    NextIndexKey            =1;
    ThumbnailKey            =-1;
    CachedDuration          =0;
    CachedTransitDuration   =0;
    CachedStartPosition     =0;
    CachedMusicIndex        =0;
    CachedMusicListIndex    =0;
    CachedBackgroundIndex   =0;
    CachedHaveSound         =0;
    CachedSoundVolume       =0;
    CachedHaveFilter        =false;
    CachedMusicFadIN        =false;
    CachedPrevMusicFadOUT   =false;
    CachedMusicEnd          =false;
    CachedPrevMusicEnd      =false;
    CachedMusicRemaining    =0;

    InitDefaultValues();

    // Add an empty scene
    List.append(new cDiaporamaShot(this));
}

//====================================================================================================================

void cDiaporamaObject::InitDefaultValues() {
    // Set default/initial value
    StartNewChapter                         = DEFAULT_STARTNEWCHAPTER;      // if true then start a new chapter from this slide
    ChapterName                             = QApplication::translate("cModelList","Chapter title");
    OverrideProjectEventDate                = DEFAULT_CHAPTEROVERRIDE;
    ChapterEventDate                        = Parent->ProjectInfo->EventDate;
    OverrideChapterLongDate                 = DEFAULT_CHAPTEROVERRIDE;
    ChapterLocation                         = NULL;
    ChapterLongDate                         = "";
    BackgroundType                          = false;                        // Background type : false=same as precedent - true=new background definition
    BackgroundBrush->BrushType              = BRUSHTYPE_SOLID;
    BackgroundBrush->ColorD                 = "#000000";                    // Background color
    MusicType                               = DEFAULT_MUSICTYPE;            // Music type : false=same as precedent - true=new playlist definition
    MusicPause                              = DEFAULT_MUSICPAUSE;           // true if music is pause during this object
    MusicReduceVolume                       = DEFAULT_MUSICREDUCEVOLUME;    // true if volume if reduce by MusicReduceFactor
    MusicReduceFactor                       = DEFAULT_MUSICREDUCEFACTOR;    // factor for volume reduction if MusicReduceVolume is true
    TransitionFamilly                       = TRANSITIONFAMILLY_BASE;       // Transition familly
    TransitionSubType                       = 0;                            // Transition type in the familly
    TransitionDuration                      = DEFAULT_TRANSITIONDURATION;   // Transition duration (in msec)
    TransitionSpeedWave                     = SPEEDWAVE_PROJECTDEFAULT;
    ObjectComposition.TypeComposition       = COMPOSITIONTYPE_OBJECT;
}

//====================================================================================================================

cDiaporamaObject::~cDiaporamaObject() {
    if (BackgroundBrush) {
        delete BackgroundBrush;
        BackgroundBrush=NULL;
    }
    if (ChapterLocation) {
        delete ((cLocation *)ChapterLocation);
        ChapterLocation=NULL;
    }
    while (List.count()>0) delete List.takeLast();
}

//====================================================================================================================

QString cDiaporamaObject::GetDisplayName() {
    return SlideName;
}

//===============================================================
// Draw Thumb
void cDiaporamaObject::DrawThumbnail(int ThumbWidth,int ThumbHeight,QPainter *Painter,int AddX,int AddY,int ShotNumber) {
    QImage Thumb;
    if (ShotNumber==0) Parent->ApplicationConfig->SlideThumbsTable->GetThumbs(&ThumbnailKey,&Thumb);

    if ((Thumb.isNull())||(Thumb.width()!=ThumbWidth)||(Thumb.height()!=ThumbHeight)) {
        Thumb=QImage(ThumbWidth,ThumbHeight,QImage::Format_ARGB32_Premultiplied);
        QPainter  P;
        P.begin(&Thumb);
        P.fillRect(0,0,ThumbWidth,ThumbHeight,Transparent);
        if (List.count()>0) for (int j=0;j<List[ShotNumber]->ShotComposition.List.count();j++) {
            cVideoFile *Video=(List[ShotNumber]->ShotComposition.List[j]->BackgroundBrush->MediaObject)&&(List[ShotNumber]->ShotComposition.List[j]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)?
                        (cVideoFile *)List[ShotNumber]->ShotComposition.List[j]->BackgroundBrush->MediaObject:NULL;
            int StartPosToAdd=(Video)?QTime(0,0,0,0).msecsTo(Video->StartPos):0;
            if (ShotNumber!=0) {
                // Calc Start position of the video (depending on visible state)
                int IndexKeyToFind=List[ShotNumber]->ShotComposition.List[j]->IndexKey;
                for (int k=0;k<ShotNumber;k++)
                  for (int l=0;l<List[k]->ShotComposition.List.count();l++) if (List[k]->ShotComposition.List[l]->IndexKey==IndexKeyToFind) {
                    if (List[k]->ShotComposition.List[l]->IsVisible) StartPosToAdd+=List[k]->StaticDuration;
                    l=List[k]->ShotComposition.List.count();    // Stop loop
                }
            }
            List[ShotNumber]->ShotComposition.List[j]->DrawCompositionObject(this,&P,double(ThumbHeight)/1080,ThumbWidth,ThumbHeight,true,StartPosToAdd,NULL,0,0,NULL,false,List[ShotNumber]->StaticDuration,false);
        }
        P.end();
        if (ShotNumber==0) Parent->ApplicationConfig->SlideThumbsTable->SetThumbs(&ThumbnailKey,Thumb);
    }
    if (Painter) Painter->drawImage(AddX,AddY,Thumb);
}

//===============================================================

int cDiaporamaObject::GetSpeedWave() {
    if (TransitionSpeedWave==SPEEDWAVE_PROJECTDEFAULT) return Parent->TransitionSpeedWave; else return TransitionSpeedWave;
}

//===============================================================

int64_t cDiaporamaObject::GetTransitDuration() {
    if ((TransitionFamilly==0)&&(TransitionSubType==0)) return 0; else return TransitionDuration;
}

int64_t cDiaporamaObject::GetCumulTransitDuration() {
    // Adjust duration to ensure transition will be full !
    int       ObjectIndex    =Parent->GetObjectIndex(this);
    int64_t TransitDuration=GetTransitDuration();
    if (ObjectIndex<(Parent->List.count()-1)) TransitDuration+=Parent->List[ObjectIndex+1]->GetTransitDuration();
    return TransitDuration;
}

//===============================================================

int64_t cDiaporamaObject::GetDuration() {
    int64_t Duration=0;
    for (int i=0;i<List.count();i++) Duration=Duration+List[i]->StaticDuration;

    // Adjust duration to ensure transition will be full !
    int64_t TransitDuration=GetCumulTransitDuration();
    if (Duration<TransitDuration) Duration=TransitDuration;

    // Calc minimum duration to ensure all video will be full !
    int MaxMovieDuration=0;
    for (int Block=0;Block<ObjectComposition.List.count();Block++)
      if ((ObjectComposition.List[Block]->BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK)&&(ObjectComposition.List[Block]->BackgroundBrush->MediaObject)&&(ObjectComposition.List[Block]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)) {
        int IndexKey            =ObjectComposition.List[Block]->IndexKey;
        int64_t WantedDuration  =((cVideoFile*)ObjectComposition.List[Block]->BackgroundBrush->MediaObject)->StartPos.msecsTo(((cVideoFile*)ObjectComposition.List[Block]->BackgroundBrush->MediaObject)->EndPos);
        int64_t CurrentDuration =0;
        for (int i=0;i<List.count();i++) {
            for (int j=0;j<List[i]->ShotComposition.List.count();j++) if (List[i]->ShotComposition.List[j]->IndexKey==IndexKey) {
                if (List[i]->ShotComposition.List[j]->IsVisible) {
                    WantedDuration-=List[i]->StaticDuration;
                    if (WantedDuration<0) WantedDuration=0;
                }
            }
            CurrentDuration+=List[i]->StaticDuration;
        }
        CurrentDuration+=WantedDuration;
        if (MaxMovieDuration<CurrentDuration) MaxMovieDuration=CurrentDuration;
    }
    if (Duration<MaxMovieDuration)  Duration=MaxMovieDuration;
    if (Duration<33)                Duration=33;    // In all case minumum duration set to 1/30 sec

    return Duration;
}

//===============================================================

int cDiaporamaObject::ComputeChapterNumber(cDiaporamaObject **Object) {
    int i,Number=0;
    if (Object) *Object=NULL;
    for (i=0;(i<Parent->List.count())&&(Parent->List[i]!=this);i++) if ((i==0)||(Parent->List[i]->StartNewChapter)) {
        if (Parent->List[i]->StartNewChapter) Number++;
        if ((Object)&&(i<Parent->List.count())) *Object=Parent->List[i];
    }
    if ((i==0)||((i<Parent->List.count())&&(Parent->List[i]->StartNewChapter))) {
        if ((i<Parent->List.count())&&(Parent->List[i]->StartNewChapter)) Number++;
        if ((Object)&&(i<Parent->List.count())) *Object=Parent->List[i];
    }
    return Number;
}

//===============================================================

int cDiaporamaObject::GetSlideNumber() {
    int Number=0;
    for (int i=0;(i<Parent->List.count())&&(Parent->List[i]!=this);i++) Number++;
    return Number;
}

//===============================================================

int cDiaporamaObject::GetAutoTSNumber() {
    if ((SlideName.length()==QString("<%AUTOTS_000000%>").length())&&(SlideName.startsWith("<%AUTOTS_"))&&(SlideName.endsWith("%>")))
        return SlideName.mid(QString("<%AUTOTS_").length(),QString("000000").length()).toInt();
        else return -1;
}

//===============================================================

void cDiaporamaObject::LoadModelFromXMLData(ffd_MODELTYPE TypeModel,QDomDocument domDocument,QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes) {
    QString     ErrorMsg;
    QDomElement ProjectDocument=domDocument.documentElement();
    bool        IsOk=false;
    switch (TypeModel) {
        case ffd_MODELTYPE_THUMBNAIL:
            IsOk=(ProjectDocument.tagName()==THUMBMODEL_ROOTNAME)&&(LoadFromXML(ProjectDocument,THUMBMODEL_ELEMENTNAME,"",NULL,ResKeyList,DuplicateRes));
            ErrorMsg=QApplication::translate("MainWindow","The file is not a valid thumbnail file","Error message");
            break;
        case ffd_MODELTYPE_PROJECTTITLE:
        case ffd_MODELTYPE_CHAPTERTITLE:
        case ffd_MODELTYPE_CREDITTITLE:
            IsOk=(ProjectDocument.tagName()==TITLEMODEL_ROOTNAME)&&(LoadFromXML(ProjectDocument,TITLEMODEL_ELEMENTNAME,"",NULL,ResKeyList,DuplicateRes));
            ErrorMsg=QApplication::translate("MainWindow","The file is not a valid title model file","Error message");
            break;
    }
    if (!IsOk) CustomMessageBox(NULL,QMessageBox::Critical,QApplication::translate("MainWindow","Error","Error message"),ErrorMsg,QMessageBox::Close);
}

//===============================================================

bool cDiaporamaObject::SaveModelFile(ffd_MODELTYPE TypeModel,QString ModelFileName) {
    QList<qlonglong>    ResKeyList;
    QFile               file(ModelFileName);
    QDomDocument        domDocument(APPLICATION_NAME);
    QDomElement         root;
    QString             RootName,ElementName;

    // Create xml document and root
    switch (TypeModel) {
        case ffd_MODELTYPE_THUMBNAIL:
            RootName=THUMBMODEL_ROOTNAME;
            ElementName=THUMBMODEL_ELEMENTNAME;
            break;
        case ffd_MODELTYPE_PROJECTTITLE:
        case ffd_MODELTYPE_CHAPTERTITLE:
        case ffd_MODELTYPE_CREDITTITLE:
            RootName=TITLEMODEL_ROOTNAME;
            ElementName=TITLEMODEL_ELEMENTNAME;
            break;
    }
    root=domDocument.createElement(RootName);
    domDocument.appendChild(root);
    SaveToXML(root,ElementName,ModelFileName,true,NULL,&ResKeyList,false);
    // Write file to disk
    if (!file.open(QFile::WriteOnly | QFile::Text)) {
        CustomMessageBox(NULL,QMessageBox::Critical,QApplication::translate("MainWindow","Error","Error message"),QApplication::translate("MainWindow","Error creating model file","Error message"),QMessageBox::Close);
        return false;
    } else {
        // Save file now
        QTextStream out(&file);
        out.setCodec("UTF-8");
        domDocument.save(out,4);
        // Iterate for ressources
        for (int i=0;i<ResKeyList.count();i++) {
            QImage      Thumbnail;
            qlonglong   Key=ResKeyList[i];
            Parent->ApplicationConfig->SlideThumbsTable->GetThumbs(&Key,&Thumbnail);

            QDomElement     Ressource=domDocument.createElement("Ressource");
            QByteArray      ba;
            QBuffer         buf(&ba);

            Thumbnail.save(&buf,"PNG");
            QByteArray Compressed=qCompress(ba,1);
            QByteArray Hexed     =Compressed.toHex();
            Ressource.setAttribute("Key",Key);
            Ressource.setAttribute("Width",Thumbnail.width());
            Ressource.setAttribute("Height",Thumbnail.height());
            Ressource.setAttribute("Image",QString(Hexed));
            Ressource.save(out,0);
        }
        file.close();
        return true;
    }
}

//===============================================================

QString cDiaporamaObject::SaveAsNewCustomModelFile(ffd_MODELTYPE TypeModel) {
    QString     NewName,Text;
    cModelList  *ModelList;

    switch (TypeModel) {
        case ffd_MODELTYPE_PROJECTTITLE:    ModelList=Parent->ApplicationConfig->PrjTitleModels[Parent->ImageGeometry][MODELTYPE_PROJECTTITLE_CATNUMBER-1];     break;
        case ffd_MODELTYPE_CHAPTERTITLE:    ModelList=Parent->ApplicationConfig->CptTitleModels[Parent->ImageGeometry][MODELTYPE_CHAPTERTITLE_CATNUMBER-1];     break;
        case ffd_MODELTYPE_CREDITTITLE:     ModelList=Parent->ApplicationConfig->CreditTitleModels[Parent->ImageGeometry][MODELTYPE_CREDITTITLE_CATNUMBER-1];   break;
        case ffd_MODELTYPE_THUMBNAIL:
        default:                            ModelList=Parent->ApplicationConfig->ThumbnailModels;                                                               break;
    }

    NewName=ModelList->CustomModelPath; if (!NewName.endsWith(QDir::separator())) NewName=NewName+QDir::separator();
    Text=QString("%1").arg(*ModelList->NextNumber);
    (*ModelList->NextNumber)++;
    NewName=NewName+Text+"."+ModelList->ModelSuffix;
    SaveModelFile(TypeModel,NewName);
    ModelList->FillModelType(TypeModel);
    if (TypeModel==ffd_MODELTYPE_THUMBNAIL) Parent->ThumbnailName=Text;
    return NewName;
}

//===============================================================

void cDiaporamaObject::SaveToXML(QDomElement &domDocument,QString ElementName,QString PathForRelativPath,bool ForceAbsolutPath,cReplaceObjectList *ReplaceList,QList<qlonglong> *ResKeyList,bool SaveThumbAllowed) {
    QDomDocument    DomDocument;
    QDomElement     Element=DomDocument.createElement(ElementName);
    QDomElement     SubElement;

    Element.setAttribute("NextIndexKey",    NextIndexKey);

    if (ElementName==THUMBMODEL_ELEMENTNAME) {

        Element.setAttribute("ThumbnailName", Parent->ThumbnailName);

    } else if (ElementName==TITLEMODEL_ELEMENTNAME) {

    } else {

        // Slide properties
        Element.setAttribute("SlideName", SlideName);

        // Chapter properties
        if (StartNewChapter!=DEFAULT_STARTNEWCHAPTER)                                       Element.setAttribute("StartNewChapter",         StartNewChapter?"1":"0");
        if (OverrideProjectEventDate!=DEFAULT_CHAPTEROVERRIDE)                              Element.setAttribute("OverrideProjectEventDate",OverrideProjectEventDate?"1":"0");
        if (OverrideChapterLongDate!=DEFAULT_CHAPTEROVERRIDE)                               Element.setAttribute("OverrideChapterLongDate", OverrideChapterLongDate?"1":"0");
        if (StartNewChapter && !ChapterName.isEmpty())                                      Element.setAttribute("ChapterName",             ChapterName);
        if (OverrideChapterLongDate && !ChapterLongDate.isEmpty())                          Element.setAttribute("ChapterLongDate",         ChapterLongDate);
        if (OverrideProjectEventDate && (ChapterEventDate!=Parent->ProjectInfo->EventDate)) Element.setAttribute("ChapterEventDate",        ChapterEventDate.toString(Qt::ISODate));
        if (ChapterLocation) {
            QDomElement SubElement=DomDocument.createElement("ChapterLocation");
            ((cLocation *)ChapterLocation)->SaveToXML(&SubElement,"",PathForRelativPath,ForceAbsolutPath,ReplaceList,ResKeyList,false);
            Element.appendChild(SubElement);
        }

        // Transition properties
        SubElement=DomDocument.createElement("Transition");
        SubElement.setAttribute("TransitionFamilly",TransitionFamilly);                         // Transition familly
        SubElement.setAttribute("TransitionSubType",TransitionSubType);                         // Transition type in the familly
        if (TransitionDuration!=DEFAULT_TRANSITIONDURATION) SubElement.setAttribute("TransitionDuration",qlonglong(TransitionDuration));            // Transition duration (in msec)
        if (TransitionSpeedWave!=SPEEDWAVE_PROJECTDEFAULT)  SubElement.setAttribute("TransitionSpeedWave",TransitionSpeedWave);                     // Transition speed wave
        Element.appendChild(SubElement);

        // Music properties
        if (MusicType!=DEFAULT_MUSICTYPE)                   Element.setAttribute("MusicType",         MusicType?"1":"0");                           // Music type : false=same as precedent - true=new playlist definition
        if (MusicPause!=DEFAULT_MUSICPAUSE)                 Element.setAttribute("MusicPause",        MusicPause?"1":"0");                          // true if music is pause during this object
        if (MusicReduceVolume!=DEFAULT_MUSICREDUCEVOLUME)   Element.setAttribute("MusicReduceVolume", MusicReduceVolume?"1":"0");                   // true if volume if reduce by MusicReduceFactor
        if (MusicReduceFactor!=DEFAULT_MUSICREDUCEFACTOR)   Element.setAttribute("MusicReduceFactor",QString("%1").arg(MusicReduceFactor,0,'f'));   // factor for volume reduction if MusicReduceVolume is true
        if (MusicList.count()>0) {
            Element.setAttribute("MusicNumber",MusicList.count());                           // Number of file in the playlist
            for (int i=0;i<MusicList.count();i++) MusicList[i]->SaveToXML(&Element,"Music-"+QString("%1").arg(i),PathForRelativPath,ForceAbsolutPath,ReplaceList,ResKeyList,false);
        }

        if ((ThumbnailKey!=-1)&&(SaveThumbAllowed)) {
            Element.setAttribute("ThumbRessource",ThumbnailKey);
            if (ResKeyList) ResKeyList->append(ThumbnailKey);
        }

        // Background properties
        SubElement=DomDocument.createElement("Background");
        SubElement.setAttribute("BackgroundType",BackgroundType?"1":"0");                                        // Background type : false=same as precedent - true=new background definition
        BackgroundBrush->SaveToXML(&SubElement,"BackgroundBrush",PathForRelativPath,ForceAbsolutPath,ReplaceList,ResKeyList,false);  // Background brush
        Element.appendChild(SubElement);

    }

    // Global blocks composition table
    ObjectComposition.SaveToXML(Element,"ObjectComposition",PathForRelativPath,ForceAbsolutPath,ReplaceList,ResKeyList,ElementName==TITLEMODEL_ELEMENTNAME);         // ObjectComposition

    // Shots definitions
    Element.setAttribute("ShotNumber",List.count());
    for (int i=0;i<List.count();i++) List[i]->SaveToXML(Element,"Shot-"+QString("%1").arg(i),PathForRelativPath,ForceAbsolutPath,(ElementName==THUMBMODEL_ELEMENTNAME),ReplaceList,ResKeyList,ElementName==TITLEMODEL_ELEMENTNAME);

    domDocument.appendChild(Element);
}

//===============================================================

bool cDiaporamaObject::LoadFromXML(QDomElement domDocument,QString ElementName,QString PathForRelativPath,QStringList *AliasList,
                                   QList<cSlideThumbsTable::TRResKeyItem> *ResKeyList,bool DuplicateRes,DlgWorkingTask *DlgWorkingTaskDialog) {
    if ((ElementName!=THUMBMODEL_ELEMENTNAME)&&(ElementName!=TITLEMODEL_ELEMENTNAME)) InitDefaultValues();

    if ((domDocument.elementsByTagName(ElementName).length()>0)&&(domDocument.elementsByTagName(ElementName).item(0).isElement()==true)) {
        QDomElement Element=domDocument.elementsByTagName(ElementName).item(0).toElement();

        bool IsOk=true;
        bool ModifyFlag=false;

        // Load shot list
        List.clear();

        NextIndexKey=Element.attribute("NextIndexKey").toInt();

        if (ElementName==THUMBMODEL_ELEMENTNAME) {

            if (Element.hasAttribute("ThumbnailName")) Parent->ThumbnailName=Element.attribute("ThumbnailName");

        } else if (ElementName==TITLEMODEL_ELEMENTNAME) {

        } else {

            // Slide properties
            SlideName=Element.attribute("SlideName");
            if (Element.hasAttribute("StartNewChapter"))            StartNewChapter         =Element.attribute("StartNewChapter")=="1";
            if (Element.hasAttribute("OverrideProjectEventDate"))   OverrideProjectEventDate=Element.attribute("OverrideProjectEventDate")=="1";
            if (Element.hasAttribute("OverrideChapterLongDate"))    OverrideChapterLongDate =Element.attribute("OverrideChapterLongDate")=="1";
            if (Element.hasAttribute("ChapterName"))                ChapterName             =Element.attribute("ChapterName");
            if (Element.hasAttribute("ChapterLongDate"))            ChapterLongDate         =Element.attribute("ChapterLongDate");
            if (Element.hasAttribute("ChapterEventDate"))           ChapterEventDate        =ChapterEventDate.fromString(Element.attribute("ChapterEventDate"),Qt::ISODate);
            ChapterEventDate=OverrideProjectEventDate?ChapterEventDate:Parent->ProjectInfo->EventDate;
            ChapterLongDate =OverrideProjectEventDate?OverrideChapterLongDate?ChapterLongDate:FormatLongDate(ChapterEventDate):Parent->ProjectInfo->LongDate;
            if ((Element.elementsByTagName("ChapterLocation").length()>0)&&(Element.elementsByTagName("ChapterLocation").item(0).isElement()==true)) {
                QDomElement SubElement=Element.elementsByTagName("ChapterLocation").item(0).toElement();
                if (ChapterLocation) delete (cLocation *)ChapterLocation;
                ChapterLocation=new cLocation(Parent->ApplicationConfig);
                ((cLocation *)ChapterLocation)->LoadFromXML(&SubElement,"",PathForRelativPath,AliasList,&ModifyFlag,ResKeyList,DuplicateRes);
            }

            // Compatibility with version prior to 1.7
            if ((Parent->ProjectInfo->ffDRevision<"20130725")&&((StartNewChapter)||(GetSlideNumber()==0))) ChapterName=SlideName;

            // Transition properties
            if ((Element.elementsByTagName("Transition").length()>0)&&(Element.elementsByTagName("Transition").item(0).isElement()==true)) {
                QDomElement SubElement=Element.elementsByTagName("Transition").item(0).toElement();
                TransitionFamilly =(TRFAMILLY)SubElement.attribute("TransitionFamilly").toInt();                                                           // Transition familly
                TransitionSubType =SubElement.attribute("TransitionSubType").toInt();                                                           // Transition type in the familly
                if (SubElement.hasAttribute("TransitionDuration"))  TransitionDuration=SubElement.attribute("TransitionDuration").toInt();                                                          // Transition duration (in msec)
                if (SubElement.hasAttribute("TransitionSpeedWave")) TransitionSpeedWave=SubElement.attribute("TransitionSpeedWave").toInt();    // Transition speed wave
                Element.appendChild(SubElement);
            }
            // Music properties
            MusicList.clear();
            if (Element.hasAttribute("MusicType"))          MusicType         =Element.attribute("MusicType")=="1";                     // Music type : false=same as precedent - true=new playlist definition
            if (Element.hasAttribute("MusicPause"))         MusicPause        =Element.attribute("MusicPause")=="1";                    // true if music is pause during this object
            if (Element.hasAttribute("MusicReduceVolume"))  MusicReduceVolume =Element.attribute("MusicReduceVolume")=="1";             // true if volume if reduce by MusicReduceFactor
            if (Element.hasAttribute("MusicReduceFactor"))  MusicReduceFactor =GetDoubleValue(Element,"MusicReduceFactor");             // factor for volume reduction if MusicReduceVolume is true
            if (Element.hasAttribute("MusicNumber")) {
                int MusicNumber   =Element.attribute("MusicNumber").toInt();                // Number of file in the playlist
                for (int i=0;i<MusicNumber;i++) {
                    cMusicObject *MusicObject=new cMusicObject(((MainWindow *)Parent->ApplicationConfig->TopLevelWindow)->ApplicationConfig);
                    if (!MusicObject->LoadFromXML(&Element,"Music-"+QString("%1").arg(i),PathForRelativPath,AliasList,&ModifyFlag)) IsOk=false;
                    if ((DlgWorkingTaskDialog)&&(!MusicObject->IsComputedAudioDuration)) {
                        QList<qreal> Peak,Moyenne;
                        DlgWorkingTaskDialog->DisplayText2(QApplication::translate("MainWindow","Analyse file %1").arg(MusicObject->CachedFileName));
                        MusicObject->DoAnalyseSound(&Peak,&Moyenne,DlgWorkingTaskDialog->CancelActionFlag,&DlgWorkingTaskDialog->TimerProgress);
                        DlgWorkingTaskDialog->StopText2();
                        if (ModifyFlag) ((MainWindow *)Parent->ApplicationConfig->TopLevelWindow)->SetModifyFlag(true);
                    }
                    MusicList.append(MusicObject);
                    if (ModifyFlag) ((MainWindow *)Parent->ApplicationConfig->TopLevelWindow)->SetModifyFlag(true);
                }
            }

            // Compatibility with version  prior to 2.1
            if (Element.hasAttribute("Thumbnail")) {
                int         ThumbWidth   =Element.attribute("ThumbWidth").toInt();
                int         ThumbHeight  =Element.attribute("ThumbHeight").toInt();
                QImage      Thumbnail(ThumbWidth,ThumbHeight,QImage::Format_ARGB32_Premultiplied);
                QByteArray  Compressed   =QByteArray::fromHex(Element.attribute("Thumbnail").toUtf8());
                QByteArray  Decompressed =qUncompress(Compressed);
                Thumbnail.loadFromData(Decompressed);
                Parent->ApplicationConfig->SlideThumbsTable->SetThumbs(&ThumbnailKey,Thumbnail);
            }

            if (Element.hasAttribute("ThumbRessource")) {
                if (ResKeyList) {
                    int ResKey=Element.attribute("ThumbRessource").toLongLong();
                    for (int ResNum=0;ResNum<ResKeyList->count();ResNum++) if (ResKey==ResKeyList->at(ResNum).OrigKey) {
                        ResKey=ResKeyList->at(ResNum).NewKey;
                        break;
                    }
                    ThumbnailKey=ResKey;
                } else ThumbnailKey=Element.attribute("ThumbRessource").toLongLong();
            }

            // if DuplicateRes (for exemple during a paste operation)
            if ((DuplicateRes)&&(ThumbnailKey!=-1)) {
                QImage Thumbnail;
                Parent->ApplicationConfig->SlideThumbsTable->GetThumbs(&ThumbnailKey,&Thumbnail);
                ThumbnailKey=-1;
                Parent->ApplicationConfig->SlideThumbsTable->GetThumbs(&ThumbnailKey,&Thumbnail);
            }

            // Background properties
            if ((Element.elementsByTagName("Background").length()>0)&&(Element.elementsByTagName("Background").item(0).isElement()==true)) {
                if (BackgroundBrush->MediaObject) {
                    if (BackgroundBrush->DeleteMediaObject) delete BackgroundBrush->MediaObject;
                    BackgroundBrush->MediaObject=NULL;
                }
                QDomElement SubElement=Element.elementsByTagName("Background").item(0).toElement();
                BackgroundType  =SubElement.attribute("BackgroundType")=="1"; // Background type : false=same as precedent - true=new background definition
                bool ModifyFlag;
                if (!BackgroundBrush->LoadFromXML(&SubElement,"BackgroundBrush",PathForRelativPath,AliasList,&ModifyFlag,ResKeyList,DuplicateRes)) IsOk=false;
                if (IsOk && ModifyFlag) ((MainWindow *)Parent->ApplicationConfig->TopLevelWindow)->SetModifyFlag(true);
                if (ModifyFlag) ((MainWindow *)Parent->ApplicationConfig->TopLevelWindow)->SetModifyFlag(true);
            }

        }

        // Global blocks composition table
        IsOk=ObjectComposition.LoadFromXML(Element,"ObjectComposition",PathForRelativPath,NULL,AliasList,Parent->ApplicationConfig,ResKeyList,DuplicateRes);         // ObjectComposition

        // Shots definitions
        int ShotNumber=Element.attribute("ShotNumber").toInt();
        for (int i=0;i<ShotNumber;i++) {
            cDiaporamaShot *imagesequence=new cDiaporamaShot(this);
            if (!imagesequence->LoadFromXML(Element,"Shot-"+QString("%1").arg(i),PathForRelativPath,&ObjectComposition,AliasList,ResKeyList,DuplicateRes)) IsOk=false;
            List.append(imagesequence);
        }

        // fix locations definition in shots for version <2.1 20131214
        QList<cBrushDefinition::sMarker> FirstMarkers;
        for (int Obj=0;Obj<ObjectComposition.List.count();Obj++) if ((ObjectComposition.List[Obj]->BackgroundBrush->MediaObject)&&(ObjectComposition.List[Obj]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_GMAPSMAP)) {
            for (int Shot=0;Shot<List.count();Shot++) for (int ShotObj=0;ShotObj<List[Shot]->ShotComposition.List.count();ShotObj++) if (ObjectComposition.List[Obj]->IndexKey==List[Shot]->ShotComposition.List[ShotObj]->IndexKey) {
                if (List[Shot]->ShotComposition.List[ShotObj]->BackgroundBrush->Markers.isEmpty()) {
                    if (Shot==0) {
                        for (int Marker=0;Marker<((cGMapsMap *)ObjectComposition.List[Obj]->BackgroundBrush->MediaObject)->List.count();Marker++) {
                            cBrushDefinition::sMarker MarkerObj;
                            MarkerObj.MarkerColor="#ffffff";
                            MarkerObj.TextColor="#000000";
                            MarkerObj.Visibility=cBrushDefinition::sMarker::MARKERSHOW;
                            List[Shot]->ShotComposition.List[ShotObj]->BackgroundBrush->Markers.append(MarkerObj);
                        }
                        FirstMarkers=List[Shot]->ShotComposition.List[ShotObj]->BackgroundBrush->Markers;
                    } else List[Shot]->ShotComposition.List[ShotObj]->BackgroundBrush->Markers=FirstMarkers;
                }
            }
        }

        // Bug fix for ffDRevision between 1.7b3 and 2.0b3
        if ((ElementName!=TITLEMODEL_ELEMENTNAME)&&(Parent->ProjectInfo->ffDRevision>"20131016")&&(Parent->ProjectInfo->ffDRevision<"20131112")) {
            int AutoTSNumber=GetAutoTSNumber();
            if (AutoTSNumber!=-1) {
                int         ModelType   =(AutoTSNumber/100000);
                int         ModelSubType=(AutoTSNumber%100000)/10000;
                int         ModelIndex  =AutoTSNumber-ModelType*100000-ModelSubType*10000;
                cModelList  *ModelList  =(ModelType==ffd_MODELTYPE_PROJECTTITLE)?Parent->ApplicationConfig->PrjTitleModels[Parent->ImageGeometry][ModelSubType==9?MODELTYPE_PROJECTTITLE_CATNUMBER-1:ModelSubType]:
                                         (ModelType==ffd_MODELTYPE_CHAPTERTITLE)?Parent->ApplicationConfig->CptTitleModels[Parent->ImageGeometry][ModelSubType==9?MODELTYPE_CHAPTERTITLE_CATNUMBER-1:ModelSubType]:
                                         (ModelType==ffd_MODELTYPE_CREDITTITLE)?Parent->ApplicationConfig->CreditTitleModels[Parent->ImageGeometry][ModelSubType==9?MODELTYPE_CREDITTITLE_CATNUMBER-1:ModelSubType]:
                                         NULL;
                if ((ModelList)&&(ModelIndex>=0)&&(ModelIndex<ModelList->List.count()))
                    LoadModelFromXMLData((ffd_MODELTYPE)ModelType,ModelList->List[ModelIndex]->Model,ResKeyList,true);  // Always duplicate ressource
            }
        }

        // Refresh OptimisationFlags
        for (int Shot=0;Shot<List.count();Shot++) for (int Block=0;Block<List[Shot]->ShotComposition.List.count();Block++)
                List[Shot]->ShotComposition.List[Block]->ComputeOptimisationFlags(Shot>0?List[Shot-1]->ShotComposition.List[Block]:NULL);

        //**** Compatibility with version prior to 1.5
        for (int i=0;i<ObjectComposition.List.count();i++) {
            if ((ObjectComposition.List.at(i)->BackgroundBrush->OnOffFilter!=0)||(ObjectComposition.List.at(i)->BackgroundBrush->GaussBlurSharpenSigma!=0)) {
                for (int j=0;j<List.count();j++) for (int k=0;k<List.at(j)->ShotComposition.List.count();k++) if (List.at(j)->ShotComposition.List.at(k)->IndexKey==ObjectComposition.List.at(i)->IndexKey) {
                    List.at(j)->ShotComposition.List.at(k)->BackgroundBrush->OnOffFilter=ObjectComposition.List.at(i)->BackgroundBrush->OnOffFilter;
                    List.at(j)->ShotComposition.List.at(k)->BackgroundBrush->GaussBlurSharpenSigma  =ObjectComposition.List.at(i)->BackgroundBrush->GaussBlurSharpenSigma;
                    List.at(j)->ShotComposition.List.at(k)->BackgroundBrush->BlurSharpenRadius      =ObjectComposition.List.at(i)->BackgroundBrush->BlurSharpenRadius;
                    List.at(j)->ShotComposition.List.at(k)->BackgroundBrush->TypeBlurSharpen        =ObjectComposition.List.at(i)->BackgroundBrush->TypeBlurSharpen;
                }
                ObjectComposition.List.at(i)->BackgroundBrush->OnOffFilter=0;
                ObjectComposition.List.at(i)->BackgroundBrush->GaussBlurSharpenSigma  =0;
                ObjectComposition.List.at(i)->BackgroundBrush->BlurSharpenRadius =5;
            }
        }
        return IsOk;
    } else return false;
}

//*********************************************************************************************************************************************
//
// Global class containing media objects
//
//*********************************************************************************************************************************************

cDiaporama::cDiaporama(cApplicationConfig *TheApplicationConfig,bool LoadDefaultModel,QObject *Parent):QObject(Parent) {
    setObjectName("cDiaporama");
    ApplicationConfig           = TheApplicationConfig;
    ProjectInfo                 = new cffDProjectFile(ApplicationConfig);
    ProjectThumbnail            = new cDiaporamaObject(this);
    CurrentCol                  = -1;                                                               // Current selected item
    CurrentPosition             = -1;                                                               // Current position (msec)
    CurrentChapter              = -1;
    CurrentChapterName          = QString("");
    IsModify                    = false;                                                            // true if project was modify
    ProjectFileName             = "";                                                               // Path and name of current file project
    ProjectInfo->Composer       = QString(APPLICATION_NAME)+QString(" ")+CurrentAppName;
    ProjectInfo->Author         = ApplicationConfig->DefaultAuthor;
    ProjectInfo->Album          = ApplicationConfig->DefaultAlbum;
    ProjectInfo->DefaultLanguage= ApplicationConfig->DefaultLanguage;
    TransitionSpeedWave         = ApplicationConfig->DefaultTransitionSpeedWave;                    // Speed wave for transition
    BlockAnimSpeedWave          = ApplicationConfig->DefaultBlockAnimSpeedWave;                     // Speed wave for block animation
    ImageAnimSpeedWave          = ApplicationConfig->DefaultImageAnimSpeedWave;                     // Speed wave for image framing and correction animation

    // Set default value
    DefineSizeAndGeometry(ApplicationConfig->ImageGeometry);                                // Default to 16:9

    if (LoadDefaultModel) {
        // Load default thumbnail
        ThumbnailName=ApplicationConfig->DefaultThumbnailName;
        int ModelIndex=ApplicationConfig->ThumbnailModels->SearchModel(ApplicationConfig->DefaultThumbnailName);
        if ((ModelIndex>0)&&(ModelIndex<ApplicationConfig->ThumbnailModels->List.count()))
            ProjectThumbnail->LoadModelFromXMLData(ffd_MODELTYPE_THUMBNAIL,ApplicationConfig->ThumbnailModels->List[ModelIndex]->Model,
                                                   &ApplicationConfig->ThumbnailModels->List[ModelIndex]->ResKeyList,true);    // always duplicate ressource
    }
}

//====================================================================================================================

cDiaporama::~cDiaporama() {
    if (ProjectInfo) {
        delete ProjectInfo;
        ProjectInfo=NULL;
    }
    if (ProjectThumbnail) {
        delete ProjectThumbnail;
        ProjectThumbnail=NULL;
    }
    while (List.count()>0) delete List.takeLast();
}

//====================================================================================================================

void cDiaporama::UpdateInformation() {
    UpdateChapterInformation();
    UpdateStatInformation();
    UpdateCachedInformation();
}

void cDiaporama::UpdateChapterInformation() {
    // Remove all chapters information
    int i=0;
    while (i<ProjectInfo->ChaptersProperties.count()) {
        if (((QString)ProjectInfo->ChaptersProperties[i]).startsWith("Chapter_")) ProjectInfo->ChaptersProperties.removeAt(i);
            else i++;
    }
    ProjectInfo->NbrChapters=0;
    // Create new
    for (int i=0;i<List.count();i++) if ((i==0)||(List[i]->StartNewChapter)) {
        if (List[i]->StartNewChapter) ProjectInfo->NbrChapters++;
        QString ChapterNum=QString("%1").arg(ProjectInfo->NbrChapters); while (ChapterNum.length()<3) ChapterNum="0"+ChapterNum;
        int     NextChapter=i+1;
        int64_t Start   =GetObjectStartPosition(i)+(i>0?List[i]->GetTransitDuration():0)-GetObjectStartPosition(0);
        int64_t Duration=List[i]->GetDuration()-(i>0?List[i]->GetTransitDuration():0);
        if (NextChapter<List.count()) Duration=Duration-List[NextChapter]->GetTransitDuration();
        while ((NextChapter<List.count())&&(!List[NextChapter]->StartNewChapter)) {
            Duration=Duration+List[NextChapter]->GetDuration();
            NextChapter++;
            if (NextChapter<List.count()) Duration=Duration-List[NextChapter]->GetTransitDuration();
        }
        ProjectInfo->ChaptersProperties.append("Chapter_"+ChapterNum+":InSlide" +QString("##")+QString("%1").arg(i+1));
        ProjectInfo->ChaptersProperties.append("Chapter_"+ChapterNum+":Start"   +QString("##")+QTime(0,0,0,0).addMSecs(Start).toString("hh:mm:ss.zzz"));
        ProjectInfo->ChaptersProperties.append("Chapter_"+ChapterNum+":End"     +QString("##")+QTime(0,0,0,0).addMSecs(Start+Duration).toString("hh:mm:ss.zzz"));
        ProjectInfo->ChaptersProperties.append("Chapter_"+ChapterNum+":Duration"+QString("##")+QTime(0,0,0,0).addMSecs(Duration).toString("hh:mm:ss.zzz"));
        ProjectInfo->ChaptersProperties.append("Chapter_"+ChapterNum+":title"   +QString("##")+(List[i]->StartNewChapter?List[i]->ChapterName:ProjectInfo->Title));
        ProjectInfo->ChaptersProperties.append("Chapter_"+ChapterNum+":Date"    +QString("##")+(List[i]->OverrideProjectEventDate?List[i]->ChapterEventDate:ProjectInfo->EventDate).toString(ApplicationConfig->ShortDateFormat));
        ProjectInfo->ChaptersProperties.append("Chapter_"+ChapterNum+":LongDate"+QString("##")+(List[i]->OverrideProjectEventDate?List[i]->OverrideChapterLongDate?List[i]->ChapterLongDate:FormatLongDate(List[i]->ChapterEventDate):ProjectInfo->LongDate));
        ProjectInfo->ChaptersProperties.append("Chapter_"+ChapterNum+":LocationName"+QString("##")+(List[i]->ChapterLocation?((cLocation *)List[i]->ChapterLocation)->Name:ProjectInfo->Location?((cLocation *)ProjectInfo->Location)->Name:QApplication::translate("Variables","Project's location not set (Name)")));
        ProjectInfo->ChaptersProperties.append("Chapter_"+ChapterNum+":LocationAddress"+QString("##")+(List[i]->ChapterLocation?((cLocation *)List[i]->ChapterLocation)->FriendlyAddress:ProjectInfo->Location?((cLocation *)ProjectInfo->Location)->FriendlyAddress:QApplication::translate("Variables","Project's location not set (Address)")));
    }
    ProjectInfo->SetRealDuration(QTime(0,0,0,0).addMSecs(GetDuration()));
}

void cDiaporama::UpdateStatInformation() {
    QString Text;
    for (int var=0;var<Variable.Variables.count();var++) {
        if (Variable.Variables[var].VarName=="STP") {

            // Parse all object to construct values
            QTime           VideoDuration=QTime(0,0,0,0);
            int             NbrVideo=0;
            int             NbrVectorImg=0;
            int             NbrImage=0;
            int             NbrText=0;
            int             NbrAutoSlide=0;

            for (int i=0;i<List.count();i++) {
                if (List[i]->GetAutoTSNumber()==-1) {
                    for (int j=0;j<List[i]->ObjectComposition.List.count();j++) {
                        if ((List[i]->ObjectComposition.List[j]->BackgroundBrush->MediaObject)&&(List[i]->ObjectComposition.List[j]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)) {
                            NbrVideo++;
                            VideoDuration=VideoDuration.addMSecs(QTime(0,0,0,0).msecsTo(List[i]->ObjectComposition.List[j]->BackgroundBrush->MediaObject->GetRealDuration()));
                        } else if ((List[i]->ObjectComposition.List[j]->BackgroundBrush->MediaObject)&&(List[i]->ObjectComposition.List[j]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_IMAGEVECTOR)) {
                            NbrVectorImg++;
                        } else if ((List[i]->ObjectComposition.List[j]->BackgroundBrush->MediaObject)&&(List[i]->ObjectComposition.List[j]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_IMAGEFILE)) {
                            NbrImage++;
                            //Composer.Add(List[i]->ObjectComposition.List[j]->BackgroundBrush->Image->GetInformationValue("composer"));
                        } else NbrText++;
                    }
                } else NbrAutoSlide++;
            }

            Text=QApplication::translate("Variables","Content:","Project statistics");
            if (List.count())               Text=Text+(Text.isEmpty()?"·":"\n·")+QApplication::translate("Variables","%1 slides (%2)").arg(List.count()).arg(ProjectInfo->GetRealDuration().toString("hh:mm:ss.zzz"));
            if (ProjectInfo->NbrChapters)   Text=Text+(Text.isEmpty()?"·":"\n·")+QApplication::translate("Variables","%1 chapters").arg(ProjectInfo->NbrChapters);
            if (NbrVideo)                   Text=Text+(Text.isEmpty()?"·":"\n·")+QApplication::translate("Variables","%1 videos (%2)").arg(NbrVideo).arg(VideoDuration.toString("hh:mm:ss.zzz"));
            if (NbrVectorImg)               Text=Text+(Text.isEmpty()?"·":"\n·")+QApplication::translate("Variables","%3 vector images").arg(NbrVectorImg);
            if (NbrImage)                   Text=Text+(Text.isEmpty()?"·":"\n·")+QApplication::translate("Variables","%4 photos").arg(NbrImage);
            if (NbrText)                    Text=Text+(Text.isEmpty()?"·":"\n·")+QApplication::translate("Variables","%5 text blocks").arg(NbrText);
            if (NbrAutoSlide)               Text=Text+(Text.isEmpty()?"·":"\n·")+QApplication::translate("Variables","%6 automatic slides").arg(NbrAutoSlide);
            //for (int j=0;j<Composer.List.count();j++) Variable.Variables[i].Value=Variable.Variables[i].Value+QString("    %1: %2<br>").arg(Composer.List[j].Composer).arg(Composer.List[j].Count);
            Variable.Variables[var].Value=HTMLConverter.ToPlainText(Text);;

        } else if (Variable.Variables[var].VarName=="STM") {

            // Parse all object to construct values
            QStringList MusicList;
            Text=QApplication::translate("Variables","Musical content:","Project statistics");
            for (int i=0;i<List.count();i++) if (List[i]->MusicType) for (int music=0;music<List[i]->MusicList.count();music++) if (List[i]->MusicList[music]->AllowCredit) {
                QStringList TempExtProperties;
                ApplicationConfig->FilesTable->GetExtendedProperties(List[i]->MusicList[music]->FileKey,&TempExtProperties);
                QString TMusc =GetInformationValue("title",&TempExtProperties);
                QString Album =GetInformationValue("album",&TempExtProperties);
                QString Date  =GetInformationValue("date",&TempExtProperties);
                QString Artist=GetInformationValue("artist",&TempExtProperties);
                QString SubText=(!TMusc.isEmpty()?TMusc:List[i]->MusicList[music]->ShortName());
                if (!Artist.isEmpty()) {
                    if (!Date.isEmpty())  SubText=SubText+QApplication::translate("Variables"," - © %1 (%2)","Project statistics-Music").arg(Artist).arg(Date);
                        else              SubText=SubText+QApplication::translate("Variables"," - © %1",     "Project statistics-Music").arg(Artist);
                }
                if (!Album.isEmpty()) SubText=SubText+QApplication::translate("Variables"," from «%1»",       "Project statistics-Music").arg(Album);
                MusicList.append(SubText);
            }
            if (MusicList.count()>0) {
                for (int i=0;i<MusicList.count();i++) Text=Text+(MusicList.count()>1?"\n·":" ")+MusicList[i];
                Variable.Variables[var].Value=HTMLConverter.ToPlainText(Text);
            } else Variable.Variables[var].Value=" .";
        }
    }
}

//====================================================================================================================

cDiaporamaObject *cDiaporama::GetChapterDefObject(cDiaporamaObject *Object) {
    // Find current Object
    cDiaporamaObject *CurChapter=NULL;
    int              ObjectNum=0;
    while ((ObjectNum<List.count())&&(List[ObjectNum]!=Object)) {
        if (List[ObjectNum]->StartNewChapter) CurChapter=List[ObjectNum];
        ObjectNum++;
    }
    return CurChapter;
}

//====================================================================================================================

void cDiaporama::DefineSizeAndGeometry(ffd_GEOMETRY Geometry) {
    ImageGeometry   =Geometry;
    InternalHeight  =PREVIEWMAXHEIGHT;
    InternalWidth   =GetWidthForHeight(InternalHeight);
    LumaList_Bar.SetGeometry(ImageGeometry);
    LumaList_Center.SetGeometry(ImageGeometry);
    LumaList_Checker.SetGeometry(ImageGeometry);
    LumaList_Clock.SetGeometry(ImageGeometry);
    LumaList_Box.SetGeometry(ImageGeometry);
    LumaList_Snake.SetGeometry(ImageGeometry);
    switch (Geometry) {
        case GEOMETRY_40_17: ProjectInfo->ObjectGeometry=IMAGE_GEOMETRY_40_17;  break;
        case GEOMETRY_4_3:   ProjectInfo->ObjectGeometry=IMAGE_GEOMETRY_4_3;    break;
        default:             ProjectInfo->ObjectGeometry=IMAGE_GEOMETRY_16_9;   break;
    }
}

//=======================================================
// Return height for width depending on project geometry
//=======================================================

int cDiaporama::GetHeightForWidth(int WantedWith) {
    switch (ImageGeometry) {
        case GEOMETRY_4_3:      return int(double(3)*(double(WantedWith)/double(4)));       break;
        case GEOMETRY_40_17:    return int(double(17)*(double(WantedWith)/double(40)));     break;
        default:                return int(double(9)*(double(WantedWith)/double(16)));      break;
    }
    return 0;
}

//=======================================================
// Return width for height depending on project geometry
//=======================================================

int cDiaporama::GetWidthForHeight(int WantedHeight) {
    switch (ImageGeometry) {
        case GEOMETRY_4_3:      return int(double(4)*(double(WantedHeight)/double(3)));       break;
        case GEOMETRY_40_17:    return int(double(40)*(double(WantedHeight)/double(17)));     break;
        default:                return int(double(16)*(double(WantedHeight)/double(9)));      break;
    }
    return 0;
}

//====================================================================================================================

int64_t cDiaporama::GetTransitionDuration(int index) {
    int64_t Duration=0;
    if ((index>=0)&&(List.count()>0)&&((index<List.count())&&(!((List[index]->TransitionFamilly==0)&&(List[index]->TransitionSubType==0))))) Duration=List[index]->TransitionDuration;
    return Duration;
}

//====================================================================================================================

int64_t cDiaporama::GetDuration() {
    int64_t Duration=0;
    for (int i=0;i<List.count();i++) {
        int64_t ObjDuration=List[i]->GetDuration()-GetTransitionDuration(i+1);
        Duration=Duration+(ObjDuration>=33?ObjDuration:33);
    }
    return Duration;
}

//====================================================================================================================

int64_t cDiaporama::GetPartialDuration(int from,int to) {
    if (from<0)             from=0;
    if (from>=List.count()) from=List.count()-1;
    if (to<0)               to=0;
    if (to>=List.count())   to=List.count()-1;
    int64_t Duration=0;
    for (int i=from;i<=to;i++) {
        int64_t ObjDuration=List[i]->GetDuration()-GetTransitionDuration(i+1);
        Duration=Duration+(ObjDuration>=33?ObjDuration:33);
    }
    return Duration;
}

//====================================================================================================================

int64_t cDiaporama::GetObjectStartPosition(int index) {
    int64_t Duration=0;
    if ((index>=List.count())&&(List.count()>0)) {
        index=List.count()-1;
        Duration=List[index]->GetDuration();
    }
    for (int i=0;i<index;i++) {
        int64_t ObjDuration=List[i]->GetDuration()-GetTransitionDuration(i+1);
        Duration=Duration+(ObjDuration>=33?ObjDuration:33);
    }
    return Duration;
}

//====================================================================================================================

int cDiaporama::GetObjectIndex(cDiaporamaObject *ObjectToFind) {
    int i=0;
    while ((i<List.count())&&(ObjectToFind!=List[i])) i++;
    if (i<List.count()) return i; else return -1;
}

//====================================================================================================================

void cDiaporama::PrepareBackground(int Index,int Width,int Height,QPainter *Painter,int AddX,int AddY) {
    // Make painter translation to ensure QBrush image will start at AddX AddY position
    Painter->save();
    Painter->translate(AddX,AddY);
    Painter->fillRect(QRect(0,0,Width,Height),QBrush(Qt::black));
    if ((Index>=0)&&(Index<List.count())) {
        QBrush *BR=List[List[Index]->CachedBackgroundIndex]->BackgroundBrush->GetBrush(QRectF(0,0,Width,Height),true,0,NULL,1,NULL);
        Painter->fillRect(QRect(0,0,Width,Height),*BR);
        delete BR;
    }
    Painter->restore();
}

//====================================================================================================================

void cDiaporama::UpdateCachedInformation() {
    int64_t             StartPosition   =0;
    int                 MusicIndex      =-1;
    int                 MusicListIndex  =-1;
    int64_t             CumulDuration   =0;
    int64_t             CurMusicDuration=0;
    int                 BackgroundIndex =0;
    cDiaporamaObject    *PrevObject     =NULL;
    cMusicObject        *CurMusic       =NULL;
    cMusicObject        *PrevMusic      =NULL;

    for (int DiaporamaObjectNum=0;DiaporamaObjectNum<List.count();DiaporamaObjectNum++) {
        cDiaporamaObject    *CurObject =List[DiaporamaObjectNum];
        cDiaporamaObject    *NextObject=DiaporamaObjectNum<List.count()-1?List[DiaporamaObjectNum+1]:NULL;

        bool                HaveSound  =false;
        bool                HaveFilter =false;
        double              SoundVolume=0;

        // Owner of the background
        if (CurObject->BackgroundType) BackgroundIndex=DiaporamaObjectNum;

        // Owner and start position of the music
        if ((DiaporamaObjectNum==0)||(CurObject->MusicType)) {
            StartPosition   =0;
            MusicIndex      =DiaporamaObjectNum;
            CumulDuration   =0;
            MusicListIndex  =0;
            CurMusic        =MusicListIndex<List[MusicIndex]->MusicList.count()?List[MusicIndex]->MusicList[MusicListIndex]:NULL;
            CurMusicDuration=CurMusic?QTime(0,0,0,0).msecsTo(CurMusic->GetDuration()):0;
        }

        // Parse ObjectComposition table to determine if slide have sound
        for (int ObjNum=0;ObjNum<CurObject->ObjectComposition.List.count();ObjNum++)
            if ((CurObject->ObjectComposition.List[ObjNum]->BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK)
                    &&(CurObject->ObjectComposition.List[ObjNum]->BackgroundBrush->MediaObject)
                    &&(CurObject->ObjectComposition.List[ObjNum]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE))
                HaveSound=true;

        // Parse shots and objects in shot to determine if slide have filter and max SoundVolume
        for (int shot=0;shot<CurObject->List.count();shot++) for (int ObjNum=0;ObjNum<CurObject->List[shot]->ShotComposition.List.count();ObjNum++) {
            cCompositionObject *CompoObject=CurObject->List[shot]->ShotComposition.List[ObjNum];
            if ((CompoObject->IsVisible)&&(CompoObject->BackgroundBrush)) {
                SoundVolume=CompoObject->BackgroundBrush->SoundVolume;
                /*double dSoundVolume=CompoObject->BackgroundBrush->SoundVolume;
                if (dSoundVolume==-1) {
                    if ((CompoObject->BackgroundBrush->MediaObject)&&(CompoObject->BackgroundBrush->MediaObject->GetSoundLevel()>0)) {
                            dSoundVolume=double(CompoObject->BackgroundBrush->MediaObject->GetSoundLevel()*100)/double(ApplicationConfig->DefaultSoundLevel);
                    else dSoundVolume=1;
                }
                if ((CompoObject->BackgroundBrush->BrushType==BRUSHTYPE_IMAGEDISK)
                        &&(CompoObject->BackgroundBrush->MediaObject)
                        &&(CompoObject->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)
                        &&(dSoundVolume>SoundVolume))
                    SoundVolume=dSoundVolume;
                */
            }
            if ((CompoObject->BackgroundBrush->GaussBlurSharpenSigma!=0)||(CompoObject->BackgroundBrush->QuickBlurSharpenSigma!=0)||
                (CompoObject->BackgroundBrush->Desat!=0)||(CompoObject->BackgroundBrush->Swirl!=0)||(CompoObject->BackgroundBrush->Implode!=0)||
                (CompoObject->BackgroundBrush->OnOffFilter!=0)
               ) HaveFilter=true;
        }

        CurObject->CachedDuration         =CurObject->GetDuration(); if (CurObject->CachedDuration<33) CurObject->CachedDuration=33;
        CurObject->CachedTransitDuration  =CurObject->GetTransitDuration();
        CurObject->CachedStartPosition    =StartPosition;
        CurObject->CachedMusicIndex       =MusicIndex;
        CurObject->CachedMusicListIndex   =MusicListIndex;
        CurObject->CachedBackgroundIndex  =BackgroundIndex;
        CurObject->CachedHaveSound        =HaveSound;
        CurObject->CachedSoundVolume      =SoundVolume;
        CurObject->CachedHaveFilter       =HaveFilter;

        // Compute information about music track
        if ((CurMusic)&&(PrevMusic)&&(CurMusic==PrevMusic)&&(PrevObject->CachedMusicRemaining<=CurObject->CachedTransitDuration)) CurMusic=NULL;

        int64_t TrackDuration =CurMusic?QTime(0,0,0,0).msecsTo(CurMusic->GetDuration()):0;
        int64_t DurationLeft  =TrackDuration>CurObject->CachedStartPosition?TrackDuration-CurObject->CachedStartPosition:0;
        //int64_t NextTransition=NextObject?NextObject->GetTransitDuration():0;
        int64_t NextTransition=PrevObject?CurObject->GetTransitDuration():0;
        int64_t TimePlayed    =CurObject->MusicPause?((!PrevObject)||(!PrevObject->MusicPause)?CurObject->CachedTransitDuration:0):DurationLeft>CurObject->CachedDuration-NextTransition?CurObject->CachedDuration-NextTransition:DurationLeft;

        CurObject->CachedMusicTimePlayed=TimePlayed;
        CurObject->CachedMusicRemaining =DurationLeft>TimePlayed?DurationLeft-TimePlayed:0;
        CurObject->CachedPrevMusicFadOUT=(PrevMusic)&&(PrevMusic!=CurMusic)&&(PrevObject->CachedMusicRemaining>0)&&(CurObject->CachedTransitDuration>0);
        CurObject->CachedMusicFadIN     =(CurMusic)&&(PrevMusic)&&(PrevMusic!=CurMusic)&&(CurObject->CachedPrevMusicFadOUT)&&(PrevObject->CachedMusicRemaining>0);
        CurObject->CachedMusicEnd       =(CurMusic)&&(TimePlayed<CurObject->CachedDuration-NextTransition);
        CurObject->CachedPrevMusicEnd   =(PrevObject)&&(PrevMusic)&&(CurObject->CachedTransitDuration>0)&&(PrevObject->CachedMusicRemaining>0)&&(PrevObject->CachedMusicRemaining<=CurObject->CachedTransitDuration);

        // prepare next loop
        PrevObject=CurObject;
        PrevMusic =CurMusic;
        if ((CumulDuration+TimePlayed+NextTransition)>=CurMusicDuration) {
            MusicListIndex++;
            CumulDuration=0;
            StartPosition=0;
            if ((MusicIndex>=0)&&(MusicIndex<List.count())&&(MusicListIndex>=0)&&(MusicListIndex<List[MusicIndex]->MusicList.count())) {
                CurMusic        =MusicListIndex<List[MusicIndex]->MusicList.count()?List[MusicIndex]->MusicList[MusicListIndex]:NULL;
                CurMusicDuration=CurMusic?QTime(0,0,0,0).msecsTo(CurMusic->GetDuration()):0;
            } else {
                CurMusic=NULL;
                CurMusicDuration=0;
                MusicIndex=-1;
                MusicListIndex=-1;
            }
        } else {
            StartPosition+=TimePlayed;
            CumulDuration=CumulDuration+TimePlayed;
        }
    }
}

//====================================================================================================================

cMusicObject *cDiaporama::GetMusicObject(int ObjectIndex,int64_t &StartPosition,int *CountObject,int *IndexObject) {
    if (ObjectIndex>=List.count()) return NULL;

    StartPosition=List[ObjectIndex]->CachedStartPosition;
    if (IndexObject) *IndexObject=List[ObjectIndex]->CachedMusicIndex;
    if (CountObject) {
        *CountObject=0;
        if ((ObjectIndex>=0)&&(ObjectIndex<List.count())) {
            int i=0;
            while ((i<List.count())&&(i<List[ObjectIndex]->CachedMusicIndex)) {
                if (List[i]->MusicType) *CountObject=(*CountObject)+1;
                i++;
            }
        }
    }
    if ((List[ObjectIndex]->CachedMusicIndex>=0)&&(List[ObjectIndex]->CachedMusicIndex<List.count())&&
        (List[ObjectIndex]->CachedMusicListIndex>=0)&&(List[ObjectIndex]->CachedMusicListIndex<List[List[ObjectIndex]->CachedMusicIndex]->MusicList.count()))
        return List[List[ObjectIndex]->CachedMusicIndex]->MusicList[List[ObjectIndex]->CachedMusicListIndex];
    return NULL;
}

//====================================================================================================================

bool cDiaporama::SaveFile(QWidget *ParentWindow,cReplaceObjectList *ReplaceList,QString *ExportFileName) {
    QFile               file((ReplaceList!=NULL)&&(ExportFileName!=NULL)?*ExportFileName:ProjectFileName);
    QDomDocument        domDocument(APPLICATION_NAME);
    QDomElement         Element;
    QDomElement         root;
    QList<qlonglong>    ResKeyList;

    UpdateChapterInformation();
    if (!ReplaceList) {
        if ((ProjectInfo->Title=="")&&(ApplicationConfig->DefaultTitleFilling!=0)) {
            if (ApplicationConfig->DefaultTitleFilling==1) {
                // Fill with project name when project save (if not yet defined)
                ProjectInfo->Title=QFileInfo(ProjectFileName).completeBaseName();
            } else if (ApplicationConfig->DefaultTitleFilling==2) {
                // Fill with project folder when project save (if not yet defined)
                ProjectInfo->Title=ProjectFileName;
                if (ProjectInfo->Title!="") {
                    ProjectInfo->Title=QFileInfo(ProjectInfo->Title).absolutePath();
                    if (ProjectInfo->Title.endsWith(QDir::separator())) {
                        ProjectInfo->Title=QFileInfo(ProjectFileName).baseName();
                    } else if (ProjectInfo->Title.lastIndexOf(QDir::separator())>0) ProjectInfo->Title=ProjectInfo->Title.mid(ProjectInfo->Title.lastIndexOf(QDir::separator())+1);
                }
            }
            if (ProjectInfo->Title.length()>30) ProjectInfo->Title=ProjectInfo->Title.left(30);
        }
        if (ProjectInfo->Author=="") ProjectInfo->Author=ApplicationConfig->DefaultAuthor;
        if (ProjectInfo->Album=="")  ProjectInfo->Album =ApplicationConfig->DefaultAlbum;
        ProjectInfo->Composer=QString(APPLICATION_NAME)+QString(" ")+CurrentAppName;
    }
    ProjectInfo->ffDRevision=CurrentAppVersion;

    // Create xml document and root
    root=domDocument.createElement(APPLICATION_ROOTNAME);
    domDocument.appendChild(root);

    // Save project properties
    ProjectInfo->SaveToXML(&root,"",ProjectFileName,false,ReplaceList,&ResKeyList,false);
    ProjectThumbnail->SaveToXML(root,THUMBMODEL_ELEMENTNAME,ProjectFileName,false,ReplaceList,&ResKeyList,true);

    // Save basic information on project
    Element=domDocument.createElement("Project");
    Element.setAttribute("ImageGeometry",   ImageGeometry);

    // Save object list
    Element.setAttribute("ObjectNumber",List.count());
    for (int i=0;i<List.count();i++) List[i]->SaveToXML(root,"Object-"+(QString("%1").arg(i,10)).trimmed(),ProjectFileName,false,ReplaceList,&ResKeyList,true);

    root.appendChild(Element);

    // Write file to disk
    if (!file.open(QFile::WriteOnly | QFile::Text)) {
        if (ParentWindow!=NULL) CustomMessageBox(NULL,QMessageBox::Critical,QApplication::translate("MainWindow","Error","Error message"),QApplication::translate("MainWindow","Error creating data file","Error message"),QMessageBox::Close);
            else                printf("%s\n",QApplication::translate("MainWindow","Error creating data file","Error message").toLocal8Bit().constData());
        return false;
    }

    // Save ffDPart in file now
    QTextStream out(&file);
    out.setCodec("UTF-8");
    domDocument.save(out,4);

    // Iterate for ressources
    for (int i=0;i<ResKeyList.count();i++) {
        QImage      Thumbnail;
        qlonglong   Key=ResKeyList[i];
        ApplicationConfig->SlideThumbsTable->GetThumbs(&Key,&Thumbnail);

        QDomElement     Ressource=domDocument.createElement("Ressource");
        QByteArray      ba;
        QBuffer         buf(&ba);

        Thumbnail.save(&buf,"PNG");
        QByteArray Compressed=qCompress(ba,1);
        QByteArray Hexed     =Compressed.toHex();
        Ressource.setAttribute("Key",Key);
        Ressource.setAttribute("Width",Thumbnail.width());
        Ressource.setAttribute("Height",Thumbnail.height());
        Ressource.setAttribute("Image",QString(Hexed));
        Ressource.save(out,0);

    }

    file.close();
    return true;
}

//============================================================================================
// Function use directly or with thread to prepare an image number Column at given position
// Note : Position is relative to the start of the Column object !
//============================================================================================
void cDiaporama::PrepareMusicBloc(PrepareMusicBlocContext *Context) {
    if (Context->Column>=List.count()) {
        for (int j=0;j<Context->MusicTrack->NbrPacketForFPS;j++) Context->MusicTrack->AppendNullSoundPacket(Context->Position);
        return;
    }

    int64_t       StartPosition=0;
    cMusicObject  *CurMusic=GetMusicObject(Context->Column,StartPosition); // Get current music file from column and position
    if (CurMusic==NULL) {
        for (int j=0;j<Context->MusicTrack->NbrPacketForFPS;j++) Context->MusicTrack->AppendNullSoundPacket(Context->Position);
        return;
    }

    if ((Context->IsCurrent)&&(Context->Column>0)) {
        if ((List[Context->Column-1]->MusicPause)&&(!List[Context->Column]->MusicPause)) Context->FadIn =true;
        if ((!List[Context->Column-1]->MusicPause)&&(List[Context->Column]->MusicPause)) Context->FadOut=true;
    }

    bool IsCurrentTransitionIN =(Context->PositionInSlide<List[(Context->IsCurrent?Context->Column:Context->Column+1)]->TransitionDuration);
    bool FadeEffect            =(Context->IsCurrent && IsCurrentTransitionIN && (Context->Column>0) && (
                                    (List[Context->Column-1]->MusicReduceVolume!=List[Context->Column]->MusicReduceVolume)||
                                    ((List[Context->Column-1]->MusicReduceVolume==List[Context->Column]->MusicReduceVolume)&&(List[Context->Column-1]->MusicReduceFactor!=List[Context->Column]->MusicReduceFactor))
                                ));

    if (!List[Context->Column]->MusicPause /*|| IsCurrentTransitionIN*/) {
        double Factor=1;
        if (FadeEffect/* && !List[Context->Column-1]->MusicPause*/) {
            double  PctDone  =ComputePCT(SPEEDWAVE_SINQUARTER,double(Context->Position)/double(List[Context->Column]->TransitionDuration));
            double  AncReduce=List[Context->Column-1]->MusicPause?0:List[Context->Column-1]->MusicReduceVolume?List[Context->Column-1]->MusicReduceFactor:1;
            double  NewReduce=List[Context->Column]->MusicPause?0:List[Context->Column]->MusicReduceVolume?List[Context->Column]->MusicReduceFactor:1;
            double  ReduceFactor=AncReduce+(NewReduce-AncReduce)*PctDone;
            Factor=Factor*ReduceFactor;
        } else if (Context->FadIn && IsCurrentTransitionIN) {
            double  PctDone  =ComputePCT(SPEEDWAVE_SINQUARTER,double(Context->PositionInSlide)/double(List[Context->Column]->TransitionDuration));
            Factor=Factor*PctDone;
        } else if (Context->FadOut && IsCurrentTransitionIN) {
            double  PctDone  =ComputePCT(SPEEDWAVE_SINQUARTER,double(Context->PositionInSlide)/double(List[Context->IsCurrent?Context->Column:Context->Column+1]->TransitionDuration));
            Factor=Factor*(1-PctDone);
        } else {
            if (List[Context->Column]->MusicReduceVolume) Factor=Factor*List[Context->Column]->MusicReduceFactor;
            Factor=Factor*CurMusic->GetFading(StartPosition+Context->PositionInSlide,Context->FadIn,Context->IsCurrent?(Context->Column<List.count()-1?List[Context->Column+1]->CachedPrevMusicFadOUT:false):Context->FadOut);
        }

        // Get more music bloc at correct position (volume is always 100% @ this point !)
        CurMusic->ImageAt(Context->PreviewMode,Context->Position+StartPosition+QTime(0,0,0,0).msecsTo(CurMusic->StartPos),Context->MusicTrack,false,1,true,false,Context->NbrDuration);

        // Apply correct volume to block in queue
        double Volume=CurMusic->Volume;
        if (Volume==-1) {
            if (CurMusic->GetSoundLevel()!=-1)
                Volume=double(ApplicationConfig->DefaultSoundLevel)/double(CurMusic->GetSoundLevel()*100);
                else Volume=1;
        }
        if (Volume!=1) Factor=Factor*Volume;
        if (Factor!=1)
            for (int i=0;i<Context->MusicTrack->NbrPacketForFPS;i++)
                Context->MusicTrack->ApplyVolume(i,Factor);
    }
}

//============================================================================================
// Function use directly or with thread to prepare an image number Column at given position
//  Extend=amout of padding (top and bottom) for cinema mode with DVD
//  IsCurrentObject : If true : prepare CurrentObject - If false : prepare Transition Object
//============================================================================================
void cDiaporama::CreateObjectContextList(cDiaporamaObjectInfo *Info,int W,int H,bool IsCurrentObject,bool PreviewMode,bool AddStartPos,QList<cCompositionObjectContext *> &PreparedBrushList,QObject *Parent) {
    bool SoundOnly=((W==0)&&(H==0));  // W and H = 0 when producing sound track in render process

    PreparedBrushList.clear();

    // return immediatly if we have image
    if (((!SoundOnly)&&(IsCurrentObject)&&(!Info->CurrentObject_PreparedImage.isNull())) ||
        ((!SoundOnly)&&(!IsCurrentObject)&&(!Info->TransitObject_PreparedImage.isNull()))) return;

    int64_t             Duration            =IsCurrentObject?Info->CurrentObject_ShotDuration:Info->TransitObject_ShotDuration;
    cDiaporamaShot      *CurShot            =IsCurrentObject?Info->CurrentObject_CurrentShot:Info->TransitObject_CurrentShot;
    cSoundBlockList     *SoundTrackMontage  =(IsCurrentObject?Info->CurrentObject_SoundTrackMontage:Info->TransitObject_SoundTrackMontage);
    int                 ObjectNumber        =IsCurrentObject?Info->CurrentObject_Number:Info->TransitObject_Number;
    int                 ShotNumber          =IsCurrentObject?Info->CurrentObject_ShotSequenceNumber:Info->TransitObject_ShotSequenceNumber;
    cDiaporamaShot      *PreviousShot       =(ShotNumber>0?List[ObjectNumber]->List[ShotNumber-1]:NULL);

    if (!SoundOnly && (CurShot)) {
        // Construct collection
        for (int j=0;j<CurShot->ShotComposition.List.count();j++)
            PreparedBrushList.append(new cCompositionObjectContext(j,PreviewMode,IsCurrentObject,Info,W,H,CurShot,PreviousShot,SoundTrackMontage,AddStartPos,Duration,Parent));
    }
}

void cDiaporama::PrepareImage(cDiaporamaObjectInfo *Info,int W,int H,bool IsCurrentObject,bool AddStartPos,QList<cCompositionObjectContext *> &PreparedBrushList) {
    bool SoundOnly=((W==0)&&(H==0));  // W and H = 0 when producing sound track in render process

    // return immediatly if we have image
    if (((!SoundOnly)&&(IsCurrentObject)&&(!Info->CurrentObject_PreparedImage.isNull())) ||
        ((!SoundOnly)&&(!IsCurrentObject)&&(!Info->TransitObject_PreparedImage.isNull()))) return;

    int64_t             Duration            =IsCurrentObject?Info->CurrentObject_ShotDuration:Info->TransitObject_ShotDuration;
    cDiaporamaShot      *CurShot            =IsCurrentObject?Info->CurrentObject_CurrentShot:Info->TransitObject_CurrentShot;
    cDiaporamaObject    *CurObject          =IsCurrentObject?Info->CurrentObject:Info->TransitObject;
    int                 CurTimePosition     =(IsCurrentObject?Info->CurrentObject_InObjectTime:Info->TransitObject_InObjectTime);
    cSoundBlockList     *SoundTrackMontage  =(IsCurrentObject?Info->CurrentObject_SoundTrackMontage:Info->TransitObject_SoundTrackMontage);

    if (SoundOnly) {
        // if sound only then parse all shot objects to create SoundTrackMontage
        for (int j=0;j<CurShot->ShotComposition.List.count();j++) {
            if ((CurShot->ShotComposition.List[j]->BackgroundBrush->MediaObject)
                    &&(CurShot->ShotComposition.List[j]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)
                    &&(CurShot->ShotComposition.List[j]->BackgroundBrush->SoundVolume!=0)) {

                // Calc StartPosToAdd depending on AddStartPos
                int64_t StartPosToAdd=(AddStartPos?QTime(0,0,0,0).msecsTo(((cVideoFile *)CurShot->ShotComposition.List[j]->BackgroundBrush->MediaObject)->StartPos):0);

                // Calc VideoPosition depending on video set to pause (visible=off) in previous shot
                int64_t VideoPosition=0;
                int64_t ThePosition=0;
                int TheShot=0;
                while ((TheShot<CurObject->List.count())&&(ThePosition+CurObject->List[TheShot]->StaticDuration<CurTimePosition)) {
                    for (int w=0;w<CurObject->List[TheShot]->ShotComposition.List.count();w++) if (CurObject->List[TheShot]->ShotComposition.List[w]->IndexKey==CurShot->ShotComposition.List[j]->IndexKey) {
                        if (CurObject->List[TheShot]->ShotComposition.List[w]->IsVisible) VideoPosition+=CurObject->List[TheShot]->StaticDuration;
                        break;
                    }
                    ThePosition+=CurObject->List[TheShot]->StaticDuration;
                    TheShot++;
                }
                VideoPosition+=(CurTimePosition-ThePosition);

                CurShot->ShotComposition.List[j]->DrawCompositionObject(CurObject,NULL,double(H)/double(1080),0,0,true,VideoPosition+StartPosToAdd,SoundTrackMontage,1,1,NULL,false,CurShot->StaticDuration,true);
            }
        }

    } else {

        QImage Image(W,H,QImage::Format_ARGB32_Premultiplied);
        if (Image.isNull()) return;

        // Prepare a transparent image
        QPainter P;
        P.begin(&Image);
        P.setRenderHints(QPainter::Antialiasing|QPainter::TextAntialiasing|QPainter::SmoothPixmapTransform|QPainter::HighQualityAntialiasing|QPainter::NonCosmeticDefaultPen);
        P.setCompositionMode(QPainter::CompositionMode_Source);
        P.fillRect(0,0,W,H,Qt::transparent);
        P.setCompositionMode(QPainter::CompositionMode_SourceOver);

        if (CurShot) {
            // Compute each item of the collection
            for (int aa=0;aa<PreparedBrushList.count();aa++) PreparedBrushList[aa]->Compute();

            // Draw collection
            for (int j=0;j<CurShot->ShotComposition.List.count();j++) {
                CurShot->ShotComposition.List[j]->DrawCompositionObject(CurObject,&P,double(H)/double(1080),W,H,PreparedBrushList[j]->PreviewMode,PreparedBrushList[j]->VideoPosition+PreparedBrushList[j]->StartPosToAdd,
                                                                        PreparedBrushList[j]->SoundTrackMontage,
                                                                        PreparedBrushList[j]->BlockPctDone,PreparedBrushList[j]->ImagePctDone,
                                                                        PreparedBrushList[j]->PrevCompoObject,Duration,
                                                                        true,false,0,0,0,0,false,PreparedBrushList[j]);
            }
        }
        P.end();

        if (IsCurrentObject) Info->CurrentObject_PreparedImage=Image; else Info->TransitObject_PreparedImage=Image;
    }
}

//=============================================================================================================================
// Function use directly or with thread to make assembly of background and images and make mix (sound & music) when transition
//=============================================================================================================================
void cDiaporama::DoAssembly(double PCT,cDiaporamaObjectInfo *Info,int W,int H,QImage::Format QTFMT) {
    if ((!Info->RenderedImage.isNull())||((W==0)&&(H==0))) return;    // return immediatly if we already have image or if sound only

    QImage   Image(W,H,QTFMT);
    QPainter P;

    P.begin(&Image);
    P.setRenderHints(QPainter::Antialiasing|QPainter::TextAntialiasing|QPainter::SmoothPixmapTransform|QPainter::HighQualityAntialiasing|QPainter::NonCosmeticDefaultPen);

    // Draw background
    if ((Info->IsTransition)&&((Info->CurrentObject_Number==0)||(Info->CurrentObject_BackgroundIndex!=Info->TransitObject_BackgroundIndex))) {
        double Opacity;
        if ((Info->TransitObject)&&(!Info->TransitObject_PreparedBackground.isNull())) P.drawImage(0,0,Info->TransitObject_PreparedBackground);
        if (!Info->CurrentObject_PreparedBackground.isNull()) {
            Opacity=ComputePCT(Info->CurrentObject->GetSpeedWave(),Info->TransitionPCTDone);
            if (Info->TransitObject) P.setOpacity(Opacity);
            P.drawImage(0,0,Info->CurrentObject_PreparedBackground);
        }
        P.setOpacity(1);
    } else {
        if (!Info->CurrentObject_PreparedBackground.isNull()) P.drawImage(0,0,Info->CurrentObject_PreparedBackground);
            else P.fillRect(QRect(0,0,W,H),Qt::black);
    }

    // Add prepared images and transition
    if ((Info->IsTransition)&&(!Info->CurrentObject_PreparedImage.isNull())) {
        if (Info->TransitObject_PreparedImage.isNull()) {
            Info->TransitObject_PreparedImage=QImage(Info->CurrentObject_PreparedImage.width(),Info->CurrentObject_PreparedImage.height(),QImage::Format_ARGB32_Premultiplied);
            Info->TransitObject_PreparedImage.fill(0);
        }
        DoTransition(Info->TransitionFamilly,Info->TransitionSubType,PCT,&Info->TransitObject_PreparedImage,&Info->CurrentObject_PreparedImage,&P,W,H);
    } else if (!Info->CurrentObject_PreparedImage.isNull()) P.drawImage(0,0,Info->CurrentObject_PreparedImage);
    P.end();
    Info->RenderedImage=Image;
}

//============================================================================================
// Function use directly or with thread to load source image
// Assume SourceImage is null
// Produce sound only if W and H=0
//============================================================================================

void cDiaporama::LoadSources(cDiaporamaObjectInfo *Info,int W,int H,bool PreviewMode,bool AddStartPos,QList<cCompositionObjectContext *> &PreparedTransitBrushList,QList<cCompositionObjectContext *> &PreparedBrushList,int NbrDuration) {
    if (!Info->CurrentObject) return;

    QFutureWatcher<void> ThreadPrepareCurrentMusicBloc;
    QFutureWatcher<void> ThreadPrepareTransitMusicBloc;

    // W and H = 0 when producing sound track in render process
    bool SoundOnly=((W==0)&&(H==0));

    //==============> Music track part

    if ((Info->CurrentObject)&&(Info->CurrentObject_MusicTrack)) {
        PrepareMusicBlocContext Context;
        Context.PreviewMode =PreviewMode;
        Context.Column      =Info->CurrentObject_Number;
        Context.Position    =Info->CurrentObject_InObjectTime;
        Context.MusicTrack  =Info->CurrentObject_MusicTrack;
        Context.NbrDuration =NbrDuration;
        Context.FadIn       =Info->CurrentObject->CachedMusicFadIN;
        Context.FadOut      =false;
        Context.IsCurrent   =true;
        Context.PositionInSlide =Info->CurrentObject_InObjectTime;
        //ThreadPrepareCurrentMusicBloc.setFuture(QtConcurrent::run(this,&cDiaporama::PrepareMusicBloc,&Context));
        PrepareMusicBloc(&Context);
    }

    if ((Info->IsTransition)&&(Info->TransitObject)&&(Info->TransitObject_MusicTrack)) {
        PrepareMusicBlocContext Context;
        Context.PreviewMode     =PreviewMode;
        Context.Column          =Info->TransitObject_Number;
        Context.Position        =Info->TransitObject_InObjectTime;
        Context.MusicTrack      =Info->TransitObject_MusicTrack;
        Context.NbrDuration     =NbrDuration;
        Context.FadIn           =false;
        Context.FadOut          =Info->CurrentObject->CachedPrevMusicFadOUT;
        Context.IsCurrent       =false;
        Context.PositionInSlide =Info->CurrentObject_InObjectTime;
        ThreadPrepareTransitMusicBloc.setFuture(QtConcurrent::run(this,&cDiaporama::PrepareMusicBloc,&Context));
    }

    //==============> Image part

    // Transition Object if a previous was not keep !
    if (Info->IsTransition) {
        if (Info->TransitObject) {
            PrepareImage(Info,W,H,false,AddStartPos,PreparedTransitBrushList);
        } else if (Info->TransitObject_PreparedImage.isNull()) {
            Info->TransitObject_PreparedImage=QImage(W,H,QImage::Format_ARGB32_Premultiplied);
            QPainter P;
            P.begin(&Info->TransitObject_PreparedImage);
            P.setRenderHints(QPainter::Antialiasing|QPainter::TextAntialiasing|QPainter::SmoothPixmapTransform|QPainter::HighQualityAntialiasing|QPainter::NonCosmeticDefaultPen);
            P.fillRect(0,0,W,H,Qt::black);//Qt::transparent);
            P.end();
        }
    }

    // Load Source image
    PrepareImage(Info,W,H,true,AddStartPos,PreparedBrushList);

    //==============> Background part

    if (!SoundOnly) {
        // Search background context for CurrentObject if a previous was not keep !
        if (Info->CurrentObject_BackgroundBrush==NULL) {
            if ((Info->CurrentObject_BackgroundIndex>=List.count())||(List[Info->CurrentObject_BackgroundIndex]->BackgroundType==false))
                     Info->CurrentObject_BackgroundBrush=new QBrush(Qt::black);   // If no background definition @ first object
                else Info->CurrentObject_BackgroundBrush=List[Info->CurrentObject_BackgroundIndex]->BackgroundBrush->GetBrush(QRectF(0,0,W,H),PreviewMode,0,NULL,1,NULL);
            Info->CurrentObject_PreparedBackground=QImage(W,H,QImage::Format_ARGB32_Premultiplied);
            QPainter P;
            P.begin(&Info->CurrentObject_PreparedBackground);
            if (Info->CurrentObject_BackgroundBrush) P.fillRect(QRect(0,0,W,H),*Info->CurrentObject_BackgroundBrush);
                else                                 P.fillRect(QRect(0,0,W,H),QBrush(Qt::black));
            P.end();
        }
        // same job for Transition Object if a previous was not keep !
        if ((Info->TransitObject)&&(Info->TransitObject_BackgroundBrush==NULL)) {
            if ((Info->TransitObject_BackgroundIndex>=List.count())||(List[Info->TransitObject_BackgroundIndex]->BackgroundType==false))
                     Info->TransitObject_BackgroundBrush=new QBrush(Qt::black);   // If no background definition @ first object
                else Info->TransitObject_BackgroundBrush=List[Info->TransitObject_BackgroundIndex]->BackgroundBrush->GetBrush(QRectF(0,0,W,H),PreviewMode,0,NULL,1,NULL);
            Info->TransitObject_PreparedBackground=QImage(W,H,QImage::Format_ARGB32_Premultiplied);
            QPainter P;
            P.begin(&Info->TransitObject_PreparedBackground);
            if (Info->TransitObject_BackgroundBrush) P.fillRect(QRect(0,0,W,H),*Info->TransitObject_BackgroundBrush);
                else                                 P.fillRect(QRect(0,0,W,H),QBrush(Qt::black));
            P.end();
        }
    }

    //==============> Mixing of music and soundtrack
    QTime b;
    b.start();

    if ((Info->CurrentObject)&&(Info->CurrentObject_MusicTrack)&&(ThreadPrepareCurrentMusicBloc.isRunning())) ThreadPrepareCurrentMusicBloc.waitForFinished();
    if ((Info->TransitObject)&&(Info->TransitObject_MusicTrack)&&(ThreadPrepareTransitMusicBloc.isRunning())) ThreadPrepareTransitMusicBloc.waitForFinished();

    // Soundtrack mix with fade in/fade out
    if ((Info->IsTransition)&&((Info->CurrentObject_SoundTrackMontage)||(Info->TransitObject_SoundTrackMontage))) {

        if (Info->CurrentObject_SoundTrackMontage==NULL) {
            // if we don't have a CurrentObject_SoundTrackMontage, we need to create it because it's the destination !
            Info->CurrentObject_SoundTrackMontage=new cSoundBlockList();
            Info->CurrentObject_SoundTrackMontage->SetFPS(Info->FrameDuration,2,Info->TransitObject_SoundTrackMontage->SamplingRate,AV_SAMPLE_FMT_S16);
        }
        // Ensure this track have enough data
        while (Info->CurrentObject_SoundTrackMontage->ListCount()<Info->CurrentObject_SoundTrackMontage->NbrPacketForFPS)
            Info->CurrentObject_SoundTrackMontage->AppendNullSoundPacket(Info->CurrentObject_StartTime+Info->CurrentObject_InObjectTime);

        // Mix current and transit SoundTrackMontage (if needed)
        // @ the end: only current SoundTrackMontage exist !
        Info->CurrentObject_SoundTrackMontage->Mutex.lock();
        for (int i=0;i<Info->CurrentObject_SoundTrackMontage->NbrPacketForFPS;i++) {
            // Mix the 2 sources buffer using the first buffer as destination and remove one paquet from the TransitObject_SoundTrackMontage
            int16_t *Paquet=Info->TransitObject_SoundTrackMontage?Info->TransitObject_SoundTrackMontage->DetachFirstPacket(true):NULL;

            int32_t mix;
            int16_t *Buf1=i<Info->CurrentObject_SoundTrackMontage->ListCount()?Info->CurrentObject_SoundTrackMontage->GetAt(i):NULL;
            int     Max=Info->CurrentObject_SoundTrackMontage->SoundPacketSize/(Info->CurrentObject_SoundTrackMontage->SampleBytes*Info->CurrentObject_SoundTrackMontage->Channels);

            double  FadeAdjust   =sin(1.5708*double(Info->CurrentObject_InObjectTime+(double(i)/double(Info->CurrentObject_SoundTrackMontage->NbrPacketForFPS))*double(Info->FrameDuration))/double(Info->TransitionDuration));
            double  FadeAdjust2  =1-FadeAdjust;

            int16_t *Buf2=(Paquet!=NULL)?Paquet:NULL;
            if ((Buf1!=NULL)&&(Buf2==NULL)) {
                // Apply Fade in to Buf1
                for (int j=0;j<Max;j++) {
                    // Left channel : Adjust if necessary (16 bits)
                    mix=int32_t(double(*(Buf1))*FadeAdjust);
                    if (mix>32767)  mix=32767; else if (mix<-32768) mix=-32768;
                    *(Buf1++)=int16_t(mix);
                    // Right channel : Adjust if necessary (16 bits)
                    mix=int32_t(double(*(Buf1))*FadeAdjust);
                    if (mix>32767)  mix=32767; else if (mix<-32768) mix=-32768;
                    *(Buf1++)=int16_t(mix);
                }
            } else if ((Buf1!=NULL)&&(Buf2!=NULL)) {
                // do mixing
                for (int j=0;j<Max;j++) {
                    // Left channel : Adjust if necessary (16 bits)
                    mix=int32_t(double(*(Buf1))*FadeAdjust+double(*(Buf2++))*FadeAdjust2);
                    if (mix>32767)  mix=32767; else if (mix<-32768) mix=-32768;
                    *(Buf1++)=int16_t(mix);
                    // Right channel : Adjust if necessary (16 bits)
                    mix=int32_t(double(*(Buf1))*FadeAdjust+double(*(Buf2++))*FadeAdjust2);
                    if (mix>32767)  mix=32767; else if (mix<-32768) mix=-32768;
                    *(Buf1++)=int16_t(mix);
                }
                av_free(Paquet);
            } else if ((Buf1==NULL)&&(Buf2!=NULL)) {
                // swap buf1 and buf2
                Info->CurrentObject_SoundTrackMontage->SetAt(i,Buf2);
                // Apply Fade out to Buf2
                for (int j=0;j<Max;j++) {
                    // Left channel : Adjust if necessary (16 bits)
                    mix=int32_t(double(*(Buf2))*FadeAdjust2);
                    if (mix>32767)  mix=32767; else if (mix<-32768) mix=-32768;
                    *(Buf2++)=int16_t(mix);
                    // Right channel : Adjust if necessary (16 bits)
                    mix=int32_t(double(*(Buf2))*FadeAdjust2);
                    if (mix>32767)  mix=32767; else if (mix<-32768) mix=-32768;
                    *(Buf2++)=int16_t(mix);
                }
            }
        }
        Info->CurrentObject_SoundTrackMontage->Mutex.unlock();
    }

    // Mix current and transit music
    // @ the end: only current music exist !
    // Mix the 2 sources buffer using the first buffer as destination and remove one paquet from the PreviousMusicTrack
    if ((Info->IsTransition)&&(Info->CurrentObject_MusicTrack)) {
        Info->CurrentObject_MusicTrack->Mutex.lock();
        int Max=Info->CurrentObject_MusicTrack->NbrPacketForFPS;
        if (Max>Info->CurrentObject_MusicTrack->ListCount()) Max=Info->CurrentObject_MusicTrack->ListCount();
        for (int i=0;i<Max;i++) {
            if (i>=Info->CurrentObject_MusicTrack->ListCount())
                Info->CurrentObject_MusicTrack->AppendNullSoundPacket(0,true);

            int16_t *Buf1=Info->CurrentObject_MusicTrack->GetAt(i);
            int16_t *Buf2=Info->TransitObject_MusicTrack?Info->TransitObject_MusicTrack->DetachFirstPacket(true):NULL;
            int32_t mix;
            int     Max=Info->CurrentObject_MusicTrack->SoundPacketSize/(Info->CurrentObject_MusicTrack->SampleBytes*Info->CurrentObject_MusicTrack->Channels);

            if (Buf2) {
                if (!Buf1) {
                    Info->CurrentObject_MusicTrack->SetAt(i,Buf2);
                } else {
                    int16_t *B1=Buf1,*B2=Buf2;

                    for (int j=0;j<Max;j++) {
                        // Left channel : Adjust if necessary (16 bits)
                        mix=int32_t(*(B1)+*(B2++));
                        if (mix>32767)  mix=32767; else if (mix<-32768) mix=-32768;
                        *(B1++)=int16_t(mix);
                        // Right channel : Adjust if necessary (16 bits)
                        mix=int32_t(*(B1)+*(B2++));
                        if (mix>32767)  mix=32767; else if (mix<-32768) mix=-32768;
                        *(B1++)=int16_t(mix);
                    }
                    av_free(Buf2);
                    Info->CurrentObject_MusicTrack->SetAt(i,Buf1);
                }
            }
        }
        Info->CurrentObject_MusicTrack->Mutex.unlock();
    }
}

//============================================================================================

void cDiaporama::CloseUnusedLibAv(int CurrentCell) {
    // Parse all unused slide to close unused libav buffer, codec, ...
    for (int i=0;i<List.count();i++) {
        if ((i<CurrentCell-1)||(i>CurrentCell+1)) for (int j=0;j<List[i]->ObjectComposition.List.count();j++)
            if ((List[i]->ObjectComposition.List[j]->BackgroundBrush->MediaObject)&&(List[i]->ObjectComposition.List[j]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE))
                        ((cVideoFile *)List[i]->ObjectComposition.List[j]->BackgroundBrush->MediaObject)->CloseCodecAndFile();
    }
    //ApplicationConfig->ImagesCache.FreeMemoryToMaxValue(NULL);
}


//============================================================================================

void cDiaporama::UpdateGMapsObject(bool ProposeAll) {
    cLocation *PrjLocation=(cLocation *)ProjectInfo->Location;
    cLocation *ChpLocation=PrjLocation;
    for (int i=0;i<List.count();i++) {
        if (List[i]->StartNewChapter) {
            if (List[i]->ChapterLocation) ChpLocation=(cLocation *)List[i]->ChapterLocation;
                else ChpLocation=PrjLocation;
        }
        for (int j=0;j<List[i]->ObjectComposition.List.count();j++) if ((List[i]->ObjectComposition.List[j]->BackgroundBrush->MediaObject)&&(List[i]->ObjectComposition.List[j]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_GMAPSMAP)) {
            cGMapsMap *CurrentMap=(cGMapsMap *)List[i]->ObjectComposition.List[j]->BackgroundBrush->MediaObject;
            bool      Propose=false;
            bool      FullRefresh=false;
            for (int loc=0;loc<CurrentMap->List.count();loc++) {
                cLocation *Location=(cLocation *)CurrentMap->List[loc];
                if (Location->LocationType==cLocation::PROJECT) {
                    if ((ProposeAll)&&(!CurrentMap->IsMapValide)) {
                        Propose=true;
                    } else if ((PrjLocation)&&((Location->Name!=PrjLocation->Name)||(Location->FriendlyAddress!=PrjLocation->FriendlyAddress)||(Location->GPS_cx!=PrjLocation->GPS_cx)||(Location->GPS_cy!=PrjLocation->GPS_cy))) {
                        if ((PrjLocation)&&((Location->GPS_cx!=PrjLocation->GPS_cx)||(Location->GPS_cy!=PrjLocation->GPS_cy))) {
                            FullRefresh=true;
                            CurrentMap->IsValide=false;
                        }
                        Propose=true;
                    }
                } else if (Location->LocationType==cLocation::CHAPTER) {
                    if ((ProposeAll)&&(!CurrentMap->IsMapValide)) {
                        Propose=true;
                    } else if ((ChpLocation)&&((Location->Name!=ChpLocation->Name)||(Location->FriendlyAddress!=ChpLocation->FriendlyAddress)||(Location->GPS_cx!=ChpLocation->GPS_cx)||(Location->GPS_cy!=ChpLocation->GPS_cy))) {
                        if ((PrjLocation)&&((Location->GPS_cx!=ChpLocation->GPS_cx)||(Location->GPS_cy!=ChpLocation->GPS_cy))) {
                            FullRefresh=true;
                            CurrentMap->IsValide=false;
                        }
                        Propose=true;
                    }
                }
                if (Propose) {
                    cLocation *RealLoc=NULL;
                    List[i]->ObjectComposition.List[j]->BackgroundBrush->GetRealLocation((void **)&Location,(void **)&RealLoc);
                    Propose=(Location!=NULL)&&(RealLoc!=NULL);
                }
            }
            if (Propose) {
                qlonglong PrevRessourceKey=CurrentMap->RessourceKey;
                if ((FullRefresh)&&(CustomMessageBox(ApplicationConfig->TopLevelWindow,QMessageBox::Question,APPLICATION_NAME,
                             QApplication::translate("DlgGMapsLocation","A map on slide %1 must be regenerated.\nDo you want to do it now?").arg(i+1),
                             QMessageBox::Yes|QMessageBox::No,QMessageBox::Yes)==QMessageBox::Yes)) {
                    DlgGMapsGeneration Dlg(List[i]->ObjectComposition.List[j]->BackgroundBrush,CurrentMap,false,ApplicationConfig,ApplicationConfig->TopLevelWindow);
                    Dlg.InitDialog();
                    Dlg.exec();
                }
                // Reset cache of map object
                ApplicationConfig->ImagesCache.RemoveImageObject(PrevRessourceKey,-1);
                // Reset thumbnail of slide
                ApplicationConfig->SlideThumbsTable->ClearThumbs(List[i]->ThumbnailKey);
                IsModify=true;
            }
        }
    }
}

//*********************************************************************************************************************************************
// Class object for rendering
//*********************************************************************************************************************************************

cDiaporamaObjectInfo::cDiaporamaObjectInfo() {
    //==============> Pre-initialise all values
    IsShotStatic                        =false;
    IsTransitStatic                     =false;
    FrameDuration                       =0;
    // Current object
    CurrentObject_Number                =0;                 // Object number
    CurrentObject_StartTime             =0;                 // Position (in msec) of the first frame relative to the diaporama
    CurrentObject_InObjectTime          =0;                 // Position (in msec) in the object
    CurrentObject                       =NULL;              // Link to the current object
    CurrentObject_ShotSequenceNumber    =0;                 // Number of the shot sequence in the current object
    CurrentObject_CurrentShot           =NULL;              // Link to the current shot in the current object
    CurrentObject_CurrentShotType       =0;                 // Type of the current shot : Static/Mobil/Video
    CurrentObject_ShotDuration          =0;                 // Time the static shot end (if CurrentObject_CurrentShotType=SHOTTYPE_STATIC)
    CurrentObject_PCTDone               =0;                 // PCT achevement for static shot
    CurrentObject_BackgroundIndex       =0;                 // Object number containing current background definition
    CurrentObject_BackgroundBrush       =NULL;              // Current background brush
    CurrentObject_FreeBackgroundBrush   =true;              // True if allow to delete CurrentObject_BackgroundBrush during destructor
    CurrentObject_SoundTrackMontage     =NULL;              // Sound for playing sound from montage track
    CurrentObject_FreeSoundTrackMontage =true;              // True if allow to delete CurrentObject_SoundTrackMontage during destructor
    CurrentObject_MusicTrack            =NULL;              // Sound for playing music from music track
    CurrentObject_FreeMusicTrack        =true;              // True if allow to delete CurrentObject_MusicTrack during destructor
    CurrentObject_MusicObject           =NULL;              // Ref to the current playing music

    // Transitionnal object
    IsTransition                        =false;             // True if transition in progress
    TransitionPCTDone                   =0;                 // PCT achevement for transition
    TransitObject_Number                =0;                 // Object number
    TransitObject_StartTime             =0;                 // Position (in msec) of the first frame relative to the diaporama
    TransitObject_InObjectTime          =0;                 // Position (in msec) in the object
    TransitObject                       =NULL;              // Link to the current object
    TransitObject_ShotSequenceNumber    =0;                 // Number of the shot sequence in the current object
    TransitObject_CurrentShot           =NULL;              // Link to the current shot in the current object
    TransitObject_CurrentShotType       =0;                 // Type of the current shot : Static/Mobil/Video
    TransitObject_ShotDuration          =0;                 // Time the static shot end (if TransitObject_CurrentShotType=SHOTTYPE_STATIC)
    TransitObject_PCTDone               =0;                 // PCT achevement for static shot
    TransitObject_BackgroundIndex       =0;                 // Object number containing current background definition
    TransitObject_BackgroundBrush       =NULL;              // Current background brush
    TransitObject_FreeBackgroundBrush   =true;              // True if allow to delete TransitObject_BackgroundBrush during destructor
    TransitObject_SoundTrackMontage     =NULL;              // Sound for playing sound from montage track
    TransitObject_FreeSoundTrackMontage =true;              // True if allow to delete TransitObject_SoundTrackMontage during destructor
    TransitObject_MusicTrack            =NULL;              // Sound for playing music from music track
    TransitObject_FreeMusicTrack        =true;              // True if allow to delete TransitObject_MusicTrack during destructor
    TransitObject_MusicObject           =NULL;              // Ref to the current playing music
}

cDiaporamaObjectInfo::cDiaporamaObjectInfo(cDiaporamaObjectInfo *PreviousFrame,int64_t TimePosition,cDiaporama *Diaporama,double TheFrameDuration,bool WantSound) {
    //==============> Pre-initialise all values
    IsShotStatic                        =false;
    IsTransitStatic                     =false;
    FrameDuration                       =TheFrameDuration;

    // Current object
    CurrentObject_Number                =0;                 // Object number
    CurrentObject_StartTime             =0;                 // Position (in msec) of the first frame relative to the diaporama
    CurrentObject_InObjectTime          =0;                 // Position (in msec) in the object
    CurrentObject                       =NULL;              // Link to the current object
    CurrentObject_ShotSequenceNumber    =0;                 // Number of the shot sequence in the current object
    CurrentObject_CurrentShot           =NULL;              // Link to the current shot in the current object
    CurrentObject_CurrentShotType       =0;                 // Type of the current shot : Static/Mobil/Video
    CurrentObject_ShotDuration          =0;                 // Time the static shot end (if CurrentObject_CurrentShotType=SHOTTYPE_STATIC)
    CurrentObject_PCTDone               =0;                 // PCT achevement for static shot
    CurrentObject_BackgroundIndex       =0;                 // Object number containing current background definition
    CurrentObject_BackgroundBrush       =NULL;              // Current background brush
    CurrentObject_FreeBackgroundBrush   =true;              // True if allow to delete CurrentObject_BackgroundBrush during destructor
    CurrentObject_SoundTrackMontage     =NULL;              // Sound for playing sound from montage track
    CurrentObject_FreeSoundTrackMontage =true;              // True if allow to delete CurrentObject_SoundTrackMontage during destructor
    CurrentObject_MusicTrack            =NULL;              // Sound for playing music from music track
    CurrentObject_FreeMusicTrack        =true;              // True if allow to delete CurrentObject_MusicTrack during destructor
    CurrentObject_MusicObject           =NULL;              // Ref to the current playing music

    // Transitionnal object
    IsTransition                        =false;             // True if transition in progress
    TransitionPCTDone                   =0;                 // PCT achevement for transition
    TransitObject_Number                =0;                 // Object number
    TransitObject_StartTime             =0;                 // Position (in msec) of the first frame relative to the diaporama
    TransitObject_InObjectTime          =0;                 // Position (in msec) in the object
    TransitObject                       =NULL;              // Link to the current object
    TransitObject_ShotSequenceNumber    =0;                 // Number of the shot sequence in the current object
    TransitObject_CurrentShot           =NULL;              // Link to the current shot in the current object
    TransitObject_CurrentShotType       =0;                 // Type of the current shot : Static/Mobil/Video
    TransitObject_ShotDuration          =0;                 // Time the static shot end (if TransitObject_CurrentShotType=SHOTTYPE_STATIC)
    TransitObject_PCTDone               =0;                 // PCT achevement for static shot
    TransitObject_BackgroundIndex       =0;                 // Object number containing current background definition
    TransitObject_BackgroundBrush       =NULL;              // Current background brush
    TransitObject_FreeBackgroundBrush   =true;              // True if allow to delete TransitObject_BackgroundBrush during destructor
    TransitObject_SoundTrackMontage     =NULL;              // Sound for playing sound from montage track
    TransitObject_FreeSoundTrackMontage =true;              // True if allow to delete TransitObject_SoundTrackMontage during destructor
    TransitObject_MusicTrack            =NULL;              // Sound for playing music from music track
    TransitObject_FreeMusicTrack        =true;              // True if allow to delete TransitObject_MusicTrack during destructor
    TransitObject_MusicObject           =NULL;              // Ref to the current playing music

    if (!Diaporama) {
        CurrentObject_InObjectTime=TimePosition;
        TransitObject_InObjectTime=TimePosition;
    } else {
        //==============> Retrieve object information depending on position (in msec)
        // Search wich object for given time position
        int AdjustedDuration=(CurrentObject_Number<Diaporama->List.count())?Diaporama->List[CurrentObject_Number]->CachedDuration-Diaporama->GetTransitionDuration(CurrentObject_Number+1):0;
        if (AdjustedDuration<33) AdjustedDuration=33; // Not less than 1/30 sec
        while ((CurrentObject_Number<Diaporama->List.count())&&
               ((CurrentObject_StartTime+AdjustedDuration<=TimePosition))) {

            CurrentObject_StartTime=CurrentObject_StartTime+AdjustedDuration;
            CurrentObject_Number++;
            AdjustedDuration=(CurrentObject_Number<Diaporama->List.count())?Diaporama->List[CurrentObject_Number]->CachedDuration-Diaporama->GetTransitionDuration(CurrentObject_Number+1):0;
            if (AdjustedDuration<33) AdjustedDuration=33;   // Not less than 1/30 sec
        }
        // Adjust CurrentObject_Number
        if (CurrentObject_Number>=Diaporama->List.count()) {
            if (Diaporama->List.count()>0) {   // Force to last object
                CurrentObject_Number    =Diaporama->List.count()-1;
                CurrentObject           =Diaporama->List[CurrentObject_Number];
                CurrentObject_StartTime =Diaporama->GetObjectStartPosition(CurrentObject_Number);
            } else {                // Force to first or none object
                CurrentObject_Number   =0;
                CurrentObject_StartTime=0;
                CurrentObject=NULL;
            }
        } else CurrentObject=Diaporama->List[CurrentObject_Number];

        CurrentObject_InObjectTime=TimePosition-CurrentObject_StartTime;

        // Now calculate wich sequence in the current object is
        if (CurrentObject) {
            int CurPos  =0;
            while ((CurrentObject_ShotSequenceNumber<CurrentObject->List.count()-1)&&((CurPos+CurrentObject->List[CurrentObject_ShotSequenceNumber]->StaticDuration)<=CurrentObject_InObjectTime)) {
                CurPos=CurPos+CurrentObject->List[CurrentObject_ShotSequenceNumber]->StaticDuration;
                CurrentObject_ShotSequenceNumber++;
            }
            CurrentObject_CurrentShot=CurrentObject->List[CurrentObject_ShotSequenceNumber];
            if (CurrentObject_ShotSequenceNumber<CurrentObject->List.count()-1) CurrentObject_ShotDuration=CurrentObject_CurrentShot->StaticDuration;
                else CurrentObject_ShotDuration=CurrentObject_CurrentShot->Parent->CachedDuration-CurPos;

            // calculate CurrentObject_PCTDone
            CurrentObject_PCTDone=(double(CurrentObject_InObjectTime)-double(CurPos))/(double(CurrentObject_ShotDuration));

            // Force all to SHOTTYPE_VIDEO
            CurrentObject_CurrentShotType=SHOTTYPE_VIDEO;

        } else {
            CurrentObject_ShotSequenceNumber=0;
            CurrentObject_CurrentShot       =NULL;
            CurrentObject_CurrentShotType   =SHOTTYPE_STATIC;
        }

        // Calculate wich BackgroundIndex to be use (Background type : false=same as precedent - true=new background definition)
        CurrentObject_BackgroundIndex=CurrentObject_Number;
        while ((CurrentObject_BackgroundIndex>0)&&(!Diaporama->List[CurrentObject_BackgroundIndex]->BackgroundType)) CurrentObject_BackgroundIndex--;

        // Define if for this position we have a transition with a previous object
        if ((CurrentObject!=NULL)&&((CurrentObject->TransitionFamilly!=0)||(CurrentObject->TransitionSubType!=0))&&(CurrentObject_InObjectTime<CurrentObject->TransitionDuration)) {
            TransitionFamilly =CurrentObject->TransitionFamilly;                      // Transition familly
            TransitionSubType =CurrentObject->TransitionSubType;                      // Transition type in the familly
            TransitionDuration=CurrentObject->TransitionDuration;                     // Transition duration (in msec)
            IsTransition      =true;
            TransitionPCTDone =double(CurrentObject_InObjectTime)/double(TransitionDuration);

            // If CurrentObject is not the first object
            if (CurrentObject_Number>0) {
                TransitObject_Number        =CurrentObject_Number-1;
                TransitObject               =Diaporama->List[TransitObject_Number];
                TransitObject_StartTime     =Diaporama->GetObjectStartPosition(TransitObject_Number);
                TransitObject_InObjectTime  =TimePosition-TransitObject_StartTime;
                // Now calculate wich sequence in the Transition object is
                int CurPos  =0;
                while ((TransitObject_ShotSequenceNumber<TransitObject->List.count()-1)&&((CurPos+TransitObject->List[TransitObject_ShotSequenceNumber]->StaticDuration)<=TransitObject_InObjectTime)) {
                    CurPos=CurPos+TransitObject->List[TransitObject_ShotSequenceNumber]->StaticDuration;
                    TransitObject_ShotSequenceNumber++;
                }
                TransitObject_CurrentShot=TransitObject->List[TransitObject_ShotSequenceNumber];
                if (TransitObject_ShotSequenceNumber<TransitObject->List.count()-1) TransitObject_ShotDuration=TransitObject_CurrentShot->StaticDuration;
                    else TransitObject_ShotDuration=TransitObject_CurrentShot->Parent->CachedDuration-CurPos;

                TransitObject_CurrentShotType=SHOTTYPE_VIDEO;

                // calculate TransitObject_PCTDone
                TransitObject_PCTDone=(double(TransitObject_InObjectTime)-double(CurPos))/(double(TransitObject_ShotDuration));

                // Force all to SHOTTYPE_VIDEO
                // Calculate wich BackgroundIndex to be use for transition object (Background type : false=same as precedent - true=new background definition)
                TransitObject_BackgroundIndex=TransitObject_Number;
                while ((TransitObject_BackgroundIndex>0)&&(!Diaporama->List[TransitObject_BackgroundIndex]->BackgroundType)) TransitObject_BackgroundIndex--;
            }
        }

        // Search music objects
        int64_t StartPosition;
        if ((WantSound)&&(CurrentObject!=NULL)) CurrentObject_MusicObject=Diaporama->GetMusicObject(CurrentObject_Number,StartPosition);
        if ((WantSound)&&(TransitObject!=NULL)) TransitObject_MusicObject=Diaporama->GetMusicObject(TransitObject_Number,StartPosition);

        //==============> Try to re-use values from PreviousFrame
        if ((CurrentObject)&&(PreviousFrame)) {
            //************ Background
            if (PreviousFrame->CurrentObject_BackgroundIndex==CurrentObject_BackgroundIndex) {
                CurrentObject_BackgroundBrush=PreviousFrame->CurrentObject_BackgroundBrush;             // Use the same background
                PreviousFrame->CurrentObject_FreeBackgroundBrush=false;                                 // Set tag to not delete previous background
                CurrentObject_PreparedBackground=PreviousFrame->CurrentObject_PreparedBackground;
            }
            // Background of transition Object
            if (TransitObject) {
                if (PreviousFrame->CurrentObject_BackgroundIndex==TransitObject_BackgroundIndex) {
                    TransitObject_BackgroundBrush=PreviousFrame->CurrentObject_BackgroundBrush;             // Use the same background
                    PreviousFrame->CurrentObject_FreeBackgroundBrush=false;                                 // Set tag to not delete previous background
                    TransitObject_PreparedBackground=PreviousFrame->CurrentObject_PreparedBackground;
                } else if (PreviousFrame->TransitObject_BackgroundIndex==TransitObject_BackgroundIndex) {
                    TransitObject_BackgroundBrush=PreviousFrame->TransitObject_BackgroundBrush;         // Use the same background
                    PreviousFrame->TransitObject_FreeBackgroundBrush=false;                             // Set tag to not delete previous background
                    TransitObject_PreparedBackground=PreviousFrame->TransitObject_PreparedBackground;
                }
                // Special case to disable free of background brush if transit object and current object use the same
                if (TransitObject_BackgroundBrush==CurrentObject_BackgroundBrush) {
                    TransitObject_FreeBackgroundBrush=false;
                }
            }

            //************ SoundTrackMontage
            if ((WantSound)&&(PreviousFrame->CurrentObject_Number==CurrentObject_Number)) {
                CurrentObject_SoundTrackMontage=PreviousFrame->CurrentObject_SoundTrackMontage;         // Use the same SoundTrackMontage
                PreviousFrame->CurrentObject_FreeSoundTrackMontage=false;                               // Set tag to not delete previous SoundTrackMontage
            }
            // SoundTrackMontage of transition Object
            if ((WantSound)&&(TransitObject)) {
                if ((PreviousFrame->CurrentObject_Number==TransitObject_Number)) {
                    TransitObject_SoundTrackMontage=PreviousFrame->CurrentObject_SoundTrackMontage;     // Use the same SoundTrackMontage
                    PreviousFrame->CurrentObject_FreeSoundTrackMontage=false;                           // Set tag to not delete previous SoundTrackMontage
                } else if ((PreviousFrame->TransitObject_Number==TransitObject_Number)) {
                    TransitObject_SoundTrackMontage=PreviousFrame->TransitObject_SoundTrackMontage;     // Use the same SoundTrackMontage
                    PreviousFrame->TransitObject_FreeSoundTrackMontage=false;                           // Set tag to not delete previous SoundTrackMontage
                }
            }

            //************ Music
            if ((WantSound)&&(PreviousFrame->CurrentObject_MusicObject==CurrentObject_MusicObject)) {
                CurrentObject_MusicTrack=PreviousFrame->CurrentObject_MusicTrack;                       // Use the same Music track
                PreviousFrame->CurrentObject_FreeMusicTrack=false;                                      // Set tag to not delete previous SoundTrackMontage
            }
            // Music of transition Object
            if ((WantSound)&&(TransitObject)) {
                if ((PreviousFrame->CurrentObject_MusicObject==TransitObject_MusicObject)) {
                    TransitObject_MusicTrack=PreviousFrame->CurrentObject_MusicTrack;                   // Use the same SoundTrackMontage
                    PreviousFrame->CurrentObject_FreeMusicTrack=false;                                  // Set tag to not delete previous SoundTrackMontage
                } else if ((PreviousFrame->TransitObject_MusicObject==TransitObject_MusicObject)) {
                    TransitObject_MusicTrack=PreviousFrame->TransitObject_MusicTrack;                   // Use the same SoundTrackMontage
                    PreviousFrame->TransitObject_FreeMusicTrack=false;                                  // Set tag to not delete previous SoundTrackMontage
                }
                // Special case to disable TransitObject_MusicTrack if transit object and current object use the same
                if (CurrentObject_MusicObject==TransitObject_MusicObject) {
                    TransitObject_FreeMusicTrack=false;
                    TransitObject_MusicTrack=NULL;
                }
            }
            // Definitively check PreviousFrame to know if we realy need to free MusicObject
            if ((WantSound)&&(PreviousFrame->CurrentObject_FreeMusicTrack)&&((PreviousFrame->CurrentObject_MusicTrack==CurrentObject_MusicTrack)||(PreviousFrame->CurrentObject_MusicTrack==TransitObject_MusicTrack)))
                PreviousFrame->CurrentObject_FreeMusicTrack=false;
            if ((WantSound)&&(PreviousFrame->TransitObject_FreeMusicTrack)&&((PreviousFrame->TransitObject_MusicTrack==CurrentObject_MusicTrack)||(PreviousFrame->TransitObject_MusicTrack==TransitObject_MusicTrack)||(PreviousFrame->TransitObject_MusicTrack==PreviousFrame->CurrentObject_MusicTrack)))
                PreviousFrame->TransitObject_FreeMusicTrack=false;

            //************ PreparedImage & RenderedImage
            IsShotStatic=(PreviousFrame->CurrentObject_Number==CurrentObject_Number)&&
                         (PreviousFrame->CurrentObject_CurrentShot==CurrentObject_CurrentShot)&&
                         (ComputeIsShotStatic(CurrentObject,CurrentObject_ShotSequenceNumber));
            if (IsShotStatic) {// Same shot
                CurrentObject_PreparedImage=PreviousFrame->CurrentObject_PreparedImage;                 // Use the same PreparedImage
                if ((!IsTransition)&&(!PreviousFrame->IsTransition))
                    RenderedImage=PreviousFrame->RenderedImage;   // Use the same RenderedImage
            }
            // PreparedImage of transition Object
            if (TransitObject) {
                IsTransitStatic=ComputeIsShotStatic(TransitObject,TransitObject_ShotSequenceNumber);
                if ((PreviousFrame->CurrentObject_CurrentShot==TransitObject_CurrentShot)&&(IsTransitStatic)) {
                    TransitObject_PreparedImage=PreviousFrame->CurrentObject_PreparedImage;             // Use the same PreparedImage
                } else if ((PreviousFrame->TransitObject_CurrentShot==TransitObject_CurrentShot)&&(IsTransitStatic)) {
                    TransitObject_PreparedImage=PreviousFrame->TransitObject_PreparedImage;             // Use the same PreparedImage
                }
            }
        }
    }
}

// make a copy of PreviousFrame
void cDiaporamaObjectInfo::Copy(cDiaporamaObjectInfo *PreviousFrame) {
    IsShotStatic                        =PreviousFrame->IsShotStatic;
    IsTransitStatic                     =PreviousFrame->IsTransitStatic;
    FrameDuration                       =PreviousFrame->FrameDuration;
    TransitionFamilly                   =PreviousFrame->TransitionFamilly;                  // Transition familly
    TransitionSubType                   =PreviousFrame->TransitionSubType;                  // Transition type in the familly
    TransitionDuration                  =PreviousFrame->TransitionDuration;                 // Transition duration (in msec)

    // Current object
    CurrentObject_Number                =PreviousFrame->CurrentObject_Number;               // Object number
    CurrentObject_StartTime             =PreviousFrame->CurrentObject_StartTime;            // Position (in msec) of the first frame relative to the diaporama
    CurrentObject_InObjectTime          =PreviousFrame->CurrentObject_InObjectTime;         // Position (in msec) in the object
    CurrentObject                       =PreviousFrame->CurrentObject;                      // Link to the current object
    CurrentObject_ShotSequenceNumber    =PreviousFrame->CurrentObject_ShotSequenceNumber;   // Number of the shot sequence in the current object
    CurrentObject_CurrentShot           =PreviousFrame->CurrentObject_CurrentShot;          // Link to the current shot in the current object
    CurrentObject_CurrentShotType       =PreviousFrame->CurrentObject_CurrentShotType;      // Type of the current shot : Static/Mobil/Video
    CurrentObject_ShotDuration          =PreviousFrame->CurrentObject_ShotDuration;        // Time the static shot end (if CurrentObject_CurrentShotType=SHOTTYPE_STATIC)
    CurrentObject_PCTDone               =PreviousFrame->CurrentObject_PCTDone;
    CurrentObject_BackgroundIndex       =PreviousFrame->CurrentObject_BackgroundIndex;      // Object number containing current background definition
    CurrentObject_BackgroundBrush       =PreviousFrame->CurrentObject_BackgroundBrush;      // Current background brush
    CurrentObject_FreeBackgroundBrush   =false;                                             // True if allow to delete CurrentObject_BackgroundBrush during destructor
    CurrentObject_PreparedBackground    =PreviousFrame->CurrentObject_PreparedBackground;   // Current image produce for background
    CurrentObject_SoundTrackMontage     =PreviousFrame->CurrentObject_SoundTrackMontage;    // Sound for playing sound from montage track
    CurrentObject_FreeSoundTrackMontage =false;                                             // True if allow to delete CurrentObject_SoundTrackMontage during destructor
    CurrentObject_PreparedImage         =PreviousFrame->CurrentObject_PreparedImage;        // Current image prepared
    CurrentObject_MusicTrack            =PreviousFrame->CurrentObject_MusicTrack;           // Sound for playing music from music track
    CurrentObject_FreeMusicTrack        =false;                                             // True if allow to delete CurrentObject_MusicTrack during destructor
    CurrentObject_MusicObject           =PreviousFrame->CurrentObject_MusicObject;          // Ref to the current playing music

    // Transitionnal object
    IsTransition                        =PreviousFrame->IsTransition;                       // True if transition in progress
    TransitionPCTDone                   =PreviousFrame->TransitionPCTDone;                  // PCT achevement for transition
    TransitObject_Number                =PreviousFrame->TransitObject_Number;               // Object number
    TransitObject_StartTime             =PreviousFrame->TransitObject_StartTime;            // Position (in msec) of the first frame relative to the diaporama
    TransitObject_InObjectTime          =PreviousFrame->TransitObject_InObjectTime;         // Position (in msec) in the object
    TransitObject                       =PreviousFrame->TransitObject;                      // Link to the current object
    TransitObject_ShotSequenceNumber    =PreviousFrame->TransitObject_ShotSequenceNumber;   // Number of the shot sequence in the current object
    TransitObject_CurrentShot           =PreviousFrame->TransitObject_CurrentShot;          // Link to the current shot in the current object
    TransitObject_CurrentShotType       =PreviousFrame->TransitObject_CurrentShotType;      // Type of the current shot : Static/Mobil/Video
    TransitObject_ShotDuration          =PreviousFrame->TransitObject_ShotDuration;         // Time the static shot end (if TransitObject_CurrentShotType=SHOTTYPE_STATIC)
    TransitObject_PCTDone               =PreviousFrame->TransitObject_PCTDone;
    TransitObject_BackgroundIndex       =PreviousFrame->TransitObject_BackgroundIndex;      // Object number containing current background definition
    TransitObject_BackgroundBrush       =PreviousFrame->TransitObject_BackgroundBrush;      // Current background brush
    TransitObject_FreeBackgroundBrush   =false;                                             // True if allow to delete TransitObject_BackgroundBrush during destructor
    TransitObject_PreparedBackground    =PreviousFrame->TransitObject_PreparedBackground;   // Current image produce for background
    TransitObject_SoundTrackMontage     =PreviousFrame->TransitObject_SoundTrackMontage;    // Sound for playing sound from montage track
    TransitObject_FreeSoundTrackMontage =false;                                             // True if allow to delete TransitObject_SoundTrackMontage during destructor
    TransitObject_PreparedImage         =PreviousFrame->TransitObject_PreparedImage;        // Current image prepared
    TransitObject_MusicTrack            =PreviousFrame->TransitObject_MusicTrack;           // Sound for playing music from music track
    TransitObject_FreeMusicTrack        =false;                                             // True if allow to delete TransitObject_MusicTrack during destructor
    TransitObject_MusicObject           =PreviousFrame->TransitObject_MusicObject;          // Ref to the current playing music
}

bool cDiaporamaObjectInfo::ComputeIsShotStatic(cDiaporamaObject *Object,int ShotNumber) {
    bool IsStatic=true;
    if (ShotNumber==0) {
        for (int i=0;i<Object->List[0]->ShotComposition.List.count();i++)
            if (((Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->MediaObject)&&(Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE))||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BlockAnimType!=0))
                IsStatic=false;
    } else for (int i=0;i<Object->List[ShotNumber]->ShotComposition.List.count();i++) if (Object->List[ShotNumber]->ShotComposition.List[i]->IsVisible) {
        if ((Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->MediaObject)&&(Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->MediaObject->ObjectType==OBJECTTYPE_VIDEOFILE)) IsStatic=false; else {
            if ((Object->List[ShotNumber]->ShotComposition.List[i]->x                                       !=Object->List[ShotNumber-1]->ShotComposition.List[i]->x)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->y                                       !=Object->List[ShotNumber-1]->ShotComposition.List[i]->y)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->w                                       !=Object->List[ShotNumber-1]->ShotComposition.List[i]->w)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->h                                       !=Object->List[ShotNumber-1]->ShotComposition.List[i]->h)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->RotateXAxis                             !=Object->List[ShotNumber-1]->ShotComposition.List[i]->RotateXAxis)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->RotateYAxis                             !=Object->List[ShotNumber-1]->ShotComposition.List[i]->RotateYAxis)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->RotateZAxis                             !=Object->List[ShotNumber-1]->ShotComposition.List[i]->RotateZAxis)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BlockAnimType                           !=0)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->TxtZoomLevel                            !=Object->List[ShotNumber-1]->ShotComposition.List[i]->TxtZoomLevel)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->TxtScrollX                              !=Object->List[ShotNumber-1]->ShotComposition.List[i]->TxtScrollX)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->TxtScrollY                              !=Object->List[ShotNumber-1]->ShotComposition.List[i]->TxtScrollY)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->X                      !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->X)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->Y                      !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->Y)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->ZoomFactor             !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->ZoomFactor)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->AspectRatio            !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->AspectRatio)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->ImageRotation          !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->ImageRotation)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->Blue                   !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->Blue)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->Red                    !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->Red)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->Green                  !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->Green)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->Brightness             !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->Brightness)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->Contrast               !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->Contrast)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->Gamma                  !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->Gamma)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->BlurSharpenRadius      !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->BlurSharpenRadius)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->GaussBlurSharpenSigma  !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->GaussBlurSharpenSigma)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->QuickBlurSharpenSigma  !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->QuickBlurSharpenSigma)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->Desat                  !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->Desat)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->Swirl                  !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->Swirl)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->Implode                !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->Implode)||
                (Object->List[ShotNumber]->ShotComposition.List[i]->BackgroundBrush->OnOffFilter            !=Object->List[ShotNumber-1]->ShotComposition.List[i]->BackgroundBrush->OnOffFilter))
                IsStatic=false;
        }
    }
    return IsStatic;
}

//============================================================================================
// Destructor
//============================================================================================
cDiaporamaObjectInfo::~cDiaporamaObjectInfo() {
    // CurrentObject
    if ((CurrentObject_FreeBackgroundBrush)&&(CurrentObject_BackgroundBrush)) {
        delete CurrentObject_BackgroundBrush;
        CurrentObject_BackgroundBrush=NULL;
    }
    if ((CurrentObject_FreeSoundTrackMontage)&&(CurrentObject_SoundTrackMontage)) {
        delete CurrentObject_SoundTrackMontage;
        CurrentObject_SoundTrackMontage=NULL;
    }
    if ((CurrentObject_FreeMusicTrack)&&(CurrentObject_MusicTrack)) {
        delete CurrentObject_MusicTrack;
        CurrentObject_MusicTrack=NULL;
    }

    // Transition Object
    if ((TransitObject_FreeBackgroundBrush)&&(TransitObject_BackgroundBrush)) {
        delete TransitObject_BackgroundBrush;
        TransitObject_BackgroundBrush=NULL;
    }
    if ((TransitObject_FreeSoundTrackMontage)&&(TransitObject_SoundTrackMontage)) {
        delete TransitObject_SoundTrackMontage;
        TransitObject_SoundTrackMontage=NULL;
    }
    if ((TransitObject_FreeMusicTrack)&&(TransitObject_MusicTrack)) {
        delete TransitObject_MusicTrack;
        TransitObject_MusicTrack=NULL;
    }
}
