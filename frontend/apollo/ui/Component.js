/******************************************************************************
 * Apollo Component
 ******************************************************************************/

export class Component {

    constructor() {

        this.element = null;
        this.parent = null;

    }

    mount(parent) {

        this.parent = parent;

        this.element = this.render();

        if (!(this.element instanceof HTMLElement)) {

            throw new Error(
                `${this.constructor.name}.render() must return an HTMLElement`
            );

        }

        parent.appendChild(this.element);

        this.onMount();

    }

    unmount() {

        this.onUnmount();

        this.element?.remove();

        this.element = null;
        this.parent = null;

    }

    update() {

        if (!this.element) {
            return;
        }

        const replacement = this.render();

        this.element.replaceWith(replacement);

        this.element = replacement;

    }

    render() {

        return document.createElement("div");

    }

    onMount() {}

    onUnmount() {}

}