/******************************************************************************
 * Apollo Provider Manager
 ******************************************************************************/

export class ProviderManager {


    constructor(events = null) {

        this.events = events;

        this.providers =
            new Map();

    }


    register(provider) {

        this.providers.set(
            provider.getName(),
            provider
        );


        this.events?.emit(
            "provider.registered",
            provider
        );

    }


    get(name) {

        return this.providers.get(name);

    }


    getAll() {

        return Array.from(
            this.providers.values()
        );

    }


    startAll() {

        this.providers.forEach(
            provider => {

                provider.start();

            }
        );

    }


    stopAll() {

        this.providers.forEach(
            provider => {

                provider.stop();

            }
        );

    }


}