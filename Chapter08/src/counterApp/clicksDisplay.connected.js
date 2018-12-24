/* @flow */

import { connect } from "react-redux";

import { ClicksDisplay } from "./clicksDisplay.component";

const getProps = state => ({
    clicks: state.clicks
});

export const ConnectedClicksDisplay = connect(getProps)(ClicksDisplay);
