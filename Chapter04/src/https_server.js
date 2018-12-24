/* @flow */
"use strict";

const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const path = require("path");

const keysPath = path.join(__dirname, "../../certificates");
const ca = fs.readFileSync(`${keysPath}/modernjsbook.csr`);
const cert = fs.readFileSync(`${keysPath}/modernjsbook.crt`);
const key = fs.readFileSync(`${keysPath}/modernjsbook.key`);

https.createServer({ ca, cert, key }, app).listen(8443);

app.get("/", (req, res) => res.send("Secure server!"));
