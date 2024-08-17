import { formatIndianPrice } from "@/lib/utils";
import Divider from "./divider";
import Link from "next/link";

function CheckoutSummary({ finalPrice }: { finalPrice: number }) {
  return (
    <div className="w-72 space-y-2">
      <h5 className="text-[#6a6f73] font-bold ">Total:</h5>
      <p className="font-bold text-3xl">{formatIndianPrice(finalPrice)}</p>
      <Link href={`/checkout`} className="inline-block w-full">
        <button className="bg-brand-color py-2 font-semibold w-full text-white hover:bg-blue-700 duration-300">
          Checkout
        </button>
      </Link>
      <div className="pt-2">
        <Divider />
      </div>
      <div>
        <h5 className="text-[#6a6f73] font-bold mb-1">Promotions</h5>
        <div className="flex items-center h-10">
          <input
            type="text"
            placeholder="Enter coupon"
            className="h-full px-2 border w-3/4 border-blue-300"
          />
          <button className="bg-brand-color h-full flex-1  font-semibold  text-white hover:bg-blue-700 duration-300">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
export default CheckoutSummary;
