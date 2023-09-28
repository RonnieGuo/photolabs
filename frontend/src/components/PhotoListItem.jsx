import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({
  id,
  imageSource,
  username,
  profile,
  city,
  country,
  setSelectedPhoto,
  setShowModal,
  toggleFavorite,
}) => {
  const openModal = () => {
    setSelectedPhoto(id);
    setShowModal(true);
  };

  return (
    <div className="photo-list__container">
      <div className="photo-list__item">
        <PhotoFavButton photoId={id} toggleFavorite={toggleFavorite} />
        <img
          onClick={openModal}
          src={imageSource}
          alt={username}
          className="photo-list__image"
        />
        <div className='photo-list__user-details'>
          <img className='photo-list__user-profile' src={profile} alt={username} />
          <div className='photo-list__user-info'>
            {username}
            <p className='photo-list__user-location'>
              {city}, {country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

PhotoListItem.defaultProps = {
  id: '1',
  location: {
    city: 'Montreal',
    country: 'Canada',
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: 'Joe Example',
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

export default PhotoListItem;
