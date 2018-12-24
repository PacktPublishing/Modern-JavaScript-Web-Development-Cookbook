/* @flow */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer } from "./world.reducer.js";

const logger = createLogger({ duration: true });

// The following uses redux-logger, only.
/*
export const store = createStore(reducer, applyMiddleware(thunk, logger));
*/

// The following uses redux-devtools-extension in addition to redux-logger

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
);
