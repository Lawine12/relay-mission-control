/******************************************************************************
 *
 * Relay Mission Control
 *
 * Home Assistant Data Service
 *
 ******************************************************************************/

class HomeAssistantService {

    constructor() {

        this.entities = new Map();
        this.listeners = new Map();

        this.connected = false;

    }

    connect(hass) {

        this.hass = hass;

        this.connected = true;

        this.refresh();

    }

    refresh() {

        if (!this.hass) return;

        this.entities.clear();

        Object.entries(this.hass.states).forEach(([id, state]) => {

            this.entities.set(id, state);

        });

        this.notifyAll();

    }

    get(entityId) {

        return this.entities.get(entityId);

    }

    state(entityId) {

        return this.entities.get(entityId)?.state;

    }

    attributes(entityId) {

        return this.entities.get(entityId)?.attributes ?? {};

    }

    subscribe(entityId, callback) {

        if (!this.listeners.has(entityId)) {

            this.listeners.set(entityId, []);

        }

        this.listeners.get(entityId).push(callback);

    }

    notify(entityId) {

        const callbacks = this.listeners.get(entityId);

        if (!callbacks) return;

        const entity = this.entities.get(entityId);

        callbacks.forEach(cb => cb(entity));

    }

    notifyAll() {

        this.listeners.forEach((_, entityId) => {

            this.notify(entityId);

        });

    }

}

export const HA = new HomeAssistantService();