import React from "react";
import { CDN_URL } from "../utils/constant";

const Category = ({ category }) => {
  console.log("menu", category);
  return (
    <div className="m-2 p-2 w-1/2">
      <h3>{category?.title}</h3>
      {category?.itemCards.map((el) => (
        <div>
          <div>
            <p>{el.card.info.name}</p>
            <p>{el.card.info.price}</p>
          </div>
          <div>
            <img src={CDN_URL + "/" + el.card.info.imageId} alt={el.card.info.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
