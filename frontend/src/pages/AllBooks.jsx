import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const URL = import.meta.env.VITE_BACKEND_URL;

function AllBooks() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/bookstore/books`)
      .then((response) => {
        const data = response.data.data;

        setBooks(data);
      })
      .catch((error) => {
        console.log(`Error :${error}`);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {books.map((item) => (
          <Link key={item._id} to={`/${item._id}`}>
            <Card item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllBooks;
