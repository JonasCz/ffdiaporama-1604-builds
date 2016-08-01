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

#ifndef DLGIMAGECOMPOSER_H
#define DLGIMAGECOMPOSER_H

#include "DlgSlide/cShotComposer.h"

namespace Ui {
    class DlgImageComposer;
}

class DlgImageComposer : public cShotComposer {
Q_OBJECT
public:
    cDiaporama          *ffdProject;

    cBrushDefinition    *FramingCB_CurrentBrush;

    // Re-entrence flags
    bool                InRefreshStyleControls;
    bool                StopMajFramingStyle;
    bool                NoPrepUndo;

    explicit DlgImageComposer(cDiaporama *ffdProject,cApplicationConfig *ApplicationConfig,QWidget *parent = 0);
    ~DlgImageComposer();

    // function to be overloaded
    virtual void        DoInitDialog();                             // Initialise dialog
    virtual bool        DoAccept();                                 // Call when user click on Ok button
    virtual void        DoRejet()           {/*Nothing to do*/}     // Call when user click on Cancel button
    virtual void        PrepareGlobalUndo();                        // Initiale Undo
    virtual void        DoGlobalUndo();                             // Apply Undo : call when user click on Cancel button

    virtual void        RefreshStyleControls();
    virtual void        RefreshControls(bool UpdateInteractiveZone=true);

protected:
    virtual void        resizeEvent(QResizeEvent *);
    virtual void        showEvent(QShowEvent *);
    virtual void        keyReleaseEvent(QKeyEvent *event);

private slots:
    void                s_RefreshSceneImage();
    void                s_RulersBt();

    void                s_BlockTable_StartSelectionChange();
    void                s_BlockTable_EndSelectionChange();
    void                s_BlockTable_ItemDoubleClicked(QMouseEvent *);
    void                s_BlockTable_ItemRightClicked(QMouseEvent *);
    void                s_BlockTable_DragDropFiles(QList<QUrl> UrlList);
    void                s_BlockTable_AddNewTextBlock();
    void                s_BlockTable_AddNewSimpleTextBlock();
    void                s_BlockTable_AddNewClipArtTextBlock();
    void                s_BlockTable_AddNewFileBlock();
    void                s_BlockTable_Copy();
    void                s_BlockTable_Cut();
    void                s_BlockTable_Paste();

    // Block settings : Call of other dialog
    void                s_BlockSettings_Arrange();
    void                s_BlockSettings_Edit();
    void                s_BlockSettings_ImageEditCorrect();

    // Block settings : Text
    void                s_BlockSettings_TextZoom(int Value);
    void                s_BlockSettings_TextZoomReset();

private:
    Ui::DlgImageComposer *ui;

    void                MakeFormIcon(QComboBox *UICB);
    void                MakeBorderStyleIcon(QComboBox *UICB);
    void                s_BlockTable_AddFilesBlock(QStringList FileList,int PositionToInsert);
};

#endif // DLGIMAGECOMPOSER_H
