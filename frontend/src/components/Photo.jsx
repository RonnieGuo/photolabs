import React from "react";
import "../styles/Photo.scss";
import PhotoFavButton from "./PhotoFavButton";

const Photo = (props) => {
  const {
    count,
    favouriteList,
    toggleFavourite,
    id,
    img,
    profile,
    username,
    city,
    country,
  } = props;

  return (
    <li className="modal_photo-list__photo-item">
      <div className="modal_photo-list__user-image">
        <PhotoFavButton
          count={count}
          favouriteList={favouriteList}
          toggleFavourite={toggleFavourite}
          id={id}
        />
        <img src={img} alt={username} />
      </div>
      <div className="modal_photo-list__user-details">
        <img src={profile} alt={username} className="modal_photo-list__user-profile" />
        <div className="modal_photo-list__user-info">
          <div>{username}</div>
          <div className="modal_photo-list__user-location">
            {city}, {country}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Photo;
