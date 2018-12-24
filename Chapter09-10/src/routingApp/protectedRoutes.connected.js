/* @flow */

import { connect } from "react-redux";

import { ProtectedRoutes } from "./protectedRoutes.component";

export const ConnectedProtectedRoutes = connect(state => ({
    token: state.token
}))(ProtectedRoutes);
