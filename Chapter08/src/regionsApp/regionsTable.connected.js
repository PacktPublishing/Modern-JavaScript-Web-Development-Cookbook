/* @flow */

import { connect } from "react-redux";

import { RegionsTable } from "./regionsTable.component";

const getProps = state => ({
    list: state.regions,
    loading: state.loadingRegions
});

export const ConnectedRegionsTable = connect(getProps)(RegionsTable);
