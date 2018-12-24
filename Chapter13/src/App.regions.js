/* @flow */

import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { getRegions } from "./regionsApp/world.actions";

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

const electron = window.require("electron").remote;
const { Menu } = electron;

const template = [
    {
        label: "Countries",
        submenu: [
            {
                label: "Uruguay",
                accelerator: "Alt+CommandOrControl+U",
                click: () => store.dispatch(getRegions("UY"))
            },
            {
                label: "Hungary",
                accelerator: "Alt+CommandOrControl+H",
                click: () => store.dispatch(getRegions("HU"))
            }
        ]
    },
    {
        label: "Bye!",
        role: "quit"
    }
];

const mainMenu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(mainMenu);

export default App;
