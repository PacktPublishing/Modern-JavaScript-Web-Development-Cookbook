/* @flow */
"use strict";

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Server alive, with Express!"));

app.listen(8080, () =>
    console.log(
        "Mini server (with Express) ready at http://localhost:8080/!"
    )
);
