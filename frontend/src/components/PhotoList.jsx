import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const {
    photos,
    count,
    imageClick,
    modal,
    favouriteList,
    toggleFavourite,
  } = props;

  return (
    <ul className="photo-list">
      {photos.map((element) => (
        <PhotoListItem
          count={count}
          key={element.id}
          id={element.id}
          img={element.urls.regular}
          profile={element.user.profile}
          city={element.location.city}
          country={element.location.country}
          username={element.user.name}
          imageClick={imageClick}
          modal={modal}
          element={element}
          favouriteList={favouriteList}
          toggleFavourite={toggleFavourite}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
