//TODO: Add timer that burns the window.
    //Add some persistence.



const { app, BrowserWindow } = require('electron')


//===================================
//      Window creation             |
//===================================
function createWindow () {
    const win = new BrowserWindow({
        width: 300,
        height: 600
    })

    win.loadFile('index.html')
}


//===================================
//     App Lifecycle handling       |
//===================================

//App startup
/*
app.whenReady().then(() => {
    createWindow()
})
 */

//Non-MacOS close procedure
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

//For MacOS
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
