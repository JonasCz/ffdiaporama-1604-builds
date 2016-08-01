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

#include "DlgCheckConfig/DlgCheckConfig.h"
#include "DlgManageDevices/DlgManageDevices.h"
#include "engine/_Diaporama.h"
#include "MainWindow/mainwindow.h"

#include "DlgApplicationSettings.h"
#include "ui_DlgApplicationSettings.h"

#define ICON_GEOMETRY_IMAGE                 ":/img/Geometry_ImageLock.png"
#define ICON_FRAMING_FULL                   ":/img/AdjustWH.png"
#define ICON_FRAMING_WIDTH                  ":/img/AdjustW.png"
#define ICON_FRAMING_HEIGHT                 ":/img/AdjustH.png"
#define ICON_GLOBALCONF                     ":/img/db.png"
#define ICON_USERCONF                       ":/img/db_update.png"

DlgApplicationSettings::DlgApplicationSettings(cApplicationConfig *ApplicationConfig,QWidget *parent)
    :QCustomDialog(ApplicationConfig,parent),ui(new Ui::DlgApplicationSettings) {

    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::DlgApplicationSettings");

    this->ApplicationConfig=ApplicationConfig;

    ui->setupUi(this);
    CancelBt=ui->CancelBt;
    OkBt    =ui->OkBt;
    HelpBt  =ui->HelpBt;
    HelpFile="0101";

    IsDeviceChanged     =false;
    CurrentDevice       =-1;
    CurrentDeviceIndex  =-1;
}

//====================================================================================================================
// Initialise dialog

