/* ======================================================================
    This file is part of ffDiaporama
    ffDiaporama is a tools to make diaporama as video
    Copyright (C) 2011-2013 Dominique Levray <levray.dominique@bbox.fr>

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

/*
    WIKIMAKE is a tools used to translate ffDiaporama WIKI
    For more information, see readme.txt in the ffDiaporama's WIKI sub-folder of the ffDiaporama's source files
*/


#include <QtCore>
#include <QCoreApplication>
#include <iostream>
#include <QDir>
#include <QTextStream>
#include <QTranslator>

enum WorkingMode {
    FakeMode,
    MakeMode
};

WorkingMode Mode        =FakeMode;
QString     Language    ="";
QString     FullLanguage="";
QString     BasePath    ="";
QString     Source      ="";
QString     CurSource   ="";
QString     LogScan     ="";
QString     CurrentSrc  ="";
QFile       FakeFile;
QTextStream TextStream;
QTranslator Translator;
bool        IsHeader    =false;

//=========================================================================================================================================
//functions used to adjust folder name depending on operating system

QString AdjustDirForOS(QString Dir) {
    #ifdef Q_OS_WIN
    Dir.replace("/","\\");
    bool DoubleSlashBegin=Dir.startsWith("\\\\");
    Dir.replace("\\\\","\\");
    if (DoubleSlashBegin) Dir="\\"+Dir;
    #elif defined(Q_OS_UNIX) && !defined(Q_OS_MACX)
    Dir.replace("\\","/");
    #endif
    return Dir;
}

//=========================================================================================================================================

class cHTMLConversionItem {
public:
    QString Normal;
    QString HTML;
    bool    UseForToHTML;
    bool    UseForToPlainText;
    cHTMLConversionItem(QString Normal,QString HTML,bool UseForToHTML=true,bool UseForToPlainText=true) {
        this->Normal            =Normal;
        this->HTML              =HTML;
        this->UseForToHTML      =UseForToHTML;
        this->UseForToPlainText =UseForToPlainText;
    }
};

class cHTMLConversion {
public:
    QList<cHTMLConversionItem> List;

    cHTMLConversion();

    QString ToHTML(QString Source);
    QString ToPlainText(QString Source);

} HTMLConverter;

