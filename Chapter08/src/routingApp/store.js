/* @flow */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer } from "./login.reducer";

export const store = createStore(reducer, applyMiddleware(thunk));
