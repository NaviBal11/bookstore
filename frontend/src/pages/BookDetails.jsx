import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL;

function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState({});

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

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-96 object-cover"
          src={book.cover_image}
          alt={book.title}
        />
        <div className="p-4">
          <h3 className="text-2xl font-semibold">{book.title}</h3>
          <p>{book.description}</p>
          <button className="bg-slate-500">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
