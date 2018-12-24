/* @flow */

let name: string = "";
let count: number = 0;

let get = () => count;
let inc = () => ++count;
let toString = () => `${name}: ${get()}`;

/*
    Since we cannot initialize anything otherwise,
    a common pattern is to provide a "init()" function
    to do all necessary initializations.
*/
const init = (n: string) => {
    name = n;
};

export default { inc, toString, init }; // everything else is private
