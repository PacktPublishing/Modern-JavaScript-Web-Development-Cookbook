/* @flow */

import myCounter from "./module_counter.1.js";

/*
    Initialize the counter appropriately
*/
myCounter.init("Clicks");

/*
    The rest would work as before
*/
myCounter.inc(); // 1
myCounter.inc(); // 2
myCounter.inc(); // 3
myCounter.toString(); // "Clicks: 3"
