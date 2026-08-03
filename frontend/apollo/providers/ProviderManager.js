/******************************************************************************
 * Apollo Provider Manager
 ******************************************************************************/

export class ProviderManager {


    constructor() {

        this.providers =
            new Map();

    }


    register(provider) {

        this.providers.set(
            provider.getName(),
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


    start() {

    this.providers.forEach(provider => {

        provider.start();

    });

    }

    stop() {

    this.providers.forEach(provider => {

        provider.stop();

    });

    }

    setHass(hass) {

    const provider =
        this.get("home_assistant");

    if (
        provider &&
        typeof provider.setHass === "function"
    ) {
        provider.setHass(hass);
    }

    }


    stopAll() {

        this.providers.forEach(
            provider => {

                provider.stop();

            }
        );

    }


}