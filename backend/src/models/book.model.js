import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publication_year: {
    type: Number,
    required: true,
  },
  genre: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  cover_image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const Book = mongoose.model("Book", bookSchema);
