export class HomeAssistantProvider extends Provider {

    constructor(store) {

        super("homeassistant");

        this.store = store;

        this.hass = null;

    }

    setHass(hass) {

        this.hass = hass;

        this.store.setState({

            connected: true,

            providers: {

                ...this.store.getState().providers,

                homeassistant: {

                    connected: true,

                    version: hass.config?.version ?? "",

                    user: hass.user?.name ?? null

                }

            }

        });

    }

}