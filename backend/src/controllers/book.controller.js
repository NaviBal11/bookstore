import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Book } from "../models/book.model.js";
import books from "../data/data.js";
//Getting all books
const getAllBooks = asyncHandler(async (req, res) => {
  const bookCount = await Book.countDocuments();

  if (bookCount === 0) {
    // Insert books from the data file into the database
    await Book.insertMany(books);
  }

  // Fetch all books from the database
  const allBooks = await Book.find();

  return res
    .status(201)

    .json(new ApiResponse(200, allBooks, "Books Added to the database"));
});

//getting a Book by ID
const getBookById = asyncHandler(async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.findById(bookId);
  return res
    .status(201)

    .json(new ApiResponse(200, book, "Sending book with given ID"));
});

export { getAllBooks, getBookById };
