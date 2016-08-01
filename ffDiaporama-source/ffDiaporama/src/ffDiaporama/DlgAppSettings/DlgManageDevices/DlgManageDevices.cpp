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

#include <QMessageBox>

#include "DlgManageDevices.h"
#include "ui_DlgManageDevices.h"

#define ICON_GEOMETRY_IMAGE                 ":/img/Geometry_ImageLock.png"
#define ICON_FRAMING_FULL                   ":/img/AdjustWH.png"
#define ICON_FRAMING_WIDTH                  ":/img/AdjustW.png"
#define ICON_FRAMING_HEIGHT                 ":/img/AdjustH.png"
#define ICON_GLOBALCONF                     ":/img/db.png"
#define ICON_USERCONF                       ":/img/db_update.png"

//====================================================================================================================

DlgManageDevices::DlgManageDevices(cDeviceModelList *DeviceModelList,cApplicationConfig *ApplicationConfig,QWidget *parent)
    :QCustomDialog(ApplicationConfig,parent),ui(new Ui::DlgManageDevices) {

    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DlgManageDevices");

    this->DeviceModelList=DeviceModelList;

    ui->setupUi(this);
    CancelBt=ui->CancelBt;
    OkBt    =ui->OkBt;
    HelpBt  =ui->HelpBt;
    HelpFile="0102";

    IsDeviceChanged     =false;
    CurrentDevice       =-1;
    CurrentDeviceIndex  =-1;
}

//====================================================================================================================
// Initialise dialog

void DlgManageDevices::DoInitDialog() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DoInitDialog");

    // Tab Manage database
    ui->DBDeviceTypeCB->addItem(QIcon(ICON_SMARTPHONE),DeviceModelList->TranslatedRenderType[1]);
    ui->DBDeviceTypeCB->addItem(QIcon(ICON_MULTIMEDIASYS),DeviceModelList->TranslatedRenderType[2]);
    ui->DBDeviceTypeCB->addItem(QIcon(ICON_FORTHEWEB),DeviceModelList->TranslatedRenderType[3]);
    //ui->DBDeviceTypeCB->addItem(QIcon(ICON_LOSSLESS),DeviceModelList->TranslatedRenderType[4]);       // No entry for Lossless mode !
    ui->DBDeviceTypeCB->setCurrentIndex(0);
    for (int i=0;i<VFORMAT_NBR;i++) if (FORMATDEF[i].IsFind) ui->DBFileFormatCB->addItem(FORMATDEF[i].LongName,QVariant(i));
    ui->DBFileFormatCB->setCurrentIndex(-1);
    DBFillTableDevice(0);
    DBImageSizeCombo(0);
    DBSelectionChanged();

    // Define handler
    //connect(ui->GeometryCombo,SIGNAL(currentIndexChanged(int)),this,SLOT(DBImageSizeCombo(int)));

    connect(ui->TableDevice,SIGNAL(itemSelectionChanged()),this,SLOT(DBSelectionChanged()));
    connect(ui->DBDeviceTypeCB,SIGNAL(currentIndexChanged(int)),this,SLOT(DBFillTableDevice(int)));
    connect(ui->DBStandardCB,SIGNAL(currentIndexChanged(int)),this,SLOT(DBImageSizeCombo(int)));
    connect(ui->DBFileFormatCB,SIGNAL(currentIndexChanged(int)),this,SLOT(DBFileFormatCombo(int)));
    connect(ui->DBImageSizeCombo,SIGNAL(currentIndexChanged(int)),this,SLOT(DBChImageSizeCB(int)));
    connect(ui->DBDeviceModelED,SIGNAL(textChanged(QString)),this,SLOT(DBChModel(QString)));
    connect(ui->DBVideoFormatCB,SIGNAL(currentIndexChanged(int)),this,SLOT(DBVideoBitRateCB(int)));
    connect(ui->DBAudioFormatCB,SIGNAL(currentIndexChanged(int)),this,SLOT(DBAudioBitRateCB(int)));
    connect(ui->DBDeviceSubtypeCB,SIGNAL(currentIndexChanged(int)),this,SLOT(DBDeviceSubtypeCB(int)));
    connect(ui->DBVideoBitRateCB,SIGNAL(currentIndexChanged(int)),this,SLOT(DBChVideoBitRateCB(int)));
    connect(ui->DBAudioBitRateCB,SIGNAL(currentIndexChanged(int)),this,SLOT(DBChAudioBitRateCB(int)));
    connect(ui->DBApplyBT,SIGNAL(clicked()),this,SLOT(DBApplyChange()));
    connect(ui->DBAddDevice,SIGNAL(clicked()),this,SLOT(DBAddDevice()));
    connect(ui->DBRemoveBT,SIGNAL(clicked()),this,SLOT(DBRemoveBT()));
    connect(ui->DBResetBT,SIGNAL(clicked()),this,SLOT(DBResetToDefaultBT()));
}

