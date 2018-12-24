/* @flow */
"use strict";

const child_process = require("child_process");
const { promisify } = require("util");

child_process.exec = promisify(child_process.exec);

async function getDirectoryJs(path: string) {
    try {
        const cmd = "ls -ld -1 *.js";
        const stdout = await child_process.exec(cmd, { cwd: path });
        console.log("OUT", path || "");
        console.log(stdout);
    } catch (e) {
        console.log("ERR", e.stderr);
    }
}

getDirectoryJs("/boot");
/*
ERR ls: cannot access '*.js': No such file or directory
*/

getDirectoryJs("/home/fkereki/MODERNJS/chapter03/flow-typed/npm");
/*
OUT /home/fkereki/MODERNJS/chapter03/flow-typed/npm
-rw-r--r-- 1 fkereki users  4791 Apr  9 12:52 axios_v0.18.x.js
-rw-r--r-- 1 fkereki users  3006 Mar 28 14:51 babel-cli_vx.x.x.js
-rw-r--r-- 1 fkereki users  3904 Apr  9 12:52 babel-eslint_vx.x.x.js
-rw-r--r-- 1 fkereki users  2760 Apr  9 12:52 babel-preset-env_vx.x.x.js
-rw-r--r-- 1 fkereki users   888 Apr  9 12:52 babel-preset-flow_vx.x.x.js
-rw-r--r-- 1 fkereki users   518 Apr  9 12:52 eslint-config-recommended_vx.x.x.js
-rw-r--r-- 1 fkereki users 14995 Apr  9 12:52 eslint-plugin-flowtype_vx.x.x.js
-rw-r--r-- 1 fkereki users 73344 Apr  9 12:52 eslint_vx.x.x.js
-rw-r--r-- 1 fkereki users  1889 Mar 28 14:51 fetch_vx.x.x.js
-rw-r--r-- 1 fkereki users   188 Apr  9 12:52 flow-bin_v0.x.x.js
-rw-r--r-- 1 fkereki users 13290 Apr  9 12:52 flow-coverage-report_vx.x.x.js
-rw-r--r-- 1 fkereki users  1091 Apr  9 12:52 flow-remove-types_vx.x.x.js
-rw-r--r-- 1 fkereki users  5763 Apr  9 12:52 flow-typed_vx.x.x.js
-rw-r--r-- 1 fkereki users  1009 Apr  9 12:52 mariasql_vx.x.x.js
-rw-r--r-- 1 fkereki users     0 Mar 28 14:51 moment_v2.3.x.js
-rw-r--r-- 1 fkereki users  5880 Apr  9 12:52 nodemon_vx.x.x.js
-rw-r--r-- 1 fkereki users  4786 Apr  9 12:52 prettier_v1.x.x.js
*/
