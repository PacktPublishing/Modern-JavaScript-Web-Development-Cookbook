/* @flow */

const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        height: 768,
        width: 1024,
        icon: path.join(__dirname, "./build/r_icon.png")
    });
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "./build/index.html"),
            protocol: "file",
            slashes: true
        })
    );
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
