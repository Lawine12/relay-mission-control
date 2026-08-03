/******************************************************************************
 * Apollo SimHub HTTP Transport
 *
 * Polls SimHub Web Server for telemetry data.
 ******************************************************************************/

export class SimHubTransport {


    constructor(options = {}) {


        this.url =
            options.url ?? null;


        this.interval =
            options.interval ?? 100;



        this.timer = null;


        this.connected = false;


        this.onMessage = null;


        this.onStatus = null;


    }



    connect(url = this.url) {


        if(!url) {

            console.warn(
                "[SimHub] No URL configured"
            );

            return;

        }



        this.url = url;



        console.info(
            "[SimHub] Starting HTTP polling:",
            url
        );



        this.timer =
            setInterval(
                () => this.poll(),
                this.interval
            );


    }



    async poll() {


        try {


            const response =
                await fetch(
                    this.url,
                    {

                        cache:"no-store"

                    }
                );



            if(!response.ok) {


                throw new Error(
                    response.status
                );


            }



            const text =
                await response.text();



            let data;



            try {


                data =
                    JSON.parse(
                        text
                    );


            }
            catch {


                /*
                 * SimHub sometimes returns
                 * plain text responses.
                 */

                data = {

                    raw:text

                };


            }



            if(!this.connected) {


                this.connected = true;


                this.onStatus?.(
                    "connected"
                );


                console.info(
                    "[SimHub] Connected"
                );


            }



            this.onMessage?.(
                data
            );


        }
        catch(error) {


            if(this.connected) {


                this.connected = false;


                this.onStatus?.(
                    "disconnected"
                );


            }



            console.warn(
                "[SimHub] HTTP error",
                error
            );


        }


    }



    disconnect() {


        if(this.timer) {


            clearInterval(
                this.timer
            );


            this.timer = null;


        }



        this.connected = false;


    }



    isConnected() {


        return this.connected;


    }


}