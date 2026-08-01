/******************************************************************************
 *
 * Relay Mission Control
 *
 * Bootstrap
 *
 ******************************************************************************/

import { RelayApplication } from "./app/application.js";

window.addEventListener("DOMContentLoaded", () => {
    const app = new RelayApplication();
    app.start();
});