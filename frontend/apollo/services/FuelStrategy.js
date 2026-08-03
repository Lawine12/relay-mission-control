/******************************************************************************
 * Apollo Fuel Strategy
 ******************************************************************************/

export class FuelStrategy {


    constructor() {

        this.history = [];

        this.maxSamples = 20;

    }



    update(data) {


        if(
            typeof data.fuel !== "number"
        ) {

            return;

        }



        this.history.push({

            fuel:data.fuel,

            lap:data.lap ?? 0,

            time:Date.now()

        });



        if(
            this.history.length >
            this.maxSamples
        ) {

            this.history.shift();

        }


    }



    getConsumption() {


        if(
            this.history.length < 2
        ) {

            return 0;

        }


        const first =
            this.history[0];


        const last =
            this.history[
                this.history.length - 1
            ];



        const fuelUsed =
            first.fuel -
            last.fuel;



        const laps =
            last.lap -
            first.lap;



        if(
            laps <= 0
        ) {

            return 0;

        }



        return (
            fuelUsed /
            laps
        ).toFixed(2);


    }



    getEstimatedLaps(currentFuel) {


        const consumption =
            Number(
                this.getConsumption()
            );


        if(
            consumption <= 0
        ) {

            return 0;

        }



        return Math.floor(

            currentFuel /
            consumption

        );


    }



}