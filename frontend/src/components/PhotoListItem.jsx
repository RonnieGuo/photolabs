import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    id,
    img,
    favouriteList,
    toggleFavourite,
    imageClick,
    element,
    profile,
    username,
    city,
    country,
  } = props;

  return (
    <ol className="photo-list__item">
      <PhotoFavButton
        favouriteList={favouriteList}
        toggleFavourite={toggleFavourite}
        id={id}
      />
      <img
        src={img}
        alt=""
        className="photo-list__image"
        onClick={() => imageClick(element)}
      />
      <div className="photo-list__user-details">
        <img src={profile} alt="" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <div>{username}</div>
          <div className="photo-list__user-location">
            {city}, {country}
          </div>
        </div>
      </div>
    </ol>
  );
};

export default PhotoListItem;