//====================================================================================================================

DlgManageDevices::~DlgManageDevices() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::~DlgManageDevices");

    delete ui;
}

//====================================================================================================================
// Call when user click on Ok button

bool DlgManageDevices::DoAccept() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DoAccept");

    AskApplyDBChange();
    return true;
}

//====================================================================================================================

void DlgManageDevices::AskApplyDBChange() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::AskApplyDBChange");

    if ((IsDeviceChanged)&&(CustomMessageBox(this,QMessageBox::Question,QApplication::translate("DlgManageDevices","Apply modification"),
        QApplication::translate("DlgManageDevices","Do you whant to apply modification for this device?"),
        QMessageBox::Yes | QMessageBox::No, QMessageBox::Yes)==QMessageBox::Yes)) DBApplyChange();
    IsDeviceChanged=false;
}

//====================================================================================================================

void DlgManageDevices::DBFillTableDevice(int ChangeIndex) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBFillTableDevice");

    AskApplyDBChange();
    ui->TableDevice->setUpdatesEnabled(false);
    ui->TableDevice->setSortingEnabled(false);
    while (ui->TableDevice->rowCount()>0) ui->TableDevice->removeRow(0);
    for (int i=0;i<DeviceModelList->RenderDeviceModel.count();i++) if (DeviceModelList->RenderDeviceModel[i]->DeviceType==ChangeIndex+1) {
        int j=ui->TableDevice->rowCount();
        ui->TableDevice->insertRow(j);
        ui->TableDevice->setItem(j,0,new QTableWidgetItem(DeviceModelList->RenderDeviceModel[i]->FromUserConf?QIcon(ICON_USERCONF):QIcon(ICON_GLOBALCONF),
                                                          (DeviceModelList->RenderDeviceModel[i]->DeviceIndex<10?"#0":"#")+QString("%1").arg(DeviceModelList->RenderDeviceModel[i]->DeviceIndex)));
        ui->TableDevice->setItem(j,1,new QTableWidgetItem(DeviceModelList->TranslatedRenderSubtype[DeviceModelList->RenderDeviceModel[i]->DeviceType][DeviceModelList->RenderDeviceModel[i]->DeviceSubtype]));
        ui->TableDevice->setItem(j,2,new QTableWidgetItem(DeviceModelList->RenderDeviceModel[i]->DeviceName));
    }
    ui->TableDevice->resizeColumnToContents(0);
    ui->TableDevice->resizeColumnToContents(1);
    ui->TableDevice->resizeRowsToContents();
    ui->TableDevice->setSortingEnabled(true);
    ui->TableDevice->setUpdatesEnabled(true);

    QStringList List;
    for (int i=0;i<DeviceModelList->TranslatedRenderSubtype[ChangeIndex+1].count();i++)
        List.append(DeviceModelList->TranslatedRenderSubtype[ChangeIndex+1][i]+"#"+QString("%1").arg(i));
    List.sort();
    ui->DBDeviceSubtypeCB->clear();
    for (int i=0;i<List.count();i++) {
        QString Item=List[i];
        int     ItemData=Item.mid(Item.lastIndexOf("#")+1).toInt();
        Item=Item.left(Item.lastIndexOf("#"));
        ui->DBDeviceSubtypeCB->addItem(Item,QVariant(ItemData));
    }
    ui->DBDeviceSubtypeCB->setCurrentIndex(-1);
    ui->DBDeviceModelED->setText("");
    ui->DBStandardCB->setCurrentIndex(-1);
    ui->DBFileFormatCB->setCurrentIndex(-1);
    ui->DBImageSizeCombo->setCurrentIndex(-1);
    ui->DBVideoFormatCB->setCurrentIndex(-1);
    ui->DBAudioFormatCB->setCurrentIndex(-1);
    IsDeviceChanged=false;
    ui->DBApplyBT->setEnabled(IsDeviceChanged);
}

