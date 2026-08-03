/******************************************************************************
 * Apollo PageHost
 *
 * Responsible for rendering routed pages.
 ******************************************************************************/

import { Component } from "../ui/Component.js";


export class PageHost extends Component {


    constructor(context) {

        super();

        this.context = context;

        this.currentPage = null;

        this.container = null;

    }


    render() {


        this.container =
            document.createElement(
                "main"
            );


        this.container.className =
            "apollo-page-host";


        return this.container;

    }


    show(PageClass) {


        if (!PageClass) {

            console.warn(
                "[Apollo PageHost] Missing page class"
            );

            return;

        }


        /*
         * Remove current page
         */

        if (this.currentPage) {

            this.currentPage.unmount();

            this.currentPage = null;

        }


        this.container.replaceChildren();


        /*
         * Create new page with context
         */

        this.currentPage =
            new PageClass(
                this.context
            );


        this.currentPage.mount(
            this.container
        );

    }


    onUnmount() {


        if (this.currentPage) {

            this.currentPage.unmount();

            this.currentPage = null;

        }


    }


}