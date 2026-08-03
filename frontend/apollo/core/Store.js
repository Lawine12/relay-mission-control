/******************************************************************************
 * Apollo Store
 *
 * Central application state.
 ******************************************************************************/

export class Store {


    constructor(initialState = {}) {

        this.state = {

            page: "dashboard",

            providers: {},

            race: {},

            ...initialState

        };


        this.listeners =
            new Set();

    }


    getState() {

        return this.state;

    }


    setState(update) {


        this.state = {

            ...this.state,

            ...update

        };


        this.notify();

    }


    update(path, value) {

        this.state[path] = value;

        this.notify();

    }


    subscribe(callback) {

        this.listeners.add(callback);


        return () => {

            this.listeners.delete(
                callback
            );

        };

    }


    notify() {

        this.listeners.forEach(
            callback =>
                callback(this.state)
        );

    }


}