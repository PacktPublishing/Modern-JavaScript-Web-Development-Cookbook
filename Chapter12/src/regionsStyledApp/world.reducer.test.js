/* @flow */

import { reducer } from "./world.reducer.js";

import { countriesRequest, regionsSuccess } from "./world.actions.js";

describe("The countries and regions reducer", () => {
    it("should process countryRequest actions", () => {
        const initialState = {
            loadingCountries: false,
            currentCountry: "whatever",
            countries: [{}, {}, {}],
            loadingRegions: false,
            regions: [{}, {}]
        };

        const initialJSON = JSON.stringify(initialState);

        expect(reducer(initialState, countriesRequest())).toEqual({
            loadingCountries: true,
            currentCountry: "whatever",
            countries: [],
            loadingRegions: false,
            regions: [{}, {}]
        });

        expect(JSON.stringify(initialState)).toBe(initialJSON);
    });

    it("should process regionsSuccess actions", () => {
        const initialState = {
            loadingCountries: false,
            currentCountry: "whatever",
            countries: [{}, {}, {}],
            loadingRegions: true,
            regions: []
        };

        const initialJSON = JSON.stringify(initialState);

        expect(
            reducer(
                initialState,
                regionsSuccess([
                    { something: 1 },
                    { something: 2 },
                    { something: 3 }
                ])
            )
        ).toEqual({
            loadingCountries: false,
            currentCountry: "whatever",
            countries: [{}, {}, {}],
            loadingRegions: false,
            regions: [{ something: 1 }, { something: 2 }, { something: 3 }]
        });

        expect(JSON.stringify(initialState)).toBe(initialJSON);
    });

    it("should return the initial state for unknown actions", () => {
        const initialState = {
            loadingCountries: false,
            currentCountry: "whatever",
            countries: [{}, {}, {}],
            loadingRegions: true,
            regions: []
        };
        const initialJSON = JSON.stringify(initialState);

        expect(
            JSON.stringify(reducer(initialState, { actionType: "other" }))
        ).toBe(initialJSON);
        expect(JSON.stringify(initialState)).toBe(initialJSON);
    });
});
