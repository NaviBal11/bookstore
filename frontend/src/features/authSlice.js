import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      const user = action.payload;
      const name = user.fullName.split(" ")[0];
      const firstName =
        name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      state.user = { ...user, firstName };
    },
    logout: (state) => {
      state.status = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
