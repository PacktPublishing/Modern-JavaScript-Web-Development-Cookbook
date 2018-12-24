/* @flow */

import { Dimensions } from "react-native";

export type deviceDataType = {
    isTablet: boolean,
    isPortrait: boolean,
    height: number,
    width: number,
    scale: number,
    fontScale: number
};

export const getDeviceData = (): deviceDataType => {
    const { height, width, scale, fontScale } = Dimensions.get("screen");

    const toReturn = {
        isTablet: Math.max(height, width) / Math.min(height, width) <= 1.6,
        isPortrait: height > width,
        height,
        width,
        scale,
        fontScale
    };

    console.log("getDeviceData: returning", JSON.stringify(toReturn));

    return toReturn;
};
