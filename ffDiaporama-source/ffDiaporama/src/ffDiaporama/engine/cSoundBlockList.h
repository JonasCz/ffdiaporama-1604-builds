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

#ifndef CSOUNDBLOCKLIST_H
#define CSOUNDBLOCKLIST_H

// Basic inclusions (common to all files)
#include "_GlobalDefines.h"

// Include some additional standard class
#include <QList>

#include "cDeviceModelDef.h"                // Contains libav include

#define MAXSOUNDPACKETSIZE     3840

// Base object for sound manipulation
class cSoundBlockList {
public:
    bool                Adjusted;
    int                 SoundPacketSize;            // Size of a packet (depending on FPS)
    int                 NbrPacketForFPS;            // Number of packet for FPS
    int64_t             CurrentTempSize;            // Amount of data in the TempData buffer
    int64_t             CurrentPosition;

    int                 Channels;                   // Number of channels
    int64_t             SamplingRate;               // Sampling rate (frequency)
    int64_t             SampleBytes;                // Size of a sample (16 bits=2 bytes)
    enum AVSampleFormat SampleFormat;               // Sample format
    double              WantedDuration;             // Duration wanted depending on FPS
    double              dDuration;                  // Duration of a packet (in msec)
    double              FPS;
    QMutex              Mutex;
    u_int8_t            *TempData;                  // Buffer for stocking temporary data (when decoding data are less than a packet)

    cSoundBlockList();
    virtual         ~cSoundBlockList();

    virtual void    ClearList();                                                                                        // Clear the list (make av_free of each packet)
    virtual int16_t *DetachFirstPacket(bool NoLock=false);                                                              // Detach the first packet of the list (do not make av_free)
    virtual void    AppendNullSoundPacket(int64_t Position,bool NoLock=false);                                          // Append a packet of null sound to the end of the list
    virtual void    PrependNullSoundPacket(int64_t Position,bool NoLock=false);                                         // Append a packet of null sound to the begining of the list
    virtual void    MixAppendPacket(int64_t Position,int16_t *PacketA,int16_t *PacketB,bool NoLock=false);              // Append a packet to the end of the list by mixing 2 packet
    virtual void    AppendData(int64_t Position,int16_t *Data,int64_t DataLen);                                         // Append data to the list creating packet as necessary and filling TempData
    virtual void    SetFPS(double WantedDuration,int Channels,int64_t SamplingRate,enum AVSampleFormat SampleFormat);   // Prepare and calculate values for a frame rate
    virtual void    SetFrameSize(int FrameSize,int Channels,int64_t SamplingRate,enum AVSampleFormat SampleFormat);     // Prepare and calculate values for a frame size
    virtual void    ApplyVolume(int PacketNumber,double VolumeFactor);                                                  // Adjust volume
    virtual void    AppendPacket(int64_t Position,int16_t *PacketToAdd,bool NoLock=false);                              // Append a packet to the end of the list
    virtual void    PrependPacket(int64_t Position,int16_t *PacketToAdd,bool NoLock=false);                             // Append a packet to the begining of the list
    virtual void    AdjustSoundPosition(int64_t WantedPosition);
    virtual int     ListCount();
    virtual int16_t *GetAt(int index);
    virtual void    SetAt(int index,int16_t *Packet);
    virtual void    EnsureEnoughtNullAtStart();
    virtual void    EnsureNoNullAtStart();
    virtual qint64  GetDuration();
    virtual void    UseLatestData();

private:
    QList<int16_t *>    List;                       // List of sound packet
    QList<bool>         ListVolume;
};

#endif // CSOUNDBLOCKLIST_H
