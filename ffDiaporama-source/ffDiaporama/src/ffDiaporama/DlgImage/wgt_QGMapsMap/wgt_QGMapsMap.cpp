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

#include "wgt_QGMapsMap.h"
#include "ui_wgt_QGMapsMap.h"
#include "DlgImage/DlgImageCorrection.h"
#include "DlgGMapsLocation/DlgGMapsLocation.h"
#include "DlgGMapsLocation/DlgGMapsGeneration.h"

wgt_QGMapsMap::wgt_QGMapsMap(QWidget *parent):QWidget(parent),ui(new Ui::wgt_QGMapsMap) {
    ui->setupUi(this);
    StopMaj   =false;
    CurrentMap=NULL;
}

//====================================================================================================================

wgt_QGMapsMap::~wgt_QGMapsMap() {
    delete ui;
}

//====================================================================================================================

void wgt_QGMapsMap::DoInitWidget(QCustomDialog *ParentDialog,QPushButton *ExportMapBT,cBrushDefinition *CurrentBrush) {
    this->ParentDialog=ParentDialog;
    this->CurrentBrush=CurrentBrush;
    this->ExportMapBT =ExportMapBT;
    CurrentMap=(cGMapsMap *)CurrentBrush->MediaObject;
    ui->LocationTable->CurrentMap=CurrentMap;
    ui->LocationTable->CurrentBrush=CurrentBrush;
}

//====================================================================================================================

void wgt_QGMapsMap::DoInitDialog() {
    // fill combo box
    ui->MapTypeCB->addItems(CurrentMap->GetMapTypeNames());
    ui->ImageSizeCB->addItems(CurrentMap->GetImageSizeNames());

    // define handler
    connect(ExportMapBT,SIGNAL(pressed()),SLOT(ExportMap()));
    connect(ui->AddGMapsLocationBT,SIGNAL(pressed()),SLOT(AddGMapsLocation()));
    connect(ui->EditLocationBT,SIGNAL(pressed()),SLOT(EditLocation()));
    connect(ui->RemoveLocationBT,SIGNAL(pressed()),SLOT(RemoveLocation()));
    connect(ui->MapTypeCB,SIGNAL(currentIndexChanged(int)),SLOT(MapTypeChanged(int)));
    connect(ui->ImageSizeCB,SIGNAL(currentIndexChanged(int)),SLOT(ImageSizeChanged(int)));
    connect(ui->MapSizeCB,SIGNAL(currentIndexChanged(int)),SLOT(MapSizeChanged(int)));
    connect(ui->LocationTable,SIGNAL(doubleClicked(QModelIndex)),SLOT(DoubleClickedLocation(QModelIndex)));
    connect(ui->LocationTable,SIGNAL(itemSelectionChanged()),SLOT(LocationSelectionChanged()));
    connect(ui->LineColorCB,SIGNAL(currentIndexChanged(int)),this,SLOT(LineColorChanged(int)));
    connect(ui->MarkerColorCB,SIGNAL(currentIndexChanged(int)),this,SLOT(MarkerColorChanged(int)));
    connect(ui->LineColorCB,SIGNAL(PopupClosed(int)),this,SLOT(LineColorChanged(int)));
    connect(ui->MarkerColorCB,SIGNAL(PopupClosed(int)),this,SLOT(MarkerColorChanged(int)));
    connect(ui->TextColorCB,SIGNAL(PopupClosed(int)),this,SLOT(TextColorChanged(int)));
    connect(ui->PointFormCB,SIGNAL(currentIndexChanged(int)),SLOT(PointFormChanged(int)));
    connect(ui->MarkerFormCB,SIGNAL(currentIndexChanged(int)),SLOT(MarkerFormChanged(int)));
    connect(ui->MarkerSizeCB,SIGNAL(currentIndexChanged(int)),SLOT(MarkerSizeChanged(int)));
    connect(ui->MarkerCompoCB,SIGNAL(currentIndexChanged(int)),SLOT(MarkerCompoChanged(int)));
    connect(ui->VisibilityCB,SIGNAL(currentIndexChanged(int)),SLOT(VisibilityChanged(int)));
    connect(ui->DistanceCB,SIGNAL(currentIndexChanged(int)),SLOT(DistanceChanged(int)));

    if ((!CurrentMap->RequestList.isEmpty())||((CurrentMap->List.count()>0)&&(!CurrentMap->IsMapValide))) QTimer::singleShot(LATENCY,this,SLOT(RestartRequest()));
}

