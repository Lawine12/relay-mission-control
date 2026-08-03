import { Component } from "../ui/index.js";
import { el } from "../ui/Dom.js";


export class SmartHomePage extends Component {

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
                        text:"Smart Home"
                    }
                ),

                el(
                    "p",
                    {
                        text:"Home Assistant integration"
                    }
                )

            ]
        );

    }

}