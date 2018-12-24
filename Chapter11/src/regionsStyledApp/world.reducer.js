/* @flow */

import {
    DEVICE_DATA,
    COUNTRIES_REQUEST,
    COUNTRIES_SUCCESS,
    COUNTRIES_FAILURE,
    REGIONS_REQUEST,
    REGIONS_SUCCESS,
    REGIONS_FAILURE
} from "./world.actions";

import { getDeviceData } from "./device";
import type { CountriesAction, RegionsAction } from "./world.actions";

export const reducer = (
    state: object = {
        // initial state
        deviceData: getDeviceData(),
        loadingCountries: false,
        currentCountry: "",
        countries: [],
        loadingRegions: false,
        regions: []
    },
    action: CountriesAction | RegionsAction
) => {
    switch (action.type) {
        case DEVICE_DATA:
            return {
                ...state,
                deviceData: action.deviceData
            };

        case COUNTRIES_REQUEST:
            return {
                ...state,
                loadingCountries: true,
                countries: []
            };

        case COUNTRIES_SUCCESS:
            return {
                ...state,
                loadingCountries: false,
                countries: action.listOfCountries
            };

        case COUNTRIES_FAILURE:
            return {
                ...state,
                loadingCountries: false,
                countries: []
            };

        case REGIONS_REQUEST:
            return {
                ...state,
                loadingRegions: true,
                currentCountry: action.country,
                regions: []
            };

        case REGIONS_SUCCESS:
            return {
                ...state,
                loadingRegions: false,
                regions: action.listOfRegions
            };

        case REGIONS_FAILURE:
            return {
                ...state,
                loadingRegions: false,
                regions: []
            };

        default:
            return state;
    }
};
