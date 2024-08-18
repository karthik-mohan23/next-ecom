import Link from "next/link";

function page() {
  return (
    <section className="flex flex-col gap-2 justify-center items-center min-h-[60vh]">
      <h1 className="text-2xl text-center max-w-sm">
        Thank you! Your order has been placed successfully.
      </h1>
      <Link
        href={`/products`}
        className="bg-brand-color px-3 py-2 text-white font-semibold text-sm hover:bg-blue-700 duration-300">
        Keep shopping
      </Link>
    </section>
  );
}
export default page;
