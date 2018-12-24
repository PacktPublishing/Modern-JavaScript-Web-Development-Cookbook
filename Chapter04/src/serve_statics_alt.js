/* @flow */
"use strict";

const express = require("express");
const app = express();

const path = require("path");

const flagsPath = path.join(__dirname, "../flags");

app.get("/uruguay", (req, res) =>
    res.sendFile(`${flagsPath}/america/south/UY.png`)
);

app.get("/england", (req, res) =>
    res.sendFile(`${flagsPath}/europe/GB.png`)
);

app.get("/license", (req, res) =>
    res.sendFile(`${flagsPath}/license.txt`)
);

app.use((err, req, res, next) => {
    console.error("Error....", err.message);
    res.status(500).send("INTERNAL SERVER ERROR");
});

app.listen(8080, () =>
    console.log(
        "Mini Express static server ready at http://localhost:8080/!"
    )
);
