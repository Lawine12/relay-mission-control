/******************************************************************************
 * Apollo Home Assistant Provider
 ******************************************************************************/

import { Provider } from "./Provider.js";


export class HomeAssistantProvider extends Provider {


    constructor(events) {

        super(
            "home_assistant",
            events
        );


        this.hass = null;

    }



    start() {

        super.start();


        /*
         * Connection happens when HA
         * injects the hass object.
         */

    }



    setHass(hass) {


        this.hass = hass;


        this.connect();


        this.events?.emit(

            "homeassistant.updated",

            hass

        );


    }



    getHass() {

        return this.hass;

    }



    getState(entityId) {


        if(!this.hass) {

            return null;

        }


        return this.hass.states[entityId] ?? null;


    }



    callService(
        domain,
        service,
        data = {}
    ) {


        if(!this.hass) {


            console.warn(

                "[Home Assistant] Not connected"

            );


            return;

        }



        return this.hass.callService(

            domain,

            service,

            data

        );


    }



    stop() {


        this.hass = null;


        super.stop();


    }


}