void DlgApplicationSettings::DoInitDialog() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::DoInitDialog");

    ui->HelpTT1->setPixmap(QApplication::style()->standardIcon(QStyle::SP_DialogHelpButton).pixmap(ui->HelpTT1->size()));
    ui->HelpTT2->setPixmap(QApplication::style()->standardIcon(QStyle::SP_DialogHelpButton).pixmap(ui->HelpTT2->size()));
    ui->HelpTT3->setPixmap(QApplication::style()->standardIcon(QStyle::SP_DialogHelpButton).pixmap(ui->HelpTT3->size()));

    //********************************
    // Application TAB
    //********************************

    // Application options
    ui->OpenWEBNewVersionCH->setChecked(ApplicationConfig->OpenWEBNewVersion);
    ui->RememberLastDirectoriesCH->setChecked(ApplicationConfig->RememberLastDirectories);
    ui->RestoreWindowCH->setChecked(ApplicationConfig->RestoreWindow);
    ui->DisableTooltipsCB->setChecked(ApplicationConfig->DisableTooltips);
    #if (defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)) && (QT_VERSION < 0x050000)
        ui->RasterModeCB->setChecked(ApplicationConfig->RasterMode);
    #else
        ui->RasterModeCB->setVisible(false);
    #endif

    #if (!defined(Q_OS_WIN64))&&(defined(Q_OS_WIN32) || defined(Q_OS_LINUX32) || defined(Q_OS_SOLARIS32))
        if      (ApplicationConfig->MemCacheMaxValue<=int64_t(256*1024*1024))     ui->MemCacheProfilCB->setCurrentIndex(0);
        else if (ApplicationConfig->MemCacheMaxValue<=int64_t(512*1024*1024))     ui->MemCacheProfilCB->setCurrentIndex(1);
        else ui->MemCacheProfilCB->setCurrentIndex(2);
        ui->MemCacheProfilCB->removeItem(3);
        ui->MemCacheProfilCB->removeItem(2);
    #else
        if      (ApplicationConfig->MemCacheMaxValue<=int64_t(256*1024*1024))     ui->MemCacheProfilCB->setCurrentIndex(0);
        else if (ApplicationConfig->MemCacheMaxValue<=int64_t(512*1024*1024))     ui->MemCacheProfilCB->setCurrentIndex(1);
        else if (ApplicationConfig->MemCacheMaxValue<=int64_t(1024*1024*1024))    ui->MemCacheProfilCB->setCurrentIndex(2);
        else ui->MemCacheProfilCB->setCurrentIndex(3);
    #endif

    // Preview Options
    QString ASR=(QString("%1").arg(ApplicationConfig->PreviewSamplingRate));
    QString FPS=(QString("%1").arg(ApplicationConfig->PreviewFPS,0,'f')).trimmed();
    while (FPS.endsWith('0')) FPS=FPS.left(FPS.length()-1);
    if (FPS.endsWith('.')) FPS=FPS.left(FPS.length()-1);
    ui->PreviewFrameRateCB->setCurrentIndex(ui->PreviewFrameRateCB->findText(FPS));
    ui->PreviewAudioRateCB->setCurrentIndex(ui->PreviewAudioRateCB->findText(ASR));
    ui->SmoothImageDuringPreviewCB->setChecked(ApplicationConfig->Smoothing);
    ui->MaxVideoPreviewHeightCB->setCurrentIndex(ui->MaxVideoPreviewHeightCB->findText(QString("%1").arg(ApplicationConfig->MaxVideoPreviewHeight)));

    // Editor options
    ui->UnitCB->setCurrentIndex(ApplicationConfig->DisplayUnit);
    ui->AppendObjectCB->setCurrentIndex(ApplicationConfig->AppendObject?1:0);
    ui->AskUserToRemove->setChecked(ApplicationConfig->AskUserToRemove);

    // Network settings
    ui->ProxyCB->setChecked(ApplicationConfig->UseNetworkProxy);
    ui->ProxyAddrED->setText(ApplicationConfig->NetworkProxy);
    ui->ProxyPortED->setText(ApplicationConfig->NetworkProxyPort?QString("%1").arg(ApplicationConfig->NetworkProxyPort):"");
    ui->ProxyLoginED->setText(ApplicationConfig->NetworkProxyUser);
    ui->ProxyPWDED->setText(ApplicationConfig->NetworkProxyPWD);
    s_ProxyChanged();

    // Various options
    ui->ShortDateFmtCB->setCurrentIndex(ui->ShortDateFmtCB->findText(ApplicationConfig->ShortDateFormat));
    ui->DistanceUnitCB->setCurrentIndex(ApplicationConfig->DistanceUnit);

    // Video options
    ui->Crop1088To1080CB->setChecked(ApplicationConfig->Crop1088To1080);
    ui->DeinterlaceCB->setChecked(ApplicationConfig->Deinterlace);

    //********************************
    // Project TAB
    //********************************

    // Project options
    ui->GeometryCombo->setCurrentIndex(ApplicationConfig->ImageGeometry);
    ui->NoShotED->setValue(double(ApplicationConfig->NoShotDuration)/1000);
    ui->StaticShotED->setValue(double(ApplicationConfig->FixedDuration)/1000);
    ui->TransitionSpeedWaveCB->SetCurrentValue(ApplicationConfig->DefaultTransitionSpeedWave);
    ui->BlockSpeedWaveCB->SetCurrentValue(ApplicationConfig->DefaultBlockAnimSpeedWave);
    ui->ImageSpeedWaveCB->SetCurrentValue(ApplicationConfig->DefaultImageAnimSpeedWave);
    ui->RandomTransitionRD->setChecked(ApplicationConfig->RandomTransition);
    ui->NoTransitionRD->setChecked((!ApplicationConfig->RandomTransition)&&(ApplicationConfig->DefaultTransitionFamilly==0)&&(ApplicationConfig->DefaultTransitionSubType==0));
    ui->BasicTransitionB1RD->setChecked((!ApplicationConfig->RandomTransition)&&(ApplicationConfig->DefaultTransitionFamilly==0)&&(ApplicationConfig->DefaultTransitionSubType==1));
    ui->BasicTransitionB2RD->setChecked((!ApplicationConfig->RandomTransition)&&(ApplicationConfig->DefaultTransitionFamilly==0)&&(ApplicationConfig->DefaultTransitionSubType==2));
    QString Duration=QString("%1").arg(double(ApplicationConfig->DefaultTransitionDuration)/double(1000),0,'f');
    while (Duration.endsWith('0')) Duration=Duration.left(Duration.length()-1);
    while (Duration.endsWith('.')) Duration=Duration.left(Duration.length()-1);
    ui->TransitionDurationCB->setCurrentIndex(ui->TransitionDurationCB->findText(Duration));
    ui->DefaultTitleCB->setCurrentIndex(ApplicationConfig->DefaultTitleFilling);
    ui->DefaultAuthorED->setText(ApplicationConfig->DefaultAuthor);
    ui->DefaultAlbumED->setText(ApplicationConfig->DefaultAlbum);
    ui->ID3V2ComptatibilityCB->setChecked(ApplicationConfig->ID3V2Comptatibility);

    ui->DefaultThumbCB->PrepareTable(false,ApplicationConfig->ThumbnailModels);
    ui->DefaultThumbCB->SetCurrentModel(ApplicationConfig->DefaultThumbnailName);

    // New text block options
    ApplicationConfig->StyleTextCollection.             FillCollectionCB(ui->ST_Text_TextCB,        ApplicationConfig->StyleTextCollection.DecodeString(ApplicationConfig->DefaultBlock_Text_TextST));
    ApplicationConfig->StyleTextBackgroundCollection.   FillCollectionCB(ui->ST_Text_BackgroundCB,  ApplicationConfig->StyleTextBackgroundCollection.DecodeString(ApplicationConfig->DefaultBlock_Text_BackGST));
    ApplicationConfig->StyleBlockShapeCollection.       FillCollectionCB(ui->ST_Text_ShapeCB,       ApplicationConfig->StyleBlockShapeCollection.DecodeString(ApplicationConfig->DefaultBlock_Text_ShapeST));

    ui->ST_Text_CoordCB->addItem(QApplication::translate("DlgImageCorrection","Full screen size"),  QVariant(AUTOCOMPOSIZE_FULLSCREEN));
    ui->ST_Text_CoordCB->addItem(QApplication::translate("DlgImageCorrection","TV margins"),        QVariant(AUTOCOMPOSIZE_TVMARGINS));
    ui->ST_Text_CoordCB->addItem(QApplication::translate("DlgImageCorrection","Two thirds screen"), QVariant(AUTOCOMPOSIZE_TWOTHIRDSSCREEN));
    ui->ST_Text_CoordCB->addItem(QApplication::translate("DlgImageCorrection","Half screen"),       QVariant(AUTOCOMPOSIZE_HALFSCREEN));
    ui->ST_Text_CoordCB->addItem(QApplication::translate("DlgImageCorrection","Third screen"),      QVariant(AUTOCOMPOSIZE_THIRDSCREEN));
    ui->ST_Text_CoordCB->addItem(QApplication::translate("DlgImageCorrection","Quarter screen"),    QVariant(AUTOCOMPOSIZE_QUARTERSCREEN));
    SetCBIndex(ui->ST_Text_CoordCB,ApplicationConfig->DefaultBlock_AutoSizePos);
    ui->ST_Text_LockingCB->addItem(QIcon(ICON_GEOMETRY_UNLOCKED),QApplication::translate("DlgImageCorrection","Unlock"),QVariant(AUTOFRAMING_CUSTOMUNLOCK));
    //ui->ST_Text_LockingCB->addItem(QIcon(ICON_GEOMETRY_LOCKED),  QApplication::translate("DlgImageCorrection","Lock to this geometry"),QVariant(AUTOFRAMING_CUSTOMLOCK));
    ui->ST_Text_LockingCB->addItem(QIcon(ICON_GEOMETRY_PROJECT), QApplication::translate("DlgImageCorrection","Lock to project geometry"),QVariant(AUTOFRAMING_CUSTOMPRJLOCK));
    SetCBIndex(ui->ST_Text_LockingCB,ApplicationConfig->DefaultBlock_AutoLocking);

    // New image block options (when slide creation)
    ApplicationConfig->StyleTextCollection.             FillCollectionCB(ui->STBlockSL_IMG_TextCB,  ApplicationConfig->StyleTextCollection.DecodeString(ApplicationConfig->DefaultBlockSL_IMG_TextST));
    ApplicationConfig->StyleBlockShapeCollection.       FillCollectionCB(ui->STBlockSL_IMG_ShapeCB, ApplicationConfig->StyleBlockShapeCollection.DecodeString(ApplicationConfig->DefaultBlockSL_IMG_ShapeST));

    // New image block options (when block add in slide dialog)
    ApplicationConfig->StyleTextCollection.             FillCollectionCB(ui->STBlockBA_IMG_TextCB,  ApplicationConfig->StyleTextCollection.DecodeString(ApplicationConfig->DefaultBlockBA_IMG_TextST));
    ApplicationConfig->StyleBlockShapeCollection.       FillCollectionCB(ui->STBlockBA_IMG_ShapeCB, ApplicationConfig->StyleBlockShapeCollection.DecodeString(ApplicationConfig->DefaultBlockBA_IMG_ShapeST));

    // Get link to combobox
    CB_SL[1][0]=ui->STBlockSL_1_FramingCB;    CB_SL[1][1]=ui->STBlockSL_1_CoordCB;
    CB_SL[2][0]=ui->STBlockSL_2_FramingCB;    CB_SL[2][1]=ui->STBlockSL_2_CoordCB;
    CB_SL[3][0]=ui->STBlockSL_3_FramingCB;    CB_SL[3][1]=ui->STBlockSL_3_CoordCB;
    CB_SL[4][0]=ui->STBlockSL_4_FramingCB;    CB_SL[4][1]=ui->STBlockSL_4_CoordCB;
    CB_SL[5][0]=ui->STBlockSL_5_FramingCB;    CB_SL[5][1]=ui->STBlockSL_5_CoordCB;
    CB_SL[6][0]=ui->STBlockSL_6_FramingCB;    CB_SL[6][1]=ui->STBlockSL_6_CoordCB;

    CB_BA[1][0]=ui->STBlockBA_1_FramingCB;    CB_BA[1][1]=ui->STBlockBA_1_CoordCB;
    CB_BA[2][0]=ui->STBlockBA_2_FramingCB;    CB_BA[2][1]=ui->STBlockBA_2_CoordCB;
    CB_BA[3][0]=ui->STBlockBA_3_FramingCB;    CB_BA[3][1]=ui->STBlockBA_3_CoordCB;
    CB_BA[4][0]=ui->STBlockBA_4_FramingCB;    CB_BA[4][1]=ui->STBlockBA_4_CoordCB;
    CB_BA[5][0]=ui->STBlockBA_5_FramingCB;    CB_BA[5][1]=ui->STBlockBA_5_CoordCB;
    CB_BA[6][0]=ui->STBlockBA_6_FramingCB;    CB_BA[6][1]=ui->STBlockBA_6_CoordCB;

    // New image block options (when slide creation)
    for (int i=1;i<NBR_IMAGETYPE;i++) {
        AddItemToFramingCB(CB_SL[i][0],AUTOFRAMING_FULLMAX);
        AddItemToFramingCB(CB_SL[i][0],AUTOFRAMING_HEIGHTLEFTMAX);
        AddItemToFramingCB(CB_SL[i][0],AUTOFRAMING_HEIGHTMIDLEMAX);
        AddItemToFramingCB(CB_SL[i][0],AUTOFRAMING_HEIGHTRIGHTMAX);
        AddItemToFramingCB(CB_SL[i][0],AUTOFRAMING_WIDTHTOPMAX);
        AddItemToFramingCB(CB_SL[i][0],AUTOFRAMING_WIDTHMIDLEMAX);
        AddItemToFramingCB(CB_SL[i][0],AUTOFRAMING_WIDTHBOTTOMMAX);
        SetCBIndex(CB_SL[i][0],ApplicationConfig->DefaultBlockSL[i].AutoFraming);

        if (i>=3) CB_SL[i][1]->addItem(QApplication::translate("DlgImageCorrection","Real image size"), QVariant(AUTOCOMPOSIZE_REALSIZE));
        CB_SL[i][1]->addItem(QApplication::translate("DlgImageCorrection","Full screen size"),          QVariant(AUTOCOMPOSIZE_FULLSCREEN));
        CB_SL[i][1]->addItem(QApplication::translate("DlgImageCorrection","TV margins"),                QVariant(AUTOCOMPOSIZE_TVMARGINS));
        CB_SL[i][1]->addItem(QApplication::translate("DlgImageCorrection","Two thirds screen"),         QVariant(AUTOCOMPOSIZE_TWOTHIRDSSCREEN));
        CB_SL[i][1]->addItem(QApplication::translate("DlgImageCorrection","Half screen"),               QVariant(AUTOCOMPOSIZE_HALFSCREEN));
        CB_SL[i][1]->addItem(QApplication::translate("DlgImageCorrection","Third screen"),              QVariant(AUTOCOMPOSIZE_THIRDSCREEN));
        CB_SL[i][1]->addItem(QApplication::translate("DlgImageCorrection","Quarter screen"),            QVariant(AUTOCOMPOSIZE_QUARTERSCREEN));
        SetCBIndex(CB_SL[i][1],ApplicationConfig->DefaultBlockSL[i].AutoCompo);

        AddItemToFramingCB(CB_BA[i][0],AUTOFRAMING_FULLMAX);
        AddItemToFramingCB(CB_BA[i][0],AUTOFRAMING_HEIGHTLEFTMAX);
        AddItemToFramingCB(CB_BA[i][0],AUTOFRAMING_HEIGHTMIDLEMAX);
        AddItemToFramingCB(CB_BA[i][0],AUTOFRAMING_HEIGHTRIGHTMAX);
        AddItemToFramingCB(CB_BA[i][0],AUTOFRAMING_WIDTHTOPMAX);
        AddItemToFramingCB(CB_BA[i][0],AUTOFRAMING_WIDTHMIDLEMAX);
        AddItemToFramingCB(CB_BA[i][0],AUTOFRAMING_WIDTHBOTTOMMAX);
        SetCBIndex(CB_BA[i][0],ApplicationConfig->DefaultBlockBA[i].AutoFraming);

        if (i>=3) CB_BA[i][1]->addItem(QApplication::translate("DlgImageCorrection","Real image size"), QVariant(AUTOCOMPOSIZE_REALSIZE));
        CB_BA[i][1]->addItem(QApplication::translate("DlgImageCorrection","Full screen size"),          QVariant(AUTOCOMPOSIZE_FULLSCREEN));
        CB_BA[i][1]->addItem(QApplication::translate("DlgImageCorrection","TV margins"),                QVariant(AUTOCOMPOSIZE_TVMARGINS));
        CB_BA[i][1]->addItem(QApplication::translate("DlgImageCorrection","Two thirds screen"),         QVariant(AUTOCOMPOSIZE_TWOTHIRDSSCREEN));
        CB_BA[i][1]->addItem(QApplication::translate("DlgImageCorrection","Half screen"),               QVariant(AUTOCOMPOSIZE_HALFSCREEN));
        CB_BA[i][1]->addItem(QApplication::translate("DlgImageCorrection","Third screen"),              QVariant(AUTOCOMPOSIZE_THIRDSCREEN));
        CB_BA[i][1]->addItem(QApplication::translate("DlgImageCorrection","Quarter screen"),            QVariant(AUTOCOMPOSIZE_QUARTERSCREEN));
        SetCBIndex(CB_BA[i][1],ApplicationConfig->DefaultBlockBA[i].AutoCompo);
    }

    //********************************
    // RenderDefault part
    //********************************

    // default sound level
    for (int i=15;i<=35;i++) ui->SoundLevelCB->addItem(QString("%1").arg(i));
    ui->SoundLevelCB->setCurrentIndex(ui->SoundLevelCB->findText(QString("%1").arg(ApplicationConfig->DefaultSoundLevel)));

    // Init format container combo
    for (int i=0;i<VFORMAT_NBR;i++) if (FORMATDEF[i].IsFind) {
        ui->FileFormatCB->addItem(FORMATDEF[i].LongName,QVariant(i));
        if (i==ApplicationConfig->DefaultFormat) ui->FileFormatCB->setCurrentIndex(ui->FileFormatCB->count()-1);
    }
    if (ui->FileFormatCB->currentIndex()<0) ui->FileFormatCB->setCurrentIndex(0);

    // Init format container combo for soundtrack export
    for (int i=0;i<NBR_AFORMAT;i++) if (AUDIOFORMATDEF[i].IsFind) {
        ui->SoundtrackFileFormatCB->addItem(AUDIOFORMATDEF[i].LongName,QVariant(i));
        if (i==ApplicationConfig->DefaultSoundtrackFormat) ui->SoundtrackFileFormatCB->setCurrentIndex(ui->SoundtrackFileFormatCB->count()-1);
    }
    if (ui->SoundtrackFileFormatCB->currentIndex()<0) ui->SoundtrackFileFormatCB->setCurrentIndex(0);

    // Image size & standard
    ui->StandardCombo->setCurrentIndex(ApplicationConfig->DefaultStandard);
    InitImageSizeCombo(0);
    ui->SizeCombo->setCurrentIndex(ui->SizeCombo->findText(DefImageFormat[ApplicationConfig->DefaultStandard][ApplicationConfig->ImageGeometry][ApplicationConfig->DefaultImageSize].Name));
    ui->LosslessSizeCombo->setCurrentIndex(ui->LosslessSizeCombo->findText(DefImageFormat[ApplicationConfig->DefaultStandard][ApplicationConfig->ImageGeometry][ApplicationConfig->DefaultLossLess].Name));

    // codec(s) & bitrate(s)
    FileFormatCombo(-1);            // For first initialisation : ChangeIndex=-1
    SoundtrackFileFormatCombo(-1);  // For first initialisation : ChangeIndex=-1

    ui->LanguageED->setText(ApplicationConfig->DefaultLanguage);
    ui->DefaultNameProjectNameCB->setCurrentIndex(ApplicationConfig->DefaultNameProjectName);
    ui->ExportThumbCB->setChecked(ApplicationConfig->DefaultExportThumbnail);
    ui->ExportXBMCNfoCB->setChecked(ApplicationConfig->DefaultExportXBMCNfo);

    connect(ui->StandardCombo,SIGNAL(currentIndexChanged(int)),this,SLOT(InitImageSizeCombo(int)));
    connect(ui->SizeCombo,SIGNAL(currentIndexChanged(int)),this,SLOT(FileFormatCombo(int)));
    connect(ui->FileFormatCB,SIGNAL(currentIndexChanged(int)),this,SLOT(FileFormatCombo(int)));
    connect(ui->VideoFormatCB,SIGNAL(currentIndexChanged(int)),this,SLOT(InitVideoBitRateCB(int)));
    connect(ui->AudioFormatCB,SIGNAL(currentIndexChanged(int)),this,SLOT(InitAudioBitRateCB(int)));
    connect(ui->SoundtrackFileFormatCB,SIGNAL(currentIndexChanged(int)),this,SLOT(SoundtrackFileFormatCombo(int)));

    //***********************************
    // Default Device type for rendering
    //***********************************

    // MODE_SMARTPHONE
    QStringList List;
    for (int i=0;i<ApplicationConfig->DeviceModelList.TranslatedRenderSubtype[MODE_SMARTPHONE].count();i++)
        List.append(ApplicationConfig->DeviceModelList.TranslatedRenderSubtype[MODE_SMARTPHONE][i]+"#"+QString("%1").arg(i));
    List.sort();
    for (int i=0;i<List.count();i++) {
        QString Item=List[i];
        int     ItemData=Item.mid(Item.lastIndexOf("#")+1).toInt();
        Item=Item.left(Item.lastIndexOf("#"));
        ui->SmartphoneTypeCB->addItem(Item,QVariant(ItemData));
        if (ApplicationConfig->DefaultSmartphoneType==ItemData)  ui->SmartphoneTypeCB->setCurrentIndex(i);
    }
    connect(ui->SmartphoneTypeCB,SIGNAL(currentIndexChanged(int)),this,SLOT(ChangeSmartphoneTypeCB(int)));
    ChangeSmartphoneTypeCB(0);


    // MODE_MULTIMEDIASYS
    List.clear();
    for (int i=0;i<ApplicationConfig->DeviceModelList.TranslatedRenderSubtype[MODE_MULTIMEDIASYS].count();i++)
        List.append(ApplicationConfig->DeviceModelList.TranslatedRenderSubtype[MODE_MULTIMEDIASYS][i]+"#"+QString("%1").arg(i));
    List.sort();
    for (int i=0;i<List.count();i++) {
        QString Item=List[i];
        int     ItemData=Item.mid(Item.lastIndexOf("#")+1).toInt();
        Item=Item.left(Item.lastIndexOf("#"));
        ui->MMSystemTypeCB->addItem(Item,QVariant(ItemData));
        if (ApplicationConfig->DefaultMultimediaType==ItemData)  ui->MMSystemTypeCB->setCurrentIndex(i);
    }
    connect(ui->MMSystemTypeCB,SIGNAL(currentIndexChanged(int)),this,SLOT(ChangeMMSystemTypeCB(int)));
    ChangeMMSystemTypeCB(0);

    // MODE_FORTHEWEB
    List.clear();
    for (int i=0;i<ApplicationConfig->DeviceModelList.TranslatedRenderSubtype[MODE_FORTHEWEB].count();i++)
        List.append(ApplicationConfig->DeviceModelList.TranslatedRenderSubtype[MODE_FORTHEWEB][i]+"#"+QString("%1").arg(i));
    List.sort();
    for (int i=0;i<List.count();i++) {
        QString Item=List[i];
        int     ItemData=Item.mid(Item.lastIndexOf("#")+1).toInt();
        Item=Item.left(Item.lastIndexOf("#"));
        ui->ForTheWTypeCB->addItem(Item,QVariant(ItemData));
        if (ApplicationConfig->DefaultForTheWEBType==ItemData)  ui->ForTheWTypeCB->setCurrentIndex(i);
    }
    connect(ui->ForTheWTypeCB,SIGNAL(currentIndexChanged(int)),this,SLOT(ChangeForTheWTypeCB(int)));
    ChangeForTheWTypeCB(0);

    // Define handler
    connect(ui->CheckConfigBT,SIGNAL(clicked()),this,SLOT(s_CheckConfig()));
    connect(ui->DBManageDevicesBT,SIGNAL(clicked()),this,SLOT(s_ManageDevices()));
    connect(ui->tabWidget,SIGNAL(currentChanged(int)),this,SLOT(TabChanged(int)));
    connect(ui->ProxyCB,SIGNAL(clicked()),this,SLOT(s_ProxyChanged()));

    ui->Profile_HQ_CB->setCurrentIndex(ui->Profile_HQ_CB->findText(ApplicationConfig->Profile_HQ));
    ui->Profile_PQ_CB->setCurrentIndex(ui->Profile_PQ_CB->findText(ApplicationConfig->Profile_PQ));
    ui->Preset_HQ_CB->setCurrentIndex(ui->Preset_HQ_CB->findText(ApplicationConfig->Preset_HQ));
    ui->Preset_PQ_CB->setCurrentIndex(ui->Preset_PQ_CB->findText(ApplicationConfig->Preset_PQ));
    ui->Tune_HQ_CB->setCurrentIndex(ui->Tune_HQ_CB->findText(ApplicationConfig->Tune_HQ));
    ui->Tune_PQ_CB->setCurrentIndex(ui->Tune_PQ_CB->findText(ApplicationConfig->Tune_PQ));

    ui->tabWidget->setCurrentIndex(0);
}

