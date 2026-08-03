/******************************************************************************
 * Apollo Sidebar
 ******************************************************************************/

import { Component } from "../../ui/Component.js";
import { el } from "../../ui/Dom.js";

const MENU = [

    {
        id: "dashboard",
        label: "Dashboard",
        icon: "🏠"
    },

    {
        id: "race",
        label: "Race",
        icon: "🏁"
    },

    {
        id: "telemetry",
        label: "Telemetry",
        icon: "📡"
    },

    {
        id: "strategy",
        label: "Strategy",
        icon: "🧠"
    },

    {
        id: "team",
        label: "Team",
        icon: "👥"
    },

    {
        id: "smart-home",
        label: "Smart Home",
        icon: "🏡"
    },

    {
        id: "settings",
        label: "Settings",
        icon: "⚙️"
    }

];

export class Sidebar extends Component {

    constructor(router) {

        super();

        this.router = router;

        this.active = "dashboard";

        this.unsubscribe = null;

    }

    render() {

        const sidebar = el("aside", {
            class: "apollo-sidebar"
        });

        sidebar.appendChild(

            el("div", {
                class: "sidebar-title",
                text: "Mission Control"
            })

        );

        const nav = el("nav", {
            class: "sidebar-menu"
        });

        MENU.forEach(item => {

            const button = el("button", {

                class:
                    item.id === this.active
                        ? "sidebar-item active"
                        : "sidebar-item",

                type: "button"

            });

            button.append(

                el("span", {

                    class: "sidebar-icon",
                    text: item.icon

                }),

                el("span", {

                    class: "sidebar-label",
                    text: item.label

                })

            );

            button.addEventListener(
                "click",
                () => this.router.navigate(item.id)
            );

            nav.appendChild(button);

        });

        sidebar.appendChild(nav);

        return sidebar;

    }

    onMount() {

        this.unsubscribe =
            this.router.subscribe(
                (route) => {

                    this.active = route;

                    this.update();

                }
            );

    }

    onUnmount() {

        this.unsubscribe?.();

    }

}