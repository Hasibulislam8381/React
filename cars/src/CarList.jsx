import CarDetails from "./CarDetails";
import PropTypes from "prop-types";
function CarList({ searchTerm, cars }) {
  const rows = [];
  cars.forEach((car) => {
    if (car.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    } else {
      rows.push(
        <div key={car.id} className="shadow-md p-4 rounded bg-white">
          <CarDetails car={car} />
        </div>
      );
    }
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {rows}
    </div>
  );
}

CarList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired,
};
export default CarList;
