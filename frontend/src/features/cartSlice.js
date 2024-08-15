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
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
