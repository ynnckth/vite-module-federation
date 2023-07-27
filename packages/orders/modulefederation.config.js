const { dependencies } = require("./package.json");

module.exports = {
  name: "orders",
  exposes: {
    "./OrdersWidget": "./src/components/OrdersWidget.tsx",
  },
  filename: "orders.js",
  shared: {
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    "react-router-dom": {
      singleton: true,
      requiredVersion: dependencies["react-router-dom"],
    },
  },
};
