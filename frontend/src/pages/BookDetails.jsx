import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const URL = import.meta.env.VITE_BACKEND_URL;

function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${URL}/bookstore/${bookId}`)
      .then((response) => {
        setBook(response.data.data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, [bookId]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToBag = () => {
    const cartItem = {
      book: book,
      quantity: Number(quantity),
    };

    dispatch(addToCart(cartItem));
    setShowAlert(true); // Show the alert when item is added to cart

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div className="flex justify-around m-5">
      {showAlert && (
        <div className="absolute top-12 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          Item added to cart!
        </div>
      )}
      <div className="bg-blue-50 shadow-md ml-7 p-4 flex justify-center items-center w-80 h-full ">
        <img
          className="max-w-72 max-h-96 object-contain"
          src={book.cover_image}
          alt={book.title}
        />
      </div>
      <div className="p-4">
        <h3 className="text-4xl font-bold mt-6">{book.title}</h3>
        <p className="text-lg mt-2 font-semibold">{book.author}</p>
        <p>{book.description}</p>
        <p className="text-lg">${book.price}</p>
        <div className="mt-4 flex items-center space-x-4">
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 p-2 border rounded-md text-center"
            min="1"
          />
          <button
            className="bg-neutral-800 text-white py-2 px-4 rounded-md w-56"
            onClick={handleAddToBag}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
