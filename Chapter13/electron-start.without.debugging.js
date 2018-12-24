/* @flow */

const { app, BrowserWindow } = require("electron");

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        height: 768,
        width: 1024
    });
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
};

app.on("ready", createWindow);

app.on("activate", () => mainWindow === null && createWindow());

app.on(
    "window-all-closed",
    () => process.platform !== "darwin" && app.quit()
);
