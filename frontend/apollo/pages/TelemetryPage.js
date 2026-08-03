import { Component } from "../ui/index.js";
import { el } from "../ui/Dom.js";


export class TelemetryPage extends Component {


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
                        text:"Telemetry"
                    }
                ),

                el(
                    "p",
                    {
                        text:
                        "Live vehicle telemetry"
                    }
                )

            ]
        );

    }

}