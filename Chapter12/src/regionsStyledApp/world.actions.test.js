/* @flow */
import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";

import {
    getCountries,
    countriesSuccess,
    COUNTRIES_REQUEST,
    COUNTRIES_SUCCESS,
    COUNTRIES_FAILURE
} from "./world.actions.js";

import { getCountriesAPI } from "./serviceApi.js";

let mockPromise;
jest.mock("./serviceApi", () => {
    return {
        getCountriesAPI: jest.fn().mockImplementation(() => mockPromise)
    };
});

describe("getCountries", () => {
    it("on API success", async () => {
        const fakeCountries = {
            data: [{ code: "UY" }, { code: "AR" }, { code: "BR" }]
        };
        mockPromise = Promise.resolve(fakeCountries);

        const store = configureMockStore([thunk])({});

        await store.dispatch(getCountries());

        const dispatchedActions = store.getActions();

        expect(getCountriesAPI).toHaveBeenCalledWith();

        expect(dispatchedActions.length).toBe(2);
        expect(dispatchedActions[0].type).toBe(COUNTRIES_REQUEST);
        expect(dispatchedActions[1].type).toBe(COUNTRIES_SUCCESS);
        expect(dispatchedActions[1].listOfCountries).toEqual(
            fakeCountries.data
        );

        /*
            We could have written... but then we'd need tests for countriesSuccess()
        */
        expect(dispatchedActions[1]).toEqual(
            countriesSuccess(fakeCountries.data)
        );
    });

    it("on API failure", async () => {
        mockPromise = Promise.reject(new Error("failure!"));

        const store = configureMockStore([thunk])({});

        await store.dispatch(getCountries());

        const dispatchedActions = store.getActions();

        expect(getCountriesAPI).toHaveBeenCalledWith();
        expect(dispatchedActions.length).toBe(2);
        expect(dispatchedActions[0].type).toBe(COUNTRIES_REQUEST);
        expect(dispatchedActions[1].type).toBe(COUNTRIES_FAILURE);
    });
});
