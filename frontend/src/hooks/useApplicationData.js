import { useReducer } from 'react';

const initialState = {
  favorites: [],
  showModal: false,
  selectedPhoto: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const newFavorites = state.favorites.includes(action.id)
        ? state.favorites.filter((favorite) => favorite !== action.id)
        : [...state.favorites, action.id];
      return { ...state, favorites: newFavorites };

    case 'CLOSE_MODAL':
      return { ...state, showModal: false };

    case 'SET_SELECTED_PHOTO':
      return { ...state, selectedPhoto: action.photo, showModal: true };

    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorite = (id) => {
    dispatch({ type: 'TOGGLE_FAVORITE', id });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const setSelectedPhoto = (photo) => {
    dispatch({ type: 'SET_SELECTED_PHOTO', photo });
  };

  const setShowModal = (showModal) => {
    dispatch({ type: 'SET_SHOW_MODAL', showModal });
  };

  return {
    favorites: state.favorites,
    showModal: state.showModal,
    selectedPhoto: state.selectedPhoto,
    toggleFavorite,
    closeModal,
    setSelectedPhoto,
    setShowModal,
  };
};

export default useApplicationData;
