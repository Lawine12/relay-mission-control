/******************************************************************************
 * Relay Mission Control
 *
 * ServiceContainer.js
 *
 * Simple dependency injection container.
 ******************************************************************************/

export class ServiceContainer {

    constructor() {
        this.instances = new Map();
        this.factories = new Map();
    }

    register(name, instance) {

        if (this.has(name)) {
            throw new Error(`Service '${name}' is already registered.`);
        }

        this.instances.set(name, instance);
    }

    singleton(name, factory) {

        if (this.has(name) || this.factories.has(name)) {
            throw new Error(`Service '${name}' is already registered.`);
        }

        this.factories.set(name, factory);
    }

    resolve(name) {

        if (this.instances.has(name)) {
            return this.instances.get(name);
        }

        if (this.factories.has(name)) {

            const instance = this.factories.get(name)();

            this.factories.delete(name);

            this.instances.set(name, instance);

            return instance;
        }

        throw new Error(`Unknown service '${name}'.`);
    }

    has(name) {

        return (
            this.instances.has(name) ||
            this.factories.has(name)
        );

    }

    remove(name) {

        this.instances.delete(name);

        this.factories.delete(name);

    }

    clear() {

        this.instances.clear();

        this.factories.clear();

    }

}