// @flow

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

console.log(ExtDate.getMonthName(8)); // "SEP"
console.log(new ExtDate().fullDate2()); // "MAY 01 2018"
