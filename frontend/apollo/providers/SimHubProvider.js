/******************************************************************************
 * Apollo SimHub Provider
 *
 * Provides SimHub telemetry data to Apollo.
 ******************************************************************************/

import { Provider } from "./Provider.js";

import { SimHubTransport } from "./SimHubTransport.js";

import {
    TelemetryMapper
} from "../telemetry/index.js";


export class SimHubProvider extends Provider {



    constructor(events) {


        super(
            "simhub",
            events
        );


        this.transport =
            new SimHubTransport();



        this.telemetry = null;


        /*
         * Change this to your racing PC IP
         *
         * Example:
         * ws://192.168.2.50:8888
         */

        this.url =
        "http://192.168.2.15:8888";


    }



    setURL(url) {


        this.url =
            url;


    }



    start() {


        super.start();



        this.transport.onMessage =
            data => {


                this.updateTelemetry(
                    data
                );


            };



        this.transport.onStatus =
            status => {


                if(status === "connected") {

                    this.connect();

                }


                if(status === "disconnected") {

                    this.disconnect();

                }


            };



        if(this.url) {


            this.transport.connect(
                this.url
            );


        }
        else {


            console.info(
                "[SimHub] Waiting for URL"
            );


        }


    }



    connect() {


        this.status =
            "connected";


        this.emitStatus();


        this.events?.emit(

            "simhub.connected"

        );


    }



    disconnect() {


        this.status =
            "disconnected";


        this.emitStatus();


        this.events?.emit(

            "simhub.disconnected"

        );


    }



    updateTelemetry(data) {


    console.log(
        "[SimHub] Raw telemetry",
        data
    );


    this.telemetry =
        TelemetryMapper.fromSimHub(
            data
        );


    console.log(
        "[Apollo] Telemetry model",
        this.telemetry
    );


    this.events?.emit(

        "simhub.telemetry",

        this.telemetry

    );


}



    getTelemetry() {


        return this.telemetry;


    }



    stop() {


        this.transport.disconnect();


        super.stop();


    }


}