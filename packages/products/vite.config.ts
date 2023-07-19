import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "products",
      filename: "products.js",
      exposes: {
        "./Products": "./src/views/Products.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
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
