import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const resData = props.resData;
  return (
    <div className="flex flex-col p-4 w-[250px] border-2 border-slate-200 rounded-md hover:bg-slate-400">
      <div className="flex justify-stretch">
        <img
          src={CDN_URL + resData.cloudinaryImageId}
          alt="restaurant-img"
          className="rounded-md max-h-[150px] object-cover"
        />
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

export const withTopRatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <h4 className="bg-slate-600 absolute rounded-md text-white px-2 py-1">Top Rated</h4>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
