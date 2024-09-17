import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.book._id === action.payload.book._id
      );

      if (itemIndex >= 0) {
        // If the item already exists in the cart, update its quantity
        state[itemIndex].quantity += action.payload.quantity;
      } else {
        // Otherwise, add the new item to the cart
        state.push(action.payload);
        Cookies.set("cart", JSON.stringify(state), { expires: 7 });
      }
    },
    deleteCartItem: (state, action) => {
      const itemId = action.payload;

      const updatedState = state.filter((item) => item.book._id !== itemId);
      Cookies.set("cart", JSON.stringify(updatedState), { expires: 7 });
      return updatedState;
    },

    updateCartQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;

      const itemIndex = state.findIndex((item) => item.book._id === itemId);
      if (itemIndex >= 0) {
        state[itemIndex].quantity = quantity;
        // Update the cookie with the updated state
        Cookies.set("cart", JSON.stringify(state), { expires: 7 });
      }
    },
  },
});

export const { addToCart, deleteCartItem, updateCartQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
