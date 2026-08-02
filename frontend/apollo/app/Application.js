import { Bootstrap } from "./Bootstrap.js";
import { ApplicationShell } from "../layout/ApplicationShell.js";

export class Application {

    constructor(root) {

        this.root = root;

        this.services = Bootstrap.create();

        this.logger = this.services.resolve("logger");

        this.shell = new ApplicationShell(root);

    }

    start() {

        this.logger.info("Starting Apollo...");

        this.shell.mount();

        this.logger.info("Apollo ready.");

    }

    stop() {

        this.logger.info("Stopping Apollo.");

    }

    setHass(hass) {

        this.hass = hass;

    }

}