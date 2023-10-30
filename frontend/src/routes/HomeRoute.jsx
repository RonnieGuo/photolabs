import React, { useState } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";

// Home route for rendering both the top navigation bar and photolist
const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={props.topics}
        count={props.count}
        favouriteList={props.favouriteList}
        topicClicked={props.topicClicked}
        photoByTopic={props.photoByTopic}
      />
      <PhotoList
        count={props.count}
        photos={props.photos}
        imageClick={props.imageClick}
        favouriteList={props.favouriteList}
        toggleFavourite={props.toggleFavourite}
      />
    </div>
  );
};

export default HomeRoute;