import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer, // Ensure each slice is correctly assigned
  },
});
