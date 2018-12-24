/* @flow */

type conversion = number => number;

const SPEED_OF_LIGHT_IN_VACUUM_IN_MPS = 186282;
const KILOMETERS_PER_MILE = 1.60934;
const GRAMS_PER_POUND = 453.592;
const GRAMS_PER_OUNCE = 28.3495;

const milesToKm: conversion = m => m * KILOMETERS_PER_MILE;
const kmToMiles: conversion = k => k / KILOMETERS_PER_MILE;

const poundsToKg: conversion = p => p * (GRAMS_PER_POUND / 1000);
const kgToPounds: conversion = k => k / (GRAMS_PER_POUND / 1000);

const ouncesToGrams: conversion = o => o * GRAMS_PER_OUNCE;
const gramsToOunces: conversion = g => g / GRAMS_PER_OUNCE;

/*
    It's usually preferred to include all "export"
    statements together, at the end of the file.
    You need not have a SINGLE export, however.
*/
export { milesToKm, kmToMiles };
export { poundsToKg, kgToPounds, gramsToOunces, ouncesToGrams };
export { SPEED_OF_LIGHT_IN_VACUUM_IN_MPS };
