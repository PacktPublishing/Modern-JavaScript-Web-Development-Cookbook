/* @flow */

let name: string = "";
let count: number = 0;

let get = () => count;

let throwNotInit = () => {
    throw new Error("Not initialized");
};

let inc = throwNotInit;
let toString = throwNotInit;

/*
    Since we cannot initialize anything otherwise,
    a common pattern is to provide a "init()" function
    to do all necessary initializations. In this case,
    "inc()" and "toString()" won't work as expected
    if the module wasn't initialized.
*/
const init = (n: string) => {
    name = n;
    inc = () => ++count;
    toString = () => `${name}: ${get()}`;
};

export default { inc, toString, init }; // everything else is private
