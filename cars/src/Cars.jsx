import Header from "./Header";
import Search from "./Search";
import CarList from "./CarList";
import { useState } from "react";

const CARS = [
  {
    id: 1,
    title: "Luxury Sedan",
    brand: "Mercedes",
    year: 2023,
    price: 80000,
    isPremium: true,
  },
  {
    id: 2,
    title: "Family SUV",
    brand: "Toyota",
    year: 2022,
    price: 45000,
    isPremium: false,
  },
  {
    id: 3,
    title: "Sports Car",
    brand: "Porsche",
    year: 2023,
    price: 120000,
    isPremium: true,
  },
  {
    id: 4,
    title: "Electric Hatchback",
    brand: "Nissan",
    year: 2022,
    price: 35000,
    isPremium: false,
  },
  {
    id: 5,
    title: "Luxury SUV",
    brand: "BMW",
    year: 2023,
    price: 90000,
    isPremium: true,
  },
];

function Cars() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);

  // Filter the list
  const filteredCars = CARS.filter((car) => {
    const matchesPremium = showPremiumOnly ? car.isPremium : true;
    return matchesPremium;
  });

  return (
    <div className="mx-auto p-4">
      <Header />
      <Search
        searchTerm={searchTerm}
        onSearchCar={setSearchTerm}
        showPremiumOnly={showPremiumOnly}
        onTogglePremium={() => setShowPremiumOnly((prev) => !prev)}
      />
      <CarList searchTerm={searchTerm} cars={filteredCars} />
    </div>
  );
}

export default Cars;
