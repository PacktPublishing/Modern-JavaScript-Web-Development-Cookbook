/* @flow */

import { createStore } from "redux";

import { reducer } from "./counter.reducer.js";

export const store = createStore(reducer);
