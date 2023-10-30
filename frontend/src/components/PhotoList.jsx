import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

// component for rendering photolistitem
const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((element) => {
        return (
          <PhotoListItem
            count={props.count}
            key={element.id}
            id={element.id}
            img={element.urls.regular}
            profile={element.user.profile}
            city={element.location.city}
            country={element.location.country}
            username={element.user.name}
            imageClick={props.imageClick}
            modal={props.modal}
            element={element}
            favouriteList={props.favouriteList}
            toggleFavourite={props.toggleFavourite}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;