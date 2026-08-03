/******************************************************************************
 * Relay Mission Control
 *
 * Apollo Framework
 * ServiceContainer.js
 *
 * Lightweight dependency injection container.
 ******************************************************************************/

export class ServiceContainer {

    #instances = new Map();
    #factories = new Map();

    /**
     * Register an existing instance.
     *
     * @param {string} name
     * @param {*} instance
     */
    register(name, instance) {

        this.#assertName(name);

        if (this.has(name)) {
            throw new Error(`Service '${name}' is already registered.`);
        }

        this.#instances.set(name, instance);
    }

    /**
     * Register a lazy singleton.
     *
     * @param {string} name
     * @param {Function} factory
     */
    singleton(name, factory) {

        this.#assertName(name);

        if (typeof factory !== "function") {
            throw new TypeError(
                `Factory for '${name}' must be a function.`
            );
        }

        if (this.has(name)) {
            throw new Error(`Service '${name}' is already registered.`);
        }

        this.#factories.set(name, factory);
    }

    /**
     * Resolve a service.
     *
     * @param {string} name
     * @returns {*}
     */
    resolve(name) {

        if (this.#instances.has(name)) {
            return this.#instances.get(name);
        }

        if (this.#factories.has(name)) {

            const instance = this.#factories.get(name)(this);

            this.#factories.delete(name);

            this.#instances.set(name, instance);

            return instance;
        }

        throw new Error(`Unknown service '${name}'.`);
    }

    /**
     * Determine whether a service exists.
     *
     * @param {string} name
     * @returns {boolean}
     */
    has(name) {

        return (
            this.#instances.has(name) ||
            this.#factories.has(name)
        );

    }

    /**
     * Remove one service.
     *
     * @param {string} name
     */
    remove(name) {

        this.#instances.delete(name);
        this.#factories.delete(name);

    }

    /**
     * Remove all services.
     */
    clear() {

        this.#instances.clear();
        this.#factories.clear();

    }

    /**
     * Registered service names.
     *
     * @returns {string[]}
     */
    keys() {

        return [
            ...this.#instances.keys(),
            ...this.#factories.keys()
        ];

    }

    /**
     * Number of registered services.
     *
     * @returns {number}
     */
    size() {

        return this.keys().length;

    }

    /**
     * Validate service names.
     *
     * @param {string} name
     */
    #assertName(name) {

        if (typeof name !== "string" || name.trim() === "") {
            throw new TypeError(
                "Service name must be a non-empty string."
            );
        }

    }

}