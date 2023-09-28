import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = ({
  topics,
  favorites,
  toggleFavorite,
  getPhotosByTopic,
  photos,
  openModal,
}) => (
  <div className="home-route">
    <TopNavigationBar
      topics={topics}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      getPhotosByTopic={getPhotosByTopic}
    />
    <PhotoList
      photos={photos}
      openModal={openModal}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
    />
  </div>
);

export default HomeRoute;
