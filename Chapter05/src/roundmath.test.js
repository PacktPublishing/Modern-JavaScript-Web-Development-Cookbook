/* @flow */
"use strict";

const rm = require("./roundmath");

describe("addR", () => {
    it("should add first and round later", () => {
        expect(rm.addR(1.505, 2.505)).toBe(4.01);
    });

    it("should handle negatives", () => {
        expect(rm.addR(3.15, -2.149)).toBe(1.0);
    });
});

describe("divR", () => {
    it("should divide first, then round", () => {
        expect(rm.divR(22.96, 0.001)).toBe(22960);
    });

    it("should not divide by zero", () =>
        expect(() => rm.divR(22, 0)).toThrow());
});
