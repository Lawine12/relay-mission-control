/******************************************************************************
 * Relay Mission Control
 *
 * Logger.js
 ******************************************************************************/

export class Logger {

    constructor(prefix = "Relay") {

        this.prefix = prefix;

    }

    info(...args) {

        console.info(

            `[${this.prefix}]`,

            ...args

        );

    }

    warn(...args) {

        console.warn(

            `[${this.prefix}]`,

            ...args

        );

    }

    error(...args) {

        console.error(

            `[${this.prefix}]`,

            ...args

        );

    }

    debug(...args) {

        console.debug(

            `[${this.prefix}]`,

            ...args

        );

    }

}