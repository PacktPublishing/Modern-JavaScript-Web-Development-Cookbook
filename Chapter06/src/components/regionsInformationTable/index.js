/* @flow */

import React from "react";

import { CountryFilterBar } from "../countryFilterBar";
import { ResultsDataTable } from "../resultsDataTable.2";

export class RegionsInformationTable extends React.PureComponent<
    {},
    {
        countries: Array<{
            code: string,
            name: string
        }>,
        regions: Array<{
            id: string,
            name: string,
            cities: number,
            pop: number
        }>
    }
> {
    state = {
        countries: [
            { code: "AR", name: "Argentine" },
            { code: "BR", name: "Brazil" },
            { code: "PY", name: "Paraguay" },
            { code: "UY", name: "Uruguay" }
        ],

        regions: []
    };

    update = (country: string) => {
        console.log(`Country ... ${country}`);

        this.setState(() => ({
            regions: [
                {
                    id: "UY/5",
                    name: "Durazno",
                    cities: 8,
                    pop: 60000
                },
                {
                    id: "UY/7",
                    name: "Florida",
                    cities: 20,
                    pop: 67000
                },
                {
                    id: "UY/9",
                    name: "Maldonado",
                    cities: 17,
                    pop: 165000
                },
                {
                    id: "UY/10",
                    name: "Montevideo",
                    cities: 1,
                    pop: 1320000
                },
                {
                    id: "UY/11",
                    name: "Paysandu",
                    cities: 16,
                    pop: 114000
                }
            ]
        }));
    };

    render() {
        return (
            <div>
                <CountryFilterBar
                    list={this.state.countries}
                    onSelect={this.update}
                />
                <ResultsDataTable results={this.state.regions} />
            </div>
        );
    }
}
