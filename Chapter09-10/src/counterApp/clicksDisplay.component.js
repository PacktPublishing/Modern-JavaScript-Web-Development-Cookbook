/* @flow */

import React from "react";
import { PropTypes } from "prop-types";

export class ClicksDisplay extends React.PureComponent<{
    clicks: number
}> {
    static propTypes = {
        clicks: PropTypes.number.isRequired
    };

    render() {
        return <div>Clicks so far: {this.props.clicks}</div>;
    }
}
