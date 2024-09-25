import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";

const URL = import.meta.env.VITE_BACKEND_URL;

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      axios
        .get(`${URL}/orderHistory`, {
          withCredentials: true,
        })
        .then((response) => {
          setOrders(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching order history:", error);
        });
    }
  }, [user]);

  return (
    <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8">Order History</h2>
        {orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <h3 className="text-xl font-semibold mb-2">
                  Order Date:{" "}
                  {moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </h3>
                <p className="text-gray-700">
                  Total Amount: ${order.totalAmount.toFixed(2)}
                </p>
                <p className="text-gray-700">Status: {order.status}</p>
                <div className="mt-4">
                  <h4 className="font-semibold">Items:</h4>
                  <ul className="list-disc list-inside">
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
