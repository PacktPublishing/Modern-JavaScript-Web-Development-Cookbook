/* @flow */
"use strict";

// eslint-disable

const getCity = async (res: any, dbConn: any, city: string) => {
    try {
        res.set("Connection", "close");

        let sqlQuery = "";
        sqlQuery = `
                SELECT * 
                FROM cities 
                WHERE cityId=?
            `;

        const cities = await dbConn.query(sqlQuery, [city]);
        if (cities.length === 0) {
            res.status(404).send("City not found");
        } else {
            res
                .status(200)
                .set("Content-Type", "application/json")
                .send(JSON.stringify(cities));
        }
    } catch (e) {
        res.status(500).send("Server error");
    }
};

const deleteCity = async (res: any, dbConn: any, city: string) => {
    try {
        res.set("Connection", "close");

        const deleteCity = `
            DELETE FROM cities 
            WHERE cityId=? 
        `;

        const result = await dbConn.query(deleteCity, [city]);
        if (result.info.affectedRows > 0) {
            res.status(204).send();
        } else {
            res.status(404).send("City not found");
        }
    } catch (e) {
        res.status(500).send("Server error");
    }
};

const postCity = async (
    res: any,
    dbConn: any,
    name: string,
    latitude: number,
    longitude: number,
    population: number,
    country: string,
    region: string
) => {
    res.set("Connection", "close");

    if (!name) {
        res.status(400).send("Missing name");
        return;
    }

    try {
        const sqlRegion = `
            SELECT 1 
            FROM regions
            WHERE countryCode=? AND regionCode=?
        `;
        const regions = await dbConn.query(sqlRegion, [country, region]);
        if (regions.length === 0) {
            res.status(403).send("Region must exist");
            return;
        }

        const sqlGetId = `
            SELECT MAX(CAST(cityId AS INTEGER)) AS maxr 
            FROM cities
        `;
        const cities = await dbConn.query(sqlGetId);
        const newId = cities.length === 0 ? 1 : 1 + Number(cities[0].maxr);

        const sqlAddCity = `
            INSERT INTO cities SET 
            cityId=?
            cityName=?,
            latitude=?,
            longitude=?,
            population=?,
            countryCode=?,
            regionCode=?
        `;

        const result = await dbConn.query(sqlAddCity, [
            newId,
            name,
            latitude,
            longitude,
            population,
            country,
            region
        ]);
        if (result.info.affectedRows > 0) {
            res
                .status(201)
                .header("Location", `/cities/${newId}`)
                .send("City created");
        } else {
            res.status(409).send("City not created");
        }
    } catch (e) {
        res.status(500).send("Server error");
    }
};

const putCity = async (
    res: any,
    dbConn: any,
    city: string,
    name: string,
    latitude: number,
    longitude: number,
    population: number,
    country: string,
    region: string
) => {
    res.set("Connection", "close");

    if (!name) {
        res.status(400).send("Missing name");
        return;
    }

    try {
        const sqlUpdateCity = `
            UPDATE cities
            SET             
                cityName=?,
                latitude=?,
                longitude=?,
                population=?,
                countryCode=?,
                regionCode=?
            WHERE cityId=? 
        `;

        const result = await dbConn.query(sqlUpdateCity, [
            name,
            latitude,
            longitude,
            population,
            country,
            region,
            city
        ]);

        if (result.info.affectedRows > 0) {
            res.status(204).send();
        } else {
            res.status(409).send("City not updated");
        }
    } catch (e) {
        res.status(500).send("Server error");
    }
};

module.exports = { getCity, deleteCity, postCity, putCity };
