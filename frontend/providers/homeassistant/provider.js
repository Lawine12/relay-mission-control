/******************************************************************************
 *
 * Home Assistant Provider
 *
 ******************************************************************************/

import { Provider } from "../provider.js";

export class HomeAssistantProvider extends Provider {

    constructor(store) {

        super("homeassistant");

        this.store = store;
        this.hass = null;

    }

    async connect() {

        console.log("[Provider] Home Assistant ready");

    }

    async disconnect() {

        console.log("[Provider] Home Assistant disconnected");

        this.store.setConnection(
            "homeassistant",
            false
        );

    }

    setHass(hass) {

        this.hass = hass;

        const entityCount = Object.keys(
            hass.states
        ).length;

        this.store.setConnection(
            "homeassistant",
            true
        );

        this.store.setHomeAssistant({

            version: hass.config.version,

            entityCount,

            lastUpdate: new Date()

        });

        this.store.update(
            "entities",
            hass.states
        );

    }

    getEntity(entityId) {

        return this.hass?.states?.[entityId] ?? null;

    }

    callService(domain, service, data = {}) {

        if (!this.hass) {
            return;
        }

        return this.hass.callService(
            domain,
            service,
            data
        );

    }

}