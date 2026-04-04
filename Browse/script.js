const { BrowserWindow } = require('electron')

const win = new BrowserWindow();

win.loadFile("main.html");