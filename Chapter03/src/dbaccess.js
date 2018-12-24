/* @flow */
"use strict";

const mariaSQL = require("mariasql");
const { promisify } = require("util");

const DB_HOST = "127.0.0.1";
const DB_USER = "fkereki";
const DB_PASS = "modernJS!!";
const DB_SCHEMA = "world";

async function tryDbAccess(dbConn) {
    try {
        const rows = await dbConn.query("SELECT 1960 AS someYear");
        console.log(`Year was ${rows[0].someYear}`);
    } catch (e) {
        console.log("Unexpected error", e);
    }
}

async function get10CountriesWithMoreCities(dbConn) {
    try {
        const myQuery = `SELECT 
		    CI.countryCode, 
		    CO.countryName, 
		    COUNT(*) as countCities
        FROM cities CI JOIN countries CO 
		ON CI.countryCode=CO.countryCode
        GROUP BY 1 
		ORDER BY 3 DESC 
		LIMIT 10`;

        const rows = await dbConn.query(myQuery);
        rows.forEach(r =>
            console.log(r.countryCode, r.countryName, r.countCities)
        );

        /*
            An alternative: return arrays instead of objects
        */
        const rows2 = await dbConn.query(myQuery, null, {
            useArray: true
        });
        rows2.forEach(r => console.log(r[0], r[1], r[2]));
    } catch (e) {
        console.log("Unexpected error", e);
    }
}

async function addSeekAndDeleteCountry(dbConn) {
    try {
        const code = "42";
        const name = "DOUGLASADAMSLAND";

        /*
            1. Add the new country via a prepared insert statement
        */

        const prepInsert = dbConn.prepare(
            "INSERT INTO countries (countryCode, countryName) VALUES (:code, :name)"
        );
        const preppedInsert = prepInsert({ code, name });
        await dbConn.query(preppedInsert);

        /*
            2. Seek the recently added country
        */
        const getAdams = `SELECT * FROM countries WHERE countryCode="${code}"`;
        const adams = await dbConn.query(getAdams);
        console.log(
            adams.length,
            adams[0].countryCode,
            adams[0].countryName
        );

        /*
            3. Update the country, but using placeholders
        */
        await dbConn.query(
            `UPDATE countries SET countryName=? WHERE countryCode=?`,
            ["NEW NAME", code]
        );

        /*
            4. Check the new data, but returning arrays instead of objects
        */
        const adams2 = await dbConn.query(
            `SELECT * FROM countries WHERE countryCode=?`,
            [code],
            { useArray: true }
        );
        console.log(adams2.length, adams2[0][0], adams2[0][1]);

        /*
            5. Drop the new country
        */
        await dbConn.query(`DELETE FROM countries WHERE countryCode="42"`);

        /*
            6. Verify that the country is no more
        */
        const adams3 = await dbConn.query(getAdams);
        console.log(adams3.length);
    } catch (e) {
        console.log("Unexpected error", e);
    }
}

function getDbConnection(host, user, password, db) {
    const dbConn = new mariaSQL({ host, user, password, db });
    dbConn.query = promisify(dbConn.query);
    return dbConn;
}

const dbConn = getDbConnection(DB_HOST, DB_USER, DB_PASS, DB_SCHEMA);

tryDbAccess(dbConn);

get10CountriesWithMoreCities(dbConn);

addSeekAndDeleteCountry(dbConn);

/*
    After everything is done, you can do dbConn.end()
*/
