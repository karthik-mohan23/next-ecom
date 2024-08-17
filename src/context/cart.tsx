"use client";
import { Product, ProductsArray } from "@/lib/types";
import { useContext, useState } from "react";
import { createContext } from "react";

type CartContextType = {
  cart: ProductsArray;
  addToCart: (newItem: Product) => void;
  removeFromCart: (itemId: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartDetailsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<ProductsArray>([]);

  const addToCart = (newItem: Product) => {
    setCart((prevCart: ProductsArray) => {
      const itemExists = prevCart.find((item) => item._id === newItem._id);

      if (itemExists) {
        return prevCart.map((item) =>
          item._id === newItem._id
            ? { ...item, quantity: item?.quantity ? item.quantity++ : 1 }
            : item
        );
      } else {
        return [...prevCart, { ...newItem, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartDetailsContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCartDetailsContext must be used within a CartDetailsProvider"
    );
  }
  return context;
};
