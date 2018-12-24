/* @flow */

const axios = require("axios");

const BASE_URL = "https://weather.com/en-IN/weather/today/l/";

const MONTEVIDEO_UY = "-34.90,-56.16";
const LONDON_EN = "51.51,-0.13";
const PUNE_IN = "18.52,73.86";

const get_weather = coords => axios.get(`${BASE_URL}${coords}`);

async function getMontevideo() {
    try {
        const montevideoData = await get_weather(MONTEVIDEO_UY);

        console.log("Montevideo, with async/await");
        console.log(`Montevideo: ${montevideoData.data.length} bytes`);
    } catch (error) {
        console.log(error.message);
    }
}

async function getLondonAndPuneInSeries() {
    try {
        const londonData = await get_weather(LONDON_EN);
        const puneData = await get_weather(PUNE_IN);

        console.log("London and Pune, in series");
        console.log(`London: ${londonData.data.length} b`);
        console.log(`Pune: ${puneData.data.length} b`);
    } catch (error) {
        console.log(error.message);
    }
}

async function getCitiesInParallel() {
    try {
        const montevideoGet = get_weather(MONTEVIDEO_UY);
        const londonGet = get_weather(LONDON_EN);
        const puneGet = get_weather(PUNE_IN);

        const [montevideoData, londonData, puneData] = await Promise.all([
            montevideoGet,
            londonGet,
            puneGet
        ]);

        console.log("All three cities in parallel, with async/await");
        console.log(`Montevideo: ${montevideoData.data.length} b`);
        console.log(`London: ${londonData.data.length} b`);
        console.log(`Pune: ${puneData.data.length} b`);
    } catch (error) {
        console.log(error.message);
    }
}

getMontevideo();
getLondonAndPuneInSeries();
getCitiesInParallel();
