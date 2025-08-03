import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  //When in local development use this base
  // base: "/news_explorer_frontend/",
  //When in PROD use this:
  base: "/",
  plugins: [react()],
  server: {
    port: 3002,
  },

  // build: {
  //   outDir: "dist",
  //   assetsDir: "assets",
  //   rollupOptions: {
  //     output: {
  //       manualChunks: undefined,
  //     },
  //   },
  // },
});