cHTMLConversion::cHTMLConversion() {
    //List.append(cHTMLConversionItem("'","&#39;"));
    List.append(cHTMLConversionItem("&","&amp;"));      List.append(cHTMLConversionItem("°","&deg;"));
    List.append(cHTMLConversionItem("–","&ndash;"));    List.append(cHTMLConversionItem("—","&mdash;"));
    List.append(cHTMLConversionItem("¡","&iexcl;"));    List.append(cHTMLConversionItem("¿","&iquest;"));
    List.append(cHTMLConversionItem("\"","&quot;"));    List.append(cHTMLConversionItem("÷","&divide;"));
    List.append(cHTMLConversionItem("“","&ldquo;"));    List.append(cHTMLConversionItem("”","&rdquo;"));
    List.append(cHTMLConversionItem("‘","&lsquo;"));    List.append(cHTMLConversionItem("’","&rsquo;"));
    List.append(cHTMLConversionItem("«","&laquo;"));    List.append(cHTMLConversionItem("»","&raquo;"));
    List.append(cHTMLConversionItem("©","&copy;"));     List.append(cHTMLConversionItem("™","&trade;"));
    List.append(cHTMLConversionItem(">","&gt;"));       List.append(cHTMLConversionItem("<","&lt;"));
    List.append(cHTMLConversionItem("µ","&micro;"));    List.append(cHTMLConversionItem("·","&middot;"));
    List.append(cHTMLConversionItem("¶","&para;"));     List.append(cHTMLConversionItem("±","&plusmn;"));
    List.append(cHTMLConversionItem("€","&euro;"));     List.append(cHTMLConversionItem("£","&pound;"));
    List.append(cHTMLConversionItem("¢","&cent;"));     List.append(cHTMLConversionItem("¥","&yen;"));
    List.append(cHTMLConversionItem("®","&reg;"));      List.append(cHTMLConversionItem("§","&sect;"));
    List.append(cHTMLConversionItem("á","&aacute;"));   List.append(cHTMLConversionItem("Á","&Aacute;"));
    List.append(cHTMLConversionItem("à","&agrave;"));   List.append(cHTMLConversionItem("À","&Agrave;"));
    List.append(cHTMLConversionItem("â","&acirc;"));    List.append(cHTMLConversionItem("Â","&Acirc;"));
    List.append(cHTMLConversionItem("å","&aring;"));    List.append(cHTMLConversionItem("Å","&Aring;"));
    List.append(cHTMLConversionItem("ã","&atilde;"));   List.append(cHTMLConversionItem("Ã","&Atilde;"));
    List.append(cHTMLConversionItem("ä","&auml;"));     List.append(cHTMLConversionItem("Ä","&Auml;"));
    List.append(cHTMLConversionItem("æ","&aelig;"));    List.append(cHTMLConversionItem("Æ","&AElig;"));
    List.append(cHTMLConversionItem("ç","&ccedil;"));   List.append(cHTMLConversionItem("Ç","&Ccedil;"));
    List.append(cHTMLConversionItem("é","&eacute;"));   List.append(cHTMLConversionItem("É","&Eacute;"));
    List.append(cHTMLConversionItem("è","&egrave;"));   List.append(cHTMLConversionItem("È","&Egrave;"));
    List.append(cHTMLConversionItem("ê","&ecirc;"));    List.append(cHTMLConversionItem("Ê","&Ecirc;"));
    List.append(cHTMLConversionItem("ë","&euml;"));     List.append(cHTMLConversionItem("Ë","&Euml;"));
    List.append(cHTMLConversionItem("í","&iacute;"));   List.append(cHTMLConversionItem("Í","&Iacute;"));
    List.append(cHTMLConversionItem("ì","&igrave;"));   List.append(cHTMLConversionItem("Ì","&Igrave;"));
    List.append(cHTMLConversionItem("î","&icirc;"));    List.append(cHTMLConversionItem("Î","&Icirc;"));
    List.append(cHTMLConversionItem("ï","&iuml;"));     List.append(cHTMLConversionItem("Ï","&Iuml;"));
    List.append(cHTMLConversionItem("ñ","&ntilde;"));   List.append(cHTMLConversionItem("Ñ","&Ntilde;"));
    List.append(cHTMLConversionItem("ó","&oacute;"));   List.append(cHTMLConversionItem("Ó","&Oacute;"));
    List.append(cHTMLConversionItem("ò","&ograve;"));   List.append(cHTMLConversionItem("Ò","&Ograve;"));
    List.append(cHTMLConversionItem("ô","&ocirc;"));    List.append(cHTMLConversionItem("Ô","&Ocirc;"));
    List.append(cHTMLConversionItem("ø","&oslash;"));   List.append(cHTMLConversionItem("Ø","&Oslash;"));
    List.append(cHTMLConversionItem("õ","&otilde;"));   List.append(cHTMLConversionItem("Õ","&Otilde;"));
    List.append(cHTMLConversionItem("ö","&ouml;"));     List.append(cHTMLConversionItem("Ö","&Ouml;"));
    List.append(cHTMLConversionItem("ú","&uacute;"));   List.append(cHTMLConversionItem("Ú","&Uacute;"));
    List.append(cHTMLConversionItem("ù","&ugrave;"));   List.append(cHTMLConversionItem("Ù","&Ugrave;"));
    List.append(cHTMLConversionItem("û","&ucirc;"));    List.append(cHTMLConversionItem("Û","&Ucirc;"));
    List.append(cHTMLConversionItem("ü","&uuml;"));     List.append(cHTMLConversionItem("Ü","&Uuml;"));
    List.append(cHTMLConversionItem("ß","&szlig;"));    List.append(cHTMLConversionItem("ÿ","&yuml;"));
    List.append(cHTMLConversionItem("´","&#180;"));     List.append(cHTMLConversionItem("`","&#96;"));
    List.append(cHTMLConversionItem(" ","&nbsp;",false,true));
    List.append(cHTMLConversionItem("\n","<br />"));
    List.append(cHTMLConversionItem("\t","&nbsp;&nbsp;&nbsp;&nbsp;"));
}

