/******************************************************************************
 * Relay Mission Control
 *
 * relay-panel.js
 ******************************************************************************/

import { Application } from "./app/Application.js";

export class RelayMissionControl extends HTMLElement {

    constructor() {

        super();

        this.attachShadow({

            mode: "open"

        });

        this.application =

            new Application(

                this.shadowRoot

            );

    }

    connectedCallback() {

        this.application.start();

    }

    disconnectedCallback() {

        this.application.stop();

    }

    set hass(hass) {

        this.application.setHass(hass);

    }

}

if (!customElements.get("relay-mission-control")) {

    customElements.define(

        "relay-mission-control",

        RelayMissionControl

    );

}