/* @flow */

import React from "react";
import { storiesOf } from "@storybook/react-native";

import { Centered } from "../../storybook/centered";
import { RegionsTable } from "./regionsTable.component";

const fakeDeviceData = {
    isTablet: false,
    isPortrait: true,
    height: 1000,
    width: 720,
    scale: 1,
    fontScale: 1
};

storiesOf("RegionsTable", module)
    .addDecorator(getStory => <Centered>{getStory()}</Centered>)
    .add("with no regions", () => (
        <RegionsTable deviceData={fakeDeviceData} list={[]} />
    ))
    .add("with some regions", () => (
        <RegionsTable
            deviceData={fakeDeviceData}
            list={[
                {
                    countryCode: "UY",
                    regionCode: "10",
                    regionName: "Montevideo"
                },
                {
                    countryCode: "UY",
                    regionCode: "9",
                    regionName: "Maldonado"
                },
                {
                    countryCode: "UY",
                    regionCode: "5",
                    regionName: "Cerro Largo"
                }
            ]}
        />
    ));
