/* @flow */
"use strict";

const express = require("express");
const app = express();

const helmet = require("helmet");
app.use(helmet());

app.get("/", (req, res) => res.send("Server alive, with Express!"));

app.listen(8081, () =>
    console.log(
        "Mini server (with Express) ready at http://localhost:8080/!"
    )
);