// ************************************************

QString cHTMLConversion::ToHTML(QString Source) {
    for (int i=0;i<List.count();i++)
        if ((List[i].UseForToHTML)&&(Source.contains(List[i].Normal,Qt::CaseSensitive)))
            Source=Source.replace(List[i].Normal,List[i].HTML,Qt::CaseSensitive);
    return Source;
}

// ************************************************

QString cHTMLConversion::ToPlainText(QString Source) {
    for (int i=0;i<List.count();i++)
        if ((List[i].UseForToPlainText)&&(Source.contains(List[i].HTML,Qt::CaseSensitive)))
            Source=Source.replace(List[i].HTML,List[i].Normal,Qt::CaseSensitive);
    return Source;
}

//=========================================================================================================================================

class cKeepTagConversionItem {
public:
    QString Normal;
    QString Keep;
    cKeepTagConversionItem(QString Normal,QString Keep) {
        this->Normal=Normal;
        this->Keep  =Keep;
    }
};

class cKeepTagConversion {
public:
    QList<cKeepTagConversionItem> List;

    cKeepTagConversion();

    QString ToKeep(QString Source);
    QString ToNormal(QString Source);

} KeepConverter;

cKeepTagConversion::cKeepTagConversion() {
    List.append(cKeepTagConversionItem("<I>",       ";001;"));      List.append(cKeepTagConversionItem("<i>",       ";001;"));
    List.append(cKeepTagConversionItem("</I>",      ";002;"));      List.append(cKeepTagConversionItem("</i>",      ";002;"));
    List.append(cKeepTagConversionItem("<B>",       ";003;"));      List.append(cKeepTagConversionItem("<b>",       ";003;"));
    List.append(cKeepTagConversionItem("</B>",      ";004;"));      List.append(cKeepTagConversionItem("</b>",      ";004;"));
    List.append(cKeepTagConversionItem("<STRONG>",  ";003;"));      List.append(cKeepTagConversionItem("<strong>",  ";003;"));
    List.append(cKeepTagConversionItem("</STRONG>", ";004;"));      List.append(cKeepTagConversionItem("</strong>", ";004;"));
    List.append(cKeepTagConversionItem("<U>",       ";005;"));      List.append(cKeepTagConversionItem("<u>",       ";005;"));
    List.append(cKeepTagConversionItem("</U>",      ";006;"));      List.append(cKeepTagConversionItem("</u>",      ";006;"));
    List.append(cKeepTagConversionItem("<SUP>",     ";007;"));      List.append(cKeepTagConversionItem("<sup>",     ";007;"));
    List.append(cKeepTagConversionItem("</SUP>",    ";008;"));      List.append(cKeepTagConversionItem("</sup>",    ";008;"));
}

// ************************************************

