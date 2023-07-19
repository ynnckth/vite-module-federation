import { Product } from "../types/Product.ts";

export const fetchProducts = (): Promise<Product[]> => {
  return Promise.resolve([
    {
      id: "P001",
      name: "Babel Fish",
      description:
        "Stick it in your ear and instantaneously translates between any language",
      unitPrice: 84,
    },
    {
      id: "P002",
      name: "Towel",
      description: "The most useful thing an interstellar hitchhiker can have",
      unitPrice: 42,
    },
    {
      id: "P003",
      name: "Infinite Improbability Drive",
      description:
        "This device allows spaceships to travel anywhere in the Universe you wanted with no chance of ever being intercepted. It works on the principle of generating a field of total improbability, making highly improbable things happen regularly",
      unitPrice: 420,
    },
  ]);
};
