/* @flow */

import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

class DeviceHandler extends React.PureComponent<{
    setDevice: () => any
}> {
    static propTypes = {
        setDevice: PropTypes.func.isRequired
    };

    onLayoutHandler = () => this.props.setDevice();

    render() {
        return <View hidden onLayout={this.onLayoutHandler} />;
    }
}

export { DeviceHandler };
