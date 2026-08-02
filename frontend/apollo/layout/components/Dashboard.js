/******************************************************************************
 * Apollo Dashboard
 ******************************************************************************/

import { Component } from "../../ui/index.js";
import { el } from "../../ui/Dom.js";


export class Dashboard extends Component {


    render() {

        return el(
            "main",
            {
                class: "apollo-dashboard"
            },
            [

                el(
                    "h1",
                    {
                        text: "Welcome to Relay Mission Control"
                    }
                ),

                el(
                    "p",
                    {
                        text: "Apollo Framework • Application Shell Ready"
                    }
                )

            ]
        );

    }

}