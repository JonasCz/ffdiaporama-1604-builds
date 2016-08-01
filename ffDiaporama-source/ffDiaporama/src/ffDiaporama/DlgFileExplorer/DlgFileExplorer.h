#ifndef DLGFILEEXPLORER_H
#define DLGFILEEXPLORER_H

// Basic inclusions (common to all files)
#include "CustomCtrl/_QCustomDialog.h"

namespace Ui {
class DlgFileExplorer;
}

class DlgFileExplorer : public QCustomDialog {
Q_OBJECT
public:
    explicit                DlgFileExplorer(BROWSER_TYPE_ID BrowserType,bool AllowMultipleSelection,bool AllowDragDrop,bool AllowAddToProject,QString BoxTitle,cApplicationConfig *ApplicationConfig,QWidget *parent=0);
    virtual                 ~DlgFileExplorer();
    
    // function to be overloaded
    virtual void            DoInitDialog();                             // Initialise dialog
    virtual bool            DoAccept();                                 // Call when user click on Ok button
    virtual void            DoRejet()           {/*Nothing to do*/}     // Call when user click on Cancel button
    virtual void            PrepareGlobalUndo() {/*Nothing to do*/}     // Initiale Undo
    virtual void            DoGlobalUndo()      {/*Nothing to do*/}     // Apply Undo : call when user click on Cancel button

    QStringList             GetCurrentSelectedFiles();

private slots:
    void                    RefreshControls();
    void                    OpenFile();

private:
    Ui::DlgFileExplorer *ui;
};

#endif // DLGFILEEXPLORER_H
