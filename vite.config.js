import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({

    root: "frontend",

    build: {

        outDir: "../custom_components/relay_mission_control/www/relay",

        emptyOutDir: true,

        sourcemap: true,

        rollupOptions: {

            input: resolve(__dirname, "frontend/index.html")

        }

    },

    server: {

        port: 5173,

        open: false

    }

});