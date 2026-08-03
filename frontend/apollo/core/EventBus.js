/******************************************************************************
 * Apollo Event Bus
 *
 * Global event communication system.
 ******************************************************************************/

export class EventBus {


    constructor() {

        this.listeners = new Map();

    }



    /**
     * Subscribe to an event
     *
     * @param {string} event
     * @param {function} callback
     * @returns unsubscribe function
     */

    on(event, callback) {


        if (!this.listeners.has(event)) {

            this.listeners.set(
                event,
                new Set()
            );

        }


        this.listeners
            .get(event)
            .add(callback);



        return () => {


            const handlers =
                this.listeners.get(event);



            if (!handlers) {

                return;

            }


            handlers.delete(
                callback
            );


            if (handlers.size === 0) {

                this.listeners.delete(
                    event
                );

            }


        };


    }



    /**
     * Subscribe once
     */

    once(event, callback) {


        const unsubscribe =
            this.on(

                event,

                data => {

                    unsubscribe();

                    callback(data);

                }

            );


        return unsubscribe;

    }



    /**
     * Emit an event
     */

    emit(event, data = null) {


        const handlers =
            this.listeners.get(event);



        if (!handlers) {

            return;

        }



        handlers.forEach(
            callback => {


                try {


                    callback(
                        data
                    );


                }
                catch(error) {


                    console.error(

                        `[Apollo EventBus] Error in "${event}"`,

                        error

                    );


                }


            }
        );


    }



    /**
     * Remove all listeners for an event
     */

    off(event) {


        this.listeners.delete(
            event
        );


    }



    /**
     * Clear everything
     */

    clear() {


        this.listeners.clear();


    }



    /**
     * Debug helper
     */

    getEvents() {


        return Array.from(
            this.listeners.keys()
        );


    }


}