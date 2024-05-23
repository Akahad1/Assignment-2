import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

export const orderSchema = new Schema<TOrder>({
  email: { type: String, required: [true, "email is required"] },
  productId: { type: String, required: [true, "prodctId is required"] },
  price: { type: Number, required: [true, "price is required"] },
  quantity: { type: Number },
});

export const Order = model<TOrder>("Order", orderSchema);
