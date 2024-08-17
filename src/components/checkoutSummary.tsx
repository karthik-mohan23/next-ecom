"use client";
import { formatIndianPrice } from "@/lib/utils";
import Divider from "./divider";
import Link from "next/link";
import { useState } from "react";

function CheckoutSummary({ finalPrice }: { finalPrice: number }) {
  const [couponInput, setCouponInput] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [isCouponValid, setIsCouponValid] = useState(false);

  const couponCode = "FREEDOM78";

  const handleCoupon = () => {
    const isValid = couponCode === couponInput;
    setIsCouponValid(isValid);
    setIsCouponApplied(true);
  };

  const discountedPrice = isCouponValid
    ? finalPrice - (finalPrice * 15) / 100
    : finalPrice;

  return (
    <div className="w-72 space-y-2">
      <h5 className="text-[#6a6f73] font-bold ">Total:</h5>
      <div className="flex items-center gap-3">
        <p className="font-bold text-3xl">
          {formatIndianPrice(discountedPrice)}
        </p>
        {isCouponValid && (
          <span className="line-through text-gray-400 text-xl">
            {formatIndianPrice(finalPrice)}
          </span>
        )}
      </div>
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
        {isCouponValid && (
          <div className="border border-gray-300 py-1 px-2 mt-2 mb-3">
            <p className="text-green-500">
              <strong>FREEDOM78</strong> is applied
            </p>
          </div>
        )}
        {isCouponApplied && couponInput && !isCouponValid && (
          <div className="border border-gray-300 py-1 px-2 mt-2 mb-3">
            <p className="text-red-500">
              <strong>{couponInput}</strong> is not valid
            </p>
          </div>
        )}

        <div className="flex items-center h-10">
          <input
            type="text"
            placeholder="Enter coupon"
            className="h-full px-2 border w-3/4 border-blue-300"
            value={couponInput}
            onChange={(e) => {
              setCouponInput(e.target.value);
              setIsCouponApplied(false);
            }}
          />
          <button
            onClick={handleCoupon}
            className="bg-brand-color h-full flex-1  font-semibold  text-white hover:bg-blue-700 duration-300">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
export default CheckoutSummary;
