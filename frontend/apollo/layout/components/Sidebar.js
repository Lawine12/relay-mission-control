/******************************************************************************
 * Apollo Sidebar
 ******************************************************************************/

import { Component } from "../../ui/index.js";
import { el } from "../../ui/Dom.js";


export class Sidebar extends Component {

    render() {

        const items = [
            "Dashboard",
            "Race",
            "Telemetry",
            "Strategy",
            "Team",
            "Smart Home",
            "Settings"
        ];


        return el(
            "aside",
            {
                class: "apollo-sidebar"
            },
            items.map(item =>
                el(
                    "div",
                    {
                        class: "sidebar-item",
                        text: item
                    }
                )
            )
        );

    }

}