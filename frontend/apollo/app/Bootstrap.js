/******************************************************************************
 * Relay Mission Control
 *
 * Apollo Bootstrap
 ******************************************************************************/

import { ServiceContainer } from "./ServiceContainer.js";

import { Logger } from "../core/Logger.js";
import { EventBus } from "../core/EventBus.js";
import { Store } from "../core/Store.js";

import { ProviderManager } from "../providers/ProviderManager.js";
import { HomeAssistantProvider } from "../providers/HomeAssistantProvider.js";
import { RelayBridgeProvider } from "../providers/RelayBridgeProvider.js";

export class Bootstrap {

    static create() {

        const container = new ServiceContainer();

        //
        // Core
        //

        const logger = new Logger("Relay");

        const events = new EventBus();

        const store = new Store({
            page: "dashboard",
            telemetry: {},
            session: {},
            providers: {}
        });

        container.register("logger", logger);
        container.register("eventBus", events);
        container.register("store", store);

        //
        // Providers
        //

        const providers = new ProviderManager(events);

        providers.register(
            new HomeAssistantProvider(events)
        );

        providers.register(
            new RelayBridgeProvider(events)
        );

        container.register(
            "providers",
            providers
        );

        return container;

    }

}