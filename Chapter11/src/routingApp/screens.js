/* @flow */

import React, { Component } from "react";
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const myStyles = StyleSheet.create({
    fullSize: {
        flex: 1
    },
    fullCenteredView: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    bigText: {
        fontSize: 24,
        fontWeight: "bold"
    },
    hamburger: {
        width: 22,
        height: 22,
        alignSelf: "flex-end"
    }
});

const makeSimpleView = text =>
    class extends Component<{ navigation: object }> {
        displayName = `View:${text}`;

        render() {
            return (
                <View style={myStyles.fullSize}>
                    <TouchableOpacity
                        onPress={this.props.navigation.toggleDrawer}
                    >
                        <Image
                            source={require("./hamburger.png")}
                            style={myStyles.hamburger}
                        />
                    </TouchableOpacity>
                    <View style={myStyles.fullCenteredView}>
                        <Text style={myStyles.bigText}>{text}</Text>
                    </View>
                </View>
            );
        }
    };

export const Home = makeSimpleView("Home");

export const Alpha = makeSimpleView("Alpha");

export const Bravo = makeSimpleView("Bravo");

export const Charlie = makeSimpleView("Charlie");

export const Zulu = makeSimpleView("Zulu");

export const Help = makeSimpleView("Help!");

export const SomeJumps = (props: object) => (
    <View style={myStyles.fullSize}>
        <Button
            onPress={() => props.navigation.navigate("Alpha")}
            title="Go to Alpha"
        />
        <Button
            onPress={() => props.navigation.navigate("Bravo")}
            title="Leap to Bravo"
        />
        <Button
            onPress={() => props.navigation.navigate("Charlie")}
            title="Jump to Charlie"
        />
    </View>
);
