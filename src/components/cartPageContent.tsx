"use client";

import { useCartDetailsContext } from "@/context/cart";
import CartItemList from "./cartItemList";
import EmptyCartView from "./emptyCartView";

function CartPageContent() {
  const {
    cart,
    removeFromCart,
    decreaseItemQuantityInCart,
    increaseItemQuantityInCart,
    clearCart,
  } = useCartDetailsContext();
  return (
    <section className="min-h-[60vh]">
      {cart.length > 0 ? (
        <CartItemList
          cart={cart}
          removeFromCart={removeFromCart}
          decreaseItemQuantityInCart={decreaseItemQuantityInCart}
          increaseItemQuantityInCart={increaseItemQuantityInCart}
          clearCart={clearCart}
        />
      ) : (
        <EmptyCartView />
      )}
    </section>
  );
}
export default CartPageContent;
