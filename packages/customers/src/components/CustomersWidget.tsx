import React, { useEffect, useState } from "react";
import { Customer } from "../types/Customer.ts";
import { fetchCustomers } from "../api/fetchCustomers.ts";
import CustomerCard from "./CustomerCard.tsx";

const CustomersWidget: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    fetchCustomers()
      .then((customers) => setCustomers(customers))
      .catch((e) => console.error("Error fetching customers: ", e));
  }, []);

  return (
    <div
      style={{
        borderStyle: "dashed",
        borderColor: "var(--customers-module-color)",
      }}
    >
      <h2>Your Customers [Customers Remote Module]</h2>
      <p>API base url: {import.meta.env.VITE_CUSTOMER_API_BASE_URL}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "35px" }}>
        {customers.map((c) => (
          <CustomerCard key={c.id} customer={c} />
        ))}
      </div>
    </div>
  );
};
export default CustomersWidget;
