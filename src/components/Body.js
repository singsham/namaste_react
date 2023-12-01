import ResturentCard from "./ResturentCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constant";

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
          All Resturent
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const tempResList = resList.filter((res) => res.info.avgRating > 4.2);
            setFilteredResList(tempResList);
          }}
        >
          Filter Top Rated Resturent
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((res) => (
          <ResturentCard key={res.info.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
