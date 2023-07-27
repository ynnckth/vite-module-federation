import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Product } from "../types/Product.ts";

const ProductsContext = createContext<
  [Product[], Dispatch<SetStateAction<Product[]>>]
>([[], () => {}]);

interface Props {
  children: React.ReactNode;
}

export const ProductsProvider: React.FC<Props> = ({ children }) => {
  return (
    <ProductsContext.Provider value={useState<Product[]>([])}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductsContext);
};
