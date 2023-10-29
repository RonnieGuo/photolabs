import React, { useRef } from "react";

import PhotoFavButton from "../components/PhotoFavButton";
import PhotoList from "../components/PhotoList";
import "../styles/PhotoDetailsModal.scss";

const PhotoDetailsModal = (props) => {
  const {
    isFavourite,
    favouritePhotos,
    addFavourite,
    delFavourite,
    openModal,
    closeModal,
    photoId,
    photos,
  } = props;

  const photo = photos.find((photo) => photo.id === photoId);

  // scroll to top of modal
  const modalRef = useRef(null);
  const scrollToTop = () => {
    if (modalRef.current) {
      modalRef.current.scrollTo(0, 0);
    }
  };

  return (
    <div ref={modalRef} className="photo-details-modal">
      <button
        className="photo-details-modal--close-button"
        onClick={closeModal}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_428_287)">
            <path
              d="M14.0625 3.9375L3.9375 14.0625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0625 14.0625L3.9375 3.9375"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="photo-details-modal--images">
        <PhotoFavButton
          photoId={photoId}
          favouritePhotos={favouritePhotos}
          isFavourite={favouritePhotos.includes(photoId)}
          addFavourite={addFavourite}
          delFavourite={delFavourite}
        />
        <img
          className="photo-details-modal--image"
          src={photo.urls.full}
          alt={`${photo.user.username}'s photo`}
        />
      <div className="photo-details-modal--user-details">
        <img className="photo-details-modal--user-profile" src={photo.user.profile} alt="" />
        <div className="photo-details-modal--user-info">
          {photo.user.username}
          <div className="photo-details-modal--user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
      </div>
      <header className="photo-details-modal--header">Similar Photos</header>
      <PhotoList
        photos={photo.similar_photos}
        favouritePhotos={favouritePhotos}
        addFavourite={addFavourite}
        delFavourite={delFavourite}
        openModal={openModal}
        scrollToTop={scrollToTop}
      />
    </div>
  );
};

export default PhotoDetailsModal;