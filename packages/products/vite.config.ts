import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte'
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    federation({
      name: "products",
      filename: "products.js",
      exposes: {
        "./ProductsWidget": "./src/lib/ProductsWidget.svelte",
        "./ProductsCard": "./src/lib/ProductsCard.svelte",
      },
      shared: ["svelte"],
    }),
    tsconfigPaths(),
  ],
  preview: {
    host: "localhost",
    port: 5002,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
