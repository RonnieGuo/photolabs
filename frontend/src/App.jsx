import React from "react";
import useApplicationData from "./hooks/useApplicationData";
import TopNavigationBar from "./components/TopNavigationBar";
import PhotoList from "./components/PhotoList";

import "./App.scss";

function App() {
  const {
    topics,
    photos,
    selectedTopic,
    setSelectedTopic,
    openModal,
    closeModal,
    addFavourite,
    delFavourite,
    favouritePhotos,
  } = useApplicationData();

  return (
    <div className="App">
      <TopNavigationBar
        topics={topics}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        closeModal={closeModal}
      />
      <PhotoList
        photos={photos}
        openModal={openModal}
        addFavourite={addFavourite}
        delFavourite={delFavourite}
        favouritePhotos={favouritePhotos}
      />
    </div>
  );
}

export default App;
