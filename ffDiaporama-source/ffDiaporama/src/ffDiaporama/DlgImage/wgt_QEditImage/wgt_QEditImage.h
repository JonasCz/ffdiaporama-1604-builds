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

#ifndef WGT_QEDITIMAGE_H
#define WGT_QEDITIMAGE_H

// Basic inclusions (common to all files)
#include "engine/_GlobalDefines.h"
#include "CustomCtrl/_QCustomDialog.h"
#include "engine/_Diaporama.h"

namespace Ui {
    class wgt_QEditImage;
}

class wgt_QEditImage : public QWidget {
Q_OBJECT
public:
    cBrushDefinition        *CurrentBrush;
    QCustomDialog           *ParentDialog;
    bool                    StopMaj;
    QPushButton             *RulersBT;
    int                     CurrentFramingStyle;
    bool                    UndoReloadImage;                // True if image change and undo must reload it
    cCompositionObject      *CompoObject;
    qreal                   ImageGeometry;
    qreal                   ProjectGeometry;
    int                     VideoPosition;
    int                     *BackgroundForm;
    int                     DefaultSpeedWave;

    explicit                wgt_QEditImage(QWidget *parent = 0);
                            ~wgt_QEditImage();

    void                    DoInitWidget(QCustomDialog *ParentDialog,cBrushDefinition *CurrentBrush,QPushButton *RulersBT,cCompositionObject *CompoObject,int *BackgroundForm,int VideoPosition,ffd_GEOMETRY ffDPrjGeometry,int DefaultSpeedWave);
    void                    DoInitDialog(bool AllowChangeFile);
    void                    RefreshControls();
    void                    WinFocus();
    void                    LostFocus();
    bool                    DoAccept() {return true;}                                 // Call when user click on Ok button
    void                    DoRejet() {}

    void                    ReloadFile(QString BrushFileName);
    void                    ResetCachedImage();

private slots:
    void                    s_RulersBT();

    void                    s_RotationEDChanged(double Value);
    void                    s_XValueEDChanged(double Value);
    void                    s_YValueEDChanged(double Value);
    void                    s_WValueEDChanged(double Value);
    void                    s_HValueEDChanged(double Value);
    void                    s_RotateLeft();
    void                    s_RotateRight();
    void                    s_FramingStyleChanged();
    void                    s_BrightnessSliderMoved(int Value);
    void                    s_ContrastSliderMoved(int Value);
    void                    s_GammaSliderMoved(int Value);
    void                    s_GammaValueED(double Value);
    void                    s_RedSliderMoved(int Value);
    void                    s_GreenSliderMoved(int Value);
    void                    s_BlueSliderMoved(int Value);
    void                    s_DesatSliderMoved(int Value);
    void                    s_OnOffFilter_Gray_Changed(int);
    void                    s_OnOffFilter_Equalize_Changed(int);
    void                    s_OnOffFilter_Despeckle_Changed(int);
    void                    s_OnOffFilter_Negative_Changed(int);
    void                    s_OnOffFilter_Emboss_Changed(int);
    void                    s_OnOffFilter_Edge_Changed(int);
    void                    s_OnOffFilter_Antialias_Changed(int);
    void                    s_OnOffFilter_Normalize_Changed(int);
    void                    s_OnOffFilter_Charcoal_Changed(int);
    void                    s_OnOffFilter_Oil_Changed(int);
    void                    s_SwirlSliderMoved(int Value);
    void                    s_ImplodeSliderMoved(int Value);

    void                    s_BrightnessReset()                     { s_BrightnessSliderMoved(0);   }
    void                    s_ContrastReset()                       { s_ContrastSliderMoved(0);     }
    void                    s_GammaReset()                          { s_GammaValueED(1);            }
    void                    s_RedReset()                            { s_RedSliderMoved(0);          }
    void                    s_GreenReset()                          { s_GreenSliderMoved(0);        }
    void                    s_BlueReset()                           { s_BlueSliderMoved(0);         }
    void                    s_DesatReset()                          { s_DesatSliderMoved(0);        }
    void                    s_SwirlReset()                          { s_SwirlSliderMoved(0);        }
    void                    s_ImplodeReset()                        { s_ImplodeSliderMoved(0);      }

    // BlurSharpen
    void                    s_BlurSharpenTypeChanged(int);
    void                    s_BlurSharpenSigmaSliderMoved(int Value);
    void                    s_BlurSharpenSigmaValueED(double Value);
    void                    s_QuickBlurSharpenSigmaSliderMoved(int Value);
    void                    s_BlurSharpenRadiusSliderMoved(int Value);

    void                    s_BlurSharpenSigmaReset()               { s_BlurSharpenSigmaSliderMoved(0);         }
    void                    s_QuickBlurSharpenSigmaReset()          { s_QuickBlurSharpenSigmaSliderMoved(0);    }
    void                    s_BlurSharpenRadiusReset()              { s_BlurSharpenRadiusSliderMoved(5);        }

    void                    s_ChangeFile();

    void                    s_IntZoneTransformBlocks(qreal Move_X,qreal Move_Y,qreal Scale_X,qreal Scale_Y);
    void                    s_DisplayIntZoneTransformBlocks(qreal Move_X,qreal Move_Y,qreal Scale_X,qreal Scale_Y);
    void                    s_ShapeBackgroundForm();

    void                    s_SpeedWaveChanged(int);

private:
    void                    MakeFormIcon(QComboBox *UICB);

    Ui::wgt_QEditImage      *ui;
};

#endif // WGT_QEDITIMAGE_H
