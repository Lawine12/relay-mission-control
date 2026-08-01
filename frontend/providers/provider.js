/******************************************************************************
 *
 * Provider Interface
 *
 ******************************************************************************/

export class Provider {

    constructor(id) {
        this.id = id;
    }

    async connect() {
        throw new Error("connect() not implemented");
    }

    async disconnect() {}

    getState() {
        return {};
    }

}