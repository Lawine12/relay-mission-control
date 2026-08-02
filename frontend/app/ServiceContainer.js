/******************************************************************************
 * Relay Mission Control
 *
 * ServiceContainer.js
 *
 * Lightweight dependency injection container.
 ******************************************************************************/

export class ServiceContainer {

    constructor() {

        this.instances = new Map();
        this.factories = new Map();

    }

    /**
     * Register an already-created singleton.
     */
    register(name, instance) {

        if (this.instances.has(name) || this.factories.has(name)) {

            throw new Error(
                `Service '${name}' is already registered.`
            );

        }

        this.instances.set(name, instance);

    }

    /**
     * Register a lazy factory.
     */
    factory(name, creator) {

        if (this.instances.has(name) || this.factories.has(name)) {

            throw new Error(
                `Service '${name}' is already registered.`
            );

        }

        this.factories.set(name, creator);

    }

    /**
     * Resolve a service.
     */
    resolve(name) {

        if (this.instances.has(name)) {

            return this.instances.get(name);

        }

        if (this.factories.has(name)) {

            const instance =
                this.factories.get(name)(this);

            this.instances.set(
                name,
                instance
            );

            this.factories.delete(name);

            return instance;

        }

        throw new Error(

            `Unknown service '${name}'.`

        );

    }

    /**
     * Check existence.
     */
    has(name) {

        return (

            this.instances.has(name) ||

            this.factories.has(name)

        );

    }

    /**
     * Remove everything.
     */
    clear() {

        this.instances.clear();

        this.factories.clear();

    }

}