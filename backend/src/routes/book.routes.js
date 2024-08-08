import { Router } from "express";
import { getAllBooks, getBookById } from "../controllers/book.controller.js";

const router = Router();
router.route("/books").get(getAllBooks);
router.route("/:bookId").get(getBookById);

export default router;
