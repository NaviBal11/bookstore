import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
const URL = import.meta.env.VITE_BACKEND_URL;

function AccountDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: user.fullName,
    email: user.email,
    username: user.username,
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.patch(
        `${URL}/users/update-account`,
        formData,
        {
          withCredentials: true,
        }
      );
      dispatch(login(response.data.data));
      console.log("Updated user:", response.data);
    } catch (error) {
      console.error("Failed to update the info", error);
    }
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">Account Details</h2>
        <div className="space-y-6">
          <div className="flex items-center">
            <span className="font-semibold text-gray-700 w-32">Name:</span>
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 flex-1"
              />
            ) : (
              <span className="text-gray-900">{user.fullName}</span>
            )}
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-700 w-32">Email:</span>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 flex-1"
              />
            ) : (
              <span className="text-gray-900">{user.email}</span>
            )}
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-700 w-32">Username:</span>
            {isEditing ? (
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 flex-1"
              />
            ) : (
              <span className="text-gray-900">{user.username}</span>
            )}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={isEditing ? handleSave : handleEditClick}
              className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600"
            >
              {isEditing ? "Update" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
