import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/authSlice";
const URL = import.meta.env.VITE_BACKEND_URL;

function UpdateUserInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
  });

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName,
        username: user.username,
      });
    }
  }, [user]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancelChanges = () => {
    setFormData({ fullName: "", username: "" });
    setIsEditing(false);
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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Account Details</h2>
      <div className="space-y-4">
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

          <span className="text-gray-900">{user.email}</span>
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

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={isEditing ? handleSave : handleEditClick}
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600"
          >
            {isEditing ? "Update" : "Edit"}
          </button>
          <button
            onClick={handleCancelChanges}
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateUserInfo;
