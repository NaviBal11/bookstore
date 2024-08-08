import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  items: [
    {
      bookId: {
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
});

export const Cart = mongoose.model("Cart", cartSchema);
