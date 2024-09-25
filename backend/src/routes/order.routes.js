import { Router } from "express";
import { getOrderHistory } from "../controllers/order.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").get(verifyJWT, getOrderHistory);

export default router;