//====================================================================================================================

void wgt_QGMapsMap::resizeEvent(QResizeEvent *ev) {
    QWidget::resizeEvent(ev);
    ResetDisplayMap();
}

//====================================================================================================================

void wgt_QGMapsMap::WinFocus() {
    ResetDisplayMap();
}

void wgt_QGMapsMap::LostFocus() {
    emit DoRefreshImageObject();
}

bool wgt_QGMapsMap::DoAccept() {
    return true;
}

//====================================================================================================================

void wgt_QGMapsMap::LocationSelectionChanged() {
    RefreshControls();
}

//====================================================================================================================

void wgt_QGMapsMap::RefreshControls() {
    if (StopMaj) return;
    StopMaj=true;
    ui->MapTypeCB->setCurrentIndex(CurrentMap->MapType);
    ui->ImageSizeCB->setCurrentIndex(CurrentMap->ImageSize);
    ui->LocationTable->setUpdatesEnabled(false);
    ui->LocationTable->setRowCount(CurrentMap->List.count());
    ui->LocationTable->setUpdatesEnabled(true);

    // Fill Map Size CB
    UpdateMapSizes();

    cLocation                   *CurLocation=(cLocation *)(GetCurLocationIndex()!=-1?CurrentMap->List[GetCurLocationIndex()]:NULL);
    cBrushDefinition::sMarker   *CurMarker  =(CurLocation?&CurrentBrush->Markers[GetCurLocationIndex()]:NULL);

    ui->MarkerSizeLabel->setEnabled(CurLocation);     ui->MarkerSizeCB->setEnabled(CurLocation);
    ui->DistanceLabel->setEnabled(CurLocation);       ui->DistanceCB->setEnabled(CurLocation);
    ui->LineColorLabel->setEnabled(CurLocation);      ui->LineColorCB->setEnabled(CurLocation);
    ui->PointFormLabel->setEnabled(CurLocation);      ui->PointFormCB->setEnabled(CurLocation);
    ui->MarkerFormLabel->setEnabled(CurLocation);     ui->MarkerFormCB->setEnabled(CurLocation);
    ui->MarkerColorLabel->setEnabled(CurLocation);    ui->MarkerColorCB->setEnabled(CurLocation);
    ui->TextColorLabel->setEnabled(CurLocation);      ui->TextColorCB->setEnabled(CurLocation);
    ui->VisibilityLabel->setEnabled(CurLocation);     ui->VisibilityCB->setEnabled(CurLocation);
    ui->MarkerCompoLabel->setEnabled(CurLocation);    ui->MarkerCompoCB->setEnabled(CurLocation);

    if (CurLocation) {
        ui->MarkerSizeCB->setCurrentIndex(CurLocation->Size);
        ui->PointFormCB->setCurrentIndex(CurLocation->MarkerPointForm);
        ui->MarkerFormCB->setCurrentIndex(CurLocation->MarkerForm);
        ui->MarkerCompoCB->setCurrentIndex(CurLocation->MarkerCompo);
        ui->LineColorCB->SetCurrentColor(&CurMarker->LineColor);
        ui->TextColorCB->SetCurrentColor(&CurMarker->TextColor);
        ui->MarkerColorCB->SetCurrentColor(&CurMarker->MarkerColor);
        ui->VisibilityCB->setCurrentIndex(CurMarker->Visibility);
        ui->DistanceCB->setCurrentIndex(CurLocation->Distance);
    }

    ui->MapSizeCB->setEnabled(!CurrentMap->List.isEmpty());
    ui->EditLocationBT->setEnabled(CurLocation);
    ui->RemoveLocationBT->setEnabled(CurrentMap->List.count()>0);
    ExportMapBT->setEnabled(CurrentMap->RequestList.isEmpty() && !CurrentMap->List.isEmpty());
    StopMaj=false;
}

