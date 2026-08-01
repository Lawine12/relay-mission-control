/******************************************************************************
 *
 * Relay Mission Control
 *
 * status-bar.js
 *
 ******************************************************************************/

import { Component } from "../core/component.js";
import { store } from "../store/store.js";

const DEFAULT_SERVICES = [
    { id: "homeassistant", label: "Home Assistant" },
    { id: "mqtt",          label: "MQTT" },
    { id: "simhub",        label: "SimHub" },
    { id: "crewchief",     label: "CrewChief" },
    { id: "tradingpaints", label: "Trading Paints" },
    { id: "internet",      label: "Internet" }
];

export class StatusBar extends Component {

    constructor() {

        super();

        this.unsubscribe = null;

    }

    render() {

        const footer = document.createElement("footer");

        footer.id = "status-bar";

        footer.innerHTML = `
            <div class="status-bar-left"></div>
            <div class="status-bar-right">
                Relay Mission Control v0.1.0
            </div>
        `;

        return footer;

    }

    onMounted() {

        this.unsubscribe = store.subscribe(state => {

            this.renderServices(state);

        });

    }

    onUnmount() {

        this.unsubscribe?.();

    }

    renderServices(state) {

        const container = this.qs(".status-bar-left");

        container.innerHTML = "";

        DEFAULT_SERVICES.forEach(service => {

            const status =
                state.services?.[service.id] ?? "offline";

            const chip = document.createElement("div");

            chip.className =
                `status-service ${status}`;

            chip.innerHTML = `
                <span class="status-led"></span>
                <span>${service.label}</span>
            `;

            container.appendChild(chip);

        });

    }

}