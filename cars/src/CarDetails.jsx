import CarList from "./CarList";
function CarDetails({ car: { title, brand, year, price } }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="flex">
        <h2 className="font-bold">Brand:</h2>
        {brand}
      </div>
      <div className="flex">
        <h2 className="font-bold">Year:</h2>
        {year}
      </div>
      <div className="flex">
        <h2 className="font-bold">Price:</h2>
        {price}
      </div>
    </div>
  );
}

export default CarDetails;
