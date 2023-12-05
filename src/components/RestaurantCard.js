import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const resData = props.resData;
  return (
    <div className="restaurant-card">
      <div className="restaurant-card-img">
        <img src={CDN_URL + resData.cloudinaryImageId} alt="restaurant-img" />
      </div>
      <div className="restaurant-card-info">
        <h3>{resData.name}</h3>
        <p>{resData.locality}</p>

        <p>{resData.cuisines.join(", ")}</p>
        <p>{resData.costForTwo}</p>
        <p>{resData.avgRating} Rating</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
