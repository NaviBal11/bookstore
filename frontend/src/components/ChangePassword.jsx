import axios from "axios";
import { useState } from "react";
import * as Yup from "yup";
const URL = import.meta.env.VITE_BACKEND_URL;

function ChangePassword() {
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required("Old Password is required"),
    newPassword: Yup.string()
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

  const handlePasswordChangeClick = () => {
    setIsChangingPassword(!isChangingPassword);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancelChanges = () => {
    setPasswordData({ oldPassword: "", newPassword: "" });
    setIsChangingPassword(false);
    setErrors({});
  };

  const handlePasswordSubmit = async () => {
    try {
      await validationSchema.validate(passwordData, { abortEarly: false });
      setErrors({});
      await axios.post(`${URL}/users/change-password`, passwordData, {
        withCredentials: true,
      });
      setPasswordData({ oldPassword: "", newPassword: "" });
      console.log("Password changed successfully");
      setIsChangingPassword(false);
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
  };

  return (
    <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8">Change Password</h2>
      {isChangingPassword ? (
        <div className="space-y-6">
          <div className="flex items-center">
            <span className="font-semibold text-gray-700 w-32">
              Old Password:
            </span>
            <input
              type="password"
              name="oldPassword"
              value={passwordData.oldPassword}
              onChange={handlePasswordChange}
              className="border border-gray-300 rounded-md p-2 flex-1"
            />
            {errors.oldPassword && (
              <div className="error">{errors.oldPassword}</div>
            )}
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-gray-700 w-32">
              New Password:
            </span>
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="border border-gray-300 rounded-md p-2 flex-1"
            />
            {errors.newPassword && (
              <div className="error">{errors.newPassword}</div>
            )}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={handlePasswordSubmit}
              className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600"
            >
              Update Password
            </button>
            <button
              onClick={handleCancelChanges}
              className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600"
            >
              Cancel Changes
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePasswordChangeClick}
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600"
          >
            Change Password
          </button>
        </div>
      )}
    </div>
  );
}

export default ChangePassword;
