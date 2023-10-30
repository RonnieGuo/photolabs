import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

// component for displaying photos in homepage
const PhotoListItem = (props) => {
  return (
    <ol className="photo-list__item">
      <PhotoFavButton
        favouriteList={props.favouriteList}
        toggleFavourite={props.toggleFavourite}
        id={props.id}
      />
      <img
        src={props.img}
        alt=""
        className="photo-list__image"
        onClick={() => props.imageClick(props.element)}
      />
      <div className="photo-list__user-details">
        <img src={props.profile} alt="" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <div>{props.username}</div>
          <div className="photo-list__user-location">
            {props.city}, {props.country}
          </div>
        </div>
      </div>
    </ol>
  );
};

export default PhotoListItem;