/******************************************************************************
 * Apollo Footer
 ******************************************************************************/

import { Component } from "../../ui/index.js";
import { el } from "../../ui/Dom.js";


export class Footer extends Component {


    render() {

        return el(
            "footer",
            {
                class: "apollo-footer"
            },
            [

                el(
                    "span",
                    {
                        text: "Apollo-002"
                    }
                ),

                el(
                    "span",
                    {
                        text: "READY"
                    }
                )

            ]
        );

    }

}