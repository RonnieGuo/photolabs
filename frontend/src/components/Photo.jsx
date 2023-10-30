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
    <li className="photo-item">
      <div className="image">
        <PhotoFavButton
          count={count}
          favouriteList={favouriteList}
          toggleFavourite={toggleFavourite}
          id={id}
        />
        <img src={img} alt={username} />
      </div>
      <div className="user-details">
        <img src={profile} alt={username} className="user-profile" />
        <div className="user-info">
          <div>{username}</div>
          <div className="user-location">
            {city}, {country}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Photo;
