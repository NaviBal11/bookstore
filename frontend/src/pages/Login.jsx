import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/authSlice";

const URL = import.meta.env.VITE_BACKEND_URL;

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const cart = useSelector((state) => state.cart);

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string().required("Password is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      const response = await axios.post(`${URL}/users/login`, formData, {
        withCredentials: true,
      });
      const user = response.data.data.user;
      dispatch(login(user));
      setFormData({ email: "", password: "" });
      if (location.state?.fromCheckout && cart && cart.length > 0) {
        try {
          const paymnetResponse = await axios.post(`${URL}/payment`, {
            items: cart,
            email: formData.email,
          });

          if (paymnetResponse.data.url) {
            window.location.assign(paymnetResponse.data.url); // Forwarding user to Stripe
          }
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      } else {
        navigate("/books");
      }
    } catch (error) {
      if (error.inner) {
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      } else {
        console.log("Validation or submission error:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
