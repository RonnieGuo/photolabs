import React, { useState } from "react";

import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    openModal,
    favouritePhotos,
    addFavourite,
    delFavourite,
    selectedTopic,
    setSelectedTopic,
    closeModal
  } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favouritePhotos={favouritePhotos}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        closeModal={closeModal}
      />
      <PhotoList
        photos={photos}
        favouritePhotos={favouritePhotos}
        addFavourite={addFavourite}
        delFavourite={delFavourite}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;