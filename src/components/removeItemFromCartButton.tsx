import { useCartDetailsContext } from "@/context/cart";

type RemoveItemFromCartButtonProps = {
  itemId: string;
};

function RemoveItemFromCartButton({ itemId }: RemoveItemFromCartButtonProps) {
  const { removeFromCart } = useCartDetailsContext();

  return (
    <button
      onClick={() => removeFromCart(itemId)}
      className="text-red-400 hover:text-red-500 duration-300 text-sm font-semibold">
      Remove
    </button>
  );
}
export default RemoveItemFromCartButton;
