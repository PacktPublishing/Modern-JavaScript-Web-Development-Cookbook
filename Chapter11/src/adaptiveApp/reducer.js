/* @flow */

import { getDeviceData } from "./device";

import { DEVICE_DATA } from "./actions";

import type { deviceAction } from "./actions";

export const reducer = (
    state: object = {
        // initial state: more app data, plus
        deviceData: getDeviceData()
    },
    action: deviceAction
) => {
    switch (action.type) {
        case DEVICE_DATA:
            return {
                ...state,
                deviceData: action.deviceData
            };

        /*
            In a real app, here there would
            be plenty more "case"s
        */

        default:
            return state;
    }
};
