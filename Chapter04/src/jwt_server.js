/* @flow */
"use strict";

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const validateUser = require("./validate_user.js");

const SECRET_JWT_KEY = "modernJSbook";

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/public", (req, res) => {
    res.send("the /public endpoint needs no token!");
});

app.post("/gettoken", (req, res) => {
    validateUser(req.body.user, req.body.password, (idErr, userid) => {
        if (idErr !== null) {
            res.status(401).send(idErr);
        } else {
            jwt.sign(
                { userid },
                SECRET_JWT_KEY,
                { algorithm: "HS256", expiresIn: "1h" },
                (err, token) => res.status(200).send(token)
            );
        }
    });
});

app.use((req, res, next) => {
    // First check for the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).send("No token specified");
    }

    // Now validate the token itself
    const token = authHeader.split(" ")[1];

    jwt.verify(token, SECRET_JWT_KEY, (err, decoded) => {
        if (err) {
            // Token bad formed, or expired, or other problem
            return res.status(403).send("Token expired or not valid");
        } else {
            // Token OK; get the user id from it
            req.userid = decoded.userid;
            // Keep processing the request
            next();
        }
    });
});

app.get("/private", (req, res) => {
    res.send("the /private endpoint needs JWT, but it was provided: OK!");
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    console.error("Error....", err.message);
    res.status(500).send("INTERNAL SERVER ERROR");
});

app.listen(8080, () =>
    console.log("Mini JWT server ready, at http://localhost:8080/!")
);
