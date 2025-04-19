import Header from "./Header";
import Search from "./Search";
import CarList from "./CarList";

function Cars() {
  return (
    <div className="mx-auto p-4">
      <Header />
      <Search />
      <CarList />
    </div>
  );
}

export default Cars;
