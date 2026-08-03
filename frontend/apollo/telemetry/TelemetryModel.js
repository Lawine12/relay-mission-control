/******************************************************************************
 * Apollo Telemetry Model
 ******************************************************************************/

export class TelemetryModel {


    constructor(data = {}) {


        this.speed =
            data.speed ?? 0;


        this.rpm =
            data.rpm ?? 0;


        this.gear =
            data.gear ?? "N";


        this.throttle =
            data.throttle ?? 0;


        this.brake =
            data.brake ?? 0;


        this.clutch =
            data.clutch ?? 0;


        this.fuel =
            data.fuel ?? 0;


        this.lapTime =
            data.lapTime ?? 0;


        this.position =
            data.position ?? 0;


        this.track =
            data.track ?? null;


    }


}