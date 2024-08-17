export const formatIndianPrice = (indianRupees: number) => {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(indianRupees / 100);

  return formattedPrice;
};

export const discountCode = "FREEDOM78";
