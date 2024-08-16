"use client";

import { useCartDetailsContext } from "@/context/cart";
import CartItemList from "./cartItemList";
import EmptyCartView from "./emptyCartView";

function CartPageContent() {
  const { cart } = useCartDetailsContext();
  return (
    <section>
      {cart.length > 0 ? <CartItemList cart={cart} /> : <EmptyCartView />}
    </section>
  );
}
export default CartPageContent;
