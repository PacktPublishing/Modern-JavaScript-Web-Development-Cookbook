/* @flow */

import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

import type { deviceDataType } from "./device";

const textStyle = StyleSheet.create({
    bigText: {
        fontWeight: "bold",
        fontSize: 24
    }
});

export class AdaptiveView extends React.PureComponent<{
    deviceData: deviceDataType
}> {
    static propTypes = {
        deviceData: PropTypes.object.isRequired
    };

    renderHandset() {
        return (
            <View>
                <Text style={textStyle.bigText}>
                    I believe I am a HANDSET currently in
                    {this.props.deviceData.isPortrait
                        ? " PORTRAIT "
                        : " LANDSCAPE "}
                    orientation
                </Text>
            </View>
        );
    }

    renderTablet() {
        return (
            <View>
                <Text style={textStyle.bigText}>
                    I think I am a
                    {this.props.deviceData.isPortrait
                        ? " PORTRAIT "
                        : " LANDSCAPE "}
                    TABLET
                </Text>
            </View>
        );
    }

    render() {
        return this.props.deviceData.isTablet
            ? this.renderTablet()
            : this.renderHandset();
    }
}