//====================================================================================================================

void wgt_QGMapsMap::ResetDisplayMap() {
    // Compute marker size
    for (int i=0;i<CurrentMap->List.count();i++) CurrentBrush->ComputeMarkerSize(CurrentMap->List[i],CurrentMap->GetCurrentImageSize());
    // Setup map
    int H=ui->Map->size().height();
    int W=int(double(16)*(double(H)/double(9)));
    if (W>ui->Map->size().width()) {
        W=ui->Map->size().width();
        H=int(double(9)*(double(W)/double(16)));
    }
    QImage *ImgMap=CurrentBrush->MediaObject->ImageAt(false);
    CurrentBrush->AddMarkerToImage(ImgMap);

    QImage Map=ImgMap->scaledToHeight(H);
    delete ImgMap;
    ui->Map->setPixmap(QPixmap::fromImage(Map));
    RefreshControls();
}

//====================================================================================================================

void wgt_QGMapsMap::UpdateDisplayMap() {
    if (StopMaj) return;
    // Clear previous pending
    if (!CurrentMap->RequestList.isEmpty()) CurrentMap->RequestList.clear();
    RequestGoogle();
}

//====================================================================================================================

void wgt_QGMapsMap::UpdateMapSizes() {
    if (CurrentMap->IsMapValide) {
        ui->MapSizeCB->clear();
        if (CurrentMap->List.count()>0) {
            QStringList AllSize     =CurrentMap->GetMapSizesPerZoomLevel();
            int         MinZoomLevel=-1;
            int         MaxZoomLevel=-1;
            for (int i=0;i<AllSize.count();i++) if (!AllSize[i].isNull()) {
                if (MinZoomLevel==-1) MinZoomLevel=i;
                MaxZoomLevel=i;
                ui->MapSizeCB->addItem(AllSize[i],QVariant(i));
            }
            if (CurrentMap->ZoomLevel>MaxZoomLevel) CurrentMap->ZoomLevel=MaxZoomLevel;
            if (CurrentMap->ZoomLevel<MinZoomLevel) CurrentMap->ZoomLevel=MinZoomLevel;
            for (int i=0;i<ui->MapSizeCB->count();i++) if (CurrentMap->ZoomLevel==ui->MapSizeCB->itemData(i)) ui->MapSizeCB->setCurrentIndex(i);
            ui->MapSizeCB->setEnabled(true);
        }
    }
}

//====================================================================================================================

void wgt_QGMapsMap::RestartRequest() {
    if (CustomMessageBox(this,QMessageBox::Question,APPLICATION_NAME,
                     QApplication::translate("DlgGMapsLocation","The map has not been fully generated.\nDo you want to resume the generation now?"),
                     QMessageBox::Yes|QMessageBox::No,QMessageBox::Yes)==QMessageBox::Yes)
        RequestGoogle(false);
}

void wgt_QGMapsMap::RequestGoogle(bool DuplicateRessource) {
    qlonglong PrevRessourceKey=CurrentMap->RessourceKey;
    DlgGMapsGeneration Dlg(CurrentBrush,CurrentMap,DuplicateRessource,ParentDialog->ApplicationConfig,this);
    Dlg.InitDialog();
    Dlg.exec();
    ParentDialog->ApplicationConfig->ImagesCache.RemoveImageObject(PrevRessourceKey,-1);
    ResetDisplayMap();
    emit DoRefreshImageObject();
}

//====================================================================================================================

void wgt_QGMapsMap::MapTypeChanged(int newtype) {
    if (StopMaj) return;
    ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->MapTypeCB,true,this,true);
    CurrentMap->MapType=(cGMapsMap::GMapsMapType)newtype;
    UpdateDisplayMap();
}

//====================================================================================================================

void wgt_QGMapsMap::ImageSizeChanged(int newsize) {
    if (StopMaj) return;
    ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->ImageSizeCB,true,this,true);
    CurrentMap->ImageSize=(cGMapsMap::GMapsImageSize)newsize;
    UpdateDisplayMap();
}

//====================================================================================================================

