import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AllBooks from "./pages/AllBooks";
import BookDetails from "./pages/BookDetails";
import AddtoBag from "./pages/AddtoBag";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="books" element={<AllBooks />} />
      <Route path="/:bookId" element={<BookDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/addtobag" element={<AddtoBag />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
