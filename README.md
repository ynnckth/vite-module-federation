# vite-module-federation
Getting started with micro-frontends and module federation with React and Vite

The idea is that the application is separated into several independently deployable frontend modules.
Each module is maintained by a separate team. The app module is the host module that imports components exposed by the other remote modules.

Overview and relationship of modules:
```
dashboard (host, vite)
├── customers (remote, vite)
├── orders (remote, cra/webpack)
└── products (remote, vite)
```

## Development Setup
In order to test the integration of the different modules, each module needs to be started in preview mode.
In the regular dev mode, the module federation will not be enabled, thus the exposed bundles won't be available.

Install all dependencies
```shell
npm install
```

Build all packages: 
```shell
npm run build
```

### Customers
Run the shopping cart module in preview mode:
```shell
cd packages/customers
npm run preview
```
> http://localhost:5001

### Products
Run the products module in preview mode:
```shell
cd packages/products
npm run preview
```
> http://localhost:5002

### Orders
Run the orders module in preview mode:
```shell
cd packages/orders
npm run preview
```
> http://localhost:5003

### Dashboard (Host Application)
Run the host app in preview mode:
```shell
cd packages/dashboard
npm run preview
# Alternatively run in development mode (with hot reload)
# npm run dev
```
> http://localhost:5000

---

## Open Points

- [ ] How do I add shared TS types to be reused by remotes and host?
- [ ] Read remote URL's from environment variables (how to deal with different environments?)
- [ ] Should the remotes simply expose components for the host to import or should they host a fully fledged UI as well?
- [ ] Error handling when a remote module goes down?
 - Failsafe mechanisms such as re-attempting to fetch the remote?
 - Rendering a fallback component/element if imported remote component is not available?
 - You can use error boundaries around imported remote components and render a fallback -> how to do this consistently?
- [ ] Experiment with a remote module written in another technology (e.g. Angular or Svelte)