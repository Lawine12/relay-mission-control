/******************************************************************************
 *
 * Relay Mission Control
 *
 * Page Registry
 *
 ******************************************************************************/

class PageRegistry {

    constructor() {

        this.pages = new Map();

    }

    register(page) {

        if (!page.id) {

            throw new Error("Page must define an id.");

        }

        this.pages.set(page.id, page);

    }

    get(id) {

        return this.pages.get(id);

    }

    all() {

        return [...this.pages.values()];

    }

}

export const Pages = new PageRegistry();