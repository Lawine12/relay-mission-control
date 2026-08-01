/******************************************************************************
 *
 * Relay Mission Control
 *
 * Application Store
 *
 ******************************************************************************/

class Store {

    constructor() {

this.state = {

    page: "home",

    connected: false,

    entities: {},

    theme: "relay",

    notifications: [],

    services: {

        homeassistant: "online",

        mqtt: "offline",

        simhub: "offline",

        crewchief: "offline",

        tradingpaints: "offline",

        internet: "online"

    },

    race: {

        session: null,

        countdown: null,

        flag: "green"

    }

};

        this.listeners = new Set();

    }

    getState() {

        return this.state;

    }

    subscribe(listener) {

        this.listeners.add(listener);

        listener(this.state);

        return () => {

            this.listeners.delete(listener);

        };

    }

    setState(update) {

        this.state = {

            ...this.state,

            ...update

        };

        this.emit();

    }

    setPage(page) {

        this.state.page = page;

        this.emit();

    }

    updateEntity(entityId, entity) {

        this.state.entities = {

            ...this.state.entities,

            [entityId]: entity

        };

        this.emit();

    }

    getEntity(entityId) {

        return this.state.entities[entityId];

    }

    emit() {

        this.listeners.forEach(listener => {

            listener(this.state);

        });

    }

}

export const store = new Store();