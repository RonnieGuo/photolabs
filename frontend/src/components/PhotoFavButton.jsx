import React from "react";
import FavBadge from "./FavBadge";
import FavIcon from "./FavIcon"; // Import FavIcon directly
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({
  isFavourite,
  addToFavourites,
  removeFromFavourites,
  photo,
}) => {
  const handleFavIconClick = () => {
    if (isFavourite) {
      removeFromFavourites(photo);
    } else {
      addToFavourites(photo);
    }
  };

  // Use conditional rendering for FavBadge and FavIcon
  const FavComponent = isFavourite ? <FavBadge /> : <FavIcon />;

  return (
    <div className="photo-list--fav-icon" onClick={handleFavIconClick}>
      {FavComponent}
    </div>
  );
};

export default PhotoFavButton;
