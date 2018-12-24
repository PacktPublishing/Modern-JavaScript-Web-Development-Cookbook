/* @flow */

import React from "react";
import PropTypes from "prop-types";

import { ExpandableCard } from "../expandableCard.1";
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
        results: PropTypes.arrayOf(PropTypes.object)
    };

    static defaultProps = {
        results: []
    };

    render() {
        if (this.props.results.length === 0) {
            return <div className="bordered">No regions.</div>;
        } else {
            return (
                <div className="bordered">
                    {this.props.results.map(x => (
                        <ExpandableCard
                            key={x.id}
                            name={x.name}
                            cities={x.cities}
                            population={x.pop}
                        />
                    ))}
                </div>
            );
        }
    }
}
