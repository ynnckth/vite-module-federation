import React, { Suspense } from "react";
import SvelteWrapper from "./SvelteWrapper";

// TODO: fix exporting and importing TS types
const CustomersWidget = React.lazy(() => import("customers/CustomersWidget"));
const OrdersWidget = React.lazy(() => import("orders/OrdersWidget"));
const ProductsWidget = React.lazy(async () => {
  const SvelteComponent = await import('products/ProductsWidget');
  const WrappedComponent = SvelteWrapper(SvelteComponent.default);
  return { default: WrappedComponent };
});

const Home: React.FC = () => {


  return (
    <div>
      <h2>Home</h2>
      <Suspense fallback={<div>Loading customers...</div>}>
        <CustomersWidget />
      </Suspense>
      <br />
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductsWidget />
      </Suspense>
      <br />
      <Suspense fallback={<div>Loading orders...</div>}>
        <OrdersWidget />
      </Suspense>
    </div>
  );
};
export default Home;
