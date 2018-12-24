/* @flow */

import React from "react";
import { View, StatusBar } from "react-native";

import {
    ConnectedCountrySelect,
    ConnectedRegionsTable,
    ConnectedDeviceHandler
} from ".";
import type { deviceDataType } from "./device";

/* eslint-disable react-native/no-inline-styles */

export class Main extends React.PureComponent<{
    deviceData: deviceDataType
}> {
    render() {
        if (this.props.deviceData.isPortrait) {
            return (
                <View style={{ flex: 1 }}>
                    <StatusBar hidden />
                    <ConnectedDeviceHandler />
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <View>
                            <ConnectedCountrySelect />
                        </View>
                        <View style={{ flex: 1 }}>
                            <ConnectedRegionsTable />
                        </View>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <StatusBar hidden />
                    <ConnectedDeviceHandler />
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            <ConnectedCountrySelect />
                        </View>
                        <View style={{ flex: 1 }}>
                            <ConnectedRegionsTable />
                        </View>
                    </View>
                </View>
            );
        }
    }
}
