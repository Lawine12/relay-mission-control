import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({

    build: {

        outDir: "custom_components/relay_mission_control/www",

        emptyOutDir: true,

        sourcemap: true,

        target: "es2022",

        rollupOptions: {

            input: resolve(
                __dirname,
                "frontend/main.js"
            ),

            output: {

                format: "es",

                entryFileNames: "relay.js",

                inlineDynamicImports: true

            }

        }

    }

});