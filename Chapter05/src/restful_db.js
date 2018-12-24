/* @flow */
"use strict";

const mariaSQL = require("mariasql");
const { promisify } = require("util");

const DB_HOST = "127.0.0.1";
const DB_USER = "fkereki";
const DB_PASS = "modernJS!!";
const DB_SCHEMA = "world";

const getDbConnection = (host, user, password, db) => {
    const dbConn = new mariaSQL({ host, user, password, db });
    dbConn.query = promisify(dbConn.query);
    return dbConn;
};

const dbConn = getDbConnection(DB_HOST, DB_USER, DB_PASS, DB_SCHEMA);

module.exports = dbConn;