QString cKeepTagConversion::ToKeep(QString Source) {
    if (Source.contains("<div>&nbsp;</div>",Qt::CaseInsensitive)) Source.replace("<div>&nbsp;</div>",";breakl;",Qt::CaseInsensitive);

    for (int i=0;i<List.count();i++) if (Source.contains(List[i].Normal,Qt::CaseSensitive)) Source=Source.replace(List[i].Normal,List[i].Keep,Qt::CaseSensitive);

    int P1=Source.indexOf("<a href=",Qt::CaseInsensitive);
    int P2=Source.indexOf(".html",Qt::CaseInsensitive);
    int P3=Source.indexOf("</a>",Qt::CaseInsensitive);

    while ((P1>=0)&&(P2>=0)&&(P3>=0)&&(P2-P1-QString("<a href=\"").length()==4)) {
        QString S1=Source.left(Source.indexOf("<a href=",Qt::CaseInsensitive));
        QString S2=Source.mid(Source.indexOf("<a href=",Qt::CaseInsensitive)+QString("<a href=\"").length(),QString("0000").length());
        QString S3=Source.mid(Source.indexOf(".html",Qt::CaseInsensitive)+QString(".html\">").length());
        Source=S1+";@"+S2+";"+S3;
        S1=Source.left(Source.indexOf("</a>"));
        S2=Source.mid(Source.indexOf("</a>")+QString("</a>").length());
        Source=S1+";FF;"+S2;
        P1=Source.indexOf("<a href=",Qt::CaseInsensitive);
        P2=Source.indexOf(".html",Qt::CaseInsensitive);
        P3=Source.indexOf("</a>",Qt::CaseInsensitive);
    }

    // Do the same job with internal link href="#...
    P1=Source.indexOf("<a href=\"#",Qt::CaseInsensitive);
    P3=Source.indexOf("</a>",Qt::CaseInsensitive);

    while ((P1>=0)&&(P3>=0)) {
        QString S1=Source.left(Source.indexOf("<a href=\"#",Qt::CaseInsensitive));
        QString S2=Source.mid(Source.indexOf("<a href=\"#",Qt::CaseInsensitive)+QString("<a href=\"#").length());
        QString S3=S2.mid(S2.indexOf("\">",Qt::CaseInsensitive)+QString("\">").length());
        S2=S2.left(S2.indexOf("\">"));
        Source=S1+";#"+S2+";"+S3;
        S1=Source.left(Source.indexOf("</a>"));
        S2=Source.mid(Source.indexOf("</a>")+QString("</a>").length());
        Source=S1+";FF;"+S2;
        P1=Source.indexOf("<a href=\"#",Qt::CaseInsensitive);
        P2=Source.indexOf("\">",Qt::CaseInsensitive);
        P3=Source.indexOf("</a>",Qt::CaseInsensitive);
    }

    return Source;
}

// ************************************************

QString cKeepTagConversion::ToNormal(QString Source) {
    for (int i=0;i<List.count();i++) if (Source.contains(List[i].Keep,Qt::CaseSensitive)) Source=Source.replace(List[i].Keep,List[i].Normal,Qt::CaseSensitive);
    if ((Source.contains(";@"))&&(Source.contains(";FF;"))) {
        Source.replace(";FF;","</a>");
        while (Source.contains(";@")) {
            QString S1=Source.left(Source.indexOf(";@"));
            QString S2=Source.mid(Source.indexOf(";@")+QString(";@").length(),QString("0000").length());
            QString S3=Source.mid(Source.indexOf(";@")+QString(";@0000;").length());
            Source=S1+"<a href=\""+S2+".html\">"+S3;
        }
    }

    // Do the same job with internal link href="#...
    if ((Source.contains(";#"))&&(Source.contains(";FF;"))) {
        Source.replace(";FF;","</a>");
        while (Source.contains(";#")) {
            QString S1=Source.left(Source.indexOf(";#"));
            QString S2=Source.mid(Source.indexOf(";#")+QString(";#").length());
            QString S3=S2.mid(S2.indexOf(";")+QString(";").length());
            S2=S2.left(S2.indexOf(";"));
            Source=S1+"<a href=\"#"+S2+"\">"+S3;
        }
    }
    if (Source.contains(";breakl;",Qt::CaseInsensitive)) Source.replace(";breakl;","<div>&nbsp;</div>",Qt::CaseInsensitive);
    return Source;
}

//======================================================================================================================

bool HaveText(QString Text) {
    int CountText=0;
    for (int i=0;i<Text.length();i++) {
        if ((Text[i]>='A')&&(Text[i]<='Z')) CountText++;
        if ((Text[i]>='a')&&(Text[i]<='z')) CountText++;
        if (Text[i]>=128) CountText++;
    }
    return CountText>1;
}

void ToLog(QString Message) {
    std::cout << QString(Message+"\n").toLocal8Bit().constData() << std::flush;
}

