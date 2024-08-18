"use client";
import { Product, ProductsArray } from "@/lib/types";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "sonner";

type CartContextType = {
  cart: ProductsArray;
  addToCart: (newItem: Product) => void;
  removeFromCart: (itemId: string) => void;
  increaseItemQuantityInCart: (itemId: string) => void;
  decreaseItemQuantityInCart: (itemId: string) => void;
  clearCart: () => void;
  totalCartLength: number;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartDetailsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<ProductsArray>(() => {
    const storedValue = localStorage.getItem("cartItems");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (newItem: Product) => {
    setCart((prevCart: ProductsArray) => {
      const itemExists = prevCart.find((item) => item._id === newItem._id);

      if (itemExists) {
        toast.info(`${newItem.title} quantity updated in cart!`);
        return prevCart.map((item) =>
          item._id === newItem._id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      } else {
        toast.success(`${newItem.title} added to cart!`);
        return [...prevCart, { ...newItem, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (itemId: string) => {
    const isConfirmed = confirm("Are you sure you want to delete this item ?");
    if (isConfirmed) {
      setCart((prevCart) => {
        const item = prevCart.find((item) => item._id === itemId);
        if (item) {
          toast.success(`${item.title} removed from cart!`);
        }
        return prevCart.filter((item) => item._id !== itemId);
      });
    }
  };

  const increaseItemQuantityInCart = (itemId: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === itemId
          ? { ...item, quantity: (item.quantity || 0) + 1 }
          : item
      )
    );
  };

  const decreaseItemQuantityInCart = (itemId: string) => {
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

  const totalCartLength = cart.reduce(
    (total, product) => total + (product.quantity ?? 0),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseItemQuantityInCart,
        decreaseItemQuantityInCart,
        clearCart,
        totalCartLength,
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
