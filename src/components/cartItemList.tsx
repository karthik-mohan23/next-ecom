import { ProductsArray } from "@/lib/types";
import Image from "next/image";
import CheckoutSummary from "./checkoutSummary";
import Divider from "./divider";
import { formatIndianPrice } from "@/lib/utils";

type CartItemListProps = {
  cart: ProductsArray;
  removeFromCart: (itemId: string) => void;
  decreaseItemQuantityInCart: (itemId: string) => void;
  increaseItemQuantityInCart: (itemId: string) => void;
};

function CartItemList({
  cart,
  removeFromCart,
  decreaseItemQuantityInCart,
  increaseItemQuantityInCart,
}: CartItemListProps) {
  const totalPrice = cart.reduce((total, item) => {
    const itemTotal = item.price * (item.quantity || 1);
    return total + itemTotal;
  }, 0);

  return (
    <section className=" mb-16 flex flex-wrap-reverse md:flex-row gap-10 justify-between w-full ">
      <div className="max-w-xl flex-grow">
        {cart.map((item) => (
          <div key={item._id}>
            <div className="my-5">
              <Divider />
            </div>
            <div className="flex  gap-3 ">
              <div className="relative w-1/4 h-20">
                <Image
                  src={item.image}
                  alt={`name of ${item.title}`}
                  fill
                  className="object-contain "
                />
              </div>

              <div className="flex-1 flex flex-col gap-2 ">
                <h4 className="font-bold text-lg">{item.title}</h4>
                <div className="flex gap-4">
                  <button onClick={() => decreaseItemQuantityInCart(item._id)}>
                    -
                  </button>
                  <p className="font-semibold text-base">{item?.quantity}</p>
                  <button onClick={() => increaseItemQuantityInCart(item._id)}>
                    +
                  </button>
                </div>
              </div>
              <p className="text-gray-700 ">{formatIndianPrice(item.price)}</p>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-400  self-start hover:text-red-500 duration-300 text-sm font-semibold ">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <CheckoutSummary finalPrice={totalPrice} />
    </section>
  );
}
export default CartItemList;
