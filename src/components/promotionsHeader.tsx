import { discountCode } from "@/lib/utils";

function PromotionsHeader() {
  return (
    <div className="bg-blue-700 py-2">
      <p className="text-white text-center w-[90%] mx-auto">
        🎉 Celebrate India&apos;s Independence Day with Us! Use code{" "}
        <strong>{discountCode}</strong> for 15% off on checkout! 🇮🇳
      </p>
    </div>
  );
}
export default PromotionsHeader;
