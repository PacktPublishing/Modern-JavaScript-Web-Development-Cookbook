/* @flow */

import React from "react";
import PropTypes from "prop-types";
import "../general.css";

export class CountryFilterBar extends React.PureComponent<{
    list?: Array<{ code: string, name: string }>,
    onSelect: string => void
}> {
    static propTypes = {
        list: PropTypes.arrayOf(PropTypes.object),
        onSelect: PropTypes.func.isRequired
    };

    static defaultProps = {
        list: []
    };

    onSelect = (e: { target: HTMLOptionElement }) =>
        this.props.onSelect(e.target.value);

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
