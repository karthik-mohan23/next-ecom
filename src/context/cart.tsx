"use client";
import { Product, ProductsArray } from "@/lib/types";
import { useContext, useState } from "react";
import { createContext } from "react";

type CartContextType = {
  cart: ProductsArray;
  addToCart: (newItem: Product) => void;
  removeFromCart: (itemId: string) => void;
  increaseItemQuantityInCart: (itemId: string) => void;
  decreaseItemQuantityInCart: (itemId: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartDetailsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<ProductsArray>([]);

  const addToCart = (newItem: Product) => {
    console.log("addToCart clicked", newItem);
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
    const isConfirmed = confirm("Are you sure you want to delete this item ?");
    if (isConfirmed) {
      setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
    }
  };

  const increaseItemQuantityInCart = (itemId: string) => {
    console.log("increaseItemQuantityInCart clicked", itemId);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === itemId
          ? { ...item, quantity: item.quantity && item.quantity++ }
          : item
      )
    );
  };

  const decreaseItemQuantityInCart = (itemId: string) => {
    console.log("decreaseItemQuantityInCart clicked", itemId);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === itemId
          ? {
              ...item,
              quantity:
                item.quantity && item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseItemQuantityInCart,
        decreaseItemQuantityInCart,
      }}>
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
