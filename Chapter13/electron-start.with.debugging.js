/* @flow */

const { app, BrowserWindow } = require("electron");
const {
    default: installExtension,
    REACT_DEVELOPER_TOOLS,
    REDUX_DEVTOOLS
} = require("electron-devtools-installer");

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        height: 768,
        width: 1024,
        icon: "./src/regionsApp/r_icon.png"
    });
    mainWindow.loadURL("http://localhost:3000");

    mainWindow.webContents.openDevTools();

    installExtension(REACT_DEVELOPER_TOOLS)
        .then(name => console.log(`Added Extension:  ${name}`))
        .catch(err => console.log("An error occurred: ", err));

    installExtension(REDUX_DEVTOOLS)
        .then(name => console.log(`Added Extension:  ${name}`))
        .catch(err => console.log("An error occurred: ", err));

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
