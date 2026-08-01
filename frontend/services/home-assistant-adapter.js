/******************************************************************************
 *
 * Relay Mission Control
 *
 * Home Assistant Adapter
 *
 ******************************************************************************/

import { store } from "../store/store.js";
import { Events } from "../core/event-bus.js";
import { EVENT } from "../core/events.js";

export class HomeAssistantAdapter {

    constructor() {

        this.hass = null;

    }

    setHass(hass) {

        if (!hass) return;

        this.hass = hass;

        store.setState({

            connected: true

        });

        this.syncStates();

        Events.emit(EVENT.CONNECTION_CHANGED, {

            connected: true

        });

    }

    syncStates() {

        if (!this.hass) return;

        Object.entries(this.hass.states).forEach(

            ([entityId, entity]) => {

                store.updateEntity(

                    entityId,

                    entity

                );

                Events.emit(

                    EVENT.ENTITY_UPDATED,

                    {

                        entityId,

                        entity

                    }

                );

            }

        );

    }

    callService(domain, service, serviceData = {}) {

        if (!this.hass) {

            console.warn(

                "Home Assistant not connected."

            );

            return;

        }

        return this.hass.callService(

            domain,

            service,

            serviceData

        );

    }

    callScript(scriptName) {

        return this.callService(

            "script",

            scriptName

        );

    }

}