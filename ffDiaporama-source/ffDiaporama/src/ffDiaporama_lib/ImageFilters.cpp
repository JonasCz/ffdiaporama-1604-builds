/*======================================================================
    This file is part of ffDiaporama
    ffDiaporama is a tools to make diaporama as video
    Copyright (C) 2011-2013 Dominique Levray<domledom@laposte.net>

    This program is free software;you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation;either version 2 of the License,or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY;without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program;if not,write to the Free Software Foundation,Inc.,
    51 Franklin Street,Fifth Floor,Boston,MA 02110-1301 USA.
  ======================================================================*/

#include "ImageFilters.h"
#include <QImage>

struct rgba {
    rgba(int r1,int g1,int b1,int a1):r(r1),g(g1),b(b1),a(a1) {}
    rgba():r(0),g(0),b(0),a(0) {}

    unsigned char r;
    unsigned char g;
    unsigned char b;
    unsigned char a;
};

#define M_SQ2PI 2.50662827463100024161235523934010416269302368164062
#define M_EPSILON 1.0e-6

// Accumulates the results of applying x and y Sobel masks
#define SOBEL(xm,ym,pixel) \
    xR+=qRed((pixel))*(xm);\
    xG+=qGreen((pixel))*(xm);\
    xB+=qBlue((pixel))*(xm);\
    yR+=qRed((pixel))*(ym);\
    yG+=qGreen((pixel))*(ym);\
    yB+=qBlue((pixel))*(ym);

#define CONVOLVE_ACC(weight,pixel) \
    r+=((weight))*(qRed((pixel)));\
    g+=((weight))*(qGreen((pixel)));\
    b+=((weight))*(qBlue((pixel)));

typedef struct {
    u_int32_t red,green,blue,alpha;
} IntegerPixel;

typedef struct {
    u_int16_t red,green,blue,alpha;
} ShortPixel;

typedef struct {
    // Yes,a normal pixel can be used instead but this is easier to read and no shifts to get components.
    u_int8_t red,green,blue,alpha;
} CharPixel;

typedef struct {
    float red,green,blue,alpha;
} FloatPixel;

typedef struct {
    u_int32_t red,green,blue,alpha;
} HistogramListItem;

QRgb ConvertFromPremult(QRgb p) {
    int alpha=qAlpha(p);
    return (!alpha?0:qRgba(255*qRed(p)/alpha,255*qGreen(p)/alpha,255*qBlue(p)/alpha,alpha));
}

QRgb ConvertToPremult(QRgb p) {
    unsigned int a=p>>24;
    unsigned int t=(p&0xff00ff)*a;
    t=(t+((t>>8)&0xff00ff)+0x800080)>>8;
    t&=0xff00ff;

    p =((p>>8) & 0xff)*a;
    p =(p+((p>>8) & 0xff)+0x80);
    p&=0xff00;
    p|=t|(a<<24);
    return(p);
}

int defaultConvolveMatrixSize(float radius,float sigma) {
    int i,matrix_size;
    float normalize,value;
    float sigma2 = sigma*sigma*2.0;
    float sigmaSQ2PI = M_SQ2PI*sigma;
    int max = 65535;

    if (radius>0.0) return((int)(2.0*std::ceil(radius)+1.0));

    matrix_size = 5;
    do {
        normalize = 0.0;
        for (i=(-matrix_size/2);i <= (matrix_size/2);++i) normalize += std::exp(-((float) i*i)/sigma2) / sigmaSQ2PI;
        i = matrix_size/2;
        value = std::exp(-((float) i*i)/sigma2) / sigmaSQ2PI / normalize;
        matrix_size += 2;
    } while ((int)(max*value) > 0);

    matrix_size-=4;
    return(matrix_size);
}

QRgb interpolate255(QRgb x, unsigned int a,QRgb y, unsigned int b) {
    unsigned int t = (x & 0xff00ff) * a + (y & 0xff00ff) * b;
    t = (t + ((t >> 8) & 0xff00ff) + 0x800080) >> 8;
    t &= 0xff00ff;

    x = ((x >> 8) & 0xff00ff) * a + ((y >> 8) & 0xff00ff) * b;
    x = (x + ((x >> 8) & 0xff00ff) + 0x800080);
    x &= 0xff00ff00;
    x |= t;
    return(x);
}

//**********************************************************************************************************************

// Adapt From fmt_filters<http://ksquirrel.sourceforge.net/subprojects.php>
void FltBrightness(QImage &Img,int32_t bn) {
    u_int8_t *bits;
    int32_t  val;

    for (int y=0;y<Img.height();++y) {
        bits=(u_int8_t*)Img.bits()+Img.width()*y*sizeof(rgba);
        for (int x=0;x<Img.width();x++) {
            for (int v=0;v<3;v++) {
                val =bn+*bits;
               *bits=val<0?0:(val>255?255:val);
                bits++;
            }
            bits++;
        }
    }
}

//**********************************************************************************************************************

// Adapt From fmt_filters<http://ksquirrel.sourceforge.net/subprojects.php>
void FltContrast(QImage &Img,int32_t contrast) {
    if(contrast<-255) contrast=-255;
    if(contrast>255)  contrast=255;

    rgba    *bits;
    int32_t Ra=0,Ga=0,Ba=0,Rn,Gn,Bn;

    // calculate the average values for RED,GREEN and BLUE color components
    for (int32_t y=0;y<Img.height();y++) {
        bits=(rgba*)Img.bits()+Img.width()*y;
        for (int32_t x=0;x<Img.width();x++) {
            Ra+=bits->r;
            Ga+=bits->g;
            Ba+=bits->b;
            bits++;
        }
    }

    int32_t  S=Img.width()*Img.height();
    u_int8_t Ravg=Ra/S;
    u_int8_t Gavg=Ga/S;
    u_int8_t Bavg=Ba/S;

    // Now change contrast with the terms of alghoritm:
    //  if contrast>0: I=(I-Avg)*256 / (256-contrast)+Avg
    //  if contrast<0: I=(I-Avg)*(256+contrast) / 256+Avg
    //
    // where
    //   I-current color component value
    //   Avg-average value of this component (Ravg,Gavg or Bavg)

    for (int32_t y=0;y<Img.height();y++) {
        bits=(rgba*)Img.bits()+Img.width()*y;

        for (int32_t x=0;x<Img.width();x++) {
            Rn=(contrast>0)?((bits->r-Ravg)*256/(256-contrast)+Ravg):((bits->r-Ravg)*(256+contrast)/256+Ravg);
            Gn=(contrast>0)?((bits->g-Gavg)*256/(256-contrast)+Gavg):((bits->g-Gavg)*(256+contrast)/256+Gavg);
            Bn=(contrast>0)?((bits->b-Bavg)*256/(256-contrast)+Bavg):((bits->b-Bavg)*(256+contrast)/256+Bavg);
            bits->r=Rn<0?0:(Rn>255?255:Rn);
            bits->g=Gn<0?0:(Gn>255?255:Gn);
            bits->b=Bn<0?0:(Bn>255?255:Bn);
            bits++;
        }
    }
}

//**********************************************************************************************************************

// Adapt From fmt_filters<http://ksquirrel.sourceforge.net/subprojects.php>
void FltGamma(QImage &Img,double L) {
    if (L==0||L<0) L=0.01;

    rgba       *_rgba;
    u_int8_t    R,G,B;
    u_int8_t    GT[256];

    GT[0]=0;

    // fill the array with gamma koefficients
    for (int32_t x=1;x<256;++x)	GT[x]=(u_int8_t)floor(255*pow((double)x/255.0,1.0/L));

    // now change gamma
    for (int32_t y=0;y<Img.height();y++) {
        _rgba=(rgba*)Img.bits()+Img.width()*y;
        for (int32_t x=0;x<Img.width();x++) {
            R=_rgba[x].r;
            G=_rgba[x].g;
            B=_rgba[x].b;
            _rgba[x].r=GT[R];
            _rgba[x].g=GT[G];
            _rgba[x].b=GT[B];
        }
    }
}

