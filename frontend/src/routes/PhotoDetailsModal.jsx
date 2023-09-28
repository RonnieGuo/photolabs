import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ modalPhotoData, updateFavouritedPhotoIDs, updateModalData, photoIDs }) => {
  const { urls, user, location, similar_photos } = modalPhotoData;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={() => updateModalData(false, {})} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <div className="photo-details-modal__images_and_icon">
          <PhotoFavButton
            updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
            item={modalPhotoData}
            photoIDs={photoIDs}
          />
          <img src={urls.regular} className="photo-details-modal__image" alt="main image" />
        </div>
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={user.profile} alt="profile photos" />
          <div>
            <p className="photo-list__user-info">{user.username}</p>
            <p className="photo-list__user-location">{location.city} {location.country}</p>
          </div>
        </div>
        <h1 className="photo-details-modal__header">Similar Photos</h1>

        <div className="photo-details-modal__images">
          <PhotoList
            photos={Object.values(similar_photos)}
            updateFavouritedPhotoIDs={updateFavouritedPhotoIDs}
            photoIDs={photoIDs}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
