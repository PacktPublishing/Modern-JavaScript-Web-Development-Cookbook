const fs = window.require("electron").remote.require("fs");
const myDir = fs.readdirSync("/home/fkereki/JS_BOOK/modernjs");
console.log("Project dir:", myDir.filter(x => !x.startsWith(".")));
