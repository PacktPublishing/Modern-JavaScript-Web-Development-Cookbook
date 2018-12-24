/* @flow */

import React from "react";
import TestRenderer from "react-test-renderer";

import { RegionsTable } from "./regionsTable.component";

describe("RegionsTable", () => {
    it("renders correctly an empty list", () => {
        const tree = TestRenderer.create(
            <RegionsTable list={[]} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correctly a list", () => {
        const tree = TestRenderer.create(
            <RegionsTable
                list={[
                    {
                        countryCode: "UY",
                        regionCode: "10",
                        regionName: "Montevideo"
                    },
                    {
                        countryCode: "UY",
                        regionCode: "9",
                        regionName: "Maldonado"
                    },
                    {
                        countryCode: "UY",
                        regionCode: "5",
                        regionName: "Cerro Largo"
                    }
                ]}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
