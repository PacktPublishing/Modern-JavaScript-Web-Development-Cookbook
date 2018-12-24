/* @flow */

import React from "react";
import { View, StatusBar } from "react-native";

import { ConnectedAdaptiveView } from "./adaptiveView.connected";
import { ConnectedDeviceHandler } from "./deviceHandler.connected";

export class Main extends React.PureComponent<> {
    render() {
        return (
            <View>
                <StatusBar hidden />
                <ConnectedDeviceHandler />
                <ConnectedAdaptiveView />
            </View>
        );
    }
}