//====================================================================================================================

DlgApplicationSettings::~DlgApplicationSettings() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::~DlgApplicationSettings");

    delete ui;
}

//====================================================================================================================

void DlgApplicationSettings::AddItemToFramingCB(QComboBox *CB,int FraminStyle) {
    QIcon IconGeoImage;
    switch (AUTOFRAMINGDEF[FraminStyle].GeometryType) {
        case AUTOFRAMING_GEOMETRY_CUSTOM :  IconGeoImage=FraminStyle==AUTOFRAMING_CUSTOMUNLOCK?QIcon(AUTOFRAMING_ICON_GEOMETRY_UNLOCKED):
                                                                                               QIcon(AUTOFRAMING_ICON_GEOMETRY_LOCKED);       break;
        case AUTOFRAMING_GEOMETRY_PROJECT : IconGeoImage=QIcon(AUTOFRAMING_ICON_GEOMETRY_PROJECT);                                                 break;
        case AUTOFRAMING_GEOMETRY_IMAGE :   IconGeoImage=QIcon(AUTOFRAMING_ICON_GEOMETRY_IMAGE);                                                   break;
    }
    CB->addItem(IconGeoImage,AUTOFRAMINGDEF[FraminStyle].ToolTip,QVariant(FraminStyle));
}

//====================================================================================================================
// Create and sort List

