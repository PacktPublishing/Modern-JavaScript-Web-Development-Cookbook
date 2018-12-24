class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    initials() {
        return `${this.first[0]}${this.last[0]}`;
    }

    fullName() {
        return `${this.first} ${this.last}`;
    }

    get lastFirst() {
        return `${this.last}, ${this.first}`;
    }

    set lastFirst(lf) {
        // very unsafe; no checks!
        const parts = lf.split(",");
        this.last = parts[0];
        this.first = parts[1];
    }
}

let pp = new Person("Erika", "Mustermann");
console.log(pp); // Person {first: "Erika", last: "Mustermann"}
console.log(pp.initials()); // "EM"
console.log(pp.fullName()); // "Erika Mustermann"

pp.lastFirst = "Svensson, Sven";
console.log(pp); // Person {first: " Sven", last: "Svensson"}

class Developer extends Person {
    constructor(first, last, language) {
        super(first, last);
        this.language = language;
    }

    fullName() {
        // redefines the original method
        return `${super.fullName()}, ${this.language} dev`;
    }
}

let dd = new Developer("John", "Doe", "JS");
console.log(dd); // Developer {first: "John", last: "Doe", language: "JS"}
console.log(dd.initials()); // "JD"
console.log(dd.fullName()); // "John Doe, JS dev"

const toJsonMixin = base =>
    class extends base {
        toJson() {
            return JSON.stringify(this);
        }
    };

const countKeysMixin = base =>
    class extends base {
        countKeys() {
            return Object.keys(this).length;
        }
    };

class PersonWithTwoMixins extends toJsonMixin(countKeysMixin(Person)) {
    toJson() {
        // redefine the method, just for the sake of it
        return "NEW TOJSON " + super.toJson();
    }
}

let p2m = new PersonWithTwoMixins("Jane", "Roe");
console.log(p2m);
console.log(p2m.toJson()); // NEW TOJSON {"first":"Jane","last":"Roe"}
console.log(p2m.countKeys()); // 2

class ExtDate extends Date {
    fullDate() {
        const months = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC"
        ];

        return (
            months[this.getMonth()] +
            " " +
            String(this.getDate()).padStart(2, "0") +
            " " +
            this.getFullYear()
        );
    }

    static getMonthName(m) {
        const months = [
            "JAN",
            "FEB",
            // etc...
            "NOV",
            "DEC"
        ];
        return months[m];
    }

    fullDate2() {
        return (
            ExtDate.getMonthName(this.getMonth()) +
            " " +
            String(this.getDate()).padStart(2, "0") +
            " " +
            this.getFullYear()
        );
    }
}

console.log(new ExtDate().fullDate()); // "MAY 01 2018"
