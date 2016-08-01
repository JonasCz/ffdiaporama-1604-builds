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

#include "cSoundBlockList.h"

//*********************************************************************************************************************************************
// Base object for sound manipulation
//*********************************************************************************************************************************************

cSoundBlockList::cSoundBlockList() {
    CurrentTempSize     =0;                                                                 // Amount of data in the TempData buffer
    CurrentPosition     =-1;
    SoundPacketSize     =MAXSOUNDPACKETSIZE;                                                // Size of a packet (depending on FPS)
    TempData            =(u_int8_t *)av_malloc(SoundPacketSize+8);                           // Buffer for stocking temporary data (when decoding data are less than a packet)
    Channels            =2;                                                                 // Number of channels
    SamplingRate        =48000;                                                             // Sampling rate (frequency)
    SampleBytes         =2;                                                                 // 16 bits : Size of a sample
    dDuration           =double(SoundPacketSize)/double(Channels*SampleBytes*SamplingRate); // Duration of a packet
    NbrPacketForFPS     =1;                                                                 // Number of packet for FPS
    Adjusted            =false;
}

//====================================================================================================================

cSoundBlockList::~cSoundBlockList() {
    ClearList();
    if (TempData) {
        av_free(TempData);
        TempData=NULL;
    }
}

//====================================================================================================================
// Return number of paquet in private list
//====================================================================================================================
int cSoundBlockList::ListCount() {
    return List.count();
}

//====================================================================================================================
// Return duration of actual data
//====================================================================================================================
qint64 cSoundBlockList::GetDuration() {
    qreal NbrPacket=List.count()+qreal(CurrentTempSize)/qreal(SoundPacketSize);
    return NbrPacket*dDuration*1000;
}

//====================================================================================================================
// Prepare and calculate values for a frame rate
//====================================================================================================================
void cSoundBlockList::SetFPS(double TheWantedDuration,int TheChannels,int64_t TheSamplingRate,enum AVSampleFormat TheSampleFormat) {
    // Adjust value for 6 FPS (because rounded value make seek of audio files)
    if ((TheWantedDuration>166)&&(TheWantedDuration<167)) TheWantedDuration=166;

    ClearList();
    SamplingRate   =TheSamplingRate;
    SampleFormat   =TheSampleFormat;
    Channels       =TheChannels;
    WantedDuration =TheWantedDuration;
    NbrPacketForFPS=1;
    dDuration      =double(WantedDuration)/1000;
    SoundPacketSize=int(dDuration*double(SamplingRate))*SampleBytes*Channels;

    while (SoundPacketSize>MAXSOUNDPACKETSIZE) {
        SoundPacketSize =SoundPacketSize/2;
        dDuration       =dDuration/2;
        NbrPacketForFPS*=2;
    }
    if (TempData) {
        av_free(TempData);
        TempData=NULL;
    }
    TempData=(u_int8_t *)av_malloc(SoundPacketSize+8);
}

//====================================================================================================================
// Prepare and calculate values for a frame size
//====================================================================================================================
void cSoundBlockList::SetFrameSize(int FrameSize,int TheChannels,int64_t TheSamplingRate,enum AVSampleFormat TheSampleFormat) {
    ClearList();
    SamplingRate   =TheSamplingRate;
    SampleFormat   =TheSampleFormat;
    SoundPacketSize=FrameSize;
    Channels       =TheChannels;
    NbrPacketForFPS=1;
    dDuration      =double(SoundPacketSize)/(double(SamplingRate)*double(SampleBytes)*double(Channels));
    WantedDuration =dDuration*1000;
    if (TempData) {
        av_free(TempData);
        TempData=NULL;
    }
    TempData=(u_int8_t *)av_malloc(SoundPacketSize+8);
}

//====================================================================================================================
// Clear the list (make av_free of each packet)
//====================================================================================================================
void cSoundBlockList::ClearList() {
    while (List.count()>0) {
        int16_t *Packet=DetachFirstPacket();
        if (Packet) av_free(Packet);
    }
    CurrentTempSize=0;
    CurrentPosition=-1;
    Adjusted       =false;
}

