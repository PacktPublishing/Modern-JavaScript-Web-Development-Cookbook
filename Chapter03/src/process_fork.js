/* @flow */

const path = require("path");
const { fork } = require("child_process");

const child = fork(path.resolve("out/process_fork_dir.js"));

child.send({ path: "/home/fkereki" });

child.on("message", data => {
    console.log(String(data));
});
