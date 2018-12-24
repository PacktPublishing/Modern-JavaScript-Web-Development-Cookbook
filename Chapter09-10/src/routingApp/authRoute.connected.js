/* @flow */

import { connect } from "react-redux";

import { Auth } from "./authRoute.component";
export const AuthRoute = connect(state => ({
    token: state.token,
    loginRoute: "/login"
}))(Auth);