QStringList DlgApplicationSettings::StringToSortedStringList(QString String) {
    QStringList StringList;
    QString     SubString;
    while (String.length()>0) {
        int Index=String.indexOf("#");
        if (Index>0) {
            SubString=String.left(Index);
            String=String.right(String.length()-Index-1);
        } else {
            SubString=String;
            String="";
        }
        StringList.append(SubString);
    }
    for (int i=0;i<StringList.count();i++) for (int j=0;j<StringList.count()-1;j++) {
        QString NameA=StringList[j];      if (NameA.endsWith("k")) NameA=NameA.left(NameA.length()-1);
        double  NumA=NameA.toDouble();
        QString NameB=StringList[j+1];    if (NameB.endsWith("k")) NameB=NameB.left(NameB.length()-1);
        double  NumB=NameB.toDouble();
        if (NumA>NumB) StringList.swap(j,j+1);
    }
    return StringList;
}

//====================================================================================================================
// Call when user click on Ok button

bool DlgApplicationSettings::DoAccept() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::DoAccept");

    // Application options part
    ApplicationConfig->OpenWEBNewVersion        =ui->OpenWEBNewVersionCH->isChecked();
    ApplicationConfig->RememberLastDirectories  =ui->RememberLastDirectoriesCH->isChecked();
    ApplicationConfig->RestoreWindow            =ui->RestoreWindowCH->isChecked();
    #if defined(Q_OS_LINUX) || defined(Q_OS_SOLARIS)
    ApplicationConfig->RasterMode               =ui->RasterModeCB->isChecked();
    #endif

    // Preview Options part
    ApplicationConfig->Smoothing                =ui->SmoothImageDuringPreviewCB->isChecked();
    ApplicationConfig->PreviewFPS               =GetDoubleValue(ui->PreviewFrameRateCB->currentText());
    ApplicationConfig->PreviewSamplingRate      =ui->PreviewAudioRateCB->currentText().toLong();
    ApplicationConfig->MaxVideoPreviewHeight    =ui->MaxVideoPreviewHeightCB->currentText().toInt();
    ApplicationConfig->DisableTooltips          =ui->DisableTooltipsCB->isChecked();

    switch (ui->MemCacheProfilCB->currentIndex()) {
        case 3  : ApplicationConfig->MemCacheMaxValue=int64_t(2048*int64_t(1024*1024));    break;
        case 2  : ApplicationConfig->MemCacheMaxValue=int64_t(1024*int64_t(1024*1024));    break;
        case 1  : ApplicationConfig->MemCacheMaxValue=int64_t(512*int64_t(1024*1024));     break;
        default : ApplicationConfig->MemCacheMaxValue=int64_t(256*int64_t(1024*1024));     break;
    }

    // Network settings
    ApplicationConfig->UseNetworkProxy =ui->ProxyCB->isChecked();
    ApplicationConfig->NetworkProxy    =ui->ProxyAddrED->text();
    ApplicationConfig->NetworkProxyPort=ui->ProxyPortED->text().toInt();
    ApplicationConfig->NetworkProxyUser=ui->ProxyLoginED->text();
    ApplicationConfig->NetworkProxyPWD =ui->ProxyPWDED->text();

    // Editor Options part
    ApplicationConfig->AppendObject                 =ui->AppendObjectCB->currentIndex()==1;
    ApplicationConfig->AskUserToRemove              =ui->AskUserToRemove->isChecked();
    ApplicationConfig->DisplayUnit                  =ui->UnitCB->currentIndex();
    ApplicationConfig->Crop1088To1080               =ui->Crop1088To1080CB->isChecked();
    ApplicationConfig->Deinterlace                  =ui->DeinterlaceCB->isChecked();

    ApplicationConfig->DefaultTransitionDuration    =int(GetDoubleValue(ui->TransitionDurationCB->currentText())*double(1000));
    ApplicationConfig->RandomTransition             =ui->RandomTransitionRD->isChecked();
    ApplicationConfig->DefaultTransitionSubType     =(ui->NoTransitionRD->isChecked()?0:ui->BasicTransitionB1RD->isChecked()?1:2);
    ApplicationConfig->DefaultTransitionFamilly     =TRANSITIONFAMILLY_BASE;

    // ProjectDefault part
    ApplicationConfig->DefaultTransitionSpeedWave   =ui->TransitionSpeedWaveCB->GetCurrentValue();
    ApplicationConfig->DefaultBlockAnimSpeedWave    =ui->BlockSpeedWaveCB->GetCurrentValue();
    ApplicationConfig->DefaultImageAnimSpeedWave    =ui->ImageSpeedWaveCB->GetCurrentValue();

    ApplicationConfig->NoShotDuration               =int(ui->NoShotED->value()*1000);
    ApplicationConfig->FixedDuration                =int(ui->StaticShotED->value()*1000);
    ApplicationConfig->ImageGeometry                =(ffd_GEOMETRY)ui->GeometryCombo->currentIndex();
    ApplicationConfig->DefaultTitleFilling          =ui->DefaultTitleCB->currentIndex();
    ApplicationConfig->DefaultAlbum                 =ui->DefaultAlbumED->text();
    ApplicationConfig->ID3V2Comptatibility          =ui->ID3V2ComptatibilityCB->isChecked();
    ApplicationConfig->ShortDateFormat              =ui->ShortDateFmtCB->itemText(ui->ShortDateFmtCB->currentIndex());
    ApplicationConfig->DistanceUnit                 =(cApplicationConfig::DISTANCEUNIT)ui->DistanceUnitCB->currentIndex();
    ApplicationConfig->DefaultThumbnailName         =ui->DefaultThumbCB->GetCurrentModel();

    ApplicationConfig->DefaultBlock_Text_TextST     =ApplicationConfig->StyleTextCollection.EncodeString(ui->ST_Text_TextCB,GEOMETRY_NONE,-1);
    ApplicationConfig->DefaultBlock_Text_BackGST    =ApplicationConfig->StyleTextBackgroundCollection.EncodeString(ui->ST_Text_BackgroundCB,GEOMETRY_NONE,-1);
    ApplicationConfig->DefaultBlock_AutoSizePos     =ui->ST_Text_CoordCB->itemData(ui->ST_Text_CoordCB->currentIndex()).toInt();
    ApplicationConfig->DefaultBlock_AutoLocking     =ui->ST_Text_LockingCB->itemData(ui->ST_Text_LockingCB->currentIndex()).toInt();

    ApplicationConfig->DefaultBlock_Text_ShapeST    =ApplicationConfig->StyleBlockShapeCollection.EncodeString(ui->ST_Text_ShapeCB,GEOMETRY_NONE,-1);
    ApplicationConfig->DefaultBlockSL_IMG_TextST    =ApplicationConfig->StyleTextCollection.EncodeString(ui->STBlockSL_IMG_TextCB,GEOMETRY_NONE,-1);
    ApplicationConfig->DefaultBlockSL_IMG_ShapeST   =ApplicationConfig->StyleBlockShapeCollection.EncodeString(ui->STBlockSL_IMG_ShapeCB,GEOMETRY_NONE,-1);
    ApplicationConfig->DefaultBlockBA_IMG_TextST    =ApplicationConfig->StyleTextCollection.EncodeString(ui->STBlockBA_IMG_TextCB,GEOMETRY_NONE,-1);
    ApplicationConfig->DefaultBlockBA_IMG_ShapeST   =ApplicationConfig->StyleBlockShapeCollection.EncodeString(ui->STBlockBA_IMG_ShapeCB,GEOMETRY_NONE,-1);

    for (int i=1;i<NBR_IMAGETYPE;i++) for (int j=0;j<1;j++) {
        ApplicationConfig->DefaultBlockSL[i].AutoFraming=CB_SL[i][0]->itemData(CB_SL[i][0]->currentIndex()).toInt();
        ApplicationConfig->DefaultBlockSL[i].AutoCompo  =CB_SL[i][1]->itemData(CB_SL[i][1]->currentIndex()).toInt();
        ApplicationConfig->DefaultBlockBA[i].AutoFraming=CB_BA[i][0]->itemData(CB_BA[i][0]->currentIndex()).toInt();
        ApplicationConfig->DefaultBlockBA[i].AutoCompo  =CB_BA[i][1]->itemData(CB_BA[i][1]->currentIndex()).toInt();
    }

    // RenderDefault part
    ApplicationConfig->DefaultSoundLevel=ui->SoundLevelCB->currentText().toInt();
    ApplicationConfig->DefaultLanguage  =ui->LanguageED->text();
    if (ApplicationConfig->DefaultLanguage=="") ApplicationConfig->DefaultLanguage="und";
    if (ApplicationConfig->DefaultLanguage.length()!=3) {
        CustomMessageBox(this,QMessageBox::Critical,QApplication::translate("DlgApplicationSettings","Language selection"),
            QApplication::translate("DlgApplicationSettings","Language must be empty or an ISO 639 language code (3 characters)\nSee help for more details!"));
        ui->LanguageED->setFocus();
        return false;
    }
    ApplicationConfig->DefaultNameProjectName   =ui->DefaultNameProjectNameCB->currentIndex();
    ApplicationConfig->DefaultExportThumbnail   =ui->ExportThumbCB->isChecked();
    ApplicationConfig->DefaultExportXBMCNfo     =ui->ExportXBMCNfoCB->isChecked();
    ApplicationConfig->DefaultStandard          =ui->StandardCombo->currentIndex();
    ApplicationConfig->DefaultImageSize         =ui->SizeCombo->itemData(ui->SizeCombo->currentIndex()).toInt();
    ApplicationConfig->DefaultFormat            =ui->FileFormatCB->currentIndex();
    if (ApplicationConfig->DefaultFormat>=0) ApplicationConfig->DefaultFormat=ui->FileFormatCB->itemData(ApplicationConfig->DefaultFormat).toInt(); else ApplicationConfig->DefaultFormat=0;
    int Codec=ui->VideoFormatCB->currentIndex();
    if (Codec>=0) ApplicationConfig->DefaultVideoCodec=VIDEOCODECDEF[ui->VideoFormatCB->itemData(Codec).toInt()].FFD_VCODECST; else ApplicationConfig->DefaultVideoCodec="";
    Codec=ui->AudioFormatCB->currentIndex();
    if (Codec>=0) ApplicationConfig->DefaultAudioCodec=AUDIOCODECDEF[ui->AudioFormatCB->itemData(Codec).toInt()].ShortName; else ApplicationConfig->DefaultAudioCodec="";
    QString BitRate=ui->VideoBitRateCB->currentText();  if (BitRate.endsWith("k")) BitRate=BitRate.left(BitRate.length()-1);    ApplicationConfig->DefaultVideoBitRate=BitRate.toInt();
    BitRate        =ui->AudioBitRateCB->currentText();  if (BitRate.endsWith("k")) BitRate=BitRate.left(BitRate.length()-1);    ApplicationConfig->DefaultAudioBitRate=BitRate.toInt();
    QString Freq   =ui->AudioFreqCB->currentText();     ApplicationConfig->DefaultFreq=Freq.toInt();

    ApplicationConfig->DefaultSoundtrackFormat  =ui->SoundtrackFileFormatCB->currentIndex();
    if (ApplicationConfig->DefaultSoundtrackFormat>=0) ApplicationConfig->DefaultSoundtrackFormat=ui->SoundtrackFileFormatCB->itemData(ApplicationConfig->DefaultSoundtrackFormat).toInt(); else ApplicationConfig->DefaultSoundtrackFormat=0;
    Codec=ui->SoundtrackAudioFormatCB->currentIndex();
    if (Codec>=0) ApplicationConfig->DefaultSoundtrackAudioCodec=AUDIOCODECDEF[ui->SoundtrackAudioFormatCB->itemData(Codec).toInt()].ShortName; else ApplicationConfig->DefaultSoundtrackAudioCodec="";
    BitRate=ui->SoundtrackAudioBitRateCB->currentText();  if (BitRate.endsWith("k")) BitRate=BitRate.left(BitRate.length()-1);    ApplicationConfig->DefaultSoundtrackBitRate=BitRate.toInt();
    Freq=ui->SoundtrackAudioFreqCB->currentText(); ApplicationConfig->DefaultSoundtrackFreq=Freq.toInt();

    ApplicationConfig->DefaultSmartphoneType    =ui->SmartphoneTypeCB->itemData(ui->SmartphoneTypeCB->currentIndex()).toInt();
    ApplicationConfig->DefaultMultimediaType    =ui->MMSystemTypeCB->itemData(ui->MMSystemTypeCB->currentIndex()).toInt();
    ApplicationConfig->DefaultForTheWEBType     =ui->ForTheWTypeCB->itemData(ui->ForTheWTypeCB->currentIndex()).toInt();
    ApplicationConfig->DefaultLossLess          =ui->LosslessSizeCombo->itemData(ui->LosslessSizeCombo->currentIndex()).toInt();

    QString Text=ui->SmartphoneModelCB->currentText();
    int i=0;
    while ((i<ApplicationConfig->DeviceModelList.RenderDeviceModel.count())&&(Text!=ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceName)) i++;
    if ((i<ApplicationConfig->DeviceModelList.RenderDeviceModel.count())&&(Text==ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceName)) ApplicationConfig->DefaultSmartphoneModel=ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceIndex;

    Text=ui->MMSystemModelCB->currentText();
    i=0;
    while ((i<ApplicationConfig->DeviceModelList.RenderDeviceModel.count())&&(Text!=ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceName)) i++;
    if ((i<ApplicationConfig->DeviceModelList.RenderDeviceModel.count())&&(Text==ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceName)) ApplicationConfig->DefaultMultimediaModel=ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceIndex;

    Text=ui->ForTheWModelCB->currentText();
    i=0;
    while ((i<ApplicationConfig->DeviceModelList.RenderDeviceModel.count())&&(Text!=ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceName)) i++;
    if ((i<ApplicationConfig->DeviceModelList.RenderDeviceModel.count())&&(Text==ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceName)) ApplicationConfig->DefaultForTheWEBModel=ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceIndex;

    ApplicationConfig->Profile_HQ=ui->Profile_HQ_CB->currentText();
    ApplicationConfig->Profile_PQ=ui->Profile_PQ_CB->currentText();
    ApplicationConfig->Preset_HQ =ui->Preset_HQ_CB->currentText();
    ApplicationConfig->Preset_PQ =ui->Preset_PQ_CB->currentText();
    ApplicationConfig->Tune_HQ   =ui->Tune_HQ_CB->currentText();
    ApplicationConfig->Tune_PQ   =ui->Tune_PQ_CB->currentText();

    return true;
}

