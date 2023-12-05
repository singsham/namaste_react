import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const result = await data.json();
    const tempResList = result.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
    setResList(tempResList);
    setFilteredResList(tempResList);
    console.log("result", tempResList);
  };

  return resList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-area">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="filter-btn"
          onClick={() => {
            const tempResList = resList.filter((el) => el.info.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log("first", tempResList);
            setFilteredResList(tempResList);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredResList(resList);
          }}
        >
          All Restaurant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const tempResList = resList.filter((res) => res.info.avgRating > 4.2);
            setFilteredResList(tempResList);
          }}
        >
          Filter Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id} className="res-card-link">
            <RestaurantCard resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
