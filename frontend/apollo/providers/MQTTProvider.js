/******************************************************************************
 * Apollo MQTT Provider
 ******************************************************************************/

import { Provider } from "./Provider.js";


export class MQTTProvider extends Provider {


    constructor(events) {

        super(
            "mqtt",
            events
        );


        this.connected = false;


        this.messages = new Map();

    }



    start() {

        super.start();


        /*
         * MQTT transport will be added later.
         *
         * For now mark provider as available.
         */

        this.connect();

    }



    connect() {


        this.connected = true;


        super.connect();


        this.events?.emit(
            "mqtt.connected"
        );


    }



    disconnect() {


        this.connected = false;


        super.disconnect();


        this.events?.emit(
            "mqtt.disconnected"
        );


    }



    publish(topic, payload) {


        console.info(

            "[MQTT]",

            topic,

            payload

        );


        this.events?.emit(

            "mqtt.message",

            {

                topic,

                payload

            }

        );


    }



    subscribe(topic, callback) {


        console.info(

            "[MQTT] Subscribe",

            topic

        );


        return () => {

            console.info(

                "[MQTT] Unsubscribe",

                topic

            );

        };


    }



}