void wgt_QGMapsMap::MapSizeChanged(int newsize) {
    if (StopMaj) return;
    ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->MapSizeCB,true,this,true);
    CurrentMap->ZoomLevel=ui->MapSizeCB->itemData(newsize).toInt();
    UpdateDisplayMap();
}

//====================================================================================================================
#define FAVACTIONTYPE_ACTIONTYPE    0xF000
#define FAVACTIONTYPE_ADDFREE       0x1000
#define FAVACTIONTYPE_ADDPROJECT    0x2000
#define FAVACTIONTYPE_ADDCHAPTER    0x4000
#define FAVACTIONTYPE_SELECT        0x8000

void wgt_QGMapsMap::AddGMapsLocation() {
    if (StopMaj) return;

    QMenu       *ContextMenu=new QMenu(this);
    bool        AddSep      =false;
    cLocation   *Location   =NULL;

    ContextMenu->addAction(CreateMenuAction(QIcon(":/img/gmap_add.png"),    QApplication::translate("wgt_QGMapsMap","Add a location"),        FAVACTIONTYPE_ADDFREE,   false,false,this));
    ContextMenu->addAction(CreateMenuAction(QIcon(":/img/ffdiaporama.png"), QApplication::translate("wgt_QGMapsMap","Add project's location"),FAVACTIONTYPE_ADDPROJECT,false,false,this));
    ContextMenu->addAction(CreateMenuAction(QIcon(":/img/Chapter.png"),     QApplication::translate("wgt_QGMapsMap","Add chapter's location"),FAVACTIONTYPE_ADDCHAPTER,false,false,this));

    QSqlQuery   Query(ParentDialog->ApplicationConfig->Database->db);
    QString     QueryString("SELECT Key,Name,FAddress,Thumbnail FROM Location ORDER BY LOWER(Name)");
    Query.prepare(QueryString);
    if (!Query.exec()) DisplayLastSQLError(&Query); else while (Query.next()) {
        bool      Ret;
        qlonglong Key=Query.value(0).toLongLong(&Ret);
        if (Ret) {
            if (!AddSep) {
                ContextMenu->addSeparator();
                AddSep=true;
            }
            QString     Name   =Query.value(1).toString();
            QString     Address=Query.value(2).toString();
            QByteArray  Data   =Query.value(3).toByteArray();
            QImage      Thumb; Thumb.loadFromData(Data);
            ContextMenu->addAction(CreateMenuAction(QIcon(QPixmap().fromImage(Thumb)),QString("%1 (%2)").arg(Name).arg(Address),FAVACTIONTYPE_SELECT+Key,true,false,this));
        }
    }

    QAction *Action=ContextMenu->exec(QCursor::pos());
    if (Action) {
        int ActionType=Action->data().toInt() & FAVACTIONTYPE_ACTIONTYPE;
        if (ActionType==FAVACTIONTYPE_ADDPROJECT) {
            Location=new cLocation(ParentDialog->ApplicationConfig);
            Location->LocationType=cLocation::PROJECT;
        } else if (ActionType==FAVACTIONTYPE_ADDCHAPTER) {
            Location=new cLocation(ParentDialog->ApplicationConfig);
            Location->LocationType=cLocation::CHAPTER;
        } else if (ActionType==FAVACTIONTYPE_ADDFREE) {
            Location=new cLocation(ParentDialog->ApplicationConfig);
            DlgGMapsLocation Dlg(Location,ParentDialog->ApplicationConfig,this);
            Dlg.InitDialog();
            if (Dlg.exec()!=0) {
                delete Location;
                Location=NULL;
            }
        } else if (Action->text()!="") {
            Location=new cLocation(ParentDialog->ApplicationConfig);
            Location->LoadFromFavorite(Action->data().toInt() & ~FAVACTIONTYPE_ACTIONTYPE);
        }
    }
    if (Location) {
        ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->LocationTable,true,this,true);
        ui->LocationTable->setUpdatesEnabled(false);
        CurrentMap->List.append(Location);
        cBrushDefinition::sMarker Marker;
        Marker.MarkerColor="#ffffff";
        Marker.TextColor="#000000";
        Marker.LineColor="#000000";
        Marker.Visibility =cBrushDefinition::sMarker::MARKERSHOW;

        // Append this marker to all shots
        QObject *Object =CurrentBrush->CompositionObject;   // cCompositionObject;
        int     IndexKey=(Object?((cCompositionObject *)Object)->IndexKey:-1);
        bool    Found   =false;
        if (IndexKey!=-1) {
            while ((Object)&&(Object->objectName()!="cDiaporamaObject")) Object=Object->parent();
            cDiaporamaObject *DiaporamaObject=(cDiaporamaObject *)Object;
            if (DiaporamaObject) for (int i=0;i<DiaporamaObject->List.count();i++) for (int j=0;j<DiaporamaObject->List[i]->ShotComposition.List.count();j++) {
                if (DiaporamaObject->List[i]->ShotComposition.List[j]->IndexKey==IndexKey) {
                    Found=true;
                    DiaporamaObject->List[i]->ShotComposition.List[j]->BackgroundBrush->Markers.append(Marker);
                }
            }
        }
        if (!Found) CurrentBrush->Markers.append(Marker);   // if not shots found then add it directly to CurrentBrush

        ui->LocationTable->setRowCount(CurrentMap->List.count());
        ui->LocationTable->setUpdatesEnabled(true);
        UpdateDisplayMap();
    }
    ui->AddGMapsLocationBT->setDown(false);
}

