/* @flow */
/* eslint-disable no-unused-vars */

let someFlag: boolean;
let greatTotal: number;
let firstName: string;

function toString(x: number): string {
    return String(x);
}

function addTwo(x: number | string, y: number | string) {
    return x + y;
}

function showValue(z: mixed): void {
    // not returning anything
    console.log("Showing... ", z);
}

let numbersList: Array<number>;
numbersList = [22, 9, 60]; // OK
numbersList[1] = "SEP"; // error; cannot assign a string to a number

let anotherList: number[];

let sealedObject: { name: string, age?: number } = { name: "" };
sealedObject.name = "Ivan Horvat"; // OK
sealedObject.id = 229; // error: key isn't defined in the data type
sealedObject = { age: 57 }; // error: mandatory "name" field is missing

let unsealedObject = {};
unsealedObject.id = 229; // OK

const toString2 = (x: number): string => {
    return x + "x";
};

type numberToString = number => string;
const toString3: numberToString = (x: number) => String(x);
