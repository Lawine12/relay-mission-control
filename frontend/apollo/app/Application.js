/******************************************************************************
 * Relay Mission Control
 *
 * Application.js
 ******************************************************************************/

import { Bootstrap } from "./Bootstrap.js";

import { Router } from "../router/Router.js";

import { ApplicationShell } from "../layout/ApplicationShell.js";

import { DashboardPage } from "../pages/DashboardPage.js";

import { NavigationController } from "../navigation/index.js";

export class Application {

    constructor(root) {

        this.root = root;

        this.container = null;

        this.router = null;

        this.shell = null;

        this.started = false;

        this.navigation = null;

    }

    async start() {

        if (this.started) {
            return;
        }

        this.container = Bootstrap.create();

        const logger =
            this.container.resolve("logger");

        logger.info(
            "Starting Relay Mission Control..."
        );

        const providers =
            this.container.resolve("providers");

        await providers.start();

        this.router =
            new Router();

        this.shell =
            new ApplicationShell(
                this.router,
                {
                    events:
                        this.container.resolve("eventBus"),

                    store:
                        this.container.resolve("store"),

                    providers
                }
            );

        this.shell.mount(
            this.root
        );

        this.navigation =
        new NavigationController(
        this.router,
        this.shell.pageHost
    );

this.navigation.start();

        /*
         * Register pages
         */

        this.router.register(
            "dashboard",
            DashboardPage
        );

        /*
         * Open default page
         */

        this.router.navigate(
            "dashboard"
        );

        this.started = true;

        logger.info(
            "Relay Mission Control ready."
        );

    }

    setHass(hass) {

        if (!this.container) {
            return;
        }

        this.container
            .resolve("providers")
            .setHass(hass);

    }

    async stop() {

        if (!this.started) {
            return;
        }

        this.navigation?.stop();
        this.navigation = null;

        this.shell?.unmount();

        this.shell = null;

        await this.container
            .resolve("providers")
            .stop();

        this.container.clear();

        this.started = false;

    }

}