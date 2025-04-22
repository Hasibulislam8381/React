import PropTypes from "prop-types";
function Search({ searchTerm, onSearchBook }) {
  return (
    // State practice
    
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchBook(event.target.value)}
        placeholder="Search Books.."
        className="mb-4 border rounded-md p-1 w-full"
      />
    </form>
  );
}
Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchBook: PropTypes.func.isRequired,
};
export default Search;
