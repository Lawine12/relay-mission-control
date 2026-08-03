/******************************************************************************
 * Apollo CrewChief Provider
 ******************************************************************************/

import { Provider } from "./Provider.js";


export class CrewChiefProvider extends Provider {


    constructor(events) {

        super(
            "crewchief",
            events
        );


        this.messages = [];

    }



    start() {


        super.start();


        /*
         * Placeholder connection.
         * Real CrewChief API later.
         */


        this.connect();


    }



    connect() {


        super.connect();


        this.events?.emit(

            "crewchief.connected"

        );


    }



    disconnect() {


        super.disconnect();


        this.events?.emit(

            "crewchief.disconnected"

        );


    }



    receiveMessage(message) {


        this.messages.push({

            time:Date.now(),

            message

        });



        this.events?.emit(

            "crewchief.message",

            message

        );


    }



    getMessages() {

        return this.messages;

    }


}