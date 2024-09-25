import { Order } from "../models/order.model.js";

const getOrderHistory = async (req, res) => {
  const userId = req.user?._id;

  try {
    const orders = await Order.find({ userId }).populate(
      "items.bookId",
      "title author"
    );
    res.status(200).json({ data: orders });
  } catch (error) {
    console.error("Error fetching order history:", error);
    res.status(500).json({ error: "Failed to fetch order history" });
  }
};

export { getOrderHistory };
