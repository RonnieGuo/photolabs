import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import Photo from "components/Photo";
import PhotoList from "components/PhotoList";

// Component for diplaying photodetails modal
const PhotoDetailsModal = (props) => {
  const photolist = Object.values(props.imgs.similar_photos);

  return (
    <div className="photo-details-modal">
      <button
        onClick={props.closeModal}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__image">
        <Photo
          id={props.imgs.id}
          img={props.imgs.urls.regular}
          profile={props.imgs.user.profile}
          username={props.imgs.user.name}
          city={props.imgs.location.country}
          country={props.imgs.location.country}
          favouriteList={props.favouriteList}
          toggleFavourite={props.toggleFavourite}
        />
      </div>

      <div className="related-photo-topic">
        <h3>Related Photos</h3>
      </div>
      <PhotoList
        photos={photolist}
        favouriteList={props.favouriteList}
        toggleFavourite={props.toggleFavourite}
      />
    </div>
  );
};

export default PhotoDetailsModal;