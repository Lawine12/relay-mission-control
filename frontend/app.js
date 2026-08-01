console.log('Relay Mission Control');
import { RelayPanel } from "./relay-panel.js";

window.addEventListener("DOMContentLoaded", () => {

    const app = new RelayPanel(document.body);

    app.render();

});