import { ApiError } from "../utils/ApiError.js";
import { stripe_secret_key } from "../config.js";
import Stripe from "stripe";

const stripe = new Stripe(stripe_secret_key);
const payment = async (req, res) => {
  const { items, email } = req.body;
  console.log(items);
  try {
    const taxRate = await stripe.taxRates.create({
      display_name: "Sales Tax",
      inclusive: false,
      percentage: 10, // 10% tax rate
      country: "CA",
      state: "ON",
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: items.map((item) => ({
        price_data: {
          currency: "cad",
          product_data: {
            name: item.book.title,
          },
          unit_amount: item.book.price * 100, // Stripe expects the amount in cents
        },
        quantity: item.quantity,
        tax_rates: [taxRate.id],
      })),
      mode: "payment",
      success_url: "http://localhost:5173/success", // Replace with your success URL
      cancel_url: "http://localhost:5173/cart", // Replace with your cancel URL
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe session creation failed:", error);
    res.status(500).json(new ApiError(500, "Payment processing failed"));
  }
};

export { payment };
