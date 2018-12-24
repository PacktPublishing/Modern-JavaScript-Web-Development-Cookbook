/* @flow */

import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export class Login extends React.PureComponent<{
    onLogin: func,
    logging: boolean,
    token: string,
    location: object
}> {
    static propTypes = {
        onLogin: PropTypes.func.isRequired,
        logging: PropTypes.bool.isRequired,
        token: PropTypes.string.isRequired,
        location: PropTypes.object
    };

    state = {
        userName: "",
        password: ""
    };

    onUserNameBlur = e => this.setState({ userName: e.target.value });

    onPasswordBlur = e => this.setState({ password: e.target.value });

    onLoginClick = () =>
        this.props.onLogin(this.state.userName, this.state.password);

    render() {
        if (
            this.state.userName &&
            this.state.password &&
            this.props.token
        ) {
            return (
                <Redirect to={this.props.location.state.from.pathname} />
            );
        } else {
            return (
                <div>
                    <h1>Login Form</h1>
                    <div>
                        User:<input
                            type="text"
                            onBlur={this.onUserNameBlur}
                        />
                    </div>
                    <div>
                        Password:
                        <input
                            type="password"
                            onBlur={this.onPasswordBlur}
                        />
                    </div>
                    <button
                        onClick={this.onLoginClick}
                        disabled={this.props.logging}
                    >
                        Login
                    </button>
                </div>
            );
        }
    }
}
