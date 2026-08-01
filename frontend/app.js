import { DashboardLayout } from "./layout/dashboard-layout.js";

import { RelaySidebar } from "./components/relay-sidebar.js";
import { RelayHeader } from "./components/relay-header.js";

import { Router } from "./router.js";

import { HomePage } from "./pages/home-page.js";

window.addEventListener("DOMContentLoaded", () => {

    const layout =
        new DashboardLayout(document.body);

    layout.render();

    const sidebar =
        new RelaySidebar();

    layout.sidebar.innerHTML =
        sidebar.render();

    const header =
        new RelayHeader();

    layout.header.innerHTML =
        header.render();

    const router =
        new Router(layout.content);

    router.register(
        "home",
        new HomePage(layout.content)
    );

    router.start();

});