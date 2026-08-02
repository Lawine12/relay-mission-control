/******************************************************************************
 * Apollo Reactive Component
 ******************************************************************************/

import { Component } from "./Component.js";

export class ReactiveComponent extends Component {

    constructor(store) {

        super();

        this.store = store;
        this.unsubscribe = null;

    }

    onMount() {

        if (!this.store) {
            return;
        }

        this.unsubscribe = this.store.subscribe(
            state => this.stateChanged(state)
        );

    }

    onUnmount() {

        this.unsubscribe?.();

    }

    stateChanged(state) {

        // Override in subclasses

    }

}