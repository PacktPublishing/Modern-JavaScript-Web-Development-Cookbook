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

describe("CountrySelect", () => {
    it("renders correctly when loading, with no countries", () => {
        const mockGetCountries = jest.fn();
        const mockOnSelect = jest.fn();

        const wrapper = Enzyme.mount(
            <CountrySelect
                loading={true}
                onSelect={mockOnSelect}
                getCountries={mockGetCountries}
                list={[]}
            />
        );
        expect(wrapper.text()).toContain("Loading countries");
        expect(mockGetCountries).toHaveBeenCalledTimes(1);
        expect(mockOnSelect).not.toHaveBeenCalled();
    });

    it("renders correctly a countries dropdown", () => {
        const mockGetCountries = jest.fn();
        const mockOnSelect = jest.fn();

        const wrapper = Enzyme.mount(
            <CountrySelect
                loading={false}
                onSelect={mockOnSelect}
                getCountries={mockGetCountries}
                list={threeCountries}
            />
        );

        expect(wrapper.text()).toContain("Uruguay");
        expect(wrapper.text()).toContain("Argentina");
        expect(wrapper.text()).toContain("Brazil");

        expect(mockGetCountries).not.toHaveBeenCalled();
        expect(mockOnSelect).not.toHaveBeenCalled();
    });

    it("correctly calls onSelect", () => {
        const mockGetCountries = jest.fn();
        const mockOnSelect = jest.fn();

        const wrapper = Enzyme.mount(
            <CountrySelect
                loading={false}
                onSelect={mockOnSelect}
                getCountries={mockGetCountries}
                list={threeCountries}
            />
        );

        wrapper
            .find("[name='selectCountry']")
            .at(0)
            .simulate("change", { target: { value: "UY" } });

        expect(mockGetCountries).not.toHaveBeenCalled();
        expect(mockOnSelect).toHaveBeenCalledTimes(1);
        expect(mockOnSelect).toHaveBeenCalledWith("UY");
    });
});
