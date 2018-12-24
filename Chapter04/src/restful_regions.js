/* @flow */
"use strict";

const getRegion = async (
    res: any,
    dbConn: any,
    country: ?string,
    region: ?string
) => {
    try {
        res.set("Connection", "close");

        let sqlQuery = "";
        let regions;
        if (country == null) {
            sqlQuery = `
                SELECT rr.* 
                FROM regions rr 
                JOIN countries cc 
                ON cc.countryCode=rr.countryCode
                ORDER BY cc.countryCode, rr.regionCode
            `;
            regions = await dbConn.query(sqlQuery);
        } else if (region == null) {
            sqlQuery = `
                SELECT 1
                FROM countries
                WHERE countryCode=?
            `;

            const countries = await dbConn.query(sqlQuery, [country]);
            if (countries.length === 0) {
                res.status(404).send("Country not found");
                return;
            }

            sqlQuery = `
                SELECT rr.* 
                FROM regions rr 
                JOIN countries cc 
                ON cc.countryCode=rr.countryCode
                WHERE rr.countryCode=?
                ORDER BY rr.regionCode
            `;
            regions = await dbConn.query(sqlQuery, [country]);
        } else {
            sqlQuery = `
                SELECT rr.* 
                FROM regions rr 
                JOIN countries cc 
                ON cc.countryCode=rr.countryCode
                WHERE rr.countryCode=? 
                AND rr.regionCode=?
            `;
            regions = await dbConn.query(sqlQuery, [country, region]);
        }

        if (regions.length > 0 || region === null) {
            res
                .status(200)
                .set("Content-Type", "application/json")
                .send(JSON.stringify(regions));
        } else {
            res.status(404).send("Not found");
        }
    } catch (e) {
        res.status(500).send("Server error");
    }
};

const deleteRegion = async (
    res: any,
    dbConn: any,
    country: string,
    region: string
) => {
    try {
        res.set("Connection", "close");

        const sqlCities = `
            SELECT 1 FROM cities 
            WHERE countryCode=? 
            AND regionCode=? 
            LIMIT 1     
        `;
        const cities = await dbConn.query(sqlCities, [country, region]);
        if (cities.length > 0) {
            res.status(405).send("Cannot delete a region with cities");
            return;
        }

        const deleteRegion = `
                DELETE FROM regions 
                WHERE countryCode=? 
                AND regionCode=?
            `;

        const result = await dbConn.query(deleteRegion, [country, region]);
        if (result.info.affectedRows > 0) {
            res.status(204).send();
        } else {
            res.status(404).send("Region not found");
        }
    } catch (e) {
        res.status(500).send("Server error");
    }
};

const postRegion = async (
    res: any,
    dbConn: any,
    country: string,
    name: string
) => {
    res.set("Connection", "close");

    if (!name) {
        res.status(400).send("Missing name");
        return;
    }

    try {
        const sqlCountry = `
            SELECT 1 
            FROM countries
            WHERE countryCode=? 
        `;
        const countries = await dbConn.query(sqlCountry, [country]);
        if (countries.length === 0) {
            res.status(403).send("Country must exist");
            return;
        }

        const sqlGetId = `
            SELECT MAX(CAST(regionCode AS INTEGER)) AS maxr 
            FROM regions
            WHERE countryCode=? 
        `;
        const regions = await dbConn.query(sqlGetId, [country]);
        const newId =
            regions.length === 0 ? 1 : 1 + Number(regions[0].maxr);

        const sqlAddRegion = `
            INSERT INTO regions SET 
            countryCode=?,
            regionCode=?,
            regionName=?
        `;

        const result = await dbConn.query(sqlAddRegion, [
            country,
            newId,
            name
        ]);
        if (result.info.affectedRows > 0) {
            res
                .status(201)
                .header("Location", `/regions/${country}/${newId}`)
                .send("Region created");
        } else {
            res.status(409).send("Region not created");
        }
    } catch (e) {
        res.status(500).send("Server error");
    }
};

const putRegion = async (
    res: any,
    dbConn: any,
    country: string,
    region: string,
    name: string
) => {
    res.set("Connection", "close");

    if (!name) {
        res.status(400).send("Missing name");
        return;
    }

    try {
        const sqlUpdateRegion = `
            UPDATE regions
            SET regionName=?
            WHERE countryCode=? 
            AND regionCode=? 
        `;

        const result = await dbConn.query(sqlUpdateRegion, [
            name,
            country,
            region
        ]);

        if (result.info.affectedRows > 0) {
            res.status(204).send();
        } else {
            res.status(409).send("Region not updated");
        }
    } catch (e) {
        res.status(500).send("Server error");
    }
};

module.exports = { getRegion, deleteRegion, postRegion, putRegion };
