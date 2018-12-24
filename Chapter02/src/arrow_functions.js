/* @flow */
/* eslint-disable no-unused-vars, one-var */

function Show(value: mixed): void {
    this.saved = value;
    setTimeout(function() {
        console.log(this.saved);
    }, 1000);
}

const w = new Show("Doesn't work..."); // instead, "undefined" is shown

function Show1(value: mixed): void {
    this.saved = value;
    setTimeout(
        function() {
            console.log(this.saved);
        }.bind(this),
        1000
    );
}

function Show2(value: mixed): void {
    this.saved = value;
    const that = this;
    setTimeout(function() {
        console.log(that.saved);
    }, 2000);
}

function Show3(value: mixed): void {
    this.saved = value;
    setTimeout(() => {
        console.log(this.saved);
    }, 3000);
}

const x = new Show1("This");
const y = new Show2("always");
const z = new Show3("works");
