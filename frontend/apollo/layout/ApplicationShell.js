/******************************************************************************
 * Apollo Application Shell
 ******************************************************************************/

import { Component } from "../ui/Component.js";

import { PageHost } from "./PageHost.js";

import {
    Header,
    Sidebar,
    StatusPanel,
    Footer
} from "./components/index.js";

export class ApplicationShell extends Component {

    constructor(router, context) {

        super();

        this.router = router;
        this.context = context;

        this.header = new Header(context);
        this.sidebar = new Sidebar(router);
        this.pageHost = new PageHost(router, context);
        this.status = new StatusPanel(context);
        this.footer = new Footer(context);

    }

    render() {

        const root =
            document.createElement("div");

        root.className =
            "apollo-shell";

        const body =
            document.createElement("div");

        body.className =
            "apollo-body";

        this.header.mount(root);

        this.sidebar.mount(body);

        this.pageHost.mount(body);

        this.status.mount(body);

        root.append(body);

        this.footer.mount(root);

        return root;

    }

}