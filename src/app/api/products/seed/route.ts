import { allProducts } from "@/lib/data";
import connectToDB from "@/lib/db";
import Product from "@/models/Product";

export async function GET(request: Request) {
  try {
    await connectToDB();

    await Product.insertMany(allProducts);

    return Response.json({
      success: true,
      message: "Successfully seeded data",
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,
      message: "Error seeding data",
    });
  }
}
