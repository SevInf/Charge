const electron = require('electron');

const app = electron.app;
const ipcMain = electron.ipcMain;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
    const mainWindow = new BrowserWindow();

    mainWindow.loadURL(`file://${__dirname}/app.html`)
});

ipcMain.on('unread', (event, unread) => {
    app.setBadgeCount(unread);
});
