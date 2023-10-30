import { useEffect, useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  SET_MODAL_FALSE: "SET_MODAL_FALSE",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

const initialState = {
  count: 0,
  modal: false,
  imgs: {},
  favouriteList: [],
  photoData: [],
  topicData: [],
  photoByTopic: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favouriteList: [...state.favouriteList, action.payload], count: state.count + 1 };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favouriteList: state.favouriteList.filter((photoId) => Number(photoId) !== Number(action.payload)),
        count: state.count - 1,
      };

    case ACTIONS.SET_MODAL_FALSE:
      return { ...state, modal: false };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, imgs: action.payload, modal: !state.modal };

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoByTopic: action.payload };

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url, actionType) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch({ type: actionType, payload: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch both photo and topic data
    fetchData("api/photos", ACTIONS.SET_PHOTO_DATA);
    fetchData("api/topics", ACTIONS.SET_TOPIC_DATA);
  }, []);

  const topicClicked = (ID) => {
    const topic = `api/topics/photos/${ID}`;
    fetchData(topic, ACTIONS.SET_PHOTO_DATA);
  };

  const setPhotoSelected = (images) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: images });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.SET_MODAL_FALSE });
  };

  const toggleFavourite = (id) => {
    if (state.favouriteList.includes(id)) {
      return dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id });
    }
    return dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id });
  };

  return {
    ...state,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    toggleFavourite,
    topicClicked,
  };
};

export default useApplicationData;
