import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ id, favouriteList, toggleFavourite }) => {
  const isFavourite = favouriteList.includes(id);

  const handleToggleFavourite = () => {
    toggleFavourite(id);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={handleToggleFavourite}>
          <FavIcon selected={isFavourite} />
        </button>
      </div>
    </div>
  );
};

export default PhotoFavButton;
