import { useLoaderData } from "react-router-dom";
import CoffeesCard from "../components/CoffeesCard";
import { useState } from "react";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log(coffees);
  return (
    <div>
      <h3 className="text-4xl text-center font-bold">
        {coffees.length} Coffees Are Available
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-x-7 gap-y-5">
        {coffees.map((coffee, idx) => (
          <CoffeesCard
            key={idx}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeesCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
