import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  base: "./",

  build: {
    outDir: path.resolve(
      __dirname,
      "../custom_components/relay_mission_control/www"
    ),

    emptyOutDir: true,

    sourcemap: true,

    cssCodeSplit: false,

    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),

      output: {
        entryFileNames: "relay.js",
        chunkFileNames: "relay.js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "relay.css";
          }

          return "[name][extname]";
        },

        manualChunks: undefined
      }
    }
  }
});