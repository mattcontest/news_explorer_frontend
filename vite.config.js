import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/news_explorer_frontend/",
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
