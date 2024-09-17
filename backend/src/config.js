import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const stripe_secret_key = process.env.STRIPE_SECRET_KEY;
