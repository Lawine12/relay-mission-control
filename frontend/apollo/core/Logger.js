/******************************************************************************
 * Relay Mission Control
 *
 * Apollo Framework
 * Logger.js
 ******************************************************************************/

export const LogLevel = Object.freeze({
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    SILENT: 4
});

export class Logger {

    #prefix;
    #level;

    constructor(prefix = "Relay", level = LogLevel.INFO) {
        this.#prefix = prefix;
        this.#level = level;
    }

    setLevel(level) {
        this.#level = level;
    }

    getLevel() {
        return this.#level;
    }

    debug(...args) {
        if (this.#level <= LogLevel.DEBUG) {
            console.debug(`[${this.#prefix}]`, ...args);
        }
    }

    info(...args) {
        if (this.#level <= LogLevel.INFO) {
            console.info(`[${this.#prefix}]`, ...args);
        }
    }

    warn(...args) {
        if (this.#level <= LogLevel.WARN) {
            console.warn(`[${this.#prefix}]`, ...args);
        }
    }

    error(...args) {
        if (this.#level <= LogLevel.ERROR) {
            console.error(`[${this.#prefix}]`, ...args);
        }
    }

}