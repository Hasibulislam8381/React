import Header from "./Header";
import Search from "./Search";
import BookList from "./BookList";
export default function Boimela() {
  return (
    <div className="mx-auto p-4">
      <Header />
      <Search />
      <BookList />
    </div>
  );
}
