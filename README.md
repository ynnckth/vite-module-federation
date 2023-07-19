# vite-module-federation
Getting started with micro-frontends and module federation with React and Vite

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
Run the shopping cart in preview mode:
```shell
cd packages/cart
npm run preview
```
> http://localhost:5001

### App (Host Application)
Run the host app in preview mode:
```shell
cd packages/app
npm run preview
```
> http://localhost:5000

---

## Open Points

- [ ] Read remote URL's from environment variables (how to deal with different environments?)
- [ ] How do I pass data to a remote module (e.g. add products to the shopping cart) -> props, callbacks, events, etc.?
- [ ] Navigation concept - independence of modules? granularity of exposed components by remotes? Should remotes themselves simply host their individual components or also offer a fully fledged UI for their domain?
- [ ] Error handling when a remote module goes down?
- [ ] Experiment with a remote module written in another technology (e.g. Angular or Svelte)
