/******************************************************************************
 * Relay Mission Control
 *
 * Store.js
 ******************************************************************************/

export class Store {

    constructor(initialState = {}) {

        this.state = structuredClone(initialState);
        this.listeners = new Set();

    }

    get(path = null) {

        if (!path) {

            return structuredClone(this.state);

        }

        return path
            .split(".")
            .reduce((value, key) => value?.[key], this.state);

    }

    set(path, value) {

        const keys = path.split(".");

        let current = this.state;

        while (keys.length > 1) {

            const key = keys.shift();

            if (!(key in current)) {

                current[key] = {};

            }

            current = current[key];

        }

        current[keys[0]] = value;

        this.emit();

    }

    subscribe(callback) {

        this.listeners.add(callback);

        callback(this.get());

        return () => {

            this.listeners.delete(callback);

        };

    }

    emit() {

        const snapshot = this.get();

        for (const listener of this.listeners) {

            listener(snapshot);

        }

    }

}