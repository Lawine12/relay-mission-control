/******************************************************************************
 * Apollo Application Shell
 ******************************************************************************/

import { Component } from "../ui/index.js";

import {
    Header,
    Sidebar,
    Dashboard,
    StatusPanel,
    Footer
} from "./components/index.js";


export class ApplicationShell extends Component {


    constructor() {

        super();

        this.header = new Header();
        this.sidebar = new Sidebar();
        this.dashboard = new Dashboard();
        this.status = new StatusPanel();
        this.footer = new Footer();

    }


    render() {

        const root = document.createElement("div");

        root.className = "apollo-shell";


        const body = document.createElement("div");

        body.className = "apollo-body";


        root.append(
            this.headerPlaceholder = document.createElement("div"),
            body,
            this.footerPlaceholder = document.createElement("div")
        );


        body.append(
            this.sidebarPlaceholder =
                document.createElement("div"),

            this.dashboardPlaceholder =
                document.createElement("div"),

            this.statusPlaceholder =
                document.createElement("div")
        );


        return root;

    }


    onMount() {

        this.header.mount(
            this.headerPlaceholder
        );

        this.sidebar.mount(
            this.sidebarPlaceholder
        );

        this.dashboard.mount(
            this.dashboardPlaceholder
        );

        this.status.mount(
            this.statusPlaceholder
        );

        this.footer.mount(
            this.footerPlaceholder
        );

    }


    onUnmount() {

        this.header.unmount();
        this.sidebar.unmount();
        this.dashboard.unmount();
        this.status.unmount();
        this.footer.unmount();

    }

}