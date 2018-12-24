/* @flow */

import {
    getCountriesAPI,
    getRegionsAPI,
    showSaveDialog,
    writeFile,
    notifier
} from "./serviceApi";

// Countries actions

export const COUNTRIES_REQUEST = "countries:request";
export const COUNTRIES_SUCCESS = "countries:success";
export const COUNTRIES_FAILURE = "countries:failure";

export type CountriesAction = {
    type: string,
    country?: string,
    listOfCountries?: []
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
    listOfRegions?: []
};

export const regionsRequest = (country: string) =>
    ({
        type: REGIONS_REQUEST,
        country
    }: RegionsAction);

export const regionsSuccess = (listOfRegions: []) =>
    ({
        type: REGIONS_SUCCESS,
        listOfRegions
    }: RegionsAction);

export const regionsFailure = () =>
    ({
        type: REGIONS_FAILURE
    }: RegionsAction);

// Complex Actions:

export const getCountries = () => async (dispatch: ({}) => any) => {
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

export const getRegions = (country: string) => async (
    dispatch: ({}) => any
) => {
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

export const saveRegionsToDisk = () => async (
    dispatch: ({}) => any,
    getState: () => { regions: [] }
) => {
    showSaveDialog((filename: string = "") => {
        if (filename) {
            writeFile(filename, JSON.stringify(getState().regions), e => {
                if (e) {
                    window.console.log(`ERROR SAVING ${filename}!`, e);
                } else {
                    notifier.notify({
                        title: "Regions app",
                        message: `Regions saved to ${filename}`
                    });
                }
            });
        }
    });
};
