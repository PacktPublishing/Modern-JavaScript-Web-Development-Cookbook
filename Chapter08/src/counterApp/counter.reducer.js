/* @flow */

import { COUNTER_INCREMENT, COUNTER_RESET } from "./counter.actions";

import type { CounterAction } from "./counter.actions.js";

export const reducer = (
    state = {
        // initial state
        count: 0,
        clicks: 0
    },
    action: CounterAction
) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                count: state.count + action.value,
                clicks: state.clicks + 1
            };

        case COUNTER_RESET:
            return { count: 0, clicks: state.clicks + 1 };

        default:
            return state;
    }
};
