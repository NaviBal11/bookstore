import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

function OrderSummary() {
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const taxRate = 0.1; // 10% tax rate
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    // Calculate subtotal whenever cart changes
    const newSubtotal = cart.reduce(
      (acc, item) => acc + item.book.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
    const newTax = newSubtotal * taxRate;
    setTax(newTax);
    const newTotal = newSubtotal + newTax;
    setTotal(newTotal);
  }, [cart]);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
      <div className="flex justify-between mb-2">
        <p>Subtotal:</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>Taxes (10%):</p>
        <p>${tax.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mb-2">
        <p>Shipping:</p>
        <p>FREE</p>
      </div>
      <div className="flex justify-between text-lg font-bold mb-4">
        <p>Total:</p>
        <p>${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default OrderSummary;
