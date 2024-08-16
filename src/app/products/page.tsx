import ProductsList from "@/components/productsList";
import Loading from "./loading";
import { Suspense } from "react";

async function ProductsPage() {
  return (
    <section>
      <h1 className="text-center md:text-left text-2xl  font-semibold  pt-10">
        All Products
      </h1>
      <Suspense fallback={<Loading />}>
        <ProductsList />
      </Suspense>
    </section>
  );
}
export default ProductsPage;
