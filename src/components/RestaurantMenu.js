import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  [resMenu, setResMenu] = useState([]);
  const routParams = useParams();
  console.log("first", routParams);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   console.log("inside setinterval use effect");
    // }, 1000);

    // return () => {
    //   clearInterval(interval);
    //   console.log("get called similar to will unmount");
    // };
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const res = await fetch(MENU_URL + routParams.id);
    result = await res.json();
    console.log("result", result);
    setResMenu(result?.data?.cards);
  };

  if (resMenu.length == 0) {
    return <Shimmer />;
  }

  const { itemCards } = resMenu[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  // console.log("menuItems", itemCards);

  return (
    <div className="menu-container">
      <h1>{resMenu[0].card.card.info.name}</h1>
      <div className="restaurant-card-img">
        <img src={CDN_URL + resMenu[0].card.card.info.cloudinaryImageId} alt="restaurant-img" />
      </div>
      {itemCards.map((el) => (
        <p key={el.card.info.id}>
          {el.card.info.name} : Rs.{el.card.info.price / 100}
        </p>
      ))}
    </div>
  );
};
export default RestaurantMenu;
