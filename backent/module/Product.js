/*import mongoose from "mongoose";

const productSchema =new mongoose.Schema({
    name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String }
})*/

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String }
});

const Product = mongoose.model("Product", productSchema);

export default Product;