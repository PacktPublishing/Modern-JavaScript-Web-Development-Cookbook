import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import { CountrySelect } from "./countrySelect.component";
import { RegionsTable } from "./regionsTable.component";

class CountryAndRegions extends React.Component {
    render() {
        return (
            <div>
                <div>
                    Select:
                    <CountrySelect
                        loading={true}
                        onSelect={() => null}
                        getCountries={() => null}
                        list={[]}
                    />
                </div>
                <div>
                    Display: <RegionsTable list={[]} />
                </div>
            </div>
        );
    }
}

describe("App for Regions and Countries", () => {
    it("renders correctly", () => {
        const tree = new ShallowRenderer().render(<CountryAndRegions />);
        expect(tree).toMatchSnapshot();
    });
});
