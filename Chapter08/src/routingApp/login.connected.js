/* @flow */

import { connect } from "react-redux";

import { Login } from "./login.component";
import { attemptLogin } from "./login.actions";

export const ConnectedLogin = connect(
    state => ({
        logging: state.logging,
        token: state.token
    }),
    dispatch => ({
        onLogin: (user: string, password: string) =>
            dispatch(attemptLogin(user, password))
    })
)(Login);
