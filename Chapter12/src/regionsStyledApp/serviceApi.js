/* @flow */

import axios from "axios";

export const getCountriesAPI = () =>
    axios.get(`http://192.168.1.200:8080/countries`);

export const getRegionsAPI = (country: string) =>
    axios.get(`http://192.168.1.200:8080/regions/${country}`);
