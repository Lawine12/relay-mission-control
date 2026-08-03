/******************************************************************************
 * Apollo Race Position Widget
 ******************************************************************************/

import { Widget } from "./Widget.js";
import { el } from "../ui/Dom.js";


export class PositionWidget extends Widget {


    constructor(options={}) {


        super({

            id:"position",

            title:"Race Position",

            size:"small",

            ...options

        });


        this.position = 0;


    }



    render() {


        this.root =
            el(
                "div",
                {
                    class:"widget-content"
                }
            );


        this.root.innerHTML = `

            <h2>${this.title}</h2>

            <p class="position">
                Position: -
            </p>

        `;


        this.value =
            this.root.querySelector(
                ".position"
            );


        return this.root;


    }



    onMount() {


        this.context?.events?.on(

            "simhub.telemetry",

            data => {

                this.update(data);

            }

        );


    }



    update(data) {


        this.position =
            data.position ?? 0;


        if(this.value) {


            this.value.textContent =
                `Position: ${this.position}`;


        }


    }


}