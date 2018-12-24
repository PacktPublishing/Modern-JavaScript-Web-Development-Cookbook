/* @flow */

import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";

import {
    ConnectedCountrySelect,
    ConnectedRegionsTable
} from "./regionsApp";

import { getCountries, getRegions } from "./regionsApp/serviceApi.js";
import { store } from "./regionsApp/store.js";

const dispatcher = fn => (...args) => store.dispatch(fn(...args));

class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <ConnectedCountrySelect
                        getCountries={dispatcher(getCountries)}
                        onSelect={dispatcher(getRegions)}
                    />
                    <ConnectedRegionsTable />
                </Fragment>
            </Provider>
        );
    }
}

export default App;