//====================================================================================================================

void DlgManageDevices::DBSelectionChanged() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBSelectionChanged");

    AskApplyDBChange();
    CurrentDevice=ui->TableDevice->currentRow();
    if (CurrentDevice<0) {
        ui->DBRemoveBT->setEnabled(false);
        ui->DBResetBT->setEnabled(false);
        ui->DBDeviceSubtypeCB->setEnabled(false);
        ui->DBDeviceModelED->setEnabled(false);
        ui->DBStandardCB->setEnabled(false);
        ui->DBFileFormatCB->setEnabled(false);
        ui->DBImageSizeCombo->setEnabled(false);
        ui->DBVideoFormatCB->setEnabled(false);
        ui->DBAudioFormatCB->setEnabled(false);
    } else {
        ui->DBDeviceSubtypeCB->setEnabled(true);
        ui->DBDeviceModelED->setEnabled(true);
        ui->DBStandardCB->setEnabled(true);
        ui->DBFileFormatCB->setEnabled(true);
        ui->DBImageSizeCombo->setEnabled(true);
        ui->DBVideoFormatCB->setEnabled(true);
        ui->DBAudioFormatCB->setEnabled(true);
        QString DeviceNumber=ui->TableDevice->item(CurrentDevice,0)->text();
        if (DeviceNumber.startsWith("#")) DeviceNumber=DeviceNumber.mid(1);
        CurrentDeviceIndex=DeviceNumber.toInt();
        CurrentDevice=0; while (DeviceModelList->RenderDeviceModel[CurrentDevice]->DeviceIndex!=CurrentDeviceIndex) CurrentDevice++;
        cDeviceModelDef *Device=DeviceModelList->RenderDeviceModel[CurrentDevice];

        ui->DBRemoveBT->setEnabled(!Device->FromGlobalConf && Device->FromUserConf);
        ui->DBResetBT->setEnabled(Device->FromGlobalConf && Device->FromUserConf);
        ui->DBDeviceSubtypeCB->setCurrentIndex(ui->DBDeviceSubtypeCB->findText(DeviceModelList->TranslatedRenderSubtype[Device->DeviceType][Device->DeviceSubtype]));
        ui->DBDeviceModelED->setText(Device->DeviceName);
        ui->DBStandardCB->setCurrentIndex(Device->Standard);
        ui->DBFileFormatCB->setCurrentIndex(ui->DBFileFormatCB->findText(FORMATDEF[Device->FileFormat].LongName));
        ui->DBImageSizeCombo->setCurrentIndex(ui->DBImageSizeCombo->findText(IMAGEDEFGENNAME[Device->Standard][Device->ImageSize]));
        ui->DBVideoFormatCB->setCurrentIndex(ui->DBVideoFormatCB->findText(VIDEOCODECDEF[Device->VideoCodec].LongName));
        ui->DBAudioFormatCB->setCurrentIndex(ui->DBAudioFormatCB->findText(AUDIOCODECDEF[Device->AudioCodec].LongName));
        QString VideoBitRateStr=QString("%1").arg(Device->VideoBitrate); if (VideoBitRateStr.endsWith("000")) VideoBitRateStr=VideoBitRateStr.left(VideoBitRateStr.length()-3)+"k";
        QString AudioBitRateStr=QString("%1").arg(Device->AudioBitrate);
        if (AudioBitRateStr.endsWith("000")) AudioBitRateStr=AudioBitRateStr.left(AudioBitRateStr.length()-3)+"k";
            else AudioBitRateStr=QString("%1.%2k").arg(Device->AudioBitrate/1000).arg((Device->AudioBitrate%1000)/10);
        ui->DBVideoBitRateCB->setCurrentIndex(ui->DBVideoBitRateCB->findText(VideoBitRateStr));
        ui->DBAudioBitRateCB->setCurrentIndex(ui->DBAudioBitRateCB->findText(AudioBitRateStr));
    }
    IsDeviceChanged=false;
    ui->DBApplyBT->setEnabled(IsDeviceChanged);
}

//====================================================================================================================

