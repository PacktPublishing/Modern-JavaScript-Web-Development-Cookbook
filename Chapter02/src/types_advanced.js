/* @flow */
/* eslint-disable no-unused-vars */

let flag: number | boolean;
flag = true; // OK
flag = 1; // also OK
flag = "1"; // error: wrong type

let traffic: "red" | "amber" | "green"; // traffic is implicitly string
traffic = "yellow"; // error: not allowed

type numberOrString = number | string;

function addTwo(x: numberOrString, y: numberOrString) {
    return x + y;
}

class Person {
    // class fields need Flow annotations
    first: string;
    last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    initials(): string {
        return `${this.first[0]}${this.last[0]}`;
    }

    fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get lastFirst(): string {
        return `${this.last}, ${this.first}`;
    }

    set lastFirst(lf: string) {
        // very unsafe; no checks!
        const parts = lf.split(",");
        this.last = parts[0];
        this.first = parts[1];
    }
}

let pp = new Person("Jan", "Jansen"); // OK
let qq = new Person(1, 2); // error: wrong types for the constructor
let rr: Person; // OK, "Person" type is understood and can be used

const identity = <T>(x: T): T => x;

function identity2<T>(x: T): T {
    return x;
}

function identity3<T>(x: T): T {
    return 229; // wrong; this is always a number, not generic
}

function makeObject<T1, T2>(x: T1, y: T2) {
    return { first: x, second: y };
}

type pair<T> = [T, T];

type pairOfNumbers = pair<number>;
type pairOfStrings = pair<string>;

let pn: pairOfNumbers = [22, 9];
let ps: pairOfStrings = ["F", "K"];

type simpleFlag = number | boolean;
type complexObject = {
    id: string,
    name: string,
    indicator: simpleFlag,
    listOfValues: Array<number>
};

let myFlag: simpleFlag;
let something: complexObject = {
    id: "B2209",
    name: "Anna Malli",
    indicator: 1,
    listOfValues: [12, 4, 56]
};

class Animal {
    name: string;
    species: string;
    age: number;
}

class Pet {
    name: string;
    species: string;
    age: number;
}

let tom: Animal;
tom = new Pet(); // error: Pet and Animal are distinct types

interface AnimalInt {
    name: string;
    species: string;
    age: number;
}

class Animal2 implements AnimalInt {
    name: string;
    species: string;
    age: number;
}
class Pet2 implements AnimalInt {
    name: string;
    species: string;
    age: number;
}

let tom2: AnimalInt;
tom2 = new Pet2();
