import { User } from "../models/user.model.js";

const getOrderHistory = async (req, res) => {
  const userId = req.user?._id;

  try {
    const user = await User.findById(userId).populate({
      path: "orderHistory",
      populate: {
        path: "items.bookId",
        select: "title author", // Fields to select from the Book model
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ data: user.orderHistory });
  } catch (error) {
    console.error("Error fetching order history:", error);
    res.status(500).json({ error: "Failed to fetch order history" });
  }
};

export { getOrderHistory };
