/* @flow */
"use strict";

const express = require("express");

const routerHome = express.Router();

const routerCountries = require("./router_countries.js");
const routerRegions = require("./router_regions.js");
const routerCities = require("./router_cities.js");

routerHome.use("/countries", routerCountries);
routerHome.use("/regions", routerRegions);
routerHome.use("/cities", routerCities);

module.exports = routerHome;