//====================================================================================================================

void wgt_QGMapsMap::RemoveLocation() {
    if (StopMaj) return;
    int CurIndex=GetCurLocationIndex();
    if (CurIndex!=-1) {
        ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->LocationTable,true,this,false);
        ui->LocationTable->setUpdatesEnabled(false);
        ui->LocationTable->setRowCount(CurrentMap->List.count()-1);
        delete (cLocation *)CurrentMap->List.takeAt(CurIndex);

        // Remove this marker from all shots
        QObject *Object =CurrentBrush->CompositionObject;   // cCompositionObject;
        int     IndexKey=(Object?((cCompositionObject *)Object)->IndexKey:-1);
        bool    Found   =false;
        if (IndexKey!=-1) {
            while ((Object)&&(Object->objectName()!="cDiaporamaObject")) Object=Object->parent();
            cDiaporamaObject *DiaporamaObject=(cDiaporamaObject *)Object;
            if (DiaporamaObject) for (int i=0;i<DiaporamaObject->List.count();i++) for (int j=0;j<DiaporamaObject->List[i]->ShotComposition.List.count();j++) {
                if (DiaporamaObject->List[i]->ShotComposition.List[j]->IndexKey==IndexKey) {
                    Found=true;
                    DiaporamaObject->List[i]->ShotComposition.List[j]->BackgroundBrush->Markers.removeAt(CurIndex);
                }
            }
        }
        if (!Found) CurrentBrush->Markers.removeAt(CurIndex);   // if not shots found then remove it directly from CurrentBrush

        ui->LocationTable->setUpdatesEnabled(true);
        if ((CurrentMap->List.count()>0)&&(CurrentMap->IsMapValide)) ResetDisplayMap(); else UpdateDisplayMap();
    }
}

//====================================================================================================================

void wgt_QGMapsMap::EditLocation() {
    DoubleClickedLocation(QModelIndex());
}

//====================================================================================================================

int wgt_QGMapsMap::GetCurLocationIndex() {
    QModelIndexList SelList=ui->LocationTable->selectionModel()->selectedIndexes();
    int             CurIndex=-1;
    if (!SelList.isEmpty()) CurIndex=SelList.at(0).row();
    if ((CurIndex<0)||(CurIndex>=CurrentMap->List.count())) return -1;
    return CurIndex;
}

//====================================================================================================================

