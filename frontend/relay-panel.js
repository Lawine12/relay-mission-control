/******************************************************************************
 * Relay Mission Control
 *
 * relay-panel.js
 ******************************************************************************/

import { Application } from "./apollo/index.js";
import css from "./apollo/styles/index.css?inline";

export class RelayMissionControl extends HTMLElement {

    constructor() {

        super();

        this.attachShadow({

            mode: "open"

        });

        const style = document.createElement("style");

        style.textContent = css;

        this.shadowRoot.appendChild(style);

        this.application = new Application(this.shadowRoot);

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