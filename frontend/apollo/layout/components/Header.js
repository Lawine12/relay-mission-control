/******************************************************************************
 * Apollo Header
 ******************************************************************************/

import { Component } from "../../ui/index.js";
import { el } from "../../ui/Dom.js";


export class Header extends Component {

    constructor() {

        super();

        this.clock = null;
        this.timer = null;

    }


    render() {

        const header = el(
            "header",
            {
                class: "apollo-header"
            }
        );


        const title = el(
            "div",
            {
                class: "apollo-title",
                text: "Relay Mission Control"
            }
        );


        this.clock = el(
            "div",
            {
                class: "apollo-clock",
                text: "--:--:--"
            }
        );


        header.append(
            title,
            this.clock
        );


        return header;

    }


    onMount() {

        this.updateClock();

        this.timer = setInterval(
            () => this.updateClock(),
            1000
        );

    }


    onUnmount() {

        clearInterval(this.timer);

    }


    updateClock() {

        if (!this.clock) {
            return;
        }

        this.clock.textContent =
            new Date().toLocaleTimeString();

    }

}