/* @flow */

import React from "react";
import { View, StatusBar } from "react-native";

import { ConnectedCountrySelect, ConnectedRegionsTable } from ".";

export class Main extends React.PureComponent<> {
    render() {
        return (
            <View>
                <StatusBar hidden />
                <ConnectedCountrySelect />
                <ConnectedRegionsTable />
            </View>
        );
    }
}
