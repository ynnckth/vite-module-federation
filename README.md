# vite-module-federation
Getting started with micro-frontends and module federation with React and Vite

The idea is that the application is separated into several independently deployable frontend modules.
Each module is maintained by a separate team. The app module is the host module that imports components exposed by the other remote modules.

Overview and relationship of modules:
```
app (host)
├── cart (remote)
└── products (remote)
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

### Shopping Cart
Run the shopping cart module in preview mode:
```shell
cd packages/cart
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

### App (Host Application)
Run the host app in preview mode:
```shell
cd packages/app
npm run preview
# Alternatively run in development mode (with hot reload)
# npm run dev
```
> http://localhost:5000

---

## Open Points

- [ ] Read remote URL's from environment variables (how to deal with different environments?)
- [ ] How do I pass data to a remote module (e.g. add products to the shopping cart) -> props, callbacks, events, etc.?
- [ ] Should the host manage all state or should remotes hold their own state?
- [ ] Should the remotes simply expose components for the host to import or should they host a fully fledged UI as well?
- [ ] Error handling when a remote module goes down?
- [ ] Experiment with a remote module written in another technology (e.g. Angular or Svelte)
- [ ] Do styles from host influence imported remotes?

Idea:
- Cart module exposes the main `ShoppingCart` component which manages its own state (products in cart)
- Cart module exposes an additional `AddToCartButton` component which is embedded into each product and puts the current product into the shopping cart