void ToLogL(int Level,QString Message) {
    if (!Message.isEmpty()) {
        LogScan=LogScan+(QString().fill(' ',Level*4)+Message)+"\n";
        if (Mode==MakeMode) TextStream<<QString((QString().fill(' ',Level*4)+Message)+"\n").toUtf8();
    }
}

void ToLogT(int Level,QString Text) {
    Text=HTMLConverter.ToPlainText(Text);
    Text=KeepConverter.ToNormal(Text);

    if ((Text.length()>0)&&(Text!=" ")) {
        LogScan=LogScan+(QString().fill(' ',Level*4)+"TEXT:("+Text+")")+"\n";
        if (Mode==FakeMode) {

            QString NewText=Text.replace("\\","\\\\");
            NewText=NewText.replace("\"","\\\"");

            // if text is only a <a href ... </a> then don't include link in text to translate
            if ((NewText.toLower().startsWith("<a"))&&(NewText.toLower().endsWith("</a>"))) {
                NewText=NewText.left(NewText.toLower().lastIndexOf("</a>"));
                NewText=NewText.mid(NewText.toLower().indexOf("<a")+2);
                NewText=NewText.mid(NewText.indexOf(">")+1);
            }
            if (!NewText.contains("<div>&nbsp;</div>") && HaveText(NewText))
                TextStream<<QString("\tStr=QApplication::translate(\"%1\",\"%2\");\n").arg(CurrentSrc).arg(NewText).toUtf8();

        } else if (Mode==MakeMode) {

            QString TR;
            if ((Text.toLower().startsWith("<a"))&&(Text.toLower().endsWith("</a>"))) {
                QString TT=Text.mid(Text.toLower().indexOf("<a")+2);
                TT=TT.mid(TT.indexOf(">")+1);
                TT=TT.left(TT.toLower().lastIndexOf("</a>"));

                QString NewTT=HaveText(TT)?Translator.translate(CurrentSrc.toUtf8().constData(),TT.toUtf8().constData()):TT;
                if (NewTT.isEmpty()) {
                    if ((Language!="en")&&(!IsHeader)) NewTT="<span style=\"background-color:#FFFF00;\">"+HTMLConverter.ToHTML(KeepConverter.ToKeep(TT))+"</span>";
                        else NewTT=HTMLConverter.ToHTML(KeepConverter.ToKeep(TT));
                } else {
                    TR=KeepConverter.ToKeep(NewTT);
                    TR=HTMLConverter.ToHTML(NewTT);
                }
                TR=Text.replace(TT,NewTT);
            } else {
                TR=HaveText(Text)?Translator.translate(CurrentSrc.toUtf8().constData(),Text.toUtf8().constData()):Text;
                if (TR.isEmpty()) {
                    if ((Language!="en")&&(!IsHeader)) TR="<span style=\"background-color:#FFFF00;\">"+HTMLConverter.ToHTML(KeepConverter.ToKeep(Text))+"</span>";
                        else TR=HTMLConverter.ToHTML(KeepConverter.ToKeep(Text));
                } else {
                    TR=KeepConverter.ToKeep(TR);
                    TR=HTMLConverter.ToHTML(TR);
                }
            }
            TR=KeepConverter.ToNormal(TR);
            TextStream<<QString(QString().fill(' ',Level*4)+TR+"\n").toUtf8();
        }
    }
}

//======================================================================================================================


