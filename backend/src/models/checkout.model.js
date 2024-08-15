import mongoose, { Schema } from "mongoose";

const checkoutSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  cart: {
    type: Schema.Types.ObjectId,
    ref: "Cart",
    required: true,
  },
});

export const Checkout = mongoose.model("Checkout", cartSchema);
