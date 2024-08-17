"use client";

import { useCartDetailsContext } from "@/context/cart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

function Header() {
  const { cart } = useCartDetailsContext();
  const itemsInCart = cart.length;
  return (
    <header className=" bg-brand-color h-16 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
      <div className="max-w-5xl mx-auto w-[90%] h-full flex justify-between gap-5 md:gap-10 items-center text-white">
        <Link href={`/`}>
          <h2 className="text-xl md:text-2xl font-bold italic">FlipMart</h2>
        </Link>
        <div className="w-full hidden sm:block">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="py-2 px-2 w-full"
          />
        </div>
        <nav>
          <ul className="text-base flex items-center gap-5 font-semibold">
            <li>
              <Link
                className="bg-white text-brand-color px-2 md:px-10 py-2 "
                href={`/login`}>
                Login
              </Link>
            </li>
            <li>
              <Link href={`/products`}>Products</Link>
            </li>
            <li className="relative">
              <Link href={`/cart`} className="flex items-center gap-1">
                <ShoppingCart size={18} /> <span>Cart</span>{" "}
                {itemsInCart > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#ffe500] text-brand-color rounded-full h-5 w-5 flex items-center justify-center text-sm">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
