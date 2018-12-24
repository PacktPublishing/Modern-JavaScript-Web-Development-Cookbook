/* @flow */
"use strict";

// These won't be exported:

const roundToCents = (x: number): number => Math.round(x * 100) / 100;

const changeSign = (x: number): number => -x;

// The following will be exported:

const addR = (x: number, y: number): number => roundToCents(x + y);

const subR = (x: number, y: number): number => addR(x, changeSign(y));

const multR = (x: number, y: number): number => roundToCents(x * y);

const divR = (x: number, y: number): number => {
    if (y === 0) {
        throw new Error("Divisor must be nonzero");
    } else {
        return roundToCents(x / y);
    }
};

/*
    NOTES:
    1. Exports are all together, at the end, per convention
    2. roundToCents and changeSign are not exported, on purpose
*/
exports.addR = addR;
exports.subR = subR;
exports.multR = multR;
exports.divR = divR;
