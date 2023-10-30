import React from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist, count }) => {
  const selected = true;

  return (
    <div className="fav-badge">
      <FavIcon selected={selected} displayAlert={isFavPhotoExist} />
      <div className={count >= 1 ? "notification" : ""}></div>
    </div>
  );
};

export default FavBadge;
