/* @flow */

import React from "react";
import PropTypes from "prop-types";
import { View, ScrollView, Text, StyleSheet } from "react-native";

import type { deviceDataType } from "./device";

import { lowColor, fullSizeStyle } from "./styleConstants";

const ownStyle = StyleSheet.create({
    grayish: {
        backgroundColor: lowColor
    }
});

export class RegionsTable extends React.PureComponent<{
    deviceData: deviceDataType,
    list: Array<{
        regionCode: string,
        regionName: string
    }>
}> {
    static propTypes = {
        deviceData: PropTypes.object.isRequired,
        list: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    static defaultProps = {
        list: []
    };

    render() {
        if (this.props.list.length === 0) {
            return (
                <View style={ownStyle.fullSize}>
                    <Text>No regions.</Text>
                </View>
            );
        } else {
            const ordered = [...this.props.list].sort(
                (a, b) => (a.regionName < b.regionName ? -1 : 1)
            );

            return (
                <ScrollView style={[fullSizeStyle, ownStyle.grayish]}>
                    {ordered.map(x => (
                        <View key={`${x.countryCode}-${x.regionCode}`}>
                            <Text>{x.regionName}</Text>
                        </View>
                    ))}
                </ScrollView>
            );
        }
    }
}
