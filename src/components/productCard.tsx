import { Product } from "@/lib/types";
import Image from "next/image";

type ProductCardProps = {
  productItem: Product;
};

function ProductCard({ productItem }: ProductCardProps) {
  return (
    <div className="  rounded-xl shadow-xl  border-2 border-gray-500 hover:border-black duration-300  ">
      <div className="relative w-full h-48">
        <Image
          src={productItem.image}
          alt={`image of ${productItem.title}`}
          fill
        />
      </div>
      <h3>{productItem.title}</h3>
    </div>
  );
}
export default ProductCard;
