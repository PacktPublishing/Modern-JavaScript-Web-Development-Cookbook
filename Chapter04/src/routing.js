/* @flow */
"use strict";

const express = require("express");
const app = express();

const myRouter = require("./router_home.js");

app.use("/", myRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    console.error("Error....", err.message);
    res.status(500).send("INTERNAL SERVER ERROR");
});

app.listen(8080, () =>
    console.log("Routing ready at http://localhost:8080")
);
