import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "https://bookstore-frontend-qo9k.onrender.com",
    credentials: true,
  })
);

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
