/* @flow */

import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { RegionsTable } from "./regionsTable.component";

Enzyme.configure({ adapter: new Adapter() });

const fakeDeviceData = {
    isTablet: false,
    isPortrait: true,
    height: 1000,
    width: 720,
    scale: 1,
    fontScale: 1
};

describe("RegionsTable", () => {
    it("renders correctly an empty list", () => {
        const wrapper = Enzyme.shallow(
            <RegionsTable deviceData={fakeDeviceData} list={[]} />
        );
        expect(wrapper.contains("No regions."));
    });

    it("renders correctly a list", () => {
        const wrapper = Enzyme.shallow(
            <RegionsTable
                deviceData={fakeDeviceData}
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
        );

        expect(wrapper.contains("Montevideo"));
        expect(wrapper.contains("Maldonado"));
        expect(wrapper.contains("Cerro Largo"));
    });
});