void wgt_QGMapsMap::DoubleClickedLocation(QModelIndex) {
    if (StopMaj) return;
    int CurIndex=GetCurLocationIndex();
    if (CurIndex!=-1) {
        cLocation *CurLocation=((cLocation *)CurrentMap->List.at(CurIndex));
        if (CurLocation->LocationType==cLocation::FREE) {
            double GPSxOld=CurLocation->GPS_cx;
            double GPSyOld=CurLocation->GPS_cy;
            ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->LocationTable,true,this,true);
            DlgGMapsLocation Dlg(CurLocation,ParentDialog->ApplicationConfig,this);
            Dlg.InitDialog();
            if (Dlg.exec()==0) {
                ui->LocationTable->setUpdatesEnabled(false);
                ui->LocationTable->setUpdatesEnabled(true);
                if ((GPSxOld!=CurLocation->GPS_cx)||(GPSyOld!=CurLocation->GPS_cy)) UpdateDisplayMap();
                    else ResetDisplayMap(); // if same GPS position, only redraw markers
            } else ParentDialog->RemoveLastPartialUndo();
        }
    }
}

//====================================================================================================================

void wgt_QGMapsMap::LineColorChanged(int) {
    if ((StopMaj)||(ui->LineColorCB->IsPopupOpen)) return;
    int Index=GetCurLocationIndex();
    if ((Index<0)||(Index>=CurrentMap->List.count())) return;
    ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->LineColorCB,false,this,false);
    CurrentBrush->Markers[Index].LineColor=ui->LineColorCB->GetCurrentColor();
    if (!ui->MarkerColorCB->IsPopupOpen) {
        StopMaj=true;
        ui->LineColorCB->SetCurrentColor(&CurrentBrush->Markers[Index].LineColor);
        StopMaj=false;
        ResetDisplayMap();
        ui->LocationTable->setUpdatesEnabled(false);
        ui->LocationTable->setUpdatesEnabled(true);
    }
}

//====================================================================================================================

void wgt_QGMapsMap::MarkerColorChanged(int) {
    if (StopMaj) return;
    int Index=GetCurLocationIndex();
    if ((Index<0)||(Index>=CurrentMap->List.count())) return;
    ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->MarkerColorCB,false,this,false);
    CurrentBrush->Markers[Index].MarkerColor=ui->MarkerColorCB->GetCurrentColor();
    if (!ui->MarkerColorCB->IsPopupOpen) {
        StopMaj=true;
        ui->MarkerColorCB->SetCurrentColor(&CurrentBrush->Markers[Index].MarkerColor);
        StopMaj=false;
        ResetDisplayMap();
        ui->LocationTable->setUpdatesEnabled(false);
        ui->LocationTable->setUpdatesEnabled(true);
    }
}

//====================================================================================================================

void wgt_QGMapsMap::TextColorChanged(int) {
    if (StopMaj) return;
    int Index=GetCurLocationIndex();    if ((Index<0)||(Index>=CurrentMap->List.count())) return;
    ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->TextColorCB,false,this,false);
    CurrentBrush->Markers[Index].TextColor=ui->TextColorCB->GetCurrentColor();
    if (!ui->MarkerColorCB->IsPopupOpen) {
        StopMaj=true;
        ui->TextColorCB->SetCurrentColor(&CurrentBrush->Markers[Index].TextColor);
        StopMaj=false;
        ResetDisplayMap();
        ui->LocationTable->setUpdatesEnabled(false);
        ui->LocationTable->setUpdatesEnabled(true);
    }
}

//====================================================================================================================

void wgt_QGMapsMap::PointFormChanged(int newform) {
    if (StopMaj) return;
    int Index=GetCurLocationIndex();    if ((Index<0)||(Index>=CurrentMap->List.count())) return;
    ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->PointFormCB,true,this,true);
    ((cLocation *)CurrentMap->List[Index])->MarkerPointForm=(cLocation::MARKERPOINT)newform;
    ResetDisplayMap();
}

//====================================================================================================================

void wgt_QGMapsMap::MarkerFormChanged(int newform) {
    if (StopMaj) return;
    int Index=GetCurLocationIndex();    if ((Index<0)||(Index>=CurrentMap->List.count())) return;
    ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->MarkerFormCB,true,this,true);
    ((cLocation *)CurrentMap->List[Index])->MarkerForm=(cLocation::MARKERFORM)newform;
    ResetDisplayMap();
}

//====================================================================================================================

