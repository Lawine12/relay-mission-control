/******************************************************************************
 *
 * Relay Mission Control
 *
 * Event Bus
 *
 ******************************************************************************/

class EventBus {

    constructor() {

        this.events = new Map();

    }

    on(event, callback) {

        if (!this.events.has(event)) {

            this.events.set(event, new Set());

        }

        this.events.get(event).add(callback);

        return () => this.off(event, callback);

    }

    off(event, callback) {

        this.events.get(event)?.delete(callback);

    }

    emit(event, payload = {}) {

        const listeners = this.events.get(event);

        if (!listeners) return;

        listeners.forEach(listener => {

            try {

                listener(payload);

            } catch (err) {

                console.error(
                    `[Relay] Event '${event}' failed`,
                    err
                );

            }

        });

    }

    once(event, callback) {

        const unsubscribe = this.on(event, payload => {

            unsubscribe();

            callback(payload);

        });

    }

}

export const Events = new EventBus();