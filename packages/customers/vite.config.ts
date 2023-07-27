import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "customers",
      filename: "customers.js",
      exposes: {
        "./CustomersWidget": "./src/components/CustomersWidget.tsx",
      },
      // TODO: does this mean the version from the host will be used effectively?
      // TODO: what about incompatible features e.g. if host uses a newer/older version of React?
      shared: ["react", "react-dom", "react-router-dom"],
    }),
    tsconfigPaths(),
  ],
  preview: {
    host: "localhost",
    port: 5001,
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
