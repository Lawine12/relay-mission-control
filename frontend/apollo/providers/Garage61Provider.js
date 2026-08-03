/******************************************************************************
 * Apollo Garage61 Provider
 ******************************************************************************/

import { Provider } from "./Provider.js";


export class Garage61Provider extends Provider {


    constructor(events) {


        super(
            "garage61",
            events
        );


        this.driver = null;

        this.sessions = [];

    }



    start() {


        super.start();


        /*
         * Placeholder connection.
         * Garage61 API later.
         */


        this.connect();


    }



    connect() {


        super.connect();


        this.events?.emit(

            "garage61.connected"

        );


    }



    disconnect() {


        super.disconnect();


        this.events?.emit(

            "garage61.disconnected"

        );


    }



    setDriver(driver) {


        this.driver = driver;


        this.events?.emit(

            "garage61.driver",

            driver

        );


    }



    setSessions(sessions) {


        this.sessions = sessions;


        this.events?.emit(

            "garage61.sessions",

            sessions

        );


    }



    getSessions() {

        return this.sessions;

    }


}