/* @flow */
"use strict";

const getCountry = async (res: any, dbConn: any, country: ?string) => {
    try {
        res.set("Connection", "close");

        let sqlQuery = "";
        let countries;
        if (country == null) {
            sqlQuery = `
                SELECT cc.* 
                FROM countries cc 
                ORDER BY cc.countryCode
            `;
            countries = await dbConn.query(sqlQuery);
        } else {
            sqlQuery = `
                SELECT cc.* 
                FROM countries cc 
                WHERE cc.countryCode=? 
            `;
            countries = await dbConn.query(sqlQuery, [country]);
        }

        if (countries.length > 0) {
            res
                .status(200)
                .set("Content-Type", "application/json")
                .send(JSON.stringify(countries));
        } else {
            res.status(404).send("Not found");
        }
    } catch (e) {
        res.status(500).send("Server error");
    }
};

const deleteCountry = async (res: any, dbConn: any, country: string) => {
    try {
        res.set("Connection", "close");

        const sqlRegions = `
            SELECT 1 FROM regions 
            WHERE countryCode=? 
            LIMIT 1     
        `;
        const regions = await dbConn.query(sqlRegions, [country]);
        if (regions.length > 0) {
            res.status(405).send("Cannot delete a country with regions");
            return;
        }

        const deleteCountry = `
                DELETE FROM countries 
                WHERE countryCode=?
            `;

        const result = await dbConn.query(deleteCountry, [country]);
        if (result.info.affectedRows > 0) {
            res.status(204).send();
        } else {
            res.status(404).send("Country not found");
        }
    } catch (e) {
        res.status(500).send("Server error");
    }
};

const putCountry = async (
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
        const sqlInsertOrUpdateCountry = `
            INSERT INTO countries (countryCode, countryName)
            VALUES (?, ?)
            ON DUPLICATE KEY UPDATE
            countryName = ?
        `;

        const result = await dbConn.query(sqlInsertOrUpdateCountry, [
            country,
            name,
            name
        ]);

        if (result.info.affectedRows > 0) {
            res.status(204).send();
        } else {
            res.status(409).send("Country not updated");
        }
    } catch (e) {
        res.status(500).send("Server error");
    }
};

module.exports = { getCountry, deleteCountry, putCountry };
