/* @flow */
"use strict";

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const dbConn = require("./restful_db.js");
const validateUser = require("./validate_user.js");

const SECRET_JWT_KEY = "modernJSbook";

const https = require("https");
const fs = require("fs");
const path = require("path");
const keysPath = path.join(__dirname, "../../certificates");
const ca = fs.readFileSync(`${keysPath}/modernjsbook.csr`);
const cert = fs.readFileSync(`${keysPath}/modernjsbook.crt`);
const key = fs.readFileSync(`${keysPath}/modernjsbook.key`);

https.createServer({ ca, cert, key }, app);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) =>
    res
        .status(200)
        .set("Connection", "close")
        .send("Ready")
);

app.post("/gettoken", (req, res) => {
    validateUser(req.body.user, req.body.password, (idErr, userid) => {
        res.set("Connection", "close");

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
    res.set("Connection", "close");

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

const {
    getCountry,
    deleteCountry,
    putCountry
} = require("./restful_countries.js");

app.get("/countries", (req, res) => getCountry(res, dbConn));

app.get("/countries/:country", (req, res) =>
    getCountry(res, dbConn, req.params.country)
);

app.delete("/countries/:country", (req, res) =>
    deleteCountry(res, dbConn, req.params.country)
);

// We don't allow a POST to /countries

app.put("/countries/:country", (req, res) =>
    putCountry(res, dbConn, req.params.country, req.body.name)
);

const {
    getRegion,
    deleteRegion,
    postRegion,
    putRegion
} = require("./restful_regions.js");

app.get("/regions", (req, res) => getRegion(res, dbConn));

app.get("/regions/:country", (req, res) =>
    getRegion(res, dbConn, req.params.country)
);

app.get("/regions/:country/:region", (req, res) =>
    getRegion(res, dbConn, req.params.country, req.params.region)
);

app.delete("/regions/:country/:region", (req, res) =>
    deleteRegion(res, dbConn, req.params.country, req.params.region)
);

app.post("/regions/:country", (req, res) =>
    postRegion(res, dbConn, req.params.country, req.body.name)
);

app.put("/regions/:country/:region", (req, res) =>
    putRegion(
        res,
        dbConn,
        req.params.country,
        req.params.region,
        req.body.name
    )
);

const {
    getCity,
    deleteCity,
    postCity,
    putCity
} = require("./restful_cities.js");

// We do not allow calling /cities to get every city in the world

app.get("/cities/:city", (req, res) =>
    getCity(res, dbConn, req.params.city)
);

app.delete("/cities/:city", (req, res) =>
    deleteCity(res, dbConn, req.params.city)
);

app.post("/cities/:city", (req, res) =>
    postCity(
        res,
        dbConn,
        req.body.name,
        req.body.latitude,
        req.body.longitude,
        req.body.population,
        req.body.country,
        req.body.region
    )
);

app.put("/cities/:city", (req, res) =>
    putCity(
        res,
        dbConn,
        req.params.city,
        req.body.name,
        req.body.latitude,
        req.body.longitude,
        req.body.population,
        req.body.country,
        req.body.region
    )
);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    console.error("Error....", err.message);
    res.status(500).send("INTERNAL SERVER ERROR");
});

app.listen(8443, () =>
    console.log("Server ready at http://localhost:8443")
);
