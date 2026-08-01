console.log('Relay Mission Control');
import { RelayPanel } from "./relay-panel.js";

window.addEventListener("DOMContentLoaded", () => {

    const app = new RelayPanel(document.body);

    app.render();

});
import { RelayPanel } from "./relay-panel.js";
import { Router } from "./router.js";

import { HomePage } from "./pages/home-page.js";

window.addEventListener("DOMContentLoaded", () => {

    const panel = new RelayPanel(document.body);

    panel.render();

    const content =
        document.querySelector("#content");

    const router =
        new Router(content);

    router.register(
        "home",
        new HomePage()
    );

    router.start();

    window.router = router;

});