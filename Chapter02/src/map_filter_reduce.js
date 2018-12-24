/* @flow */
/* eslint-disable no-unused-vars, one-var */

const someArray: Array<number> = [22, 9, 60, 12, 4, 56];
const totalSum = someArray.reduce(
    (acc: number, val: number) => acc + val,
    0
); // 163

const names = ["Juan", "María", "Sylvia", "Federico"];
const bulletedList =
    "<ul>" +
    names.reduce((acc, val) => `${acc}<li>${val}</li>`, "") +
    "</ul>";
// <ul><li>Juan</li><li>María</li><li>Sylvia</li><li>Federico</li></ul>

type person = { name: string, sex: string, age: number };
const family: Array<person> = [
    { name: "Huey", sex: "M", age: 7 },
    { name: "Dewey", sex: "M", age: 8 },
    { name: "Louie", sex: "M", age: 9 },
    { name: "Daisy", sex: "F", age: 25 },
    { name: "Donald", sex: "M", age: 30 },
    { name: "Della", sex: "F", age: 30 }
];

const ages = family.map(x => x.age);
// [7, 8, 9, 25, 30, 30]

const males = family.filter(x => x.sex === "M");
console.log(males.length); // 4

const eldestMaleAge = family
    .filter(x => x.sex === "M")
    .map(x => x.age)
    .reduce((acc, val) => Math.max(acc, val), 0);
console.log(eldestMaleAge); // 30
