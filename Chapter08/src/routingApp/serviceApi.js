/* @flow */

import axios from "axios";

export const loginService = (user, password) =>
    axios.post(
        `http://localhost:8443/gettoken`,
        `user=${user}&password=${password}`
    );
