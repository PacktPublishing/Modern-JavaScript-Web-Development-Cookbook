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

    keyDownAsClick = (e: { keyCode: number }) => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            this.props.onSelect();
        }
    };

    render() {
        return (
            <div
                className={
                    this.props.normal ? "normalButton" : "alertButton"
                }
                onClick={this.props.onSelect}
                onKeyDown={this.keyDownAsClick}
                tabIndex="0"
                role="button"
            >
                <span>{this.props.buttonText}</span>
            </div>
        );
    }
}
