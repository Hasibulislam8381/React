import Header from "./Header";
import Search from "./Search";
import BookList from "./BookList";
import { useState } from "react";
export default function Boimela() {
  const BOOKS = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      featured: false,
    },
    { id: 2, title: "1984", author: "George Orwell", featured: false },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      featured: false,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      featured: false,
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      featured: false,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="mx-auto p-4">
      <Header />
      <Search searchTerm={searchTerm} onSearchBook={setSearchTerm} />
      <BookList searchTerm={searchTerm} books={BOOKS} />
    </div>
  );
}
