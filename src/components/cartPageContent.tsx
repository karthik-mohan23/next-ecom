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
  } = useCartDetailsContext();
  return (
    <section>
      {cart.length > 0 ? (
        <CartItemList
          cart={cart}
          removeFromCart={removeFromCart}
          decreaseItemQuantityInCart={decreaseItemQuantityInCart}
          increaseItemQuantityInCart={increaseItemQuantityInCart}
        />
      ) : (
        <EmptyCartView />
      )}
    </section>
  );
}
export default CartPageContent;
