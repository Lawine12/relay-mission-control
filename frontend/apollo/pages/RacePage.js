import { Component } from "../ui/index.js";
import { el } from "../ui/Dom.js";


export class RacePage extends Component {


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
                        text:"Race"
                    }
                ),

                el(
                    "p",
                    {
                        text:
                        "Race operations dashboard"
                    }
                )

            ]
        );

    }

}