/* @flow */

import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { RegionsTable } from "./regionsTable.component";

Enzyme.configure({ adapter: new Adapter() });

describe("RegionsTable", () => {
    it("renders correctly an empty list", () => {
        const wrapper = Enzyme.render(<RegionsTable list={[]} />);
        expect(wrapper.text()).toContain("No regions.");
    });

    it("renders correctly a list", () => {
        const wrapper = Enzyme.render(
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
        );
        expect(wrapper.text()).toContain("Montevideo");
        expect(wrapper.text()).toContain("Maldonado");
        expect(wrapper.text()).toContain("Cerro Largo");
    });
});
