import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dashboard",
      // TODO: check where to read these url's from ideally (environment specific)
      remotes: [
        {
          customers: {
            external: "http://localhost:5001/assets/customers.js",
            from: "vite",
            externalType: "url",
          },
          products: {
            external: "http://localhost:5002/assets/products.js",
            from: "vite",
            externalType: "url",
          },
          orders: {
            external: "http://localhost:5003/orders.js",
            from: "webpack",
            externalType: "url",
            format: "var",
          },
        },
      ],
      shared: ["react", "react-dom", "react-router-dom"],
    }),
    tsconfigPaths(),
  ],
  preview: {
    host: "localhost",
    port: 5000,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
