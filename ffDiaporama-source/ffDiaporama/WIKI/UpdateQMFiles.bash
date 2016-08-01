#!/bin/bash
# ======================================================================
#    This file is part of ffDiaporama
#    ffDiaporama is a tools to make diaporama as video
#    Copyright (C) 2011-2014 Dominique Levray <domledom@laposte.net>
#
#    This program is free software; you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation; either version 2 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License along
#    with this program; if not, write to the Free Software Foundation, Inc.,
#    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
#   ====================================================================== */

PREPLANGUAGE() {
    echo "Prepare for language: "$1
    ./WikiMakeBin make=$1
    cd $1
    rm wiki_img
    ln -s ../wiki_img wiki_img
    rm img
    ln -s ../../src/ffDiaporama/img img
    cp ../wiki.css wiki.css
    qhelpgenerator -c "wiki_"$1".qhp" -o "wiki_"$1".qch"
    qcollectiongenerator "wiki_"$1".qhcp" -o "wiki_"$1".qhc"
    mv "wiki_"$1".qhc" ../../locale
    mv "wiki_"$1".qch" ../../locale
    cd ..
}

cd fake
lrelease fake.pro >~/ffdtr.log

cd ..
PREPLANGUAGE "en"
PREPLANGUAGE "de"
PREPLANGUAGE "es"
PREPLANGUAGE "el"
PREPLANGUAGE "fr"
PREPLANGUAGE "it"
PREPLANGUAGE "pt"
PREPLANGUAGE "ru"
PREPLANGUAGE "gl"

TODAY=`/bin/date +%Y%m%d`
echo $TODAY >../locale/WIKIVERSION.TXT

#decode log file
CURLANG=""
FINISHED=0
UNFINISHED=0
UNTRANSLATED=0
while read line  
do   
  if [[ $line == Updating* ]];then
    if [[ $CURLANG != "" ]];then
      #compute
      TOTAL=`echo $(($FINISHED+$UNFINISHED))`
      RESTE=0
      #display
      echo -e "$CURLANG = 100% ($FINISHED/$TOTAL)"  >>../locale/WIKIVERSION.TXT
    fi
    DEB=`expr index "$line" '_'`
    CURLANG=${line:$DEB}
    POS=`expr index "$CURLANG" '.'`
    POS=$POS-1
    CURLANG=${CURLANG:0:$POS}
    FINISHED=0
    UNFINISHED=0
    UNTRANSLATED=0
  elif [[ $line == Generated* ]];then
    POS=`expr index "$line" '\('`
    SUBS=${line:POS}
    POS=`expr index "$SUBS" '\('`
    SUBS=${SUBS:POS}
    POS=`expr index "$SUBS" ' '`
    POS=$POS-1
    FINISHED=${SUBS:0:POS}
    POS=$POS+1
    SUBS=${SUBS:POS}
    POS=`expr index "$SUBS" ' '`
    SUBS=${SUBS:POS}
    POS=`expr index "$SUBS" ' '`
    SUBS=${SUBS:POS}
    POS=`expr index "$SUBS" ' '`
    POS=$POS-1
    UNFINISHED=${SUBS:0:POS}
    #trim all
    FINISHED=`echo $FINISHED`
    UNFINISHED=`echo $UNFINISHED`
  elif [[ $line == Ignored* ]];then
    POS=`expr index "$line" ' '`
    SUBS=${line:POS}
    POS=`expr index "$SUBS" ' '`
    UNTRANSLATED=${SUBS:0:POS}
    #trim
    UNTRANSLATED=`echo $UNTRANSLATED`
    #compute
    TOTAL=`echo $(($FINISHED+$UNFINISHED+$UNTRANSLATED))`
    RESTE=`echo $(($UNFINISHED+$UNTRANSLATED))`
    PCT=`echo $(($FINISHED*100))`
    PCT=`echo $(($PCT/$TOTAL))`
    #display
    echo -e "$CURLANG = $PCT% ($FINISHED/$TOTAL) $RESTE to translate" >>../locale/WIKIVERSION.TXT
    CURLANG=""
  fi
done < ~/ffdtr.log

rm ~/ffdtr.log

cp ../locale/wiki_* ~/.ffDiaporama
cp ../locale/WIKIVERSION.TXT ~/.ffDiaporama/fr_WIKIVERSION.TXT
cp ../locale/WIKIVERSION.TXT ~/.ffDiaporama/es_WIKIVERSION.TXT
cp ../locale/WIKIVERSION.TXT ~/.ffDiaporama/pt_WIKIVERSION.TXT
cp ../locale/WIKIVERSION.TXT ~/.ffDiaporama/ru_WIKIVERSION.TXT
cp ../locale/WIKIVERSION.TXT ~/.ffDiaporama/it_WIKIVERSION.TXT
cp ../locale/WIKIVERSION.TXT ~/.ffDiaporama/el_WIKIVERSION.TXT
cp ../locale/WIKIVERSION.TXT ~/.ffDiaporama/de_WIKIVERSION.TXT

cat ../locale/WIKIVERSION.TXT
