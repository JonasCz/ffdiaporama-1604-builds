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

#ifndef DLGSLIDEPROPERTIES_H
#define DLGSLIDEPROPERTIES_H

#include "DlgSlide/cShotComposer.h"

namespace Ui {
    class DlgSlideProperties;
}

class DlgSlideProperties : public cShotComposer {
Q_OBJECT
public:

    SELECTMODE              ShotSelectMode;             // Current shot selection mode
    cDiaporamaShot          *CurrentShot;               // Current shot (if selection mode = SELECTMODE_ONE)
    QString                 FramingStyleLabelPixmap;

    // Framing CB control
    cBrushDefinition        *FramingCB_CurrentBrush;
    int                     FramingCB_CurrentShot;

    // Re-entrence flags
    bool                    InRefreshStyleControls;
    bool                    StopMajFramingStyle;
    bool                    InDisplayDuration;

    // specific flag for GMapsObject
    bool                    RedoneStyleCoordinate;

    // specific for adding files
    QStringList             FileList;
    int                     PositionToInsert;
    DlgWorkingTask          *DlgWorkingTaskDialog;
    bool                    CancelAction;

    explicit                DlgSlideProperties(cDiaporamaObject *DiaporamaObject,cApplicationConfig *ApplicationConfig,QWidget *parent = 0);
    virtual                 ~DlgSlideProperties();

    // function to be overloaded
    virtual void            DoInitDialog();                             // Initialise dialog
    virtual bool            DoAccept();                                 // Call when user click on Ok button
    virtual void            DoRejet();                                  // Call when user click on Cancel button
    virtual void            PrepareGlobalUndo();                        // Initiale Undo
    virtual void            DoGlobalUndo();                             // Apply Undo : call when user click on Cancel button
    virtual void            SaveAdditionnalWindowState(QDomElement &);
    virtual void            RestoreAdditionnalWindowState(QDomElement);

    virtual void            RefreshStyleControls();
    virtual void            RefreshControls(bool UpdateInteractiveZone=true);

    // Utility functions
    cCompositionObject      *GetSelectedCompositionObject();                // Return selected CompositionObject
    cCompositionObject      *GetSelectedGlobalCompositionObject();          // Return selected CompositionObject in the global composition list

    virtual void            PreparePartialUndo(int ActionType,QDomElement root,bool);
    virtual void            ApplyPartialUndo(int ActionType,QDomElement root);

protected:
    virtual void            resizeEvent(QResizeEvent *);
    virtual void            showEvent(QShowEvent *);
    virtual void            keyReleaseEvent(QKeyEvent *event);

signals:
    void            SetModifyFlag();

private slots:
    void            s_RefreshSceneImage();
    void            s_RulersBt();

    void            OKPrevious();
    void            OKNext();

    // Slide settings
    void            s_SlideSet_SlideNameChange(QString NewText);
    void            s_SlideSet_ChapterInformation();
    void            s_SlideSet_SaveModel();
    void            s_SlideSet_SaveAsProjectTitleModel();
    void            s_SlideSet_SaveAsCptTitleModels();
    void            s_SlideSet_SaveAsCreditTitleModels();

    // Shot table & settings
    void            s_ShotTable_SelectionChanged();             // User select a shot in the ShotTable widget
    void            s_ShotTable_AddShot();
    void            s_ShotTable_RemoveShot();
    void            s_ShotTable_DragMoveItem();
    void            s_ShotTable_MoveLeft();
    void            s_ShotTable_MoveRight();
    void            s_ShotTable_DurationChange(QTime NewValue);
    void            s_ShotTable_RightClickEvent(QMouseEvent *);

    // Block table
    void            s_BlockTable_AddFilesBlock();
    void            s_BlockTable_StartSelectionChange();
    void            s_BlockTable_EndSelectionChange();
    void            s_BlockTable_ItemDoubleClicked(QMouseEvent *);
    void            s_BlockTable_ItemRightClicked(QMouseEvent *);
    void            s_BlockTable_DragDropFiles(QList<QUrl> UrlList);
    void            s_BlockTable_AddNewTextBlock();
    void            s_BlockTable_AddNewSimpleTextBlock();
    void            s_BlockTable_AddNewClipArtTextBlock();
    void            s_BlockTable_AddNewFileBlock();
    void            s_BlockTable_Copy();
    void            s_BlockTable_Cut();
    void            s_BlockTable_Paste();

    // Block settings : Call of other dialog
    void            s_BlockSettings_Arrange();
    void            s_BlockSettings_Edit();
    void            s_BlockSettings_ImageEditCorrect();

    // Block settings : Basic values
    void            s_BlockSettings_ToggleVisibleState();
    void            s_BlockSettings_GetSound();

    // Block settings : Coordinates
    void            s_BlockSettings_ShapeSizePos(int);

    // Block settings : Style
    void            s_BlockSettings_ChangeFramingStyle();
    void            s_BlockSettings_ChangeTextFramingStyle(int Value);

    // Block settings : Text animation
    void            s_BlockSettings_TextAnimZoom(int);
    void            s_BlockSettings_TextAnimScrollX(int);
    void            s_BlockSettings_TextAnimScrollY(int);
    void            s_BlockSettings_TextAnimZoomReset()         { s_BlockSettings_TextAnimZoom(100);    }
    void            s_BlockSettings_TextAnimScrollXReset()      { s_BlockSettings_TextAnimScrollX(0);   }
    void            s_BlockSettings_TextAnimScrollYReset()      { s_BlockSettings_TextAnimScrollY(0);   }

    // Block settings : Speed wave
    void            s_BlockSettings_SpeedWave(int);

    // Block settings : Block animation
    void            s_BlockSettings_BlockAnimType(int);

    // Block settings/Block animation : Multiple turn animation
    void            s_BlockSettings_BlockAnimTurnXValue(int);
    void            s_BlockSettings_BlockAnimTurnYValue(int);
    void            s_BlockSettings_BlockAnimTurnZValue(int);
    void            s_BlockSettings_BlockAnimTurnXReset()       { s_BlockSettings_BlockAnimTurnXValue(0); }
    void            s_BlockSettings_BlockAnimTurnYReset()       { s_BlockSettings_BlockAnimTurnYValue(0); }
    void            s_BlockSettings_BlockAnimTurnZReset()       { s_BlockSettings_BlockAnimTurnZValue(0); }

    // Block settings/Block animation : Dissolve animation
    void            s_BlockSettings_BlockAnimDissolveType(int);

    void            s_BlockTable_AddSpecialBlock();
    void            s_BlockTable_AddGMapsMapBlock();
    void            s_BlockTable_AddImageClipboard();

private:

    void            s_ShotTable_DisplayDuration();

    void            DoAddBlock(cBaseMediaFile *MediaObject,int PositionToInsert);

    Ui::DlgSlideProperties *ui;
};

#endif // DLGSLIDEPROPERTIES_H
