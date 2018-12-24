/* @flow */

import { getDeviceData } from "./device";

import type { deviceDataType } from "./device";

export const DEVICE_DATA = "device:data";

export type deviceDataAction = {
    type: string,
    deviceData: deviceDataType
};

export const setDevice = (deviceData?: object) =>
    ({
        type: DEVICE_DATA,
        deviceData: deviceData || getDeviceData()
    }: deviceDataAction);

/*
    A real app would have many more actions!
*/
