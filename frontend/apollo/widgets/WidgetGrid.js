/******************************************************************************
 * Apollo Widget Grid
 ******************************************************************************/

import { Component } from "../ui/Component.js";


export class WidgetGrid extends Component {


    constructor(manager) {

        super();

        this.manager = manager;

        this.widgets = [];

    }



    render() {


        const grid =
            document.createElement(
                "section"
            );


        grid.className =
            "apollo-widget-grid";


        this.manager
            .getAll()
            .forEach(widget => {


                const container =
                    document.createElement(
                        "div"
                    );


                container.className =
                    [
                        "widget",
                        `widget-${widget.size}`
                    ].join(" ");



                widget.mount(
                    container
                );


                grid.append(
                    container
                );


                this.widgets.push(
                    widget
                );


            });



        return grid;

    }



    onUnmount() {


        this.widgets.forEach(widget => {


            widget.unmount();


        });


        this.widgets = [];

    }


}