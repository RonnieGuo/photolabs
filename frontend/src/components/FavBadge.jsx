import React from "react";
import FavIcon from "./FavIcon";

const FavBadge = ({ count }) => {
  return (
    <div className="fav-badge">
      <FavIcon selected={true} displayAlert={count > 0} />
    </div>
  );
};

export default FavBadge;
