/******************************************************************************
 * Apollo Session Service
 ******************************************************************************/

export class SessionService {


    constructor() {


        this.session = {

            track: "Unknown",

            type: "Unknown",

            driver: "Unknown",

            lap: 0,

            totalLaps: 0,

            position: 0,

            time: 0

        };


    }



    update(data = {}) {


        this.session = {

            ...this.session,

            ...data

        };


    }



    get() {

        return this.session;

    }


}