/* @flow */

import React from "react";
import PropTypes from "prop-types";
import { View, Text, Picker } from "react-native";

import type { deviceDataType } from "./device";

export class CountrySelect extends React.PureComponent<{
    deviceData: deviceDataType,
    loading: boolean,
    currentCountry: string,
    list: Array<object>,
    onSelect: string => void,
    getCountries: () => void
}> {
    static propTypes = {
        deviceData: PropTypes.object.isRequired, // deviceDataType,
        loading: PropTypes.bool.isRequired,
        currentCountry: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
        onSelect: PropTypes.func.isRequired,
        getCountries: PropTypes.func.isRequired
    };

    componentDidMount() {
        if (this.props.list.length === 0) {
            this.props.getCountries();
        }
    }

    onSelect = value => this.props.onSelect(value);

    render() {
        if (this.props.loading) {
            return (
                <View>
                    <Text>Loading countries...</Text>
                </View>
            );
        } else {
            const sortedCountries = [...this.props.list].sort(
                (a, b) => (a.countryName < b.countryName ? -1 : 1)
            );

            return (
                <View>
                    <Text>Country:</Text>
                    <Picker
                        onValueChange={this.onSelect}
                        prompt="Country"
                        selectedValue={this.props.currentCountry || "TV"}
                    >
                        <Picker.Item
                            key={"00"}
                            label={"Select a country:"}
                            value={""}
                        />
                        {sortedCountries.map(x => (
                            <Picker.Item
                                key={x.countryCode}
                                label={x.countryName}
                                value={x.countryCode}
                            />
                        ))}
                    </Picker>
                </View>
            );
        }
    }
}
