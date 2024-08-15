import { Product } from "@/lib/types";
import { formatIndianPrice } from "@/lib/utils";
import Image from "next/image";

type ProductCardProps = {
  productItem: Product;
};

function ProductCard({ productItem }: ProductCardProps) {
  return (
    <div className="flex flex-col rounded overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]  transition duration-200 h-full active:scale-[1.02]  ">
      <div className="relative w-full h-48">
        <Image
          src={productItem.image}
          alt={`image of ${productItem.title}`}
          fill
          className="object-contain hover:scale-105 transition duration-300"
        />
        {productItem?.status && (
          <span className="bg-[#00a098] text-white font-semibold p-1">
            {productItem?.status}
          </span>
        )}
      </div>
      <div className="px-6 pt-2 flex-grow">
        <h3 className="font-bold text-xl mb-2">{productItem.title}</h3>
      </div>
      <div className="px-6 pb-2 flex-grow flex flex-col gap-1 ">
        <div className="flex items-center gap-2">
          {productItem.assured ? (
            <p className=" bg-brand-color inline-block text-white italic rounded-full px-2 py-1 text-xs font-semibold mr-2 ">
              Assured{" "}
            </p>
          ) : null}
          <p className=" bg-gray-200 inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 italic">
            {productItem.quantity > 0 ? "in stock" : "out of stock"}
          </p>
        </div>

        <p className=" px-3 py-1 text-lg font-bold text-gray-700 mr-2 ">
          {formatIndianPrice(productItem.price)}
        </p>
      </div>
      <div className="mt-auto">
        <button
          className="bg-brand-color text-lg font-medium w-full py-2 rounded-md text-white disabled:bg-brand-color/60 disabled:cursor-not-allowed hover:bg-blue-700 hover:cursor-pointer transition duration-200"
          disabled={productItem.quantity === 0}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
