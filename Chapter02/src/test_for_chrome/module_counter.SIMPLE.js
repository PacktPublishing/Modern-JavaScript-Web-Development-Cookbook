// No Flow anywhere!

let name = "";
let count = 0;

let get = () => count;

let inc = () => ++count;
let toString = () => `${name}: ${get()}`;

const init = n => {
    name = n;
};

export default { inc, toString, init }; // everything else is private
