/******************************************************************************
 * Relay Mission Control
 *
 * Application.js
 ******************************************************************************/

import { Bootstrap } from "./Bootstrap.js";
import { Router } from "../core/Router.js";

export class Application {

    constructor(root) {

        this.root = root;
        this.container = null;
        this.router = null;
        this.started = false;

    }

    async start() {

        if (this.started) {
            return;
        }

        this.container = Bootstrap.create(this.root);

        const logger = this.container.resolve("logger");

        logger.info("Starting Relay Mission Control...");

        const providers =
            this.container.resolve("providers");

        await providers.start();

        this.router = new Router(
            this.root,
            logger,
            this.container.resolve("eventBus")
        );

        this.started = true;

        logger.info("Relay Mission Control ready.");

    }

    setHass(hass) {

        if (!this.container) {
            return;
        }

        const providers =
            this.container.resolve("providers");

        if (providers && typeof providers.setHass === "function") {
            providers.setHass(hass);
        }

    }

    async stop() {

        if (!this.started) {
            return;
        }

        const logger =
            this.container.resolve("logger");

        logger.info("Stopping...");

        await this.container
            .resolve("providers")
            .stop();

        this.container.clear();

        this.started = false;

    }

}