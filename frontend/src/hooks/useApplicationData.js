import { useEffect, useReducer } from "react";

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  SET_MODAL_FALSE: "SET_MODAL_FALSE",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

// the initial state for the usereduce hook
const initialState = {
  count: 0,
  modal: false,
  imgs: {},
  favouriteList: [],
  photoData: [],
  topicData: [],
  photoByTopic: [],
};

// reducer function for handling different states
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favouriteList: [...state.favouriteList, action.payload],
        count: state.count + 1,
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favouriteList: state.favouriteList.filter(
          (photoId) => Number(photoId) !== Number(action.payload)
        ),
        count: state.count - 1,
      };
    case ACTIONS.SET_MODAL_FALSE:
      return {
        ...state,
        modal: false,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        imgs: action.payload,
        modal: !state.modal,
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoByTopic: action.payload,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

// useApplication reducerhook component
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    // using promise all for fetching both photo and topic data from API
    Promise.all([
      fetch("api/photos").then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }),
      fetch("api/topics").then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }),
    ])
      .then(([photoData, topicData]) => {
        // dipatch for both topic and photo
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const topicClicked = (ID) => {
    let topic;
    topic = `api/topics/photos/${ID}`;

    fetch(topic)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error("Error Fetching phots based on topics", error);
      });
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
    state,
    count: state.count,
    modal: state.modal,
    imgs: state.imgs,
    favouriteList: state.favouriteList,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    toggleFavourite,
    photoData: state.photoData,
    topicData: state.topicData,
    topicClicked,
    photoByTopic: state.photoByTopic,
  };
};

export default useApplicationData;