//**********************************************************************************************************************

// Adapt From fmt_filters<http://ksquirrel.sourceforge.net/subprojects.php>
void FltColorize(QImage &Img,int32_t red,int32_t green,int32_t blue) {
    u_int8_t   *bits;
    int32_t     val;
    int32_t     V[3]={red,green,blue};

    // add value to each component value,and check if the result is out of bounds
    for (int32_t y=0;y<Img.height();y++) {
        bits=Img.bits()+Img.width()*y*sizeof(rgba);
        for (int32_t x=0;x<Img.width();x++) {
            for (int32_t v=0;v<3;++v) {
                val=(int32_t)*(bits+v)+V[v];
                if (val>255)*(bits+v)=255;
                    else if (val<0)*(bits+v)=0;
                    else*(bits+v)=val;
            }
            bits+=4;
        }
    }
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>
void FltGrayscale(QImage &Img) {
    if(Img.format()!=QImage::Format_ARGB32) Img=Img.convertToFormat(QImage::Format_ARGB32);

    int            y;
    int            w=Img.width();
    int            h=Img.height();
    QImage         buffer(w,h,QImage::Format_Indexed8);
    QVector<QRgb>  cTable(256);
    unsigned int   *src=cTable.data();
    unsigned char  *end,*dest;
    unsigned int   pixel;

    for (y=0;y<256;y++)*src++=qRgb(y,y,y);
    buffer.setColorTable(cTable);

    src=(unsigned int*)Img.scanLine(0);

    for (y=0;y<h;y++) {
        dest=buffer.scanLine(y);
        end=dest+w;
        while (dest!=end) {
            pixel =*src++;
            *dest++=qGray(qRed(pixel),qGreen(pixel),qBlue(pixel));
        }
    }
    Img=buffer;
    Img=Img.convertToFormat(QImage::Format_ARGB32_Premultiplied);
}

//**********************************************************************************************************************

// Adapt From normalize : QImageBlitz<http://qimageblitz.sourceforge.net/>
void FltAutoContrast(QImage &Img) {
    IntegerPixel        intensity;
    HistogramListItem   *histogram;
    CharPixel           *normalize_map;
    ShortPixel          high,low;
    uint                threshold_intensity;
    int                 i,count;
    QRgb                pixel,*dest;
    unsigned char       r,g,b;

    count=Img.width()*Img.height();

    histogram    =new HistogramListItem[256];
    normalize_map=new CharPixel[256];

    // form histogram
    memset(histogram,0,256*sizeof(HistogramListItem));
    dest=(QRgb*)Img.bits();

    for (i=0;i<count;++i,++dest) {
        pixel=ConvertFromPremult(*dest);
        histogram[qRed(pixel)].red++;
        histogram[qGreen(pixel)].green++;
        histogram[qBlue(pixel)].blue++;
        histogram[qAlpha(pixel)].alpha++;
    }

    // find the histogram boundaries by locating the .01 percent levels.
    threshold_intensity=count/1000;

    memset(&intensity,0,sizeof(IntegerPixel));
    for (low.red=0;low.red<256;++low.red) {
        intensity.red+=histogram[low.red].red;
        if(intensity.red>threshold_intensity) break;
    }
    memset(&intensity,0,sizeof(IntegerPixel));
    for (high.red=255;high.red>0;--high.red) {
        intensity.red+=histogram[high.red].red;
        if(intensity.red>threshold_intensity) break;
    }
    memset(&intensity,0,sizeof(IntegerPixel));
    for (low.green=low.red;low.green<high.red;++low.green) {
        intensity.green+=histogram[low.green].green;
        if(intensity.green>threshold_intensity) break;
    }
    memset(&intensity,0,sizeof(IntegerPixel));
    for (high.green=high.red;high.green !=low.red;--high.green) {
        intensity.green+=histogram[high.green].green;
        if(intensity.green>threshold_intensity) break;
    }
    memset(&intensity,0,sizeof(IntegerPixel));
    for (low.blue=low.green;low.blue<high.green;++low.blue) {
        intensity.blue+=histogram[low.blue].blue;
        if(intensity.blue>threshold_intensity) break;
    }
    memset(&intensity,0,sizeof(IntegerPixel));
    for (high.blue=high.green;high.blue !=low.green;--high.blue) {
        intensity.blue+=histogram[high.blue].blue;
        if(intensity.blue>threshold_intensity) break;
    }

    delete[] histogram;

    // stretch the histogram to create the normalized image mapping.
    for (i=0;i<256;i++) {
        if(i<low.red) normalize_map[i].red=0;else {
            if (i>high.red) normalize_map[i].red=255;
            else if (low.red !=high.red) normalize_map[i].red=(255*(i-low.red))/(high.red-low.red);
        }

        if (i<low.green) normalize_map[i].green=0;else {
            if(i>high.green) normalize_map[i].green=255;
            else if(low.green !=high.green) normalize_map[i].green=(255*(i-low.green))/(high.green-low.green);
        }

        if (i<low.blue) normalize_map[i].blue=0;else {
            if(i>high.blue) normalize_map[i].blue=255;
            else if(low.blue !=high.blue) normalize_map[i].blue=(255*(i-low.blue))/(high.blue-low.blue);
        }
    }

    // write
    dest=(QRgb*)Img.bits();
    for (i=0;i<count;i++,dest++) {
        pixel=ConvertFromPremult(*dest);
        r    =(low.red  !=high.red)  ?normalize_map[qRed(pixel)].red:qRed(pixel);
        g    =(low.green!=high.green)?normalize_map[qGreen(pixel)].green:qGreen(pixel);
        b    =(low.blue !=high.blue) ?normalize_map[qBlue(pixel)].blue:qBlue(pixel);
        *dest=ConvertToPremult(qRgba(r,g,b,qAlpha(pixel)));
    }

    delete[] normalize_map;
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>
void FltBlur(QImage &Img,int radius) {
    QRgb    *p1,*p2;
    int     x,y,w,h,mx,my,mw,mh,mt,xx,yy;
    int     a,r,g,b;
    int     *as,*rs,*gs,*bs;

    if (radius<1 || Img.isNull() || Img.width()<(radius<<1)) return;

    w=Img.width();
    h=Img.height();

    QImage buffer(w,h,Img.hasAlphaChannel()?QImage::Format_ARGB32:QImage::Format_RGB32);

    as=new int[w];
    rs=new int[w];
    gs=new int[w];
    bs=new int[w];

    for (y=0;y<h;y++) {
        my=y-radius;
        mh=(radius<<1)+1;
        if (my<0) {
            mh+=my;
            my=0;
        }
        if ((my+mh)>h) mh=h-my;

        p1=(QRgb*)buffer.scanLine(y);
        memset(as,0,w*sizeof(int));
        memset(rs,0,w*sizeof(int));
        memset(gs,0,w*sizeof(int));
        memset(bs,0,w*sizeof(int));

        QRgb pixel;
        for (yy=0;yy<mh;yy++) {
            p2=(QRgb*)Img.scanLine(yy+my);
            for (x=0;x<w;x++,p2++) {
                pixel=ConvertFromPremult(*p2);
                as[x]+=qAlpha(pixel);
                rs[x]+=qRed(pixel);
                gs[x]+=qGreen(pixel);
                bs[x]+=qBlue(pixel);
            }
        }

        for (x=0;x<w;x++) {
            a=r=g=b=0;
            mx=x-radius;
            mw=(radius<<1)+1;
            if (mx<0) {
                mw+=mx;
                mx=0;
            }
            if ((mx+mw)>w) mw=w-mx;
            mt=mw*mh;
            for (xx=mx;xx<(mw+mx);xx++) {
                a+=as[xx];
                r+=rs[xx];
                g+=gs[xx];
                b+=bs[xx];
            }
            a=a/mt;
            r=r/mt;
            g=g/mt;
            b=b/mt;
            *p1++=qRgba(r,g,b,a);
        }
    }
    delete[] as;
    delete[] rs;
    delete[] gs;
    delete[] bs;

    Img=buffer.convertToFormat(QImage::Format_ARGB32_Premultiplied);
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>
void FltSharpen(QImage &Img,int radius) {
    if (Img.isNull() || radius<1) return;

    if(Img.format()!=QImage::Format_ARGB32) Img=Img.convertToFormat(QImage::Format_ARGB32);

    QImage  buffer(Img.width(),Img.height(),Img.format());
    int     a,r,g,b,x,y;
    int     w=Img.width();
    int     h=Img.height();
    QRgb    *src,*dest;

    memcpy(buffer.scanLine(0),Img.scanLine(0),Img.bytesPerLine());
    for (y=1;y<h-1;++y) {
        src=(QRgb*)Img.scanLine(y);
        dest=(QRgb*)buffer.scanLine(y);
        *dest++=*src++;
        for (x=1;x<w-1;++x) {
            r=qRed(*src)*5;   g=qGreen(*src)*5;     b=qBlue(*src)*5;      a=qAlpha(*src)*5;
            r-=qRed(*(src-1));g-=qGreen(*(src-1));  b-=qBlue(*(src-1));   a-=qAlpha(*(src-1));
            r-=qRed(*(src+1));g-=qGreen(*(src+1));  b-=qBlue(*(src+1));   a-=qAlpha(*(src+1));
            r-=qRed(*(src-w));g-=qGreen(*(src-w));  b-=qBlue(*(src-w));   a-=qAlpha(*(src-w));
            r-=qRed(*(src+w));g-=qGreen(*(src+w));  b-=qBlue(*(src+w));   a-=qAlpha(*(src+w));

            r=(r&((~r)>>16)); r=((r|((r&256)-((r&256)>>8))));
            g=(g&((~g)>>16)); g=((g|((g&256)-((g&256)>>8))));
            b=(b&((~b)>>16)); b=((b|((b&256)-((b&256)>>8))));
            a=(a&((~a)>>16)); a=((a|((a&256)-((a&256)>>8))));

            *dest=qRgba(r,g,b,a);
            ++src;
            ++dest;
        }
        *dest++=*src++;
    }
    memcpy(buffer.scanLine(h-1),Img.scanLine(h-1),Img.bytesPerLine());
    Img=buffer.convertToFormat(QImage::Format_ARGB32_Premultiplied);
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>
void FltEdge(QImage &Img) {
    int x,y,w=Img.width(),h=Img.height();
    if (w<3 || h<3) return;

    if(Img.format()!=QImage::Format_ARGB32) Img=Img.convertToFormat(QImage::Format_ARGB32);

    QImage  buffer(w,h,QImage::Format_RGB32);
    QRgb    *dest;
    QRgb    *s,*scanblock[3];
    int     xR,xG,xB,yR,yG,yB;

    for (y=0;y<h;++y) {
        scanblock[1]=(QRgb*)Img.scanLine(y);
        dest       =(QRgb*)buffer.scanLine(y);
        if (y==0) {
            scanblock[0]=(QRgb*)Img.scanLine(y);
            scanblock[2]=(QRgb*)Img.scanLine(y+1);
        } else if (y==h-1) {
            scanblock[0]=(QRgb*)Img.scanLine(y-1);
            scanblock[2]=(QRgb*)Img.scanLine(y);
        } else {
            scanblock[0]=(QRgb*)Img.scanLine(y-1);
            scanblock[2]=(QRgb*)Img.scanLine(y+1);
        }

        // x==0,double over first pixel
        xR=xG=xB=yR=yG=yB=0;
        s=scanblock[0];    SOBEL(-1,1,*s);    SOBEL(0,2,*s); ++s;   SOBEL(1,1,*s);
        s=scanblock[1];    SOBEL(-2,0,*s);    SOBEL(0,0,*s); ++s;   SOBEL(2,0,*s);
        s=scanblock[2];    SOBEL(-1,-1,*s);   SOBEL(0,-2,*s);++s;   SOBEL(1,-1,*s);
        xR=qAbs(xR)+qAbs(yR);
        xG=qAbs(xG)+qAbs(yG);
        xB=qAbs(xB)+qAbs(yB);
        *dest++=qRgb(qMin(xR,255),qMin(xG,255),qMin(xB,255));

        // x==1,process middle of image
        for (x=1;x<w-1;++x) {
            xR=xG=xB=yR=yG=yB=0;
            s=scanblock[0]; SOBEL(-1,1,*s);   ++s;   SOBEL(0,2,*s); ++s; SOBEL(1,1,*s);
            s=scanblock[1]; SOBEL(-2,0,*s);   ++s;   SOBEL(0,0,*s); ++s; SOBEL(2,0,*s);
            s=scanblock[2]; SOBEL(-1,-1,*s);  ++s;   SOBEL(0,-2,*s); ++s;SOBEL(1,-1,*s);
            ++scanblock[0];
            ++scanblock[1];
            ++scanblock[2];
            xR=qAbs(xR)+qAbs(yR);
            xG=qAbs(xG)+qAbs(yG);
            xB=qAbs(xB)+qAbs(yB);
            *dest++=qRgb(qMin(xR,255),qMin(xG,255),qMin(xB,255));
        }

        // x==w-1,double over last pixel
        xR=xG=xB=yR=yG=yB=0;
        s=scanblock[0]; SOBEL(-1,1,*s);   ++s;   SOBEL(0,2,*s);     SOBEL(1,1,*s);
        s=scanblock[1]; SOBEL(-2,0,*s);   ++s;   SOBEL(0,0,*s);     SOBEL(2,0,*s);
        s=scanblock[2]; SOBEL(-1,-1,*s);  ++s;   SOBEL(0,-2,*s);    SOBEL(1,-1,*s);
        xR=qAbs(xR)+qAbs(yR);
        xG=qAbs(xG)+qAbs(yG);
        xB=qAbs(xB)+qAbs(yB);
        *dest++=qRgb(qMin(xR,255),qMin(xG,255),qMin(xB,255));
    }
    Img=buffer.convertToFormat(QImage::Format_ARGB32_Premultiplied);
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>
void FltCharcoal(QImage &Img) {
    FltEdge(Img);
    FltBlur(Img,1);
    FltAutoContrast(Img);
    Img.invertPixels();
    FltGrayscale(Img);
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>

void PrivateHull(int x_offset,int y_offset,int w,int h,unsigned char *f,unsigned char *g,int polarity) {
    int             x,y,v;
    unsigned char   *p,*q,*r,*s;
    p=f+(w+2);
    q=g+(w+2);
    r=p+(y_offset*(w+2)+x_offset);
    for (y=0;y<h;++y,++p,++q,++r) {
        ++p;++q;++r;
        if (polarity>0) {
            for (x=w;x>0;--x,++p,++q,++r) {
                v=(*p);
                if ((int)*r>=(v+2)) v+=1;
                *q=(unsigned char)v;
            }
        } else {
            for (x=w;x>0;--x,++p,++q,++r) {
                v=(*p);
                if ((int)*r<=(v-2)) v-=1;
                *q=(unsigned char)v;
            }
        }
    }
    p=f+(w+2);
    q=g+(w+2);
    r=q+(y_offset*(w+2)+x_offset);
    s=q-(y_offset*(w+2)+x_offset);
    for (y=0;y<h;++y,++p,++q,++r,++s) {
        ++p;++q;++r;++s;
        if (polarity>0) {
            for (x=w;x>0;--x,++p,++q,++r,++s) {
                v=(*q);
                if (((int)*s>=(v+2))&&((int)*r>v)) v+=1;
                *p=(unsigned char)v;
            }
        } else {
            for (x=w;x>0;--x,++p,++q,++r,++s) {
                v=(int)(*q);
                if (((int)*s<=(v-2))&&((int)*r<v)) v-=1;
                *p=(unsigned char)v;
            }
        }
    }
}

void FltDespeckle(QImage &Img) {
    int                 length,x,y,j,i;
    QRgb                *src,*dest;
    unsigned char       *buffer,*pixels;
    int                 w=Img.width();
    int                 h=Img.height();
    static const int    X[4]={0,1,1,-1},Y[4]={1,0,1,1};

    length=(Img.width()+2)*(Img.height()+2);
    pixels=new unsigned char[length];
    buffer=new unsigned char[length];

    if(Img.format()!=QImage::Format_ARGB32) Img=Img.convertToFormat(QImage::Format_ARGB32);

    // Do each channel. This originally was in one loop with an "if" statement for each channel,but I unrolled it because a lot goes on and it needs any speed help it can get>:/ (mosfet)

    // Red
    (void)memset(pixels,0,length);
    j=w+2;
    for (y=0;y<h;++y,++j) {
        src=(QRgb*)Img.scanLine(y);
        ++j;
        for (x=w-1;x>=0;--x,++src,++j) pixels[j]=qRed(*src);
    }
    (void)memset(buffer,0,length);
    for (i=0;i<4;++i) {
        PrivateHull(X[i],Y[i],w,h,pixels,buffer,1);
        PrivateHull(-X[i],-Y[i],w,h,pixels,buffer,1);
        PrivateHull(-X[i],-Y[i],w,h,pixels,buffer,-1);
        PrivateHull(X[i],Y[i],w,h,pixels,buffer,-1);
    }
    j=w+2;
    for (y=0;y<h;++y,++j) {
        dest=(QRgb*)Img.scanLine(y);
        ++j;
        for (x=w-1;x>=0;--x,++dest,++j)*dest=qRgba(pixels[j],qGreen(*dest),qBlue(*dest),qAlpha(*dest));
    }

    // Green
    (void)memset(pixels,0,length);
    j=w+2;
    for (y=0;y<h;++y,++j) {
        src=(QRgb*)Img.scanLine(y);
        ++j;
        for (x=w-1;x>=0;--x,++src,++j) pixels[j]=qGreen(*src);
    }
    (void)memset(buffer,0,length);
    for (i=0;i<4;++i) {
        PrivateHull(X[i],Y[i],w,h,pixels,buffer,1);
        PrivateHull(-X[i],-Y[i],w,h,pixels,buffer,1);
        PrivateHull(-X[i],-Y[i],w,h,pixels,buffer,-1);
        PrivateHull(X[i],Y[i],w,h,pixels,buffer,-1);
    }
    j=w+2;
    for (y=0;y<h;++y,++j) {
        dest=(QRgb*)Img.scanLine(y);
        ++j;
        for (x=w-1;x>=0;--x,++dest,++j)*dest=qRgba(qRed(*dest),pixels[j],qBlue(*dest),qAlpha(*dest));
    }

    // Blue
    (void)memset(pixels,0,length);
    j=w+2;
    for (y=0;y<h;++y,++j) {
        src=(QRgb*)Img.scanLine(y);
        ++j;
        for (x=w-1;x>=0;--x,++src,++j) pixels[j]=qBlue(*src);
    }
    (void)memset(buffer,0,length);
    for (i=0;i<4;++i) {
        PrivateHull(X[i],Y[i],w,h,pixels,buffer,1);
        PrivateHull(-X[i],-Y[i],w,h,pixels,buffer,1);
        PrivateHull(-X[i],-Y[i],w,h,pixels,buffer,-1);
        PrivateHull(X[i],Y[i],w,h,pixels,buffer,-1);
    }
    j=w+2;
    for (y=0;y<h;++y,++j) {
        dest=(QRgb*)Img.scanLine(y);
        ++j;
        for (x=w-1;x>=0;--x,++dest,++j)*dest=qRgba(qRed(*dest),qGreen(*dest),pixels[j],qAlpha(*dest));
    }

    delete[] pixels;
    delete[] buffer;
    Img=Img.convertToFormat(QImage::Format_ARGB32_Premultiplied);
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>

QImage convolveInteger(QImage &Img,int matrix_size,int *matrix,int divisor) {
    int  i,x,y,w,h,matrix_x,matrix_y,*m;
    int  edge = matrix_size/2;
    QRgb *dest,*src,*s,**scanblock;

    w = Img.width();
    h = Img.height();
    if(w<3 || h<3) return(Img);

    QImage buffer(w,h,Img.format());
    scanblock = new QRgb* [matrix_size];

    int r,g,b;
    for (y=0;y < h;++y) {
        src = (QRgb *)Img.scanLine(y);
        dest = (QRgb *)buffer.scanLine(y);
        // Read in scanlines to pixel neighborhood. If the scanline is outside the image use the top or bottom edge.
        for (x=y-edge,i=0;x <= y+edge;++i,++x) scanblock[i] = (QRgb *)Img.scanLine((x < 0) ? 0 : (x > h-1) ? h-1 : x);

        // Now we are about to start processing scanlines. First handle the part where the pixel neighborhood extends off the left edge.
        for (x=0;x-edge<0;++x) {
            r = g = b = 0;
            m = matrix;
            for (matrix_y=0;matrix_y<matrix_size;++matrix_y) {
                s = scanblock[matrix_y];
                matrix_x = -edge;
                while (x+matrix_x < 0) {
                    CONVOLVE_ACC(*m,*s);
                    ++matrix_x;++m;
                }
                while (matrix_x <= edge) {
                    CONVOLVE_ACC(*m,*s);
                    ++matrix_x;++m;++s;
                }
            }
            r /= divisor;g /= divisor;b /= divisor;
            *dest++ = qRgba((unsigned char)qBound(0,r,255),(unsigned char)qBound(0,g,255),(unsigned char)qBound(0,b,255),qAlpha(*src++));
        }
        // Okay,now process the middle part where the entire neighborhood is on the image.
        for (;x+edge<w;++x) {
            r = g = b = 0;
            m = matrix;
            for (matrix_y=0;matrix_y<matrix_size;++matrix_y) {
                s = scanblock[matrix_y] + (x-edge);
                for (matrix_x=-edge;matrix_x<=edge;++matrix_x,++m,++s) {
                    CONVOLVE_ACC(*m,*s);
                }
            }
            r /= divisor;g /= divisor;b /= divisor;
            *dest++ = qRgba((unsigned char)qBound(0,r,255),(unsigned char)qBound(0,g,255),(unsigned char)qBound(0,b,255),qAlpha(*src++));
        }
        // Finally process the right part where the neighborhood extends off the right edge of the image
        for (;x<w;++x) {
            r = g = b = 0;
            m = matrix;
            for (matrix_y=0;matrix_y<matrix_size;++matrix_y) {
                s = scanblock[matrix_y];
                s += x-edge;
                matrix_x = -edge;
                while (x+matrix_x<w) {
                    CONVOLVE_ACC(*m,*s);
                    ++matrix_x,++m,++s;
                }
                --s;
                while (matrix_x<=edge) {
                    CONVOLVE_ACC(*m,*s);
                    ++matrix_x,++m;
                }
            }
            r /= divisor;g /= divisor;b /= divisor;
            *dest++ = qRgba((unsigned char)qBound(0,r,255),(unsigned char)qBound(0,g,255),(unsigned char)qBound(0,b,255),qAlpha(*src++));
        }
    }

    delete[] scanblock;
    return(buffer);
}

void FltAntialias(QImage &Img) {
    int matrix[] = {
        1,2,1,
        2,8,2,
        1,2,1
    };
    if(Img.format()!=QImage::Format_ARGB32) Img=Img.convertToFormat(QImage::Format_ARGB32);
    Img=convolveInteger(Img,3,matrix,20).convertToFormat(QImage::Format_ARGB32_Premultiplied);;
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>

float *GetBlurKernel(int &kernel_width,float sigma) {
    #define KernelRank 3

    float alpha,normalize,*kernel=NULL;
    int bias;
    long i;

    if (sigma==0.0) return(kernel);
    if (kernel_width==0) kernel_width=3;

    kernel=new float[kernel_width+1];
    memset(kernel,0,(kernel_width+1)*sizeof(float));
    bias = KernelRank*kernel_width/2;
    for (i=(-bias);i<=bias;++i) {
        alpha = exp(-((float) i*i)/(2.0*KernelRank*KernelRank*sigma*sigma));
        kernel[(i+bias)/KernelRank] += alpha/(M_SQ2PI*sigma);
    }

    normalize=0;
    for (i=0;i<kernel_width;++i) normalize+=kernel[i];
    for (i=0;i<kernel_width;++i) kernel[i]/=normalize;
    return(kernel);
}

void BlurScanLine(float *kernel,int kern_width,QRgb *source,QRgb *destination,int columns,int offset) {
    FloatPixel  aggregate,zero;
    float       scale,*k;
    QRgb        *src,*dest;
    int         i,x;

    memset(&zero,0,sizeof(FloatPixel));
    if (kern_width>columns) {
        for (dest=destination,x=0;x<columns;++x,dest+=offset) {
            aggregate = zero;
            scale = 0.0;
            k = kernel;
            src = source;
            for (i=0;i<columns;++k,src+=offset,i++) {
                if((i >= (x-kern_width/2)) && (i <= (x+kern_width/2))) {
                    aggregate.red  +=(*k)*qRed(*src);
                    aggregate.green+=(*k)*qGreen(*src);
                    aggregate.blue +=(*k)*qBlue(*src);
                    aggregate.alpha+=(*k)*qAlpha(*src);
                }
                if (((i+kern_width/2-x)>=0) && ((i+kern_width/2-x)<kern_width)) scale+=kernel[i+kern_width/2-x];
            }
            scale = 1.0/scale;
            *dest = qRgba((unsigned char)(scale*(aggregate.red+0.5)),(unsigned char)(scale*(aggregate.green+0.5)),(unsigned char)(scale*(aggregate.blue+0.5)),(unsigned char)(scale*(aggregate.alpha+0.5)));
        }
        return;
    }

    // blur
    for (dest=destination,x=0;x<kern_width/2;++x,dest+=offset) {
        aggregate = zero;// put this stuff in loop initializer once tested
        scale = 0.0;
        k = kernel+kern_width/2-x;
        src = source;
        for (i=kern_width/2-x;i<kern_width;++i,++k,src+=offset) {
            aggregate.red  +=(*k)*qRed(*src);
            aggregate.green+=(*k)*qGreen(*src);
            aggregate.blue +=(*k)*qBlue(*src);
            aggregate.alpha+=(*k)*qAlpha(*src);
            scale += (*k);
        }
        scale = 1.0/scale;
        *dest = qRgba((unsigned char)(scale*(aggregate.red+0.5)),(unsigned char)(scale*(aggregate.green+0.5)),(unsigned char)(scale*(aggregate.blue+0.5)),(unsigned char)(scale*(aggregate.alpha+0.5)));
    }
    for (;x<(columns-kern_width/2);++x,dest+=offset) {
        aggregate = zero;
        k = kernel;
        src = source+((x-kern_width/2)*offset);
        for (i=0;i<kern_width;++i,++k,src+=offset) {
            aggregate.red  +=(*k)*qRed(*src);
            aggregate.green+=(*k)*qGreen(*src);
            aggregate.blue +=(*k)*qBlue(*src);
            aggregate.alpha+=(*k)*qAlpha(*src);
        }
        *dest = qRgba((unsigned char)(aggregate.red+0.5),(unsigned char)(aggregate.green+0.5),(unsigned char)(aggregate.blue+0.5),(unsigned char)(aggregate.alpha+0.5));
    }
    for (;x<columns;++x,dest+=offset) {
        aggregate = zero;
        scale = 0;
        k = kernel;
        src = source+((x-kern_width/2)*offset);
        for (i=0;i<(columns-x+kern_width/2);++i,++k,src+=offset) {
            aggregate.red  +=(*k)*qRed(*src);
            aggregate.green+=(*k)*qGreen(*src);
            aggregate.blue +=(*k)*qBlue(*src);
            aggregate.alpha+=(*k)*qAlpha(*src);
            scale += (*k);
        }
        scale = 1.0/scale;
        *dest = qRgba((unsigned char)(scale*(aggregate.red+0.5)),(unsigned char)(scale*(aggregate.green+0.5)),(unsigned char)(scale*(aggregate.blue+0.5)),(unsigned char)(scale*(aggregate.alpha+0.5)));
    }
}

void FltGaussianBlur(QImage &Img,float radius,float sigma) {
    int kern_width,x,y,w,h;
    QRgb *src;
    float *k = NULL;

    if (sigma==0.0) return;

    if (Img.format()!=QImage::Format_ARGB32) Img=Img.convertToFormat(QImage::Format_ARGB32);

    // figure out optimal kernel width
    if (radius>0) {
        kern_width = (int)(2*ceil(radius)+1);
        k = GetBlurKernel(kern_width,sigma);
    } else {
        float *last_kernel = NULL;
        kern_width = 3;
        k = GetBlurKernel(kern_width,sigma);
        while ((long)(255*k[0])>0) {
            if (last_kernel!=NULL) delete[] last_kernel;
            last_kernel = k;
            kern_width += 2;
            k = GetBlurKernel(kern_width,sigma);
        }
        if(last_kernel!=NULL) {
            delete[] k;
            kern_width -= 2;
            k = last_kernel;
        }
    }

    // radius is too small!
    if (kern_width<3) return;

    // allocate destination image
    w = Img.width();
    h = Img.height();

    QImage buffer(w,h,Img.format());

    // blur image rows
    for (y=0;y < h;++y) BlurScanLine(k,kern_width,(QRgb *)Img.scanLine(y),(QRgb *)buffer.scanLine(y),Img.width(),1);

    // blur image columns
    src=(QRgb *)buffer.scanLine(0);
    for (x=0;x < w;++x) BlurScanLine(k,kern_width,src+x,src+x,Img.height(),Img.width());

    // finish up
    delete[] k;
    Img=buffer.convertToFormat(QImage::Format_ARGB32_Premultiplied);;
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>

QImage convolve(QImage &Img,int matrix_size,float *matrix) {
    int     i,x,y,w,h,matrix_x,matrix_y;
    int     edge = matrix_size/2;
    QRgb    *dest,*src,*s,**scanblock;
    float   *m,*normalize_matrix,normalize;

    // kernel width must be an odd number!
    if (!(matrix_size % 2)) return(Img);

    w = Img.width();
    h = Img.height();
    if (w < 3 || h < 3) return(Img);

    QImage buffer(w,h,Img.format());

    scanblock = new QRgb* [matrix_size];
    normalize_matrix = new float[matrix_size*matrix_size];

    // create normalized matrix
    normalize = 0.0;
    for (i=0;i<matrix_size*matrix_size;++i) normalize+=matrix[i];
    if (std::abs(normalize)<=M_EPSILON) normalize = 1.0;
    normalize=1.0/normalize;
    for (i=0;i<matrix_size*matrix_size;++i) normalize_matrix[i] = normalize*matrix[i];

    // apply
    float r,g,b;
    for (y=0;y < h;++y) {
        src = (QRgb *)Img.scanLine(y);
        dest = (QRgb *)buffer.scanLine(y);
        // Read in scanlines to pixel neighborhood. If the scanline is outside the image use the top or bottom edge.
        for (x=y-edge,i=0;x<=y+edge;++i,++x) scanblock[i]=(QRgb *)Img.scanLine((x<0)?0:(x>h-1)?h-1:x);

        // Now we are about to start processing scanlines. First handle the part where the pixel neighborhood extends off the left edge.
        for (x=0;x-edge<0;++x) {
            r=g=b=0.0;
            m=normalize_matrix;
            for (matrix_y=0;matrix_y<matrix_size;++matrix_y) {
                s = scanblock[matrix_y];
                matrix_x = -edge;
                while (x+matrix_x < 0) {
                    CONVOLVE_ACC(*m,*s);
                    ++matrix_x;++m;
                }
                while (matrix_x <= edge) {
                    CONVOLVE_ACC(*m,*s);
                    ++matrix_x;++m;++s;
                }
            }
            r = r < 0.0 ? 0.0 : r > 255.0 ? 255.0 : r+0.5;
            g = g < 0.0 ? 0.0 : g > 255.0 ? 255.0 : g+0.5;
            b = b < 0.0 ? 0.0 : b > 255.0 ? 255.0 : b+0.5;
            *dest++ = qRgba((unsigned char)r,(unsigned char)g,(unsigned char)b,qAlpha(*src++));
        }
        // Okay,now process the middle part where the entire neighborhood is on the image.
        for (;x+edge<w;++x) {
            m = normalize_matrix;
            r = g = b = 0.0;
            for (matrix_y=0;matrix_y<matrix_size;++matrix_y) {
                s = scanblock[matrix_y] + (x-edge);
                for (matrix_x = -edge;matrix_x <= edge;++matrix_x,++m,++s) {
                    CONVOLVE_ACC(*m,*s);
                }
            }
            r = r < 0.0 ? 0.0 : r > 255.0 ? 255.0 : r+0.5;
            g = g < 0.0 ? 0.0 : g > 255.0 ? 255.0 : g+0.5;
            b = b < 0.0 ? 0.0 : b > 255.0 ? 255.0 : b+0.5;
            *dest++ = qRgba((unsigned char)r,(unsigned char)g,(unsigned char)b,qAlpha(*src++));
        }
        // Finally process the right part where the neighborhood extends off the right edge of the image
        for (;x < w;++x) {
            r = g = b = 0.0;
            m = normalize_matrix;
            for (matrix_y = 0;matrix_y < matrix_size;++matrix_y) {
                s = scanblock[matrix_y];
                s += x-edge;
                matrix_x = -edge;
                while (x+matrix_x < w) {
                    CONVOLVE_ACC(*m,*s);
                    ++matrix_x,++m,++s;
                }
                --s;
                while (matrix_x <= edge) {
                    CONVOLVE_ACC(*m,*s);
                    ++matrix_x,++m;
                }
            }
            r = r < 0.0 ? 0.0 : r > 255.0 ? 255.0 : r+0.5;
            g = g < 0.0 ? 0.0 : g > 255.0 ? 255.0 : g+0.5;
            b = b < 0.0 ? 0.0 : b > 255.0 ? 255.0 : b+0.5;
            *dest++ = qRgba((unsigned char)r,(unsigned char)g,(unsigned char)b,qAlpha(*src++));
        }
    }

    delete[] scanblock;
    delete[] normalize_matrix;
    return(buffer);
}

void FltGaussianSharpen(QImage &Img,float radius,float sigma) {
    // Zero sigma is invalid!
    if(sigma == 0.0) return;

    int     matrix_size = defaultConvolveMatrixSize(radius,sigma);
    int     len = matrix_size*matrix_size;
    float   alpha,*matrix = new float[len];
    float   sigma2 = sigma*sigma*2.0;
    float   sigmaPI2 = 2.0*M_PI*sigma*sigma;
    int     half = matrix_size/2;
    int     x,y,i=0,j=half;
    float   normalize=0.0;

    for (y=(-half);y <= half;++y,--j) for (x=(-half);x <= half;++x,++i) {
        alpha = std::exp(-((float)x*x+y*y)/sigma2);
        matrix[i] = alpha/sigmaPI2;
        normalize += matrix[i];
    }
    matrix[i/2]=(-2.0)*normalize;

    if (Img.format()!=QImage::Format_ARGB32) Img=Img.convertToFormat(QImage::Format_ARGB32);
    QImage buffer(convolve(Img,matrix_size,matrix));
    delete[] matrix;
    Img=buffer.convertToFormat(QImage::Format_ARGB32_Premultiplied);;
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>

void FltEqualize(QImage &Img) {
    HistogramListItem   *histogram;
    IntegerPixel        *map;
    IntegerPixel        intensity, high, low;
    CharPixel           *equalize_map;
    int                 i, count;
    QRgb                pixel, *dest;
    unsigned char       r, g, b;

    if (Img.format()!=QImage::Format_ARGB32) Img=Img.convertToFormat(QImage::Format_ARGB32);
    count       =Img.width()*Img.height();
    map         =new IntegerPixel[256];
    histogram   =new HistogramListItem[256];
    equalize_map=new CharPixel[256];

    // form histogram
    memset(histogram, 0, 256*sizeof(HistogramListItem));
    dest = (QRgb *)Img.bits();

    if(Img.format() == QImage::Format_ARGB32_Premultiplied){
        for(i=0; i < count; ++i, ++dest){
            pixel = ConvertFromPremult(*dest);
            histogram[qRed(pixel)].red++;
            histogram[qGreen(pixel)].green++;
            histogram[qBlue(pixel)].blue++;
            histogram[qAlpha(pixel)].alpha++;
        }
    } else {
        for(i=0; i < count; ++i){
            pixel = *dest++;
            histogram[qRed(pixel)].red++;
            histogram[qGreen(pixel)].green++;
            histogram[qBlue(pixel)].blue++;
            histogram[qAlpha(pixel)].alpha++;
        }
    }

    // integrate the histogram to get the equalization map
    memset(&intensity, 0, sizeof(IntegerPixel));
    for(i=0; i < 256; ++i){
        intensity.red += histogram[i].red;
        intensity.green += histogram[i].green;
        intensity.blue += histogram[i].blue;
        map[i] = intensity;
    }

    low =map[0];
    high=map[255];
    memset(equalize_map, 0, 256*sizeof(CharPixel));
    for(i=0; i < 256; ++i){
        if(high.red != low.red) equalize_map[i].red=(unsigned char)((255*(map[i].red-low.red))/(high.red-low.red));
        if(high.green != low.green) equalize_map[i].green=(unsigned char)((255*(map[i].green-low.green))/(high.green-low.green));
        if(high.blue != low.blue) equalize_map[i].blue=(unsigned char)((255*(map[i].blue-low.blue))/(high.blue-low.blue));
    }

    // stretch the histogram and write
    dest = (QRgb *)Img.bits();
    if(Img.format() == QImage::Format_ARGB32_Premultiplied){
        for(i=0; i < count; ++i, ++dest){
            pixel = ConvertFromPremult(*dest);
            r = (low.red != high.red) ? equalize_map[qRed(pixel)].red :qRed(pixel);
            g = (low.green != high.green) ? equalize_map[qGreen(pixel)].green :qGreen(pixel);
            b = (low.blue != high.blue) ?  equalize_map[qBlue(pixel)].blue :qBlue(pixel);
            *dest = ConvertToPremult(qRgba(r, g, b, qAlpha(pixel)));
        }
    } else {
        for(i=0; i < count; ++i){
            pixel = *dest;
            r = (low.red != high.red) ? equalize_map[qRed(pixel)].red:qRed(pixel);
            g = (low.green != high.green) ? equalize_map[qGreen(pixel)].green:qGreen(pixel);
            b = (low.blue != high.blue) ?  equalize_map[qBlue(pixel)].blue:qBlue(pixel);
            *dest++ = qRgba(r, g, b, qAlpha(pixel));
        }
    }

    delete[] histogram;
    delete[] map;
    delete[] equalize_map;
    Img=Img.convertToFormat(QImage::Format_ARGB32_Premultiplied);;
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>

void FltEmboss(QImage &Img, float radius, float sigma) {
    // Zero sigma is invalid!
    if(sigma == 0.0) return;

    int matrix_size = defaultConvolveMatrixSize(radius, sigma);
    int len = matrix_size*matrix_size;

    float alpha, *matrix = new float[len];
    float sigma2 = sigma*sigma*2.0;
    float sigmaPI2 = 2.0*M_PI*sigma*sigma;

    int half = matrix_size/2;
    int x, y, i=0, j=half;
    for(y=(-half); y <= half; ++y, --j){
        for(x=(-half); x <= half; ++x, ++i){
            alpha = std::exp(-((float)x*x+y*y)/sigma2);
            matrix[i]=((x < 0) || (y < 0) ? -8.0 : 8.0)*alpha/sigmaPI2;
            if(x == j) matrix[i]=0.0;
        }
    }
    if (Img.format()!=QImage::Format_ARGB32) Img=Img.convertToFormat(QImage::Format_ARGB32);
    QImage buffer(convolve(Img,matrix_size,matrix));
    delete[] matrix;
    FltEqualize(buffer);
    Img=buffer.convertToFormat(QImage::Format_ARGB32_Premultiplied);;
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>

void FltOilPaint(QImage &Img, float radius) {
    int             matrix_size = defaultConvolveMatrixSize(radius, 0.5);
    int             i, x, y, w, h, matrix_x, matrix_y;
    int             edge = matrix_size/2;
    unsigned int    max, value;
    QRgb            *dest,*s,**scanblock;

    w = Img.width();
    h = Img.height();
    if(w < 3 || h < 3) return;

    if (Img.format()!=QImage::Format_ARGB32) Img=Img.convertToFormat(QImage::Format_ARGB32);
    QImage buffer(w, h, Img.format());

    scanblock = new QRgb* [matrix_size];
    unsigned int *histogram = new unsigned int[256];

    for(y=0; y < h; ++y){
        dest = (QRgb *)buffer.scanLine(y);
        // Read in scanlines to pixel neighborhood. If the scanline is outside the image use the top or bottom edge.
        for(x=y-edge, i=0; x <= y+edge; ++i, ++x) scanblock[i] = (QRgb *)Img.scanLine((x < 0) ? 0 : (x > h-1) ? h-1 : x);

        // Now we are about to start processing scanlines. First handle the part where the pixel neighborhood extends off the left edge.
        for(x=0; x-edge < 0 ; ++x){
            (void)memset(histogram, 0, 256*sizeof(unsigned int));
            max = 0;
            for(matrix_y = 0; matrix_y < matrix_size; ++matrix_y){
                s = scanblock[matrix_y];
                matrix_x = -edge;
                while(x+matrix_x < 0){
                    value = qGray(*s);
                    histogram[value]++;
                    if(histogram[value] > max){
                        max = histogram[value];
                        *dest = *s;
                    }
                    ++matrix_x;
                }
                while(matrix_x <= edge){
                    value = qGray(*s);
                    histogram[value]++;
                    if(histogram[value] > max){
                        max = histogram[value];
                        *dest = *s;
                    }
                    ++matrix_x; ++s;
                }
            }
            ++dest;
        }

        // Okay, now process the middle part where the entire neighborhood is on the image.
        for(; x+edge < w; ++x){
            (void)memset(histogram, 0, 256*sizeof(unsigned int));
            max = 0;
            for(matrix_y = 0; matrix_y < matrix_size; ++matrix_y){
                s = scanblock[matrix_y] + (x-edge);
                for(matrix_x = -edge; matrix_x <= edge; ++matrix_x, ++s){
                    value = qGray(*s);
                    histogram[value]++;
                    if(histogram[value] > max){
                        max = histogram[value];
                        *dest = *s;
                    }
                }
            }
            ++dest;
        }

        // Finally process the right part where the neighborhood extends off the right edge of the image
        for(; x < w; ++x){
            (void)memset(histogram, 0, 256*sizeof(unsigned int));
            max = 0;
            for(matrix_y = 0; matrix_y < matrix_size; ++matrix_y){
                s = scanblock[matrix_y];
                s += x-edge;
                matrix_x = -edge;
                while(x+matrix_x < w){
                    value = qGray(*s);
                    histogram[value]++;
                    if(histogram[value] > max){
                        max = histogram[value];
                        *dest = *s;
                    }
                    ++matrix_x, ++s;
                }
                --s;
                while(matrix_x <= edge){
                    value = qGray(*s);
                    histogram[value]++;
                    if(histogram[value] > max){
                        max = histogram[value];
                        *dest = *s;
                    }
                    ++matrix_x;
                }
            }
            ++dest;
        }
    }

    delete[] histogram;
    delete[] scanblock;
    Img=buffer.convertToFormat(QImage::Format_ARGB32_Premultiplied);;
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>

class HSV {
public:
    HSV(){;}
    void convertRGB2HSV(unsigned int rgb);
    void convertRGB2HSV(int red, int green, int blue);
    void convertHSV2RGB(int hue, int saturation, int value);
    void convertHSV2RGB();
    inline void setHSV(int hue, int saturation, int value)  {h = hue; s = saturation; v = value;}
    inline void setHue(int hue)                             {h = hue;}
    inline void setSaturation(int saturation)               {s = saturation;}
    inline void setValue(int value)                         {v = value;}
    inline int hue()                                        {return(h);}
    inline int saturation()                                 {return(s);}
    inline int value()                                      {return(v);}
    inline void setRGB(int red, int green, int blue)        {r = red; g = green; b=blue;}
    inline void setRed(int red)                             {r = red;}
    inline void setGreen(int green)                         {g = green;}
    inline void setBlue(int blue)                           {b = blue;}
    inline int red()                                        {return(r);}
    inline int green()                                      {return(g);}
    inline int blue()                                       {return(b);}
private:
    int h, s, v;
    int r, g, b;
    int max, whatmax, min, delta;
    unsigned int f, p, q, t;
};

void HSV::convertRGB2HSV(unsigned int pixel) {
    convertRGB2HSV(qRed(pixel), qGreen(pixel), qBlue(pixel));
}

void HSV::convertRGB2HSV(int red, int green, int blue) {
    r = red; g = green; b = blue;
    h = 0;
    max = r;                               // maximum RGB component
    whatmax = 0;                            // r=>0, g=>1, b=>2
    if(g > max) { max = g; whatmax = 1; }
    if(b > max) { max = b; whatmax = 2; }
    min = r;                               // find minimum value
    if(g < min) min = g;
    if(b < min) min = b;
    delta = max-min;
    v = max;                                   // calc value
    s = max ? (510*delta+max)/(2*max) : 0;
    if (s==0) h=-1; else switch (whatmax) {  // undefined hue
        case 0: h=(g>=b)?    (120*(g-b)+delta)/(2*delta):300+(120*(g-b+delta)+delta)/(2*delta);     break; // red is max component
        case 1: h=(b> r)?120+(120*(b-r)+delta)/(2*delta):60 +(120*(b-r+delta)+delta)/(2*delta);     break; // green is max component
        case 2: h=(r> g)?240+(120*(r-g)+delta)/(2*delta):180+(120*(r-g+delta)+delta)/(2*delta);     break; // blue is max component
    }
}

void HSV::convertHSV2RGB(int hue, int saturation, int value) {
    h = hue; s = saturation; v = value;
    convertHSV2RGB();
}

void HSV::convertHSV2RGB() {
    if(h < -1 || s > 255 || v > 255) return;

    r = g = b = v;
    if(s > 0 && h != -1){
        if(h >= 360) h %= 360;
        f = h%60;
        h /= 60;
        p = (2*v*(255-s)+255)/510;
        if(h&1){
            q = (2*v*(15300-s*f)+15300)/30600;
            switch( h ) {
                case 1: r=q; g=v, b=p; break;
                case 3: r=p; g=q, b=v; break;
                case 5: r=v; g=p, b=q; break;
            }
        } else {
            t = (2*v*(15300-(s*(60-f)))+15300)/30600;
            switch( h ) {
                case 0: r=v; g=t, b=p; break;
                case 2: r=p; g=v, b=t; break;
                case 4: r=t; g=p, b=v; break;
            }
        }
    }
}

void FltDesaturate(QImage &Img, float desat) {
    desat = qBound(0.0f, desat, 1.0f);
    unsigned int *data, *end;
    HSV hsv;
    data = (unsigned int *)Img.scanLine(0);
    end = data + (Img.width()*Img.height());
    while(data != end) {
        hsv.convertRGB2HSV(ConvertFromPremult(*data));
        hsv.setSaturation((int)(hsv.saturation() * (1.0 - desat)));
        hsv.convertHSV2RGB();
        *data = ConvertToPremult(qRgba(hsv.red(), hsv.green(),hsv.blue(), qAlpha(*data)));
        ++data;
    }
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>

class Interpolate {
public:
    Interpolate(QImage *image, unsigned int background) {
        Img = image; ptr = Img->bits();
        colorTable = Img->colorTable();
        w=Img->width(); h=Img->height();
        bg=background; truecolor = Img->depth() > 8;
    }
    unsigned int interpolate(float x_offset, float y_offset);
    unsigned int interpolateBackground(float x_offset, float y_offset);
private:
    int w, h;
    unsigned int p, q, r, s, bg;
    unsigned char *ptr;
    QVector<QRgb> colorTable;
    bool truecolor;
    QImage *Img;
};

unsigned int Interpolate::interpolate(float x_offset,float y_offset) {
    int x = qBound(0, (int)x_offset, w-2);
    int y = qBound(0, (int)y_offset, h-2);

    if (truecolor) {
        p = *(((QRgb *)ptr)+(y*w)+x);
        q = *(((QRgb *)ptr)+(y*w)+x+1);
        r = *(((QRgb *)ptr)+((y+1)*w)+x);
        s = *(((QRgb *)ptr)+((y+1)*w)+x+1);
    } else {
        p = colorTable[*(ptr+(y*w)+x)];
        q = colorTable[*(ptr+(y*w)+x+1)];
        r = colorTable[*(ptr+((y+1)*w)+x)];
        s = colorTable[*(ptr+((y+1)*w)+x+1)];
    }
    x_offset -= std::floor(x_offset); y_offset -= std::floor(y_offset);
    unsigned int alpha = (unsigned int)(255*x_offset);
    unsigned int beta = (unsigned int)(255*y_offset);

    p = interpolate255(p, 255-alpha, q, alpha);
    r = interpolate255(r, 255-alpha, s, alpha);
    return(interpolate255(p, 255-beta, r, beta));
}

unsigned int Interpolate::interpolateBackground(float x_offset,float y_offset) {
    int x = (int)x_offset;
    int y = (int)y_offset;
    p = q = r = s = bg;

    if(truecolor){
        if(y >= 0 && y < h && x >= 0 && x < w){
            p = *(((QRgb *)ptr)+(y*w)+x);
            if(y+1 < h) r = *(((QRgb *)ptr)+((y+1)*w)+x);
            if(x+1 < w){
                q = *(((QRgb *)ptr)+(y*w)+x+1);
                if(y+1 < h) q = *(((QRgb *)ptr)+((y+1)*w)+x+1);
            }
        }
    } else {
        if(y >= 0 && y < h && x >= 0 && x < w){
            p = colorTable[*(ptr+(y*w)+x)];
            if(y+1 < h) r = colorTable[*(ptr+((y+1)*w)+x)];
            if(x+1 < w){
                q = colorTable[*(ptr+(y*w)+x+1)];
                if(y+1 < h) s = colorTable[*(ptr+((y+1)*w)+x+1)];
            }
        }
    }
    x_offset -= std::floor(x_offset); y_offset -= std::floor(y_offset);
    unsigned int alpha = (unsigned int)(255*x_offset);
    unsigned int beta = (unsigned int)(255*y_offset);

    p = interpolate255(p, 255-alpha, q, alpha);
    r = interpolate255(r, 255-alpha, s, alpha);
    return(interpolate255(p, 255-beta, r, beta));
}

void FltSwirl(QImage &Img, float degrees) {
    float   sine, cosine, distance, radius, factor;
    float   x_center, x_distance, x_scale;
    float   y_center, y_distance, y_scale;
    int     x, y, w, h;
    QRgb    *dest;

    w = Img.width();
    h = Img.height();

    if (Img.format()!=QImage::Format_ARGB32) Img=Img.convertToFormat(QImage::Format_ARGB32);
    QImage buffer(w, h,QImage::Format_RGB32);

    x_center = w/2.0;
    y_center = h/2.0;
    radius = qMax(x_center, y_center);
    x_scale = y_scale = 1.0;
    if (w > h) y_scale = (float)(w/h); else if (w < h) x_scale = (float)(h/w);
    degrees = (M_PI*degrees)/180.0;

    Interpolate interpolate(&Img, 0);
    QRgb *src;
    for (y=0; y < h; ++y) {
        src = (QRgb *)Img.scanLine(y);
        dest = (QRgb *)buffer.scanLine(y);
        y_distance = y_scale*(y-y_center);
        for (x=0; x < w; ++x) {
            x_distance = x_scale*(x-x_center);
            distance = x_distance*x_distance + y_distance*y_distance;
            if (distance >= (radius*radius)) *dest = src[x]; else {
                factor = 1.0-std::sqrt(distance)/radius;
                sine = std::sin(degrees*factor*factor);
                cosine = std::cos(degrees*factor*factor);
                *dest = interpolate.interpolate((cosine*x_distance-sine*y_distance)/x_scale+x_center,(sine*x_distance+cosine*y_distance)/y_scale+y_center);
            }
            ++dest;
        }
    }
    Img=buffer.convertToFormat(QImage::Format_ARGB32_Premultiplied);;
}

//**********************************************************************************************************************

// Adapt From QImageBlitz<http://qimageblitz.sourceforge.net/>

void FltImplode(QImage &Img, float amount) {
    float   distance, radius, factor;
    float   x_center, x_distance, x_scale;
    float   y_center, y_distance, y_scale;
    int     x, y, w, h;
    QRgb    *dest;

    w = Img.width();
    h = Img.height();

    if (Img.format()!=QImage::Format_ARGB32) Img=Img.convertToFormat(QImage::Format_ARGB32);
    QImage buffer(w, h,QImage::Format_RGB32);

    x_scale = y_scale = 1.0;
    x_center = 0.5*w;
    y_center = 0.5*h;
    radius = x_center;
    if (w > h) y_scale = (float)(w/h); else if (w < h) {
        x_scale = (float)(h/w);
        radius = y_center;
    }

    Interpolate interpolate(&Img, 0);
    QRgb *src;
    for (y=0; y < h; ++y) {
        src = (QRgb *)Img.scanLine(y);
        dest = (QRgb *)buffer.scanLine(y);
        y_distance = y_scale*(y-y_center);
        for (x=0; x < w; ++x) {
            x_distance = x_scale*(x-x_center);
            distance = x_distance*x_distance + y_distance*y_distance;
            if (distance >= (radius*radius)) *dest = src[x]; else {
                factor = 1.0;
                if (distance > 0.0) factor = std::pow(std::sin(((float)M_PI)*std::sqrt(distance)/radius/2), -amount);
                *dest = interpolate.interpolate(factor*x_distance/x_scale+x_center,factor*y_distance/y_scale+y_center);
            }
            ++dest;
        }
    }
    Img=buffer.convertToFormat(QImage::Format_ARGB32_Premultiplied);;
}
