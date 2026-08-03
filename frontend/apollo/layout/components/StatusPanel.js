/******************************************************************************
 * Apollo Status Panel
 ******************************************************************************/

import { Component } from "../../ui/Component.js";
import { el } from "../../ui/Dom.js";


export class StatusPanel extends Component {


    constructor(events = null, providers = null) {

        super();

        this.events = events;

        this.providers = providers;

        this.providerState = {};

        this.unsubscribe = null;

    }


    render() {


        this.root =
            el(
                "aside",
                {
                    class:"apollo-status"
                }
            );


        this.root.append(

            el(
                "h2",
                {
                    text:"Providers"
                }
            )

        );


        this.list =
            el(
                "div",
                {
                    class:"provider-list"
                }
            );


        this.root.append(
            this.list
        );


        this.renderProviders();


        return this.root;

    }


    onMount() {


        if (!this.events) {
            return;
        }


        this.unsubscribe =
            this.events.on(
                "provider.status",
                data => {


                    this.providerState[data.name] =
                        data.status;


                    this.renderProviders();

                }
            );


        this.renderProviders();

    }


    renderProviders() {


        if (!this.list) {
            return;
        }


        this.list.replaceChildren();


        const providers =
            this.providers
                ? this.providers.getAll()
                : [];


        providers.forEach(provider => {


            const status =
                this.providerState[
                    provider.getName()
                ]
                ?? provider.getStatus();


            const dot =
                status === "connected"
                    ? "🟢"
                    : status === "error"
                    ? "🔴"
                    : "⚪";


            this.list.append(

                el(
                    "div",
                    {
                        class:"provider",
                        text:
                        `${dot} ${provider.getName()}`
                    }
                )

            );

        });

    }


    onUnmount() {

        this.unsubscribe?.();

    }


}