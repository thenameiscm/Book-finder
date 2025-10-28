import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search for books..."
        className="border p-2 w-80 rounded-l-lg focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}
