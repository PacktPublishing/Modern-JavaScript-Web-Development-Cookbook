/* @flow */

import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const centerColor = "white";
const styles = StyleSheet.create({
    centered: {
        flex: 1,
        backgroundColor: centerColor,
        alignItems: "center",
        justifyContent: "center"
    }
});

export class Centered extends React.Component<{ children: node }> {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        return <View style={styles.centered}>{this.props.children}</View>;
    }
}
