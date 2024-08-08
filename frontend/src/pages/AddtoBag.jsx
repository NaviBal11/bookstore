import React from "react";
import { useState } from "react";

function AddtoBag() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      {cart.length === 0 && (
        <div className="flex flex-col justify-center items-center font-bold mt-12">
          <span>Your Bag Is Empty </span>
          Sign in to see items you have already added.
        </div>
      )}
    </div>
  );
}

export default AddtoBag;