//====================================================================================================================
// Call when user click on Cancel button

void DlgApplicationSettings::DoRejet() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::DoRejet");

    // Nothing to do
}

//====================================================================================================================
// Initiale Undo

void DlgApplicationSettings::PrepareGlobalUndo() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::PrepareGlobalUndo");

    // Nothing to do
}

//====================================================================================================================
// Apply Undo : call when user click on Cancel button

void DlgApplicationSettings::DoGlobalUndo() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::DoGlobalUndo");

    // Nothing to do
}

//====================================================================================================================

void DlgApplicationSettings::s_CheckConfig() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::s_CheckConfig");
    DlgCheckConfig Dlg(ApplicationConfig,this);
    Dlg.InitDialog();
    Dlg.exec();
}

//====================================================================================================================

void DlgApplicationSettings::s_ManageDevices() {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::s_ManageDevices");
    DlgManageDevices Dlg(&ApplicationConfig->DeviceModelList,ApplicationConfig,this);
    Dlg.InitDialog();
    Dlg.exec();
}

//====================================================================================================================

void DlgApplicationSettings::s_ProxyChanged() {
    ui->ProxyAddrED->setEnabled(ui->ProxyCB->isChecked());      ui->ProxyAddrLabel->setEnabled(ui->ProxyCB->isChecked());
    ui->ProxyPortED->setEnabled(ui->ProxyCB->isChecked());      ui->ProxyPortLabel->setEnabled(ui->ProxyCB->isChecked());
    ui->ProxyLoginED->setEnabled(ui->ProxyCB->isChecked());     ui->ProxyLoginLabel->setEnabled(ui->ProxyCB->isChecked());
    ui->ProxyPWDED->setEnabled(ui->ProxyCB->isChecked());       ui->ProxyPWDLabel->setEnabled(ui->ProxyCB->isChecked());
}

