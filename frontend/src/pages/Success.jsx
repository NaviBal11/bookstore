import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice.js";

function Success() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Clear the cart from Redux state
    dispatch(clearCart());
  }, [dispatch]);
  return <div>Thank You for your Purchase!!</div>;
}

export default Success;
