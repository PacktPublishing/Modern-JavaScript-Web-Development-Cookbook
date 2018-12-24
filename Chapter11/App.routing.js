/* @flow */

import React from "react";
import { StatusBar } from "react-native";

import { MyDrawer } from "./src/routingApp/drawer";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <StatusBar hidden />
                <MyDrawer />
            </React.Fragment>
        );
    }
}

export default App;
