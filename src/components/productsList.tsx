import { ProductsArray } from "@/lib/types";
import ProductCard from "./productCard";

type ProductsListProps = {
  productsData: ProductsArray;
};

function ProductsList({ productsData }: ProductsListProps) {
  return (
    // <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 pt-5 pb-10">
    <section className="px-10 md:px-0 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
      {productsData.map((productItem) => (
        <ProductCard key={productItem._id} productItem={productItem} />
      ))}
    </section>
  );
}
export default ProductsList;
