import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
  topics,
  isFavPhotoExist,
  updatePhotosByTopics,
  photos,
  handleTopicClick,
  favouriteCount,
  favouritePhotos,
  addToFavourites,
  removeFromFavourites,
}) => {
  return (
    <div className="home-route">
      {/* Top Navigation Bar */}
      <TopNavigation
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        updatePhotosByTopics={updatePhotosByTopics}
      />

      {/* Photos Section */}
      <div className="home-route__photos">
        <h1>Explore Photos</h1>

        {/* Display the favorite count */}
        <div className="home-route__fav-count">
          {favouriteCount > 0 && (
            <span>
              You have {favouriteCount} favorite photo(s).{' '}
              <button onClick={() => updatePhotosByTopics(true)}>View Favorites</button>
            </span>
          )}
        </div>

        {/* Photo List */}
        <PhotoList
          photos={photos}
          handleTopicClick={handleTopicClick}
          topics={topics}
          favouritePhotos={favouritePhotos}
          addToFavourites={addToFavourites}
          removeFromFavourites={removeFromFavourites}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
