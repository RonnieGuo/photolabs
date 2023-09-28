import React from 'react';
import '../styles/TopNavigationBar.scss';
import "../styles/TopicList.scss";
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, isFavPhotoExist, updatePhotosByTopics }) => {
  const handleLogoClick = () => {
    // Handle clicking the logo, for example, returning to the default view.
    updatePhotosByTopics(false);
  };

  return (
    <div className="top-nav-bar">
      {/* Logo */}
      <span className="top-nav-bar__logo" onClick={handleLogoClick}>
        PhotoLabs
      </span>

      {/* Topic List */}
      <TopicList topics={topics} updatePhotosByTopics={updatePhotosByTopics} />

      {/* Favorites Badge */}
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
