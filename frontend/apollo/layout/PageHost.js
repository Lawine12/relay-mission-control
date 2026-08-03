/******************************************************************************
 * Apollo Page Host
 ******************************************************************************/

import { Component } from "../ui/Component.js";

export class PageHost extends Component {

    constructor(router, context) {

        super();

        this.router = router;
        this.context = context;

        this.currentPage = null;

        this.container = null;

        this.unsubscribe = null;

    }

    render() {

        this.container =
            document.createElement("main");

        this.container.className =
            "apollo-page-host";

        return this.container;

    }

    onMount() {

        this.unsubscribe =
            this.router.subscribe(
                (path, Page) => {

                    this.show(Page);

                }
            );

        const current =
            this.router.getCurrent();

        if (current) {

            this.show(
                current.Page
            );

        }

    }

    show(PageClass) {

        if (!PageClass) {
            return;
        }

        if (this.currentPage) {

            this.currentPage.unmount();

            this.currentPage = null;

        }

        this.container.replaceChildren();

        this.currentPage =
            new PageClass(
                this.context
            );

        this.currentPage.mount(
            this.container
        );

    }

    onUnmount() {

        this.unsubscribe?.();

        if (this.currentPage) {

            this.currentPage.unmount();

            this.currentPage = null;

        }

    }

}