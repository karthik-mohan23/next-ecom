import connectToDB from "@/lib/db";
import Product from "@/models/Product";

export async function GET(request: Request) {
  try {
    await connectToDB();

    const allProducts = await Product.find({});

    return Response.json({
      success: true,
      data: allProducts,
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,
      message: "Something went wrong",
    });
  }
}
