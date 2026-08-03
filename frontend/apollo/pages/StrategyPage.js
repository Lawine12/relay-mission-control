import { Component } from "../ui/index.js";
import { el } from "../ui/Dom.js";


export class StrategyPage extends Component {


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
                        text:"Strategy"
                    }
                ),

                el(
                    "p",
                    {
                        text:
                        "Race strategy tools"
                    }
                )

            ]
        );

    }

}