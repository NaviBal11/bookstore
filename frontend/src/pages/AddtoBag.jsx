import React from "react";
import { useSelector } from "react-redux";

function AddtoBag() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto p-4">
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center font-bold mt-12">
          <span>Your Bag Is Empty</span>
          Sign in to see items you have already added.
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex"
            >
              <img
                src={item.book.cover_image}
                alt={item.book.title}
                className="w-1/3 h-auto object-cover"
              />
              <div className="p-4 w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {item.book.title}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Author:</span>{" "}
                    {item.book.author}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Quantity:</span>{" "}
                    {item.quantity}
                  </p>
                </div>
                <p className="text-gray-700 text-lg font-semibold">
                  Price: ${item.book.price.toFixed(2)}
                </p>
                <p className="text-gray-900 text-lg font-semibold mt-2">
                  Total: ${(item.book.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddtoBag;
