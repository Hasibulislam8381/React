import CheckBox from "./CheckBox";
function Search() {
  return (
    <div className="pt-3 pb-2 flex">
      <input
        type="text"
        placeholder="Search for cars.."
        className="border w-2xs rounded-md p-1 "
      />{" "}
      <CheckBox />
    </div>
  );
}

export default Search;
