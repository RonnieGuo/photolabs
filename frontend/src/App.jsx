import React from "react";

import useApplicationData from "hooks/useApplicationData";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {
  const {
    count,
    modal,
    imgs,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    favouriteList,
    toggleFavourite,
    photoData,
    topicData,
    topicClicked,
    photoByTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        count={count}
        photos={photoData}
        topics={topicData}
        imageClick={setPhotoSelected}
        favouriteList={favouriteList}
        toggleFavourite={toggleFavourite}
        topicClicked={topicClicked}
        photoByTopic={photoByTopic}
      />
      {modal && (
        <PhotoDetailsModal
          imgs={imgs}
          closeModal={onClosePhotoDetailsModal}
          favouriteList={favouriteList}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;