void DlgManageDevices::DBImageSizeCombo(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBImageSizeCombo");

    int SaveIndex=ui->DBImageSizeCombo->currentIndex();
    ui->DBImageSizeCombo->clear();
    int Standard=ui->DBStandardCB->currentIndex();
    if (Standard==-1) return;
    QStringList List;
    for (int i=0;i<NBR_SIZEDEF;i++) if (ORDERIMAGENAME[Standard][i]!=0) List.append(QString("%1:%2#####%3").arg(IMAGEDEFGENNAME[Standard][i]).arg(ORDERIMAGENAME[Standard][i]).arg(i));
    // Sort List
    for (int i=0;i<List.count();i++) for (int j=0;j<List.count()-1;j++) {
        QString StrA=List[j].mid(List[j].lastIndexOf(":")+1);       StrA=StrA.left(StrA.indexOf("#"));
        QString StrB=List[j+1].mid(List[j+1].lastIndexOf(":")+1);   StrB=StrB.left(StrB.indexOf("#"));
        if (StrA.toInt()>StrB.toInt()) List.swap(j,j+1);
    }
    // Fill combo
    for (int i=0;i<List.count();i++) {
        QString Codec=List[i].left(List[i].indexOf("#####")); Codec=Codec.left(Codec.lastIndexOf(":"));
        int Index=List[i].mid(List[i].indexOf("#####")+QString("#####").length()).toInt();
        ui->DBImageSizeCombo->addItem(Codec,QVariant(Index));
    }
    ui->DBImageSizeCombo->setCurrentIndex(SaveIndex);
    IsDeviceChanged=true;
    ui->DBApplyBT->setEnabled(IsDeviceChanged);
}

//====================================================================================================================

void DlgManageDevices::DBFileFormatCombo(int /*ChangeIndex*/) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBFileFormatCombo");

    ui->DBVideoFormatCB->clear();
    ui->DBAudioFormatCB->clear();
    int CurrentFormat=ui->DBFileFormatCB->currentIndex();
    if (CurrentFormat==-1) return;
    CurrentFormat=ui->DBFileFormatCB->itemData(CurrentFormat).toInt();

    //********* Video codec part
    QString     AllowedCodec=FORMATDEF[CurrentFormat].PossibleVideoCodec;
    QString     Codec="";
    QStringList List;
    int         Index=0;
    while (AllowedCodec.length()>0) {
        Index=AllowedCodec.indexOf("#");
        if (Index>0) {
            Codec=AllowedCodec.left(Index);
            AllowedCodec=AllowedCodec.right(AllowedCodec.length()-Index-1);
        } else {
            Codec=AllowedCodec;
            AllowedCodec="";
        }
        // Now find index of this codec in the VIDEOCODECDEF
        Index=0;
        while ((Index<NBR_VIDEOCODECDEF)&&(Codec!=QString(VIDEOCODECDEF[Index].FFD_VCODECST))) Index++;
        if ((Index<NBR_VIDEOCODECDEF)&&(VIDEOCODECDEF[Index].IsFind)) List.append(QString("%1#####%2").arg(VIDEOCODECDEF[Index].LongName).arg(Index));
    }
    // Sort List
    for (int i=0;i<List.count();i++) for (int j=0;j<List.count()-1;j++) if (List[j]>List[j+1]) List.swap(j,j+1);
    // Fill combo
    for (int i=0;i<List.count();i++) {
        Codec=List[i].left(List[i].indexOf("#####"));
        Index=List[i].mid(List[i].indexOf("#####")+QString("#####").length()).toInt();
        ui->DBVideoFormatCB->addItem(Codec,QVariant(Index));
    }
    ui->DBVideoFormatCB->setEnabled(ui->DBVideoFormatCB->count()>0);

    //********* Audio codec part
    AllowedCodec=FORMATDEF[CurrentFormat].PossibleAudioCodec;
    Codec="";
    Index=0;
    List.clear();
    while (AllowedCodec.length()>0) {
        Index=AllowedCodec.indexOf("#");
        if (Index>0) {
            Codec=AllowedCodec.left(Index);
            AllowedCodec=AllowedCodec.right(AllowedCodec.length()-Index-1);
        } else {
            Codec=AllowedCodec;
            AllowedCodec="";
        }
        // Now find index of this codec in the AUDIOCODECDEF
        Index=0;
        while ((Index<NBR_AUDIOCODECDEF)&&(Codec!=QString(AUDIOCODECDEF[Index].ShortName))) Index++;
        if ((Index<NBR_AUDIOCODECDEF)&&(AUDIOCODECDEF[Index].IsFind)) List.append(QString("%1#####%2").arg(AUDIOCODECDEF[Index].LongName).arg(Index));
    }
    // Sort List
    for (int i=0;i<List.count();i++) for (int j=0;j<List.count()-1;j++) if (List[j]>List[j+1]) List.swap(j,j+1);
    // Fill combo
    for (int i=0;i<List.count();i++) {
        Codec=List[i].left(List[i].indexOf("#####"));
        Index=List[i].mid(List[i].indexOf("#####")+QString("#####").length()).toInt();
        ui->DBAudioFormatCB->addItem(Codec,QVariant(Index));
    }
    ui->DBAudioFormatCB->setEnabled(ui->DBAudioFormatCB->count()>0);
    IsDeviceChanged=true;
    ui->DBApplyBT->setEnabled(IsDeviceChanged);
}

