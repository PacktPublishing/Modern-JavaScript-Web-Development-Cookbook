/* @flow */

import { connect } from "react-redux";

import { RegionsTable } from "./regionsTableWithSave.component";

import { saveRegionsToDisk } from "./world.actions";

const getProps = state => ({
    list: state.regions,
    loading: state.loadingRegions
});

const getDispatch = (dispatch: any) => ({
    saveRegions: () => dispatch(saveRegionsToDisk())
});

export const ConnectedRegionsTable = connect(
    getProps,
    getDispatch
)(RegionsTable);
