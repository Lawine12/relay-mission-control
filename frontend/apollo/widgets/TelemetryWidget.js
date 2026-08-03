/******************************************************************************
 * Apollo Telemetry Widget
 ******************************************************************************/

import { Widget } from "./Widget.js";
import { el } from "../ui/Dom.js";


export class TelemetryWidget extends Widget {


    constructor(options = {}) {


        super({

            id:"telemetry",

            title:"Telemetry",

            size:"large",

            ...options

        });



        this.data = {

            speed:0,

            rpm:0,

            gear:"N",

            throttle:0,

            brake:0

        };


        this.unsubscribe = null;


    }



    render() {


        this.root =
            el(
                "div",
                {
                    class:"widget-content telemetry"
                }
            );



        this.root.append(

            el(
                "h2",
                {
                    text:this.title
                }
            )

        );



        this.speed =
            el(
                "div",
                {
                    class:"telemetry-speed",
                    text:"0"
                }
            );



        this.speedUnit =
            el(
                "div",
                {
                    class:"telemetry-unit",
                    text:"KM/H"
                }
            );



        this.rpm =
            el(
                "div",
                {
                    class:"telemetry-line",
                    text:"RPM: 0"
                }
            );



        this.gear =
            el(
                "div",
                {
                    class:"telemetry-line",
                    text:"Gear: N"
                }
            );



        this.throttle =
            el(
                "div",
                {
                    class:"telemetry-line",
                    text:"Throttle: 0%"
                }
            );



        this.brake =
            el(
                "div",
                {
                    class:"telemetry-line",
                    text:"Brake: 0%"
                }
            );



        this.root.append(

            this.speed,

            this.speedUnit,

            this.rpm,

            this.gear,

            this.throttle,

            this.brake

        );



        return this.root;


    }




    onMount() {


        if(!this.context?.events) {

            return;

        }



        this.unsubscribe =
            this.context.events.on(

                "simhub.telemetry",

                data => {

                    this.update(data);

                }

            );


    }




    update(data) {


        this.data = {

            ...this.data,

            ...data

        };



        if(!this.root) {

            return;

        }



        this.speed.textContent =
            Math.round(
                this.data.speed
            );



        this.rpm.textContent =
            `RPM: ${Math.round(
                this.data.rpm
            )}`;



        this.gear.textContent =
            `Gear: ${this.data.gear}`;



        this.throttle.textContent =
            `Throttle: ${this.data.throttle}%`;



        this.brake.textContent =
            `Brake: ${this.data.brake}%`;


    }




    onUnmount() {


        this.unsubscribe?.();


    }



}