//====================================================================================================================

void DlgApplicationSettings::TabChanged(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::TabChanged");
    if (ui->tabWidget->currentIndex()==2) {
        ChangeSmartphoneTypeCB(0);
        ChangeMMSystemTypeCB(0);
        ChangeForTheWTypeCB(0);
    }
}

//====================================================================================================================

void DlgApplicationSettings::InitImageSizeCombo(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::InitImageSizeCombo");
    int Geometry =ui->GeometryCombo->currentIndex();
    int Standard =ui->StandardCombo->currentIndex();
    int ImageSize=ui->SizeCombo->currentIndex();
    int Lossless =ui->LosslessSizeCombo->currentIndex();
    ui->SizeCombo->clear();
    ui->LosslessSizeCombo->clear();
    QStringList List;
    for (int i=0;i<NBR_SIZEDEF;i++) if (ORDERIMAGENAME[Standard][i]!=0) List.append(QString("%1:%2#####%3").arg(DefImageFormat[Standard][Geometry][i].Name).arg(ORDERIMAGENAME[Standard][i]).arg(i));
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
        ui->SizeCombo->addItem(Codec,QVariant(Index));
        ui->LosslessSizeCombo->addItem(Codec,QVariant(Index));
    }
    ui->SizeCombo->setCurrentIndex(ImageSize);
    ui->LosslessSizeCombo->setCurrentIndex(Lossless);
}

//====================================================================================================================

