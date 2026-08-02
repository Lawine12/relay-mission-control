/******************************************************************************
 * Apollo Status Panel
 ******************************************************************************/

import { Component } from "../../ui/index.js";
import { el } from "../../ui/Dom.js";


export class StatusPanel extends Component {


    render() {

        const providers = [
            "Home Assistant",
            "MQTT",
            "SimHub",
            "CrewChief",
            "Trading Paints"
        ];


        return el(
            "aside",
            {
                class: "apollo-status"
            },
            [

                el(
                    "h2",
                    {
                        text: "Providers"
                    }
                ),

                ...providers.map(provider =>
                    el(
                        "div",
                        {
                            class: "provider",
                            text: `○ ${provider}`
                        }
                    )
                )

            ]
        );

    }

}