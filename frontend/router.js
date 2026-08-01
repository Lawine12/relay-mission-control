/******************************************************************************
 *
 * Relay Mission Control
 *
 ******************************************************************************/

import { store } from "./store/store.js";

export class Router {

    constructor(container) {

        this.container = container;

        this.routes = new Map();

        this.current = null;

    }

    register(name, page) {

        this.routes.set(name, page);

    }

navigate(name) {

    if (!this.routes.has(name)) {
        console.warn(`Unknown page: ${name}`);
        return;
    }

    // Unmount current page
    if (this.current?.unmount) {
        this.current.unmount();
    }

    // Switch to the requested page
    this.current = this.routes.get(name);

    // Clear container
    this.container.innerHTML = "";

    // Update application state
    store.setPage(name);

    // Mount new page
    if (this.current?.mount) {
        this.current.mount(this.container);
    } else if (this.current?.render) {
        this.current.render(this.container);
    }

    history.replaceState({}, "", "#" + name);
}

    start(defaultPage = "home") {

        const hash = window.location.hash
            .replace("#", "");

        if (
            hash &&
            this.routes.has(hash)
        ) {

            this.navigate(hash);

            return;

        }

        this.navigate(defaultPage);

    }

start(defaultPage = "home") {

    this.navigate(defaultPage);

}

}
router.register(

    "simrig",

    new SimRigPage(layout.content)

);