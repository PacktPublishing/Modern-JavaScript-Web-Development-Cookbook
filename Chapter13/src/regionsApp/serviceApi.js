/* @flow */

const electron = window.require("electron").remote;

// import axios from "axios";
const axios = electron.require("axios");

export const getCountriesAPI = () =>
    axios.get(`http://192.168.1.200:8080/countries`);

export const getRegionsAPI = (country: string) =>
    axios.get(`http://192.168.1.200:8080/regions/${country}`);

const fs = electron.require("fs");
export const writeFile = fs.writeFile.bind(fs);

/*
    ANOTHER EXAMPLE - list the directory for the code in this book

    const myDir = fs.readdirSync("/home/fkereki/JS_BOOK/modernjs");
    console.log("Project dir:", myDir.filter(x => !x.startsWith(".")));
*/

export const showSaveDialog = electron.dialog.showSaveDialog;

axios.originalGet = axios.get;
axios.get = (uri, options, ...args) =>
    axios.originalGet(uri, options, ...args).then(response => {
        console.log(`GET ${uri}`, {
            request: { uri, options, ...args },
            response
        });
        return response;
    });

console.log("ELECTRON", electron);

export const notifier = electron.require("node-notifier");
