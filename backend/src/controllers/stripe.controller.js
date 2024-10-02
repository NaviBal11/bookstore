import { ApiError } from "../utils/ApiError.js";
import { stripe_secret_key } from "../config.js";
import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";
import Stripe from "stripe";

const stripe = new Stripe(stripe_secret_key);
const payment = async (req, res) => {
  const { items, email, userId } = req.body;

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

    // Calculate total amount
    const totalAmount =
      items.reduce((acc, item) => acc + item.book.price * item.quantity, 0) *
      1.1; // 10% tax included

    // Prepare order data
    const orderData = {
      items: items.map((item) => ({
        bookId: item.book._id, // Ensure bookId is provided
        quantity: item.quantity,
      })),
      totalAmount: Math.round(totalAmount * 100) / 100, // Ensure to save amount in the correct format
      status: "pending",
    };

    // Add userId if available
    if (userId) {
      orderData.userId = userId;

      // Update user's orderHistory if userId is present
      await User.findByIdAndUpdate(userId, {
        $push: { orderHistory: orderData },
      });
    }

    // Save order details to MongoDB
    const order = new Order(orderData);
    await order.save();
    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe session creation failed:", error);
    res.status(500).json(new ApiError(500, "Payment processing failed"));
  }
};

export { payment };
