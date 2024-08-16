"use client";

import { useCartDetailsContext } from "@/context/cart";

function CartItemCount() {
  const { cart } = useCartDetailsContext();
  const itemsInCart = cart.length;
  return <p className="font-medium">{itemsInCart} Items in Cart</p>;
}
export default CartItemCount;
