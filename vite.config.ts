import tailwindcss from "@tailwindcss/vite";
// import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import compression from "vite-plugin-compression2";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    tanstackRouter({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
    compression({
      algorithms: ["gzip", "brotliCompress"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@icons": resolve(__dirname, "./src/icons"),
      "@components": resolve(__dirname, "./src/components/shared"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/vitest.setup.ts",
    css: true,
  },
  server: {
    proxy: {
      "/api": {
        target: import.meta.env.VITE_DOMIN_API,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
