import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";
function BookRow(book) {
  return (
    <div>
      <BookDetails />
      <FeatureBook />
    </div>
  );
}

export default BookRow;
