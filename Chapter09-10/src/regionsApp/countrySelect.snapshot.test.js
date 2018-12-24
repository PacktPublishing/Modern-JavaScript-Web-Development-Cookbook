/* @flow */

import React from "react";
import TestRenderer from "react-test-renderer";

import { CountrySelect } from "./countrySelect.component";

describe("CountrySelect", () => {
    it("renders correctly when loading, with no countries", () => {
        const tree = TestRenderer.create(
            <CountrySelect
                loading={true}
                onSelect={() => null}
                getCountries={() => null}
                list={[]}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders correctly a countries dropdown", () => {
        const tree = TestRenderer.create(
            <CountrySelect
                loading={false}
                onSelect={() => null}
                getCountries={() => null}
                list={[
                    {
                        countryCode: "UY",
                        countryName: "Uruguay"
                    },
                    {
                        countryCode: "AR",
                        countryName: "Argentina"
                    },
                    {
                        countryCode: "BR",
                        countryName: "Brazil"
                    }
                ]}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
