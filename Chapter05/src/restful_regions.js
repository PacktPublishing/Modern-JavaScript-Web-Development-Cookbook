/* @flow */
"use strict";

const getRegion = async (
    res: any,
    dbConn: any,
    country: ?string,
    region: ?string
) => {
    try {
        let sqlQuery = "";
        if (country == null) {
            sqlQuery = `
                SELECT rr.* 
                FROM regions rr 
                JOIN countries cc 
                ON cc.countryCode=rr.countryCode
                ORDER BY cc.countryCode, rr.regionCode
        `;
        } else if (region == null) {
            sqlQuery = `
                SELECT 1
                FROM countries
                WHERE countryCode="${country}"
            `;

            const countries = await dbConn.query(sqlQuery);
            if (countries.length === 0) {
                return res.status(404).send("Country not found");
            }

            sqlQuery = `
                SELECT rr.* 
                FROM regions rr 
                JOIN countries cc 
                ON cc.countryCode=rr.countryCode
                WHERE rr.countryCode="${country}"
                ORDER BY rr.regionCode
            `;
        } else {
            sqlQuery = `
                SELECT rr.* 
                FROM regions rr 
                JOIN countries cc 
                ON cc.countryCode=rr.countryCode
                WHERE rr.countryCode="${country}" 
                AND rr.regionCode="${region}"
            `;
        }

        res.set("Connection", "close");

        const regions = await dbConn.query(sqlQuery);
        if (regions.length > 0 || region === null) {
            res.status(200)
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
            WHERE countryCode="${country}" 
            AND regionCode="${region}" 
            LIMIT 1     
        `;
        const cities = await dbConn.query(sqlCities);
        if (cities.length > 0) {
            res.status(405).send("Cannot delete a region with cities");
        } else {
            const deleteRegion = `
                DELETE FROM regions 
                WHERE countryCode="${country}" 
                AND regionCode="${region}"
            `;

            const result = await dbConn.query(deleteRegion);
            if (result.info.affectedRows > 0) {
                res.status(204).send();
            } else {
                res.status(404).send("Region not found");
            }
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
        return res.status(400).send("Missing name");
    }

    try {
        const sqlCountry = `
            SELECT 1 
            FROM countries
            WHERE countryCode="${country}" 
        `;
        const countries = await dbConn.query(sqlCountry);
        if (countries.length === 0) {
            res.status(403).send("Country must exist");
        }

        const sqlGetId = `
            SELECT MAX(CAST(regionCode AS INTEGER)) AS maxr 
            FROM regions
            WHERE countryCode="${country}" 
        `;
        const regions = await dbConn.query(sqlGetId);
        const newId =
            regions.length === 0 ? 1 : 1 + Number(regions[0].maxr);

        const sqlAddRegion = `
            INSERT INTO regions SET 
            countryCode="${country}",
            regionCode="${newId}",
            regionName="${name}"
        `;

        const result = await dbConn.query(sqlAddRegion);
        if (result.info.affectedRows > 0) {
            res.status(201)
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
        return res.status(400).send("Missing name");
    }

    try {
        const sqlUpdateRegion = `
            UPDATE regions
            SET regionName="${name}"
            WHERE countryCode="${country}" 
            AND regionCode="${region}" 
        `;

        const result = await dbConn.query(sqlUpdateRegion);

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
