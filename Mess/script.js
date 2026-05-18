const { BrowserWindow } = require('electron')

const win = new BrowserWindow();

win.loadFile("login.html");