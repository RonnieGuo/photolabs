import React, { useEffect, useState } from "react";
import "./App.scss";
import "./styles/HomeRoute.scss";
import HomeRoute from "./routes/HomeRoute";
import useApplicationData from "./hooks/useApplicationData";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import mockPhotos from './mocks/photos';
import mockTopics from './mocks/topics';

const App = () => {
  const { favorites, showModal, selectedPhoto, addToFavourites, toggleFavorite, setShowModal } = useApplicationData();

  const [photos, setPhotos] = useState(mockPhotos);
  const [topics, setTopics] = useState(mockTopics);

  const handleTopicClick = (topicId) => {
    if (topicId) {
      fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setPhotos(data);
        })
        .catch((error) => {
          console.error("Error fetching photos:", error);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTopics(data);
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  return (
    <div className="App">
      <HomeRoute
        handleTopicClick={handleTopicClick}
        photos={photos}
        topics={topics}
        openModal={setShowModal}
        closeModal={() => setShowModal(false)}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
      {showModal && (
        <PhotoDetailsModal
          photos={photos}
          selectedPhoto={selectedPhoto}
          closeModal={() => setShowModal(false)}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      )}
    </div>
  );
};

export default App;
