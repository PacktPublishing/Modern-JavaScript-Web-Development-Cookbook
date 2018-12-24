/* @flow */

import React from "react";
import PropTypes from "prop-types";
import "../general.css";

export class CountryFilterBar extends React.PureComponent<{
    list: Array<{ code: string, name: string }>,
    onSelect: string => void
}> {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(e: { target: HTMLOptionElement }) {
        this.props.onSelect(e.target.value);
    }

    render() {
        return (
            <div className="bordered">
                Country:&nbsp;
                <select onChange={this.onSelect}>
                    <option value="">Select a country:</option>
                    {this.props.list.map(x => (
                        <option key={x.code} value={x.code}>
                            {x.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

CountryFilterBar.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelect: PropTypes.func.isRequired
};

CountryFilterBar.defaultProps = {
    list: []
};
