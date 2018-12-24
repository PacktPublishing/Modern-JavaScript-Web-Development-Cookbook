/* @flow */

import { loginService } from "./serviceApi";

export const LOGIN_REQUEST = "login:request";
export const LOGIN_SUCCESS = "login:success";
export const LOGIN_FAILURE = "login:failure";

export const loginRequest = () => ({
    type: LOGIN_REQUEST
});

export const loginSuccess = (token: string) => ({
    type: LOGIN_SUCCESS,
    token
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

// Complex actions:

export const attemptLogin = (
    user: string,
    password: string
) => async dispatch => {
    try {
        dispatch(loginRequest());
        // the next line delays execution for 5 seconds:
        // await new Promise(resolve => setTimeout(resolve, 5000));
        const result = await loginService(user, password);
        dispatch(loginSuccess(result.data));
    } catch (e) {
        dispatch(loginFailure());
    }
};
