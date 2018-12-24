/* @flow */

import React from "react";
import PropTypes from "prop-types";

import { ExpandableCard } from "../expandableCard.2";
import "../general.css";

export class ResultsDataTable extends React.PureComponent<{
    results: Array<{
        id: string,
        name: string,
        cities: number,
        pop: number
    }>
}> {
    static propTypes = {
        results: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    render() {
        if (this.props.results.length === 0) {
            return <div className="bordered">No regions.</div>;
        } else {
            return (
                <div className="bordered">
                    {this.props.results.map(x => (
                        <ExpandableCard key={x.id} title={x.name}>
                            <div>CITIES:{x.cities}</div>
                            <div>POPULATION:{x.pop}</div>
                        </ExpandableCard>
                    ))}
                </div>
            );
        }
    }
}
