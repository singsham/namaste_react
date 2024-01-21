import RestaurantCard, { withTopRatedLabel } from "./RestaurantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onLineStatus = useOnlineStatus();
  const TopRatedRestaurentCard = withTopRatedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const result = await data.json();
    const tempResList = result.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setResList(tempResList);
    setFilteredResList(tempResList);
    console.log("result", tempResList);
  };

  if (!onLineStatus) {
    return <h4>Ops! You are offline currently..</h4>;
  }

  return resList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex gap-4 m-4">
        <input
          className="border-solid border-2 p-2"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className=" rounded-md border-solid border-2 border-gray-500 py-2 px-4"
          onClick={() => {
            const tempResList = resList.filter((el) => el.info.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log("first", tempResList);
            setFilteredResList(tempResList);
          }}
        >
          Search
        </button>
        <button
          className="rounded-md border-solid border-2 border-gray-500 py-2 px-4"
          onClick={() => {
            setFilteredResList(resList);
          }}
        >
          All Restaurant
        </button>
        <button
          className="rounded-md border-solid border-2 border-gray-500 py-2 px-4"
          onClick={() => {
            const tempResList = resList.filter((res) => res.info.avgRating > 4.2);
            setFilteredResList(tempResList);
          }}
        >
          Filter Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap gap-4 p-4 items-stretch">
        {filteredResList.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id} className="flex">
            {res.info.avgRating > 4.2 ? (
              <TopRatedRestaurentCard resData={res.info} />
            ) : (
              <RestaurantCard resData={res.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
