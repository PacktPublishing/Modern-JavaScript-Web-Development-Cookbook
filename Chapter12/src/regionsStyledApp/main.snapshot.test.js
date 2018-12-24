/* @flow */

import React from "react";
import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";

import { Main } from "./main.component";
import { store } from "./store";

const fakeDeviceData = {
    isTablet: false,
    isPortrait: true,
    height: 1000,
    width: 720,
    scale: 1,
    fontScale: 1
};

describe("Main component", () => {
    it("renders in portrait mode", () => {
        const tree = TestRenderer.create(
            <Provider store={store}>
                <Main
                    deviceData={{ ...fakeDeviceData, isPortrait: true }}
                />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders in landscape mode", () => {
        const tree = TestRenderer.create(
            <Provider store={store}>
                <Main
                    deviceData={{ ...fakeDeviceData, isPortrait: false }}
                />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
