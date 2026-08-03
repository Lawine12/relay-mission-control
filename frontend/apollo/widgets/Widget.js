/******************************************************************************
 * Apollo Widget Base
 ******************************************************************************/

import { Component } from "../ui/Component.js";


export class Widget extends Component {


    constructor(options = {}) {

        super();


        this.id =
            options.id ?? "widget";


        this.title =
            options.title ?? "Widget";


        this.size =
            options.size ?? "medium";


        this.context =
            options.context ?? null;


    }



    getInfo() {

        return {

            id:this.id,

            title:this.title,

            size:this.size

        };

    }



    update(data) {

        // Override

    }



    destroy() {

        this.unmount();

    }


}