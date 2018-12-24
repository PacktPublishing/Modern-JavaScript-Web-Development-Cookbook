/* @flow */

const axios = require("axios");

const BASE_URL = "https://weather.com/en-IN/weather/today/l/";

const MONTEVIDEO_UY = "-34.90,-56.16";
const LONDON_EN = "51.51,-0.13";
const PUNE_IN = "18.52,73.86";

const get_weather = coords => axios.get(`${BASE_URL}${coords}`);

function getMontevideo() {
    get_weather(MONTEVIDEO_UY)
        .then(result => {
            console.log("Montevideo, with promises");
            console.log(`Montevideo: ${result.data.length} bytes`);
        })
        .catch(error => console.log(error.message));
}

function getLondonAndPuneInSeries() {
    get_weather(LONDON_EN)
        .then(londonData => {
            get_weather(PUNE_IN)
                .then(puneData => {
                    console.log("London and Pune, in series");
                    console.log(`London: ${londonData.data.length} b`);
                    console.log(`Pune: ${puneData.data.length} b`);
                })
                .catch(error => {
                    console.log("Error getting Pune...", error.message);
                });
        })
        .catch(error => {
            console.log("Error getting London...", error.message);
        });
}

function getCitiesInParallel() {
    const montevideoGet = get_weather(MONTEVIDEO_UY);
    const londonGet = get_weather(LONDON_EN);
    const puneGet = get_weather(PUNE_IN);

    Promise.all([montevideoGet, londonGet, puneGet])
        .then(([montevideoData, londonData, puneData]) => {
            console.log("All three cities in parallel, with promises");
            console.log(`Montevideo: ${montevideoData.data.length} b`);
            console.log(`London: ${londonData.data.length} b`);
            console.log(`Pune: ${puneData.data.length} b`);
        })
        .catch(error => {
            console.log(error.message);
        });
}

getMontevideo();
getLondonAndPuneInSeries();
getCitiesInParallel();
