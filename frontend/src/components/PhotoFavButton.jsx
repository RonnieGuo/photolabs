import React from "react";
import FavBadge from "./FavBadge";
import FavIcon from "./FavIcon"; 
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({
  photoId,
  favouritePhotos,
  isFavourite,
  addFavourite,
  delFavourite,
}) => {

  const toggleFavourite = () => {
    if (isFavourite) {
      delFavourite(photoId);
    } else {
      addFavourite(photoId);
    }
  };

  return (
    <div className="photo-list--fav-icon" onClick={toggleFavourite}>
      <div className="photo-list--fav-icon-svg">
        {isFavourite ? (
          <FavBadge favouritePhotos={favouritePhotos} isPhoto={true} />
        ) : (
          <FavIcon />
        )}
      </div>
    </div>
  );
};

export default PhotoFavButton;