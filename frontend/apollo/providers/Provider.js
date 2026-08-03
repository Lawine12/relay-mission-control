/******************************************************************************
 * Apollo Provider Base
 ******************************************************************************/

import { ProviderStatus } from "./ProviderStatus.js";


export class Provider {


    constructor(name, events = null) {

        this.name = name;

        this.events = events;

        this.status =
            ProviderStatus.STOPPED;

    }



    start() {

        this.status =
            ProviderStatus.STARTING;

        this.emitStatus();

    }



    stop() {

        this.status =
            ProviderStatus.STOPPED;

        this.emitStatus();

    }



    connect() {

        this.status =
            ProviderStatus.CONNECTED;

        this.emitStatus();

    }



    disconnect() {

        this.status =
            ProviderStatus.DISCONNECTED;

        this.emitStatus();

    }



    fail(error = null) {

        this.status =
            ProviderStatus.ERROR;


        this.error =
            error;


        this.emitStatus();

    }



    emitStatus() {


        this.events?.emit(

            "provider.status",

            {

                name:this.name,

                status:this.status

            }

        );


    }



    getName() {

        return this.name;

    }



    getStatus() {

        return this.status;

    }


}