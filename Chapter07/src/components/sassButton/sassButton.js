/* @flow */

import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

export class SassButton extends React.PureComponent<{
    normal: boolean,
    buttonText: string,
    onSelect: void => void
}> {
    static propTypes = {
        normal: PropTypes.bool.isRequired,
        buttonText: PropTypes.string.isRequired,
        onSelect: PropTypes.func.isRequired
    };

    render() {
        return (
            <div
                className={
                    this.props.normal ? "normalButton" : "alertButton"
                }
                onClick={this.props.onSelect}
            >
                <span>{this.props.buttonText}</span>
            </div>
        );
    }
}
