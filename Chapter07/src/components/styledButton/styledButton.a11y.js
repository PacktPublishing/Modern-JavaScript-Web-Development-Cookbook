/* @flow */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Color from "color";

import {
    NORMAL_TEXT,
    NORMAL_COLOR,
    ALERT_TEXT,
    ALERT_COLOR
} from "./constants";

const makeSpan = props => `
    span {
        color: ${props.normal ? NORMAL_TEXT : ALERT_TEXT};
        font-weight: bold;
    }
`;

const BasicStyledDiv = styled.div`
    display: inline-block;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 3px;
`;

const StyledDiv = BasicStyledDiv.extend`
    background-color: ${props =>
        props.normal ? NORMAL_COLOR : ALERT_COLOR};
    &:hover {
        background-color: ${props =>
            Color(props.normal ? NORMAL_COLOR : ALERT_COLOR)
                .darken(0.25)
                .string()};
        transition: all 0.5s ease;
    }
    ${props => makeSpan(props)};
`;

export class StyledButton extends React.PureComponent<{
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
            <StyledDiv
                normal={this.props.normal}
                onClick={this.props.onSelect}
                onKeyDown={this.keyDownAsClick}
                tabIndex="0"
                role="button"
            >
                <span>{this.props.buttonText}</span>
            </StyledDiv>
        );
    }
}
