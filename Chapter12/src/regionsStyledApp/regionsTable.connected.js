/* @flow */

import { connect } from "react-redux";

import { RegionsTable } from "./regionsTable.component";

export const getProps = state => ({
    deviceData: state.deviceData,
    list: state.regions,
    loading: state.loadingRegions
});

export const ConnectedRegionsTable = connect(getProps)(RegionsTable);
