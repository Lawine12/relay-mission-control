import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({

    build: {

        outDir: "custom_components/relay_mission_control/www",

        emptyOutDir: true,

        lib: {

            entry: resolve(__dirname, "frontend/relay.js"),

            name: "RelayMissionControl",

            formats: ["es"],

            fileName: () => "relay.js"

        }

    }

});