import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();

app.use(
  cors({
    origin: "https://bookstore-frontend-57tw.onrender.com",
    credentials: true,
  })
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "frontend/build")));

// Catch all other routes and return the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

//router import
import bookRouter from "./routes/book.routes.js";
import userRouter from "./routes/user.routes.js";
import stripeRouter from "./routes/stripe.routes.js";
import orderRouter from "./routes/order.routes.js";

//router declaration
app.use("/api/bookstore", bookRouter);
app.use("/api/users", userRouter);
app.use("/api/payment", stripeRouter);
app.use("/api/orderHistory", orderRouter);

export { app };
