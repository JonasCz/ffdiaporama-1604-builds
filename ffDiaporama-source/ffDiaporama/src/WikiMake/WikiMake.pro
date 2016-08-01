CONFIG   += qt console
CONFIG   -= app_bundle

TARGET = WikiMakeBin
TEMPLATE = app

SOURCES += main.cpp

TARGET.path   = ../../WIKI
TARGET.files  = $$TARGET
INSTALLS     += TARGET
