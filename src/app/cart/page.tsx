import CartItemCount from "@/components/cartItemCount";
import CartPageContent from "@/components/cartPageContent";

function page() {
  return (
    <section>
      <h1 className="font-bold text-3xl pt-10 pb-3">Shopping Cart</h1>
      <CartItemCount />
      <CartPageContent />
    </section>
  );
}
export default page;
