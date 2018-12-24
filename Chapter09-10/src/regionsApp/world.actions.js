/* @flow */

import { getCountriesAPI, getRegionsAPI } from "./serviceApi";

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
    }: CountriesActions);

export const countriesSuccess = (listOfCountries: []) =>
    ({
        type: COUNTRIES_SUCCESS,
        listOfCountries
    }: CountriesActions);

export const countriesFailure = () =>
    ({
        type: COUNTRIES_FAILURE
    }: CountriesActions);

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
    try {
        dispatch(countriesRequest());
        // the next line delays execution for 5 seconds:
        // await new Promise(resolve => setTimeout(resolve, 5000));
        const result = await getCountriesAPI();
        dispatch(countriesSuccess(result.data));
    } catch (e) {
        dispatch(countriesFailure());
    }
};

export const getCountries2 = () => async (dispatch, getState) => {
    if (getState().countries.length) {
        // no need to do anything!
    } else {
        try {
            dispatch(countriesRequest());
            const result = await getCountriesAPI();
            dispatch(countriesSuccess(result.data));
        } catch (e) {
            dispatch(countriesFailure());
        }
    }
};

export const getRegions = (country: string) => async dispatch => {
    if (country) {
        try {
            dispatch(regionsRequest(country));
            const result = await getRegionsAPI(country);
            dispatch(regionsSuccess(result.data));
        } catch (e) {
            dispatch(regionsFailure());
        }
    } else {
        dispatch(regionsFailure());
    }
};

export const getRegions2 = (country: string) => async (
    dispatch,
    getState
) => {
    if (country === getState().currentCountry) {
        console.log("Hey! You are getting the same country as before!");
    }

    if (country) {
        try {
            dispatch(regionsRequest(country));
            const result = await getRegionsAPI(country);
            dispatch(regionsSuccess(result.data));
        } catch (e) {
            dispatch(regionsFailure());
        }
    } else {
        dispatch(regionsFailure());
    }
};
