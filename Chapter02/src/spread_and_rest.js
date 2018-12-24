/* @flow */
/* eslint-disable prefer-const,no-unused-vars,no-unused-labels */

let values = [22, 9, 60, 12, 4, 56];
const maxOfValues = Math.max(...values); // 60
const minOfValues = Math.min(...values); // 4

let arr1 = [1, 1, 2, 3];
let arr2 = [13, 21, 34];
let copyOfArr1 = [...arr1];
let fibArray = [0, ...arr1, 5, 8, ...arr2]; // the first 10 Fibonacci numbers

let person = { name: "Juan", age: 24 };
let copyOfPerson = { ...person };
let expandedPerson = { ...person, sister: "María" };

function average(...nums: Array<number>): number {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum / nums.length;
}
console.log(average(22, 9, 60, 12, 4, 56)); // 27.166667

const simpleAction = (t: string, d: mixed): Object => {
    type: t;
    data: d;
    return {};
};
