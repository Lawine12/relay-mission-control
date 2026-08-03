/******************************************************************************
 * Apollo Dashboard Page
 ******************************************************************************/

import { Page } from "./Page.js";


import {
    WidgetManager,
    WidgetGrid,

    SessionWidget,
    TelemetryWidget,
    ProviderWidget,

    FuelWidget,
    LapTimingWidget,
    PositionWidget,
    TyreWidget

} from "../widgets/index.js";



export class DashboardPage extends Page {



    constructor(context) {


        super(
            "Dashboard"
        );


        this.context =
            context;



        this.widgetManager =
            new WidgetManager(
                context
            );



        /*
         * Core widgets
         */


        this.widgetManager.register(

            new SessionWidget({

                context

            })

        );



        this.widgetManager.register(

            new TelemetryWidget({

                context

            })

        );



        this.widgetManager.register(

            new FuelWidget({

                context

            })

        );



        this.widgetManager.register(

            new LapTimingWidget({

                context

            })

        );



        this.widgetManager.register(

            new PositionWidget({

                context

            })

        );



        this.widgetManager.register(

            new TyreWidget({

                context

            })

        );



        this.widgetManager.register(

            new ProviderWidget({

                context

            })

        );




        this.grid =
            new WidgetGrid(

                this.widgetManager

            );


    }




    render() {



        const root =
            document.createElement(
                "section"
            );



        root.className =
            "apollo-dashboard-page";



        const title =
            document.createElement(
                "h1"
            );


        title.textContent =
            this.title;



        root.append(
            title
        );



        root.append(

            this.grid.render()

        );



        return root;


    }



}