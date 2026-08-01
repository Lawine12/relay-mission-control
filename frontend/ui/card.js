/******************************************************************************
 *
 * Relay Mission Control
 *
 * UI Card
 *
 ******************************************************************************/

import { Component } from "../core/component.js";

export class Card extends Component {

    constructor(options = {}) {

        super();

        this.title = options.title ?? "";
        this.subtitle = options.subtitle ?? "";
        this.className = options.className ?? "";

    }

    render() {

        const card = document.createElement("section");

        card.className = `glass ${this.className}`;

        card.innerHTML = `

<header class="card-header">

    <div>

        <h2>${this.title}</h2>

        ${this.subtitle
            ? `<p>${this.subtitle}</p>`
            : ""}

    </div>

</header>

<div class="card-content"></div>

`;

        return card;

    }

    get content() {

        return this.qs(".card-content");

    }

}