void DlgApplicationSettings::FileFormatCombo(int ChangeIndex) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::FileFormatCombo");
    ui->VideoFormatCB->clear();
    ui->AudioFormatCB->clear();
    int CurrentFormat=ui->FileFormatCB->itemData(ui->FileFormatCB->currentIndex()).toInt();

    //********* Video codec part
    QString     AllowedCodec=FORMATDEF[CurrentFormat].PossibleVideoCodec;
    QString     Codec="";
    QString     ToSelect="";
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
        if ((Index<NBR_VIDEOCODECDEF)&&(VIDEOCODECDEF[Index].IsFind)) {
            List.append(QString("%1#####%2").arg(VIDEOCODECDEF[Index].LongName).arg(Index));
            if (Codec==QString(ApplicationConfig->DefaultVideoCodec)) ToSelect=QString(VIDEOCODECDEF[Index].LongName);
        }
    }
    // Sort List
    for (int i=0;i<List.count();i++) for (int j=0;j<List.count()-1;j++) if (List[j]>List[j+1]) List.swap(j,j+1);
    // Fill combo
    for (int i=0;i<List.count();i++) {
        Codec=List[i].left(List[i].indexOf("#####"));
        Index=List[i].mid(List[i].indexOf("#####")+QString("#####").length()).toInt();
        ui->VideoFormatCB->addItem(Codec,QVariant(Index));
    }
    // Set current selection
    if (ui->VideoFormatCB->findText(ToSelect)!=-1) ui->VideoFormatCB->setCurrentIndex(ui->VideoFormatCB->findText(ToSelect));
        else ui->VideoFormatCB->setCurrentIndex(0);
    ui->VideoFormatCB->setEnabled(ui->VideoFormatCB->count()>0);

    //********* Audio codec part
    AllowedCodec=FORMATDEF[CurrentFormat].PossibleAudioCodec;
    Codec="";
    Index=0;
    ToSelect="";
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
        if ((Index<NBR_AUDIOCODECDEF)&&(AUDIOCODECDEF[Index].IsFind)) {
            List.append(QString("%1#####%2").arg(AUDIOCODECDEF[Index].LongName).arg(Index));
            if (Codec==QString(ApplicationConfig->DefaultAudioCodec)) ToSelect=QString(AUDIOCODECDEF[Index].LongName);
        }
    }
    // Sort List
    for (int i=0;i<List.count();i++) for (int j=0;j<List.count()-1;j++) if (List[j]>List[j+1]) List.swap(j,j+1);
    // Fill combo
    for (int i=0;i<List.count();i++) {
        Codec=List[i].left(List[i].indexOf("#####"));
        Index=List[i].mid(List[i].indexOf("#####")+QString("#####").length()).toInt();
        ui->AudioFormatCB->addItem(Codec,QVariant(Index));
    }
    // Set current selection
    if (ui->AudioFormatCB->findText(ToSelect)!=-1) ui->AudioFormatCB->setCurrentIndex(ui->AudioFormatCB->findText(ToSelect));
        else ui->AudioFormatCB->setCurrentIndex(0);
    ui->AudioFormatCB->setEnabled(ui->AudioFormatCB->count()>0);
    InitVideoBitRateCB(ChangeIndex);
    InitAudioBitRateCB(ChangeIndex);
}

//====================================================================================================================

void DlgApplicationSettings::SoundtrackFileFormatCombo(int ChangeIndex) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::SoundtrackFileFormatCombo");
    ui->SoundtrackAudioFormatCB->clear();

    int         CurrentFormat=ui->SoundtrackFileFormatCB->itemData(ui->SoundtrackFileFormatCB->currentIndex()).toInt();
    QString     AllowedCodec=AUDIOFORMATDEF[CurrentFormat].PossibleAudioCodec;
    QString     Codec="";
    int         Index=0;
    QString     ToSelect="";
    QStringList List;

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
        if ((Index<NBR_AUDIOCODECDEF)&&(AUDIOCODECDEF[Index].IsFind)) {
            List.append(QString("%1#####%2").arg(AUDIOCODECDEF[Index].LongName).arg(Index));
            if (Codec==QString(ApplicationConfig->DefaultSoundtrackAudioCodec)) ToSelect=QString(AUDIOCODECDEF[Index].LongName);
        }
    }
    // Sort List
    for (int i=0;i<List.count();i++) for (int j=0;j<List.count()-1;j++) if (List[j]>List[j+1]) List.swap(j,j+1);
    // Fill combo
    for (int i=0;i<List.count();i++) {
        Codec=List[i].left(List[i].indexOf("#####"));
        Index=List[i].mid(List[i].indexOf("#####")+QString("#####").length()).toInt();
        ui->SoundtrackAudioFormatCB->addItem(Codec,QVariant(Index));
    }
    // Set current selection
    if (ui->SoundtrackAudioFormatCB->findText(ToSelect)!=-1) ui->SoundtrackAudioFormatCB->setCurrentIndex(ui->SoundtrackAudioFormatCB->findText(ToSelect));
        else ui->SoundtrackAudioFormatCB->setCurrentIndex(0);
    ui->SoundtrackAudioFormatCB->setEnabled(ui->SoundtrackAudioFormatCB->count()>0);
    InitSoundTrackAudioBitRateCB(ChangeIndex);
}

//====================================================================================================================

void DlgApplicationSettings::ChangeSmartphoneTypeCB(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::ChangeSmartphoneTypeCB");
    int         ExportMode=MODE_SMARTPHONE;
    ui->SmartphoneModelCB->clear();
    int ItemData=ui->SmartphoneTypeCB->currentIndex();
    if (ItemData>=0) ItemData=ui->SmartphoneTypeCB->itemData(ItemData).toInt();
    QStringList List;
    for (int i=0;i<ApplicationConfig->DeviceModelList.RenderDeviceModel.count();i++)
        if ((ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceType==ExportMode)&&(ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceSubtype==ItemData))
            List.append(ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceName);
    List.sort();
    ui->SmartphoneModelCB->addItems(List);
    int i=0;
    while ((i<ApplicationConfig->DeviceModelList.RenderDeviceModel.count())&&(ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceIndex!=ApplicationConfig->DefaultSmartphoneModel)) i++;
    if (ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceIndex==ApplicationConfig->DefaultSmartphoneModel)
        ui->SmartphoneModelCB->setCurrentIndex(ui->SmartphoneModelCB->findText(ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceName));
}

//====================================================================================================================

void DlgApplicationSettings::ChangeMMSystemTypeCB(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::ChangeMMSystemTypeCB");
    int         ExportMode=MODE_MULTIMEDIASYS;
    ui->MMSystemModelCB->clear();
    int ItemData=ui->MMSystemTypeCB->currentIndex();
    if (ItemData>=0) ItemData=ui->MMSystemTypeCB->itemData(ItemData).toInt();
    QStringList List;
    for (int i=0;i<ApplicationConfig->DeviceModelList.RenderDeviceModel.count();i++)
        if ((ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceType==ExportMode)&&(ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceSubtype==ItemData))
            List.append(ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceName);
    List.sort();
    ui->MMSystemModelCB->addItems(List);
    int i=0;
    while ((i<ApplicationConfig->DeviceModelList.RenderDeviceModel.count())&&(ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceIndex!=ApplicationConfig->DefaultMultimediaModel)) i++;
    if (ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceIndex==ApplicationConfig->DefaultMultimediaModel)
        ui->MMSystemModelCB->setCurrentIndex(ui->MMSystemModelCB->findText(ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceName));
}

//====================================================================================================================

void DlgApplicationSettings::ChangeForTheWTypeCB(int) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::ChangeForTheWTypeCB");
    int         ExportMode=MODE_FORTHEWEB;
    ui->ForTheWModelCB->clear();
    int ItemData=ui->ForTheWTypeCB->currentIndex();
    if (ItemData>=0) ItemData=ui->ForTheWTypeCB->itemData(ItemData).toInt();
    QStringList List;
    for (int i=0;i<ApplicationConfig->DeviceModelList.RenderDeviceModel.count();i++)
        if ((ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceType==ExportMode)&&(ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceSubtype==ItemData))
            List.append(ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceName);
    List.sort();
    ui->ForTheWModelCB->addItems(List);
    int i=0;
    while ((i<ApplicationConfig->DeviceModelList.RenderDeviceModel.count())&&(ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceIndex!=ApplicationConfig->DefaultForTheWEBModel)) i++;
    if (ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceIndex==ApplicationConfig->DefaultForTheWEBModel)
        ui->ForTheWModelCB->setCurrentIndex(ui->ForTheWModelCB->findText(ApplicationConfig->DeviceModelList.RenderDeviceModel[i]->DeviceName));
}

//====================================================================================================================

