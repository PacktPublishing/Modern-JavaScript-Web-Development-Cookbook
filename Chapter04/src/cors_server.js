/* @flow */
"use strict";

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("Server alive, with CORS!"));

app.listen(8080, () =>
    console.log("CORS server ready at http://localhost:8080/!")
);
