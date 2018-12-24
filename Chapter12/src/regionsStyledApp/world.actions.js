/* @flow */

import { getCountriesAPI, getRegionsAPI } from "./serviceApi";
import { getDeviceData } from "./device";

// Device layout action

export const DEVICE_DATA = "device:data";

export type deviceDataAction = {
    type: string,
    deviceData: any // deviceDataType
};

export const setDevice = (deviceData?: object) =>
    ({
        type: DEVICE_DATA,
        deviceData: deviceData || getDeviceData()
    }: deviceDataAction);

// Countries actions

export const COUNTRIES_REQUEST = "countries:request";
export const COUNTRIES_SUCCESS = "countries:success";
export const COUNTRIES_FAILURE = "countries:failure";

export type CountriesAction = {
    type: string,
    country?: string,
    listOfCountries?: [object]
};

export const countriesRequest = () =>
    ({
        type: COUNTRIES_REQUEST
    }: CountriesAction);

export const countriesSuccess = (listOfCountries: []) =>
    ({
        type: COUNTRIES_SUCCESS,
        listOfCountries
    }: CountriesAction);

export const countriesFailure = () =>
    ({
        type: COUNTRIES_FAILURE
    }: CountriesAction);

// Regions actions

export const REGIONS_REQUEST = "regions:request";
export const REGIONS_SUCCESS = "regions:success";
export const REGIONS_FAILURE = "regions:failure";

export type RegionsAction = {
    type: string,
    listOfRegions?: [object]
};

export const regionsRequest = (country: string) =>
    ({
        type: REGIONS_REQUEST,
        country
    }: RegionsActions);

export const regionsSuccess = (listOfRegions: [{}]) =>
    ({
        type: REGIONS_SUCCESS,
        listOfRegions
    }: RegionsActions);

export const regionsFailure = () =>
    ({
        type: REGIONS_FAILURE
    }: RegionsActions);

// Complex Actions:

export const getCountries = () => async dispatch => {
    console.log("getCountries: called");
    try {
        dispatch(countriesRequest());
        const result = await getCountriesAPI();
        dispatch(countriesSuccess(result.data));
    } catch (e) {
        console.error("getCountries: failure!");
        dispatch(countriesFailure());
    }
};

export const getRegions = (country: string) => async dispatch => {
    console.log("getRegions: called with ", country);
    if (country) {
        try {
            dispatch(regionsRequest(country));
            const result = await getRegionsAPI(country);
            dispatch(regionsSuccess(result.data));
        } catch (e) {
            console.error("getRegions: failure with API!");
            dispatch(regionsFailure());
        }
    } else {
        console.error("getRegions: failure, no country!");
        dispatch(regionsFailure());
    }
};
