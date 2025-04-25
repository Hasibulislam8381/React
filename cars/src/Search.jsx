import CheckBox from "./CheckBox";
function Search({ searchTerm, onSearchCar, showPremiumOnly, onTogglePremium }) {
  return (
    <div className="pt-3 pb-2 flex">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchCar(event.target.value)}
        placeholder="Search for cars.."
        className="border w-2xs rounded-md p-1 "
      />
      <CheckBox checked={showPremiumOnly} onChange={onTogglePremium} />
    </div>
  );
}

export default Search;
