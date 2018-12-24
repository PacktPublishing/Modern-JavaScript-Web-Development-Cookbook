/* @flow */

import React from "react";
import { Provider } from "react-redux";

import { store } from "./src/regionsApp/store";
import { Main } from "./src/regionsApp/main";

export default class App extends React.PureComponent<> {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}
