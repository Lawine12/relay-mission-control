/******************************************************************************
 *
 * Relay Mission Control
 *
 * Frontend Entry Point
 *
 ******************************************************************************/

import { DashboardLayout } from "./layout/dashboard-layout.js";
import { Router } from "./router.js";
import { HomePage } from "./pages/home-page.js";

export class RelayMissionControl extends HTMLElement {

    constructor() {

        super();

        this.attachShadow({ mode: "open" });

        this.layout = null;
        this.router = null;
        this._hass = null;

    }

    connectedCallback() {

        if (this.layout) return;

        this.layout = new DashboardLayout(this.shadowRoot);

        this.layout.render();

        this.router = new Router(this.layout.content);

        this.router.register(
            "home",
            new HomePage(this.layout.content)
        );

        this.router.start("home");

    }

    set hass(hass) {

        this._hass = hass;

        // Home Assistant integration comes next.
        console.log("Relay Mission Control connected.", hass);

    }

}

customElements.define(
    "relay-mission-control",
    RelayMissionControl
);