//====================================================================================================================
// Special functions use with cDiaporama::LoadSources
int16_t *cSoundBlockList::GetAt(int index) {
    return List[index];
}

void cSoundBlockList::SetAt(int index,int16_t *Packet) {
    List[index]=Packet;
}

//====================================================================================================================
// Detach the first packet of the list (do not make av_free)
//====================================================================================================================
int16_t *cSoundBlockList::DetachFirstPacket(bool NoLock) {
    if (!NoLock) Mutex.lock();
    int16_t *Ret=NULL;
    if (List.count()>0) {
        Ret=(int16_t *)List.takeFirst();
        ListVolume.removeFirst();
        CurrentPosition+=(double(SoundPacketSize)/(SampleBytes*Channels*SamplingRate))*AV_TIME_BASE;
    }
    if (!NoLock) Mutex.unlock();
    return Ret;
}

//====================================================================================================================
// Synchronize sound to a wanted position
//====================================================================================================================
void cSoundBlockList::AdjustSoundPosition(int64_t WantedPosition) {
    if (Adjusted) return;
    Mutex.lock();
    Adjusted=true;

    if (List.count()==0) {

        for (int i=0;i<NbrPacketForFPS;i++) AppendPacket(WantedPosition,NULL,true);

    } else if (CurrentPosition>WantedPosition) {

        int64_t BlockDuration=(double(SoundPacketSize)/(SampleBytes*Channels*SamplingRate))*AV_TIME_BASE;
        while (CurrentPosition>WantedPosition) {
            CurrentPosition-=BlockDuration;
            PrependPacket(CurrentPosition,NULL,true);
        }

    } else if (CurrentPosition<WantedPosition-50000) {

        while (CurrentPosition<WantedPosition-50000) {
            int16_t *Packet=DetachFirstPacket(true);
            if (Packet) av_free(Packet); else break;
        }

    }
    Mutex.unlock();
}

//====================================================================================================================
// Append a packet to the end of the list
//====================================================================================================================
void cSoundBlockList::AppendPacket(int64_t Position,int16_t *PacketToAdd,bool NoLock) {
    if (!NoLock) Mutex.lock();
    if (CurrentPosition==-1)
        CurrentPosition=Position;
    List.append(PacketToAdd);
    ListVolume.append(false);
    if (!NoLock) Mutex.unlock();
}

//====================================================================================================================
// Append a packet to the begining of the list
//====================================================================================================================
void cSoundBlockList::PrependPacket(int64_t Position,int16_t *PacketToAdd,bool NoLock) {
    if (!NoLock) Mutex.lock();
    if (CurrentPosition==-1) CurrentPosition=Position;
    List.prepend(PacketToAdd);
    ListVolume.prepend(false);
    if (!NoLock) Mutex.unlock();
}

//====================================================================================================================
// Append a packet of null sound to the end of the list
//====================================================================================================================
void cSoundBlockList::AppendNullSoundPacket(int64_t Position,bool NoLock) {
    AppendPacket(Position,NULL,NoLock);
}

//====================================================================================================================
// Append a packet of null sound to the beginning of the list
//====================================================================================================================
void cSoundBlockList::PrependNullSoundPacket(int64_t Position,bool NoLock) {
    PrependPacket(Position,NULL,NoLock);
}

//====================================================================================================================
// Ensure the liste contains enought null packet at start for a pause
//====================================================================================================================
void cSoundBlockList::EnsureEnoughtNullAtStart() {
    int NbrNull=0;
    for (int i=0;i<NbrPacketForFPS;i++) if ((i<List.count())&&(List[i]==NULL)) NbrNull++;
    for (int i=0;i<NbrPacketForFPS-NbrNull;i++) PrependNullSoundPacket(0);
}
//====================================================================================================================
// Ensure the liste contains no null packet at start
//====================================================================================================================
void cSoundBlockList::EnsureNoNullAtStart() {
    while ((List.count()>0)&&(List[0]==NULL)) List.removeFirst();
}

