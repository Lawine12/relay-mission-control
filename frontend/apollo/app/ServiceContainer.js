export class ServiceContainer {

    constructor() {
        this.services = new Map();
    }

    register(name, instance) {

        if (this.services.has(name)) {
            throw new Error(`Service '${name}' already exists.`);
        }

        this.services.set(name, instance);

    }

    resolve(name) {

        if (!this.services.has(name)) {
            throw new Error(`Unknown service '${name}'.`);
        }

        return this.services.get(name);

    }

}