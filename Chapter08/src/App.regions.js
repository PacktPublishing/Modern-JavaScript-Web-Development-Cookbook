/* @flow */

import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";

import {
    ConnectedCountrySelect,
    ConnectedRegionsTable
} from "./regionsApp";

import { store } from "./regionsApp/store";

class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <ConnectedCountrySelect />
                    <ConnectedRegionsTable />
                </Fragment>
            </Provider>
        );
    }
}

export default App;
