import Link from "next/link";

function EmptyCartView() {
  return (
    <section className="flex flex-col gap-2  min-h-[45vh]  items-center justify-center">
      <h3>Your cart is empty.</h3>
      <Link
        href={`/products`}
        className="bg-brand-color px-3 py-2 text-white font-semibold text-sm hover:bg-blue-700 duration-300">
        Keep shopping
      </Link>
    </section>
  );
}
export default EmptyCartView;
