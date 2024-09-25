import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, updateCartQuantity } from "../features/cartSlice";
import OrderSummary from "../components/OrderSummary";

const URL = import.meta.env.VITE_BACKEND_URL;
function AddtoBag() {
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteItem = (itemId) => {
    dispatch(deleteCartItem(itemId));
  };

  const handleQuantityChange = (itemId, quantity) => {
    if (quantity > 0) {
      dispatch(updateCartQuantity({ itemId, quantity }));
    }
  };

  const handleCheckout = async () => {
    if (user) {
      try {
        const response = await axios.post(`${URL}/payment`, {
          items: cart,
          email: user.email,
          userId: user._id,
        });
        if (response.data.url) {
          window.location.assign(response.data.url); // Redirect to Stripe payment
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="container mx-auto p-4">
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center font-bold mt-12">
          <span>Your Bag Is Empty</span>
          Sign in to see items you have already added.
        </div>
      ) : (
        <div className="flex justify-between gap-3">
          <div className="w-1/2 p-4 bg-white shadow-md rounded-lg">
            <OrderSummary />
            <button
              className="w-full py-2 px-4 bg-zinc-950 text-white rounded-md shadow-sm"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>

          <div className="flex flex-col gap-3 w-1/2">
            {cart.map((item) => (
              <div
                key={item.book._id}
                className="bg-white shadow-md rounded-lg overflow-hidden flex items-center p-2"
              >
                <img
                  src={item.book.cover_image}
                  alt={item.book.title}
                  className="w-20 h-28 pl-3 object-cover"
                />

                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.book.title}
                  </h3>
                  <p className="text-gray-700 ">
                    <span className="font-semibold">Author:</span>{" "}
                    {item.book.author}
                  </p>

                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Quantity:</span>{" "}
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(
                          item.book._id,
                          parseInt(e.target.value)
                        )
                      }
                      className="border p-1 w-10 mr-2"
                    />
                    <button
                      className="underline"
                      onClick={() => handleDeleteItem(item.book._id)}
                    >
                      {" "}
                      Remove
                    </button>
                  </p>
                </div>
                <p className="text-gray-900 text-lg font-semibold m-2">
                  ${(item.book.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddtoBag;
