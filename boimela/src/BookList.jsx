import BookRow from "./BookRow";
import PropTypes from "prop-types";
function BookList({ searchTerm, books }) {
  const rows = [];
  books.forEach((book) => {
    if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    rows.push(<BookRow key={book.id} book={book} />);
  });

  return <div className="space-y-4">{rows}</div>;
}

BookList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};
export default BookList;
