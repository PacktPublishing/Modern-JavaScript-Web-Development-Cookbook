/* @flow */

import { connect } from "react-redux";

import { DeviceHandler } from "./deviceHandler.component";
import { setDevice } from "./actions";

const getDispatch = dispatch => ({
    setDevice: () => dispatch(setDevice())
});

export const ConnectedDeviceHandler = connect(
    null,
    getDispatch
)(DeviceHandler);
