/* @flow */

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer } from "./counter.reducer.js";

const logger = createLogger({
    diff: true,
    duration: true
});

// The following uses only redux-logger
/*
export const store =
    process.env.NODE_ENV === "development"
        ? createStore(reducer, applyMiddleware(logger))
        : createStore(reducer);
*/

// The following uses redux-devtools-extension in addition to redux-logger

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(logger))
);
