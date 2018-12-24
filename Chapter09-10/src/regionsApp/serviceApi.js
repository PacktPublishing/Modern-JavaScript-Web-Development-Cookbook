/* @flow */

import axios from "axios";

export const getCountriesAPI = () =>
    axios.get(`http://fk-server:8080/countries`);

export const getRegionsAPI = country =>
    axios.get(`http://fk-server:8080/regions/${country}`);
