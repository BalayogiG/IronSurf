// preload.js - Expose APIs for floating windows and window controls
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  openFloatingTab: (url) => ipcRenderer.send('open-floating-tab', url),
  minimize: () => ipcRenderer.send('minimize-window'),
  maximize: () => ipcRenderer.send('maximize-window'),
  close: () => ipcRenderer.send('close-app'),
  onInitURL: (callback) => ipcRenderer.on('init-url', (event, url) => callback(url))
});

