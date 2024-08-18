"use client";

import { useCartDetailsContext } from "@/context/cart";

function CartItemCount() {
  const { totalCartLength } = useCartDetailsContext();

  return <p className="font-medium">{totalCartLength} Items in Cart</p>;
}
export default CartItemCount;