//====================================================================================================================
// Append data to the list creating packet as necessary and filling TempData
//====================================================================================================================
void cSoundBlockList::AppendData(int64_t Position,int16_t *Data,int64_t DataLen) {
    u_int8_t *CurData=(u_int8_t *)Data;
    // Cut data to Packet
    while ((DataLen+CurrentTempSize>=SoundPacketSize)) {
        #if defined(LIBAV) && (LIBAVVERSIONINT<=8)
            u_int8_t *Packet=(u_int8_t *)av_malloc(SoundPacketSize+8);
        #else
            u_int8_t *Packet=NULL;
            int     out_linesize=0;
            av_samples_alloc(&Packet,&out_linesize,Channels,SoundPacketSize+8,SampleFormat,1);
        #endif
        if (Packet) {
            if (CurrentTempSize>0) {                                // Use previously data store in TempData
                int DataToUse=SoundPacketSize-CurrentTempSize;
                memcpy(Packet,TempData,CurrentTempSize);
                memcpy(Packet+CurrentTempSize,CurData,DataToUse);
                DataLen        -=DataToUse;
                CurData        +=DataToUse;
                CurrentTempSize=0;
            } else {                                                // Construct a full packet
                memcpy(Packet,CurData,SoundPacketSize);
                DataLen-=SoundPacketSize;
                CurData+=SoundPacketSize;
            }
            AppendPacket(Position,(int16_t *)Packet);
            Position+=(double(SoundPacketSize/2*Channels)/double(SamplingRate))*AV_TIME_BASE;
        }
    }
    if (DataLen>0) {                                            // Store a partial packet in temp buffer
        // Store data left to TempData
        memcpy(TempData+CurrentTempSize,CurData,DataLen);
        CurrentTempSize+=DataLen;
    }
}

//====================================================================================================================
// Append a packet to the end of the list by mixing 2 packet
// Note : the 2 packet are free during process
//====================================================================================================================
void cSoundBlockList::MixAppendPacket(int64_t Position,int16_t *PacketA,int16_t *PacketB,bool NoLock) {
    int32_t mix;
    if ((PacketA==NULL)&&(PacketB==NULL))           AppendNullSoundPacket(Position,NoLock);
        else if ((PacketA!=NULL)&&(PacketB==NULL))  AppendPacket(Position,PacketA,NoLock);
        else if ((PacketA==NULL)&&(PacketB!=NULL))  AppendPacket(Position,PacketB,NoLock);
        else {
            // Mix the 2 sources buffer using the first buffer as destination
            int16_t *Buf1=PacketA;
            int16_t *Buf2=PacketB;
            for (int j=0;j<SoundPacketSize/2;j++) {
                mix=*(Buf1)+*(Buf2++);
                if (mix>32767)  mix=32767; else if (mix<-32768) mix=-32768;     // Adjust if necessary (16 bits)
                *(Buf1++)=int16_t(mix);
            }
            av_free(PacketB); // Free the second buffer
            AppendPacket(Position,PacketA,NoLock);
    }
}

//====================================================================================================================
// Change volume of a packet
//====================================================================================================================
void cSoundBlockList::ApplyVolume(int PacketNumber,double VolumeFactor) {
    if (PacketNumber>=List.count()) return;
    if (ListVolume[PacketNumber]) return;
    ListVolume[PacketNumber]=true;
    int16_t *Buf1=List[PacketNumber];
    if (Buf1==NULL) return;
    double mix;
    for (int j=0;j<SoundPacketSize/2;j++) {
        mix=double(*Buf1);
        mix=mix*VolumeFactor;
        if (mix>32767)  mix=32767; else if (mix<-32768) mix=-32768; //Adjust if necessary (16 bits)
        *(Buf1++)=int16_t(mix);
    }
}

//====================================================================================================================
// Transform temp data as a normal block (filling it will null sound to complet block)
//====================================================================================================================
void cSoundBlockList::UseLatestData() {
    // Use data in TempData to create a latest block
    if (CurrentTempSize>0) {
        int8_t *EndData=(int8_t *)av_malloc(SoundPacketSize+8);
        memset(EndData,0,SoundPacketSize+8);
        AppendData(0,(int16_t *)EndData,SoundPacketSize-CurrentTempSize);
        av_free(EndData);
    }
}
