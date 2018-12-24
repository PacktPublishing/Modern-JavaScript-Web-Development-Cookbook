/* @flow */
"use strict";

const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => res.send("Server alive, with Express!"));

app.use(
    "/static",
    express.static(path.join(__dirname, "../flags"), {
        immutable: true,
        maxAge: "30 days"
    })
);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    console.error("Error....", err.message);
    res.status(500).send("INTERNAL SERVER ERROR");
});

app.listen(8080, () =>
    console.log(
        "Mini Express static server ready at http://localhost:8080/!"
    )
);
