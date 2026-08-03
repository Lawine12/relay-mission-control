import { Component } from "../ui/index.js";
import { el } from "../ui/Dom.js";


export class SettingsPage extends Component {

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
                        text:"Settings"
                    }
                ),

                el(
                    "p",
                    {
                        text:"Apollo configuration"
                    }
                )

            ]
        );

    }

}