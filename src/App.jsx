import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import BookCard from "./Components/BookCard";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async (title) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${title}`);
      const data = await res.json();
      if (data.docs.length === 0) {
        setError("No books found.");
      }
      setBooks(data.docs.slice(0, 20)); // limit to 20 results
    } catch {
      setError("Failed to fetch books.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">📚 Book Finder</h1>
      <SearchBar onSearch={fetchBooks} />
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {!loading && !error && books.map((b) => <BookCard key={b.key} book={b} />)}
      </div>
    </div>
  );
}

export default App;
