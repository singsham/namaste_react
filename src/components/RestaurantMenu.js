import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Category from "./Category";

const RestaurantMenu = () => {
  const routParams = useParams();
  // console.log("first", routParams);

  const resMenu = useRestaurantMenu(routParams.id);

  if (resMenu?.length == 0) {
    return <Shimmer />;
  }

  const { itemCards } = resMenu[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  const menuCategories = resMenu[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
    (el) => el.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("menuCategories", menuCategories);

  return (
    <div className="mt-10 flex flex-col items-center">
      <h1>{resMenu[0].card.card.info.name}</h1>
      <div className="restaurant-card-img">
        <img src={CDN_URL + resMenu[0].card.card.info.cloudinaryImageId} alt="restaurant-img" />
      </div>
      {menuCategories.map((el) => (
        <Category key={el?.card?.card.title} category={el?.card?.card} />
      ))}
    </div>
  );
};
export default RestaurantMenu;
