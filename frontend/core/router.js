/******************************************************************************
 * Relay Mission Control
 *
 * Router.js
 ******************************************************************************/

export class Router {

    constructor(container, logger, eventBus) {

        this.container = container;
        this.logger = logger;
        this.eventBus = eventBus;

        this.routes = new Map();
        this.current = null;

    }

    register(name, page) {

        this.routes.set(name, page);

    }

    navigate(name) {

        const page = this.routes.get(name);

        if (!page) {

            this.logger.warn(
                `Unknown page '${name}'`
            );

            return;

        }

        this.current?.unmount?.();

        this.container.replaceChildren();

        this.current = page;

        this.current.mount(this.container);

        this.eventBus.emit(
            "page:changed",
            name
        );

    }

    start(defaultPage = "home") {

        const page =
            window.location.hash.replace("#", "");

        this.navigate(

            this.routes.has(page)
                ? page
                : defaultPage

        );

    }

}