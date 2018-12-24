/* @flow */

function root(a: number, n: number = 2): number {
    return a ** (1 / n);
}

console.log(root(125, 3)); // 5
console.log(root(4)); // 2
console.log(root(9, undefined)); // 3

const nthRoot = (a: number, n: number = 2): number => a ** (1 / n);

console.log(nthRoot(64)); // 8

class Counter {
    count: number; // required by Flow

    constructor(i: number = 0) {
        this.count = i;
    }

    inc(n: number = 1) {
        this.count += n;
    }
}

const cnt = new Counter();
cnt.inc(3);
cnt.inc();
cnt.inc();
console.log(cnt.count); // 5

function nonsense(a = 2, b = a + 1, c = a * b, d = 9) {
    console.log(a, b, c, d);
}

nonsense(1, 2, 3, 4); // 1 2 3 4
nonsense(); // 2 3 6 9
nonsense(undefined, 4, undefined, 6); // 2 4 8 6