bool ScanSource(int CurrentLevel,QString CurrentTag) {
    QString NextTag;

    ToLogL(CurrentLevel,CurrentTag);
    if (CurrentTag.contains("<head>",Qt::CaseInsensitive))  IsHeader=true;
    CurrentLevel++;
    if (CurrentTag.contains(">")) CurrentTag.remove(">");
    if (CurrentTag.contains("<")) CurrentTag.remove("<");
    if (CurrentTag.contains(" ")) CurrentTag=CurrentTag.left(CurrentTag.indexOf(" "));

    while (((CurSource.indexOf("<")>=0)&&(CurSource.indexOf(">")>CurSource.indexOf("<")))) {
        ToLogT(CurrentLevel,CurSource.left(CurSource.indexOf("<")));

        NextTag   =CurSource.mid(CurSource.indexOf("<"),CurSource.indexOf(">")-CurSource.indexOf("<")+1);
        CurSource =CurSource.mid(CurSource.indexOf(">")+1);

        if ((NextTag.startsWith("</"))&&(!NextTag.toLower().startsWith("</script"))) {
            if (NextTag.contains("</head>",Qt::CaseInsensitive)) IsHeader=false;
            CurrentLevel--;
            ToLogL(CurrentLevel,NextTag);
            if (!NextTag.startsWith(QString("</")+CurrentTag)) {
                ToLogL(CurrentLevel,QString("Closing tag mismatch : receive %1 - waiting %2").arg(NextTag).arg(CurrentTag));
                return false;
            }
            break;
        } else {
            QString UTag=NextTag.toLower();
            if (  (UTag.startsWith("<!"))
                ||(UTag.startsWith("<!doctype"))
                ||(UTag.startsWith("<meta"))
                ||(UTag.startsWith("<img"))
                ||(UTag.startsWith("<br"))
                ||(UTag.startsWith("<hr"))
                ||(UTag.startsWith("<script"))||(UTag.startsWith("</script"))
                ||(UTag.startsWith("<link"))
               )
                ToLogL(CurrentLevel,NextTag);
            else
                if (!ScanSource(CurrentLevel,NextTag)) return false;
        }
    }
    return true;
}

bool TraiteHTMLFile(QFileInfo FileSrc) {
    ToLog("HTML file="+FileSrc.absoluteFilePath());

    CurrentSrc=FileSrc.baseName();
    QFile File(FileSrc.absoluteFilePath());

    if (!File.open(QFile::ReadOnly | QFile::Text)) {
        ToLog("Impossible to open file");
        return false;
    }

    QTextStream in(&File);
    in.setCodec("UTF-8");
    Source.clear();

    QString line = in.readLine();
    while (!line.isNull()) {
        if (Mode==MakeMode) {
            line=line.replace("<html dir=\"ltr\" lang=\"en\">",QString("<html dir=\"ltr\" lang=\"%1\">").arg(Language));
            line=line.replace("<meta http-equiv=\"Content-Language\" content=\"en-US\">",QString("<meta http-equiv=\"Content-Language\" content=\"%1\"").arg(FullLanguage));
        }
        Source.append(KeepConverter.ToKeep(line));
        line = in.readLine();
    }
    File.close();
    Source.remove("\n");
    Source.replace("\t"," ");
    while (Source.contains("  ")) Source.replace("  "," ");
    Source.replace("< ","<");
    Source.replace(" >",">");
    CurSource=Source;

    if (Mode==FakeMode) {
        return ScanSource(-1,"");
    } else if (Mode==MakeMode) {
        QString DestFile=AdjustDirForOS(FileSrc.absoluteFilePath());
        DestFile=DestFile.left(DestFile.lastIndexOf(QDir::separator()));
        DestFile=DestFile.left(DestFile.lastIndexOf(QDir::separator()))+QDir::separator()+Language+QDir::separator()+FileSrc.baseName()+"."+FileSrc.completeSuffix();
        FakeFile.setFileName(DestFile);
        if (FakeFile.exists()) FakeFile.remove();
        if (!FakeFile.open(QFile::WriteOnly | QFile::Text)) {
            ToLog(QString("Error opening fake file in %1").arg(DestFile));
            return false;
        }
        ToLog(QString("Creating localised file in %1").arg(DestFile));

        TextStream.setDevice(&FakeFile);
        TextStream.setCodec("UTF-8");
        bool Error=ScanSource(-1,"");
        FakeFile.close();
        return Error;
    }
    return false;
}

//======================================================================================================================

