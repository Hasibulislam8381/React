import BookRow from "./BookRow";
import PropTypes from "prop-types";
function BookList({ searchTerm, books, onFeatureBook }) {
  const rows = [];
  books.forEach((book) => {
    if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    rows.push(
      <BookRow onFeatureBook={onFeatureBook} key={book.id} book={book} />
    );
  });

  return <div className="space-y-4">{rows}</div>;
}

BookList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onFeatureBook: PropTypes.func.isRequired,
};
export default BookList;
