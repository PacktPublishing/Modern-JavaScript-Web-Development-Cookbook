/* @flow */

import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export class Auth extends React.Component<{
    loginRoute: string,
    token: string,
    location: object
}> {
    static propTypes = {
        loginRoute: PropTypes.string.isRequired,
        token: PropTypes.string.isRequired,
        location: PropTypes.object
    };

    render() {
        const myProps = { ...this.props };
        if (!myProps.token) {
            delete myProps.component;
            myProps.render = () => (
                <Redirect
                    to={{
                        pathname: this.props.loginRoute,
                        state: { from: this.props.location }
                    }}
                />
            );
        }
        return <Route {...myProps} />;
    }
}
