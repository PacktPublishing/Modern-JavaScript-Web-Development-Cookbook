/* @flow */

import debug from "debug";

const WHAT_TO_LOG = "myapp:SERVICE:*"; // change this to suit your needs
const MIN_LEVEL_TO_LOG = "info"; // error, warn, info, verbose, or debug

const log = {
    error() {},
    warn() {},
    info() {},
    verbose() {},
    debug() {}
};

const logMessage = (
    color: string,
    topic: string,
    message: any = "--",
    ...rest: any
) => {
    const logger = debug(topic);
    logger.color = color;
    logger(message, ...rest);
};

if (process.env.NODE_ENV === "development") {
    localStorage.setItem("debug", WHAT_TO_LOG);

    /* eslint-disable no-fallthrough */
    switch (MIN_LEVEL_TO_LOG) {
        case "debug":
            log.debug = (topic: string, ...args: any) =>
                logMessage("gray", topic, ...args);

        case "verbose":
            log.verbose = (topic: string, ...args: any) =>
                logMessage("green", topic, ...args);

        case "info":
            log.info = (topic: string, ...args: any) =>
                logMessage("blue", topic, ...args);

        case "warn":
            log.warn = (topic: string, ...args: any) =>
                logMessage("brown", topic, ...args);

        case "error":
        default:
            log.error = (topic: string, ...args: any) =>
                logMessage("red", topic, ...args);
    }
}

export { log };
