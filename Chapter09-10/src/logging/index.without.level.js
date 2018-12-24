/* @flow */

import debug from "debug";

const WHAT_TO_LOG = "myapp:SERVICE:*"; // change this to suit your needs

let log;

if (process.env.NODE_ENV === "development") {
    localStorage.setItem("debug", WHAT_TO_LOG);

    const ERROR_COLOR = "red";
    const WARN_COLOR = "brown";
    const INFO_COLOR = "blue";
    const VERBOSE_COLOR = "green";
    const DEBUG_COLOR = "gray";

    // CHANGE TO: COLOR, TOPIC, MESSAGE, ...EXTRA)

    log = {
        logMessage(
            color: string,
            topic: string,
            message: any = "--",
            ...rest: any
        ) {
            const logger = debug(topic);
            logger.color = color;
            logger(message, ...rest);
        },

        error(topic: string, ...args: any) {
            this.logMessage(ERROR_COLOR, topic, ...args);
        },

        warn(topic: string, ...args: any) {
            this.logMessage(WARN_COLOR, topic, ...args);
        },

        info(topic: string, ...args: any) {
            this.logMessage(INFO_COLOR, topic, ...args);
        },

        verbose(topic: string, ...args: any) {
            this.logMessage(VERBOSE_COLOR, topic, ...args);
        },

        debug(topic: string, ...args: any) {
            this.logMessage(DEBUG_COLOR, topic, ...args);
        }
    };
} else {
    log = {
        error() {},
        warn() {},
        info() {},
        verbose() {},
        debug() {}
    };
}

export { log };
