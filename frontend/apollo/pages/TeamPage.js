import { Component } from "../ui/index.js";
import { el } from "../ui/Dom.js";


export class TeamPage extends Component {

    render() {

        return el(
            "section",
            {
                class:"page"
            },
            [

                el(
                    "h1",
                    {
                        text:"Team"
                    }
                ),

                el(
                    "p",
                    {
                        text:"Relay Motorsport team management"
                    }
                )

            ]
        );

    }

}