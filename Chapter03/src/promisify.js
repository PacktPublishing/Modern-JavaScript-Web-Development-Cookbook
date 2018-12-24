/* @flow */
"use strict";

const fs = require("fs");
const util = require("util");

const FILE_TO_READ = "/home/fkereki/MODERNJS/chapter03/src/promisify.js"; // its own source!

// 1. Original error-first style callback

function showFileLength1(fileName: string): void {
    fs.readFile(fileName, "utf8", (err, text) => {
        if (err) {
            throw err;
        } else {
            console.log(`1. Reading, old style: ${text.length} bytes`);
        }
    });
}
showFileLength1(FILE_TO_READ);

// 2. Alternative style using promises

function showFileLength2(fileName: string): void {
    fs.readFile = util.promisify(fs.readFile);

    fs
        .readFile(fileName, "utf8")
        .then((text: string) => {
            console.log(`2. Reading with promises: ${text.length} bytes`);
        })
        .catch((err: mixed) => {
            throw err;
        });
}
showFileLength2(FILE_TO_READ);

// 3. Using async/await, and with an arrow function just for variety

const showFileLength3 = async (fileName: string) => {
    fs.readFile = util.promisify(fs.readFile);

    try {
        const text: string = await fs.readFile(fileName, "utf8");
        console.log(`3. Reading with async/await: ${text.length} bytes`);
    } catch (err) {
        throw err;
    }
};
showFileLength3(FILE_TO_READ);
