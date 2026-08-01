/******************************************************************************
 *
 * Relay Mission Control
 *
 * Base Component
 *
 ******************************************************************************/

export class Component {

    constructor(container = null) {

        this.container = container;

        this.element = null;

        this.state = {};

    }

    mount(container = this.container) {

        this.container = container;

        this.element = this.render();

        if (typeof this.element === "string") {

            container.insertAdjacentHTML(
                "beforeend",
                this.element
            );

            this.element = container.lastElementChild;

        } else {

            container.appendChild(this.element);

        }

        this.onMounted();

    }

    unmount() {

        this.onUnmount();

        if (this.element) {

            this.element.remove();

        }

    }

    setState(update) {

        this.state = {

            ...this.state,

            ...update

        };

        this.update();

    }

    update() {

        /* override */

    }

    qs(selector) {

        return this.element.querySelector(selector);

    }

    qsa(selector) {

        return this.element.querySelectorAll(selector);

    }

    on(event, selector, callback) {

        this.element.addEventListener(event, e => {

            const target = e.target.closest(selector);

            if (!target) return;

            callback(e, target);

        });

    }

    onMounted() {}

    onUnmount() {}

    render() {

        return document.createElement("div");

    }

}