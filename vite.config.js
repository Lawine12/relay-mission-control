// vite.config.js

import { defineConfig } from "vite";


export default defineConfig({

    build: {

        outDir:
            "custom_components/relay_mission_control/www",

        emptyOutDir: false,

        sourcemap: true,

        rollupOptions: {

            input:
                "frontend/relay-panel.js",

            output: {

                entryFileNames:
                    "relay.js",

                assetFileNames:
                    "assets/[name][extname]"

            }

        }

    },


    css: {

        devSourcemap: false

    }

});