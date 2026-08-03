/******************************************************************************
 * Apollo Lap Timing Widget
 ******************************************************************************/

import { Widget } from "./Widget.js";
import { el } from "../ui/Dom.js";


export class LapTimingWidget extends Widget {


    constructor(options={}) {


        super({

            id:"lap-timing",

            title:"Lap Timing",

            size:"medium",

            ...options

        });


        this.data = {

            lapTime:0

        };


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

            <p class="lap-time">
                Lap: 0
            </p>

        `;


        this.lap =
            this.root.querySelector(
                ".lap-time"
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


        this.lapTime =
            data.lapTime ?? 0;


        if(this.lap) {


            this.lap.textContent =
                `Lap: ${this.lapTime}`;


        }


    }


}