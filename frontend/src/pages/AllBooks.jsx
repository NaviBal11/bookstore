import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const URL = import.meta.env.VITE_BACKEND_URL;

function AllBooks() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`${URL}/api/bookstore/books`)
      .then((response) => {
        const data = response.data.data;

        setBooks(data);
      })
      .catch((error) => {
        console.log(`Error :${error}`);
      });
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by book title or author"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border-gray-300 rounded-md flex flex-row"
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((item) => (
            <Link key={item._id} to={`/${item._id}`}>
              <Card item={item} />
            </Link>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
}

export default AllBooks;
