/* @flow */
"use strict";

/*
    In real life, validateUser could check a database,
    look into an Active Directory, call another service,
    etc. -- but for this demo, let's keep it quite
    simple and only accept a single hardcoded user.
*/

const validateUser = (
    userName: string,
    password: string,
    callback: (?string, ?string) => void
) => {
    if (!userName || !password) {
        callback("Missing user/password", null);
    } else if (userName === "fkereki" && password === "modernjsbook") {
        callback(null, "fkereki"); // OK, send userName back
    } else {
        callback("Not valid user", null);
    }
};

module.exports = validateUser;
