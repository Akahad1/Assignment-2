import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

export const productSchema = new Schema<TProduct>({
  name: { type: String, required: [true, "name is required"] },
  description: { type: String, required: [true, " description is required"] },
  price: { type: Number, required: [true, "price is required"] },
  category: { type: String, required: [true, "category is required"] },
  tags: { type: [String] },
  variants: [
    {
      type: { type: String },
      value: { type: String },
    },
    {
      type: { type: String },
      value: { type: String },
    },
  ],
  inventory: {
    quantity: { type: Number, required: [true, "quantity is required"] },
    inStock: { type: Boolean },
  },
});
export const Product = model<TProduct>("Product", productSchema);
