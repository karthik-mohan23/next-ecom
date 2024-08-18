"use client";
import { discountCode, formatIndianPrice } from "@/lib/utils";
import Divider from "./divider";
import { useState } from "react";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";

type CheckoutSummaryProps = {
  finalPrice: number;
  clearCart: () => void;
};

function CheckoutSummary({ finalPrice, clearCart }: CheckoutSummaryProps) {
  const [couponInput, setCouponInput] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [isCouponValid, setIsCouponValid] = useState(false);

  const { userDetails } = useAuth();
  const router = useRouter();

  const handleCheckout = () => {
    if (!userDetails?.username) {
      router.push("/login");
    } else {
      handleClearCart();
      router.push("/checkout");
    }
  };

  const handleCoupon = () => {
    const isValid = discountCode === couponInput;
    setIsCouponValid(isValid);
    setIsCouponApplied(true);
  };

  const handleClearCart = () => {
    clearCart();
    setCouponInput("");
    setIsCouponApplied(false);
    setIsCouponValid(false);
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

      <button
        onClick={handleCheckout}
        className="bg-brand-color inline-block py-2 font-semibold w-full text-white hover:bg-blue-700 duration-300">
        Checkout
      </button>

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
