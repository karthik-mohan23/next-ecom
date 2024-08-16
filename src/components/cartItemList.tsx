import { ProductsArray } from "@/lib/types";
import Image from "next/image";
import CheckoutSummary from "./checkoutSummary";
import Divider from "./divider";

type CartItemListProps = {
  cart: ProductsArray;
};

function CartItemList({ cart }: CartItemListProps) {
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
            <div className="flex  justify-between gap-4">
              <div className="relative flex-1 h-20">
                <Image
                  src={item.image}
                  alt={`name of ${item.title}`}
                  fill
                  className="object-contain "
                />
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <h4 className="font-bold text-lg">{item.title}</h4>
                <div className="flex gap-4">
                  <button>-</button>
                  <p className="font-semibold text-base">{item?.quantity}</p>
                  <button>+</button>
                </div>
              </div>
              <div className="">
                <button className="text-red-400 hover:text-red-500 duration-300 text-sm font-semibold">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CheckoutSummary finalPrice={totalPrice} />
    </section>
  );
}
export default CartItemList;
