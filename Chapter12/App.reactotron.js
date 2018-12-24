/* @flow */

import React from "react";
import { Provider } from "react-redux";

import "./reactotronConfig";
import { store } from "./src/regionsStyledApp/store.reactotron";
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
