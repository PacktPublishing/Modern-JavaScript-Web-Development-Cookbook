/* @flow */

/*
    In the following code, the only thing that needs
    an explicit type declaration for Flow, is "name".
    Flow can work out on its own the rest of the types.
*/

const myCounter = ((name: string) => {
    let count = 0;

    const get = () => count; // private

    const inc = () => ++count;

    const toString = () => `${name}: ${get()}`;

    return {
        inc,
        toString
    };
})("Clicks");

console.log(myCounter); // an object with "inc" and "toString" properties

myCounter.inc(); // 1
myCounter.inc(); // 2
myCounter.inc(); // 3

myCounter.toString(); // "Clicks: 3"
