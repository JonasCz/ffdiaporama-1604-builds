Readme file for ffDiaporama WIKI

In this file you can find explanations on how is built the ffDiaporama's WIKI and how are made ​​and managed translations of this WIKI.

1. Functional principle

    The ffDiaporama's WIKI is constructed as a standard QT documentation.
    It is based on the QT Assistant software (see: http://qt-project.org/doc/qt-5.0/qtassistant/assistant-details.html)

    The WIKI is composed of a couple of file:
    - wiki_[language].qch -> contain the WIKI
    - wiki_[language].qhc -> contain the collection definition for qtassistant

    Those two files are localised, that is defined for each language.
    For examples:
    - wiki_en.qch and wiki_en.qhc for English
    - wiki_fr.qch and wiki_fr.qhc for French
    - and so on

    These files are stored in the locale ffDiaporama's sub-directory and are used by ffDiaporama as follows:
    - When ffDiaporama needs to display a help page, it launches QT Assistant
    - If a couple of file using the same local as the interface is present in the locale sub-subdirectory:
        then it asks QT Assistant to open that file
        otherwise it asks QT Assistant to open the en files version (English)
    - It asks QT Assistant to open the corresponding page


2. Composition of the WIKI

    The WIKI is, in fact, a Full WEB site.
    It consists of html pages and an index definition file. This index is used by QT Assistant to display the tree in the Component tab.

    To avoid having to translate the name of the Web pages, all pages are numbered.
    WIKI, in all languages​​, use the same page name : the same page number.

    That is why the WIKI Web site looks like this:
        main.html               -> This is the main page of the WIKI, which appears when you click on the Help button in the main window
        xxxx.html               -> These are the help pages of the WIKI
        wiki_[language].qhcp    -> Source file of collection definition for qtassistant
        wiki_[language].qhp     -> WIKI index source file

    These files are compiled (make) to generate couple of file used by QT Assistant, using :
        qhelpgenerator to produce QCH files
        qcollectiongenerator to produce QHC files

    In addition to these files, the WIKI also includes:
        img         -> a symlink to the ffDiaporama's img folder.
                        This folder contains all the images and icons used by make to produce ffDiaporama ressource file.
                        This makes sure to use the same images in the help in the application.
        wiki_img    -> a sub-directory containing images used only by the wiki (like screenshots)


3. Construction and management of the WIKI

    The WIKI is composed of a single web site. This Web site is written in English only.

    We use a programe called WikiMake to translate this Web site.

    WikiMake is developed specifically for the ffDiaporama's Wiki. It is part of the ffDiaporama source code.
    (WikiMake source code is available in the ffDiaporama .tar.gz file and is store in the src/WikiMake subdirectory)

    Linux users have to compile WikiMake. To do this, enter the following commands:
        qmake wikimake.pro
        make
        make install
	For Windows users, a 32 bit .exe version is included in the .tar.gz
		
    Note that if your computer is not equip with Qt 5 but with Qt 4, you have to use the command "qmake-qt4 wikimake.pro" instead of "qmake wikimake.pro"
    Note that the "make install" command must be use without "sudo". You must launch it as a user because it install the binary file in the source directory
    of the ffdiaporama's wiki and not in a system directory.

    In addition to WikiMake, we also use:
        lupdate             -> A tools from the standard QT Linguist package used to produce .ts files
        lrelease            -> A tools from the standard QT Linguist package used to produce .qm files
        UpdateTSFiles.bash  -> A "Linux bash" script developped for ffDiaporama and used to produce .ts files
        UpdateQMFiles.bash  -> A "Linux bash" script developped for ffDiaporama and used to produce localized version of the WIKI
        UpdateTSFiles.cmd   -> A "Windows command" script developped for ffDiaporama and used to produce .ts files
        UpdateQMFiles.cmd   -> A "Windows command" script developped for ffDiaporama and used to produce localized version of the WIKI
		PREPLANGUAGE.cmd    -> A "Windows command" sub-script developped for ffDiaporama and used to produce localized version of the WIKI

    The principle is as follows:
        Launch UpdateTSFiles script to produce the .ts files
        Contributors translate .ts files
        Launch UpdateQMFiles script to produce localized version of the WIKI Web site based on .ts file and compile couple of files .QCH and .QHC

    How UpdateTSFiles works?
        UpdateTSFiles use WikiMake in fake mode to produce a fake.cpp file and then use lupdate to create and update .ts files.
            The fake.cpp file is stored into the fake project.
                This project is used only with lupdate to produce .ts files and must not be compiled.
                The file fake.pro contains the list of .ts files to produce.
            .ts files are stored into the Wiki sub-folder

            Remark: To add a new language, simply add a line corresponding to this language in this fake.pro file.

        The fake.cpp file produce by UpdateTSFiles contains sentences to translate :
            - WikiMake scan all html and qch files to identify text.
            - WikiMake ignore some html tags that were included in sentences (<a> tag and format tags like <b>, <i>, <u>, etc...)
        Because WikiMake is a small tools, it's necessary html files used only simple html syntaxe : no script and less as possible span and div

    UpdateQMFiles works?
        UpdateQMFiles use lrelease to release each .ts file to corresponding .qm files.
        Then, for each language :
            - it launch WikiMake in make mode to produce localized version of the Web site :
                - a folder named with the language name is create
                - each html file from the en folder are translated into this localized folder
                - .qhcp and .qhp files from en folder are translated into this localized folder
            - it launch qhelpgenerator to produce QCH files and qcollectiongenerator to produce QHC files
            - it moves these two files into the ffDiaporama locale subfolder

        Remarks: 
			* To add a new language, simply add a line corresponding to this language in this UpdateQMFiles
			
			* Windows users must open Windows terminal "cmd" using the Run As Administrator command. 
				This is necessary because the script creates symbolic links during the compilation process
			
			* Windows users must modify UpdateTSFiles.cmd and UpdateQMFiles.cmd to indicate the path where QT is installed


4. Contributor's work

    Each contributor in charge of translating the Wiki must translate corresponding .ts file from the Wiki subdirectory using Qt Linguist.

    To test the result, a contributor can do this :
        - Release .ts file with Qt Linguist into the Wiki subdirectory.
        - Use this command to produce localized version of the Web site:
            cd Source/WIKI              -> where the sources files are stored.
            WikiMakeBin make=language   -> language must be one of the defines languages in the fake.pro file and in UpdateQMFiles file.

            For example : WikiMakeBin make=it will produce or update web site into the it sub-directory.
        - Use a web browser (firefox, chrome, etc...) to open the main.html file.

    To test final files, use this command:
        cd Source/locale                                -> where the sources files are stored.
        assistant -collectionFile wiki_language.qhc     -> language must be one of the defines languages in the fake.pro file and in UpdateQMFiles file.

        This will open WIKI in QT Assistant


5. Remarks
	Tools for Windows users were already been compiled and were included in the .tar.gz file
    Each sentences are sort by page number into .ts files
    Untranslated sentences are print on a yellow background into html files, so it's easy to find them into the pages.
    Pages that are "under construction" have a tag : They all starts with the display of the wiki_img/Work.png image.
        -> These pages must not been translated until they have this tag because they will be modified as soon as possible.
