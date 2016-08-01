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

#ifndef DLGIMAGECORRECTION_H
#define DLGIMAGECORRECTION_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"
#include "engine/_Diaporama.h"

#include "DlgImage/wgt_QEditImage/wgt_QEditImage.h"
#include "DlgImage/wgt_QEditVideo/wgt_QEditVideo.h"
#include "DlgImage/wgt_QGMapsMap/wgt_QGMapsMap.h"

namespace Ui {
    class DlgImageCorrection;
}

class DlgImageCorrection : public QCustomDialog {
Q_OBJECT
public:
    enum UNDOACTION_ID {
        UNDOACTION_INTERACTIVEMOVERESIZE,
        UNDOACTION_IMAGEEDITZONE,
        UNDOACTION_VIDEOPART,
        UNDOACTION_GMAPSMAPPART
    };

    cBrushDefinition        *CurrentBrush;
    cCompositionObject      *CompoObject;
    ffd_GEOMETRY            ffDPrjGeometry;                 // Project image geometry define in ffDiaporama project
    int                     VideoPosition;
    QString                 InitialFilteredString;
    int                     *BackgroundForm;
    bool                    StopMaj;
    bool                    IsFirstInitDone;
    int                     DefaultSpeedWave;
    QString                 UndoBrushFileName;
    int                     SavedBackgroundForm;

    explicit DlgImageCorrection(cCompositionObject *TheCurrentTextItem,int *BackgroundForm,cBrushDefinition *CurrentBrush,int TheVideoPosition,ffd_GEOMETRY TheffDPrjGeometry,int DefaultSpeedWave,
                                cApplicationConfig *ApplicationConfig,QWidget *parent=0);
    ~DlgImageCorrection();

    // function to be overloaded
    virtual void            DoInitDialog();                             // Initialise dialog
    virtual bool            DoAccept();                                 // Call when user click on Ok button
    virtual void            DoRejet();                                  // Call when user click on Cancel button
    virtual void            PrepareGlobalUndo();                        // Initiale Undo
    virtual void            DoGlobalUndo();                             // Apply Undo : call when user click on Cancel button

    virtual void            AppendPartialUndo(int ActionType,QWidget *FocusWindow,bool ForceAdd);
    virtual void            PreparePartialUndo(int ActionType,QDomElement root,bool DuplicateRessource);
    virtual void            ApplyPartialUndo(int ActionType,QDomElement root);

    virtual void            RefreshControls();

protected:
    virtual void            resizeEvent(QResizeEvent *);
    virtual void            showEvent(QShowEvent *);

protected slots:
    virtual void            DoPartialUndo();
    void                    s_TabWidgetChanged(int);
    void                    RefreshImageObject();

private:
    void                    CreateImageTag(bool AllowChangeFile);
    void                    CreateVideoTag();
    void                    CreateGMapsTag();

    Ui::DlgImageCorrection  *ui;
    QHBoxLayout             *TabLayout;
    wgt_QEditImage          *ImageWidget;
    wgt_QEditVideo          *VideoWidget;
    wgt_QGMapsMap           *GMapsWidget;
};

#endif // DLGIMAGECORRECTION_H