void DlgApplicationSettings::InitVideoBitRateCB(int ChangeIndex) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::InitVideoBitRateCB");
    ui->VideoBitRateCB->clear();
    int Standard    =ui->StandardCombo->currentIndex();
    int CurrentCodec=ui->VideoFormatCB->currentIndex();
    int CurrentSize =ui->SizeCombo->itemData(ui->SizeCombo->currentIndex()).toInt();
    if (CurrentCodec>=0) {
        CurrentCodec=ui->VideoFormatCB->itemData(CurrentCodec).toInt();

        QStringList List=StringToSortedStringList(VIDEOCODECDEF[CurrentCodec].PossibleBitrate);
        bool        IsFindBitRate=false;

        for (int i=0;i<List.count();i++) {
            ui->VideoBitRateCB->addItem(List[i]);
            if ((ChangeIndex==-1)&&(List[i]==QString("%1k").arg(ApplicationConfig->DefaultVideoBitRate))) {
                ui->VideoBitRateCB->setCurrentIndex(ui->VideoBitRateCB->count()-1);
                IsFindBitRate=true;
            }
        }
        if (!IsFindBitRate) ui->VideoBitRateCB->setCurrentIndex(ui->VideoBitRateCB->findText(VIDEOCODECDEF[CurrentCodec].DefaultBitrate[Standard][CurrentSize]));
        ui->VideoBitRateCB->setEnabled(ui->VideoBitRateCB->count()>1);
    } else ui->VideoBitRateCB->setEnabled(false);
}

//====================================================================================================================

void DlgApplicationSettings::InitAudioBitRateCB(int ChangeIndex) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::InitAudioBitRateCB");

    ui->AudioBitRateCB->clear();
    ui->AudioFreqCB->clear();

    int CurrentCodec=ui->AudioFormatCB->currentIndex();
    if (CurrentCodec>=0) {
        CurrentCodec=ui->AudioFormatCB->itemData(CurrentCodec).toInt();

        int         CurrentFormat   =ui->FileFormatCB->itemData(ui->FileFormatCB->currentIndex()).toInt();
        bool        IsFindBitRate   =false;
        bool        IsFindFreq      =false;
        QStringList ListBitRate     =StringToSortedStringList(AUDIOCODECDEF[CurrentCodec].PossibleBitrate2CH);
        QStringList ListFreq        =StringToSortedStringList(AUDIOCODECDEF[CurrentCodec].PossibleFrequency);
        QStringList ListAllowedFreq =StringToSortedStringList(AUDIOFORMATDEF[CurrentFormat].PossibleFrequency);

        // Fill AudioBitRateCB
        for (int i=0;i<ListBitRate.count();i++) {
            ui->AudioBitRateCB->addItem(ListBitRate[i]);
            if ((ChangeIndex==-1)&&(ListBitRate[i]==QString("%1k").arg(ApplicationConfig->DefaultAudioBitRate))) {
                ui->AudioBitRateCB->setCurrentIndex(ui->AudioBitRateCB->count()-1);
                IsFindBitRate=true;
            }
        }
        if (!IsFindBitRate) ui->AudioBitRateCB->setCurrentIndex(ui->AudioBitRateCB->findText(AUDIOCODECDEF[CurrentCodec].Default));
        ui->AudioBitRateCB->setEnabled(ui->AudioBitRateCB->count()>1);

        // Fill AudioFreqCB (only if freq in ListFreq and in ListFreqAllowed)
        for (int i=0;i<ListFreq.count();i++) if (ListAllowedFreq.indexOf(ListFreq[i])!=-1) {
            ui->AudioFreqCB->addItem(ListFreq[i]);
            if ((ChangeIndex==-1)&&(ListFreq[i]==QString("%1").arg(ApplicationConfig->DefaultFreq))) {
                ui->AudioFreqCB->setCurrentIndex(ui->AudioFreqCB->count()-1);
                IsFindFreq=true;
            }
        }
        if (!IsFindFreq) ui->AudioFreqCB->setCurrentIndex(ui->AudioFreqCB->findText(AUDIOFORMATDEF[CurrentFormat].DefaultAudioFreq));
        if ((ui->AudioFreqCB->currentIndex()==-1)&&(ui->AudioFreqCB->count()>0)) ui->AudioFreqCB->setCurrentIndex(0);
        ui->AudioFreqCB->setEnabled(ui->AudioFreqCB->count()>0);

    } else {
        ui->AudioBitRateCB->setEnabled(false);
        ui->AudioFreqCB->setEnabled(false);
    }
}

//====================================================================================================================

void DlgApplicationSettings::InitSoundTrackAudioBitRateCB(int ChangeIndex) {
    ToLog(LOGMSG_DEBUGTRACE,"IN:DlgApplicationSettings::InitSoundTrackAudioBitRateCB");

    ui->SoundtrackAudioBitRateCB->clear();
    ui->SoundtrackAudioFreqCB->clear();
    int CurrentCodec=ui->SoundtrackAudioFormatCB->currentIndex();
    if (CurrentCodec>=0) {
        CurrentCodec=ui->SoundtrackAudioFormatCB->itemData(CurrentCodec).toInt();
        int         CurrentFormat=ui->SoundtrackFileFormatCB->itemData(ui->SoundtrackFileFormatCB->currentIndex()).toInt();
        QStringList ListBitRate     =StringToSortedStringList(AUDIOCODECDEF[CurrentCodec].PossibleBitrate2CH);
        QStringList ListFreq        =StringToSortedStringList(AUDIOCODECDEF[CurrentCodec].PossibleFrequency);
        QStringList ListAllowedFreq =StringToSortedStringList(AUDIOFORMATDEF[CurrentFormat].PossibleFrequency);
        bool        IsFindBitRate   =false;
        bool        IsFindFreq      =false;

        // Fill AudioBitRateCB
        for (int i=0;i<ListBitRate.count();i++) {
            ui->SoundtrackAudioBitRateCB->addItem(ListBitRate[i]);
            if ((ChangeIndex==-1)&&(ListBitRate[i]==QString("%1k").arg(ApplicationConfig->DefaultSoundtrackBitRate))) {
                ui->SoundtrackAudioBitRateCB->setCurrentIndex(ui->SoundtrackAudioBitRateCB->count()-1);
                IsFindBitRate=true;
            }
        }
        if (!IsFindBitRate) ui->SoundtrackAudioBitRateCB->setCurrentIndex(ui->SoundtrackAudioBitRateCB->findText(AUDIOCODECDEF[CurrentCodec].Default));
        ui->SoundtrackAudioBitRateCB->setEnabled(ui->SoundtrackAudioBitRateCB->count()>1);

        // Fill AudioFreqCB (only if freq in ListFreq and in ListFreqAllowed)
        for (int i=0;i<ListFreq.count();i++) if (ListAllowedFreq.indexOf(ListFreq[i])!=-1) {
            ui->SoundtrackAudioFreqCB->addItem(ListFreq[i]);
            if ((ChangeIndex==-1)&&(ListFreq[i]==QString("%1").arg(ApplicationConfig->DefaultSoundtrackFreq))) {
                ui->SoundtrackAudioFreqCB->setCurrentIndex(ui->SoundtrackAudioFreqCB->count()-1);
                IsFindFreq=true;
            }
        }
        if (!IsFindFreq) ui->SoundtrackAudioFreqCB->setCurrentIndex(ui->SoundtrackAudioFreqCB->findText(AUDIOFORMATDEF[CurrentFormat].DefaultAudioFreq));
        if ((ui->SoundtrackAudioFreqCB->currentIndex()==-1)&&(ui->SoundtrackAudioFreqCB->count()>0)) ui->SoundtrackAudioFreqCB->setCurrentIndex(0);
        ui->SoundtrackAudioFreqCB->setEnabled(ui->SoundtrackAudioFreqCB->count()>0);
    } else {
        ui->SoundtrackAudioBitRateCB->setEnabled(false);
        ui->SoundtrackAudioFreqCB->setEnabled(false);
    }
}
