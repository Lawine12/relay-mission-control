/******************************************************************************
 *
 * Relay Mission Control
 *
 * RelayApplication
 *
 ******************************************************************************/

import { DashboardLayout } from "../layout/dashboard-layout.js";
import { Router } from "../router.js";

import { HomePage } from "../pages/home-page.js";

export class RelayApplication {
    constructor() {
        this.layout = null;
        this.router = null;
    }

    start() {
        this.layout = new DashboardLayout(document.body);
        this.layout.render();

        this.router = new Router(this.layout.content);

        this.registerPages();

        this.router.start("home");
    }

    registerPages() {
        this.router.register(
            "home",
            new HomePage(this.layout.content)
        );
    }

    setHass(hass) {

    this.providers.setHass(hass);

    }
}