import React, { useReducer, useState } from "react";

// Define action types as constants
const SET_TOPICS = "SET_TOPICS";
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";
const SET_SIMILAR_PHOTOS = "SET_SIMILAR_PHOTOS";
const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  similarPhotos: [],
  favouritePhotos: [],
  topicsCategory: { topics: [] },
};

// Define your reducer function
function reducer(state, action) {
  switch (action.type) {
    case SET_TOPICS:
      return {
        ...state,
        topicsCategory: action.payload,
      };
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null,
        similarPhotos: [],
      };
    case SET_SIMILAR_PHOTOS:
      return {
        ...state,
        similarPhotos: action.payload,
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favouritePhotos: [...state.favouritePhotos, action.payload],
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favouritePhotos: state.favouritePhotos.filter(
          (fav) => fav.id !== action.payload.id
        ),
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

// Define your custom hook
export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Define your functions
  const setTopics = (topics) => {
    dispatch({ type: SET_TOPICS, payload: topics });
  };

  const openModal = async (photo) => {
    dispatch({ type: OPEN_MODAL, payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const isFavourite = (photo) => {
    if (!photo) {
      return false;
    }
    return state.favouritePhotos.some((fav) => fav.id === photo.id);
  };

  const addToFavourites = (photo) => {
    dispatch({ type: ADD_TO_FAVOURITES, payload: photo });
  };

  const removeFromFavourites = (photo) => {
    dispatch({ type: REMOVE_FROM_FAVOURITES, payload: photo });
  };

  // Return your custom hook's API
  return {
    setTopics,
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    favouritePhotos: state.favouritePhotos,
    openModal,
    closeModal,
    isFavourite,
    addToFavourites,
    removeFromFavourites,
  };
}
