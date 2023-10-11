import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  OPEN_FAVOURITES: 'OPEN_FAVOURITES',
  CLOSE_FAVOURITES: 'CLOSE_FAVOURITES'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter(
          (photo) => photo.id !== action.payload .id
        )
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload 
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload 
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
        isModalOpen: true
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        isModalOpen: action.payload 
      };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload 
      };
    case ACTIONS.OPEN_FAVOURITES:
      return {
        ...state,
        openFavourites: action.payload 
      };
    case ACTIONS.CLOSE_FAVOURITES:
      return {
        ...state,
        openFavourites: action.payload
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const initialState = {
    favourites: [],
    photoData: [],
    topicData: [],
    selectedPhoto: null,
    isModalOpen: false,
    openFavourites: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photoData:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching topicData:", error);
      });
  }, []);

  const fetchPhotosByTopicId = (id) => {
    fetch(`/api/topics/photos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos by topic id:", error);
      });
  };

  return {
    state,
    dispatch,
    fetchPhotosByTopicId
  };
};

export default useApplicationData;