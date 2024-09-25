import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GiSpellBook } from "react-icons/gi";
import { BsBagHeart } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_BACKEND_URL;

function Header() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkUserSession = async () => {
    try {
      const response = await axios.get(`${URL}/users/current-user`, {
        withCredentials: true,
      });
      if (response.data.data) {
        dispatch(login(response.data.data)); // Update Redux state with user data
      } else {
        dispatch(logout()); // Ensure state is cleared if user is not logged in
      }
    } catch (error) {
      console.error("Failed to fetch user session:", error);
      dispatch(logout());
    }
  };

  useEffect(() => {
    if (!user) {
      checkUserSession();
    } // Restore user session on component mount
  }, [dispatch, user]);

  const handleLogout = async () => {
    try {
      await axios.post(`${URL}/users/logout`, {}, { withCredentials: true });
      dispatch(logout());
      navigate("/books");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserAccount = () => {
    if (user) {
      navigate("/accountdetails");
    }
  };

  return (
    <header className="bg-gray-200 flex justify-between items-center px-7 py-4 font-sans text-base tracking-tight antialiased shadow-md">
      <div className="flex items-center space-x-2" title="Go to Home">
        <Link to="/" className="flex items-center space-x-2">
          <GiSpellBook className="text-lime-600" size={30} />
          <span className="font-semibold text-xl">BOOKHAVEN</span>
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <Link
          to="/books"
          className="icon-link transform hover:scale-110 transition-transform duration-300 text-gray-700"
        >
          All Books
        </Link>
        <span className="text-gray-400">|</span>
        {user ? (
          <>
            <button
              onClick={handleUserAccount}
              className="transform hover:scale-110 transition-transform duration-300 text-gray-700"
            >
              Hello, {user.firstName}
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={handleLogout}
              className="transform hover:scale-110 transition-transform duration-300 text-gray-700"
            >
              Logout
            </button>
            <span className="text-gray-400">|</span>
            <Link
              to="/cart"
              className="icon-link transform hover:scale-110 transition-transform duration-300"
            >
              <BsBagHeart size={20} />
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/register"
              className="icon-link transform hover:scale-110 transition-transform duration-300 text-gray-700"
            >
              Register
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              to="/login"
              className="icon-link transform hover:scale-110 transition-transform duration-300 text-gray-700"
            >
              LogIn
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              to="/cart"
              className="icon-link transform hover:scale-110 transition-transform duration-300"
            >
              <BsBagHeart size={20} />
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
