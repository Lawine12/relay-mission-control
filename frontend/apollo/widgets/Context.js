/******************************************************************************
 * Apollo Widget Context
 *
 * Shared services available to widgets
 ******************************************************************************/

export class WidgetContext {


    constructor(options = {}) {

        this.store =
            options.store ?? null;


        this.events =
            options.events ?? null;


        this.providers =
            options.providers ?? null;

    }


    getProvider(name) {

        if (!this.providers) {
            return null;
        }


        return this.providers.get(name);

    }


    getState() {

        if (!this.store) {
            return {};
        }


        return this.store.getState();

    }


    emit(event, data) {

        if (!this.events) {
            return;
        }


        this.events.emit(
            event,
            data
        );

    }


    subscribe(event, callback) {

        if (!this.events) {
            return null;
        }


        return this.events.on(
            event,
            callback
        );

    }

}