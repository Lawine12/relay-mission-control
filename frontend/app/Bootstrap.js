/******************************************************************************
 * Relay Mission Control
 *
 * Bootstrap.js
 ******************************************************************************/

import { ServiceContainer } from "./ServiceContainer.js";

import { Logger } from "../core/Logger.js";
import { EventBus } from "../core/EventBus.js";
import { Store } from "../core/Store.js";

import { ProviderManager } from "../providers/provider-manager.js";
import { HomeAssistantProvider } from "../providers/homeassistant/provider.js";

export class Bootstrap {

    static create() {

        const container = new ServiceContainer();

        // Core services
        container.register(
            "logger",
            new Logger("Relay")
        );

        container.register(
            "eventBus",
            new EventBus()
        );

        container.register(
            "store",
            new Store({
                page: "home",
                connection: {},
                entities: {}
            })
        );

        // Providers
        const providers = new ProviderManager(
            container.resolve("logger")
        );

        providers.register(
            new HomeAssistantProvider(
                container.resolve("store"),
                container.resolve("logger")
            )
        );

        container.register(
            "providers",
            providers
        );

        return container;
    }

}