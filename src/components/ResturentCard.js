import { CDN_URL } from "../utils/constant";

const ResturentCard = (props) => {
  const resData = props.resData;
  return (
    <div className="resturent-card">
      <div className="resturent-card-img">
        <img src={CDN_URL + resData.cloudinaryImageId} alt="resturent-img" />
      </div>
      <div className="resturent-card-info">
        <h3>{resData.name}</h3>
        <p>{resData.locality}</p>

        <p>{resData.cuisines.join(", ")}</p>
        <p>{resData.costForTwo}</p>
        <p>{resData.avgRating} Rating</p>
      </div>
    </div>
  );
};

export default ResturentCard;
