import { ProductsArray } from "@/lib/types";
import ProductCard from "./productCard";

const fetchProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Error fetching products data");
    }
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log(error);
  }
};

async function ProductsList() {
  const productsData: ProductsArray | null = await fetchProducts();
  return (
    <section className="px-10 md:px-0 pt-10 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-20">
      {productsData &&
        productsData.length > 0 &&
        productsData.map((productItem) => (
          <ProductCard key={productItem._id} productItem={productItem} />
        ))}
    </section>
  );
}
export default ProductsList;
