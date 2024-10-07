import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_BACKEND_URL;

function Register() {
  const initialFormData = {
    fullName: "",
    email: "",
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is Required"),

    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email format"),
    username: Yup.string().required("Username is Required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
      )
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});

      const response = await axios.post(`${URL}/users/register`, formData, {
        withCredentials: true,
      });
      setFormData(initialFormData);
      setSuccess("Registration successful! Redirecting to shop...");

      // Redirect to shopping page after a delay
      setTimeout(() => {
        navigate("/books"); // Replace with your shopping page route
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      const newErrors = {};

      if (error.inner) {
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
      } else {
        newErrors.general =
          error.response?.data?.message || "Registration failed";
      }

      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-96 space-y-4"
        >
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          {success && (
            <div className="bg-green-100 text-green-700 p-2 rounded">
              {success}
            </div>
          )}
          {errors.general && (
            <div className="bg-red-100 text-red-700 p-2 rounded">
              {errors.general}
            </div>
          )}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.fullName && <div className="error">{errors.fullName}</div>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}
export default Register;
