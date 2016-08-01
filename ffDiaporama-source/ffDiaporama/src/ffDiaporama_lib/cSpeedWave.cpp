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

#include "cSpeedWave.h"

#define PI2 (3.14159265/2)

double ComputePCT(int SpeedWave,double CurrentPCT) {
    switch (SpeedWave) {
        case SPEEDWAVE_LINEAR           : return CurrentPCT;                                        break;
        case SPEEDWAVE_SINQUARTER       : return sin(PI2*CurrentPCT);                               break;
        case SPEEDWAVE_SINQUARTERx4     : return pow(sin(PI2*CurrentPCT),2)/pow(sin(PI2),2);        break;
        case SPEEDWAVE_POW2             : return pow(CurrentPCT,2);                                 break;
        case SPEEDWAVE_SQRT             : return sqrt(CurrentPCT);                                  break;
        case SPEEDWAVE_PROJECTDEFAULT   :
        default                         :
            std::cout << QString("Unrecognise SpeedWave in _SpeedWave::ComputePCT").toLocal8Bit().constData() << std::flush;
            exit(1);
    }
}

QString GetSpeedWaveName(int SpeedWave) {
    switch (SpeedWave) {
        case SPEEDWAVE_PROJECTDEFAULT   : return QApplication::translate("Speed wave","Project default (%1)");          break;
        case SPEEDWAVE_LINEAR           : return QApplication::translate("Speed wave","Constant speed");                break;
        case SPEEDWAVE_SINQUARTER       : return QApplication::translate("Speed wave","Fast then slow");                break;
        case SPEEDWAVE_SINQUARTERx4     : return QApplication::translate("Speed wave","Slow then fast");                break;
        case SPEEDWAVE_POW2             : return QApplication::translate("Speed wave","Faster and faster");             break;
        case SPEEDWAVE_SQRT             : return QApplication::translate("Speed wave","Slower and slower");             break;
        default                         :
            std::cout << QString("Unrecognise SpeedWave in _SpeedWave::GetSpeedWaveName").toLocal8Bit().constData() << std::flush;
            exit(1);
    }
}
