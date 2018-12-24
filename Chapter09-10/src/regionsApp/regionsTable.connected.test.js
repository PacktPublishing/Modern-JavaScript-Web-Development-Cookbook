/* @flow */

import { getProps } from "./regionsTable.connected.js";

describe("getProps for RegionsTable", () => {
    it("should extract regions and loading", () => {
        const initialState = {
            loadingCountries: false,
            currentCountry: "whatever",
            countries: [{ other: 1 }, { other: 2 }, { other: 3 }],
            loadingRegions: false,
            regions: [{ something: 1 }, { something: 2 }]
        };
        const initialJSON = JSON.stringify(initialState);

        expect(getProps(initialState)).toEqual({
            list: [{ something: 1 }, { something: 2 }],
            loading: false
        });
        expect(JSON.stringify(initialState)).toBe(initialJSON);
    });
});
