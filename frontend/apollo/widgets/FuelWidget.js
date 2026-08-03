/******************************************************************************
 * Apollo Fuel Strategy Widget
 ******************************************************************************/

import { Widget } from "./Widget.js";

import { FuelStrategy } from "../services/FuelStrategy.js";


export class FuelWidget extends Widget {


    constructor(options = {}) {


        super({

            id:"fuel",

            title:"Fuel Strategy",

            size:"medium",

            ...options

        });



        this.strategy =
            new FuelStrategy();



        this.data = {

            fuel:0,

            lap:0

        };


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
                Fuel Strategy
            </h2>


            <p class="fuel">
                Fuel: 0 L
            </p>


            <p class="consumption">
                Consumption: -
            </p>


            <p class="laps">
                Estimated laps: -
            </p>


        `;



        this.fuel =
            this.root.querySelector(
                ".fuel"
            );


        this.consumption =
            this.root.querySelector(
                ".consumption"
            );


        this.laps =
            this.root.querySelector(
                ".laps"
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


        this.data = {

            ...this.data,

            ...data

        };



        this.strategy.update(
            this.data
        );



        const consumption =
            this.strategy.getConsumption();



        const estimated =
            this.strategy.getEstimatedLaps(

                this.data.fuel

            );



        this.fuel.textContent =
            `Fuel: ${this.data.fuel} L`;



        this.consumption.textContent =
            `Consumption: ${consumption} L/lap`;



        this.laps.textContent =
            `Estimated laps: ${estimated}`;


    }



    onUnmount() {


        this.unsubscribe?.();


    }


}