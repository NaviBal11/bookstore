import { ApiError } from "../utils/ApiError.js";
import { stripe_secret_key } from "../config.js";
import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";
import Stripe from "stripe";
import mongoose from "mongoose";

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
      success_url: "https://bookstore-frontend-qo9k.onrender.com/success",
      cancel_url: "https://bookstore-frontend-qo9k.onrender.com/cart",
    });

    // Calculate total amount
    const totalAmount =
      items.reduce((acc, item) => acc + item.book.price * item.quantity, 0) *
      1.1; // 10% tax included

    // Prepare order data
    const orderData = {
      items: items.map((item) => ({
        bookId: new mongoose.Types.ObjectId(item.book._id), // Ensure bookId is provided
        quantity: item.quantity,
      })),
      totalAmount: Math.round(totalAmount * 100) / 100, // Ensure to save amount in the correct format
      status: "pending",
    };
    // Save order details to MongoDB
    const order = new Order(orderData);
    await order.save();

    // Add userId if available and update user's orderHistory
    if (userId) {
      await User.findByIdAndUpdate(userId, {
        $push: { orderHistory: order._id }, // Push the order ID to the user's order history
      });
    }

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe session creation failed:", error);
    res.status(500).json(new ApiError(500, "Payment processing failed"));
  }
};

export { payment };
