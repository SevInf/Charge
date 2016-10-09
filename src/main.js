const electron = require('electron');

const BrowserWindow = electron.BrowserWindow;

electron.app.on('ready', () => {
    const mainWindow = new BrowserWindow();

    mainWindow.loadURL(`file://${__dirname}/app.html`)
});
