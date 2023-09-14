import { useState } from "react";
import restaurantsList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantsList);
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurants(restaurants?.filter((res) => res?.info?.avgRating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurants(restaurantsList);
          }}
        >
          Clear
        </button>
      </div>
      <div className="res-container">
        {restaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
