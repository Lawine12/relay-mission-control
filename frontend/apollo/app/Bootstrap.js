import { ServiceContainer } from "./ServiceContainer.js";
import { Logger } from "../core/Logger.js";

export class Bootstrap {

    static create() {

        const services = new ServiceContainer();

        services.register(
            "logger",
            new Logger("Relay")
        );

        return services;

    }

}