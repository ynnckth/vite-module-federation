import React from "react";
import { Customer } from "../types/Customer.ts";

interface Props {
  customer: Customer;
}

const CustomerCard: React.FC<Props> = ({ customer }) => {
  return (
    <div
      style={{
        maxWidth: "250px",
        padding: "20px",
        boxShadow:
          "0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)",
      }}
    >
      <div>
        <strong>{customer.fullName}</strong>
        <p>{customer.email}</p>
        <p>{customer.address}</p>
        <p>Customer since {customer.registeredAt.toISOString()}</p>
      </div>
    </div>
  );
};
export default CustomerCard;
