import PropTypes from "prop-types";
function BookDetails({ title, author }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
}
BookDetails.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
};
export default BookDetails;
