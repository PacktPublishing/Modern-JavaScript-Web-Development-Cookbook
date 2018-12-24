/* @flow */

import React from "react";
import PropTypes from "prop-types";

import "../general.css";

export class RegionsTable extends React.PureComponent<{
    loading: boolean,
    list: Array<{
        countryCode: string,
        regionCode: string,
        regionName: string
    }>
}> {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        list: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    static defaultProps = {
        list: []
    };

    render() {
        if (this.props.list.length === 0 || this.props.loading) {
            return <div className="bordered">No regions.</div>;
        } else {
            const ordered = [...this.props.list].sort(
                (a, b) => (a.regionName < b.regionName ? -1 : 1)
            );

            return (
                <div className="bordered">
                    {ordered.map(x => (
                        <div key={x.countryCode + "-" + x.regionCode}>
                            {x.regionName}
                        </div>
                    ))}
                </div>
            );
        }
    }
}
