/* @flow */

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./login.actions";

export const reducer = (
    state: object = {
        // initial state
        logging: false,
        token: ""
    },
    action
) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                logging: true,
                token: ""
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                logging: false,
                token: action.token
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                logging: false
            };

        default:
            return state;
    }
};
