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
        console.log("countrySelect: componentDidMount");
        if (this.props.list.length === 0) {
            console.log("countrySelect: Need to get countries");
            this.props.getCountries();
        }
    }

    onSelect = (value: string) => {
        console.log("countrySelect: onSelect called with value=", value);
        this.props.onSelect(value);
    };

    render() {
        if (this.props.loading || this.props.list.length === 0) {
            console.log("countrySelect: render, no countries");
            return (
                <View>
                    <Text>Loading countries...</Text>
                </View>
            );
        } else {
            console.log(
                "countrySelect: render, countries length=",
                this.props.list.length
            );
            const sortedCountries = [...this.props.list].sort(
                (a, b) => (a.countryName < b.countryName ? -1 : 1)
            );

            return (
                <View>
                    <Text>Country:</Text>
                    <Picker
                        onValueChange={this.onSelect}
                        prompt="Country"
                        selectedValue={this.props.currentCountry}
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
