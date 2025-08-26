import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), TanStackRouterVite({ autoCodeSplitting: true }) , viteReact(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@icons': resolve(__dirname, './src/icons'),
      '@components': resolve(__dirname, './src/components/shared'),
    },
  },
})
