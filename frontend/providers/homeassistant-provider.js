import { Provider } from "./provider.js";

export class HomeAssistantProvider extends Provider {

    constructor() {
        super("homeassistant");

        this.connected = false;
    }

    async connect() {
        this.connected = true;

        console.log("[Relay] Home Assistant provider connected");
    }

    async disconnect() {
        this.connected = false;
    }

    getState() {
        return {
            connected: this.connected
        };
    }

}