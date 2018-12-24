/* @flow */
"use strict";

const fs = require("fs");

process.on("message", obj => {
    // Received a path to process
    fs
        .readdirSync(obj.path)
        .sort((a, b) => a.localeCompare(b, [], { sensitivity: "base" }))
        .filter(file => !file.startsWith("."))
        .forEach(file => process.send && process.send(file));
});
