import ProductsList from "@/components/productsList";
import { ProductsArray } from "@/lib/types";

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

async function page() {
  const productsData: ProductsArray | null = await fetchProducts();
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  console.log(productsData);
  return (
    <section>
      <h1 className=" text-2xl md:text-4xl font-semibold text-center pt-10">
        All Products
      </h1>
      {productsData && productsData.length > 0 ? (
        <ProductsList productsData={productsData} />
      ) : (
        <h2>{process.env.NEXT_PUBLIC_BASE_URL}</h2>
      )}
    </section>
  );
}
export default page;