bool TraiteHELPFile(QFileInfo FileSrc) {
    ToLog("Help Index file="+FileSrc.absoluteFilePath());

    CurrentSrc=FileSrc.baseName();
    QFile File(FileSrc.absoluteFilePath());

    if (!File.open(QFile::ReadOnly | QFile::Text)) {
        ToLog("Impossible to open file");
        return false;
    }

    QTextStream in(&File);
    in.setCodec("UTF-8");
    Source.clear();

    QString line = in.readLine();
    while (!line.isNull()) {
        if (Mode==FakeMode) {
            if ((line.contains("<section"))&&(line.contains("title=\""))) {
                QString Text=line.mid(line.indexOf("title=\"")+QString("title=\"").length());
                Text=Text.left(Text.lastIndexOf("\""));
                TextStream<<QString("\tStr=QApplication::translate(\"QHP\",\"%1\");\n").arg(Text).toUtf8();
            }
        } else if (Mode==MakeMode) {
            if ((line.contains("<section"))&&(line.contains("title=\""))) {
                QString Start=line.left(line.indexOf("title=\"")+QString("title=\"").length());
                QString End=line.mid(line.lastIndexOf("\""));
                QString Text=line.mid(line.indexOf("title=\"")+QString("title=\"").length());
                Text=Text.left(Text.lastIndexOf("\""));
                QString TR=Translator.translate("QHP",Text.toUtf8().constData());
                if (TR.isEmpty()) TR=Text;
                line=Start+TR.replace("\"","")+End;
            } else {
                line.replace("wiki_en",QString("wiki_%1").arg(Language));
                line.replace("ffDiaporama_en",QString("ffDiaporama_%1").arg(Language));
                line.replace("ffdiaporama_en",QString("ffdiaporama_%1").arg(Language));
            }
            TextStream<<line<<"\n";
        }
        Source.append(line);
        line = in.readLine();
    }
    File.close();
    CurSource=Source;

    if (Mode==MakeMode) {
        QString DestFile=AdjustDirForOS(FileSrc.absoluteFilePath());
        DestFile=DestFile.left(DestFile.lastIndexOf(QDir::separator()));
        DestFile=DestFile.left(DestFile.lastIndexOf(QDir::separator()))+QDir::separator()+Language+QDir::separator()+QString("wiki_%1").arg(Language)+"."+FileSrc.completeSuffix();
        FakeFile.setFileName(DestFile);
        if (FakeFile.exists()) FakeFile.remove();
        if (!FakeFile.open(QFile::WriteOnly | QFile::Text)) {
            ToLog(QString("Error opening fake file in %1").arg(DestFile));
            return false;
        }
        ToLog(QString("Creating localised file in %1").arg(DestFile));
        TextStream.setDevice(&FakeFile);
        TextStream.setCodec("UTF-8");
        FakeFile.close();
    }
    return true;
}

//======================================================================================================================

bool TraiteCOLLECTIONFile(QFileInfo FileSrc) {
    ToLog("Collection file="+FileSrc.absoluteFilePath());

    CurrentSrc=FileSrc.baseName();
    QFile File(FileSrc.absoluteFilePath());

    if (!File.open(QFile::ReadOnly | QFile::Text)) {
        ToLog("Impossible to open file");
        return false;
    }

    QTextStream in(&File);
    in.setCodec("UTF-8");
    Source.clear();

    QString line = in.readLine();
    while (!line.isNull()) {
        if (Mode==MakeMode) {
            line.replace("wiki_en",QString("wiki_%1").arg(Language));
            line.replace("ffDiaporama_en",QString("ffDiaporama_%1").arg(Language));
            line.replace("ffdiaporama_en",QString("ffdiaporama_%1").arg(Language));
            TextStream<<line<<"\n";
        }
        Source.append(line);
        line = in.readLine();
    }
    File.close();
    CurSource=Source;

    if (Mode==MakeMode) {
        QString DestFile=AdjustDirForOS(FileSrc.absoluteFilePath());
        DestFile=DestFile.left(DestFile.lastIndexOf(QDir::separator()));
        DestFile=DestFile.left(DestFile.lastIndexOf(QDir::separator()))+QDir::separator()+Language+QDir::separator()+QString("wiki_%1").arg(Language)+"."+FileSrc.completeSuffix();
        FakeFile.setFileName(DestFile);
        if (FakeFile.exists()) FakeFile.remove();
        if (!FakeFile.open(QFile::WriteOnly | QFile::Text)) {
            ToLog(QString("Error opening fake file in %1").arg(DestFile));
            return false;
        }
        ToLog(QString("Creating localised file in %1").arg(DestFile));
        TextStream.setDevice(&FakeFile);
        TextStream.setCodec("UTF-8");
        FakeFile.close();
    }

    return true;
}