//====================================================================================================================

void DlgManageDevices::DBChImageSizeCB(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBChImageSizeCB");

    IsDeviceChanged=true;
    ui->DBApplyBT->setEnabled(IsDeviceChanged);
}

//====================================================================================================================

void DlgManageDevices::DBChModel(QString) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBChModel");

    IsDeviceChanged=true;
    ui->DBApplyBT->setEnabled(IsDeviceChanged);
}

//====================================================================================================================

void DlgManageDevices::DBDeviceSubtypeCB(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBDeviceSubtypeCB");

    IsDeviceChanged=true;
    ui->DBApplyBT->setEnabled(IsDeviceChanged);
}

//====================================================================================================================

void DlgManageDevices::DBChVideoBitRateCB(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBChVideoBitRateCB");

    IsDeviceChanged=true;
    ui->DBApplyBT->setEnabled(IsDeviceChanged);
}

//====================================================================================================================

void DlgManageDevices::DBChAudioBitRateCB(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBChAudioBitRateCB");

    IsDeviceChanged=true;
    ui->DBApplyBT->setEnabled(IsDeviceChanged);
}

//====================================================================================================================

void DlgManageDevices::DBVideoBitRateCB(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBVideoBitRateCB");

    ui->DBVideoBitRateCB->clear();
    int CurrentCodec=ui->DBVideoFormatCB->currentIndex();
    if (CurrentCodec>=0) {
        CurrentCodec=ui->DBVideoFormatCB->itemData(CurrentCodec).toInt();

        QString     AllowedBitRate;
        QString     BitRate="";
        QStringList List;
        int         Index=0;
        AllowedBitRate=VIDEOCODECDEF[CurrentCodec].PossibleBitrate;
        BitRate="";
        Index=0;

        // Fill list
        while (AllowedBitRate.length()>0) {
            Index=AllowedBitRate.indexOf("#");
            if (Index>0) {
                BitRate=AllowedBitRate.left(Index);
                AllowedBitRate=AllowedBitRate.right(AllowedBitRate.length()-Index-1);
            } else {
                BitRate=AllowedBitRate;
                AllowedBitRate="";
            }
            List.append(BitRate);
        }
        // Sort list
        for (int i=0;i<List.count();i++) for (int j=0;j<List.count()-1;j++) {
            QString NameA=List[j];      if (NameA.endsWith("k")) NameA=NameA.left(NameA.length()-1);
            int     NumA=NameA.toInt();
            QString NameB=List[j+1];    if (NameB.endsWith("k")) NameB=NameB.left(NameB.length()-1);
            int     NumB=NameB.toInt();
            if (NumA>NumB) List.swap(j,j+1);
        }
        // Fill Combo box
        ui->DBVideoBitRateCB->addItems(List);

        ui->DBVideoBitRateCB->setEnabled(ui->DBVideoBitRateCB->count()>1);
    } else ui->DBVideoBitRateCB->setEnabled(false);
    IsDeviceChanged=true;
    ui->DBApplyBT->setEnabled(IsDeviceChanged);
}

//====================================================================================================================

