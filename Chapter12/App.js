/* @flow */

import React from "react";
import { Provider } from "react-redux";

import { store } from "./src/regionsStyledApp/store";
import { ConnectedMain } from "./src/regionsStyledApp/main.connected";

export default class App extends React.PureComponent<> {
    render() {
        return (
            <Provider store={store}>
                <ConnectedMain />
            </Provider>
        );
    }
}
