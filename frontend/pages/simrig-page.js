/******************************************************************************
 *
 * Relay Mission Control
 *
 * Sim Rig Page
 *
 ******************************************************************************/

import { Card } from "../ui/card.js";
import { store } from "../store/store.js";

const RIG_CARDS = [

    {
        title: "Simucube",

        entity: "binary_sensor.simucube_connected",

        icon: "steering"

    },

    {
        title: "Pedals",

        entity: "binary_sensor.pedals_connected",

        icon: "pedals"

    },

    {
        title: "Button Box",

        entity: "binary_sensor.button_box",

        icon: "buttonbox"

    },

    {
        title: "SimHub",

        entity: "binary_sensor.simhub",

        icon: "simhub"

    },

    {
        title: "CrewChief",

        entity: "binary_sensor.crewchief",

        icon: "headset"

    },

    {
        title: "Trading Paints",

        entity: "binary_sensor.trading_paints",

        icon: "paint"

    }

];

export class SimRigPage {

    constructor(container) {

        this.container = container;

    }

    render() {

        this.container.innerHTML = "";

        RIG_CARDS.forEach(card => {

            const ui = new Card({

                title: card.title,

                subtitle: card.entity

            });

            ui.mount(this.container);

            ui.content.innerHTML = `

<div class="status-row">

    <span>Waiting for Home Assistant...</span>

</div>

`;

        });

    }

}