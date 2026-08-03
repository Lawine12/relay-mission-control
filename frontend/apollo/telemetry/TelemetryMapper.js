/******************************************************************************
 * Apollo Telemetry Mapper
 *
 * Converts external telemetry formats into Apollo's internal format.
 ******************************************************************************/

import { TelemetryModel } from "./TelemetryModel.js";


export class TelemetryMapper {


    static fromSimHub(data = {}) {


        return new TelemetryModel({

            /*
             * Vehicle telemetry
             */

            speed:
                data.SpeedKmh ??
                data.Speed ??
                data.speed ??
                0,


            rpm:
                data.Rpms ??
                data.RPM ??
                data.rpm ??
                0,


            gear:
                data.Gear ??
                data.gear ??
                "N",


            throttle:
                data.Throttle ??
                data.throttle ??
                0,


            brake:
                data.Brake ??
                data.brake ??
                0,


            clutch:
                data.Clutch ??
                data.clutch ??
                0,



            /*
             * Fuel
             */

            fuel:
                data.Fuel ??
                data.FuelLevel ??
                data.fuel ??
                0,



            /*
             * Lap information
             */

            lapTime:
                data.CurrentLapTime ??
                data.LapTime ??
                data.lapTime ??
                0,


            lap:
                data.CurrentLap ??
                data.Lap ??
                data.lap ??
                0,


            totalLaps:
                data.TotalLaps ??
                data.totalLaps ??
                0,



            /*
             * Race position
             */

            position:
                data.Position ??
                data.RacePosition ??
                data.position ??
                0,



            /*
             * Session information
             */

            track:
                data.TrackName ??
                data.Track ??
                data.track ??
                "Unknown",


            type:
                data.SessionType ??
                data.Session ??
                data.type ??
                "Unknown",


            driver:
                data.DriverName ??
                data.Driver ??
                data.driver ??
                "Unknown",



            /*
             * Tyres
             */

            tyreFL:
                data.TyreTempFL ??
                data.tyreFL ??
                0,


            tyreFR:
                data.TyreTempFR ??
                data.tyreFR ??
                0,


            tyreRL:
                data.TyreTempRL ??
                data.tyreRL ??
                0,


            tyreRR:
                data.TyreTempRR ??
                data.tyreRR ??
                0



        });


    }


}