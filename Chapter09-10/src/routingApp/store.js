/* @flow */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import { reducer } from "./login.reducer";

const logger = createLogger({ duration: true });

export const history = createBrowserHistory();

export const store = createStore(
    connectRouter(history)(reducer),
    composeWithDevTools(
        applyMiddleware(routerMiddleware(history), thunk, logger)
    )
);
