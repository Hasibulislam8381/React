import PropTypes from "prop-types";
function Search({ searchTerm }) {
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search Books.."
        className="mb-4 border rounded-md p-1 w-full"
      />
    </form>
  );
}
Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
export default Search;
