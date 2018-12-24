/* @flow */

export const COUNTER_INCREMENT = "counter:increment";

export const COUNTER_RESET = "counter:reset";

export type CounterAction = {
    type: string,
    value?: number
};

export const reset = () =>
    ({
        type: COUNTER_RESET
    }: CounterAction);

export const increment = (inc: number) =>
    ({
        type: COUNTER_INCREMENT,
        value: inc
    }: CounterAction);

export const decrement = (dec: number) =>
    ({
        type: COUNTER_INCREMENT,
        value: -dec
    }: CounterAction);

// returning increment(-dec) would have worked as well
