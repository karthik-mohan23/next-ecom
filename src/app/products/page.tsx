"use client";
import ProductsList from "@/components/productsList";
import { ProductsArray } from "@/lib/types";
import { useEffect, useState } from "react";

const fetchProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
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

function ProductsPage() {
  // const productsData: ProductsArray | null = await fetchProducts();
  const [productsData, setProductsData] = useState<ProductsArray | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProductsData(data);
    };
    getProducts();
  }, []);

  console.log(productsData);

  return (
    <section>
      <h1 className=" text-2xl md:text-4xl font-semibold text-center pt-10">
        All Products
      </h1>
      {productsData && productsData.length > 0 ? (
        <ProductsList productsData={productsData} />
      ) : (
        <h2>No products found</h2>
      )}
    </section>
  );
}
export default ProductsPage;
