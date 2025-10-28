export default function BookCard({ book }) {
  const coverId = book.cover_i;
  const imageUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="bg-white shadow-md p-4 rounded-lg w-56 hover:shadow-xl transition">
      <img src={imageUrl} alt={book.title} className="w-full h-64 object-cover rounded" />
      <h3 className="font-bold mt-2 text-gray-800">{book.title}</h3>
      <p className="text-sm text-gray-600">{book.author_name?.[0] || "Unknown Author"}</p>
      <p className="text-xs text-gray-500">
        First published: {book.first_publish_year || "N/A"}
      </p>
      <a
        href={`https://openlibrary.org${book.key}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-sm mt-2 inline-block"
      >
        View on Open Library →
      </a>
    </div>
  );
}
