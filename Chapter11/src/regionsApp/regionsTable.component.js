/* @flow */

import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

export class RegionsTable extends React.PureComponent<{
    list: Array<{
        regionCode: string,
        regionName: string
    }>
}> {
    static propTypes = {
        list: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    static defaultProps = {
        list: []
    };

render() {
    if (this.props.list.length === 0) {
        return (
            <View>
                <Text>No regions.</Text>
            </View>
        );
    } else {
        const ordered = [...this.props.list].sort(
            (a, b) => (a.regionName < b.regionName ? -1 : 1)
        );

        return (
            <View>
                {ordered.map(x => (
                    <View key={`${x.countryCode}-${x.regionCode}`}>
                        <Text>{x.regionName}</Text>
                    </View>
                ))}
            </View>
        );
    }
}
}
