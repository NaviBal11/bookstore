import { Link } from "react-router-dom";
import axios from "axios";
import OrderSummary from "../components/OrderSummary";
import { useSelector } from "react-redux";
const URL = import.meta.env.VITE_BACKEND_URL;
function Checkout() {
  const cart = useSelector((state) => state.cart);

  const checkoutPayment = async () => {
    try {
      const response = await axios.post(`${URL}/payment`, { items: cart });

      if (response.data.url) {
        window.location.assign(response.data.url); // Forwarding user to Stripe
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
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

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              onClick={checkoutPayment}
            >
              Continue as Guest
            </button>
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
