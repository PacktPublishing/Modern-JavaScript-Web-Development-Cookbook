/* @flow */

import {
    milesToKm,
    ouncesToGrams,
    poundsToKg as p_to_kg
} from "./module_conversions.js";

console.log(`A miss is as good as ${milesToKm(1)} kilometers.`);

console.log(
    `${ouncesToGrams(1)} grams of protection `,
    `are worth ${p_to_kg(1) * 1000} grams of cure.`
);
