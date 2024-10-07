import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";

const URL = import.meta.env.VITE_BACKEND_URL;

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.auth.user);
  console.log("orders are set", orders);
  useEffect(() => {
    if (user) {
      axios
        .get(`${URL}/orderHistory`, {
          withCredentials: true,
        })
        .then((response) => {
          setOrders(response.data.data);
          console.log(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching order history:", error);
        });
    }
  }, [user]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Order History</h2>
        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders found</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-gray-100 shadow-md rounded-lg p-4"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">
                    Order Date:{" "}
                    {moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                  </h3>
                  <p className="text-gray-700 font-semibold">
                    Total: ${order.totalAmount.toFixed(2)}
                  </p>
                </div>
                <p
                  className={`text-sm font-semibold ${
                    order.status === "pending"
                      ? "text-yellow-600"
                      : order.status === "completed"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  Status:{" "}
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold">Items:</h4>
                  <ul className="list-disc list-inside ml-4">
                    {order.items.map((item) => (
                      <li key={item.bookId._id}>
                        {item.bookId.title} by {item.bookId.author} - Quantity:{" "}
                        {item.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderHistory;
