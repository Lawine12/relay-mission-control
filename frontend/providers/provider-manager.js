export class ProviderManager {

    constructor() {
        this.providers = new Map();
    }

    register(provider) {
        this.providers.set(provider.id, provider);
    }

    get(id) {
        return this.providers.get(id);
    }

    async connectAll() {

        for (const provider of this.providers.values()) {

            await provider.connect();

        }

    }

    async disconnectAll() {

        for (const provider of this.providers.values()) {

            await provider.disconnect();

        }

    }

    setHass(hass) {

    this.get("homeassistant")?.setHass(hass);

    }

}