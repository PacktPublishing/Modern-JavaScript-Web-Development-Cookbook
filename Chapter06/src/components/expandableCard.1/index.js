/* @flow */

import React from "react";
import PropTypes from "prop-types";

import "../general.css";

export class ExpandableCard extends React.PureComponent<{
    name: string,
    cities: number,
    population: number
}> {
    static propTypes = {
        name: PropTypes.string.isRequired,
        cities: PropTypes.number.isRequired,
        population: PropTypes.number.isRequired
    };

    render() {
        return (
            <div className="bordered">
                NAME:{this.props.name}
                <br />
                CITIES:{this.props.cities}
                <br />
                POPULATION:{this.props.population}
            </div>
        );
    }
}
