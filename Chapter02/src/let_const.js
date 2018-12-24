/* @flow */
/* eslint-disable no-unused-vars, no-constant-condition, no-var, prefer-const */

{
    let w = 0;
}
console.log(w); // error: w is not defined!

let x = 1;
{
    let x = 99;
}
console.log(x); // still 1;

let y = 2;
for (let y = 999; false; ) {
    /* nothing! */
}
console.log(y); // still 2;

const z = 3;
z = 999; // error!

// Countdown to zero?
var delay = 0;
for (var i = 10; i >= 0; i--) {
    delay += 1000;
    setTimeout(() => {
        console.log(i + (i > 0 ? "..." : "!"));
    }, delay);
}

delay = 0;
for (let i = 10; i >= 0; i--) {
    // minimal fix!
    delay += 1000;
    setTimeout(() => {
        console.log(i + (i > 0 ? "..." : "!"));
    }, delay);
}
