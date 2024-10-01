import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OrderSummary from "../components/OrderSummary";
import { useSelector } from "react-redux";
const URL = import.meta.env.VITE_BACKEND_URL;
function Checkout() {
  const [email, setEmail] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const cart = useSelector((state) => state.cart);

  const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const checkoutPaymentasGuest = async () => {
    try {
      const id = generateRandomId();
      const response = await axios.post(`${URL}/payment`, {
        items: cart,
        email,
        id,
      });
      if (response.data.url) {
        window.location.assign(response.data.url); // Forwarding user to Stripe
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGuestCheckoutClick = () => {
    setShowEmailForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomId = generateRandomId();
    checkoutPaymentasGuest(randomId);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between gap-2">
        <div className="bg-white shadow-lg rounded-lg w-1/2 p-4">
          <div className="w-full m-2 flex flex-col gap-2">
            <h1>Sign In</h1>
            <button className="w-full bg-sky-700 shadow-lg rounded-lg text-white  ">
              <Link to={{ pathname: "/login", state: { fromCheckout: true } }}>
                Log In
              </Link>
            </button>
            <button className="w-full bg-sky-700 shadow-lg rounded-lg text-white ">
              {" "}
              <Link to="/register">Create Account</Link>
            </button>
          </div>
          <div className="max-w-lg mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Guest Checkout
            </h2>
            {!showEmailForm ? (
              <button
                type="button"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                onClick={handleGuestCheckoutClick}
              >
                Continue as Guest
              </button>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg w-1/2 p-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
