/******************************************************************************
 * Apollo Tyre Status Widget
 ******************************************************************************/

import { Widget } from "./Widget.js";


export class TyreWidget extends Widget {


    constructor(options={}) {


        super({

            id:"tyres",

            title:"Tyres",

            size:"medium",

            ...options

        });


        this.data = {};

    }



    render() {


        this.root =
            document.createElement(
                "div"
            );


        this.root.className =
            "widget-content";


        this.root.innerHTML = `

            <h2>${this.title}</h2>

            <p>
                Waiting for tyre data...
            </p>

        `;


        return this.root;


    }



    update(data) {


        this.data = {

            ...this.data,

            ...data

        };


    }


}