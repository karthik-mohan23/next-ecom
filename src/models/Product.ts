const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  assured: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ["bestselling", "recommended", "new", "featured"],
  },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
