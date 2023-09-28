import React from "react";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  openModal,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
  favoritePhotos,
  handleTopicClick,
}) => {
  const favoriteCount = favoritePhotos.length;

  const toggleFavorite = (photoId) => {
    if (isFavorite(photoId)) {
      removeFromFavorites(photoId);
    } else {
      addToFavorites(photoId);
    }
  };

  return (
    <div className="home-route">
      <div className="nav-bar">
        <TopNavigation
          topics={topics}
          favoriteCount={favoriteCount}
          isFavPhotoExist={favoriteCount > 0}
          favoritePhotos={favoritePhotos}
          photos={photos}
          handleTopicClick={handleTopicClick}
        />
      </div>

      <div className="photo-list">
        {photos ? (
          <PhotoList
            openModal={openModal}
            photos={photos}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default HomeRoute;
