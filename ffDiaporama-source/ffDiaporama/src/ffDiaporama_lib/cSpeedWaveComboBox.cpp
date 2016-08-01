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

#include "cSpeedWaveComboBox.h"

//====================================================================================================================

cCSpeedWaveComboBox::cCSpeedWaveComboBox(QWidget *parent):QCustomComboBox(parent) {
    for (int i=0;i<SPEEDWAVE_TYPE_NBR;i++) addItem(GetSpeedWaveName(i),QVariant(i));
}

//====================================================================================================================

void cCSpeedWaveComboBox::AddProjectDefault(int DefaultSpeedWave) {
    insertItem(0,GetSpeedWaveName(SPEEDWAVE_PROJECTDEFAULT).arg(GetSpeedWaveName(DefaultSpeedWave)),QVariant(SPEEDWAVE_PROJECTDEFAULT));
}

//====================================================================================================================

void cCSpeedWaveComboBox::SetCurrentValue(int Value) {
    for (int i=0;i<this->count();i++) if (itemData(i).toInt()==Value) setCurrentIndex(i);
}

//====================================================================================================================

int cCSpeedWaveComboBox::GetCurrentValue() {
    int Current=currentIndex();
    if ((Current<0)||(Current>count())) return -1; else return itemData(Current).toInt();
}
