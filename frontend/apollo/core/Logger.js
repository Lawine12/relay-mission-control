export class Logger {

    constructor(prefix = "Relay") {
        this.prefix = prefix;
    }

    info(...args) {
        console.log(`[${this.prefix}]`, ...args);
    }

    warn(...args) {
        console.warn(`[${this.prefix}]`, ...args);
    }

    error(...args) {
        console.error(`[${this.prefix}]`, ...args);
    }

}