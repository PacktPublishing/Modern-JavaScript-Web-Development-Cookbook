/* @flow */

import { connect } from "react-redux";

import { Main } from "./main.component";

const getProps = state => ({
    deviceData: state.deviceData
});

export const ConnectedMain = connect(getProps)(Main);
