import { useState } from 'react';

const useApplicationData = () => {

  const [state, setState] = useState({
    favourites: [],
    selectedPhoto: null,
    isModalOpen: false,
  });

  const updateToFavPhotoIds = (photoData) => {
    const isFav = state.favourites.some((photo) => photo.id === photoData.id);

    if (isFav) {
      setState((prevState) => ({
        ...prevState,
        favourites: prevState.favourites.filter((photo) => photo.id !== photoData.id),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        favourites: [...prevState.favourites, photoData],
      }));
    }
  };

  const setPhotoSelected = (photoData) => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: photoData,
      isModalOpen: true
    }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: null,
      isModalOpen: false,
    }));
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;