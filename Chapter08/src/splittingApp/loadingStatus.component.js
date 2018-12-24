/* @flow */

import React from "react";
import PropTypes from "prop-types";

export class LoadingStatus extends React.Component<{
    isLoading: boolean,
    error: boolean
}> {
    static propTypes = {
        isLoading: PropTypes.bool,
        error: PropTypes.bool
    };

    render() {
        if (this.props.isLoading) {
            return <div>Loading...</div>;
        } else if (this.props.error) {
            return <div>ERROR: the component could not be loaded.</div>;
        } else {
            return null;
        }
    }
}
