/* @flow */

import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import { Centered } from "../../storybook/centered";
import { CountrySelect } from "./countrySelect.component";

const fakeDeviceData = {
    isTablet: false,
    isPortrait: true,
    height: 1000,
    width: 720,
    scale: 1,
    fontScale: 1
};

storiesOf("CountrySelect", module)
    .addDecorator(getStory => <Centered>{getStory()}</Centered>)
    .add("with no countries yet", () => (
        <CountrySelect
            deviceData={fakeDeviceData}
            loading={true}
            currentCountry={""}
            onSelect={action("click:country")}
            getCountries={action("call:getCountries")}
            list={[]}
        />
    ))
    .add("with three countries", () => (
        <CountrySelect
            deviceData={fakeDeviceData}
            currentCountry={""}
            loading={false}
            onSelect={action("click:country")}
            getCountries={action("call:getCountries")}
            list={[
                {
                    countryCode: "UY",
                    countryName: "Uruguay"
                },
                {
                    countryCode: "AR",
                    countryName: "Argentina"
                },
                {
                    countryCode: "BR",
                    countryName: "Brazil"
                }
            ]}
        />
    ));
