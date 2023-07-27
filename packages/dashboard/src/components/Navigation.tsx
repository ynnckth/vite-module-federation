import React from "react";

const Navigation: React.FC = () => {
  return (
    <div>
      <div>
        <a
          href={import.meta.env.VITE_CUSTOMERS_MODULE_BASE_URL}
          target="_blank"
        >
          Customers
        </a>
        {"  |  "}
        <a href={import.meta.env.VITE_PRODUCTS_MODULE_BASE_URL} target="_blank">
          Products
        </a>
      </div>
    </div>
  );
};

export default Navigation;
