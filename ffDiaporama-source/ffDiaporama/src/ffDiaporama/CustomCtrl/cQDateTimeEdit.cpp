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

#include "cQDateTimeEdit.h"
#include <qdebug.h>

cQDateTimeEdit::cQDateTimeEdit(QWidget *parent):QDateTimeEdit(parent) {
    MsecStep=1;
    setWrapping(true);
}

void cQDateTimeEdit::stepBy(int steps) {
    qint64 Current=QTime(0,0,0,0).msecsTo(time());
    qint64 NewTime=Current;
    if          (currentSection()==QDateTimeEdit::MSecSection)   NewTime=(qint64(qreal(Current)/MsecStep)+steps)*MsecStep;
        else if (currentSection()==QDateTimeEdit::SecondSection) NewTime=qint64(qreal(Current+   1000*steps)/MsecStep)*MsecStep;
        else if (currentSection()==QDateTimeEdit::MinuteSection) NewTime=qint64(qreal(Current+  60000*steps)/MsecStep)*MsecStep;
        else if (currentSection()==QDateTimeEdit::HourSection)   NewTime=qint64(qreal(Current+3600000*steps)/MsecStep)*MsecStep;
    if (NewTime<0) NewTime=0;
    if (NewTime>QTime(0,0,0,0).msecsTo(maximumTime())) NewTime=QTime(0,0,0,0).msecsTo(maximumTime());
    setTime(QTime(0,0,0,0).addMSecs(NewTime));
}
