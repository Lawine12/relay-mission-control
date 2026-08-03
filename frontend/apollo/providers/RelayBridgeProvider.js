import {
    Provider
} from "./Provider.js";


export class RelayBridgeProvider extends Provider {


    constructor(events) {

        super(
            "relay_bridge",
            events
        );


        this.events = events;


        this.url =
            "http://192.168.2.15:8787/telemetry";


        this.timer = null;

    }



    start(){


        console.log(
            "[RelayBridge] Starting"
        );


        this.timer =
            setInterval(
                ()=>this.poll(),
                250
            );


    }



    async poll(){


        try {


            const response =
                await fetch(
                    this.url
                );


            const data =
                await response.json();



            this.events.emit(
                "simhub.telemetry",
                data
            );


            this.status =
                "connected";


        }
        catch(error){


            this.status =
                "disconnected";


        }


    }



    stop(){

        clearInterval(
            this.timer
        );

    }


}