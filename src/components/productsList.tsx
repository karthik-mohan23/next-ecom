import { ProductsArray } from "@/lib/types";
import ProductCard from "./productCard";

type ProductsListProps = {
  productsData: ProductsArray;
};

function ProductsList({ productsData }: ProductsListProps) {
  return (
    <section className="px-10 md:px-0 pt-10 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-20">
      {productsData.map((productItem) => (
        <ProductCard key={productItem._id} productItem={productItem} />
      ))}
    </section>
  );
}
export default ProductsList;
