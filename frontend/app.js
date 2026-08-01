/******************************************************************************
 *
 * Relay Mission Control
 *
 * app.js
 *
 * Bootstrap
 *
 ******************************************************************************/

import { DashboardLayout } from "./layout/dashboard-layout.js";
import { Router } from "./router.js";

import { HomePage } from "./pages/home-page.js";

window.addEventListener("DOMContentLoaded", () => {

    const layout = new DashboardLayout(document.body);

    layout.render();

    const router = new Router(layout.content);

    const home = new HomePage(layout.content);

    router.register("home", home);

    router.start("home");

});