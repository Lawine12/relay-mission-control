/******************************************************************************
 *
 * Relay Mission Control
 *
 * Home Page
 *
 ******************************************************************************/

import { HA } from "../services/home-assistant.js";

export class HomePage {

    constructor(container) {

        this.container = container;

    }

    render() {

        this.container.innerHTML = `

<section class="glass hero">

    <h2>Next Race</h2>

    <h1>Waiting for Session...</h1>

    <div class="countdown">

        --:--:--

    </div>

</section>

<section class="glass">

    <h2>Sim Rig Status</h2>

    <div id="simrig-status"></div>

</section>

<section class="glass">

    <h2>Gaming PC</h2>

    <div id="pc-status"></div>

</section>

<section class="glass">

    <h2>Environment</h2>

    <div id="environment-status"></div>

</section>

`;

        this.update();

    }

    update() {

        const simrig = this.container.querySelector("#simrig-status");

        const pc = this.container.querySelector("#pc-status");

        const env = this.container.querySelector("#environment-status");

        simrig.innerHTML = this.buildStatus([
            "binary_sensor.simucube",
            "binary_sensor.simhub",
            "binary_sensor.crewchief"
        ]);

        pc.innerHTML = this.buildStatus([
            "sensor.cpu_usage",
            "sensor.gpu_temperature",
            "sensor.memory_usage"
        ]);

        env.innerHTML = this.buildStatus([
            "sensor.room_temperature",
            "sensor.room_humidity"
        ]);

    }

    buildStatus(list) {

        return list.map(entity => {

            const state = HA.state(entity) ?? "--";

            return `

<div class="status-row">

    <span>${entity}</span>

    <strong>${state}</strong>

</div>

`;

        }).join("");

    }

}