void wgt_QGMapsMap::MarkerSizeChanged(int newsize) {
    if (StopMaj) return;
    int Index=GetCurLocationIndex();    if ((Index<0)||(Index>=CurrentMap->List.count())) return;
    ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->MarkerSizeCB,true,this,true);
    ((cLocation *)CurrentMap->List[Index])->Size=(cBrushDefinition::sMarker::MARKERSIZE)newsize;
    ResetDisplayMap();
}

//====================================================================================================================

void wgt_QGMapsMap::MarkerCompoChanged(int newcompo) {
    if (StopMaj) return;
    int Index=GetCurLocationIndex();    if ((Index<0)||(Index>=CurrentMap->List.count())) return;
    ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->MarkerCompoCB,true,this,true);
    ((cLocation *)CurrentMap->List[Index])->MarkerCompo=(cLocation::MARKERCOMPO)newcompo;
    ResetDisplayMap();
}

//====================================================================================================================

void wgt_QGMapsMap::VisibilityChanged(int newvisibility) {
    if (StopMaj) return;
    int Index=GetCurLocationIndex();    if ((Index<0)||(Index>=CurrentMap->List.count())) return;
    ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->VisibilityCB,true,this,true);
    CurrentBrush->Markers[Index].Visibility=(cBrushDefinition::sMarker::MARKERVISIBILITY)newvisibility;
    ResetDisplayMap();
}

//====================================================================================================================

void wgt_QGMapsMap::DistanceChanged(int newdistance) {
    if (StopMaj) return;
    int Index=GetCurLocationIndex();    if ((Index<0)||(Index>=CurrentMap->List.count())) return;
    ParentDialog->AppendPartialUndo(DlgImageCorrection::UNDOACTION_GMAPSMAPPART,ui->DistanceCB,true,this,true);
    ((cLocation *)CurrentMap->List[Index])->Distance=(cLocation::MARKERDISTANCE)newdistance;
    ResetDisplayMap();
}

//====================================================================================================================

void wgt_QGMapsMap::ExportMap() {
    QString OutputFileName=QDir::toNativeSeparators(ParentDialog->ApplicationConfig->SettingsTable->GetTextValue(QString("%1_path").arg(BrowserTypeDef[BROWSER_TYPE_CAPTUREIMAGE].BROWSERString),DefaultProjectPath));
    QString Filter="PNG (*.png)";
    if (!OutputFileName.endsWith(QDir::separator())) OutputFileName=OutputFileName+QDir::separator();
    OutputFileName=OutputFileName+QApplication::translate("MainWindow","Capture image");
    OutputFileName=QFileDialog::getSaveFileName(this,QApplication::translate("MainWindow","Select destination file"),OutputFileName,"PNG (*.png);;JPG (*.jpg)",&Filter);
    if (OutputFileName!="") {
        if (ParentDialog->ApplicationConfig->RememberLastDirectories) ParentDialog->ApplicationConfig->SettingsTable->SetTextValue(QString("%1_path").arg(BrowserTypeDef[BROWSER_TYPE_CAPTUREIMAGE].BROWSERString),QFileInfo(OutputFileName).absolutePath());     // Keep folder for next use
        if ((Filter.toLower().indexOf("png")!=-1)&&(!OutputFileName.endsWith(".png"))) OutputFileName=OutputFileName+".png";
        if ((Filter.toLower().indexOf("jpg")!=-1)&&(!OutputFileName.endsWith(".jpg"))) OutputFileName=OutputFileName+".jpg";
        QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
        QImage *ImgMap=CurrentBrush->MediaObject->ImageAt(false);
        QApplication::restoreOverrideCursor();
        if (CustomMessageBox(this,QMessageBox::Question,APPLICATION_NAME,
                         QApplication::translate("wgt_QGMapsMap","Do you want include the markers on the map?"),
                         QMessageBox::Yes|QMessageBox::No,QMessageBox::Yes)==QMessageBox::Yes) CurrentBrush->AddMarkerToImage(ImgMap);
        QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));
        ImgMap->save(OutputFileName);
        QApplication::restoreOverrideCursor();
        delete ImgMap;
    }
}
