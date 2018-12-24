/* @flow */
import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { CountrySelect } from "./countrySelect.component";

Enzyme.configure({ adapter: new Adapter() });

const threeCountries = [
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
];

const fakeDeviceData = {
    isTablet: false,
    isPortrait: true,
    height: 1000,
    width: 720,
    scale: 1,
    fontScale: 1
}

describe("CountrySelect", () => {
    it("renders correctly when loading, with no countries", () => {
        const mockGetCountries = jest.fn();
        const mockOnSelect = jest.fn();

        const wrapper = Enzyme.shallow(
            <CountrySelect
                deviceData={fakeDeviceData}
                loading={true}
                currentCountry={""}
                onSelect={mockOnSelect}
                getCountries={mockGetCountries}
                list={[]}
            />
        );
        expect(wrapper.contains("Loading countries"));
        expect(mockGetCountries).toHaveBeenCalledTimes(1);
        expect(mockOnSelect).not.toHaveBeenCalled();
    });

    it("renders correctly a countries dropdown", () => {
        const mockGetCountries = jest.fn();
        const mockOnSelect = jest.fn();

        const wrapper = Enzyme.shallow(
            <CountrySelect
                deviceData={fakeDeviceData}
                currentCountry={""}
                loading={false}
                onSelect={mockOnSelect}
                getCountries={mockGetCountries}
                list={threeCountries}
            />
        );
        expect(wrapper.contains("Uruguay"));
        expect(wrapper.contains("Argentina"));
        expect(wrapper.contains("Brazil"));

        expect(mockGetCountries).not.toHaveBeenCalled();
        expect(mockOnSelect).not.toHaveBeenCalled();
    });

    it("correctly calls onSelect", () => {
        const mockGetCountries = jest.fn();
        const mockOnSelect = jest.fn();

        const wrapper = Enzyme.shallow(
            <CountrySelect
                deviceData={fakeDeviceData}
                loading={false}
                currentCountry={""}
                onSelect={mockOnSelect}
                getCountries={mockGetCountries}
                list={threeCountries}
            />
        );

        wrapper.find("Picker").simulate("ValueChange", "UY");

        expect(mockGetCountries).not.toHaveBeenCalled();
        expect(mockOnSelect).toHaveBeenCalledTimes(1);
        expect(mockOnSelect).toHaveBeenCalledWith("UY");
    });
});
