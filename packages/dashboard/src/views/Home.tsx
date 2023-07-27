import React, { Suspense } from "react";

// TODO: fix exporting and importing TS types
const CustomersWidget = React.lazy(() => import("customers/CustomersWidget"));
const ProductsWidget = React.lazy(() => import("products/ProductsWidget"));
const OrdersWidget = React.lazy(() => import("orders/OrdersWidget"));

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