void DlgManageDevices::DBAudioBitRateCB(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBAudioBitRateCB");

    ui->DBAudioBitRateCB->clear();
    int CurrentCodec=ui->DBAudioFormatCB->currentIndex();
    if (CurrentCodec>=0) {
        CurrentCodec=ui->DBAudioFormatCB->itemData(CurrentCodec).toInt();

        QString     AllowedBitRate;;
        QString     BitRate="";
        QStringList List;
        int         Index=0;
        AllowedBitRate=AUDIOCODECDEF[CurrentCodec].PossibleBitrate2CH;
        BitRate="";
        Index=0;
        // Fill list
        while (AllowedBitRate.length()>0) {
            Index=AllowedBitRate.indexOf("#");
            if (Index>0) {
                BitRate=AllowedBitRate.left(Index);
                AllowedBitRate=AllowedBitRate.right(AllowedBitRate.length()-Index-1);
            } else {
                BitRate=AllowedBitRate;
                AllowedBitRate="";
            }
            List.append(BitRate);
        }

        // Sort list
        for (int i=0;i<List.count();i++) for (int j=0;j<List.count()-1;j++) {
            QString NameA=List[j];      if (NameA.endsWith("k")) NameA=NameA.left(NameA.length()-1);
            int     NumA=NameA.toInt();
            QString NameB=List[j+1];    if (NameB.endsWith("k")) NameB=NameB.left(NameB.length()-1);
            int     NumB=NameB.toInt();
            if (NumA>NumB) List.swap(j,j+1);
        }
        // Fill Combo box
        ui->DBAudioBitRateCB->addItems(List);

        ui->DBAudioBitRateCB->setEnabled(ui->DBAudioBitRateCB->count()>1);
    } else ui->DBAudioBitRateCB->setEnabled(false);
    IsDeviceChanged=true;
    ui->DBApplyBT->setEnabled(IsDeviceChanged);
}

//====================================================================================================================

void DlgManageDevices::DBResetToDefaultBT() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBResetToDefaultBT");

    if (CurrentDevice>=0) {
        cDeviceModelDef *Device=DeviceModelList->RenderDeviceModel[CurrentDevice];
        Device->DeviceName   =Device->BckDeviceName;                                      // long name for the device model
        Device->DeviceType   =Device->BckDeviceType;                                      // device type
        Device->DeviceSubtype=Device->BckDeviceSubtype;                                   // device Subtype
        Device->Standard     =Device->BckStandard;                                        // standard : PAL/NTSC
        Device->FileFormat   =Device->BckFileFormat;                                      // sFormatDef number
        Device->ImageSize    =Device->BckImageSize;                                       // DefImageFormat number
        Device->VideoCodec   =Device->BckVideoCodec;                                      // sVideoCodecDef number
        Device->VideoBitrate =Device->BckVideoBitrate;                                    // Bitrate number in sVideoCodecDef
        Device->AudioCodec   =Device->BckAudioCodec;                                      // sAudioCodecDef number
        Device->AudioBitrate =Device->BckAudioBitrate;                                    // Bitrate number in sAudioCodecDef

        Device->FromUserConf =false;
        IsDeviceChanged      =false;
        ui->DBApplyBT->setEnabled(IsDeviceChanged);
        int SaveCurrentDevice=CurrentDeviceIndex;
        DBFillTableDevice(ui->DBDeviceTypeCB->currentIndex());
        for (int i=0;i<ui->TableDevice->rowCount();i++) {
            QString DeviceNumber=ui->TableDevice->item(i,0)->text();
            if (DeviceNumber.startsWith("#")) DeviceNumber=DeviceNumber.mid(1);
            if (SaveCurrentDevice==DeviceNumber.toInt()) {
                ui->TableDevice->setCurrentCell(i,0);
                break;
            }
        }
    }
    IsDeviceChanged=false;
    ui->DBApplyBT->setEnabled(IsDeviceChanged);
}

