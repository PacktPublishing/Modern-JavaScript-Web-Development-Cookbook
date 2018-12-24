/* @flow */

import React from "react";
import { Redirect, Switch } from "react-router-dom";
import PropTypes from "prop-types";

export class ProtectedRoutes extends React.Component<{
    token: string,
    children: any,
    location: object
}> {
    static propTypes = {
        token: PropTypes.string.isRequired,
        children: PropTypes.any,
        location: PropTypes.object.isRequired
    };

    render() {
        return this.props.token ? (
            <Switch>{this.props.children}</Switch>
        ) : (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: this.props.location }
                }}
            />
        );
    }
}
