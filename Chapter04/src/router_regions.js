/* @flow */
"use strict";

const express = require("express");

const routerRegions = express.Router();

routerRegions.get("/", (req, res) => {
    res.send(`Region GET ALL... `);
});

routerRegions.get("/:country", (req, res) => {
    res.send(`Region GET ALL FOR Country=${req.params.country}`);
});

routerRegions.get("/:country/:id", (req, res) => {
    res.send(`Region GET ${req.params.country}/${req.params.id}`);
});

routerRegions.delete("/:country/:id", (req, res) => {
    res.send(`Region DELETE... ${req.params.country}/${req.params.id}`);
});

routerRegions.post("/", (req, res) => {
    res.send(`Region POST... `);
});

routerRegions.put("/:country/:id", (req, res) => {
    res.send(`Region PUT... ${req.params.country}/${req.params.id}`);
});

module.exports = routerRegions;
