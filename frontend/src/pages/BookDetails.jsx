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
    // You can handle adding the book to the cart here
  };

  return (
    <div className="container mx-auto p-4 w-80 h-1/2">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-96 object-cover"
          src={book.cover_image}
          alt={book.title}
        />
        <div className="p-4">
          <h3 className="text-2xl font-semibold">{book.title}</h3>
          <p>{book.description}</p>
          <div className="mt-4 flex items-center space-x-4">
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 p-2 border rounded-md text-center"
              min="1"
            />
            <button
              className="bg-slate-500 text-white py-2 px-4 rounded-md"
              onClick={handleAddToBag}
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
