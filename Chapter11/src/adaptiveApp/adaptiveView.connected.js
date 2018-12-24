/* @flow */

import { connect } from "react-redux";

import { AdaptiveView } from "./adaptiveView.component";

const getProps = state => ({
    deviceData: state.deviceData
});

export const ConnectedAdaptiveView = connect(getProps)(AdaptiveView);
