/* @flow */

import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";

import { store } from "./counterApp/store";
import { ConnectedCounter, ConnectedClicksDisplay } from "./counterApp";

class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <ConnectedCounter />
                    <hr />
                    <ConnectedClicksDisplay />
                </Fragment>
            </Provider>
        );
    }
}

export default App;
