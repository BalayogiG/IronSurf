// main.js
const { app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

function createWindow() { 
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    frame: false,
    icon: path.join(__dirname, 'logo.jpeg'),
    transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      webviewTag: true
    },
  });

  win.loadFile('index.html');
  ipcMain.on('close-app', () => win.close());
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