void DlgManageDevices::DBApplyChange() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBApplyChange");

    if (CurrentDevice>=0) {
        cDeviceModelDef *Device=DeviceModelList->RenderDeviceModel[CurrentDevice];

        Device->DeviceSubtype=ui->DBDeviceSubtypeCB->itemData(ui->DBDeviceSubtypeCB->currentIndex()).toInt();
        Device->DeviceName   =ui->DBDeviceModelED->text();
        Device->Standard     =ui->DBStandardCB->currentIndex();
        Device->FileFormat   =ui->DBFileFormatCB->itemData(ui->DBFileFormatCB->currentIndex()).toInt();
        Device->ImageSize    =ui->DBImageSizeCombo->itemData(ui->DBImageSizeCombo->currentIndex()).toInt();
        Device->VideoCodec   =ui->DBVideoFormatCB->itemData(ui->DBVideoFormatCB->currentIndex()).toInt();
        Device->AudioCodec   =ui->DBAudioFormatCB->itemData(ui->DBAudioFormatCB->currentIndex()).toInt();

        QString VideoBitRateStr=ui->DBVideoBitRateCB->currentText(); if (VideoBitRateStr.endsWith("k")) VideoBitRateStr=VideoBitRateStr.left(VideoBitRateStr.length()-1)+"000";
        QString AudioBitRateStr=ui->DBAudioBitRateCB->currentText(); if (AudioBitRateStr.endsWith("k")) AudioBitRateStr=AudioBitRateStr.left(AudioBitRateStr.length()-1)+"000";
        Device->VideoBitrate =VideoBitRateStr.toInt();
        Device->AudioBitrate =AudioBitRateStr.toInt();

        Device->FromUserConf =true;
        IsDeviceChanged      =false;
        ui->DBApplyBT->setEnabled(IsDeviceChanged);
        int SaveCurrentDevice=CurrentDeviceIndex;
        DBFillTableDevice(ui->DBDeviceTypeCB->currentIndex());
        for (int i=0;i<ui->TableDevice->rowCount();i++) {
            QString DeviceNumber=ui->TableDevice->item(i,0)->text();
            if (DeviceNumber.startsWith("#")) DeviceNumber=DeviceNumber.mid(1);
            if (SaveCurrentDevice==DeviceNumber.toInt()) {
                ui->TableDevice->setCurrentCell(i,0);
                break;
            }
        }
    }
    IsDeviceChanged=false;
    ui->DBApplyBT->setEnabled(IsDeviceChanged);
}

//====================================================================================================================

void DlgManageDevices::DBAddDevice() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBAddDevice");

    int DeviceIndex=0;
    for (int i=0;i<DeviceModelList->RenderDeviceModel.count();i++) if (DeviceModelList->RenderDeviceModel[i]->DeviceIndex>DeviceIndex) DeviceIndex=DeviceModelList->RenderDeviceModel[i]->DeviceIndex;
    DeviceIndex++;
    int index=DeviceModelList->RenderDeviceModel.count();
    DeviceModelList->RenderDeviceModel.append(new cDeviceModelDef(false,index));
    DeviceModelList->RenderDeviceModel[index]->DeviceIndex  =DeviceIndex;
    DeviceModelList->RenderDeviceModel[index]->DeviceName   =QApplication::translate("DlgManageDevices","<new device>");
    DeviceModelList->RenderDeviceModel[index]->DeviceType   =ui->DBDeviceTypeCB->currentIndex()+1;
    DBFillTableDevice(ui->DBDeviceTypeCB->currentIndex());
    for (int i=0;i<ui->TableDevice->rowCount();i++) {
        QString DeviceNumber=ui->TableDevice->item(i,0)->text();
        if (DeviceNumber.startsWith("#")) DeviceNumber=DeviceNumber.mid(1);
        if (DeviceIndex==DeviceNumber.toInt()) {
            ui->TableDevice->setCurrentCell(i,0);
            break;
        }
    }
}

//====================================================================================================================

void DlgManageDevices::DBRemoveBT() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgManageDevices::DBRemoveBT");

    if ((CurrentDevice<0)||(CurrentDevice>=DeviceModelList->RenderDeviceModel.count())) return;
    if (DeviceModelList->RenderDeviceModel[CurrentDevice]->FromGlobalConf) return;

    int toDelete=CurrentDevice;
    for (int i=0;i<ui->TableDevice->rowCount();i++) {
        QString DeviceNumber=ui->TableDevice->item(i,0)->text();
        if (DeviceNumber.startsWith("#")) DeviceNumber=DeviceNumber.mid(1);
        if (CurrentDeviceIndex==DeviceNumber.toInt()) {
            ui->TableDevice->removeRow(i);
            break;
        }
    }
    DeviceModelList->RenderDeviceModel.removeAt(toDelete);
    DBFillTableDevice(ui->DBDeviceTypeCB->currentIndex());
}