//======================================================================================================================

int main(int argc, char *argv[]) {
    QCoreApplication a(argc, argv);

    BasePath=QDir::currentPath();   if (!BasePath.endsWith(QDir::separator())) BasePath=BasePath+QDir::separator();
    ToLog("Current Path="+BasePath);

    if (argc!=2) {
        ToLog("Syntax error ! Correct syntax is:\n\tWikiMake fake|make=[language]");
        return -1;
    }
    if (QString(argv[1]).toLower()=="fake") {

        Mode=FakeMode;
        ToLog("WikiMake in fake mode");
        FakeFile.setFileName(BasePath+"fake"+QDir::separator()+"fake.cpp");
        if (FakeFile.exists()) {
            ToLog(QString("%1 already exist. Try to remove it").arg(FakeFile.fileName()));
            FakeFile.remove();
        }
        if (!FakeFile.open(QFile::WriteOnly | QFile::Text)) {
            ToLog(QString("Error opening fake file in %1").arg(FakeFile.fileName()));
            return -1;
        }
        ToLog(QString("Creating fake file in %1").arg(BasePath+"fake"+QDir::separator()+"fake.cpp"));
        TextStream.setDevice(&FakeFile);
        TextStream<<QString("void Append() {\n").toUtf8();
        TextStream<<QString("\tQString Str;\n").toUtf8();

    } else if (QString(argv[1]).toLower().startsWith("make=")) {

        Mode=MakeMode;
        Language=QString(argv[1]).mid(QString("make=").length());
        ToLog(QString("WikiMake in make mode for \"%1\" language").arg(Language));
        if ((Language!="en")&&(!Translator.load(QString("wikifake_%1.qm").arg(Language)))) {
            ToLog(QString("Error loading translation file %1").arg(QString("wikifake_%1.qm").arg(Language)));
            return -1;
        }
        ToLog(QString("Loading translation file %1").arg(QString("wikifake_%1.qm").arg(Language)));
        if (Language=="en") FullLanguage="en-US"; else if (!Language.contains("-")) FullLanguage=Language+"-"+Language.toUpper();
        if (!QDir(BasePath+Language).exists()) QDir().mkdir(BasePath+Language);
    }

    QFileInfoList Files=QDir(BasePath+"src_en").entryInfoList(QDir::Files);
    int i=0;
    while (i<Files.count()) if ((Files[i].completeSuffix().toLower()!="html")&&(Files[i].completeSuffix().toLower()!="qhp")&&(Files[i].completeSuffix().toLower()!="qhcp"))
        Files.removeAt(i); else i++;

    bool Cont=true;
    foreach(QFileInfo File,Files) {
        LogScan.clear();
        if (File.completeSuffix().toLower()=="html")        Cont=TraiteHTMLFile(File);
        else if (File.completeSuffix().toLower()=="qhp")    Cont=TraiteHELPFile(File);
        else if (File.completeSuffix().toLower()=="qhcp")   Cont=TraiteCOLLECTIONFile(File);
        if (!Cont) {
            ToLog(LogScan);
            ToLog("Exit on error");
            return -1;
        }
    }

    if (Mode==FakeMode) {
        TextStream<<QString("}\n").toUtf8();
        FakeFile.close();
    }

    return 0;
}
