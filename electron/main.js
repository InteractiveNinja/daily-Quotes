const path = require('path');

const { app, ipcMain, BrowserWindow } = require('electron');
const acrylicWindow = require('electron-acrylic-window').BrowserWindow



function createWindow() {
  // Create the browser window.

  const win = (process.platform === 'darwin')? new BrowserWindow : new acrylicWindow({
    width: 700,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false

    },
    transparent: true,
    frame: false,
    vibrancy:{
      theme: "#22222200",
      effect: "blur",
      disableOnBlur: false
    }
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  (process.env.NODE_ENV != "prod")? win.loadURL("http://localhost:8080") : win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
  
  // Open the DevTools.
    if (process.env.NODE_ENV != "prod")win.webContents.openDevTools({ mode: 'detach' });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("killme",() =>{
  app.exit(0)
})


