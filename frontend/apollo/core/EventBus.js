/******************************************************************************
 * Relay Mission Control
 *
 * Apollo Framework
 * EventBus.js
 ******************************************************************************/

export class EventBus {

    #listeners = new Map();

    /**
     * Subscribe to an event.
     * @param {string} event
     * @param {Function} callback
     * @returns {Function} unsubscribe function
     */
    on(event, callback) {

        if (!this.#listeners.has(event)) {
            this.#listeners.set(event, new Set());
        }

        const listeners = this.#listeners.get(event);
        listeners.add(callback);

        return () => this.off(event, callback);

    }

    /**
     * Subscribe once.
     */
    once(event, callback) {

        const unsubscribe = this.on(event, (...args) => {

            unsubscribe();

            callback(...args);

        });

        return unsubscribe;

    }

    /**
     * Remove a listener.
     */
    off(event, callback) {

        const listeners = this.#listeners.get(event);

        if (!listeners) {
            return;
        }

        listeners.delete(callback);

        if (listeners.size === 0) {
            this.#listeners.delete(event);
        }

    }

    /**
     * Emit an event.
     */
    emit(event, payload = null) {

        const listeners = this.#listeners.get(event);

        if (!listeners) {
            return;
        }

        for (const callback of listeners) {

            try {

                callback(payload);

            } catch (error) {

                console.error(
                    `[EventBus] '${event}' listener failed`,
                    error
                );

            }

        }

    }

    /**
     * Remove all listeners.
     */
    clear() {

        this.#listeners.clear();

    }

    /**
     * Number of subscribed event names.
     */
    size() {

        return this.#listeners.size;

    }

}