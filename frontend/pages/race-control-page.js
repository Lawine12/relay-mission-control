/******************************************************************************
 *
 * Relay Mission Control
 *
 * Race Control Page
 *
 ******************************************************************************/

import { Card } from "../ui/card.js";

export class RaceControlPage {

    constructor(container, services = {}) {

        this.container = container;

        this.services = services;

    }

    render() {

        this.container.innerHTML = "";

        const card = new Card({

            title: "Race Mode",

            subtitle: "One-touch race preparation"

        });

        card.mount(this.container);

        card.content.innerHTML = `

<div class="race-actions">

    <button id="race-mode">

        START RACE MODE

    </button>

    <button id="practice-mode">

        PRACTICE

    </button>

    <button id="shutdown-rig">

        SHUTDOWN RIG

    </button>

</div>

<div class="race-description">

<p>

Race Mode will trigger the Home Assistant script
<strong>script.relay_race_mode</strong>.

</p>

</div>

`;

        card.content
            .querySelector("#race-mode")
            .addEventListener("click", () => {

                this.services.callScript?.(
                    "relay_race_mode"
                );

            });

        card.content
            .querySelector("#practice-mode")
            .addEventListener("click", () => {

                this.services.callScript?.(
                    "relay_practice_mode"
                );

            });

        card.content
            .querySelector("#shutdown-rig")
            .addEventListener("click", () => {

                this.services.callScript?.(
                    "relay_shutdown_rig"
                );

            });

    }

}