import Header from "./Header";
import Search from "./Search";
import BookList from "./BookList";
import { useState } from "react";
export default function Boimela() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="mx-auto p-4">
      <Header />
      <Search searchTerm={searchTerm} />
      <BookList searchTerm={searchTerm} />
    </div>
  );
}
