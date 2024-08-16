"use client";
import { useCartDetailsContext } from "@/context/cart";
import { Product } from "@/lib/types";

type AddToCartButtonProps = {
  productItem: Product;
};

function AddToCartButton({ productItem }: AddToCartButtonProps) {
  const { addToCart } = useCartDetailsContext();

  return (
    <button
      onClick={() => addToCart(productItem)}
      className="bg-brand-color text-lg font-medium w-full py-2 rounded-md text-white disabled:bg-brand-color/60 disabled:cursor-not-allowed hover:bg-blue-700 hover:cursor-pointer transition duration-200"
      disabled={!productItem.inStock}>
      Add to cart
    </button>
  );
}
export default AddToCartButton;
