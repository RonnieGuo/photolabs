import React from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavIcon from "./FavIcon";
import FavouriteContent from "./FavouriteContent";

const TopNavigation = ({
  favouriteCount,
  favouritePhotos,
  photos,
  handleTopicClick,
  topics,
}) => {
  // Determine if an alert should be displayed based on favouriteCount
  const displayAlert = favouriteCount > 0;

  // Fill color for the favorites badge
  const fill = "#C80000";

  return (
    <div className="top-nav-bar">
      {/* Logo */}
      <span className="top-nav-bar--logo">PhotoLabs</span>

      {/* Topic List */}
      <div className="top-nav-bar--topic-list">
        <TopicList handleTopicClick={handleTopicClick} topics={topics} />
      </div>

      {/* Sidebar for Favorites */}
      <div className="sidebar">
        <FavouriteContent
          favouritePhotos={favouritePhotos}
          photos={photos}
          favouriteCount={favouriteCount}
        />
      </div>

      {/* Favorites Badge */}
      <div className="top-nav-bar--badge">
        {<FavIcon fill={fill} displayAlert={displayAlert} />}
      </div>
    </div>
  );
};

export default TopNavigation;
