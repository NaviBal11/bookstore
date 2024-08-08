import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

//router import
import bookRouter from "./routes/book.routes.js";
import userRouter from "./routes/user.routes.js";
//router declaration
app.use("/api/bookstore", bookRouter);
app.use("/api/users", userRouter);
export { app };
