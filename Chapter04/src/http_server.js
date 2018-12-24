/* @flow */
"use strict";

const express = require("express");
const app = express();
const http = require("http");

http.createServer(app).listen(8080);

app.use((req, res, next) => {
    if (req.secure) {
        next();
    } else {
        res.redirect(
            `https://${req.headers.host.replace(/8080/, "8443")}${req.url}`
        );
    }
});
