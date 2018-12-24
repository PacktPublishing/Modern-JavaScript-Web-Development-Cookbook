/* @flow */
"use strict";

const path = require("path");
const { spawn } = require("child_process");
const child = spawn("node", [path.resolve("out/process_spawn_dir.js")]);

child.stdin.write("/home/fkereki");

child.stdout.on("data", data => {
    console.log(String(data));
});

child.stdout.on("end", () => {
    child.kill();
});
