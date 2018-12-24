/* @flow */
"use strict";

const validateUser = require("./validate_user");

describe("validateUser", () => {
    let cb;

    beforeEach(() => {
        cb = jest.fn();
    });

    it("should reject a call with empty user", () => {
        validateUser("", "somepass", cb);
        expect(cb).toHaveBeenCalled();
        expect(cb).toHaveBeenCalledWith("Missing user/password", null);
    });

    it("should reject a wrong password", () => {
        validateUser("fkereki", "wrongpassword", cb);
        expect(cb).toHaveBeenCalledWith("Not valid user", null);
    });

    it("should accept a correct password", () => {
        validateUser("fkereki", "modernjsbook", cb);
        expect(cb).toHaveBeenCalledWith(null, "fkereki");
    });
});
