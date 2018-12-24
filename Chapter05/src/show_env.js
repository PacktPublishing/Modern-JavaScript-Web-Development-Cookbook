// flow()
"use strict";

const dotenv = require("dotenv");

console.log(process.env);

const dev = process.env.NODE_ENV || "development";
const isDev = dev === "development";

if (isDev) {
    dotenv.load();
}
