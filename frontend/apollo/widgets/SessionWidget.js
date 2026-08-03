/******************************************************************************
 * Apollo Session Widget
 ******************************************************************************/

import { Widget } from "./Widget.js";

import { SessionService } from "../services/index.js";


export class SessionWidget extends Widget {


    constructor(options = {}) {


        super({

            id:"session",

            title:"Race Session",

            size:"medium",

            ...options

        });



        this.service =
            new SessionService();


        this.unsubscribe = null;


    }



    render() {


        this.root =
            document.createElement(
                "div"
            );


        this.root.className =
            "widget-content";



        this.root.innerHTML = `

            <h2>
                Race Session
            </h2>


            <p class="track">
                Track: -
            </p>


            <p class="type">
                Session: -
            </p>


            <p class="driver">
                Driver: -
            </p>


            <p class="lap">
                Lap: -
            </p>


            <p class="position">
                Position: -
            </p>


        `;



        this.track =
            this.root.querySelector(
                ".track"
            );


        this.type =
            this.root.querySelector(
                ".type"
            );


        this.driver =
            this.root.querySelector(
                ".driver"
            );


        this.lap =
            this.root.querySelector(
                ".lap"
            );


        this.position =
            this.root.querySelector(
                ".position"
            );


        return this.root;


    }



    onMount() {


        this.unsubscribe =
            this.context.events.on(

                "simhub.telemetry",

                data => {


                    this.update(
                        data
                    );


                }

            );


    }



    update(data) {


        this.service.update(
            data
        );


        const session =
            this.service.get();



        this.track.textContent =
            `Track: ${session.track}`;


        this.type.textContent =
            `Session: ${session.type}`;


        this.driver.textContent =
            `Driver: ${session.driver}`;


        this.lap.textContent =
            `Lap: ${session.lap}/${session.totalLaps}`;


        this.position.textContent =
            `Position: P${session.position}`;


    }



    onUnmount() {


        this.unsubscribe?.();


    }


}