/******************************************************************************
 * Apollo Application Shell
 ******************************************************************************/

import { Component } from "../ui/Component.js";

import { Header } from "./components/Header.js";
import { Sidebar } from "./components/Sidebar.js";
import { StatusPanel } from "./components/StatusPanel.js";
import { Footer } from "./components/Footer.js";

import { PageHost } from "./PageHost.js";


export class ApplicationShell extends Component {


    constructor(router, context) {

        super();


        this.router = router;

        this.context = context;


        this.header =
            new Header();


        this.sidebar =
            new Sidebar(
                router
            );


        this.pageHost =
            new PageHost(
                context
            );


        this.statusPanel =
            new StatusPanel(
                context.events,
                context.providers
            );


        this.footer =
            new Footer();


    }


    render() {


        const shell =
            document.createElement(
                "div"
            );


        shell.className =
            "apollo-shell";


        this.headerContainer =
            document.createElement(
                "header"
            );


        const body =
            document.createElement(
                "div"
            );


        body.className =
            "apollo-body";


        this.sidebarContainer =
            document.createElement(
                "aside"
            );


        this.pageContainer =
            document.createElement(
                "main"
            );


        this.statusContainer =
            document.createElement(
                "aside"
            );


        body.append(

            this.sidebarContainer,

            this.pageContainer,

            this.statusContainer

        );


        this.footerContainer =
            document.createElement(
                "footer"
            );


        shell.append(

            this.headerContainer,

            body,

            this.footerContainer

        );


        return shell;

    }



    onMount() {


        this.header.mount(
            this.headerContainer
        );


        this.sidebar.mount(
            this.sidebarContainer
        );


        this.pageHost.mount(
            this.pageContainer
        );


        this.statusPanel.mount(
            this.statusContainer
        );


        this.footer.mount(
            this.footerContainer
        );

    }



    onUnmount() {


        this.header.unmount();

        this.sidebar.unmount();

        this.pageHost.unmount();

        this.statusPanel.unmount();

        this.footer.unmount();

    }


}