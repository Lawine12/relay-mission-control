/******************************************************************************
 * Apollo Provider Widget
 ******************************************************************************/

import { Widget } from "./Widget.js";
import { el } from "../ui/Dom.js";


export class ProviderWidget extends Widget {


    constructor(options = {}) {

        super({

            id:"providers",

            title:"Providers",

            size:"small",

            ...options

        });


        this.providers = [];

    }


    render() {


        this.root =
            el(
                "div",
                {
                    class:"widget-content"
                }
            );


        this.root.append(

            el(
                "h2",
                {
                    text:this.title
                }
            )

        );


        this.list =
            el(
                "div",
                {}
            );


        this.root.append(
            this.list
        );


        this.renderList();


        return this.root;

    }


    update(providers) {


        this.providers =
            providers;


        this.renderList();

    }


    renderList() {


        if (!this.list) {
            return;
        }


        this.list.replaceChildren();


        this.providers.forEach(provider => {


            this.list.append(

                el(
                    "p",
                    {
                        text:
                        `${provider.name}: ${provider.status}`
                    }
                )

            );


        });

    }


}